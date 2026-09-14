import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { moveGuides } from "./seed-move.mjs";
import { homeGuides } from "./seed-home.mjs";
import { moneyGuides } from "./seed-money.mjs";
import { familyGuides } from "./seed-family.mjs";
import { lifeGuides } from "./seed-life.mjs";
import { belongGuides } from "./seed-belong.mjs";
import { nextGuides } from "./seed-next.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GUIDES = path.join(__dirname, "..", "content", "guides");

const all = [
  ...moveGuides,
  ...homeGuides,
  ...moneyGuides,
  ...familyGuides,
  ...lifeGuides,
  ...belongGuides,
  ...nextGuides,
];

const slugs = new Set();
for (const g of all) {
  if (slugs.has(g.slug)) throw new Error(`Duplicate slug: ${g.slug}`);
  slugs.add(g.slug);
  const dir = path.join(GUIDES, g.pillar);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, `${g.slug}.mdx`), g.content, "utf8");
}

const byPillar = Object.groupBy(all, (g) => g.pillar);
console.log(`Wrote ${all.length} guides`);
for (const [pillar, items] of Object.entries(byPillar)) {
  console.log(`  ${pillar}: ${items.length}`);
}
