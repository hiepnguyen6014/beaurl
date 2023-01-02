/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  images: {
    domains: ["www.w3schools.com"],
  },
};

module.exports = nextConfig;
