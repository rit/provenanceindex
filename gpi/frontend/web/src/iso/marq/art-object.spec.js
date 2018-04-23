const { walk } = require('./index')
const nocturne = require('iso/json-ld/nocturne')

describe('ArtObject', () => {
  it('flattens the data', async () => {
    let res = await walk(nocturne)
    expect(res.data).to.be.ok
    let obj = res.data.artObject
    expect(obj.id).to.eq('http://lod.example.org/museum/ManMadeObject/k-object-702')
    expect(obj.label).to.eq('"Queensborough Nocturne"')
  })
})
