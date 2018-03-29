import 'bulma/css/bulma.css'

import fontawesome from '@fortawesome/fontawesome'
import {
  faCaretDown,
} from '@fortawesome/fontawesome-free-solid'

export default {
  init () {
    fontawesome.library.add(faCaretDown)
  },
}
