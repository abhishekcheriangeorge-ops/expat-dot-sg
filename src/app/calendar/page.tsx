import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { CalendarBoard } from "@/components/calendar";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCalendarEvents } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata, collectionPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Events & kids calendar",
  description:
    "Singapore expat calendar — MOE holidays and Teachers’/Youth/Children’s Day, AEIS/S-AEIS and P1 windows, IRAS tax season, EP salary uplift 2027, international-school apps, festivals, and community anchors.",
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
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Events & kids calendar",
            description:
              "MOE holidays, AEIS/S-AEIS and P1 windows, IRAS tax season, international-school apps, festivals, and community anchors.",
            path: "/calendar",
            items: events.slice(0, 40).map((event) => ({
              name: event.title,
              path: `/calendar#${event.slug}`,
            })),
          }),
        ]}
      />
      <div className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Calendar"
        title="School holidays, application windows, and the weeks families plan around."
        summary="MOE term breaks and Teachers’/Youth/Children’s Day, AEIS/S-AEIS and P1 seasons, IRAS e-Filing, the 1 Jan 2027 EP salary uplift, international-school admissions, plus festivals and community anchors."
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
          </Link>{" "}
          ·{" "}
          <Link
            href="/guides/aeis-saeis-international-students"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            AEIS / S-AEIS
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/tax-residency"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Tax residency sketch
          </Link>
        </p>
      </div>
    </>
  );
}
