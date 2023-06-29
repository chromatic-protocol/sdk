import { BigNumber, ethers } from "ethers";
import { Client } from "../Client";
import {
  getSigner,
  parseLpReceipt,
  swapToUSDC,
  tryTx,
  updatePrice,
  waitTxMining,
} from "../utils/testHelpers";
import { CLBToken__factory, ChromaticMarket__factory, IERC20__factory } from "../gen";
import { encodeTokenId } from "../utils/helpers";

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

    async function getPositions() {
      return await ChromaticMarket__factory.connect(marketAddress, signer).getPositions(
        await client.account().getPositionIds(marketAddress)
      );
    }

    async function clbBalance(feeRate: number) {
      return CLBToken__factory.connect(clbTokenAddress, signer).balanceOf(
        signerAddress,
        encodeTokenId(feeRate)
      );
    }

    async function clbTotalSupply(feeRate: number) {
      return CLBToken__factory.connect(clbTokenAddress, signer).totalSupply(encodeTokenId(feeRate));
    }

    const usdc = tokens[0].address;
    const router = client.router();

    async function addAndClaimLiquidity(tradingFeeRate: number) {
      // swap
      const { outputAmount, usdcBalance } = await swapToUSDC({
        amount: ethers.utils.parseEther("10"),
        signer: signer,
        weth9: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
        usdc: usdc,
        fee: 3000,
      });

      // add liquidity - router
      const amount = usdcBalance.div(2);
      const clbBalanceBeforeAdd = await clbBalance(tradingFeeRate);
      const addTxReceipt = await waitTxMining(async () =>
        router.addLiquidities(marketAddress, [{ feeRate: tradingFeeRate, amount: amount }])
      );

      const addLpReceipt = parseLpReceipt(marketAddress, addTxReceipt);
      expect(addLpReceipt.id !== undefined).toEqual(true);

      // claimLiquidity - router
      await updatePrice({ market: marketAddress, signer, price: 1000 });
      await waitTxMining(() => router.claimLiquidites(marketAddress, [addLpReceipt.id]));

      // balance check - ClbToken
      const clbBalanceAfterAdd = await clbBalance(tradingFeeRate);
      expect(clbBalanceBeforeAdd.lt(clbBalanceAfterAdd)).toEqual(true);
      return { clbBalanceAfterAdd, addAmount: amount };
    }

    return {
      marketAddress,
      token: usdc,
      signerAddress,
      router,
      clbBalance,
      clbTotalSupply,
      addAndClaimLiquidity,
      clbTokenAddress,
      getPositions,
    };
  }

  test("add/remove Liquidity", async () => {
    const { marketAddress, router, token, clbBalance, addAndClaimLiquidity } = await getFixture();

    await updatePrice({ market: marketAddress, signer, price: 1000 });
    const tradingFeeRate = 100;

    const { clbBalanceAfterAdd } = await addAndClaimLiquidity(tradingFeeRate);

    // removeLiquidity - router
    const removeTxReceipt = await waitTxMining(async () =>
      router.removeLiquidities(marketAddress, [
        { feeRate: tradingFeeRate, clbTokenAmount: clbBalanceAfterAdd },
      ])
    );
    const removeLpReceipt = parseLpReceipt(marketAddress, removeTxReceipt);
    expect(removeLpReceipt.id !== undefined).toEqual(true);

    // withdrawLiquidity - router
    await updatePrice({ market: marketAddress, signer, price: 1000 });
    await waitTxMining(() => router.withdrawLiquidities(marketAddress, [removeLpReceipt.id]));

    // balance check - ClbToken
    expect((await clbBalance(tradingFeeRate)).lt(clbBalanceAfterAdd)).toEqual(true);
  }, 60000);

  // after
  test("open/close Position", async () => {
    const {
      marketAddress,
      router,
      token,
      clbBalance,
      addAndClaimLiquidity,
      clbTokenAddress,
      getPositions,
    } = await getFixture();

    await updatePrice({ market: marketAddress, signer, price: 1000 });
    const tradingFeeRate = 100;
    const { clbBalanceAfterAdd, addAmount } = await addAndClaimLiquidity(tradingFeeRate);

    let account = await client.account().getAccount();
    if (account === ethers.constants.AddressZero) {
      await waitTxMining(() => client.account().createAccount());
      account = await client.account().getAccount();
      console.log("Account created", account);
    }
    console.log("getAccount", account);

    const usdcBalance = await IERC20__factory.connect(token, signer).balanceOf(signer.getAddress());
    console.log(usdcBalance);
    await waitTxMining(async () => {
      const tx = await IERC20__factory.connect(token, signer).transfer(account, usdcBalance);
      return tx.wait();
    });

    const accountBalance = await IERC20__factory.connect(token, signer).balanceOf(account);
    console.log(accountBalance);

    const bin100 = (await client.lens().liquidityBins(marketAddress)).filter(
      (b) => b.tradingFeeRate == 100
    );

    const beforeOpenPositions = await getPositions();
    const openTxReceipt = waitTxMining(() =>
      router.openPosition(marketAddress, {
        quantity: BigNumber.from(10 ** 4),
        leverage: BigNumber.from(100), // x1
        takerMargin: accountBalance.div(2),
        makerMargin: bin100[0].freeLiquidity.div(2),
        maxAllowableTradingFee: bin100[0].freeLiquidity.div(2).div(10),
      })
    );
    await tryTx(openTxReceipt, signer.provider);

    const afterOpenPositions = await getPositions();
    expect(beforeOpenPositions.length).toBeLessThan(afterOpenPositions.length);

    const positionBeforeClose = afterOpenPositions[afterOpenPositions.length - 1];
    expect(positionBeforeClose.closeVersion.isZero()).toEqual(true);

    await updatePrice({ market: marketAddress, signer, price: 1100 });

    await tryTx(
      waitTxMining(() =>
        router.closePosition(marketAddress, afterOpenPositions[afterOpenPositions.length - 1].id)
      ),
      signer.provider
    );

    const positions = await getPositions();
    const position = positions[positions.length - 1];
    expect(position.closeVersion.isZero()).toEqual(false);

    await updatePrice({ market: marketAddress, signer, price: 1200 });

    await tryTx(
      waitTxMining(() => router.claimPosition(marketAddress, position.id)),
      signer.provider
    );

    expect((await getPositions()).filter(pos => pos.id === position.id).length).toEqual(0);


  }, 60000);
  // after yarn chain
  // Time:        37.582 s, estimated 45 s
});
