import { exec as _exec } from "child_process";
import util from "util";

import { utils } from "ethers";

const exec = util.promisify(_exec);

const networks: string[] = ["rinkeby", "kovan", "goerli"];

const testnetRouters = [
  // "0xC289df90811e9808D7efD0DFaC75BB7965995eF3",
  // "0x8564B35EABB847eF6Ddfc8375acF9a71f8bEE8D0",
  // "0x649D45716A86A3794e2B5fb35B9478e796F44518",
  // "0xA1646EbC2Ab05Ddbfa00ec5E6f246FF8bdA72d7B",
  // "0xac821E41b77e5eAE234Eb2e9e2F65730914A141C",
  // "0x36802f05EA23968DbD5010084Da25104a88FB6d0",
  // "0x3E8e19E149AE18F5ec55e966841C29688bAC9f4a",
  // "0xf569c6186E7D57742ae89DC97F02FD0d5BA4CD6D",
  // "0x6f363C44d40691c91756c6b95fafd4a8B8AF7718",
  // "0x4702Dd07D10161A31eF35d50deb2566c1E113A89",
  // "0x73D5926422023f06a6Ae0F16Dc22Dd49602eA7a4",
  // "0xe5784bBFdA0Ee1Ade117d0A91d3198f7D0B903d5",
  // "0x82B3AFcACc283Bf47573fADD559342858Bb937e0",
  // "0xC289df90811e9808D7efD0DFaC75BB7965995eF3",
  // "0x0Cc784Ef22f623D29FE9e0872990c7EfAc4c3456",
  // "0x5b3B22551F3B36E4c3668730d343f6CEAA4572D5",
  // "0xfa818B787B81f675bFf2360e37256b726BAb0649",
  // "0xB7FfA9214ed97aE74925E741BB295e986cf4a9be",
  // "0xA59057F7B69d68e6DfbfbBEb6821Bd1512424A81",
  // "0x7B2df12ee8C618673C25566a60E3412733C6CdBe",
  // "0x2835909645F8E4903D81db6a20484439f458AbAD",
  // "0x1b459cb897c4Df7132c0C63B34A7d3E83c246202",
  // "0xe2C2586a54E039b8ff3a36a55265b5E9263Cba4D",
  // "0x719EDDFf0658677fE2528010e3eeefDEAC49B88C",
  // "0xcA3b5e4924507c426B0b7c42Ca01706f842031D9",
  // "0x1c41F4c4aC7498F8EE13eBaF66adbe24b4bad448",
  // "0x9490be794EFdBdC18F0bE2BE89647e26c31c9AaC",
  // "0x54A243F0cA835Fa1562cEe8302e75D03C281480C",
  // "0x8604bf5F0ec78138624551468CC4B4b617F51A09",
  // "0x394dA46D13F88BeAcaF46c85B8710bD21e4Ee69A",
  // "0x22E3faE84EC3528Bbd37e156Bb6Ac72c01B0a2c7",
  // "0x80e9Ad55163049a3e310a5a0F263ACe06D6B0227",
  // "0xBeb8f8D4406812a15C9153d44B5949b3Df4AD46c",
  // "0x3DB9cA552aa915d1986025c09951F0521bf9F402",
  // "0x4551F9aBBc690bfb3ddA3ab15f39fFa4d46D8e2f",
  // "0x9f61CA6BD4b1eF6D4C1cF13d207abeDb1AF862df",
  // "0x830d78C17AD52ea902B783A76Ed0E8Fd7e34348b",
  // "0x1F237122f4feB006bF318761475D3908b070f8eC",
  // "0xCa16cb29DB3dE80C21a102d0b9e45c00d6053C2c",
  // "0x995208e2Ae8A814AD6870DF8AA0ed8b7516e7d93",
  // "0xBc0209887D66252A1c5F3b58554dFb988Bb868cc",
  // "0x9419ea77fdeAF87278373E2C9c82Aa60a232410f",
  // "0xA605224608d1aF00e9320310d82e95f47935a38A",
  // "0x0B671ed2789827996Cf0956F0f4cD91768e194f2",
  // "0x6e03463cA85C53a145795D0Bf38B0009720340E7",
  // "0x36F97070fD22526D4888D43B1f819AFB45167b0A",
  // "0x84B7F37072971013df84D22E7e9B3Bf5b33b5840",
  // "0xA45Cb941529395b26f04135f1267720c1938EE89",
  // "0x87c33506C5260033AAE9ef8Bc6f4f9B2D5dBB036",
  // "0xec17b1159CE7621dAc35dF1BB8CA76a142c9252A",
  // "0xb36F017592563361463896c263254f0b235a9Cc3",
  // "0xc28949777ea89bc6F63DD6f2fb0643Eb76Aee213",
  // "0x26B5948015F6a7A5F92eFc0Fb2a704984553DC46",
  // "0xC06A5e4DAdA2A64969d7Ed1662A60d8a76069818",
  // "0xaf0F0Ca107574037Ac56b9f560490C7675cBd939",
  // "0xC40EB839c7fA5bd07e08CA663E18633958e88D4B",
  // "0x16eB77862b6Ce7b160c06CA7496472aa7B63878F",
  // "0xE055e9BD14F6C69047ea56e67f49C00cE9c8e224",
  // "0xE44B0B9a834505a3E417610514E02003f013C45A",
  // "0x294cefC5be50f3A7428Fcfb52c3b09Dfe91b2E5a",
  // "0x7A52241E005B0EB03bFD03d71AaD085C5DaBc41d",
  // "0xf9a2660cACe6a22D769e9c2F81A30f4F108d60A0",
  // "0xcE28C7633544f373e827f6944229A25119b451A5",
  // "0x163881aE172a9d86FA8708B6aa36644187E15b50",
  // "0xe41f857158F11F446893D5baA4540baD80EE4843",
  // "0xf43B4C1c75e6173A968e6B9A813c56706C58aa7F",
  // "0xE13275f7179D0c0034413b632C46308A5a01c65c",
  // "0x6AA2d33D3c55E9ef623a067A546E587e39702E1F",
  // "0x77b6Cd0c1e4103f10fa18d87d7410697bAB0c225",
  // "0xf0c56B486F101fC91fA656A02f18291Af620D2Ff",
  // "0x65Cd44e5b49D6F45B8d4D263dAF574c7821891Cd",
  // "0x120d2453d8fe39fb8bf4bbad55834235830330b9",
  // "0x6271c3035dc53457C22f42293FfE680230c900d1",
  // "0x1933C1032dBdf5BCbEe528388D902B1657f7f5b9",
  // "0x29741b12777Ea85D197C6500689E2D55760aa87c",
  // "0xaae340b8287eE358BB95aae12dc184F9963BbAf6",
  // "0x805ac6BF62B8a5d515042c5C1D5E277A360B93b0",
  // "0x9d0ce0726b798778fcD9A75AC1A2B8E8c4764Bd7",
  // "0xef19B98111eF5Cb3bB819A61Dd2D6D157e26193b",
  // "0xa31aedc3f142be941d8ab050a388ed70f5882d66",
  // "0xDdacCd4BB4e3d8b18d828267a2F857E8e6135543",
  // "0xC869D24628040E5F1a10EbA7cC59065C4e0EC0B4",
  // "0x43b5aCbe2cf95109f3085bddf35B6A49f9D6711d",
  // "0x811Bf2BEBE24a0BFC6d182dFA093bCC2C667D792",
  // "0xF7B08b021A8CC2C7408A72304446E53f6d5A4b5B",
  // "0x30429853aB95639396ee7DC360dB4aa2eE02cF4b",
  // "0x57e3d030a6ee264808C6DB469E595D89D2317C46",
  // "0x57e3d030a6ee264808C6DB469E595D89D2317C46",
  // "0x3808A2A6eDAB43Fb28da7A3aC603Cf7140ec166c",
  // "0xb023Bbd0ed41E5813B5876a9B06855c093402601",
  // "0x4Ea3c5a2720EDA6759f50eD2Fc23e1bC795D00D0",
  // "0x87BB89F10dd62cdE0AD4777448e995556860Dc18",
  // "0x719EDDFf0658677fE2528010e3eeefDEAC49B88C",
  // "0x0001b261886b1ea4308FEf10eA9f1FFf1554d704",
  // "0xD421ebB9a75B8E9CA48be3eeb7e6bA53b34492AC",
  // "0xa8A5c7B2A4ab71aC82c3246eAdA388a30bdf32e5",
  // "0xF3E16a28b09bE3836e66f091613c230128141Fc1",
  // "0xe7BE9B57a1F76A17DD4f6a90e5A858B16bf5118f",
  // "0x47ec3bf49E08C35F9b8D1f8DC70Be17a03B4B6F7",
  // "0x2a8cd414ec33108B67F3Eb45EED9e701FbB1e6Bb",
  // "0x4670Bd081B7b0DD79810C1aD1cE5fc8a9dB3eb99",
  // "0x953be93a7A408A9d80d47eA9aC626ef1B40c903a",
  // "0xCcC41C864C90d8753a01f745aa5b5B596d2E0798",
  // "0x1c1Ca14Cf89bB371b044935D7aaA818F18d502Ac",
  "0x96D4142a4Ba2e802dad024E554FCa82e7b1e3FA5",
];

const routers: string[] = testnetRouters;
const env = "production";

const run = async () => {
  if (routers.length === 0) {
    console.log("please add router addresses to whitelist");
    return;
  }

  const routerAddresses = routers.map((r) => utils.getAddress(r));

  for (const n of networks) {
    for (const r of routerAddresses) {
      console.log(`Running add router script for router ${r} on network ${n}`);
      const { stdout: out, stderr: err } = await exec(
        `yarn hardhat setup-router --network ${n} --router ${r} --env ${env}`,
      );

      if (out) {
        console.log(`stdout: ${n} ${out}`);
      }
      if (err) {
        console.error(`stderr: ${n} ${err}`);
      }
    }
  }
};
run();
