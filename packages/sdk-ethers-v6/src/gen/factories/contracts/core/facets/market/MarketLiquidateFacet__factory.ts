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
    name: "NotClaimablePosition",
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
    inputs: [],
    name: "OutOfBounds",
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
