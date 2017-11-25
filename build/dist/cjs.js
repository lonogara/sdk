'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var unified = _interopDefault(require('../../node_modules/unified/index.js'))
var markdown2mdast = _interopDefault(
  require('../../node_modules/remark-parse/index.js')
)
var mdast2hast = _interopDefault(
  require('../../node_modules/remark-rehype/index.js')
)
var raw = _interopDefault(require('../../node_modules/rehype-raw/index.js'))
var hastUtilSelect = _interopDefault(
  require('../../node_modules/hast-util-select/index.js')
)
var minify = _interopDefault(
  require('../../node_modules/rehype-minify-whitespace/index.js')
)
var hast2html = _interopDefault(
  require('../../node_modules/rehype-stringify/index.js')
)

var selectAll = hastUtilSelect.selectAll

var align = function() {
  return function(ast) {
    return selectAll('[align]', ast).forEach(function(node) {
      var properties = node.properties,
        align = properties.align

      properties.style = properties.style
        ? properties.style + ';text-align:' + align
        : 'text-align:' + align

      delete properties.align
    })
  }
}

var selectAll$1 = hastUtilSelect.selectAll

var blank = function() {
  return function(ast) {
    return selectAll$1('a', ast).forEach(function(a) {
      var properties = a.properties

      if (!properties.target) {
        properties.target = '_blank'
      }
    })
  }
}

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
