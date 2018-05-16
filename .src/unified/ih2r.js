const html2hast = require('rehype-parse')
const hastImgas = require('rehype-img-as').default
const hast2react = require('rehype-react')
const { createElement } = require('react')

module.exports = (opts = {}) => [
  [html2hast, Object.assign({ fragment: true }, opts.parse)],
  [hastImgas, opts.imgas],
  [hast2react, { createElement, components: opts.components }]
]