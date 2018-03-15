import Router from 'vue-router'
import Vue from 'vue'

import Person from '@ui/person'
import Welcome from '@ui/welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
  ]
})
