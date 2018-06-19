// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from '@ui/root'
import router from './router'
import '@ui/core'
import initStore from 'iso/store'
import GetTextPlugin from 'vue-gettext'
import translations from 'iso/translations/translations.json'

Vue.use(GetTextPlugin, {
  availableLanguages: {
    en: 'English',
    es: 'Spanish',
  },
  defaultLanguage: 'en',
  translations: translations,
  silent: true,
})

Vue.config.productionTip = false

var store = initStore(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Root },
  template: '<root/>',
})
