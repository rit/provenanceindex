const { makeRembrandt } = require('iso/fixtures')

describe('makeRembrandt', function () {
  it('humanizes the person json-ld', async function () {
    let props = await makeRembrandt()
    expect(props.id).to.equal('ulan:500011051')
    expect(props.name).to.equal('Rembrandt van Rijn')
  })
})
