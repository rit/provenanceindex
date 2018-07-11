import { byData } from 'iso/vspec'

describe('Object Details', function () {
  it('shows the object based on the id in the url path', function () {
    cy.visit('/objects/abc-123')
    cy.contains('abc-123').should('be.visible')
  })
  it('selects the first tab if there is no tab name in the url path', () => {
    cy.visit('/objects/abc-123')
    cy.get(byData`persons-pane`).should('be.visible')
    cy.get(byData`documents-pane`).should('not.be.visible')
  })
  it('selects the expected tab based on the url path', () => {
    cy.visit('/objects/abc-123/documents')
    cy.get(byData`documents-pane`).should('not.be.visible')
  })
})
