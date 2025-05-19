import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  trailingSlash: true,
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
};

export default nextConfig;
