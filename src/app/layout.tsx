import type { Metadata } from "next";
import { SiteShell } from "@/components/layout";
import { fontDisplay, fontSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "expat.sg — Singapore expat life, from offer to year three",
    template: "%s · expat.sg",
  },
  description:
    "The operating system for Singapore expat life. Guides, neighbourhoods, schools, clubs, and journeys for arriving and living.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://expat.sg",
  ),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
