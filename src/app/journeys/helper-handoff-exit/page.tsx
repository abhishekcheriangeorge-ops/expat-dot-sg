import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getHelperHandoffExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Helper handoff on exit",
  description:
    "Leaving Singapore with an FDW — transfer vs cancel timing, MOM sequencing, care overlap with movers/pets/newborn, and agency settlement.",
  path: "/journeys/helper-handoff-exit",
});

export default async function HelperHandoffExitJourneyPage() {
  const playbook = await getHelperHandoffExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Helper handoff exit", path: "/journeys/helper-handoff-exit" },
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
        eyebrow="Family · Helper exit"
        title={playbook.title}
        summary="Pick transfer, home leave, or cancel in writing before exit week — helper status does not improvise well beside movers."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving playbook
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/club-deposit-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Club deposit exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/fdw-levy"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            FDW levy sketch
          </Link>
        </p>
      </div>
    </>
  );
}
