const { parser } = require('./index')
const rembrandt = require('iso/json-ld/rembrandt')

describe('Person', () => {
  let person
  beforeEach(async () => {
    let res = await parser.walk(rembrandt)
    expect(res.data).to.be.ok
    person = res.data.person
  })

  it('flattens the data', () => {
    expect(person.id).to.eq('ulan:500011051')
    expect(person.name).to.eq('Rembrandt van Rijn')
    expect(person.dateOfBirth).to.eq('1606-01-01')
    expect(person.dateOfDeath).to.eq('1669-01-01')
    expect(person.placeOfBirth).to.eq('Leyden')
    expect(person.placeOfDeath).to.eq('Amsterdam')
  })

  context('nested fields', () => {
    it('flattens activities', () => {
      expect(person.activities).to.deep.eq([{
        'beginning': '1631-01-01',
        'ending': '1669-01-01',
        'label': 'Painter',
      }])
    })
  })
})
