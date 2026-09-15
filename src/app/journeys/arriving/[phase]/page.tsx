import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrivingPhaseNav,
  ChecklistBoard,
  JourneyHero,
} from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  getChecklistByPhase,
  type ChecklistPhase,
} from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

const ARRIVING_PHASES = ["day-7", "day-30", "day-90"] as const;

type Phase = (typeof ARRIVING_PHASES)[number];

function isPhase(value: string): value is Phase {
  return (ARRIVING_PHASES as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return ARRIVING_PHASES.map((phase) => ({ phase }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ phase: string }>;
}): Promise<Metadata> {
  const { phase } = await params;
  if (!isPhase(phase)) return { title: "Checklist" };
  const checklist = await getChecklistByPhase(phase);
  if (!checklist) return { title: "Checklist" };
  return buildPageMetadata({
    title: checklist.title,
    description: checklist.summary,
    path: `/journeys/arriving/${phase}`,
  });
}

export default async function ArrivingPhasePage({
  params,
}: {
  params: Promise<{ phase: string }>;
}) {
  const { phase } = await params;
  if (!isPhase(phase)) notFound();

  const checklist = await getChecklistByPhase(phase as ChecklistPhase);
  if (!checklist) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Arriving", path: "/journeys/arriving" },
    { name: checklist.title, path: `/journeys/arriving/${phase}` },
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
        eyebrow="Arriving checklist"
        title={checklist.title}
        summary={checklist.summary}
        lastReviewed={checklist.lastReviewed}
      />
      <ArrivingPhaseNav active={phase} />
      <ChecklistBoard checklist={checklist} />
    </>
  );
}
