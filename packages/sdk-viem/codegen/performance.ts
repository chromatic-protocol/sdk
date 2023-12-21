import { gql } from 'graphql-request';

export const LP_PERFORMANCES = gql`
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
