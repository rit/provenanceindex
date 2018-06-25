import { byData } from 'iso/vspec'

describe('Person Details', function () {
  it('shows the person based on the id in the url path', function () {
    cy.visit('/persons/abc-123')
    cy.contains('abc-123').should('be.visible')

    cy.get(byData`person-history-mode`).click()
    cy.contains('hist-123').should('be.visible')
  })
  it('navigates correctly after clicking on related related counts', () => {
  	cy.visit('/persons/abc-123')
    cy.contains('abc-123').should('be.visible')

    cy.contains('30').click()
    cy.contains('pixel-123').should('be.visible')
    cy.contains('Provenance Event List').should('be.visible')
  })
})
