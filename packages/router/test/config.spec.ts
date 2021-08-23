import { expect } from "@connext/nxtp-utils";
import { stub, restore, reset } from "sinon";
import { getEnvConfig, getConfig } from "../src/config";
import * as ConfigHelperFns from "../src/config";
import { configMock, chainDataMock } from "./utils";

describe("Config", () => {
  afterEach(() => {
    restore();
    reset();
  });

  describe("getEnvConfig", () => {
    it("should read config from NXTP Config with testnet network values overridden", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_CONFIG_FILE: "buggypath",
        NXTP_NETWORK: "testnet",
        NXTP_CONFIG: JSON.stringify(configMock),
      });

      let res;
      let error;

      try {
        res = getEnvConfig(chainDataMock);
      } catch (e) {
        error = e;
      }

      expect(error).to.be.undefined;
    });

    it("should read config from NXTP Config with local network values overridden", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_NETWORK: "local",
        NXTP_CONFIG: JSON.stringify(configMock),
      });

      let res;
      let error;

      try {
        res = getEnvConfig(chainDataMock);
      } catch (e) {
        error = e;
      }

      expect(error).to.be.undefined;
    });

    it("should read config from default filepath", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_CONFIG: JSON.stringify(configMock),
      });

      let res;
      let error;

      try {
        res = getEnvConfig(chainDataMock);
      } catch (e) {
        error = e;
      }

      expect(error).to.be.undefined;
    });

    it("should getEnvConfig", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_AUTH_URL: configMock.authUrl,
        NXTP_NATS_URL: configMock.natsUrl,
        NXTP_MNEMONIC: configMock.mnemonic,
        NXTP_ADMIN_TOKEN: configMock.adminToken,
        NXTP_CHAIN_CONFIG: JSON.stringify(configMock.chainConfig),
        NXTP_SWAP_POOLS: JSON.stringify(configMock.swapPools),
        NXTP_LOG_LEVEL: configMock.logLevel,
      });

      let res;
      let error;

      try {
        res = getEnvConfig(chainDataMock);
      } catch (e) {
        error = e;
      }

      expect(error).to.be.undefined;
    });
  });

  describe("getConfig", () => {
    it("should work", async () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_AUTH_URL: configMock.authUrl,
        NXTP_NATS_URL: configMock.natsUrl,
        NXTP_MNEMONIC: configMock.mnemonic,
        NXTP_ADMIN_TOKEN: configMock.adminToken,
        NXTP_CHAIN_CONFIG: JSON.stringify(configMock.chainConfig),
        NXTP_SWAP_POOLS: JSON.stringify(configMock.swapPools),
        NXTP_LOG_LEVEL: configMock.logLevel,
      });

      const env = getEnvConfig(chainDataMock);
      const config = await getConfig(chainDataMock);
      expect(config).to.be.deep.eq(env);
    });

    it("should work without param", async () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_AUTH_URL: configMock.authUrl,
        NXTP_NATS_URL: configMock.natsUrl,
        NXTP_MNEMONIC: configMock.mnemonic,
        NXTP_ADMIN_TOKEN: configMock.adminToken,
        NXTP_CHAIN_CONFIG: JSON.stringify(configMock.chainConfig),
        NXTP_SWAP_POOLS: JSON.stringify(configMock.swapPools),
        NXTP_LOG_LEVEL: configMock.logLevel,
      });

      const env = getEnvConfig(chainDataMock);
      const config = await getConfig();
      expect(config).to.be.deep.eq(env);
    });

    it("should work if chainDataToMap errors", async () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_AUTH_URL: configMock.authUrl,
        NXTP_NATS_URL: configMock.natsUrl,
        NXTP_MNEMONIC: configMock.mnemonic,
        NXTP_ADMIN_TOKEN: configMock.adminToken,
        NXTP_CHAIN_CONFIG: JSON.stringify(configMock.chainConfig),
        NXTP_SWAP_POOLS: JSON.stringify(configMock.swapPools),
        NXTP_LOG_LEVEL: configMock.logLevel,
      });

      stub(ConfigHelperFns, "chainDataToMap").rejects(new Error("fails"));
      const env = getEnvConfig(chainDataMock);
      const config = await getConfig();
      expect(config).to.be.deep.eq(env);
    });
  });
});
