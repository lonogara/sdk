import { selectAll } from 'hast-util-select'

export default () => ast =>
  selectAll(`a`, ast).forEach(a => {
    let { properties } = a
    if (!properties.target) {
      properties.target = '_blank'
    }
  })
