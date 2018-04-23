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
    id
    name
    dateOfBirth
    dateOfDeath
    description
    nationality
    placeOfBirth
    placeOfDeath
    role

    activities {
      label
      beginning
      ending
    }
  }

}
`

module.exports = {
  'ManMadeObject': artObject,
  'Person': person,
}
