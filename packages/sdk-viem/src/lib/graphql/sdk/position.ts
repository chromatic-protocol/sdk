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

export type AccountCreated = {
  __typename?: 'AccountCreated';
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AccountCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountCreated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AccountCreated_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum AccountCreated_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Owner = 'owner',
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

export type ClbToken = {
  __typename?: 'CLBToken';
  decimals: Scalars['Int']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
};

export type ClbTokenTotalSupply = {
  __typename?: 'CLBTokenTotalSupply';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
};

export type ClbTokenTotalSupply_Filter = {
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
  and?: InputMaybe<Array<InputMaybe<ClbTokenTotalSupply_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<ClbTokenTotalSupply_Filter>>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum ClbTokenTotalSupply_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Token = 'token',
  TokenId = 'tokenId'
}

export type ClbToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClbToken_Filter>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<ClbToken_Filter>>>;
};

export enum ClbToken_OrderBy {
  Decimals = 'decimals',
  Id = 'id',
  Market = 'market'
}

export type ChromaticMarket = {
  __typename?: 'ChromaticMarket';
  id: Scalars['Bytes']['output'];
  oracleDescription: Scalars['String']['output'];
  oracleProvider: Scalars['Bytes']['output'];
  settlementToken: Scalars['Bytes']['output'];
  settlementTokenDecimals: Scalars['Int']['output'];
  settlementTokenSymbol: Scalars['String']['output'];
};

export type ChromaticMarketBinStatus = {
  __typename?: 'ChromaticMarketBinStatus';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  longBinValue: Scalars['BigInt']['output'];
  longFreeLiquidity: Scalars['BigInt']['output'];
  longLiquidity: Scalars['BigInt']['output'];
  market: Scalars['Bytes']['output'];
  shortBinValue: Scalars['BigInt']['output'];
  shortFreeLiquidity: Scalars['BigInt']['output'];
  shortLiquidity: Scalars['BigInt']['output'];
  statuses: Array<LiquidityBinStatus>;
};


export type ChromaticMarketBinStatusStatusesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityBinStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LiquidityBinStatus_Filter>;
};

export type ChromaticMarketBinStatus_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticMarketBinStatus_Filter>>>;
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
  longBinValue?: InputMaybe<Scalars['BigInt']['input']>;
  longBinValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longBinValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longBinValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longBinValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longBinValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longBinValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  longBinValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longFreeLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  longFreeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longFreeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longFreeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longFreeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longFreeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longFreeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  longFreeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  longLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  longLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  longLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  longLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  longLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  longLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  longLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<ChromaticMarketBinStatus_Filter>>>;
  shortBinValue?: InputMaybe<Scalars['BigInt']['input']>;
  shortBinValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortBinValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortBinValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortBinValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortBinValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortBinValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortBinValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortFreeLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  shortFreeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortFreeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortFreeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortFreeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortFreeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortFreeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortFreeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  shortLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shortLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shortLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shortLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shortLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shortLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  shortLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  statuses_?: InputMaybe<LiquidityBinStatus_Filter>;
};

export enum ChromaticMarketBinStatus_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  LongBinValue = 'longBinValue',
  LongFreeLiquidity = 'longFreeLiquidity',
  LongLiquidity = 'longLiquidity',
  Market = 'market',
  ShortBinValue = 'shortBinValue',
  ShortFreeLiquidity = 'shortFreeLiquidity',
  ShortLiquidity = 'shortLiquidity',
  Statuses = 'statuses'
}

export type ChromaticMarket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChromaticMarket_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<ChromaticMarket_Filter>>>;
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

export enum ChromaticMarket_OrderBy {
  Id = 'id',
  OracleDescription = 'oracleDescription',
  OracleProvider = 'oracleProvider',
  SettlementToken = 'settlementToken',
  SettlementTokenDecimals = 'settlementTokenDecimals',
  SettlementTokenSymbol = 'settlementTokenSymbol'
}

