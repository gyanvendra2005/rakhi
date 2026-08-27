import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "192.168.1.18:3000",
    "192.168.1.18",
    "192.168.*:*",
    "10.*:*",
    "172.*:*"
  ],
};

export default nextConfig;
