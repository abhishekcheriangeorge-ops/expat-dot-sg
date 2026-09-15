import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Home",
  description:
    "Renting process, condo vs HDB, neighbourhood deep-dives, utilities, domestic helpers, and tropical renewals.",
  path: "/home",
});

export default function HomePillarPage() {
  return <PillarPage slug="home" />;
}
