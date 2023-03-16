import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // root:path.join(__dirname,'src')
  //这里设置，手动设置index.html的入口路径为src目录下的
})
