'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _unified = require('unified')

var _unified2 = _interopRequireDefault(_unified)

var _remarkParse = require('remark-parse')

var _remarkParse2 = _interopRequireDefault(_remarkParse)

var _remarkRehype = require('remark-rehype')

var _remarkRehype2 = _interopRequireDefault(_remarkRehype)

var _rehypeRaw = require('rehype-raw')

var _rehypeRaw2 = _interopRequireDefault(_rehypeRaw)

var _rehypeAlign = require('../../../.packages/rehype-align')

var _rehypeAlign2 = _interopRequireDefault(_rehypeAlign)

var _rehypeBlank = require('../../../.packages/rehype-blank')

var _rehypeBlank2 = _interopRequireDefault(_rehypeBlank)

var _rehypeReact = require('rehype-react')

var _rehypeReact2 = _interopRequireDefault(_rehypeReact)

var _react = require('react')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = function(markdown, components) {
  return (0, _unified2.default)()
    .use(_remarkParse2.default, { commonmark: true })
    .use(_remarkRehype2.default, { allowDangerousHTML: true })
    .use(_rehypeRaw2.default)
    .use(_rehypeAlign2.default)
    .use(_rehypeBlank2.default)
    .use(_rehypeReact2.default, {
      createElement: _react.createElement,
      components: components
    })
    .process(markdown)
}
