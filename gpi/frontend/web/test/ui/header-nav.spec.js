import { encode } from 'iso/vspec'

describe('HeaderNav', () => {
  var uri
  beforeEach(() => {
    uri = encode({
      component: 'HeaderNav',
    })
  })

  it('toggles the menu', () => {
    cy.viewport(800, 1000)
    cy.visit(uri)
    cy.get('[data-cy=hamburger-button').click()
    cy.get('[data-cy=navbar-content').then($el => {
      expect($el).to.be.visible
    })

    cy.get('[data-cy=hamburger-button').click()
    cy.get('[data-cy=navbar-content').then($el => {
      expect($el).to.not.be.visible
    })
  })

  it('only shows the hamburger button on mobile', () => {
    cy.viewport(800, 1000)
    cy.visit(uri)
    cy.get('[data-cy=hamburger-button').then($el => {
      expect($el).to.be.visible
    })

    cy.viewport(1200, 1000)
    cy.visit(uri)
    cy.get('[data-cy=hamburger-button').then($el => {
      expect($el).to.not.be.visible
    })
  });

  it.skip('shows submenu on hover', () => {
    cy.visit(uri)
    cy.contains('a', 'About').invoke('show')
    cy.contains('History').should('be.visible')
  });
})
