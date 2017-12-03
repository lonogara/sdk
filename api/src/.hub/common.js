export const throwNumber = (total, name) => {
  if (typeof total !== 'number') {
    throw new TypeError(`hub option "${name}" must be "number"`)
  }
}

export const throwCallback = cb => {
  if (typeof cb !== 'function') {
    throw new TypeError(`hub second argument must be "function"`)
  }
}
