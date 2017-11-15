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

// const SPEED = 1.2

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
    _react2.default.createElement(Circles, {
      objectColor: props.objectColor || OBJECT_COLOR,
      duration: props.duration || DURATION
    })
  )
}

var COUNT = 12
var Circles = function Circles(_ref) {
  var objectColor = _ref.objectColor,
    duration = _ref.duration
  return (0, _util.getRange)(COUNT).map(function(i) {
    return _react2.default.createElement(
      'div',
      a('CIRCLE_WRAP', {
        key: i,
        style: { transform: 'rotate(' + 360 / COUNT * (i + 1) + 'deg)' }
      }),
      _react2.default.createElement(
        'div',
        a('CIRCLE', {
          style: {
            backgroundColor: objectColor,
            animationDuration: duration + 's',
            animationDelay: duration / COUNT * i - duration + 's'
          }
        })
      )
    )
  })
}

var a = (0, _atra2.default)({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CIRCLE_WRAP: {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  },
  CIRCLE: {
    style: {
      margin: '0px auto',
      width: '15%',
      height: '15%',
      borderRadius: '100%',
      // backgroundColor: 'var(--main-color)',
      animation: (0, _createKeyframes2.default)({
        0: { transform: 'scale(0)' },
        40: { transform: 'scale(1)' },
        80: { transform: 'scale(0)' },
        100: { transform: 'scale(0)' }
      }),
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationFillMode: 'both'
    }
  }
})
