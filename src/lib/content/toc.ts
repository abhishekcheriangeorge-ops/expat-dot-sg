import { slugify } from "./slugify";

export type TocItem = {
  id: string;
  title: string;
  depth: 2 | 3;
};

/** Extract H2/H3 headings from MDX source for the sticky “On this page” nav */
export function extractToc(source: string): TocItem[] {
  const items: TocItem[] = [];
  const seen = new Map<string, number>();
  const re = /^(#{2,3})\s+(.+?)\s*$/gm;
  let match: RegExpExecArray | null;

  while ((match = re.exec(source)) !== null) {
    const depth = match[1].length as 2 | 3;
    const title = match[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`]/g, "")
      .trim();
    if (!title) continue;

    let id = slugify(title);
    const count = seen.get(id) ?? 0;
    if (count > 0) id = `${id}-${count + 1}`;
    seen.set(slugify(title), count + 1);

    items.push({ id, title, depth });
  }

  return items;
}

/** Stable fragment list for JumpLinks / ItemList consumers. */
export function tocToJumpItems(items: TocItem[]): Array<{
  id: string;
  title: string;
  depth: 2 | 3;
}> {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    depth: item.depth,
  }));
}
