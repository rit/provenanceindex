import { encode } from 'iso/vspec'

describe('Explore the Getty', () => {
  var uri
  beforeEach(() => {
    uri = encode({
      component: 'HeaderNav',
    })
  })

  it('toggles the menu', () => {
    cy.viewport(800, 1000)
    cy.visit(uri)
    cy.get('.button').click()
    cy.get('.navbar-menu').then(($el) => {
      expect($el).to.be.visible
    })

    cy.get('.button').click()
    cy.get('.navbar-menu').then(($el) => {
      expect($el).to.not.be.visible
    })
  })
})
