const { makePairs } = require('iso/marq/utils')

describe('utils#makePairs', function() {
  let note1, note2
  beforeEach(() => {
    note1 = {
      "id": "http://lod.example.org/museum/LinguisticObject/8812",
      "type": "LinguisticObject",
      "label": "note 1",
      "classified_as": [
        {
          "id": "aat:__1__",
          "type": "Type",
          "label": "notes"
        }
      ]
    }

    note2 = {
      "id": "http://lod.example.org/museum/LinguisticObject/8812",
      "type": "LinguisticObject",
      "label": "note 2",
      "classified_as": [
        {
          "id": "aat:__1__",
          "type": "Type",
          "label": "notes"
        }
      ]
    }
  })

  it('groups by aat ID', function() {
    let jsons = [note1]
    let pairs = makePairs(jsons)
    let notes = pairs['aat:__1__']
    expect(notes).to.eql([note1])
  })

  context('multiple classifications', function() {
    it('returns a list of objects', function() {
      let jsons = [note1, note2]
      let pairs = makePairs(jsons)
      let notes = pairs['aat:__1__']
      expect(notes).to.eql([note1, note2])
    })

    it('only returns the correct objects', function() {
      let dimension = {
        "id": "http://lod.example.org/museum/LinguisticObject/8812",
        "type": "LinguisticObject",
        "label": "note 2",
        "classified_as": [
          {
            "id": "aat:__2__",
            "type": "Type",
            "label": "dimensions"
          }
        ]
      }
      let jsons = [note1, note2, dimension]
      let pairs = makePairs(jsons)
      let notes = pairs['aat:__1__']
      expect(notes).to.eql([note1, note2])
    })
  })
})
