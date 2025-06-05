import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts';
import path, { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      entryRoot: path.resolve(__dirname, 'src/app'),
    }),
    tailwindcss(),
  ],
  build: {
    target: "modules",
    minify: false,
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/app/index.ts'),
      name: 'lib',
      formats: ['es', 'cjs'],
      // the proper extensions will be added
      fileName: 'entry',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        }
      },
    },
  },
  define: {
    'process.env': {
      NODE_ENV: 'production'
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.vue', '.json', '.ts'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
})
