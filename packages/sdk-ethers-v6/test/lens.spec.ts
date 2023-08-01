import { ethers } from "ethers";
import { Client } from "../src/Client";
import {
  getSigner,
  swapToUSDC,
  updatePrice,
  waitTxMining,
} from "./testHelpers";

describe("lens sdk test", () => {
  const signer = getSigner();
  const client = new Client("anvil", signer);

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
    await updatePrice({ market, signer, price: 1000 });
    const beforeBins = await client.lens().ownedLiquidityBins(market, await signer.getAddress());

    const { outputAmount, usdcBalance } = await swapToUSDC({
      amount: ethers.parseEther("10"),
      signer: signer,
      usdc: token,
      // usdc: "0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892",
      fee: 3000,
    });

    console.log("USDC balance", usdcBalance);

    const addLiqfn = () =>
      client.router().addLiquidities(market, [{ feeRate: 100, amount: usdcBalance / 2n }]);
    const txReceipt = await waitTxMining(addLiqfn);
    const lpReceiptIds = await client.router().contracts().router()["getLpReceiptIds(address)"](market)

    await updatePrice({ market, signer, price: 1000 });
    await client.router().claimLiquidites(market, [lpReceiptIds[lpReceiptIds.length - 1]]);

    const afterBins = await client.lens().ownedLiquidityBins(market, await signer.getAddress());
    console.log("beforeBins", beforeBins);
    console.log("afterBins", afterBins);
    if (beforeBins.length == 0) {
      expect(beforeBins.length + 1).toEqual(afterBins.length);
    } else {
      const targetBeforeBin = beforeBins.find((b) => b.tradingFeeRate == 100);
      const targetAbterBin = afterBins.find((b) => b.tradingFeeRate == 100);
      const beforeClbBalance =
        targetBeforeBin === undefined ? 0n : targetBeforeBin.clbBalance;
      expect(beforeClbBalance < targetAbterBin.clbBalance).toEqual(true);
    }
  }, 60000);

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
