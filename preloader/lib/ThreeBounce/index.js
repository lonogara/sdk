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
var DURATION = 1.4

exports.default = function(props) {
  var parentSize = props.size || SIZE

  var childSize = parentSize / 4
  var childMutable = {
    style: {
      width: childSize,
      height: childSize,
      animationDuration: (props.duration || DURATION) + 's',
      backgroundColor: props.objectColor || OBJECT_COLOR
    }
  }

  return _react2.default.createElement(
    'div',
    a('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR
      }
    }),
    _react2.default.createElement('div', a('CHILD_FIRST', childMutable)),
    _react2.default.createElement('div', a('CHILD_SECOND', childMutable)),
    _react2.default.createElement('div', a('CHILD_THIRD', childMutable))
  )
}

var CHILD_STYLE = {
  position: 'relative',
  top: '35%',
  borderRadius: '100%',
  display: 'inline-block',
  animationName: (0, _createKeyframes2.default)({
    0: { transform: 'scale(0)' },
    40: { transform: 'scale(1)' },
    80: { transform: 'scale(0)' },
    100: { transform: 'scale(0)' }
  }),
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationFillMode: 'both'
}

var a = (0, _atra2.default)({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
    }
  },
  CHILD_FIRST: {
    style: assign({}, CHILD_STYLE, {
      animationDelay: '-0.32s'
    })
  },
  CHILD_SECOND: {
    style: assign({}, CHILD_STYLE, {
      animationDelay: '-0.16s'
    })
  },
  CHILD_THIRD: {
    style: assign({}, CHILD_STYLE, {
      animationDelay: '0s'
    })
  }
})
