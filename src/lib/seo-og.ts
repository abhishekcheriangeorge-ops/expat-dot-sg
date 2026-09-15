import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Open Graph / Twitter card helpers — outside claimed seo*.ts through #279. */

export type OgCardInput = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  type?: "website" | "article";
};

export function ogCardFields(input: OgCardInput) {
  const url = absoluteUrl(input.path);
  const image = absoluteUrl(input.imagePath ?? "/opengraph-image");
  return {
    "og:site_name": SITE_NAME,
    "og:title": input.title,
    "og:description": input.description,
    "og:url": url,
    "og:type": input.type ?? "website",
    "og:locale": "en_SG",
    "og:image": image,
    "twitter:card": "summary_large_image",
    "twitter:title": input.title,
    "twitter:description": input.description,
    "twitter:image": image,
  } as const;
}

export function websiteOgJsonLd(input: OgCardInput) {
  return {
    "@context": "https://schema.org",
    "@type": input.type === "article" ? "Article" : "WebPage",
    name: input.title,
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    image: absoluteUrl(input.imagePath ?? "/opengraph-image"),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
