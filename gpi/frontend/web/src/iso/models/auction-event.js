const Resource = require('./resource')

class AuctionEvent extends Resource {
  blurbFields () {
    return [
      ['Location', 'London, England'],
      ['Date', 'February 22, 1888'],
      ['# of Lots', 147],
    ]
  }

  heading () {
    return 'Auction of Dragon House'
  }
}

module.exports = AuctionEvent
