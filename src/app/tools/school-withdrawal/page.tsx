import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolWithdrawalCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/loc-dp-work-rights"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            DP / LOC playbook →
          </Link>
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/family"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
