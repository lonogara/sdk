import unified from 'unified'
import markdown2mdast from 'remark-parse'
import mdast2hast from 'remark-rehype'
import raw from 'rehype-raw'
import hastUtilSelect from 'hast-util-select'
import minify from 'rehype-minify-whitespace'
import hast2html from 'rehype-stringify'

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x['default']
    : x
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports
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
