import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolDepositClawbackCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School deposit clawback sketch",
  description:
    "Sketch mid-year international school deposit and remaining-tuition cash at risk when leaving Singapore — orientation only, not handbook advice.",
  path: "/tools/school-deposit-clawback",
});

export default function SchoolDepositClawbackToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "School deposit clawback", path: "/tools/school-deposit-clawback" },
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
        title="Mid-year school cash at risk, sketched."
        summary="Deposit forfeiture and remaining tuition collide when you leave mid-term. Check the maths before you resign or serve lease notice."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolDepositClawbackCalculator />
        <ToolAbout
          how={[
      "Applies your forfeit fraction to the deposit on a full forfeit.",
      "Pro-rates deposit risk and remaining tuition to the unearned term slice on a mid-term exit.",
      "Fractions clamp between 0 and 1, so the sketch cannot exceed what you paid.",
    ]}
          actions={[
      "Ask the school whether withdrawal before a fee cut-off still bills the full term.",
      "Get any deposit promise in writing. Handbooks beat verbal assurances.",
    ]}
          sourceLabel="your school handbook"
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
            href="/journeys/singpass-myinfo-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Singpass / Myinfo exit →
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
