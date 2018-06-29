const Resource = require('./resource')

class LotOfferingEvent extends Resource {
  blurbFields () {
    return [
      ['From auction', 'auction description'],
      ['Date', 'February 22, 1600'],
      ['Objects', 'object 1, object 2'],
    ]
  }

  heading () {
    return 'Lot #: 6029'
  }
}

module.exports = LotOfferingEvent
