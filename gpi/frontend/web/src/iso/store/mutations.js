var Vue = require('vue/dist/vue')

const state = {
  persons: {},
  objects: {},
}

const mutations = {
  person (state, { id, person }) {
    Vue.set(state.persons, id, person)
  },
  object (state, { id, object }) {
    Vue.set(state.objects, id, object)
  },
}

module.exports = {
  state,
  mutations,
}
