const { find } = require('lodash')

const documentResolver = {
  id (doc) {
    return doc.id
  },

  rowNumber (doc) {
    let obj = find(doc.identified_by, ({ label }) => label === 'row_number') || {}
    return obj.value
  },
}

module.exports = documentResolver
