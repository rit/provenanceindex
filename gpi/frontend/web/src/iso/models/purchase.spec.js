const purchasejson = require('iso/json-ld/purchase')
const Purchase = require('./purchase')
const { parser } = require('iso/marq')

describe('Purchase', function () {
  let props
  beforeEach(async function () {
    let res = await parser.walk({ doc: purchasejson })
    expect(res.data).to.be.ok
    props = res.data.purchase
  })

  it('has blurb fields', function () {
    let purchase = new Purchase(props)
    let fields = purchase.blurbFields()

    expect(fields[0]).to.eql(['Purchased from', 'Some seller'])
    expect(fields[1]).to.eql(['Date', '1939-04-10'])
    expect(fields[2]).to.eql(['Objects', 'object 1, object 2'])
  })

  it('has heading', function () {
    let purchase = new Purchase(props)
    expect(purchase.heading()).to.eql('purchasing')
  })
})
