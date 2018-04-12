const Person = require('iso/models/person')

describe('Person', () => {
  it('has a name', () => {
    let name = 'Rembrandt van Rijn'
    let person = new Person({ name })

    expect(person.name).to.equal(name)
  })
})
