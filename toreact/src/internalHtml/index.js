import unified from 'unified'
import html2hast from 'rehype-parse'
import imgas from 'rehype-img-as'
import hast2react from 'rehype-react'
import react from 'react'
const { createElement } = react

export default (html, components, imgasOpts) =>
  unified()
    .use(html2hast, { fragment: true })
    .use(imgas, imgasOpts)
    .use(hast2react, { createElement, components })
    .process(html)
