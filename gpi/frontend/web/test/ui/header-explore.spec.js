import { encode } from 'iso/vspec'

describe('Explore the Getty', () => {
  var uri
  beforeEach(() => {
    uri = encode({
      component: 'HeaderExplore',
      props: {
        one: 1,
      },
    })
  })

  it('hides the links by default', () => {
    cy.visit(uri)
    cy.get('[data-cy=explore-the-getty]').should('not.be.visible')
  })

  it('shows the links after clicking the text', () => {
    cy.visit(uri)
    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').should('be.visible')

    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').should('not.be.visible')
  })

  it('loads data from query string', () => {
    cy.visit(uri)
    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').should('be.visible')

    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').should('not.be.visible')
  })
})
