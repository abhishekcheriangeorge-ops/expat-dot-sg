import type { Metadata } from "next";
import { ModeHub } from "@/components/modes/ModeHub";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";

const title = "Arriving";
const description =
  "Deciding, packing, and the first 90 days in Singapore — visas, housing, banking, and the runway that keeps the move sane.";
const path = "/arriving";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function ArrivingPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title,
          description,
          path,
        })}
      />
      <ModeHub mode="arriving" />
    </>
  );
}
