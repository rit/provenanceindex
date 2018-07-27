const { parser } = require('./index')
const data = require('iso/json-ld/stockbook-entry')

describe('Entry', () => {
  let doc
  beforeEach(async () => {
    let res = await parser.walk({ doc: data })
    // console.log(res.errors)
    expect(res.data).to.be.ok
    doc = res.data.entry
  })

  it('flattens the props', () => {
    expect(doc.rowNumber).to.equal(11)
  })

  it('has note', function() {
    let note = doc.notes[0]
    expect(note).to.match(/^the only child of Colonel Nathaniel (.+)/)
  })

  it('has genre', function() {
    expect(doc.genres).to.eql(['Portrait'])
  })

  it('has attribute', function() {
    expect(doc.attributes).to.eql(['Painting'])
  })

  it('has dimension', function() {
    expect(doc.dimensions).to.equal(['20 1/8 x 24 1/8'])
  })
})
