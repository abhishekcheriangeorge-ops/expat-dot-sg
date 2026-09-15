import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Life",
  description:
    "Transport, hawkers, shopping, nightlife, sports, apps, haze season, and emergencies — everyday Singapore without tourist gloss.",
  path: "/life",
});

export default function LifePage() {
  return <PillarPage slug="life" />;
}
