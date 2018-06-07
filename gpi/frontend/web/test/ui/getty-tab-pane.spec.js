import GettyTabPane from '@ui/getty-tab-pane'
import { div, byData } from 'iso/vspec'
import { vspecMount } from '@testing'

const components = {
  // 'getty-tabs': GettyTabs,
  'getty-tab-pane': GettyTabPane,
}

const template1 = div`
  <getty-tab-pane
    label="Tab 1"
    data-cy="tab-pane">
    Tab one content
  </getty-tab-pane>`

const template2 = div`
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
  </getty-tabs>`

describe('GettyTabPane', () => {
  context('model', () => {
    /* it('throws an error if GettyTabs is not parent', () => {
      vspecMount({ template1, components })
      cy.get(byData`tab-pane`).parent().should('not.be.eq', cy.get('.getty-tabs'))
    }), */
    /*it('functions as expected if GettyTabs is parent', () => {
      vspecMount({ template2, components })
      cy.get(byData`tab-pane`).parent().should('be.eq', cy.get('.getty-tabs'))
    })*/
  })
})
