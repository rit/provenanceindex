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
        'uid',
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
})
