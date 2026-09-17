import type { NextConfig } from "next";
import { CLONE_REDIRECTS } from "./src/lib/content/clones";

const nextConfig: NextConfig = {
  async redirects() {
    return CLONE_REDIRECTS.map((item) => ({
      source: item.source,
      destination: item.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
