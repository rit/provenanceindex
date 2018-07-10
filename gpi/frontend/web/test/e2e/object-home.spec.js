
describe('Object Details', function () {
  it('shows the object based on the id in the url path', function () {
    cy.visit('/objects/abc-123')
    cy.contains('abc-123').should('be.visible')
  })
})
