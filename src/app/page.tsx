import type { Metadata } from "next";
import {
  HomeHero,
  HomePillars,
  HomeRent,
  HomeSourcing,
  HomeTools,
} from "@/components/home";
import { getHomeStats } from "@/lib/home/stats";
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

export default async function HomePage() {
  const stats = await getHomeStats();

  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <HomeHero stats={stats} />
      <HomeRent stats={stats} />
      <HomeTools stats={stats} />
      <HomePillars stats={stats} />
      <HomeSourcing stats={stats} />
    </>
  );
}
