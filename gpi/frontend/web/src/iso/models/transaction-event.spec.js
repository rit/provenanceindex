const TransactionEvent = require('./transaction-event')
const { map } = require('lodash')

describe('TransactionEvent', function () {
  it('has blurb fields', function () {
    let auction = new TransactionEvent()
    let fields = auction.blurbFields()
    let labels = map(fields, ([label, _]) => label)
    expect(labels).to.eql(['From auction', 'Date', 'Objects'])
  })

  it('has heading', function () {
    let auction = new TransactionEvent()
    expect(auction.heading()).to.eql('Object: Dragon Painting')
  })
})
