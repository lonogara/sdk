'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var html2hast = _interopDefault(require('rehype-parse'))
var md2mdast = _interopDefault(require('remark-parse'))
var mdast2hast = _interopDefault(require('remark-rehype'))
var hast2react = _interopDefault(require('rehype-react'))
var hast2html = _interopDefault(require('rehype-stringify'))
var hastImgas = _interopDefault(require('rehype-img-as'))
var hastRaw = _interopDefault(require('rehype-raw'))
var hastMinify = _interopDefault(require('rehype-minify-whitespace'))
var hastUtilSelect = require('hast-util-select')
var react = require('react')

var hastAlign = function hastAlign() {
  return function(ast) {
    return hastUtilSelect.selectAll('[align]', ast).forEach(function(node) {
      var properties = node.properties,
        align = properties.align

      properties.style = properties.style
        ? properties.style + ';text-align:' + align
        : 'text-align:' + align

      delete properties.align
    })
  }
}

var hastBlank = function hastBlank() {
  return function(ast) {
    return hastUtilSelect.selectAll('a', ast).forEach(function(a) {
      var properties = a.properties

      if (!properties.target) {
        properties.target = '_blank'
      }
    })
  }
}

var assign = Object.assign

var m2h = function m2h() {
  var opts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    [md2mdast, assign({ commonmark: true }, opts.parse)],
    [mdast2hast, assign({ allowDangerousHTML: true }, opts.mdast2hast)],
    [hastRaw, opts.raw],
    hastAlign,
    hastBlank,
    [hastMinify, opts.minify],
    [hast2html, opts.stringify]
  ]
}

var ih2r = function ih2r() {
  var opts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    [html2hast, assign({ fragment: true }, opts.parse)],
    [hastImgas, opts.imgas],
    [
      hast2react,
      { createElement: react.createElement, components: opts.components }
    ]
  ]
}

var eh2r = function eh2r() {
  var opts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    [html2hast, assign({ fragment: true }, opts.parse)],
    hastBlank,
    [
      hast2react,
      { createElement: react.createElement, components: opts.components }
    ]
  ]
}

var em2r = function em2r() {
  var opts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    [md2mdast, assign({ commonmark: true }, opts.parse)],
    [mdast2hast, assign({ allowDangerousHTML: true }, opts.mdast2hast)],
    [hastRaw, opts.raw],
    hastAlign,
    hastBlank,
    [
      hast2react,
      { createElement: react.createElement, components: opts.components }
    ]
  ]
}

exports.m2h = m2h
exports.ih2r = ih2r
exports.eh2r = eh2r
exports.em2r = em2r
