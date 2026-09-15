import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** ContactPoint helpers — outside claimed seo*.ts through #292. */

export function contactPointJsonLd(input?: {
  contactType?: string;
  url?: string;
  email?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: input?.contactType ?? "editorial",
      url: input?.url ?? absoluteUrl("/about"),
      email: input?.email,
      areaServed: input?.areaServed ?? "SG",
      availableLanguage: ["en"],
    },
  };
}

export function contactPageJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: input?.name ?? `${SITE_NAME} contact`,
    description:
      input?.description ??
      "Editorial and security contact paths for expat.sg.",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
