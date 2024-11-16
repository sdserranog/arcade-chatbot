const webpack = require('webpack');

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      // Add remote patterns here
    ],
  },
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    ARCADE_API_KEY: process.env.ARCADE_API_KEY,
    ARCADE_ENGINE_URL: process.env.ARCADE_ENGINE_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
      };
      config.plugins.push(
        new webpack.ProvidePlugin({
          crypto: 'crypto-browserify',
        })
      );
    }
    return config;
  },
};

