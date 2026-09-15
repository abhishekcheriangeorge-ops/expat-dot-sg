import type { Metadata } from "next";
import { ModeHub } from "@/components/modes/ModeHub";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";

const title = "Living";
const description =
  "Thriving in Singapore beyond the first ninety days — neighbourhoods, schools, belonging, renewals, and leaving well.";
const path = "/living";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function LivingPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title,
          description,
          path,
        })}
      />
      <ModeHub mode="living" />
    </>
  );
}
