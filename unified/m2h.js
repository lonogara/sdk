'use strict';

var md2mdast = require('remark-parse');
var mdast2hast = require('remark-rehype');
var hastRaw = require('rehype-raw');

var _require = require('./plugins.js'),
    hastAlign = _require.hastAlign,
    hastBlank = _require.hastBlank;

var hastMinify = require('rehype-minify-whitespace');
var hast2html = require('rehype-stringify');

module.exports = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [[md2mdast, Object.assign({ commonmark: true }, opts.parse)], [mdast2hast, Object.assign({ allowDangerousHTML: true }, opts.mdast2hast)], [hastRaw, opts.raw], hastAlign, hastBlank, [hastMinify, opts.minify], [hast2html, opts.stringify]];
};