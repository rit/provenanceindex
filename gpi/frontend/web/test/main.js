import Vue from 'vue'
Vue.config.productionTip = false

import Router from 'vue-router'
Vue.use(Router)

import VspecRunner from '@ui/vspec-runner'

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
  components: { VspecRunner },
  template: '<vspec-runner/>',
})
