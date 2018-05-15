import html2hast from 'rehype-parse'
import md2mdast from 'remark-parse'
import mdast2hast from 'remark-rehype'
import hast2react from 'rehype-react'
import hast2html from 'rehype-stringify'
import hastImgas from 'rehype-img-as'
import hastRaw from 'rehype-raw'
import hastMinify from 'rehype-minify-whitespace'
import { hastBlank, hastAlign } from './plugins.js'
import { createElement } from 'react'

const { assign } = Object

export const m2h = (opts = {}) => [
  [md2mdast, assign({ commonmark: true }, opts.parse)],
  [mdast2hast, assign({ allowDangerousHTML: true }, opts.mdast2hast)],
  [hastRaw, opts.raw],
  hastAlign,
  hastBlank,
  [hastMinify, opts.minify],
  [hast2html, opts.stringify]
]

export const ih2r = (opts = {}) => [
  [html2hast, assign({ fragment: true }, opts.parse)],
  [hastImgas, opts.imgas],
  [hast2react, { createElement, components: opts.components }]
]

export const eh2r = (opts = {}) => [
  [html2hast, assign({ fragment: true }, opts.parse)],
  hastBlank,
  [hast2react, { createElement, components: opts.components }]
]

export const em2r = (opts = {}) => [
  [md2mdast, assign({ commonmark: true }, opts.parse)],
  [mdast2hast, assign({ allowDangerousHTML: true }, opts.mdast2hast)],
  [hastRaw, opts.raw],
  hastAlign,
  hastBlank,
  [hast2react, { createElement, components: opts.components }]
]