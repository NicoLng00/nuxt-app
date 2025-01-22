import { defineNuxtPlugin } from '#app'
import { AgGridVue } from 'ag-grid-vue3'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

ModuleRegistry.registerModules([AllCommunityModule])

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('AgGridVue', AgGridVue)
})