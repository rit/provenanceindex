const typeDefs = `
  type Query {
    person(id: ID): Person
    artObject(id: ID): ArtObject
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
  }
`

module.exports = typeDefs
