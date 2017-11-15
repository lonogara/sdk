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
      a('info_0', {
        style: {
          fill: choised ? 'var(--base-color)' : 'none'
        }
      })
    ),
    _react2.default.createElement(
      'path',
      a('info_1', {
        style: {
          stroke: choised ? 'none' : 'var(--base-color)',
          fill: choised ? '#ffffff' : 'var(--base-color)'
        }
      })
    )
  )
}

var a = (0, _atra2.default)({
  svg: {
    viewBox: '0 0 300 300'
  },
  info_0: {
    d:
      'm 289.86614,149.99993 c 0,36.63983 -21.14726,73.984 -21.14726,73.984 l 15.91828,58.92333 -62.09509,-13.30008 c 0,0 -28.32637,20.25882 -72.542,20.25882 -77.245897,0 -139.86607,-62.62017 -139.86607,-139.86607 0,-77.2459 62.620173,-139.866073 139.86607,-139.866073 77.2459,0 139.86607,62.620173 139.86607,139.866073 z',
    style: {
      stroke: 'var(--base-color)',
      strokeWidth: '12'
    }
  },
  info_1: {
    d:
      'm 109.82143,123.31408 q 1.8945,-16.72102 12.27306,-25.78167 10.37857,-9.14302 26.85248,-9.14302 16.96813,0 27.8409,9.39013 10.95515,9.30776 10.95515,23.47532 0,7.08378 -3.21241,13.75571 -3.13004,6.67194 -14.99126,17.13287 -9.06065,8.07222 -11.44937,12.76729 -2.30634,4.61269 -2.55345,16.63864 l -14.16756,0 q 0,-9.55486 0.65895,-13.92045 0.74133,-4.44796 2.88294,-8.64881 2.22398,-4.20084 5.6835,-7.90747 3.54189,-3.70663 9.88434,-9.22539 8.07222,-7.16615 10.04909,-11.20226 2.05923,-4.11848 2.05923,-8.31933 0,-8.64879 -6.83667,-15.15599 -6.83667,-6.58957 -16.63865,-6.58957 -19.93342,0 -24.05191,24.38139 l -15.23836,-1.64739 z m 47.44486,87.88831 -16.88576,0 0,-16.88576 16.88576,0 0,16.88576 z',
    style: {
      strokeWidth: '5'
    }
  }
})
