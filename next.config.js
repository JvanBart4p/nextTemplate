/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env:{
  //   NEXT_PUBLIC_API_URL:"http://localhost:3030/api",
  //   NEXT_PUBLIC_PORT:3009,
  //   NEXT_PUBLIC_BASE_URL:"http://localhost:3009"
  // },
  images: {
    domains: [
      "i.dummyjson.com",
    ],
  },
};

module.exports = nextConfig;
