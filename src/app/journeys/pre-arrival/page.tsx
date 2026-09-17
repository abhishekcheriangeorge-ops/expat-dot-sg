import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getPreArrivalPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pre-arrival playbook",
  description:
    "Pre-arrival playbook for Singapore expats — IPA pack, SG Arrival Card window, cash bridge, shipping triage, and family joining later.",
  path: "/journeys/pre-arrival",
});

export default async function PreArrivalJourneyPage() {
  const playbook = await getPreArrivalPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Pre-arrival", path: "/journeys/pre-arrival" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="border-b border-ink/15">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Move · Pre-arrival"
        title={playbook.title}
        summary="Finish the month before the flight. Day-7 starts after immigration."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Landed already?{" "}
          <Link
            href="/journeys/arriving/day-7"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            First 7 days checklist
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/setup-cash"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            First-month cash sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/move"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Move pillar
          </Link>
        </p>
      </div>
    </>
  );
}
