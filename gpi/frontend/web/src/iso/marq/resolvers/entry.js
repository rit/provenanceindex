const { find } = require('lodash')
const { makePairs } = require('iso/marq/utils')

const entryResolver = {
  id (doc) {
    return doc.id
  },

  rowNumber (doc) {
    let obj = find(doc.identified_by, ({ label }) => label === 'row_number') || {}
    return obj.value
  },

  note (doc) {
    let pairs = makePairs(doc.includes)
    let json = pairs['aat:300027200']
    return json.label
  },

  genre (doc) {
    let pairs = makePairs(doc.includes)
    let json = pairs['aat:300056462']
    return json.label
  }
}

module.exports = entryResolver
