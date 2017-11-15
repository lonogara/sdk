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

var _util = require('../util.js')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var assign = _assign2.default

var SIZE = 100
var BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR = 'rgb(54, 73, 87)'
var DURATION = 1.8

exports.default = function(props) {
  var parentSize = props.size || SIZE

  var cubeSize = parentSize / 4
  var animationName = createAnim(parentSize * 0.75)
  var duration = props.duration || DURATION

  return _react2.default.createElement(
    'div',
    a('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR
      }
    }),
    _react2.default.createElement(
      'div',
      a('CHILD', {
        style: {
          animationName: animationName,
          animationDuration: duration + 's',
          animationDelay: duration + 's',
          width: cubeSize,
          height: cubeSize,
          backgroundColor: props.objectColor || OBJECT_COLOR
        }
      })
    ),
    _react2.default.createElement(
      'div',
      a('CHILD', {
        style: {
          animationName: animationName,
          animationDuration: duration + 's',
          animationDelay: duration / 2 + 's',
          width: cubeSize,
          height: cubeSize,
          backgroundColor: props.objectColor || OBJECT_COLOR
        }
      })
    )
  )
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
  CHILD: {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationFillMode: 'both'
    }
  }
})

var createAnim = function createAnim(cubeDistance) {
  return (0, _createKeyframes2.default)({
    0: {
      transform: (0, _util.transform)({
        rotate: '0deg'
      })
    },
    25: {
      transform: (0, _util.transform)({
        rotate: '-90deg',
        translateX: cubeDistance + 'px',
        scale: 0.5
      })
    },
    50: {
      transform: (0, _util.transform)({
        rotate: '-179.9deg',
        translateX: cubeDistance + 'px',
        translateY: cubeDistance + 'px'
      })
    },
    75: {
      transform: (0, _util.transform)({
        rotate: '-270deg',
        translateY: cubeDistance + 'px',
        scale: -0.5
      })
    },
    100: {
      transform: (0, _util.transform)({
        rotate: '-360deg'
      })
    }
  })
}
