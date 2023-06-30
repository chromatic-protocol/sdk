import { BigNumber, ContractReceipt, Signer, ethers } from "ethers";
import {
  CLBToken__factory,
  ChromaticAccount__factory,
  ChromaticLiquidator__factory,
  ChromaticMarketFactory__factory,
  ChromaticMarket__factory,
  ChromaticRouter__factory,
  ChromaticVault__factory,
  IERC20__factory,
  IOracleProvider__factory,
} from "../gen";
import { LpReceiptStructOutput } from "../gen/contracts/core/ChromaticMarket";
import { Provider } from "@ethersproject/providers";

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

export async function PromiseOnlySuccess<T>(values: Iterable<T | PromiseLike<T>>) {
  const result = await Promise.allSettled(values);
  return (
    result
      .filter((v): v is PromiseFulfilledResult<Awaited<T>> => v.status === "fulfilled")
      .map(({ value }) => value) || ([] as T[])
  );
}

// TODO panic error
export async function handleBytesError<T>(fn: () => Promise<T>, provider: Provider): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    /// exception with estimateGas
    /// error code 3 : execution reverted
    const revertMatch = (e as Error).message.match(/"error":{"code":3,"data":"([^"]*)"/);
    if (revertMatch) {
      throw Error(parseHexError(revertMatch[1]));
    }
    
    /// When gasLimit and gasPrice are set
    const match = (e as Error).message.match(/transactionHash="([^"]+)"/);
    if (match) {
      const txHash = match[0].replaceAll('"', "").replaceAll("transactionHash=", "");
      const tx = await provider.getTransaction(txHash);
      const code = await provider.call(tx, tx.blockNumber);
      throw Error(parseHexError(code));
    }

    /// etc (panic, too many request...)
    throw e;
  }
}

function parseHexError(errHex: string): string {
  if (errHex === "0x") {
    return `call reverted without reason`;
  }
  if (errHex.length === 10) {
    const errorName = errorSignitures[errHex];
    if (errorName) {
      return `call reverted with error: ${errorName}`;
    }
  }
  const reason = ethers.utils.toUtf8String("0x" + errHex.substring(138));
  return reason.length === 0 ? `call reverted: ${errHex}` : `call reverted with reason: ${reason}`;
}

interface ErrorSignatures {
  [key: string]: string;
}

export const errorSignitures: ErrorSignatures = [
  ...ChromaticMarket__factory.abi,
  ...ChromaticMarketFactory__factory.abi,
  ...ChromaticVault__factory.abi,
  ...CLBToken__factory.abi,
  ...IOracleProvider__factory.abi,
  ...ChromaticAccount__factory.abi,
  ...ChromaticRouter__factory.abi,
  ...ChromaticLiquidator__factory.abi,
]
  .filter((abi) => abi.type === "error")
  .reduce((prevErrMap, currErrAbi) => {
    const signature = ethers.utils.id(`${currErrAbi["name"]}()`).substring(0, 10);
    prevErrMap[signature] = currErrAbi["name"];
    return prevErrMap;
  }, {} as ErrorSignatures);
