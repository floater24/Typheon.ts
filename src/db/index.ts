import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!, {
  fetchOptions: { cache: "no-store" }, // キャッシュを防いでリアルタイム性を上げる
});
export const db = drizzle(sql, { schema });
