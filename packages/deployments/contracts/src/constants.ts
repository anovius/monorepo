export const TEST_ROUTERS = [
  "0x9ADA6aa06eF36977569Dc5b38237809c7DF5082a", // live testnet router
  "0x0EC26F03e3dBA9bb5162D28fD5a3378A25f168d1", // rahul test router
  "0xDc150c5Db2cD1d1d8e505F824aBd90aEF887caC6", // ci/shared router
  "0x627306090abaB3A6e1400e9345bC60c78a8BEf57", // local router
];

export const SKIP_SETUP = [
  1, 10, 56, 250, 137, 100, 122, 1285, 9001, 42161, 43114, 1284, 59144, 8453, 43114, 1101, 1088, 324
];
export const WRAPPED_ETH_MAP = new Map<number, string>([
  // Mainnets
  [1, "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
  [4, "0xc778417E063141139Fce010982780140Aa0cD5Ab"],
  [42, "0xd0A1E359811322d97991E03f863a0C30C2cF029C"],
  [10, "0x4200000000000000000000000000000000000006"],
  [56, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"],
  [137, "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"],
  [250, "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"],
  [42161, "0x82af49447d8a07e3bd95bd0d56f35241523fbab1"],
  [43114, "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"],
  [100, "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d"],
  [1285, "0x98878B06940aE243284CA214f92Bb71a2b032B8A"],
  [1284, "0xAcc15dC74880C9944775448304B263D191c6077F"],
  [59144, "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f"],
  [8453, "0x4200000000000000000000000000000000000006"],
  [43114, "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"],
  [1101, "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"],
  [324, "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91"],

  // Testnets
  [5, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"],
  [420, "0x74c6FD7D2Bc6a8F0Ebd7D78321A95471b8C2B806"],
  [59140, "0x2C1b868d6596a18e32E61B901E4060C872647b6C"],
  [80001, "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"],
  [421613, "0x1346786E6A5e07b90184a1Ba58E55444b99DC4A2"],
  [1442, "0xeE589e91401066068AF129B0005aC3EF69E3fdB4"],
  [84531, "0x4200000000000000000000000000000000000006"],
  [195, "0xbec7859bc3d0603bec454f7194173e36bf2aa5c8"],
]);

export const MAINNET_CHAINS = [...SKIP_SETUP];
