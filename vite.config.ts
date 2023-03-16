import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
const variablePath= normalizePath(path.resolve('./src/variable.scss'))
//normalizePath是解决win mac路径的不同的
export default defineConfig({
  plugins: [react()],
  //css
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import "${variablePath}";`
        //自动为每一个scss文件开头注入
      }
    },
    modules:{
      generateScopedName:'[name]_[local]_[hash:base64:5]'
      //name 文件名 local 类名，自定义module哈希值
    }
  }
})
