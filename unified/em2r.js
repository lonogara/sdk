'use strict';

var md2mdast = require('remark-parse');
var mdast2hast = require('remark-rehype');
var hastRaw = require('rehype-raw');

var _require = require('./plugins.js'),
    hastAlign = _require.hastAlign,
    hastBlank = _require.hastBlank;

var hast2react = require('rehype-react');

var _require2 = require('react'),
    createElement = _require2.createElement;

module.exports = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[md2mdast, Object.assign({ commonmark: true }, opts.parse)], [mdast2hast, Object.assign({ allowDangerousHTML: true }, opts.mdast2hast)], [hastRaw, opts.raw], hastAlign, hastBlank, [hast2react, { createElement: createElement, components: opts.components }]];
};