import * as SegFaultHandler from 'segfault-handler'
import { Client } from "../Client";
import { createPublicClient, createWalletClient, http, parseEther } from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { mainnet, hardhat } from "viem/chains";
SegFaultHandler.registerHandler('crash.log')

describe("router sdk test", () => {
  test("add liquidity", async () => {
    const account = mnemonicToAccount(
      "test test test test test test test test test test test junk"
    );

    const publicClient = createPublicClient({
      // chain: localhost,
      transport: http("http://127.0.0.1:8545"),
      chain: hardhat,
    });

    const walletClient = createWalletClient({
      chain: hardhat,
      transport: http("http://127.0.0.1:8545"),
      account: account,
    });

    const client = new Client(publicClient, walletClient);

    try {
      await client.router().addLiquidity("0xE54Cdd041e8Ea59468AAd4455D6Bc36f74D5b4E6", {
        feeRate: 100,
        amount: parseEther("1"),
      });
    } catch (e) {
      console.error("catch error", e);
    }
  }, 60000);
});
