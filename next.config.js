/** @type {import('next').NextConfig} */

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}