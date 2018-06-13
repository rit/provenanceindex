import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import {
  faBook,
  faCalendar,
  faCaretDown,
  faImage,
  faSearch,
  faUser,
  faUserCircle,
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faBook,
  faCalendar,
  faCaretDown,
  faImage,
  faSearch,
  faUser,
  faUserCircle,
)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
