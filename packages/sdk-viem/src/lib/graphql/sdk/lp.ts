import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
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

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

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

export type ChromaticLp = {
  __typename?: 'ChromaticLP';
  id: Scalars['Bytes']['output'];
  longShortInfo: Scalars['Int']['output'];
  lpName: Scalars['String']['output'];
  market: Scalars['Bytes']['output'];
  oracleDescription: Scalars['String']['output'];
  oracleProvider: Scalars['Bytes']['output'];
  settlementToken: Scalars['Bytes']['output'];
  settlementTokenDecimals: Scalars['Int']['output'];
  settlementTokenSymbol: Scalars['String']['output'];
};

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

export type ChromaticLp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticLp_Filter>>>;
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
};

export enum ChromaticLp_OrderBy {
  Id = 'id',
  LongShortInfo = 'longShortInfo',
  LpName = 'lpName',
  Market = 'market',
  OracleDescription = 'oracleDescription',
  OracleProvider = 'oracleProvider',
  SettlementToken = 'settlementToken',
  SettlementTokenDecimals = 'settlementTokenDecimals',
  SettlementTokenSymbol = 'settlementTokenSymbol'
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
  chromaticBPCreated?: Maybe<ChromaticBpCreated>;
  chromaticBPCreateds: Array<ChromaticBpCreated>;
  chromaticLP?: Maybe<ChromaticLp>;
  chromaticLPRegistered?: Maybe<ChromaticLpRegistered>;
  chromaticLPRegistereds: Array<ChromaticLpRegistered>;
  chromaticLPs: Array<ChromaticLp>;
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


export type QueryChromaticLpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
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


export type QueryChromaticLPsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLp_Filter>;
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
  chromaticBPCreated?: Maybe<ChromaticBpCreated>;
  chromaticBPCreateds: Array<ChromaticBpCreated>;
  chromaticLP?: Maybe<ChromaticLp>;
  chromaticLPRegistered?: Maybe<ChromaticLpRegistered>;
  chromaticLPRegistereds: Array<ChromaticLpRegistered>;
  chromaticLPs: Array<ChromaticLp>;
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


export type SubscriptionChromaticLpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
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


export type SubscriptionChromaticLPsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticLp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticLp_Filter>;
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

export type GetChromaticLpQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetChromaticLpQuery = { __typename?: 'Query', chromaticLP?: { __typename?: 'ChromaticLP', id: `0x${string}`, longShortInfo: number, lpName: string, market: `0x${string}`, oracleDescription: string, oracleProvider: `0x${string}`, settlementToken: `0x${string}`, settlementTokenDecimals: number, settlementTokenSymbol: string } | null };


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
export const GetChromaticLpDocument = gql`
    query GetChromaticLp($id: ID!) {
  chromaticLP(id: $id) {
    id
    longShortInfo
    lpName
    market
    oracleDescription
    oracleProvider
    settlementToken
    settlementTokenDecimals
    settlementTokenSymbol
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
    },
    GetChromaticLp(variables: GetChromaticLpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetChromaticLpQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetChromaticLpQuery>(GetChromaticLpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetChromaticLp', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;