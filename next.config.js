/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  // ⭐ Prevent static export mode
  generateStaticParams: () => [],
};

module.exports = nextConfig;