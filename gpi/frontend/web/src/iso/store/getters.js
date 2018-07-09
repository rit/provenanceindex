module.exports = {
  personById (state, getters) {
    return id => {
      return state.persons[id] || null
    }
  },
  objectById (state, getters) {
    return id => {
      return state.objects[id] || null
    }
  },
}
