'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _atra = require('atra')

var _atra2 = _interopRequireDefault(_atra)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = function(_ref) {
  var choised = _ref.choised
  return _react2.default.createElement(
    'svg',
    a('svg'),
    _react2.default.createElement(
      'path',
      a('path', {
        style: {
          fill: choised ? 'var(--base-color)' : 'none'
        }
      })
    )
  )
}

var a = (0, _atra2.default)({
  svg: {
    viewBox: '0 0 300 300'
  },
  path: {
    d:
      'M 150.0005,11.642 11.643,121.37381 l 0,166.98319 100.18991,0 0,-71.56422 76.33518,0 0,71.56422 100.18991,0 0,-166.98319 z',
    style: {
      stroke: 'var(--base-color)',
      strokeWidth: '12'
    }
  }
})
