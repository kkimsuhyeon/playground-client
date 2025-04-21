import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  distDir: 'dist',
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
