import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"
const repoName = "nextjs-ssg-test"

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? `/${repoName}/` : "",
  basePath: isProd ? `/${repoName}` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
