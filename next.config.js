import { join, resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = resolve(__dirname);
    return config;
  },
};

export default nextConfig;
