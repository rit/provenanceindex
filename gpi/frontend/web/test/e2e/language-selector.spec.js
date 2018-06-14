import { byData } from 'iso/vspec'

describe('LanguageSelector', () => {
  it('displays English as the default language', () => {
    cy.visit('/persons/abc-123')
    cy.contains('Born').should('be.visible')
  })
  it('displays Spanish when selected', () => {
    cy.get(byData`inactive-languages`).click({ force: true })
    cy.contains('Nacido').should('be.visible')
  })
})
