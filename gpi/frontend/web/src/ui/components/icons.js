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
  faCalendar,
  faPaintBrush,
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faBook,
  faCalendar,
  faCaretDown,
  faImage,
  faSearch,
  faUser,
  faUserCircle,
  faCalendar,
  faPaintBrush,
)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
