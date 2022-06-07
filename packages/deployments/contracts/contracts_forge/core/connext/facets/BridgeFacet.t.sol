// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";

import {XAppConnectionManager, TypeCasts} from "../../../../contracts/nomad-core/contracts/XAppConnectionManager.sol";
import {Home} from "../../../../contracts/nomad-core/contracts/Home.sol";
import {TypedMemView} from "../../../../contracts/nomad-core/libs/TypedMemView.sol";

import {IAavePool} from "../../../../contracts/core/connext/interfaces/IAavePool.sol";
import {IStableSwap} from "../../../../contracts/core/connext/interfaces/IStableSwap.sol";
import {ISponsorVault} from "../../../../contracts/core/connext/interfaces/ISponsorVault.sol";
import {ITokenRegistry} from "../../../../contracts/core/connext/interfaces/ITokenRegistry.sol";
import {TokenRegistry} from "../../../../contracts/core/connext/helpers/TokenRegistry.sol";
import {IBridgeToken} from "../../../../contracts/core/connext/interfaces/IBridgeToken.sol";
import {IWrapped} from "../../../../contracts/core/connext/interfaces/IWrapped.sol";
import {IExecutor} from "../../../../contracts/core/connext/interfaces/IExecutor.sol";
import {Executor} from "../../../../contracts/core/connext/helpers/Executor.sol";
import {ConnextMessage} from "../../../../contracts/core/connext/libraries/ConnextMessage.sol";
import {RelayerFeeMessage} from "../../../../contracts/core/relayer-fee/libraries/RelayerFeeMessage.sol";
import {AssetLogic} from "../../../../contracts/core/connext/libraries/AssetLogic.sol";
import {LibCrossDomainProperty} from "../../../../contracts/core/connext/libraries/LibCrossDomainProperty.sol";
import {CallParams, ExecuteArgs, XCallArgs, PausedFunctions} from "../../../../contracts/core/connext/libraries/LibConnextStorage.sol";
import {LibDiamond} from "../../../../contracts/core/connext/libraries/LibDiamond.sol";
import {BridgeFacet} from "../../../../contracts/core/connext/facets/BridgeFacet.sol";
import {BaseConnextFacet} from "../../../../contracts/core/connext/facets/BaseConnextFacet.sol";
import {TestERC20} from "../../../../contracts/test/TestERC20.sol";
import {PromiseRouter} from "../../../../contracts/core/promise/PromiseRouter.sol";

import "../../../utils/Mock.sol";

import "./FacetHelper.sol";

