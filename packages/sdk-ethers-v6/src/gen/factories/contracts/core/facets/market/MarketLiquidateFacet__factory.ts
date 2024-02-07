/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MarketLiquidateFacet,
  MarketLiquidateFacetInterface,
} from "../../../../../contracts/core/facets/market/MarketLiquidateFacet";

const _abi = [
  {
    inputs: [],
    name: "AddLiquidityDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyClosedPosition",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimPositionCallbackError",
    type: "error",
  },
  {
    inputs: [],
    name: "ClosePositionDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "DuplicatedTradingFeeRate",
    type: "error",
  },
  {
    inputs: [],
    name: "Empty",
    type: "error",
  },
  {
    inputs: [],
    name: "ExceedMaxAllowableLeverage",
    type: "error",
  },
  {
    inputs: [],
    name: "ExceedMaxAllowableTradingFee",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLpReceiptAction",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTransferredTokenAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAllowableMakerMargin",
    type: "error",
  },
  {
    inputs: [],
    name: "NotClaimableLpReceipt",
    type: "error",
  },
  {
    inputs: [],
    name: "NotClaimablePosition",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughMarginTransferred",
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
    name: "NotPermitted",
    type: "error",
  },
  {
    inputs: [],
    name: "NotWithdrawableLpReceipt",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAccessableByDao",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAccessableByFactoryOrDao",
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
    inputs: [],
    name: "OpenPositionDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "OutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "RemoveLiquidityDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "TooSmallAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "TooSmallTakerMargin",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct LpReceipt",
        name: "receipt",
        type: "tuple",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct LpReceipt[]",
        name: "receipts",
        type: "tuple[]",
      },
    ],
    name: "AddLiquidityBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct LpReceipt",
        name: "receipt",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "clbTokenAmount",
        type: "uint256",
      },
    ],
    name: "ClaimLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct LpReceipt[]",
        name: "receipts",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "clbTokenAmounts",
        type: "uint256[]",
      },
    ],
    name: "ClaimLiquidityBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "pnl",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "interest",
        type: "uint256",
      },
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
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "_protocolFeeRate",
            type: "uint16",
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
        ],
        indexed: false,
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    name: "ClaimPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "pnl",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "interest",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usedKeeperFee",
        type: "uint256",
      },
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
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "_protocolFeeRate",
            type: "uint16",
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
        ],
        indexed: false,
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    name: "ClaimPositionByKeeper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
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
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "_protocolFeeRate",
            type: "uint16",
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
        ],
        indexed: false,
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    name: "ClosePosition",
    type: "event",
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
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "pnl",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "interest",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usedKeeperFee",
        type: "uint256",
      },
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
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "_protocolFeeRate",
            type: "uint16",
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
        ],
        indexed: false,
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    name: "Liquidate",
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
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
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
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "_protocolFeeRate",
            type: "uint16",
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
        ],
        indexed: false,
        internalType: "struct Position",
        name: "position",
        type: "tuple",
      },
    ],
    name: "OpenPosition",
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
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct LpReceipt",
        name: "receipt",
        type: "tuple",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct LpReceipt[]",
        name: "receipts",
        type: "tuple[]",
      },
    ],
    name: "RemoveLiquidityBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct LpReceipt",
        name: "receipt",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "burnedCLBTokenAmount",
        type: "uint256",
      },
    ],
    name: "WithdrawLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct LpReceipt[]",
        name: "receipts",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "burnedCLBTokenAmounts",
        type: "uint256[]",
      },
    ],
    name: "WithdrawLiquidityBatch",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "checkClaimPosition",
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
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
    ],
    name: "checkLiquidation",
    outputs: [
      {
        internalType: "bool",
        name: "_liquidate",
        type: "bool",
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
      {
        components: [
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "price",
            type: "int256",
          },
        ],
        internalType: "struct IOracleProvider.OracleVersion",
        name: "oracleVersion",
        type: "tuple",
      },
    ],
    name: "checkLiquidationWithOracleVersion",
    outputs: [
      {
        internalType: "bool",
        name: "_liquidate",
        type: "bool",
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
      {
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "keeperFee",
        type: "uint256",
      },
    ],
    name: "claimPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "keeperFee",
        type: "uint256",
      },
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class MarketLiquidateFacet__factory {
  static readonly abi = _abi;
  static createInterface(): MarketLiquidateFacetInterface {
    return new Interface(_abi) as MarketLiquidateFacetInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MarketLiquidateFacet {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MarketLiquidateFacet;
  }
}
