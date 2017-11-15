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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var SIZE = 100

var BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR = 'rgb(54, 73, 87)'
var DURATION = 1.5

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
    _react2.default.createElement(Cubes, {
      objectColor: props.objectColor || OBJECT_COLOR,
      duration: props.duration || DURATION
    })
  )
}

var CUBES = [0.5, 0.75, 1, 0.25, 0.5, 0.75, 0, 0.25, 0.5]

var Cubes = function Cubes(_ref) {
  var objectColor = _ref.objectColor,
    duration = _ref.duration
  return CUBES.map(function(c, i) {
    return _react2.default.createElement(
      'div',
      a('CUBE', {
        key: i,
        style: {
          backgroundColor: objectColor,
          animationDuration: duration + 's',
          animationDelay: (duration - 3) / 3 * c + 's'
        }
      })
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
  CUBE: {
    style: {
      width: '33.33%',
      height: '33.33%',
      float: 'left',
      animationName: (0, _createKeyframes2.default)({
        //   0: { transform: `scale3d(1, 1, 1)` },
        //  35: { transform: `scale3d(0, 0, 1)` },
        //  70: { transform: `scale3d(1, 1, 1)` },
        // 100: { transform: `scale3d(1, 1, 1)` }

        // 0: { transform: `scale(1)` },
        35: { transform: 'scale(0)' },
        70: {
          transform: 'scale(1)'
          // 100: { transform: `scale(1)` }
        }
      }),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out'
    }
  }
})
