/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ChromaticMarketFactory,
  ChromaticMarketFactoryInterface,
} from "../../../contracts/core/ChromaticMarketFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketDiamondCutFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketLoupeFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketStateFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketLiquidityFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketLiquidityLensFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketTradeFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketLiquidateFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketSettleFacet",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadySetKeeperFeePayer",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadySetLiquidator",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadySetMarketSettlement",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadySetVault",
    type: "error",
  },
  {
    inputs: [],
    name: "ExistMarket",
    type: "error",
  },
  {
    inputs: [],
    name: "NotRegisteredOracleProvider",
    type: "error",
  },
  {
    inputs: [],
    name: "NotRegisteredSettlementToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAccessableByDao",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "annualRateBPS",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "beginTimestamp",
        type: "uint256",
      },
    ],
    name: "InterestRateRecordAppended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "annualRateBPS",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "beginTimestamp",
        type: "uint256",
      },
    ],
    name: "LastInterestRateRecordRemoved",
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
        internalType: "address",
        name: "settlementToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "MarketCreated",
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
        components: [
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
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "earningDistributionThreshold",
        type: "uint256",
      },
    ],
    name: "SetEarningDistributionThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "flashLoanFeeRate",
        type: "uint256",
      },
    ],
    name: "SetFlashLoanFeeRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "keeperFeePayer",
        type: "address",
      },
    ],
    name: "SetKeeperFeePayer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
    ],
    name: "SetLiquidator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "marketSettlement",
        type: "address",
      },
    ],
    name: "SetMarketSettlement",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "minimumMargin",
        type: "uint256",
      },
    ],
    name: "SetMinimumMargin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint24",
        name: "uniswapFeeTier",
        type: "uint24",
      },
    ],
    name: "SetUniswapFeeTier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vault",
        type: "address",
      },
    ],
    name: "SetVault",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "minimumMargin",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "flashLoanFeeRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "earningDistributionThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "uniswapFeeTier",
        type: "uint24",
      },
    ],
    name: "SettlementTokenRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dao",
        type: "address",
      },
    ],
    name: "UpdateDao",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    name: "UpdateTreasury",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "annualRateBPS",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "beginTimestamp",
        type: "uint256",
      },
    ],
    name: "appendInterestRateRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "calculateInterest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "address",
        name: "settlementToken",
        type: "address",
      },
    ],
    name: "createMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "currentInterestRate",
    outputs: [
      {
        internalType: "uint256",
        name: "annualRateBPS",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dao",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getEarningDistributionThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getFlashLoanFeeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getInterestRateRecords",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "annualRateBPS",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "beginTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct InterestRate.Record[]",
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
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "settlementToken",
        type: "address",
      },
    ],
    name: "getMarket",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMarkets",
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
        name: "settlementToken",
        type: "address",
      },
    ],
    name: "getMarketsBySettlmentToken",
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
        name: "token",
        type: "address",
      },
    ],
    name: "getMinimumMargin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    name: "getOracleProviderProperties",
    outputs: [
      {
        components: [
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
        name: "token",
        type: "address",
      },
    ],
    name: "getUniswapFeeTier",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "isRegisteredMarket",
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
        name: "token",
        type: "address",
      },
    ],
    name: "isRegisteredSettlementToken",
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
    inputs: [],
    name: "keeperFeePayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketSettlement",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "parameters",
    outputs: [
      {
        internalType: "address",
        name: "oracleProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "settlementToken",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minimumMargin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "flashLoanFeeRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "earningDistributionThreshold",
        type: "uint256",
      },
      {
        internalType: "uint24",
        name: "uniswapFeeTier",
        type: "uint24",
      },
    ],
    name: "registerSettlementToken",
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
    inputs: [],
    name: "registeredSettlementTokens",
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
        name: "token",
        type: "address",
      },
    ],
    name: "removeLastInterestRateRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "earningDistributionThreshold",
        type: "uint256",
      },
    ],
    name: "setEarningDistributionThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "flashLoanFeeRate",
        type: "uint256",
      },
    ],
    name: "setFlashLoanFeeRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_keeperFeePayer",
        type: "address",
      },
    ],
    name: "setKeeperFeePayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidator",
        type: "address",
      },
    ],
    name: "setLiquidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketSettlement",
        type: "address",
      },
    ],
    name: "setMarketSettlement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minimumMargin",
        type: "uint256",
      },
    ],
    name: "setMinimumMargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "uniswapFeeTier",
        type: "uint24",
      },
    ],
    name: "setUniswapFeeTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "setVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "_dao",
        type: "address",
      },
    ],
    name: "updateDao",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "updateTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ChromaticMarketFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ChromaticMarketFactoryInterface {
    return new utils.Interface(_abi) as ChromaticMarketFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChromaticMarketFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChromaticMarketFactory;
  }
}
