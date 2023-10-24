import { BigNumber } from "ethers";
import { faucetTestToken, testClient, updatePrice } from "./testHelpers";

describe("lens sdk test", () => {
  const client = testClient();

  async function getContracts() {
    const tokens = await client.marketFactory().registeredSettlementTokens();
    const markets = await client.marketFactory().getMarkets(tokens[0].address);
    if (markets.length == 0) {
      throw new Error(`market is not registered (token : ${tokens[0].address})`);
    }
    return { market: markets[0].address, token: tokens[0].address, router: client.router() };
  }

  test("ownedLiquidityBins", async () => {
    const { market, token } = await getContracts();
    await updatePrice({ market, client, price: 1000 });
    const beforeBins = await client
      .lens()
      .ownedLiquidityBins(market, client.walletClient?.account?.address);

    const tokenBalance = await faucetTestToken({ client, testToken: token });
    expect(tokenBalance).toBeGreaterThan(0n)

    console.log("Test token balance", tokenBalance);

    await client.router().addLiquidities(market, [{ feeRate: 100, amount: tokenBalance / 2n }]);
    const lpReceipts = await client.lens().lpReceipts(market);

    console.log("lpReceipts", lpReceipts);

    await updatePrice({ market, client, price: 1000 });
    await client.router().claimLiquidites(market, [lpReceipts[lpReceipts.length - 1].id]);

    const afterBins = await client
      .lens()
      .ownedLiquidityBins(market, client.walletClient?.account?.address);
    console.log("beforeBins", beforeBins);
    console.log("afterBins", afterBins);
    if (beforeBins.length == 0) {
      expect(beforeBins.length + 1).toEqual(afterBins.length);
    } else {
      const targetBeforeBin = beforeBins.find((b) => b.tradingFeeRate == 100);
      const targetAbterBin = afterBins.find((b) => b.tradingFeeRate == 100);
      const beforeClbBalance =
        targetBeforeBin === undefined ? BigNumber.from(0) : targetBeforeBin.clbBalance;
      expect(beforeClbBalance).toBeLessThan(targetAbterBin!.clbBalance);
    }
  }, 30000);

  test("liquidityBins", async () => {
    const { market } = await getContracts();
    const bins = await client.lens().liquidityBins(market);
    expect(bins.length).toEqual(72);
    // console.log("liquidityBins", bins);
  }, 10000);

  test("claimableLiquidities", async () => {
    const { market } = await getContracts();
    const bins = await client.lens().liquidityBins(market);
    expect(bins.length).toEqual(72);
    // console.log("claimableLiquidities", bins);
  }, 10000);
});
