const Purchase = require('./purchase')
const { map } = require('lodash')

describe('Purchase', function () {
  it('has blurb fields', function () {
    let purchase = new Purchase()
    let fields = purchase.blurbFields()
    let labels = map(fields, ([label, _]) => label)
    expect(labels).to.eql(['Purchased from', 'Date', 'Objects'])
  })

  it('has heading', function () {
    let purchase = new Purchase()
    expect(purchase.heading()).to.eql('Object: Dragon Painting')
  })
})
