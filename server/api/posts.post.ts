import { db } from '../db';
import { posts } from '../schema';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // 요청 데이터 읽기
  const { title, content } = body;

  await db.insert(posts).values({ title, content }); // 게시글 저장
  return { message: '저장되었습니다' };
});
