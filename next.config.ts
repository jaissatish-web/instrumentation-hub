import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/instrumentation-hub",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
