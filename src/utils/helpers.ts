import { BigNumber } from "@ethersproject/bignumber";
import debug from "debug";
const DIRECTION_PRECISION = BigNumber.from(10).pow(10);

export const logger = debug("ChromaticSDK");

export function decodeTokenId(encodedId: BigNumber) {
  if (encodedId.gte(DIRECTION_PRECISION)) {
    return -encodedId.sub(DIRECTION_PRECISION).toNumber();
  } else {
    return encodedId.toNumber();
  }
}

export function encodeTokenId(tradingFeeRate: number, long: boolean = true) {
  return long
    ? BigNumber.from(Math.abs(tradingFeeRate))
    : BigNumber.from(Math.abs(tradingFeeRate)).add(DIRECTION_PRECISION);
}
