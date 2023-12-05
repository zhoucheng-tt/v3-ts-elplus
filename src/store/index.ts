import {onMounted, ref} from "vue";
import {defineStore} from "pinia";
import {useI18n} from "vue3-i18n";

export const useGlobalStore = defineStore('global', () => {
  const i18nStore = ref('zh')
  const globalStyle = ref('light')
  const sideMenuActive = ref('T0001')
  const {setLocale: i18nSet} = useI18n()

  onMounted(() => {
    i18nSet(i18nStore.value)
  })

  function setLocale(locale: string) {
    i18nStore.value = locale
    i18nSet(locale)
  }

  return {
    sideMenuActive,
    globalStyle,
    i18nStore,
    setLocale,
  }
}, {
  // 保存在 LocalStorage
  saveLocal: true
})
