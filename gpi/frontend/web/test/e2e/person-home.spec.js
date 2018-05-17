import { byData } from 'iso/vspec'

describe('Person Details', function () {
  it('shows the person based on the id in the url path', function () {
    cy.visit('/persons/abc-123')
    cy.get(byData`person-name`).contains('abc-123')

    cy.get(byData`person-history-mode`).click()
    cy.get(byData`person-name`).contains('hist-123')
  })
})
