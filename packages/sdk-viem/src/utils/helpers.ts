import { Client } from "../Client";
import {
  chromaticAccountABI,
  chromaticLensABI,
  chromaticMarketFactoryABI,
  chromaticRouterABI,
  chromaticVaultABI,
  clbTokenABI,
  iChromaticMarketABI,
  iOracleProviderABI,
  marketDiamondCutFacetABI,
  marketFacetBaseABI,
  marketLiquidateFacetABI,
  marketLiquidityFacetABI,
  marketSettleFacetABI,
  marketStateFacetABI,
  marketTradeFacetABI,
} from "../gen";

import {
  Abi,
  AbiErrorSignatureNotFoundError,
  Address,
  ContractFunctionExecutionError,
  ContractFunctionRevertedError,
  GetContractReturnType,
  PublicClient,
  WalletClient,
  hexToBigInt,
  keccak256,
  toHex,
} from "viem";
const DIRECTION_PRECISION = BigInt(10 ** 10);
export function decodeTokenId(encodedId: bigint) {
  if (encodedId >= DIRECTION_PRECISION) {
    return -Number(BigInt(encodedId) - DIRECTION_PRECISION);
  } else {
    return Number(encodedId);
  }
}

export type Contract<TAbi extends Abi> = GetContractReturnType<
  TAbi,
  PublicClient,
  WalletClient,
  Address
>;

export function checkPublicClient(
  client: Client
): asserts client is Client & { publicClient: PublicClient } {
  if (!client.publicClient) throw new Error("Public client is not set");
}
export function checkWalletClient(
  client: Client
): asserts client is Client & { walletClient: WalletClient } {
  if (!client.walletClient) throw new Error("Wallet client is not set");
}

export function checkClient(
  client: Client
): asserts client is Client & { publicClient: PublicClient; walletClient: WalletClient } {
  if (!client.walletClient) throw new Error("Wallet client is not set");
  if (!client.publicClient) throw new Error("Public client is not set");
}

export function encodeTokenId(tradingFeeRate: number) {
  return tradingFeeRate > 0
    ? BigInt(Math.abs(tradingFeeRate))
    : BigInt(Math.abs(tradingFeeRate)) + DIRECTION_PRECISION;
}

export async function PromiseOnlySuccess<T>(values: Iterable<T | PromiseLike<T>>) {
  const result = await Promise.allSettled(values);
  return (
    result
      .filter((v): v is PromiseFulfilledResult<Awaited<T>> => v.status === "fulfilled")
      .map(({ value }) => value) || ([] as T[])
  );
}

export async function handleBytesError<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    if (
      e instanceof ContractFunctionExecutionError &&
      e.cause instanceof ContractFunctionRevertedError
    ) {
      const error = (e.cause as any).cause;
      if (error instanceof AbiErrorSignatureNotFoundError) {
        const signature = (error as any).signature;
        if(signature){
          throw Error(`call reverted with error: ${errorSignitures[signature]}`);
        }
      }
    }

    throw e;
  }
}

interface ErrorSignatures {
  [key: string]: string;
}

export const errorSignitures: ErrorSignatures = [
  ...iChromaticMarketABI,
  ...chromaticMarketFactoryABI,
  ...chromaticVaultABI,
  ...clbTokenABI,
  ...iOracleProviderABI,
  ...chromaticAccountABI,
  ...chromaticRouterABI,
  ...chromaticLensABI,
  ...marketDiamondCutFacetABI,
  ...marketFacetBaseABI,
  ...marketLiquidateFacetABI,
  ...marketLiquidityFacetABI,
  ...marketSettleFacetABI,
  ...marketStateFacetABI,
  ...marketTradeFacetABI,
]
  .filter((abi) => abi.type === "error")
  .reduce((prevErrMap, currErrAbi) => {
    const errName = (currErrAbi as any)["name"];
    const signature = keccak256(toHex(`${errName}()`)).substring(0, 10);
    prevErrMap[signature] = errName;
    return prevErrMap;
  }, {} as ErrorSignatures);

export const MAX_UINT256 = hexToBigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);
