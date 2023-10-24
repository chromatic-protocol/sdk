import * as segFaultHandler from "segfault-handler";
import { getContract, parseEther, zeroAddress } from "viem";
import { ierc20ABI } from "../src/gen";
import { encodeTokenId } from "../src/utils/helpers";
import { faucetTestToken, testClient, updatePrice } from "./testHelpers";
//TODO fix segmentation fault error
segFaultHandler.registerHandler("crash.log");

describe("router sdk test", () => {
  const client = testClient();

  async function getFixture() {
    const tokens = await client.marketFactory().registeredSettlementTokens();
    const markets = await client.marketFactory().getMarkets(tokens[0].address);
    const clbToken = await client.market().contracts().clbToken(markets[0].address);
    const market = client.market().contracts().market(markets[0].address);
    const account = client.walletClient!.account!.address;

    async function getPositions() {
      return await market.read.getPositions(
        [await client.account().getPositionIds(market.address)],
        { account: client.walletClient?.account }
      );
    }

    async function clbBalance(feeRate: number) {
      return await clbToken.read.balanceOf([account, encodeTokenId(feeRate)]);
    }

    async function clbTotalSupply(feeRate: number) {
      return await clbToken.read.totalSupply([encodeTokenId(feeRate)]);
    }

    
    const router = client.router();

    async function addAndClaimLiquidity(tradingFeeRate: number) {

      const tokenBalance = await faucetTestToken({ client, testToken: tokens[0].address });
      expect(tokenBalance).toBeGreaterThan(0n)

      // add liquidity - router
      const amount = tokenBalance / 2n;
      const clbBalanceBeforeAdd = await clbBalance(tradingFeeRate);
      const addTxReceipt = await router.addLiquidities(market.address, [
        { feeRate: tradingFeeRate, amount: amount },
      ]);

      // TODO verify LpReceipt
      // const addLpReceipt = parseLpReceipt(marketAddress, addTxReceipt);
      // expect(addLpReceipt.id !== undefined).toEqual(true);

      // claimLiquidity - router
      await updatePrice({ market: market.address, client, price: 1000 });

      let lpReceipts = await router
        .contracts()
        .router()
        .read.getLpReceiptIds([market.address, client.walletClient!.account!.address]);
      await router.claimLiquidites(market.address, [lpReceipts[lpReceipts.length - 1]]);

      // balance check - ClbToken
      const clbBalanceAfterAdd = await clbBalance(tradingFeeRate);
      expect(clbBalanceBeforeAdd).toBeLessThan(clbBalanceAfterAdd);
      return { clbBalanceAfterAdd, addAmount: amount };
    }

    return {
      market,
      token: tokens[0].address,
      account,
      router,
      clbBalance,
      clbTotalSupply,
      addAndClaimLiquidity,
      clbToken,
      getPositions,
      getLpReceiptIds: async () =>
        await client
          .router()
          .contracts()
          .router()
          .read.getLpReceiptIds([market.address, client.walletClient!.account!.address]),
    };
  }

  test("add/remove Liquidity", async () => {
    const { market, router, token, clbBalance, addAndClaimLiquidity, getLpReceiptIds } =
      await getFixture();

    await updatePrice({ market: market.address, client, price: 1000 });
    const tradingFeeRate = 100;

    const { clbBalanceAfterAdd } = await addAndClaimLiquidity(tradingFeeRate);

    expect(await clbBalance(tradingFeeRate)).toEqual(clbBalanceAfterAdd);

    // removeLiquidity - router
    await router.removeLiquidities(market.address, [
      { feeRate: tradingFeeRate, clbTokenAmount: clbBalanceAfterAdd },
    ]);
    // TODO verify LpReceipt
    // expect(removeLpReceipt.id !== undefined).toEqual(true);
    // withdrawLiquidity - router
    await updatePrice({ market: market.address, client, price: 1000 });
    const receiptIds = await getLpReceiptIds();
    router.withdrawLiquidities(market.address, [receiptIds[receiptIds.length - 1]]);

    // balance check - ClbToken
    expect(await clbBalance(tradingFeeRate)).toBeLessThan(clbBalanceAfterAdd);
  }, 60000);

  test("open/close Position", async () => {
    const { market, router, token, clbBalance, addAndClaimLiquidity, clbToken, getPositions } =
      await getFixture();

    await updatePrice({ market: market.address, client, price: 1000 });
    const tradingFeeRate = 100;
    const { clbBalanceAfterAdd, addAmount } = await addAndClaimLiquidity(tradingFeeRate);

    let account = await client.account().getAccount();
    if (account === zeroAddress) {
      await client.account().createAccount();
      account = await client.account().getAccount();
      console.log("Account created", account);
    }
    console.log("getAccount", account);

    const usdc = getContract({
      abi: ierc20ABI,
      address: token,
      publicClient: client.publicClient,
      walletClient: client.walletClient,
    });

    const usdcBalance = await usdc.read.balanceOf([client.walletClient!.account!.address]);
    console.log(usdcBalance);
    const { request } = await usdc.simulate.transfer([account, usdcBalance], {
      account: client.walletClient!.account!,
    });
    await client.publicClient!.waitForTransactionReceipt({
      hash: await client.walletClient!.writeContract(request),
    });

    const accountBalance = await usdc.read.balanceOf([account]);
    console.log("accountBalance", accountBalance);

    const bin100 = (await client.lens().liquidityBins(market.address)).filter(
      (b) => b.tradingFeeRate == 100
    );

    const beforeOpenPositions = await getPositions();

    const takerMargin = accountBalance / 2n;
    const openTxReceipt = await router.openPosition(market.address, {
      quantity: takerMargin, // x1 leverage
      takerMargin,
      makerMargin: bin100[0].freeLiquidity / 2n,
      maxAllowableTradingFee: bin100[0].freeLiquidity / 2n,
    });

    const afterOpenPositions = await getPositions();
    expect(beforeOpenPositions.length).toBeLessThan(afterOpenPositions.length);

    const positionBeforeClose = afterOpenPositions[afterOpenPositions.length - 1];
    expect(positionBeforeClose.closeVersion).toEqual(0n);

    await updatePrice({ market: market.address, client, price: 1100 });

    await router.closePosition(
      market.address,
      afterOpenPositions[afterOpenPositions.length - 1].id
    );

    const positions = await getPositions();
    const position = positions[positions.length - 1];
    expect(position.closeVersion).toBeGreaterThan(0n);

    await updatePrice({ market: market.address, client, price: 1200 });

    await router.claimPosition(market.address, position.id);

    expect((await getPositions()).filter((pos) => pos.id === position.id).length).toEqual(0);
  }, 60000);
  // after yarn chain
  // Time:        37.582 s, estimated 45 s

  // // TODO SIGSEGV
  // test("revert msg handling", async () => {
  //   const { market, router, token } = await getFixture();

  //   const tokenContract = getContract({
  //     abi: ierc20ABI,
  //     address: token,
  //     publicClient: client.publicClient,
  //     walletClient: client.walletClient,
  //   });

  //   // require Long String message
  //   async function erc20TransferFromTx() {
  //     return await handleBytesError(async () => {
  //       const { request } = await tokenContract.simulate.transferFrom(
  //         [market.address, client.walletClient!.account!.address, BigInt(1)],
  //         { account: client.walletClient!.account }
  //       );
  //       await client.publicClient!.waitForTransactionReceipt({
  //         hash: await client.walletClient!.writeContract(request),
  //       });
  //     });
  //   }

  //   await expect(async () => await erc20TransferFromTx()).rejects.toThrow(
  //     "call reverted with reason: ERC20: transfer amount exceeds balance"
  //   );

  //   // revert Custom error
  //   await expect(
  //     async () => await router.withdrawLiquidity(market.address, MAX_UINT256)
  //   ).rejects.toThrow("call reverted with error: NotExistLpReceipt");

  //   // Non revert message(require)
  //   if ((await client.account().getAccount()) === zeroAddress) {
  //     await client.account().createAccount();
  //   }
  //   await expect(async () => await client.account().createAccount()).rejects.toThrow(
  //     "call reverted without reason"
  //   );

  //   // require with Short string error(Constant string)
  //   // call revert exception; VM Exception while processing transaction: reverted with reason string "URT"
  //   // parsed in ethers
  //   await expect(
  //     async () =>
  //       await client.marketFactory().currentInterestRate(client.walletClient!.account!.address)
  //   ).rejects.toThrow("URT");
  // }, 60000);
});
