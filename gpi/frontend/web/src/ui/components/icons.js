import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import {
  faCaretDown,
  faSearch,
  faUserCircle,
  faCalendar,
  faPaintBrush,
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faCaretDown,
  faSearch,
  faUserCircle,
  faCalendar,
  faPaintBrush,
)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
