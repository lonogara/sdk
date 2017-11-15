import unified from 'unified'
import html2hast from 'rehype-parse'
import blank from '../../../.packages/rehype-blank'
import hast2react from 'rehype-react'
import { createElement } from 'react'

export default (html, components) =>
  unified()
    .use(html2hast, { fragment: true })
    .use(blank)
    .use(hast2react, { createElement, components })
    .process(html)
