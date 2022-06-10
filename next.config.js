/** @type {import('next').NextConfig} */

const { defaultConfig, normalizeConfig } = require('next/dist/server/config-shared');

normalizeConfig

defaultConfig

const conf = normalizeConfig().then(c => console.log(c));
console.log('conf: ', conf);

const nextConfig = {
  images: {
    domains: ['cdn.softwarecraft.co.za'],
  },
  reactStrictMode: true,
}


module.exports = nextConfig
