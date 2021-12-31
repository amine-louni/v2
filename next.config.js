module.exports = {
  reactStrictMode: true,
  fs: true,
  images: {
    domains: ["picsum.photos"],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
