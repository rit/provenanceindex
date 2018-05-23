import AsyncFlipper from '@ui/async-flipper'
import { div } from 'iso/vspec'
import { vspecMount } from '@testing'

describe('AsyncFlipper', function () {
  let template = div`
    <async-flipper :resolved-with="dragon">
      <div>hello</div>
    </async-flipper>
  `
  let components = {
    AsyncFlipper,
  }

  describe('before resolved', function () {
    it('shows spinner', function () {
      let data = () => ({ dragon: null })
      vspecMount({ template, components, data })
      cy.get('span.loader').should('be.visible')
    })
  })

  describe('after resolved', function () {
    it('shows the nested content', function () {
      let data = () => ({ dragon: {} })
      vspecMount({ template, components, data })
      cy.get('span.loader').should('not.be.visible')
      cy.contains('hello').should('be.visible')
    })
  })
})
