import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
const variablePath = normalizePath(path.resolve('./src/variable.scss'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import "${variablePath}";`
      }
    },
    modules:{
      generateScopedName:'[name]_[local]_[hash:base64:5]'
    }
  }
})
