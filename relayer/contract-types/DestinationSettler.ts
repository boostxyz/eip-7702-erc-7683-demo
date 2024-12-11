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
} from "./common";

export interface DestinationSettlerInterface extends utils.Interface {
  functions: {
    "fill(bytes32,bytes,bytes)": FunctionFragment;
    "fillStatuses(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "fill" | "fillStatuses"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fill",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fillStatuses",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "fill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fillStatuses",
    data: BytesLike
  ): Result;

  events: {
    "Executed(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export interface ExecutedEventObject {
  orderId: string;
}
export type ExecutedEvent = TypedEvent<[string], ExecutedEventObject>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface DestinationSettler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DestinationSettlerInterface;

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
    fill(
      orderId: BytesLike,
      originData: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    fillStatuses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  fill(
    orderId: BytesLike,
    originData: BytesLike,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  fillStatuses(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    fill(
      orderId: BytesLike,
      originData: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    fillStatuses(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "Executed(bytes32)"(orderId?: BytesLike | null): ExecutedEventFilter;
    Executed(orderId?: BytesLike | null): ExecutedEventFilter;
  };

  estimateGas: {
    fill(
      orderId: BytesLike,
      originData: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    fillStatuses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fill(
      orderId: BytesLike,
      originData: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    fillStatuses(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
