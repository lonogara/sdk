import { selectAll } from 'hast-util-select'

export const hastAlign = () => ast =>
  selectAll(`[align]`, ast).forEach(node => {
    let { properties } = node,
      { align } = properties

    properties.style = properties.style
      ? `${properties.style};text-align:${align}`
      : `text-align:${align}`

    delete properties.align
  })

export const hastBlank = () => ast =>
  selectAll(`a`, ast).forEach(a => {
    let { properties } = a
    if (!properties.target) {
      properties.target = '_blank'
    }
  })