/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface ProposedOwnableFacetInterface extends utils.Interface {
  functions: {
    "acceptProposedOwner()": FunctionFragment;
    "assetWhitelistRemoved()": FunctionFragment;
    "assetWhitelistTimestamp()": FunctionFragment;
    "delay()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "proposeAssetWhitelistRemoval()": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposeRouterWhitelistRemoval()": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "removeAssetWhitelist()": FunctionFragment;
    "removeRouterWhitelist()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "routerWhitelistRemoved()": FunctionFragment;
    "routerWhitelistTimestamp()": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptProposedOwner"
      | "assetWhitelistRemoved"
      | "assetWhitelistTimestamp"
      | "delay"
      | "owner"
      | "pause"
      | "proposeAssetWhitelistRemoval"
      | "proposeNewOwner"
      | "proposeRouterWhitelistRemoval"
      | "proposed"
      | "proposedTimestamp"
      | "removeAssetWhitelist"
      | "removeRouterWhitelist"
      | "renounceOwnership"
      | "renounced"
      | "routerWhitelistRemoved"
      | "routerWhitelistTimestamp"
      | "unpause"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetWhitelistRemoved",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetWhitelistTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeAssetWhitelistRemoval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposeNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeRouterWhitelistRemoval",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposedTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeAssetWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeRouterWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "routerWhitelistRemoved",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "routerWhitelistTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetWhitelistRemoved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetWhitelistTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeAssetWhitelistRemoval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeRouterWhitelistRemoval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAssetWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRouterWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routerWhitelistRemoved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "routerWhitelistTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "AssetWhitelistRemovalProposed(uint256)": EventFragment;
    "AssetWhitelistRemoved(bool)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused()": EventFragment;
    "RouterWhitelistRemovalProposed(uint256)": EventFragment;
    "RouterWhitelistRemoved(bool)": EventFragment;
    "Unpaused()": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "AssetWhitelistRemovalProposed"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetWhitelistRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RouterWhitelistRemovalProposed"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterWhitelistRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface AssetWhitelistRemovalProposedEventObject {
  timestamp: BigNumber;
}
export type AssetWhitelistRemovalProposedEvent = TypedEvent<
  [BigNumber],
  AssetWhitelistRemovalProposedEventObject
>;

export type AssetWhitelistRemovalProposedEventFilter =
  TypedEventFilter<AssetWhitelistRemovalProposedEvent>;

export interface AssetWhitelistRemovedEventObject {
  renounced: boolean;
}
export type AssetWhitelistRemovedEvent = TypedEvent<
  [boolean],
  AssetWhitelistRemovedEventObject
>;

export type AssetWhitelistRemovedEventFilter =
  TypedEventFilter<AssetWhitelistRemovedEvent>;

export interface OwnershipProposedEventObject {
  proposedOwner: string;
}
export type OwnershipProposedEvent = TypedEvent<
  [string],
  OwnershipProposedEventObject
>;

export type OwnershipProposedEventFilter =
  TypedEventFilter<OwnershipProposedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {}
export type PausedEvent = TypedEvent<[], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RouterWhitelistRemovalProposedEventObject {
  timestamp: BigNumber;
}
export type RouterWhitelistRemovalProposedEvent = TypedEvent<
  [BigNumber],
  RouterWhitelistRemovalProposedEventObject
>;

export type RouterWhitelistRemovalProposedEventFilter =
  TypedEventFilter<RouterWhitelistRemovalProposedEvent>;

export interface RouterWhitelistRemovedEventObject {
  renounced: boolean;
}
export type RouterWhitelistRemovedEvent = TypedEvent<
  [boolean],
  RouterWhitelistRemovedEventObject
>;

export type RouterWhitelistRemovedEventFilter =
  TypedEventFilter<RouterWhitelistRemovedEvent>;

export interface UnpausedEventObject {}
export type UnpausedEvent = TypedEvent<[], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface ProposedOwnableFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProposedOwnableFacetInterface;

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
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    assetWhitelistRemoved(overrides?: CallOverrides): Promise<[boolean]>;

    assetWhitelistTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeAssetWhitelistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeRouterWhitelistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(overrides?: CallOverrides): Promise<[string]>;

    proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeAssetWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeRouterWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounced(overrides?: CallOverrides): Promise<[boolean]>;

    routerWhitelistRemoved(overrides?: CallOverrides): Promise<[boolean]>;

    routerWhitelistTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  assetWhitelistRemoved(overrides?: CallOverrides): Promise<boolean>;

  assetWhitelistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeAssetWhitelistRemoval(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeRouterWhitelistRemoval(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  removeAssetWhitelist(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeRouterWhitelist(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounced(overrides?: CallOverrides): Promise<boolean>;

  routerWhitelistRemoved(overrides?: CallOverrides): Promise<boolean>;

  routerWhitelistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    assetWhitelistRemoved(overrides?: CallOverrides): Promise<boolean>;

    assetWhitelistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    proposeAssetWhitelistRemoval(overrides?: CallOverrides): Promise<void>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposeRouterWhitelistRemoval(overrides?: CallOverrides): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    removeAssetWhitelist(overrides?: CallOverrides): Promise<void>;

    removeRouterWhitelist(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    routerWhitelistRemoved(overrides?: CallOverrides): Promise<boolean>;

    routerWhitelistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AssetWhitelistRemovalProposed(uint256)"(
      timestamp?: null
    ): AssetWhitelistRemovalProposedEventFilter;
    AssetWhitelistRemovalProposed(
      timestamp?: null
    ): AssetWhitelistRemovalProposedEventFilter;

    "AssetWhitelistRemoved(bool)"(
      renounced?: null
    ): AssetWhitelistRemovedEventFilter;
    AssetWhitelistRemoved(renounced?: null): AssetWhitelistRemovedEventFilter;

    "OwnershipProposed(address)"(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;
    OwnershipProposed(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused()"(): PausedEventFilter;
    Paused(): PausedEventFilter;

    "RouterWhitelistRemovalProposed(uint256)"(
      timestamp?: null
    ): RouterWhitelistRemovalProposedEventFilter;
    RouterWhitelistRemovalProposed(
      timestamp?: null
    ): RouterWhitelistRemovalProposedEventFilter;

    "RouterWhitelistRemoved(bool)"(
      renounced?: null
    ): RouterWhitelistRemovedEventFilter;
    RouterWhitelistRemoved(renounced?: null): RouterWhitelistRemovedEventFilter;

    "Unpaused()"(): UnpausedEventFilter;
    Unpaused(): UnpausedEventFilter;
  };

  estimateGas: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    assetWhitelistRemoved(overrides?: CallOverrides): Promise<BigNumber>;

    assetWhitelistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeAssetWhitelistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeRouterWhitelistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    removeAssetWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeRouterWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounced(overrides?: CallOverrides): Promise<BigNumber>;

    routerWhitelistRemoved(overrides?: CallOverrides): Promise<BigNumber>;

    routerWhitelistTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    assetWhitelistRemoved(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetWhitelistTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeAssetWhitelistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeRouterWhitelistRemoval(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAssetWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeRouterWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    routerWhitelistRemoved(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    routerWhitelistTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
