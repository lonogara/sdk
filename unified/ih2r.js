'use strict';

var html2hast = require('rehype-parse');
var hastImgas = require('rehype-img-as').default;
var hast2react = require('rehype-react');

var _require = require('react'),
    createElement = _require.createElement;

module.exports = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[html2hast, Object.assign({ fragment: true }, opts.parse)], [hastImgas, opts.imgas], [hast2react, { createElement: createElement, components: opts.components }]];
};