var Vue = require('vue/dist/vue')

const state = {
  persons: {},
}

const mutations = {
  person (state, { id, person }) {
    Vue.set(state.persons, id, person)
  },
}

module.exports = {
  state,
  mutations,
}
