import jsonp from '../jsonp.js'

const src = (account, query) =>
  `https://api.tumblr.com/v2/blog/${account}.tumblr.com/posts?${qs(query)}`

const qs = query =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

export default class Tumblr {
  constructor(account, api_key, opts) {
    this.incomplete = true
    this.iterator = generate(account, api_key, opts)
  }

  supply() {
    const result = this.iterator.next()
    return result.value().then(res => ({
      res,
      done: this.incomplete ? this._full(res.total_posts) : result.done
    }))
  }

  _full(total_posts) {
    this.incomplete = false
    return this.iterator.next(total_posts).done
  }
}

function* generate(account, api_key, opts) {
  const query = Object.assign(opts || {}, { api_key, offset: 0 })

  const total = yield jsonp(src(account, query))
  if (total < 20) return total
  yield total
  query.offset += 20

  while (query.offset < total) {
    if (query.offset + 20 > total - 1) {
      return jsonp(src(account, query))
    } else {
      yield jsonp(src(account, query))
    }
    query.offset += 20
  }
}
