/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(vert|frag)$/,
      use: 'raw-loader',
    })

    config.experiments = config.experiments ?? {}
    config.experiments.topLevelAwait = true

    return config
  },
}

module.exports = nextConfig
