/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "matterport.com",
      "thumbs.dreamstime.com",
      "bayut-production.s3.eu-central-1.amazonaws.com",
    ],
  },
  env: {
    API_KEY: "f2ae02a8demsh8ef21a88a7afc66p175993jsnfa0b0f775c9b",
  },
}

module.exports = nextConfig
