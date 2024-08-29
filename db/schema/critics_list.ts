import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const critics_list = sqliteTable('critics_list', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	author: text('author').notNull(),
	media: text('media').notNull(),
	quote: text('quote').notNull(),
})

export type CricticsList = typeof critics_list.$inferInsert
