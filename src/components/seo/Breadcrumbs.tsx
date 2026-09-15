import Link from "next/link";
import { absoluteUrl, type BreadcrumbItem } from "@/lib/seo";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

/** Visible breadcrumb trail with BreadcrumbList microdata — pair with breadcrumbJsonLd. */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={className ?? "text-sm text-ink-faint"}
    >
      <ol
        className="flex flex-wrap items-center gap-x-2 gap-y-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const url = absoluteUrl(item.path);
          return (
            <li
              key={`${item.path}-${index}`}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 ? (
                <span aria-hidden="true" className="text-ink-faint/70">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span
                  aria-current="page"
                  className="text-ink-muted"
                  itemProp="name"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="text-ink-faint no-underline underline-offset-4 hover:text-canopy hover:underline"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
              {isLast ? <meta itemProp="item" content={url} /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
