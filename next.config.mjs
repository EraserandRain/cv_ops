import nextIntl from 'next-intl/plugin'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
// let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
    // assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}
const nextConfig = {
    reactStrictMode: true,
    // assetPrefix: assetPrefix,
    basePath: basePath,
    output: 'export',
    images: { unoptimized: true }
}

export default withNextIntl(nextConfig)
