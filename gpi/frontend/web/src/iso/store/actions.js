const rembrandt = require('iso/json-ld/rembrandt')
const { parser } = require('iso/marq')

async function fetchPerson ({ commit, state }, { id }) {
  let doc = rembrandt
  let context = { id }
  let res = await parser.walk({ doc, context })
  if (res.data) {
    commit('person', { id, person: res.data.person })
  }
}

module.exports = {
  fetchPerson,
}
