import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCondoMcstExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Condo MCST / access exit",
  description:
    "Leaving a Singapore condo — MCST access cards, car-park IU, renovation deposits, and handover sequencing for expat leavers.",
  path: "/journeys/condo-mcst-exit",
});

export default async function CondoMcstExitJourneyPage() {
  const playbook = await getCondoMcstExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Condo MCST exit", path: "/journeys/condo-mcst-exit" },
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
        eyebrow="Home · Exit"
        title={playbook.title}
        summary="Return cards and IU on management-office hours — not after the last flight check-in."
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
            href="/tools/car-coe-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Car / COE exit sketch
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
