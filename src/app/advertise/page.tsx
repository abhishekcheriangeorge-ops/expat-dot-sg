import type { Metadata } from "next";
import Link from "next/link";
import { AdvertiseInquiryForm } from "@/components/advertise";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getAllFeaturedListings } from "@/lib/content/featured";
import { getAllSponsoredPosts } from "@/lib/content/sponsored";
import { getStorageBackend } from "@/lib/db";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Advertise",
  description:
    "Media kit and inquiry for featured listings, sponsored posts, newsletter, and category sponsorships on expat.sg.",
  path: "/advertise",
});

const PRODUCTS = [
  {
    title: "Featured directory listing",
    body: "Schools, clubs, movers, clinics, agents — Featured badge, sorted above organic matches. Never unmarked as editorial.",
  },
  {
    title: "Sponsored post",
    body: "Full advertorial on /sponsored with #sponsored disclosure and a separate template from guides.",
  },
  {
    title: "Category / guide slot",
    body: "Labeled partner block on high-intent guides (insurance, movers, schools). Inventory is disclosed every time.",
  },
  {
    title: "Newsletter sponsorship",
    body: "Structure ready for list growth post-launch. Ask us about early-partner rates.",
  },
] as const;

export default async function AdvertisePage() {
  const [featured, sponsoredPosts] = await Promise.all([
    getAllFeaturedListings(),
    getAllSponsoredPosts(),
  ]);
  const storage = getStorageBackend();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Advertise", path: "/advertise" },
  ];

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <header className="relative overflow-hidden border-b border-fog-soft">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,color-mix(in_srgb,var(--canopy-mist)_20%,transparent),transparent_50%),radial-gradient(ellipse_at_90%_30%,color-mix(in_srgb,var(--tungsten)_12%,transparent),transparent_40%)]"
        />
        <div className="relative mx-auto max-w-[var(--max-page)] px-5 py-16 sm:px-8 sm:py-24">
          <Breadcrumbs items={crumbs} className="mb-8 text-sm text-ink-faint" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-canopy-mist">
            Media kit
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-canopy-deep sm:text-5xl">
            Advertise on expat.sg
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Reach people deciding on Singapore — and those already living the
            operating system of EP renewals, school waitlists, and club
            memberships. Every paid surface is labeled. We do not sell unmarked
            editorial.
          </p>
        </div>
      </header>

      <section className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl text-ink">Products</h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            One job per placement. Transparent disclosure is part of the product.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {PRODUCTS.map((product) => (
              <li key={product.title}>
                <h3 className="font-display text-xl text-canopy-deep">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {product.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-fog-soft bg-paper-elevated/50">
        <div className="mx-auto grid max-w-[var(--max-page)] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Audience &amp; rules</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-muted">
              <li>Dual journey traffic: Arriving (offer → day 90) and Living.</li>
              <li>
                High-intent directories: neighbourhoods, schools, clubs, services.
              </li>
              <li>
                Sponsored posts use a dedicated template with `#sponsored` at the
                top — never the editorial guide chrome alone.
              </li>
              <li>
                Featured badges read entity flags; we do not rewrite the corpus to
                invent trust.
              </li>
            </ul>

            <div className="mt-8 text-sm text-ink-faint">
              <p>
                Sample inventory live:{" "}
                <strong className="font-medium text-ink-muted">
                  {featured.length} featured listings
                </strong>
                ,{" "}
                <Link href="/sponsored" className="text-canopy underline">
                  {sponsoredPosts.length} sponsored posts
                </Link>
                .
              </p>
              <p className="mt-2">
                Lead storage backend:{" "}
                <code className="text-ink-muted">
                  {storage === "neon" ? "Neon Postgres" : "file (.data/leads.jsonl)"}
                </code>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">Inquiry</h2>
            <p className="mt-3 text-sm text-ink-muted">
              Tell us category, timing, and budget band. We reply with
              availability — not a fake scarcity countdown.
            </p>
            <div className="mt-8">
              <AdvertiseInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
