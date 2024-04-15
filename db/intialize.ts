import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";
import { createClient } from "@libsql/client";

console.log(process.env.TURSO_DB_URL);

const client = createClient({
  url: process.env.TURSO_DB_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// const client = createClient({
//   url: "file:local.db",
// });

export const db = drizzle(client, { schema });
