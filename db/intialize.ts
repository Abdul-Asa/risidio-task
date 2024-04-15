import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";
import { createClient } from "@libsql/client";

console.log("TURSO_DB_URL", process.env.TURSO_DB_URL);
console.log("TURSO_AUTH_TOKEN", process.env.TURSO_AUTH_TOKEN);

const client = createClient({
  url: process.env.TURSO_DB_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// const client = createClient({
//   url: "file:./db/local.sqlite",
// });

export const db = drizzle(client, { schema });
