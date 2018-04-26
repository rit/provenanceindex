// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from '@ui/root'
import router from './router'
import '@ui/core'
import initStore from '../iso/store'

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
