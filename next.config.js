/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enable React compiler for better performance
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
};

module.exports = nextConfig;
