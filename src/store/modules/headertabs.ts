import {defineStore} from "pinia";
import {reactive} from "vue";

export const useHeaderTabsStore = defineStore(
  'headertabs', () => {
    let hearerTabsIndexList = reactive([
      {routeCode: 'T00011'}
    ])
    let headerTabsList = reactive([
      {routeCode: 'T00011', routeName: 'css-effect'}
    ])


    return {hearerTabsIndexList, headerTabsList}
  })
