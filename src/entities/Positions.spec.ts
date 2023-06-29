import { BigNumber } from "@ethersproject/bignumber";
import { PositionParam, ChromaticPosition } from "./ChromaticPosition";
import { ethers } from "ethers";
import { Client } from "../Client";
import { getSigner } from "../utils/testHelpers";

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
    const qty = -10;
    const leverage = 2;
    const positionParam: PositionParam = {
      takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      makerMargin: parseEther(makerMarginEther), // 20% profitstop
      qty: parseEther(qty).mul(10 ** 4 /* qty decimal*/),
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
    const p = {
      id: {
        type: "BigNumber",
        hex: "0x01",
      },
      openVersion: {
        type: "BigNumber",
        hex: "0x03",
      },
      closeVersion: {
        type: "BigNumber",
        hex: "0x00",
      },
      qty: {
        type: "BigNumber",
        hex: "-0x4c4b40",
      },
      leverage: 100,
      openTimestamp: {
        type: "BigNumber",
        hex: "0x645db4e5",
      },
      closeTimestamp: {
        type: "BigNumber",
        hex: "0x00",
      },
      takerMargin: {
        type: "BigNumber",
        hex: "0x1dcd6500",
      },
      _binMargins: [
        [
          1,
          {
            type: "BigNumber",
            hex: "0x02faf080",
          },
        ],
      ],
      _feeProtocol: 0,
      makerMargin: {
        type: "BigNumber",
        hex: "0x02faf080",
      },
      openPrice: {
        type: "BigNumber",
        hex: "0x59682f00",
      },
      closePrice: {
        type: "BigNumber",
        hex: "0x00",
      },
    };
    const openTimestamp = BigNumber.from(1000000000);
    const takerMarginEther = 2;
    const makerMarginEther = 4;
    const qty = -10;
    const leverage = 2;
    // const positionParam: PositionParam = {
    //   // takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
    //   // makerMargin: parseEther(makerMarginEther), // 20% profitstop
    //   qty: parseEther(qty).mul(10 ** 4 /* qty decimal*/),
    //   leverage: leverage * 10 ** 2,
    //   openTimestamp,
    //   claimTimestamp: BigNumber.from(openTimestamp.toNumber() + 3600 * 24 * 36.5),
    // };
    const takerMargin = BigNumber.from(p.takerMargin);
    const makerMargin = BigNumber.from(p.makerMargin);
    const positionParam: PositionParam = {
      // takerMargin: parseEther(takerMarginEther), // 10% losscut ( 2 % ( 10 (qty) x 2 ) )
      // makerMargin: parseEther(makerMarginEther), // 20% profitstop
      takerMargin,
      makerMargin,
      qty: BigNumber.from(p.qty), // parseEther(qty).mul(10 ** 4 /* qty decimal*/),
      leverage: p.leverage,
      openTimestamp,
      claimTimestamp: BigNumber.from(openTimestamp.toNumber() + 3600 * 24 * 36.5),
    };

    const { lossCutPrice } = await position.getLiquidationPrice(
      "",
      BigNumber.from(p.openPrice),
      // parseEther(1500),
      positionParam,
      6
    );

    console.log("Losscut price - short", ethers.utils.formatUnits(lossCutPrice, 6));

    expect(Number(ethers.utils.formatUnits(lossCutPrice, 6))).toEqual(
      +ethers.utils.formatUnits(BigNumber.from(p.openPrice), 6) *
        (1 -
          ((+ethers.utils.formatUnits(takerMargin, 6)) -
            (+ethers.utils.formatUnits(makerMargin, 6)) * 0.01) /* 1% interest for margin*/ /
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
      qty: parseEther(qty).mul(10 ** 4 /* qty decimal*/),
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
      qty: parseEther(qty).mul(10 ** 4 /* qty decimal*/),
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
