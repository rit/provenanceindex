import GettyCallout from '@ui/getty-callout'
import { div, byData } from 'iso/vspec'
import { vspecMount } from '@testing'

const components = { 'getty-callout': GettyCallout }
const template = div`<getty-callout :text="greeting" :handler="handler" />`

describe('GettyCallout', () => {
  let data

  it('accepts text', () => {
    data = () => ({
      greeting: 'Hello',
      handler: {},
    })
    vspecMount({ template, data, components })

    cy.contains('Hello').should('be.visible')
  })

  context('handler', () => {
    describe('deactivate', () => {
      it('is called after clicking close', () => {
        let deactivate = cy.spy()
        data = () => ({
          greeting: 'Hello',
          handler: {
            deactivate,
          },
        })
        vspecMount({ template, data, components })

        cy.get(byData`delete-button`).click().then(() => {
          expect(deactivate).to.have.been.called
        })
      })
    })
  })
})
