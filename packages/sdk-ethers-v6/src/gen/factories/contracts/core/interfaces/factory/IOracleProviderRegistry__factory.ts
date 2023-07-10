/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IOracleProviderRegistry,
  IOracleProviderRegistryInterface,
} from "../../../../../contracts/core/interfaces/factory/IOracleProviderRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "minStopLossBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxStopLossBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "minTakeProfitBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxTakeProfitBPS",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "leverageLevel",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct IOracleProviderRegistry.OracleProviderProperties",
        name: "properties",
        type: "tuple",
      },
    ],
    name: "OracleProviderRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
    ],
    name: "OracleProviderUnregistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "level",
        type: "uint8",
      },
    ],
    name: "UpdateLeverageLevel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "minStopLossBPS",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "maxStopLossBPS",
        type: "uint32",
      },
    ],
    name: "UpdateStopLossBPSRange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "minTakeProfitBPS",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "maxTakeProfitBPS",
        type: "uint32",
      },
    ],
    name: "UpdateTakeProfitBPSRange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
    ],
    name: "getOracleProviderProperties",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "minStopLossBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxStopLossBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "minTakeProfitBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxTakeProfitBPS",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "leverageLevel",
            type: "uint8",
          },
        ],
        internalType: "struct IOracleProviderRegistry.OracleProviderProperties",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
    ],
    name: "isRegisteredOracleProvider",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "minStopLossBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxStopLossBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "minTakeProfitBPS",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxTakeProfitBPS",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "leverageLevel",
            type: "uint8",
          },
        ],
        internalType: "struct IOracleProviderRegistry.OracleProviderProperties",
        name: "properties",
        type: "tuple",
      },
    ],
    name: "registerOracleProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registeredOracleProviders",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
    ],
    name: "unregisterOracleProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "level",
        type: "uint8",
      },
    ],
    name: "updateLeverageLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "minStopLossBPS",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "maxStopLossBPS",
        type: "uint32",
      },
    ],
    name: "updateStopLossBPSRange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "minTakeProfitBPS",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "maxTakeProfitBPS",
        type: "uint32",
      },
    ],
    name: "updateTakeProfitBPSRange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IOracleProviderRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleProviderRegistryInterface {
    return new Interface(_abi) as IOracleProviderRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IOracleProviderRegistry {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IOracleProviderRegistry;
  }
}