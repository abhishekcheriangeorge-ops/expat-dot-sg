import { NextResponse, type NextRequest } from "next/server";

/**
 * Crawl hygiene — trailing-slash normalize, API noindex, privacy Link hints.
 * Complements next.config headers from open G ticks without editing that file.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Canonicalize trailing slashes (keep root `/`)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+$/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  if (pathname.startsWith("/api/")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  // HTML-ish routes: advertise privacy / DNT discovery via Link
  const isAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    /\.[a-z0-9]+$/i.test(pathname);

  if (!isAsset && !pathname.startsWith("/api/")) {
    response.headers.set(
      "Link",
      [
        `</privacy.txt>; rel="privacy-policy"`,
        `</.well-known/dnt-policy.txt>; rel="dnt-policy"`,
        `</.well-known/gpc.json>; rel="https://globalprivacycontrol.org/"`,
      ].join(", "),
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Skip Next internals and common static files; still run on pages + api.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json)$).*)",
  ],
};
