const artObjectResolver = require('./art-object')
const personResolver = require('./person')
const purchaseResolver = require('./purchase')
const entryResolver = require('./entry')

module.exports = {
  Person: { ...personResolver },
  ArtObject: { ...artObjectResolver },
  Purchase: { ...purchaseResolver },
  Entry: { ...entryResolver },
}
