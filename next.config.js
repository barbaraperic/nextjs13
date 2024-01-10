const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    fastRefresh: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
