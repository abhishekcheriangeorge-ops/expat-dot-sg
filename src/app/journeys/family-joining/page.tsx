import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getFamilyJoiningPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Family joining later",
  description:
    "Family-joining playbook — Dependant Pass IPA timing, Arrival Card, Singpass/bank week, school seats, and handoff to arriving checklists when spouse or kids follow later.",
  path: "/journeys/family-joining",
});

export default async function FamilyJoiningJourneyPage() {
  const playbook = await getFamilyJoiningPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Family joining", path: "/journeys/family-joining" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
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
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/ipa-window"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            IPA window sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/arriving/day-7"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            First 7 days
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/between-jobs"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Between-jobs (DP fall-through)
          </Link>{" "}
          ·{" "}
          <Link
            href="/family"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Family pillar
          </Link>
        </p>
      </div>
    </>
  );
}
