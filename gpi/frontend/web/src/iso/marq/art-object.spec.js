const { parser } = require('./index')
const nocturne = require('iso/json-ld/nocturne')

describe('ArtObject', () => {
  it('flattens the data', async () => {
    let res = await parser.walk({ doc: nocturne })
    expect(res.data).to.be.ok
    let obj = res.data.artObject
    expect(obj.id).to.eq('http://lod.example.org/museum/ManMadeObject/k-object-702')
    expect(obj.label).to.eq('"Queensborough Nocturne"')
    expect(obj.artist).to.eq('TBD artist')
    expect(obj.dateOfCreation).to.eq('TBD dateOfCreation')
    expect(obj.placeOfCreation).to.eq('TBD placeOfCreation')
    expect(obj.attributions).to.eq('TBD attributions')
    expect(obj.stockbookLabel).to.eq('TBD stockbookLabel')
    expect(obj.medium).to.eq('TBD medium')
    expect(obj.material).to.eq('TBD material')
    expect(obj.dimensions).to.eq('TBD dimensions')
    expect(obj.technique).to.eq('TBD technique')
    expect(obj.subject).to.eq('TBD subject')
    expect(obj.style).to.eq('TBD style')
    expect(obj.description).to.eq('TBD description')
  })
})
