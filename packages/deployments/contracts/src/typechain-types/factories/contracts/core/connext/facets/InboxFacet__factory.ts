/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  InboxFacet,
  InboxFacetInterface,
} from "../../../../../contracts/core/connext/facets/InboxFacet";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
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
    name: "InboxFacet__handle_notTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyRemoteRouter_notRemote",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyReplica_notReplica",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_alreadyReconciled",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_noPortalRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_notConnext",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
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
        name: "liquidityProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Receive",
    type: "event",
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
        indexed: true,
        internalType: "uint32",
        name: "originDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "routers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Reconciled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506114a8806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ab2dc3f514610030575b600080fd5b61004361003e366004611197565b610045565b005b61004e3361013c565b61006b5760405163761c560f60e11b815260040160405180910390fd5b838261007782826101b1565b610094576040516346b4a0e960e01b815260040160405180910390fd5b60006100ae6100a385836101db565b62ffffff19166101ff565b905060006100c162ffffff198316610218565b905060006100d462ffffff19841661024d565b90506100e562ffffff1982166102a5565b61010257604051632af392f960e11b815260040160405180910390fd5b6000806101118b8b86866102b2565b9150915061012f6101278462ffffff19166105d0565b8c84846105e5565b5050505050505050505050565b602754604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa158015610187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ab9190611273565b92915050565b63ffffffff8216600090815260126020526040812054821480156101d457508115155b9392505050565b8151600090602084016101f664ffffffffff85168284610885565b95945050505050565b60006101ab61020d836108cc565b62ffffff19166108fe565b600081600261022f815b62ffffff1984169061095e565b5061024562ffffff198516600060246001610a37565b949350505050565b600081600261025b81610222565b5060006102766024601887901c6001600160601b03166112c1565b9050600061028386610aa7565b60ff16905061029b62ffffff19871660248484610a37565b9695505050505050565b60006101ab826003610abc565b6004546000908190819064010000000090046001600160a01b031663689303026102e162ffffff198816610b1b565b6102f062ffffff198916610b3d565b6102ff62ffffff198916610b5f565b6040516001600160e01b031960e086901b16815263ffffffff939093166004840152602483019190915260ff1660448201526064016020604051808303816000875af1158015610353573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037791906112d8565b9050600061038a62ffffff198616610b74565b90508060000361040a57306001600160a01b03831667ffffffff0000000060208b901b1663ffffffff8a161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a4509150600090506105c7565b6004805460405163c86415cb60e01b81526001600160a01b03858116938201939093526401000000009091049091169063c86415cb90602401602060405180830381865afa158015610460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104849190611273565b610557576040516340c10f1960e01b8152306004820152602481018290526001600160a01b038316906340c10f1990604401600060405180830381600087803b1580156104d057600080fd5b505af11580156104e4573d6000803e3d6000fd5b50505050816001600160a01b031663cc2ab7c76105068762ffffff1916610b89565b6040518263ffffffff1660e01b815260040161052491815260200190565b600060405180830381600087803b15801561053e57600080fd5b505af1158015610552573d6000803e3d6000fd5b505050505b306001600160a01b03831667ffffffff0000000060208b901b1663ffffffff8a161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a490925090505b94509492505050565b60006101ab62ffffff19831660416020610b9a565b60008481526009602052604090205460ff161561061557604051638f6bc06f60e01b815260040160405180910390fd5b6000848152600960209081526040808320805460ff19166001179055600a82528083208054825181850281018501909352808352919290919083018282801561068757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610669575b505050600088815260256020908152604080832054602490925282205494955090936106b69350909150611301565b825190915081158015906106cb575080600114155b156106e95760405163d3bd901560e01b815260040160405180910390fd5b801561082f5760006106fb828661132f565b905060005b61070b6001846112c1565b81101561079357816000600b01600087848151811061072c5761072c611343565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000896001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107869190611301565b9091555050600101610700565b5060006107a08387611359565b6107aa9083611301565b905080600b6000876107bd6001886112c1565b815181106107cd576107cd611343565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000896001600160a01b03166001600160a01b0316815260200190815260200160002060008282546108279190611301565b909155505050505b846001600160a01b03168663ffffffff16887f30bf44531c04b96173a40012c90db840a147cf7d50a3e160f5227f1af2faa3a08688336040516108749392919061136d565b60405180910390a450505050505050565b6000806108928385611301565b90506040518111156108a2575060005b806000036108b75762ffffff199150506101d4565b5050606092831b9190911790911b1760181b90565b60006108d782610cf6565b156108f4576301000000600160d81b038216600160d91b176101ab565b62ffffff196101ab565b600061090982610d19565b61095a5760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c65640000000000000060448201526064015b60405180910390fd5b5090565b600061096a8383610d56565b610a3057600061098961097d8560d81c90565b64ffffffffff16610d79565b915050600061099e8464ffffffffff16610d79565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b815260040161095191906113d1565b5090919050565b600080610a4d8660781c6001600160601b031690565b6001600160601b03169050610a6186610e27565b84610a6c8784611301565b610a769190611301565b1115610a895762ffffff19915050610245565b610a938582611301565b905061029b8364ffffffffff168286610885565b60006101ab62ffffff19831660246001610e60565b6000816003811115610ad057610ad0611295565b60ff16610adc84610e90565b60ff161480156101d45750816003811115610af957610af9611295565b610b0284610ea4565b6003811115610b1357610b13611295565b149392505050565b6000816001610b2981610222565b5061024562ffffff19851660006004610e60565b6000816001610b4b81610222565b5061024562ffffff19851660046020610b9a565b60006101ab62ffffff19831660616062610e60565b60006101ab62ffffff19831660016020610e60565b60006101ab62ffffff198316602160205b60008160ff16600003610baf575060006101d4565b610bc28460181c6001600160601b031690565b6001600160601b0316610bd860ff841685611301565b1115610c3c57610c23610bf48560781c6001600160601b031690565b6001600160601b0316610c108660181c6001600160601b031690565b6001600160601b0316858560ff16610ebf565b60405162461bcd60e51b815260040161095191906113d1565b60208260ff161115610cb65760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e2033322062797465730000000000006064820152608401610951565b600882026000610ccf8660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b6000601882901c6001600160601b0316610d1260626024611301565b1492915050565b6000610d258260d81c90565b64ffffffffff1664ffffffffff03610d3f57506000919050565b6000610d4a83610e27565b60405110199392505050565b60008164ffffffffff16610d6a8460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff161115610dce576000610d98826008611426565b60ff1685901c9050610da981610fe9565b61ffff16841793508160ff16601014610dc457601084901b93505b5060001901610d7f565b50600f5b60ff8160ff161015610e21576000610deb826008611426565b60ff1685901c9050610dfc81610fe9565b61ffff16831792508160ff16600014610e1757601083901b92505b5060001901610dd2565b50915091565b6000610e3c8260181c6001600160601b031690565b610e4f8360781c6001600160601b031690565b016001600160601b03169050919050565b6000610e6d82602061144f565b610e78906008611426565b60ff16610e86858585610b9a565b901c949350505050565b60006101ab62ffffff198316826001610e60565b600060d882901c60ff1660038111156101ab576101ab611295565b60606000610ecc86610d79565b9150506000610eda86610d79565b9150506000610ee886610d79565b9150506000610ef686610d79565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b6000610ffb60048360ff16901c61101b565b60ff1661ffff919091161760081b6110128261101b565b60ff1617919050565b600060f08083179060ff821690036110365750603092915050565b8060ff1660f10361104a5750603192915050565b8060ff1660f20361105e5750603292915050565b8060ff1660f3036110725750603392915050565b8060ff1660f4036110865750603492915050565b8060ff1660f50361109a5750603592915050565b8060ff1660f6036110ae5750603692915050565b8060ff1660f7036110c25750603792915050565b8060ff1660f8036110d65750603892915050565b8060ff1660f9036110ea5750603992915050565b8060ff1660fa036110fe5750606192915050565b8060ff1660fb036111125750606292915050565b8060ff1660fc036111265750606392915050565b8060ff1660fd0361113a5750606492915050565b8060ff1660fe0361114e5750606592915050565b8060ff1660ff036111625750606692915050565b50919050565b803563ffffffff8116811461117c57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156111ad57600080fd5b6111b685611168565b93506111c460208601611168565b925060408501359150606085013567ffffffffffffffff808211156111e857600080fd5b818701915087601f8301126111fc57600080fd5b81358181111561120e5761120e611181565b604051601f8201601f19908116603f0116810190838211818310171561123657611236611181565b816040528281528a602084870101111561124f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60006020828403121561128557600080fd5b815180151581146101d457600080fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156112d3576112d36112ab565b500390565b6000602082840312156112ea57600080fd5b81516001600160a01b03811681146101d457600080fd5b60008219821115611314576113146112ab565b500190565b634e487b7160e01b600052601260045260246000fd5b60008261133e5761133e611319565b500490565b634e487b7160e01b600052603260045260246000fd5b60008261136857611368611319565b500690565b606080825284519082018190526000906020906080840190828801845b828110156113af5781516001600160a01b03168452928401929084019060010161138a565b50505090830194909452506001600160a01b0391909116604090910152919050565b600060208083528351808285015260005b818110156113fe578581018301518582016040015282016113e2565b81811115611410576000604083870101525b50601f01601f1916929092016040019392505050565b600060ff821660ff84168160ff0481118215151615611447576114476112ab565b029392505050565b600060ff821660ff841680821015611469576114696112ab565b9003939250505056fea2646970667358221220a75a0a9bb500b0bbe94c6fabf59d2a54dc15d90e0489134f034c2479ae666db764736f6c634300080f0033";

type InboxFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InboxFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InboxFacet__factory extends ContractFactory {
  constructor(...args: InboxFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InboxFacet> {
    return super.deploy(overrides || {}) as Promise<InboxFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InboxFacet {
    return super.attach(address) as InboxFacet;
  }
  override connect(signer: Signer): InboxFacet__factory {
    return super.connect(signer) as InboxFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InboxFacetInterface {
    return new utils.Interface(_abi) as InboxFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InboxFacet {
    return new Contract(address, _abi, signerOrProvider) as InboxFacet;
  }
}
