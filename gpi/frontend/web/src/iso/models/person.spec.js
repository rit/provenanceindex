const Person = require('iso/models/person')

describe('Person', () => {
  it('has a name', () => {
    const testPerson = {
      name: 'Rembrandt van Rijn',
    }
    let person = new Person(testPerson)
    expect(person.name).to.equal(testPerson.name)
  })

  it('has a relative image url', () => {
    const testPerson = {
      name: 'Rembrandt van Rijn',
      image: 'placeholder',
    }
    let person = new Person(testPerson)

    expect(person.imageUrl()).to.equal('./placeholder.png')
  })
})
