import { expect } from "../src/expect";
import { providers, Wallet } from "ethers";
import { arrayify, hexlify, solidityKeccak256 } from "ethers/lib/utils";
import { createStubInstance } from "sinon";
import { encodeHandleRelayerFeeData } from "../src/encode";

import { recoverHandleRelayerFeePayload, signHandleRelayerFeePayload } from "../src/signatures";

describe("signFulfillTransactionPayload / recoverFulfillTransactionPayload", () => {
  it("should work when there is no provider", async () => {
    const nonce = "0";
    const feePercentage = "1";

    const signer = Wallet.createRandom();
    const sig = await signHandleRelayerFeePayload(nonce, feePercentage, signer);

    expect(recoverHandleRelayerFeePayload(nonce, feePercentage, sig)).to.be.eq(signer.address);
  });

  it("should work when there is a provider", async () => {
    const nonce = "0";
    const feePercentage = "1";
    const signer = Wallet.createRandom();

    const msg = arrayify(solidityKeccak256(["bytes"], [encodeHandleRelayerFeeData(nonce, feePercentage)]));
    const provider = createStubInstance(providers.Web3Provider);
    (provider as any)._isProvider = true;
    const stubSig = await signer.signMessage(msg);
    provider.send.resolves(stubSig);

    const sig = await signHandleRelayerFeePayload(nonce, feePercentage, signer.connect(provider));
    expect(sig).to.be.deep.eq(stubSig);
    const [method, args] = provider.send.getCall(0).args;
    expect(provider.send.callCount).to.be.eq(1);
    expect(method).to.be.eq("personal_sign");
    expect(args[0].toString()).to.be.eq(hexlify(msg));
    expect(args[1]).to.be.eq(signer.address);
  });
});
