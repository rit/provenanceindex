class Person {
  constructor (person) {
    this.id = person.id
    this.name = person.name
    this.qualifier = person.qualifier
    this.icon = person.icon
    this.image = person.image
    this.born = person.born
    this.died = person.died
    this.nationality = person.nationality
    this.role = person.role
    this.active = person.active
    this.description = person.description
  }

  imageUrl () {
    return `./${this.image}.png`
  }
}

module.exports = Person
