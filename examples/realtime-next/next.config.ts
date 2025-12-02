import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 自定义字段
  allowedDevOrigins: [
    "http://localhost:3000",   // 本地访问
    "https://localhost:3000",  // HTTPS 本地访问
    "http://9.208.6.64:3000",  // 局域网访问
    "https://9.208.6.64:3000"  // HTTPS 局域网访问
  ],
};

export default nextConfig;
