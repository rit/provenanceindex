const rembrandt = require('iso/json-ld/rembrandt')
const { parser } = require('iso/marq')

async function fetchPerson ({ commit, state }, { id }) {
  let res = await parser.walk(rembrandt)
  if (res.data) {
    commit('person', { id, person: res.data.person })
  }
}

module.exports = {
  fetchPerson,
}
