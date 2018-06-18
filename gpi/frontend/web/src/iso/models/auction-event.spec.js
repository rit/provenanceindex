const AuctionEvent = require('./auction-event')
const { map } = require('lodash')

describe('AuctionEvent', function () {
  it('has blurb fields', function () {
    let auction = new AuctionEvent()
    let fields = auction.blurbFields()
    let labels = map(fields, ([label, _]) => label)
    expect(labels).to.eql(['Location', 'Date', '# of Lots'])
  })

  it('has heading', function () {
    let auction = new AuctionEvent()
    expect(auction.heading()).to.eql('Auction of Dragon House')
  })
})
