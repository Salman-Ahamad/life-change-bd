/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["images.unsplash.com", "i.ibb.co"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        // port: '',
        pathname: "/djlpbc9dz/image/upload/",
      },
    ],
  },
};

module.exports = nextConfig;
