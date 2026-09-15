import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getEnrichmentClassExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Enrichment class / private lesson exit",
  description:
    "Leaving Singapore with music, swim, ballet, or other private enrichment still mid-term — give notice, return borrowed gear, and float remaining term fees before packing week.",
  path: "/journeys/enrichment-class-exit",
});

export default async function EnrichmentClassExitJourneyPage() {
  const playbook = await getEnrichmentClassExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Enrichment class exit",
      path: "/journeys/enrichment-class-exit",
    },
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
        eyebrow="Family · Enrichment exit"
        title={playbook.title}
        summary="Serve written studio notice and return loaned gear while term fees are still clear — enrichment invoices do not rebuild from folklore after you fly."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/enrichment-term-notice-float"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Enrichment term-notice float
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/tuition-centre-bond"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Tuition centre bond
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/school-locker-clear"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School locker clear
          </Link>
        </p>
      </div>
    </>
  );
}
