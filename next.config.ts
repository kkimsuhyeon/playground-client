import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  distDir: 'dist',
};

export default nextConfig;
