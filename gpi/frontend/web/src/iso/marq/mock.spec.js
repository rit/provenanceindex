const { parser } = require('./mock')
const rembrandt = require('iso/json-ld/rembrandt')
const nocturne = require('iso/json-ld/nocturne')

describe('parser walk', () => {
  it('mocks the person resolvers', async () => {
    let res = await parser.walk(rembrandt)
    expect(res.data).to.be.ok
    let person = res.data.person
    expect(person.name).to.eq('stubbed name')
    expect(person.placeOfBirth).to.eq('stubbed placeOfBirth')
  })

  it('mocks the art object resolvers', async () => {
    let res = await parser.walk(nocturne)
    expect(res.data).to.be.ok
    let artObj = res.data.artObject
    expect(artObj.label).to.eq('stubbed label')
  })
})
