import { AppContext } from "../../context";

export class Auctioneer {
  constructor(context: AppContext) {
    if (context.adapters.auctioneer) {
      throw new Error("Instance already exists.");
    }
  }

  // TODO: MetaTx type
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async sendBid(metaTx: any) {
    throw new Error("Not implemented");
  }
}
