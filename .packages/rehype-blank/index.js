'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _hastUtilSelect = require('hast-util-select')

exports.default = function() {
  return function(ast) {
    return (0, _hastUtilSelect.selectAll)('a', ast).forEach(function(a) {
      var properties = a.properties

      if (!properties.target) {
        properties.target = '_blank'
      }
    })
  }
}
