const { reduce } = require('lodash')

const resolvers = require('./resolvers')
const { Marq } = require('./index')

class MockMarq extends Marq {
  resourceResolvers () {
    return reduce(resolvers, (result, resolver, name) => {
      result[name] = mock(resolver)
      return result
    }, {})
  }
}

const mock = (resolver) => reduce(resolver, (result, resolver, name) => {
  // TODO parse the source file using acornjs to extract the @casual annotation
  result[name] = () => {
    return `stubbed ${name}`
  }
  return result
}, {})

const parser = new MockMarq()

module.exports = {
  parser,
}