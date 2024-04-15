import { Config } from "drizzle-kit";

// dotenv.config({
//   path: ".env.local",
// });

export default {
  schema: "./db/schema.ts",
  driver: "turso",
  dbCredentials: {
    // url: "file:./db/local.sqlite",
    url: process.env.TURSO_DB_URL || "",
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  out: "./db/migrations",
  verbose: true,
  strict: true,
} satisfies Config;
