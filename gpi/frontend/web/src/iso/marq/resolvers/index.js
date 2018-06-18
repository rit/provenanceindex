const artObjectResolver = require('./art-object')
const personResolver = require('./person')
const acquisitionResolver = require('./acquisition')

module.exports = {
  Person: { ...personResolver },
  ArtObject: { ...artObjectResolver },
  Acquisition: { ...acquisitionResolver },
}
