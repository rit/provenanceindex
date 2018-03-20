const { Artist } = require('iso/compose/models')

describe('Artist', () => {
  it('has a name', () => {
    let name = 'Dragon'
    let artist = new Artist({ name })

    expect(artist.name).to.equal(name)
  })
})
