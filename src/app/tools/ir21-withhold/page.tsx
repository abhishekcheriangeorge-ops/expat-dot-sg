import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { Ir21WithholdCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Adds the clearance window to your last employment day for a sketched release date.",
      "Counts days from today to that release date.",
      "Windows run 14 to 60 days from optimistic to extended cases.",
    ]}
          actions={[
      "Build rent and utility float beyond one payroll cycle on long windows.",
      "Ask HR whether the tax directive is issued or stuck if the date passes.",
    ]}
          sourceLabel="IRAS and your employer"
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
            href="/journeys/utility-exit-handover"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Utility exit playbook →
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/money"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Money pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
