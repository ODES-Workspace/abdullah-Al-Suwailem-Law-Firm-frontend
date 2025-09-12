import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '64.226.117.146',
        port: '8080',
        pathname: '/storage/uploads/**',
      },
    ],
  },
};

export default nextConfig;
