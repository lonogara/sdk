const { selectAll } = require('hast-util-select')

const hastAlign = () => ast =>
  selectAll(`[align]`, ast).forEach(node => {
    const { properties } = node

    properties.style = properties.style
      ? `${properties.style};text-align:${properties.align}`
      : `text-align:${properties.align}`

    delete properties.align
  })

const hastBlank = () => ast =>
  selectAll(`a`, ast).forEach(a => {
    const { properties } = a
    if (!properties.target) {
      properties.target = '_blank'
    }
  })

module.exports = { hastAlign, hastBlank }