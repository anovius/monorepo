/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenRegistry, TokenRegistryInterface } from "../TokenRegistry";

const _abi = [
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
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "representation",
        type: "address",
      },
    ],
    name: "TokenDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "canonicalToRepresentation",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_custom",
        type: "address",
      },
    ],
    name: "enrollCustom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "ensureLocalToken",
    outputs: [
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_representation",
        type: "address",
      },
    ],
    name: "getCanonicalTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "getLocalAddress",
    outputs: [
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_id",
        type: "address",
      },
    ],
    name: "getLocalAddress",
    outputs: [
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "getRepresentationAddress",
    outputs: [
      {
        internalType: "address",
        name: "_representation",
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
        name: "_local",
        type: "address",
      },
    ],
    name: "getTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
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
        name: "_tokenBeacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "isLocalOrigin",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "mustHaveLocalToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "_oldRepr",
        type: "address",
      },
    ],
    name: "oldReprToCurrentRepr",
    outputs: [
      {
        internalType: "address",
        name: "_currentRepr",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "representationToCanonical",
    outputs: [
      {
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
    ],
    name: "setLocalDomain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenBeacon",
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
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611975806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620001455760003560e01c8063715018a611620000bb578063ccf5a77c116200007a578063ccf5a77c146200035a578063d82d05311462000376578063dc9685a7146200038d578063f153768614620003a4578063f2fde38b14620003bb57600080fd5b8063715018a614620002b05780638da5cb5b14620002ba578063b869d89a14620002cc578063b9730eaf14620002e3578063c86415cb146200033257600080fd5b80633339df9611620001085780633339df96146200022a57806339e85e1f146200023e57806341bdc8b5146200026b578063485cc9551462000282578063589b3c64146200029957600080fd5b806303e418c2146200014a5780630e71e251146200019e5780631ecf6f9f14620001ce57806328b1aea014620001fa5780632c3da59c1462000213575b600080fd5b6200017d6200015b36600462000faf565b6098602052600090815260409020805460019091015463ffffffff9091169082565b6040805163ffffffff90931683526020830191909152015b60405180910390f35b620001b5620001af36600462000faf565b620003d2565b6040516001600160a01b03909116815260200162000195565b620001b5620001df36600462000fcd565b6099602052600090815260409020546001600160a01b031681565b620002116200020b36600462000ffc565b62000463565b005b620001b5620002243660046200103d565b62000482565b606554620001b5906001600160a01b031681565b620002116200024f3660046200106a565b6097805463ffffffff191663ffffffff92909216919091179055565b620002116200027c36600462000faf565b620004dd565b620002116200029336600462001088565b6200052c565b620001b5620002aa3660046200103d565b620005d7565b6200021162000611565b6033546001600160a01b0316620001b5565b620001b5620002dd3660046200103d565b6200064c565b6200017d620002f436600462000faf565b6001600160a01b03166000908152609860209081526040918290208251808401909352805463ffffffff168084526001909101549290910182905291565b620003496200034336600462000faf565b62000677565b604051901515815260200162000195565b609754620001b59064010000000090046001600160a01b031681565b620001b562000387366004620010c0565b620006ab565b620001b56200039e3660046200103d565b620006c2565b6200017d620003b536600462000faf565b62000707565b62000211620003cc36600462000faf565b62000779565b6001600160a01b03811660009081526098602090815260408083208151808301909252805463ffffffff168083526001909101549282019290925290620004485760405162461bcd60e51b815260206004820152600560248201526410b932b83960d91b60448201526064015b60405180910390fd5b6200045c81600001518260200151620006c2565b9392505050565b620004708383836200081b565b6200047d83838362000852565b505050565b600080620004918484620005d7565b90506001600160a01b038116620004d45760405162461bcd60e51b815260206004820152600660248201526510ba37b5b2b760d11b60448201526064016200043f565b90505b92915050565b6033546001600160a01b031633146200050a5760405162461bcd60e51b81526004016200043f90620010df565b606580546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff16620005495760005460ff16156200054d565b303b155b6200056c5760405162461bcd60e51b81526004016200043f9062001114565b600054610100900460ff161580156200058f576000805461ffff19166101011790555b60978054640100000000600160c01b0319166401000000006001600160a01b03861602179055620005c082620008a8565b80156200047d576000805461ff0019169055505050565b6000620005e960975463ffffffff1690565b63ffffffff168363ffffffff16141562000605575080620004d7565b620004d48383620006c2565b6033546001600160a01b031633146200063e5760405162461bcd60e51b81526004016200043f90620010df565b6200064a600062000947565b565b60006200065a8383620005d7565b90506001600160a01b038116620004d757620004d4838362000999565b6001600160a01b03811660009081526098602052604081205463ffffffff1615620006a457506000919050565b503b151590565b6000620004d4836001600160a01b038416620005d7565b600080620006d1848462000bab565b90506000620006e662ffffff19831662000c09565b6000908152609960205260409020546001600160a01b031695945050505050565b6001600160a01b03811660009081526098602090815260408083208151808301909252805463ffffffff16808352600190910154928201929092528291620007665760975463ffffffff1692506001600160a01b038416915062000773565b8051602082015190935091505b50915091565b6033546001600160a01b03163314620007a65760405162461bcd60e51b81526004016200043f90620010df565b6001600160a01b0381166200080d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200043f565b620008188162000947565b50565b6001600160a01b03166000908152609860205260409020805463ffffffff191663ffffffff93909316929092178255600190910155565b600062000860848462000bab565b905060006200087562ffffff19831662000c09565b600090815260996020526040902080546001600160a01b0319166001600160a01b03949094169390931790925550505050565b600054610100900460ff16620008c55760005460ff1615620008c9565b303b155b620008e85760405162461bcd60e51b81526004016200043f9062001114565b600054610100900460ff161580156200090b576000805461ffff19166101011790555b606580546001600160a01b0319166001600160a01b0384161790556200093062000c54565b801562000943576000805461ff00191690555b5050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60975460405160009164010000000090046001600160a01b031690620009bf9062000f84565b6001600160a01b039091168152604060208201819052600090820152606001604051809103906000f080158015620009fb573d6000803e3d6000fd5b509050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562000a3a57600080fd5b505af115801562000a4f573d6000803e3d6000fd5b5050505060008062000a62858562000c88565b6040516319524d7d60e21b815291935091506001600160a01b0384169063654935f49062000a9a9085908590601290600401620011b2565b600060405180830381600087803b15801562000ab557600080fd5b505af115801562000aca573d6000803e3d6000fd5b50505050826001600160a01b031663f2fde38b62000af06033546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801562000b3257600080fd5b505af115801562000b47573d6000803e3d6000fd5b5050505062000b5885858562000852565b62000b658585856200081b565b826001600160a01b0316848663ffffffff167f84d5e3618bf276f3d29a931646fdd996b398a3efa3cf6bceefc1fe7f0304059f60405160405180910390a4505092915050565b6000620004d460016040516001600160e01b031960e087901b1660208201526024810185905262000bf39060009060440160408051601f198184030181529190529062000d23565b6301000000600160d81b031660d89190911b1790565b60008062000c208360781c6001600160601b031690565b6001600160601b03169050600062000c418460181c6001600160601b031690565b6001600160601b03169091209392505050565b600054610100900460ff1662000c7e5760405162461bcd60e51b81526004016200043f90620011ef565b6200064a62000d49565b606080600062000c988462000d7e565b91505062000ca68562000e32565b8160405160200162000ce892919060b09290921b6001600160b01b0319168252601760f91b600a83015260e01b6001600160e01b031916600b820152600f0190565b60408051808303601f19018152600f808452838301909252945060208201818036833701905050915060208301516020830152509250929050565b81516000906020840162000d4064ffffffffff8516828462000eb3565b95945050505050565b600054610100900460ff1662000d735760405162461bcd60e51b81526004016200043f90620011ef565b6200064a3362000947565b600080601f5b600f8160ff16111562000de557600062000da082600862001250565b60ff1685901c905062000db38162000efc565b61ffff16841793508160ff1660101462000dcf57601084901b93505b5062000ddd6001826200127c565b905062000d84565b50600f5b60ff8160ff161015620007735760ff600882021684901c62000e0b8162000efc565b61ffff16831792508160ff1660001462000e2757601083901b92505b506000190162000de9565b60006030815b600a8160ff16101562000eac5762000e5281600862001250565b60ff168262000e63600a87620012b8565b63ffffffff1662000e759190620012de565b69ffffffffffffffffffff16901b929092179162000e95600a856200130f565b935062000ea460018262001335565b905062000e38565b5050919050565b60008062000ec283856200135d565b905060405181111562000ed3575060005b8062000ee75762ffffff199150506200045c565b5050606092831b9190911790911b1760181b90565b600062000f1060048360ff16901c62000f32565b60ff1661ffff919091161760081b62000f298262000f32565b60ff1617919050565b6040805180820190915260108082526f181899199a1a9b1b9c1cb0b131b232b360811b6020830152600091600f8416918290811062000f755762000f7562001378565b016020015160f81c9392505050565b6105b1806200138f83390190565b80356001600160a01b038116811462000faa57600080fd5b919050565b60006020828403121562000fc257600080fd5b620004d48262000f92565b60006020828403121562000fe057600080fd5b5035919050565b803563ffffffff8116811462000faa57600080fd5b6000806000606084860312156200101257600080fd5b6200101d8462000fe7565b925060208401359150620010346040850162000f92565b90509250925092565b600080604083850312156200105157600080fd5b6200105c8362000fe7565b946020939093013593505050565b6000602082840312156200107d57600080fd5b620004d48262000fe7565b600080604083850312156200109c57600080fd5b620010a78362000f92565b9150620010b76020840162000f92565b90509250929050565b60008060408385031215620010d457600080fd5b620010a78362000fe7565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6000815180845260005b818110156200118a576020818501810151868301820152016200116c565b818111156200119d576000602083870101525b50601f01601f19169290920160200192915050565b606081526000620011c7606083018662001162565b8281036020840152620011db818662001162565b91505060ff83166040830152949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168160ff04811182151516156200127457620012746200123a565b029392505050565b600060ff821660ff8416808210156200129957620012996200123a565b90039392505050565b634e487b7160e01b600052601260045260246000fd5b600063ffffffff80841680620012d257620012d2620012a2565b92169190910692915050565b600069ffffffffffffffffffff8083168185168083038211156200130657620013066200123a565b01949350505050565b600063ffffffff80841680620013295762001329620012a2565b92169190910492915050565b600060ff821660ff84168060ff038211156200135557620013556200123a565b019392505050565b600082198211156200137357620013736200123a565b500190565b634e487b7160e01b600052603260045260246000fdfe60a06040526040516105b13803806105b18339810160408190526100229161027e565b6100358261010b60201b6100291760201c565b6100795760405162461bcd60e51b815260206004820152601060248201526f18995858dbdb880858dbdb9d1c9858dd60821b60448201526064015b60405180910390fd5b6001600160a01b03821660805260006100918361011a565b90506100a68161010b60201b6100291760201c565b6100f25760405162461bcd60e51b815260206004820152601f60248201527f626561636f6e20696d706c656d656e746174696f6e2021636f6e7472616374006044820152606401610070565b8151156101035761010381836101ae565b5050506103b3565b6001600160a01b03163b151590565b6000806000836001600160a01b0316604051600060405180830381855afa9150503d8060008114610167576040519150601f19603f3d011682016040523d82523d6000602084013e61016c565b606091505b50915091508181906101915760405162461bcd60e51b81526004016100709190610340565b50808060200190518101906101a69190610373565b949350505050565b6000826001600160a01b0316826040516101c89190610397565b600060405180830381855af49150503d8060008114610203576040519150601f19603f3d011682016040523d82523d6000602084013e610208565b606091505b505090508061021b573d6000803e3d6000fd5b505050565b6001600160a01b038116811461023557600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610269578181015183820152602001610251565b83811115610278576000848401525b50505050565b6000806040838503121561029157600080fd5b825161029c81610220565b60208401519092506001600160401b03808211156102b957600080fd5b818501915085601f8301126102cd57600080fd5b8151818111156102df576102df610238565b604051601f8201601f19908116603f0116810190838211818310171561030757610307610238565b8160405282815288602084870101111561032057600080fd5b61033183602083016020880161024e565b80955050505050509250929050565b602081526000825180602084015261035f81604085016020870161024e565b601f01601f19169190910160400192915050565b60006020828403121561038557600080fd5b815161039081610220565b9392505050565b600082516103a981846020870161024e565b9190910192915050565b6080516101e46103cd6000396000603f01526101e46000f3fe60806040523661001357610011610017565b005b6100115b610027610022610038565b610068565b565b6001600160a01b03163b151590565b60006100637f000000000000000000000000000000000000000000000000000000000000000061008c565b905090565b3660008037600080366000845af43d6000803e808015610087573d6000f35b3d6000fd5b6000806000836001600160a01b0316604051600060405180830381855afa9150503d80600081146100d9576040519150601f19603f3d011682016040523d82523d6000602084013e6100de565b606091505b509150915081819061010c5760405162461bcd60e51b81526004016101039190610129565b60405180910390fd5b5080806020019051810190610121919061017e565b949350505050565b600060208083528351808285015260005b818110156101565785810183015185820160400152820161013a565b81811115610168576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561019057600080fd5b81516001600160a01b03811681146101a757600080fd5b939250505056fea264697066735822122054e77497fad4fea0688365c74ee6540bf5fb1b55a5b34c14f8e5c506fac467ca64736f6c634300080b0033a2646970667358221220f8ea48588694e0ddca1ff00c12cb3ed31e83bfbef669d60e26fea04bd0109c4064736f6c634300080b0033";

type TokenRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenRegistry__factory extends ContractFactory {
  constructor(...args: TokenRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TokenRegistry";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenRegistry> {
    return super.deploy(overrides || {}) as Promise<TokenRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenRegistry {
    return super.attach(address) as TokenRegistry;
  }
  connect(signer: Signer): TokenRegistry__factory {
    return super.connect(signer) as TokenRegistry__factory;
  }
  static readonly contractName: "TokenRegistry";
  public readonly contractName: "TokenRegistry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenRegistryInterface {
    return new utils.Interface(_abi) as TokenRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenRegistry {
    return new Contract(address, _abi, signerOrProvider) as TokenRegistry;
  }
}
