import { encode } from 'iso/vspec'

const Dragon = {
  template: `
  <div>
    <p>Flying Dragon</p>
  </div>
  `,
}

describe('Vspec', () => {
  var uri
  beforeEach(() => {
    uri = encode({
      component: 'Dragon',
      components: {
        'Dragon': Dragon,
      },
    })
  })

  it('loads data from query string', () => {
    cy.visit(uri)
    cy.contains('p', 'Flying Dragon').should('be.visible')
  })
})
