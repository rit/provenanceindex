const { find, map } = require('lodash')
const { makePairs } = require('iso/marq/utils')

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
    return map(jsons, ({ label }) => label)
  },

  genre (doc) {
    let pairs = makePairs(doc.includes)
    let json = pairs['aat:300056462']
    return json.label
  },

  attribute (doc) {
    let pairs = makePairs(doc.includes)
    let json = pairs['aat:300191790']
    return json.label
  },

  dimension (doc) {
    let pairs = makePairs(doc.includes)
    let json = pairs['aat:300266036']
    return json.label
  }
}

module.exports = entryResolver
