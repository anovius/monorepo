/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface NomadFacetInterface extends utils.Interface {
  functions: {
    "bridgeRouter()": FunctionFragment;
    "onReceive(uint32,bytes32,uint32,bytes32,address,uint256,bytes)": FunctionFragment;
    "setBridgeRouter(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "bridgeRouter" | "onReceive" | "setBridgeRouter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bridgeRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onReceive",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setBridgeRouter",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "bridgeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "onReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBridgeRouter",
    data: BytesLike
  ): Result;

  events: {
    "BridgeRouterUpdated(address,address,address)": EventFragment;
    "Reconciled(bytes32,address[],address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BridgeRouterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reconciled"): EventFragment;
}

export interface BridgeRouterUpdatedEventObject {
  oldBridgeRouter: string;
  newBridgeRouter: string;
  caller: string;
}
export type BridgeRouterUpdatedEvent = TypedEvent<
  [string, string, string],
  BridgeRouterUpdatedEventObject
>;

export type BridgeRouterUpdatedEventFilter =
  TypedEventFilter<BridgeRouterUpdatedEvent>;

export interface ReconciledEventObject {
  transferId: string;
  routers: string[];
  asset: string;
  amount: BigNumber;
  caller: string;
}
export type ReconciledEvent = TypedEvent<
  [string, string[], string, BigNumber, string],
  ReconciledEventObject
>;

export type ReconciledEventFilter = TypedEventFilter<ReconciledEvent>;

export interface NomadFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NomadFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bridgeRouter(overrides?: CallOverrides): Promise<[string]>;

    onReceive(
      _origin: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _tokenDomain: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<BytesLike>,
      _localToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBridgeRouter(
      _bridgeRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  bridgeRouter(overrides?: CallOverrides): Promise<string>;

  onReceive(
    _origin: PromiseOrValue<BigNumberish>,
    _sender: PromiseOrValue<BytesLike>,
    _tokenDomain: PromiseOrValue<BigNumberish>,
    _tokenAddress: PromiseOrValue<BytesLike>,
    _localToken: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBridgeRouter(
    _bridgeRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bridgeRouter(overrides?: CallOverrides): Promise<string>;

    onReceive(
      _origin: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _tokenDomain: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<BytesLike>,
      _localToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBridgeRouter(
      _bridgeRouter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BridgeRouterUpdated(address,address,address)"(
      oldBridgeRouter?: null,
      newBridgeRouter?: null,
      caller?: null
    ): BridgeRouterUpdatedEventFilter;
    BridgeRouterUpdated(
      oldBridgeRouter?: null,
      newBridgeRouter?: null,
      caller?: null
    ): BridgeRouterUpdatedEventFilter;

    "Reconciled(bytes32,address[],address,uint256,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      routers?: null,
      asset?: null,
      amount?: null,
      caller?: null
    ): ReconciledEventFilter;
    Reconciled(
      transferId?: PromiseOrValue<BytesLike> | null,
      routers?: null,
      asset?: null,
      amount?: null,
      caller?: null
    ): ReconciledEventFilter;
  };

  estimateGas: {
    bridgeRouter(overrides?: CallOverrides): Promise<BigNumber>;

    onReceive(
      _origin: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _tokenDomain: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<BytesLike>,
      _localToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBridgeRouter(
      _bridgeRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridgeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onReceive(
      _origin: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _tokenDomain: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<BytesLike>,
      _localToken: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBridgeRouter(
      _bridgeRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
