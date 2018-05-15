import html2hast from 'rehype-parse'
import md2mdast from 'remark-parse'
import mdast2hast from 'remark-rehype'
import hast2react from 'rehype-react'
import hast2html from 'rehype-stringify'
import hastImgas from 'rehype-img-as'
import hastRaw from 'rehype-raw'
import hastMinify from 'rehype-minify-whitespace'
import { selectAll } from 'hast-util-select'
import { createElement } from 'react'

var hastAlign = function hastAlign() {
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

var hastBlank = function hastBlank() {
  return function(ast) {
    return selectAll('a', ast).forEach(function(a) {
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
    [hast2react, { createElement: createElement, components: opts.components }]
  ]
}

var eh2r = function eh2r() {
  var opts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return [
    [html2hast, assign({ fragment: true }, opts.parse)],
    hastBlank,
    [hast2react, { createElement: createElement, components: opts.components }]
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
    [hast2react, { createElement: createElement, components: opts.components }]
  ]
}

export { m2h, ih2r, eh2r, em2r }
