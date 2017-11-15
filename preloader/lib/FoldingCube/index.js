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
var DURATION = 2.4

exports.default = function(props) {
  var parentSize = props.size || SIZE
  var wrapSize = parentSize / Math.SQRT2 - 1

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
      a('WRAP', {
        style: {
          width: wrapSize,
          height: wrapSize
        }
      }),
      _react2.default.createElement(Cubes, {
        duration: props.duration || DURATION,
        objectColor: props.objectColor || OBJECT_COLOR
      })
    )
  )
}

var cubes = [0, 1, 3, 2]

var Cubes = function Cubes(props) {
  return cubes.map(function(i) {
    return _react2.default.createElement(
      'div',
      a('CHILD_WRAP', {
        key: i,
        style: {
          transform: (0, _util.transform)({
            scale: '1.1',
            rotateZ: 90 * i + 'deg'
          })
        }
      }),
      _react2.default.createElement(
        'div',
        a('CHILD', {
          style: {
            backgroundColor: props.objectColor,
            animationDuration: props.duration + 's',
            animationDelay: props.duration / 2 * i / cubes.length + 's'
          }
        })
      )
    )
  })
}

// transform: `perspective(140px) rotateX(-180deg)`,
var anim1 = {
  transform: (0, _util.transform)({
    perspective: '140px',
    rotateX: '-180deg'
  }),
  opacity: 0

  // transform: `perspective(140px) rotateX(0deg)`,
}
var anim2 = {
  transform: (0, _util.transform)({
    perspective: '140px',
    rotateX: '0deg'
  }),
  opacity: 1

  // transform: `perspective(140px) rotateY(180deg)`,
}
var anim3 = {
  transform: (0, _util.transform)({
    perspective: '140px',
    rotateY: '180deg'
  }),
  opacity: 0
}

var a = (0, _atra2.default)({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
    }
  },
  WRAP: {
    style: {
      position: 'relative',
      top: '15%',
      display: 'inline-block',
      transform: 'rotateZ(45deg) scale(0.95)'
    }
  },
  CHILD_WRAP: {
    style: {
      float: 'left',
      width: '50%',
      height: '50%',
      position: 'relative'
    }
  },
  CHILD: {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transformOrigin: '100% 100%',
      // perspective: 140,
      animationName: (0, _createKeyframes2.default)({
        0: anim1,
        10: anim1,
        25: anim2,
        75: anim2,
        90: anim3,
        100: anim3
      }),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationFillMode: 'both'
    }
  }
})
