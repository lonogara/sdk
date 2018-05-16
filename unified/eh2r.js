'use strict';

var html2hast = require('rehype-parse');

var _require = require('./plugins.js'),
    hastBlank = _require.hastBlank;

var hast2react = require('rehype-react');

var _require2 = require('react'),
    createElement = _require2.createElement;

module.exports = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[html2hast, Object.assign({ fragment: true }, opts.parse)], hastBlank, [hast2react, { createElement: createElement, components: opts.components }]];
};