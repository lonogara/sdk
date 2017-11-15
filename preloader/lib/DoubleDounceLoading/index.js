'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _assign = require('babel-runtime/core-js/object/assign')

var _assign2 = _interopRequireDefault(_assign)

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _atra = require('atra')

var _atra2 = _interopRequireDefault(_atra)

var _createKeyframes = require('create-keyframes')

var _createKeyframes2 = _interopRequireDefault(_createKeyframes)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var assign = _assign2.default

var SIZE = 100
var BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR = 'rgb(54, 73, 87)'
var DURATION = 2

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
      a('CHILD_FIRST', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR,
          animationDuration: (props.duration || DURATION) + 's'
        }
      })
    ),
    _react2.default.createElement(
      'div',
      a('CHILD_SECOND', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR,
          animationDuration: (props.duration || DURATION) + 's'
        }
      })
    )
  )
}

var CHILD_STYLE = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  opacity: 0.6,
  animationName: (0, _createKeyframes2.default)({
    0: { transform: 'scale(0)' },
    50: { transform: 'scale(1)' },
    100: { transform: 'scale(0)' }
  }),
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out'
}

var a = (0, _atra2.default)({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD_FIRST: {
    style: CHILD_STYLE
  },
  CHILD_SECOND: {
    style: assign({}, CHILD_STYLE, { animationDelay: '-1s' })
  }
})
