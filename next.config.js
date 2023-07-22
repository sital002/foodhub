/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
      eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
