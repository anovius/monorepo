/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  VersionFacet,
  VersionFacetInterface,
} from "../../../../../contracts/core/connext/facets/VersionFacet";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526000608052348015601457600080fd5b50608051609a61002d6000396000602f0152609a6000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ffa1ad7414602d575b600080fd5b7f000000000000000000000000000000000000000000000000000000000000000060405160ff909116815260200160405180910390f3fea2646970667358221220202f626fb6b2dd325a9ce608714dbc32ad9637f2adf6ebe9bb11a3c9ba58dd7d64736f6c634300080f0033";

type VersionFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VersionFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VersionFacet__factory extends ContractFactory {
  constructor(...args: VersionFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VersionFacet> {
    return super.deploy(overrides || {}) as Promise<VersionFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VersionFacet {
    return super.attach(address) as VersionFacet;
  }
  override connect(signer: Signer): VersionFacet__factory {
    return super.connect(signer) as VersionFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VersionFacetInterface {
    return new utils.Interface(_abi) as VersionFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VersionFacet {
    return new Contract(address, _abi, signerOrProvider) as VersionFacet;
  }
}
