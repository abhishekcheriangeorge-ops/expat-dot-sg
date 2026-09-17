import type { Metadata } from "next";
import Link from "next/link";
import { DirectoryHero, ServiceDirectory } from "@/components/directory";
import { JsonLd } from "@/components/seo";
import {
  SERVICE_CATEGORY_LABELS,
  getServices,
  type ServiceCategory,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Service directory",
  description:
    "Movers, clinics, agents, helper agencies, tutors, insurance, and legal — Singapore expat service directory.",
  path: "/directory",
});

export default async function DirectoryPage() {
  const services = await getServices();
  const byCategory = (
    Object.keys(SERVICE_CATEGORY_LABELS) as ServiceCategory[]
  )
    .map((category) => ({
      category,
      label: SERVICE_CATEGORY_LABELS[category],
      count: services.filter((s) => s.category === category).length,
    }))
    .filter((c) => c.count > 0);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Directory", path: "/directory" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Service directory",
            description:
              "Singapore expat service categories — movers, clinics, agents, helpers, tutors, cover, and counsel.",
            path: "/directory",
            items: byCategory.map((cat) => ({
              name: cat.label,
              path: `/directory/${cat.category}`,
            })),
          }),
        ]}
      />
      <DirectoryHero
        eyebrow="Directory"
        title="Services"
        description="Practical operators for the messy middle of expat life — moves, clinics, agents, helpers, tutors, cover, and counsel. Featured and Sponsored badges mark paid placements — never unmarked editorial."
        meta={`${services.length} listings across ${byCategory.length} categories`}
        crumbs={crumbs}
      />

      <section className="border-b border-ink/15">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-10 sm:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Browse by category
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {byCategory.map((cat) => (
              <li key={cat.category}>
                <Link
                  href={`/directory/${cat.category}`}
                  className="flex items-baseline justify-between border border-fog-soft bg-paper-elevated px-4 py-3 no-underline transition-colors hover:border-canopy-mist"
                >
                  <span className="text-sm font-medium text-ink">{cat.label}</span>
                  <span className="text-xs text-ink-faint">{cat.count}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-faint">
            Need the decision first? Start in{" "}
            <Link
              href="/move"
              className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
            >
              Move
            </Link>
            ,{" "}
            <Link
              href="/home"
              className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
            >
              Home
            </Link>
            ,{" "}
            <Link
              href="/family"
              className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
            >
              Family
            </Link>
            , or{" "}
            <Link
              href="/guides"
              className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
            >
              Guides
            </Link>
            .
          </p>
        </div>
      </section>

      <ServiceDirectory services={services} />
    </>
  );
}
