/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  images: {
    domains: ["www.w3schools.com"],
  },

  redirects: async () => {
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
