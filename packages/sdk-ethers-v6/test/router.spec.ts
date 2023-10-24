import { ethers } from "ethers";
import { Client } from "../src/Client";
import { CLBToken__factory, IChromaticMarket__factory, IERC20__factory } from "../src/gen";
import { encodeTokenId, handleBytesError } from "../src/utils/helpers";
import { getSigner, faucetTestToken, updatePrice } from "./testHelpers";

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
      const ids = await client.account().getPositionIds(marketAddress);
      return await IChromaticMarket__factory.connect(marketAddress, signer).getPositions([...ids]);
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

    const testTokenAddress = tokens[0].address;
    const router = client.router();

    async function getLpReceiptIds() {
      return router.contracts().router()["getLpReceiptIds(address)"](marketAddress);
    }

    async function addAndClaimLiquidity(tradingFeeRate: number) {
      // swap
      const tokenBalance = await faucetTestToken({
        signer: signer,
        testToken: testTokenAddress,
      });

      // add liquidity - router
      const amount = tokenBalance / 2n;
      const clbBalanceBeforeAdd = await clbBalance(tradingFeeRate);
      const addTxReceipt = await router.addLiquidities(marketAddress, [{ feeRate: tradingFeeRate, amount: amount }]);

      const lpReceiptIds = await getLpReceiptIds();

      // claimLiquidity - router
      await updatePrice({ market: marketAddress, signer, price: 1000 });
      await router.claimLiquidites(marketAddress, [lpReceiptIds[lpReceiptIds.length - 1]]);

      // balance check - ClbToken
      const clbBalanceAfterAdd = await clbBalance(tradingFeeRate);
      expect(clbBalanceBeforeAdd < clbBalanceAfterAdd).toEqual(true);
      return { clbBalanceAfterAdd, addAmount: amount };
    }

    return {
      marketAddress,
      token: testTokenAddress,
      tokenContract: IERC20__factory.connect(testTokenAddress, signer),
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
    const { marketAddress, router, getLpReceiptIds, clbBalance, addAndClaimLiquidity } =
      await getFixture();

    await updatePrice({ market: marketAddress, signer, price: 1000 });
    const tradingFeeRate = 100;

    const { clbBalanceAfterAdd } = await addAndClaimLiquidity(tradingFeeRate);

    // removeLiquidity - router
    const removeTxReceipt =  await router.removeLiquidities(marketAddress, [
      { feeRate: tradingFeeRate, clbTokenAmount: clbBalanceAfterAdd },
    ])
    const lpReceiptIds = await getLpReceiptIds();

    // withdrawLiquidity - router
    await updatePrice({ market: marketAddress, signer, price: 1000 });
    await router.withdrawLiquidities(marketAddress, [lpReceiptIds[lpReceiptIds.length - 1]]);

    // balance check - ClbToken
    expect((await clbBalance(tradingFeeRate)) < clbBalanceAfterAdd).toEqual(true);
  }, 60000);

  // after
  test("open/close Position", async () => {
    const {
      marketAddress,
      router,
      token,
      tokenContract,
      addAndClaimLiquidity,
      clbTokenAddress,
      getPositions,
    } = await getFixture();

    await updatePrice({ market: marketAddress, signer, price: 1000 });
    const tradingFeeRate = 100;
    const { clbBalanceAfterAdd, addAmount } = await addAndClaimLiquidity(tradingFeeRate);

    let account = await client.account().getAccount();
    if (account === ethers.ZeroAddress) {
      await client.account().createAccount();
      account = await client.account().getAccount();
      console.log("Account created", account);
    }
    console.log("getAccount", account);

    const usdcBalance = await tokenContract.balanceOf(signer.getAddress());
    console.log(usdcBalance);
    await (await tokenContract.transfer(account, usdcBalance)).wait();

    const accountBalance = await tokenContract.balanceOf(account);
    console.log("accountBalance", accountBalance);

    const bin100 = (await client.lens().liquidityBins(marketAddress)).filter(
      (b) => b.tradingFeeRate == 100n
    );
    // 0xd0e30db0
    const beforeOpenPositions = await getPositions();
    const takerMargin = accountBalance / 3n;
    await router.openPosition(marketAddress, {
      quantity: takerMargin, // x1 leverage
      takerMargin,
      makerMargin: bin100[0].freeLiquidity / 2n,
      maxAllowableTradingFee: bin100[0].freeLiquidity / 2n / 10n,
    });

    const afterOpenPositions = await getPositions();
    expect(beforeOpenPositions.length).toBeLessThan(afterOpenPositions.length);

    const positionBeforeClose = afterOpenPositions[afterOpenPositions.length - 1];
    expect(positionBeforeClose.closeVersion == 0n).toEqual(true);

    await updatePrice({ market: marketAddress, signer, price: 1100 });

    await router.closePosition(marketAddress, afterOpenPositions[afterOpenPositions.length - 1].id);

    const positions = await getPositions();
    const position = positions[positions.length - 1];
    expect(position.closeVersion == 0n).toEqual(false);

    await updatePrice({ market: marketAddress, signer, price: 1200 });

    await router.claimPosition(marketAddress, position.id);

    expect((await getPositions()).filter((pos) => pos.id === position.id).length).toEqual(0);
  }, 60000);
  // after yarn chain
  // Time:        37.582 s, estimated 45 s

  test("revert msg handling", async () => {
    const { marketAddress, router, tokenContract } = await getFixture();

    // require Long String message
    async function erc20TransferFromTx() {
      return await handleBytesError(async () => {
        const tx = await tokenContract.transferFrom(marketAddress, await signer.getAddress(), 1);
        return await tx.wait();
      }, signer.provider);
    }
    await expect(async () => await erc20TransferFromTx()).rejects.toThrow(
      "call reverted with reason: ERC20: insufficient allowance"
    );

    // revert Custom error
    await expect(
      async () => await router.withdrawLiquidity(marketAddress, ethers.MaxUint256)
    ).rejects.toThrow("call reverted with error: NotExistLpReceipt");

    // Non revert message(require)
    if ((await client.account().getAccount()) === ethers.ZeroAddress) {
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
    ).rejects.toThrow("call reverted with error: URT");
  }, 60000);
});
