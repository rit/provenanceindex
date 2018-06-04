import { div, byData } from 'iso/vspec'
import { vspecMount, stubComponent } from '@testing'
import HeaderExplore from '@ui/header-explore'

describe('Explore the Getty', () => {
  var components = {
    HeaderExplore,
    'FontAwesomeIcon': stubComponent('icon'),
  }
  var template = div`<header-explore/>`

  beforeEach(() => {
    vspecMount({ template, components })
  })

  it('hides the links by default', () => {
    cy.get(byData`explore-the-getty`).should('not.be.visible')
  })

  it('toggles the links after clicking', () => {
    cy.contains('Explore The Getty').click()
    cy.get(byData`explore-the-getty`).should('be.visible')

    cy.contains('Explore The Getty').click()
    cy.get(byData`explore-the-getty`).should('not.be.visible')
  })
})
