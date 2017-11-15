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
    _react2.default.createElement(Circles, {
      duration: props.duration || DURATION,
      objectColor: props.objectColor || OBJECT_COLOR
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
      a('CHILD_WRAP', {
        key: i,
        style: {
          transform: 'rotate(' + 360 * i / COUNT + 'deg)'
        }
      }),
      _react2.default.createElement(
        'div',
        a('CHILD', {
          style: {
            backgroundColor: objectColor,
            animationDuration: duration + 's',
            animationDelay: duration - duration * i / COUNT + 's'
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
  CHILD_WRAP: {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    }
  },
  CHILD: {
    style: {
      // margin: `0 auto`,
      margin: 'auto',
      width: '15%',
      height: '15%',
      borderRadius: '100%',
      animationName: (0, _createKeyframes2.default)({
        0: { opacity: 0 },
        39: { opacity: 0 },
        40: { opacity: 1 },
        100: { opacity: 0 }
      }),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      animationFillMode: 'both'
    }
  }
})
