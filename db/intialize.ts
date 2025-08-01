import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";
import { createClient } from "@libsql/client";

// Local file database - persists between runs
const client = createClient({
  url: "file:./db/local.sqlite",
});

export const db = drizzle(client, { schema });
