import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { LeadInquiry } from "@/lib/content/schemas";
import { getSql, getStorageBackend, type StorageBackend } from "./client";

export type StoredLead = LeadInquiry & {
  id: string;
  createdAt: string;
  backend: StorageBackend;
};

const FILE_DIR = path.join(process.cwd(), ".data");
const FILE_PATH = path.join(FILE_DIR, "leads.jsonl");

let schemaReady = false;

async function ensureNeonSchema(): Promise<void> {
  if (schemaReady) return;
  const sql = getSql();
  if (!sql) return;

  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      interest TEXT NOT NULL,
      message TEXT NOT NULL,
      budget_band TEXT,
      source TEXT NOT NULL DEFAULT 'advertise'
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC)`;
  await sql`CREATE INDEX IF NOT EXISTS leads_interest_idx ON leads (interest)`;
  schemaReady = true;
}

async function insertLeadNeon(inquiry: LeadInquiry): Promise<StoredLead> {
  await ensureNeonSchema();
  const sql = getSql();
  if (!sql) {
    throw new Error("Neon client unavailable");
  }

  const rows = await sql`
    INSERT INTO leads (name, email, company, interest, message, budget_band, source)
    VALUES (
      ${inquiry.name},
      ${inquiry.email},
      ${inquiry.company || null},
      ${inquiry.interest},
      ${inquiry.message},
      ${inquiry.budgetBand || null},
      ${inquiry.source ?? "advertise"}
    )
    RETURNING id::text AS id, created_at AS "createdAt"
  `;

  const row = rows[0] as { id: string; createdAt: string | Date };
  return {
    ...inquiry,
    id: row.id,
    createdAt:
      typeof row.createdAt === "string"
        ? row.createdAt
        : row.createdAt.toISOString(),
    backend: "neon",
  };
}

async function insertLeadFile(inquiry: LeadInquiry): Promise<StoredLead> {
  try {
    await fs.mkdir(FILE_DIR, { recursive: true });
    const lead: StoredLead = {
      ...inquiry,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      backend: "file",
    };
    await fs.appendFile(FILE_PATH, `${JSON.stringify(lead)}\n`, "utf8");
    return lead;
  } catch (err) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === "EROFS" || code === "EACCES") {
      throw new Error(
        "Lead storage is not writable. Set DATABASE_URL for production.",
      );
    }
    throw err;
  }
}

/** Persist an advertise / sponsorship inquiry. Neon if configured, else JSONL. */
export async function createLead(inquiry: LeadInquiry): Promise<StoredLead> {
  const backend = getStorageBackend();
  if (backend === "neon") {
    try {
      return await insertLeadNeon(inquiry);
    } catch (err) {
      console.error(
        "[leads] Neon insert failed; falling back to file store",
        err,
      );
      return insertLeadFile(inquiry);
    }
  }
  return insertLeadFile(inquiry);
}
