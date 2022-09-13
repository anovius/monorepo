/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  PortalFacet,
  PortalFacetInterface,
} from "../../../../../contracts/core/connext/facets/PortalFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__getTokenIndexFromStableSwapPool_notExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_nativeAssetNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__transferAssetToContract_feeOnTransferNotSupported",
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
    name: "PortalFacet__repayAavePortalFor_notSupportedAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortalFor_zeroAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortal_insufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortal_swapFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__setAavePortalFee_invalidFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AavePortalRepayment",
    type: "event",
  },
  {
    inputs: [],
    name: "aavePool",
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
    name: "aavePortalFee",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "getAavePortalDebt",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "getAavePortalFeeDebt",
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
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint32",
            name: "originDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "destinationDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "agent",
            type: "address",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
        ],
        internalType: "struct CallParams",
        name: "_params",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "originSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bridgedAmt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "normalizedIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "canonicalId",
            type: "bytes32",
          },
          {
            internalType: "uint32",
            name: "canonicalDomain",
            type: "uint32",
          },
        ],
        internalType: "struct TransferIdGenerationInformation",
        name: "_idInfo",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_backingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxIn",
        type: "uint256",
      },
    ],
    name: "repayAavePortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint32",
            name: "originDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "destinationDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "agent",
            type: "address",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
        ],
        internalType: "struct CallParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adopted",
        type: "address",
      },
      {
        internalType: "address",
        name: "_originSender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_normalizedIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bridgedAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_backingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
    ],
    name: "repayAavePortalFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aavePool",
        type: "address",
      },
    ],
    name: "setAavePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aavePortalFeeNumerator",
        type: "uint256",
      },
    ],
    name: "setAavePortalFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506120f7806100206000396000f3fe60806040526004361061007b5760003560e01c806354cc92261161004e57806354cc922614610122578063a03e4bc314610135578063d1e5f31c1461016b578063ef1eb0c11461019857600080fd5b806309d7ba541461008057806328936053146100c0578063349f937c146100e25780633bd30d3414610102575b600080fd5b34801561008c57600080fd5b506100ad61009b366004611b50565b60009081526023602052604090205490565b6040519081526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004611b81565b6101ad565b005b3480156100ee57600080fd5b506100e06100fd366004611c1e565b6103ae565b34801561010e57600080fd5b506100e061011d366004611b50565b61042f565b6100e0610130366004611c3b565b6104b0565b34801561014157600080fd5b5060215461010090046001600160a01b03166040516001600160a01b0390911681526020016100b7565b34801561017757600080fd5b506100ad610186366004611b50565b60009081526024602052604090205490565b3480156101a457600080fd5b506022546100ad565b601e54600119016101d157604051637ce54e2d60e11b815260040160405180910390fd5b6002601e5560045460009064010000000090046001600160a01b031663589b3c6461020260c0880160a08901611cdf565b6040516001600160e01b031960e084901b16815263ffffffff91909116600482015260808801356024820152604401602060405180830381865afa15801561024e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102729190611cfa565b336000908152600b602090815260408083206001600160a01b03851684529091529020549091508211156102b95760405163badaeb5960e01b815260040160405180910390fd5b60006102fd6102c788611dfc565b6040880135602089013560608a013560808b01356102eb60c08d0160a08e01611cdf565b6102f860208e018e611c1e565b6105a8565b90506000808061033461032360808b013561031e60c08d0160a08e01611cdf565b6105ea565b8661032e8a8c611eb8565b8961062d565b92509250925082610358576040516379a3a9f160e01b815260040160405180910390fd5b336000908152600b602090815260408083206001600160a01b03891684529091528120805484929061038b908490611ed0565b9091555061039d905081898987610687565b50506001601e555050505050505050565b336103e07fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b031614610407576040516314e74a2560e21b815260040160405180910390fd5b602180546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b336104617fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b031614610488576040516314e74a2560e21b815260040160405180910390fd5b6127108111156104ab5760405163f48157d160e01b815260040160405180910390fd5b602255565b601e54600119016104d457604051637ce54e2d60e11b815260040160405180910390fd5b6002601e556001600160a01b0387166000908152600760209081526040918290208251808401909352805463ffffffff1683526001015490820181905261052e5760405163f88b978d60e01b815260040160405180910390fd5b600061054f61053c8b611dfc565b888888866020015187600001518e6105a8565b9050600061055d8486611eb8565b905080600003610580576040516330d5e3e360e11b815260040160405180910390fd5b61058a8a826107dc565b6105968a868685610687565b50506001601e55505050505050505050565b600084888386868a8c6040516020016105c79796959493929190611f3f565b604051602081830303815290604052805190602001209050979650505050505050565b6000828260405160200161060e92919091825263ffffffff16602082015260400190565b6040516020818303038152906040528051906020012090505b92915050565b6000848152600860205260408120548190819081906001600160a01b0390811690881681036106675760018789945094509450505061067d565b6106748989838a8a61081d565b94509450945050505b9450945094915050565b600081815260236020526040812080548592906106a5908490611ed0565b9091555050600081815260246020526040812080548492906106c8908490611ed0565b90915550506021546106eb90859061010090046001600160a01b03166000610a0a565b60215461071190859061010090046001600160a01b031661070c8587611eb8565b610b5c565b60215460405163d65dc7a160e01b81526001600160a01b03868116600483015260248201869052604482018590526101009092049091169063d65dc7a190606401600060405180830381600087803b15801561076c57600080fd5b505af1158015610780573d6000803e3d6000fd5b5050604080516001600160a01b0388168152602081018790529081018590523360608201528392507f54b01a5ae4ec60eeeef60570103ba1a5de0999725219c02b2baf1b706625bb08915060800160405180910390a250505050565b806000036107e8575050565b6001600160a01b03821661080f57604051632a38b13360e01b815260040160405180910390fd5b6108198282610c14565b5050565b60008080806000806108408b6000908152601f6020526040902060080154151590565b1561089e5760008b8152601f840160205260408120906108608d8d610d2d565b9050600061086e8e8d610d2d565b905061087c8383838e610db3565b8a1061089657600194506108938383838e8e610e1e565b93505b5050506109fa565b60008b815260058401602052604080822054905163f9a15fb960e01b81526001600160a01b038d811660048301528c81166024830152604482018c90529091169190829063f9a15fb990606401602060405180830381865afa158015610908573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092c9190612005565b90508881116109f757600193506109458c836000610a0a565b6109508c8383610b5c565b6001600160a01b038216635428c1178b8e8e8d61096f42610e10611eb8565b6040516001600160e01b031960e088901b16815260048101959095526001600160a01b0393841660248601529290911660448401526064830152608482015260a4016020604051808303816000875af11580156109d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f49190612005565b92505b50505b909a909950969750505050505050565b801580610a845750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610a5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a829190612005565b155b610af45760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b6040516001600160a01b038316602482015260448101829052610b5790849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526110e1565b505050565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610bad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd19190612005565b610bdb9190611eb8565b6040516001600160a01b038516602482015260448101829052909150610c0e90859063095ea7b360e01b90606401610b20565b50505050565b80600003610c20575050565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8b9190612005565b9050610c99833330856111b3565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa158015610ce1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d059190612005565b610d0f9190611ed0565b14610b5757604051631a39afd960e11b815260040160405180910390fd5b6000828152602080805260408083206001600160a01b03851680855290835281842054868552601f9093529083206008018054849360ff1692919083908110610d7857610d7861201e565b6000918252602090912001546001600160a01b031614610dab5760405163054e442960e41b815260040160405180910390fd5b949350505050565b6000610e148585858589600a01805480602002602001604051908101604052809291908181526020018280548015610e0a57602002820191906000526020600020905b815481526020019060010190808311610df6575b50505050506111eb565b5095945050505050565b600085600a018460ff1681548110610e3857610e3861201e565b9060005260206000200154831115610e8b5760405162461bcd60e51b81526020600482015260166024820152756d6f7265207468616e20706f6f6c2062616c616e636560501b6044820152606401610aeb565b600080600088600a01805480602002602001604051908101604052809291908181526020018280548015610ede57602002820191906000526020600020905b815481526020019060010190808311610eca575b50505050509050610ef289898989856111eb565b909350915084831115610f345760405162461bcd60e51b815260206004820152600a6024820152690c8f0407c40dac2f088f60b31b6044820152606401610aeb565b6000896009018960ff1681548110610f4e57610f4e61201e565b90600052602060002001546402540be4008b6006015485610f6f9190612034565b610f799190612053565b610f839190612053565b90508084838b60ff1681518110610f9c57610f9c61201e565b6020026020010151610fae9190611eb8565b610fb89190611ed0565b8a600a018a60ff1681548110610fd057610fd061201e565b906000526020600020018190555086828960ff1681518110610ff457610ff461201e565b60200260200101516110069190611ed0565b8a600a018960ff168154811061101e5761101e61201e565b600091825260209091200155801561108357808a600b018a60ff16815481106110495761104961201e565b906000526020600020015461105e9190611eb8565b8a600b018a60ff16815481106110765761107661201e565b6000918252602090912001555b895460408051868152602081018a905260ff8c8116828401528b16606082015290513392917f28d4cf2d5709da3b474b5f05cfd7083faffd601f9500d1f8439b8a13ec7df320919081900360800190a3509198975050505050505050565b6000611136826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114359092919063ffffffff16565b805190915015610b5757808060200190518101906111549190612075565b610b575760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610aeb565b6040516001600160a01b0380851660248301528316604482015260648101829052610c0e9085906323b872dd60e01b90608401610b20565b6000808460ff168660ff16036112435760405162461bcd60e51b815260206004820152601760248201527f636f6d7061726520746f6b656e20746f20697473656c660000000000000000006044820152606401610aeb565b60008760090180548060200260200160405190810160405280929190818152602001828054801561129357602002820191906000526020600020905b81548152602001906001019080831161127f575b5050505050905060006112a6858361144e565b905080518860ff161080156112be575080518760ff16105b6112ff5760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b6044820152606401610aeb565b600061130a8a611559565b905060006113188383611564565b9050838960ff168151811061132f5761132f61201e565b6020026020010151886113429190612034565b838a60ff16815181106113575761135761201e565b60200260200101516113699190611ed0565b838a60ff168151811061137e5761137e61201e565b6020026020010181815250506000611398838c8685611711565b9050838b60ff16815181106113af576113af61201e565b6020026020010151816113c29190611ed0565b6113cd906001611eb8565b96506402540be4008c60050154886113e59190612034565b6113ef9190612053565b9550848b60ff16815181106114065761140661201e565b6020026020010151868861141a9190611eb8565b6114249190612053565b965050505050509550959350505050565b60606114448484600085611900565b90505b9392505050565b8151815160609190811461149b5760405162461bcd60e51b81526020600482015260146024820152736d69736d61746368206d756c7469706c6965727360601b6044820152606401610aeb565b60008167ffffffffffffffff8111156114b6576114b6611d17565b6040519080825280602002602001820160405280156114df578160200160208202803683370190505b50905060005b82811015611550578481815181106114ff576114ff61201e565b60200260200101518682815181106115195761151961201e565b602002602001015161152b9190612034565b82828151811061153d5761153d61201e565b60209081029190910101526001016114e5565b50949350505050565b600061062782611a31565b815160009081805b828110156115a3578581815181106115865761158661201e565b6020026020010151826115999190611eb8565b915060010161156c565b50806000036115b757600092505050610627565b600081816115c58588612034565b905060005b6101008110156116d2578260005b8781101561162357878b82815181106115f3576115f361201e565b60200260200101516116059190612034565b61160f8684612034565b6116199190612053565b91506001016115d8565b50839450808760016116359190611eb8565b61163f9190612034565b60648561164c8287611ed0565b6116569190612034565b6116609190612053565b61166a9190611eb8565b846116758984612034565b60646116818a88612034565b61168b9190612053565b6116959190611eb8565b61169f9190612034565b6116a99190612053565b93506116b58486611adb565b156116c95783975050505050505050610627565b506001016115ca565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b6044820152606401610aeb565b815160009060ff8516811161175a5760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b6044820152606401610aeb565b82600080611768848a612034565b905060005b848110156117ea578860ff1681146117e2578781815181106117915761179161201e565b6020026020010151836117a49190611eb8565b9250848882815181106117b9576117b961201e565b60200260200101516117cb9190612034565b6117d58886612034565b6117df9190612053565b93505b60010161176d565b506117f58482612034565b60646118018886612034565b61180b9190612034565b6118159190612053565b9250600081611825606489612034565b61182f9190612053565b6118399084611eb8565b9050600087815b6101008110156118b757819250898483600261185c9190612034565b6118669190611eb8565b6118709190611ed0565b8761187b8480612034565b6118859190611eb8565b61188f9190612053565b915061189b8284611adb565b156118af57509650610dab95505050505050565b600101611840565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e766572676500006044820152606401610aeb565b6060824710156119615760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610aeb565b6001600160a01b0385163b6119b85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610aeb565b600080866001600160a01b031685876040516119d49190612092565b60006040518083038185875af1925050503d8060008114611a11576040519150601f19603f3d011682016040523d82523d6000602084013e611a16565b606091505b5091509150611a26828286611af2565b979650505050505050565b600481015460028201546000919042821115611447576003840154600185015480831115611a9f57611a638285611ed0565b611a6d8342611ed0565b611a778386611ed0565b611a819190612034565b611a8b9190612053565b611a959082611eb8565b9695505050505050565b611aa98285611ed0565b611ab38342611ed0565b611abd8584611ed0565b611ac79190612034565b611ad19190612053565b611a959082611ed0565b60006001611ae98484611b2b565b11159392505050565b60608315611b01575081611447565b825115611b115782518084602001fd5b8160405162461bcd60e51b8152600401610aeb91906120ae565b600081831115611b4657611b3f8284611ed0565b9050610627565b6114478383611ed0565b600060208284031215611b6257600080fd5b5035919050565b600060e08284031215611b7b57600080fd5b50919050565b6000806000806000858703610140811215611b9b57600080fd5b863567ffffffffffffffff811115611bb257600080fd5b611bbe89828a01611b69565b96505060c0601f1982011215611bd357600080fd5b50939660208601965060e086013595610100810135955061012001359350915050565b6001600160a01b0381168114611c0b57600080fd5b50565b8035611c1981611bf6565b919050565b600060208284031215611c3057600080fd5b813561144781611bf6565b600080600080600080600080610100898b031215611c5857600080fd5b883567ffffffffffffffff811115611c6f57600080fd5b611c7b8b828c01611b69565b9850506020890135611c8c81611bf6565b96506040890135611c9c81611bf6565b979a96995096976060810135975060808101359660a0820135965060c0820135955060e0909101359350915050565b803563ffffffff81168114611c1957600080fd5b600060208284031215611cf157600080fd5b61144782611ccb565b600060208284031215611d0c57600080fd5b815161144781611bf6565b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611d5057611d50611d17565b60405290565b600082601f830112611d6757600080fd5b813567ffffffffffffffff80821115611d8257611d82611d17565b604051601f8301601f19908116603f01168101908282118183101715611daa57611daa611d17565b81604052838152866020858801011115611dc357600080fd5b836020870160208301376000602085830101528094505050505092915050565b8015158114611c0b57600080fd5b8035611c1981611de3565b600060e08236031215611e0e57600080fd5b611e16611d2d565b611e1f83611c0e565b8152602083013567ffffffffffffffff811115611e3b57600080fd5b611e4736828601611d56565b602083015250611e5960408401611ccb565b6040820152611e6a60608401611ccb565b6060820152611e7b60808401611c0e565b6080820152611e8c60a08401611df1565b60a082015260c092830135928101929092525090565b634e487b7160e01b600052601160045260246000fd5b60008219821115611ecb57611ecb611ea2565b500190565b600082821015611ee257611ee2611ea2565b500390565b60005b83811015611f02578181015183820152602001611eea565b83811115610c0e5750506000910152565b60008151808452611f2b816020860160208601611ee7565b601f01601f19169290920160200192915050565b87815260e0602082015260018060a01b0387511660e08201526000602088015160e0610100840152611f756101c0840182611f13565b60408a015163ffffffff90811661012086015260608b01511661014085015260808a01516001600160a01b0381166101608601529091505060a08901518015156101808501525060c08901516101a08401526001600160a01b03881660408401529050856060830152611ff0608083018663ffffffff169052565b60a082019390935260c0015295945050505050565b60006020828403121561201757600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561204e5761204e611ea2565b500290565b60008261207057634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561208757600080fd5b815161144781611de3565b600082516120a4818460208701611ee7565b9190910192915050565b6020815260006114476020830184611f1356fea2646970667358221220f521a8afb4316c750d59c5c3db546b74b66986894d294e8c3a041546ef98a01064736f6c634300080f0033";

type PortalFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PortalFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PortalFacet__factory extends ContractFactory {
  constructor(...args: PortalFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PortalFacet> {
    return super.deploy(overrides || {}) as Promise<PortalFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PortalFacet {
    return super.attach(address) as PortalFacet;
  }
  override connect(signer: Signer): PortalFacet__factory {
    return super.connect(signer) as PortalFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PortalFacetInterface {
    return new utils.Interface(_abi) as PortalFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PortalFacet {
    return new Contract(address, _abi, signerOrProvider) as PortalFacet;
  }
}
