import hastUtilSelect from 'hast-util-select'
const { selectAll } = hastUtilSelect

export default () => ast =>
  selectAll(`a`, ast).forEach(a => {
    let { properties } = a
    if (!properties.target) {
      properties.target = '_blank'
    }
  })
