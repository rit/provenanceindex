const typeDefs = `
  type Query {
    person(id: ID): Person
    artObject(id: ID): ArtObject
    purchase(id: ID): Purchase
  }

  type Person {
    id: ID!
    name: String!

    activeTimespan: String
    dateOfBirth: String
    dateOfDeath: String
    description: String
    nationality: String
    placeOfBirth: String
    placeOfDeath: String
    role: String
  }

  type ArtObject {
    id: ID!
    label: String!
    artist: String
    dateOfCreation: String
    placeOfCreation: String
    attributions: String
    stockbookLabel: String
    medium: String
    material: String
    dimensions: String
    technique: String
    subject: String
    style: String
    description: String
  }

  type Purchase {
    id: ID!
    label: String!
    dateOfTransaction: String
    buyer: String
    seller: String
    artObjects: [ArtObject]
    payments: [String]
  }
`

module.exports = typeDefs
