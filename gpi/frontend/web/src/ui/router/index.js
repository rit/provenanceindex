import Router from 'vue-router'
import Vue from 'vue'

import LayoutBase from '@ui/layout/base'
import PersonLayout from '@ui/layout/person-layout'

import PersonHome from '@ui/person-home'
import RelatedPersonHome from '@ui/related-person-home'
import RelatedEventHome from '@ui/related-event-home'
import RelatedObjectHome from '@ui/related-object-home'
import RelatedDocumentHome from '@ui/related-document-home'
import Welcome from '@ui/welcome'
import Spike from '@ui/spike'

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
              children: [
                {
                  path: 'persons',
                  alias: '',
                  name: 'person-related-persons',
                  components: { 'related-persons': RelatedPersonHome },
                },
                {
                  path: 'events',
                  name: 'person-related-events',
                  components: { 'related-events': RelatedEventHome },
                },
                {
                  path: 'objects',
                  name: 'person-related-objects',
                  components: { 'related-objects': RelatedObjectHome },
                },
                {
                  path: 'documents',
                  name: 'person-related-documents',
                  components: { 'related-documents': RelatedDocumentHome },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '/spike',
      component: Spike,
    },
  ],
})
