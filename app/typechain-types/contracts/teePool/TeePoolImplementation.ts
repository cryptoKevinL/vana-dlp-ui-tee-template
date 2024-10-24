/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace ITeePool {
  export type TeeInfoStruct = {
    teeAddress: AddressLike;
    url: string;
    status: BigNumberish;
    amount: BigNumberish;
    withdrawnAmount: BigNumberish;
    jobsCount: BigNumberish;
    publicKey: string;
  };

  export type TeeInfoStructOutput = [
    teeAddress: string,
    url: string,
    status: bigint,
    amount: bigint,
    withdrawnAmount: bigint,
    jobsCount: bigint,
    publicKey: string
  ] & {
    teeAddress: string;
    url: string;
    status: bigint;
    amount: bigint;
    withdrawnAmount: bigint;
    jobsCount: bigint;
    publicKey: string;
  };

  export type JobStruct = {
    fileId: BigNumberish;
    bidAmount: BigNumberish;
    status: BigNumberish;
    addedTimestamp: BigNumberish;
    ownerAddress: AddressLike;
    teeAddress: AddressLike;
  };

  export type JobStructOutput = [
    fileId: bigint,
    bidAmount: bigint,
    status: bigint,
    addedTimestamp: bigint,
    ownerAddress: string,
    teeAddress: string
  ] & {
    fileId: bigint;
    bidAmount: bigint;
    status: bigint;
    addedTimestamp: bigint;
    ownerAddress: string;
    teeAddress: string;
  };
}

export declare namespace IDataRegistry {
  export type ProofDataStruct = {
    score: BigNumberish;
    dlpId: BigNumberish;
    metadata: string;
    proofUrl: string;
    instruction: string;
  };

  export type ProofDataStructOutput = [
    score: bigint,
    dlpId: bigint,
    metadata: string,
    proofUrl: string,
    instruction: string
  ] & {
    score: bigint;
    dlpId: bigint;
    metadata: string;
    proofUrl: string;
    instruction: string;
  };

  export type ProofStruct = {
    signature: BytesLike;
    data: IDataRegistry.ProofDataStruct;
  };

  export type ProofStructOutput = [
    signature: string,
    data: IDataRegistry.ProofDataStructOutput
  ] & { signature: string; data: IDataRegistry.ProofDataStructOutput };
}

