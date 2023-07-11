/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MarketFacetBase,
  MarketFacetBaseInterface,
} from "../../../../../contracts/core/facets/market/MarketFacetBase";

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
] as const;

export class MarketFacetBase__factory {
  static readonly abi = _abi;
  static createInterface(): MarketFacetBaseInterface {
    return new utils.Interface(_abi) as MarketFacetBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketFacetBase {
    return new Contract(address, _abi, signerOrProvider) as MarketFacetBase;
  }
}