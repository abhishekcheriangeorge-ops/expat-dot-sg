import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ClinicDepositExitCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Clinic deposit exit sketch",
  description:
    "Sketch GP, dental, and specialist clinic deposit return vs unused packages, no-show fees, and records-release holds before you leave Singapore.",
  path: "/tools/clinic-deposit-exit",
});

export default function ClinicDepositExitToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Clinic deposit exit", path: "/tools/clinic-deposit-exit" },
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
        eyebrow="Tools · Health exit"
        title="Clinic deposit cash, sketched."
        summary="Compare full-refund hope, package offsets, and forfeit holds so workplace card deposits do not raid the same float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <ClinicDepositExitCalculator />
        <ToolAbout
          how={[
      "Refunds deposit plus unused package on a clean exit.",
      "Offsets open balances and no-show fees against package credits on a partial path.",
      "Treats a forfeit as deposit kept with open fees still billed.",
    ]}
          actions={[
      "Confirm the finance desk will net balances instead of holding the whole deposit.",
      "Ask for a written release date before you fly.",
    ]}
          sourceLabel="your clinic"
          reviewed="2026-09-15"
        />

        <p className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/workplace-access-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Workplace access exit →
          </Link>
          <Link
            href="/journeys/hospital-cash-deposit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Hospital cash deposit →
          </Link>
          <Link
            href="/family"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
