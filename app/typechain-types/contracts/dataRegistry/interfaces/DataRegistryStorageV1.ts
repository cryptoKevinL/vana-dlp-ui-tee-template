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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace IDataRegistry {
  export type PermissionStruct = { account: AddressLike; key: string };

  export type PermissionStructOutput = [account: string, key: string] & {
    account: string;
    key: string;
  };

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

  export type FileResponseStruct = {
    id: BigNumberish;
    ownerAddress: AddressLike;
    url: string;
    addedAtBlock: BigNumberish;
  };

  export type FileResponseStructOutput = [
    id: bigint,
    ownerAddress: string,
    url: string,
    addedAtBlock: bigint
  ] & { id: bigint; ownerAddress: string; url: string; addedAtBlock: bigint };
}

export interface DataRegistryStorageV1Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "addFile"
      | "addFilePermission"
      | "addFileWithPermissions"
      | "addProof"
      | "filePermissions"
      | "fileProofs"
      | "files"
      | "filesCount"
      | "pause"
      | "unpause"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "addFile", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addFilePermission",
    values: [BigNumberish, AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addFileWithPermissions",
    values: [string, AddressLike, IDataRegistry.PermissionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addProof",
    values: [BigNumberish, IDataRegistry.ProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "filePermissions",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fileProofs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "files", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "filesCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addFilePermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addFileWithPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addProof", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "filePermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fileProofs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "files", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "filesCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export interface DataRegistryStorageV1 extends BaseContract {
  connect(runner?: ContractRunner | null): DataRegistryStorageV1;
  waitForDeployment(): Promise<this>;

  interface: DataRegistryStorageV1Interface;

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

  addFile: TypedContractMethod<[url: string], [bigint], "nonpayable">;

  addFilePermission: TypedContractMethod<
    [fileId: BigNumberish, account: AddressLike, key: string],
    [void],
    "nonpayable"
  >;

  addFileWithPermissions: TypedContractMethod<
    [
      url: string,
      ownerAddress: AddressLike,
      permissions: IDataRegistry.PermissionStruct[]
    ],
    [bigint],
    "nonpayable"
  >;

  addProof: TypedContractMethod<
    [fileId: BigNumberish, proof: IDataRegistry.ProofStruct],
    [void],
    "nonpayable"
  >;

  filePermissions: TypedContractMethod<
    [fileId: BigNumberish, account: AddressLike],
    [string],
    "view"
  >;

  fileProofs: TypedContractMethod<
    [fileId: BigNumberish, index: BigNumberish],
    [IDataRegistry.ProofStructOutput],
    "view"
  >;

  files: TypedContractMethod<
    [index: BigNumberish],
    [IDataRegistry.FileResponseStructOutput],
    "view"
  >;

  filesCount: TypedContractMethod<[], [bigint], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addFile"
  ): TypedContractMethod<[url: string], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "addFilePermission"
  ): TypedContractMethod<
    [fileId: BigNumberish, account: AddressLike, key: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addFileWithPermissions"
  ): TypedContractMethod<
    [
      url: string,
      ownerAddress: AddressLike,
      permissions: IDataRegistry.PermissionStruct[]
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addProof"
  ): TypedContractMethod<
    [fileId: BigNumberish, proof: IDataRegistry.ProofStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "filePermissions"
  ): TypedContractMethod<
    [fileId: BigNumberish, account: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "fileProofs"
  ): TypedContractMethod<
    [fileId: BigNumberish, index: BigNumberish],
    [IDataRegistry.ProofStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "files"
  ): TypedContractMethod<
    [index: BigNumberish],
    [IDataRegistry.FileResponseStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "filesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
