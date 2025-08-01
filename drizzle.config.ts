import { Config } from "drizzle-kit";

// dotenv.config({
//   path: ".env.local",
// });

export default {
  schema: "./db/schema.ts",
  driver: "turso",
  dbCredentials: {
    // Local file database (persists between runs)
    url: "file:./db/local.sqlite",
    // No auth token needed for local file
    // authToken: process.env.TURSO_AUTH_TOKEN,
  },
  out: "./db/migrations",
  verbose: true,
  strict: true,
} satisfies Config;
