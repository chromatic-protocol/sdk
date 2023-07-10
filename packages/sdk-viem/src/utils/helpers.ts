import { Client } from "../Client";
import {
  chromaticAccountABI,
  chromaticLensABI,
  chromaticMarketABI,
  chromaticMarketFactoryABI,
  chromaticRouterABI,
  chromaticVaultABI,
  clbTokenABI,
  iOracleProviderABI,
} from "../gen";

import {
  keccak256,
  toHex,
  hexToBigInt,
  GetContractReturnType,
  Address,
  PublicClient,
  WalletClient,
  Abi,
} from "viem";
const DIRECTION_PRECISION = BigInt(10 ** 10);
export function decodeTokenId(encodedId: bigint) {
  if (encodedId >= DIRECTION_PRECISION) {
    return BigInt(encodedId) - DIRECTION_PRECISION;
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

export function encodeTokenId(tradingFeeRate: number, long: boolean = true) {
  return long
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

// TODO panic error
export async function handleBytesError<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    // signature "0x22313ae9" not found on ABI
    const revertMatch = (e as Error).message.match(/signature "([^"]*)" not found on ABI/);
    if (revertMatch) {
      throw Error(`call reverted with error: ${errorSignitures[revertMatch[1]]}`);
    }

    /// etc (panic, too many request...)
    throw e;
  }
}

interface ErrorSignatures {
  [key: string]: string;
}

export const errorSignitures: ErrorSignatures = [
  ...chromaticMarketABI,
  ...chromaticMarketFactoryABI,
  ...chromaticVaultABI,
  ...clbTokenABI,
  ...iOracleProviderABI,
  ...chromaticAccountABI,
  ...chromaticRouterABI,
  ...chromaticLensABI,
]
  .filter((abi) => abi.type === "error")

  .reduce((prevErrMap, currErrAbi) => {
    // @ts-expect-error
    const signature = keccak256(toHex(`${currErrAbi["name"]}()`)).substring(0, 10);
    // @ts-expect-error
    prevErrMap[signature] = currErrAbi["name"];
    return prevErrMap;
  }, {} as ErrorSignatures);

export const MAX_UINT256 = hexToBigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);
