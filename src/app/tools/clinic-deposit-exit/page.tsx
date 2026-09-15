import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ClinicDepositExitCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/workplace-access-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Workplace access exit →
          </Link>
          <Link
            href="/journeys/hospital-cash-deposit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Hospital cash deposit →
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
