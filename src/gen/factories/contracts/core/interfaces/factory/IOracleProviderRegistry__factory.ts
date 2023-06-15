/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
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
] as const;

export class IOracleProviderRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleProviderRegistryInterface {
    return new utils.Interface(_abi) as IOracleProviderRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOracleProviderRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IOracleProviderRegistry;
  }
}
