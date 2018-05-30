const mock = require('./mock')
const { Marq } = require('./core')

var parser = new Marq()
if (process.env.PIXEL_MOCK) {
  parser = mock.parser
}

module.exports = {
  parser,
  Marq,
}
