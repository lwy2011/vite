import { defineConfig, normalizePath } from 'vite'

import path from "path";
import autoprefixer from 'autoprefixer'
import react from "@vitejs/plugin-react-swc";
import tailwindcss from 'tailwindcss'
// https://vitejs.dev/config/
const variablePath= normalizePath(path.resolve('./src/variable.scss'))
//normalizePath是解决win mac路径的不同的
export default defineConfig({
  plugins: [react(
    {
      jsxImportSource:'@emotion/react',
      //导入emotion
    }
  )],
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
    },
    postcss:{
      plugins:[
        autoprefixer({
          overrideBrowserslist:[
            'Chrome > 40','ff > 31','ie 11'
          ]
        }),
        tailwindcss({})
      ]
    }
  }
})
