import { encode } from 'iso/vspec'

describe('Explore the Getty', () => {
  var uri
  beforeEach(() => {
    uri = encode({
      component: 'HeaderExplore',
    })
  })

  it('hides the links by default', () => {
    cy.visit(uri)
    cy.get('[data-cy=explore-the-getty]').should('not.be.visible')
  })

  it('toggles the links after clicking', () => {
    cy.visit(uri)
    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').should('be.visible')

    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').should('not.be.visible')
  })
})
