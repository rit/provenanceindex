import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import {
  faCaretDown,
  faSearch,
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faCaretDown,
  faSearch,
)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
