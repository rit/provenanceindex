const artObjectResolver = require('./art-object')
const personResolver = require('./person')

module.exports = {
  Person: { ...personResolver },
  ArtObject: { ...artObjectResolver },
}
