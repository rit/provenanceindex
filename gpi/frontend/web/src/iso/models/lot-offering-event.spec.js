const { map } = require('lodash')
const LotOfferingEvent = require('./lot-offering-event')

describe('LotOfferingEvent', function () {
  it('has blurb fields', function () {
    let auction = new LotOfferingEvent()
    let fields = auction.blurbFields()
    let labels = map(fields, ([label, _]) => label)
    expect(labels).to.eql(['From auction', 'Date', 'Objects'])
  })

  it('has heading', function () {
    let auction = new LotOfferingEvent()
    expect(auction.heading()).to.eql('Lot #: 6029')
  })
})
