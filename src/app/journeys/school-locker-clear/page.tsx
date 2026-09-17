import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getSchoolLockerClearPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School locker / cubby clear",
  description:
    "Leaving mid-term with school lockers and cubbies still holding kit — clear days, padlock cuts, and same-week stack with bus cancel and pet export cash.",
  path: "/journeys/school-locker-clear",
});

export default async function SchoolLockerClearJourneyPage() {
  const playbook = await getSchoolLockerClearPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "School locker clear", path: "/journeys/school-locker-clear" },
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
        summary="Clear lockers and cubbies before the last attendance day — padlock cuts and lost-property shelves are not movers-day errands."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/journeys/school-bus-cca-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School bus / CCA exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/pet-quarantine-float"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Pet quarantine float
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/pets-reexport"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Pets re-export
          </Link>
        </p>
      </div>
    </>
  );
}
