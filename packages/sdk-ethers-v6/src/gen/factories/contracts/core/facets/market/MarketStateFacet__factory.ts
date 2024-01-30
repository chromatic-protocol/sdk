/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
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
        internalType: "enum DisplayMode",
        name: "displayModeOld",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum DisplayMode",
        name: "displayModeNew",
        type: "uint8",
      },
    ],
    name: "DisplayModeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum LiquidityMode",
        name: "liquidityModeOld",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum LiquidityMode",
        name: "liquidityModeNew",
        type: "uint8",
      },
    ],
    name: "LiquidityModeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum PositionMode",
        name: "positionModeOld",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum PositionMode",
        name: "positionModeNew",
        type: "uint8",
      },
    ],
    name: "PositionModeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "protocolFeeRateOld",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "protocolFeeRateNew",
        type: "uint16",
      },
    ],
    name: "ProtocolFeeRateUpdated",
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
    name: "displayMode",
    outputs: [
      {
        internalType: "enum DisplayMode",
        name: "_displayMode",
        type: "uint8",
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
    name: "liquidityMode",
    outputs: [
      {
        internalType: "enum LiquidityMode",
        name: "_liquidityMode",
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
    inputs: [],
    name: "positionMode",
    outputs: [
      {
        internalType: "enum PositionMode",
        name: "_positionMode",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFeeRate",
    outputs: [
      {
        internalType: "uint16",
        name: "_protocolFeeRate",
        type: "uint16",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "enum DisplayMode",
        name: "_displayMode",
        type: "uint8",
      },
    ],
    name: "updateDisplayMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum LiquidityMode",
        name: "_liquidityMode",
        type: "uint8",
      },
    ],
    name: "updateLiquidityMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum PositionMode",
        name: "_positionMode",
        type: "uint8",
      },
    ],
    name: "updatePositionMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_protocolFeeRate",
        type: "uint16",
      },
    ],
    name: "updateProtocolFeeRate",
    outputs: [],
    stateMutability: "nonpayable",
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
    return new Interface(_abi) as MarketStateFacetInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MarketStateFacet {
    return new Contract(address, _abi, runner) as unknown as MarketStateFacet;
  }
}
