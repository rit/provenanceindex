const { each } = require('lodash')

function decode (queryString) {
  let q = JSON.parse(decodeURIComponent(queryString))
  return q
}

function encode ({ component, components, props }) {
  if (!component) throw new Error('Component name is required')
  let q = encodeURIComponent(JSON.stringify({ component, components, props }))
  return `/vspec?q=${q}`
}

function register (Vue, comps) {
  each(comps, (compDef, name) => {
    Vue.component(name, compDef)
  })
}

function div (html) {
  return `
    <div id="vspec-sut">
      ${html}
    </div>
  `
}

function byData (attr) {
  return `[data-cy=${attr}]`
}

function stubInterface (ui, { getters, actions, route }) {
  getters = getters || {}
  actions = actions || {}
  route = route || {}
  return {
    extends: ui,
    methods: {
      ...actions,
    },
    computed: {
      '$route' () {
        return {
          ...route,
        }
      },
      '$store' () {
        return {
          getters: {
            ...getters,
          },
        }
      },
    },
  }
}

module.exports = {
  byData,
  decode,
  div,
  encode,
  register,
  stubInterface,
}
