import { ethers } from "ethers";
import { Client } from "../Client";
import { getSigner } from "../utils/testHelpers";

describe("lens sdk test", () => {
  const client = new Client("anvil", getSigner());

  async function getDefaultMarket() {
    const tokens = await client.marketFactory().registeredSettlementTokens();
    const markets = await client.marketFactory().getMarkets(tokens[0].address);
    // TODO throw if market is empty
    return markets[0].address;
  }

  test("ownedLiquidityBins view", async () => {
    const bins = await client
      .lens()
      .ownedLiquidityBins(await getDefaultMarket(), "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");
    console.log(bins);
  }, 10000);

  test("liquidityBins", async () => {
    const bins = await client.lens().liquidityBins(await getDefaultMarket());
    console.log(bins);
    expect(bins.length).toEqual(72);
  }, 10000);
});
