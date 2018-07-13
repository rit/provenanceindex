const { parser } = require('./index')
const data = require('iso/json-ld/stockbook-entry')

describe('Document', () => {
  let doc
  beforeEach(async () => {
    let res = await parser.walk({ doc: data })
    expect(res.data).to.be.ok
    doc = res.data.document
  })

  it('flattens the props', () => {
    expect(doc.id).to.eq('http://lod.example.org/museum/LinguisticObject/K-10682')
    expect(doc.rowNumber).to.equal(11)
  })
})
