/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "tmdb.org", "themoviedb.org"],
  },
};

module.exports = nextConfig;
