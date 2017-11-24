export const throwTotal = total => {
  if (typeof total !== 'number') {
    throw new TypeError(`hub first argument must be "number"`)
  }
}

export const throwCallback = cb => {
  if (typeof cb !== 'function') {
    throw new TypeError(`hub second argument must be "function"`)
  }
}
