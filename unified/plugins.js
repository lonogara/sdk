'use strict';

var _require = require('hast-util-select'),
    selectAll = _require.selectAll;

var hastAlign = function hastAlign() {
  return function (ast) {
    return selectAll('[align]', ast).forEach(function (node) {
      var properties = node.properties;


      properties.style = properties.style ? properties.style + ';text-align:' + properties.align : 'text-align:' + properties.align;

      delete properties.align;
    });
  };
};

var hastBlank = function hastBlank() {
  return function (ast) {
    return selectAll('a', ast).forEach(function (a) {
      var properties = a.properties;

      if (!properties.target) {
        properties.target = '_blank';
      }
    });
  };
};

module.exports = { hastAlign: hastAlign, hastBlank: hastBlank };