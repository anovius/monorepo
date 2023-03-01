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
    name: "AssetLogic__getConfig_notRegistered",
    type: "error",
  },
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
] as const;

const _bytecode =
  "0x0004000000000002000000000301001900000060033002700000012a04300197000300000041035500020000000103550000012a0030019d000100000000001f0000008001000039000000400300003900000000001304350000000101200190000000820000c13d0000000001000031000000040110008c0000008d0000413d0000000201000367000000000101043b0000012c011001970000012d0110009c0000008d0000c13d0000000001000416000000000110004c0000008d0000c13d0000000004000031000000040140008a0000012e02000041000000800510008c000000000500001900000000050240190000012e01100197000000000610004c000000000200a0190000012e0110009c00000000010500190000000001026019000000000110004c0000008d0000c13d00000002050003670000000401500370000000000101043b0000012a0210009c0000008d0000213d0000002402500370000000000202043b0000012a0620009c0000008d0000213d0000006406500370000000000606043b0000012f0760009c0000008d0000213d00000023076000390000012e08000041000000000947004b000000000900001900000000090880190000012e044001970000012e07700197000000000a47004b0000000008008019000000000447013f0000012e0440009c00000000040900190000000004086019000000000440004c0000008d0000c13d0000000404600039000000000445034f000000000504043b000001300450009c000000900000813d0000003f04500039000000200700008a000000000774016f00000000040304330000000007740019000000000847004b000000000800001900000001080040390000012f0970009c000000900000213d0000000108800190000000900000c13d00000000007304350000000000540435000000240360003900000000063500190000000007000031000000000676004b0000008d0000213d0000001f0650018f000000020730036700000020034000390000000508500270000000000980004c000000690000613d0000000009000019000000050a900210000000000ba30019000000000aa7034f000000000a0a043b0000000000ab04350000000109900039000000000a89004b000000610000413d000000000960004c000000780000613d0000000508800210000000000787034f00000000088300190000000306600210000000000908043300000000096901cf000000000969022f000000000707043b0000010006600089000000000767022f00000000066701cf000000000696019f00000000006804350000000003530019000000000003043500000044030000390000000203300367000000000303043b04a101040000040f00000000010000190000000002000019000000000300001904a100f10000040f0000000001000416000000000110004c0000008d0000c13d0000002002000039000001000100003900000000002104390000012002000039000000000002043900000040020000390000012b0300004104a100f10000040f0000000001000019000000000200001904a100fb0000040f000001310100004100000000001004350000004101000039000000040200003900000000001204350000002402000039000000000100001904a100fb0000040f0000012a050000410000012a0630009c000000000305801900000040033002100000012a0640009c00000000040580190000006004400210000000000334019f0000012a0410009c0000000001058019000000c001100210000000000113019f04a104930000040f000000000301001900000060033002700001012a0030019d0003000000010355000000010120018f000000000001042d0001000000000002000100000004001d0000012a040000410000012a0530009c00000000030480190000012a0510009c0000000001048019000000c0011002100000004003300210000000000113019f00000132011001c704a104980000040f0000000106000029000000010220018f000000000300001900000005043002100000000005460019000000000441034f000000000404043b00000000004504350000000103300039000000000430004c000000000400001900000001040060390000000104400190000000ba0000c13d000300000001035500000060011002700001012a0010019d00000000010200190000000100000005000000000001042d0000012a030000410000012a0410009c000000000103801900000040011002100000012a0420009c00000000020380190000006002200210000000000112019f00000000020004140000012a0420009c0000000002038019000000c002200210000000000112019f00000133011001c7000080100200003904a104980000040f0000000102200190000000df0000613d000000000101043b000000000001042d0000000001000019000000000200001904a100fb0000040f0000012a0100004100000000020004140000012a0320009c0000000001024019000000c00110021000000134011001c7000080020200003904a104980000040f0000000102200190000000ee0000613d000000000101043b000000000001042d0000000001000019000000000200001904a100fb0000040f0000012a040000410000012a0510009c0000000001048019000000400110021000000000013100190000012a0320009c000000000204801900000060022002100000000001210019000004a20001042e0000012a030000410000012a0420009c00000000020380190000012a0410009c000000000103801900000040011002100000006002200210000000000112019f000004a3000104300010000000000002000d00000004001d001000000003001d000800000002001d000e00000001001d0000002001000039000c00000001001d04a1049f0000040f0000004002000039000900000002001d00000000050204330000013502000041000000000025043500000004025000390000000003000411000300000003001d0000000000320435000000000201001900000000010004140000013602200197000000040320008c000001210000613d00000000030500190000000004050019000f00000005001d04a100ab0000040f0000000f05000029000000000110004c000004330000613d0000000102000031000000200120008c000000200100003900000000010240190000001f01100039000000600310018f0000000001530019000000000331004b000000000300001900000001030040390000012f0410009c000003d10000213d0000000103300190000003d10000c13d00000009030000290000000000130435000000200220008c000003ce0000413d0000000002050433000000000320004c0000000003000019000000010300c039000000000332004b000003ce0000c13d000000000220004c000003eb0000613d0000000e010000290000012a01100197000200000001001d00000000001004350000000f010000390000000c02000029000000000012043500000040020000390000000001000019000f00000002001d04a100cb0000040f04a1049f0000040f0000001003000029000000000230004c000003ef0000613d000000000131004b000003ef0000c13d0000000d01000029000000200310003900000000020104330000000005320019000000000125004b000000000100001900000001010040390000000101100190000003be0000c13d00000138040000410000000f010000290000000001010433000000010550008a000000000515004b000001630000813d000001390420009c000004550000213d0000013a0430009c000004550000813d00000060033002100000013b03300197000000000232019f00000018042002100000013c024001970000013d034001970000013e033001c700000138040000410000013f0220009c000000000304c019000001400230009c000003d90000213d00000018023002700000007804300270000b00000002001d000a00000004001d00000000022400190000013902200197000d00000002001d000000000212004b000003d90000213d000700000003001d000000000103001904a104750000040f0000013801000041001000000001001d0000000a01000029000001390210019700000024032000390000000d01000029000000000113004b000001880000213d0000013801000041001000000001001d0000000f010000290000000001010433000000000113004b000001880000213d000000780120021000000141011001c7001000000001001d000600000003001d000a00000002001d000000070100002904a104750000040f0000000b010000290000013902100197000000240120008c000003be0000413d000000240120008c0000000a050000290000000d01000029000003f50000613d00000138070000410000000004250019000000000114004b0000000606000029000001aa0000213d000000000306043300000138070000410000000f010000290000000001010433000000010440008a000000000414004b000001aa0000813d000001420450009c000004620000813d000000240120008a00000060026002100000013b02200197000000000112019f00000038023002700000014302200197000000000121019f000000180710021000000078017002700000013901100197000d00000001001d00000000010104330000014601100197000001470110009c000003dd0000c13d000000d801700270000000ff0110018f000000040210008c000003e30000813d000000030110008c000003dd0000c13d0000001001000029001000000001001d000a00000007001d04a104840000040f000000100200002900000078012002700000013901100197000700000001001d00000004011000390000000001010433000b00000001001d000000000102001904a104840000040f000000070100002900000000010104330000000a0200002900000018022002700000013904200197000000200240008c000004050000a13d001000000004001d0000000d0200002900000001022000390000000002020433000400000002001d000000000220004c0000000e0200002900000020052002100000000f04000029000001f70000c13d000001490210009c000001f70000213d0000000b02000029000000000220004c000001f70000c13d00000000010404330000002002100039000000000002043500000000000104350000012a0200004100000000030004140000012a0430009c00000000030280190000012a0410009c00000000010280190000004001100210000000c002300210000000000112019f00000008020000290000012a022001970000014f03500197000000000523019f00000150011001c70000800d02000039000000040300003900000151040000410000000007000410000000000600001904a104930000040f0000000101200190000a00000000001d000400000000001d0000029c0000c13d000003ce0000013d000000e00310027000000000020404330000004001200039000e00000003001d0000000000310435000000000042043500000020012000390000000b0300002900000000003104350000014a0320009c000003d10000213d000700000005001d00000060032000390000000000340435000000000202043304a100cb0000040f000a00000001001d0000000401000039000600000001001d04a1049f0000040f0000012a011001970000000e02000029000000000121004b000002200000613d0000000a01000029000000000010043500000007010000390000000c02000029000000000012043500000040020000390000000001000019000b00000002001d04a100cb0000040f000e00000001001d000000010110003904a1049f0000040f0000014b011001980000046f0000613d0000000e0100002904a1049f0000040f000b00000001001d0000000b0100002900000136061001970000000401000029000000000110004c000a00000006001d0000025a0000613d000000000060043500000006010000390000000c02000029000000000012043500000040020000390000000001000019000b00000002001d04a100cb0000040f04a1049f0000040f0000012a011001980000000001000410000e00000001001d000002770000613d0000014d01000041000000000010043900000006010000290000000a02000029000000000021043904a100e20000040f000000000110004c000003ce0000613d0000000b0100002900000000050104330000014e01000041000000000015043500000024025000390000000001000414000000040300002900000000003204350000000e020000290000013602200197000000040350003900000000002304350000000a02000029000000040220008c000002530000613d00000044040000390000000a020000290000000003050019000600000005001d000000060500002904a100980000040f0000000605000029000000000110004c000004330000613d0000012f0150009c0000000704000029000003d10000213d0000000b0100002900000000005104350000000a06000029000002830000013d0000000f0100002900000000010104330000002002100039000000000002043500000000000104350000012a0200004100000000030004140000012a0430009c00000000030280190000012a0410009c00000000010280190000004001100210000000c002300210000000000112019f00000008020000290000012a0220019700000007030000290000014f03300197000000000523019f00000150011001c70000800d0200003900000004030000390000015104000041000000000700041004a104930000040f0000000101200190000400000000001d0000029c0000c13d000003ce0000013d0000014d01000041000000000010043900000006010000290000000a02000029000000000021043904a100e20000040f000000000110004c000002330000613d0000000b0100002900000000050104330000000a06000029000000070400002900000000000504350000002001500039000000040200002900000000002104350000012a0100004100000000020004140000012a0320009c00000000020180190000012a0350009c00000000010540190000004001100210000000c002200210000000000112019f00000008020000290000012a022001970000014f03400197000000000523019f00000150011001c70000800d02000039000000040300003900000151040000410000000e0700002904a104930000040f0000000101200190000003ce0000613d0000001004000029000000400140008c000004160000a13d0000000d0100002900000021011000390000000001010433000500000001001d000000000010043500000008020000390000000c01000029001000000002001d000000000021043500000040020000390000000001000019000600000002001d04a100cb0000040f04a1049f0000040f000000ff0410018f000000030140008c000003e30000213d000000000140004c000002b40000613d000000020140008c000004270000c13d000000050100002900000000001004350000000c010000290000001003000029000000000031043500000000010000190000000602000029001000000004001d04a100cb0000040f000f00000001001d04a1049f0000040f000001000200008a000000000121016f0000001002000029000000000220004c0000000102000039000000030200c039000000000121019f0000000f0200002904a1049d0000040f0000000501000029000000000010043500000009010000390000000c0200002900000000001204350000000001000019000000060200002904a100cb0000040f00000006020000290000000002020433001000000002001d000f00000001001d04a1049f0000040f000b00000001001d000000100200002900000000001204350000000f01000029000000000010043500000000010000190000000c0200002904a100cb0000040f0000000002010019000000100400002900000000030000190000000b01000029000000000113004b000002f10000813d0000000001020019000f00000002001d000e00000004001d000d00000003001d04a1049f0000040f0000000d030000290000000e040000290000000f0200002900000020044000390000013601100197000000000014043500000001033000390000000102200039000002e00000013d000000100300002900000000013400490000003f01100039000000200200008a000000000221016f0000000001320019000000000221004b000000000200001900000001020040390000012f0310009c000003d10000213d0000000102200190000003d10000c13d00000006020000290000000000120435000000050100002900000000001004350000001d010000390000000c030000290000000000130435000000000100001904a100cb0000040f04a1049f0000040f000000050200002900000000002004350000001e020000390000000c030000290000000000230435000f00000001001d0000000001000019000000060200002904a100cb0000040f04a1049f0000040f0000000f020000290000000002210019000000000112004b000000000100001900000001010040390000000101100190000003be0000c13d00000010010000290000000001010433000000000220004c0000031f0000613d000000010210008c0000042d0000c13d000000000210004c000003880000613d000000040200002900000000231200d9000900000003001d000100000002001d00000010020000290000002002200039000700000002001d000000010110008a000b00000001001d0000000a01000039000800000001001d0000004001000039000f00000001001d00000000020000190000000b01000029000000000112004b000003590000813d00000010010000290000000001010433000000000121004b000003c60000a13d000e00000002001d0000000501200210000000070200002900000000012100190000000001010433000001360110019700000000001004350000000c020000290000000801000029000000000012043500000000010000190000000f0200002904a100cb0000040f0000000a0200002900000000002004350000000c02000029000000000012043500000000010000190000000f0200002904a100cb0000040f000d00000001001d04a1049f0000040f000000000201001900000009010000290000000001120019000000000221004b000000000200001900000001020040390000000102200190000003be0000c13d0000000d0200002904a1049d0000040f0000000e0200002900000001022000390000032f0000013d000000010100002900000009020000290000000002210019000000000112004b000000000100001900000001010040390000000101100190000003be0000c13d000f00000002001d000000100100002900000000010104330000000b02000029000000000121004b000003c60000a13d0000000b010000290000000501100210000000070200002900000000012100190000000001010433000001360110019700000000001004350000000c02000029000000080100002900000000001204350000004002000039000e00000002001d000000000100001904a100cb0000040f0000000a0200002900000000002004350000000c02000029000000000012043500000000010000190000000e0200002904a100cb0000040f000e00000001001d04a1049f0000040f00000000020100190000000f010000290000000001120019000000000221004b000000000200001900000001020040390000000102200190000003be0000c13d0000000e0200002904a1049d0000040f0000000601000029000000000101043300000060020000390000000000210435000000100200002900000000030204330000006002100039000000000032043500000080021000390000000004000019000000000534004b0000039d0000813d00000010050000290000002005500039001000000005001d00000000050504330000013605500197000000000052043500000001044000390000002002200039000003920000013d000000030300002900000136033001970000004004100039000000000034043500000020031000390000000404000029000000000043043500000000021200490000012a030000410000012a0410009c000000000103801900000040011002100000012a0420009c00000000020380190000006002200210000000000112019f00000000020004140000012a0420009c0000000002038019000000c002200210000000000112019f00000133011001c70000800d0200003900000004030000390000015304000041000000050500002900000002060000290000000a0700002904a104930000040f0000000101200190000003ce0000613d0000001000000005000000000001042d000001310100004100000000001004350000001101000039000000040200003900000000001204350000002402000039000000000100001904a100fb0000040f000001310100004100000000001004350000003201000039000000040200003900000000001204350000002402000039000000000100001904a100fb0000040f0000000001000019000000000200001904a100fb0000040f000001310100004100000000001004350000004101000039000000040200003900000000001204350000002402000039000000000100001904a100fb0000040f00000156020000410000000000210435000000040200003904a100fb0000040f0000000f01000029000000000101043300000148020000410000000000210435000000040200003904a100fb0000040f000001310100004100000000001004350000002101000039000000040200003900000000001204350000002402000039000000000100001904a100fb0000040f00000157020000410000000000210435000000040200003904a100fb0000040f0000000f01000029000000000101043300000137020000410000000000210435000000040200003904a100fb0000040f0000000f010000290000000001010433000000640210003900000001030000390000000000320435000000440210003900000024030000390000000000320435000000240210003900000000003204350000015502000041000000000021043500000004021000390000000000520435000000840200003904a100fb0000040f0000000f01000029000000000101043300000064021000390000000c030000290000000000320435000000440210003900000001030000390000000000320435000000240210003900000000004204350000015502000041000000000021043500000004021000390000000d030000290000000000320435000000840200003904a100fb0000040f0000000f01000029000000000101043300000064021000390000000c030000290000000000320435000000440210003900000021030000390000000000320435000000240210003900000000004204350000015502000041000000000021043500000004021000390000000d030000290000000000320435000000840200003904a100fb0000040f0000000601000029000000000101043300000154020000410000000000210435000000040200003904a100fb0000040f0000000601000029000000000101043300000152020000410000000000210435000000040200003904a100fb0000040f000000030200036700000001040000310000001f0340018f000000090100002900000000010104330000000504400270000000000540004c000004440000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b0000043c0000413d000000000530004c000004530000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f0000000000240435000000010200003104a100fb0000040f00000044021000390000014403000041000000000032043500000024021000390000000a0300003900000000003204350000014502000041000000000021043500000004021000390000000c030000290000000000320435000000640200003904a100fb0000040f00000044021000390000014403000041000000000032043500000024021000390000000a0300003900000000003204350000014502000041000000000021043500000004021000390000000c030000290000000000320435000000640200003904a100fb0000040f0000000b0100002900000000010104330000014c020000410000000000210435000000040200003904a100fb0000040f000000d802100270000000020120008c000004790000c13d000000000001042d000000400100003900000000010104330000002403100039000000020400003900000000004304350000015803000041000000000031043500000004031000390000000000230435000000440200003904a100fb0000040f000000d802100270000000010120008c000004880000c13d000000000001042d000000400100003900000000010104330000002403100039000000010400003900000000004304350000015803000041000000000031043500000004031000390000000000230435000000440200003904a100fb0000040f00000496002104210000000102000039000000000001042d0000000002000019000000000001042d0000049b002104230000000102000039000000000001042d0000000002000019000000000001042d000000000012041b000000000001042d000000000101041a000000000001042d000004a100000432000004a20001042e000004a300010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000200000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000ab2dc3f5000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff00000000000000000000000000000000000000000000000100000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002000002000000000000000000000000000000240000000000000000000000005190bc5300000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff46b4a0e900000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000ffffffffffffffffffffffff00000000000000000000000000000000000000010000000000000000000000000000000000000000ffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff00000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065000000fffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000010000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000ffffffffffffffffffffffdc00000000000000ff000000000000000000000000000000000000000000000000217472756e63617465640000000000000000000000000000000000000000000008c379a000000000000000000000000000000000000000000000000000000000ff00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000055e725f20000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffff9f0000000000000000000000ff0000000000000000000000000000000000000000c319947e000000000000000000000000000000000000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b8340c10f1900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000002000000000000000000000000000000000000400000000000000000000000009f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbbd3bd90150000000000000000000000000000000000000000000000000000000030bf44531c04b96173a40012c90db840a147cf7d50a3e160f5227f1af2faa3a08f6bc06f0000000000000000000000000000000000000000000000000000000078218d2900000000000000000000000000000000000000000000000000000000252e0d8300000000000000000000000000000000000000000000000000000000ec38ac1e00000000000000000000000000000000000000000000000000000000d32c1d3700000000000000000000000000000000000000000000000000000000";

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
