import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrivingPhaseNav,
  ChecklistBoard,
  JourneyHero,
} from "@/components/journeys";
import {
  getChecklistByPhase,
  type ChecklistPhase,
} from "@/lib/content";

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
  return {
    title: checklist.title,
    description: checklist.summary,
  };
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

  return (
    <>
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
