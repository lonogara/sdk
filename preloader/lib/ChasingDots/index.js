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
  var duration = props.duration || DURATION
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
      a('WRAP', {
        style: {
          animationDuration: duration + 's'
        }
      }),
      _react2.default.createElement(
        'div',
        a('CHILD_FIRST', {
          style: {
            backgroundColor: props.objectColor || OBJECT_COLOR,
            animationDuration: duration + 's'
          }
        })
      ),
      _react2.default.createElement(
        'div',
        a('CHILD_SECOND', {
          style: {
            backgroundColor: props.objectColor || OBJECT_COLOR,
            animationDuration: duration + 's',
            animationDelay: -(duration / 2) + 's'
          }
        })
      )
    )
  )
}

var CHILD_STYLE = {
  width: '60%',
  height: '60%',
  display: 'inline-block',
  position: 'absolute',
  borderRadius: '100%',
  animationName: (0, _createKeyframes2.default)({
    0: { transform: 'scale(0)' },
    50: { transform: 'scale(1)' },
    100: { transform: 'scale(0)' }
  }),
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite'
}

var a = (0, _atra2.default)({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  WRAP: {
    style: {
      height: '100%',
      textAlign: 'center',
      animationName: (0, _createKeyframes2.default)({
        100: { transform: 'rotate(360deg)' }
      }),
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite'
    }
  },
  CHILD_FIRST: {
    style: assign({}, CHILD_STYLE, {
      top: 0
    })
  },
  CHILD_SECOND: {
    style: assign({}, CHILD_STYLE, {
      top: 'auto',
      bottom: 0
    })
  }
})
