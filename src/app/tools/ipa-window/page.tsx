import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { IpaWindowCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-shell";

const title = "IPA enter-and-issue window";
const description =
  "Sketch MOM Employment Pass IPA deadlines — common six-month enter-and-issue window, notification-letter buffer, and extension lead time before you book flights.";
const path = "/tools/ipa-window";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/family-joining", label: "Family joining later" },
  { href: "/journeys/arriving", label: "Arriving checklists" },
  { href: "/journeys/pre-arrival", label: "Pre-arrival" },
  { href: "/move", label: "Move pillar" },
  { href: "/arriving", label: "Arriving hub" },
] as const;

export default function IpaWindowToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "IPA window", path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({
            name: title,
            description,
            path,
          }),
          collectionPageJsonLd({
            name: `${title} — related`,
            description,
            path,
            items: RELATED.map((item) => ({
              name: item.label,
              path: item.href,
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
        eyebrow="Tools · Move"
        title="IPA clock, sketched."
        summary="Six months to enter and issue is the usual EP IPA story — confirm the letter, then book the flight. Dependant IPAs need the same discipline."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <IpaWindowCalculator />
        <nav aria-label="Related hubs" className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Related hubs
          </p>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {RELATED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </p>
        </nav>
      </div>
    </>
  );
}
