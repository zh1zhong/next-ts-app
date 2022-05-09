/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // 此配置会影响路由解析，导致出现404
  // pageExtensions: [
  //   'page.tsx',
  //   'page.ts',
  //   'page.jsx',
  //   'page.js',
  //   'component.tsx',
  //   './components/Header.tsx',
  // ],
}

module.exports = nextConfig
