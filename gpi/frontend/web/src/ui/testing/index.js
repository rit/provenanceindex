import Vue from 'vue'
import { kebabCase } from 'lodash'

const vspecMount = require('./vspec-mount')

const renderOnMobile = () => {
  cy.viewport(600, 800)
}

const renderOnDesktop = () => {
  cy.viewport(1300, 800)
}

const stub = (name, { props } = {}) => {
  props = props || ['handler']
  return Vue.component(name, {
    name: kebabCase(name),
    props,
    template: `<div>${name}</div>`,
  })
}

module.exports = {
  stub,
  renderOnDesktop,
  renderOnMobile,
  vspecMount,
}
