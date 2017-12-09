import { selectAll } from 'hast-util-select'

export default () => ast =>
  selectAll(`[align]`, ast).forEach(node => {
    let { properties } = node,
      { align } = properties

    properties.style = properties.style
      ? `${properties.style};text-align:${align}`
      : `text-align:${align}`

    delete properties.align
  })
