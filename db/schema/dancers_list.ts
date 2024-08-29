import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const dancers_list = sqliteTable('dancers_list', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	short_name: text('short_name').notNull(),
	position: text('position', { mode: "json" }).notNull().$type<string[]>().default(sql`(json_array())`),
	bio: text('bio').notNull(),
	dancer_trigger: text('dancer_trigger').notNull(),
	profile_image: text('profile_image').notNull(),
	thumbnail_image: text('thumbnail_image').notNull(),
})

export type DancersList = typeof dancers_list.$inferInsert
