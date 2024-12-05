import { db } from '../db';
import { posts } from '../schema';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  const result = await db.select().from(posts);
  return result;
});
