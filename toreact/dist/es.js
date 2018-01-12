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

var internalHtml = function(html) {
  var opts =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  return unified()
    .use(html2hast, { fragment: true })
    .use(imgas, opts.imgas)
    .use(hast2react, {
      createElement: createElement,
      components: opts.components
    })
    .process(html)
    .then(function(_ref) {
      var contents = _ref.contents
      return contents
    })
}

var createElement$1 = react.createElement

var externalHtml = function(html, components) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(blank)
    .use(hast2react, { createElement: createElement$1, components: components })
    .processSync(html).contents
}

var createElement$2 = react.createElement

var externalMarkdown = function(markdown, components) {
  return unified()
    .use(markdown2mdast, { commonmark: true })
    .use(mdast2hast, { allowDangerousHTML: true })
    .use(raw)
    .use(align)
    .use(blank)
    .use(hast2react, { createElement: createElement$2, components: components })
    .processSync(markdown).contents
}

export { internalHtml, externalHtml, externalMarkdown }
