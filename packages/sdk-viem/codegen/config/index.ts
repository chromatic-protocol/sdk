import type { CodegenConfig } from "@graphql-codegen/cli";
import { HASURA_API_URL, SUBGRAPH_API_URL } from "../../src/const";


const GENERATED_PATH = "src/lib/graphql/sdk";
const PLUGINS = ["typescript", "typescript-operations", "typescript-graphql-request"];

const CONFIG = {
  scalars: {
    Bytes: {
      input: "`0x${string}`",
      output: "`0x${string}`",
    },
    BigInt: {
      input: "string",
      output: "string",
    },
    citext: {
      input: "string",
      output: "string",
    },
    date: {
      input: "string",
      output: "string",
    },
  },
};

const loadConfig: CodegenConfig = {
  overwrite: true,
  noSilentErrors: true,
  generates: {
    [`${GENERATED_PATH}/lp.ts`]: {
      documents: "codegen/lp.ts",
      schema: `${SUBGRAPH_API_URL}/chromatic-lp`,
      plugins: PLUGINS,
      config: CONFIG,
    },
    [`${GENERATED_PATH}/position.ts`]: {
      documents: "codegen/position.ts",
      schema: `${SUBGRAPH_API_URL}/chromatic-subgraph`,
      plugins: PLUGINS,
      config: CONFIG,
    },
    [`${GENERATED_PATH}/subgraph.ts`]: {
      documents: "codegen/subgraph.ts",
      schema: `${SUBGRAPH_API_URL}/chromatic-subgraph`,
      plugins: PLUGINS,
      config: CONFIG,
    },
    [`${GENERATED_PATH}/performance.ts`]: {
      documents: "codegen/performance.ts",
      schema: `${HASURA_API_URL}`,
      plugins: PLUGINS,
      config: CONFIG,
    },
    [`${GENERATED_PATH}/analytics.ts`]: {
      documents: "codegen/analytics.ts",
      schema: `${HASURA_API_URL}`,
      plugins: PLUGINS,
      config: CONFIG,
    },
  },
};

export default loadConfig;
