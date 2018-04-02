const {
  Artist,
  ResourceType,
} = require('iso/compose/models')

describe('Artist', () => {
  it('has a name', () => {
    let name = 'Dragon'
    let artist = new Artist({ name })

    expect(artist.name).to.equal(name)
  })
})

describe('ResourceType', () => {
  it('has a name', () => {
    let name = 'Object'
    let resource = new ResourceType({ name })

    expect(resource.name).to.equal(name)
  })

  it('has an image url', () => {
    let name = 'Object'
    let image = 'person_logo.png'
    let resource = new ResourceType({ name, image })

    expect(resource.imageUrl()).to.equal('@static/person_logo.png')
  })
})
