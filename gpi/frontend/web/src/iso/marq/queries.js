const artObject = `
{
  artObject {
    id
    label
  }
}
`

const person = `
{
  person {
    uid
    name
    dateOfBirth
    dateOfDeath
    description
    nationality
    placeOfBirth
    placeOfDeath
    activeTimespan
    role
  }

}
`

module.exports = {
  'ManMadeObject': artObject,
  'Person': person,
}
