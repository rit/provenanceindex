//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

describe('Kitchen Sink', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('http://localhost:8080/#/')
    cy.get('h1').first().should((h1) => {
      expect(h1.text()).to.contain('dragon')
    })
  })
})
