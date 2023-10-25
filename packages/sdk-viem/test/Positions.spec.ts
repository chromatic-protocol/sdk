import { formatEther, formatUnits, parseEther } from "viem";
import { ChromaticPosition, PositionParam } from "../src/entities/ChromaticPosition";
import { testClient } from "./testHelpers";

type RecordStructOutput = [bigint, bigint] & {
  annualRateBPS: bigint;
  beginTimestamp: bigint;
};

describe("postion sdk test", () => {
  jest.spyOn(ChromaticPosition.prototype, "getInterestRateRecords").mockImplementation(async () => {
    return [{ annualRateBPS: 1000n, beginTimestamp: 0n }] as RecordStructOutput[];
  });

  const client = testClient();
  const position = client.position();

  test("losscut stop price - long", async () => {
    const openTimestamp = 1000000000n;
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const leverage = 2;
    const qty = takerMarginEther * leverage;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther.toString()), // 50% losscut, (x2 leverage)
      makerMargin: parseEther(makerMarginEther.toString()), // 100% profitstop
      qty: parseEther(qty.toString()),
      openTimestamp,
      claimTimestamp: openTimestamp + BigInt(3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "0x",
      parseEther("1000"),
      positionParam
    );

    console.log("Losscut price - long", formatEther(lossCutPrice!));
    expect(formatEther(lossCutPrice!)).toEqual(
      (
        1000 *
        (1 - (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ / qty)
      ).toString()
    );
  });

  test("losscut stop price - short", async () => {
    const openTimestamp = 1000000000n;
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const leverage = 2;
    const qty = -(takerMarginEther * leverage);
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther.toString()), // 50% losscut, (x2 leverage)
      makerMargin: parseEther(makerMarginEther.toString()), // 100% profitstop
      qty: parseEther(qty.toString()),
      openTimestamp,
      claimTimestamp: openTimestamp + BigInt(3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "0x",
      parseEther("1000"),
      positionParam
    );

    console.log("Losscut price - short", formatUnits(lossCutPrice!, 6));

    expect(Number(formatEther(lossCutPrice!))).toEqual(
      1000 * (1 - (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ / qty)
    );
  });

  test("profit stop price - long", async () => {
    const openTimestamp = 1000000000n;
    const makerMarginEther = 2;
    const takerMarginEther = 4;
    const leverage = 2;
    const qty = takerMarginEther * leverage;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther.toString()), // 50% losscut, (x2 leverage)
      makerMargin: parseEther(makerMarginEther.toString()), // 100%
      qty: parseEther(qty.toString()),
      openTimestamp,
      claimTimestamp: openTimestamp + BigInt(3600 * 24 * 36.5),
    };

    const { profitStopPrice } = await position.getLiquidationPrice(
      "0x",
      parseEther("1000"),
      positionParam
    );

    console.log("Profit Stop price", formatEther(profitStopPrice!));
    expect(Number(formatEther(profitStopPrice!))).toEqual(
      1000 * (1 + (makerMarginEther * 1.01) /* 1% interest for margin*/ / qty)
    );
  });

  test("profit stop price - short", async () => {
    const openTimestamp = 1000000000n;
    const makerMarginEther = 2;
    const takerMarginEther = 4;
    const leverage = 2;
    const qty = -(takerMarginEther * leverage);
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther.toString()), // 10% losscut, (x2 leverage)
      makerMargin: parseEther(makerMarginEther.toString()), // 100% profitstop
      qty: parseEther(qty.toString()),
      openTimestamp,
      claimTimestamp: openTimestamp + BigInt(3600 * 24 * 36.5),
    };

    const { profitStopPrice } = await position.getLiquidationPrice(
      "0x",
      parseEther("1000"),
      positionParam
    );

    console.log("Profit Stop price (short)", formatEther(profitStopPrice!));
    expect(Number(formatEther(profitStopPrice!))).toEqual(
      1000 * (1 + (makerMarginEther * 1.01) /* 1% interest for margin*/ / qty)
    );
  });

  test("get positions", async () => {
    const client = testClient();
    const tokens = await client.marketFactory().registeredSettlementTokens();
    const markets = await client.marketFactory().getMarkets(tokens[0].address);
    await expect(
      async () => await client.position().getPositions(markets[0].address, [1000000000n])
    ).rejects.toThrow("call reverted with error: NotExistPosition");
  });
});
