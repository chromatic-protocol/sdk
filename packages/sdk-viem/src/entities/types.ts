import {
  chromaticAccountABI,
  chromaticLensABI,
  chromaticMarketFactoryABI,
  clbTokenABI,
  iChromaticMarketABI,
  iOracleProviderABI,
  ierc20MetadataABI,
} from "../gen";
import { Contract } from "../utils/helpers";

/** @ignore */
export interface ContractChromaticAccount extends Contract<typeof chromaticAccountABI> {}

/** @ignore */
export interface ContractChromaticLens extends Contract<typeof chromaticLensABI> {}

/** @ignore */
export interface ContractChromaticMarket extends Contract<typeof iChromaticMarketABI> {}

/** @ignore */
export interface ContractIErc20Metadata extends Contract<typeof ierc20MetadataABI> {}

/** @ignore */
export interface ContractClbToken extends Contract<typeof clbTokenABI> {}

/** @ignore */
export interface ContractIOracleProvider extends Contract<typeof iOracleProviderABI> {}

/** @ignore */
export interface ContractChromaticFactory extends Contract<typeof chromaticMarketFactoryABI> {}
