import { div } from 'iso/vspec'
import { vspecMount } from '@testing'
import SearchBar from '@ui/search-bar'

describe('SearchBar', () => {
  var template = div`<search-bar />`
  var components = { SearchBar }
  beforeEach(() => {
    vspecMount({ template, components })
  })

  it('has placeholder input', () => {
    cy.get('input')
      .should('have.attr', 'placeholder')
      .then(placeholder => {
        expect(placeholder).to.eq('Enter keyword')
      })
  })

  it('accepts input', () => {
    const typedText = 'Rembrandt'
    cy.get('input')
      .type(typedText)
      .should('have.value', typedText)
  })
})
