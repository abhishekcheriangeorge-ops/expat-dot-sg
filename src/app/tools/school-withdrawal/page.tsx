import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolWithdrawalCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School withdrawal notice sketch",
  description:
    "Sketch the written-notice deadline for withdrawing a child from an international or private school in Singapore — orientation from your contract’s notice weeks.",
  path: "/tools/school-withdrawal",
});

export default function SchoolWithdrawalToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "School withdrawal", path: "/tools/school-withdrawal" },
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
        eyebrow="Tools · Family"
        title="Notice weeks, counted backwards."
        summary="International school contracts usually demand written notice measured in weeks or a full term. Sketch the deadline from your handbook — then confirm fees in writing."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolWithdrawalCalculator />
        <ToolAbout
          how={[
      "Subtracts notice weeks from the last-attendance date for the written-notice deadline.",
      "Counts days from today to that deadline and flags mid-term exits.",
      "Notice periods above 52 weeks are rejected rather than clamped — check the contract if yours is longer.",
    ]}
          actions={[
      "Confirm whether the school still bills through the fee period after notice.",
      "Send notice in writing and keep the acknowledgement.",
    ]}
          sourceLabel="your school contract"
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
            href="/journeys/loc-dp-work-rights"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            DP / LOC playbook →
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook →
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
