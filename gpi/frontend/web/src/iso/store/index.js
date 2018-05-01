var Vuex = require('vuex/dist/vuex')
var { state, mutations } = require('iso/store/mutations')
var getters = require('iso/store/getters')
const actions = require('iso/store/actions')

function initStore (vue) {
  // So we can run vuex on Node
  vue.use(Vuex)

  return new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
  })
}

module.exports = initStore
