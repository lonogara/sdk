import unified from 'unified'
import html2hast from 'rehype-parse'
import imgas from 'rehype-img-as'
import hast2react from 'rehype-react'
import react from 'react'
import blank from '../../.packages/rehype-blank'
import markdown2mdast from 'remark-parse'
import mdast2hast from 'remark-rehype'
import raw from 'rehype-raw'
import align from '../../.packages/rehype-align'

var createElement = react.createElement

var index = function(html, components, imgasOpts) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(imgas, imgasOpts)
    .use(hast2react, { createElement: createElement, components: components })
    .process(html)
}

var createElement$1 = react.createElement

var index$1 = function(html, components) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(blank)
    .use(hast2react, { createElement: createElement$1, components: components })
    .process(html)
}

var createElement$2 = react.createElement

var index$2 = function(markdown, components) {
  return unified()
    .use(markdown2mdast, { commonmark: true })
    .use(mdast2hast, { allowDangerousHTML: true })
    .use(raw)
    .use(align)
    .use(blank)
    .use(hast2react, { createElement: createElement$2, components: components })
    .process(markdown)
}

export {
  index as internalHtml,
  index$1 as externalHtml,
  index$2 as externalMarkdown
}
