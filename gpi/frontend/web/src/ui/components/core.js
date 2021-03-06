import '@ui/icons'
import 'bulma/css/bulma.css'
import Vue from 'vue'

// Alphabetically import components
import AsyncFlipper from '@ui/async-flipper'
import BlurbResource from '@ui/blurb-resource'
import CountBadge from '@ui/count-badge'
import GettyCallout from '@ui/getty-callout'
import GettyEllipsis from '@ui/getty-ellipsis'
import GettyFooter from '@ui/getty-footer'
import GettyTabPane from '@ui/getty-tab-pane'
import GettyTabs from '@ui/getty-tabs.vue'
import HeaderExplore from '@ui/header-explore'
import HeaderLogo from '@ui/header-logo'
import HeaderNav from '@ui/header-nav'
import HomepageVisualization from '@ui/homepage-visualization'
import LanguageSelector from '@ui/language-selector'
import PersonMetadata from '@ui/person-metadata'
// import PersonTabs from '@ui/person-tabs'
import PersonTitle from '@ui/person-title'
import ResourceOverview from '@ui/resource-overview'
import ResourceType from '@ui/resource-type'
import SearchBar from '@ui/search-bar'
import Welcome from '@ui/welcome'

// Alphabetically register components
Vue.component('AsyncFlipper', AsyncFlipper)
Vue.component('BlurbResource', BlurbResource)
Vue.component('CountBadge', CountBadge)
Vue.component('GettyCallout', GettyCallout)
Vue.component('GettyEllipsis', GettyEllipsis)
Vue.component('GettyFooter', GettyFooter)
Vue.component('GettyTabPane', GettyTabPane)
Vue.component('GettyTabs', GettyTabs)
Vue.component('HeaderExplore', HeaderExplore)
Vue.component('HeaderLogo', HeaderLogo)
Vue.component('HeaderNav', HeaderNav)
Vue.component('HomepageVisualization', HomepageVisualization)
Vue.component('LanguageSelector', LanguageSelector)
Vue.component('PersonMetadata', PersonMetadata)
// Vue.component('PersonTabs', PersonTabs)
Vue.component('PersonTitle', PersonTitle)
Vue.component('ResourceOverview', ResourceOverview)
Vue.component('ResourceType', ResourceType)
Vue.component('SearchBar', SearchBar)
Vue.component('Welcome', Welcome)
