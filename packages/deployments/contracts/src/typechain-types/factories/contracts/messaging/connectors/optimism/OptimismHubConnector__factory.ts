/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  OptimismHubConnector,
  OptimismHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/optimism/OptimismHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "MirrorGasUpdated",
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
    inputs: [],
    name: "AMB",
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
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
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
    name: "acceptProposedOwner",
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
    name: "mirrorConnector",
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
    name: "mirrorGas",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
    ],
    name: "setMirrorGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001124380380620011248339810160408190526200003591620002ba565b85858585858585848462000049336200017f565b8263ffffffff16600003620000945760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000d85760405162461bcd60e51b815260206004820152600960248201526832b6b83a3c9030b6b160b91b60448201526064016200008b565b6001600160a01b038116620001245760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008b565b63ffffffff9283166080526001600160a01b0391821660a052811660c05290861660e0528216156200015b576200015b82620001de565b80156200016d576200016d8162000247565b50505050505050505050505062000332565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b805163ffffffff811681146200029d57600080fd5b919050565b80516001600160a01b03811681146200029d57600080fd5b60008060008060008060c08789031215620002d457600080fd5b620002df8762000288565b9550620002ef6020880162000288565b9450620002ff60408801620002a2565b93506200030f60608801620002a2565b92506200031f60808801620002a2565b915060a087015190509295509295509295565b60805160a05160c05160e051610d8e620003966000396000818161012b01526107360152600081816101cd015281816104d3015261070f0152600081816102ba015281816102fa0152818161096e0152610a31015260006101930152610d8e6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806382646a58116100ad578063cf796c7511610071578063cf796c751461027d578063d1851c9214610286578063d232c22014610297578063d69f9d61146102b5578063db1b7659146102dc57600080fd5b806382646a581461022b5780638da5cb5b1461023e578063b1f8100d1461024f578063c5b350df14610262578063cc3942831461026a57600080fd5b80635bd11efc116100f45780635bd11efc146101b55780635f61e3ec146101c85780636a42b8f8146102075780636eb67a5114610210578063715018a61461022357600080fd5b806314168416146101265780633cf52ffb146101675780634ff746f61461017957806352a9674b1461018e575b600080fd5b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b6002545b60405190815260200161015e565b61018c610187366004610b28565b6102ef565b005b61014d7f000000000000000000000000000000000000000000000000000000000000000081565b61018c6101c3366004610bee565b61039e565b6101ef7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161015e565b62093a8061016b565b61018c61021e366004610c12565b6103d5565b61018c610409565b61018c610239366004610b28565b6104c8565b6000546001600160a01b03166101ef565b61018c61025d366004610bee565b610569565b61018c61060e565b6003546101ef906001600160a01b031681565b61016b60045481565b6001546001600160a01b03166101ef565b6000546001600160a01b0316155b604051901515815260200161015e565b6101ef7f000000000000000000000000000000000000000000000000000000000000000081565b6102a56102ea366004610bee565b610669565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103595760405162461bcd60e51b81526004016103509060208082526004908201526310a0a6a160e11b604082015260600190565b60405180910390fd5b6103628161067a565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610393929190610c78565b60405180910390a150565b6000546001600160a01b031633146103c9576040516311a8a1bb60e31b815260040160405180910390fd5b6103d2816107bd565b50565b6000546001600160a01b03163314610400576040516311a8a1bb60e31b815260040160405180910390fd5b6103d281610826565b6000546001600160a01b03163314610434576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361045757604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426104699190610ca2565b11610487576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b0316156104b1576040516323295ef960e01b815260040160405180910390fd5b6001546104c6906001600160a01b0316610867565b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461052f5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b6044820152606401610350565b610538816108c6565b7fa69577a1e55dd0712044e7078b408c39fadff8b3e1b334b202ff17e70eda9fdc8133604051610393929190610c78565b6000546001600160a01b03163314610594576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156105b957506001600160a01b03811615155b156105d7576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361060557604051634a2fb73f60e11b815260040160405180910390fd5b6103d2816109dc565b6001546001600160a01b03163314610639576040516311a7f27160e11b815260040160405180910390fd5b62093a806002544261064b9190610ca2565b116104b15760405163d39c12bb60e01b815260040160405180910390fd5b600061067482610a2a565b92915050565b60035461068f906001600160a01b0316610a2a565b6106ca5760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b6044820152606401610350565b80516020146107055760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610350565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166378ffd0a17f000000000000000000000000000000000000000000000000000000000000000061075e84610cc7565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b1580156107a257600080fd5b505af11580156107b6573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516020146109015760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610350565b6000634ff746f660e01b8260405160240161091c9190610cee565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252600354600480549351633dbb202b60e01b81529294506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811694633dbb202b946109a69490921692879201610d01565b600060405180830381600087803b1580156109c057600080fd5b505af11580156109d4573d6000803e3d6000fd5b505050505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006106747f0000000000000000000000000000000000000000000000000000000000000000836000336001600160a01b03841614610a955760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b6044820152606401610350565b816001600160a01b0316836001600160a01b0316636e296e456040518163ffffffff1660e01b8152600401602060405180830381865afa158015610add573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b019190610d3b565b6001600160a01b0316149392505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610b3a57600080fd5b813567ffffffffffffffff80821115610b5257600080fd5b818401915084601f830112610b6657600080fd5b813581811115610b7857610b78610b12565b604051601f8201601f19908116603f01168101908382118183101715610ba057610ba0610b12565b81604052828152876020848701011115610bb957600080fd5b826020860160208301376000928101602001929092525095945050505050565b6001600160a01b03811681146103d257600080fd5b600060208284031215610c0057600080fd5b8135610c0b81610bd9565b9392505050565b600060208284031215610c2457600080fd5b5035919050565b6000815180845260005b81811015610c5157602081850181015186830182015201610c35565b81811115610c63576000602083870101525b50601f01601f19169290920160200192915050565b604081526000610c8b6040830185610c2b565b905060018060a01b03831660208301529392505050565b600082821015610cc257634e487b7160e01b600052601160045260246000fd5b500390565b80516020808301519190811015610ce8576000198160200360031b1b821691505b50919050565b602081526000610c0b6020830184610c2b565b6001600160a01b0384168152606060208201819052600090610d2590830185610c2b565b905063ffffffff83166040830152949350505050565b600060208284031215610d4d57600080fd5b8151610c0b81610bd956fea2646970667358221220d38a7682425802c5ad2ab3825b4a09992dfcd32165a91c98bd68a394043beeff64736f6c634300080f0033";

type OptimismHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OptimismHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OptimismHubConnector__factory extends ContractFactory {
  constructor(...args: OptimismHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OptimismHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      overrides || {}
    ) as Promise<OptimismHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      overrides || {}
    );
  }
  override attach(address: string): OptimismHubConnector {
    return super.attach(address) as OptimismHubConnector;
  }
  override connect(signer: Signer): OptimismHubConnector__factory {
    return super.connect(signer) as OptimismHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OptimismHubConnectorInterface {
    return new utils.Interface(_abi) as OptimismHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OptimismHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OptimismHubConnector;
  }
}
