import {
  Address,
  WalletClient,
  createPublicClient,
  createWalletClient,
  getContract,
  http,
} from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { hardhat } from "viem/chains";
import { Client } from "../src/Client";
import { ierc20ABI, testSettlementTokenABI } from "../src/gen";
import { MAX_UINT256 } from "../src/utils/helpers";

export const MNEMONIC_JUNK = "test test test test test test test test test test test junk";
export const ARBITRUM_GOERLI_WETH9 = "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3";
export const ARBITRUM_GOERLI_SWAP_ROUTER = "0xF1596041557707B1bC0b3ffB34346c1D9Ce94E86";

export interface WrapEthParam {
  client: Client;
  amount: bigint;
}

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

export async function wrapEth(param: WrapEthParam) {
  const WETH9 = getContract({
    abi: [
      {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    address: ARBITRUM_GOERLI_WETH9,
    publicClient: param.client.publicClient,
    walletClient: param.client.walletClient,
  });

  const { request } = await WETH9.simulate.deposit({
    value: param.amount,
    account: param.client.walletClient!.account,
  });
  const hash = await param.client.walletClient!.writeContract({ ...request, value: param.amount });
  await param.client.publicClient!.waitForTransactionReceipt({ hash });
}

export async function faucetTestToken(param: FaucetParam) {
  const account = param.client.walletClient!.account!.address!;
  const testToken = getContract({
    address: param.testToken,
    abi: testSettlementTokenABI,
    publicClient: param.client.publicClient,
    walletClient: param.client.walletClient,
  });
  const { request } = await testToken.simulate.faucet({ account });
  await param.client.walletClient!.writeContract({ ...request, gas: BigInt(1e10) });

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
