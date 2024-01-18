import { GraphQLClient, RequestMiddleware, Variables } from "@chromatic-protocol/graphql-request";

import * as Analytics from "./sdk/analytics";
import * as Lp from "./sdk/lp";
import * as Performance from "./sdk/performance";
import * as Position from "./sdk/position";
import * as Subgraph from "./sdk/subgraph";
import JSONbig from "json-bigint";
import { HASURA_API_URL, SUBGRAPH_API_URL } from "../../const";
type UrlMap = {
  operations: string[];
  url: string;
}[];

function getOperations(object: Object) {
  const documentSuffix = "Document";
  return Object.keys(object)
    .filter((k) => k.endsWith(documentSuffix))
    .map((k) => k.slice(0, -documentSuffix.length).toLowerCase());
}

const urlMap: UrlMap = [
  {
    operations: getOperations(Lp),
    url: `${SUBGRAPH_API_URL}/chromatic-lp`,
  },
  {
    operations: [...getOperations(Subgraph), "getCLBTokenTotalSupplies"],
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
    // const headerOperationName = (request.headers as Record<string, string>).operationName;
    const operationName = (request.operationName || "").toLowerCase();
    const url = urlMap.find((url) =>
      url.operations.map((operation) => operation.toLowerCase()).includes(operationName)
    )?.url;
    // delete (request.headers as Record<string, string>).operationName;
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

export { analyticsSdk, lpGraphSdk, performanceSdk, positionSdk, subgraphSdk, graphClient };
