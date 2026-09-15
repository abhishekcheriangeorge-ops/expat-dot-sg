import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { IpaWindowCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "IPA enter-and-issue window",
  description:
    "Sketch MOM Employment Pass IPA deadlines — common six-month enter-and-issue window, notification-letter buffer, and extension lead time before you book flights.",
  path: "/tools/ipa-window",
});

export default function IpaWindowToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "IPA window", path: "/tools/ipa-window" },
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
        eyebrow="Tools · Move"
        title="IPA clock, sketched."
        summary="Six months to enter and issue is the usual EP IPA story — confirm the letter, then book the flight. Dependant IPAs need the same discipline."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <IpaWindowCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/family-joining"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Family joining later →
          </Link>
          <Link
            href="/journeys/arriving"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Arriving checklists →
          </Link>
          <Link
            href="/move"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Move pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
