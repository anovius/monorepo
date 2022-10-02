/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ProposedOwnableFacet,
  ProposedOwnableFacetInterface,
} from "../../../../../contracts/core/connext/facets/ProposedOwnableFacet";

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
    name: "ProposedOwnableFacet__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__acceptProposedOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleAdmin_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleRouter_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleWatcher_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeAssetWhitelistRemoval_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeRouterWhitelistRemoval_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetWhitelist_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetWhitelist_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetWhitelist_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterWhitelist_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterWhitelist_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterWhitelist_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__renounceOwnership_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__revokeRole_invalidInput",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AssetWhitelistRemovalProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "renounced",
        type: "bool",
      },
    ],
    name: "AssetWhitelistRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "AssignRoleAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "AssignRoleRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
    ],
    name: "AssignRoleWatcher",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "revokedAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Role",
        name: "revokedRole",
        type: "uint8",
      },
    ],
    name: "RevokeRole",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RouterWhitelistRemovalProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "renounced",
        type: "bool",
      },
    ],
    name: "RouterWhitelistRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetWhitelistRemoved",
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
    name: "assetWhitelistTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "assignRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "assignRoleRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
    ],
    name: "assignRoleWatcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeAssetWhitelistRemoval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeRouterWhitelistRemoval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_role",
        type: "address",
      },
    ],
    name: "queryRole",
    outputs: [
      {
        internalType: "enum Role",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeAssetWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeRouterWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
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
    inputs: [
      {
        internalType: "address",
        name: "_revoke",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "routerWhitelistRemoved",
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
    name: "routerWhitelistTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611088806100206000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80638da5cb5b116100c3578063c5b350df1161007c578063c5b350df14610249578063c91cb56a14610251578063d1851c921461028a578063d232c2201461029b578063e2b31fc7146102a3578063f2d8d74a146102ab57600080fd5b80638da5cb5b146101d55780639150bb06146101f5578063a59c8c6414610208578063a9943b1b14610210578063b1f8100d14610223578063bb271a271461023657600080fd5b80633f4ba83a116101155780633f4ba83a1461019a5780636a42b8f8146101a25780636e26deba146101aa578063715018a6146101b257806380e52e3f146101ba5780638456cb59146101cd57600080fd5b806311f7ea6d146101525780632c6c579c1461016e578063357aac78146101785780633863f874146101805780633cf52ffb14610192575b600080fd5b60195460ff165b60405190151581526020015b60405180910390f35b6101766102b6565b005b610176610346565b601a545b604051908152602001610165565b601654610184565b6101766103d4565b602b54610184565b601854610184565b61017661046b565b6101766101c8366004610f94565b61052a565b610176610651565b6101dd6106eb565b6040516001600160a01b039091168152602001610165565b610176610203366004610f94565b6106fa565b610176610816565b61017661021e366004610f94565b6108f7565b610176610231366004610f94565b610a0c565b610176610244366004610f94565b610ac4565b610176610bd8565b61027d61025f366004610f94565b6001600160a01b03166000908152601b602052604090205460ff1690565b6040516101659190610ffc565b6015546001600160a01b03166101dd565b610159610c6c565b610176610c86565b60175460ff16610159565b336102bf610d67565b6001600160a01b0316141580156102fa57506003336000908152601b602052604090205460ff1660038111156102f7576102f7610fc4565b14155b1561031857604051637b32c26b60e01b815260040160405180910390fd5b60175460ff161561033c57604051633934404160e01b815260040160405180910390fd5b610344610d95565b565b3361034f610d67565b6001600160a01b03161415801561038a57506003336000908152601b602052604090205460ff16600381111561038757610387610fc4565b14155b156103a857604051637b32c26b60e01b815260040160405180910390fd5b60195460ff16156103cc5760405163a3515c1f60e01b815260040160405180910390fd5b610344610dd1565b336103dd610d67565b6001600160a01b03161415801561041857506003336000908152601b602052604090205460ff16600381111561041557610415610fc4565b14155b1561043657604051637b32c26b60e01b815260040160405180910390fd5b6025805460ff191690556040517fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693390600090a1565b33610474610d67565b6001600160a01b03161461049b576040516314e74a2560e21b815260040160405180910390fd5b6016546000036104be57604051630fde518360e11b815260040160405180910390fd5b602b546016546104ce9042611010565b116104eb576040516202943360e61b815260040160405180910390fd5b6015546001600160a01b031615610515576040516351d346a960e01b815260040160405180910390fd5b601554610344906001600160a01b0316610e07565b33610533610d67565b6001600160a01b03161415801561056e57506003336000908152601b602052604090205460ff16600381111561056b5761056b610fc4565b14155b1561058c57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff1660038111156105b9576105b9610fc4565b14806105cc57506001600160a01b038116155b156105ea57604051630e15d72960e31b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604090819020805460ff198116909155905160ff909116907fdc6f53b47a9dfbea7a15fceef0cd84711d3d79ccc0952111866167af5e59e264906106459084908490611035565b60405180910390a15050565b3361065a610d67565b6001600160a01b03161415801561069557506002336000908152601b602052604090205460ff16600381111561069257610692610fc4565b14155b156106b35760405163bae4c01f60e01b815260040160405180910390fd5b6025805460ff191660011790556040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a1565b60006106f5610d67565b905090565b33610703610d67565b6001600160a01b03161415801561073e57506003336000908152601b602052604090205460ff16600381111561073b5761073b610fc4565b14155b1561075c57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff16600381111561078957610789610fc4565b14158061079d57506001600160a01b038116155b156107bb576040516319f546ad60e11b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600117905590519182527ff294e68c632d2c26e3d36129816c9a3e54bfa0ebada89d07d08e15e87a8e240391015b60405180910390a150565b3361081f610d67565b6001600160a01b03161415801561085a57506003336000908152601b602052604090205460ff16600381111561085757610857610fc4565b14155b1561087857604051637b32c26b60e01b815260040160405180910390fd5b60175460ff161561089c5760405163c4fcf53b60e01b815260040160405180910390fd5b6018546000036108bf5760405163a7f043cd60e01b815260040160405180910390fd5b602b546018546108cf9042611010565b116108ed57604051630f94fc2560e21b815260040160405180910390fd5b6103446001610e25565b33610900610d67565b6001600160a01b03161415801561093b57506003336000908152601b602052604090205460ff16600381111561093857610938610fc4565b14155b1561095957604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff16600381111561098657610986610fc4565b14158061099a57506001600160a01b038116155b156109b857604051630bceab9d60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600217905590519182527ffaac289281b8fc57dff30d0ff38b071d28bb5f24cd5ed1bd2379d6fb27f714dd910161080b565b33610a15610d67565b6001600160a01b031614610a3c576040516314e74a2560e21b815260040160405180910390fd5b6015546001600160a01b038281169116148015610a6157506001600160a01b03811615155b15610a7f57604051630274ac4360e21b815260040160405180910390fd5b806001600160a01b0316610a916106eb565b6001600160a01b031603610ab857604051631f677f5160e01b815260040160405180910390fd5b610ac181610e6b565b50565b33610acd610d67565b6001600160a01b031614158015610b0857506003336000908152601b602052604090205460ff166003811115610b0557610b05610fc4565b14155b15610b2657604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604081205460ff166003811115610b5357610b53610fc4565b141580610b6757506001600160a01b038116155b15610b8557604051631600e74560e31b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff1916600317905590519182527e0a317382a4189d8763d4a024ec833785cebd3580a084ff0f887f156b822cb1910161080b565b6015546001600160a01b03163314610c0357604051631b54eee360e11b815260040160405180910390fd5b6015546001600160a01b0316610c176106eb565b6001600160a01b031603610c3e576040516355cc507960e01b815260040160405180910390fd5b602b54601654610c4e9042611010565b11610515576040516301e60c7360e51b815260040160405180910390fd5b600080610c776106eb565b6001600160a01b031614905090565b33610c8f610d67565b6001600160a01b031614158015610cca57506003336000908152601b602052604090205460ff166003811115610cc757610cc7610fc4565b14155b15610ce857604051637b32c26b60e01b815260040160405180910390fd5b60195460ff1615610d0c57604051630608cb0760e41b815260040160405180910390fd5b601a54600003610d2f57604051634bb4e70d60e01b815260040160405180910390fd5b602b54601a54610d3f9042611010565b11610d5d576040516320502ec760e21b815260040160405180910390fd5b6103446001610eb9565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b4260188190556040519081527f3fb93cd2d7b177a05cdfd1945eefab6bd66ff1c9935d36b3d3906f8f63b4b7cc906020015b60405180910390a1565b42601a8190556040519081527f33b2ecb6423e15093e362932044a5d4b879d34959f073bcc4a2f622a4a48d77a90602001610dc7565b6000601655601580546001600160a01b0319169055610ac181610eff565b6017805460ff191682151590811790915560006018556040519081527f4304b1b406eaf3fee0619669a5059495538ebbc3000c03d3ff6ccbc266f25e3c9060200161080b565b42601655601580546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6019805460ff19168215159081179091556000601a556040519081527f6d2bda5daaba704b44ef68f2d7e8da6da754a843400bb7b37ae88b41864b7fd59060200161080b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080546001600160a01b031981166001600160a01b038481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b600060208284031215610fa657600080fd5b81356001600160a01b0381168114610fbd57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b60048110610ff857634e487b7160e01b600052602160045260246000fd5b9052565b6020810161100a8284610fda565b92915050565b60008282101561103057634e487b7160e01b600052601160045260246000fd5b500390565b6001600160a01b038316815260408101610fbd6020830184610fda56fea264697066735822122045a24c25294ac1f4d984f15027099253a2b840eef2b5f4541d8f4151d576577c64736f6c634300080f0033";

type ProposedOwnableFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProposedOwnableFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProposedOwnableFacet__factory extends ContractFactory {
  constructor(...args: ProposedOwnableFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProposedOwnableFacet> {
    return super.deploy(overrides || {}) as Promise<ProposedOwnableFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProposedOwnableFacet {
    return super.attach(address) as ProposedOwnableFacet;
  }
  override connect(signer: Signer): ProposedOwnableFacet__factory {
    return super.connect(signer) as ProposedOwnableFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProposedOwnableFacetInterface {
    return new utils.Interface(_abi) as ProposedOwnableFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProposedOwnableFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProposedOwnableFacet;
  }
}
