import unified from 'unified'
import markdown2mdast from 'remark-parse'
import mdast2hast from 'remark-rehype'
import raw from 'rehype-raw'
import align from '../../../.packages/rehype-align'
import blank from '../../../.packages/rehype-blank'
import minify from 'rehype-minify-whitespace'
import hast2html from 'rehype-stringify'

const processor = unified()
  .use(markdown2mdast, { commonmark: true })
  .use(mdast2hast)
  .use(raw)
  .use(align)
  .use(blank)
  .use(minify)
  .use(hast2html)

export default markdown => processor.process(markdown)
