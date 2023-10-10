/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "i.ibb.co"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
