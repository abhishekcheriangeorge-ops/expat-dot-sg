import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePillars } from "@/components/home/HomePillars";
import { JsonLd } from "@/components/seo";
import {
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  buildPageMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `expat.sg — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    path: "/",
  }),
  title: {
    absolute: `expat.sg — ${SITE_TAGLINE}`,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <HomeHero />
      <HomePillars />
    </>
  );
}
