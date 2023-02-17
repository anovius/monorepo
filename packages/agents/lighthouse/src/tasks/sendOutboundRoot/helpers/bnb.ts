import { createLoggingContext, getChainIdFromDomain } from "@connext/nxtp-utils";
import { utils } from "ethers";

import { getContext } from "../sendOutboundRoot";
import { ExtraSendOutboundRootParam } from "../operations/sendOutboundRoot";
import { NoProviderForDomain, NoSpokeConnector } from "../../propagate/errors";

export const getSendOutboundRootParams = async (l2domain: string): Promise<ExtraSendOutboundRootParam> => {
  const {
    config,
    chainData,
    adapters: { deployments, contracts, chainreader, ambs },
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext(getSendOutboundRootParams.name);
  const l2RpcUrl = config.chains[l2domain]?.providers[0];

  if (!l2RpcUrl) {
    throw new NoProviderForDomain(l2domain, requestContext, methodContext);
  }
  const l1RpcUrl = config.chains[config.hubDomain]?.providers[0];
  if (!l1RpcUrl) {
    throw new NoProviderForDomain(config.hubDomain, requestContext, methodContext);
  }

  const l2ChainId = await getChainIdFromDomain(l2domain, chainData);

  const l2SpokeConnector = deployments.spokeConnector(
    l2ChainId,
    "Bnb",
    config.environment === "staging" ? "Staging" : "",
  );
  if (!l2SpokeConnector) {
    throw new NoSpokeConnector(l2ChainId, requestContext, methodContext);
  }

  let encodedData = contracts.spokeConnector.encodeFunctionData("AMB");
  let encoded = await chainreader.readTx(
    { data: encodedData, domain: Number(l2domain), to: l2SpokeConnector.address },
    encodedData,
  );
  const [ambAddress] = contracts.spokeConnector.decodeFunctionResult("AMB", encoded);

  const ambInterface = new utils.Interface(ambs.bnb);
  encodedData = ambInterface.encodeFunctionData("calcSrcFees", ["", l2ChainId, 32]);
  encoded = await chainreader.readTx({ data: encodedData, domain: Number(l2domain), to: ambAddress }, encodedData);
  const [_fee] = ambInterface.decodeFunctionResult("calcSrcFees", encoded);

  return { _fee, _encodedData: "0x" };
};
