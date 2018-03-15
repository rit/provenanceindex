import Router from 'vue-router'
import Vue from 'vue'

import Person from '@ui/person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Person',
      component: Person
    }
  ]
})
