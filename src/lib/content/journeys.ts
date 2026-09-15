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

async function getPlaybookByFilename(
  filename: string,
): Promise<LeavingPlaybook | null> {
  const filePath = path.join(JOURNEYS_DIR, filename);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const result = LeavingPlaybookSchema.safeParse(JSON.parse(raw));
    if (!result.success) {
      throw new Error(`Invalid playbook (${filename}): ${result.error.message}`);
    }
    return result.data;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

export async function getLeavingPlaybook(): Promise<LeavingPlaybook | null> {
  return getPlaybookByFilename("leaving-singapore.json");
}

export async function getBetweenJobsPlaybook(): Promise<LeavingPlaybook | null> {
  return getPlaybookByFilename("between-jobs.json");
}

export async function getPreArrivalPlaybook(): Promise<LeavingPlaybook | null> {
  return getPlaybookByFilename("pre-arrival.json");
}

export async function getBankExitClosurePlaybook(): Promise<LeavingPlaybook | null> {
  return getPlaybookByFilename("bank-exit-closure.json");
}

export async function getHospitalCashDepositPlaybook(): Promise<LeavingPlaybook | null> {
  return getPlaybookByFilename("hospital-cash-deposit.json");
}

export async function getGraduatePassBridgePlaybook(): Promise<LeavingPlaybook | null> {
  return getPlaybookByFilename("graduate-pass-bridge.json");
}

export async function getFamilyJoiningPlaybook(): Promise<LeavingPlaybook | null> {
  return getPlaybookByFilename("family-joining.json");
}

export async function getLocDpWorkRightsPlaybook(): Promise<LeavingPlaybook | null> {
  return getPlaybookByFilename("loc-dp-work-rights.json");
}
