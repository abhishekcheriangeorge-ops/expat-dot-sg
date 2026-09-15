import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";
import type { GuideFaq } from "@/lib/content/schemas";

/** FAQ / speakable helpers — outside claimed seo*.ts through #272. */

export function guideFaqPageJsonLd(
  faqs: GuideFaq[],
  input?: { name?: string; path?: string },
): Record<string, unknown> | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: input?.name,
    url: input?.path ? absoluteUrl(input.path) : undefined,
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** SpeakableSpecification for answer-engine friendly pages. */
export function speakableJsonLd(input: {
  path: string;
  cssSelectors?: string[];
  xpath?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(input.path),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: input.cssSelectors ?? ["h1", "h2", "[data-speakable]"],
      xpath: input.xpath,
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function qaPageJsonLd(input: {
  name: string;
  path: string;
  question: string;
  answer: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    name: input.name,
    url: absoluteUrl(input.path),
    inLanguage: "en-SG",
    mainEntity: {
      "@type": "Question",
      name: input.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: input.answer,
      },
    },
  };
}
