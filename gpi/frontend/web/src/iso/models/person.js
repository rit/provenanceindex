class Person {
  constructor (props) {
    // Required props
    this.uid = props.uid
    this.name = props.name

    // Optional props
    this.activeTimespan = props.activeTimespan
    this.dateOfBirth = props.dateOfBirth
    this.dateOfDeath = props.dateOfDeath
    this.description = props.description
    this.nationality = props.nationality

    // TODO: Replace hard-coded values with `props` argument
    this.imageUrl = '/static/images/placeholder.png'
    this.qualifier = 'Person - Artist'
    this.role = 'Artist'

    // Vue specific helper props
    this.ui = {
      icon: 'user-circle',
    }
  }
}

module.exports = Person
