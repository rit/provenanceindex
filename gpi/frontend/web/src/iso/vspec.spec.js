const { spec } = require('iso/vspec')
const { URL } = require('url')


function queryObject(uri) {
  let url = new URL(uri, 'http://localhost')
  let query = JSON.parse(url.searchParams.get('q'))
  return {
    pathname: url.pathname,
    query: query,
  }
}

describe('spec', () => {
  it('turns object into a url with query string', () => {
    let data = {
      component: 'Dragon',
      props: {
        one: 1,
      },
    }
    let res = spec(data)
    let { query } = queryObject(res)
    expect(query).to.eql(data)
  });

  it('requires a component name', () => {
    let run = () => {
      spec({})
    }
    expect(run).to.throw('Component name is required')
  })
})
