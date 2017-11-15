'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _hastUtilSelect = require('hast-util-select')

exports.default = function() {
  return function(ast) {
    return (0, _hastUtilSelect.selectAll)('[align]', ast).forEach(function(
      node
    ) {
      var properties = node.properties,
        align = properties.align

      properties.style = properties.style
        ? properties.style + ';text-align:' + align
        : 'text-align:' + align

      delete properties.align
    })
  }
}
