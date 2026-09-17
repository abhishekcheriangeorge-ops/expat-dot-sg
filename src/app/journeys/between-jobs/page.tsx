import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getBetweenJobsPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Between jobs (EP gap)",
  description:
    "Between-jobs playbook for EP holders — STVP buffer, Dependant Pass risk, IR21 vs rehire, Singpass grace, and new IPA timing while you stay in Singapore.",
  path: "/journeys/between-jobs",
});

export default async function BetweenJobsJourneyPage() {
  const playbook = await getBetweenJobsPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Between jobs", path: "/journeys/between-jobs" },
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
        eyebrow="Next · Between jobs"
        title={playbook.title}
        summary="Stay lawful through the gap. This is the sequence — cite the STVP guide when you need the article."
      />
      <p className="mx-auto max-w-[var(--max-page)] px-5 pt-6 text-sm sm:px-8">
        <Link
          href="/guides/between-jobs-stvp-singapore"
          className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
        >
          Between jobs / STVP guide →
        </Link>
      </p>
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Leaving Singapore instead?{" "}
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving playbook
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/tax-residency"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Tax residency sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/next"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Next pillar
          </Link>
        </p>
      </div>
    </>
  );
}
