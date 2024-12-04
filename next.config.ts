// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @import "./src/styles/abstracts/_variables.scss";
//           @import "./src/styles/abstracts/_media-queries.scss";
//         `,
//       },
//     },
//   },
//   // sassOptions: {
//   //   additionalData: `
//   //       @import "./src/assets/scss/_mixins.scss";
//   //       @import "./src/assets/scss/_variables.scss";
//   //     `,
//   // },
// };

// import path from "path";


// import type { NextConfig } from 'next'

// const nextConfig = {
//   images: {
//     domains: ['untitled-ui-api.ru'],
//   },
//   options: {
//     additionalData: `
//       @import "${path.resolve(__dirname, 'src/styles/abstracts/_variables.scss')}";
//       @import "${path.resolve(__dirname, 'src/styles/abstracts/_media-queries.scss')}";
//     `,
//   },
// };

// export default nextConfig;

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    additionalData: `
      @use "abstracts/animations" as *;
      @use "abstracts/mixins" as *;
      @use "abstracts/media-queries" as *;
      @use "abstracts/variables" as *;
    `,
  },
};

module.exports = nextConfig;