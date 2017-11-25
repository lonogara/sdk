'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var unified = _interopDefault(require('../../node_modules/unified/index.js'))
var html2hast = _interopDefault(
  require('../../node_modules/rehype-parse/index.js')
)
var imgas = _interopDefault(
  require('../../node_modules/rehype-img-as/lib/index.js')
)
var hast2react = _interopDefault(
  require('../../node_modules/rehype-react/index.js')
)
var react = _interopDefault(require('../../node_modules/react/index.js'))
var hastUtilSelect = _interopDefault(
  require('../../node_modules/hast-util-select/index.js')
)
var markdown2mdast = _interopDefault(
  require('../../node_modules/remark-parse/index.js')
)
var mdast2hast = _interopDefault(
  require('../../node_modules/remark-rehype/index.js')
)
var raw = _interopDefault(require('../../node_modules/rehype-raw/index.js'))

var createElement = react.createElement

var index = function(html, components, imgasOpts) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(imgas, imgasOpts)
    .use(hast2react, { createElement: createElement, components: components })
    .process(html)
}

var selectAll = hastUtilSelect.selectAll

var blank = function() {
  return function(ast) {
    return selectAll('a', ast).forEach(function(a) {
      var properties = a.properties

      if (!properties.target) {
        properties.target = '_blank'
      }
    })
  }
}

var createElement$1 = react.createElement

var index$1 = function(html, components) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(blank)
    .use(hast2react, { createElement: createElement$1, components: components })
    .process(html)
}

var selectAll$1 = hastUtilSelect.selectAll

var align = function() {
  return function(ast) {
    return selectAll$1('[align]', ast).forEach(function(node) {
      var properties = node.properties,
        align = properties.align

      properties.style = properties.style
        ? properties.style + ';text-align:' + align
        : 'text-align:' + align

      delete properties.align
    })
  }
}

var createElement$2 = react.createElement

var index$2 = function(markdown, components) {
  return unified()
    .use(markdown2mdast, { commonmark: true })
    .use(mdast2hast, { allowDangerousHTML: true })
    .use(raw)
    .use(align)
    .use(blank)
    .use(hast2react, { createElement: createElement$2, components: components })
    .process(markdown)
}

exports.internalHtml = index
exports.externalHtml = index$1
exports.externalMarkdown = index$2
