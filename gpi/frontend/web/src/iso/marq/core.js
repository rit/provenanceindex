const { find, includes, map } = require('lodash')
const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('./schema')
const queries = require('./queries')
const resourceResolvers = require('./resolvers')

function aat2Label ({ attId, groups }) {
  let found = find(groups, ({ classified_as }) => includes(classified_as, attId))
  return found.label
}

function yearRange (timespans) {
  let { begin_of_the_begin, end_of_the_end } = timespans[0].timespan
  return map([begin_of_the_begin, end_of_the_end], year => year.split('-')[0]).join('-')
}

class Marq {
  walk (doc) {
    let schema = this.resolve(doc)
    let query = queries[doc.type]
    return graphql(schema, query)
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
  aat2Label,
  yearRange,
  Marq,
}
