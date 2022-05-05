import { constants, providers, BigNumber, BigNumberish } from "ethers";
import { getChainData, Logger, createLoggingContext, RequestContext, ChainData, XCallArgs } from "@connext/nxtp-utils";
import {
  getContractInterfaces,
  ConnextContractInterfaces,
  contractDeployments,
  ChainReader,
} from "@connext/nxtp-txservice";

import { NxtpSdkConfig, getConfig } from "./config";
import { NxtpSdkUtils } from "./sdkUtils";

export const MIN_SLIPPAGE_TOLERANCE = "00.01"; // 0.01%;
export const MAX_SLIPPAGE_TOLERANCE = "15.00"; // 15.0%
export const DEFAULT_SLIPPAGE_TOLERANCE = "0.10"; // 0.10%
export const DEFAULT_AUCTION_TIMEOUT = 6_000;
export const FULFILL_TIMEOUT = 300_000;
export const DELAY_BETWEEN_RETRIES = 5_000;

/**
 * @classdesc Lightweight class to facilitate interaction with the Connext contract on configured chains.
 *
 */
export class NxtpSdkStableSwap {
  public readonly config: NxtpSdkConfig;
  private readonly logger: Logger;
  private readonly contracts: ConnextContractInterfaces; // Used to read and write to smart contracts.
  private chainReader: ChainReader;
  public readonly utils: NxtpSdkUtils;
  public readonly chainData: Map<string, ChainData>;

  constructor(config: NxtpSdkConfig, nxtpSdkUtils: NxtpSdkUtils, logger: Logger, chainData: Map<string, ChainData>) {
    this.config = config;
    this.utils = nxtpSdkUtils;
    this.logger = logger;
    this.chainData = chainData;
    this.contracts = getContractInterfaces();
    this.chainReader = new ChainReader(
      this.logger.child({ module: "ChainReader" }, this.config.logLevel),
      this.config.chains,
    );
  }

  static async create(_config: NxtpSdkConfig, _logger?: Logger): Promise<NxtpSdkStableSwap> {
    const chainData = await getChainData();
    if (!chainData) {
      throw new Error("Could not get chain data");
    }

    const nxtpConfig = await getConfig(_config, chainData, contractDeployments);
    const logger = _logger
      ? _logger.child({ name: "NxtpSdkStableSwap" })
      : new Logger({ name: "NxtpSdkStableSwap", level: nxtpConfig.logLevel });
    const nxtpSdkUtils = new NxtpSdkUtils(nxtpConfig, logger, chainData);

    return new NxtpSdkStableSwap(nxtpConfig, nxtpSdkUtils, logger, chainData);
  }

  async getTokenIndex(domain: string, tokenAddress: string): Promise<BigNumberish | undefined> {
    const { requestContext, methodContext } = createLoggingContext(this.getTokenIndex.name);
    this.logger.info("Method start", requestContext, methodContext, { tokenAddress });

    const stableSwapContractAddress = this.config.chains[domain].deployments!.stableSwap;

    if (!stableSwapContractAddress) {
      return;
    }

    const data = this.contracts.stableSwap.encodeFunctionData("getTokenIndex", [tokenAddress]);
    const encoded = await this.chainReader.readTx({
      to: stableSwapContractAddress,
      data: data,
      chainId: Number(domain),
    });
    this.logger.info(`${this.getTokenIndex.name} created `, requestContext, methodContext);
    const [tokenIndex] = this.contracts.stableSwap.decodeFunctionResult("getTokenIndex", encoded);

    return tokenIndex;
  }

  async getTokenBalance(domain: string, tokenIndex: string): Promise<BigNumber | undefined> {
    const { requestContext, methodContext } = createLoggingContext(this.getTokenBalance.name);
    this.logger.info("Method start", requestContext, methodContext, { tokenIndex });

    const stableSwapContractAddress = this.config.chains[domain].deployments!.stableSwap;

    if (!stableSwapContractAddress) {
      return;
    }

    const data = this.contracts.stableSwap.encodeFunctionData("getTokenBalance", [tokenIndex]);
    const encoded = await this.chainReader.readTx({
      to: stableSwapContractAddress,
      data: data,
      chainId: Number(domain),
    });
    this.logger.info(`${this.getTokenBalance.name} created `, requestContext, methodContext);
    const [tokenBalance] = this.contracts.stableSwap.decodeFunctionResult("getTokenBalance", encoded);

    return tokenBalance;
  }

  async getTokenAddress(domain: string, tokenIndex: BigNumberish): Promise<string | undefined> {
    const { requestContext, methodContext } = createLoggingContext(this.getTokenAddress.name);
    this.logger.info("Method start", requestContext, methodContext, { tokenIndex });

    const stableSwapContractAddress = this.config.chains[domain].deployments!.stableSwap;

    if (!stableSwapContractAddress) {
      return;
    }

    const data = this.contracts.stableSwap.encodeFunctionData("getToken", [tokenIndex]);
    const encoded = await this.chainReader.readTx({
      to: stableSwapContractAddress,
      data: data,
      chainId: Number(domain),
    });
    this.logger.info(`${this.getTokenAddress.name} created `, requestContext, methodContext);
    const [tokenAddress] = this.contracts.stableSwap.decodeFunctionResult("getToken", encoded);

    return tokenAddress;
  }

  async calculateSwap(params: {
    domain: string;
    tokenIndexFrom: BigNumberish;
    tokenIndexTo: BigNumberish;
    amount: BigNumberish;
  }): Promise<BigNumber | undefined> {
    const { requestContext, methodContext } = createLoggingContext(this.calculateSwap.name);
    this.logger.info("Method start", requestContext, methodContext, { params });

    const { domain, tokenIndexFrom, tokenIndexTo, amount: dx } = params;

    const stableSwapContractAddress = this.config.chains[domain].deployments!.stableSwap;

    if (!stableSwapContractAddress) {
      return;
    }

    const data = this.contracts.stableSwap.encodeFunctionData("calculateSwap", [tokenIndexFrom, tokenIndexTo, dx]);
    // const approvedData = this.erc20Interface.encodeFunctionData("allowance", [
    //   await this.signerAddress,
    //   transactionManagerAddress,
    // ]);
    const encoded = await this.chainReader.readTx({
      to: stableSwapContractAddress,
      data: data,
      chainId: Number(domain),
    });
    this.logger.info(`${this.calculateSwap.name} created `, requestContext, methodContext);
    const [dy] = this.contracts.stableSwap.decodeFunctionResult("calculateSwap", encoded);

    return dy;
  }
}
