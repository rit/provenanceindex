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
    expect(doc.note).to.match(/^the only child of Colonel Nathaniel (.+)/)
  })

  it('has genre', function() {
    expect(doc.genre).to.equal('Portrait')
  })
})
