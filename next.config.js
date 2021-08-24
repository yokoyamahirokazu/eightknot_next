module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  experimental: {
    optimizeFonts: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
