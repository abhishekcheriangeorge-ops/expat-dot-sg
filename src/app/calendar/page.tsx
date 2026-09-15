import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { CalendarBoard } from "@/components/calendar";
import { getCalendarEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events & kids calendar",
  description:
    "Singapore expat calendar — MOE school holidays, P1 and international-school application windows, festivals, and community anchors.",
};

export default async function CalendarPage() {
  const events = await getCalendarEvents();

  return (
    <>
      <JourneyHero
        eyebrow="Calendar"
        title="School holidays, application windows, and the weeks families plan around."
        summary="MOE term breaks with official dates, P1 registration and international-school admissions seasons, plus festivals and community anchors."
      />
      <CalendarBoard events={events} />
    </>
  );
}
