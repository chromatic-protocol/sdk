import { BigNumber, BigNumberish, Signer, ethers } from "ethers";
import { Client } from "../Client";
import { PromiseOrValue } from "../gen/common";
import {
  getSigner,
  parseLpReceipt,
  swapToUSDC,
  updatePrice,
  waitTxMining,
} from "../utils/testHelpers";
import { Interface } from "@ethersproject/abi";
import { CLBToken__factory, ChromaticMarket__factory } from "../gen";
import { encodeTokenId } from "../utils/helpers";
import { LpReceiptStructOutput } from "../gen/contracts/core/ChromaticMarket";

describe("router sdk test", () => {
  const signer = getSigner();
  const client = new Client("anvil", signer);

  async function getFixture() {
    const tokens = await client.marketFactory().registeredSettlementTokens();
    const markets = await client.marketFactory().getMarkets(tokens[0].address);
    if (markets.length == 0) {
      throw new Error(`market is not registered (token : ${tokens[0].address})`);
    }
    const marketAddress = markets[0].address;
    const clbTokenAddress = await ChromaticMarket__factory.connect(
      marketAddress,
      signer
    ).clbToken();
    const signerAddress = await signer.getAddress();

    async function clbBalance(feeRate: number) {
      return CLBToken__factory.connect(clbTokenAddress, signer).balanceOf(
        signerAddress,
        encodeTokenId(feeRate)
      );
    }

    async function clbTotalSupply(feeRate: number) {
      return CLBToken__factory.connect(clbTokenAddress, signer).totalSupply(encodeTokenId(feeRate));
    }

    return {
      marketAddress,
      token: tokens[0].address,
      signerAddress,
      router: client.router(),
      clbBalance: clbBalance,
      clbTotalSupply: clbTotalSupply,
    };
  }

  test("add/remove Liquidity", async () => {
    const { marketAddress, router, token, clbBalance } = await getFixture();

    await updatePrice({ market: marketAddress, signer, price: 1000 });
    const tradingFeeRate = 100;

    // swap
    const { outputAmount, usdcBalance } = await swapToUSDC({
      amount: ethers.utils.parseEther("10"),
      signer: signer,
      weth9: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      usdc: token,
      fee: 3000,
    });

    // add liquidity - router
    const clbBalanceBeforeAdd = await clbBalance(tradingFeeRate);
    const addTxReceipt = await waitTxMining(async () =>
      router.addLiquidities(marketAddress, [
        { feeRate: tradingFeeRate, amount: usdcBalance.div(2) },
      ])
    );
 
    const addLpReceipt  = parseLpReceipt(marketAddress, addTxReceipt);
    expect(addLpReceipt.id !== undefined).toEqual(true)

    // claimLiquidity - router
    await updatePrice({ market: marketAddress, signer, price: 1000 });
    await waitTxMining(() => router.claimLiquidites(marketAddress, [addLpReceipt.id]));

    // balance check - ClbToken
    const clbBalanceAfterAdd = await clbBalance(tradingFeeRate);
    expect(clbBalanceBeforeAdd.lt(clbBalanceAfterAdd)).toEqual(true);

    // removeLiquidity - router
    const removeTxReceipt = await waitTxMining(async () =>
      router.removeLiquidities(marketAddress, [
        { feeRate: tradingFeeRate, clbTokenAmount: clbBalanceAfterAdd },
      ])
    );
    const removeLpReceipt  = parseLpReceipt(marketAddress, removeTxReceipt);
    expect(removeLpReceipt.id !== undefined).toEqual(true)

    // withdrawLiquidity - router
    await updatePrice({ market: marketAddress, signer, price: 1000 });
    await waitTxMining(() => router.withdrawLiquidities(marketAddress, [removeLpReceipt.id]));

    // balance check - ClbToken
    expect((await clbBalance(tradingFeeRate)).lt(clbBalanceAfterAdd)).toEqual(true);
  }, 10000);

  test("open/close Position", async () => {
    console.log(await signer.getTransactionCount());
    // const { router, clbTokenContract, lpReceiptIds } = await getFixture();
    // console.log("liquidityBins", bins);
  }, 10000);
});
