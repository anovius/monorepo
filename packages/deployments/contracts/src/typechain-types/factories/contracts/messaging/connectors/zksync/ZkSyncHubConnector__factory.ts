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
  ZkSyncHubConnector,
  ZkSyncHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/zksync/ZkSyncHubConnector";

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
      {
        internalType: "address",
        name: "_stateCommitmentChain",
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
        internalType: "uint32",
        name: "_l2BlockNumber",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_l2MessageIndex",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_l2TxNumberInBlock",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "processMessageFromRoot",
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
    name: "processed",
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
  "0x6101006040523480156200001257600080fd5b5060405162001c1c38038062001c1c8339810160408190526200003591620002d9565b8686868686868585858585856200004c336200019e565b8563ffffffff16600003620000975760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038316620000e35760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008e565b63ffffffff8087166080526001600160a01b0380861660a05284811660c05290861660e0528216156200011b576200011b82620001fd565b80156200012d576200012d8162000266565b604080516001600160a01b0386811682528581166020830152841681830152905163ffffffff87811692908916917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a35050505050505050505050505050505050505062000365565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b805163ffffffff81168114620002bc57600080fd5b919050565b80516001600160a01b0381168114620002bc57600080fd5b600080600080600080600060e0888a031215620002f557600080fd5b6200030088620002a7565b96506200031060208901620002a7565b95506200032060408901620002c1565b94506200033060608901620002c1565b93506200034060808901620002c1565b925060a088015191506200035760c08901620002c1565b905092959891949750929550565b60805160a05160c05160e051611853620003c96000396000818161014101526109df015260008181610237015281816104420152610a1a0152600081816103d4015281816104f7015281816108290152610b5b015260006101e301526118536000f3fe60806040526004361061012a5760003560e01c80638da5cb5b116100ab578063cf796c751161006f578063cf796c751461036f578063d1851c9214610385578063d232c220146103a3578063d69f9d61146103c2578063db1b7659146103f6578063e92a492f1461041757600080fd5b80638da5cb5b146102bc578063b1f8100d146102da578063c1f0808a146102fa578063c5b350df1461033a578063cc3942831461034f57600080fd5b80635bd11efc116100f25780635bd11efc146102055780635f61e3ec146102255780636a42b8f8146102715780636eb67a5114610287578063715018a6146102a757600080fd5b8063141684161461012f5780633cf52ffb1461017d57806348e6fa231461019c5780634ff746f6146101b157806352a9674b146101d1575b600080fd5b34801561013b57600080fd5b506101637f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b34801561018957600080fd5b506002545b604051908152602001610174565b6101af6101aa366004611346565b610437565b005b3480156101bd57600080fd5b506101af6101cc3660046113aa565b6104ec565b3480156101dd57600080fd5b506101637f000000000000000000000000000000000000000000000000000000000000000081565b34801561021157600080fd5b506101af6102203660046113e7565b610589565b34801561023157600080fd5b506102597f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610174565b34801561027d57600080fd5b5062093a8061018e565b34801561029357600080fd5b506101af6102a2366004611410565b6105c0565b3480156102b357600080fd5b506101af6105f4565b3480156102c857600080fd5b506000546001600160a01b0316610259565b3480156102e657600080fd5b506101af6102f53660046113e7565b6106b3565b34801561030657600080fd5b5061032a610315366004611410565b60056020526000908152604090205460ff1681565b6040519015158152602001610174565b34801561034657600080fd5b506101af610758565b34801561035b57600080fd5b50600354610259906001600160a01b031681565b34801561037b57600080fd5b5061018e60045481565b34801561039157600080fd5b506001546001600160a01b0316610259565b3480156103af57600080fd5b506000546001600160a01b03161561032a565b3480156103ce57600080fd5b506102597f000000000000000000000000000000000000000000000000000000000000000081565b34801561040257600080fd5b5061032a6104113660046113e7565b50600090565b34801561042357600080fd5b506101af6104323660046114b7565b6107b3565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104a35760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b6104ad8282610a85565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e93550778282336040516104e0939291906115b3565b60405180910390a15050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461054d5760405162461bcd60e51b815260040161049a9060208082526004908201526310a0a6a160e11b604082015260600190565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced813360405161057e9291906115f1565b60405180910390a150565b6000546001600160a01b031633146105b4576040516311a8a1bb60e31b815260040160405180910390fd5b6105bd81610c2a565b50565b6000546001600160a01b031633146105eb576040516311a8a1bb60e31b815260040160405180910390fd5b6105bd81610c93565b6000546001600160a01b0316331461061f576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361064257604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426106549190611631565b11610672576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b03161561069c576040516323295ef960e01b815260040160405180910390fd5b6001546106b1906001600160a01b0316610cd4565b565b6000546001600160a01b031633146106de576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561070357506001600160a01b03811615155b15610721576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361074f57604051634a2fb73f60e11b815260040160405180910390fd5b6105bd81610d33565b6001546001600160a01b03163314610783576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426107959190611631565b1161069c5760405163d39c12bb60e01b815260040160405180910390fd5b602483146107ed5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161049a565b6040805160608101825261ffff871681526003546001600160a01b03166020808301919091528251601f870182900482028101820184528681527f0000000000000000000000000000000000000000000000000000000000000000936000939290830191908990899081908401838280828437600092018290525093909452505060405163e4948f4360e01b8152929350916001600160a01b038516915063e4948f43906108a7908d908d9087908b908b90600401611648565b602060405180830381865afa1580156108c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e891906116d7565b9050806109215760405162461bcd60e51b815260206004820152600760248201526610b83937bb32b760c91b604482015260640161049a565b6000610967600089898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050610d819050565b9050600061099e6109866020601885901c6001600160601b03166116f9565b62ffffff198416906001600160601b03166020610da5565b60008181526005602052604090205490915060ff16610a775760008181526005602052604090819020805460ff191660011790555163473ec9fd60e11b81527f000000000000000000000000000000000000000000000000000000000000000063ffffffff166004820152602481018290526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638e7d93fa90604401600060405180830381600087803b158015610a5e57600080fd5b505af1158015610a72573d6000803e3d6000fd5b505050505b505050505050505050505050565b805115610ac35760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b604482015260640161049a565b8151602014610afe5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161049a565b6000634ff746f660e01b83604051602401610b199190611721565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526003549091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169163725ad8509134911660008561271082604051908082528060200260200182016040528015610bc057816020015b6060815260200190600190039081610bab5790505b506040518763ffffffff1660e01b8152600401610be1959493929190611734565b60206040518083038185885af1158015610bff573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610c2491906117c3565b50505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b815160009060208401610d9c64ffffffffff85168284610f05565b95945050505050565b60008160ff16600003610dba57506000610efe565b610dcd8460181c6001600160601b031690565b6001600160601b0316610de360ff8416856117dc565b1115610e4757610e2e610dff8560781c6001600160601b031690565b6001600160601b0316610e1b8660181c6001600160601b031690565b6001600160601b0316858560ff16610f4c565b60405162461bcd60e51b815260040161049a9190611721565b60208260ff161115610ec15760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161049a565b600882026000610eda8660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91860151909116925050505b9392505050565b600080610f1283856117dc565b9050604051811115610f22575060005b80600003610f375762ffffff19915050610efe565b5050606092831b9190911790911b1760181b90565b60606000610f5986611076565b9150506000610f6786611076565b9150506000610f7586611076565b9150506000610f8386611076565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b600080601f5b600f8160ff1611156110cb5760006110958260086117f4565b60ff1685901c90506110a681611124565b61ffff16841793508160ff166010146110c157601084901b93505b506000190161107c565b50600f5b60ff8160ff16101561111e5760006110e88260086117f4565b60ff1685901c90506110f981611124565b61ffff16831792508160ff1660001461111457601083901b92505b50600019016110cf565b50915091565b600061113660048360ff16901c611156565b60ff1661ffff919091161760081b61114d82611156565b60ff1617919050565b600060f08083179060ff821690036111715750603092915050565b8060ff1660f1036111855750603192915050565b8060ff1660f2036111995750603292915050565b8060ff1660f3036111ad5750603392915050565b8060ff1660f4036111c15750603492915050565b8060ff1660f5036111d55750603592915050565b8060ff1660f6036111e95750603692915050565b8060ff1660f7036111fd5750603792915050565b8060ff1660f8036112115750603892915050565b8060ff1660f9036112255750603992915050565b8060ff1660fa036112395750606192915050565b8060ff1660fb0361124d5750606292915050565b8060ff1660fc036112615750606392915050565b8060ff1660fd036112755750606492915050565b8060ff1660fe036112895750606592915050565b8060ff1660ff0361129d5750606692915050565b50919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126112ca57600080fd5b813567ffffffffffffffff808211156112e5576112e56112a3565b604051601f8301601f19908116603f0116810190828211818310171561130d5761130d6112a3565b8160405283815286602085880101111561132657600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561135957600080fd5b823567ffffffffffffffff8082111561137157600080fd5b61137d868387016112b9565b9350602085013591508082111561139357600080fd5b506113a0858286016112b9565b9150509250929050565b6000602082840312156113bc57600080fd5b813567ffffffffffffffff8111156113d357600080fd5b6113df848285016112b9565b949350505050565b6000602082840312156113f957600080fd5b81356001600160a01b0381168114610efe57600080fd5b60006020828403121561142257600080fd5b5035919050565b60008083601f84011261143b57600080fd5b50813567ffffffffffffffff81111561145357600080fd5b60208301915083602082850101111561146b57600080fd5b9250929050565b60008083601f84011261148457600080fd5b50813567ffffffffffffffff81111561149c57600080fd5b6020830191508360208260051b850101111561146b57600080fd5b600080600080600080600060a0888a0312156114d257600080fd5b873563ffffffff811681146114e657600080fd5b965060208801359550604088013561ffff8116811461150457600080fd5b9450606088013567ffffffffffffffff8082111561152157600080fd5b61152d8b838c01611429565b909650945060808a013591508082111561154657600080fd5b506115538a828b01611472565b989b979a50959850939692959293505050565b6000815180845260005b8181101561158c57602081850181015186830182015201611570565b8181111561159e576000602083870101525b50601f01601f19169290920160200192915050565b6060815260006115c66060830186611566565b82810360208401526115d88186611566565b91505060018060a01b0383166040830152949350505050565b6040815260006116046040830185611566565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156116435761164361161b565b500390565b63ffffffff861681528460208201526080604082015261ffff845116608082015260018060a01b0360208501511660a082015260006040850151606060c084015261169660e0840182611566565b838103606085015284815290506001600160fb1b038411156116b757600080fd5b8360051b8086602084013760009101602001908152979650505050505050565b6000602082840312156116e957600080fd5b81518015158114610efe57600080fd5b60006001600160601b03838116908316818110156117195761171961161b565b039392505050565b602081526000610efe6020830184611566565b60018060a01b038616815260006020868184015260a0604084015261175c60a0840187611566565b85606085015283810360808501528085518083528383019150838160051b84010184880160005b838110156117b157601f1986840301855261179f838351611566565b94870194925090860190600101611783565b50909c9b505050505050505050505050565b6000602082840312156117d557600080fd5b5051919050565b600082198211156117ef576117ef61161b565b500190565b600060ff821660ff84168160ff04811182151516156118155761181561161b565b02939250505056fea26469706673582212203f8d25819958dd69d7b499bdbd323f20de83b91cd93d588f3f304dd4f30da72764736f6c634300080f0033";

type ZkSyncHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZkSyncHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZkSyncHubConnector__factory extends ContractFactory {
  constructor(...args: ZkSyncHubConnectorConstructorParams) {
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
    _stateCommitmentChain: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZkSyncHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      _stateCommitmentChain,
      overrides || {}
    ) as Promise<ZkSyncHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    _stateCommitmentChain: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      _stateCommitmentChain,
      overrides || {}
    );
  }
  override attach(address: string): ZkSyncHubConnector {
    return super.attach(address) as ZkSyncHubConnector;
  }
  override connect(signer: Signer): ZkSyncHubConnector__factory {
    return super.connect(signer) as ZkSyncHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZkSyncHubConnectorInterface {
    return new utils.Interface(_abi) as ZkSyncHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZkSyncHubConnector {
    return new Contract(address, _abi, signerOrProvider) as ZkSyncHubConnector;
  }
}
