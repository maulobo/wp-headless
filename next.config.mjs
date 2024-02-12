/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scstudio.store",
      },
    ],
  },
};

export default nextConfig;
