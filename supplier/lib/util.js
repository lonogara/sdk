'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.queryjoin = undefined

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray')

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2)

var _entries = require('babel-runtime/core-js/object/entries')

var _entries2 = _interopRequireDefault(_entries)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var queryjoin = (exports.queryjoin = function queryjoin(query) {
  return (0, _entries2.default)(query)
    .map(function(_ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1]

      return key + '=' + value
    })
    .join('&')
})
