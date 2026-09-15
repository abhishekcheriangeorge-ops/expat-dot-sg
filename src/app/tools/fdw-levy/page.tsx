import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { FdwLevyCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/hospital-cash-deposit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Hospital cash deposit →
          </Link>
          <Link
            href="/tools/setup-cash"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            First-month cash →
          </Link>
          <Link
            href="/home"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Home pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
