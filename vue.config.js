const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// импортируем scss
// module.exports = {
//   css: {
//       loaderOptions: {
//           sass: {
//               additionalData: '@import "@/assets/styles/styles.scss";'
//           }
//       }
//   }
// }