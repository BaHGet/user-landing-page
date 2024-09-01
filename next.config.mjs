/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.wuzzuf-data.net",
      },
    ],
  },
};

export default nextConfig;
