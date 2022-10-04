 /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     unoptimized: true,
//   },
// }
// module.exports = nextConfig
module.exports = {
  images: {
  loader:'imgix',
  path:'https://worldshaker.imgix.net/',
}, 
trailingSlash: true,
//  exportPathMap: async function (
//   defaultPathMap,
//   { dev, dir, outDir, distDir, buildId }
// ) {
//   return {
//     '/': { page: '/' },
//     '/story': { page: '/story' },
//     '/contact': { page: '/contact' },
//     '/fade-solutions': { page: '/fade-solutions' }, 
//     '/west-side-german-shepherd': { page: '/west-side-german-shepherd' }, 
//   }
// },
}