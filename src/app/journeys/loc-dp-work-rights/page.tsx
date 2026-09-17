import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getLocDpWorkRightsPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "DP work rights & Letter of Consent",
  description:
    "Playbook for Dependant’s Pass work rights — employee vs business-owner LOC, main-pass cascade risk, LTVP adjacency, and when EP is cleaner.",
  path: "/journeys/loc-dp-work-rights",
});

export default async function LocDpWorkRightsJourneyPage() {
  const playbook = await getLocDpWorkRightsPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "DP work rights", path: "/journeys/loc-dp-work-rights" },
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
        eyebrow="Family · Work rights"
        title={playbook.title}
        summary="DP alone is not a work pass. Map LOC products, cascade risk, and when a primary work pass is safer."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/journeys/between-jobs"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Between-jobs playbook
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/school-withdrawal"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School withdrawal sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/ep-threshold"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            EP salary floors
          </Link>
        </p>
      </div>
    </>
  );
}
