import { deployedAddress } from "./gen";

//TODO use chain id insteadof string name
export const QTY_DECIMALS = 4;
export const LEVERAGE_DECIMALS = 2;
export const QTY_LEVERAGE_DECIMALS = QTY_DECIMALS + LEVERAGE_DECIMALS;
export const QTY_LEVERAGE_PRECISION = 10 ** QTY_LEVERAGE_DECIMALS;
export const LIQUIDATION_PRICE_DECIMALS = 4;
export const LIQUIDATION_PRICE_PRECISION = 10 ** LIQUIDATION_PRICE_DECIMALS;
