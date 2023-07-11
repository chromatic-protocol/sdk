import { BigNumber, ethers } from "ethers";
import { Client } from "../src/Client";
import { CLBToken__factory, IChromaticMarket__factory, IERC20__factory } from "../src/gen";
import { encodeTokenId, handleBytesError } from "../src/utils/helpers";
import { getSigner, swapToUSDC, updatePrice, waitTxMining } from "./testHelpers";

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
    const clbTokenAddress = await IChromaticMarket__factory.connect(
      marketAddress,
      signer
    ).clbToken();
    const signerAddress = await signer.getAddress();

    async function getPositions() {
      return await IChromaticMarket__factory.connect(marketAddress, signer).getPositions(
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

    async function getLpReceiptIds() {
      return client.router().contracts().router()["getLpReceiptIds(address)"](marketAddress)
    }

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


      
      const lpReceiptIds = await getLpReceiptIds()

      // claimLiquidity - router
      await updatePrice({ market: marketAddress, signer, price: 1000 });
      await waitTxMining(() => router.claimLiquidites(marketAddress, [lpReceiptIds[lpReceiptIds.length - 1]]));

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
      getLpReceiptIds,
    };
  }

  test("add/remove Liquidity", async () => {
    const { marketAddress, router, getLpReceiptIds, clbBalance, addAndClaimLiquidity } = await getFixture();

    await updatePrice({ market: marketAddress, signer, price: 1000 });
    const tradingFeeRate = 100;

    const { clbBalanceAfterAdd } = await addAndClaimLiquidity(tradingFeeRate);

    // removeLiquidity - router
    const removeTxReceipt = await waitTxMining(async () =>
      router.removeLiquidities(marketAddress, [
        { feeRate: tradingFeeRate, clbTokenAmount: clbBalanceAfterAdd },
      ])
    );
    const lpReceiptIds = await getLpReceiptIds();

    // withdrawLiquidity - router
    await updatePrice({ market: marketAddress, signer, price: 1000 });
    await waitTxMining(() => router.withdrawLiquidities(marketAddress, [lpReceiptIds[lpReceiptIds.length - 1]]));

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
    console.log("accountBalance", accountBalance);

    const bin100 = (await client.lens().liquidityBins(marketAddress)).filter(
      (b) => b.tradingFeeRate == 100
    );

    const beforeOpenPositions = await getPositions();
    const openTxReceipt = waitTxMining(() =>
      router.openPosition(marketAddress, {
        quantity: BigNumber.from(10 ** 8),
        leverage: BigNumber.from(100), // x1
        takerMargin: accountBalance.div(3),
        makerMargin: bin100[0].freeLiquidity.div(2),
        maxAllowableTradingFee: bin100[0].freeLiquidity.div(2).div(10),
      })
    );
    await handleBytesError(() => openTxReceipt, signer.provider);

    const afterOpenPositions = await getPositions();
    expect(beforeOpenPositions.length).toBeLessThan(afterOpenPositions.length);

    const positionBeforeClose = afterOpenPositions[afterOpenPositions.length - 1];
    expect(positionBeforeClose.closeVersion.isZero()).toEqual(true);

    await updatePrice({ market: marketAddress, signer, price: 1100 });

    await handleBytesError(
      () =>
        waitTxMining(() =>
          router.closePosition(marketAddress, afterOpenPositions[afterOpenPositions.length - 1].id)
        ),
      signer.provider
    );

    const positions = await getPositions();
    const position = positions[positions.length - 1];
    expect(position.closeVersion.isZero()).toEqual(false);

    await updatePrice({ market: marketAddress, signer, price: 1200 });

    await handleBytesError(
      () => waitTxMining(() => router.claimPosition(marketAddress, position.id)),
      signer.provider
    );

    expect((await getPositions()).filter((pos) => pos.id === position.id).length).toEqual(0);
  }, 60000);
  // after yarn chain
  // Time:        37.582 s, estimated 45 s

  test("revert msg handling", async () => {
    const { marketAddress, router, token } = await getFixture();

    const tokenContract = IERC20__factory.connect(token, signer);

    // require Long String message
    async function erc20TransferFromTx() {
      return await handleBytesError(async () => {
        const tx = await tokenContract.transferFrom(marketAddress, await signer.getAddress(), 1);
        return await tx.wait();
      }, signer.provider);
    }
    await expect(async () => await erc20TransferFromTx()).rejects.toThrow(
      "call reverted with reason: ERC20: transfer amount exceeds balance"
    );

    // revert Custom error
    await expect(
      async () => await router.withdrawLiquidity(marketAddress, ethers.constants.MaxUint256)
    ).rejects.toThrow("call reverted with error: NotExistLpReceipt");

    // Non revert message(require)
    if ((await client.account().getAccount()) === ethers.constants.AddressZero) {
      await client.account().createAccount();
    }
    await expect(async () => await client.account().createAccount()).rejects.toThrow(
      "call reverted without reason"
    );

    // require with Short string error(Constant string)
    // call revert exception; VM Exception while processing transaction: reverted with reason string "URT"
    // parsed in ethers
    await expect(
      async () => await client.marketFactory().currentInterestRate(await signer.getAddress())
    ).rejects.toThrow("URT");
  }, 60000);
});