export type ClaimedPosition = {
  __typename?: 'ClaimedPosition';
  blockTimestamp: Scalars['BigInt']['output'];
  cause: Scalars['String']['output'];
  entryPrice: Scalars['BigInt']['output'];
  exitPrice: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  interest: Scalars['BigInt']['output'];
  position: Position;
  realizedPnl: Scalars['BigInt']['output'];
};

export type ClaimedPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimedPosition_Filter>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cause?: InputMaybe<Scalars['String']['input']>;
  cause_contains?: InputMaybe<Scalars['String']['input']>;
  cause_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cause_ends_with?: InputMaybe<Scalars['String']['input']>;
  cause_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cause_gt?: InputMaybe<Scalars['String']['input']>;
  cause_gte?: InputMaybe<Scalars['String']['input']>;
  cause_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cause_lt?: InputMaybe<Scalars['String']['input']>;
  cause_lte?: InputMaybe<Scalars['String']['input']>;
  cause_not?: InputMaybe<Scalars['String']['input']>;
  cause_not_contains?: InputMaybe<Scalars['String']['input']>;
  cause_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cause_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cause_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cause_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cause_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cause_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cause_starts_with?: InputMaybe<Scalars['String']['input']>;
  cause_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  entryPrice?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitPrice?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  interest?: InputMaybe<Scalars['BigInt']['input']>;
  interest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interest_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interest_not?: InputMaybe<Scalars['BigInt']['input']>;
  interest_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ClaimedPosition_Filter>>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<Position_Filter>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  realizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ClaimedPosition_OrderBy {
  BlockTimestamp = 'blockTimestamp',
  Cause = 'cause',
  EntryPrice = 'entryPrice',
  ExitPrice = 'exitPrice',
  Id = 'id',
  Interest = 'interest',
  Position = 'position',
  PositionAccount = 'position__account',
  PositionId = 'position__id',
  PositionMakerMargin = 'position__makerMargin',
  PositionMarketAddress = 'position__marketAddress',
  PositionOpenTimestamp = 'position__openTimestamp',
  PositionOpenVersion = 'position__openVersion',
  PositionPositionId = 'position__positionId',
  PositionQty = 'position__qty',
  PositionTakerMargin = 'position__takerMargin',
  PositionTradingFee = 'position__tradingFee',
  RealizedPnl = 'realizedPnl'
}

export type ClosedPosition = {
  __typename?: 'ClosedPosition';
  closeTimestamp: Scalars['BigInt']['output'];
  closeVersion: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  position: Position;
};

export type ClosedPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClosedPosition_Filter>>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeVersion?: InputMaybe<Scalars['BigInt']['input']>;
  closeVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ClosedPosition_Filter>>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<Position_Filter>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ClosedPosition_OrderBy {
  CloseTimestamp = 'closeTimestamp',
  CloseVersion = 'closeVersion',
  Id = 'id',
  Position = 'position',
  PositionAccount = 'position__account',
  PositionId = 'position__id',
  PositionMakerMargin = 'position__makerMargin',
  PositionMarketAddress = 'position__marketAddress',
  PositionOpenTimestamp = 'position__openTimestamp',
  PositionOpenVersion = 'position__openVersion',
  PositionPositionId = 'position__positionId',
  PositionQty = 'position__qty',
  PositionTakerMargin = 'position__takerMargin',
  PositionTradingFee = 'position__tradingFee'
}

export type InterestRate = {
  __typename?: 'InterestRate';
  _parent: InterestRatesSnapshot;
  annualRateBPS: Scalars['BigInt']['output'];
  beginTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
};

