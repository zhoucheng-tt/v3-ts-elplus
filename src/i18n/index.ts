/*
 * @Description: 
 * @Author: yanxiao
 * @Github: https://github.com/yanxiaos
 * @Date: 2022-04-09 10:51:42
 * @LastEditors: yanxiao
 */
import { createI18n } from "vue3-i18n";
import globEagerMerge from "@/utils/globEagerMerge";
const en = import.meta.globEager('./en/*.ts')
const zh = import.meta.globEager('./zh/*.ts')

const messages = {
  en: globEagerMerge(en),
  zh: globEagerMerge(zh)
}

const i18n = createI18n({
  locale: "zh",
  messages: messages,
});

export default i18n;