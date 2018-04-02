import '@ui/icons'
import 'bulma/css/bulma.css'
import Vue from 'vue'

// Alphabetically import components
import GettyFooter from '@ui/getty-footer.vue'
import GettyGallery from '@ui/getty-gallery.vue'
import HeaderExplore from '@ui/header-explore.vue'
import HeaderLogo from '@ui/header-logo.vue'
import HeaderNav from '@ui/header-nav'
import SearchBar from '@ui/search-bar'

// Alphabetically register components
Vue.component('GettyFooter', GettyFooter)
Vue.component('GettyGallery', GettyGallery)
Vue.component('HeaderExplore', HeaderExplore)
Vue.component('HeaderLogo', HeaderLogo)
Vue.component('HeaderNav', HeaderNav)
Vue.component('SearchBar', SearchBar)
