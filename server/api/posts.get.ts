import { db } from '../db';
import { posts } from '../schema';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  const result = await db.select().from(posts); // 게시글 조회
  return result;
});
