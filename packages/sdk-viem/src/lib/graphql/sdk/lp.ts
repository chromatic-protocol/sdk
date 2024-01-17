import { GraphQLClient } from '@chromatic-protocol/graphql-request';
import { GraphQLClientRequestHeaders } from '@chromatic-protocol/graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: string; output: string; }
  Bytes: { input: `0x${string}`; output: `0x${string}`; }
  Int8: { input: any; output: any; }
};

export type AddLiquidity = {
  __typename?: 'AddLiquidity';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  oracleVersion: Scalars['BigInt']['output'];
  provider: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AddLiquiditySettled = {
  __typename?: 'AddLiquiditySettled';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  keeperFee: Scalars['BigInt']['output'];
  lp: Scalars['Bytes']['output'];
  lpTokenAmount: Scalars['BigInt']['output'];
  provider: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  settlementAdded: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AddLiquiditySettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddLiquiditySettled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeperFee?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  keeperFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lpTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AddLiquiditySettled_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  settlementAdded?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementAdded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_not?: InputMaybe<Scalars['BigInt']['input']>;
  settlementAdded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AddLiquiditySettled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  KeeperFee = 'keeperFee',
  Lp = 'lp',
  LpTokenAmount = 'lpTokenAmount',
  Provider = 'provider',
  ReceiptId = 'receiptId',
  Recipient = 'recipient',
  SettlementAdded = 'settlementAdded',
  TransactionHash = 'transactionHash'
}

export type AddLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AddLiquidity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AddLiquidity_Filter>>>;
  oracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AddLiquidity_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  OracleVersion = 'oracleVersion',
  Provider = 'provider',
  ReceiptId = 'receiptId',
  Recipient = 'recipient',
  TransactionHash = 'transactionHash'
}

export type BpBoostTaskExecuted = {
  __typename?: 'BPBoostTaskExecuted';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BpBoostTaskExecuted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BpBoostTaskExecuted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['Bytes']['input']>;
  bp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BpBoostTaskExecuted_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BpBoostTaskExecuted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type BpDeposited = {
  __typename?: 'BPDeposited';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  provider: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BpDeposited_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BpDeposited_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['Bytes']['input']>;
  bp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BpDeposited_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BpDeposited_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  Id = 'id',
  Provider = 'provider',
  TransactionHash = 'transactionHash'
}

export type BpSettleUpdated = {
  __typename?: 'BPSettleUpdated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  totalLPToken: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BpSettleUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BpSettleUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['Bytes']['input']>;
  bp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BpSettleUpdated_Filter>>>;
  totalLPToken?: InputMaybe<Scalars['BigInt']['input']>;
  totalLPToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLPToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLPToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLPToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLPToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLPToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLPToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BpSettleUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  Id = 'id',
  TotalLpToken = 'totalLPToken',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type ChromaticBp = {
  __typename?: 'ChromaticBP';
  claims: Array<ChromaticBpClaim>;
  deposits: Array<ChromaticBpDeposit>;
  id: Scalars['Bytes']['output'];
  initialEndTimeOfWarmup: Scalars['BigInt']['output'];
  lp: ChromaticLp;
  maxRaisingTarget: Scalars['BigInt']['output'];
  minRaisingTarget: Scalars['BigInt']['output'];
  refunds: Array<ChromaticBpRefund>;
  startTimeOfWarmup: Scalars['BigInt']['output'];
  statuses: Array<ChromaticBpStatus>;
  totalRaised: Array<ChromaticBpTotalRaised>;
  totalReward: Scalars['BigInt']['output'];
};


export type ChromaticBpClaimsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChromaticBpClaim_Filter>;
};


export type ChromaticBpDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChromaticBpDeposit_Filter>;
};


export type ChromaticBpRefundsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpRefund_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChromaticBpRefund_Filter>;
};


export type ChromaticBpStatusesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChromaticBpStatus_Filter>;
};


export type ChromaticBpTotalRaisedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpTotalRaised_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChromaticBpTotalRaised_Filter>;
};

export type ChromaticBpClaim = {
  __typename?: 'ChromaticBPClaim';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: ChromaticBp;
  bpTokenAmount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lpTokenAmount: Scalars['BigInt']['output'];
  provider: Scalars['Bytes']['output'];
};

export type ChromaticBpClaim_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticBpClaim_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['String']['input']>;
  bpTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  bpTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bpTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bpTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bpTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bpTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bpTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  bpTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp_?: InputMaybe<ChromaticBp_Filter>;
  bp_contains?: InputMaybe<Scalars['String']['input']>;
  bp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_gt?: InputMaybe<Scalars['String']['input']>;
  bp_gte?: InputMaybe<Scalars['String']['input']>;
  bp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_lt?: InputMaybe<Scalars['String']['input']>;
  bp_lte?: InputMaybe<Scalars['String']['input']>;
  bp_not?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lpTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticBpClaim_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChromaticBpClaim_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  BpTokenAmount = 'bpTokenAmount',
  BpId = 'bp__id',
  BpInitialEndTimeOfWarmup = 'bp__initialEndTimeOfWarmup',
  BpMaxRaisingTarget = 'bp__maxRaisingTarget',
  BpMinRaisingTarget = 'bp__minRaisingTarget',
  BpStartTimeOfWarmup = 'bp__startTimeOfWarmup',
  BpTotalReward = 'bp__totalReward',
  Id = 'id',
  LpTokenAmount = 'lpTokenAmount',
  Provider = 'provider'
}

export type ChromaticBpCreated = {
  __typename?: 'ChromaticBPCreated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ChromaticBpCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticBpCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['Bytes']['input']>;
  bp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticBpCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChromaticBpCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  Id = 'id',
  Lp = 'lp',
  TransactionHash = 'transactionHash'
}

export type ChromaticBpDeposit = {
  __typename?: 'ChromaticBPDeposit';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: ChromaticBp;
  id: Scalars['ID']['output'];
  provider: Scalars['Bytes']['output'];
};

export type ChromaticBpDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ChromaticBpDeposit_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['String']['input']>;
  bp_?: InputMaybe<ChromaticBp_Filter>;
  bp_contains?: InputMaybe<Scalars['String']['input']>;
  bp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_gt?: InputMaybe<Scalars['String']['input']>;
  bp_gte?: InputMaybe<Scalars['String']['input']>;
  bp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_lt?: InputMaybe<Scalars['String']['input']>;
  bp_lte?: InputMaybe<Scalars['String']['input']>;
  bp_not?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticBpDeposit_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChromaticBpDeposit_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  BpId = 'bp__id',
  BpInitialEndTimeOfWarmup = 'bp__initialEndTimeOfWarmup',
  BpMaxRaisingTarget = 'bp__maxRaisingTarget',
  BpMinRaisingTarget = 'bp__minRaisingTarget',
  BpStartTimeOfWarmup = 'bp__startTimeOfWarmup',
  BpTotalReward = 'bp__totalReward',
  Id = 'id',
  Provider = 'provider'
}

