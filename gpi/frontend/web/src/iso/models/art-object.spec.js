const ArtObject = require('iso/models/art-object')
const nocturne = require('iso/json-ld/nocturne')
const { parser } = require('iso/marq')
const { each } = require('lodash')

describe('ArtObject', () => {
  context('properties', () => {
    it('has been defined', async () => {
      let res = await parser.walk({ doc: nocturne })
      let props = res.data.artObject
      let artObject = new ArtObject(props)

      let keys = [
        'id',
        'label',
        'artist',
        'dateOfCreation',
        'placeOfCreation',
        'attributions',
        'stockbookLabel',
      ]
      each(keys, key => {
        expect(artObject[key], key).to.be.ok
        expect(artObject[key]).to.equal(props[key])
      })
    })
  })

  context('methods#blurbFields', () => {
    it('orders the fields', async () => {
      let artObject = await makeObject()
      let [artist, medium, dimensions] = artObject.blurbFields()
      expect(artist).to.eql(['Artist', 'TBD artist'])
      expect(medium).to.eql(['Medium', 'TBD medium'])
      expect(dimensions).to.eql(['Dimensions', 'TBD dimensions'])
    })
  })
})

async function makeObject () {
  let res = await parser.walk({ doc: nocturne })
  let props = res.data.artObject
  let artObject = new ArtObject(props)
  return artObject
}
