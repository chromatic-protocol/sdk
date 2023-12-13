/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MarketStateFacet,
  MarketStateFacetInterface,
} from "../../../../../contracts/core/facets/market/MarketStateFacet";

const _abi = [
  {
    inputs: [],
    name: "OnlyAccessableByDao",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAccessableByLiquidator",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAccessableByVault",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocolOld",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocolNew",
        type: "uint8",
      },
    ],
    name: "SetFeeProtocol",
    type: "event",
  },
  {
    inputs: [],
    name: "clbToken",
    outputs: [
      {
        internalType: "contract ICLBToken",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IChromaticMarketFactory",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeProtocol",
    outputs: [
      {
        internalType: "uint8",
        name: "_feeProtocol",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleProvider",
    outputs: [
      {
        internalType: "contract IOracleProvider",
        name: "_provider",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_feeProtocol",
        type: "uint8",
      },
    ],
    name: "setFeeProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settlementToken",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IChromaticVault",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class MarketStateFacet__factory {
  static readonly abi = _abi;
  static createInterface(): MarketStateFacetInterface {
    return new utils.Interface(_abi) as MarketStateFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketStateFacet {
    return new Contract(address, _abi, signerOrProvider) as MarketStateFacet;
  }
}
