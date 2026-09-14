import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePillars } from "@/components/home/HomePillars";
import { JsonLd } from "@/components/seo";
import {
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: `expat.sg — ${SITE_TAGLINE}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `expat.sg — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `expat.sg — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/" },
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
