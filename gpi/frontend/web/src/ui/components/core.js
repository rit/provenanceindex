import '@ui/icons'
import 'bulma/css/bulma.css'
import Vue from 'vue'

// Alphabetically import components
import GettyFooter from '@ui/getty-footer'
import HeaderExplore from '@ui/header-explore'
import HeaderLogo from '@ui/header-logo'
import HeaderNav from '@ui/header-nav'
import PersonMetadata from '@ui/person-metadata'
import PersonTabs from '@ui/person-tabs'
import PersonTitle from '@ui/person-title'
import SearchBar from '@ui/search-bar'
import Welcome from '@ui/welcome'

// Alphabetically register components
Vue.component('GettyFooter', GettyFooter)
Vue.component('HeaderExplore', HeaderExplore)
Vue.component('HeaderLogo', HeaderLogo)
Vue.component('HeaderNav', HeaderNav)
Vue.component('PersonMetadata', PersonMetadata)
Vue.component('PersonTabs', PersonTabs)
Vue.component('PersonTitle', PersonTitle)
Vue.component('SearchBar', SearchBar)
Vue.component('Welcome', Welcome)
