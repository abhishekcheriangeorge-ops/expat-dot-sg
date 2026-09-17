import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/layout";
import { fontDisplay, fontSans } from "@/lib/fonts";
import {
  DEFAULT_OG_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  getSiteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(getSiteUrl()),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: getSiteUrl() }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Singapore expat",
    "Employment Pass",
    "S Pass",
    "Dependant Pass",
    "international schools Singapore",
    "Singapore neighbourhoods",
    "expat living Singapore",
    "IRAS tax clearance",
    "leaving Singapore",
    "CPF withdrawal foreigner",
  ],
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_PATH, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
      "text/plain": "/llms.txt",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1a14" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-SG"
      className={`${fontDisplay.variable} ${fontSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
