const Resource = require('./resource')

class Person extends Resource {
  constructor (props) {
    super(props)

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

  blurbFields () {
    return [
      ['Born', this.born()],
      ['Died', this.died()],
      ['Nationality', this.nationality],
    ]
  }

  heading () {
    return this.name
  }

  relatedCountBadges () {
    // TODO: Determine how to get these data
    return [
      { type: 'document', count: 20 },
      { type: 'event', count: 30 },
      { type: 'object', count: 40 },
    ]
  }
}

module.exports = Person
