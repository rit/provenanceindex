import Router from 'vue-router'
import Vue from 'vue'

import LayoutBase from '@ui/layout/base'
import ObjectLayout from '@ui/layout/object-layout'
import PersonLayout from '@ui/layout/person-layout'

import PersonHome from '@ui/person-home'
import Welcome from '@ui/welcome'

Vue.use(Router)

// NOTE: Routable components that have "children" should have have
// "router-view" in their templates
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LayoutBase,
      children: [
        {
          path: '',
          name: 'home',
          component: Welcome,
        },
        {
          path: 'persons',
          component: PersonLayout,
        },
        {
          path: 'persons/:id',
          component: PersonLayout,
          children: [
            {
              path: '',
              name: 'person-home',
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
