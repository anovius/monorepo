/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IFulfillInterpreterInterface extends ethers.utils.Interface {
  functions: {
    "execute(bytes32,address,address,address,uint256,bytes)": FunctionFragment;
    "getTransactionManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [BytesLike, string, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionManager",
    data: BytesLike
  ): Result;

  events: {
    "Executed(bytes32,address,address,address,uint256,bytes,bytes,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export class IFulfillInterpreter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IFulfillInterpreterInterface;

  functions: {
    execute(
      transactionId: BytesLike,
      callTo: string,
      assetId: string,
      fallbackAddress: string,
      amount: BigNumberish,
      callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTransactionManager(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  execute(
    transactionId: BytesLike,
    callTo: string,
    assetId: string,
    fallbackAddress: string,
    amount: BigNumberish,
    callData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTransactionManager(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      transactionId: BytesLike,
      callTo: string,
      assetId: string,
      fallbackAddress: string,
      amount: BigNumberish,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getTransactionManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Executed(
      transactionId?: BytesLike | null,
      callTo?: null,
      assetId?: null,
      fallbackAddress?: null,
      amount?: null,
      callData?: null,
      returnData?: null,
      success?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, string, string, boolean],
      {
        transactionId: string;
        callTo: string;
        assetId: string;
        fallbackAddress: string;
        amount: BigNumber;
        callData: string;
        returnData: string;
        success: boolean;
      }
    >;
  };

  estimateGas: {
    execute(
      transactionId: BytesLike,
      callTo: string,
      assetId: string,
      fallbackAddress: string,
      amount: BigNumberish,
      callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTransactionManager(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      transactionId: BytesLike,
      callTo: string,
      assetId: string,
      fallbackAddress: string,
      amount: BigNumberish,
      callData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTransactionManager(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
