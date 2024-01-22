import { utils } from "ethers";

import { InitConfig } from "../../helpers";
import { PROTOCOL_ADMINS } from "../../../ownership/helpers";

export const MAINNET_STAGING_INIT_CONFIG: InitConfig = {
  hub: "6648936", // MAINNET
  supportedDomains: [
    "6648936", // MAINNET
    "1869640809", // OPTIMISM
    "1886350457", // POLYGON
    "1634886255", // ARBITRUM ONE
    "6450786", // BNB
    "6778479", // GNOSIS
    "1818848877", // LINEA
    "1835365481", // METIS
    "2053862243", // ZkSync-Era
    "1887071085", // PolygonZk
    "1650553709", // Base
    "1634886247", // Avalanche
    "1835101812", // Mantle
  ],
  // NOTE: ENSURE LPTOKEN AND BRIDGETOKEN NAMES ARE GENERATED CORRECTLY BASED
  // ON THE NAME GIVEN IN EACH ASSET ENTRY

  assets: [
    {
      name: "TEST",
      canonical: {
        domain: "6648936",
        address: "0x29240a275cddde26BbD6d80fA8ad315C35F91604",
        decimals: 18,
      },
      representations: {
        "1869640809": {
          local: "0xAFCE6eAc6CdcEd6a54d367E1271C10d6595aE78C",
          adopted: "0xAFCE6eAc6CdcEd6a54d367E1271C10d6595aE78C",
        },
        "1886350457": {
          local: "0x09d3DD665e6603150899dE6cc6b4A04EdF60088D",
          adopted: "0x09d3DD665e6603150899dE6cc6b4A04EdF60088D",
        },
        "1634886255": {
          local: "0xF71F1bF36e9c20977927b52Df49cc2F69c8c153d",
          adopted: "0xF71F1bF36e9c20977927b52Df49cc2F69c8c153d",
        },
        "6450786": {
          local: "0xF6eD617c23949A7dE8ABf5318f2AFE9275A53AAb",
          adopted: "0xF6eD617c23949A7dE8ABf5318f2AFE9275A53AAb",
        },
        "6778479": {
          local: "0x2902c5EE62121df4ac5fa76a7d532722Bdf108e0",
          adopted: "0x2902c5EE62121df4ac5fa76a7d532722Bdf108e0",
        },
        "1818848877": {
          local: "0x7FD0bC1d931fABCB18c78f2257f614498CEA1d30",
          adopted: "0x7FD0bC1d931fABCB18c78f2257f614498CEA1d30",
        },
        "1835365481": {
          local: "0xb30ca61fD2B395EF1b58Eb0d1d6D40e439361e92",
          adopted: "0xb30ca61fD2B395EF1b58Eb0d1d6D40e439361e92",
        },
        "2053862243": {
          local: "0x1f4df37E553cEC57D8751e45664B70b9e1FF1d33",
          adopted: "0x1f4df37E553cEC57D8751e45664B70b9e1FF1d33",
        },
        "1887071085": {
          local: "0x955D1693C64e5a0746130FF6F6653E2171cC6708",
          adopted: "0x955D1693C64e5a0746130FF6F6653E2171cC6708",
        },
        "1650553709": {
          local: "0xEE9deC2712cCE65174B561151701Bf54b99C24C8",
          adopted: "0xEE9deC2712cCE65174B561151701Bf54b99C24C8",
        },
        "1634886247": {
          local: "0xfD9B8B1B7e44b39DFA04D66159Ac21B68141eD38",
          adopted: "0xfD9B8B1B7e44b39DFA04D66159Ac21B68141eD38",
        },
        "1835101812": {
          local: "0x9963a1E4fD60ba4a89E92930c8D8686514705BB6",
          adopted: "0x9963a1E4fD60ba4a89E92930c8D8686514705BB6",
        },
      },
    },
  ],
  agents: {
    relayerFeeVaults: {
      "6648936": PROTOCOL_ADMINS.mainnet["6648936"],
      "1869640809": PROTOCOL_ADMINS.mainnet["1869640809"],
      "1886350457": PROTOCOL_ADMINS.mainnet["1886350457"],
      "1634886255": PROTOCOL_ADMINS.mainnet["1634886255"],
      "6450786": PROTOCOL_ADMINS.mainnet["6450786"],
      "6778479": PROTOCOL_ADMINS.mainnet["6778479"],
      "1818848877": PROTOCOL_ADMINS.mainnet["1818848877"],
      "1835365481": PROTOCOL_ADMINS.mainnet["1835365481"],
    },
    watchers: {
      allowlist: ["0x9c77788d761ee0347Ab550883237CeD274a0F248", "0x917133b1dE100E9fF8F03E24c43F9272dD6A8E99"],
    },
    routers: {
      allowlist: [
        "0xF26c772C0fF3a6036bDdAbDAbA22cf65ECa9F97c", // Connext
      ],
    },
    sequencers: {
      allowlist: ["0x4fFA5968857a6C8242E4A6Ded2418155D33e82E7"],
    },
    relayers: {
      allowlist: [
        "0x75bA5Af8EFFDCFca32E1e288806d54277D1fde99", // gelato 1balance
        "0x935AaAe0f5b02007c08512F0629a9d37Af2E1A47", // connext relayer
        // "0x99a039d4F0e734aA8CcBE74C0FF9780BccD79f1d", // gelato 1balance zksync era
      ],
    },
    proposers: {
      allowlist: [
        "0x163Ac207A8A9b9675bE139256c4d0dc19BBfb93B", // lighthouse
      ],
    },
  },
};
