import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** DefinedTerm / glossary helpers — outside claimed seo*.ts through #307. */

export type GlossaryTerm = {
  name: string;
  description: string;
  path?: string;
};

export function definedTermJsonLd(term: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.name,
    description: term.description,
    url: term.path ? absoluteUrl(term.path) : undefined,
    inDefinedTermSet: absoluteUrl("/glossary"),
  };
}

export function definedTermSetJsonLd(input: {
  name?: string;
  path?: string;
  terms: GlossaryTerm[];
}) {
  const path = input.path ?? "/glossary";
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: input.name ?? `${SITE_NAME} glossary`,
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    hasDefinedTerm: input.terms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.name,
      description: term.description,
      url: term.path ? absoluteUrl(term.path) : undefined,
    })),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
