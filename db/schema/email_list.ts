import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const email_list = sqliteTable('email_list', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	email: text('email').notNull().unique(),
	timestap: text('timestamp').notNull().default(sql`(current_timestamp)`)
})

export type EmailList = typeof email_list.$inferInsert
