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
  PayableOverrides,
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

export interface PromiseRouterInterface extends utils.Interface {
  functions: {
    "MAX_COPY()": FunctionFragment;
    "RESERVE_GAS()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "acceptProposedOwner()": FunctionFragment;
    "bumpCallbackFee(bytes32)": FunctionFragment;
    "callbackFees(bytes32)": FunctionFragment;
    "connext()": FunctionFragment;
    "delay()": FunctionFragment;
    "enrollRemoteRouter(uint32,bytes32)": FunctionFragment;
    "handle(uint32,uint32,bytes32,bytes)": FunctionFragment;
    "initCallbackFee(bytes32)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "messageHashes(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "process(bytes32,bytes)": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "remotes(uint32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "send(uint32,bytes32,address,bool,bytes)": FunctionFragment;
    "setConnext(address)": FunctionFragment;
    "setReserveGas(uint256)": FunctionFragment;
    "setXAppConnectionManager(address)": FunctionFragment;
    "xAppConnectionManager()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_COPY"
      | "RESERVE_GAS"
      | "VERSION"
      | "acceptProposedOwner"
      | "bumpCallbackFee"
      | "callbackFees"
      | "connext"
      | "delay"
      | "enrollRemoteRouter"
      | "handle"
      | "initCallbackFee"
      | "initialize"
      | "messageHashes"
      | "owner"
      | "process"
      | "proposeNewOwner"
      | "proposed"
      | "proposedTimestamp"
      | "remotes"
      | "renounceOwnership"
      | "renounced"
      | "send"
      | "setConnext"
      | "setReserveGas"
      | "setXAppConnectionManager"
      | "xAppConnectionManager"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "MAX_COPY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "RESERVE_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bumpCallbackFee",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "callbackFees",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "connext", values?: undefined): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "enrollRemoteRouter",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "handle",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initCallbackFee",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "messageHashes",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "process",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposedTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "remotes",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setConnext",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveGas",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setXAppConnectionManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "xAppConnectionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "MAX_COPY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "RESERVE_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bumpCallbackFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callbackFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "connext", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enrollRemoteRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initCallbackFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messageHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConnext", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReserveGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setXAppConnectionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xAppConnectionManager",
    data: BytesLike
  ): Result;

  events: {
    "CallbackExecuted(bytes32,bool,address)": EventFragment;
    "CallbackFeeAdded(bytes32,uint256,uint256,address)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Receive(uint64,uint32,bytes32,address,bool,bytes,bytes)": EventFragment;
    "ReserveGasSet(uint256,uint256)": EventFragment;
    "Send(uint32,bytes32,bytes32,address,bool,bytes,bytes)": EventFragment;
    "SetConnext(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallbackExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallbackFeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Receive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveGasSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Send"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetConnext"): EventFragment;
}

export interface CallbackExecutedEventObject {
  transferId: string;
  success: boolean;
  relayer: string;
}
export type CallbackExecutedEvent = TypedEvent<
  [string, boolean, string],
  CallbackExecutedEventObject
>;

export type CallbackExecutedEventFilter =
  TypedEventFilter<CallbackExecutedEvent>;

export interface CallbackFeeAddedEventObject {
  transferId: string;
  addedFee: BigNumber;
  totalFee: BigNumber;
  caller: string;
}
export type CallbackFeeAddedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  CallbackFeeAddedEventObject
>;

export type CallbackFeeAddedEventFilter =
  TypedEventFilter<CallbackFeeAddedEvent>;

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

export interface ReceiveEventObject {
  originAndNonce: BigNumber;
  origin: number;
  transferId: string;
  callbackAddress: string;
  success: boolean;
  data: string;
  message: string;
}
export type ReceiveEvent = TypedEvent<
  [BigNumber, number, string, string, boolean, string, string],
  ReceiveEventObject
>;

export type ReceiveEventFilter = TypedEventFilter<ReceiveEvent>;

export interface ReserveGasSetEventObject {
  previous: BigNumber;
  updated: BigNumber;
}
export type ReserveGasSetEvent = TypedEvent<
  [BigNumber, BigNumber],
  ReserveGasSetEventObject
>;

export type ReserveGasSetEventFilter = TypedEventFilter<ReserveGasSetEvent>;

export interface SendEventObject {
  domain: number;
  remote: string;
  transferId: string;
  callbackAddress: string;
  success: boolean;
  data: string;
  message: string;
}
export type SendEvent = TypedEvent<
  [number, string, string, string, boolean, string, string],
  SendEventObject
>;

export type SendEventFilter = TypedEventFilter<SendEvent>;

export interface SetConnextEventObject {
  connext: string;
}
export type SetConnextEvent = TypedEvent<[string], SetConnextEventObject>;

export type SetConnextEventFilter = TypedEventFilter<SetConnextEvent>;

export interface PromiseRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PromiseRouterInterface;

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
    MAX_COPY(overrides?: CallOverrides): Promise<[number]>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    VERSION(overrides?: CallOverrides): Promise<[number]>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bumpCallbackFee(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callbackFees(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    connext(overrides?: CallOverrides): Promise<[string]>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    enrollRemoteRouter(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    handle(
      _origin: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initCallbackFee(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    messageHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    process(
      transferId: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(overrides?: CallOverrides): Promise<[string]>;

    proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    remotes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounced(overrides?: CallOverrides): Promise<[boolean]>;

    send(
      _domain: PromiseOrValue<BigNumberish>,
      _transferId: PromiseOrValue<BytesLike>,
      _callbackAddress: PromiseOrValue<string>,
      _returnSuccess: PromiseOrValue<boolean>,
      _returnData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setConnext(
      _connext: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setReserveGas(
      _reserve: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_COPY(overrides?: CallOverrides): Promise<number>;

  RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  VERSION(overrides?: CallOverrides): Promise<number>;

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bumpCallbackFee(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callbackFees(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  connext(overrides?: CallOverrides): Promise<string>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  enrollRemoteRouter(
    _domain: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  handle(
    _origin: PromiseOrValue<BigNumberish>,
    _nonce: PromiseOrValue<BigNumberish>,
    _sender: PromiseOrValue<BytesLike>,
    _message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initCallbackFee(
    _transferId: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _xAppConnectionManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  messageHashes(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  process(
    transferId: PromiseOrValue<BytesLike>,
    _message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  remotes(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounced(overrides?: CallOverrides): Promise<boolean>;

  send(
    _domain: PromiseOrValue<BigNumberish>,
    _transferId: PromiseOrValue<BytesLike>,
    _callbackAddress: PromiseOrValue<string>,
    _returnSuccess: PromiseOrValue<boolean>,
    _returnData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setConnext(
    _connext: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setReserveGas(
    _reserve: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setXAppConnectionManager(
    _xAppConnectionManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  xAppConnectionManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_COPY(overrides?: CallOverrides): Promise<number>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<number>;

    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    bumpCallbackFee(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    callbackFees(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    connext(overrides?: CallOverrides): Promise<string>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    enrollRemoteRouter(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    handle(
      _origin: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    initCallbackFee(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    messageHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    process(
      transferId: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    remotes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    send(
      _domain: PromiseOrValue<BigNumberish>,
      _transferId: PromiseOrValue<BytesLike>,
      _callbackAddress: PromiseOrValue<string>,
      _returnSuccess: PromiseOrValue<boolean>,
      _returnData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setConnext(
      _connext: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveGas(
      _reserve: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CallbackExecuted(bytes32,bool,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      success?: null,
      relayer?: null
    ): CallbackExecutedEventFilter;
    CallbackExecuted(
      transferId?: PromiseOrValue<BytesLike> | null,
      success?: null,
      relayer?: null
    ): CallbackExecutedEventFilter;

    "CallbackFeeAdded(bytes32,uint256,uint256,address)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      addedFee?: null,
      totalFee?: null,
      caller?: null
    ): CallbackFeeAddedEventFilter;
    CallbackFeeAdded(
      transferId?: PromiseOrValue<BytesLike> | null,
      addedFee?: null,
      totalFee?: null,
      caller?: null
    ): CallbackFeeAddedEventFilter;

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

    "Receive(uint64,uint32,bytes32,address,bool,bytes,bytes)"(
      originAndNonce?: PromiseOrValue<BigNumberish> | null,
      origin?: PromiseOrValue<BigNumberish> | null,
      transferId?: null,
      callbackAddress?: null,
      success?: null,
      data?: null,
      message?: null
    ): ReceiveEventFilter;
    Receive(
      originAndNonce?: PromiseOrValue<BigNumberish> | null,
      origin?: PromiseOrValue<BigNumberish> | null,
      transferId?: null,
      callbackAddress?: null,
      success?: null,
      data?: null,
      message?: null
    ): ReceiveEventFilter;

    "ReserveGasSet(uint256,uint256)"(
      previous?: null,
      updated?: null
    ): ReserveGasSetEventFilter;
    ReserveGasSet(previous?: null, updated?: null): ReserveGasSetEventFilter;

    "Send(uint32,bytes32,bytes32,address,bool,bytes,bytes)"(
      domain?: null,
      remote?: null,
      transferId?: null,
      callbackAddress?: null,
      success?: null,
      data?: null,
      message?: null
    ): SendEventFilter;
    Send(
      domain?: null,
      remote?: null,
      transferId?: null,
      callbackAddress?: null,
      success?: null,
      data?: null,
      message?: null
    ): SendEventFilter;

    "SetConnext(address)"(
      connext?: PromiseOrValue<string> | null
    ): SetConnextEventFilter;
    SetConnext(connext?: PromiseOrValue<string> | null): SetConnextEventFilter;
  };

  estimateGas: {
    MAX_COPY(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bumpCallbackFee(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    callbackFees(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    connext(overrides?: CallOverrides): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    enrollRemoteRouter(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    handle(
      _origin: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initCallbackFee(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    messageHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    process(
      transferId: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    remotes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounced(overrides?: CallOverrides): Promise<BigNumber>;

    send(
      _domain: PromiseOrValue<BigNumberish>,
      _transferId: PromiseOrValue<BytesLike>,
      _callbackAddress: PromiseOrValue<string>,
      _returnSuccess: PromiseOrValue<boolean>,
      _returnData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setConnext(
      _connext: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setReserveGas(
      _reserve: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_COPY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bumpCallbackFee(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    callbackFees(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    connext(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enrollRemoteRouter(
      _domain: PromiseOrValue<BigNumberish>,
      _router: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    handle(
      _origin: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initCallbackFee(
      _transferId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    messageHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    process(
      transferId: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remotes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    send(
      _domain: PromiseOrValue<BigNumberish>,
      _transferId: PromiseOrValue<BytesLike>,
      _callbackAddress: PromiseOrValue<string>,
      _returnSuccess: PromiseOrValue<boolean>,
      _returnData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setConnext(
      _connext: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setReserveGas(
      _reserve: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    xAppConnectionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
