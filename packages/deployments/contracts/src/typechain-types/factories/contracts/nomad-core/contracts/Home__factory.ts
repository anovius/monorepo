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
import type { PromiseOrValue } from "../../../../common";
import type {
  Home,
  HomeInterface,
} from "../../../../contracts/nomad-core/contracts/Home";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationAndNonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "committedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "ImproperUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldUpdater",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newUpdater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterManager",
        type: "address",
      },
    ],
    name: "NewUpdaterManager",
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
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "UpdaterSlashed",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_MESSAGE_BODY_BYTES",
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
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
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
    name: "count",
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
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "improperUpdate",
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
  {
    inputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
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
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
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
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
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
    name: "queueEnd",
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
    name: "queueLength",
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
    name: "root",
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
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "setUpdaterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum NomadBase.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "suggestUpdate",
    outputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_new",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
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
    name: "updaterManager",
    outputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051620024a8380380620024a88339810160408190526100319161003f565b63ffffffff1660805261006c565b60006020828403121561005157600080fd5b815163ffffffff8116811461006557600080fd5b9392505050565b60805161240b6200009d6000396000818161022601528181610566015281816108070152610ad5015261240b6000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80639df6c8e1116100de578063df034cd011610097578063f6d1610211610071578063f6d1610214610371578063fa31de0114610398578063fd54b228146103ab578063ffa1ad74146103b557600080fd5b8063df034cd014610343578063ebf0c71714610356578063f2fde38b1461035e57600080fd5b80639df6c8e1146102bb578063ab91c7b0146102ce578063b31c01fb146102d6578063b95a2001146102e9578063c19d93fb1461030f578063c4d66de81461033057600080fd5b806367a6771d1161014b5780638da5cb5b116101255780638da5cb5b1461025d5780638e4e30e0146102825780639776120e146102955780639d54f419146102a857600080fd5b806367a6771d14610210578063715018a6146102195780638d3638f41461022157600080fd5b806306661abd1461019357806319d9d21a146101aa5780632bef2892146101bf57806336e104de146101e257806345630b1a146101ff578063522ae00214610207575b600080fd5b6054545b6040519081526020015b60405180910390f35b6101bd6101b8366004611cc1565b6103cf565b005b6101d26101cd366004611d50565b61050e565b60405190151581526020016101a1565b6101ea610521565b604080519283526020830191909152016101a1565b61019761055f565b61019761080081565b61019760ba5481565b6101bd61058f565b6102487f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101a1565b6087546001600160a01b03165b6040516001600160a01b0390911681526020016101a1565b6101d2610290366004611e0c565b6105c5565b6101bd6102a3366004611e71565b6106f7565b6101bd6102b6366004611e71565b61072d565b60eb5461026a906001600160a01b031681565b610197610782565b6101bd6102e4366004611e0c565b61078e565b6102486102f7366004611ea7565b60ea6020526000908152604090205463ffffffff1681565b60b95461032390600160a01b900460ff1681565b6040516101a19190611ed8565b6101bd61033e366004611e71565b610869565b60b95461026a906001600160a01b031681565b610197610961565b6101bd61036c366004611e71565b61096d565b600154600160801b90046001600160801b0316600090815260026020526040902054610197565b6101bd6103a6366004611f00565b610a05565b6054546101979081565b6103bd600081565b60405160ff90911681526020016101a1565b600260b954600160a01b900460ff1660028111156103ef576103ef611ec2565b036104155760405162461bcd60e51b815260040161040c90611f41565b60405180910390fd5b604080516020601f86018190048102820181019092528481526104579188918835918890889081908401838280828437600092019190915250610b9292505050565b80156104a657506104a686866001602002013584848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b9292505050565b80156104b757508435602086013514155b15610506576104c4610c05565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040516104fd96959493929190611fa6565b60405180910390a15b505050505050565b600061051b600183610cb1565b92915050565b60008061052e6001610d0c565b1561055b57505060ba54600154600160801b90046001600160801b03166000908152600260205260409020545b9091565b600061058a7f0000000000000000000000000000000000000000000000000000000000000000610d36565b905090565b6087546001600160a01b031633146105b95760405162461bcd60e51b815260040161040c90611fe8565b6105c36000610d7f565b565b6000600260b954600160a01b900460ff1660028111156105e7576105e7611ec2565b036106045760405162461bcd60e51b815260040161040c90611f41565b61060f848484610b92565b61064a5760405162461bcd60e51b815260206004820152600c60248201526b21757064617465722073696760a01b604482015260640161040c565b60ba5484146106925760405162461bcd60e51b81526020600482015260146024820152736e6f7420612063757272656e742075706461746560601b604482015260640161040c565b61069d600184610cb1565b6106ec576106a9610c05565b7f6844fd5e21c932b5197b78ac11bf96e2eaa4e882dd0c88087060cf2065c04ab28484846040516106dc93929190612079565b60405180910390a15060016106f0565b5060005b9392505050565b6087546001600160a01b031633146107215760405162461bcd60e51b815260040161040c90611fe8565b61072a81610dd1565b50565b60eb546001600160a01b031633146107795760405162461bcd60e51b815260206004820152600f60248201526e10bab83230ba32b926b0b730b3b2b960891b604482015260640161040c565b61072a81610e7c565b600061058a6001610d0c565b600260b954600160a01b900460ff1660028111156107ae576107ae611ec2565b036107cb5760405162461bcd60e51b815260040161040c90611f41565b6107d68383836105c5565b610864575b60006107e76001610edd565b90508281036107f657506107fc565b506107db565b8160ba8190555081837f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b28460405161085b91906120a1565b60405180910390a45b505050565b600054610100900460ff166108845760005460ff1615610888565b303b155b6108a45760405162461bcd60e51b815260040161040c906120b4565b600054610100900460ff161580156108c6576000805461ffff19166101011790555b6108ce610fa2565b6108d782610dd1565b60eb5460408051630df034cd60e41b8152905161094b926001600160a01b03169163df034cd09160048083019260209291908290030181865afa158015610922573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109469190612102565b61101d565b801561095d576000805461ff00191690555b5050565b600061058a60346110b3565b6087546001600160a01b031633146109975760405162461bcd60e51b815260040161040c90611fe8565b6001600160a01b0381166109fc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161040c565b61072a81610d7f565b600260b954600160a01b900460ff166002811115610a2557610a25611ec2565b03610a425760405162461bcd60e51b815260040161040c90611f41565b61080081511115610a845760405162461bcd60e51b815260206004820152600c60248201526b6d736720746f6f206c6f6e6760a01b604482015260640161040c565b63ffffffff808416600090815260ea602052604090205416610aa7816001612135565b63ffffffff858116600090815260ea60205260408120805463ffffffff191693909216929092179055610afe7f000000000000000000000000000000000000000000000000000000000000000033848888886110c6565b80516020820120909150610b136034826110fe565b610b26610b1e610961565b600190611216565b5060545467ffffffff00000000602088901b1663ffffffff85161790610b4e9060019061215d565b827f9d4c83d2e57d7d381feb264b44a5015e7f9ef26340f4fc46b558a6dc16dd811a60ba5486604051610b82929190612174565b60405180910390a4505050505050565b600080610b9d61055f565b604080516020810192909252810186905260608101859052608001604051602081830303815290604052805190602001209050610bd981611277565b60b9549091506001600160a01b0316610bf282856112b2565b6001600160a01b03161495945050505050565b60b9805460ff60a01b1916600160a11b17905560eb54604051635b3c2cbf60e01b81523360048201526001600160a01b0390911690635b3c2cbf90602401600060405180830381600087803b158015610c5d57600080fd5b505af1158015610c71573d6000803e3d6000fd5b505060b9546040513393506001600160a01b0390911691507f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce90600090a3565b81546000906001600160801b03165b8354600160801b90046001600160801b031681116106ec576000818152600185016020526040902054839003610cfa57600191505061051b565b80610d048161218d565b915050610cc0565b80546000906001600160801b03600160801b820481169116610d2e82826112d6565b949350505050565b6040516001600160e01b031960e083901b166020820152641393d3505160da1b60248201526000906029015b604051602081830303815290604052805190602001209050919050565b608780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381163b610e285760405162461bcd60e51b815260206004820152601860248201527f21636f6e747261637420757064617465724d616e616765720000000000000000604482015260640161040c565b60eb80546001600160a01b0319166001600160a01b0383169081179091556040519081527f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf9060200160405180910390a150565b60b980546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f0f20622a7af9e952a6fec654a196f29e04477b5d335772c26902bec35cc9f22a910160405180910390a15050565b80546000906001600160801b03600160801b820481169116610eff82826112d6565b600003610f365760405162461bcd60e51b8152602060048201526005602482015264456d70747960d81b604482015260640161040c565b6001600160801b038116600090815260018501602052604090205492508215610f75576001600160801b03811660009081526001850160205260408120555b610f808160016121a6565b84546001600160801b0319166001600160801b03919091161790935550919050565b600054610100900460ff16610fbd5760005460ff1615610fc1565b303b155b610fdd5760405162461bcd60e51b815260040161040c906120b4565b600054610100900460ff16158015610fff576000805461ffff19166101011790555b61100960016112fe565b801561072a576000805461ff001916905550565b600054610100900460ff166110385760005460ff161561103c565b303b155b6110585760405162461bcd60e51b815260040161040c906120b4565b600054610100900460ff1615801561107a576000805461ffff19166101011790555b611082611324565b61108b82610e7c565b60b9805460ff60a01b1916600160a01b179055801561095d576000805461ff00191690555050565b600061051b826110c1611353565b611814565b60608686868686866040516020016110e3969594939291906121c8565b60405160208183030381529060405290509695505050505050565b600161110c60206002612306565b611116919061215d565b82602001541061115b5760405162461bcd60e51b815260206004820152601060248201526f1b595c9adb19481d1c995948199d5b1b60821b604482015260640161040c565b60018260200160008282546111709190612312565b9091555050602082015460005b602081101561120d57816001166001036111ac57828482602081106111a4576111a4611f67565b015550505050565b8381602081106111be576111be611f67565b015460408051602081019290925281018490526060016040516020818303038152906040528051906020012092506002826111f9919061232a565b9150806112058161218d565b91505061117d565b5061086461234c565b815460009061123690600160801b90046001600160801b031660016121a6565b83546001600160801b03808316600160801b0291161784559050811561051b576001600160801b038116600090815260019390930160205260409092205590565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01610d62565b60008060006112c185856118e6565b915091506112ce81611954565b509392505050565b6000816112e48460016121a6565b6112ee9190612362565b6001600160801b03169392505050565b80546001600160801b031660000361072a5780546001600160801b031916600117815550565b600054610100900460ff1661134b5760405162461bcd60e51b815260040161040c9061238a565b6105c3611b0a565b61135b611c60565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b60208110156118de57600182821c16600086836020811061184157611841611f67565b015490508160010361187e5760408051602081018390529081018690526060016040516020818303038152906040528051906020012094506118c9565b8486846020811061189157611891611f67565b60200201516040516020016118b0929190918252602082015260400190565b6040516020818303038152906040528051906020012094505b505080806118d69061218d565b91505061181e565b505092915050565b600080825160410361191c5760208301516040840151606085015160001a61191087828585611b3a565b9450945050505061194d565b8251604003611945576020830151604084015161193a868383611c27565b93509350505061194d565b506000905060025b9250929050565b600081600481111561196857611968611ec2565b036119705750565b600181600481111561198457611984611ec2565b036119d15760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161040c565b60028160048111156119e5576119e5611ec2565b03611a325760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161040c565b6003816004811115611a4657611a46611ec2565b03611a9e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161040c565b6004816004811115611ab257611ab2611ec2565b0361072a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161040c565b600054610100900460ff16611b315760405162461bcd60e51b815260040161040c9061238a565b6105c333610d7f565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611b715750600090506003611c1e565b8460ff16601b14158015611b8957508460ff16601c14155b15611b9a5750600090506004611c1e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611bee573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611c1757600060019250925050611c1e565b9150600090505b94509492505050565b6000806001600160ff1b03831681611c4460ff86901c601b612312565b9050611c5287828885611b3a565b935093505050935093915050565b6040518061040001604052806020906020820280368337509192915050565b60008083601f840112611c9157600080fd5b50813567ffffffffffffffff811115611ca957600080fd5b60208301915083602082850101111561194d57600080fd5b60008060008060008060a08789031215611cda57600080fd5b863595506060870188811115611cef57600080fd5b6020880195503567ffffffffffffffff80821115611d0c57600080fd5b611d188a838b01611c7f565b90965094506080890135915080821115611d3157600080fd5b50611d3e89828a01611c7f565b979a9699509497509295939492505050565b600060208284031215611d6257600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611d9057600080fd5b813567ffffffffffffffff80821115611dab57611dab611d69565b604051601f8301601f19908116603f01168101908282118183101715611dd357611dd3611d69565b81604052838152866020858801011115611dec57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215611e2157600080fd5b8335925060208401359150604084013567ffffffffffffffff811115611e4657600080fd5b611e5286828701611d7f565b9150509250925092565b6001600160a01b038116811461072a57600080fd5b600060208284031215611e8357600080fd5b81356106f081611e5c565b803563ffffffff81168114611ea257600080fd5b919050565b600060208284031215611eb957600080fd5b6106f082611e8e565b634e487b7160e01b600052602160045260246000fd5b6020810160038310611efa57634e487b7160e01b600052602160045260246000fd5b91905290565b600080600060608486031215611f1557600080fd5b611f1e84611e8e565b925060208401359150604084013567ffffffffffffffff811115611e4657600080fd5b6020808252600c908201526b6661696c656420737461746560a01b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152604086602083013760a060608201526000611fc860a083018688611f7d565b8281036080840152611fdb818587611f7d565b9998505050505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60005b83811015612038578181015183820152602001612020565b83811115612047576000848401525b50505050565b6000815180845261206581602086016020860161201d565b601f01601f19169290920160200192915050565b838152826020820152606060408201526000612098606083018461204d565b95945050505050565b6020815260006106f0602083018461204d565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60006020828403121561211457600080fd5b81516106f081611e5c565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff8083168185168083038211156121545761215461211f565b01949350505050565b60008282101561216f5761216f61211f565b500390565b828152604060208201526000610d2e604083018461204d565b60006001820161219f5761219f61211f565b5060010190565b60006001600160801b038083168185168083038211156121545761215461211f565b600063ffffffff60e01b808960e01b168352876004840152808760e01b166024840152808660e01b1660288401525083602c830152825161221081604c85016020870161201d565b91909101604c01979650505050505050565b600181815b8085111561225d5781600019048211156122435761224361211f565b8085161561225057918102915b93841c9390800290612227565b509250929050565b6000826122745750600161051b565b816122815750600061051b565b816001811461229757600281146122a1576122bd565b600191505061051b565b60ff8411156122b2576122b261211f565b50506001821b61051b565b5060208310610133831016604e8410600b84101617156122e0575081810a61051b565b6122ea8383612222565b80600019048211156122fe576122fe61211f565b029392505050565b60006106f08383612265565b600082198211156123255761232561211f565b500190565b60008261234757634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052600160045260246000fd5b60006001600160801b03838116908316818110156123825761238261211f565b039392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220c15fcd108b3421f95f721a1b64c13eb5ef1b5cff8953686c8b8888f4fb38853a64736f6c634300080f0033";

type HomeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HomeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Home__factory extends ContractFactory {
  constructor(...args: HomeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _localDomain: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Home> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Home>;
  }
  override getDeployTransaction(
    _localDomain: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  override attach(address: string): Home {
    return super.attach(address) as Home;
  }
  override connect(signer: Signer): Home__factory {
    return super.connect(signer) as Home__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HomeInterface {
    return new utils.Interface(_abi) as HomeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Home {
    return new Contract(address, _abi, signerOrProvider) as Home;
  }
}
