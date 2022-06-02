///NXTP Config Generator based on vector/modules/router/src/config.ts
import { existsSync, readFileSync } from "fs";

import { Type, Static } from "@sinclair/typebox";
import { config as dotenvConfig } from "dotenv";
import { ajv } from "@connext/nxtp-utils";

const DEFAULT_POLL_INTERVAL = 15_000;
const DEFAULT_POLL_ITERATIONS = 10;

dotenvConfig();

export const TDatabaseConfig = Type.Object({
  url: Type.String({ format: "uri" }),
});

export const Cartographer = Type.Object({
  pollInterval: Type.Integer({ minimum: 1000 }),
  pollIterations: Type.Integer({ minimum: 1 }),
  logLevel: Type.Union([
    Type.Literal("fatal"),
    Type.Literal("error"),
    Type.Literal("warn"),
    Type.Literal("info"),
    Type.Literal("debug"),
    Type.Literal("trace"),
    Type.Literal("silent"),
  ]),
  database: TDatabaseConfig,
  subgraphPrefix: Type.Optional(Type.String()),
  environment: Type.Union([Type.Literal("staging"), Type.Literal("production")]),
});

export type CartographerConfig = Static<typeof Cartographer>;

/**
 * Gets and validates the router config from the environment.
 *
 * @returns The router config with sensible defaults
 */
export const getEnvConfig = (): CartographerConfig => {
  let configJson: Record<string, any> = {};
  let configFile: any = {};

  try {
    configJson = JSON.parse(process.env.CARTOGRAPHER_CONFIG || "");
  } catch (e: unknown) {
    console.info("No CARTOGRAPHER_CONFIG exists, using config file and individual env vars");
  }
  try {
    let json: string;

    const path = process.env.CARTOGRAPHER_CONFIG_FILE ?? "config.json";
    if (existsSync(path)) {
      json = readFileSync(path, { encoding: "utf-8" });
      configFile = JSON.parse(json);
    }
  } catch (e: unknown) {
    console.error("Error reading config file!");
    process.exit(1);
  }

  const nxtpConfig: CartographerConfig = {
    pollInterval:
      process.env.CARTOGRAPHER_POLL_INTERVAL ||
      configJson.pollInterval ||
      configFile.pollInterval ||
      DEFAULT_POLL_INTERVAL,
    pollIterations:
      process.env.CARTOGRAPHER_POLL_ITERATIONS ||
      configJson.pollIterations ||
      configFile.pollIterations ||
      DEFAULT_POLL_ITERATIONS,
    logLevel:
      process.env.CARTOGRAPHER_LOG_LEVEL ||
      configJson.logLevel ||
      configFile.logLevel ||
      process.env.CARTOGRAPHER_LOG_LEVEL ||
      "info",
    database: { url: process.env.DATABASE_URL || configJson.databaseUrl || configFile.databaseUrl },
    subgraphPrefix: process.env.CARTOGRAPHER_SUBGRAPH_PREFIX || configJson.subgraphPrefix || configFile.subgraphPrefix,
    environment:
      process.env.CARTOGRAPHER_ENVIRONMENT || configJson.environment || configFile.environment || "production",
  };

  const validate = ajv.compile(Cartographer);

  const valid = validate(nxtpConfig);

  if (!valid) {
    throw new Error(validate.errors?.map((err: unknown) => JSON.stringify(err, null, 2)).join(","));
  }

  return nxtpConfig;
};

let nxtpConfig: CartographerConfig | undefined;

/**
 * Caches and returns the environment config
 *
 * @returns The config
 */
export const getConfig = async (): Promise<CartographerConfig> => {
  if (!nxtpConfig) {
    nxtpConfig = getEnvConfig();
  }
  return nxtpConfig;
};
