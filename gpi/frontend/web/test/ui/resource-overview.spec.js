import { encode } from 'iso/vspec'

describe('ResourceOverview', () => {
  var uri
  beforeEach(() => {
    uri = encode({
      component: 'ResourceOverview',
    })
  })

  it('displays 4 different resource types', () => {
    cy.visit(uri)
    cy.get('[data-cy=resource-type]').should($lis => {
      expect($lis).to.have.length(4)
      expect($lis.eq(0)).to.contain('Object')
      expect($lis.eq(1)).to.contain('Person')
      expect($lis.eq(2)).to.contain('Event')
      expect($lis.eq(3)).to.contain('Document')
    })
  })

  it('hides callout by default', () => {
    cy.visit(uri)
    cy.get('[data-cy=description-callout').should('not.be.visible')
  })

  it('shows Object callout on click', () => {
    cy.visit(uri)
    cy.get('[data-cy=resource-type]').eq(0).within(() => {
      cy.get('a').click()
    })
    cy.get('[data-cy=description-callout').should('be.visible')
    cy.get('[data-cy=description-callout').then($el => {
      expect($el).to.contain('An Object is: ')
    })
  })

  it('shows Person/Institution callout on click', () => {
    cy.visit(uri)
    cy.get('[data-cy=resource-type]').eq(1).within(() => {
      cy.get('a').click()
    })
    cy.get('[data-cy=description-callout').should('be.visible')
    cy.get('[data-cy=description-callout').then($el => {
      expect($el).to.contain('A Person / Institution is: ')
    })
  })

  it('shows Event callout on click', () => {
    cy.visit(uri)
    cy.get('[data-cy=resource-type]').eq(3).within(() => {
      cy.get('a').click()
    })
    cy.get('[data-cy=description-callout').should('be.visible')
    cy.get('[data-cy=description-callout').then($el => {
      expect($el).to.contain('A Document is: ')
    })
  })

  it('shows Document callout on click', () => {
    cy.visit(uri)
    cy.get('[data-cy=resource-type]').eq(2).within(() => {
      cy.get('a').click()
    })
    cy.get('[data-cy=description-callout').should('be.visible')
    cy.get('[data-cy=description-callout').then($el => {
      expect($el).to.contain('A Provenance Event is: ')
    })
  })

  it('closes callout on click of "x"', () => {
    cy.visit(uri)
    cy.get('[data-cy=resource-type]').first().within(() => {
      cy.get('a').click()
    })
    cy.get('.delete').click()
    cy.get('[data-cy=description-callout]').should('not.be.visible')
  })
})
