/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MarketLensFacet,
  MarketLensFacetInterface,
} from "../../../../../contracts/core/facets/market/MarketLensFacet";

const _abi = [
  {
    inputs: [],
    name: "ClaimPositionCallbackError",
    type: "error",
  },
  {
    inputs: [],
    name: "NotExistLpReceipt",
    type: "error",
  },
  {
    inputs: [],
    name: "NotExistPosition",
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
        internalType: "struct ClaimableLiquidity",
        name: "liquidity",
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
        internalType: "struct ClaimableLiquidity[]",
        name: "liquidities",
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
    name: "closingPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "closeVersion",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "totalQty",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "totalEntryAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalMakerMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalTakerMargin",
            type: "uint256",
          },
        ],
        internalType: "struct ClosingPosition",
        name: "position",
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
    name: "closingPositionBatch",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "closeVersion",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "totalQty",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "totalEntryAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalMakerMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalTakerMargin",
            type: "uint256",
          },
        ],
        internalType: "struct ClosingPosition[]",
        name: "positions",
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
        name: "values",
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
        name: "oracleVersion",
        type: "uint256",
      },
      {
        internalType: "int16[]",
        name: "tradingFeeRates",
        type: "int16[]",
      },
    ],
    name: "getBinValuesAt",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "binValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "clbTokenTotalSupply",
            type: "uint256",
          },
        ],
        internalType: "struct LiquidityBinValue[]",
        name: "values",
        type: "tuple[]",
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
    inputs: [
      {
        internalType: "uint256[]",
        name: "receiptIds",
        type: "uint256[]",
      },
    ],
    name: "getLpReceipts",
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
        internalType: "struct LpReceipt[]",
        name: "receipts",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "getPosition",
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
            name: "openVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeVersion",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "qty",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "openTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takerMargin",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "tradingFeeRate",
                type: "uint16",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct BinMargin[]",
            name: "_binMargins",
            type: "tuple[]",
          },
          {
            internalType: "uint8",
            name: "_feeProtocol",
            type: "uint8",
          },
        ],
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "positionIds",
        type: "uint256[]",
      },
    ],
    name: "getPositions",
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
            name: "openVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeVersion",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "qty",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "openTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takerMargin",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "tradingFeeRate",
                type: "uint16",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct BinMargin[]",
            name: "_binMargins",
            type: "tuple[]",
          },
          {
            internalType: "uint8",
            name: "_feeProtocol",
            type: "uint8",
          },
        ],
        internalType: "struct Position[]",
        name: "positions",
        type: "tuple[]",
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
        internalType: "struct LiquidityBinStatus[]",
        name: "statuses",
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
        internalType: "struct PendingLiquidity",
        name: "liquidity",
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
        internalType: "struct PendingLiquidity[]",
        name: "liquidities",
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
    name: "pendingPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "openVersion",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "totalQty",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "totalMakerMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalTakerMargin",
            type: "uint256",
          },
        ],
        internalType: "struct PendingPosition",
        name: "position",
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
    name: "pendingPositionBatch",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "openVersion",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "totalQty",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "totalMakerMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalTakerMargin",
            type: "uint256",
          },
        ],
        internalType: "struct PendingPosition[]",
        name: "positions",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class MarketLensFacet__factory {
  static readonly abi = _abi;
  static createInterface(): MarketLensFacetInterface {
    return new Interface(_abi) as MarketLensFacetInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MarketLensFacet {
    return new Contract(address, _abi, runner) as unknown as MarketLensFacet;
  }
}
