import generator from '../generator.js'
import { queryjoin } from '../util.js'

const { assign } = Object

const HoCreateSrc = (account, api_key, opts) => {
  const query = assign({}, opts, { api_key })
  return createSrc

  function createSrc(offset) {
    const querystring = queryjoin(assign({}, query, { offset }))
    return src(account, querystring)
  }
}

const src = (account, querystring) =>
  `https://api.tumblr.com/v2/blog/${account}.tumblr.com/posts?${querystring}`

export default class Tumblr {
  constructor(account, api_key, opts) {
    throwInvalid(account, 'account')
    throwInvalid(api_key, 'api_key')
    this._iterator = generator(HoCreateSrc(account, api_key, opts))
    this._complete = false
  }

  _init(total) {
    this._complete = true
    return this._iterator.next(total).done
  }

  _extract(res) {
    return res.response
  }

  supply() {
    const { value, done } = this._iterator.next()

    return value.then(this._extract).then(response => ({
      response,
      done: this._complete ? done : this._init(response.total_posts)
    }))
  }
}

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
