import ResourceOverview from '@ui/resource-overview'
import { div, byData } from 'iso/vspec'
import { vspecMount, stub, renderOnMobile } from '@testing'

const components = {
  'resource-overview': ResourceOverview,
  'resource-type': stub('ResourceType'),
  'getty-callout': stub('GettyCallout'),
}

describe('ResourceOverview', () => {
  context('model', () => {
    describe('resources', () => {
      it('lists every resource', () => {
        let data = () => ({
          resources: [{}, {}],
        })
        const template = div`<resource-overview :resources="resources" />`
        vspecMount({ template, data, components }, (vm) => {
          cy.get(byData`resource-type`).its('length').should('be.eq', 2)
        })
      })
    })
  })

  context('handler', () => {
    it('is the handler of GettyCallout', () => {
      const template = div`<resource-overview />`
      const data = () => ({})
      vspecMount({ template, data, components }, (vm) => {
        cy.get(byData`getty-callout`).then($el => {
          expect(vm).to.be.handlerOf($el)
        })
      })
    })

    it('is the handler of ResourceType', () => {
      const template = div`<resource-overview :resources="resources" />`
      const data = () => ({
        resources: [{}],
      })
      vspecMount({ template, data, components }, (vm) => {
        cy.get(byData`resource-type`).then($el => {
          expect(vm).to.be.handlerOf($el)
        })
      })
    })
  })

  context('on mobile', () => {
    beforeEach(renderOnMobile)

    it('always hides the off-center getty callout', () => {
      const template = div`<resource-overview />`
      vspecMount({ template, components })

      cy.get(byData`resource-overview`).then($el => {
        let vm = $el.get(0).__vue__
        vm.showDescription({}, {})
        cy.get(byData`getty-callout`).should('be.hidden')
      })
    })
  })

  context('activating a resource type', () => {
    it('deactivates the previously selected resource type', () => {
      const template = div`<resource-overview />`
      vspecMount({ template, components }, (vm) => {
        let resource = { description: 'Dragon' }
        let resourceVm = cy.stub()
        let deactivate = cy.spy(vm.activeResource, 'deactivate')
        vm.showDescription(resource, resourceVm)
        expect(deactivate).to.have.been.called
        expect(vm.activeResource).to.eq(resourceVm)
      })
    })

    it('handles successive activations of the same resource type', () => {
      const template = div`<resource-overview />`
      vspecMount({ template, components }, (vm) => {
        let deactivate = cy.spy()
        let resource = { description: 'Dragon' }
        let resourceVm = { deactivate }
        vm.showDescription(resource, resourceVm)
        vm.showDescription(resource, resourceVm)
        expect(deactivate).to.not.have.been.called
      })
    })
  })
})
