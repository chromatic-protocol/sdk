/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MarketLiquidityFacetBase,
  MarketLiquidityFacetBaseInterface,
} from "../../../../../contracts/core/facets/market/MarketLiquidityFacetBase";

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
] as const;

export class MarketLiquidityFacetBase__factory {
  static readonly abi = _abi;
  static createInterface(): MarketLiquidityFacetBaseInterface {
    return new Interface(_abi) as MarketLiquidityFacetBaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MarketLiquidityFacetBase {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MarketLiquidityFacetBase;
  }
}
