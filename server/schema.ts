import { pgTable, serial, text } from 'drizzle-orm/pg-core';


export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
});
