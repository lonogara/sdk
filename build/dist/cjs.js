'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var unified = _interopDefault(require('unified'))
var markdown2mdast = _interopDefault(require('remark-parse'))
var mdast2hast = _interopDefault(require('remark-rehype'))
var raw = _interopDefault(require('rehype-raw'))
var hastUtilSelect = _interopDefault(require('hast-util-select'))
var minify = _interopDefault(require('rehype-minify-whitespace'))
var hast2html = _interopDefault(require('rehype-stringify'))

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x['default']
    : x
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports
}

var rehypeAlign = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true
  })

  exports.default = function() {
    return function(ast) {
      return (0, hastUtilSelect.selectAll)('[align]', ast).forEach(function(
        node
      ) {
        var properties = node.properties,
          align = properties.align

        properties.style = properties.style
          ? properties.style + ';text-align:' + align
          : 'text-align:' + align

        delete properties.align
      })
    }
  }
})

var align = unwrapExports(rehypeAlign)

var rehypeBlank = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true
  })

  exports.default = function() {
    return function(ast) {
      return (0, hastUtilSelect.selectAll)('a', ast).forEach(function(a) {
        var properties = a.properties

        if (!properties.target) {
          properties.target = '_blank'
        }
      })
    }
  }
})

var blank = unwrapExports(rehypeBlank)

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
