import generator from '../generator.js'
const { assign, entries } = Object

const throwInvalid = (target, targetName) => {
  if (!target) {
    throw new Error(`supplier.Tumblr require ${targetName}`)
  }
  if (typeof target !== 'string') {
    throw new TypeError(
      `supplier.Tumblr argument ${targetName} must be "string"`
    )
  }
}

export default class Tumblr {
  constructor(account, api_key, opts) {
    throwInvalid(account, 'account')
    throwInvalid(api_key, 'api_key')
    this._iterator = generator(HoCreateSrc(account, api_key, opts))
    this._complete = false
  }

  _init(total_posts) {
    this._complete = true
    return this._iterator.next(total_posts).done
  }

  supply() {
    const result = this._iterator.next()
    return result.value.then(({ response }) => {
      const done = this._complete
        ? result.done
        : this._init(response.total_posts)

      return { response, done }
    })
  }
}

const HoCreateSrc = (account, api_key, opts) => {
  const query = assign({}, opts, { api_key })
  return createSrc

  function createSrc(offset) {
    const querystring = queryjoin(assign({}, query, { offset }))
    return src(account, querystring)
  }
}

const queryjoin = query =>
  entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

const src = (account, querystring) =>
  `https://api.tumblr.com/v2/blog/${account}.tumblr.com/posts?${querystring}`
