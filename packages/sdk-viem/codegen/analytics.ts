import { gql } from '@chromatic-protocol/graphql-request';

export const CLP_DAILY_HISTORIES = gql`
  query ClpDailyHistories($start: date!, $end: date!, $address: citext!) {
    lp_value_daily_histories(
      order_by: { date: desc }
      where: { date: { _gte: $start, _lte: $end }, address: { _eq: $address } }
    ) {
      clp_total_supply
      date
      holding_value
      holding_clb_value
      pending_clb_value
      pending_value
    }
  }
`;

export const CLP_HOURLY_HISTORIES = gql`
  query ClpHourlyHistories($start: numeric!, $end: numeric!, $address: citext!) {
    lp_value_histories(
      order_by: { block_timestamp: desc }
      where: { block_timestamp: { _gte: $start, _lte: $end }, address: { _eq: $address } }
    ) {
      clp_total_supply
      block_timestamp
      holding_value
      holding_clb_value
      pending_clb_value
      pending_value
    }
  }
`;
