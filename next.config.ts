import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}api/:path*`, // HTTP only
      },
    ];
  },
};

export default nextConfig;
