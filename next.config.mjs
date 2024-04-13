/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "encrypted-tbn2.gstatic.com",
      "encrypted-tbn3.gstatic.com",
      "encrypted-tbn1.gstatic.com",
    ],
  },
};

export default nextConfig;
