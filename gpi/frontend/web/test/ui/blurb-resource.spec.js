import { div, byData } from 'iso/vspec'
import { makeRembrandt } from 'iso/fixtures'
import { vspecMount, stubComponent } from '@testing'
import Person from 'iso/models/person'

import BlurbResource from '@ui/blurb-resource'

describe('BlurbResource', function () {
  let template, components

  beforeEach(function () {
    template = div`<blurb-resource :resource="person" />`
    components = {
      BlurbResource,
      CountBadge: stubComponent('CountBadge', {
        props: ['resource', 'count'],
        template: div`{{ resource }}-{{ count }}`
      })
    }
  })

  it('shows each blurb field', () => {
    makeRembrandt().then(props => {
      let person = new Person(props)
      let data = () => ({ person })
      vspecMount({ template, components, data })

      cy.contains('h1', 'Rembrandt').should('be.visible')
      cy.get('li').should('have.length', 3)
      cy.get('li').should($lis => {
        expect($lis.eq(0).text()).to.match(/Born\n(.+) in Leyden/)
        expect($lis.eq(1).text()).to.match(/Died\n(.+) in Amsterdam/)
        expect($lis.eq(2).text()).to.match(/Nationality\n(.+) Dutch/)
      })
    })
  })

  it('shows related resource count badges', function () {
    makeRembrandt().then(props => {
      let person = new Person(props)
      let data = () => ({ person })
      vspecMount({ template, components, data })
    })
    cy.contains('document-20')
    cy.contains('event-30')
    cy.contains('object-40')
  })
})
