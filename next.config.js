/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cloudfront.net", "localhost", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
