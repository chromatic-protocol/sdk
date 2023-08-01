/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MarketLiquidityLensFacet,
  MarketLiquidityLensFacetInterface,
} from "../../../../../contracts/core/facets/market/MarketLiquidityLensFacet";

const _abi = [
  {
    inputs: [],
    name: "NotExistLpReceipt",
    type: "error",
  },
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
    inputs: [
      {
        internalType: "int16",
        name: "tradingFeeRate",
        type: "int16",
      },
      {
        internalType: "uint256",
        name: "oracleVersion",
        type: "uint256",
      },
    ],
    name: "claimableLiquidity",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "mintingTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintingCLBTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningTokenAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IMarketLiquidity.ClaimableLiquidity",
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
        internalType: "int16[]",
        name: "tradingFeeRates",
        type: "int16[]",
      },
      {
        internalType: "uint256",
        name: "oracleVersion",
        type: "uint256",
      },
    ],
    name: "claimableLiquidityBatch",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "mintingTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintingCLBTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningTokenAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IMarketLiquidity.ClaimableLiquidity[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "tradingFeeRate",
        type: "int16",
      },
    ],
    name: "getBinFreeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "tradingFeeRate",
        type: "int16",
      },
    ],
    name: "getBinLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16[]",
        name: "tradingFeeRates",
        type: "int16[]",
      },
    ],
    name: "getBinValues",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receiptId",
        type: "uint256",
      },
    ],
    name: "getLpReceipt",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "enum LpAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "int16",
            name: "tradingFeeRate",
            type: "int16",
          },
        ],
        internalType: "struct LpReceipt",
        name: "receipt",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityBinStatuses",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "freeLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "binValue",
            type: "uint256",
          },
          {
            internalType: "int16",
            name: "tradingFeeRate",
            type: "int16",
          },
        ],
        internalType: "struct IMarketLiquidity.LiquidityBinStatus[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "tradingFeeRate",
        type: "int16",
      },
    ],
    name: "pendingLiquidity",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "oracleVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintingTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmountRequested",
            type: "uint256",
          },
        ],
        internalType: "struct IMarketLiquidity.PendingLiquidity",
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
        internalType: "int16[]",
        name: "tradingFeeRates",
        type: "int16[]",
      },
    ],
    name: "pendingLiquidityBatch",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "oracleVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintingTokenAmountRequested",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burningCLBTokenAmountRequested",
            type: "uint256",
          },
        ],
        internalType: "struct IMarketLiquidity.PendingLiquidity[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class MarketLiquidityLensFacet__factory {
  static readonly abi = _abi;
  static createInterface(): MarketLiquidityLensFacetInterface {
    return new Interface(_abi) as MarketLiquidityLensFacetInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MarketLiquidityLensFacet {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MarketLiquidityLensFacet;
  }
}