export type InterestRate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _parent?: InputMaybe<Scalars['String']['input']>;
  _parent_?: InputMaybe<InterestRatesSnapshot_Filter>;
  _parent_contains?: InputMaybe<Scalars['String']['input']>;
  _parent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_ends_with?: InputMaybe<Scalars['String']['input']>;
  _parent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_gt?: InputMaybe<Scalars['String']['input']>;
  _parent_gte?: InputMaybe<Scalars['String']['input']>;
  _parent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _parent_lt?: InputMaybe<Scalars['String']['input']>;
  _parent_lte?: InputMaybe<Scalars['String']['input']>;
  _parent_not?: InputMaybe<Scalars['String']['input']>;
  _parent_not_contains?: InputMaybe<Scalars['String']['input']>;
  _parent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  _parent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _parent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  _parent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_starts_with?: InputMaybe<Scalars['String']['input']>;
  _parent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<InterestRate_Filter>>>;
  annualRateBPS?: InputMaybe<Scalars['BigInt']['input']>;
  annualRateBPS_gt?: InputMaybe<Scalars['BigInt']['input']>;
  annualRateBPS_gte?: InputMaybe<Scalars['BigInt']['input']>;
  annualRateBPS_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  annualRateBPS_lt?: InputMaybe<Scalars['BigInt']['input']>;
  annualRateBPS_lte?: InputMaybe<Scalars['BigInt']['input']>;
  annualRateBPS_not?: InputMaybe<Scalars['BigInt']['input']>;
  annualRateBPS_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  beginTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  beginTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  beginTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  beginTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  beginTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  beginTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  beginTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  beginTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<InterestRate_Filter>>>;
};

export enum InterestRate_OrderBy {
  Parent = '_parent',
  ParentBlockNumber = '_parent__blockNumber',
  ParentBlockTimestamp = '_parent__blockTimestamp',
  ParentId = '_parent__id',
  ParentSettlementToken = '_parent__settlementToken',
  AnnualRateBps = 'annualRateBPS',
  BeginTimestamp = 'beginTimestamp',
  Id = 'id'
}

export type InterestRatesSnapshot = {
  __typename?: 'InterestRatesSnapshot';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  rates: Array<InterestRate>;
  settlementToken: Scalars['Bytes']['output'];
};


export type InterestRatesSnapshotRatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InterestRate_Filter>;
};

export type InterestRatesSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InterestRatesSnapshot_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<InterestRatesSnapshot_Filter>>>;
  rates_?: InputMaybe<InterestRate_Filter>;
  settlementToken?: InputMaybe<Scalars['Bytes']['input']>;
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

export enum InterestRatesSnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Rates = 'rates',
  SettlementToken = 'settlementToken'
}

export type LiquidityBinStatus = {
  __typename?: 'LiquidityBinStatus';
  _parent: ChromaticMarketBinStatus;
  binValue: Scalars['BigInt']['output'];
  freeLiquidity: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  tradingFeeRate: Scalars['Int']['output'];
};

export type LiquidityBinStatus_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _parent?: InputMaybe<Scalars['String']['input']>;
  _parent_?: InputMaybe<ChromaticMarketBinStatus_Filter>;
  _parent_contains?: InputMaybe<Scalars['String']['input']>;
  _parent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_ends_with?: InputMaybe<Scalars['String']['input']>;
  _parent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_gt?: InputMaybe<Scalars['String']['input']>;
  _parent_gte?: InputMaybe<Scalars['String']['input']>;
  _parent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _parent_lt?: InputMaybe<Scalars['String']['input']>;
  _parent_lte?: InputMaybe<Scalars['String']['input']>;
  _parent_not?: InputMaybe<Scalars['String']['input']>;
  _parent_not_contains?: InputMaybe<Scalars['String']['input']>;
  _parent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  _parent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _parent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  _parent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  _parent_starts_with?: InputMaybe<Scalars['String']['input']>;
  _parent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<LiquidityBinStatus_Filter>>>;
  binValue?: InputMaybe<Scalars['BigInt']['input']>;
  binValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  binValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  binValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  binValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  binValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  binValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  binValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  freeLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  freeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  freeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  freeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  freeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  freeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  freeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  freeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityBinStatus_Filter>>>;
  tradingFeeRate?: InputMaybe<Scalars['Int']['input']>;
  tradingFeeRate_gt?: InputMaybe<Scalars['Int']['input']>;
  tradingFeeRate_gte?: InputMaybe<Scalars['Int']['input']>;
  tradingFeeRate_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tradingFeeRate_lt?: InputMaybe<Scalars['Int']['input']>;
  tradingFeeRate_lte?: InputMaybe<Scalars['Int']['input']>;
  tradingFeeRate_not?: InputMaybe<Scalars['Int']['input']>;
  tradingFeeRate_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum LiquidityBinStatus_OrderBy {
  Parent = '_parent',
  ParentBlockNumber = '_parent__blockNumber',
  ParentBlockTimestamp = '_parent__blockTimestamp',
  ParentId = '_parent__id',
  ParentLongBinValue = '_parent__longBinValue',
  ParentLongFreeLiquidity = '_parent__longFreeLiquidity',
  ParentLongLiquidity = '_parent__longLiquidity',
  ParentMarket = '_parent__market',
  ParentShortBinValue = '_parent__shortBinValue',
  ParentShortFreeLiquidity = '_parent__shortFreeLiquidity',
  ParentShortLiquidity = '_parent__shortLiquidity',
  BinValue = 'binValue',
  FreeLiquidity = 'freeLiquidity',
  Id = 'id',
  Liquidity = 'liquidity',
  TradingFeeRate = 'tradingFeeRate'
}

