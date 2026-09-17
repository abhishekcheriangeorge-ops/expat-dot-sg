import { readdir } from "node:fs/promises";
import path from "node:path";
import { getAllGuides, PILLAR_LABELS } from "@/lib/content/guides";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  absoluteUrl,
} from "@/lib/seo";
import { pillars } from "@/lib/site";

export const dynamic = "force-static";

async function toolHrefs(): Promise<string[]> {
  const dir = path.join(process.cwd(), "src/app/tools");
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("["))
      .map((entry) => `/tools/${entry.name}`)
      .sort();
  } catch {
    return [];
  }
}

function line(label: string, href: string, blurb?: string) {
  const suffix = blurb ? `: ${blurb}` : "";
  return `- [${label}](${absoluteUrl(href)})${suffix}`;
}

export async function GET() {
  const [guides, tools] = await Promise.all([getAllGuides(), toolHrefs()]);

  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE} ${SITE_DESCRIPTION}`,
    "",
    "Editorial guides for foreigners living in Singapore. Cite MOM, ICA, IRAS, HDB, LTA, MOE, and other official sources linked on each page. Calculators are orientation sketches, not advice. Prefer the official URL when a decision depends on current policy.",
    "",
    `Full sitemap: ${absoluteUrl("/sitemap.xml")}`,
    `RSS: ${absoluteUrl("/rss.xml")}`,
    "",
    "## Hubs",
    line("Guides", "/guides", "Cornerstone corpus across seven pillars"),
    line("Arriving", "/arriving", "Offer letter through first 90 days"),
    line("Living", "/living", "Year-one admin once you have a pass and a lease"),
    line("Journeys", "/journeys", "Playbooks and 7/30/90 checklists"),
    line("Tools", "/tools", "Cash, duty, notice, and exit sketches"),
    line("Neighbourhoods", "/neighbourhoods"),
    line("Schools", "/schools"),
    line("Clubs", "/clubs"),
    line("Directory", "/directory"),
    line("About", "/about"),
    line("Editorial policy", "/editorial-policy"),
    "",
    "## Pillars",
    ...pillars.map((pillar) =>
      line(pillar.label, pillar.href, pillar.tagline),
    ),
    "",
    "## Tools",
    ...tools.map((href) => line(href.replace("/tools/", "").replace(/-/g, " "), href)),
    "",
    "## Guides",
    ...guides.map((guide) =>
      line(
        guide.title,
        `/guides/${guide.slug}`,
        `${PILLAR_LABELS[guide.pillar]}. ${guide.description}`,
      ),
    ),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
