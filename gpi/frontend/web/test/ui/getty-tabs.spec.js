import GettyTabs from '@ui/getty-tabs'
import GettyTabPane from '@ui/getty-tab-pane'
import { div, byData } from 'iso/vspec'
import { vspecMount, stubComponent } from '@testing'

const components = {
  'getty-tabs': GettyTabs,
  'getty-tab-pane': GettyTabPane,
  'font-awesome-icon': stubComponent('icon'),
}

const template = div`
  <getty-tabs>
    TABS LABEL:
    <getty-tab-pane
      label="Tab 1"
      data-cy="tab-pane">
      Tab one content
    </getty-tab-pane>
    <getty-tab-pane
      label="Tab 2"
      data-cy="tab-pane">
      Tab two content
    </getty-tab-pane>
  </getty-tabs>
`

beforeEach(() => {
  vspecMount({ template, components })
})

describe('GettyTabs', () => {
  context('model', () => {
    describe('tabs', () => {
      it('displays tab-panes', () => {
        cy.get(byData`tab-pane`).its('length').should('be.eq', 2)
      })

      it('displays slotLabel', () => {
        cy.contains('TABS LABEL')
      })
    })
  })

  context('selecting tabs', () => {
    it('selects the first tab as default', () => {
      cy.contains('Tab 1').should('be.visible')
    })
    it('selects another tab on click', () => {
      cy.contains('Tab 2')
        .click()
        .should('be.visible')
    })
  })
})
