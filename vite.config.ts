import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';
const variablePath = normalizePath(path.resolve('./src/variable.scss'));
const isProduction = process.env.NODE_ENV === 'production';
const CDN_URL = 'xxxxxx';
// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : '/',
  plugins: [
    react(),
    viteEslint({ failOnError: false }),
    viteStylelint({ fix: true }),
    svgr()
  ],
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
  },
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@s': path.join(__dirname, 'src')
    }
  }
});
