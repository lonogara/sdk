import jsonp from 'jsonp-simple'
import tiloop, { IndexesZero, IndexesRandom } from 'tiloop'
import { fetchJson, validTotal, Query, iteratorToAsyncFn } from './util.js'

const TIMEOUT = 5000
const LIMIT_V2 = 20
const LIMIT_V1 = 50
const originV2 = 'https://api.tumblr.com'
const hrefV2 = (account, proxy) =>
  `${proxy || originV2}/v2/blog/${account}.tumblr.com`
const hrefV1 = account => `https://${account}.tumblr.com/api/read/json`
const extractTotalV2 = res => res.response.total_posts
const extractTotalV1 = res => res['posts-total']
const fetchOpts = { mode: 'cors' }

export const tumblrAvatar = (account, size) => {
  throwStringData(account, 'account')
  return `${hrefV2(account)}/avatar/${size || 64}`
}

export const tumblrInfo = (account, api_key, proxy) =>
  Promise.resolve()
    .then(() => {
      throwStringData(account, 'account')
      throwStringData(api_key, 'api_key')
    })
    .then(() =>
      fetchJson(`${hrefV2(account, proxy)}/info?api_key=${api_key}`, fetchOpts)
    )

export const tumblrPosts = (account, api_key, query, proxy) =>
  Promise.resolve()
    .then(() => {
      throwStringData(account, 'account')
      throwStringData(api_key, 'api_key')
    })
    .then(() => new Query(query, { api_key }).string())
    .then(querystring =>
      fetchJson(`${hrefV2(account, proxy)}/posts?${querystring}`, fetchOpts)
    )

export const TumblrPosts = HoHoV2(IndexesZero)

export const TumblrPostsRandom = HoHoV2(IndexesRandom)

export const TumblrPostsV1 = HoHoV1(IndexesZero)

export const TumblrPostsRandomV1 = HoHoV1(IndexesRandom)

function HoHoV2(Indexes) {
  const HoV2 = ({ account, api_key, query, limit, proxy }) =>
    Promise.resolve()
      .then(() => {
        throwStringData(account, 'account')
        throwStringData(api_key, 'api_key')
      })
      .then(() => ({
        query: new Query(query, { api_key }),
        path: `${hrefV2(account, proxy)}/posts`
      }))
      .then(({ query, path }) =>
        fetchJson(`${path}?${query.string({ limit: 1 })}`)
          .then(extractTotalV2)
          .then(validTotal)
          .then(total => ({ total, query, path }))
      )
      .then(({ total, query, path }) => {
        const iterator = tiloop(
          new Indexes({
            length: total,
            maxIncrement: limit || LIMIT_V2
          }),
          array => {
            const querystring = query.string({
              offset: array[0],
              limit: array.length
            })
            return fetchJson(`${path}?${querystring}`, fetchOpts)
          }
        )

        return iteratorToAsyncFn(iterator)
      })

  return HoV2
}

function HoHoV1(Indexes) {
  const HoV1 = ({ account, query, limit, timeout }) =>
    Promise.resolve()
      .then(() => {
        throwStringData(account, 'account')
      })
      .then(() => ({
        query: new Query(query),
        path: hrefV1(account)
      }))
      .then(({ query, path }) =>
        jsonp(`${path}?${query.string({ num: 0 })}`, timeout || TIMEOUT)
          .then(extractTotalV1)
          .then(validTotal)
          .then(total => ({ total, query, path }))
      )
      .then(({ total, query, path }) => {
        const iterator = tiloop(
          new Indexes({
            length: total,
            maxIncrement: limit || LIMIT_V1
          }),
          array => {
            const querystring = query.string({
              start: array[0],
              num: array.length
            })
            return jsonp(`${path}?${querystring}`, timeout || TIMEOUT)
          }
        )

        return iteratorToAsyncFn(iterator)
      })

  return HoV1
}

function throwStringData(target, name) {
  if (!target) {
    throw new Error(`lonogara-tool/api/tumblr require ${name}`)
  }

  if (typeof target !== 'string') {
    throw new TypeError(
      `lonogara-tool/api/tumblr argument ${name} must be "string"`
    )
  }
}
