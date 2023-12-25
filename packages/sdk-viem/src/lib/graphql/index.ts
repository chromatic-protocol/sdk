import { GraphQLClient, RequestMiddleware, Variables } from "graphql-request";
export const SUBGRAPH_API_URL =
  "https://graph-arbitrum-sepolia.api.chromatic.finance/subgraphs/name";
export const HASURA_API_URL = "https://hasura-arbitrum-sepolia.api.chromatic.finance/v1/graphql";

import * as Analytics from "./sdk/analytics";
import * as Lp from "./sdk/lp";
import * as Performance from "./sdk/performance";
import * as Position from "./sdk/position";
import * as Subgraph from "./sdk/subgraph";
import JSONbig from "json-bigint";
type UrlMap = {
  operations: string[];
  url: string;
}[];

function getOperations(object: Object) {
  const documentSuffix = "Document";
  return Object.keys(object)
    .filter((k) => k.endsWith(documentSuffix))
    .map((k) => k.slice(0, -documentSuffix.length));
}

const urlMap: UrlMap = [
  {
    operations: getOperations(Lp),
    url: `${SUBGRAPH_API_URL}/chromatic-lp`,
  },
  {
    operations: getOperations(Subgraph),
    url: `${SUBGRAPH_API_URL}/chromatic-subgraph`,
  },
  {
    operations: getOperations(Performance),
    url: `${HASURA_API_URL}`,
  },
  {
    operations: getOperations(Analytics),
    url: `${HASURA_API_URL}`,
  },
  {
    operations: getOperations(Position),
    url: `${SUBGRAPH_API_URL}/chromatic-subgraph`,
  },
];

const getRequestMiddleware =
  (urlMap: UrlMap): RequestMiddleware<Variables> =>
  (request) => {
    const url = urlMap.find((url) => url.operations.includes(request.operationName!))?.url;
    if (!url) {
      throw new Error("invalid operation");
    }
    return {
      ...request,
      url,
    };
  };

const graphClient = new GraphQLClient("", {
  requestMiddleware: getRequestMiddleware(urlMap),
  jsonSerializer: JSONbig({ useNativeBigInt: true }),
});

const lpGraphSdk = Lp.getSdk(graphClient);
const performanceSdk = Performance.getSdk(graphClient);
const analyticsSdk = Analytics.getSdk(graphClient);
const positionSdk = Position.getSdk(graphClient);
const subgraphSdk = Subgraph.getSdk(graphClient);
export { analyticsSdk, lpGraphSdk, performanceSdk, positionSdk, subgraphSdk };
