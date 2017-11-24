import jsonp from 'jsonp-simple'
import { Query, create } from '../.util'
import { Straight, Random } from '../.hub'

export const avatar = (account, size) => {
  throwInvalid(account, 'account')
  return `${host(account)}/avatar/${size || 64}`
}

export const info = (account, api_key) =>
  Promise.resolve()
    .then(() => {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(() => jsonp(`${host(account)}/info?api_key=${api_key}`))

export const posts = (account, api_key, opts) =>
  Promise.resolve()
    .then(() => {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(() => new Query(opts, { api_key }).string())
    .then(querystring => jsonp(`${host(account)}/posts?${querystring}`))

export const Posts = HoCreate(Straight)

export const PostsRandom = HoCreate(Random)

const throwInvalid = (target, name) => {
  if (!target) {
    throw new Error(`supplier.Tumblr require ${name}`)
  }
  if (typeof target !== 'string') {
    throw new TypeError(`supplier.Tumblr argument ${name} must be "string"`)
  }
}

const host = account => `https://api.tumblr.com/v2/blog/${account}.tumblr.com`

const extractTotal = res => res.response.total_posts

const validTotal = total => {
  if (typeof total !== 'number') {
    throw new Error(``)
  }
  return total
}

function HoCreate(Hub) {
  return Create

  function Create(account, api_key, opts) {
    return Promise.resolve()
      .then(() => {
        throwInvalid(account, 'account')
        throwInvalid(api_key, 'api_key')
      })
      .then(() => ({
        query: new Query(opts, { api_key }),
        path: `${host(account)}/posts`
      }))
      .then(({ query, path }) =>
        jsonp(`${path}?${query.string({ limit: 1 })}`)
          .then(extractTotal)
          .then(validTotal)
          .then(total => ({ total, query, path }))
      )
      .then(
        ({ total, query, path }) =>
          new Hub(total, addition => {
            const querystring = query.string(addition)
            const src = `${path}?${querystring}`
            return jsonp(src)
          })
      )
      .then(create)
  }
}
