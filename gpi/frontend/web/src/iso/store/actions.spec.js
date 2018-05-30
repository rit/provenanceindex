const sinon = require('sinon')
const { fetchPerson } = require('./actions')
const { parser } = require('iso/marq')
const rembrandt = require('iso/json-ld/rembrandt')

describe('fetchPerson', function () {
  it('commits with the correct payload', async function () {
    let commit = sinon.spy()
    let id = 'abcd-1234'
    await fetchPerson({ commit }, { id })
    let [type, payload] = commit.getCall(0).args

    expect(type).to.equal('person')
    expect(payload.id).to.equal(id)

    let res = await parser.walk({ doc: rembrandt })
    expect(payload.person).to.deep.eq(res.data.person)
  })
})
