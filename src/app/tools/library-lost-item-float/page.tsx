import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LibraryLostItemFloatCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Library lost-item float sketch",
  description:
    "Sketch library lost-item and overdue cash for return-clear, overdue pay-down, and lost replacement — before you leave Singapore.",
  path: "/tools/library-lost-item-float",
});

export default function LibraryLostItemFloatToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    {
      name: "Library lost-item float",
      path: "/tools/library-lost-item-float",
    },
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
        eyebrow="Tools · Library exit"
        title="Lost-item cash, sketched."
        summary="Compare return-clear, overdue pay-down, and lost replacement before packing week raids the library float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <LibraryLostItemFloatCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/nlb-library-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            NLB library exit →
          </Link>
          <Link
            href="/journeys/school-locker-clear"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            School locker clear →
          </Link>
          <Link
            href="/life"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Life pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
