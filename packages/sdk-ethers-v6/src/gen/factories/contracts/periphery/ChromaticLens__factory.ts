/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ChromaticLens,
  ChromaticLensInterface,
} from "../../../contracts/periphery/ChromaticLens";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IChromaticRouter",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "int16",
        name: "tradingFeeRate",
        type: "int16",
      },
      {
        internalType: "uint256",
        name: "_oracleVersion",
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
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "int16[]",
        name: "tradingFeeRates",
        type: "int16[]",
      },
      {
        internalType: "uint256",
        name: "_oracleVersion",
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
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "clbBalanceOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "binValue",
            type: "uint256",
          },
        ],
        internalType: "struct ChromaticLens.CLBBalance[]",
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
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
    ],
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
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "lpReceipts",
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
        name: "result",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "oracleVersion",
    outputs: [
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
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
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
        internalType: "contract IChromaticMarket",
        name: "market",
        type: "address",
      },
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
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ChromaticLens__factory {
  static readonly abi = _abi;
  static createInterface(): ChromaticLensInterface {
    return new Interface(_abi) as ChromaticLensInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChromaticLens {
    return new Contract(address, _abi, runner) as unknown as ChromaticLens;
  }
}
