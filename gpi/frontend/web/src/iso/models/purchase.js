const Resource = require('./resource')

class Purchase extends Resource {
  blurbFields () {
    return [
      ['Purchased from', 'Some seller'],
      ['Date', 'February 22, 1888'],
      ['Objects', 'object 1, object 2'],
    ]
  }

  heading () {
    return 'Object: Dragon Painting'
  }
}

module.exports = Purchase
