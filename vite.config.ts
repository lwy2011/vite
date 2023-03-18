import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
const variablePath = normalizePath(path.resolve('./src/variable.scss'))
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `@import "${variablePath}";`
         }
      },
      modules: {
         generateScopedName: '[name]_[local]_[hash:base64:5]'
      },
      postcss: {
         plugins: [
            autoprefixer({
               // 指定目标浏览器
               overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
            })
         ]
      }
   }
})
