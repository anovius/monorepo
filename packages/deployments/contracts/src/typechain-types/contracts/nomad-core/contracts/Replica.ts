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
} from "../../../common";

export interface ReplicaInterface extends utils.Interface {
  functions: {
    "PROCESS_GAS()": FunctionFragment;
    "RESERVE_GAS()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "acceptableRoot(bytes32)": FunctionFragment;
    "committedRoot()": FunctionFragment;
    "confirmAt(bytes32)": FunctionFragment;
    "doubleUpdate(bytes32,bytes32[2],bytes,bytes)": FunctionFragment;
    "homeDomainHash()": FunctionFragment;
    "initialize(uint32,address,bytes32,uint256)": FunctionFragment;
    "localDomain()": FunctionFragment;
    "messages(bytes32)": FunctionFragment;
    "optimisticSeconds()": FunctionFragment;
    "owner()": FunctionFragment;
    "process(bytes)": FunctionFragment;
    "prove(bytes32,bytes32[32],uint256)": FunctionFragment;
    "proveAndProcess(bytes,bytes32[32],uint256)": FunctionFragment;
    "remoteDomain()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setConfirmation(bytes32,uint256)": FunctionFragment;
    "setOptimisticTimeout(uint256)": FunctionFragment;
    "setUpdater(address)": FunctionFragment;
    "state()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "update(bytes32,bytes32,bytes)": FunctionFragment;
    "updater()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PROCESS_GAS"
      | "RESERVE_GAS"
      | "VERSION"
      | "acceptableRoot"
      | "committedRoot"
      | "confirmAt"
      | "doubleUpdate"
      | "homeDomainHash"
      | "initialize"
      | "localDomain"
      | "messages"
      | "optimisticSeconds"
      | "owner"
      | "process"
      | "prove"
      | "proveAndProcess"
      | "remoteDomain"
      | "renounceOwnership"
      | "setConfirmation"
      | "setOptimisticTimeout"
      | "setUpdater"
      | "state"
      | "transferOwnership"
      | "update"
      | "updater"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PROCESS_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RESERVE_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptableRoot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "committedRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "confirmAt",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "doubleUpdate",
    values: [
      PromiseOrValue<BytesLike>,
      [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "homeDomainHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messages",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "optimisticSeconds",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "process",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "prove",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "proveAndProcess",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "remoteDomain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setConfirmation",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOptimisticTimeout",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUpdater",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "updater", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "PROCESS_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RESERVE_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptableRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "committedRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "confirmAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doubleUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "homeDomainHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messages", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "optimisticSeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proveAndProcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remoteDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConfirmation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOptimisticTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUpdater", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;

  events: {
    "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)": EventFragment;
    "NewUpdater(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Process(bytes32,bool,bytes)": EventFragment;
    "SetConfirmation(bytes32,uint256,uint256)": EventFragment;
    "SetOptimisticTimeout(uint256)": EventFragment;
    "Update(uint32,bytes32,bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DoubleUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewUpdater"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Process"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetConfirmation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetOptimisticTimeout"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Update"): EventFragment;
}

export interface DoubleUpdateEventObject {
  oldRoot: string;
  newRoot: [string, string];
  signature: string;
  signature2: string;
}
export type DoubleUpdateEvent = TypedEvent<
  [string, [string, string], string, string],
  DoubleUpdateEventObject
>;

export type DoubleUpdateEventFilter = TypedEventFilter<DoubleUpdateEvent>;

export interface NewUpdaterEventObject {
  oldUpdater: string;
  newUpdater: string;
}
export type NewUpdaterEvent = TypedEvent<
  [string, string],
  NewUpdaterEventObject
>;

export type NewUpdaterEventFilter = TypedEventFilter<NewUpdaterEvent>;

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

export interface ProcessEventObject {
  messageHash: string;
  success: boolean;
  returnData: string;
}
export type ProcessEvent = TypedEvent<
  [string, boolean, string],
  ProcessEventObject
>;

export type ProcessEventFilter = TypedEventFilter<ProcessEvent>;

export interface SetConfirmationEventObject {
  root: string;
  previousConfirmAt: BigNumber;
  newConfirmAt: BigNumber;
}
export type SetConfirmationEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  SetConfirmationEventObject
>;

export type SetConfirmationEventFilter = TypedEventFilter<SetConfirmationEvent>;

export interface SetOptimisticTimeoutEventObject {
  timeout: BigNumber;
}
export type SetOptimisticTimeoutEvent = TypedEvent<
  [BigNumber],
  SetOptimisticTimeoutEventObject
>;

export type SetOptimisticTimeoutEventFilter =
  TypedEventFilter<SetOptimisticTimeoutEvent>;

export interface UpdateEventObject {
  homeDomain: number;
  oldRoot: string;
  newRoot: string;
  signature: string;
}
export type UpdateEvent = TypedEvent<
  [number, string, string, string],
  UpdateEventObject
>;

export type UpdateEventFilter = TypedEventFilter<UpdateEvent>;

export interface Replica extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReplicaInterface;

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
    PROCESS_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    VERSION(overrides?: CallOverrides): Promise<[number]>;

    acceptableRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    committedRoot(overrides?: CallOverrides): Promise<[string]>;

    confirmAt(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    doubleUpdate(
      _oldRoot: PromiseOrValue<BytesLike>,
      _newRoot: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>],
      _signature: PromiseOrValue<BytesLike>,
      _signature2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _remoteDomain: PromiseOrValue<BigNumberish>,
      _updater: PromiseOrValue<string>,
      _committedRoot: PromiseOrValue<BytesLike>,
      _optimisticSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    messages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    optimisticSeconds(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    process(
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    prove(
      _leaf: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proveAndProcess(
      _message: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    remoteDomain(overrides?: CallOverrides): Promise<[number]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setConfirmation(
      _root: PromiseOrValue<BytesLike>,
      _confirmAt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOptimisticTimeout(
      _optimisticSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUpdater(
      _updater: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    update(
      _oldRoot: PromiseOrValue<BytesLike>,
      _newRoot: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updater(overrides?: CallOverrides): Promise<[string]>;
  };

  PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  VERSION(overrides?: CallOverrides): Promise<number>;

  acceptableRoot(
    _root: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  committedRoot(overrides?: CallOverrides): Promise<string>;

  confirmAt(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  doubleUpdate(
    _oldRoot: PromiseOrValue<BytesLike>,
    _newRoot: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>],
    _signature: PromiseOrValue<BytesLike>,
    _signature2: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  homeDomainHash(overrides?: CallOverrides): Promise<string>;

  initialize(
    _remoteDomain: PromiseOrValue<BigNumberish>,
    _updater: PromiseOrValue<string>,
    _committedRoot: PromiseOrValue<BytesLike>,
    _optimisticSeconds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  messages(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  process(
    _message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  prove(
    _leaf: PromiseOrValue<BytesLike>,
    _proof: PromiseOrValue<BytesLike>[],
    _index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proveAndProcess(
    _message: PromiseOrValue<BytesLike>,
    _proof: PromiseOrValue<BytesLike>[],
    _index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  remoteDomain(overrides?: CallOverrides): Promise<number>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setConfirmation(
    _root: PromiseOrValue<BytesLike>,
    _confirmAt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOptimisticTimeout(
    _optimisticSeconds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUpdater(
    _updater: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  update(
    _oldRoot: PromiseOrValue<BytesLike>,
    _newRoot: PromiseOrValue<BytesLike>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updater(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<number>;

    acceptableRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    committedRoot(overrides?: CallOverrides): Promise<string>;

    confirmAt(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doubleUpdate(
      _oldRoot: PromiseOrValue<BytesLike>,
      _newRoot: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>],
      _signature: PromiseOrValue<BytesLike>,
      _signature2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    homeDomainHash(overrides?: CallOverrides): Promise<string>;

    initialize(
      _remoteDomain: PromiseOrValue<BigNumberish>,
      _updater: PromiseOrValue<string>,
      _committedRoot: PromiseOrValue<BytesLike>,
      _optimisticSeconds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    messages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    process(
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    prove(
      _leaf: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    proveAndProcess(
      _message: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    remoteDomain(overrides?: CallOverrides): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setConfirmation(
      _root: PromiseOrValue<BytesLike>,
      _confirmAt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOptimisticTimeout(
      _optimisticSeconds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUpdater(
      _updater: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    state(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      _oldRoot: PromiseOrValue<BytesLike>,
      _newRoot: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    updater(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)"(
      oldRoot?: null,
      newRoot?: null,
      signature?: null,
      signature2?: null
    ): DoubleUpdateEventFilter;
    DoubleUpdate(
      oldRoot?: null,
      newRoot?: null,
      signature?: null,
      signature2?: null
    ): DoubleUpdateEventFilter;

    "NewUpdater(address,address)"(
      oldUpdater?: null,
      newUpdater?: null
    ): NewUpdaterEventFilter;
    NewUpdater(oldUpdater?: null, newUpdater?: null): NewUpdaterEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Process(bytes32,bool,bytes)"(
      messageHash?: PromiseOrValue<BytesLike> | null,
      success?: PromiseOrValue<boolean> | null,
      returnData?: PromiseOrValue<BytesLike> | null
    ): ProcessEventFilter;
    Process(
      messageHash?: PromiseOrValue<BytesLike> | null,
      success?: PromiseOrValue<boolean> | null,
      returnData?: PromiseOrValue<BytesLike> | null
    ): ProcessEventFilter;

    "SetConfirmation(bytes32,uint256,uint256)"(
      root?: PromiseOrValue<BytesLike> | null,
      previousConfirmAt?: null,
      newConfirmAt?: null
    ): SetConfirmationEventFilter;
    SetConfirmation(
      root?: PromiseOrValue<BytesLike> | null,
      previousConfirmAt?: null,
      newConfirmAt?: null
    ): SetConfirmationEventFilter;

    "SetOptimisticTimeout(uint256)"(
      timeout?: null
    ): SetOptimisticTimeoutEventFilter;
    SetOptimisticTimeout(timeout?: null): SetOptimisticTimeoutEventFilter;

    "Update(uint32,bytes32,bytes32,bytes)"(
      homeDomain?: PromiseOrValue<BigNumberish> | null,
      oldRoot?: PromiseOrValue<BytesLike> | null,
      newRoot?: PromiseOrValue<BytesLike> | null,
      signature?: null
    ): UpdateEventFilter;
    Update(
      homeDomain?: PromiseOrValue<BigNumberish> | null,
      oldRoot?: PromiseOrValue<BytesLike> | null,
      newRoot?: PromiseOrValue<BytesLike> | null,
      signature?: null
    ): UpdateEventFilter;
  };

  estimateGas: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    acceptableRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    committedRoot(overrides?: CallOverrides): Promise<BigNumber>;

    confirmAt(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doubleUpdate(
      _oldRoot: PromiseOrValue<BytesLike>,
      _newRoot: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>],
      _signature: PromiseOrValue<BytesLike>,
      _signature2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    homeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _remoteDomain: PromiseOrValue<BigNumberish>,
      _updater: PromiseOrValue<string>,
      _committedRoot: PromiseOrValue<BytesLike>,
      _optimisticSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    messages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    process(
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    prove(
      _leaf: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proveAndProcess(
      _message: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    remoteDomain(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setConfirmation(
      _root: PromiseOrValue<BytesLike>,
      _confirmAt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOptimisticTimeout(
      _optimisticSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUpdater(
      _updater: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    update(
      _oldRoot: PromiseOrValue<BytesLike>,
      _newRoot: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updater(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptableRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    committedRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    confirmAt(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doubleUpdate(
      _oldRoot: PromiseOrValue<BytesLike>,
      _newRoot: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>],
      _signature: PromiseOrValue<BytesLike>,
      _signature2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _remoteDomain: PromiseOrValue<BigNumberish>,
      _updater: PromiseOrValue<string>,
      _committedRoot: PromiseOrValue<BytesLike>,
      _optimisticSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    optimisticSeconds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    process(
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    prove(
      _leaf: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proveAndProcess(
      _message: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    remoteDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setConfirmation(
      _root: PromiseOrValue<BytesLike>,
      _confirmAt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOptimisticTimeout(
      _optimisticSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUpdater(
      _updater: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    update(
      _oldRoot: PromiseOrValue<BytesLike>,
      _newRoot: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
