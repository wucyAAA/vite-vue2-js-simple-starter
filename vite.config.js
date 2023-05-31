import { defineConfig,loadEnv } from 'vite'
import { createVuePlugin } from "vite-plugin-vue2";
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    plugins: [createVuePlugin(),Components({ /* options */ }),UnoCSS()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_SERVER,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      '/socket.io': {
        target: env.VITE_APP_SOCKET,
        ws: true,
      },
    }
  }
})
