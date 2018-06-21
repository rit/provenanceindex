const artObjectResolver = require('./art-object')
const personResolver = require('./person')
const purchaseResolver = require('./purchase')

module.exports = {
  Person: { ...personResolver },
  ArtObject: { ...artObjectResolver },
  Purchase: { ...purchaseResolver },
}
