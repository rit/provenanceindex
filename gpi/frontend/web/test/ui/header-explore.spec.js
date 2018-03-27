describe('Explore the Getty', () => {
  it('hides the links by default', () => {
    cy.visit('/')
    cy.get('[data-cy=explore-the-getty]').should('not.be.visible')
  })

  it('shows the links after clicking the text', () => {
    cy.visit('/')
    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').should('be.visible')

    cy.contains('Explore The Getty').click()
    cy.get('[data-cy=explore-the-getty]').should('not.be.visible')
  })
})
