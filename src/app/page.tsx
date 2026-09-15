import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHubs } from "@/components/home/HomeHubs";
import { HomePillars } from "@/components/home/HomePillars";
import { JsonLd } from "@/components/seo";
import {
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  buildPageMetadata,
  collectionPageJsonLd,
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
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          collectionPageJsonLd({
            name: "expat.sg",
            description: SITE_DESCRIPTION,
            path: "/",
            items: [
              { name: "Guides", path: "/guides" },
              { name: "Journeys", path: "/journeys" },
              { name: "Tools", path: "/tools" },
              { name: "Neighbourhoods", path: "/neighbourhoods" },
              { name: "Schools", path: "/schools" },
              { name: "Clubs", path: "/clubs" },
              { name: "Directory", path: "/directory" },
              { name: "Arriving", path: "/arriving" },
              { name: "Living", path: "/living" },
            ],
          }),
        ]}
      />
      <HomeHero />
      <HomePillars />
      <HomeHubs />
    </>
  );
}
