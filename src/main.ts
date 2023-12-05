import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/index";
import directive from "@/directive/index";
import i18n from "./i18n";
import './styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia} from "pinia";
const pinia = createPinia()

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(directive)
app.mount('#app')


