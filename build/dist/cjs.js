'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var unified = _interopDefault(require('unified'))
var markdown2mdast = _interopDefault(require('remark-parse'))
var mdast2hast = _interopDefault(require('remark-rehype'))
var raw = _interopDefault(require('rehype-raw'))
var align = _interopDefault(require('../../.packages/rehype-align'))
var blank = _interopDefault(require('../../.packages/rehype-blank'))
var minify = _interopDefault(require('rehype-minify-whitespace'))
var hast2html = _interopDefault(require('rehype-stringify'))

var processor = unified()
  .use(markdown2mdast, { commonmark: true })
  .use(mdast2hast)
  .use(raw)
  .use(align)
  .use(blank)
  .use(minify)
  .use(hast2html)

var index = function(markdown) {
  return processor.process(markdown)
}

exports.markdownToHtml = index
