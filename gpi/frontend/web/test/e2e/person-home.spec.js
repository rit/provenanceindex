import { byData } from 'iso/vspec'

describe('Person Details', function () {
  it('shows the person based on the id in the url path', function () {
    cy.visit('/persons/abc-123')
    cy.contains('abc-123').should('be.visible')

    cy.get(byData`person-history-mode`).click()
    cy.contains('hist-123').should('be.visible')
  })
})
