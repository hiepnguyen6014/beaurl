/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  images: {
    domains: ["www.w3schools.com"],
  },

  redirects: async () => {
    // Redirect all requests to /api/* except /robots.txt
    return [
      {
        source: "/:path",
        destination: "/api/:path",
        permanent: false,
        basePath: false,
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
