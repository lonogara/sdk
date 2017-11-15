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
    _react2.default.createElement(Rects, {
      size: props.size || SIZE,
      objectColor: props.objectColor || OBJECT_COLOR,
      duration: props.duration || DURATION
    })
  )
}

var RECT_COUNT = 5
var DELAY_RANGE = 0.4

var Rects = function Rects(props) {
  return (0, _util.getRange)(RECT_COUNT).map(function(index) {
    return _react2.default.createElement(
      'div',
      a('RECT', {
        key: index,
        style: {
          width: props.size / 12,
          marginRight: props.size / 24,
          left: props.size / 24 / 2,
          backgroundColor: props.objectColor,
          animationDuration: props.duration + 's',
          animationDelay:
            DELAY_RANGE * index / (RECT_COUNT - 1) - props.duration + 's'
        }
      })
    )
  })
}

var a = (0, _atra2.default)({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
      // fontSize: 10
    }
  },
  RECT: {
    style: {
      position: 'relative',
      // width: 7,
      // marginRight: 3,
      height: '100%',
      display: 'inline-block',
      animationName: (0, _createKeyframes2.default)({
        0: { transform: 'scaleY(0.4)' },
        20: { transform: 'scaleY(1.0)' },
        40: { transform: 'scaleY(0.4)' },
        100: { transform: 'scaleY(0.4)' }
      }),
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite'
    }
  }
})
