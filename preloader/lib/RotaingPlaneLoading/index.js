'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _atra = require('atra')

var _atra2 = _interopRequireDefault(_atra)

var _createKeyframes = require('create-keyframes')

var _createKeyframes2 = _interopRequireDefault(_createKeyframes)

var _util = require('../util.js')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var SIZE = 100
var BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR = 'rgb(54, 73, 87)'
var DURATION = 1.2

exports.default = function(props) {
  return _react2.default.createElement(
    'div',
    a('PARENT', {
      style: {
        width: props.size || SIZE,
        height: props.size || SIZE,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR
      }
    }),
    _react2.default.createElement(
      'div',
      a('CHILD', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR,
          animationDuration: (props.duration || DURATION) + 's'
        }
      })
    )
  )
}

var a = (0, _atra2.default)({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD: {
    style: {
      height: '100%',
      animationName: (0, _createKeyframes2.default)({
        0: {
          transform: (0, _util.transform)({
            perspective: '120px',
            rotateX: '0deg',
            rotateY: '0deg'
          })
        },
        50: {
          transform: (0, _util.transform)({
            perspective: '120px',
            rotateX: '-180.1deg',
            rotateY: '0deg'
          })
        },
        100: {
          transform: (0, _util.transform)({
            perspective: '120px',
            rotateX: '-180deg',
            rotateY: '-179.9deg'
          })
        }
      }),
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite'
    }
  }
})