export type ChromaticBpRefund = {
  __typename?: 'ChromaticBPRefund';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: ChromaticBp;
  id: Scalars['ID']['output'];
  provider: Scalars['Bytes']['output'];
};

export type ChromaticBpRefund_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ChromaticBpRefund_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['String']['input']>;
  bp_?: InputMaybe<ChromaticBp_Filter>;
  bp_contains?: InputMaybe<Scalars['String']['input']>;
  bp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_gt?: InputMaybe<Scalars['String']['input']>;
  bp_gte?: InputMaybe<Scalars['String']['input']>;
  bp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_lt?: InputMaybe<Scalars['String']['input']>;
  bp_lte?: InputMaybe<Scalars['String']['input']>;
  bp_not?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticBpRefund_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChromaticBpRefund_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  BpId = 'bp__id',
  BpInitialEndTimeOfWarmup = 'bp__initialEndTimeOfWarmup',
  BpMaxRaisingTarget = 'bp__maxRaisingTarget',
  BpMinRaisingTarget = 'bp__minRaisingTarget',
  BpStartTimeOfWarmup = 'bp__startTimeOfWarmup',
  BpTotalReward = 'bp__totalReward',
  Id = 'id',
  Provider = 'provider'
}

export type ChromaticBpStatus = {
  __typename?: 'ChromaticBPStatus';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: ChromaticBp;
  currentPeriod: Scalars['Int']['output'];
  endTimeOfLockup: Scalars['BigInt']['output'];
  endTimeOfWarmup: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['Int']['output'];
};

export type ChromaticBpStatus_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticBpStatus_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['String']['input']>;
  bp_?: InputMaybe<ChromaticBp_Filter>;
  bp_contains?: InputMaybe<Scalars['String']['input']>;
  bp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_gt?: InputMaybe<Scalars['String']['input']>;
  bp_gte?: InputMaybe<Scalars['String']['input']>;
  bp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_lt?: InputMaybe<Scalars['String']['input']>;
  bp_lte?: InputMaybe<Scalars['String']['input']>;
  bp_not?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentPeriod?: InputMaybe<Scalars['Int']['input']>;
  currentPeriod_gt?: InputMaybe<Scalars['Int']['input']>;
  currentPeriod_gte?: InputMaybe<Scalars['Int']['input']>;
  currentPeriod_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  currentPeriod_lt?: InputMaybe<Scalars['Int']['input']>;
  currentPeriod_lte?: InputMaybe<Scalars['Int']['input']>;
  currentPeriod_not?: InputMaybe<Scalars['Int']['input']>;
  currentPeriod_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  endTimeOfLockup?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfLockup_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfLockup_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfLockup_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimeOfLockup_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfLockup_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfLockup_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfLockup_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimeOfWarmup?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfWarmup_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfWarmup_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfWarmup_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimeOfWarmup_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfWarmup_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfWarmup_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimeOfWarmup_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticBpStatus_Filter>>>;
  status?: InputMaybe<Scalars['Int']['input']>;
  status_gt?: InputMaybe<Scalars['Int']['input']>;
  status_gte?: InputMaybe<Scalars['Int']['input']>;
  status_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  status_lt?: InputMaybe<Scalars['Int']['input']>;
  status_lte?: InputMaybe<Scalars['Int']['input']>;
  status_not?: InputMaybe<Scalars['Int']['input']>;
  status_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum ChromaticBpStatus_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  BpId = 'bp__id',
  BpInitialEndTimeOfWarmup = 'bp__initialEndTimeOfWarmup',
  BpMaxRaisingTarget = 'bp__maxRaisingTarget',
  BpMinRaisingTarget = 'bp__minRaisingTarget',
  BpStartTimeOfWarmup = 'bp__startTimeOfWarmup',
  BpTotalReward = 'bp__totalReward',
  CurrentPeriod = 'currentPeriod',
  EndTimeOfLockup = 'endTimeOfLockup',
  EndTimeOfWarmup = 'endTimeOfWarmup',
  Id = 'id',
  Status = 'status'
}

export type ChromaticBpTotalRaised = {
  __typename?: 'ChromaticBPTotalRaised';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bp: ChromaticBp;
  id: Scalars['ID']['output'];
};

export type ChromaticBpTotalRaised_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ChromaticBpTotalRaised_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bp?: InputMaybe<Scalars['String']['input']>;
  bp_?: InputMaybe<ChromaticBp_Filter>;
  bp_contains?: InputMaybe<Scalars['String']['input']>;
  bp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_gt?: InputMaybe<Scalars['String']['input']>;
  bp_gte?: InputMaybe<Scalars['String']['input']>;
  bp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_lt?: InputMaybe<Scalars['String']['input']>;
  bp_lte?: InputMaybe<Scalars['String']['input']>;
  bp_not?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains?: InputMaybe<Scalars['String']['input']>;
  bp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with?: InputMaybe<Scalars['String']['input']>;
  bp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticBpTotalRaised_Filter>>>;
};

export enum ChromaticBpTotalRaised_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Bp = 'bp',
  BpId = 'bp__id',
  BpInitialEndTimeOfWarmup = 'bp__initialEndTimeOfWarmup',
  BpMaxRaisingTarget = 'bp__maxRaisingTarget',
  BpMinRaisingTarget = 'bp__minRaisingTarget',
  BpStartTimeOfWarmup = 'bp__startTimeOfWarmup',
  BpTotalReward = 'bp__totalReward',
  Id = 'id'
}

