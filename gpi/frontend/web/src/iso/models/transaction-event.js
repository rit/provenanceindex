const Resource = require('./resource')

class TransactionEvent extends Resource {
  blurbFields () {
    return [
      ['From auction', 'Auction Description'],
      ['Date', 'February 22, 1888'],
      ['Objects', 'object 1, object 2'],
    ]
  }

  heading () {
    return 'Object: Dragon Painting'
  }
}

module.exports = TransactionEvent
