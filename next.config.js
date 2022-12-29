/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  async redirects() {
    return [
      {
        source: "/:path",
        destination: "/api/:path",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
