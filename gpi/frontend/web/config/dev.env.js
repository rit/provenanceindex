'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const pixelMock = process.env.PIXEL_MOCK ? true : false

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PIXEL_MOCK: pixelMock,
})
