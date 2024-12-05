import { db } from '../db';
import { posts } from '../schema';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { title, content } = body;

  await db.insert(posts).values({ title, content });
  return { message: '저장되었습니다' };
});
