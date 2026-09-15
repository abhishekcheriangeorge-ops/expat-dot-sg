import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { Ir21WithholdCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "IR21 withhold timeline sketch",
  description:
    "Sketch Singapore employer tax-clearance (IR21) withhold windows from a planned cessation date — orientation for exit cash planning.",
  path: "/tools/ir21-withhold",
});

export default function Ir21WithholdToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "IR21 withhold", path: "/tools/ir21-withhold" },
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
        eyebrow="Tools · Money"
        title="IR21 withhold, dated forward."
        summary="Employers often hold final pay while tax clearance runs. Sketch a release window from your last day — then confirm with HR."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <Ir21WithholdCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/utility-exit-handover"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Utility exit playbook →
          </Link>
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/money"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Money pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
