const md2mdast = require('remark-parse')
const mdast2hast = require('remark-rehype')
const hastRaw = require('rehype-raw')
const { hastAlign, hastBlank } = require('./plugins.js')
const hastMinify = require('rehype-minify-whitespace')
const hast2html = require('rehype-stringify')

module.exports = (opts = {}) => [
  [md2mdast, Object.assign({ commonmark: true }, opts.parse)],
  [mdast2hast, Object.assign({ allowDangerousHTML: true }, opts.mdast2hast)],
  [hastRaw, opts.raw],
  hastAlign,
  hastBlank,
  [hastMinify, opts.minify],
  [hast2html, opts.stringify]
]