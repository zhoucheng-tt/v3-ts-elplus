import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from "vite-plugin-compression";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

const path = require('path');
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          // 将 node_modules 中的代码单独打包成一个 JS 文件
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  plugins: [
    vue(),
    viteCompression({
      verbose: true, // 默认即可
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 文件类型
    }),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'vue-i18n'],
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        // IconsResolver({})
      ],
      vueTemplate: true, // 是否在 vue 模板中自动导入
      dts: path.resolve('src', 'types', 'auto-imports.d.ts') // (false) 配置文件生成位置，默认是根目录 /auto-imports.d.ts
    }),
    Components({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      // 只要项目中，在components目录下的文件，会自动导入到components.d.ts中，这样，页面或者组件中就不用再次引入了，也无需在`main.js`通过app.component全局注册了
      dirs: ['src/components', 'src/**/components',],
      extensions: ['vue', 'jsx', 'tsx', 'ts', 'js'],
      resolvers: [
        // 自动注册图标组件
        // IconsResolver({
        //   enabledCollections: ['ep'] //@iconify-json/ep 是 Element Plus 的图标库
        // }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
      dts: path.resolve('src', 'types', 'components.d.ts') // (false) 配置文件生成位置，默认是根目录 /components.d.ts
    }),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`
    }
  },
  // 反向代理
  server: {
    port: 8081,
    // host: '192.168.1.71',
    open: true,    // 是否自动在浏览器打开
    https: false,   // 是否开启 https
    // host: true,
    proxy: {
      '/uploadApi/': {
        target: 'http://192.168.1.67:28080',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/uploadApi/, ''),
      },
    }
  },
})
