import { gql } from 'graphql-request';

export const ADD_LIQUIDITIES = gql`
  query AddLiquidities(
    $count: Int!
    $orderBy: AddLiquidity_orderBy!
    $orderDirection: OrderDirection!
    $walletAddress: Bytes!
    $lpAddress: Bytes!
    $toBlockTimestamp: BigInt
  ) {
    addLiquidities(
      orderDirection: $orderDirection
      orderBy: $orderBy
      where: { lp: $lpAddress, recipient: $walletAddress, blockTimestamp_lt: $toBlockTimestamp }
      first: $count
    ) {
      id
      lp
      receiptId
      provider
      recipient
      oracleVersion
      amount
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const ADD_LIQUIDITY_SETTLEDS = gql`
  query AddLiquiditySettleds($fromId: BigInt!, $endId: BigInt!, $lpAddress: Bytes!) {
    addLiquiditySettleds(where: { receiptId_gte: $fromId, receiptId_lte: $endId, lp: $lpAddress }) {
      id
      lp
      receiptId
      settlementAdded
      lpTokenAmount
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const REMOVE_LIQUIDITIES = gql`
  query RemoveLiquidities(
    $count: Int!
    $orderBy: RemoveLiquidity_orderBy!
    $orderDirection: OrderDirection!
    $walletAddress: Bytes!
    $lpAddress: Bytes!
    $toBlockTimestamp: BigInt
  ) {
    removeLiquidities(
      orderDirection: $orderDirection
      orderBy: $orderBy
      where: { lp: $lpAddress, recipient: $walletAddress, blockTimestamp_lt: $toBlockTimestamp }
      first: $count
    ) {
      id
      lp
      receiptId
      recipient
      oracleVersion
      lpTokenAmount
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const REMOVE_LIQUIDITY_SETTLEDS = gql`
  query RemoveLiquiditySettleds($fromId: BigInt!, $endId: BigInt!, $lpAddress: Bytes!) {
    removeLiquiditySettleds(
      where: { receiptId_gte: $fromId, receiptId_lte: $endId, lp: $lpAddress }
    ) {
      id
      lp
      receiptId
      burningAmount
      withdrawnSettlementAmount
      refundedAmount
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const ADD_LIQUIDITIY_COUNT = gql`
  query AddLiquidityCount($walletAddress: Bytes!, $lpAddress: Bytes!) {
    addLiquidities(where: { lp: $lpAddress, recipient: $walletAddress }) {
      id
      lp
      receiptId
      recipient
      provider
    }
  }
`;

export const ADD_LIQUIDITY_SETTLED_COUNT = gql`
  query AddLiquiditySettledCount($walletAddress: Bytes!, $lpAddress: Bytes!) {
    addLiquiditySettleds(where: { lp: $lpAddress, recipient: $walletAddress }) {
      id
      lp
      receiptId
      recipient
      provider
    }
  }
`;

export const REMOVE_LIQUIDITY_COUNT = gql`
  query RemoveLiquidityCount($walletAddress: Bytes!, $lpAddress: Bytes!) {
    removeLiquidities(where: { lp: $lpAddress, recipient: $walletAddress }) {
      id
      lp
      receiptId
      recipient
      provider
    }
  }
`;

export const REMOVE_LIQUIDITY_SETTLED_COUNT = gql`
  query RemoveLiquiditySettledCount($walletAddress: Bytes!, $lpAddress: Bytes!) {
    removeLiquiditySettleds(where: { lp: $lpAddress, recipient: $walletAddress }) {
      id
      lp
      receiptId
      recipient
      provider
    }
  }
`;
