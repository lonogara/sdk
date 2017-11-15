'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _unified = require('unified')

var _unified2 = _interopRequireDefault(_unified)

var _rehypeParse = require('rehype-parse')

var _rehypeParse2 = _interopRequireDefault(_rehypeParse)

var _rehypeBlank = require('../../../.packages/rehype-blank')

var _rehypeBlank2 = _interopRequireDefault(_rehypeBlank)

var _rehypeReact = require('rehype-react')

var _rehypeReact2 = _interopRequireDefault(_rehypeReact)

var _react = require('react')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = function(html, components) {
  return (0, _unified2.default)()
    .use(_rehypeParse2.default, { fragment: true })
    .use(_rehypeBlank2.default)
    .use(_rehypeReact2.default, {
      createElement: _react.createElement,
      components: components
    })
    .process(html)
}