export type MarketCreated = {
  __typename?: 'MarketCreated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Scalars['Bytes']['output'];
  oracleProvider: Scalars['Bytes']['output'];
  settlementToken: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MarketCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketCreated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<MarketCreated_Filter>>>;
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
  settlementToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  settlementToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  settlementToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum MarketCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Market = 'market',
  OracleProvider = 'oracleProvider',
  SettlementToken = 'settlementToken',
  TransactionHash = 'transactionHash'
}

export type OpenPosition = {
  __typename?: 'OpenPosition';
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  marketAddress: Scalars['Bytes']['output'];
  trader: Scalars['Bytes']['output'];
  tradingFee: Scalars['BigInt']['output'];
  tradingFeeUSD: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OpenPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OpenPosition_Filter>>>;
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
  marketAddress?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  marketAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OpenPosition_Filter>>>;
  trader?: InputMaybe<Scalars['Bytes']['input']>;
  trader_contains?: InputMaybe<Scalars['Bytes']['input']>;
  trader_gt?: InputMaybe<Scalars['Bytes']['input']>;
  trader_gte?: InputMaybe<Scalars['Bytes']['input']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  trader_lt?: InputMaybe<Scalars['Bytes']['input']>;
  trader_lte?: InputMaybe<Scalars['Bytes']['input']>;
  trader_not?: InputMaybe<Scalars['Bytes']['input']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tradingFee?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeUSD?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeeUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum OpenPosition_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MarketAddress = 'marketAddress',
  Trader = 'trader',
  TradingFee = 'tradingFee',
  TradingFeeUsd = 'tradingFeeUSD',
  TransactionHash = 'transactionHash'
}

export type OracleProviderProperty = {
  __typename?: 'OracleProviderProperty';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  leverageLevel: Scalars['Int']['output'];
  maxTakeProfitBPS: Scalars['BigInt']['output'];
  minTakeProfitBPS: Scalars['BigInt']['output'];
  oracleProvider: Scalars['Bytes']['output'];
};

export type OracleProviderProperty_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleProviderProperty_Filter>>>;
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
  leverageLevel?: InputMaybe<Scalars['Int']['input']>;
  leverageLevel_gt?: InputMaybe<Scalars['Int']['input']>;
  leverageLevel_gte?: InputMaybe<Scalars['Int']['input']>;
  leverageLevel_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  leverageLevel_lt?: InputMaybe<Scalars['Int']['input']>;
  leverageLevel_lte?: InputMaybe<Scalars['Int']['input']>;
  leverageLevel_not?: InputMaybe<Scalars['Int']['input']>;
  leverageLevel_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxTakeProfitBPS?: InputMaybe<Scalars['BigInt']['input']>;
  maxTakeProfitBPS_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTakeProfitBPS_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxTakeProfitBPS_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxTakeProfitBPS_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxTakeProfitBPS_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxTakeProfitBPS_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxTakeProfitBPS_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minTakeProfitBPS?: InputMaybe<Scalars['BigInt']['input']>;
  minTakeProfitBPS_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minTakeProfitBPS_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minTakeProfitBPS_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minTakeProfitBPS_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minTakeProfitBPS_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minTakeProfitBPS_not?: InputMaybe<Scalars['BigInt']['input']>;
  minTakeProfitBPS_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleProviderProperty_Filter>>>;
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
};

