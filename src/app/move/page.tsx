import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Move",
  description:
    "Employment Pass, COMPASS, dependants, shipping, pets, driving conversion, and the 7/30/90-day runway into Singapore.",
  path: "/move",
});

export default function MovePage() {
  return <PillarPage slug="move" />;
}
