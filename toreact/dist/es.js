import unified from 'unified'
import html2hast from 'rehype-parse'
import imgas from 'rehype-img-as'
import hast2react from 'rehype-react'
import react from 'react'
import hastUtilSelect from 'hast-util-select'
import markdown2mdast from 'remark-parse'
import mdast2hast from 'remark-rehype'
import raw from 'rehype-raw'

var createElement = react.createElement

var index = function(html, components, imgasOpts) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(imgas, imgasOpts)
    .use(hast2react, { createElement: createElement, components: components })
    .process(html)
}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x['default']
    : x
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports
}

var rehypeBlank = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true
  })

  exports.default = function() {
    return function(ast) {
      return (0, hastUtilSelect.selectAll)('a', ast).forEach(function(a) {
        var properties = a.properties

        if (!properties.target) {
          properties.target = '_blank'
        }
      })
    }
  }
})

var blank = unwrapExports(rehypeBlank)

var createElement$1 = react.createElement

var index$1 = function(html, components) {
  return unified()
    .use(html2hast, { fragment: true })
    .use(blank)
    .use(hast2react, { createElement: createElement$1, components: components })
    .process(html)
}

var rehypeAlign = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true
  })

  exports.default = function() {
    return function(ast) {
      return (0, hastUtilSelect.selectAll)('[align]', ast).forEach(function(
        node
      ) {
        var properties = node.properties,
          align = properties.align

        properties.style = properties.style
          ? properties.style + ';text-align:' + align
          : 'text-align:' + align

        delete properties.align
      })
    }
  }
})

var align = unwrapExports(rehypeAlign)

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
