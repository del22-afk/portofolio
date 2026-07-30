import type { NextConfig } from 'next';

const basePath = '/portofolio';

const nextConfig: NextConfig = {
  // Deploy di sub-folder GitHub Pages: https://<user>.github.io/portofolio/
  basePath,
  assetPrefix: basePath,
  output: 'export',

  images: {
    // GitHub Pages tidak punya server image optimization
    unoptimized: true,
  },
};

export default nextConfig;