export type ChromaticBp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticBp_Filter>>>;
  claims_?: InputMaybe<ChromaticBpClaim_Filter>;
  deposits_?: InputMaybe<ChromaticBpDeposit_Filter>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  initialEndTimeOfWarmup?: InputMaybe<Scalars['BigInt']['input']>;
  initialEndTimeOfWarmup_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialEndTimeOfWarmup_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialEndTimeOfWarmup_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialEndTimeOfWarmup_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialEndTimeOfWarmup_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialEndTimeOfWarmup_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialEndTimeOfWarmup_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp?: InputMaybe<Scalars['String']['input']>;
  lp_?: InputMaybe<ChromaticLp_Filter>;
  lp_contains?: InputMaybe<Scalars['String']['input']>;
  lp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_ends_with?: InputMaybe<Scalars['String']['input']>;
  lp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_gt?: InputMaybe<Scalars['String']['input']>;
  lp_gte?: InputMaybe<Scalars['String']['input']>;
  lp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lp_lt?: InputMaybe<Scalars['String']['input']>;
  lp_lte?: InputMaybe<Scalars['String']['input']>;
  lp_not?: InputMaybe<Scalars['String']['input']>;
  lp_not_contains?: InputMaybe<Scalars['String']['input']>;
  lp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_starts_with?: InputMaybe<Scalars['String']['input']>;
  lp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maxRaisingTarget?: InputMaybe<Scalars['BigInt']['input']>;
  maxRaisingTarget_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxRaisingTarget_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxRaisingTarget_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxRaisingTarget_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxRaisingTarget_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxRaisingTarget_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxRaisingTarget_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minRaisingTarget?: InputMaybe<Scalars['BigInt']['input']>;
  minRaisingTarget_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minRaisingTarget_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minRaisingTarget_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minRaisingTarget_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minRaisingTarget_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minRaisingTarget_not?: InputMaybe<Scalars['BigInt']['input']>;
  minRaisingTarget_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticBp_Filter>>>;
  refunds_?: InputMaybe<ChromaticBpRefund_Filter>;
  startTimeOfWarmup?: InputMaybe<Scalars['BigInt']['input']>;
  startTimeOfWarmup_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimeOfWarmup_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimeOfWarmup_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTimeOfWarmup_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimeOfWarmup_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimeOfWarmup_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTimeOfWarmup_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  statuses_?: InputMaybe<ChromaticBpStatus_Filter>;
  totalRaised_?: InputMaybe<ChromaticBpTotalRaised_Filter>;
  totalReward?: InputMaybe<Scalars['BigInt']['input']>;
  totalReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ChromaticBp_OrderBy {
  Claims = 'claims',
  Deposits = 'deposits',
  Id = 'id',
  InitialEndTimeOfWarmup = 'initialEndTimeOfWarmup',
  Lp = 'lp',
  LpId = 'lp__id',
  LpLongShortInfo = 'lp__longShortInfo',
  LpLpTokenDecimals = 'lp__lpTokenDecimals',
  LpLpTokenName = 'lp__lpTokenName',
  LpLpTokenSymbol = 'lp__lpTokenSymbol',
  LpMarket = 'lp__market',
  LpOracleDescription = 'lp__oracleDescription',
  LpOracleProvider = 'lp__oracleProvider',
  LpRebalanceBps = 'lp__rebalanceBPS',
  LpRebalanceCheckingInterval = 'lp__rebalanceCheckingInterval',
  LpSettlementToken = 'lp__settlementToken',
  LpSettlementTokenDecimals = 'lp__settlementTokenDecimals',
  LpSettlementTokenSymbol = 'lp__settlementTokenSymbol',
  LpUtilizationTargetBps = 'lp__utilizationTargetBPS',
  MaxRaisingTarget = 'maxRaisingTarget',
  MinRaisingTarget = 'minRaisingTarget',
  Refunds = 'refunds',
  StartTimeOfWarmup = 'startTimeOfWarmup',
  Statuses = 'statuses',
  TotalRaised = 'totalRaised',
  TotalReward = 'totalReward'
}

export type ChromaticLp = {
  __typename?: 'ChromaticLP';
  clbTokenIds: Array<Scalars['BigInt']['output']>;
  configs: Array<ChromaticLpConfig>;
  distributionRates: Array<Scalars['Int']['output']>;
  feeRates: Array<Scalars['Int']['output']>;
  id: Scalars['Bytes']['output'];
  longShortInfo: Scalars['Int']['output'];
  lpTokenDecimals: Scalars['Int']['output'];
  lpTokenName: Scalars['String']['output'];
  lpTokenSymbol: Scalars['String']['output'];
  market: Scalars['Bytes']['output'];
  metas: Array<ChromaticLpMeta>;
  oracleDescription: Scalars['String']['output'];
  oracleProvider: Scalars['Bytes']['output'];
  rebalanceBPS: Scalars['BigInt']['output'];
  rebalanceCheckingInterval: Scalars['BigInt']['output'];
  settlementToken: Scalars['Bytes']['output'];
  settlementTokenDecimals: Scalars['Int']['output'];
  settlementTokenSymbol: Scalars['String']['output'];
  utilizationTargetBPS: Scalars['BigInt']['output'];
};


export type ChromaticLpConfigsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChromaticLpConfig_Filter>;
};


export type ChromaticLpMetasArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChromaticLpMeta_Filter>;
};

export type ChromaticLpConfig = {
  __typename?: 'ChromaticLPConfig';
  automationFeeReserved: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lp: ChromaticLp;
  minHoldingValueToRebalance: Scalars['BigInt']['output'];
};

export type ChromaticLpConfig_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLpConfig_Filter>>>;
  automationFeeReserved?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_gt?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_gte?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  automationFeeReserved_lt?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_lte?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_not?: InputMaybe<Scalars['BigInt']['input']>;
  automationFeeReserved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lp?: InputMaybe<Scalars['String']['input']>;
  lp_?: InputMaybe<ChromaticLp_Filter>;
  lp_contains?: InputMaybe<Scalars['String']['input']>;
  lp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_ends_with?: InputMaybe<Scalars['String']['input']>;
  lp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_gt?: InputMaybe<Scalars['String']['input']>;
  lp_gte?: InputMaybe<Scalars['String']['input']>;
  lp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lp_lt?: InputMaybe<Scalars['String']['input']>;
  lp_lte?: InputMaybe<Scalars['String']['input']>;
  lp_not?: InputMaybe<Scalars['String']['input']>;
  lp_not_contains?: InputMaybe<Scalars['String']['input']>;
  lp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_starts_with?: InputMaybe<Scalars['String']['input']>;
  lp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minHoldingValueToRebalance?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minHoldingValueToRebalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  minHoldingValueToRebalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLpConfig_Filter>>>;
};

