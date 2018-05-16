const html2hast = require('rehype-parse')
const { hastBlank } = require('./plugins.js')
const hast2react = require('rehype-react')
const { createElement } = require('react')

module.exports = (opts = {}) => [
  [html2hast, Object.assign({ fragment: true }, opts.parse)],
  hastBlank,
  [hast2react, { createElement, components: opts.components }]
]