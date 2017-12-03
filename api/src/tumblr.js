import jsonp from 'jsonp-simple'
import { Straight, Random } from './.hub'
import { Query, create, fetchJson, validTotal } from './.util'

const TIMEOUT = 5000
const LIMIT_V2 = 20
const LIMIT_V1 = 50
const hostV2 = account => `https://api.tumblr.com/v2/blog/${account}.tumblr.com`
const hostV1 = account => `https://${account}.tumblr.com/api/read/json`
const extractTotalV2 = res => res.response.total_posts
const extractTotalV1 = res => res['posts-total']

export const Posts = HoCreateV2(Straight)
export const PostsRandom = HoCreateV2(Random)
export const PostsV1 = HoCreateV1(Straight)
export const PostsRandomV1 = HoCreateV1(Random)

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

export const posts = (account, api_key, query) =>
  Promise.resolve()
    .then(() => {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(() => new Query(query, { api_key }).string())
    .then(querystring => fetchJson(`${hostV2(account)}/posts?${querystring}`))

function HoCreateV2(Hub) {
  return ({ account, api_key, query, limit }) =>
    Promise.resolve()
      .then(() => {
        throwInvalid(account, 'account')
        throwInvalid(api_key, 'api_key')
      })
      .then(() => ({
        query: new Query(query, { api_key }),
        path: `${hostV2(account)}/posts`
      }))
      .then(({ query, path }) =>
        fetchJson(`${path}?${query.string({ limit: 1 })}`)
          .then(extractTotalV2)
          .then(validTotal)
          .then(total => ({
            opts: { total, limit: limit || LIMIT_V2 },
            query,
            path
          }))
      )
      .then(
        ({ opts, query, path }) =>
          new Hub(opts, addition => {
            const querystring = query.string(addition)
            const src = `${path}?${querystring}`
            return fetchJson(src)
          })
      )
      .then(create)
}

function HoCreateV1(Hub) {
  return ({ account, query, limit, timeout }) =>
    Promise.resolve()
      .then(() => {
        throwInvalid(account, 'account')
      })
      .then(() => ({
        query: new Query(query),
        path: hostV1(account)
      }))
      .then(({ query, path }) =>
        jsonp(`${path}?${query.string({ num: 0 })}`, timeout || TIMEOUT)
          .then(extractTotalV1)
          .then(validTotal)
          .then(total => ({
            opts: { total, limit: limit || LIMIT_V1 },
            query,
            path
          }))
      )
      .then(
        ({ opts, query, path }) =>
          new Hub(opts, ({ offset, limit }) => {
            const querystring = query.string({ start: offset, num: limit })
            const src = `${path}?${querystring}`
            return jsonp(src, timeout || TIMEOUT)
          })
      )
      .then(create)
}

function throwInvalid(target, name) {
  if (!target) {
    throw new Error(`ligure-tool/api/tumblr require ${name}`)
  }
  if (typeof target !== 'string') {
    throw new TypeError(
      `ligure-tool/api/tumblr argument ${name} must be "string"`
    )
  }
}
