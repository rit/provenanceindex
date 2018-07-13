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

const purchase = `
{
  purchase {
    id
    label
    dateOfTransaction
    buyers
    sellers
    payments
    artObjects {
      id
      label
    }
  }
}
`

const entry = `
{
  entry {
    id
    rowNumber
    note
    genre
  }
}
`

// Map json-ld "type" to query
module.exports = {
  'ManMadeObject': artObject,
  'Person': person,
  // TODO: Assume all acquisitions are of type purchase
  'Acquisition': purchase,
  'LinguisticObject': entry,
}
