import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/index";
import directive from "@/directive/index";
import i18n from "./i18n";
import './styles/index.scss'

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import {createPinia} from "pinia";
const pinia = createPinia()

import vue3TreeOrg from 'vue3-tree-org'
import 'vue3-tree-org/lib/vue3-tree-org.css'

// @ts-ignore
import echarts from '@/utils/echarts.ts'
app.config.globalProperties.$echarts = echarts;//vue3的挂载方式

// 微前端
import { registerMicroApps, start } from 'qiankun';
import microApps from './son-app.ts';


app.use(router)
app.use(i18n)
app.use(directive)
app.use(pinia)
app.use(vue3TreeOrg)
app.mount('#app')

// 微前端
registerMicroApps(microApps, {
  beforeMount(app) {
    console.log('挂载前', app);
  },
  afterMount(app) {
    console.log('卸载后', app);
  },
});

start({
  prefetch: false, //取消预加载
  sandbox: { experimentalStyleIsolation: true }, //沙盒模式
});


