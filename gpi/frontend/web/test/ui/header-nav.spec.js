import { div, byData } from 'iso/vspec'
import { vspecMount, stubComponent, renderOnMobile, renderOnDesktop } from '@testing'
import HeaderNav from '@ui/header-nav'

describe('HeaderNav', () => {
  var components = {
    HeaderNav,
    'RouterLink': stubComponent('link'),
    'LanguageSelector': stubComponent('LanguageSelector'),
  }
  var template = div`<header-nav />`
  beforeEach(() => {
    vspecMount({ template, components })
  })

  it('toggles the menu', () => {
    renderOnMobile()
    cy.get(byData`hamburger-button`).click()
    cy.get(byData`navbar-content`).should('be.visible')

    cy.get(byData`hamburger-button`).click()
    cy.get(byData`navbar-content`).should('not.be.visible')
  })

  it('only shows the hamburger button on mobile', () => {
    renderOnMobile()
    cy.get(byData`hamburger-button`).should('be.visible')

    renderOnDesktop()
    cy.get(byData`hamburger-button`).should('not.be.visible')
  })

  it('shows about submenu on hover', () => {
    cy.get(byData`navbar-about`).should('have.class', 'is-hoverable')
  })

  it('shows help submenu on hover', () => {
    cy.get(byData`navbar-help`).should('have.class', 'is-hoverable')
  })
})
