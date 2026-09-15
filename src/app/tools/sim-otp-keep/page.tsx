import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { SimOtpKeepCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-playbooks";

const title = 'SIM / OTP keep sketch';
const description =
  'Sketch keep-vs-port costs for a Singapore mobile number when you still need Singpass, bank, and IRAS OTP SMS after leaving or during newborn paperwork.';
const path = '/tools/sim-otp-keep';

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/newborn-special-pass", label: "Newborn Special Pass" },
  { href: "/journeys/singpass-myinfo-exit", label: "Singpass / Myinfo exit" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/life", label: "Life pillar" },
  { href: "/living", label: "Living hub" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function SimOtpKeepToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: 'SIM / OTP keep', path },
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
        eyebrow='Tools · Digital'
        title='Keep the +65 OTP path, or replace it?'
        summary='Singpass and bank SMS still need a reachable number. Compare prepaid keep, postpaid keep, port, and drop-and-replace sketches.'
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SimOtpKeepCalculator />
        <div className="mt-12">
          <ExploreLinks links={RELATED} />
        </div>
      </div>
    </>
  );
}
