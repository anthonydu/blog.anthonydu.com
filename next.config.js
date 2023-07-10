/** @type {import('next').NextConfig} */

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  env: {
    BASE_URL:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:" + process.env.PORT
        : "https://blog.anthonydu.com",
  },
};
