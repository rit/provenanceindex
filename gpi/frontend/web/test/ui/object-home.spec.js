import ObjectHome from '@ui/object-home'
import { div, stubInterface } from 'iso/vspec'
import { vspecMount, stubComponent } from '@testing'
import { spy, stub } from 'sinon'

// TODO: Inject generated fake getters by inspecting `iso/store/getters`
let getters = {
  objectById: stub().returns({ id: 'abcd-1234' }),
}
// TODO: Inject generated fake actions by inspecting `iso/store/actions`
let actions = {
  fetchObject: spy(),
}
let route = {
  params: {
    id: 'abcd-1234',
  },
}
const components = {
  'object-home': stubInterface(ObjectHome, { getters, route, actions }),
  'resource-title': stubComponent('ResourceTitle'),
  'object-metadata': stubComponent('ObjectMetadata'),
  'router-link': stubComponent('RouterLink'),
  'async-flipper': stubComponent('async-flipper'),
}
const template = div`<object-home />`

describe('ObjectHome', () => {
  it('fetches object data with correct id', () => {
    vspecMount({ template, components }, vm => {
      expect(actions.fetchObject).to.have.been.calledWith({id: 'abcd-1234'})
      expect(getters.objectById).to.have.been.calledWith('abcd-1234')
      expect(vm.artObject.id).to.equal('abcd-1234')
    })
  })
})
