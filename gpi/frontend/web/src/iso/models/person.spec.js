const Person = require('iso/models/person')
const rembrandt = require('iso/json-ld/rembrandt')
const { parser } = require('iso/marq')
const { each } = require('lodash')

describe('Person', () => {
  context('properties', () => {
    it('has been defined', async () => {
      let res = await parser.walk(rembrandt)
      let props = res.data.person
      let person = new Person(props)

      let keys = [
        'id',
        'name',
        'activeTimespan',
        'dateOfBirth',
        'dateOfDeath',
        'description',
        'nationality',
      ]
      each(keys, key => {
        expect(person[key], key).to.be.ok
        expect(person[key]).to.equal(props[key])
      })
    })
  })

  context('methods#born', () => {
    it('displays year and place', async () => {
      let person = await makePerson()
      expect(person.born()).to.equal('1606-01-01 in Leyden')
    })
  })

  context('methods#born', () => {
    it('displays year and place', async () => {
      let person = await makePerson()
      expect(person.died()).to.equal('1669-01-01 in Amsterdam')
    })
  })
})

async function makePerson () {
  let res = await parser.walk(rembrandt)
  let props = res.data.person
  let person = new Person(props)
  return person
}
