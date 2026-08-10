import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Assets are prepared locally; direct delivery avoids external optimizer failures.
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
