import '@ui/icons'
import 'bulma/css/bulma.css'
import Vue from 'vue'

// Alphabetically import components
import GettyCallout from '@ui/getty-callout'
import GettyFooter from '@ui/getty-footer.vue'
import HeaderExplore from '@ui/header-explore.vue'
import HeaderLogo from '@ui/header-logo.vue'
import HeaderNav from '@ui/header-nav'
import ResourceOverview from '@ui/resource-overview'
import ResourceType from '@ui/resource-type'
import SearchBar from '@ui/search-bar'

// Alphabetically register components
Vue.component('GettyCallout', GettyCallout)
Vue.component('GettyFooter', GettyFooter)
Vue.component('HeaderExplore', HeaderExplore)
Vue.component('HeaderLogo', HeaderLogo)
Vue.component('HeaderNav', HeaderNav)
Vue.component('ResourceOverview', ResourceOverview)
Vue.component('ResourceType', ResourceType)
Vue.component('SearchBar', SearchBar)
