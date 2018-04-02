import { encode } from 'iso/vspec'

describe('SearchBar', () => {
  var uri
  beforeEach(() => {
    uri = encode({
      component: 'SearchBar',
    })
  })

  it('has placeholder input', () => {
    cy.visit(uri)
    cy.get('input')
      .should('have.attr', 'placeholder')
      .then(placeholder => {
        expect(placeholder).to.eq('Enter keyword')
      })
  })

  it('accepts input', () => {
    const typedText = 'Rembrandt'
    cy.visit(uri)
    cy.get('input')
      .type(typedText)
      .should('have.value', typedText)
  })
})
