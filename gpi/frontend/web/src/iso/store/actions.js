const rembrandt = require('iso/json-ld/rembrandt')
const nocturne = require('iso/json-ld/nocturne')
const { parser } = require('iso/marq')

async function fetchPerson ({ commit, state }, { id }) {
  let doc = rembrandt
  let context = { id }
  let res = await parser.walk({ doc, context })
  if (res.data) {
    commit('person', { id, person: res.data.person })
  }
}

async function fetchObject ({ commit, state }, { id }) {
  let doc = nocturne
  let context = { id }
  let res = await parser.walk({ doc, context })
  if (res.data) {
    commit('object', { id, object: res.data.artObject })
  }
}

module.exports = {
  fetchPerson,
  fetchObject,
}
