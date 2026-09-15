import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteShellProps = {
  children: ReactNode;
};

/** Base layout chrome — skip link + fixed header + main + footer */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 outline-none"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
