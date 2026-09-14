import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { JourneyHero } from "@/components/journeys";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Light Singapore expat utilities — cost-of-living sketch and Employment Pass salary threshold illustration.",
};

const tools = [
  {
    href: "/tools/cost-of-living",
    title: "Cost of living sketch",
    summary:
      "Household × housing band estimates in SGD. Orientation, not a spreadsheet replacement.",
  },
  {
    href: "/tools/ep-threshold",
    title: "EP qualifying salary",
    summary:
      "Age-progressive Employment Pass floor illustration with a MOM disclaimer baked in.",
  },
] as const;

export default function ToolsIndexPage() {
  return (
    <>
      <JourneyHero
        eyebrow="Tools"
        title="Calculators as support — never the homepage."
        summary="Two light utilities tucked under Journeys. Use them when a guide or checklist points here."
      />

      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
        <Stagger className="grid gap-10 sm:grid-cols-2">
          {tools.map((tool) => (
            <StaggerItem key={tool.href}>
              <Link href={tool.href} className="group block no-underline">
                <h2 className="font-display text-2xl text-ink group-hover:text-canopy">
                  {tool.title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                  {tool.summary}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-16">
          <Link
            href="/journeys"
            className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← Back to journeys
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