export enum OracleProviderProperty_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  LeverageLevel = 'leverageLevel',
  MaxTakeProfitBps = 'maxTakeProfitBPS',
  MinTakeProfitBps = 'minTakeProfitBPS',
  OracleProvider = 'oracleProvider'
}

export type OracleVersion = {
  __typename?: 'OracleVersion';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  oracleProvider: Scalars['Bytes']['output'];
  price: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  version: Scalars['BigInt']['output'];
};

export type OracleVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleVersion_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<OracleVersion_Filter>>>;
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
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum OracleVersion_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OracleProvider = 'oracleProvider',
  Price = 'price',
  Timestamp = 'timestamp',
  Version = 'version'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Position = {
  __typename?: 'Position';
  account: Scalars['Bytes']['output'];
  claimedPosition?: Maybe<ClaimedPosition>;
  closedPosition?: Maybe<ClosedPosition>;
  id: Scalars['ID']['output'];
  makerMargin: Scalars['BigInt']['output'];
  marketAddress: Scalars['Bytes']['output'];
  openTimestamp: Scalars['BigInt']['output'];
  openVersion: Scalars['BigInt']['output'];
  positionId: Scalars['BigInt']['output'];
  qty: Scalars['BigInt']['output'];
  takerMargin: Scalars['BigInt']['output'];
  tradingFee: Scalars['BigInt']['output'];
};

export type Position_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
  claimedPosition_?: InputMaybe<ClaimedPosition_Filter>;
  closedPosition_?: InputMaybe<ClosedPosition_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  makerMargin?: InputMaybe<Scalars['BigInt']['input']>;
  makerMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketAddress?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  marketAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openVersion?: InputMaybe<Scalars['BigInt']['input']>;
  openVersion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openVersion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openVersion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openVersion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openVersion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openVersion_not?: InputMaybe<Scalars['BigInt']['input']>;
  openVersion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
  positionId?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  qty?: InputMaybe<Scalars['BigInt']['input']>;
  qty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  qty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  qty_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  qty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  qty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  qty_not?: InputMaybe<Scalars['BigInt']['input']>;
  qty_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takerMargin?: InputMaybe<Scalars['BigInt']['input']>;
  takerMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  takerMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  takerMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takerMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  takerMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  takerMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  takerMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFee?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Position_OrderBy {
  Account = 'account',
  ClaimedPosition = 'claimedPosition',
  ClaimedPositionBlockTimestamp = 'claimedPosition__blockTimestamp',
  ClaimedPositionCause = 'claimedPosition__cause',
  ClaimedPositionEntryPrice = 'claimedPosition__entryPrice',
  ClaimedPositionExitPrice = 'claimedPosition__exitPrice',
  ClaimedPositionId = 'claimedPosition__id',
  ClaimedPositionInterest = 'claimedPosition__interest',
  ClaimedPositionRealizedPnl = 'claimedPosition__realizedPnl',
  ClosedPosition = 'closedPosition',
  ClosedPositionCloseTimestamp = 'closedPosition__closeTimestamp',
  ClosedPositionCloseVersion = 'closedPosition__closeVersion',
  ClosedPositionId = 'closedPosition__id',
  Id = 'id',
  MakerMargin = 'makerMargin',
  MarketAddress = 'marketAddress',
  OpenTimestamp = 'openTimestamp',
  OpenVersion = 'openVersion',
  PositionId = 'positionId',
  Qty = 'qty',
  TakerMargin = 'takerMargin',
  TradingFee = 'tradingFee'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  accountCreated?: Maybe<AccountCreated>;
  accountCreateds: Array<AccountCreated>;
  chromaticMarket?: Maybe<ChromaticMarket>;
  chromaticMarketBinStatus?: Maybe<ChromaticMarketBinStatus>;
  chromaticMarketBinStatuses: Array<ChromaticMarketBinStatus>;
  chromaticMarkets: Array<ChromaticMarket>;
  claimedPosition?: Maybe<ClaimedPosition>;
  claimedPositions: Array<ClaimedPosition>;
  clbtoken?: Maybe<ClbToken>;
  clbtokenTotalSupplies: Array<ClbTokenTotalSupply>;
  clbtokenTotalSupply?: Maybe<ClbTokenTotalSupply>;
  clbtokens: Array<ClbToken>;
  closedPosition?: Maybe<ClosedPosition>;
  closedPositions: Array<ClosedPosition>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  interestRatesSnapshot?: Maybe<InterestRatesSnapshot>;
  interestRatesSnapshots: Array<InterestRatesSnapshot>;
  liquidityBinStatus?: Maybe<LiquidityBinStatus>;
  liquidityBinStatuses: Array<LiquidityBinStatus>;
  marketCreated?: Maybe<MarketCreated>;
  marketCreateds: Array<MarketCreated>;
  openPosition?: Maybe<OpenPosition>;
  openPositions: Array<OpenPosition>;
  oracleProviderProperties: Array<OracleProviderProperty>;
  oracleProviderProperty?: Maybe<OracleProviderProperty>;
  oracleVersion?: Maybe<OracleVersion>;
  oracleVersions: Array<OracleVersion>;
  position?: Maybe<Position>;
  positions: Array<Position>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountCreated_Filter>;
};


