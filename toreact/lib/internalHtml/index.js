'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _unified = require('unified')

var _unified2 = _interopRequireDefault(_unified)

var _rehypeParse = require('rehype-parse')

var _rehypeParse2 = _interopRequireDefault(_rehypeParse)

var _rehypeImgAs = require('rehype-img-as')

var _rehypeImgAs2 = _interopRequireDefault(_rehypeImgAs)

var _rehypeReact = require('rehype-react')

var _rehypeReact2 = _interopRequireDefault(_rehypeReact)

var _react = require('react')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = function(html, components, imgasOpts) {
  return (0, _unified2.default)()
    .use(_rehypeParse2.default, { fragment: true })
    .use(_rehypeImgAs2.default, imgasOpts)
    .use(_rehypeReact2.default, {
      createElement: _react.createElement,
      components: components
    })
    .process(html)
}
