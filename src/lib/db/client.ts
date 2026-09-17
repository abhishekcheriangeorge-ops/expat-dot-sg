import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

/**
 * Neon Postgres client for mutable monetization data (leads, future inventory).
 *
 * Provisioning (preferred), git-connected Vercel project **expat-sg**:
 *   npx vercel link --yes --project expat-sg
 *   npx vercel integration add neon --yes --no-claim
 *   npx vercel env pull --yes
 *
 * Locally, unset DATABASE_URL falls back to `.data/leads.jsonl` (see `leads.ts`).
 * Production needs DATABASE_URL.
 */
export function getDatabaseUrl(): string | undefined {
  const url =
    process.env.DATABASE_URL?.trim() ||
    process.env.POSTGRES_URL?.trim() ||
    process.env.NEON_DATABASE_URL?.trim();
  return url || undefined;
}

export function isNeonConfigured(): boolean {
  return Boolean(getDatabaseUrl());
}

let sqlSingleton: NeonQueryFunction<false, false> | null = null;

export function getSql(): NeonQueryFunction<false, false> | null {
  const url = getDatabaseUrl();
  if (!url) return null;
  if (!sqlSingleton) {
    sqlSingleton = neon(url);
  }
  return sqlSingleton;
}

export type StorageBackend = "neon" | "file";

export function getStorageBackend(): StorageBackend {
  return isNeonConfigured() ? "neon" : "file";
}
