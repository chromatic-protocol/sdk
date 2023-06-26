import { BigNumber } from "@ethersproject/bignumber";
import { deployedAddress } from "./gen";

import { PositionParam, Positions } from "./positions";
import { ethers } from "ethers";

jest.spyOn(Positions.prototype, "getBpsRecords").mockImplementation(async () => {
  return [{ annualRateBPS: BigNumber.from(1000), beginTimestamp: BigNumber.from(0) }];
});

function parseEther(value: string | number) {
  return ethers.utils.parseEther(value.toString());
}

describe("postion sdk test", () => {
  const position = new Positions("dummy market address");
  test("losscut stop price", async () => {
    const openTimestamp = BigNumber.from(1000000000);
    const takerMarginEther = 2;
    const makerMarginEther = 4;
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

    const { lossCutPrice } = await position.getLiquidationPrice(parseEther(1000), positionParam);

    console.log("Losscut price", ethers.utils.formatEther(lossCutPrice));
    expect(lossCutPrice).toEqual(
      parseEther(
        1000 *
          (1 -
            (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ /
              (qty * leverage)),
      ),
    );
  });

  test("profit stop price", async () => {
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

    const { profitStopPrice } = await position.getLiquidationPrice(parseEther(1000), positionParam);

    console.log("Profit Stop price", ethers.utils.formatEther(profitStopPrice));
    expect(profitStopPrice).toEqual(
      parseEther(
        1000 *
          (1 +
            (takerMarginEther - makerMarginEther * 0.01) /* 1% interest for margin*/ /
              (qty * leverage)),
      ),
    );
  });
});
