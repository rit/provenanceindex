const { encode } = require('iso/vspec')
const { URL } = require('url')

function queryObject (uri) {
  let url = new URL(uri, 'http://localhost')
  let query = JSON.parse(url.searchParams.get('q'))
  return {
    pathname: url.pathname,
    query: query,
  }
}

describe('encode', () => {
  it('turns object into a url with query string', () => {
    let data = {
      component: 'Dragon',
      props: {
        one: 1,
      },
    }
    let res = encode(data)
    let { query } = queryObject(res)
    expect(query).to.eql(data)
  })

  it('requires a component name', () => {
    let run = () => {
      encode({})
    }
    expect(run).to.throw('Component name is required')
  })
})
