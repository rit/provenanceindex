const mountVue = require('cypress-vue-unit-test')

const html = `
<html>
  <head>
    <base href="/" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div id="spec"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`

module.exports = function ({template, data, components}, fn) {
  if (!data) {
    data = () => ({})
  }
  const options = {
    // base is not being used by the `html`
    // base: '/',
    mountId: 'spec',
    html: html,
    extensions: {
      components,
    },
  }

  // mountVue returns a function so we need to invoke it right away
  mountVue({ template, data }, options)()

  if (fn) {
    cy.get('#vspec-sut').then($el => {
      let elm = $el.children()[0]
      if (elm) {
        let vm = elm.__vue__
        fn(vm)
      } else {
        // TODO: Return Proxy(null, handler)
        // fn(nullTracer("null tracer: vm is null")
        fn(null)
      }
    })
  }
}
