import nextIntl from 'next-intl/plugin'
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
    // output: 'export',
    images: { unoptimized: true }
}

const withNextIntl = nextIntl("./src/i18n.ts")
export default withNextIntl(nextConfig)
