class Person {
  constructor (person) {
    this.id = person.id
    this.name = person.name
    this.qualifier = person.qualifier
    this.icon = person.icon
    this.image = person.image
    this.birth = person.birth
    this.death = person.death
    this.nationality = person.nationality
    this.role = person.role
    this.active_info = person.active_info
    this.description = person.description
  }

  imageUrl () {
    return `./${this.image}.png`
  }
}

module.exports = Person
