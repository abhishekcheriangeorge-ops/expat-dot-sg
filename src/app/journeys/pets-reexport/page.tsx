import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getPetsReexportPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pets re-export / exit",
  description:
    "Leaving Singapore with a dog or cat — NParks/AVS export timing, rabies titres, airline crates, and quarantine myths for expat households.",
  path: "/journeys/pets-reexport",
});

export default async function PetsReexportJourneyPage() {
  const playbook = await getPetsReexportPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Pets re-export", path: "/journeys/pets-reexport" },
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
        eyebrow="Move · Pets exit"
        title={playbook.title}
        summary="Start the pet’s paperwork months before your own flights — titres and crates do not care about EP cancel day."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Also leaving?{" "}
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving playbook
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/cpf-withdrawal"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            CPF withdrawal timing
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/lease-notice"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Diplomatic-clause notice
          </Link>
        </p>
      </div>
    </>
  );
}
