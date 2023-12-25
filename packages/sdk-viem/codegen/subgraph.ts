import { gql } from "graphql-request";

export const getLiquidityBinStatuses = gql`
  query getChromaticMarketBinStatusesAndCLBMeta($market: Bytes = "") {
    chromaticMarketBinStatuses(orderBy: blockNumber, orderDirection: desc, first: 1) {
      id
      longBinValue
      longFreeLiquidity
      longLiquidity
      market
      shortBinValue
      shortFreeLiquidity
      shortLiquidity
      blockNumber
      statuses {
        binValue
        freeLiquidity
        id
        liquidity
        tradingFeeRate
      }
    }
    clbtokens(where: {market: $market}) {
        decimals
        market
        id
      }
  }
`;

export const getCLBTokenTotalSupplies = gql`
  query getCLBTokenTotalSupplies($blockNumber: BigInt) {
    clbtokenTotalSupplies(
      orderDirection: desc
      orderBy: blockNumber
      where: { blockNumber: $blockNumber }
    ) {
      id
      token
      tokenId
      blockNumber
      amount
    }
  }
`;
