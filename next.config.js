import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = path.resolve(__dirname);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(rootDir, 'styles')],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(rootDir, 'src');
    return config;
  },
};

export default nextConfig;
