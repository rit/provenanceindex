import Vue from 'vue'
import Router from 'vue-router'
import VspecRunner from '@ui/vspec-runner'
import core from '@ui/core'

Vue.config.productionTip = false
Vue.use(Router)
core.init()

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/vspec',
      name: 'vspec',
      component: VspecRunner,
    },
  ],
})

/* eslint-disable no-new */
new Vue({
  el: '#vspec',
  router,
  components: {
    VspecRunner,
  },
  template: '<vspec-runner/>',
})
