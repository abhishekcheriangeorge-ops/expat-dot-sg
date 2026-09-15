import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Privacy / DNT crawl helpers — outside claimed seo*.ts through #252. */

export const PRIVACY_TXT_PATH = "/privacy.txt";
export const DNT_POLICY_PATH = "/.well-known/dnt-policy.txt";
export const GPC_SIGNAL_PATH = "/.well-known/gpc.json";
export const SECURITY_TXT_PATH = "/.well-known/security.txt";

export function privacyDiscoveryUrls() {
  return {
    privacyTxt: absoluteUrl(PRIVACY_TXT_PATH),
    dntPolicy: absoluteUrl(DNT_POLICY_PATH),
    gpc: absoluteUrl(GPC_SIGNAL_PATH),
    securityTxt: absoluteUrl(SECURITY_TXT_PATH),
  };
}

/** Link header values for privacy-signal discovery on HTML responses. */
export function privacyLinkHeaderValue(): string {
  const urls = privacyDiscoveryUrls();
  return [
    `<${urls.privacyTxt}>; rel="privacy-policy"`,
    `<${urls.dntPolicy}>; rel="dnt-policy"`,
    `<${urls.gpc}>; rel="https://globalprivacycontrol.org/"`,
  ].join(", ");
}

export function privacyPolicyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_NAME} privacy signals`,
    description:
      "Privacy and tracking-preference signals for expat.sg — GPC, DNT policy, and crawl-facing privacy map.",
    url: absoluteUrl(PRIVACY_TXT_PATH),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    about: {
      "@type": "Thing",
      name: "Privacy preferences",
    },
  };
}
