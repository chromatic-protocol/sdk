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
  bigint: { input: any; output: any; }
  citext: { input: string; output: string; }
  date: { input: string; output: string; }
  numeric: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "account_counts" */
export type Account_Counts = {
  __typename?: 'account_counts';
  count?: Maybe<Scalars['bigint']['output']>;
  date: Scalars['date']['output'];
};

/** aggregated selection of "account_counts" */
export type Account_Counts_Aggregate = {
  __typename?: 'account_counts_aggregate';
  aggregate?: Maybe<Account_Counts_Aggregate_Fields>;
  nodes: Array<Account_Counts>;
};

/** aggregate fields of "account_counts" */
export type Account_Counts_Aggregate_Fields = {
  __typename?: 'account_counts_aggregate_fields';
  avg?: Maybe<Account_Counts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Account_Counts_Max_Fields>;
  min?: Maybe<Account_Counts_Min_Fields>;
  stddev?: Maybe<Account_Counts_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Counts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Counts_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Counts_Sum_Fields>;
  var_pop?: Maybe<Account_Counts_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Counts_Var_Samp_Fields>;
  variance?: Maybe<Account_Counts_Variance_Fields>;
};


/** aggregate fields of "account_counts" */
export type Account_Counts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Counts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Account_Counts_Avg_Fields = {
  __typename?: 'account_counts_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "account_counts". All fields are combined with a logical 'AND'. */
export type Account_Counts_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Counts_Bool_Exp>>;
  _not?: InputMaybe<Account_Counts_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Counts_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
};

/** aggregate max on columns */
export type Account_Counts_Max_Fields = {
  __typename?: 'account_counts_max_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
};

/** aggregate min on columns */
export type Account_Counts_Min_Fields = {
  __typename?: 'account_counts_min_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
};

/** Ordering options when selecting data from "account_counts". */
export type Account_Counts_Order_By = {
  count?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
};

/** select columns of table "account_counts" */
export enum Account_Counts_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Date = 'date'
}

/** aggregate stddev on columns */
export type Account_Counts_Stddev_Fields = {
  __typename?: 'account_counts_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Account_Counts_Stddev_Pop_Fields = {
  __typename?: 'account_counts_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Account_Counts_Stddev_Samp_Fields = {
  __typename?: 'account_counts_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "account_counts" */
export type Account_Counts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Counts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Counts_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
};

