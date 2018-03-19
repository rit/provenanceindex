const typeDefs = `
  type Query {
    person(id: ID): Person
    artObject(id: ID): ArtObject
  }

  type Person {
    id: ID!
    name: String!

    activities: [Activity]
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

  type Activity {
    label: String
    beginning: String
    ending: String
  }
`

module.exports = typeDefs
