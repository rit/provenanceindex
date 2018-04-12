import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import {
  faCaretDown,
  faSearch,
  faUserCircle,
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faCaretDown,
  faSearch,
  faUserCircle,
)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
