import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { getLeavingPlaybook } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leaving Singapore",
  description:
    "Leaving Singapore playbook — IRAS tax clearance, pass cancellation, lease exit, shipping, and school records.",
};

export default async function LeavingJourneyPage() {
  const playbook = await getLeavingPlaybook();
  if (!playbook) notFound();

  return (
    <>
      <JourneyHero
        eyebrow="Next · Leaving"
        title={playbook.title}
        summary="Work backwards from the flight. Tax clearance and shipping set the tempo."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
    </>
  );
}
