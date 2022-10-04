/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RelayerFacet,
  RelayerFacetInterface,
} from "../../../../../contracts/core/connext/facets/RelayerFacet";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__addRelayer_alreadyApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__initiateClaim_emptyClaim",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    name: "RelayerFacet__initiateClaim_notRelayer",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__removeRelayer_notApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFacet__setRelayerFeeVault_invalidRelayerFeeVault",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "transferIds",
        type: "bytes32[]",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "transferIds",
        type: "bytes32[]",
      },
    ],
    name: "InitiatedClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldVault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newVault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RelayerFeeVaultUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RelayerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "addRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "approvedRelayers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "relayerFeeVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "removeRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayerFeeVault",
        type: "address",
      },
    ],
    name: "setRelayerFeeVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103d6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806360f0a5ac1461005c57806365bc8582146100715780638cba8b6a14610091578063dd39f00d146100cd578063f01b3e01146100e0575b600080fd5b61006f61006a366004610370565b6100f3565b005b6002546040516001600160a01b0390911681526020015b60405180910390f35b6100bd61009f366004610370565b6001600160a01b03166000908152600f602052604090205460ff1690565b6040519015158152602001610088565b61006f6100db366004610370565b6101b9565b61006f6100ee366004610370565b61027c565b336100fc610342565b6001600160a01b031614610123576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152600f602052604090205460ff1661015c5760405163050d2e7760e21b815260040160405180910390fd5b6001600160a01b0381166000818152600f6020908152604091829020805460ff19169055815192835233908301527f0bdcf1d6f29aa87af8131cc81dcbb295fcf98d71cfcdc79cc5d965317bae1d0a91015b60405180910390a150565b336101c2610342565b6001600160a01b0316146101e9576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0381166000908152600f602052604090205460ff1615610223576040516317a65d9f60e31b815260040160405180910390fd5b6001600160a01b0381166000818152600f6020908152604091829020805460ff19166001179055815192835233908301527fd756b9aee10d6f2c80dc42c5031beb0e0847f6e1d6ba50199bdfc3f0de5cc0cc91016101ae565b33610285610342565b6001600160a01b0316146102ac576040516314e74a2560e21b815260040160405180910390fd5b6002546001600160a01b0390811690821681036102dc5760405163cbb50e4160e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915233908201527f81ccf12657606de24814d9c94f72fc587a18c112856a546a1669fff3cb6cac2b9060600160405180910390a15050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b60006020828403121561038257600080fd5b81356001600160a01b038116811461039957600080fd5b939250505056fea2646970667358221220f6ac4c4bf6a222c9c30c315d117219a411fe3794eeee4ae3de4a8c7da5fc281164736f6c634300080f0033";

type RelayerFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerFacet__factory extends ContractFactory {
  constructor(...args: RelayerFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerFacet> {
    return super.deploy(overrides || {}) as Promise<RelayerFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RelayerFacet {
    return super.attach(address) as RelayerFacet;
  }
  override connect(signer: Signer): RelayerFacet__factory {
    return super.connect(signer) as RelayerFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerFacetInterface {
    return new utils.Interface(_abi) as RelayerFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayerFacet {
    return new Contract(address, _abi, signerOrProvider) as RelayerFacet;
  }
}
