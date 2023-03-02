/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  DiamondInit,
  DiamondInitInterface,
} from "../../../../../../contracts/core/connext/facets/upgrade-initializers/DiamondInit";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_assetNotFound",
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
    name: "DiamondInit__init_alreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondInit__init_domainsDontMatch",
    type: "error",
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
        name: "_xAppConnectionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_acceptanceDelay",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_lpTokenTargetAddress",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0004000000000002000600000000000200000000030100190000006003300270000000620430019700030000004103550002000000010355000000620030019d000100000000001f0000008006000039000000400500003900000000006504350000000101200190000000780000c13d0000000001000031000000040110008c000001110000413d0000000201000367000000000101043b0000006401100197000000650110009c000001110000c13d0000000001000416000000000110004c000001110000c13d000000040100008a00000000011000310000006602000041000000800310008c000000000300001900000000030240190000006601100197000000000410004c000000000200a019000000660110009c00000000010300190000000001026019000000000110004c000001110000c13d00000002010003670000000402100370000000000202043b0000006204200197000000620220009c000001110000213d0000002402100370000000000202043b0000006703200197000000670220009c000001110000213d0000006401100370000000000201043b000000670120009c000001110000213d000500000006001d000600000005001d000300000004001d000400000003001d000200000002001d00000000010000190181017f0000040f000000ff02100190000000830000c13d000500000001001d00000069010000410181017f0000040f0000000605000029000000000605043300000067011001970000000002000411000000000112004b000000880000c13d0000006c01000041000000000016043500000000010004140000000402000029000000040320008c000000960000613d000000200500003900000000030600190000000004060019000100000006001d018101200000040f00000001060000290000000605000029000000000110004c000000960000c13d000000030200036700000001040000310000001f0340018f00000000010504330000000504400270000000000540004c000000670000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b0000005f0000413d000000000530004c000000760000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f000000000024043500000001020000310181016f0000040f0000000001000416000000000110004c000001110000c13d0000002002000039000001000100003900000000002104390000012002000039000000000002043900000040020000390000006303000041018101650000040f00000068020000410000000501000029000000000021043500000004020000390181016f0000040f00000044016000390000006a02000041000000000021043500000024016000390000001b0200003900000000002104350000006b010000410000000000160435000000040160003900000020020000390000000000210435000000640200003900000000010600190181016f0000040f0000000102000031000000200120008c000000200100003900000000010240190000001f01100039000000600310018f0000000001630019000000000331004b000000000300001900000001030040390000006d0410009c000001140000213d0000000103300190000001140000c13d0000000000150435000000200220008c0000000304000029000001110000413d00000000020604330000006e0320009c000001110000813d000000000242004b0000011c0000c13d000001000100008a000600000001001d0000000502000029000000000112016f00000001011001bf00000000020000190181017d0000040f0000007001000041000000000010043500000071010000410000002002000039000500000002001d00000000001204350000000001000019018101520000040f000100000001001d0181017f0000040f0000000602000029000000000121016f00000001011001bf00000001020000290181017d0000040f000000720100004100000000001004350000000001000019018101520000040f000100000001001d0181017f0000040f0000000602000029000000000121016f00000001011001bf00000001020000290181017d0000040f000000730100004100000000001004350000000001000019018101520000040f000100000001001d0181017f0000040f0000000602000029000000000121016f00000001011001bf00000001020000290181017d0000040f000000740100004100000000001004350000000001000019018101520000040f000100000001001d0181017f0000040f0000000602000029000000000121016f00000001011001bf00000001020000290181017d0000040f00000044010000390000000201100367000000000101043b00000075020000410181017d0000040f0000000101000039000600000001001d00000016020000390181017d0000040f000000170200003900000006010000290181017d0000040f0000000401000039000100000001001d0181017f0000040f00000076011001970000000302000029000000000121019f00000001020000290181017d0000040f0000270b0100003900000006020000290181017d0000040f00000005010000390000000c020000390181017d0000040f00000005010000290181017f0000040f00000077011001970000000402000029000000000121019f00000005020000290181017d0000040f0000001a01000039000600000001001d0181017f0000040f00000077011001970000000202000029000000000121019f00000006020000290181017d0000040f000000000100001900000000020000190000000003000019018101650000040f000000000100001900000000020000190181016f0000040f00000078010000410000000000100435000000410100003900000004020000390000000000120435000000240200003900000000010000190181016f0000040f0000006f02000041000000000021043500000004020000390181016f0000040f0002000000000002000200000005001d000100000004001d0000006204000041000000620530009c0000000003048019000000620510009c0000000001048019000000c0011002100000004003300210000000000113019f00000079011001c7018101780000040f000000010800002900000002040000290000001f0340018f0000000504400270000000000540004c0000013c0000613d000000000500001900000005065002100000000007680019000000000661034f000000000606043b00000000006704350000000105500039000000000645004b000001340000413d000000010220018f000000000530004c0000014c0000613d0000000504400210000000000541034f00000000044800190000000303300210000000000604043300000000063601cf000000000636022f000000000505043b0000010003300089000000000535022f00000000033501cf000000000363019f000000000034043500030000000103550000006001100270000100620010019d00000000010200190000000200000005000000000001042d00000062020000410000000003000414000000620430009c0000000003028019000000620410009c00000000010280190000004001100210000000c002300210000000000112019f0000007a011001c70000801002000039018101780000040f0000000102200190000001620000613d000000000101043b000000000001042d000000000100001900000000020000190181016f0000040f0000006204000041000000620510009c000000000104801900000040011002100000000001310019000000620320009c000000000204801900000060022002100000000001210019000001820001042e0000006203000041000000620420009c0000000002038019000000620410009c000000000103801900000040011002100000006002200210000000000112019f00000183000104300000017b002104230000000102000039000000000001042d0000000002000019000000000001042d000000000012041b000000000001042d000000000101041a000000000001042d0000018100000432000001820001042e0000018300010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000200000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000000000009a7e155e000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff63f20d0c00000000000000000000000000000000000000000000000000000000c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13204c69624469616d6f6e643a2021636f6e7472616374206f776e6572000000000008c379a0000000000000000000000000000000000000000000000000000000008d3638f400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff00000000000000000000000000000000000000000000000000000001000000003fba2f660000000000000000000000000000000000000000000000000000000001ffc9a700000000000000000000000000000000000000000000000000000000c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131fdeae47460000000000000000000000000000000000000000000000000000000048e2b09300000000000000000000000000000000000000000000000000000000286b971b00000000000000000000000000000000000000000000000000000000c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1322ffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff00000000000000000000000000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000200000000000000000000000000000000000040000000000000000000000000";

type DiamondInitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondInitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondInit__factory extends ContractFactory {
  constructor(...args: DiamondInitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondInit> {
    return super.deploy(overrides || {}) as Promise<DiamondInit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondInit {
    return super.attach(address) as DiamondInit;
  }
  override connect(signer: Signer): DiamondInit__factory {
    return super.connect(signer) as DiamondInit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondInitInterface {
    return new utils.Interface(_abi) as DiamondInitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondInit {
    return new Contract(address, _abi, signerOrProvider) as DiamondInit;
  }
}
