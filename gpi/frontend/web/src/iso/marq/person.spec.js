const { parser } = require('./index')
const rembrandt = require('iso/json-ld/rembrandt')

describe('Person', () => {
  let person
  beforeEach(async () => {
    let res = await parser.walk(rembrandt)
    expect(res.data).to.be.ok
    person = res.data.person
  })

  it('flattens the props', () => {
    expect(person.id).to.eq('ulan:500011051')
    expect(person.name).to.eq('Rembrandt van Rijn')
    expect(person.dateOfBirth).to.eq('1606-01-01')
    expect(person.dateOfDeath).to.eq('1669-01-01')
    expect(person.placeOfBirth).to.eq('Leyden')
    expect(person.placeOfDeath).to.eq('Amsterdam')
    expect(person.description).to.equal('Dutch painter, printmaker, 1606-1669')
    expect(person.activeTimespan).to.equal('1631-1669')
  })

  context('aat fields', () => {
    it('sets nationality', () => {
      expect(person.nationality).to.equal('Dutch (culture or style)')
    })
  })
})
