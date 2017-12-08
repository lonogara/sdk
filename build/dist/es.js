import unified from 'unified'
import markdown2mdast from 'remark-parse'
import mdast2hast from 'remark-rehype'
import raw from 'rehype-raw'
import align from '../../.packages/rehype-align'
import blank from '../../.packages/rehype-blank'
import minify from 'rehype-minify-whitespace'
import hast2html from 'rehype-stringify'

var processor = unified()
  .use(markdown2mdast, { commonmark: true })
  .use(mdast2hast)
  .use(raw)
  .use(align)
  .use(blank)
  .use(minify)
  .use(hast2html)

var index = function(markdown) {
  return processor.process(markdown).then(function(_ref) {
    var contents = _ref.contents
    return contents
  })
}

export { index as markdownToHtml }
