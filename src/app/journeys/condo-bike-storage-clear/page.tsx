import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCondoBikeStorageClearPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Condo bike bay / storage cage clear",
  description:
    "Leaving a condo with bicycle bays and locker cages still holding kit — label returns, abandoned-item rules, and same-week stack with insurance portability cash.",
  path: "/journeys/condo-bike-storage-clear",
});

export default async function CondoBikeStorageClearJourneyPage() {
  const playbook = await getCondoBikeStorageClearPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Condo bike / storage clear",
      path: "/journeys/condo-bike-storage-clear",
    },
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
        eyebrow="Home · Storage exit"
        title={playbook.title}
        summary="Clear bike bays and cages before keys go back — abandoned-item rules do not wait for your flight."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/insurance-portability-float"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Insurance portability float
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/condo-mcst-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Condo MCST exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/mover-lift-booking"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Mover lift booking
          </Link>
        </p>
      </div>
    </>
  );
}
