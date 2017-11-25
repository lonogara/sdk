import unified from '../../node_modules/unified/index.js'
import html2hast from '../../node_modules/rehype-parse/index.js'
import imgas from '../../node_modules/rehype-img-as/lib/index.js'
import hast2react from '../../node_modules/rehype-react/index.js'
import react from '../../node_modules/react/index.js'
import hastUtilSelect from '../../node_modules/hast-util-select/index.js'
import markdown2mdast from '../../node_modules/remark-parse/index.js'
import mdast2hast from '../../node_modules/remark-rehype/index.js'
import raw from '../../node_modules/rehype-raw/index.js'

var createElement = react.createElement

var index = function(html, components, imgasOpts) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(imgas, imgasOpts)
    .use(hast2react, { createElement: createElement, components: components })
    .process(html)
}

var selectAll = hastUtilSelect.selectAll

var blank = function() {
  return function(ast) {
    return selectAll('a', ast).forEach(function(a) {
      var properties = a.properties

      if (!properties.target) {
        properties.target = '_blank'
      }
    })
  }
}

var createElement$1 = react.createElement

var index$1 = function(html, components) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(blank)
    .use(hast2react, { createElement: createElement$1, components: components })
    .process(html)
}

var selectAll$1 = hastUtilSelect.selectAll

var align = function() {
  return function(ast) {
    return selectAll$1('[align]', ast).forEach(function(node) {
      var properties = node.properties,
        align = properties.align

      properties.style = properties.style
        ? properties.style + ';text-align:' + align
        : 'text-align:' + align

      delete properties.align
    })
  }
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
