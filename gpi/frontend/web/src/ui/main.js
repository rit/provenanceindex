// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from '@ui/root'
import router from './router'
import core from '@ui/core'

Vue.config.productionTip = false
core.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Root },
  template: '<root/>',
})
