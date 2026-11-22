/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'server.arcgisonline.com' },
      { protocol: 'https', hostname: 'unpkg.com' },
    ],
  },
  transpilePackages: ['leaflet'],
};

module.exports = nextConfig;