export enum ChromaticLpConfig_OrderBy {
  AutomationFeeReserved = 'automationFeeReserved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  LpId = 'lp__id',
  LpLongShortInfo = 'lp__longShortInfo',
  LpLpTokenDecimals = 'lp__lpTokenDecimals',
  LpLpTokenName = 'lp__lpTokenName',
  LpLpTokenSymbol = 'lp__lpTokenSymbol',
  LpMarket = 'lp__market',
  LpOracleDescription = 'lp__oracleDescription',
  LpOracleProvider = 'lp__oracleProvider',
  LpRebalanceBps = 'lp__rebalanceBPS',
  LpRebalanceCheckingInterval = 'lp__rebalanceCheckingInterval',
  LpSettlementToken = 'lp__settlementToken',
  LpSettlementTokenDecimals = 'lp__settlementTokenDecimals',
  LpSettlementTokenSymbol = 'lp__settlementTokenSymbol',
  LpUtilizationTargetBps = 'lp__utilizationTargetBPS',
  MinHoldingValueToRebalance = 'minHoldingValueToRebalance'
}

export type ChromaticLpMeta = {
  __typename?: 'ChromaticLPMeta';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lp: ChromaticLp;
  lpName: Scalars['String']['output'];
  lpTag: Scalars['String']['output'];
};

export type ChromaticLpMeta_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLpMeta_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lp?: InputMaybe<Scalars['String']['input']>;
  lpName?: InputMaybe<Scalars['String']['input']>;
  lpName_contains?: InputMaybe<Scalars['String']['input']>;
  lpName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_gt?: InputMaybe<Scalars['String']['input']>;
  lpName_gte?: InputMaybe<Scalars['String']['input']>;
  lpName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpName_lt?: InputMaybe<Scalars['String']['input']>;
  lpName_lte?: InputMaybe<Scalars['String']['input']>;
  lpName_not?: InputMaybe<Scalars['String']['input']>;
  lpName_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpName_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag?: InputMaybe<Scalars['String']['input']>;
  lpTag_contains?: InputMaybe<Scalars['String']['input']>;
  lpTag_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTag_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_gt?: InputMaybe<Scalars['String']['input']>;
  lpTag_gte?: InputMaybe<Scalars['String']['input']>;
  lpTag_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTag_lt?: InputMaybe<Scalars['String']['input']>;
  lpTag_lte?: InputMaybe<Scalars['String']['input']>;
  lpTag_not?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTag_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTag_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTag_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTag_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_?: InputMaybe<ChromaticLp_Filter>;
  lp_contains?: InputMaybe<Scalars['String']['input']>;
  lp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_ends_with?: InputMaybe<Scalars['String']['input']>;
  lp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_gt?: InputMaybe<Scalars['String']['input']>;
  lp_gte?: InputMaybe<Scalars['String']['input']>;
  lp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lp_lt?: InputMaybe<Scalars['String']['input']>;
  lp_lte?: InputMaybe<Scalars['String']['input']>;
  lp_not?: InputMaybe<Scalars['String']['input']>;
  lp_not_contains?: InputMaybe<Scalars['String']['input']>;
  lp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lp_starts_with?: InputMaybe<Scalars['String']['input']>;
  lp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLpMeta_Filter>>>;
};

export enum ChromaticLpMeta_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  LpName = 'lpName',
  LpTag = 'lpTag',
  LpId = 'lp__id',
  LpLongShortInfo = 'lp__longShortInfo',
  LpLpTokenDecimals = 'lp__lpTokenDecimals',
  LpLpTokenName = 'lp__lpTokenName',
  LpLpTokenSymbol = 'lp__lpTokenSymbol',
  LpMarket = 'lp__market',
  LpOracleDescription = 'lp__oracleDescription',
  LpOracleProvider = 'lp__oracleProvider',
  LpRebalanceBps = 'lp__rebalanceBPS',
  LpRebalanceCheckingInterval = 'lp__rebalanceCheckingInterval',
  LpSettlementToken = 'lp__settlementToken',
  LpSettlementTokenDecimals = 'lp__settlementTokenDecimals',
  LpSettlementTokenSymbol = 'lp__settlementTokenSymbol',
  LpUtilizationTargetBps = 'lp__utilizationTargetBPS'
}

export type ChromaticLpRegistered = {
  __typename?: 'ChromaticLPRegistered';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ChromaticLpRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLpRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLpRegistered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChromaticLpRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  Market = 'market',
  TransactionHash = 'transactionHash'
}

export type ChromaticLpStat = {
  __typename?: 'ChromaticLPStat';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  holdingClbValue: Scalars['BigInt']['output'];
  holdingValue: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lp: Scalars['Bytes']['output'];
  pendingClbValue: Scalars['BigInt']['output'];
  pendingValue: Scalars['BigInt']['output'];
  totalValue: Scalars['BigInt']['output'];
  utilization: Scalars['Int']['output'];
};

export type ChromaticLpStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLpStat_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingClbValue?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingClbValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdingClbValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingValue?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdingValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLpStat_Filter>>>;
  pendingClbValue?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingClbValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  pendingClbValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingValue?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  pendingValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValue?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  utilization?: InputMaybe<Scalars['Int']['input']>;
  utilization_gt?: InputMaybe<Scalars['Int']['input']>;
  utilization_gte?: InputMaybe<Scalars['Int']['input']>;
  utilization_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  utilization_lt?: InputMaybe<Scalars['Int']['input']>;
  utilization_lte?: InputMaybe<Scalars['Int']['input']>;
  utilization_not?: InputMaybe<Scalars['Int']['input']>;
  utilization_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum ChromaticLpStat_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  HoldingClbValue = 'holdingClbValue',
  HoldingValue = 'holdingValue',
  Id = 'id',
  Lp = 'lp',
  PendingClbValue = 'pendingClbValue',
  PendingValue = 'pendingValue',
  TotalValue = 'totalValue',
  Utilization = 'utilization'
}

