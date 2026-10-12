import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/schengenpass-travel',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false
};
export default nextConfig;
