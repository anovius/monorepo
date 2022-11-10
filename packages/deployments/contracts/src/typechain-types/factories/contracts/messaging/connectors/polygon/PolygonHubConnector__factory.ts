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
  PolygonHubConnector,
  PolygonHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/polygon/PolygonHubConnector";

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
        internalType: "address",
        name: "_checkPointManager",
        type: "address",
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
        internalType: "bytes",
        name: "encodedData",
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
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
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
    name: "SEND_MESSAGE_EVENT_SIG",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "checkpointManager",
    outputs: [
      {
        internalType: "contract ICheckpointManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "fxChildTunnel",
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
    name: "fxRoot",
    outputs: [
      {
        internalType: "contract IFxStateSender",
        name: "",
        type: "address",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processedExits",
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
    inputs: [
      {
        internalType: "bytes",
        name: "inputData",
        type: "bytes",
      },
    ],
    name: "receiveMessage",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxChildTunnel",
        type: "address",
      },
    ],
    name: "setFxChildTunnel",
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
  "0x6101006040523480156200001257600080fd5b5060405162002b3638038062002b36833981016040819052620000359162000368565b8084878782878784848484846200004c33620001ba565b8463ffffffff16600003620000975760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e35760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008e565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011b576200011b8162000219565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a35050600580546001600160a01b039b8c166001600160a01b031991821617909155600480549a909b1699169890981790985550620003e99c50505050505050505050505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6200022f816200023d60201b620008d31760201c565b6200023a81620002a6565b50565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b6006546001600160a01b031615620003145760405162461bcd60e51b815260206004820152602a60248201527f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160448201526913149150511657d4d15560b21b60648201526084016200008e565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b805163ffffffff811681146200034b57600080fd5b919050565b80516001600160a01b03811681146200034b57600080fd5b60008060008060008060c087890312156200038257600080fd5b6200038d8762000336565b95506200039d6020880162000336565b9450620003ad6040880162000350565b9350620003bd6060880162000350565b9250620003cd6080880162000350565b9150620003dd60a0880162000350565b90509295509295509295565b60805160a05160c05160e0516126f76200043f600039600081816101a90152610d94015260008181610290015281816104e40152610d6d01526000818161045701526105990152600061023c01526126f76000f3fe60806040526004361061014b5760003560e01c8063972c4928116100b6578063d1851c921161006f578063d1851c9214610408578063d232c22014610426578063d69f9d6114610445578063db1b765914610479578063de9b771f14610499578063f953cec7146104b957600080fd5b8063972c492814610353578063aea4e49e14610373578063b1f8100d14610393578063c0857ba0146103b3578063c5b350df146103d3578063cc394283146103e857600080fd5b80635bd11efc116101085780635bd11efc1461025e5780635f61e3ec1461027e578063607f2d42146102ca5780636a42b8f81461030a578063715018a6146103205780638da5cb5b1461033557600080fd5b80630e387de61461015057806314168416146101975780633cf52ffb146101e057806348e6fa23146101f55780634ff746f61461020a57806352a9674b1461022a575b600080fd5b34801561015c57600080fd5b506101847f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03681565b6040519081526020015b60405180910390f35b3480156101a357600080fd5b506101cb7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff909116815260200161018e565b3480156101ec57600080fd5b50600254610184565b6102086102033660046121b8565b6104d9565b005b34801561021657600080fd5b5061020861022536600461221c565b61058e565b34801561023657600080fd5b506101cb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561026a57600080fd5b50610208610279366004612266565b61062b565b34801561028a57600080fd5b506102b27f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161018e565b3480156102d657600080fd5b506102fa6102e5366004612283565b60076020526000908152604090205460ff1681565b604051901515815260200161018e565b34801561031657600080fd5b5062093a80610184565b34801561032c57600080fd5b50610208610662565b34801561034157600080fd5b506000546001600160a01b03166102b2565b34801561035f57600080fd5b506006546102b2906001600160a01b031681565b34801561037f57600080fd5b5061020861038e366004612266565b610721565b34801561039f57600080fd5b506102086103ae366004612266565b6107af565b3480156103bf57600080fd5b506005546102b2906001600160a01b031681565b3480156103df57600080fd5b50610208610854565b3480156103f457600080fd5b506003546102b2906001600160a01b031681565b34801561041457600080fd5b506001546001600160a01b03166102b2565b34801561043257600080fd5b506000546001600160a01b0316156102fa565b34801561045157600080fd5b506102b27f000000000000000000000000000000000000000000000000000000000000000081565b34801561048557600080fd5b506102fa610494366004612266565b6108af565b3480156104a557600080fd5b506004546102b2906001600160a01b031681565b3480156104c557600080fd5b506102086104d436600461221c565b6108b9565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105455760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b61054f828261093c565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e9355077828233604051610582939291906122f8565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105ef5760405162461bcd60e51b815260040161053c9060208082526004908201526310a0a6a160e11b604082015260600190565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610620929190612336565b60405180910390a150565b6000546001600160a01b03163314610656576040516311a8a1bb60e31b815260040160405180910390fd5b61065f81610983565b50565b6000546001600160a01b0316331461068d576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036106b057604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426106c29190612376565b116106e0576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b03161561070a576040516323295ef960e01b815260040160405180910390fd5b60015461071f906001600160a01b0316610995565b565b6006546001600160a01b03161561078d5760405162461bcd60e51b815260206004820152602a60248201527f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160448201526913149150511657d4d15560b21b606482015260840161053c565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146107da576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156107ff57506001600160a01b03811615155b1561081d576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361084b57604051634a2fb73f60e11b815260040160405180910390fd5b61065f816109f4565b6001546001600160a01b0316331461087f576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426108919190612376565b1161070a5760405163d39c12bb60e01b815260040160405180910390fd5b6000805b92915050565b60006108c482610a42565b90506108cf81610d28565b5050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b80511561097a5760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b604482015260640161053c565b6108cf82610e49565b61098c816108d3565b61065f81610721565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60606000610a4f83610eb2565b90506000610a5c82610f11565b90506000610a6983610f3a565b9050600081610a7784610f63565b610a8086611121565b604051602001610a929392919061238d565b60408051601f1981840301815291815281516020928301206000818152600790935291205490915060ff1615610b165760405162461bcd60e51b8152602060048201526024808201527f4678526f6f7454756e6e656c3a20455849545f414c52454144595f50524f434560448201526314d4d15160e21b606482015260840161053c565b6000818152600760205260408120805460ff19166001179055610b388561113d565b90506000610b4582611287565b9050610b5081611317565b6006546001600160a01b03908116911614610bbb5760405162461bcd60e51b815260206004820152602560248201527f4678526f6f7454756e6e656c3a20494e56414c49445f46585f4348494c445f54604482015264155393915360da1b606482015260840161053c565b6000610bc687611340565b9050610be6610bd6846020015190565b87610be08a61135c565b84611378565b610c3e5760405162461bcd60e51b815260206004820152602360248201527f4678526f6f7454756e6e656c3a20494e56414c49445f524543454950545f505260448201526227a7a360e91b606482015260840161053c565b610c6c85610c4b8961162b565b610c548a611647565b84610c5e8c611663565b610c678d61167f565b61169b565b506000610c78836117c1565b90507f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036610cae610ca98360006117fd565b611835565b14610cfb5760405162461bcd60e51b815260206004820152601f60248201527f4678526f6f7454756e6e656c3a20494e56414c49445f5349474e415455524500604482015260640161053c565b6000610d06846118b0565b806020019051810190610d1991906123ba565b9b9a5050505050505050505050565b8051602014610d635760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161053c565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638e7d93fa7f0000000000000000000000000000000000000000000000000000000000000000610dbc84612431565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b158015610e0057600080fd5b505af1158015610e14573d6000803e3d6000fd5b505050507fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610620929190612336565b6004805460065460405163b472047760e01b81526001600160a01b039283169363b472047793610e7d931691869101612455565b600060405180830381600087803b158015610e9757600080fd5b505af1158015610eab573d6000803e3d6000fd5b5050505050565b6040805160208101909152606081526000610efc610ef78460408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b6118cc565b60408051602081019091529081529392505050565b60606108b38260000151600881518110610f2d57610f2d612479565b60200260200101516119e2565b60006108b38260000151600281518110610f5657610f56612479565b6020026020010151611835565b604080516020810190915260008152815160609190156108b357600080610f8b600086611a7f565b60f81c90506001811480610fa257508060ff166003145b1561104a57600185516002610fb7919061248f565b610fc19190612376565b67ffffffffffffffff811115610fd957610fd96120f3565b6040519080825280601f01601f191660200182016040528015611003576020820181803683370190505b5092506000611013600187611a7f565b9050808460008151811061102957611029612479565b60200101906001600160f81b031916908160001a90535060019250506110ae565b60028551600261105a919061248f565b6110649190612376565b67ffffffffffffffff81111561107c5761107c6120f3565b6040519080825280601f01601f1916602001820160405280156110a6576020820181803683370190505b509250600091505b60ff82165b8351811015611118576110dd6110cc60ff851683612376565b6110d79060026124ae565b87611a7f565b8482815181106110ef576110ef612479565b60200101906001600160f81b031916908160001a90535080611110816124c6565b9150506110b3565b50505092915050565b60006108b38260000151600981518110610f5657610f56612479565b61116160405180606001604052806060815260200160608152602001600081525090565b61117b8260000151600681518110610f2d57610f2d612479565b6020828101829052604080518082018252600080825290830152805180820190915282518152918101908201526111b181611b00565b156111c6576111bf816118cc565b8252611273565b602082015180516000906111dc90600190612376565b67ffffffffffffffff8111156111f4576111f46120f3565b6040519080825280601f01601f19166020018201604052801561121e576020820181803683370190505b50905060008083602101915082602001905061123c82828551611b3b565b60408051808201825260008082526020918201528151808301909252845182528085019082015261126c906118cc565b8652505050505b61127c83611121565b604083015250919050565b6040805160808101825260009181018281526060808301939093528152602081019190915260006112d583600001516003815181106112c8576112c8612479565b60200260200101516118cc565b8360400151815181106112ea576112ea612479565b60200260200101519050604051806040016040528082815260200161130e836118cc565b90529392505050565b60006108b3826020015160008151811061133357611333612479565b6020026020010151611bc6565b60006108b38260000151600581518110610f5657610f56612479565b60606108b38260000151600781518110610f2d57610f2d612479565b6000806113ac8460408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b905060006113b9826118cc565b9050606080856000806113cb8b610f63565b905080516000036113e6576000975050505050505050611623565b60005b865181101561161a57815183111561140c57600098505050505050505050611623565b61142e87828151811061142157611421612479565b6020026020010151611be0565b95508580519060200120841461144f57600098505050505050505050611623565b6114648782815181106112c8576112c8612479565b9450845160110361153657815183036114c3578c8051906020012061149586601081518110610f2d57610f2d612479565b80519060200120036114b257600198505050505050505050611623565b600098505050505050505050611623565b60008284815181106114d7576114d7612479565b016020015160f81c905060108111156114fc5760009950505050505050505050611623565b611521868260ff168151811061151457611514612479565b6020026020010151611c5f565b945061152e6001856124ae565b935050611608565b84516002036114b257600061156161155a87600081518110610f2d57610f2d612479565b8486611c8d565b835190915061157082866124ae565b036115c3578d8051906020012061159387600181518110610f2d57610f2d612479565b80519060200120036115b15760019950505050505050505050611623565b60009950505050505050505050611623565b806000036115dd5760009950505050505050505050611623565b6115e781856124ae565b93506115ff8660018151811061151457611514612479565b94506116089050565b80611612816124c6565b9150506113e9565b50505050505050505b949350505050565b60006108b38260000151600381518110610f5657610f56612479565b60006108b38260000151600481518110610f5657610f56612479565b60006108b38260000151600081518110610f5657610f56612479565b60606108b38260000151600181518110610f2d57610f2d612479565b6005546040516320a9cea560e11b8152600481018490526000918291829182916001600160a01b03909116906341539d4a9060240160a060405180830381865afa1580156116ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171191906124df565b5093505092509250611768828b6117289190612376565b6040805160208082018f90528183018e9052606082018d905260808083018d90528351808403909101815260a09092019092528051910120908588611d95565b6117b45760405162461bcd60e51b815260206004820152601c60248201527f4678526f6f7454756e6e656c3a20494e56414c49445f48454144455200000000604482015260640161053c565b9998505050505050505050565b60408051602081019091526060815260405180602001604052806117f584602001516001815181106112c8576112c8612479565b905292915050565b6040805180820190915260008082526020820152825180518390811061182557611825612479565b6020026020010151905092915050565b80516000901580159061184a57508151602110155b61185357600080fd5b60006118628360200151611efd565b905060008184600001516118769190612376565b905060008083866020015161188b91906124ae565b90508051915060208310156118a757826020036101000a820491505b50949350505050565b60606108b38260200151600281518110610f2d57610f2d612479565b60606118d782611b00565b6118e057600080fd5b60006118eb83611f85565b905060008167ffffffffffffffff811115611908576119086120f3565b60405190808252806020026020018201604052801561194d57816020015b60408051808201909152600080825260208201528152602001906001900390816119265790505b509050600061195f8560200151611efd565b856020015161196e91906124ae565b90506000805b848110156119d7576119858361200a565b91506040518060400160405280838152602001848152508482815181106119ae576119ae612479565b60209081029190910101526119c382846124ae565b9250806119cf816124c6565b915050611974565b509195945050505050565b80516060906119f057600080fd5b60006119ff8360200151611efd565b90506000818460000151611a139190612376565b905060008167ffffffffffffffff811115611a3057611a306120f3565b6040519080825280601f01601f191660200182016040528015611a5a576020820181803683370190505b50905060008160200190506118a7848760200151611a7891906124ae565b82856120ae565b6000611a8c600284612542565b15611ac657601082611a9f600286612556565b81518110611aaf57611aaf612479565b0160200151611ac1919060f81c61256a565b611af6565b601082611ad4600286612556565b81518110611ae457611ae4612479565b0160200151611af6919060f81c61258c565b60f81b9392505050565b80516000908103611b1357506000919050565b6020820151805160001a9060c0821015611b31575060009392505050565b5060019392505050565b80600003611b4857505050565b60208110611b805782518252611b5f6020846124ae565b9250611b6c6020836124ae565b9150611b79602082612376565b9050611b48565b80600003611b8d57505050565b60006001611b9c836020612376565b611ba890610100612692565b611bb29190612376565b935183518516941916939093179091525050565b8051600090601514611bd757600080fd5b6108b382611835565b60606000826000015167ffffffffffffffff811115611c0157611c016120f3565b6040519080825280601f01601f191660200182016040528015611c2b576020820181803683370190505b5090508051600003611c3d5792915050565b6000816020019050611c5884602001518286600001516120ae565b5092915050565b8051600090602114611c7057600080fd5b60008083602001516001611c8491906124ae565b51949350505050565b60008080611c9a86610f63565b90506000815167ffffffffffffffff811115611cb857611cb86120f3565b6040519080825280601f01601f191660200182016040528015611ce2576020820181803683370190505b509050845b8251611cf390876124ae565b811015611d66576000878281518110611d0e57611d0e612479565b01602001516001600160f81b03191690508083611d2b8985612376565b81518110611d3b57611d3b612479565b60200101906001600160f81b031916908160001a905350508080611d5e906124c6565b915050611ce7565b508080519060200120828051906020012003611d855781519250611d8a565b600092505b509095945050505050565b600060208251611da59190612542565b15611de95760405162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840e0e4dedecc40d8cadccee8d60631b604482015260640161053c565b600060208351611df99190612556565b9050611e06816002612692565b8510611e4c5760405162461bcd60e51b81526020600482015260156024820152744c65616620696e64657820697320746f6f2062696760581b604482015260640161053c565b60008660205b85518111611eef57858101519250611e6b600289612542565b600003611ea3576040805160208101849052908101849052606001604051602081830303815290604052805190602001209150611ed0565b60408051602081018590529081018390526060016040516020818303038152906040528051906020012091505b611edb600289612556565b9750611ee86020826124ae565b9050611e52565b509094149695505050505050565b8051600090811a6080811015611f165750600092915050565b60b8811080611f31575060c08110801590611f31575060f881105b15611f3f5750600192915050565b60c0811015611f7357611f54600160b861269e565b611f619060ff1682612376565b611f6c9060016124ae565b9392505050565b611f54600160f861269e565b50919050565b80516000908103611f9857506000919050565b600080611fa88460200151611efd565b8460200151611fb791906124ae565b9050600084600001518560200151611fcf91906124ae565b90505b8082101561200157611fe38261200a565b611fed90836124ae565b915082611ff9816124c6565b935050611fd2565b50909392505050565b80516000908190811a60808110156120255760019150611c58565b60b881101561204b57612039608082612376565b6120449060016124ae565b9150611c58565b60c08110156120785760b78103600185019450806020036101000a85510460018201810193505050611c58565b60f881101561208c5761203960c082612376565b60019390930151602084900360f7016101000a900490920160f5190192915050565b806000036120bb57505050565b60208110611b8057825182526120d26020846124ae565b92506120df6020836124ae565b91506120ec602082612376565b90506120bb565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612132576121326120f3565b604052919050565b600067ffffffffffffffff821115612154576121546120f3565b50601f01601f191660200190565b600082601f83011261217357600080fd5b81356121866121818261213a565b612109565b81815284602083860101111561219b57600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156121cb57600080fd5b823567ffffffffffffffff808211156121e357600080fd5b6121ef86838701612162565b9350602085013591508082111561220557600080fd5b5061221285828601612162565b9150509250929050565b60006020828403121561222e57600080fd5b813567ffffffffffffffff81111561224557600080fd5b61162384828501612162565b6001600160a01b038116811461065f57600080fd5b60006020828403121561227857600080fd5b8135611f6c81612251565b60006020828403121561229557600080fd5b5035919050565b60005b838110156122b757818101518382015260200161229f565b838111156122c6576000848401525b50505050565b600081518084526122e481602086016020860161229c565b601f01601f19169290920160200192915050565b60608152600061230b60608301866122cc565b828103602084015261231d81866122cc565b91505060018060a01b0383166040830152949350505050565b60408152600061234960408301856122cc565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561238857612388612360565b500390565b838152600083516123a581602085016020880161229c565b60209201918201929092526040019392505050565b6000602082840312156123cc57600080fd5b815167ffffffffffffffff8111156123e357600080fd5b8201601f810184136123f457600080fd5b80516124026121818261213a565b81815285602083850101111561241757600080fd5b61242882602083016020860161229c565b95945050505050565b80516020808301519190811015611f7f5760001960209190910360031b1b16919050565b6001600160a01b0383168152604060208201819052600090611623908301846122cc565b634e487b7160e01b600052603260045260246000fd5b60008160001904831182151516156124a9576124a9612360565b500290565b600082198211156124c1576124c1612360565b500190565b6000600182016124d8576124d8612360565b5060010190565b600080600080600060a086880312156124f757600080fd5b85519450602086015193506040860151925060608601519150608086015161251e81612251565b809150509295509295909350565b634e487b7160e01b600052601260045260246000fd5b6000826125515761255161252c565b500690565b6000826125655761256561252c565b500490565b600060ff83168061257d5761257d61252c565b8060ff84160691505092915050565b600060ff83168061259f5761259f61252c565b8060ff84160491505092915050565b600181815b808511156125e95781600019048211156125cf576125cf612360565b808516156125dc57918102915b93841c93908002906125b3565b509250929050565b600082612600575060016108b3565b8161260d575060006108b3565b8160018114612623576002811461262d57612649565b60019150506108b3565b60ff84111561263e5761263e612360565b50506001821b6108b3565b5060208310610133831016604e8410600b841016171561266c575081810a6108b3565b61267683836125ae565b806000190482111561268a5761268a612360565b029392505050565b6000611f6c83836125f1565b600060ff821660ff8416808210156126b8576126b8612360565b9003939250505056fea26469706673582212204a7b7839a5d0a9289605f0709d1436f456b63f7e991d170a9410cbc726149c5a64736f6c634300080f0033";

type PolygonHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PolygonHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PolygonHubConnector__factory extends ContractFactory {
  constructor(...args: PolygonHubConnectorConstructorParams) {
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
    _checkPointManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PolygonHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _checkPointManager,
      overrides || {}
    ) as Promise<PolygonHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _checkPointManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _checkPointManager,
      overrides || {}
    );
  }
  override attach(address: string): PolygonHubConnector {
    return super.attach(address) as PolygonHubConnector;
  }
  override connect(signer: Signer): PolygonHubConnector__factory {
    return super.connect(signer) as PolygonHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolygonHubConnectorInterface {
    return new utils.Interface(_abi) as PolygonHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PolygonHubConnector {
    return new Contract(address, _abi, signerOrProvider) as PolygonHubConnector;
  }
}