export type ChromaticLp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLp_Filter>>>;
  clbTokenIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  clbTokenIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  configs_?: InputMaybe<ChromaticLpConfig_Filter>;
  distributionRates?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionRates_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeRates_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  longShortInfo?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_gt?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_gte?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  longShortInfo_lt?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_lte?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_not?: InputMaybe<Scalars['Int']['input']>;
  longShortInfo_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lpTokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lpTokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  lpTokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lpTokenName?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_contains?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_gt?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_gte?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTokenName_lt?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_lte?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTokenName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lpTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  lpTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market?: InputMaybe<Scalars['Bytes']['input']>;
  market_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_gt?: InputMaybe<Scalars['Bytes']['input']>;
  market_gte?: InputMaybe<Scalars['Bytes']['input']>;
  market_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  market_lt?: InputMaybe<Scalars['Bytes']['input']>;
  market_lte?: InputMaybe<Scalars['Bytes']['input']>;
  market_not?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  market_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metas_?: InputMaybe<ChromaticLpMeta_Filter>;
  or?: InputMaybe<Array<InputMaybe<ChromaticLp_Filter>>>;
  oracleDescription?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_contains?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_gt?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_gte?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracleDescription_lt?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_lte?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracleDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracleDescription_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracleProvider?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracleProvider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_not?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracleProvider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  rebalanceBPS?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rebalanceBPS_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_not?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceBPS_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rebalanceCheckingInterval?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rebalanceCheckingInterval_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_not?: InputMaybe<Scalars['BigInt']['input']>;
  rebalanceCheckingInterval_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  settlementToken?: InputMaybe<Scalars['Bytes']['input']>;
  settlementTokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  settlementTokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  settlementTokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  settlementTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  settlementTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  settlementTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  settlementTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  settlementToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  settlementToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  utilizationTargetBPS?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_gt?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_gte?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  utilizationTargetBPS_lt?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_lte?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_not?: InputMaybe<Scalars['BigInt']['input']>;
  utilizationTargetBPS_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ChromaticLp_OrderBy {
  ClbTokenIds = 'clbTokenIds',
  Configs = 'configs',
  DistributionRates = 'distributionRates',
  FeeRates = 'feeRates',
  Id = 'id',
  LongShortInfo = 'longShortInfo',
  LpTokenDecimals = 'lpTokenDecimals',
  LpTokenName = 'lpTokenName',
  LpTokenSymbol = 'lpTokenSymbol',
  Market = 'market',
  Metas = 'metas',
  OracleDescription = 'oracleDescription',
  OracleProvider = 'oracleProvider',
  RebalanceBps = 'rebalanceBPS',
  RebalanceCheckingInterval = 'rebalanceCheckingInterval',
  SettlementToken = 'settlementToken',
  SettlementTokenDecimals = 'settlementTokenDecimals',
  SettlementTokenSymbol = 'settlementTokenSymbol',
  UtilizationTargetBps = 'utilizationTargetBPS'
}

export type LpTokenTotalSupply = {
  __typename?: 'LPTokenTotalSupply';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['Bytes']['output'];
};

export type LpTokenTotalSupply_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<LpTokenTotalSupply_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LpTokenTotalSupply_Filter>>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LpTokenTotalSupply_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Token = 'token'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addLiquidities: Array<AddLiquidity>;
  addLiquidity?: Maybe<AddLiquidity>;
  addLiquiditySettled?: Maybe<AddLiquiditySettled>;
  addLiquiditySettleds: Array<AddLiquiditySettled>;
  bpboostTaskExecuted?: Maybe<BpBoostTaskExecuted>;
  bpboostTaskExecuteds: Array<BpBoostTaskExecuted>;
  bpdeposited?: Maybe<BpDeposited>;
  bpdepositeds: Array<BpDeposited>;
  bpsettleUpdated?: Maybe<BpSettleUpdated>;
  bpsettleUpdateds: Array<BpSettleUpdated>;
  chromaticBP?: Maybe<ChromaticBp>;
  chromaticBPClaim?: Maybe<ChromaticBpClaim>;
  chromaticBPClaims: Array<ChromaticBpClaim>;
  chromaticBPCreated?: Maybe<ChromaticBpCreated>;
  chromaticBPCreateds: Array<ChromaticBpCreated>;
  chromaticBPDeposit?: Maybe<ChromaticBpDeposit>;
  chromaticBPDeposits: Array<ChromaticBpDeposit>;
  chromaticBPRefund?: Maybe<ChromaticBpRefund>;
  chromaticBPRefunds: Array<ChromaticBpRefund>;
  chromaticBPStatus?: Maybe<ChromaticBpStatus>;
  chromaticBPStatuses: Array<ChromaticBpStatus>;
  chromaticBPTotalRaised?: Maybe<ChromaticBpTotalRaised>;
  chromaticBPTotalRaiseds: Array<ChromaticBpTotalRaised>;
  chromaticBPs: Array<ChromaticBp>;
  chromaticLP?: Maybe<ChromaticLp>;
  chromaticLPConfig?: Maybe<ChromaticLpConfig>;
  chromaticLPConfigs: Array<ChromaticLpConfig>;
  chromaticLPMeta?: Maybe<ChromaticLpMeta>;
  chromaticLPMetas: Array<ChromaticLpMeta>;
  chromaticLPRegistered?: Maybe<ChromaticLpRegistered>;
  chromaticLPRegistereds: Array<ChromaticLpRegistered>;
  chromaticLPStat?: Maybe<ChromaticLpStat>;
  chromaticLPStats: Array<ChromaticLpStat>;
  chromaticLPs: Array<ChromaticLp>;
  lptokenTotalSupplies: Array<LpTokenTotalSupply>;
  lptokenTotalSupply?: Maybe<LpTokenTotalSupply>;
  rebalanceAddLiquidities: Array<RebalanceAddLiquidity>;
  rebalanceAddLiquidity?: Maybe<RebalanceAddLiquidity>;
  rebalanceRemoveLiquidities: Array<RebalanceRemoveLiquidity>;
  rebalanceRemoveLiquidity?: Maybe<RebalanceRemoveLiquidity>;
  rebalanceSettled?: Maybe<RebalanceSettled>;
  rebalanceSettleds: Array<RebalanceSettled>;
  removeLiquidities: Array<RemoveLiquidity>;
  removeLiquidity?: Maybe<RemoveLiquidity>;
  removeLiquiditySettled?: Maybe<RemoveLiquiditySettled>;
  removeLiquiditySettleds: Array<RemoveLiquiditySettled>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAddLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddLiquidity_Filter>;
};


export type QueryAddLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddLiquiditySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddLiquiditySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddLiquiditySettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddLiquiditySettled_Filter>;
};


export type QueryBpboostTaskExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBpboostTaskExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpBoostTaskExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpBoostTaskExecuted_Filter>;
};


export type QueryBpdepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBpdepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpDeposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpDeposited_Filter>;
};


export type QueryBpsettleUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBpsettleUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpSettleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpSettleUpdated_Filter>;
};


export type QueryChromaticBpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticBpClaimArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticBpClaimsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpClaim_Filter>;
};


export type QueryChromaticBpCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticBpCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpCreated_Filter>;
};


export type QueryChromaticBpDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticBpDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpDeposit_Filter>;
};


export type QueryChromaticBpRefundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticBpRefundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpRefund_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpRefund_Filter>;
};


export type QueryChromaticBpStatusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticBpStatusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpStatus_Filter>;
};


export type QueryChromaticBpTotalRaisedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticBpTotalRaisedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpTotalRaised_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpTotalRaised_Filter>;
};


