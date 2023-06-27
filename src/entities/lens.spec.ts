import { BigNumber, BigNumberish, Signer, ethers } from "ethers";
import { Client } from "../Client";
import { PromiseOrValue } from "../gen/common";
import { getSigner, swapToUSDC, updatePrice } from "../utils/testHelpers";
import { Interface } from "@ethersproject/abi";
import { IERC20__factory } from "../gen";

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
    const beforeBins = await client.lens().ownedLiquidityBins(market, await signer.getAddress());

    const amount = await swapToUSDC({
      amount: ethers.utils.parseEther("10"),
      signer: signer,
      weth9: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      swapRouter: "0xF1596041557707B1bC0b3ffB34346c1D9Ce94E86",
      usdc: token,
      // usdc: "0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892",
      fee: 3000,
    });

    const balance = await IERC20__factory.connect(token, signer).balanceOf(
      await signer.getAddress()
    );
    console.log(balance);

    const receipt = await client.router().addLiquidities(market, [{ feeRate: 100, amount: balance.div(2) }]);

    const lpReceiptIds = await client
      .routerContract()
      ["getLpReceiptIds(address,address)"](market, await signer.getAddress());

    await updatePrice({ market, signer, price: 1000 });
    await client.router().claimLiquidites(market, lpReceiptIds);

    const afterBins = await client.lens().ownedLiquidityBins(market, await signer.getAddress());
    console.log("beforeBins", beforeBins);
    console.log("afterBins", afterBins);
    if (beforeBins.length == 0) {
      expect(beforeBins.length + 1).toEqual(afterBins.length);
    } else {
      const targetBeforeBin = beforeBins.find((b) => b.tradingFeeRate == 100);
      const targetAbterBin = afterBins.find((b) => b.tradingFeeRate == 100);
      const beforeClbBalance =
        targetBeforeBin === undefined ? BigNumber.from(0) : targetBeforeBin.clbBalance;
      expect(beforeClbBalance.lt(targetAbterBin.clbBalance)).toEqual(true);
    }
    
  }, 15000);

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
    // console.log("liquidityBins", bins);
  }, 10000);
});
