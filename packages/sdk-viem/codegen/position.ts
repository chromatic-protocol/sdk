import { gql } from '@chromatic-protocol/graphql-request';

export const POSITIONS = gql`
  query History(
    $count: Int!
    $offset: Int!
    $orderBy: ClaimedPosition_orderBy!
    $orderDirection: OrderDirection!
    $accountAddress: Bytes!
    $marketAddresses: [Bytes!]!
  ) {
    claimedPositions(
      first: $count
      skip: $offset
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { position_: { account: $accountAddress, marketAddress_in: $marketAddresses } }
    ) {
      id
      entryPrice
      exitPrice
      realizedPnl
      interest
      cause
      blockTimestamp
      position {
        id
        marketAddress
        account
        positionId
        qty
        takerMargin
        makerMargin
        tradingFee
        openVersion
        openTimestamp
        closedPosition {
          closeVersion
          closeTimestamp
        }
      }
    }
  }

  query TradeLogs(
    $count: Int!
    $offset: Int!
    $orderBy: Position_orderBy!
    $orderDirection: OrderDirection!
    $accountAddress: Bytes!
    $marketAddresses: [Bytes!]!
  ) {
    positions(
      first: $count
      skip: $offset
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { account: $accountAddress, marketAddress_in: $marketAddresses }
    ) {
      id
      account
      marketAddress
      positionId
      qty
      takerMargin
      makerMargin
      tradingFee
      openVersion
      openTimestamp
    }
  }
`;
