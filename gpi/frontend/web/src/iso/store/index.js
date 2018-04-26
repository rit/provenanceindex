var Vuex = require('vuex/dist/vuex')
var { state, mutations } = require('iso/store/mutations')
var getters = require('iso/store/getters')

function initStore (vue) {
  // So we can run vuex on Node
  vue.use(Vuex)

  return new Vuex.Store({
    state,
    mutations,
    getters,
  })
}

module.exports = initStore
