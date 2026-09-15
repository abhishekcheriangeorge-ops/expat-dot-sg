import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LinkRail } from "@/components/seo/LinkRail";
import { ClubDepositExitCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-handoff";

const title = "Club deposit exit sketch";
const description =
  "Sketch Singapore club resignation cash — deposit refund hope, notice-month dues, admin fees, and prepaid burn.";
const path = "/tools/club-deposit-exit";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/helper-handoff-exit", label: "Helper handoff exit" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/tools/hdb-reno-deposit", label: "HDB reno deposit" },
  { href: "/belong", label: "Belong pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function ClubDepositExitToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Club deposit exit", path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({ name: title, description, path }),
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
        eyebrow="Tools · Belong"
        title="Club resignation cash, sketched."
        summary="Compare full-refund hope, partial refund, and forfeit paths against notice dues before you pack the membership card."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <ClubDepositExitCalculator />
        <LinkRail links={RELATED} />
      </div>
    </>
  );
}
