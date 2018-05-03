class Person {
  constructor (props) {
    // Required props
    this.id = props.id
    this.name = props.name

    // Optional props
    this.activeTimespan = props.activeTimespan
    this.dateOfBirth = props.dateOfBirth
    this.dateOfDeath = props.dateOfDeath
    this.description = props.description
    this.nationality = props.nationality
    this.placeOfBirth = props.placeOfBirth
    this.placeOfDeath = props.placeOfDeath

    // TODO: Replace hard-coded values with `props` argument
    this.imageUrl = '/static/images/placeholder.png'
    this.qualifier = 'Person - Artist'
    this.role = 'Artist'

    // Vue specific helper props
    this.ui = {
      icon: 'user-circle',
    }
  }

  born () {
    return `${this.dateOfBirth} in ${this.placeOfBirth}`
  }

  died () {
    return `${this.dateOfDeath} in ${this.placeOfDeath}`
  }
}

module.exports = Person
