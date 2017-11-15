'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.getRange = exports.transform = undefined

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray')

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2)

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray')

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2)

var _entries = require('babel-runtime/core-js/object/entries')

var _entries2 = _interopRequireDefault(_entries)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var transform = (exports.transform = function transform() {
  var obj =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return (0, _entries2.default)(obj)
    .map(function(_ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        fnName = _ref2[0],
        val = _ref2[1]

      return fnName + '(' + val + ')'
    })
    .join(' ')
})

var getRange = (exports.getRange = function getRange(n) {
  return [].concat((0, _toConsumableArray3.default)(Array(n).keys()))
})
