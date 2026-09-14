import type { Metadata } from "next";
import { ClubDirectory, DirectoryHero } from "@/components/directory";
import { getClubs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clubs & communities",
  description:
    "Membership clubs, associations, chambers, hashes, and community groups for belonging in Singapore.",
};

export default async function ClubsPage() {
  const clubs = await getClubs();

  return (
    <>
      <DirectoryHero
        eyebrow="Belong"
        title="Clubs & communities"
        description="Find your people without guessing the alphabet soup. Membership clubs, nationality associations, chambers, hashes, faith communities, and LGBTQ+ resources — filter by what you actually need."
        meta={`${clubs.length} listings · clubs, associations, chambers, hashes`}
      />
      <ClubDirectory clubs={clubs} />
    </>
  );
}
