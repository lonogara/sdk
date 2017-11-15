// @flow
export const transform = (obj = {}) =>
  Object.entries(obj)
    .map(([fnName, val]) => `${fnName}(${val})`)
    .join(` `)

export const getRange = (n: number) => [...Array(n).keys()]
