/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  images: {
    domains: [
      "127.0.0.1",
      "property.archwarefarms.com",
      "assets.site-static.com",
      "von.gov.ng",
      "thumbs.dreamstime.com",
      "thumbor.forbes.com",
    ],
    unoptimized: true,
  },
  trailingSlash: true,
});

