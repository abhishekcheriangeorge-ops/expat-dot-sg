import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Search / OpenSearch discovery helpers — outside claimed seo*.ts through #272. */

export const OPENSEARCH_PATH = "/opensearch.xml";
export const SEARCH_TXT_PATH = "/search.txt";

export function websiteSearchActionJsonLd(input?: {
  targetPath?: string;
  queryInput?: string;
}) {
  const targetPath = input?.targetPath ?? "/guides?q={search_term_string}";
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl(targetPath),
      },
      "query-input":
        input?.queryInput ?? "required name=search_term_string",
    },
  };
}

export function searchDiscoveryUrls() {
  return {
    opensearch: absoluteUrl(OPENSEARCH_PATH),
    searchTxt: absoluteUrl(SEARCH_TXT_PATH),
    guides: absoluteUrl("/guides"),
    tools: absoluteUrl("/tools"),
    directory: absoluteUrl("/directory"),
  };
}
