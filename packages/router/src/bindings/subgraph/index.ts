import { createLoggingContext, jsonifyError } from "@connext/nxtp-utils";
import interval from "interval-promise";

import { AppContext } from "../../context";

const SUBGRAPH_POLL_INTERVAL = 15_000;

export const bindSubgraph = async (context: AppContext) => {
  const {
    adapters: { cache, subgraph },
    logger,
  } = context;
  const { requestContext, methodContext } = createLoggingContext("bindSubgraph");
  interval(async () => {
    try {
      const activeTxs = await subgraph.getTransactionsWithStatuses();
      logger.debug("Getting active transactions", requestContext, methodContext, {
        activeTxIds: activeTxs.map((activeTx) => activeTx.transactionId),
      });
      await cache.transactions.storeTxData(activeTxs);
    } catch (err: any) {
      logger.error(
        "Error getting pending txs, waiting for next loop",
        requestContext,
        methodContext,
        jsonifyError(err),
      );
      return;
    }
  }, SUBGRAPH_POLL_INTERVAL);
};
