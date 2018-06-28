const artObjectResolver = require('./art-object')
const personResolver = require('./person')
const purchaseResolver = require('./purchase')
const documentResolver = require('./document')

module.exports = {
  Person: { ...personResolver },
  ArtObject: { ...artObjectResolver },
  Purchase: { ...purchaseResolver },
  Document: { ...documentResolver },
}
