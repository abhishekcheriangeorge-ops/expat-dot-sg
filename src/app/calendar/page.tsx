import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { CalendarBoard } from "@/components/calendar";
import { getCalendarEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events & kids calendar",
  description:
    "Singapore expat calendar — MOE holidays, AEIS/S-AEIS and P1 windows, IRAS tax season, international-school apps, festivals, and community anchors.",
};

export default async function CalendarPage() {
  const events = await getCalendarEvents();

  return (
    <>
      <JourneyHero
        eyebrow="Calendar"
        title="School holidays, application windows, and the weeks families plan around."
        summary="MOE term breaks, AEIS/S-AEIS and P1 registration seasons, IRAS e-Filing deadlines, international-school admissions, plus festivals and community anchors."
      />
      <CalendarBoard events={events} />
    </>
  );
}
