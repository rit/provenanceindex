// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from '@ui/root'
import router from './router'

import fontawesome from '@fortawesome/fontawesome'
import {
  faCaretDown,
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faCaretDown)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Root },
  template: '<root/>',
})
