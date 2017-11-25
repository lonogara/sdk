'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _hastUtilSelect = require('hast-util-select')

var _hastUtilSelect2 = _interopRequireDefault(_hastUtilSelect)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var selectAll = _hastUtilSelect2.default.selectAll

exports.default = function() {
  return function(ast) {
    return selectAll('a', ast).forEach(function(a) {
      var properties = a.properties

      if (!properties.target) {
        properties.target = '_blank'
      }
    })
  }
}
