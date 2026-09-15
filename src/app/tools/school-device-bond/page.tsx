import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ContinueLinks } from "@/components/seo/ContinueLinks";
import { SchoolDeviceBondCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-device";

const title = "School device bond sketch";
const description =
  "Sketch iPad / 1:1 device bond return vs damage holds, overdue fees, and lost-device forfeiture before you leave Singapore.";
const path = "/tools/school-device-bond";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/condo-visitor-qr-exit", label: "Condo visitor QR revoke" },
  { href: "/tools/school-deposit-clawback", label: "School deposit clawback" },
  { href: "/journeys/school-bus-cca-exit", label: "School bus / CCA exit" },
  { href: "/family", label: "Family pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function SchoolDeviceBondToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "School device bond", path },
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
        eyebrow="Tools · School exit"
        title="Device bond cash, sketched."
        summary="Compare on-time return, damage holds, and lost-device forfeiture before movers week swallows the IT desk slot."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolDeviceBondCalculator />
        <ContinueLinks links={RELATED} />
      </div>
    </>
  );
}
