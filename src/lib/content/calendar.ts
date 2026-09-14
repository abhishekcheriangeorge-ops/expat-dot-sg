import fs from "node:fs/promises";
import path from "node:path";
import {
  CalendarEventSchema,
  type CalendarEvent,
} from "./schemas";

const CALENDAR_DIR = path.join(process.cwd(), "content", "calendar");

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

export async function getCalendarEvents(): Promise<CalendarEvent[]> {
  const items = await readJsonFiles(CALENDAR_DIR);

  const events = items.map((item, index) => {
    const result = CalendarEventSchema.safeParse(item);
    if (!result.success) {
      throw new Error(
        `Invalid calendar event (index ${index}): ${result.error.message}`,
      );
    }
    return result.data;
  });

  return events.sort((a, b) => a.date.localeCompare(b.date));
}

export async function getFeaturedCalendarEvents(): Promise<CalendarEvent[]> {
  const events = await getCalendarEvents();
  return events.filter((e) => e.featured);
}
