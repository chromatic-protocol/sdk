import { BigNumber } from "@ethersproject/bignumber";
import { PositionParam, ChromaticPosition } from "../src/entities/ChromaticPosition";
import { ethers } from "ethers";
import { Client } from "../src/Client";
import { getSigner } from "./testHelpers";

const { formatEther } = ethers.utils;
function parseEther(value: string | number) {
  return ethers.utils.parseEther(value.toString());
}

describe("postion sdk test", () => {
  jest.spyOn(ChromaticPosition.prototype, "getBpsRecords").mockImplementation(async () => {
    return [{ annualRateBPS: BigNumber.from(1000), beginTimestamp: BigNumber.from(0) }];
  });

  const position = new Client("anvil", ethers.getDefaultProvider()).position();

  test("losscut stop price - long", async () => {
    const openTimestamp = BigNumber.from(1000000000);
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const qty = 10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: BigNumber.from(qty).mul(10 ** 4 /* qty decimal*/),
      leverage: leverage * 10 ** 2,
      openTimestamp,
      claimTimestamp: BigNumber.from(openTimestamp.toNumber() + 3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "",
      parseEther(1000),
      positionParam,
      18
    );

    console.log("Losscut price - long", ethers.utils.formatEther(lossCutPrice));
    expect(Number(formatEther(lossCutPrice))).toEqual(
      1000 *
        (1 -
          (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ /
            (qty * leverage))
    );
  });

  test("losscut stop price - short", async () => {
    const openTimestamp = BigNumber.from(1000000000);
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const qty = -10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: BigNumber.from(qty).mul(10 ** 4 /* qty decimal*/),
      leverage: leverage * 10 ** 2,
      openTimestamp,
      claimTimestamp: BigNumber.from(openTimestamp.toNumber() + 3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "",
      parseEther(1000),
      positionParam,
      18
    );

    console.log("Losscut price - short", ethers.utils.formatUnits(lossCutPrice, 6));

    expect(Number(formatEther(lossCutPrice))).toEqual(
      1000 *
        (1 -
          (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ /
            (qty * leverage))
    );
  });

  test("profit stop price - long", async () => {
    const openTimestamp = BigNumber.from(1000000000);
    const makerMarginEther = 2;
    const takerMarginEther = 4;
    const qty = 10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: BigNumber.from(qty).mul(10 ** 4 /* qty decimal*/),
      leverage: leverage * 10 ** 2,
      openTimestamp,
      claimTimestamp: BigNumber.from(openTimestamp.toNumber() + 3600 * 24 * 36.5),
    };

    const { profitStopPrice } = await position.getLiquidationPrice(
      "",
      parseEther(1000),
      positionParam,
      18
    );

    console.log("Profit Stop price", ethers.utils.formatEther(profitStopPrice));
    expect(Number(formatEther(profitStopPrice))).toEqual(
      1000 * (1 + (makerMarginEther * 1.01) /* 1% interest for margin*/ / (qty * leverage))
    );
  });

  test("profit stop price - short", async () => {
    const openTimestamp = BigNumber.from(1000000000);
    const makerMarginEther = 2;
    const takerMarginEther = 4;
    const qty = -10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: BigNumber.from(qty).mul(10 ** 4 /* qty decimal*/),
      leverage: leverage * 10 ** 2,
      openTimestamp,
      claimTimestamp: BigNumber.from(openTimestamp.toNumber() + 3600 * 24 * 36.5),
    };

    const { profitStopPrice } = await position.getLiquidationPrice(
      "",
      parseEther(1000),
      positionParam,
      18
    );

    console.log("Profit Stop price (short)", ethers.utils.formatEther(profitStopPrice));
    expect(Number(formatEther(profitStopPrice))).toEqual(
      1000 * (1 + (makerMarginEther * 1.01) /* 1% interest for margin*/ / (qty * leverage))
    );
  });

  test("get positions", async () => {
    const client = new Client("anvil", getSigner());
    const tokens = await client.marketFactory().registeredSettlementTokens();
    const markets = await client.marketFactory().getMarkets(tokens[0].address);
    const positions = await client.position().getPositions(markets[0].address, [1]);
    console.log(positions);
  });
});
