const { find, map } = require('lodash')
const { makePairs } = require('iso/marq/utils')

const toLabel = ({ label }) => label

const entryResolver = {
  id (doc) {
    return doc.id
  },

  rowNumber (doc) {
    let obj = find(doc.identified_by, ({ label }) => label === 'row_number') || {}
    return obj.value
  },

  notes (doc) {
    let pairs = makePairs(doc.includes)
    let jsons = pairs['aat:300027200']
    return map(jsons, toLabel)
  },

  genres (doc) {
    let pairs = makePairs(doc.includes)
    let jsons = pairs['aat:300056462']
    return map(jsons, toLabel)
  },

  attributes (doc) {
    let pairs = makePairs(doc.includes)
    let jsons = pairs['aat:300191790']
    return map(jsons, toLabel)
  },

  dimensions (doc) {
    let pairs = makePairs(doc.includes)
    let jsons = pairs['aat:300266036']
    return map(jsons, toLabel)
  }
}

module.exports = entryResolver
