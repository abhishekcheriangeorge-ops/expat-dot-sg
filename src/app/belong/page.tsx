import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Belong",
  description:
    "Membership clubs, associations, chambers, hashes, faith communities, nationality groups, and LGBTQ+ resources in Singapore.",
};

export default function BelongPage() {
  return <PillarPage slug="belong" />;
}
