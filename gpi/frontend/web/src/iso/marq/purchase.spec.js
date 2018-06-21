const { parser } = require('./index')
const data = require('iso/json-ld/purchase')

describe('Purchase', () => {
  let purchase
  beforeEach(async () => {
    let res = await parser.walk({ doc: data })
    expect(res.data).to.be.ok
    purchase = res.data.purchase
  })

  it('flattens the props', () => {
    expect(purchase.id).to.eq('purchase-123')
    expect(purchase.label).to.equal('purchasing')
    expect(purchase.dateOfTransaction).to.equal('1939-04-10')
    expect(purchase.buyers).to.eql(['Some buyer'])
    expect(purchase.sellers).to.eql(['Some seller'])
    expect(purchase.artObjects).to.eql([{ id: 'a1', label: 'Label is missing' }])
    expect(purchase.payments).to.eql([])
  })
})
