import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";
import type {
  JourneyChecklist,
  LeavingPlaybook,
} from "@/lib/content/schemas";

/** Journey checklist / playbook helpers — outside claimed seo*.ts through #261. */

export function checklistItemListJsonLd(checklist: JourneyChecklist) {
  const path = `/journeys/${checklist.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: checklist.title,
    description: checklist.summary,
    url: absoluteUrl(path),
    numberOfItems: checklist.items.length,
    itemListElement: checklist.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.detail,
      url: item.href
        ? item.href.startsWith("http")
          ? item.href
          : absoluteUrl(item.href)
        : absoluteUrl(`${path}#${item.id}`),
    })),
  };
}

export function playbookHowToJsonLd(playbook: LeavingPlaybook) {
  if (!playbook.sections.length) return null;
  const path = `/journeys/${playbook.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: playbook.title,
    description: playbook.summary,
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    dateModified: playbook.lastReviewed,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    step: playbook.sections.map((section, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: section.title,
      text: section.body,
      url: absoluteUrl(`${path}#${section.id}`),
    })),
  };
}

export function journeysHubItemListJsonLd(input: {
  name?: string;
  path?: string;
  items: Array<{ title: string; slug: string; path?: string }>;
}) {
  const path = input.path ?? "/journeys";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? `${SITE_NAME} journeys`,
    url: absoluteUrl(path),
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(item.path ?? `${path}/${item.slug}`),
    })),
  };
}