export type QueryChromaticMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticMarketBinStatusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChromaticMarketBinStatusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticMarketBinStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticMarketBinStatus_Filter>;
};


export type QueryChromaticMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticMarket_Filter>;
};


export type QueryClaimedPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClaimedPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimedPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClaimedPosition_Filter>;
};


export type QueryClbtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClbtokenTotalSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClbTokenTotalSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClbTokenTotalSupply_Filter>;
};


export type QueryClbtokenTotalSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClbtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClbToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClbToken_Filter>;
};


export type QueryClosedPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClosedPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClosedPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClosedPosition_Filter>;
};


export type QueryInterestRateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInterestRatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InterestRate_Filter>;
};


export type QueryInterestRatesSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInterestRatesSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestRatesSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InterestRatesSnapshot_Filter>;
};


export type QueryLiquidityBinStatusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidityBinStatusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityBinStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityBinStatus_Filter>;
};


export type QueryMarketCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketCreated_Filter>;
};


export type QueryOpenPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOpenPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OpenPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OpenPosition_Filter>;
};


export type QueryOracleProviderPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleProviderProperty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleProviderProperty_Filter>;
};


export type QueryOracleProviderPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleVersion_Filter>;
};


export type QueryPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Position_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  accountCreated?: Maybe<AccountCreated>;
  accountCreateds: Array<AccountCreated>;
  chromaticMarket?: Maybe<ChromaticMarket>;
  chromaticMarketBinStatus?: Maybe<ChromaticMarketBinStatus>;
  chromaticMarketBinStatuses: Array<ChromaticMarketBinStatus>;
  chromaticMarkets: Array<ChromaticMarket>;
  claimedPosition?: Maybe<ClaimedPosition>;
  claimedPositions: Array<ClaimedPosition>;
  clbtoken?: Maybe<ClbToken>;
  clbtokenTotalSupplies: Array<ClbTokenTotalSupply>;
  clbtokenTotalSupply?: Maybe<ClbTokenTotalSupply>;
  clbtokens: Array<ClbToken>;
  closedPosition?: Maybe<ClosedPosition>;
  closedPositions: Array<ClosedPosition>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  interestRatesSnapshot?: Maybe<InterestRatesSnapshot>;
  interestRatesSnapshots: Array<InterestRatesSnapshot>;
  liquidityBinStatus?: Maybe<LiquidityBinStatus>;
  liquidityBinStatuses: Array<LiquidityBinStatus>;
  marketCreated?: Maybe<MarketCreated>;
  marketCreateds: Array<MarketCreated>;
  openPosition?: Maybe<OpenPosition>;
  openPositions: Array<OpenPosition>;
  oracleProviderProperties: Array<OracleProviderProperty>;
  oracleProviderProperty?: Maybe<OracleProviderProperty>;
  oracleVersion?: Maybe<OracleVersion>;
  oracleVersions: Array<OracleVersion>;
  position?: Maybe<Position>;
  positions: Array<Position>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountCreated_Filter>;
};


