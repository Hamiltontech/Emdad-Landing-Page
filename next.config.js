/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    locales: ["en-US", "ar"],
    defaultLocale: "en-US",
  },
  trailingSlash: true,
  image: {
    domains: ['https://strapi-155887-0.cloudclusters.net'],
},
}
