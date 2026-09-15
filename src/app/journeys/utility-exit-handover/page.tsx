import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getUtilityExitHandoverPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Utilities & telecom exit handover",
  description:
    "Playbook for tearing down SP, fibre, mobile, and condo utilities when leaving a flat or Singapore — notice windows, deposits, GIRO, and final-bill float.",
  path: "/journeys/utility-exit-handover",
});

export default async function UtilityExitHandoverJourneyPage() {
  const playbook = await getUtilityExitHandoverPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Utility exit handover", path: "/journeys/utility-exit-handover" },
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
        eyebrow="Home · Exit utilities"
        title={playbook.title}
        summary="Kill SP, fibre, and GIRO on purpose. Match notice windows to key handover — then keep enough SGD for finals and ETFs."
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
            href="/tools/ir21-withhold"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            IR21 withhold sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/lease-notice"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Lease notice sketch
          </Link>
        </p>
      </div>
    </>
  );
}
