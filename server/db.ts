import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';

const { Pool } = pkg;

// PostgreSQL 연결 설정
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'jyb000507',
  password: '!j9528832',
  database: 'nuxtdb',
});

export const db = drizzle(pool);
