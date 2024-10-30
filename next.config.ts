import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'files.stripe.com'
    ]
  },
};

export default nextConfig;
