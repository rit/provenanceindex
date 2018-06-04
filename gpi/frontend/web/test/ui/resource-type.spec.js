import ResourceType from '@ui/resource-type'
import ResourceTypeModel from 'iso/models/resource-type'
import fixtures from 'iso/fixtures'
import { div, byData } from 'iso/vspec'
import { vspecMount, stubComponent, renderOnMobile, renderOnDesktop } from '@testing'

const template = div`<resource-type :resource="resource" :handler="handler" />`
const components = {
  'getty-callout': stubComponent('GettyCallout'),
  'resource-type': ResourceType,
}

describe('ResourceType', () => {
  context('model', () => {
    beforeEach(() => {
      let showDescription = cy.spy()
      let data = () => ({
        resource: new ResourceTypeModel(fixtures.ResourceTypes[0]),
        handler: { showDescription },
      })
      vspecMount({ template, data, components })
    })

    it('shows the question', () => {
      cy.contains("What's an Object")
    })

    it('shows the object count', () => {
      cy.contains('80,012')
    })
  })

  context('handler', () => {
    describe('showDescription', () => {
      it('is called with correct arguments', () => {
        let showDescription = cy.spy()
        let data = () => ({
          resource: new ResourceTypeModel(fixtures.ResourceTypes[0]),
          handler: { showDescription },
        })
        vspecMount({ template, data, components }, (vm) => {
          vm.showDescription()
          expect(showDescription).to.have.been.calledWith(data().resource, vm)
        })
      })
    })
  })

  context('instance', () => {
    beforeEach(renderOnMobile)

    it('is the handler for GettyCallout', () => {
      let data = () => ({
        resource: new ResourceTypeModel(fixtures.ResourceTypes[0]),
        handler: {},
      })
      vspecMount({ template, data, components }, (vm) => {
        cy.contains('GettyCallout').then($el => {
          expect(vm).to.be.handlerOf($el)
        })
      })
    })
  })

  context('events', () => {
    it('handles click event of the question', () => {
      let data = () => ({
        resource: new ResourceTypeModel(fixtures.ResourceTypes[0]),
        handler: { showDescription: cy.stub() },
      })
      vspecMount({ template, data, components }, (vm) => {
        let showDescription = cy.spy(vm, 'showDescription')
        cy.contains("What's an Object").click().then(() => {
          expect(showDescription).to.have.been.called
        })
      })
    })
  })

  context('callout description on mobile', () => {
    beforeEach(renderOnMobile)

    it('is visible only after activating', () => {
      let data = () => ({
        resource: new ResourceTypeModel(fixtures.ResourceTypes[0]),
        handler: { showDescription: cy.stub() },
      })
      vspecMount({ template, data, components })
      cy.contains("What's an Object").click()

      cy.get(byData`description-callout-mobile`).should('be.visible')

      renderOnDesktop()
      cy.get(byData`description-callout-mobile`).should('be.hidden')
    })
  })
})
