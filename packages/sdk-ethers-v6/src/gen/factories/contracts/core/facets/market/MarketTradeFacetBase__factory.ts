/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MarketTradeFacetBase,
  MarketTradeFacetBaseInterface,
} from "../../../../../contracts/core/facets/market/MarketTradeFacetBase";

const _abi = [
  {
    inputs: [],
    name: "ClaimPositionCallbackError",
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
] as const;

export class MarketTradeFacetBase__factory {
  static readonly abi = _abi;
  static createInterface(): MarketTradeFacetBaseInterface {
    return new Interface(_abi) as MarketTradeFacetBaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MarketTradeFacetBase {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MarketTradeFacetBase;
  }
}
