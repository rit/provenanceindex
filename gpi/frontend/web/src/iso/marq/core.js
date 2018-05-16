const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('./schema')
const queries = require('./queries')
const resourceResolvers = require('./resolvers')

// http://graphql.org/graphql-js/graphql/#entry-point
// We don't have a need for rootValue yet
const ROOT_VALUE = null

class Marq {
  walk ({ doc, context }) {
    let schema = this.resolve(doc)
    let query = queries[doc.type]
    return graphql(schema, query, ROOT_VALUE, context)
  }

  resolve (linkedData) {
    const resolvers = {
      ...this.resourceResolvers(),

      // Query cannot be put in `resourceResolvers` because the `linkedData`
      // closure is needed
      Query: {
        person (obj, args, context, info) {
          return linkedData
        },
        artObject (obj, args, context, info) {
          return linkedData
        },
      },
    }

    const schema = makeExecutableSchema({ typeDefs, resolvers })
    return schema
  }

  resourceResolvers () {
    return resourceResolvers
  }
}

module.exports = {
  Marq,
}
