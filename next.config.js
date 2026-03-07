/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    ppr: true,
  },
};

module.exports = nextConfig;
