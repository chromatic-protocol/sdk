export const SUBGRAPH_API_URL: Record<string, string> = {
  "42161": "https://graph-arbitrum-one.api.chromatic.finance/subgraphs/name", // arbitrum one
  "421614": "https://graph-arbitrum-sepolia.api.chromatic.finance/subgraphs/name", // arbitrum sepolia
};

export const HASURA_API_URL: Record<string, string> = {
  "42161": "https://hasura-arbitrum-one.api.chromatic.finance/v1/graphql", // arbitrum one
  "421614": "https://hasura-arbitrum-sepolia.api.chromatic.finance/v1/graphql", //arbitrum_sepolia
};

export const FEE_RATES = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9, // 0.01% ~ 0.09%, step 0.01%
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90, // 0.1% ~ 0.9%, step 0.1%
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900, // 1% ~ 9%, step 1%
  1000,
  1500,
  2000,
  2500,
  3000,
  3500,
  4000,
  4500,
  5000, // 10% ~ 50%, step 5%
];

export const MIN_GAS_LIMIT_SETTLE_ALL = 10n ** 7n * 5n;
export const MIN_GAS_LIMIT_SETTLE_HALF = MIN_GAS_LIMIT_SETTLE_ALL / 2n;