export type QueryChromaticBPsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBp_Filter>;
};


export type QueryChromaticLpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpConfig_Filter>;
};


export type QueryChromaticLpMetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpMetasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpMeta_Filter>;
};


export type QueryChromaticLpRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpRegistered_Filter>;
};


export type QueryChromaticLpStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticLpStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpStat_Filter>;
};


export type QueryChromaticLPsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLp_Filter>;
};


export type QueryLptokenTotalSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LpTokenTotalSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LpTokenTotalSupply_Filter>;
};


export type QueryLptokenTotalSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRebalanceAddLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceAddLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceAddLiquidity_Filter>;
};


export type QueryRebalanceAddLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRebalanceRemoveLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceRemoveLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceRemoveLiquidity_Filter>;
};


export type QueryRebalanceRemoveLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRebalanceSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRebalanceSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceSettled_Filter>;
};


export type QueryRemoveLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveLiquidity_Filter>;
};


export type QueryRemoveLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveLiquiditySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRemoveLiquiditySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveLiquiditySettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveLiquiditySettled_Filter>;
};

export type RebalanceAddLiquidity = {
  __typename?: 'RebalanceAddLiquidity';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  currentUtility: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  oracleVersion: Scalars['BigInt']['output'];
  receiptId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RebalanceAddLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RebalanceAddLiquidity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentUtility?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentUtility_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RebalanceAddLiquidity_Filter>>>;
  oracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RebalanceAddLiquidity_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CurrentUtility = 'currentUtility',
  Id = 'id',
  Lp = 'lp',
  OracleVersion = 'oracleVersion',
  ReceiptId = 'receiptId',
  TransactionHash = 'transactionHash'
}

export type RebalanceRemoveLiquidity = {
  __typename?: 'RebalanceRemoveLiquidity';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  currentUtility: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  oracleVersion: Scalars['BigInt']['output'];
  receiptId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RebalanceRemoveLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RebalanceRemoveLiquidity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentUtility?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentUtility_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentUtility_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RebalanceRemoveLiquidity_Filter>>>;
  oracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RebalanceRemoveLiquidity_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CurrentUtility = 'currentUtility',
  Id = 'id',
  Lp = 'lp',
  OracleVersion = 'oracleVersion',
  ReceiptId = 'receiptId',
  TransactionHash = 'transactionHash'
}

export type RebalanceSettled = {
  __typename?: 'RebalanceSettled';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  keeperFee: Scalars['BigInt']['output'];
  lp: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RebalanceSettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RebalanceSettled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeperFee?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  keeperFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RebalanceSettled_Filter>>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RebalanceSettled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  KeeperFee = 'keeperFee',
  Lp = 'lp',
  ReceiptId = 'receiptId',
  TransactionHash = 'transactionHash'
}

export type RemoveLiquidity = {
  __typename?: 'RemoveLiquidity';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lp: Scalars['Bytes']['output'];
  lpTokenAmount: Scalars['BigInt']['output'];
  oracleVersion: Scalars['BigInt']['output'];
  provider: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RemoveLiquiditySettled = {
  __typename?: 'RemoveLiquiditySettled';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  burningAmount: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  keeperFee: Scalars['BigInt']['output'];
  lp: Scalars['Bytes']['output'];
  provider: Scalars['Bytes']['output'];
  receiptId: Scalars['BigInt']['output'];
  recipient: Scalars['Bytes']['output'];
  refundedAmount: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  withdrawnSettlementAmount: Scalars['BigInt']['output'];
};

export type RemoveLiquiditySettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveLiquiditySettled_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burningAmount?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burningAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  burningAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  keeperFee?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  keeperFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  keeperFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveLiquiditySettled_Filter>>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  refundedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  refundedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  refundedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  withdrawnSettlementAmount?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawnSettlementAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnSettlementAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum RemoveLiquiditySettled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  BurningAmount = 'burningAmount',
  Id = 'id',
  KeeperFee = 'keeperFee',
  Lp = 'lp',
  Provider = 'provider',
  ReceiptId = 'receiptId',
  Recipient = 'recipient',
  RefundedAmount = 'refundedAmount',
  TransactionHash = 'transactionHash',
  WithdrawnSettlementAmount = 'withdrawnSettlementAmount'
}

export type RemoveLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RemoveLiquidity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp?: InputMaybe<Scalars['Bytes']['input']>;
  lpTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RemoveLiquidity_Filter>>>;
  oracleVersion?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  provider?: InputMaybe<Scalars['Bytes']['input']>;
  provider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  provider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  provider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiptId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RemoveLiquidity_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Lp = 'lp',
  LpTokenAmount = 'lpTokenAmount',
  OracleVersion = 'oracleVersion',
  Provider = 'provider',
  ReceiptId = 'receiptId',
  Recipient = 'recipient',
  TransactionHash = 'transactionHash'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  addLiquidities: Array<AddLiquidity>;
  addLiquidity?: Maybe<AddLiquidity>;
  addLiquiditySettled?: Maybe<AddLiquiditySettled>;
  addLiquiditySettleds: Array<AddLiquiditySettled>;
  bpboostTaskExecuted?: Maybe<BpBoostTaskExecuted>;
  bpboostTaskExecuteds: Array<BpBoostTaskExecuted>;
  bpdeposited?: Maybe<BpDeposited>;
  bpdepositeds: Array<BpDeposited>;
  bpsettleUpdated?: Maybe<BpSettleUpdated>;
  bpsettleUpdateds: Array<BpSettleUpdated>;
  chromaticBP?: Maybe<ChromaticBp>;
  chromaticBPClaim?: Maybe<ChromaticBpClaim>;
  chromaticBPClaims: Array<ChromaticBpClaim>;
  chromaticBPCreated?: Maybe<ChromaticBpCreated>;
  chromaticBPCreateds: Array<ChromaticBpCreated>;
  chromaticBPDeposit?: Maybe<ChromaticBpDeposit>;
  chromaticBPDeposits: Array<ChromaticBpDeposit>;
  chromaticBPRefund?: Maybe<ChromaticBpRefund>;
  chromaticBPRefunds: Array<ChromaticBpRefund>;
  chromaticBPStatus?: Maybe<ChromaticBpStatus>;
  chromaticBPStatuses: Array<ChromaticBpStatus>;
  chromaticBPTotalRaised?: Maybe<ChromaticBpTotalRaised>;
  chromaticBPTotalRaiseds: Array<ChromaticBpTotalRaised>;
  chromaticBPs: Array<ChromaticBp>;
  chromaticLP?: Maybe<ChromaticLp>;
  chromaticLPConfig?: Maybe<ChromaticLpConfig>;
  chromaticLPConfigs: Array<ChromaticLpConfig>;
  chromaticLPMeta?: Maybe<ChromaticLpMeta>;
  chromaticLPMetas: Array<ChromaticLpMeta>;
  chromaticLPRegistered?: Maybe<ChromaticLpRegistered>;
  chromaticLPRegistereds: Array<ChromaticLpRegistered>;
  chromaticLPStat?: Maybe<ChromaticLpStat>;
  chromaticLPStats: Array<ChromaticLpStat>;
  chromaticLPs: Array<ChromaticLp>;
  lptokenTotalSupplies: Array<LpTokenTotalSupply>;
  lptokenTotalSupply?: Maybe<LpTokenTotalSupply>;
  rebalanceAddLiquidities: Array<RebalanceAddLiquidity>;
  rebalanceAddLiquidity?: Maybe<RebalanceAddLiquidity>;
  rebalanceRemoveLiquidities: Array<RebalanceRemoveLiquidity>;
  rebalanceRemoveLiquidity?: Maybe<RebalanceRemoveLiquidity>;
  rebalanceSettled?: Maybe<RebalanceSettled>;
  rebalanceSettleds: Array<RebalanceSettled>;
  removeLiquidities: Array<RemoveLiquidity>;
  removeLiquidity?: Maybe<RemoveLiquidity>;
  removeLiquiditySettled?: Maybe<RemoveLiquiditySettled>;
  removeLiquiditySettleds: Array<RemoveLiquiditySettled>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAddLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddLiquidity_Filter>;
};


