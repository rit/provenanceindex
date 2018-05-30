const { parser } = require('./mock')
const rembrandt = require('iso/json-ld/rembrandt')
const nocturne = require('iso/json-ld/nocturne')

const context = {
  id: 'abc-123',
}

describe('parser walk', () => {
  it('mocks the person resolvers', async () => {
    let res = await parser.walk({ doc: rembrandt, context })
    expect(res.data).to.be.ok
    let person = res.data.person
    expect(person.name).to.eq('stubbed name abc-123')
    expect(person.placeOfBirth).to.eq('stubbed placeOfBirth abc-123')
  })

  it('mocks the art object resolvers', async () => {
    let res = await parser.walk({ doc: nocturne, context })
    expect(res.data).to.be.ok
    let artObj = res.data.artObject
    expect(artObj.label).to.eq('stubbed label abc-123')
  })
})
