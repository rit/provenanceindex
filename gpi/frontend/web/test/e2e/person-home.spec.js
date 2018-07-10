import { byData } from 'iso/vspec'

describe('Person Details', function () {
  it('shows the person based on the id in the url path', function () {
    cy.visit('/persons/abc-123')
    cy.contains('abc-123').should('be.visible')

    cy.get(byData`person-history-mode`).click()
    cy.contains('hist-123').should('be.visible')
  })
  it('selects the first tab if there is no tab name in the url path', () => {
    cy.visit('/persons/abc-123')
    cy.get(byData`persons-pane`).should('be.visible')
    cy.get(byData`documents-pane`).should('not.be.visible')
  })
  it('navigates correctly after clicking on related related counts', () => {
    cy.visit('/persons/abc-123')
    cy.contains('abc-123').should('be.visible')

    cy.contains('30').click()
    cy.contains('pixel-123').should('be.visible')
    cy.contains('List of Related Events').should('be.visible')
  })
})
