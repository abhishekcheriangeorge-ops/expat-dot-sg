import fs from "node:fs/promises";
import path from "node:path";

/** mtime of a single repo-relative file; falls back to now if missing. */
export async function contentFileMtime(
  ...parts: string[]
): Promise<Date> {
  try {
    const stat = await fs.stat(path.join(process.cwd(), ...parts));
    return stat.mtime;
  } catch {
    return new Date();
  }
}

/** Latest mtime among files in a repo-relative directory. */
export async function contentDirLatestMtime(
  ...parts: string[]
): Promise<Date> {
  const dir = path.join(process.cwd(), ...parts);
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = entries.filter((e) => e.isFile());
    if (!files.length) return new Date();

    let latest = 0;
    await Promise.all(
      files.map(async (file) => {
        const stat = await fs.stat(path.join(dir, file.name));
        if (stat.mtimeMs > latest) latest = stat.mtimeMs;
      }),
    );
    return latest ? new Date(latest) : new Date();
  } catch {
    return new Date();
  }
}
