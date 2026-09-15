import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";
import type { CalendarEvent } from "@/lib/content/schemas";

/** Calendar Event / ItemList helpers — outside claimed seo*.ts through #261. */

export function calendarEventJsonLd(event: CalendarEvent) {
  const path = `/calendar#${event.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    url: absoluteUrl(path),
    startDate: event.date,
    endDate: event.endDate ?? event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    inLanguage: "en-SG",
    location: {
      "@type": "Place",
      name: event.venue ?? "Singapore",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SG",
        addressLocality: "Singapore",
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    isAccessibleForFree: true,
  };
}

export function calendarItemListJsonLd(input: {
  name?: string;
  path?: string;
  events: CalendarEvent[];
}) {
  const path = input.path ?? "/calendar";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? `${SITE_NAME} calendar`,
    url: absoluteUrl(path),
    numberOfItems: input.events.length,
    itemListElement: input.events.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: event.title,
      url: absoluteUrl(`${path}#${event.slug}`),
    })),
  };
}
