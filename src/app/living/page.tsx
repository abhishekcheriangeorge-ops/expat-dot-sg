import type { Metadata } from "next";
import { ModeHub } from "@/components/modes/ModeHub";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Living",
  description:
    "Thriving in Singapore beyond the first ninety days — neighbourhoods, schools, belonging, renewals, and leaving well.",
  path: "/living",
});

export default function LivingPage() {
  return <ModeHub mode="living" />;
}
