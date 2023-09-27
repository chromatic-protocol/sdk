/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MarketTradeFacet,
  MarketTradeFacetInterface,
} from "../../../../../contracts/core/facets/market/MarketTradeFacet";

const _abi = [
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
    name: "NotAllowableMakerMargin",
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
    inputs: [],
    name: "OutOfBounds",
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
        indexed: true,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferProtocolFee",
    type: "event",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
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
    ],
    name: "closePosition",
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
            name: "closeVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct ClosePositionInfo",
        name: "closed",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "qty",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "takerMargin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "makerMargin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAllowableTradingFee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "openPosition",
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
            name: "takerMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "makerMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFee",
            type: "uint256",
          },
        ],
        internalType: "struct OpenPositionInfo",
        name: "positionInfo",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class MarketTradeFacet__factory {
  static readonly abi = _abi;
  static createInterface(): MarketTradeFacetInterface {
    return new Interface(_abi) as MarketTradeFacetInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MarketTradeFacet {
    return new Contract(address, _abi, runner) as unknown as MarketTradeFacet;
  }
}
