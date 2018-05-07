import PersonHome from '@ui/person-home'
import { div, stubInterface } from 'iso/vspec'
import { vspecMount, stubComponent } from '@testing'
import { spy, stub } from 'sinon'

// TODO: Inject generated fake getters by inspecting `iso/store/getters`
let getters = {
  personById: stub().returns({ id: 'abcd-1234' }),
}
// TODO: Inject generated fake actions by inspecting `iso/store/actions`
let actions = {
  fetchPerson: spy(),
}
let route = {
  params: {
    id: 'abcd-1234',
  },
}
const components = {
  'person-home': stubInterface(PersonHome, { getters, route, actions }),
  'person-title': stubComponent('PersonTitle'),
  'person-metadata': stubComponent('PersonMetadata'),
}
const template = div`<person-home />`

describe('PersonHome', () => {
  it('fetches person data with correct id', () => {
    vspecMount({ template, components }, vm => {
      expect(actions.fetchPerson).to.have.been.calledWith({id: 'abcd-1234'})
      expect(getters.personById).to.have.been.calledWith('abcd-1234')
      expect(vm.person.id).to.equal('abcd-1234')
    })
  })
})
