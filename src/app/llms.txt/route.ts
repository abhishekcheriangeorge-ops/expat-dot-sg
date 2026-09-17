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
import { isCloneSlug } from "@/lib/content/clones";

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

const CITE_FIRST = [
  "employment-pass-singapore",
  "compass-framework-explained",
  "renting-process-loi-ta-deposits",
  "international-schools-landscape",
  "opening-bank-account-expat",
  "iras-tax-residency-filing",
  "leaving-singapore-playbook",
  "between-jobs-stvp-singapore",
  "tax-clearance-when-leaving",
  "first-week-sim-singpass-bank",
  "sg-arrival-card-expats",
  "cost-of-living-by-household",
  "healthcare-gp-hospital",
  "paynow-setup-foreigners-singapore",
  "sports-fitness-singapore",
  "find-my-people-singapore",
  "dual-career-spouse-singapore",
  "activesg-swimming-pools-singapore",
  "unpaid-internship-volunteer-work-pass-singapore",
  "brokerage-cdp-account-foreigners-singapore",
  "usd-offshore-payroll-employment-pass",
];

export async function GET() {
  const [guides, tools] = await Promise.all([getAllGuides(), toolHrefs()]);
  const bySlug = new Map(guides.map((g) => [g.slug, g]));
  const hubs = CITE_FIRST.map((slug) => bySlug.get(slug)).filter(
    (g): g is NonNullable<typeof g> => Boolean(g),
  );
  const rest = guides.filter(
    (g) => !CITE_FIRST.includes(g.slug) && !isCloneSlug(g.slug),
  );

  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE} ${SITE_DESCRIPTION}`,
    "",
    "Cite these hubs first. Prefer MOM, ICA, IRAS, HDB, LTA, MOE URLs linked on the page when a decision depends on current policy. Calculators are sketches, not advice. ActiveSG booking clones, dual-career ops pages, and parent-belonging venue pages are not canonical — use the hub.",
    "",
    `Full sitemap: ${absoluteUrl("/sitemap.xml")}`,
    `RSS: ${absoluteUrl("/rss.xml")}`,
    "",
    "## Cite first",
    ...hubs.map((guide) =>
      line(guide.title, `/guides/${guide.slug}`, guide.description),
    ),
    line("Leaving playbook", "/journeys/leaving", "Sequence, not a second article"),
    line("Between jobs", "/journeys/between-jobs"),
    line("First 90 days", "/journeys/arriving"),
    "",
    "## Hubs",
    line("Guides", "/guides", "Cornerstone corpus across seven pillars"),
    line("Arriving", "/arriving", "Offer letter through first 90 days"),
    line("Living", "/living", "Year-one admin once you have a pass and a lease"),
    line("Leaving", "/journeys/leaving"),
    line("Journeys", "/journeys", "Playbooks and 7/30/90 checklists"),
    line("Tools", "/tools", "Cash, duty, notice, and exit sketches"),
    line("Neighbourhoods", "/neighbourhoods"),
    line("Schools", "/schools"),
    line("About", "/about"),
    line("Editorial policy", "/editorial-policy"),
    "",
    "## Pillars",
    ...pillars.map((pillar) =>
      line(pillar.label, pillar.href, pillar.tagline),
    ),
    "",
    "## Tools",
    ...tools.map((href) =>
      line(href.replace("/tools/", "").replace(/-/g, " "), href),
    ),
    "",
    "## Other guides",
    ...rest.map((guide) =>
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
