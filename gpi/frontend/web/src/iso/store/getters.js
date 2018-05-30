module.exports = {
  personById (state, getters) {
    return id => {
      return state.persons[id] || null
    }
  },
}
