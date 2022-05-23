/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cloudfront.net", "localhost"],
  },
};

module.exports = nextConfig;
