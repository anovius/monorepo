import { Bid, createLoggingContext, XTransfer, DEFAULT_ROUTER_FEE, ajv, XTransferSchema } from "@connext/nxtp-utils";

import { MissingXCall, NotEnoughAmount, ParamsInvalid } from "../errors";
import { getHelpers } from "../helpers";
import { getContext } from "../../router";

// fee percentage paid to relayer. need to be updated later
export const RELAYER_FEE_PERCENTAGE = "1"; //  1%

/**
 * Router creates a new bid and sends it to auctioneer.
 *
 * @param params - The crosschain xcall params.
 */
export const execute = async (params: XTransfer): Promise<void> => {
  const { requestContext, methodContext } = createLoggingContext(execute.name);

  const {
    logger,
    adapters: { wallet, subgraph },
    routerAddress,
  } = getContext();
  const {
    auctions: { sendBid },
    shared: { getDestinationLocalAsset, signRouterPathPayload },
  } = getHelpers();

  logger.debug("Method start", requestContext, methodContext, { params });

  // Validate Input schema
  const validateInput = ajv.compile(XTransferSchema);
  const validInput = validateInput(params);
  if (!validInput) {
    const msg = validateInput.errors?.map((err: any) => `${err.instancePath} - ${err.message}`).join(",");
    throw new ParamsInvalid({
      paramsError: msg,
      params,
    });
  }

  const { originDomain, destinationDomain, transferId, xcall } = params;
  if (!xcall) {
    throw new MissingXCall({ requestContext, methodContext });
  }

  const executeLocalAsset = await getDestinationLocalAsset(originDomain, xcall.localAsset, destinationDomain);
  logger.debug("Got local asset", requestContext, methodContext, { executeLocalAsset });

  const receivingAmount = xcall.localAmount;

  // TODO: We should make a list of signatures that reflect which auction rounds we want to bid on,
  // based on a calculation of which rounds we can afford to bid on. For now, this is hardcoded to bid
  // only on the first auction round.
  // Produce the router path signatures for each auction round we want to bid on.
  const signatures = {
    "1": await signRouterPathPayload(transferId, RELAYER_FEE_PERCENTAGE, wallet),
  };
  logger.debug("Signed payloads", requestContext, methodContext, {
    rounds: Object.keys(signatures),
    // Sanitized with ellipsis.
    sigs: Object.values(signatures).map((s) => s.slice(0, 6) + ".."),
  });

  const fee = DEFAULT_ROUTER_FEE;
  const bid: Bid = {
    transferId,
    origin: originDomain,
    router: routerAddress,
    fee,
    signatures,
  };

  // sanity check
  const balance = await subgraph.getAssetBalance(destinationDomain, routerAddress, executeLocalAsset);
  logger.info("Checking balance", requestContext, methodContext, { balance: balance.toString() });
  if (balance.lt(receivingAmount)) {
    throw new NotEnoughAmount({
      balance: balance.toString(),
      receivingAmount: receivingAmount.toString(),
    });
  }
  logger.info("Sanity checks passed", requestContext, methodContext, { liquidity: balance.toString() });

  await sendBid(bid, requestContext);
};
