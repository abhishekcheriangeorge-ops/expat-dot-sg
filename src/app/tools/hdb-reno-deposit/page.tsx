import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LinkRail } from "@/components/seo/LinkRail";
import { HdbRenoDepositCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-handoff";

const title = "HDB reno deposit return sketch";
const description =
  "Sketch HDB / renovation permit deposit refund timing and cash at risk after reinstatement inspection — orientation only.";
const path = "/tools/hdb-reno-deposit";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/mail-forward-exit", label: "Mail forward exit" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/tools/club-deposit-exit", label: "Club deposit exit" },
  { href: "/home", label: "Home pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function HdbRenoDepositToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "HDB reno deposit", path },
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
        eyebrow="Tools · Home"
        title="Reno deposit return, sketched."
        summary="Model hold days and clean-pass vs defect outcomes before you cancel the mailbox that receives the refund."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <HdbRenoDepositCalculator />
        <LinkRail links={RELATED} />
      </div>
    </>
  );
}
