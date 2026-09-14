import fs from "node:fs/promises";
import path from "node:path";
import {
  JourneyChecklistSchema,
  LeavingPlaybookSchema,
  type ChecklistPhase,
  type JourneyChecklist,
  type LeavingPlaybook,
} from "./schemas";

const JOURNEYS_DIR = path.join(process.cwd(), "content", "journeys");

async function readJsonFiles(dir: string): Promise<unknown[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = entries.filter(
      (e) => e.isFile() && e.name.endsWith(".json"),
    );

    return Promise.all(
      files.map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file.name), "utf8");
        return JSON.parse(raw) as unknown;
      }),
    );
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

export async function getChecklists(): Promise<JourneyChecklist[]> {
  const dir = path.join(JOURNEYS_DIR, "checklists");
  const items = await readJsonFiles(dir);

  return items.map((item, index) => {
    const result = JourneyChecklistSchema.safeParse(item);
    if (!result.success) {
      throw new Error(
        `Invalid checklist in content/journeys/checklists (index ${index}): ${result.error.message}`,
      );
    }
    return result.data;
  });
}

export async function getChecklistByPhase(
  phase: ChecklistPhase,
): Promise<JourneyChecklist | null> {
  const checklists = await getChecklists();
  return checklists.find((c) => c.phase === phase) ?? null;
}

export async function getChecklistBySlug(
  slug: string,
): Promise<JourneyChecklist | null> {
  const checklists = await getChecklists();
  return checklists.find((c) => c.slug === slug) ?? null;
}

export async function getLeavingPlaybook(): Promise<LeavingPlaybook | null> {
  const filePath = path.join(JOURNEYS_DIR, "leaving-singapore.json");
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const result = LeavingPlaybookSchema.safeParse(JSON.parse(raw));
    if (!result.success) {
      throw new Error(
        `Invalid leaving playbook: ${result.error.message}`,
      );
    }
    return result.data;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}
