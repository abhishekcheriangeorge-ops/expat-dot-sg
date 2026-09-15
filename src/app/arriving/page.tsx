import type { Metadata } from "next";
import { ModeHub } from "@/components/modes/ModeHub";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Arriving",
  description:
    "Deciding, packing, and the first 90 days in Singapore — visas, housing, banking, and the runway that keeps the move sane.",
  path: "/arriving",
});

export default function ArrivingPage() {
  return <ModeHub mode="arriving" />;
}
