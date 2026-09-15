import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Site version / SoftwareApplication revision helpers — outside claimed seo*.ts through #311. */

export function siteVersionJsonLd(input?: {
  version?: string;
  dateModified?: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    url: absoluteUrl(input?.path ?? "/"),
    softwareVersion: input?.version ?? "loop-g-tip",
    dateModified: input?.dateModified,
    applicationCategory: "ReferenceApplication",
    operatingSystem: "Any",
    inLanguage: "en-SG",
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function versionWebPageJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/status.txt";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input?.name ?? `${SITE_NAME} version notes`,
    description:
      input?.description ??
      "Build and tip freshness pointers for crawlers and operators.",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
