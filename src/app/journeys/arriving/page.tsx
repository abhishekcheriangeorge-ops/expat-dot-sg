import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ArrivingPhaseNav, JourneyHero } from "@/components/journeys";
import { getChecklists } from "@/lib/content";

export const metadata: Metadata = {
  title: "Arriving checklists",
  description:
    "Singapore expat arriving checklists for the first 7, 30, and 90 days — pass, bank, housing, school, belonging.",
};

export default async function ArrivingJourneysPage() {
  const checklists = await getChecklists();
  const phases = ["day-7", "day-30", "day-90"] as const;

  return (
    <>
      <JourneyHero
        eyebrow="Arriving"
        title="The first 90 days, in three lists."
        summary="Land soft, get operational, then build routines. Tick items in your browser — progress stays local. Start with the week-one dependency map, SG Arrival Card, Changi transfer, HSA meds, and issuance → EPSC so you do not invent circular blockers."
      />
      <ArrivingPhaseNav />

      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
        <FadeIn className="mb-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/guides/first-week-sim-singpass-bank"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Week-one dependency map →
          </Link>
          <Link
            href="/guides/sg-arrival-card-expats"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            SG Arrival Card →
          </Link>
          <Link
            href="/guides/bringing-medication-singapore-hsa"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            HSA medication →
          </Link>
          <Link
            href="/guides/work-pass-issuance-epsc-notification"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Issuance → EPSC → card →
          </Link>
          <Link
            href="/guides/changi-airport-grab-taxi"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Changi → city transfer →
          </Link>
          <Link
            href="/guides/shipping-household-singapore"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Shipping GST relief →
          </Link>
          <Link
            href="/guides/relocation-checklist-7-30-90"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Narrative checklist →
          </Link>
        </FadeIn>

        <Stagger className="flex flex-col gap-10">
          {phases.map((phase) => {
            const c = checklists.find((x) => x.phase === phase);
            if (!c) return null;
            return (
              <StaggerItem key={phase}>
                <Link
                  href={`/journeys/arriving/${phase}`}
                  className="group block no-underline"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-canopy-mist">
                    {c.items.length} items · reviewed {c.lastReviewed}
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-ink group-hover:text-canopy">
                    {c.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-ink-muted">{c.summary}</p>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="mt-16">
          <Link
            href="/journeys/leaving"
            className="text-sm font-medium text-ink-muted no-underline hover:text-ink"
          >
            Already planning an exit? Leaving playbook →
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
