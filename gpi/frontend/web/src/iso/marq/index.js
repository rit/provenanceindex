const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')

const artObjectResolver = require('./resolvers/art-object')
const personResolver = require('./resolvers/person')
const typeDefs = require('./schema')
const queries = require('./queries')

const resolve = (linkedData) => {
  const resolvers = {
    Query: {
      person (obj, args, context, info) {
        return linkedData
      },
      artObject (obj, args, context, info) {
        return linkedData
      },
    },

    Person: {
      ...personResolver,
    },

    ArtObject: {
      ...artObjectResolver,
    },

    Activity: {
      label (doc) {
        return 'Painter'
      },
      beginning (doc) {
        return doc.timespan.begin_of_the_begin
      },
      ending (doc) {
        return doc.timespan.end_of_the_end
      },
    },
  }

  const schema = makeExecutableSchema({ typeDefs, resolvers })
  return schema
}

module.exports = {
  walk (doc) {
    let schema = resolve(doc)
    let query = queries[doc.type]
    return graphql(schema, query)
  },
}