contract BridgeFacetTest is BridgeFacet, FacetHelper {
  // ============ Libs ============
  using TypedMemView for bytes29;
  using TypedMemView for bytes;
  // ============ Constants ============

  bytes32 constant TEST_MESSAGE = bytes32("test message");

  // ============ Storage ============
  // diamond storage contract owner
  address _ds_owner = address(987654321);

  // executor contract
  address _executor;
  // mock xapp contract
  address _xapp;
  // mock xapp connection manager
  address _xappConnectionManager;
  // mock home
  address _xappHome;
  // mock promise router
  address payable _promiseRouter;
  // mock callback contract
  address _callback;

  // native asset wrapper
  address _wrapper;

  // default origin sender
  address _originSender = address(4);

  // destination remote handler id
  bytes32 _remote = bytes32("remote");

  // domains
  address _originFacet = address(111222);
  address _destinationFacet = address(222111);

  // aave pool details
  address _aavePool;

  // relayer fee
  uint256 _relayerFee = 0.1 ether;

  // default amount
  uint256 _amount = 1.1 ether;

  // default nonce on xcall
  uint256 _nonce = 1;

  // default recovery address
  address constant _recovery = address(121212);

  // default CallParams
  CallParams _params =
    CallParams(
      address(11), // to
      bytes(""), // callData
      _originDomain, // origin domain
      _destinationDomain, // destination domain
      _recovery, // recovery address
      address(0), // callback
      0, // callbackFee
      false, // forceSlow
      false // receiveLocal
    );

  // ============ Test set up ============
  function setUp() public {
    // Deploy any needed contracts.
    utils_deployContracts();

    setDefaults();

    // Set up asset context. By default, local is the adopted asset - the one the 'user'
    // is using - and is representational (meaning canonically it belongs to another chain).
    utils_setupAsset(true, false);

    // Promise router mock calls.
    vm.mockCall(_promiseRouter, abi.encodeWithSelector(PromiseRouter.send.selector), abi.encode());
    vm.mockCall(_promiseRouter, abi.encodeWithSelector(PromiseRouter.initCallbackFee.selector), abi.encode());

    // Other context setup: configuration, storage, etc.
    s.approvedRelayers[address(this)] = true;
    s.maxRoutersPerTransfer = 5;
    s._routerOwnershipRenounced = true;

    vm.prank(address(this));
    LibDiamond.DiamondStorage storage ds = LibDiamond.diamondStorage();
    ds.contractOwner = _ds_owner;

    // NOTE: Currently, the only time we check for the domain in params to match the contract's
    // domain is within the `xcall` method - so it's safe to set the contract domain to be origin.
    s.domain = _originDomain;
    s.remotes[_destinationDomain] = _remote;
  }

  // ============ Utils ============
  // Utils used in the following tests (as well as setup).

  // Used in set up for deploying any needed peripheral contracts.
  function utils_deployContracts() public {
    // Deploy the adopted token.
    _adopted = address(new TestERC20());
    // Deploy the local token.
    _local = address(new TestERC20());
    // Deploy the canonical token.
    _canonical = address(new TestERC20());
    _canonicalTokenId = bytes32(abi.encodePacked(_canonical));
    // Deploy an executor.
    _executor = address(new Executor(address(this)));
    s.executor = IExecutor(_executor);
    // Deploy a mock xapp consumer.
    _xapp = address(new MockXApp());

    // Deploy a mock home.
    _xappHome = address(new MockHome());
    // Deploy a mock xapp connection manager.
    _xappConnectionManager = address(new MockXAppConnectionManager(MockHome(_xappHome)));
    s.xAppConnectionManager = XAppConnectionManager(_xappConnectionManager);
    // Deploy the promise router.
    s.promiseRouter = new MockPromiseRouter();
    _promiseRouter = payable(s.promiseRouter);

    // Deploy wrapper for native asset.
    s.wrapper = IWrapped(new MockWrapper());
    _wrapper = address(s.wrapper);
    vm.mockCall(_wrapper, abi.encodeWithSelector(IBridgeToken.name.selector), abi.encode("TestERC20"));
    vm.mockCall(_wrapper, abi.encodeWithSelector(IBridgeToken.symbol.selector), abi.encode("TEST"));
    vm.mockCall(_wrapper, abi.encodeWithSelector(IBridgeToken.decimals.selector), abi.encode(18));

    // Deploy a mock callback.
    _callback = address(new MockCallback());

    // setup aave pool
    _aavePool = address(new MockPool());
    s.aavePool = _aavePool;
  }

  // Sets the storage and token registry return results.
  function utils_setupAsset(bool localIsAdopted, bool onCanonical) public {
    if (onCanonical) {
      _local = _canonical;
      _canonicalDomain = _originDomain;
    } else {
      // If the local is already set to the canonical (i.e. from some defaults)
      // redeploy
      if (_local == _canonical) {
        _local = address(new TestERC20());
      }
      _canonicalDomain = _destinationDomain;
    }
    if (localIsAdopted) {
      _adopted = _local;
      _stableSwap = address(0);
    } else {
      // If the adopted is already set as the local, redeploy
      if (_adopted == _local) {
        _adopted = address(new TestERC20());
      }
      if (_stableSwap == address(0)) {
        _stableSwap = address(5555555555555555555);
      }
    }
    // token registry should always return the canonical
    vm.mockCall(
      _tokenRegistry,
      abi.encodeWithSelector(ITokenRegistry.getTokenId.selector),
      abi.encode(_canonicalDomain, _canonicalTokenId)
    );

    // if you are not on canonical domain, ensure the local origin returns false
    // (indicates whether token should be burned or not)
    vm.mockCall(
      _tokenRegistry,
      abi.encodeWithSelector(ITokenRegistry.isLocalOrigin.selector, _local),
      abi.encode(onCanonical)
    );

    // ensure local token should always return the local token wrt current domain
    vm.mockCall(_tokenRegistry, abi.encodeWithSelector(ITokenRegistry.ensureLocalToken.selector), abi.encode(_local));

    // Ensure token registry is always returned properly
    vm.mockCall(_tokenRegistry, abi.encodeWithSelector(ITokenRegistry.getLocalAddress.selector), abi.encode(_local));

    // Setup the storage variables
    s.adoptedToCanonical[_adopted] = ConnextMessage.TokenId(_canonicalDomain, _canonicalTokenId);
    s.adoptedToLocalPools[_canonicalTokenId] = IStableSwap(_stableSwap);
    s.canonicalToAdopted[_canonicalTokenId] = _adopted;

    // // Log stored vars
    // console.log("setup asset:");
    // console.log("- adopted:", _adopted);
    // console.log("- local:", _local);
    // console.log("- canonical:", _canonical);
    // console.log("- stableSwap:", _stableSwap);
    // console.log("- wrapper:", address(s.wrapper));
    // console.log("- isLocalOrigin", onCanonical);
  }

  function utils_setupNative(bool localIsAdopted, bool onCanonical) public {
    // When you are using the native asset:
    // - canonical asset will always be the wrapper
    // - adopted asset will always be the wrapper
    // - the local asset may or may not be the wrapper
    if (onCanonical) {
      // The wrapper is canonical when on the canonical domain
      // only
      _canonical = address(s.wrapper);
      _canonicalTokenId = bytes32(abi.encodePacked(_canonical));
    } else {
      // If localIsAdopted, then the local asset is the wrapper
      if (localIsAdopted) {
        // this is like if madETH is adopted on cronos. in this case,
        // the wrapper must also have the `detailsHash()` functionality
        // this is handled in the other utility function (see `utils_formatMessage`)
        _local = address(new TestERC20());
        _adopted = _local;
      } else {
        // The adopted asset is the wrapper, local is bridge token
        _adopted = address(s.wrapper);
      }
    }
    utils_setupAsset(localIsAdopted, onCanonical);
  }

  // Meant to mimic the corresponding `_getTransferId` method in the BridgeFacet contract.
  function utils_getTransferIdFromXCallArgs(
    XCallArgs memory _args,
    address sender,
    bytes32 canonicalId,
    uint32 canonicalDomain
  ) public view returns (bytes32) {
    return keccak256(abi.encode(s.nonce, _args.params, sender, canonicalId, canonicalDomain, _args.amount));
  }

  // Meant to mimic the corresponding `_getTransferId` method in the BridgeFacet contract.
  function utils_getTransferIdFromExecuteArgs(ExecuteArgs memory _args) public returns (bytes32) {
    return
      keccak256(
        abi.encode(_args.nonce, _args.params, _args.originSender, _canonicalTokenId, _canonicalDomain, _args.amount)
      );
  }

  // Makes some mock xcall arguments using params set in storage.
  function utils_makeXCallArgs() public returns (bytes32, XCallArgs memory) {
    // get args
    XCallArgs memory args = XCallArgs(
      _params,
      _adopted == address(s.wrapper) ? address(0) : _adopted, // transactingAssetId : could be adopted, local, or wrapped.
      _amount,
      _relayerFee
    );
    // generate transfer id
    bytes32 transferId = utils_getTransferIdFromXCallArgs(args, _originSender, _canonicalTokenId, _canonicalDomain);

    return (transferId, args);
  }

  function utils_makeXCallArgs(address transactingAssetId) public returns (bytes32, XCallArgs memory) {
    // get args
    XCallArgs memory args = XCallArgs(
      _params,
      transactingAssetId, // transactingAssetId : could be adopted, local, or wrapped.
      _amount,
      _relayerFee
    );
    // generate transfer id
    bytes32 transferId = utils_getTransferIdFromXCallArgs(args, _originSender, _canonicalTokenId, _canonicalDomain);

    return (transferId, args);
  }

  // Makes some mock router signatures.
  function utils_makeRouterSignatures(
    bytes32 _transferId,
    address[] memory _routers,
    uint256[] memory _keys
  ) public returns (bytes[] memory) {
    uint256 pathLen = _routers.length;
    bytes[] memory signatures = new bytes[](pathLen);
    if (pathLen == 0) {
      return signatures;
    }
    bytes32 preImage = keccak256(abi.encode(_transferId, pathLen));
    bytes32 toSign = ECDSA.toEthSignedMessageHash(preImage);
    for (uint256 i; i < pathLen; i++) {
      (uint8 v, bytes32 r, bytes32 _s) = vm.sign(_keys[i], toSign);
      signatures[i] = abi.encodePacked(r, _s, v);
    }
    return signatures;
  }

  // Makes some mock execute arguments with given router/key pairs.
  function utils_makeExecuteArgs(address[] memory routers, uint256[] memory keys)
    public
    returns (bytes32, ExecuteArgs memory)
  {
    // get args
    bytes[] memory empty = new bytes[](0);
    ExecuteArgs memory args = ExecuteArgs(_params, _local, routers, empty, _relayerFee, _amount, _nonce, _originSender);
    // generate transfer id
    bytes32 transferId = utils_getTransferIdFromExecuteArgs(args);
    // generate router signatures if applicable
    if (routers.length > 0) {
      args.routerSignatures = utils_makeRouterSignatures(transferId, routers, keys);
    }
    return (transferId, args);
  }

  // Make execute args, fill in a number of router/key pairs.
  // Specifically input 0 to make execute arguments with no routers/keys for slow liq simulation.
  function utils_makeExecuteArgs(uint256 num) public returns (bytes32, ExecuteArgs memory) {
    if (num == 0) {
      address[] memory routers;
      uint256[] memory keys;
      return utils_makeExecuteArgs(routers, keys);
    }
    address[] memory routers = new address[](num);
    uint256[] memory keys = new uint256[](num);
    for (uint256 i; i < num; i++) {
      routers[i] = vm.addr(777 + i);
      keys[i] = 777 + i;
    }
    return utils_makeExecuteArgs(routers, keys);
  }

  // Intended to mock the fast transfer amount calculation in the target contract.
  function utils_getFastTransferAmount(uint256 _amount) public returns (uint256) {
    // This is the method used internally to get the amount of tokens to transfer after liquidity
    // fees are taken.
    return (_amount * s.LIQUIDITY_FEE_NUMERATOR) / s.LIQUIDITY_FEE_DENOMINATOR;
  }

  // Mimics the xcall message formatting. Reduced functionality : won't burn any tokens, for example.
  function utils_formatMessage(
    XCallArgs memory _args,
    address _asset,
    bytes32 _transferId,
    uint256 _amount
  ) public returns (bytes memory) {
    IBridgeToken token = IBridgeToken(_asset);

    bytes32 detailsHash;
    if (s.tokenRegistry.isLocalOrigin(_asset)) {
      detailsHash = ConnextMessage.formatDetailsHash(token.name(), token.symbol(), token.decimals());
    } else {
      detailsHash = token.detailsHash();
    }

    bytes29 action = ConnextMessage.formatTransfer(
      TypeCasts.addressToBytes32(_args.params.to),
      _amount,
      detailsHash,
      _transferId
    );
    (uint32 canonicalDomain, bytes32 canonicalId) = s.tokenRegistry.getTokenId(_asset);
    bytes29 tokenId = ConnextMessage.formatTokenId(canonicalDomain, canonicalId);

    return ConnextMessage.formatMessage(tokenId, action);
  }

  // Wraps reconcile in order to enable externalizing the call.
  function utils_wrappedReconcile(uint32 origin, bytes memory message) external {
    _reconcile(origin, message);
  }

  // ============== Helpers ==================
  // Helpers used for executing target methods with given params that assert expected base behavior.
  function helpers_setupSuccessfulXcallCallAssertions(
    bytes32 transferId,
    XCallArgs memory args,
    uint256 bridgedAmt,
    bool isNative,
    bool shouldSwap
  ) public {
    // bridged is either local or canonical, depending on domain xcall originates on
    address bridged = _canonicalDomain == args.params.originDomain ? _canonical : _local;
    BridgeFacet.XCalledEventArgs memory eventArgs = BridgeFacet.XCalledEventArgs({
      transactingAssetId: isNative ? address(s.wrapper) : args.transactingAssetId,
      amount: args.amount,
      bridgedAmt: bridgedAmt,
      bridged: bridged
    });
    bytes memory message = utils_formatMessage(args, bridged, transferId, bridgedAmt);
    vm.expectEmit(true, true, true, true);
    emit XCalled(transferId, args, eventArgs, s.nonce, message, _originSender);

    // assert swap if expected
    if (shouldSwap && bridgedAmt > 0) {
      // Transacting asset shouldve been approved for amount in
      vm.expectCall(
        eventArgs.transactingAssetId,
        abi.encodeWithSelector(IERC20.approve.selector, _stableSwap, args.amount)
      );

      // swapExact on pool should have been called
      vm.expectCall(
        _stableSwap,
        abi.encodeWithSelector(IStableSwap.swapExact.selector, args.amount, eventArgs.transactingAssetId, _local)
      );
    }

    if (args.params.callbackFee > 0) {
      // Assert that CallbackFee would be paid by the user.
      vm.expectCall(
        _promiseRouter,
        args.params.callbackFee,
        abi.encodeWithSelector(PromiseRouter.initCallbackFee.selector, transferId)
      );
    }
    // Assert dispatch call
    vm.expectCall(
      _xappHome,
      0,
      abi.encodeWithSelector(Home.dispatch.selector, args.params.destinationDomain, _remote, message)
    );

    // if the token is a representation token, ensure that burn is called
    if (bridged != _canonical && bridgedAmt > 0) {
      vm.expectCall(_local, abi.encodeWithSelector(TestERC20.burn.selector, address(this), bridgedAmt));
    }
  }

  // Calls `xcall` with given args and handles standard assertions.
  function helpers_xcallAndAssert(
    bytes32 transferId,
    XCallArgs memory args,
    uint256 dealTokens,
    uint256 bridgedAmt,
    bytes4 expectedError,
    bool shouldSwap
  ) public {
    bool isNative = args.transactingAssetId == address(0);
    bool shouldSucceed = keccak256(abi.encode(expectedError)) == keccak256(abi.encode(bytes4("")));
    bool isCanonical = _canonicalDomain == args.params.originDomain;

    // Deal the user required eth for transfer.
    vm.deal(_originSender, 100 ether);

    uint256 initialUserBalance;
    uint256 initialContractBalance;
    if (isNative) {
      initialUserBalance = payable(_originSender).balance;
      initialContractBalance = payable(address(this)).balance;
    } else {
      TestERC20 tokenIn = TestERC20(args.transactingAssetId);
      TestERC20 localToken = TestERC20(_local);

      // Mint the specified amount of tokens for the user.
      tokenIn.mint(_originSender, dealTokens);

      initialUserBalance = tokenIn.balanceOf(_originSender);
      initialContractBalance = localToken.balanceOf(address(this));

      // Approve the target contract to spend the specified amount of tokens.
      vm.prank(_originSender);
      tokenIn.approve(address(this), dealTokens);
    }

    if (shouldSwap) {
      // Setup the expected swap mock (adopted <> local)
      vm.mockCall(_stableSwap, abi.encodeWithSelector(IStableSwap.swapExact.selector), abi.encode(bridgedAmt, _local));
    }

    assertEq(s.relayerFees[transferId], 0);

    if (shouldSucceed) {
      helpers_setupSuccessfulXcallCallAssertions(transferId, args, bridgedAmt, isNative, shouldSwap);
    } else {
      vm.expectRevert(expectedError);
    }

    uint256 fees = args.relayerFee + args.params.callbackFee;
    vm.prank(_originSender);
    this.xcall{value: isNative ? fees + args.amount : fees}(args);

    if (shouldSucceed) {
      if (isNative) {
        // Should have custodied the relayer fee, sent any callback fee to the promise router, and deposited the
        // amount into the wrapper contract.
        assertEq(payable(address(this)).balance, initialContractBalance + args.relayerFee);
      } else {
        // User should have been debited fees... but also tx cost?
        // assertEq(payable(_originSender).balance, initialUserBalance - fees);

        // Check that the user has been debited the correct amount of tokens.
        assertEq(TestERC20(args.transactingAssetId).balanceOf(_originSender), initialUserBalance - args.amount);
        console.log("verified user balance changed");

        // Check that the contract has been credited the correct amount of tokens.
        // NOTE: Because the tokens are a representational local asset, they are burnt. The contract
        // should NOT be holding any additional tokens after xcall completes.
        if (isCanonical) {
          // This should be a canonical asset transfer
          assertEq(TestERC20(_canonical).balanceOf(address(this)), initialContractBalance + bridgedAmt);
        } else {
          // NOTE: Normally the adopted asset would be swapped into the local asset and then
          // the local asset would be burned. Because the swap increases the contracts balance
          // the prod difference in balance is net 0. However, because the swap here is mocked,
          // when a swap occurrs no balance increase of local happens (i.e. if swap needed, the
          // balance will decrease by bridgedAmt / what is burned)
          uint256 expected = args.transactingAssetId == _local
            ? initialContractBalance
            : initialContractBalance - bridgedAmt;
          console.log("initial", initialContractBalance);
          console.log("amount in", args.amount);
          console.log("bridged amount", bridgedAmt);
          console.log("shouldSwap", shouldSwap);
          console.log("transactingAsset", args.transactingAssetId);
          console.log("_local", _local);
          console.log("final", TestERC20(_local).balanceOf(address(this)));
          // if (shouldSwap && args.transactingAssetId == _local) {
          //   // config shortcut, using adopted == local (because should swap out of local)
          //   // user sent in adopted funds, were not transferred out in swap due to above
          //   // also sent funds in
          //   expected += args.amount;
          // }
          assertEq(TestERC20(_local).balanceOf(address(this)), expected);
          console.log("verified contract balance changed");
        }
      }
      // Should have updated relayer fees mapping.
      assertEq(this.relayerFees(transferId), args.relayerFee);
      console.log("verified relayer fee");

      if (args.params.callbackFee > 0) {
        // TODO: For some reason, balance isn't changing. Perhaps the vm.mockCall prevents this?
        // CallbackFee should be delivered to the PromiseRouter.
        // assertEq(_promiseRouter.balance, _params.callbackFee);
      }
    } else {
      // Should have reverted.
      assertEq(this.relayerFees(transferId), 0);
    }
  }

  // Shortcut for the main fn. Generates args within this method.
  function helpers_xcallAndAssert(
    bytes4 expectedError,
    uint256 bridged,
    bool swaps
  ) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    uint256 dealTokens = (args.transactingAssetId == address(0)) ? 0 : args.amount;
    helpers_xcallAndAssert(transferId, args, dealTokens, bridged, expectedError, swaps);
  }

  function helpers_xcallAndAssert(bytes4 expectedError) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    uint256 dealTokens = (args.transactingAssetId == address(0)) ? 0 : args.amount;
    helpers_xcallAndAssert(transferId, args, dealTokens, 0, expectedError, false);
  }

  // Shortcut for the above fn, with no expected error.
  function helpers_xcallAndAssert(uint256 bridged, bool swaps) public {
    helpers_xcallAndAssert(bytes4(""), bridged, swaps);
  }

  // Shortcut for the above fn, no expected error, specified transacting asset
  function helpers_xcallAndAssert(
    uint256 bridged,
    address transacting,
    bool swaps
  ) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs(transacting);
    uint256 dealTokens = transacting == address(0) ? 0 : args.amount;
    helpers_xcallAndAssert(transferId, args, dealTokens, bridged, bytes4(""), swaps);
  }

  // Shortcut for the main fn.
  function helpers_xcallAndAssert(
    uint256 dealTokens,
    uint256 bridged,
    bool swaps
  ) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    helpers_xcallAndAssert(transferId, args, dealTokens, bridged, bytes4(""), swaps);
  }

  struct ExecuteBalances {
    uint256 bridge;
    uint256 to;
    uint256 executor;
  }

  struct ExecuteTestInputs {
    uint256 expectedAmt;
    uint256 routerAmt;
    address token;
    bool callsExternal;
    bool externalCallSucceeds;
    bool shouldSwap; // Whether the `to` address should receive the tokens.
    bool isSlow;
  }

  function utils_getExecuteBalances(IERC20 asset, address _to) public returns (ExecuteBalances memory) {
    uint256 bridge = IERC20(_local).balanceOf(address(this));
    uint256 to = address(asset) == address(s.wrapper) ? payable(_to).balance : asset.balanceOf(_to);
    uint256 executor = address(asset) == address(s.wrapper) ? payable(_executor).balance : asset.balanceOf(_executor);
    return ExecuteBalances(bridge, to, executor);
  }

  function helpers_setupExecuteAssertions(
    bytes32 transferId,
    ExecuteArgs memory _args,
    ExecuteTestInputs memory _inputs
  ) public {
    // ----- register expected calls

    // expected swap
    if (_inputs.shouldSwap) {
      // register expected approval
      vm.expectCall(_local, abi.encodeWithSelector(IERC20.approve.selector, _stableSwap, _inputs.routerAmt));
      // register expected swap amount
      vm.expectCall(
        _stableSwap,
        abi.encodeWithSelector(IStableSwap.swapExact.selector, _inputs.routerAmt, _local, _adopted)
      );
    }

    // expected sponsor vault
    if (address(s.sponsorVault) != address(0)) {
      // if it is a fast transfer, then it should reimburse liquidity fees
      if (!_inputs.isSlow) {
        vm.expectCall(
          address(s.sponsorVault),
          abi.encodeWithSelector(
            ISponsorVault.reimburseLiquidityFees.selector,
            _inputs.token,
            _args.amount,
            _args.params.to
          )
        );
      }
      // always reimburses relayer fees
      vm.expectCall(
        address(s.sponsorVault),
        abi.encodeWithSelector(
          ISponsorVault.reimburseRelayerFees.selector,
          _originDomain,
          _args.params.to,
          _args.relayerFee
        )
      );
    }

    // expected transfer out of contract
    if (_args.amount > 0) {
      if (_inputs.token == address(s.wrapper)) {
        // wrapper withdrawal
        vm.expectCall(_inputs.token, abi.encodeWithSelector(IWrapped.withdraw.selector, _inputs.expectedAmt));
      } else {
        // token transfer
        vm.expectCall(
          _inputs.token,
          abi.encodeWithSelector(
            IERC20.transfer.selector,
            _inputs.callsExternal ? _executor : _args.params.to,
            _inputs.expectedAmt
          )
        );
      }
    }

    // expected executor call
    if (_inputs.callsExternal) {
      {
        bytes memory properties = _inputs.isSlow
          ? LibCrossDomainProperty.formatDomainAndSenderBytes(_originDomain, _originSender)
          : LibCrossDomainProperty.EMPTY_BYTES;
        vm.expectCall(
          _executor,
          abi.encodeWithSelector(
            IExecutor.execute.selector,
            IExecutor.ExecutorArgs(
              transferId,
              _inputs.expectedAmt,
              _args.params.to,
              _args.params.recovery,
              _inputs.token,
              properties,
              _args.params.callData
            )
          )
        );
      }
    }

    // expected promise router call
    if (_args.params.callback != address(0)) {
      vm.expectCall(
        _promiseRouter,
        abi.encodeWithSelector(
          PromiseRouter.send.selector,
          _originDomain,
          transferId,
          _args.params.callback,
          _inputs.externalCallSucceeds,
          bytes("")
        )
      );
    }
  }

  // Calls `execute` on the target method with the given args and asserts expected behavior.
  function helpers_executeAndAssert(
    bytes32 transferId,
    ExecuteArgs memory _args,
    uint256 expectedAmt, // amount out of swap
    bool callsExternal,
    bool externalCallSucceeds,
    bool shouldSwap // Whether the `to` address should receive the tokens.
  ) public {
    // get pre-execute liquidity in local
    uint256 pathLen = _args.routers.length;
    bool isSlow = pathLen == 0;
    uint256[] memory prevLiquidity = new uint256[](pathLen);
    for (uint256 i; i < pathLen; i++) {
      prevLiquidity[i] = s.routerBalances[_args.routers[i]][_local];
    }

    // get pre-execute balance here in local
    IERC20 token = IERC20(shouldSwap ? _adopted : _local);
    ExecuteBalances memory prevBalances = utils_getExecuteBalances(token, _args.params.to);

    // execute
    // expected amount is impacted by (1) fast liquidity fees (2) slippage
    // router debited amount in local is only impacted by fast liquidity
    uint256 routerAmt = isSlow ? _args.amount : utils_getFastTransferAmount(_args.amount);

    // setup pool mock if needed
    if (shouldSwap) {
      vm.mockCall(
        _stableSwap,
        abi.encodeWithSelector(IStableSwap.swapExact.selector),
        abi.encode(expectedAmt, _adopted)
      );
    }

    if (address(token) == address(s.wrapper)) {
      vm.mockCall(address(token), abi.encodeWithSelector(IWrapped.withdraw.selector), abi.encode(true));
    }

    // setup execute mock
    vm.mockCall(
      _executor,
      abi.encodeWithSelector(Executor.execute.selector),
      abi.encode(externalCallSucceeds, bytes(""))
    );

    // register expected calls
    helpers_setupExecuteAssertions(
      transferId,
      _args,
      ExecuteTestInputs(expectedAmt, routerAmt, address(token), callsExternal, externalCallSucceeds, shouldSwap, isSlow)
    );

    // register expected emit event
    vm.expectEmit(true, true, false, true);
    emit Executed(transferId, _args.params.to, _args, address(token), expectedAmt, address(this));
    // make call
    this.execute(_args);

    // check local balance
    {
      if (pathLen > 0) {
        // should decrement router balance
        uint256 decrement = routerAmt / pathLen;
        for (uint256 i; i < pathLen; i++) {
          assertEq(s.routerBalances[_args.routers[i]][_args.local], prevLiquidity[i] - decrement);
        }
      }
    }

    ExecuteBalances memory finalBalances = utils_getExecuteBalances(token, _args.params.to);

    // NOTE: the balance of the bridge *should* always decrement in local, however that depends on
    // the token executing the `swap` / `withdraw` call when a swap is needed (which we have as mocked).
    // Instead, assert the swap functions on the pool were called correctly
    if (!shouldSwap && address(token) != address(s.wrapper)) {
      assertEq(finalBalances.bridge, prevBalances.bridge - routerAmt);
    }

    if (callsExternal) {
      // should increment balance of executor
      // should NOT increment balance of to
      // NOTE: recovery address testing should be done in Executor.t.sol
      // as such, executor balance should *always* increment
      assertEq(finalBalances.executor, prevBalances.executor + expectedAmt);
      assertEq(token.balanceOf(_params.to), prevBalances.to);
    } else {
      // should have incremented balance of `to`
      // should NOT increment balance of executor
      assertEq(finalBalances.to, prevBalances.to + expectedAmt);
      assertEq(finalBalances.executor, prevBalances.executor);
    }

    // should mark the transfer as executed
    assertEq(s.transferRelayer[transferId], address(this));

    // should have assigned transfer as routed
    address[] memory savedRouters = this.routedTransfers(transferId);
    for (uint256 i; i < savedRouters.length; i++) {
      assertEq(savedRouters[i], _args.routers[i]);
    }
  }

  function buildMessage(bytes32 _id) private returns (bytes memory) {
    bytes32 detailsHash = keccak256("test");

    bytes29 action = ConnextMessage.formatTransfer(bytes32(uint256(uint160(_params.to))), _amount, detailsHash, _id);
    bytes29 tokenId = ConnextMessage.formatTokenId(_canonicalDomain, _canonicalTokenId);

    return ConnextMessage.formatMessage(tokenId, action);
  }

  // ============ execute ============
  // Shortcut for above method:
  // - local == adopted
  // - does not call external
  // - calling on non-canonical domain
  function helpers_executeAndAssert(bytes32 transferId, ExecuteArgs memory _args) public {
    uint256 expected = _args.amount;
    if (_args.routers.length > 0) {
      expected = utils_getFastTransferAmount(_args.amount);
    }
    helpers_executeAndAssert(transferId, _args, expected, false, false, false);
  }

  // Shortcut where:
  // - local != adopted
  // - does not call external
  // - calling on noncanonical domain
  function helpers_executeAndAssert(
    bytes32 transferId,
    ExecuteArgs memory _args,
    uint256 expected,
    bool shouldSwap
  ) public {
    helpers_executeAndAssert(transferId, _args, expected, false, false, shouldSwap);
  }

  // Helper for calling `reconcile` and asserting expected behavior.
  function helpers_reconcileAndAssert(
    bytes32 transferId,
    XCallArgs memory args,
    bytes4 expectedError
  ) public {
    bool isNative = args.transactingAssetId == address(0);
    bool shouldSucceed = keccak256(abi.encode(expectedError)) == keccak256(abi.encode(bytes4("")));

    // Derive message from xcall arguments.
    bytes memory message;
    {
      BridgeFacet.XCalledEventArgs memory eventArgs = BridgeFacet.XCalledEventArgs({
        transactingAssetId: isNative ? address(s.wrapper) : args.transactingAssetId,
        amount: args.amount,
        bridgedAmt: args.amount,
        bridged: _local
      });
      message = utils_formatMessage(args, _local, transferId, args.amount);
    }

    uint256[] memory routerBalances = new uint256[](s.routedTransfers[transferId].length);
    for (uint256 i = 0; i < s.routedTransfers[transferId].length; i++) {
      // Warming up the slot in order to make gas estimates more accurate to appropriate conditions.
      s.routerBalances[s.routedTransfers[transferId][i]][_local] = 1 ether;
      routerBalances[i] = 1 ether;
    }

    // Get pre-reconcile balances.
    uint256 prevBalance;
    if (isNative) {
      prevBalance = payable(address(this)).balance;
    } else {
      prevBalance = IERC20(_local).balanceOf(address(this));
    }

    if (shouldSucceed) {
      // check that the mint is called properly
      if (_local != _canonical) {
        vm.expectCall(_local, abi.encodeWithSelector(TestERC20.mint.selector, address(this), args.amount));
      }
      vm.expectEmit(true, true, true, true);
      emit Reconciled(transferId, _originDomain, s.routedTransfers[transferId], _local, args.amount, address(this));
    } else {
      vm.expectRevert(expectedError);
    }

    this.utils_wrappedReconcile(_originDomain, message);

    if (shouldSucceed) {
      assertEq(this.reconciledTransfers(transferId), true);
      address[] memory routers = this.routedTransfers(transferId);
      if (routers.length > 0) {
        // Fast liquidity route. Should have reimbursed routers.
        uint256 routerAmt = args.amount / s.routedTransfers[transferId].length;
        for (uint256 i = 0; i < routers.length; i++) {
          assertEq(s.routerBalances[routers[i]][_local], routerBalances[i] + routerAmt);
        }
      }
    }
  }

  function helpers_reconcileAndAssert(bytes4 expectedError) public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    helpers_reconcileAndAssert(transferId, args, expectedError);
  }

  // Shortcut for above method.
  function helpers_reconcileAndAssert() public {
    helpers_reconcileAndAssert(bytes4(""));
  }

  // ============ Getters ==============

  function test_BridgeFacet_domain_works() public {
    s.domain = 0;
    assertEq(this.domain(), 0);
    s.domain = _destinationDomain;
    assertEq(this.domain(), _destinationDomain);
  }

  function test_BridgeFacet_executor_works() public {
    s.executor = IExecutor(address(0));
    assertEq(address(this.executor()), address(0));
    s.executor = IExecutor(_local);
    assertEq(address(this.executor()), _local);
  }

  function test_BridgeFacet_nonce_works() public {
    s.nonce = 0;
    assertEq(this.nonce(), 0);
    s.nonce = _destinationDomain;
    assertEq(this.nonce(), _destinationDomain);
  }

  function test_BridgeFacet_sponsorVault_works() public {
    s.sponsorVault = ISponsorVault(address(0));
    assertEq(address(this.sponsorVault()), address(0));
    s.sponsorVault = ISponsorVault(_local);
    assertEq(address(this.sponsorVault()), _local);
  }

  function test_BridgeFacet_promiseRouter_works() public {
    s.promiseRouter = PromiseRouter(payable(address(0)));
    assertEq(address(this.promiseRouter()), address(0));
    s.promiseRouter = PromiseRouter(payable(_local));
    assertEq(address(this.promiseRouter()), _local);
  }

  // The rest (relayerFees, routedTransfers, reconciledTransfers) are checked on
  // assertions for xcall / reconcile / execute

  // ============ Admin methods ==============
  // setPromiseRouter
  // FIXME: move to BaseConnextFacet.t.sol
  function test_BridgeFacet__setPromiseRouter_failIfNotOwner() public {
    // constants
    address old = address(123);
    address updated = address(_local);

    // set storage
    s.promiseRouter = PromiseRouter(payable(old));

    // test revert
    vm.prank(_originSender);
    vm.expectRevert(BaseConnextFacet.BaseConnextFacet__onlyOwner_notOwner.selector);
    this.setPromiseRouter(payable(updated));
  }

  function test_BridgeFacet__setPromiseRouter_failIfNoChange() public {
    // constants
    address old = address(123);
    address updated = old;

    // set storage
    s.promiseRouter = PromiseRouter(payable(old));

    // test revert
    vm.prank(LibDiamond.contractOwner());
    vm.expectRevert(BridgeFacet.BridgeFacet__setPromiseRouter_invalidPromiseRouter.selector);
    this.setPromiseRouter(payable(updated));
  }

  function test_BridgeFacet__setPromiseRouter_failIfNotContract() public {
    // constants
    address old = address(123);
    address updated = address(456);

    // set storage
    s.promiseRouter = PromiseRouter(payable(old));

    // test revert
    vm.prank(LibDiamond.contractOwner());
    vm.expectRevert(BridgeFacet.BridgeFacet__setPromiseRouter_invalidPromiseRouter.selector);
    this.setPromiseRouter(payable(updated));
  }

  function test_BridgeFacet__setPromiseRouter_works() public {
    // constants
    address old = address(123);
    address updated = address(_local);

    // set storage
    s.promiseRouter = PromiseRouter(payable(old));

    // test success
    vm.prank(LibDiamond.contractOwner());
    vm.expectEmit(true, true, true, true);
    emit PromiseRouterUpdated(old, updated, LibDiamond.contractOwner());
    this.setPromiseRouter(payable(updated));
    assertEq(address(this.promiseRouter()), updated);
  }

  // setExecutor
  function test_BridgeFacet__setExecutor_failIfNotOwner() public {
    // constants
    address old = address(123);
    address updated = address(_local);

    // set storage
    s.executor = IExecutor(payable(old));

    // test revert
    vm.prank(_originSender);
    vm.expectRevert(BaseConnextFacet.BaseConnextFacet__onlyOwner_notOwner.selector);
    this.setExecutor(payable(updated));
  }

  function test_BridgeFacet__setExecutor_failIfNoChange() public {
    // constants
    address old = address(123);
    address updated = old;

    // set storage
    s.executor = IExecutor(payable(old));

    // test revert
    vm.prank(LibDiamond.contractOwner());
    vm.expectRevert(BridgeFacet.BridgeFacet__setExecutor_invalidExecutor.selector);
    this.setExecutor(payable(updated));
  }

  function test_BridgeFacet__setExecutor_failIfNotContract() public {
    // constants
    address old = address(123);
    address updated = address(456);

    // set storage
    s.executor = IExecutor(payable(old));

    // test revert
    vm.prank(LibDiamond.contractOwner());
    vm.expectRevert(BridgeFacet.BridgeFacet__setExecutor_invalidExecutor.selector);
    this.setExecutor(payable(updated));
  }

  function test_BridgeFacet__setExecutor_works() public {
    // constants
    address old = address(123);
    address updated = address(_local);

    // set storage
    s.executor = IExecutor(payable(old));

    // test revert
    vm.prank(LibDiamond.contractOwner());
    vm.expectEmit(true, true, true, true);
    emit ExecutorUpdated(old, updated, LibDiamond.contractOwner());
    this.setExecutor(payable(updated));
    assertEq(address(this.executor()), updated);
  }

  // setSponsorVault
  function test_BridgeFacet__setSponsorVault_failIfNotOwner() public {
    // constants
    address old = address(123);
    address updated = old;

    // set storage
    s.sponsorVault = ISponsorVault(payable(old));

    // test revert
    vm.prank(_originSender);
    vm.expectRevert(BaseConnextFacet.BaseConnextFacet__onlyOwner_notOwner.selector);
    this.setSponsorVault(payable(updated));
  }

  function test_BridgeFacet__setSponsorVault_failIfNoChange() public {
    // constants
    address old = address(123);
    address updated = old;

    // set storage
    s.sponsorVault = ISponsorVault(payable(old));

    // test revert
    vm.prank(LibDiamond.contractOwner());
    vm.expectRevert(BridgeFacet.BridgeFacet__setSponsorVault_invalidSponsorVault.selector);
    this.setSponsorVault(payable(updated));
  }

  function test_BridgeFacet__setSponsorVault_works() public {
    // constants
    address old = address(123);
    address updated = address(_local);

    // set storage
    s.sponsorVault = ISponsorVault(payable(old));

    // test revert
    vm.prank(LibDiamond.contractOwner());
    vm.expectEmit(true, true, true, true);
    emit SponsorVaultUpdated(old, updated, LibDiamond.contractOwner());
    this.setSponsorVault(payable(updated));
    assertEq(address(this.sponsorVault()), updated);
  }

  // ============ Public methods ==============

  // ============ xcall ============

  // ============ xcall fail cases
  // fails if paused
  // FIXME: move to BaseConnextFacet.t.sol
  function test_BridgeFacet__xcall_failIfPaused() public {
    // require(false, "not tested");
  }

  // fails if origin domain is incorrect
  function test_BridgeFacet__xcall_failIfDomainIncorrect() public {
    _params.originDomain = 999999;
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_wrongDomain.selector);
  }

  // TODO: fails if destination domain does not have an xapp router registered
  // FIXME: this should be tested at the integration level (i.e. when we deploy
  // the contracts via Deployer.sol), or on a facet that asserts this

  // fails if recipient `to` not a valid address (i.e. != address(0))
  function test_BridgeFacet__xcall_failIfNoRecipient() public {
    _params.to = address(0);
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_emptyTo.selector);
  }

  // fails if callback fee > 0 but callback address is not defined
  function test_BridgeFacet__xcall_failIfCallbackFeeButNoContract() public {
    _params.callback = address(0);
    _params.callbackFee = 0.001 ether;
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_nonZeroCallbackFeeForCallback.selector);
  }

  // fails if callback is defined but not a contract
  function test_BridgeFacet__xcall_failIfCallbackNotAContract() public {
    _params.callback = address(42);
    _params.callbackFee = 0.001 ether;
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_callbackNotAContract.selector);
  }

  // fails if asset is not supported (i.e. s.adoptedToCanonical[transactingAssetId].id == bytes32(0) and using non-local)
  function test_BridgeFacet__xcall_failIfAssetNotSupported() public {
    // setup asset with local != adopted, not on canonical domain
    utils_setupAsset(false, false);

    s.adoptedToCanonical[_adopted] = ConnextMessage.TokenId(0, bytes32(0));

    // ensure token registry returns true for local origin
    vm.mockCall(
      address(s.tokenRegistry),
      abi.encodeWithSelector(ITokenRegistry.isLocalOrigin.selector, _adopted),
      abi.encode(true)
    );
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_notSupportedAsset.selector);
  }

  // fails if native asset wrapper is not supported (i.e. s.adoptedToCanonical[transactingAssetId].id == bytes32(0))
  function test_BridgeFacet__xcall_failIfNativeAssetWrapperNotSupported() public {
    utils_setupNative(true, true);
    s.adoptedToCanonical[address(s.wrapper)] = ConnextMessage.TokenId(0, bytes32(0));
    helpers_xcallAndAssert(BridgeFacet.BridgeFacet__xcall_notSupportedAsset.selector);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if native token transfer and amount of native tokens sent is < amount + relayerFee + callbackFee
  function test_BridgeFacet__xcall_failNativeAssetCallbackFeeInsufficient() public {
    vm.deal(_originSender, 100 ether);
    utils_setupNative(true, true);
    _params.callback = _callback;
    _params.callbackFee = 0.01 ether;

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert(AssetLogic.AssetLogic__handleIncomingAsset_notAmount.selector);
    vm.prank(_originSender);
    // Sending only the amount + relayer fee; callbackFee is not covered!
    this.xcall{value: args.relayerFee + args.amount}(args);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if native token transfer and amount of native tokens sent is < amount + relayerFee
  function test_BridgeFacet__xcall_failNativeAssetRelayerFeeInsufficient() public {
    vm.deal(_originSender, 100 ether);
    utils_setupNative(true, true);
    _relayerFee = 0.002 ether;

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert(AssetLogic.AssetLogic__handleIncomingAsset_notAmount.selector);
    vm.prank(_originSender);
    // Sending only the amount; relayer fee is not covered!
    this.xcall{value: args.amount}(args);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if erc20 transfer and eth sent < relayerFee + callbackFee
  function test_BridgeFacet__xcall_failEthWithErc20TransferInsufficient() public {
    utils_setupAsset(true, false);
    vm.deal(_originSender, 100 ether);
    _relayerFee = 0.1 ether;

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert(AssetLogic.AssetLogic__handleIncomingAsset_ethWithErcTransfer.selector);
    vm.prank(_originSender);
    // Sending insufficent eth to cover relayer fee.
    this.xcall{value: 0.08 ether}(args);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if erc20 transfer and eth sent > relayerFee + callbackFee
  function test_BridgeFacet__xcall_failEthWithErc20TransferUnnecessary() public {
    vm.deal(_originSender, 100 ether);
    _relayerFee = 0.1 ether;

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert(AssetLogic.AssetLogic__handleIncomingAsset_ethWithErcTransfer.selector);
    vm.prank(_originSender);
    // Sending too much eth.
    this.xcall{value: 1 ether}(args);
  }

  // FIXME: move to AssetLogic.t.sol
  // fails if user has insufficient tokens
  function test_BridgeFacet__xcall_failInsufficientErc20Tokens() public {
    _amount = 10.1 ether;
    TestERC20 localToken = TestERC20(_local);
    localToken.mint(_originSender, 10 ether);
    vm.prank(_originSender);
    localToken.approve(address(this), 10.1 ether);

    vm.deal(_originSender, 100 ether);

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert("ERC20: transfer amount exceeds balance");
    vm.prank(_originSender);
    this.xcall{value: args.relayerFee}(args);
  }

  // fails if user has not set enough allowance
  function test_BridgeFacet__xcall_failInsufficientErc20Approval() public {
    _amount = 10.1 ether;
    TestERC20 localToken = TestERC20(_local);
    localToken.mint(_originSender, 10.1 ether);
    vm.prank(_originSender);
    localToken.approve(address(this), 10 ether);

    vm.deal(_originSender, 100 ether);

    (, XCallArgs memory args) = utils_makeXCallArgs();

    vm.expectRevert("ERC20: transfer amount exceeds allowance");
    vm.prank(_originSender);
    this.xcall{value: args.relayerFee}(args);
  }

  // ============ xcall success cases
  // asset cases:
  // - works on remote domain
  //   - transferring native (local == adopted)
  //   - transferring native (local != adopted)
  //   - transferring asset (local == adopted)
  //   - transferring asset (local != adopted)

  // - works on cannonical domain
  //   - transferring native (local == adopted)
  //   - transferring asset (local == adopted)
  // canonincal token transfer on canonical domain
  function test_BridgeFacet__xcall_canonicalTokenTransferWorks() public {
    utils_setupAsset(true, true);
    helpers_xcallAndAssert(_amount, false);
  }

  // local token transfer on non-canonical domain (local != adopted)
  function test_BridgeFacet__xcall_localTokenTransferWorksWithAdopted() public {
    uint256 bridged = (_amount * 9995) / _liquidityFeeDenominator;
    utils_setupAsset(false, false);
    helpers_xcallAndAssert(bridged, true);
  }

  // local token transfer on non-canonical domain, local != adopted, send in local
  // (i.e. i should be able to xcall with madEth on optimism)
  function test_BridgeFacet__xcall_localTokenTransferWorksWhenNotAdopted() public {
    // local is not adopted, not on canonical domain, sending in local
    utils_setupAsset(false, false);
    s.adoptedToCanonical[_local] = ConnextMessage.TokenId(0, bytes32(0));
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    vm.mockCall(
      _tokenRegistry,
      abi.encodeWithSelector(ITokenRegistry.isLocalOrigin.selector, _local),
      abi.encode(false)
    );
    args.transactingAssetId = _local;
    helpers_xcallAndAssert(transferId, args, args.amount, args.amount, bytes4(""), false);
  }

  // local token transfer on non-canonical domain (local == adopted)
  function test_BridgeFacet__xcall_localTokenTransferWorksWithoutAdopted() public {
    utils_setupAsset(true, false);
    helpers_xcallAndAssert(_amount, false);
  }

  // native asset transfer on canonical domain
  function test_BridgeFacet__xcall_nativeTransferWorksOnCanonical() public {
    utils_setupNative(true, true);
    helpers_xcallAndAssert(_amount, false);
  }

  // native asset transfer on non-canonical domain with local == adopted
  // i.e. get ETH on arbitrum from cronos
  // adopted = address(madETH cronos)
  // local = address(madETH on cronos)
  // canonical = address(mainnet wrapper)
  function test_BridgeFacet__xcall_nativeTransferWorksOnRemote() public {
    utils_setupNative(true, false);
    helpers_xcallAndAssert(_amount, _local, false);
  }

  // native asset transfer on non-canonical domain with local != adopted
  // i.e. native arbitrum eth transfer to matic weth
  // adopted = address(arbitrum wrapper)
  // canonical = address(eth wrapper)
  // local = address(madETH on arbitrum)
  function test_BridgeFacet__xcall_nativeTransferWorksOnRemoteWithAdopted() public {
    utils_setupNative(false, false);
    helpers_xcallAndAssert(_amount, address(0), true);
  }

  // adopted asset transfer
  function test_BridgeFacet__xcall_adoptedTransferWorks() public {
    utils_setupAsset(false, false);
    uint256 bridged = (_amount * 9995) / _liquidityFeeDenominator;
    helpers_xcallAndAssert(bridged, true);
  }

  // FIXME: should work with fee on transfer tokens
  function test_BridgeFacet__xcall_feeOnTransferWorks() public {
    // require(false, "not tested");
  }

  // should work with positive slippage
  function test_BridgeFacet__xcall_worksWithPositiveSlippage() public {
    utils_setupAsset(false, false);
    uint256 bridged = (_amount * 10005) / _liquidityFeeDenominator;
    helpers_xcallAndAssert(bridged, true);
  }

  // should work with 0 value
  function test_BridgeFacet__xcall_worksWithoutValue() public {
    _amount = 0;
    helpers_xcallAndAssert(0, true);
  }

  // should send promise router callback fee
  function test_BridgeFacet__xcall_shouldHandleCallbackFee() public {
    _params.callback = _callback;
    _params.callbackFee = 0.02 ether;
    helpers_xcallAndAssert(_amount, false);
  }

  // works if relayer fee is set to 0
  function test_BridgeFacet__xcall_zeroRelayerFeeWorks() public {
    _relayerFee = 0;
    helpers_xcallAndAssert(_amount, false);
  }

  // works with callback fee set to 0
  function test_BridgeFacet__xcall_zeroCallbackFeesWorks() public {
    _params.callbackFee = 0;
    helpers_xcallAndAssert(_amount, false);
  }

  // FIXME: move to BaseConnextFacet.t.sol
  // works if swap isnt required and swaps are paused
  function test_BridgeFacet__xcall_worksIfNoSwapAndSwapPaused() public {
    // require(false, "not tested");
  }

  // =========== handle / reconcile ==========
  // NOTE: modifier tests happen in BaseConnext.t.sol. Below are the reconcile (internal fn)
  // unit tests

  // ============ reconcile fail cases

  // should not process invalid messages
  function test_BridgeFacet__reconcile_invalidMessage() public {
    bytes memory _message = bytes("");
    vm.expectRevert(bytes("Validity assertion failed"));
    _reconcile(_originDomain, _message);
  }

  // fails if action is not transfer
  function test_BridgeFacet__reconcile_invalidTransfer() public {
    bytes29 tokenId = ConnextMessage.formatTokenId(_canonicalDomain, _canonicalTokenId);
    bytes29 action = abi
      .encodePacked(ConnextMessage.Types.Message, bytes32("recip"), uint256(100), bytes32("details"), bytes32("id"))
      .ref(0)
      .castTo(uint40(ConnextMessage.Types.Message));
    bytes29[] memory _views = new bytes29[](2);
    _views[0] = tokenId;
    _views[1] = action;
    bytes memory _message = TypedMemView.join(_views);
    vm.expectRevert(BridgeFacet.BridgeFacet__reconcile_invalidAction.selector);
    _reconcile(_originDomain, _message);
  }

  // fails if already reconciled (s.reconciledTransfers[transferId] = true)
  function test_BridgeFacet__reconcile_failIfAlreadyReconciled() public {
    utils_setupAsset(true, false);
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    s.reconciledTransfers[transferId] = true;
    helpers_reconcileAndAssert(transferId, args, BridgeFacet.BridgeFacet__reconcile_alreadyReconciled.selector);
  }

  // ============ reconcile success cases
  // works with local representational tokens (remote origin, so they will be minted)
  function test_BridgeFacet__reconcile_worksWithLocal() public {
    utils_setupAsset(true, false);
    helpers_reconcileAndAssert();
  }

  function test_BridgeFacet__reconcile_worksWithCanonical() public {
    utils_setupAsset(true, true);
    helpers_reconcileAndAssert();
  }

  // funds contract when pre-execute (slow liquidity route)
  function test_BridgeFacet__reconcile_worksPreExecute() public {
    utils_setupAsset(true, false);
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    delete s.routedTransfers[transferId];

    helpers_reconcileAndAssert(transferId, args, bytes4(""));
  }

  // funds router when post-execute (fast liquidity route)
  function test_BridgeFacet__reconcile_fastLiquiditySingleRouterWorks() public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    s.routedTransfers[transferId] = [address(42)];
    helpers_reconcileAndAssert(transferId, args, bytes4(""));
  }

  // funds routers when post-execute multipath (fast liquidity route)
  function test_BridgeFacet__reconcile_fastLiquidityMultipathWorks() public {
    (bytes32 transferId, XCallArgs memory args) = utils_makeXCallArgs();
    s.routedTransfers[transferId] = [address(42), address(43), address(44), address(45)];
    helpers_reconcileAndAssert(transferId, args, bytes4(""));
  }

  // ============ execute ============
  // ============ execute fail cases

  // FIXME: move to `BaseConnextFacet.t.sol`
  // should fail if bridging paused
  function test_BridgeFacet__execute_failIfBridgingPaused() public {
    // set context
    s._paused = PausedFunctions.Bridge;

    // get args
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // expect failure
    vm.expectRevert(BaseConnextFacet.BaseConnextFacet__whenBridgeNotPaused_bridgePaused.selector);
    this.execute(args);
  }

  // FIXME: move to `BaseConnextFacet.t.sol`
  // should fail if all paused
  function test_BridgeFacet__execute_failIfAllPaused() public {
    // set context
    s._paused = PausedFunctions.All;

    // get args
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // expect failure
    vm.expectRevert(BaseConnextFacet.BaseConnextFacet__whenBridgeNotPaused_bridgePaused.selector);
    this.execute(args);
  }

  // FIXME: move to `BaseConnextFacet.t.sol`
  // should fail if all swap paused && needs swap
  function test_BridgeFacet__execute_failIfSwapPaused() public {
    // setup asset context (use local == adopted)
    address adopted = address(11111111111111111);
    s.adoptedToCanonical[adopted] = ConnextMessage.TokenId(_canonicalDomain, _canonicalTokenId);
    s.adoptedToLocalPools[_canonicalTokenId] = IStableSwap(address(0));
    s.canonicalToAdopted[_canonicalTokenId] = adopted;
    vm.mockCall(_tokenRegistry, abi.encodeWithSelector(ITokenRegistry.getLocalAddress.selector), abi.encode(adopted));

    // set context
    s._paused = PausedFunctions.Swap;

    // get args
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // set liquidity context
    for (uint256 i; i < args.routers.length; i++) {
      s.routerBalances[args.routers[i]][args.local] += 10 ether;
    }

    // expect failure
    vm.expectRevert(AssetLogic.AssetLogic__swapFromLocalAssetIfNeeded_swapPaused.selector);
    this.execute(args);
  }

  // should fail if msg.sender is not an approved relayer
  function test_BridgeFacet__execute_failIfRelayerNotApproved() public {
    // set context
    s.approvedRelayers[address(this)] = false;

    // get args
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // expect failure
    vm.expectRevert(BridgeFacet.BridgeFacet__execute_unapprovedRelayer.selector);
    this.execute(args);
  }

  // multipath: should fail if pathLength > maxRouters
  function test_BridgeFacet__execute_failIfPathLengthGreaterThanMaxRouters() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(s.maxRoutersPerTransfer + 1);

    for (uint256 i; i < args.routers.length; i++) {
      s.routerBalances[args.routers[i]][args.local] += 10 ether;
    }

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_maxRoutersExceeded.selector);
    this.execute(args);
  }

  // should fail if it is a slow transfer (forceSlow = true) and not reconciled
  function test_BridgeFacet__execute_failIfForceSlowAndNotReconciled() public {
    _params.forceSlow = true;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(0);

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notReconciled.selector);
    this.execute(args);
  }

  // should fail if it is a slow transfer (forceSlow = true) and we try to execute with routers
  function test_BridgeFacet__execute_failIfForceSlowAndRoutersSet() public {
    _params.forceSlow = true;

    // Routers providing liquidity implies this is a fast-liquidity transfer. If we're forcing slow,
    // this should fail.
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(2);

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notReconciled.selector);
    this.execute(args);
  }

  // should fail if no routers were passed in and not reconciled
  function test_BridgeFacet__execute_failIfNoRoutersAndNotReconciled() public {
    // Setting no routers in the execute call means that the transfer must already be reconciled.
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(0);

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notReconciled.selector);
    this.execute(args);
  }

  // should fail if the router is not approved and ownership is not renounced
  function test_BridgeFacet__execute_failIfRouterNotApproved() public {
    s._routerOwnershipRenounced = false;

    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = false;

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notSupportedRouter.selector);
    this.execute(args);
  }

  // should fail if the router signature is invalid
  function test_BridgeFacet__execute_failIfSignatureInvalid() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    // Make invalid args based on (slightly) altered params.
    _params.originDomain = 1001;
    (, ExecuteArgs memory invalidArgs) = utils_makeExecuteArgs(4);
    // The signature of the last router in the group will be invalid.
    args.routerSignatures[0] = invalidArgs.routerSignatures[0];

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_invalidRouterSignature.selector);
    this.execute(args);
  }

  // multipath: should fail if any 1 router's signature is invalid
  function test_BridgeFacet__execute_failIfAnySignatureInvalid() public {
    // Using multipath; this should fail if any 1 router signature is invalid.
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(4);

    for (uint256 i; i < args.routers.length; i++) {
      s.routerBalances[args.routers[i]][args.local] += 10 ether;
    }

    // Make invalid args based on (slightly) altered params.
    _params.originDomain = 1001;
    (, ExecuteArgs memory invalidArgs) = utils_makeExecuteArgs(4);
    // The signature of the last router in the group will be invalid.
    args.routerSignatures[3] = invalidArgs.routerSignatures[3];

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_invalidRouterSignature.selector);
    this.execute(args);
  }

  // should fail if it was already executed (s.transferRelayer[transferId] != address(0))
  function test_BridgeFacet__execute_failIfAlreadyExecuted() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);
    s.transferRelayer[transferId] = address(this);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    vm.expectRevert(BridgeFacet.BridgeFacet__execute_alreadyExecuted.selector);
    this.execute(args);
  }

  // should fail if the router does not have sufficient tokens
  function test_BridgeFacet__execute_failIfRouterHasInsufficientFunds() public {
    _amount = 5 ether;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(2);

    s.routerBalances[args.routers[0]][args.local] = 1.5 ether;

    vm.expectRevert(stdError.arithmeticError);
    this.execute(args);
  }

  // multipath: should fail if any 1 router has insufficient tokens
  function test_BridgeFacet__execute_failIfAnyRouterHasInsufficientFunds() public {
    _amount = 5 ether;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(s.maxRoutersPerTransfer);

    uint256 routerAmountSent = _amount / args.routers.length; // The amount each individual router will send.

    // Set the first router's balance to be (slightly) less than the amount that they'd need to send.
    s.routerBalances[args.routers[0]][args.local] = routerAmountSent - 0.1 ether;
    for (uint256 i = 1; i < args.routers.length; i++) {
      // The other routers have plenty of funds.
      s.routerBalances[args.routers[i]][args.local] = 50 ether;
    }

    vm.expectRevert(stdError.arithmeticError);
    this.execute(args);
  }

  // should fail if sponsored vault did not fund contract with returned amount
  function test_BridgeFacet__execute_failIfSponsorVaultLied() public {
    (, ExecuteArgs memory args) = utils_makeExecuteArgs(1);
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;
    for (uint256 i = 0; i < args.routers.length; i++) {
      // The other routers have plenty of funds.
      s.routerBalances[args.routers[i]][args.local] = 50 ether;
    }

    // set mock sponsor vault
    address vault = address(123456654321);
    s.sponsorVault = ISponsorVault(vault);
    // set change
    vm.mockCall(vault, abi.encodeWithSelector(ISponsorVault.reimburseLiquidityFees.selector), abi.encode(10 ether));

    vm.expectRevert(BridgeFacet.BridgeFacet__handleExecuteTransaction_invalidSponsoredAmount.selector);
    this.execute(args);
  }

  // ============ execute success cases
  // should use slow liquidity if specified (forceSlow = true)
  function test_BridgeFacet__execute_forceSlowWorks() public {
    // set test params
    _params.forceSlow = true;

    // get args
    (bytes32 transferId, ExecuteArgs memory _args) = utils_makeExecuteArgs(0);

    // set reconciled context
    s.reconciledTransfers[transferId] = true;

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    helpers_executeAndAssert(transferId, _args);
  }

  // should use the local asset if specified (receiveLocal = true)
  function test_BridgeFacet__execute_receiveLocalWorks() public {
    _params.receiveLocal = true;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    // set asset context (local != adopted)
    utils_setupAsset(false, false);

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount), false);
  }

  // should work with approved router if router ownership is not renounced
  function test_BridgeFacet__execute_worksWithLocalAsAdopted() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    helpers_executeAndAssert(transferId, args);
  }

  // works when local != adopted
  function test_BridgeFacet__execute_worksWithAdopted() public {
    // set asset context (local != adopted)
    utils_setupAsset(false, false);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount), true);
  }

  // works when local != adopted, should work with +ve slippage
  function test_BridgeFacet__execute_worksWithPositiveSlippage() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;

    // set asset context (local != adopted)
    utils_setupAsset(false, false);

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount) + 1 ether, true);
  }

  // works when local != adopted, should work with -ve slippage
  function test_BridgeFacet__execute_worksWithNegativeSlippage() public {
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;

    // set asset context (local != adopted)
    utils_setupAsset(false, false);

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount) - 0.01 ether, true);
  }

  // works when on canonical domain
  function test_BridgeFacet__execute_worksOnCanonical() public {
    // set asset context (local == adopted)
    utils_setupAsset(true, true);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;

    helpers_executeAndAssert(transferId, args);
  }

  // should work when adopted asset is native asset and on canonical
  // (adopted == wrapper)
  function test_BridgeFacet__execute_worksWithNativeOnCanonical() public {
    // set asset context (local == adopted)
    utils_setupNative(true, true);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;

    helpers_executeAndAssert(transferId, args);
  }

  // should work when adopted asset is native asset and on remote
  // (adopted == wrapper)
  function test_BridgeFacet__execute_worksWithNativeOnRemote() public {
    // set asset context (local != adopted)
    utils_setupNative(false, false);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = true;

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount), true);
  }

  // should work with unapproved router if router ownership is renounced
  function test_BridgeFacet__execute_worksWithUnapprovedIfNoWhitelist() public {
    s._routerOwnershipRenounced = true;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;
    s.routerPermissionInfo.approvedRouters[args.routers[0]] = false;

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    helpers_executeAndAssert(transferId, args);
  }

  // should work with 0 value
  function test_BridgeFacet__execute_worksWith0Value() public {
    _amount = 0;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    helpers_executeAndAssert(transferId, args);
  }

  // should work if no sponsor vault set
  function test_BridgeFacet__execute_worksWithoutVault() public {
    s.sponsorVault = ISponsorVault(address(0));

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);
    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    helpers_executeAndAssert(transferId, args);
  }

  // should sponsor if fast liquidity is used and sponsor vault set
  function test_BridgeFacet__execute_worksWithSponsorLiquidity() public {
    // setup vault
    uint256 vaultAmount = 10000;
    MockSponsorVault vault = new MockSponsorVault(vaultAmount);
    s.sponsorVault = vault;

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);
    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount) + vaultAmount, false);
  }

  // should sponsor relayer fee in slow liquidity
  function test_BridgeFacet__execute_sponsorsRelayersSlow() public {
    // set test vault
    uint256 vaultAmount = 10000;
    MockSponsorVault vault = new MockSponsorVault(vaultAmount);
    s.sponsorVault = vault;

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    // get args
    (bytes32 transferId, ExecuteArgs memory _args) = utils_makeExecuteArgs(0);

    // set reconciled context
    s.reconciledTransfers[transferId] = true;

    helpers_executeAndAssert(transferId, _args);
  }

  // should work without calldata
  function test_BridgeFacet__execute_noCalldataWorks() public {
    _params.callData = bytes("");
    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    // With no calldata set, this method call should just send funds directly to the user.
    helpers_executeAndAssert(transferId, args);
  }

  // should work with successful calldata and using fast liquidity
  function test_BridgeFacet__execute_successfulCalldata() public {
    // Set the args.to to the mock xapp address, and args.callData to the `fulfill` fn.
    _params.callData = abi.encodeWithSelector(MockXApp.fulfill.selector, _local, TEST_MESSAGE);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount), true, true, false);
  }

  // should work with failing calldata : contract call failed
  function test_BridgeFacet__execute_failingCalldata() public {
    // Set the args.to to the mock xapp address, and args.callData to the `fail` fn.
    _params.callData = abi.encodeWithSelector(MockXApp.fail.selector);
    _params.to = _xapp;

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount), true, false, false);
  }

  // should work with a callback
  function test_BridgeFacet__execute_worksWithCallback() public {
    // set asset context (local == adopted)
    utils_setupAsset(true, false);

    _params.callback = address(123456654321);
    // Set the args.to to the mock xapp address, and args.callData to the `fulfill` fn.
    _params.callData = abi.encodeWithSelector(MockXApp.fulfill.selector, _local, TEST_MESSAGE);

    (bytes32 transferId, ExecuteArgs memory args) = utils_makeExecuteArgs(1);

    s.routerBalances[args.routers[0]][args.local] += 10 ether;

    helpers_executeAndAssert(transferId, args, utils_getFastTransferAmount(args.amount), true, true, false);
  }

  // should work with unapproved router if router-whitelist ownership renouncedcanonicalId

  // ============ execute fail with aave portals
  function test_BridgeFacet__execute_failsIfNoLiquidityAndAaveNotEnabled() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = utils_makeExecuteArgs(1);

    // set liquidity context
    for (uint256 i; i < _args.routers.length; i++) {
      s.routerBalances[_args.routers[i]][_args.local] = 0 ether;
    }

    // set aave not enabled
    s.aavePool = address(0);

    vm.expectRevert(stdError.arithmeticError);
    this.execute(_args);
  }

  function test_BridgeFacet__execute_failsIfRouterNotApprovedForPortal() public {
    _amount = 5 ether;

    (bytes32 _id, ExecuteArgs memory _args) = utils_makeExecuteArgs(1);

    s.routerBalances[_args.routers[0]][_args.local] = 4.5 ether;

    // set aave enabled
    s.aavePool = _aavePool;

    vm.expectRevert(abi.encodeWithSelector(BridgeFacet.BridgeFacet__execute_notApprovedForPortals.selector));
    this.execute(_args);
  }

  // ============ execute success with aave portal
  function test_BridgeFacet__execute_worksWithAave() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = utils_makeExecuteArgs(1);

    // get fast liquidity amount
    uint256 userAmount = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;

    // set liquidity to 0
    s.routerBalances[_args.routers[0]][_args.local] = 0;

    // set approval
    s.routerPermissionInfo.approvedForPortalRouters[_args.routers[0]] = true;

    // set aave call checks
    vm.expectCall(
      _aavePool,
      abi.encodeWithSelector(IAavePool.mintUnbacked.selector, _args.local, userAmount, address(this), 0)
    );
    vm.expectCall(
      _aavePool,
      abi.encodeWithSelector(IAavePool.withdraw.selector, _args.local, userAmount, address(this))
    );

    vm.expectEmit(true, true, true, true);
    emit AavePortalMintUnbacked(_id, _args.routers[0], _args.local, userAmount);

    this.execute(_args);

    assertEq(s.portalDebt[_id], userAmount);
    assertEq(s.portalFeeDebt[_id], (userAmount * _portalFeeNumerator) / _liquidityFeeDenominator);
    assertEq(s.routerBalances[_args.routers[0]][_args.local], 0);
  }

  // ============ handle ============

  // ============ handle with aave portals
  function test_BridgeFacet__handle_worksWithPortals() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = utils_makeExecuteArgs(1);

    // get the total debt
    uint256 portaled = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;

    // get the portal fee
    uint256 fee = (portaled * _portalFeeNumerator) / _liquidityFeeDenominator;

    // set transfer context (handled by portal, already routed)
    s.portalFeeDebt[_id] = fee;
    s.portalDebt[_id] = portaled;
    s.routedTransfers[_id] = _args.routers;

    // set remote context
    setRemoteRouterContext(_originFacet, _originDomain);

    // construct message
    bytes memory message = buildMessage(_id);

    // get current router balance
    uint256 initLiquidity = s.routerBalances[_args.routers[0]][_local];

    uint256 profit = _args.amount - portaled - fee;
    console.log("initLiquidity", initLiquidity);
    console.log("expected final liq", profit + initLiquidity);

    // set expected calls
    vm.expectCall(_local, abi.encodeWithSelector(IERC20.approve.selector, _aavePool, portaled + fee));

    vm.expectCall(_aavePool, abi.encodeWithSelector(IAavePool.backUnbacked.selector, _local, portaled, fee));

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepayment(_id, _local, portaled, fee);

    this.handle(_params.originDomain, uint32(_nonce), bytes32(abi.encodePacked(_originFacet)), message);

    // verify router liquidity remains unchanged
    assertEq(s.routerBalances[_args.routers[0]][_local], initLiquidity + profit);
  }

  // should credit router if they provided liquidity
  function test_BridgeFacet__handle_creditToRouterIfNotPortalTransfer() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = utils_makeExecuteArgs(1);

    // set routed transfer context
    s.routedTransfers[_id] = _args.routers;
    uint256 initLiquidity = 10 ether;
    s.routerBalances[_args.routers[0]][_local] = initLiquidity;
    setRemoteRouterContext(_destinationFacet, _destinationDomain);

    bytes memory message = buildMessage(_id);

    this.handle(_params.destinationDomain, uint32(_nonce), bytes32(abi.encodePacked(_destinationFacet)), message);

    assertEq(s.routerBalances[_args.routers[0]][_local], initLiquidity + _args.amount);
  }

  // should credit router leftovers from portal repayment from positive slippage of amm
  function test_BridgeFacet__handle_creditToRouterLeftoversFromPortalRepayment() public {
    // setup asset with adopted != local
    utils_setupAsset(false, true);

    // set remote context
    setRemoteRouterContext(_originFacet, _originDomain);

    // get args
    (bytes32 _id, ExecuteArgs memory _args) = utils_makeExecuteArgs(1);

    // get the total debt in adopted
    uint256 portaled = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;
    uint256 fee = (portaled * _portalFeeNumerator) / _liquidityFeeDenominator;
    // set remainder -- comes from positive slippage
    uint256 remainder = 1 gwei;
    uint256 swappedIn = portaled + fee + remainder; // amount it cost on AMM to get repay amt

    console.log("amount", _args.amount);
    console.log("portaled", portaled);
    console.log("fee", fee);
    console.log("swppedIn", swappedIn);

    // set mock + storage (using external pool)
    vm.mockCall(_stableSwap, abi.encodeWithSelector(IStableSwap.swapExactOut.selector), abi.encode(swappedIn));
    vm.mockCall(
      _stableSwap,
      abi.encodeWithSelector(IStableSwap.calculateSwapOutFromAddress.selector),
      abi.encode(swappedIn)
    );
    vm.mockCall(
      _stableSwap,
      abi.encodeWithSelector(IStableSwap.calculateSwapFromAddress.selector),
      abi.encode(_args.amount)
    );

    // get the portal fee
    uint256 gains = (_args.amount - swappedIn) / _args.routers.length;

    // set transfer context (handled by portal, already routed)
    s.portalFeeDebt[_id] = fee;
    s.portalDebt[_id] = portaled;
    s.routedTransfers[_id] = _args.routers;

    bytes memory message = buildMessage(_id);

    uint256 initLiquidity = s.routerBalances[_args.routers[0]][_local];

    console.log("initLiquidity", initLiquidity);
    console.log("gains", gains);
    console.log("initLiquidity + gains", initLiquidity + gains);

    vm.expectCall(_adopted, abi.encodeWithSelector(IERC20.approve.selector, _aavePool, portaled + fee));

    vm.expectCall(_aavePool, abi.encodeWithSelector(IAavePool.backUnbacked.selector, _adopted, portaled, fee));

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepayment(_id, _adopted, portaled, fee);

    this.handle(_params.originDomain, uint32(_nonce), bytes32(abi.encodePacked(_originFacet)), message);

    assertEq(s.routerBalances[_args.routers[0]][_local], initLiquidity + gains);
  }

  // should emit a debt event and repay all principle + as much fee as possible if
  // insufficient _amount on reconcile
  function test_BridgeFacet__handle_emitDebtEventIfPortalPartiallyRepaid() public {
    // scenario:
    // - router used portal to execute a transaction
    // - on handle, router only has enough liquidity to pay the portal principle,
    //   but not the portal fee.
    // - expected debt: portal fee = principle * aaveFee / denom
    //   expected principle: fast = amount * liqFee / denom
    //   expected profit: profit = init + amount - fast - principle

    // get args
    (bytes32 _id, ExecuteArgs memory _args) = utils_makeExecuteArgs(1);

    // get the back unbacked amount
    uint256 portaled = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;
    // set high transfer fee
    s.aavePortalFeeNumerator = 10;
    // get the portal fee
    uint256 portalFee = (portaled * s.aavePortalFeeNumerator) / _liquidityFeeDenominator;

    // set transfer context (handled by portal, already routed)
    s.portalDebt[_id] = portaled;
    s.portalFeeDebt[_id] = portalFee;
    s.routedTransfers[_id] = _args.routers;
    // set remote context
    setRemoteRouterContext(_originFacet, _originDomain);

    // get outstanding debt on fee
    uint256 feePayment = _args.amount - portaled;
    uint256 outstanding = portalFee - feePayment;

    bytes memory message = buildMessage(_id);

    uint256 initLiquidity = s.routerBalances[_args.routers[0]][_local];

    vm.expectCall(_local, abi.encodeWithSelector(IERC20.approve.selector, _aavePool, _args.amount));

    vm.expectCall(_aavePool, abi.encodeWithSelector(IAavePool.backUnbacked.selector, _local, portaled, feePayment));

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepaymentDebt(_id, _local, 0, outstanding);

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepayment(_id, _local, portaled, feePayment);

    vm.expectEmit(true, true, true, true);
    emit Reconciled(_id, _params.originDomain, _args.routers, _adopted, _args.amount, address(this));

    this.handle(_params.originDomain, uint32(_nonce), bytes32(abi.encodePacked(_originFacet)), message);

    assertEq(s.routerBalances[_args.routers[0]][_local], initLiquidity);
    assertEq(s.portalDebt[_id], 0);
    assertEq(s.portalFeeDebt[_id], outstanding);
  }

  function test_BridgeFacet__handle_emitDebtEventIfPortalFeeNotRepaid() public {
    // uint256 feeNum = 5;
    // uint256 feeDenom = 10000;
    // uint256 amount = 1 ether;
    // uint256 feeNotPaid = (amount * feeNum) / feeDenom;
    // bytes32 transferId = keccak256("testTransferId");
    // bytes memory message = buildMessage(address(10), address(adopted), transferId, amount);
    // address[] memory routers = new address[](1);
    // routers[0] = router;
    // TestSetterFacet(address(connextDiamondProxy)).setTestAavePortalsTransfers(transferId, amount);
    // TestSetterFacet(address(connextDiamondProxy)).setTestRoutedTransfers(transferId, routers);
    // uint256 previousRouterBalance = connext.routerBalances(router, address(adopted));
    // vm.expectCall(address(adopted), abi.encodeWithSelector(IERC20.approve.selector, address(aavePool), amount));
    // vm.expectCall(
    //   address(aavePool),
    //   abi.encodeWithSelector(IAavePool.backUnbacked.selector, address(adopted), amount, 0)
    // );
    // vm.expectEmit(true, true, true, true);
    // emit AavePortalRepaymentDebt(transferId, address(adopted), 0, feeNotPaid);
    // vm.expectEmit(true, true, true, true);
    // emit AavePortalRepayment(transferId, address(adopted), amount, 0);
    // connext.handle(originDomain, 0, _destinationFacet, message);
    // assertEq(connext.routerBalances(router, address(adopted)), previousRouterBalance);
  }

  function test_BridgeFacet__handle_notRevertIfPortalRepayFails() public {
    // uint256 feeNum = 5;
    // uint256 feeDenom = 10000;
    // uint256 amount = 1 ether;
    // uint256 fee = (amount * feeNum) / feeDenom;
    // bytes32 transferId = keccak256("testTransferId");
    // bytes memory message = buildMessage(address(10), address(adopted), transferId, amount + fee);
    // address[] memory routers = new address[](1);
    // routers[0] = router;
    // TestSetterFacet(address(connextDiamondProxy)).setTestAavePortalsTransfers(transferId, amount);
    // TestSetterFacet(address(connextDiamondProxy)).setTestRoutedTransfers(transferId, routers);
    // // mock repay to fail
    // aavePool.setRevertCall(true);
    // uint256 previousRouterBalance = connext.routerBalances(router, address(adopted));
    // vm.expectCall(address(adopted), abi.encodeWithSelector(IERC20.approve.selector, address(aavePool), amount + fee));
    // vm.expectCall(
    //   address(aavePool),
    //   abi.encodeWithSelector(IAavePool.backUnbacked.selector, address(adopted), amount, fee)
    // );
    // vm.expectEmit(true, true, true, true);
    // emit AavePortalRepaymentDebt(transferId, address(adopted), amount, fee);
    // connext.handle(originDomain, 0, _destinationFacet, message);
    // // Amount should be credited to the router so it can later repay the debt
    // assertEq(connext.routerBalances(router, address(adopted)), previousRouterBalance + amount + fee);
  }
}
