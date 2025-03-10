import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

// ユーザーテーブル
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").unique().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
