import type { NextConfig } from "next";

const [repositoryOwner = "", repositoryName = ""] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isGithubPagesUserSite =
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;
const githubPagesBasePath =
  process.env.GITHUB_ACTIONS && repositoryName && !isGithubPagesUserSite
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath ? `${githubPagesBasePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPagesBasePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
