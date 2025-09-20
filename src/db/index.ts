import { drizzle } from "drizzle-orm/neon-http";

// Choose correct DB URL depending on environment
const dbUrl =
  process.env.VERCEL === "1"
    ? process.env.DATABASE_URL // pooled for Vercel
    : process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL; // unpooled for local

if (!dbUrl) {
  throw new Error(
    "No database URL found. Make sure DATABASE_URL or DATABASE_URL_UNPOOLED is set in your env."
  );
}

export const db = drizzle(dbUrl);
