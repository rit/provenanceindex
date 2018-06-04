const artObject = `
{
  artObject {
    id
    label
    artist
    dateOfCreation
    placeOfCreation
    attributions
    stockbookLabel
    medium
    material
    dimensions
    technique
    subject
    style
    description
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
    activeTimespan
    role
  }

}
`

module.exports = {
  'ManMadeObject': artObject,
  'Person': person,
}
