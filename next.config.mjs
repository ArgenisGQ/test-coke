/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        output: 'standalone', // Esto optimiza el tamaño de la imagen Docker
      },
      
    ],
  },
};

export default nextConfig;
