import Router from 'vue-router'
import Vue from 'vue'

import LayoutBase from '@ui/layout/base'
import ObjectLayout from '@ui/layout/object-layout'
import PersonLayout from '@ui/layout/person-layout'

import PersonHome from '@ui/person-home'

Vue.use(Router)

// NOTE: Routable components that have "children" should have have
// "router-view" in their templates
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: LayoutBase,
      children: [
        {
          path: 'persons/:id',
          component: PersonLayout,
          children: [
            {
              path: '',
              name: 'persons',
              component: PersonHome,
            },
            {
              path: 'objects',
              component: ObjectLayout,
            },
          ],
        },
      ],
    },
  ],
})
