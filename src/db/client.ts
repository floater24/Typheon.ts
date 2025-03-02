import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema"; // Drizzle のスキーマ定義

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

