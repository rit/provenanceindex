import Vue from 'vue'
import { kebabCase } from 'lodash'

const vspecMount = require('./vspec-mount')

const renderOnMobile = () => {
  cy.viewport(600, 800)
}

const renderOnDesktop = () => {
  cy.viewport(1300, 800)
}

const stub = (name, { props, template } = {}) => {
  props = props || ['handler']
  template = template || `<div>${name}</div>`
  return Vue.component(name, {
    name: kebabCase(name),
    props,
    template: template,
  })
}

const withAsync = (fn) => {
  cy.wrap(null).then(() => {
    return new Cypress.Promise((resolve, reject) => {
      fn(resolve, reject)
    })
  })
}

module.exports = {
  renderOnDesktop,
  renderOnMobile,
  stub,
  stubComponent: stub,
  stubContext: stub,
  vspecMount,
  withAsync,
}
