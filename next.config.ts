import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/feeds.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/.well-known/gpc.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
          { key: "Content-Type", value: "application/json" },
        ],
      },
    ];
  },
};

export default nextConfig;
