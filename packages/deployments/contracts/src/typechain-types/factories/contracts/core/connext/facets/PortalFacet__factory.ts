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
            name: "destinationMinOut",
            type: "uint256",
          },
        ],
        internalType: "struct CallParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address",
        name: "_originSender",
        type: "address",
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
            name: "destinationMinOut",
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
  "0x608060405234801561001057600080fd5b506120b8806100206000396000f3fe60806040526004361061007b5760003560e01c806376e06a531161004e57806376e06a5314610115578063a03e4bc314610135578063d1e5f31c1461016b578063ef1eb0c11461019857600080fd5b806309d7ba5414610080578063349f937c146100c05780633bd30d34146100e2578063442ec49c14610102575b600080fd5b34801561008c57600080fd5b506100ad61009b366004611b19565b60009081526024602052604090205490565b6040519081526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004611b4e565b6101ad565b005b3480156100ee57600080fd5b506100e06100fd366004611b19565b61022e565b6100e0610110366004611b81565b6102af565b34801561012157600080fd5b506100e0610130366004611c04565b6103a5565b34801561014157600080fd5b5060225461010090046001600160a01b03166040516001600160a01b0390911681526020016100b7565b34801561017757600080fd5b506100ad610186366004611b19565b60009081526025602052604090205490565b3480156101a457600080fd5b506023546100ad565b336101df7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b031614610206576040516314e74a2560e21b815260040160405180910390fd5b602280546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b336102607fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b031614610287576040516314e74a2560e21b815260040160405180910390fd5b6127108111156102aa5760405163f48157d160e01b815260040160405180910390fd5b602355565b601f54600119016102d357604051637ce54e2d60e11b815260040160405180910390fd5b6002601f556001600160a01b0386166000908152600760209081526040918290208251808401909352805463ffffffff1683526001015490820181905261032d5760405163f88b978d60e01b815260040160405180910390fd5b600061034d61033b8a611d95565b8787856020015186600001518c610575565b9050600061035b8486611e51565b90508060000361037e576040516330d5e3e360e11b815260040160405180910390fd5b61038889826105b4565b610394898686856105f5565b50506001601f555050505050505050565b601f54600119016103c957604051637ce54e2d60e11b815260040160405180910390fd5b6002601f55336000908152600b602090815260408083206001600160a01b038b1684529091529020548111156104125760405163badaeb5960e01b815260040160405180910390fd5b600480546040516378a9bb4360e11b81526001600160a01b038a81169382019390935260009283926401000000009004169063f1537686906024016040805180830381865afa158015610469573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048d9190611e69565b9150915060006104aa8b6104a090611d95565b898985878e610575565b905060008060006104cf6104be868861074a565b8e6104c98b8d611e51565b8a61078d565b925092509250826104f3576040516379a3a9f160e01b815260040160405180910390fd5b816000600b016000336001600160a01b03166001600160a01b0316815260200190815260200160002060008f6001600160a01b03166001600160a01b03168152602001908152602001600020600082825461054e9190611e97565b909155506105609050818a8a876105f5565b50506001601f55505050505050505050505050565b600084878386868a60405160200161059296959493929190611f06565b6040516020818303038152906040528051906020012090509695505050505050565b806000036105c0575050565b6001600160a01b0382166105e757604051632a38b13360e01b815260040160405180910390fd5b6105f182826107e7565b5050565b60008181526024602052604081208054859290610613908490611e97565b909155505060008181526025602052604081208054849290610636908490611e97565b909155505060225461065990859061010090046001600160a01b03166000610905565b60225461067f90859061010090046001600160a01b031661067a8587611e51565b610a52565b60225460405163d65dc7a160e01b81526001600160a01b03868116600483015260248201869052604482018590526101009092049091169063d65dc7a190606401600060405180830381600087803b1580156106da57600080fd5b505af11580156106ee573d6000803e3d6000fd5b5050604080516001600160a01b0388168152602081018790529081018590523360608201528392507f54b01a5ae4ec60eeeef60570103ba1a5de0999725219c02b2baf1b706625bb08915060800160405180910390a250505050565b6000828260405160200161076e92919091825263ffffffff16602082015260400190565b6040516020818303038152906040528051906020012090505b92915050565b6000848152600860205260408120548190819081906001600160a01b0390811690881681036107c7576001878994509450945050506107dd565b6107d48989838a8a610b0a565b94509450945050505b9450945094915050565b806000036107f3575050565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa15801561083a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085e9190611fc6565b905061086c83333085610cf6565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa1580156108b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d89190611fc6565b6108e29190611e97565b1461090057604051631a39afd960e11b815260040160405180910390fd5b505050565b80158061097f5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610959573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097d9190611fc6565b155b6109ef5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b6040516001600160a01b03831660248201526044810182905261090090849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610d2e565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610aa3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac79190611fc6565b610ad19190611e51565b6040516001600160a01b038516602482015260448101829052909150610b0490859063095ea7b360e01b90606401610a1b565b50505050565b6000808080600080610b2c8b6000908152602080526040902060080154151590565b15610b8a5760008b8152602080850190526040812090610b4c8d8d610e00565b90506000610b5a8e8d610e00565b9050610b688383838e610e86565b8a10610b825760019450610b7f8383838e8e610ef1565b93505b505050610ce6565b60008b815260058401602052604080822054905163f9a15fb960e01b81526001600160a01b038d811660048301528c81166024830152604482018c90529091169190829063f9a15fb990606401602060405180830381865afa158015610bf4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c189190611fc6565b9050888111610ce35760019350610c318c836000610905565b610c3c8c8383610a52565b6001600160a01b038216635428c1178b8e8e8d610c5b42610e10611e51565b6040516001600160e01b031960e088901b16815260048101959095526001600160a01b0393841660248601529290911660448401526064830152608482015260a4016020604051808303816000875af1158015610cbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce09190611fc6565b92505b50505b909a909950969750505050505050565b6040516001600160a01b0380851660248301528316604482015260648101829052610b049085906323b872dd60e01b90608401610a1b565b6000610d83826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111b49092919063ffffffff16565b8051909150156109005780806020019051810190610da19190611fdf565b6109005760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016109e6565b60008281526021602090815260408083206001600160a01b038516808552908352818420548685529280529083206008018054849360ff1692919083908110610e4b57610e4b611ffc565b6000918252602090912001546001600160a01b031614610e7e5760405163054e442960e41b815260040160405180910390fd5b949350505050565b6000610ee78585858589600a01805480602002602001604051908101604052809291908181526020018280548015610edd57602002820191906000526020600020905b815481526020019060010190808311610ec9575b50505050506111cd565b5095945050505050565b600085600a018460ff1681548110610f0b57610f0b611ffc565b9060005260206000200154831115610f5e5760405162461bcd60e51b81526020600482015260166024820152756d6f7265207468616e20706f6f6c2062616c616e636560501b60448201526064016109e6565b600080600088600a01805480602002602001604051908101604052809291908181526020018280548015610fb157602002820191906000526020600020905b815481526020019060010190808311610f9d575b50505050509050610fc589898989856111cd565b9093509150848311156110075760405162461bcd60e51b815260206004820152600a6024820152690c8f0407c40dac2f088f60b31b60448201526064016109e6565b6000896009018960ff168154811061102157611021611ffc565b90600052602060002001546402540be4008b60060154856110429190612012565b61104c9190612031565b6110569190612031565b90508084838b60ff168151811061106f5761106f611ffc565b60200260200101516110819190611e51565b61108b9190611e97565b8a600a018a60ff16815481106110a3576110a3611ffc565b906000526020600020018190555086828960ff16815181106110c7576110c7611ffc565b60200260200101516110d99190611e97565b8a600a018960ff16815481106110f1576110f1611ffc565b600091825260209091200155801561115657808a600b018a60ff168154811061111c5761111c611ffc565b90600052602060002001546111319190611e51565b8a600b018a60ff168154811061114957611149611ffc565b6000918252602090912001555b895460408051868152602081018a905260ff8c8116828401528b16606082015290513392917f28d4cf2d5709da3b474b5f05cfd7083faffd601f9500d1f8439b8a13ec7df320919081900360800190a3509198975050505050505050565b60606111c38484600085611417565b90505b9392505050565b6000808460ff168660ff16036112255760405162461bcd60e51b815260206004820152601760248201527f636f6d7061726520746f6b656e20746f20697473656c6600000000000000000060448201526064016109e6565b60008760090180548060200260200160405190810160405280929190818152602001828054801561127557602002820191906000526020600020905b815481526020019060010190808311611261575b5050505050905060006112888583611548565b905080518860ff161080156112a0575080518760ff16105b6112e15760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b60448201526064016109e6565b60006112ec8a611653565b905060006112fa838361165e565b9050838960ff168151811061131157611311611ffc565b6020026020010151886113249190612012565b838a60ff168151811061133957611339611ffc565b602002602001015161134b9190611e97565b838a60ff168151811061136057611360611ffc565b602002602001018181525050600061137a838c868561180b565b9050838b60ff168151811061139157611391611ffc565b6020026020010151816113a49190611e97565b6113af906001611e51565b96506402540be4008c60050154886113c79190612012565b6113d19190612031565b9550848b60ff16815181106113e8576113e8611ffc565b602002602001015186886113fc9190611e51565b6114069190612031565b965050505050509550959350505050565b6060824710156114785760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016109e6565b6001600160a01b0385163b6114cf5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109e6565b600080866001600160a01b031685876040516114eb9190612053565b60006040518083038185875af1925050503d8060008114611528576040519150601f19603f3d011682016040523d82523d6000602084013e61152d565b606091505b509150915061153d8282866119fa565b979650505050505050565b815181516060919081146115955760405162461bcd60e51b81526020600482015260146024820152736d69736d61746368206d756c7469706c6965727360601b60448201526064016109e6565b60008167ffffffffffffffff8111156115b0576115b0611c90565b6040519080825280602002602001820160405280156115d9578160200160208202803683370190505b50905060005b8281101561164a578481815181106115f9576115f9611ffc565b602002602001015186828151811061161357611613611ffc565b60200260200101516116259190612012565b82828151811061163757611637611ffc565b60209081029190910101526001016115df565b50949350505050565b600061078782611a33565b815160009081805b8281101561169d5785818151811061168057611680611ffc565b6020026020010151826116939190611e51565b9150600101611666565b50806000036116b157600092505050610787565b600081816116bf8588612012565b905060005b6101008110156117cc578260005b8781101561171d57878b82815181106116ed576116ed611ffc565b60200260200101516116ff9190612012565b6117098684612012565b6117139190612031565b91506001016116d2565b508394508087600161172f9190611e51565b6117399190612012565b6064856117468287611e97565b6117509190612012565b61175a9190612031565b6117649190611e51565b8461176f8984612012565b606461177b8a88612012565b6117859190612031565b61178f9190611e51565b6117999190612012565b6117a39190612031565b93506117af8486611add565b156117c35783975050505050505050610787565b506001016116c4565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b60448201526064016109e6565b815160009060ff851681116118545760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b60448201526064016109e6565b82600080611862848a612012565b905060005b848110156118e4578860ff1681146118dc5787818151811061188b5761188b611ffc565b60200260200101518361189e9190611e51565b9250848882815181106118b3576118b3611ffc565b60200260200101516118c59190612012565b6118cf8886612012565b6118d99190612031565b93505b600101611867565b506118ef8482612012565b60646118fb8886612012565b6119059190612012565b61190f9190612031565b925060008161191f606489612012565b6119299190612031565b6119339084611e51565b9050600087815b6101008110156119b15781925089848360026119569190612012565b6119609190611e51565b61196a9190611e97565b876119758480612012565b61197f9190611e51565b6119899190612031565b91506119958284611add565b156119a957509650610e7e95505050505050565b60010161193a565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e7665726765000060448201526064016109e6565b60608315611a095750816111c6565b825115611a195782518084602001fd5b8160405162461bcd60e51b81526004016109e6919061206f565b6004810154600282015460009190428211156111c6576003840154600185015480831115611aa157611a658285611e97565b611a6f8342611e97565b611a798386611e97565b611a839190612012565b611a8d9190612031565b611a979082611e51565b9695505050505050565b611aab8285611e97565b611ab58342611e97565b611abf8584611e97565b611ac99190612012565b611ad39190612031565b611a979082611e97565b60006001611aeb8484611af4565b11159392505050565b600081831115611b0f57611b088284611e97565b9050610787565b6111c68383611e97565b600060208284031215611b2b57600080fd5b5035919050565b80356001600160a01b0381168114611b4957600080fd5b919050565b600060208284031215611b6057600080fd5b6111c682611b32565b600060e08284031215611b7b57600080fd5b50919050565b600080600080600080600060e0888a031215611b9c57600080fd5b873567ffffffffffffffff811115611bb357600080fd5b611bbf8a828b01611b69565b975050611bce60208901611b32565b9550611bdc60408901611b32565b969995985095966060810135965060808101359560a0820135955060c0909101359350915050565b600080600080600080600080610100898b031215611c2157600080fd5b883567ffffffffffffffff811115611c3857600080fd5b611c448b828c01611b69565b985050611c5360208a01611b32565b9650611c6160408a01611b32565b979a96995096976060810135975060808101359660a0820135965060c0820135955060e0909101359350915050565b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611cc957611cc9611c90565b60405290565b600082601f830112611ce057600080fd5b813567ffffffffffffffff80821115611cfb57611cfb611c90565b604051601f8301601f19908116603f01168101908282118183101715611d2357611d23611c90565b81604052838152866020858801011115611d3c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b63ffffffff81168114611d6e57600080fd5b50565b8035611b4981611d5c565b8015158114611d6e57600080fd5b8035611b4981611d7c565b600060e08236031215611da757600080fd5b611daf611ca6565b611db883611b32565b8152602083013567ffffffffffffffff811115611dd457600080fd5b611de036828601611ccf565b602083015250611df260408401611d71565b6040820152611e0360608401611d71565b6060820152611e1460808401611b32565b6080820152611e2560a08401611d8a565b60a082015260c092830135928101929092525090565b634e487b7160e01b600052601160045260246000fd5b60008219821115611e6457611e64611e3b565b500190565b60008060408385031215611e7c57600080fd5b8251611e8781611d5c565b6020939093015192949293505050565b600082821015611ea957611ea9611e3b565b500390565b60005b83811015611ec9578181015183820152602001611eb1565b83811115610b045750506000910152565b60008151808452611ef2816020860160208601611eae565b601f01601f19169290920160200192915050565b86815260c0602082015260018060a01b0386511660c08201526000602087015160e080840152611f3a6101a0840182611eda565b604089015163ffffffff90811661010086015260608a01511661012085015260808901516001600160a01b0381166101408601529091505060a08801518015156101608501525060c08801516101808401526001600160a01b03871660408401529050846060830152611fb5608083018563ffffffff169052565b8260a0830152979650505050505050565b600060208284031215611fd857600080fd5b5051919050565b600060208284031215611ff157600080fd5b81516111c681611d7c565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561202c5761202c611e3b565b500290565b60008261204e57634e487b7160e01b600052601260045260246000fd5b500490565b60008251612065818460208701611eae565b9190910192915050565b6020815260006111c66020830184611eda56fea26469706673582212206af7f3322189b85fc28473b743ded09717f33f50fcac9bac13aebb04dc77f1b664736f6c634300080f0033";

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
