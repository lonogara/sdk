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
    return selectAll('[align]', ast).forEach(function(node) {
      var properties = node.properties,
        align = properties.align

      properties.style = properties.style
        ? properties.style + ';text-align:' + align
        : 'text-align:' + align

      delete properties.align
    })
  }
}
