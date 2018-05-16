const md2mdast = require('remark-parse')
const mdast2hast = require('remark-rehype')
const hastRaw = require('rehype-raw')
const { hastAlign, hastBlank } = require('./plugins.js')
const hast2react = require('rehype-react')
const { createElement } = require('react')

module.exports = (opts = {}) => [
  [md2mdast, Object.assign({ commonmark: true }, opts.parse)],
  [mdast2hast, Object.assign({ allowDangerousHTML: true }, opts.mdast2hast)],
  [hastRaw, opts.raw],
  hastAlign,
  hastBlank,
  [hast2react, { createElement, components: opts.components }]
]