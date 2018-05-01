const { mutations } = require('./mutations')

describe('person', function () {
  let state
  beforeEach(function () {
    state = {
      persons: {},
    }
  })

  it('stores the person data with correct key', function () {
    let id = 'abcd-1234'
    let person = {
      id: id,
      name: 'Dragon',
    }
    mutations.person(state, { id, person })
    expect(state.persons['abcd-1234']).to.equal(person)
  })
})
