import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getWorkplaceAccessExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Workplace access / pass exit",
  description:
    "Leaving a Singapore employer with building cards, office car-park labels, and VPN tokens still live — return clocks, deposits, and same-week stack with clinic deposit cash.",
  path: "/journeys/workplace-access-exit",
});

export default async function WorkplaceAccessExitJourneyPage() {
  const playbook = await getWorkplaceAccessExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Workplace access / pass exit",
      path: "/journeys/workplace-access-exit",
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
        eyebrow="Work · Access exit"
        title={playbook.title}
        summary="Return cards and tokens on facilities hours — EP cancel does not collect the tower fob for you."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/clinic-deposit-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Clinic deposit exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving Singapore
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/hospital-cash-deposit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Hospital cash deposit
          </Link>
        </p>
      </div>
    </>
  );
}
