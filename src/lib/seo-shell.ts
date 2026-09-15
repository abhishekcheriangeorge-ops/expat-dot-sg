import {
  SITE_NAME,
  absoluteUrl,
  getSiteUrl,
} from "@/lib/seo";

/** WebPage schema for thin wrappers (pillars / modes) without editing seo.ts. */
export function webPageJsonLd(input: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

/** HowTo from playbook-style section lists. */
export function howToJsonLd(input: {
  name: string;
  description: string;
  path: string;
  steps: Array<{ name: string; text: string }>;
}) {
  if (!input.steps.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "en-SG",
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/** WebApplication schema for calculator / sketch tools. */
export function webApplicationJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SGD",
    },
  };
}