export type SubscriptionAddLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddLiquiditySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddLiquiditySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddLiquiditySettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddLiquiditySettled_Filter>;
};


export type SubscriptionBpboostTaskExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBpboostTaskExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpBoostTaskExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpBoostTaskExecuted_Filter>;
};


export type SubscriptionBpdepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBpdepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpDeposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpDeposited_Filter>;
};


export type SubscriptionBpsettleUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBpsettleUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BpSettleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BpSettleUpdated_Filter>;
};


export type SubscriptionChromaticBpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticBpClaimArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticBpClaimsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpClaim_Filter>;
};


export type SubscriptionChromaticBpCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticBpCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpCreated_Filter>;
};


export type SubscriptionChromaticBpDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticBpDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpDeposit_Filter>;
};


export type SubscriptionChromaticBpRefundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticBpRefundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpRefund_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpRefund_Filter>;
};


export type SubscriptionChromaticBpStatusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticBpStatusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpStatus_Filter>;
};


export type SubscriptionChromaticBpTotalRaisedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticBpTotalRaisedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBpTotalRaised_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBpTotalRaised_Filter>;
};


export type SubscriptionChromaticBPsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticBp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticBp_Filter>;
};


export type SubscriptionChromaticLpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpConfig_Filter>;
};


export type SubscriptionChromaticLpMetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpMetasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpMeta_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpMeta_Filter>;
};


export type SubscriptionChromaticLpRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpRegistered_Filter>;
};


export type SubscriptionChromaticLpStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticLpStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLpStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLpStat_Filter>;
};


export type SubscriptionChromaticLPsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLp_Filter>;
};


export type SubscriptionLptokenTotalSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LpTokenTotalSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LpTokenTotalSupply_Filter>;
};


export type SubscriptionLptokenTotalSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRebalanceAddLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceAddLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceAddLiquidity_Filter>;
};


export type SubscriptionRebalanceAddLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRebalanceRemoveLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceRemoveLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceRemoveLiquidity_Filter>;
};


export type SubscriptionRebalanceRemoveLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRebalanceSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRebalanceSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RebalanceSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RebalanceSettled_Filter>;
};


export type SubscriptionRemoveLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveLiquidity_Filter>;
};


