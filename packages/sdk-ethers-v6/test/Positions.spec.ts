import { ethers } from "ethers";
import { Client } from "../src/Client";
import { ChromaticPosition, PositionParam } from "../src/entities/ChromaticPosition";
import { InterestRate } from "../src/gen/contracts/core/ChromaticMarketFactory";
import { getSigner } from "./testHelpers";

const { formatEther } = ethers;
function parseEther(value: string | number) {
  return ethers.parseEther(value.toString());
}

describe("postion sdk test", () => {
  jest.spyOn(ChromaticPosition.prototype, "getInterestRateRecords").mockImplementation(async () => {
    return [{ annualRateBPS: 1000n, beginTimestamp: 0n }] as InterestRate.RecordStructOutput[];
  });

  const position = new Client(
    "anvil",
    ethers.getDefaultProvider("http://127.0.0.1:8545")
  ).position();

  test("losscut stop price - long", async () => {
    const openTimestamp = BigInt(1000000000);
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const qty = 10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: BigInt(qty) * BigInt(10 ** 4 /* qty decimal*/),
      leverage: BigInt(leverage * 10 ** 2),
      openTimestamp,
      claimTimestamp: BigInt(Number(openTimestamp) + 3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "",
      parseEther(1000),
      positionParam,
      18
    );

    console.log("Losscut price - long", ethers.formatEther(lossCutPrice));
    expect(Number(formatEther(lossCutPrice))).toEqual(
      1000 *
        (1 -
          (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ /
            (qty * leverage))
    );
  });

  test("losscut stop price - short", async () => {
    const openTimestamp = BigInt(1000000000);
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const qty = -10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: BigInt(qty) * BigInt(10 ** 4 /* qty decimal*/),
      leverage: BigInt(leverage * 10 ** 2),
      openTimestamp,
      claimTimestamp: BigInt(Number(openTimestamp) + 3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "",
      parseEther(1000),
      positionParam,
      18
    );

    console.log("Losscut price - short", ethers.formatUnits(lossCutPrice, 6));

    expect(Number(formatEther(lossCutPrice))).toEqual(
      1000 *
        (1 -
          (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ /
            (qty * leverage))
    );
  });

  test("profit stop price - long", async () => {
    const openTimestamp = BigInt(1000000000);
    const makerMarginEther = 2;
    const takerMarginEther = 4;
    const qty = 10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: BigInt(qty) * BigInt(10 ** 4 /* qty decimal*/),
      leverage: BigInt(leverage * 10 ** 2),
      openTimestamp,
      claimTimestamp: BigInt(Number(openTimestamp) + 3600 * 24 * 36.5),
    };

    const { profitStopPrice } = await position.getLiquidationPrice(
      "",
      parseEther(1000),
      positionParam,
      18
    );

    console.log("Profit Stop price", ethers.formatEther(profitStopPrice));
    expect(Number(formatEther(profitStopPrice))).toEqual(
      1000 * (1 + (makerMarginEther * 1.01) /* 1% interest for margin*/ / (qty * leverage))
    );
  });

  test("profit stop price - short", async () => {
    const openTimestamp = BigInt(1000000000);
    const makerMarginEther = 2;
    const takerMarginEther = 4;
    const qty = -10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: BigInt(qty) * BigInt(10 ** 4 /* qty decimal*/),
      leverage: BigInt(leverage * 10 ** 2),
      openTimestamp,
      claimTimestamp: BigInt(Number(openTimestamp) + 3600 * 24 * 36.5),
    };

    const { profitStopPrice } = await position.getLiquidationPrice(
      "",
      parseEther(1000),
      positionParam,
      18
    );

    console.log("Profit Stop price (short)", ethers.formatEther(profitStopPrice));
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
