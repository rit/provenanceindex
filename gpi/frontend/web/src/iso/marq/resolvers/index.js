const artObjectResolver = require('./art-object')
const personResolver = require('./person')
const activityResolver = require('./activity')

module.exports = {
  Person: { ...personResolver },
  ArtObject: { ...artObjectResolver },
  Activity: { ...activityResolver },
}
