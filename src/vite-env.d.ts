/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 自定义的环境变量
  readonly VITE_IMG_BASE_URL: string;
}
// new URL('./logo.png', import.meta.env.VITE_IMG_BASE_URL).href 这样访问环境变量
interface ImportMeta {
  readonly env: ImportMetaEnv;
}