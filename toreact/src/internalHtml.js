import unified from 'unified'
import html2hast from 'rehype-parse'
import imgas from 'rehype-img-as'
import hast2react from 'rehype-react'
import react from 'react'
const { createElement } = react

export default (html, opts = {}) =>
  unified()
    .use(html2hast, { fragment: true })
    .use(imgas, opts.imgas)
    .use(hast2react, { createElement, components: opts.components })
    .process(html)
    .then(({ contents }) => contents)
