/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TypedMemView, TypedMemViewInterface } from "../TypedMemView";

const _abi = [
  {
    inputs: [],
    name: "NULL",
    outputs: [
      {
        internalType: "bytes29",
        name: "",
        type: "bytes29",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6091610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f26be3fc146038575b600080fd5b604262ffffff1981565b60405162ffffff19909116815260200160405180910390f3fea26469706673582212209d975cdeeb98e572d997f76c4f440ff7394d561be09cb2efed5cde87e52bd4c564736f6c634300080b0033";

type TypedMemViewConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TypedMemViewConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TypedMemView__factory extends ContractFactory {
  constructor(...args: TypedMemViewConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TypedMemView";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TypedMemView> {
    return super.deploy(overrides || {}) as Promise<TypedMemView>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TypedMemView {
    return super.attach(address) as TypedMemView;
  }
  connect(signer: Signer): TypedMemView__factory {
    return super.connect(signer) as TypedMemView__factory;
  }
  static readonly contractName: "TypedMemView";
  public readonly contractName: "TypedMemView";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TypedMemViewInterface {
    return new utils.Interface(_abi) as TypedMemViewInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TypedMemView {
    return new Contract(address, _abi, signerOrProvider) as TypedMemView;
  }
}
