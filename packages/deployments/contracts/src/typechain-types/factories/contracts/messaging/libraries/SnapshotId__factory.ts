/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SnapshotId,
  SnapshotIdInterface,
} from "../../../../contracts/messaging/libraries/SnapshotId";

const _abi = [
  {
    inputs: [],
    name: "SNAPSHOT_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6088610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063a226ee9e146038575b600080fd5b604061070881565b60405190815260200160405180910390f3fea264697066735822122045995a3412ad8d74ca7b60e04160076e1b25533594b88b1fec6b95d56b1d117b64736f6c63430008110033";

type SnapshotIdConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SnapshotIdConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SnapshotId__factory extends ContractFactory {
  constructor(...args: SnapshotIdConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SnapshotId> {
    return super.deploy(overrides || {}) as Promise<SnapshotId>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SnapshotId {
    return super.attach(address) as SnapshotId;
  }
  override connect(signer: Signer): SnapshotId__factory {
    return super.connect(signer) as SnapshotId__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SnapshotIdInterface {
    return new utils.Interface(_abi) as SnapshotIdInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SnapshotId {
    return new Contract(address, _abi, signerOrProvider) as SnapshotId;
  }
}
