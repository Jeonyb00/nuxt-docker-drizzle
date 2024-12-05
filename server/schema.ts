import { pgTable, serial, text } from 'drizzle-orm/pg-core';

// 게시글 테이블 정의
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
});
