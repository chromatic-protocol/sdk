import { gql } from "@chromatic-protocol/graphql-request";

export const getLiquidityBinStatuses = gql`
  query getChromaticMarketBinStatusesAndCLBMeta($market: Bytes = "") {
    chromaticMarketBinStatuses(
      orderBy: blockNumber
      orderDirection: desc
      first: 1
      where: { market: $market }
    ) {
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
    clbtokens(where: { market: $market }) {
      decimals
      market
      id
    }
  }
`;

export const getMarketMeta = gql`
  query getMarketMeta($id: ID = "") {
    chromaticMarket(id: $id) {
      id
      settlementToken
      settlementTokenDecimals
      settlementTokenSymbol
      oracleDescription
    }
  }
`;

export const getInterestRecordSnapshots = gql`
  query getInterestRecordSnapshots($settlementToken: Bytes = "") {
    interestRatesSnapshots(
      where: { settlementToken: $settlementToken }
      orderBy: blockNumber
      orderDirection: desc
      first: 1
    ) {
      id
      rates {
        id
        annualRateBPS
        beginTimestamp
      }
      settlementToken
      blockTimestamp
      blockNumber
    }
  }
`;
