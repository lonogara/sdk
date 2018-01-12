// @flow

export const fetchJson = (url, opts) =>
  window.fetch(url, opts).then(res => res.json())

export const validTotal = total => {
  if (typeof total !== 'number') {
    throw new Error(``)
  }
  return total
}

const queryjoin = query =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

export class Query {
  constructor(...prequery) {
    this.prequery = Object.assign({}, ...prequery)
  }

  string(addition) {
    const query = Object.assign({}, this.prequery, addition)
    return queryjoin(query)
  }
}

export const iteratorToAsyncFn = iterator => () => {
  const { value, done } = iterator.next()
  return Promise.resolve(value).then(res => ({ res, done }))
}
