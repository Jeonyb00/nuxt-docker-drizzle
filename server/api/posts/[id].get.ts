import { db } from '../../db';
import { posts } from '../../schema';
import { eq } from 'drizzle-orm/expressions';
import { defineEventHandler, H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  const params = event.context.params as { id: string };
  const { id } = params;

  if (!id) {
    throw createError({ statusCode: 400, message: 'Post ID is required' });
  }

  const post = await db.select().from(posts).where(eq(posts.id, Number(id))).limit(1);
  if (!post.length) {
    throw createError({ statusCode: 404, message: `Post not found` });
  }

  return post[0];
});
