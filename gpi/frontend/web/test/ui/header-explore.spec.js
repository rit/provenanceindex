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
    cy.get('[data-cy=explore-the-getty]').then(($el) => {
      expect($el).not.to.be.visible
    })
  })

  it('toggles the links after clicking', () => {
    cy.visit(uri)
    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').then(($el) => {
      expect($el).to.be.visible
    })

    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').then(($el) => {
      expect($el).not.to.be.visible
    })
  })
})
