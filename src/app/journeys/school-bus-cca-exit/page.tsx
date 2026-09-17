import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getSchoolBusCcaExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School bus / CCA exit",
  description:
    "Leaving mid-term with school bus routes and CCA kits still live — operator notice, kit deposits, and self-drive insurance gaps for expat families.",
  path: "/journeys/school-bus-cca-exit",
});

export default async function SchoolBusCcaExitJourneyPage() {
  const playbook = await getSchoolBusCcaExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "School bus / CCA exit", path: "/journeys/school-bus-cca-exit" },
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
        eyebrow="Family · School exit"
        title={playbook.title}
        summary="Cancel the bus operator in writing — school withdrawal does not stop the bus invoice."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/school-withdrawal"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School withdrawal sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/driving-insurance-gap"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Driving insurance gap
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
