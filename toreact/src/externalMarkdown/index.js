import unified from 'unified'
import markdown2mdast from 'remark-parse'
import mdast2hast from 'remark-rehype'
import raw from 'rehype-raw'
import align from '../../../.packages/rehype-align'
import blank from '../../../.packages/rehype-blank'
import hast2react from 'rehype-react'
import { createElement } from 'react'

export default (markdown, components) =>
  unified()
    .use(markdown2mdast, { commonmark: true })
    .use(mdast2hast, { allowDangerousHTML: true })
    .use(raw)
    .use(align)
    .use(blank)
    .use(hast2react, { createElement, components })
    .process(markdown)
