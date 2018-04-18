class Person {
  constructor (person) {
    this.id = person.id
    this.name = person.name
    this.qualifier = person.qualifier
    this.image = person.image
    this.birth = person.birth
    this.death = person.death
    this.nationality = person.nationality
    this.role = person.role
    this.active_info = person.active_info
    this.description = person.description
    this.events = person.events
    this.objects = person.objects

    this.icon = 'user-circle'
  }

  imageUrl () {
    return `./${this.image}.png`
  }
}

module.exports = Person
