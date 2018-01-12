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
var blank = _interopDefault(require('../../.packages/rehype-blank'))
var markdown2mdast = _interopDefault(require('remark-parse'))
var mdast2hast = _interopDefault(require('remark-rehype'))
var raw = _interopDefault(require('rehype-raw'))
var align = _interopDefault(require('../../.packages/rehype-align'))

var createElement = react.createElement

var internalHtml = function(html) {
  var opts =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  return unified()
    .use(html2hast, { fragment: true })
    .use(imgas, opts.imgas)
    .use(hast2react, {
      createElement: createElement,
      components: opts.components
    })
    .process(html)
    .then(function(_ref) {
      var contents = _ref.contents
      return contents
    })
}

var createElement$1 = react.createElement

var externalHtml = function(html, components) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(blank)
    .use(hast2react, { createElement: createElement$1, components: components })
    .processSync(html).contents
}

var createElement$2 = react.createElement

var externalMarkdown = function(markdown, components) {
  return unified()
    .use(markdown2mdast, { commonmark: true })
    .use(mdast2hast, { allowDangerousHTML: true })
    .use(raw)
    .use(align)
    .use(blank)
    .use(hast2react, { createElement: createElement$2, components: components })
    .processSync(markdown).contents
}

exports.internalHtml = internalHtml
exports.externalHtml = externalHtml
exports.externalMarkdown = externalMarkdown
