import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { CalendarBoard } from "@/components/calendar";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCalendarEvents } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Events & kids calendar",
  description:
    "Singapore expat calendar — school holidays, cultural festivals, kids activities, and recurring community anchors.",
  path: "/calendar",
});

export default async function CalendarPage() {
  const events = await getCalendarEvents();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Calendar", path: "/calendar" },
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
        eyebrow="Calendar"
        title="School holidays, festivals, and the weeks families plan around."
        summary="A living section for habitual return visits — kids camps, cultural light-ups, and city-wide moments that reshape logistics."
      />
      <CalendarBoard events={events} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/family"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Family pillar
          </Link>{" "}
          ·{" "}
          <Link
            href="/guides/kids-activities-holiday-camps"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Kids activities guide
          </Link>{" "}
          ·{" "}
          <Link
            href="/schools"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Schools directory
          </Link>
        </p>
      </div>
    </>
  );
}