/** aggregate sum on columns */
export type Account_Counts_Sum_Fields = {
  __typename?: 'account_counts_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Account_Counts_Var_Pop_Fields = {
  __typename?: 'account_counts_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Account_Counts_Var_Samp_Fields = {
  __typename?: 'account_counts_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Account_Counts_Variance_Fields = {
  __typename?: 'account_counts_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "bin_value_histories" */
export type Bin_Value_Histories = {
  __typename?: 'bin_value_histories';
  bin_value: Scalars['numeric']['output'];
  block_number: Scalars['numeric']['output'];
  block_timestamp: Scalars['numeric']['output'];
  clb_total_supply: Scalars['numeric']['output'];
  fee_rate: Scalars['Int']['output'];
  market: Scalars['citext']['output'];
};

/** aggregated selection of "bin_value_histories" */
export type Bin_Value_Histories_Aggregate = {
  __typename?: 'bin_value_histories_aggregate';
  aggregate?: Maybe<Bin_Value_Histories_Aggregate_Fields>;
  nodes: Array<Bin_Value_Histories>;
};

/** aggregate fields of "bin_value_histories" */
export type Bin_Value_Histories_Aggregate_Fields = {
  __typename?: 'bin_value_histories_aggregate_fields';
  avg?: Maybe<Bin_Value_Histories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Bin_Value_Histories_Max_Fields>;
  min?: Maybe<Bin_Value_Histories_Min_Fields>;
  stddev?: Maybe<Bin_Value_Histories_Stddev_Fields>;
  stddev_pop?: Maybe<Bin_Value_Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bin_Value_Histories_Stddev_Samp_Fields>;
  sum?: Maybe<Bin_Value_Histories_Sum_Fields>;
  var_pop?: Maybe<Bin_Value_Histories_Var_Pop_Fields>;
  var_samp?: Maybe<Bin_Value_Histories_Var_Samp_Fields>;
  variance?: Maybe<Bin_Value_Histories_Variance_Fields>;
};


/** aggregate fields of "bin_value_histories" */
export type Bin_Value_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bin_Value_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Bin_Value_Histories_Avg_Fields = {
  __typename?: 'bin_value_histories_avg_fields';
  bin_value?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clb_total_supply?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "bin_value_histories". All fields are combined with a logical 'AND'. */
export type Bin_Value_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Bin_Value_Histories_Bool_Exp>>;
  _not?: InputMaybe<Bin_Value_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Bin_Value_Histories_Bool_Exp>>;
  bin_value?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  block_timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  clb_total_supply?: InputMaybe<Numeric_Comparison_Exp>;
  fee_rate?: InputMaybe<Int_Comparison_Exp>;
  market?: InputMaybe<Citext_Comparison_Exp>;
};

/** aggregate max on columns */
export type Bin_Value_Histories_Max_Fields = {
  __typename?: 'bin_value_histories_max_fields';
  bin_value?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  clb_total_supply?: Maybe<Scalars['numeric']['output']>;
  fee_rate?: Maybe<Scalars['Int']['output']>;
  market?: Maybe<Scalars['citext']['output']>;
};

/** aggregate min on columns */
export type Bin_Value_Histories_Min_Fields = {
  __typename?: 'bin_value_histories_min_fields';
  bin_value?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  clb_total_supply?: Maybe<Scalars['numeric']['output']>;
  fee_rate?: Maybe<Scalars['Int']['output']>;
  market?: Maybe<Scalars['citext']['output']>;
};

/** Ordering options when selecting data from "bin_value_histories". */
export type Bin_Value_Histories_Order_By = {
  bin_value?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  clb_total_supply?: InputMaybe<Order_By>;
  fee_rate?: InputMaybe<Order_By>;
  market?: InputMaybe<Order_By>;
};

/** select columns of table "bin_value_histories" */
export enum Bin_Value_Histories_Select_Column {
  /** column name */
  BinValue = 'bin_value',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  BlockTimestamp = 'block_timestamp',
  /** column name */
  ClbTotalSupply = 'clb_total_supply',
  /** column name */
  FeeRate = 'fee_rate',
  /** column name */
  Market = 'market'
}

/** aggregate stddev on columns */
export type Bin_Value_Histories_Stddev_Fields = {
  __typename?: 'bin_value_histories_stddev_fields';
  bin_value?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clb_total_supply?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Bin_Value_Histories_Stddev_Pop_Fields = {
  __typename?: 'bin_value_histories_stddev_pop_fields';
  bin_value?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clb_total_supply?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Bin_Value_Histories_Stddev_Samp_Fields = {
  __typename?: 'bin_value_histories_stddev_samp_fields';
  bin_value?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clb_total_supply?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "bin_value_histories" */
export type Bin_Value_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bin_Value_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bin_Value_Histories_Stream_Cursor_Value_Input = {
  bin_value?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  block_timestamp?: InputMaybe<Scalars['numeric']['input']>;
  clb_total_supply?: InputMaybe<Scalars['numeric']['input']>;
  fee_rate?: InputMaybe<Scalars['Int']['input']>;
  market?: InputMaybe<Scalars['citext']['input']>;
};

/** aggregate sum on columns */
export type Bin_Value_Histories_Sum_Fields = {
  __typename?: 'bin_value_histories_sum_fields';
  bin_value?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  clb_total_supply?: Maybe<Scalars['numeric']['output']>;
  fee_rate?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Bin_Value_Histories_Var_Pop_Fields = {
  __typename?: 'bin_value_histories_var_pop_fields';
  bin_value?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clb_total_supply?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Bin_Value_Histories_Var_Samp_Fields = {
  __typename?: 'bin_value_histories_var_samp_fields';
  bin_value?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clb_total_supply?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Bin_Value_Histories_Variance_Fields = {
  __typename?: 'bin_value_histories_variance_fields';
  bin_value?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clb_total_supply?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "lp_bin_value_histories" */
export type Lp_Bin_Value_Histories = {
  __typename?: 'lp_bin_value_histories';
  address: Scalars['citext']['output'];
  block_number: Scalars['numeric']['output'];
  block_timestamp: Scalars['numeric']['output'];
  fee_rate: Scalars['Int']['output'];
  holding_clb_balance: Scalars['numeric']['output'];
  market: Scalars['citext']['output'];
  pending_clb_balance: Scalars['numeric']['output'];
};

/** aggregated selection of "lp_bin_value_histories" */
export type Lp_Bin_Value_Histories_Aggregate = {
  __typename?: 'lp_bin_value_histories_aggregate';
  aggregate?: Maybe<Lp_Bin_Value_Histories_Aggregate_Fields>;
  nodes: Array<Lp_Bin_Value_Histories>;
};

/** aggregate fields of "lp_bin_value_histories" */
export type Lp_Bin_Value_Histories_Aggregate_Fields = {
  __typename?: 'lp_bin_value_histories_aggregate_fields';
  avg?: Maybe<Lp_Bin_Value_Histories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lp_Bin_Value_Histories_Max_Fields>;
  min?: Maybe<Lp_Bin_Value_Histories_Min_Fields>;
  stddev?: Maybe<Lp_Bin_Value_Histories_Stddev_Fields>;
  stddev_pop?: Maybe<Lp_Bin_Value_Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lp_Bin_Value_Histories_Stddev_Samp_Fields>;
  sum?: Maybe<Lp_Bin_Value_Histories_Sum_Fields>;
  var_pop?: Maybe<Lp_Bin_Value_Histories_Var_Pop_Fields>;
  var_samp?: Maybe<Lp_Bin_Value_Histories_Var_Samp_Fields>;
  variance?: Maybe<Lp_Bin_Value_Histories_Variance_Fields>;
};


/** aggregate fields of "lp_bin_value_histories" */
export type Lp_Bin_Value_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lp_Bin_Value_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Lp_Bin_Value_Histories_Avg_Fields = {
  __typename?: 'lp_bin_value_histories_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
  holding_clb_balance?: Maybe<Scalars['Float']['output']>;
  pending_clb_balance?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "lp_bin_value_histories". All fields are combined with a logical 'AND'. */
export type Lp_Bin_Value_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Lp_Bin_Value_Histories_Bool_Exp>>;
  _not?: InputMaybe<Lp_Bin_Value_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Lp_Bin_Value_Histories_Bool_Exp>>;
  address?: InputMaybe<Citext_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  block_timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  fee_rate?: InputMaybe<Int_Comparison_Exp>;
  holding_clb_balance?: InputMaybe<Numeric_Comparison_Exp>;
  market?: InputMaybe<Citext_Comparison_Exp>;
  pending_clb_balance?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Lp_Bin_Value_Histories_Max_Fields = {
  __typename?: 'lp_bin_value_histories_max_fields';
  address?: Maybe<Scalars['citext']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  fee_rate?: Maybe<Scalars['Int']['output']>;
  holding_clb_balance?: Maybe<Scalars['numeric']['output']>;
  market?: Maybe<Scalars['citext']['output']>;
  pending_clb_balance?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Lp_Bin_Value_Histories_Min_Fields = {
  __typename?: 'lp_bin_value_histories_min_fields';
  address?: Maybe<Scalars['citext']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  fee_rate?: Maybe<Scalars['Int']['output']>;
  holding_clb_balance?: Maybe<Scalars['numeric']['output']>;
  market?: Maybe<Scalars['citext']['output']>;
  pending_clb_balance?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "lp_bin_value_histories". */
export type Lp_Bin_Value_Histories_Order_By = {
  address?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  fee_rate?: InputMaybe<Order_By>;
  holding_clb_balance?: InputMaybe<Order_By>;
  market?: InputMaybe<Order_By>;
  pending_clb_balance?: InputMaybe<Order_By>;
};

/** select columns of table "lp_bin_value_histories" */
export enum Lp_Bin_Value_Histories_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  BlockTimestamp = 'block_timestamp',
  /** column name */
  FeeRate = 'fee_rate',
  /** column name */
  HoldingClbBalance = 'holding_clb_balance',
  /** column name */
  Market = 'market',
  /** column name */
  PendingClbBalance = 'pending_clb_balance'
}

/** aggregate stddev on columns */
export type Lp_Bin_Value_Histories_Stddev_Fields = {
  __typename?: 'lp_bin_value_histories_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
  holding_clb_balance?: Maybe<Scalars['Float']['output']>;
  pending_clb_balance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Lp_Bin_Value_Histories_Stddev_Pop_Fields = {
  __typename?: 'lp_bin_value_histories_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
  holding_clb_balance?: Maybe<Scalars['Float']['output']>;
  pending_clb_balance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Lp_Bin_Value_Histories_Stddev_Samp_Fields = {
  __typename?: 'lp_bin_value_histories_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
  holding_clb_balance?: Maybe<Scalars['Float']['output']>;
  pending_clb_balance?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "lp_bin_value_histories" */
export type Lp_Bin_Value_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lp_Bin_Value_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lp_Bin_Value_Histories_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['citext']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  block_timestamp?: InputMaybe<Scalars['numeric']['input']>;
  fee_rate?: InputMaybe<Scalars['Int']['input']>;
  holding_clb_balance?: InputMaybe<Scalars['numeric']['input']>;
  market?: InputMaybe<Scalars['citext']['input']>;
  pending_clb_balance?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Lp_Bin_Value_Histories_Sum_Fields = {
  __typename?: 'lp_bin_value_histories_sum_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  fee_rate?: Maybe<Scalars['Int']['output']>;
  holding_clb_balance?: Maybe<Scalars['numeric']['output']>;
  pending_clb_balance?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Lp_Bin_Value_Histories_Var_Pop_Fields = {
  __typename?: 'lp_bin_value_histories_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
  holding_clb_balance?: Maybe<Scalars['Float']['output']>;
  pending_clb_balance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Lp_Bin_Value_Histories_Var_Samp_Fields = {
  __typename?: 'lp_bin_value_histories_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
  holding_clb_balance?: Maybe<Scalars['Float']['output']>;
  pending_clb_balance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Lp_Bin_Value_Histories_Variance_Fields = {
  __typename?: 'lp_bin_value_histories_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  fee_rate?: Maybe<Scalars['Float']['output']>;
  holding_clb_balance?: Maybe<Scalars['Float']['output']>;
  pending_clb_balance?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "lp_liquidity_flows" */
export type Lp_Liquidity_Flows = {
  __typename?: 'lp_liquidity_flows';
  added_amount: Scalars['numeric']['output'];
  address: Scalars['citext']['output'];
  date: Scalars['date']['output'];
  start_block: Scalars['numeric']['output'];
  start_value: Scalars['numeric']['output'];
  withdrawn_amount: Scalars['numeric']['output'];
};

/** aggregated selection of "lp_liquidity_flows" */
export type Lp_Liquidity_Flows_Aggregate = {
  __typename?: 'lp_liquidity_flows_aggregate';
  aggregate?: Maybe<Lp_Liquidity_Flows_Aggregate_Fields>;
  nodes: Array<Lp_Liquidity_Flows>;
};

/** aggregate fields of "lp_liquidity_flows" */
export type Lp_Liquidity_Flows_Aggregate_Fields = {
  __typename?: 'lp_liquidity_flows_aggregate_fields';
  avg?: Maybe<Lp_Liquidity_Flows_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lp_Liquidity_Flows_Max_Fields>;
  min?: Maybe<Lp_Liquidity_Flows_Min_Fields>;
  stddev?: Maybe<Lp_Liquidity_Flows_Stddev_Fields>;
  stddev_pop?: Maybe<Lp_Liquidity_Flows_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lp_Liquidity_Flows_Stddev_Samp_Fields>;
  sum?: Maybe<Lp_Liquidity_Flows_Sum_Fields>;
  var_pop?: Maybe<Lp_Liquidity_Flows_Var_Pop_Fields>;
  var_samp?: Maybe<Lp_Liquidity_Flows_Var_Samp_Fields>;
  variance?: Maybe<Lp_Liquidity_Flows_Variance_Fields>;
};


/** aggregate fields of "lp_liquidity_flows" */
export type Lp_Liquidity_Flows_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lp_Liquidity_Flows_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Lp_Liquidity_Flows_Avg_Fields = {
  __typename?: 'lp_liquidity_flows_avg_fields';
  added_amount?: Maybe<Scalars['Float']['output']>;
  start_block?: Maybe<Scalars['Float']['output']>;
  start_value?: Maybe<Scalars['Float']['output']>;
  withdrawn_amount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "lp_liquidity_flows". All fields are combined with a logical 'AND'. */
export type Lp_Liquidity_Flows_Bool_Exp = {
  _and?: InputMaybe<Array<Lp_Liquidity_Flows_Bool_Exp>>;
  _not?: InputMaybe<Lp_Liquidity_Flows_Bool_Exp>;
  _or?: InputMaybe<Array<Lp_Liquidity_Flows_Bool_Exp>>;
  added_amount?: InputMaybe<Numeric_Comparison_Exp>;
  address?: InputMaybe<Citext_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  start_block?: InputMaybe<Numeric_Comparison_Exp>;
  start_value?: InputMaybe<Numeric_Comparison_Exp>;
  withdrawn_amount?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Lp_Liquidity_Flows_Max_Fields = {
  __typename?: 'lp_liquidity_flows_max_fields';
  added_amount?: Maybe<Scalars['numeric']['output']>;
  address?: Maybe<Scalars['citext']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  start_block?: Maybe<Scalars['numeric']['output']>;
  start_value?: Maybe<Scalars['numeric']['output']>;
  withdrawn_amount?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Lp_Liquidity_Flows_Min_Fields = {
  __typename?: 'lp_liquidity_flows_min_fields';
  added_amount?: Maybe<Scalars['numeric']['output']>;
  address?: Maybe<Scalars['citext']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  start_block?: Maybe<Scalars['numeric']['output']>;
  start_value?: Maybe<Scalars['numeric']['output']>;
  withdrawn_amount?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "lp_liquidity_flows". */
export type Lp_Liquidity_Flows_Order_By = {
  added_amount?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  start_block?: InputMaybe<Order_By>;
  start_value?: InputMaybe<Order_By>;
  withdrawn_amount?: InputMaybe<Order_By>;
};

/** select columns of table "lp_liquidity_flows" */
export enum Lp_Liquidity_Flows_Select_Column {
  /** column name */
  AddedAmount = 'added_amount',
  /** column name */
  Address = 'address',
  /** column name */
  Date = 'date',
  /** column name */
  StartBlock = 'start_block',
  /** column name */
  StartValue = 'start_value',
  /** column name */
  WithdrawnAmount = 'withdrawn_amount'
}

/** aggregate stddev on columns */
export type Lp_Liquidity_Flows_Stddev_Fields = {
  __typename?: 'lp_liquidity_flows_stddev_fields';
  added_amount?: Maybe<Scalars['Float']['output']>;
  start_block?: Maybe<Scalars['Float']['output']>;
  start_value?: Maybe<Scalars['Float']['output']>;
  withdrawn_amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Lp_Liquidity_Flows_Stddev_Pop_Fields = {
  __typename?: 'lp_liquidity_flows_stddev_pop_fields';
  added_amount?: Maybe<Scalars['Float']['output']>;
  start_block?: Maybe<Scalars['Float']['output']>;
  start_value?: Maybe<Scalars['Float']['output']>;
  withdrawn_amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Lp_Liquidity_Flows_Stddev_Samp_Fields = {
  __typename?: 'lp_liquidity_flows_stddev_samp_fields';
  added_amount?: Maybe<Scalars['Float']['output']>;
  start_block?: Maybe<Scalars['Float']['output']>;
  start_value?: Maybe<Scalars['Float']['output']>;
  withdrawn_amount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "lp_liquidity_flows" */
export type Lp_Liquidity_Flows_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lp_Liquidity_Flows_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lp_Liquidity_Flows_Stream_Cursor_Value_Input = {
  added_amount?: InputMaybe<Scalars['numeric']['input']>;
  address?: InputMaybe<Scalars['citext']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  start_block?: InputMaybe<Scalars['numeric']['input']>;
  start_value?: InputMaybe<Scalars['numeric']['input']>;
  withdrawn_amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Lp_Liquidity_Flows_Sum_Fields = {
  __typename?: 'lp_liquidity_flows_sum_fields';
  added_amount?: Maybe<Scalars['numeric']['output']>;
  start_block?: Maybe<Scalars['numeric']['output']>;
  start_value?: Maybe<Scalars['numeric']['output']>;
  withdrawn_amount?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Lp_Liquidity_Flows_Var_Pop_Fields = {
  __typename?: 'lp_liquidity_flows_var_pop_fields';
  added_amount?: Maybe<Scalars['Float']['output']>;
  start_block?: Maybe<Scalars['Float']['output']>;
  start_value?: Maybe<Scalars['Float']['output']>;
  withdrawn_amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Lp_Liquidity_Flows_Var_Samp_Fields = {
  __typename?: 'lp_liquidity_flows_var_samp_fields';
  added_amount?: Maybe<Scalars['Float']['output']>;
  start_block?: Maybe<Scalars['Float']['output']>;
  start_value?: Maybe<Scalars['Float']['output']>;
  withdrawn_amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Lp_Liquidity_Flows_Variance_Fields = {
  __typename?: 'lp_liquidity_flows_variance_fields';
  added_amount?: Maybe<Scalars['Float']['output']>;
  start_block?: Maybe<Scalars['Float']['output']>;
  start_value?: Maybe<Scalars['Float']['output']>;
  withdrawn_amount?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "lp_performances" */
export type Lp_Performances = {
  __typename?: 'lp_performances';
  address: Scalars['citext']['output'];
  date: Scalars['date']['output'];
  pnl_all: Scalars['numeric']['output'];
  pnl_d7: Scalars['numeric']['output'];
  pnl_d30: Scalars['numeric']['output'];
  pnl_d90: Scalars['numeric']['output'];
  pnl_d180: Scalars['numeric']['output'];
  pnl_d365: Scalars['numeric']['output'];
  rate_all: Scalars['numeric']['output'];
  rate_d7: Scalars['numeric']['output'];
  rate_d30: Scalars['numeric']['output'];
  rate_d90: Scalars['numeric']['output'];
  rate_d180: Scalars['numeric']['output'];
  rate_d365: Scalars['numeric']['output'];
};

/** aggregated selection of "lp_performances" */
export type Lp_Performances_Aggregate = {
  __typename?: 'lp_performances_aggregate';
  aggregate?: Maybe<Lp_Performances_Aggregate_Fields>;
  nodes: Array<Lp_Performances>;
};

/** aggregate fields of "lp_performances" */
export type Lp_Performances_Aggregate_Fields = {
  __typename?: 'lp_performances_aggregate_fields';
  avg?: Maybe<Lp_Performances_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lp_Performances_Max_Fields>;
  min?: Maybe<Lp_Performances_Min_Fields>;
  stddev?: Maybe<Lp_Performances_Stddev_Fields>;
  stddev_pop?: Maybe<Lp_Performances_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lp_Performances_Stddev_Samp_Fields>;
  sum?: Maybe<Lp_Performances_Sum_Fields>;
  var_pop?: Maybe<Lp_Performances_Var_Pop_Fields>;
  var_samp?: Maybe<Lp_Performances_Var_Samp_Fields>;
  variance?: Maybe<Lp_Performances_Variance_Fields>;
};


/** aggregate fields of "lp_performances" */
export type Lp_Performances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lp_Performances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Lp_Performances_Avg_Fields = {
  __typename?: 'lp_performances_avg_fields';
  pnl_all?: Maybe<Scalars['Float']['output']>;
  pnl_d7?: Maybe<Scalars['Float']['output']>;
  pnl_d30?: Maybe<Scalars['Float']['output']>;
  pnl_d90?: Maybe<Scalars['Float']['output']>;
  pnl_d180?: Maybe<Scalars['Float']['output']>;
  pnl_d365?: Maybe<Scalars['Float']['output']>;
  rate_all?: Maybe<Scalars['Float']['output']>;
  rate_d7?: Maybe<Scalars['Float']['output']>;
  rate_d30?: Maybe<Scalars['Float']['output']>;
  rate_d90?: Maybe<Scalars['Float']['output']>;
  rate_d180?: Maybe<Scalars['Float']['output']>;
  rate_d365?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "lp_performances". All fields are combined with a logical 'AND'. */
export type Lp_Performances_Bool_Exp = {
  _and?: InputMaybe<Array<Lp_Performances_Bool_Exp>>;
  _not?: InputMaybe<Lp_Performances_Bool_Exp>;
  _or?: InputMaybe<Array<Lp_Performances_Bool_Exp>>;
  address?: InputMaybe<Citext_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  pnl_all?: InputMaybe<Numeric_Comparison_Exp>;
  pnl_d7?: InputMaybe<Numeric_Comparison_Exp>;
  pnl_d30?: InputMaybe<Numeric_Comparison_Exp>;
  pnl_d90?: InputMaybe<Numeric_Comparison_Exp>;
  pnl_d180?: InputMaybe<Numeric_Comparison_Exp>;
  pnl_d365?: InputMaybe<Numeric_Comparison_Exp>;
  rate_all?: InputMaybe<Numeric_Comparison_Exp>;
  rate_d7?: InputMaybe<Numeric_Comparison_Exp>;
  rate_d30?: InputMaybe<Numeric_Comparison_Exp>;
  rate_d90?: InputMaybe<Numeric_Comparison_Exp>;
  rate_d180?: InputMaybe<Numeric_Comparison_Exp>;
  rate_d365?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Lp_Performances_Max_Fields = {
  __typename?: 'lp_performances_max_fields';
  address?: Maybe<Scalars['citext']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  pnl_all?: Maybe<Scalars['numeric']['output']>;
  pnl_d7?: Maybe<Scalars['numeric']['output']>;
  pnl_d30?: Maybe<Scalars['numeric']['output']>;
  pnl_d90?: Maybe<Scalars['numeric']['output']>;
  pnl_d180?: Maybe<Scalars['numeric']['output']>;
  pnl_d365?: Maybe<Scalars['numeric']['output']>;
  rate_all?: Maybe<Scalars['numeric']['output']>;
  rate_d7?: Maybe<Scalars['numeric']['output']>;
  rate_d30?: Maybe<Scalars['numeric']['output']>;
  rate_d90?: Maybe<Scalars['numeric']['output']>;
  rate_d180?: Maybe<Scalars['numeric']['output']>;
  rate_d365?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Lp_Performances_Min_Fields = {
  __typename?: 'lp_performances_min_fields';
  address?: Maybe<Scalars['citext']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  pnl_all?: Maybe<Scalars['numeric']['output']>;
  pnl_d7?: Maybe<Scalars['numeric']['output']>;
  pnl_d30?: Maybe<Scalars['numeric']['output']>;
  pnl_d90?: Maybe<Scalars['numeric']['output']>;
  pnl_d180?: Maybe<Scalars['numeric']['output']>;
  pnl_d365?: Maybe<Scalars['numeric']['output']>;
  rate_all?: Maybe<Scalars['numeric']['output']>;
  rate_d7?: Maybe<Scalars['numeric']['output']>;
  rate_d30?: Maybe<Scalars['numeric']['output']>;
  rate_d90?: Maybe<Scalars['numeric']['output']>;
  rate_d180?: Maybe<Scalars['numeric']['output']>;
  rate_d365?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "lp_performances". */
export type Lp_Performances_Order_By = {
  address?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  pnl_all?: InputMaybe<Order_By>;
  pnl_d7?: InputMaybe<Order_By>;
  pnl_d30?: InputMaybe<Order_By>;
  pnl_d90?: InputMaybe<Order_By>;
  pnl_d180?: InputMaybe<Order_By>;
  pnl_d365?: InputMaybe<Order_By>;
  rate_all?: InputMaybe<Order_By>;
  rate_d7?: InputMaybe<Order_By>;
  rate_d30?: InputMaybe<Order_By>;
  rate_d90?: InputMaybe<Order_By>;
  rate_d180?: InputMaybe<Order_By>;
  rate_d365?: InputMaybe<Order_By>;
};

/** select columns of table "lp_performances" */
export enum Lp_Performances_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Date = 'date',
  /** column name */
  PnlAll = 'pnl_all',
  /** column name */
  PnlD7 = 'pnl_d7',
  /** column name */
  PnlD30 = 'pnl_d30',
  /** column name */
  PnlD90 = 'pnl_d90',
  /** column name */
  PnlD180 = 'pnl_d180',
  /** column name */
  PnlD365 = 'pnl_d365',
  /** column name */
  RateAll = 'rate_all',
  /** column name */
  RateD7 = 'rate_d7',
  /** column name */
  RateD30 = 'rate_d30',
  /** column name */
  RateD90 = 'rate_d90',
  /** column name */
  RateD180 = 'rate_d180',
  /** column name */
  RateD365 = 'rate_d365'
}

/** aggregate stddev on columns */
export type Lp_Performances_Stddev_Fields = {
  __typename?: 'lp_performances_stddev_fields';
  pnl_all?: Maybe<Scalars['Float']['output']>;
  pnl_d7?: Maybe<Scalars['Float']['output']>;
  pnl_d30?: Maybe<Scalars['Float']['output']>;
  pnl_d90?: Maybe<Scalars['Float']['output']>;
  pnl_d180?: Maybe<Scalars['Float']['output']>;
  pnl_d365?: Maybe<Scalars['Float']['output']>;
  rate_all?: Maybe<Scalars['Float']['output']>;
  rate_d7?: Maybe<Scalars['Float']['output']>;
  rate_d30?: Maybe<Scalars['Float']['output']>;
  rate_d90?: Maybe<Scalars['Float']['output']>;
  rate_d180?: Maybe<Scalars['Float']['output']>;
  rate_d365?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Lp_Performances_Stddev_Pop_Fields = {
  __typename?: 'lp_performances_stddev_pop_fields';
  pnl_all?: Maybe<Scalars['Float']['output']>;
  pnl_d7?: Maybe<Scalars['Float']['output']>;
  pnl_d30?: Maybe<Scalars['Float']['output']>;
  pnl_d90?: Maybe<Scalars['Float']['output']>;
  pnl_d180?: Maybe<Scalars['Float']['output']>;
  pnl_d365?: Maybe<Scalars['Float']['output']>;
  rate_all?: Maybe<Scalars['Float']['output']>;
  rate_d7?: Maybe<Scalars['Float']['output']>;
  rate_d30?: Maybe<Scalars['Float']['output']>;
  rate_d90?: Maybe<Scalars['Float']['output']>;
  rate_d180?: Maybe<Scalars['Float']['output']>;
  rate_d365?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Lp_Performances_Stddev_Samp_Fields = {
  __typename?: 'lp_performances_stddev_samp_fields';
  pnl_all?: Maybe<Scalars['Float']['output']>;
  pnl_d7?: Maybe<Scalars['Float']['output']>;
  pnl_d30?: Maybe<Scalars['Float']['output']>;
  pnl_d90?: Maybe<Scalars['Float']['output']>;
  pnl_d180?: Maybe<Scalars['Float']['output']>;
  pnl_d365?: Maybe<Scalars['Float']['output']>;
  rate_all?: Maybe<Scalars['Float']['output']>;
  rate_d7?: Maybe<Scalars['Float']['output']>;
  rate_d30?: Maybe<Scalars['Float']['output']>;
  rate_d90?: Maybe<Scalars['Float']['output']>;
  rate_d180?: Maybe<Scalars['Float']['output']>;
  rate_d365?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "lp_performances" */
export type Lp_Performances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lp_Performances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lp_Performances_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['citext']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  pnl_all?: InputMaybe<Scalars['numeric']['input']>;
  pnl_d7?: InputMaybe<Scalars['numeric']['input']>;
  pnl_d30?: InputMaybe<Scalars['numeric']['input']>;
  pnl_d90?: InputMaybe<Scalars['numeric']['input']>;
  pnl_d180?: InputMaybe<Scalars['numeric']['input']>;
  pnl_d365?: InputMaybe<Scalars['numeric']['input']>;
  rate_all?: InputMaybe<Scalars['numeric']['input']>;
  rate_d7?: InputMaybe<Scalars['numeric']['input']>;
  rate_d30?: InputMaybe<Scalars['numeric']['input']>;
  rate_d90?: InputMaybe<Scalars['numeric']['input']>;
  rate_d180?: InputMaybe<Scalars['numeric']['input']>;
  rate_d365?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Lp_Performances_Sum_Fields = {
  __typename?: 'lp_performances_sum_fields';
  pnl_all?: Maybe<Scalars['numeric']['output']>;
  pnl_d7?: Maybe<Scalars['numeric']['output']>;
  pnl_d30?: Maybe<Scalars['numeric']['output']>;
  pnl_d90?: Maybe<Scalars['numeric']['output']>;
  pnl_d180?: Maybe<Scalars['numeric']['output']>;
  pnl_d365?: Maybe<Scalars['numeric']['output']>;
  rate_all?: Maybe<Scalars['numeric']['output']>;
  rate_d7?: Maybe<Scalars['numeric']['output']>;
  rate_d30?: Maybe<Scalars['numeric']['output']>;
  rate_d90?: Maybe<Scalars['numeric']['output']>;
  rate_d180?: Maybe<Scalars['numeric']['output']>;
  rate_d365?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Lp_Performances_Var_Pop_Fields = {
  __typename?: 'lp_performances_var_pop_fields';
  pnl_all?: Maybe<Scalars['Float']['output']>;
  pnl_d7?: Maybe<Scalars['Float']['output']>;
  pnl_d30?: Maybe<Scalars['Float']['output']>;
  pnl_d90?: Maybe<Scalars['Float']['output']>;
  pnl_d180?: Maybe<Scalars['Float']['output']>;
  pnl_d365?: Maybe<Scalars['Float']['output']>;
  rate_all?: Maybe<Scalars['Float']['output']>;
  rate_d7?: Maybe<Scalars['Float']['output']>;
  rate_d30?: Maybe<Scalars['Float']['output']>;
  rate_d90?: Maybe<Scalars['Float']['output']>;
  rate_d180?: Maybe<Scalars['Float']['output']>;
  rate_d365?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Lp_Performances_Var_Samp_Fields = {
  __typename?: 'lp_performances_var_samp_fields';
  pnl_all?: Maybe<Scalars['Float']['output']>;
  pnl_d7?: Maybe<Scalars['Float']['output']>;
  pnl_d30?: Maybe<Scalars['Float']['output']>;
  pnl_d90?: Maybe<Scalars['Float']['output']>;
  pnl_d180?: Maybe<Scalars['Float']['output']>;
  pnl_d365?: Maybe<Scalars['Float']['output']>;
  rate_all?: Maybe<Scalars['Float']['output']>;
  rate_d7?: Maybe<Scalars['Float']['output']>;
  rate_d30?: Maybe<Scalars['Float']['output']>;
  rate_d90?: Maybe<Scalars['Float']['output']>;
  rate_d180?: Maybe<Scalars['Float']['output']>;
  rate_d365?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Lp_Performances_Variance_Fields = {
  __typename?: 'lp_performances_variance_fields';
  pnl_all?: Maybe<Scalars['Float']['output']>;
  pnl_d7?: Maybe<Scalars['Float']['output']>;
  pnl_d30?: Maybe<Scalars['Float']['output']>;
  pnl_d90?: Maybe<Scalars['Float']['output']>;
  pnl_d180?: Maybe<Scalars['Float']['output']>;
  pnl_d365?: Maybe<Scalars['Float']['output']>;
  rate_all?: Maybe<Scalars['Float']['output']>;
  rate_d7?: Maybe<Scalars['Float']['output']>;
  rate_d30?: Maybe<Scalars['Float']['output']>;
  rate_d90?: Maybe<Scalars['Float']['output']>;
  rate_d180?: Maybe<Scalars['Float']['output']>;
  rate_d365?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "lp_value_daily_histories" */
export type Lp_Value_Daily_Histories = {
  __typename?: 'lp_value_daily_histories';
  address: Scalars['citext']['output'];
  clp_total_supply: Scalars['numeric']['output'];
  date: Scalars['date']['output'];
  holding_clb_value: Scalars['numeric']['output'];
  holding_value: Scalars['numeric']['output'];
  pending_clb_value: Scalars['numeric']['output'];
  pending_value: Scalars['numeric']['output'];
};

/** aggregated selection of "lp_value_daily_histories" */
export type Lp_Value_Daily_Histories_Aggregate = {
  __typename?: 'lp_value_daily_histories_aggregate';
  aggregate?: Maybe<Lp_Value_Daily_Histories_Aggregate_Fields>;
  nodes: Array<Lp_Value_Daily_Histories>;
};

/** aggregate fields of "lp_value_daily_histories" */
export type Lp_Value_Daily_Histories_Aggregate_Fields = {
  __typename?: 'lp_value_daily_histories_aggregate_fields';
  avg?: Maybe<Lp_Value_Daily_Histories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lp_Value_Daily_Histories_Max_Fields>;
  min?: Maybe<Lp_Value_Daily_Histories_Min_Fields>;
  stddev?: Maybe<Lp_Value_Daily_Histories_Stddev_Fields>;
  stddev_pop?: Maybe<Lp_Value_Daily_Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lp_Value_Daily_Histories_Stddev_Samp_Fields>;
  sum?: Maybe<Lp_Value_Daily_Histories_Sum_Fields>;
  var_pop?: Maybe<Lp_Value_Daily_Histories_Var_Pop_Fields>;
  var_samp?: Maybe<Lp_Value_Daily_Histories_Var_Samp_Fields>;
  variance?: Maybe<Lp_Value_Daily_Histories_Variance_Fields>;
};


/** aggregate fields of "lp_value_daily_histories" */
export type Lp_Value_Daily_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lp_Value_Daily_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Lp_Value_Daily_Histories_Avg_Fields = {
  __typename?: 'lp_value_daily_histories_avg_fields';
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "lp_value_daily_histories". All fields are combined with a logical 'AND'. */
export type Lp_Value_Daily_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Lp_Value_Daily_Histories_Bool_Exp>>;
  _not?: InputMaybe<Lp_Value_Daily_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Lp_Value_Daily_Histories_Bool_Exp>>;
  address?: InputMaybe<Citext_Comparison_Exp>;
  clp_total_supply?: InputMaybe<Numeric_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  holding_clb_value?: InputMaybe<Numeric_Comparison_Exp>;
  holding_value?: InputMaybe<Numeric_Comparison_Exp>;
  pending_clb_value?: InputMaybe<Numeric_Comparison_Exp>;
  pending_value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Lp_Value_Daily_Histories_Max_Fields = {
  __typename?: 'lp_value_daily_histories_max_fields';
  address?: Maybe<Scalars['citext']['output']>;
  clp_total_supply?: Maybe<Scalars['numeric']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  holding_clb_value?: Maybe<Scalars['numeric']['output']>;
  holding_value?: Maybe<Scalars['numeric']['output']>;
  pending_clb_value?: Maybe<Scalars['numeric']['output']>;
  pending_value?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Lp_Value_Daily_Histories_Min_Fields = {
  __typename?: 'lp_value_daily_histories_min_fields';
  address?: Maybe<Scalars['citext']['output']>;
  clp_total_supply?: Maybe<Scalars['numeric']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  holding_clb_value?: Maybe<Scalars['numeric']['output']>;
  holding_value?: Maybe<Scalars['numeric']['output']>;
  pending_clb_value?: Maybe<Scalars['numeric']['output']>;
  pending_value?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "lp_value_daily_histories". */
export type Lp_Value_Daily_Histories_Order_By = {
  address?: InputMaybe<Order_By>;
  clp_total_supply?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  holding_clb_value?: InputMaybe<Order_By>;
  holding_value?: InputMaybe<Order_By>;
  pending_clb_value?: InputMaybe<Order_By>;
  pending_value?: InputMaybe<Order_By>;
};

/** select columns of table "lp_value_daily_histories" */
export enum Lp_Value_Daily_Histories_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ClpTotalSupply = 'clp_total_supply',
  /** column name */
  Date = 'date',
  /** column name */
  HoldingClbValue = 'holding_clb_value',
  /** column name */
  HoldingValue = 'holding_value',
  /** column name */
  PendingClbValue = 'pending_clb_value',
  /** column name */
  PendingValue = 'pending_value'
}

/** aggregate stddev on columns */
export type Lp_Value_Daily_Histories_Stddev_Fields = {
  __typename?: 'lp_value_daily_histories_stddev_fields';
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Lp_Value_Daily_Histories_Stddev_Pop_Fields = {
  __typename?: 'lp_value_daily_histories_stddev_pop_fields';
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Lp_Value_Daily_Histories_Stddev_Samp_Fields = {
  __typename?: 'lp_value_daily_histories_stddev_samp_fields';
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "lp_value_daily_histories" */
export type Lp_Value_Daily_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lp_Value_Daily_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lp_Value_Daily_Histories_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['citext']['input']>;
  clp_total_supply?: InputMaybe<Scalars['numeric']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  holding_clb_value?: InputMaybe<Scalars['numeric']['input']>;
  holding_value?: InputMaybe<Scalars['numeric']['input']>;
  pending_clb_value?: InputMaybe<Scalars['numeric']['input']>;
  pending_value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Lp_Value_Daily_Histories_Sum_Fields = {
  __typename?: 'lp_value_daily_histories_sum_fields';
  clp_total_supply?: Maybe<Scalars['numeric']['output']>;
  holding_clb_value?: Maybe<Scalars['numeric']['output']>;
  holding_value?: Maybe<Scalars['numeric']['output']>;
  pending_clb_value?: Maybe<Scalars['numeric']['output']>;
  pending_value?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Lp_Value_Daily_Histories_Var_Pop_Fields = {
  __typename?: 'lp_value_daily_histories_var_pop_fields';
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Lp_Value_Daily_Histories_Var_Samp_Fields = {
  __typename?: 'lp_value_daily_histories_var_samp_fields';
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Lp_Value_Daily_Histories_Variance_Fields = {
  __typename?: 'lp_value_daily_histories_variance_fields';
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "lp_value_histories" */
export type Lp_Value_Histories = {
  __typename?: 'lp_value_histories';
  address: Scalars['citext']['output'];
  block_number: Scalars['numeric']['output'];
  block_timestamp: Scalars['numeric']['output'];
  clp_total_supply: Scalars['numeric']['output'];
  holding_clb_value: Scalars['numeric']['output'];
  holding_value: Scalars['numeric']['output'];
  pending_clb_value: Scalars['numeric']['output'];
  pending_value: Scalars['numeric']['output'];
};

/** aggregated selection of "lp_value_histories" */
export type Lp_Value_Histories_Aggregate = {
  __typename?: 'lp_value_histories_aggregate';
  aggregate?: Maybe<Lp_Value_Histories_Aggregate_Fields>;
  nodes: Array<Lp_Value_Histories>;
};

/** aggregate fields of "lp_value_histories" */
export type Lp_Value_Histories_Aggregate_Fields = {
  __typename?: 'lp_value_histories_aggregate_fields';
  avg?: Maybe<Lp_Value_Histories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lp_Value_Histories_Max_Fields>;
  min?: Maybe<Lp_Value_Histories_Min_Fields>;
  stddev?: Maybe<Lp_Value_Histories_Stddev_Fields>;
  stddev_pop?: Maybe<Lp_Value_Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lp_Value_Histories_Stddev_Samp_Fields>;
  sum?: Maybe<Lp_Value_Histories_Sum_Fields>;
  var_pop?: Maybe<Lp_Value_Histories_Var_Pop_Fields>;
  var_samp?: Maybe<Lp_Value_Histories_Var_Samp_Fields>;
  variance?: Maybe<Lp_Value_Histories_Variance_Fields>;
};


/** aggregate fields of "lp_value_histories" */
export type Lp_Value_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lp_Value_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Lp_Value_Histories_Avg_Fields = {
  __typename?: 'lp_value_histories_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "lp_value_histories". All fields are combined with a logical 'AND'. */
export type Lp_Value_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Lp_Value_Histories_Bool_Exp>>;
  _not?: InputMaybe<Lp_Value_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Lp_Value_Histories_Bool_Exp>>;
  address?: InputMaybe<Citext_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  block_timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  clp_total_supply?: InputMaybe<Numeric_Comparison_Exp>;
  holding_clb_value?: InputMaybe<Numeric_Comparison_Exp>;
  holding_value?: InputMaybe<Numeric_Comparison_Exp>;
  pending_clb_value?: InputMaybe<Numeric_Comparison_Exp>;
  pending_value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Lp_Value_Histories_Max_Fields = {
  __typename?: 'lp_value_histories_max_fields';
  address?: Maybe<Scalars['citext']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  clp_total_supply?: Maybe<Scalars['numeric']['output']>;
  holding_clb_value?: Maybe<Scalars['numeric']['output']>;
  holding_value?: Maybe<Scalars['numeric']['output']>;
  pending_clb_value?: Maybe<Scalars['numeric']['output']>;
  pending_value?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Lp_Value_Histories_Min_Fields = {
  __typename?: 'lp_value_histories_min_fields';
  address?: Maybe<Scalars['citext']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  clp_total_supply?: Maybe<Scalars['numeric']['output']>;
  holding_clb_value?: Maybe<Scalars['numeric']['output']>;
  holding_value?: Maybe<Scalars['numeric']['output']>;
  pending_clb_value?: Maybe<Scalars['numeric']['output']>;
  pending_value?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "lp_value_histories". */
export type Lp_Value_Histories_Order_By = {
  address?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  clp_total_supply?: InputMaybe<Order_By>;
  holding_clb_value?: InputMaybe<Order_By>;
  holding_value?: InputMaybe<Order_By>;
  pending_clb_value?: InputMaybe<Order_By>;
  pending_value?: InputMaybe<Order_By>;
};

/** select columns of table "lp_value_histories" */
export enum Lp_Value_Histories_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  BlockTimestamp = 'block_timestamp',
  /** column name */
  ClpTotalSupply = 'clp_total_supply',
  /** column name */
  HoldingClbValue = 'holding_clb_value',
  /** column name */
  HoldingValue = 'holding_value',
  /** column name */
  PendingClbValue = 'pending_clb_value',
  /** column name */
  PendingValue = 'pending_value'
}

/** aggregate stddev on columns */
export type Lp_Value_Histories_Stddev_Fields = {
  __typename?: 'lp_value_histories_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Lp_Value_Histories_Stddev_Pop_Fields = {
  __typename?: 'lp_value_histories_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Lp_Value_Histories_Stddev_Samp_Fields = {
  __typename?: 'lp_value_histories_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "lp_value_histories" */
export type Lp_Value_Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lp_Value_Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lp_Value_Histories_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['citext']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  block_timestamp?: InputMaybe<Scalars['numeric']['input']>;
  clp_total_supply?: InputMaybe<Scalars['numeric']['input']>;
  holding_clb_value?: InputMaybe<Scalars['numeric']['input']>;
  holding_value?: InputMaybe<Scalars['numeric']['input']>;
  pending_clb_value?: InputMaybe<Scalars['numeric']['input']>;
  pending_value?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Lp_Value_Histories_Sum_Fields = {
  __typename?: 'lp_value_histories_sum_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['numeric']['output']>;
  clp_total_supply?: Maybe<Scalars['numeric']['output']>;
  holding_clb_value?: Maybe<Scalars['numeric']['output']>;
  holding_value?: Maybe<Scalars['numeric']['output']>;
  pending_clb_value?: Maybe<Scalars['numeric']['output']>;
  pending_value?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Lp_Value_Histories_Var_Pop_Fields = {
  __typename?: 'lp_value_histories_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Lp_Value_Histories_Var_Samp_Fields = {
  __typename?: 'lp_value_histories_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Lp_Value_Histories_Variance_Fields = {
  __typename?: 'lp_value_histories_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  clp_total_supply?: Maybe<Scalars['Float']['output']>;
  holding_clb_value?: Maybe<Scalars['Float']['output']>;
  holding_value?: Maybe<Scalars['Float']['output']>;
  pending_clb_value?: Maybe<Scalars['Float']['output']>;
  pending_value?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account_counts" */
  account_counts: Array<Account_Counts>;
  /** fetch aggregated fields from the table: "account_counts" */
  account_counts_aggregate: Account_Counts_Aggregate;
  /** fetch data from the table: "account_counts" using primary key columns */
  account_counts_by_pk?: Maybe<Account_Counts>;
  /** fetch data from the table: "bin_value_histories" */
  bin_value_histories: Array<Bin_Value_Histories>;
  /** fetch aggregated fields from the table: "bin_value_histories" */
  bin_value_histories_aggregate: Bin_Value_Histories_Aggregate;
  /** fetch data from the table: "bin_value_histories" using primary key columns */
  bin_value_histories_by_pk?: Maybe<Bin_Value_Histories>;
  /** fetch data from the table: "lp_bin_value_histories" */
  lp_bin_value_histories: Array<Lp_Bin_Value_Histories>;
  /** fetch aggregated fields from the table: "lp_bin_value_histories" */
  lp_bin_value_histories_aggregate: Lp_Bin_Value_Histories_Aggregate;
  /** fetch data from the table: "lp_bin_value_histories" using primary key columns */
  lp_bin_value_histories_by_pk?: Maybe<Lp_Bin_Value_Histories>;
  /** fetch data from the table: "lp_liquidity_flows" */
  lp_liquidity_flows: Array<Lp_Liquidity_Flows>;
  /** fetch aggregated fields from the table: "lp_liquidity_flows" */
  lp_liquidity_flows_aggregate: Lp_Liquidity_Flows_Aggregate;
  /** fetch data from the table: "lp_liquidity_flows" using primary key columns */
  lp_liquidity_flows_by_pk?: Maybe<Lp_Liquidity_Flows>;
  /** fetch data from the table: "lp_performances" */
  lp_performances: Array<Lp_Performances>;
  /** fetch aggregated fields from the table: "lp_performances" */
  lp_performances_aggregate: Lp_Performances_Aggregate;
  /** fetch data from the table: "lp_performances" using primary key columns */
  lp_performances_by_pk?: Maybe<Lp_Performances>;
  /** fetch data from the table: "lp_value_daily_histories" */
  lp_value_daily_histories: Array<Lp_Value_Daily_Histories>;
  /** fetch aggregated fields from the table: "lp_value_daily_histories" */
  lp_value_daily_histories_aggregate: Lp_Value_Daily_Histories_Aggregate;
  /** fetch data from the table: "lp_value_daily_histories" using primary key columns */
  lp_value_daily_histories_by_pk?: Maybe<Lp_Value_Daily_Histories>;
  /** fetch data from the table: "lp_value_histories" */
  lp_value_histories: Array<Lp_Value_Histories>;
  /** fetch aggregated fields from the table: "lp_value_histories" */
  lp_value_histories_aggregate: Lp_Value_Histories_Aggregate;
  /** fetch data from the table: "lp_value_histories" using primary key columns */
  lp_value_histories_by_pk?: Maybe<Lp_Value_Histories>;
  /** fetch data from the table: "trading_stats" */
  trading_stats: Array<Trading_Stats>;
  /** fetch aggregated fields from the table: "trading_stats" */
  trading_stats_aggregate: Trading_Stats_Aggregate;
  /** fetch data from the table: "trading_stats" using primary key columns */
  trading_stats_by_pk?: Maybe<Trading_Stats>;
};


export type Query_RootAccount_CountsArgs = {
  distinct_on?: InputMaybe<Array<Account_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Counts_Order_By>>;
  where?: InputMaybe<Account_Counts_Bool_Exp>;
};


export type Query_RootAccount_Counts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Counts_Order_By>>;
  where?: InputMaybe<Account_Counts_Bool_Exp>;
};


export type Query_RootAccount_Counts_By_PkArgs = {
  date: Scalars['date']['input'];
};


export type Query_RootBin_Value_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Bin_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bin_Value_Histories_Order_By>>;
  where?: InputMaybe<Bin_Value_Histories_Bool_Exp>;
};


export type Query_RootBin_Value_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bin_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bin_Value_Histories_Order_By>>;
  where?: InputMaybe<Bin_Value_Histories_Bool_Exp>;
};


export type Query_RootBin_Value_Histories_By_PkArgs = {
  block_number: Scalars['numeric']['input'];
  fee_rate: Scalars['Int']['input'];
  market: Scalars['citext']['input'];
};


export type Query_RootLp_Bin_Value_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Lp_Bin_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Bin_Value_Histories_Order_By>>;
  where?: InputMaybe<Lp_Bin_Value_Histories_Bool_Exp>;
};


export type Query_RootLp_Bin_Value_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Bin_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Bin_Value_Histories_Order_By>>;
  where?: InputMaybe<Lp_Bin_Value_Histories_Bool_Exp>;
};


export type Query_RootLp_Bin_Value_Histories_By_PkArgs = {
  address: Scalars['citext']['input'];
  block_number: Scalars['numeric']['input'];
  fee_rate: Scalars['Int']['input'];
  market: Scalars['citext']['input'];
};


export type Query_RootLp_Liquidity_FlowsArgs = {
  distinct_on?: InputMaybe<Array<Lp_Liquidity_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Liquidity_Flows_Order_By>>;
  where?: InputMaybe<Lp_Liquidity_Flows_Bool_Exp>;
};


export type Query_RootLp_Liquidity_Flows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Liquidity_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Liquidity_Flows_Order_By>>;
  where?: InputMaybe<Lp_Liquidity_Flows_Bool_Exp>;
};


export type Query_RootLp_Liquidity_Flows_By_PkArgs = {
  address: Scalars['citext']['input'];
  date: Scalars['date']['input'];
};


export type Query_RootLp_PerformancesArgs = {
  distinct_on?: InputMaybe<Array<Lp_Performances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Performances_Order_By>>;
  where?: InputMaybe<Lp_Performances_Bool_Exp>;
};


export type Query_RootLp_Performances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Performances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Performances_Order_By>>;
  where?: InputMaybe<Lp_Performances_Bool_Exp>;
};


export type Query_RootLp_Performances_By_PkArgs = {
  address: Scalars['citext']['input'];
  date: Scalars['date']['input'];
};


export type Query_RootLp_Value_Daily_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Lp_Value_Daily_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Value_Daily_Histories_Order_By>>;
  where?: InputMaybe<Lp_Value_Daily_Histories_Bool_Exp>;
};


export type Query_RootLp_Value_Daily_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Value_Daily_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Value_Daily_Histories_Order_By>>;
  where?: InputMaybe<Lp_Value_Daily_Histories_Bool_Exp>;
};


export type Query_RootLp_Value_Daily_Histories_By_PkArgs = {
  address: Scalars['citext']['input'];
  date: Scalars['date']['input'];
};


export type Query_RootLp_Value_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Lp_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Value_Histories_Order_By>>;
  where?: InputMaybe<Lp_Value_Histories_Bool_Exp>;
};


export type Query_RootLp_Value_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Value_Histories_Order_By>>;
  where?: InputMaybe<Lp_Value_Histories_Bool_Exp>;
};


export type Query_RootLp_Value_Histories_By_PkArgs = {
  address: Scalars['citext']['input'];
  block_number: Scalars['numeric']['input'];
};


export type Query_RootTrading_StatsArgs = {
  distinct_on?: InputMaybe<Array<Trading_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trading_Stats_Order_By>>;
  where?: InputMaybe<Trading_Stats_Bool_Exp>;
};


export type Query_RootTrading_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trading_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trading_Stats_Order_By>>;
  where?: InputMaybe<Trading_Stats_Bool_Exp>;
};


export type Query_RootTrading_Stats_By_PkArgs = {
  date: Scalars['date']['input'];
  market: Scalars['citext']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account_counts" */
  account_counts: Array<Account_Counts>;
  /** fetch aggregated fields from the table: "account_counts" */
  account_counts_aggregate: Account_Counts_Aggregate;
  /** fetch data from the table: "account_counts" using primary key columns */
  account_counts_by_pk?: Maybe<Account_Counts>;
  /** fetch data from the table in a streaming manner: "account_counts" */
  account_counts_stream: Array<Account_Counts>;
  /** fetch data from the table: "bin_value_histories" */
  bin_value_histories: Array<Bin_Value_Histories>;
  /** fetch aggregated fields from the table: "bin_value_histories" */
  bin_value_histories_aggregate: Bin_Value_Histories_Aggregate;
  /** fetch data from the table: "bin_value_histories" using primary key columns */
  bin_value_histories_by_pk?: Maybe<Bin_Value_Histories>;
  /** fetch data from the table in a streaming manner: "bin_value_histories" */
  bin_value_histories_stream: Array<Bin_Value_Histories>;
  /** fetch data from the table: "lp_bin_value_histories" */
  lp_bin_value_histories: Array<Lp_Bin_Value_Histories>;
  /** fetch aggregated fields from the table: "lp_bin_value_histories" */
  lp_bin_value_histories_aggregate: Lp_Bin_Value_Histories_Aggregate;
  /** fetch data from the table: "lp_bin_value_histories" using primary key columns */
  lp_bin_value_histories_by_pk?: Maybe<Lp_Bin_Value_Histories>;
  /** fetch data from the table in a streaming manner: "lp_bin_value_histories" */
  lp_bin_value_histories_stream: Array<Lp_Bin_Value_Histories>;
  /** fetch data from the table: "lp_liquidity_flows" */
  lp_liquidity_flows: Array<Lp_Liquidity_Flows>;
  /** fetch aggregated fields from the table: "lp_liquidity_flows" */
  lp_liquidity_flows_aggregate: Lp_Liquidity_Flows_Aggregate;
  /** fetch data from the table: "lp_liquidity_flows" using primary key columns */
  lp_liquidity_flows_by_pk?: Maybe<Lp_Liquidity_Flows>;
  /** fetch data from the table in a streaming manner: "lp_liquidity_flows" */
  lp_liquidity_flows_stream: Array<Lp_Liquidity_Flows>;
  /** fetch data from the table: "lp_performances" */
  lp_performances: Array<Lp_Performances>;
  /** fetch aggregated fields from the table: "lp_performances" */
  lp_performances_aggregate: Lp_Performances_Aggregate;
  /** fetch data from the table: "lp_performances" using primary key columns */
  lp_performances_by_pk?: Maybe<Lp_Performances>;
  /** fetch data from the table in a streaming manner: "lp_performances" */
  lp_performances_stream: Array<Lp_Performances>;
  /** fetch data from the table: "lp_value_daily_histories" */
  lp_value_daily_histories: Array<Lp_Value_Daily_Histories>;
  /** fetch aggregated fields from the table: "lp_value_daily_histories" */
  lp_value_daily_histories_aggregate: Lp_Value_Daily_Histories_Aggregate;
  /** fetch data from the table: "lp_value_daily_histories" using primary key columns */
  lp_value_daily_histories_by_pk?: Maybe<Lp_Value_Daily_Histories>;
  /** fetch data from the table in a streaming manner: "lp_value_daily_histories" */
  lp_value_daily_histories_stream: Array<Lp_Value_Daily_Histories>;
  /** fetch data from the table: "lp_value_histories" */
  lp_value_histories: Array<Lp_Value_Histories>;
  /** fetch aggregated fields from the table: "lp_value_histories" */
  lp_value_histories_aggregate: Lp_Value_Histories_Aggregate;
  /** fetch data from the table: "lp_value_histories" using primary key columns */
  lp_value_histories_by_pk?: Maybe<Lp_Value_Histories>;
  /** fetch data from the table in a streaming manner: "lp_value_histories" */
  lp_value_histories_stream: Array<Lp_Value_Histories>;
  /** fetch data from the table: "trading_stats" */
  trading_stats: Array<Trading_Stats>;
  /** fetch aggregated fields from the table: "trading_stats" */
  trading_stats_aggregate: Trading_Stats_Aggregate;
  /** fetch data from the table: "trading_stats" using primary key columns */
  trading_stats_by_pk?: Maybe<Trading_Stats>;
  /** fetch data from the table in a streaming manner: "trading_stats" */
  trading_stats_stream: Array<Trading_Stats>;
};


export type Subscription_RootAccount_CountsArgs = {
  distinct_on?: InputMaybe<Array<Account_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Counts_Order_By>>;
  where?: InputMaybe<Account_Counts_Bool_Exp>;
};


export type Subscription_RootAccount_Counts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Counts_Order_By>>;
  where?: InputMaybe<Account_Counts_Bool_Exp>;
};


export type Subscription_RootAccount_Counts_By_PkArgs = {
  date: Scalars['date']['input'];
};


export type Subscription_RootAccount_Counts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Account_Counts_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Counts_Bool_Exp>;
};


export type Subscription_RootBin_Value_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Bin_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bin_Value_Histories_Order_By>>;
  where?: InputMaybe<Bin_Value_Histories_Bool_Exp>;
};


export type Subscription_RootBin_Value_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bin_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bin_Value_Histories_Order_By>>;
  where?: InputMaybe<Bin_Value_Histories_Bool_Exp>;
};


export type Subscription_RootBin_Value_Histories_By_PkArgs = {
  block_number: Scalars['numeric']['input'];
  fee_rate: Scalars['Int']['input'];
  market: Scalars['citext']['input'];
};


export type Subscription_RootBin_Value_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bin_Value_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Bin_Value_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Bin_Value_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Lp_Bin_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Bin_Value_Histories_Order_By>>;
  where?: InputMaybe<Lp_Bin_Value_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Bin_Value_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Bin_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Bin_Value_Histories_Order_By>>;
  where?: InputMaybe<Lp_Bin_Value_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Bin_Value_Histories_By_PkArgs = {
  address: Scalars['citext']['input'];
  block_number: Scalars['numeric']['input'];
  fee_rate: Scalars['Int']['input'];
  market: Scalars['citext']['input'];
};


export type Subscription_RootLp_Bin_Value_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lp_Bin_Value_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Lp_Bin_Value_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Liquidity_FlowsArgs = {
  distinct_on?: InputMaybe<Array<Lp_Liquidity_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Liquidity_Flows_Order_By>>;
  where?: InputMaybe<Lp_Liquidity_Flows_Bool_Exp>;
};


export type Subscription_RootLp_Liquidity_Flows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Liquidity_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Liquidity_Flows_Order_By>>;
  where?: InputMaybe<Lp_Liquidity_Flows_Bool_Exp>;
};


export type Subscription_RootLp_Liquidity_Flows_By_PkArgs = {
  address: Scalars['citext']['input'];
  date: Scalars['date']['input'];
};


export type Subscription_RootLp_Liquidity_Flows_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lp_Liquidity_Flows_Stream_Cursor_Input>>;
  where?: InputMaybe<Lp_Liquidity_Flows_Bool_Exp>;
};


export type Subscription_RootLp_PerformancesArgs = {
  distinct_on?: InputMaybe<Array<Lp_Performances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Performances_Order_By>>;
  where?: InputMaybe<Lp_Performances_Bool_Exp>;
};


export type Subscription_RootLp_Performances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Performances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Performances_Order_By>>;
  where?: InputMaybe<Lp_Performances_Bool_Exp>;
};


export type Subscription_RootLp_Performances_By_PkArgs = {
  address: Scalars['citext']['input'];
  date: Scalars['date']['input'];
};


export type Subscription_RootLp_Performances_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lp_Performances_Stream_Cursor_Input>>;
  where?: InputMaybe<Lp_Performances_Bool_Exp>;
};


export type Subscription_RootLp_Value_Daily_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Lp_Value_Daily_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Value_Daily_Histories_Order_By>>;
  where?: InputMaybe<Lp_Value_Daily_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Value_Daily_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Value_Daily_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Value_Daily_Histories_Order_By>>;
  where?: InputMaybe<Lp_Value_Daily_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Value_Daily_Histories_By_PkArgs = {
  address: Scalars['citext']['input'];
  date: Scalars['date']['input'];
};


export type Subscription_RootLp_Value_Daily_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lp_Value_Daily_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Lp_Value_Daily_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Value_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Lp_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Value_Histories_Order_By>>;
  where?: InputMaybe<Lp_Value_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Value_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lp_Value_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lp_Value_Histories_Order_By>>;
  where?: InputMaybe<Lp_Value_Histories_Bool_Exp>;
};


export type Subscription_RootLp_Value_Histories_By_PkArgs = {
  address: Scalars['citext']['input'];
  block_number: Scalars['numeric']['input'];
};


export type Subscription_RootLp_Value_Histories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lp_Value_Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Lp_Value_Histories_Bool_Exp>;
};


export type Subscription_RootTrading_StatsArgs = {
  distinct_on?: InputMaybe<Array<Trading_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trading_Stats_Order_By>>;
  where?: InputMaybe<Trading_Stats_Bool_Exp>;
};


export type Subscription_RootTrading_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trading_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trading_Stats_Order_By>>;
  where?: InputMaybe<Trading_Stats_Bool_Exp>;
};


export type Subscription_RootTrading_Stats_By_PkArgs = {
  date: Scalars['date']['input'];
  market: Scalars['citext']['input'];
};


export type Subscription_RootTrading_Stats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Trading_Stats_Stream_Cursor_Input>>;
  where?: InputMaybe<Trading_Stats_Bool_Exp>;
};

/** columns and relationships of "trading_stats" */
export type Trading_Stats = {
  __typename?: 'trading_stats';
  close_position_count: Scalars['bigint']['output'];
  date: Scalars['date']['output'];
  market: Scalars['citext']['output'];
  open_interest_long: Scalars['bigint']['output'];
  open_interest_short: Scalars['bigint']['output'];
  open_position_count: Scalars['bigint']['output'];
  total_maker_margin: Scalars['numeric']['output'];
  total_taker_margin: Scalars['numeric']['output'];
  total_trading_fee: Scalars['numeric']['output'];
};

/** aggregated selection of "trading_stats" */
export type Trading_Stats_Aggregate = {
  __typename?: 'trading_stats_aggregate';
  aggregate?: Maybe<Trading_Stats_Aggregate_Fields>;
  nodes: Array<Trading_Stats>;
};

/** aggregate fields of "trading_stats" */
export type Trading_Stats_Aggregate_Fields = {
  __typename?: 'trading_stats_aggregate_fields';
  avg?: Maybe<Trading_Stats_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Trading_Stats_Max_Fields>;
  min?: Maybe<Trading_Stats_Min_Fields>;
  stddev?: Maybe<Trading_Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Trading_Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trading_Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Trading_Stats_Sum_Fields>;
  var_pop?: Maybe<Trading_Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Trading_Stats_Var_Samp_Fields>;
  variance?: Maybe<Trading_Stats_Variance_Fields>;
};


/** aggregate fields of "trading_stats" */
export type Trading_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trading_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Trading_Stats_Avg_Fields = {
  __typename?: 'trading_stats_avg_fields';
  close_position_count?: Maybe<Scalars['Float']['output']>;
  open_interest_long?: Maybe<Scalars['Float']['output']>;
  open_interest_short?: Maybe<Scalars['Float']['output']>;
  open_position_count?: Maybe<Scalars['Float']['output']>;
  total_maker_margin?: Maybe<Scalars['Float']['output']>;
  total_taker_margin?: Maybe<Scalars['Float']['output']>;
  total_trading_fee?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "trading_stats". All fields are combined with a logical 'AND'. */
export type Trading_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Trading_Stats_Bool_Exp>>;
  _not?: InputMaybe<Trading_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<Trading_Stats_Bool_Exp>>;
  close_position_count?: InputMaybe<Bigint_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  market?: InputMaybe<Citext_Comparison_Exp>;
  open_interest_long?: InputMaybe<Bigint_Comparison_Exp>;
  open_interest_short?: InputMaybe<Bigint_Comparison_Exp>;
  open_position_count?: InputMaybe<Bigint_Comparison_Exp>;
  total_maker_margin?: InputMaybe<Numeric_Comparison_Exp>;
  total_taker_margin?: InputMaybe<Numeric_Comparison_Exp>;
  total_trading_fee?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Trading_Stats_Max_Fields = {
  __typename?: 'trading_stats_max_fields';
  close_position_count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  market?: Maybe<Scalars['citext']['output']>;
  open_interest_long?: Maybe<Scalars['bigint']['output']>;
  open_interest_short?: Maybe<Scalars['bigint']['output']>;
  open_position_count?: Maybe<Scalars['bigint']['output']>;
  total_maker_margin?: Maybe<Scalars['numeric']['output']>;
  total_taker_margin?: Maybe<Scalars['numeric']['output']>;
  total_trading_fee?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Trading_Stats_Min_Fields = {
  __typename?: 'trading_stats_min_fields';
  close_position_count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  market?: Maybe<Scalars['citext']['output']>;
  open_interest_long?: Maybe<Scalars['bigint']['output']>;
  open_interest_short?: Maybe<Scalars['bigint']['output']>;
  open_position_count?: Maybe<Scalars['bigint']['output']>;
  total_maker_margin?: Maybe<Scalars['numeric']['output']>;
  total_taker_margin?: Maybe<Scalars['numeric']['output']>;
  total_trading_fee?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "trading_stats". */
export type Trading_Stats_Order_By = {
  close_position_count?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  market?: InputMaybe<Order_By>;
  open_interest_long?: InputMaybe<Order_By>;
  open_interest_short?: InputMaybe<Order_By>;
  open_position_count?: InputMaybe<Order_By>;
  total_maker_margin?: InputMaybe<Order_By>;
  total_taker_margin?: InputMaybe<Order_By>;
  total_trading_fee?: InputMaybe<Order_By>;
};

/** select columns of table "trading_stats" */
export enum Trading_Stats_Select_Column {
  /** column name */
  ClosePositionCount = 'close_position_count',
  /** column name */
  Date = 'date',
  /** column name */
  Market = 'market',
  /** column name */
  OpenInterestLong = 'open_interest_long',
  /** column name */
  OpenInterestShort = 'open_interest_short',
  /** column name */
  OpenPositionCount = 'open_position_count',
  /** column name */
  TotalMakerMargin = 'total_maker_margin',
  /** column name */
  TotalTakerMargin = 'total_taker_margin',
  /** column name */
  TotalTradingFee = 'total_trading_fee'
}

/** aggregate stddev on columns */
export type Trading_Stats_Stddev_Fields = {
  __typename?: 'trading_stats_stddev_fields';
  close_position_count?: Maybe<Scalars['Float']['output']>;
  open_interest_long?: Maybe<Scalars['Float']['output']>;
  open_interest_short?: Maybe<Scalars['Float']['output']>;
  open_position_count?: Maybe<Scalars['Float']['output']>;
  total_maker_margin?: Maybe<Scalars['Float']['output']>;
  total_taker_margin?: Maybe<Scalars['Float']['output']>;
  total_trading_fee?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Trading_Stats_Stddev_Pop_Fields = {
  __typename?: 'trading_stats_stddev_pop_fields';
  close_position_count?: Maybe<Scalars['Float']['output']>;
  open_interest_long?: Maybe<Scalars['Float']['output']>;
  open_interest_short?: Maybe<Scalars['Float']['output']>;
  open_position_count?: Maybe<Scalars['Float']['output']>;
  total_maker_margin?: Maybe<Scalars['Float']['output']>;
  total_taker_margin?: Maybe<Scalars['Float']['output']>;
  total_trading_fee?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Trading_Stats_Stddev_Samp_Fields = {
  __typename?: 'trading_stats_stddev_samp_fields';
  close_position_count?: Maybe<Scalars['Float']['output']>;
  open_interest_long?: Maybe<Scalars['Float']['output']>;
  open_interest_short?: Maybe<Scalars['Float']['output']>;
  open_position_count?: Maybe<Scalars['Float']['output']>;
  total_maker_margin?: Maybe<Scalars['Float']['output']>;
  total_taker_margin?: Maybe<Scalars['Float']['output']>;
  total_trading_fee?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "trading_stats" */
export type Trading_Stats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Trading_Stats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Trading_Stats_Stream_Cursor_Value_Input = {
  close_position_count?: InputMaybe<Scalars['bigint']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  market?: InputMaybe<Scalars['citext']['input']>;
  open_interest_long?: InputMaybe<Scalars['bigint']['input']>;
  open_interest_short?: InputMaybe<Scalars['bigint']['input']>;
  open_position_count?: InputMaybe<Scalars['bigint']['input']>;
  total_maker_margin?: InputMaybe<Scalars['numeric']['input']>;
  total_taker_margin?: InputMaybe<Scalars['numeric']['input']>;
  total_trading_fee?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Trading_Stats_Sum_Fields = {
  __typename?: 'trading_stats_sum_fields';
  close_position_count?: Maybe<Scalars['bigint']['output']>;
  open_interest_long?: Maybe<Scalars['bigint']['output']>;
  open_interest_short?: Maybe<Scalars['bigint']['output']>;
  open_position_count?: Maybe<Scalars['bigint']['output']>;
  total_maker_margin?: Maybe<Scalars['numeric']['output']>;
  total_taker_margin?: Maybe<Scalars['numeric']['output']>;
  total_trading_fee?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Trading_Stats_Var_Pop_Fields = {
  __typename?: 'trading_stats_var_pop_fields';
  close_position_count?: Maybe<Scalars['Float']['output']>;
  open_interest_long?: Maybe<Scalars['Float']['output']>;
  open_interest_short?: Maybe<Scalars['Float']['output']>;
  open_position_count?: Maybe<Scalars['Float']['output']>;
  total_maker_margin?: Maybe<Scalars['Float']['output']>;
  total_taker_margin?: Maybe<Scalars['Float']['output']>;
  total_trading_fee?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Trading_Stats_Var_Samp_Fields = {
  __typename?: 'trading_stats_var_samp_fields';
  close_position_count?: Maybe<Scalars['Float']['output']>;
  open_interest_long?: Maybe<Scalars['Float']['output']>;
  open_interest_short?: Maybe<Scalars['Float']['output']>;
  open_position_count?: Maybe<Scalars['Float']['output']>;
  total_maker_margin?: Maybe<Scalars['Float']['output']>;
  total_taker_margin?: Maybe<Scalars['Float']['output']>;
  total_trading_fee?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Trading_Stats_Variance_Fields = {
  __typename?: 'trading_stats_variance_fields';
  close_position_count?: Maybe<Scalars['Float']['output']>;
  open_interest_long?: Maybe<Scalars['Float']['output']>;
  open_interest_short?: Maybe<Scalars['Float']['output']>;
  open_position_count?: Maybe<Scalars['Float']['output']>;
  total_maker_margin?: Maybe<Scalars['Float']['output']>;
  total_taker_margin?: Maybe<Scalars['Float']['output']>;
  total_trading_fee?: Maybe<Scalars['Float']['output']>;
};

export type LpPerformancesByPkQueryVariables = Exact<{
  address: Scalars['citext']['input'];
  date: Scalars['date']['input'];
}>;


export type LpPerformancesByPkQuery = { __typename?: 'query_root', lp_performances_by_pk?: { __typename?: 'lp_performances', address: string, date: string, pnl_all: any, pnl_d180: any, pnl_d365: any, pnl_d30: any, pnl_d7: any, pnl_d90: any, rate_all: any, rate_d180: any, rate_d30: any, rate_d365: any, rate_d7: any, rate_d90: any } | null };


export const LpPerformancesByPkDocument = gql`
    query LpPerformancesByPk($address: citext!, $date: date!) {
  lp_performances_by_pk(address: $address, date: $date) {
    address
    date
    pnl_all
    pnl_d180
    pnl_d365
    pnl_d30
    pnl_d7
    pnl_d90
    rate_all
    rate_d180
    rate_d30
    rate_d365
    rate_d7
    rate_d90
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    LpPerformancesByPk(variables: LpPerformancesByPkQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LpPerformancesByPkQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LpPerformancesByPkQuery>(LpPerformancesByPkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LpPerformancesByPk', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;