export type SubscriptionRemoveLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveLiquiditySettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRemoveLiquiditySettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RemoveLiquiditySettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RemoveLiquiditySettled_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AddLiquiditiesQueryVariables = Exact<{
  count: Scalars['Int']['input'];
  orderBy: AddLiquidity_OrderBy;
  orderDirection: OrderDirection;
  walletAddress: Scalars['Bytes']['input'];
  lpAddress: Scalars['Bytes']['input'];
  toBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type AddLiquiditiesQuery = { __typename?: 'Query', addLiquidities: Array<{ __typename?: 'AddLiquidity', id: `0x${string}`, lp: `0x${string}`, receiptId: string, provider: `0x${string}`, recipient: `0x${string}`, oracleVersion: string, amount: string, blockNumber: string, blockTimestamp: string, transactionHash: `0x${string}` }> };

export type AddLiquiditySettledsQueryVariables = Exact<{
  fromId: Scalars['BigInt']['input'];
  endId: Scalars['BigInt']['input'];
  lpAddress: Scalars['Bytes']['input'];
}>;


export type AddLiquiditySettledsQuery = { __typename?: 'Query', addLiquiditySettleds: Array<{ __typename?: 'AddLiquiditySettled', id: `0x${string}`, lp: `0x${string}`, receiptId: string, settlementAdded: string, lpTokenAmount: string, blockNumber: string, blockTimestamp: string, transactionHash: `0x${string}` }> };

export type RemoveLiquiditiesQueryVariables = Exact<{
  count: Scalars['Int']['input'];
  orderBy: RemoveLiquidity_OrderBy;
  orderDirection: OrderDirection;
  walletAddress: Scalars['Bytes']['input'];
  lpAddress: Scalars['Bytes']['input'];
  toBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type RemoveLiquiditiesQuery = { __typename?: 'Query', removeLiquidities: Array<{ __typename?: 'RemoveLiquidity', id: `0x${string}`, lp: `0x${string}`, receiptId: string, recipient: `0x${string}`, oracleVersion: string, lpTokenAmount: string, blockNumber: string, blockTimestamp: string, transactionHash: `0x${string}` }> };

export type RemoveLiquiditySettledsQueryVariables = Exact<{
  fromId: Scalars['BigInt']['input'];
  endId: Scalars['BigInt']['input'];
  lpAddress: Scalars['Bytes']['input'];
}>;


export type RemoveLiquiditySettledsQuery = { __typename?: 'Query', removeLiquiditySettleds: Array<{ __typename?: 'RemoveLiquiditySettled', id: `0x${string}`, lp: `0x${string}`, receiptId: string, burningAmount: string, withdrawnSettlementAmount: string, refundedAmount: string, blockNumber: string, blockTimestamp: string, transactionHash: `0x${string}` }> };

export type AddLiquidityCountQueryVariables = Exact<{
  walletAddress: Scalars['Bytes']['input'];
  lpAddress: Scalars['Bytes']['input'];
}>;


export type AddLiquidityCountQuery = { __typename?: 'Query', addLiquidities: Array<{ __typename?: 'AddLiquidity', id: `0x${string}`, lp: `0x${string}`, receiptId: string, recipient: `0x${string}`, provider: `0x${string}` }> };

export type AddLiquiditySettledCountQueryVariables = Exact<{
  walletAddress: Scalars['Bytes']['input'];
  lpAddress: Scalars['Bytes']['input'];
}>;


export type AddLiquiditySettledCountQuery = { __typename?: 'Query', addLiquiditySettleds: Array<{ __typename?: 'AddLiquiditySettled', id: `0x${string}`, lp: `0x${string}`, receiptId: string, recipient: `0x${string}`, provider: `0x${string}` }> };

export type RemoveLiquidityCountQueryVariables = Exact<{
  walletAddress: Scalars['Bytes']['input'];
  lpAddress: Scalars['Bytes']['input'];
}>;


export type RemoveLiquidityCountQuery = { __typename?: 'Query', removeLiquidities: Array<{ __typename?: 'RemoveLiquidity', id: `0x${string}`, lp: `0x${string}`, receiptId: string, recipient: `0x${string}`, provider: `0x${string}` }> };

export type RemoveLiquiditySettledCountQueryVariables = Exact<{
  walletAddress: Scalars['Bytes']['input'];
  lpAddress: Scalars['Bytes']['input'];
}>;


export type RemoveLiquiditySettledCountQuery = { __typename?: 'Query', removeLiquiditySettleds: Array<{ __typename?: 'RemoveLiquiditySettled', id: `0x${string}`, lp: `0x${string}`, receiptId: string, recipient: `0x${string}`, provider: `0x${string}` }> };


export const AddLiquiditiesDocument = gql`
    query AddLiquidities($count: Int!, $orderBy: AddLiquidity_orderBy!, $orderDirection: OrderDirection!, $walletAddress: Bytes!, $lpAddress: Bytes!, $toBlockTimestamp: BigInt) {
  addLiquidities(
    orderDirection: $orderDirection
    orderBy: $orderBy
    where: {lp: $lpAddress, recipient: $walletAddress, blockTimestamp_lt: $toBlockTimestamp}
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
export const AddLiquiditySettledsDocument = gql`
    query AddLiquiditySettleds($fromId: BigInt!, $endId: BigInt!, $lpAddress: Bytes!) {
  addLiquiditySettleds(
    where: {receiptId_gte: $fromId, receiptId_lte: $endId, lp: $lpAddress}
  ) {
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
export const RemoveLiquiditiesDocument = gql`
    query RemoveLiquidities($count: Int!, $orderBy: RemoveLiquidity_orderBy!, $orderDirection: OrderDirection!, $walletAddress: Bytes!, $lpAddress: Bytes!, $toBlockTimestamp: BigInt) {
  removeLiquidities(
    orderDirection: $orderDirection
    orderBy: $orderBy
    where: {lp: $lpAddress, recipient: $walletAddress, blockTimestamp_lt: $toBlockTimestamp}
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
export const RemoveLiquiditySettledsDocument = gql`
    query RemoveLiquiditySettleds($fromId: BigInt!, $endId: BigInt!, $lpAddress: Bytes!) {
  removeLiquiditySettleds(
    where: {receiptId_gte: $fromId, receiptId_lte: $endId, lp: $lpAddress}
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
export const AddLiquidityCountDocument = gql`
    query AddLiquidityCount($walletAddress: Bytes!, $lpAddress: Bytes!) {
  addLiquidities(where: {lp: $lpAddress, recipient: $walletAddress}) {
    id
    lp
    receiptId
    recipient
    provider
  }
}
    `;
export const AddLiquiditySettledCountDocument = gql`
    query AddLiquiditySettledCount($walletAddress: Bytes!, $lpAddress: Bytes!) {
  addLiquiditySettleds(where: {lp: $lpAddress, recipient: $walletAddress}) {
    id
    lp
    receiptId
    recipient
    provider
  }
}
    `;
export const RemoveLiquidityCountDocument = gql`
    query RemoveLiquidityCount($walletAddress: Bytes!, $lpAddress: Bytes!) {
  removeLiquidities(where: {lp: $lpAddress, recipient: $walletAddress}) {
    id
    lp
    receiptId
    recipient
    provider
  }
}
    `;
export const RemoveLiquiditySettledCountDocument = gql`
    query RemoveLiquiditySettledCount($walletAddress: Bytes!, $lpAddress: Bytes!) {
  removeLiquiditySettleds(where: {lp: $lpAddress, recipient: $walletAddress}) {
    id
    lp
    receiptId
    recipient
    provider
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AddLiquidities(variables: AddLiquiditiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddLiquiditiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddLiquiditiesQuery>(AddLiquiditiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddLiquidities', 'query', variables);
    },
    AddLiquiditySettleds(variables: AddLiquiditySettledsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddLiquiditySettledsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddLiquiditySettledsQuery>(AddLiquiditySettledsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddLiquiditySettleds', 'query', variables);
    },
    RemoveLiquidities(variables: RemoveLiquiditiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveLiquiditiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveLiquiditiesQuery>(RemoveLiquiditiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveLiquidities', 'query', variables);
    },
    RemoveLiquiditySettleds(variables: RemoveLiquiditySettledsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveLiquiditySettledsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveLiquiditySettledsQuery>(RemoveLiquiditySettledsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveLiquiditySettleds', 'query', variables);
    },
    AddLiquidityCount(variables: AddLiquidityCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddLiquidityCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddLiquidityCountQuery>(AddLiquidityCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddLiquidityCount', 'query', variables);
    },
    AddLiquiditySettledCount(variables: AddLiquiditySettledCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddLiquiditySettledCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddLiquiditySettledCountQuery>(AddLiquiditySettledCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddLiquiditySettledCount', 'query', variables);
    },
    RemoveLiquidityCount(variables: RemoveLiquidityCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveLiquidityCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveLiquidityCountQuery>(RemoveLiquidityCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveLiquidityCount', 'query', variables);
    },
    RemoveLiquiditySettledCount(variables: RemoveLiquiditySettledCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveLiquiditySettledCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveLiquiditySettledCountQuery>(RemoveLiquiditySettledCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveLiquiditySettledCount', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;