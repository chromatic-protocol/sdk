import { GraphQLClient, RequestMiddleware, Variables } from "@chromatic-protocol/graphql-request";

import JSONbig from "json-bigint";
import { PublicClient } from "viem";
import { HASURA_API_URL, SUBGRAPH_API_URL } from "../../const";
import * as Analytics from "./sdk/analytics";
import * as Lp from "./sdk/lp";
import * as Performance from "./sdk/performance";
import * as Position from "./sdk/position";
import * as Subgraph from "./sdk/subgraph";

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

const urlMap = ({
  hasura_api_url,
  subgraph_api_url,
}: {
  hasura_api_url: string;
  subgraph_api_url: string;
}) => [
  {
    operations: getOperations(Lp),
    url: `${subgraph_api_url}/chromatic-lp`,
  },
  {
    operations: [...getOperations(Subgraph), "getCLBTokenTotalSupplies"],
    url: `${subgraph_api_url}/chromatic-subgraph`,
  },
  {
    operations: getOperations(Performance),
    url: `${hasura_api_url}`,
  },
  {
    operations: getOperations(Analytics),
    url: `${hasura_api_url}`,
  },
  {
    operations: getOperations(Position),
    url: `${subgraph_api_url}/chromatic-subgraph`,
  },
];

const getRequestMiddleware =
  (urlMap: UrlMap): RequestMiddleware<Variables> =>
  (request) => {
    const operationName = (request.operationName || "").toLowerCase();
    const url = urlMap.find((url) =>
      url.operations.map((operation) => operation.toLowerCase()).includes(operationName)
    )?.url;

    if (!url) {
      throw new Error("invalid operation");
    }
    return {
      ...request,
      url,
    };
  };

export const getGraphqlClient = (chainIdOrClient: string | PublicClient | undefined) => {
  const chainId =
    typeof chainIdOrClient === "string" ? chainIdOrClient : chainIdOrClient?.chain?.id.toString();
  if (!chainId) throw new Error("Unknown chain id");
  const hasura_api_url = HASURA_API_URL[chainId];
  const subgraph_api_url = SUBGRAPH_API_URL[chainId];
  return new GraphQLClient("", {
    requestMiddleware: getRequestMiddleware(urlMap({ hasura_api_url, subgraph_api_url })),
    jsonSerializer: JSONbig({ useNativeBigInt: true }),
  });
};

export { Analytics, Lp, Performance, Position, Subgraph };
