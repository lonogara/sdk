import jsonp from 'jsonp-simple'
import { Straight, Random } from './.hub'
import { Query, create, fetchJson, validTotal } from './.util'

const LIMIT = 5000

const hostV2 = account => `https://api.tumblr.com/v2/blog/${account}.tumblr.com`
const hostV1 = account => `https://${account}.tumblr.com/api/read/json`
const extractTotalV2 = res => res.response.total_posts
const extractTotalV1 = res => res['posts-total']

export const Posts = HoCreateV2(Straight)

export const PostsRandom = HoCreateV2(Random)

export const PostsV1 = HoCreateV1(Straight, { limit: 50 })

export const PostsRandomV1 = HoCreateV1(Random, { limit: 50 })

export const avatar = (account, size) => {
  throwInvalid(account, 'account')
  return `${hostV2(account)}/avatar/${size || 64}`
}

export const info = (account, api_key) =>
  Promise.resolve()
    .then(() => {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(() => fetchJson(`${hostV2(account)}/info?api_key=${api_key}`))

export const posts = (account, api_key, opts) =>
  Promise.resolve()
    .then(() => {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(() => new Query(opts, { api_key }).string())
    .then(querystring => fetchJson(`${hostV2(account)}/posts?${querystring}`))

const throwInvalid = (target, name) => {
  if (!target) {
    throw new Error(`supplier.Tumblr require ${name}`)
  }
  if (typeof target !== 'string') {
    throw new TypeError(`supplier.Tumblr argument ${name} must be "string"`)
  }
}

function HoCreateV2(Hub) {
  return Create

  function Create(account, api_key, opts) {
    return Promise.resolve()
      .then(() => {
        throwInvalid(account, 'account')
        throwInvalid(api_key, 'api_key')
      })
      .then(() => ({
        query: new Query(opts, { api_key }),
        path: `${hostV2(account)}/posts`
      }))
      .then(({ query, path }) =>
        fetchJson(`${path}?${query.string({ limit: 1 })}`)
          .then(extractTotalV2)
          .then(validTotal)
          .then(total => ({ total, query, path }))
      )
      .then(
        ({ total, query, path }) =>
          new Hub(total, addition => {
            const querystring = query.string(addition)
            const src = `${path}?${querystring}`
            return fetchJson(src)
          })
      )
      .then(create)
  }
}

function HoCreateV1(Hub, hubopts) {
  return Create

  function Create(account, opts) {
    return Promise.resolve()
      .then(() => {
        throwInvalid(account, 'account')
      })
      .then(() => ({
        query: new Query(opts),
        path: hostV1(account)
      }))
      .then(({ query, path }) =>
        jsonp(`${path}?${query.string({ num: 0 })}`, LIMIT)
          .then(extractTotalV1)
          .then(validTotal)
          .then(total => ({ total, query, path }))
      )
      .then(
        ({ total, query, path }) =>
          new Hub(
            total,
            ({ offset, limit }) => {
              const querystring = query.string({ start: offset, num: limit })
              const src = `${path}?${querystring}`
              return jsonp(src, LIMIT)
            },
            hubopts
          )
      )
      .then(create)
  }
}
