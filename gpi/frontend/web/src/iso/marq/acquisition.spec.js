const { parser } = require('./index')
const data = require('iso/json-ld/acquisition')

describe('Acquisition', () => {
  let acquisition
  beforeEach(async () => {
    let res = await parser.walk({ doc: data })
    expect(res.data).to.be.ok
    acquisition = res.data.acquisition
  })

  it('flattens the props', () => {
    expect(acquisition.id).to.eq('purchase-123')
    expect(acquisition.label).to.equal('purchasing')
    expect(acquisition.dateOfTransaction).to.equal('1939-04-10')
    expect(acquisition.buyer).to.equal('Some buyer')
    expect(acquisition.seller).to.equal('Some seller')
    expect(acquisition.artObjects).to.eql([{ id: 'a1', label: 'Label is missing' }])
    expect(acquisition.payments).to.eql([])
  })
})
