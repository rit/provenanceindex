const ResourceType = require('iso/models/resource-type')

describe('ResourceType', () => {
  it('has a name', () => {
    let name = 'Object'
    let resource = new ResourceType({ name })

    expect(resource.name).to.equal(name)
  })

  it('has a relative image url', () => {
    let name = 'Object'
    let logo = 'person_logo'
    let resource = new ResourceType({ name, logo })

    expect(resource.imageUrl()).to.equal('./person_logo.png')
  })

  it('displays the count according to the locale', () => {
    let resource = new ResourceType({ count: 8000 })

    expect(resource.localeCount()).to.equal('8,000')
  })

  it('correctly uses the article an', () => {
    let name = 'Object'
    let resource = new ResourceType({ name })

    expect(resource.question()).to.equal("What's an Object")

    resource = new ResourceType({ name: 'Foo' })
    expect(resource.question()).to.equal("What's a Foo")
  })
})
