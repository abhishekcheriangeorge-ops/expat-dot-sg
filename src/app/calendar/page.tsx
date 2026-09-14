import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { CalendarBoard } from "@/components/calendar";
import { getCalendarEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events & kids calendar",
  description:
    "Singapore expat calendar — school holidays, cultural festivals, kids activities, and recurring community anchors.",
};

export default async function CalendarPage() {
  const events = await getCalendarEvents();

  return (
    <>
      <JourneyHero
        eyebrow="Calendar"
        title="School holidays, festivals, and the weeks families plan around."
        summary="A living section for habitual return visits — kids camps, cultural light-ups, and city-wide moments that reshape logistics."
      />
      <CalendarBoard events={events} />
    </>
  );
}
