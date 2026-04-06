/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  // ⭐ Prevent Next.js from trying to statically export pages
  generateStaticParams: () => [],
};

module.exports = nextConfig;