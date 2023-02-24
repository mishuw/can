/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/author',
      destination: 'https://mishudev.pages.dev',
      permanent: true
    }
  ]
}

module.exports = nextConfig
