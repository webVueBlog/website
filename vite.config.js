import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/website/",// 部署基础
  server: {
    port: 3000
  },
  css: [
    "../../assets/iconfont/iconfont.css"
  ],
  plugins: [vue()],
})
