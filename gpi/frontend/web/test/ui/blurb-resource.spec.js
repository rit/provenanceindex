import { div, wrap } from 'iso/vspec'
import { makeRembrandt } from 'iso/fixtures'
import { vspecMount, stubComponent, withAsync } from '@testing'
import Person from 'iso/models/person'

import BlurbResource from '@ui/blurb-resource'

describe('BlurbResource', function () {
  let template, components

  beforeEach(function () {
    template = div`<blurb-resource :resource="person" />`
    components = {
      BlurbResource,
      FontAwesomeIcon: stubComponent('FontAwesomeIcon', {
        props: ['icon', 'size'],
        template: wrap`{{ icon }}__{{ size }}`
      }),
      CountBadge: stubComponent('CountBadge', {
        props: ['resource', 'count'],
        template: wrap`{{ resource }}-{{ count }}`,
      }),
    }

    withAsync((done) => {
      makeRembrandt().then(props => {
        let person = new Person(props)
        let data = () => ({ person })
        vspecMount({ template, components, data })
        done(props)
      })
    })
  })

  it('shows each blurb field', () => {
    cy.contains('h2', 'Rembrandt').should('be.visible')
    cy.get('li').should('have.length', 3)
    cy.get('li').should($lis => {
      expect($lis.eq(0).text()).to.match(/Born\n(.+) in Leyden/)
      expect($lis.eq(1).text()).to.match(/Died\n(.+) in Amsterdam/)
      expect($lis.eq(2).text()).to.match(/Nationality\n(.+) Dutch/)
    })
    cy.contains('user-circle__3x')
  })

  it('shows the resource icon', () => {
    cy.contains('user-circle__3x')
  })

  it('shows related resource count badges', function () {
    cy.contains('document-20')
    cy.contains('event-30')
    cy.contains('object-40')
  })
})
