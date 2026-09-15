import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/**
 * Site-as-SoftwareApplication helpers — outside claimed seo*.ts through #292.
 * Distinct from per-tool WebApplication helpers in seo-tools.ts.
 */

export function siteSoftwareApplicationJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input?.name ?? SITE_NAME,
    description:
      input?.description ??
      "Guides, journeys, tools, and directories for Singapore expat life.",
    url: absoluteUrl(input?.path ?? "/"),
    applicationCategory: "ReferenceApplication",
    operatingSystem: "Any",
    inLanguage: "en-SG",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SGD",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
