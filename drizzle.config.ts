import { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default {
  schema: "./db/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL || "",
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  out: "./db/migrations",
  verbose: true,
  strict: true,
} satisfies Config;