export type SubscriptionChromaticMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticMarketBinStatusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChromaticMarketBinStatusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticMarketBinStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticMarketBinStatus_Filter>;
};


export type SubscriptionChromaticMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChromaticMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChromaticMarket_Filter>;
};


export type SubscriptionClaimedPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionClaimedPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimedPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClaimedPosition_Filter>;
};


export type SubscriptionClbtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionClbtokenTotalSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClbTokenTotalSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClbTokenTotalSupply_Filter>;
};


export type SubscriptionClbtokenTotalSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionClbtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClbToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClbToken_Filter>;
};


export type SubscriptionClosedPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionClosedPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClosedPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClosedPosition_Filter>;
};


export type SubscriptionInterestRateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInterestRatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestRate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InterestRate_Filter>;
};


export type SubscriptionInterestRatesSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInterestRatesSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InterestRatesSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<InterestRatesSnapshot_Filter>;
};


export type SubscriptionLiquidityBinStatusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidityBinStatusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityBinStatus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityBinStatus_Filter>;
};


export type SubscriptionMarketCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketCreated_Filter>;
};


export type SubscriptionOpenPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOpenPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OpenPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OpenPosition_Filter>;
};


export type SubscriptionOracleProviderPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleProviderProperty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleProviderProperty_Filter>;
};


export type SubscriptionOracleProviderPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOracleVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleVersion_Filter>;
};


export type SubscriptionPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Position_Filter>;
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

export type HistoryQueryVariables = Exact<{
  count: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  orderBy: ClaimedPosition_OrderBy;
  orderDirection: OrderDirection;
  accountAddress: Scalars['Bytes']['input'];
  marketAddresses: Array<Scalars['Bytes']['input']> | Scalars['Bytes']['input'];
}>;


export type HistoryQuery = { __typename?: 'Query', claimedPositions: Array<{ __typename?: 'ClaimedPosition', id: string, entryPrice: string, exitPrice: string, realizedPnl: string, interest: string, cause: string, blockTimestamp: string, position: { __typename?: 'Position', id: string, marketAddress: `0x${string}`, account: `0x${string}`, positionId: string, qty: string, takerMargin: string, makerMargin: string, tradingFee: string, openVersion: string, openTimestamp: string, closedPosition?: { __typename?: 'ClosedPosition', closeVersion: string, closeTimestamp: string } | null } }> };

export type TradeLogsQueryVariables = Exact<{
  count: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  orderBy: Position_OrderBy;
  orderDirection: OrderDirection;
  accountAddress: Scalars['Bytes']['input'];
  marketAddresses: Array<Scalars['Bytes']['input']> | Scalars['Bytes']['input'];
}>;


export type TradeLogsQuery = { __typename?: 'Query', positions: Array<{ __typename?: 'Position', id: string, account: `0x${string}`, marketAddress: `0x${string}`, positionId: string, qty: string, takerMargin: string, makerMargin: string, tradingFee: string, openVersion: string, openTimestamp: string }> };


export const HistoryDocument = gql`
    query History($count: Int!, $offset: Int!, $orderBy: ClaimedPosition_orderBy!, $orderDirection: OrderDirection!, $accountAddress: Bytes!, $marketAddresses: [Bytes!]!) {
  claimedPositions(
    first: $count
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {position_: {account: $accountAddress, marketAddress_in: $marketAddresses}}
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
    `;
export const TradeLogsDocument = gql`
    query TradeLogs($count: Int!, $offset: Int!, $orderBy: Position_orderBy!, $orderDirection: OrderDirection!, $accountAddress: Bytes!, $marketAddresses: [Bytes!]!) {
  positions(
    first: $count
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {account: $accountAddress, marketAddress_in: $marketAddresses}
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    History(variables: HistoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HistoryQuery>(HistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'History', 'query', variables);
    },
    TradeLogs(variables: TradeLogsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TradeLogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TradeLogsQuery>(TradeLogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TradeLogs', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;