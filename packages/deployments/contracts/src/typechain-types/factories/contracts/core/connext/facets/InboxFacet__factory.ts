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
    name: "BaseConnextFacet__getAdoptedAsset_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
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
    inputs: [
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
    ],
    name: "TypedMemView__assertType_typeAssertionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__assertValid_validityAssertionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__index_indexMoreThan32Bytes",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loc",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slice",
        type: "uint256",
      },
    ],
    name: "TypedMemView__index_overrun",
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
  "0x608060405234801561001057600080fd5b50610fe1806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ab2dc3f514610030575b600080fd5b61004361003e366004610d67565b610045565b005b61004e3361013c565b61006b5760405163761c560f60e11b815260040160405180910390fd5b838261007782826101b1565b610094576040516346b4a0e960e01b815260040160405180910390fd5b60006100ae6100a385836101db565b62ffffff19166101ff565b905060006100c162ffffff198316610218565b905060006100d462ffffff19841661024d565b90506100e562ffffff1982166102a5565b61010257604051632af392f960e11b815260040160405180910390fd5b6000806101118b8b86866102b2565b9150915061012f6101278462ffffff191661046f565b8c8484610484565b5050505050505050505050565b602654604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa158015610187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ab9190610e43565b92915050565b63ffffffff8216600090815260146020526040812054821480156101d457508115155b9392505050565b8151600090602084016101f664ffffffffff85168284610796565b95945050505050565b60006101ab61020d836107d3565b62ffffff1916610805565b600081600261022f815b62ffffff19841690610832565b5061024562ffffff198516600060246001610883565b949350505050565b600081600261025b81610222565b5060006102766024601887901c6001600160601b0316610e91565b90506000610283866108f3565b60ff16905061029b62ffffff19871660248484610883565b9695505050505050565b60006101ab826003610908565b600080806102c562ffffff198616610967565b905060006102d862ffffff198716610989565b905060006102f06102e984846109ab565b84846109ed565b9050600061030362ffffff1988166109fc565b90508060000361038657306001600160a01b03831667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a450935060009250610466915050565b61038f82610a11565b6103f4576040516340c10f1960e01b8152306004820152602481018290526001600160a01b038316906340c10f1990604401600060405180830381600087803b1580156103db57600080fd5b505af11580156103ef573d6000803e3d6000fd5b505050505b306001600160a01b03831667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a4909450925050505b94509492505050565b60006101ab62ffffff19831660216020610a1e565b6000848152600d602052604081205460ff16908160038111156104a9576104a9610e65565b141580156104c9575060028160038111156104c6576104c6610e65565b14155b156104e757604051638f6bc06f60e01b815260040160405180910390fd5b60008160038111156104fb576104fb610e65565b1461050757600361050a565b60015b6000868152600d60205260409020805460ff1916600183600381111561053257610532610e65565b02179055506000858152600e602090815260408083208054825181850281018501909352808352919290919083018282801561059757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610579575b505050600089815260246020908152604080832054602390925282205494955090936105c69350909150610ea4565b825190915081158015906105db575080600114155b156105f95760405163d3bd901560e01b815260040160405180910390fd5b801561073f57600061060b8287610ecd565b905060005b61061b600184610e91565b8110156106a357816000600f01600087848151811061063c5761063c610ee1565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546106969190610ea4565b9091555050600101610610565b5060006106b08388610ef7565b6106ba9083610ea4565b905080600f6000876106cd600188610e91565b815181106106dd576106dd610ee1565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107379190610ea4565b909155505050505b856001600160a01b03168763ffffffff16897f30bf44531c04b96173a40012c90db840a147cf7d50a3e160f5227f1af2faa3a086893360405161078493929190610f0b565b60405180910390a45050505050505050565b6000806107a38385610ea4565b90506040518111156107b3575060005b806000036107c85762ffffff199150506101d4565b6101f6858585610b29565b60006107de82610ba0565b156107fb576301000000600160d81b038216600160d91b176101ab565b62ffffff196101ab565b600061081082610bc3565b1561082e5760405163252e0d8360e01b815260040160405180910390fd5b5090565b600061083e8383610bff565b61087c5761084c8360d81c90565b60405163d32c1d3760e01b815264ffffffffff918216600482015290831660248201526044015b60405180910390fd5b5090919050565b6000806108998660781c6001600160601b031690565b6001600160601b031690506108ad86610c22565b846108b88784610ea4565b6108c29190610ea4565b11156108d55762ffffff19915050610245565b6108df8582610ea4565b905061029b8364ffffffffff168286610796565b60006101ab62ffffff19831660246001610c5b565b600081600381111561091c5761091c610e65565b60ff1661092884610c8b565b60ff161480156101d4575081600381111561094557610945610e65565b61094e84610c9f565b600381111561095f5761095f610e65565b149392505050565b600081600161097581610222565b5061024562ffffff19851660046020610a1e565b600081600161099781610222565b5061024562ffffff19851660006004610c5b565b600082826040516020016109cf92919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b60006102458484846000610cba565b60006101ab62ffffff19831660016020610c5b565b60006101ab826000610cf9565b60008160ff16600003610a33575060006101d4565b610a468460181c6001600160601b031690565b6001600160601b0316610a5c60ff841685610ea4565b1115610ac457610a758460781c6001600160601b031690565b610a888560181c6001600160601b031690565b6040516378218d2960e01b81526001600160601b039283166004820152911660248201526044810184905260ff83166064820152608401610873565b60208260ff161115610ae95760405163045df3f960e01b815260040160405180910390fd5b600882026000610b028660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b60006060601883856001600160601b03821682148015610b51575086816001600160601b0316145b610b8a5760405162461bcd60e51b815260206004820152600a602482015269085d1c9d5b98d85d195960b21b6044820152606401610873565b96831b90961790911b90941790931b9392505050565b6000601882901c6001600160601b0316610bbc60416024610ea4565b1492915050565b6000610bcf8260d81c90565b64ffffffffff1664ffffffffff03610be957506001919050565b6000610bf483610c22565b604051109392505050565b60008164ffffffffff16610c138460d81c90565b64ffffffffff16149392505050565b6000610c378260181c6001600160601b031690565b610c4a8360781c6001600160601b031690565b016001600160601b03169050919050565b6000610c68826020610f6f565b610c73906008610f88565b60ff16610c81858585610a1e565b901c949350505050565b60006101ab62ffffff198316826001610c5b565b600060d882901c60ff1660038111156101ab576101ab610e65565b600481015460009063ffffffff90811690841603610cd9575082610245565b506000848152600c820160205260409020546001600160a01b0316610245565b6001600160a01b0382166000908152600a8201602052604081205463ffffffff1615610d27575060006101ab565b50506001600160a01b03163b151590565b803563ffffffff81168114610d4c57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610d7d57600080fd5b610d8685610d38565b9350610d9460208601610d38565b925060408501359150606085013567ffffffffffffffff80821115610db857600080fd5b818701915087601f830112610dcc57600080fd5b813581811115610dde57610dde610d51565b604051601f8201601f19908116603f01168101908382118183101715610e0657610e06610d51565b816040528281528a6020848701011115610e1f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600060208284031215610e5557600080fd5b815180151581146101d457600080fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156101ab576101ab610e7b565b808201808211156101ab576101ab610e7b565b634e487b7160e01b600052601260045260246000fd5b600082610edc57610edc610eb7565b500490565b634e487b7160e01b600052603260045260246000fd5b600082610f0657610f06610eb7565b500690565b606080825284519082018190526000906020906080840190828801845b82811015610f4d5781516001600160a01b031684529284019290840190600101610f28565b50505090830194909452506001600160a01b0391909116604090910152919050565b60ff82811682821603908111156101ab576101ab610e7b565b60ff8181168382160290811690818114610fa457610fa4610e7b565b509291505056fea264697066735822122090d2e9dca86aafdfc0ba8167278edb2812a188059c205de944eb064cc941753764736f6c63430008110033";

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
