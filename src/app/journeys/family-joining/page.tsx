import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getFamilyJoiningPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-shell";

const title = "Family joining later";
const description =
  "Family-joining playbook — Dependant Pass IPA timing, Arrival Card, Singpass/bank week, school seats, and handoff to arriving checklists when spouse or kids follow later.";
const path = "/journeys/family-joining";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

const RELATED = [
  { href: "/tools/ipa-window", label: "IPA window sketch" },
  { href: "/journeys/arriving/day-7", label: "First 7 days" },
  { href: "/journeys/between-jobs", label: "Between-jobs (DP fall-through)" },
  { href: "/schools", label: "Schools" },
  { href: "/calendar", label: "Calendar" },
  { href: "/family", label: "Family pillar" },
  { href: "/living", label: "Living hub" },
] as const;

export default async function FamilyJoiningJourneyPage() {
  const playbook = await getFamilyJoiningPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Family joining", path },
  ];

  const howTo = howToJsonLd({
    name: playbook.title,
    description: playbook.summary,
    path,
    steps: playbook.sections.map((section) => ({
      name: section.title,
      text: section.body,
    })),
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: title,
            description,
            path,
            items: RELATED.map((item) => ({
              name: item.label,
              path: item.href,
            })),
          }),
          ...(howTo ? [howTo] : []),
        ]}
      />
      <div className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Family · Joining later"
        title={playbook.title}
        summary="Land the main pass first — then sequence DP IPAs so the join-up week is boring."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <nav aria-label="Related hubs">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Related hubs
          </p>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {RELATED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </p>
        </nav>
      </div>
    </>
  );
}
