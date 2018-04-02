import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import {
  faCaretDown,
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faCaretDown)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
