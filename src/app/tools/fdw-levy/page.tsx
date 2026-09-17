import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { FdwLevyCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "FDW levy sketch",
  description:
    "Sketch Singapore Foreign Domestic Worker monthly levy across concessionary, full, and subsequent-helper bands — orientation before you budget or transfer employers.",
  path: "/tools/fdw-levy",
});

export default function FdwLevyToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "FDW levy", path: "/tools/fdw-levy" },
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
        eyebrow="Tools · Home"
        title="Helper levy, months multiplied."
        summary="Concessionary, full, or subsequent-helper bands — sketch the year cost, then confirm eligibility on the live MOM table."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <FdwLevyCalculator />
        <ToolAbout
          how={[
      "Multiplies the selected MOM band by months: S$60 concessionary, S$300 first helper, S$450 subsequent.",
      "Accepts a custom monthly figure when your MOM letter says otherwise.",
      "Totals stay in whole dollars.",
    ]}
          actions={[
      "Confirm concession eligibility before budgeting S$60. It needs a qualifying household member.",
      "Levy is due by the 17th of the following month. GIRO beats memory.",
    ]}
          sourceLabel="MOM"
      sourceHref="https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/foreign-domestic-worker-levy/paying-levy"
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
            href="/journeys/hospital-cash-deposit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Hospital cash deposit →
          </Link>
          <Link
            href="/tools/setup-cash"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            First-month cash →
          </Link>
          <Link
            href="/home"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Home pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
