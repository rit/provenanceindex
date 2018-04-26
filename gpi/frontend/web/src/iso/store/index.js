var Vuex = require('vuex/dist/vuex')
var { state, mutations } = require('iso/store/mutations')

function initStore (vue) {
  // So we can run vuex on Node
  vue.use(Vuex)

  return new Vuex.Store({
    state,
    mutations,
  })
}

module.exports = initStore
