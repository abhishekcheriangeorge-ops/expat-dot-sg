import type { Metadata } from "next";
import Link from "next/link";
import { ClubDirectory, DirectoryHero } from "@/components/directory";
import { JsonLd } from "@/components/seo";
import { getClubs } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Clubs & communities",
  description:
    "Membership clubs, associations, chambers, hashes, and community groups for belonging in Singapore.",
  path: "/clubs",
});

export default async function ClubsPage() {
  const clubs = await getClubs();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Belong", path: "/belong" },
    { name: "Clubs", path: "/clubs" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Clubs & communities",
            description:
              "Membership clubs, associations, chambers, and community groups in Singapore.",
            path: "/clubs",
            items: clubs.slice(0, 24).map((c) => ({
              name: c.name,
              path: `/clubs/${c.slug}`,
            })),
          }),
        ]}
      />
      <DirectoryHero
        eyebrow="Belong"
        title="Clubs & communities"
        description="Find your people without guessing the alphabet soup. Membership clubs, nationality associations, chambers, hashes, faith communities, and LGBTQ+ resources — filter by what you actually need."
        meta={`${clubs.length} listings · clubs, associations, chambers, hashes · paired with Belong`}
        crumbs={crumbs}
      />
      <ClubDirectory clubs={clubs} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/belong"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Belong pillar
          </Link>{" "}
          ·{" "}
          <Link
            href="/guides/find-my-people-singapore"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Find my people
          </Link>{" "}
          ·{" "}
          <Link
            href="/guides/membership-clubs-comparison"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Membership clubs
          </Link>{" "}
          ·{" "}
          <Link
            href="/guides/anza-awa-associations"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            ANZA / AWA
          </Link>{" "}
          ·{" "}
          <Link
            href="/living"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Living hub
          </Link>
        </p>
      </div>
    </>
  );
}
