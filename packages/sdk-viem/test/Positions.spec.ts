import { formatEther, formatUnits, parseEther } from "viem";
import { ChromaticPosition, PositionParam } from "../src/entities/ChromaticPosition";
import { testClient } from "./testHelpers";

type RecordStructOutput = [bigint, bigint] & {
  annualRateBPS: bigint;
  beginTimestamp: bigint;
};

describe("postion sdk test", () => {
  jest.spyOn(ChromaticPosition.prototype, "getInterestRateRecords").mockImplementation(async () => {
    return [{ annualRateBPS: BigInt(1000), beginTimestamp: BigInt(0) }] as RecordStructOutput[];
  });

  const client = testClient();
  const position = client.position();

  test("losscut stop price - long", async () => {
    const openTimestamp = BigInt(1000000000);
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const qty = 10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther.toString()), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther.toString()), // 20% profitstop
      qty: BigInt(qty * 10 ** 4),
      leverage: leverage * 10 ** 2,
      openTimestamp,
      claimTimestamp: openTimestamp + BigInt(3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "0x",
      parseEther("1000"),
      positionParam,
      18
    );

    console.log("Losscut price - long", formatEther(lossCutPrice!));
    expect(formatEther(lossCutPrice!)).toEqual(
     ( 1000 *
        (1 -
          (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ /
            (qty * leverage))).toString()
    );
  });

  test("losscut stop price - short", async () => {
    const openTimestamp = BigInt(1000000000);
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const qty = -10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther.toString()), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther.toString()), // 20% profitstop
      qty: BigInt(qty * 10 ** 4 /* qty decimal*/),
      leverage: leverage * 10 ** 2,
      openTimestamp,
      claimTimestamp: openTimestamp + BigInt(3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "0x",
      parseEther("1000"),
      positionParam,
      18
    );

    console.log("Losscut price - short", formatUnits(lossCutPrice!, 6));

    expect(Number(formatEther(lossCutPrice!))).toEqual(
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
      takerMargin: parseEther(takerMarginEther.toString()), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther.toString()), // 20% profitstop
      qty: BigInt(qty * 10 ** 4 /* qty decimal*/),
      leverage: leverage * 10 ** 2,
      openTimestamp,
      claimTimestamp: openTimestamp + BigInt(3600 * 24 * 36.5),
    };

    const { profitStopPrice } = await position.getLiquidationPrice(
      "0x",
      parseEther("1000"),
      positionParam,
      18
    );

    console.log("Profit Stop price", formatEther(profitStopPrice!));
    expect(Number(formatEther(profitStopPrice!))).toEqual(
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
      takerMargin: parseEther(takerMarginEther.toString()), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther.toString()), // 20% profitstop
      qty: BigInt(qty * 10 ** 4 /* qty decimal*/),
      leverage: leverage * 10 ** 2,
      openTimestamp,
      claimTimestamp: openTimestamp + BigInt(3600 * 24 * 36.5),
    };

    const { profitStopPrice } = await position.getLiquidationPrice(
      "0x",
      parseEther("1000"),
      positionParam,
      18
    );

    console.log("Profit Stop price (short)", formatEther(profitStopPrice!));
    expect(Number(formatEther(profitStopPrice!))).toEqual(
      1000 * (1 + (makerMarginEther * 1.01) /* 1% interest for margin*/ / (qty * leverage))
    );
  });

  test("get positions", async () => {
    const client = testClient();
    const tokens = await client.marketFactory().registeredSettlementTokens();
    const markets = await client.marketFactory().getMarkets(tokens[0].address);
    const positions = await client.position().getPositions(markets[0].address, [BigInt(1)]);
    console.log(positions);
  });
});
