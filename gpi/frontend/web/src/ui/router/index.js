import Router from 'vue-router'
import Vue from 'vue'

import Base from '@ui/layout/base'
import Person from '@ui/person'
import PersonHome from '@ui/person-home'
import PersonIndex from '@ui/person-index'
// import Welcome from '@ui/welcome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Base,
      children: [
        {
          path: '/person',
          name: 'PersonIndex',
          component: PersonIndex,
        },
        {
          path: '/person/:id',
          component: PersonHome,
          children: [
            {
              path: '',
              component: PersonHome,
            },
            {
              path: 'objects',
              component: Person,
            },
          ],
        },
      ],
    },
  ],
})

// TODO: /persons/:id/events
// TODO: /persons/:id/objects