export interface TeePoolImplementationInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "acceptOwnership"
      | "activeTeeList"
      | "activeTeeListAt"
      | "activeTeesCount"
      | "addProof"
      | "addTee"
      | "cancelDelay"
      | "cancelJob"
      | "claim"
      | "dataRegistry"
      | "fileJobIds"
      | "initialize"
      | "isTee"
      | "jobs"
      | "jobsCount"
      | "multicall"
      | "owner"
      | "pause"
      | "paused"
      | "pendingOwner"
      | "proxiableUUID"
      | "removeTee"
      | "renounceOwnership"
      | "requestContributionProof"
      | "submitJob"
      | "teeFee"
      | "teeJobIdsPaginated"
      | "teeList"
      | "teeListAt"
      | "tees"
      | "teesCount"
      | "transferOwnership"
      | "unpause"
      | "updateCancelDelay"
      | "updateDataRegistry"
      | "updateTeeFee"
      | "upgradeToAndCall"
      | "version"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Claimed"
      | "Initialized"
      | "JobCanceled"
      | "JobSubmitted"
      | "OwnershipTransferStarted"
      | "OwnershipTransferred"
      | "Paused"
      | "ProofAdded"
      | "TeeAdded"
      | "TeeRemoved"
      | "Unpaused"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activeTeeList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activeTeeListAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "activeTeesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addProof",
    values: [BigNumberish, IDataRegistry.ProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "addTee",
    values: [AddressLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelJob",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dataRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fileJobIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isTee", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "jobs", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "jobsCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeTee",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestContributionProof",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submitJob",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "teeFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "teeJobIdsPaginated",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "teeList", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "teeListAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tees", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "teesCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateCancelDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDataRegistry",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTeeFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeTeeList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeTeeListAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeTeesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addTee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancelJob", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dataRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fileJobIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isTee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "jobs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "jobsCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeTee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestContributionProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "submitJob", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teeFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "teeJobIdsPaginated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "teeList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teeListAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teesCount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCancelDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDataRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTeeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export namespace ClaimedEvent {
  export type InputTuple = [teeAddress: AddressLike, amount: BigNumberish];
  export type OutputTuple = [teeAddress: string, amount: bigint];
  export interface OutputObject {
    teeAddress: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace JobCanceledEvent {
  export type InputTuple = [jobId: BigNumberish];
  export type OutputTuple = [jobId: bigint];
  export interface OutputObject {
    jobId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace JobSubmittedEvent {
  export type InputTuple = [
    jobId: BigNumberish,
    fileId: BigNumberish,
    teeAddress: AddressLike,
    bidAmount: BigNumberish
  ];
  export type OutputTuple = [
    jobId: bigint,
    fileId: bigint,
    teeAddress: string,
    bidAmount: bigint
  ];
  export interface OutputObject {
    jobId: bigint;
    fileId: bigint;
    teeAddress: string;
    bidAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProofAddedEvent {
  export type InputTuple = [
    attestator: AddressLike,
    jobId: BigNumberish,
    fileId: BigNumberish
  ];
  export type OutputTuple = [attestator: string, jobId: bigint, fileId: bigint];
  export interface OutputObject {
    attestator: string;
    jobId: bigint;
    fileId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TeeAddedEvent {
  export type InputTuple = [teeAddress: AddressLike];
  export type OutputTuple = [teeAddress: string];
  export interface OutputObject {
    teeAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TeeRemovedEvent {
  export type InputTuple = [teeAddress: AddressLike];
  export type OutputTuple = [teeAddress: string];
  export interface OutputObject {
    teeAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TeePoolImplementation extends BaseContract {
  connect(runner?: ContractRunner | null): TeePoolImplementation;
  waitForDeployment(): Promise<this>;

  interface: TeePoolImplementationInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  activeTeeList: TypedContractMethod<[], [string[]], "view">;

  activeTeeListAt: TypedContractMethod<
    [index: BigNumberish],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;

  activeTeesCount: TypedContractMethod<[], [bigint], "view">;

  addProof: TypedContractMethod<
    [jobId: BigNumberish, proof: IDataRegistry.ProofStruct],
    [void],
    "payable"
  >;

  addTee: TypedContractMethod<
    [teeAddress: AddressLike, url: string, publicKey: string],
    [void],
    "nonpayable"
  >;

  cancelDelay: TypedContractMethod<[], [bigint], "view">;

  cancelJob: TypedContractMethod<[jobId: BigNumberish], [void], "nonpayable">;

  claim: TypedContractMethod<[], [void], "nonpayable">;

  dataRegistry: TypedContractMethod<[], [string], "view">;

  fileJobIds: TypedContractMethod<[fileId: BigNumberish], [bigint[]], "view">;

  initialize: TypedContractMethod<
    [
      ownerAddress: AddressLike,
      dataRegistryAddress: AddressLike,
      initialCancelDelay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  isTee: TypedContractMethod<[teeAddress: AddressLike], [boolean], "view">;

  jobs: TypedContractMethod<
    [jobId: BigNumberish],
    [ITeePool.JobStructOutput],
    "view"
  >;

  jobsCount: TypedContractMethod<[], [bigint], "view">;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  removeTee: TypedContractMethod<
    [teeAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  requestContributionProof: TypedContractMethod<
    [fileId: BigNumberish],
    [void],
    "payable"
  >;

  submitJob: TypedContractMethod<[fileId: BigNumberish], [void], "payable">;

  teeFee: TypedContractMethod<[], [bigint], "view">;

  teeJobIdsPaginated: TypedContractMethod<
    [teeAddress: AddressLike, start: BigNumberish, limit: BigNumberish],
    [bigint[]],
    "view"
  >;

  teeList: TypedContractMethod<[], [string[]], "view">;

  teeListAt: TypedContractMethod<
    [index: BigNumberish],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;

  tees: TypedContractMethod<
    [teeAddress: AddressLike],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;

  teesCount: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  updateCancelDelay: TypedContractMethod<
    [newCancelDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateDataRegistry: TypedContractMethod<
    [newDataRegistry: AddressLike],
    [void],
    "nonpayable"
  >;

  updateTeeFee: TypedContractMethod<
    [newTeeFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "activeTeeList"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "activeTeeListAt"
  ): TypedContractMethod<
    [index: BigNumberish],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "activeTeesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addProof"
  ): TypedContractMethod<
    [jobId: BigNumberish, proof: IDataRegistry.ProofStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "addTee"
  ): TypedContractMethod<
    [teeAddress: AddressLike, url: string, publicKey: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cancelJob"
  ): TypedContractMethod<[jobId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "dataRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fileJobIds"
  ): TypedContractMethod<[fileId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      ownerAddress: AddressLike,
      dataRegistryAddress: AddressLike,
      initialCancelDelay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isTee"
  ): TypedContractMethod<[teeAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "jobs"
  ): TypedContractMethod<
    [jobId: BigNumberish],
    [ITeePool.JobStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "jobsCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeTee"
  ): TypedContractMethod<[teeAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestContributionProof"
  ): TypedContractMethod<[fileId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "submitJob"
  ): TypedContractMethod<[fileId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "teeFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "teeJobIdsPaginated"
  ): TypedContractMethod<
    [teeAddress: AddressLike, start: BigNumberish, limit: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "teeList"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "teeListAt"
  ): TypedContractMethod<
    [index: BigNumberish],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "tees"
  ): TypedContractMethod<
    [teeAddress: AddressLike],
    [ITeePool.TeeInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "teesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateCancelDelay"
  ): TypedContractMethod<[newCancelDelay: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateDataRegistry"
  ): TypedContractMethod<[newDataRegistry: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateTeeFee"
  ): TypedContractMethod<[newTeeFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Claimed"
  ): TypedContractEvent<
    ClaimedEvent.InputTuple,
    ClaimedEvent.OutputTuple,
    ClaimedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "JobCanceled"
  ): TypedContractEvent<
    JobCanceledEvent.InputTuple,
    JobCanceledEvent.OutputTuple,
    JobCanceledEvent.OutputObject
  >;
  getEvent(
    key: "JobSubmitted"
  ): TypedContractEvent<
    JobSubmittedEvent.InputTuple,
    JobSubmittedEvent.OutputTuple,
    JobSubmittedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferStarted"
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "ProofAdded"
  ): TypedContractEvent<
    ProofAddedEvent.InputTuple,
    ProofAddedEvent.OutputTuple,
    ProofAddedEvent.OutputObject
  >;
  getEvent(
    key: "TeeAdded"
  ): TypedContractEvent<
    TeeAddedEvent.InputTuple,
    TeeAddedEvent.OutputTuple,
    TeeAddedEvent.OutputObject
  >;
  getEvent(
    key: "TeeRemoved"
  ): TypedContractEvent<
    TeeRemovedEvent.InputTuple,
    TeeRemovedEvent.OutputTuple,
    TeeRemovedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "Claimed(address,uint256)": TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;
    Claimed: TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "JobCanceled(uint256)": TypedContractEvent<
      JobCanceledEvent.InputTuple,
      JobCanceledEvent.OutputTuple,
      JobCanceledEvent.OutputObject
    >;
    JobCanceled: TypedContractEvent<
      JobCanceledEvent.InputTuple,
      JobCanceledEvent.OutputTuple,
      JobCanceledEvent.OutputObject
    >;

    "JobSubmitted(uint256,uint256,address,uint256)": TypedContractEvent<
      JobSubmittedEvent.InputTuple,
      JobSubmittedEvent.OutputTuple,
      JobSubmittedEvent.OutputObject
    >;
    JobSubmitted: TypedContractEvent<
      JobSubmittedEvent.InputTuple,
      JobSubmittedEvent.OutputTuple,
      JobSubmittedEvent.OutputObject
    >;

    "OwnershipTransferStarted(address,address)": TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "ProofAdded(address,uint256,uint256)": TypedContractEvent<
      ProofAddedEvent.InputTuple,
      ProofAddedEvent.OutputTuple,
      ProofAddedEvent.OutputObject
    >;
    ProofAdded: TypedContractEvent<
      ProofAddedEvent.InputTuple,
      ProofAddedEvent.OutputTuple,
      ProofAddedEvent.OutputObject
    >;

    "TeeAdded(address)": TypedContractEvent<
      TeeAddedEvent.InputTuple,
      TeeAddedEvent.OutputTuple,
      TeeAddedEvent.OutputObject
    >;
    TeeAdded: TypedContractEvent<
      TeeAddedEvent.InputTuple,
      TeeAddedEvent.OutputTuple,
      TeeAddedEvent.OutputObject
    >;

    "TeeRemoved(address)": TypedContractEvent<
      TeeRemovedEvent.InputTuple,
      TeeRemovedEvent.OutputTuple,
      TeeRemovedEvent.OutputObject
    >;
    TeeRemoved: TypedContractEvent<
      TeeRemovedEvent.InputTuple,
      TeeRemovedEvent.OutputTuple,
      TeeRemovedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
