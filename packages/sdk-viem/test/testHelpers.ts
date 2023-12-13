import { Address, createPublicClient, createWalletClient, getContract, http } from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { hardhat } from "viem/chains";
import { Client } from "../src/Client";
import { testSettlementTokenABI } from "../src/gen";

export const MNEMONIC_JUNK = "test test test test test test test test test test test junk";

export interface FaucetParam {
  client: Client;
  testToken: Address;
}

export interface UpdatePriceParam {
  client: Client;
  market: Address;
  price: number;
}

export function testClient(): Client {
  const account = mnemonicToAccount("test test test test test test test test test test test junk");

  const publicClient = createPublicClient({
    chain: hardhat,
    transport: http("http://127.0.0.1:8545"),
  });

  const walletClient = createWalletClient({
    chain: hardhat,
    transport: http("http://127.0.0.1:8545"),
    account: account,
  });

  return new Client({ publicClient, walletClient });
}

export async function faucetTestToken(param: FaucetParam) {
  const account = param.client.walletClient!.account!.address!;
  const testToken = getContract({
    address: param.testToken,
    abi: testSettlementTokenABI,
    publicClient: param.client.publicClient,
    walletClient: param.client.walletClient,
  });

  const interval = await testToken.read.faucetMinInterval();
  const lastTs = await testToken.read.lastFaucetTimestamp([account]);
  const ts = (await param.client.publicClient!.getBlock()).timestamp;
  if (ts >= lastTs + interval) {
    // e232c97a AlreadyFaucetedInInterval
    const { request } = await testToken.simulate.faucet({ account });
    await param.client.walletClient!.writeContract({ ...request, gas: BigInt(1e10) });
  }

  return await testToken.read.balanceOf([account]);
}

export async function updatePrice(param: UpdatePriceParam) {
  const oracleProviderAddress = await param.client.market().oracleProvider(param.market);

  const oracleProvider = getContract({
    abi: [
      {
        inputs: [
          {
            internalType: "Fixed18",
            name: "price",
            type: "int256",
          },
        ],
        name: "increaseVersion",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: oracleProviderAddress,
    publicClient: param.client.publicClient,
    walletClient: param.client.walletClient,
  });

  const { request } = await oracleProvider.simulate.increaseVersion([
    BigInt(param.price) * BigInt(10 ** 8),
  ]);
  const hash = await param.client.walletClient!.writeContract(request);
  await param.client.publicClient!.waitForTransactionReceipt({ hash });
}
