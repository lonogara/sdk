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
      a('path_0', {
        style: {
          fill: choised ? 'var(--base-color)' : 'none'
        }
      })
    ),
    _react2.default.createElement(
      'path',
      a('path_1', {
        style: {
          fill: choised ? 'none' : 'var(--base-color)',
          stroke: choised ? '#ffffff' : 'var(--base-color)'
        }
      })
    )
  )
}

var a = (0, _atra2.default)({
  svg: {
    viewBox: '0 0 300 300'
  },
  path_0: {
    d:
      'M 150.00014,12.118164 C 82.143107,12.511394 12.118454,43.326403 12.118454,130.98169 l 0,156.89986 275.763376,0 0,-156.89986 c 0,-88.716204 -65.37208,-119.002102 -137.88169,-118.863526 z',
    style: {
      stroke: 'var(--base-color)',
      strokeWidth: '12'
    }
  },
  path_1: {
    d: 'm 62.5,60.565334 175,0 0,29.166664 -175,0 z',
    style: {
      strokeWidth: '5'
    }
  }
})
