import unified from '../../node_modules/unified/index.js'
import markdown2mdast from '../../node_modules/remark-parse/index.js'
import mdast2hast from '../../node_modules/remark-rehype/index.js'
import raw from '../../node_modules/rehype-raw/index.js'
import hastUtilSelect from '../../node_modules/hast-util-select/index.js'
import minify from '../../node_modules/rehype-minify-whitespace/index.js'
import hast2html from '../../node_modules/rehype-stringify/index.js'

var selectAll = hastUtilSelect.selectAll

var align = function() {
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

var selectAll$1 = hastUtilSelect.selectAll

var blank = function() {
  return function(ast) {
    return selectAll$1('a', ast).forEach(function(a) {
      var properties = a.properties

      if (!properties.target) {
        properties.target = '_blank'
      }
    })
  }
}

var processor = unified()
  .use(markdown2mdast, { commonmark: true })
  .use(mdast2hast)
  .use(raw)
  .use(align)
  .use(blank)
  .use(minify)
  .use(hast2html)

var index = function(markdown) {
  return processor.process(markdown)
}

export { index as markdownToHtml }
