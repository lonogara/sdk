'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var unified = _interopDefault(require('unified'))
var html2hast = _interopDefault(require('rehype-parse'))
var imgas = _interopDefault(require('rehype-img-as'))
var hast2react = _interopDefault(require('rehype-react'))
var react = _interopDefault(require('react'))
var hastUtilSelect = _interopDefault(require('hast-util-select'))
var markdown2mdast = _interopDefault(require('remark-parse'))
var mdast2hast = _interopDefault(require('remark-rehype'))
var raw = _interopDefault(require('rehype-raw'))

var createElement = react.createElement

var index = function(html, components, imgasOpts) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(imgas, imgasOpts)
    .use(hast2react, { createElement: createElement, components: components })
    .process(html)
}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x['default']
    : x
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports
}

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

var createElement$1 = react.createElement

var index$1 = function(html, components) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(blank)
    .use(hast2react, { createElement: createElement$1, components: components })
    .process(html)
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
