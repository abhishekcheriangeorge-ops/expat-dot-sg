import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** ImageObject helpers — outside claimed seo*.ts through #279. */

export function imageObjectJsonLd(input: {
  path: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl(input.path),
    url: absoluteUrl(input.path),
    caption: input.caption,
    width: input.width,
    height: input.height,
    inLanguage: "en-SG",
    creator: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function primaryImageJsonLd(input: {
  pagePath: string;
  imagePath: string;
  name?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(input.pagePath),
    name: input.name,
    primaryImageOfPage: {
      "@type": "ImageObject",
      contentUrl: absoluteUrl(input.imagePath),
      url: absoluteUrl(input.imagePath),
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
