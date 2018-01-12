'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var jsonp = _interopDefault(require('jsonp-simple'))
var tiloop = require('tiloop')
var tiloop__default = _interopDefault(tiloop)

var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

var slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value)

        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return']) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }

    return _arr
  }

  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i)
    } else {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      )
    }
  }
})()

//

var fetchJson = function fetchJson(url, opts) {
  return window.fetch(url, opts).then(function(res) {
    return res.json()
  })
}

var validTotal = function validTotal(total) {
  if (typeof total !== 'number') {
    throw new Error('')
  }
  return total
}

var queryjoin = function queryjoin(query) {
  return Object.entries(query)
    .map(function(_ref) {
      var _ref2 = slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1]

      return key + '=' + value
    })
    .join('&')
}

var Query = (function() {
  function Query() {
    classCallCheck(this, Query)

    for (
      var _len = arguments.length, prequery = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      prequery[_key] = arguments[_key]
    }

    this.prequery = Object.assign.apply(Object, [{}].concat(prequery))
  }

  createClass(Query, [
    {
      key: 'string',
      value: function string(addition) {
        var query = Object.assign({}, this.prequery, addition)
        return queryjoin(query)
      }
    }
  ])
  return Query
})()

var iteratorToAsyncFn = function iteratorToAsyncFn(iterator) {
  return function() {
    var _iterator$next = iterator.next(),
      value = _iterator$next.value,
      done = _iterator$next.done

    return Promise.resolve(value).then(function(res) {
      return { res: res, done: done }
    })
  }
}

var TIMEOUT = 5000
var LIMIT_V2 = 20
var LIMIT_V1 = 50
var origin = 'https://api.tumblr.com'
var hrefV2 = function hrefV2(account, proxy) {
  return (proxy || origin) + '/v2/blog/' + account + '.tumblr.com'
}
var hrefV1 = function hrefV1(account) {
  return 'https://' + account + '.tumblr.com/api/read/json'
}
var extractTotalV2 = function extractTotalV2(res) {
  return res.response.total_posts
}
var extractTotalV1 = function extractTotalV1(res) {
  return res['posts-total']
}

var tumblrAvatar = function tumblrAvatar(account, size) {
  validAccount(account)
  return hrefV2(account) + '/avatar/' + (size || 64)
}

var tumblrInfo = function tumblrInfo(account, _ref) {
  var api_key = _ref.api_key,
    proxy = _ref.proxy,
    init = _ref.init
  return Promise.resolve()
    .then(function() {
      return validAccount(account)
    })
    .then(function() {
      return new Query(api_key && { api_key: api_key }).string()
    })
    .then(function(querystring) {
      return fetchJson(hrefV2(account, proxy) + '/info?' + querystring, init)
    })
}

var tumblrPosts = function tumblrPosts(account, _ref2) {
  var query = _ref2.query,
    proxy = _ref2.proxy,
    init = _ref2.init
  return Promise.resolve()
    .then(function() {
      return validAccount(account)
    })
    .then(function() {
      return new Query(query).string()
    })
    .then(function(querystring) {
      return fetchJson(hrefV2(account, proxy) + '/posts?' + querystring, init)
    })
}

var TumblrPosts = HoHoV2(tiloop.IndexesZero)

var TumblrPostsRandom = HoHoV2(tiloop.IndexesRandom)

var TumblrPostsV1 = HoHoV1(tiloop.IndexesZero)

var TumblrPostsRandomV1 = HoHoV1(tiloop.IndexesRandom)

function HoHoV2(Indexes) {
  var HoV2 = function HoV2(account, _ref3) {
    var query = _ref3.query,
      limit = _ref3.limit,
      proxy = _ref3.proxy,
      init = _ref3.init
    return Promise.resolve()
      .then(function() {
        return validAccount(account)
      })
      .then(function() {
        return {
          query: new Query(query),
          path: hrefV2(account, proxy) + '/posts'
        }
      })
      .then(function(_ref4) {
        var query = _ref4.query,
          path = _ref4.path
        return fetchJson(path + '?' + query.string({ limit: 1 }))
          .then(extractTotalV2)
          .then(validTotal)
          .then(function(total) {
            return { total: total, query: query, path: path }
          })
      })
      .then(function(_ref5) {
        var total = _ref5.total,
          query = _ref5.query,
          path = _ref5.path

        var iterator = tiloop__default(
          new Indexes({
            length: total,
            maxIncrement: limit || LIMIT_V2
          }),
          function(array) {
            var querystring = query.string({
              offset: array[0],
              limit: array.length
            })
            return fetchJson(path + '?' + querystring, init)
          }
        )

        return iteratorToAsyncFn(iterator)
      })
  }

  return HoV2
}

function HoHoV1(Indexes) {
  var HoV1 = function HoV1(account, _ref6) {
    var query = _ref6.query,
      limit = _ref6.limit,
      timeout = _ref6.timeout
    return Promise.resolve()
      .then(function() {
        return validAccount(account)
      })
      .then(function() {
        return {
          query: new Query(query),
          path: hrefV1(account)
        }
      })
      .then(function(_ref7) {
        var query = _ref7.query,
          path = _ref7.path
        return jsonp(path + '?' + query.string({ num: 0 }), timeout || TIMEOUT)
          .then(extractTotalV1)
          .then(validTotal)
          .then(function(total) {
            return { total: total, query: query, path: path }
          })
      })
      .then(function(_ref8) {
        var total = _ref8.total,
          query = _ref8.query,
          path = _ref8.path

        var iterator = tiloop__default(
          new Indexes({
            length: total,
            maxIncrement: limit || LIMIT_V1
          }),
          function(array) {
            var querystring = query.string({
              start: array[0],
              num: array.length
            })
            return jsonp(path + '?' + querystring, timeout || TIMEOUT)
          }
        )

        return iteratorToAsyncFn(iterator)
      })
  }

  return HoV1
}

function validAccount(target) {
  if (!target) {
    throw new Error('lonogara-tool/api/tumblr require account')
  }

  if (typeof target !== 'string') {
    throw new TypeError(
      'lonogara-tool/api/tumblr argument account must be "string"'
    )
  }
}

exports.tumblrAvatar = tumblrAvatar
exports.tumblrInfo = tumblrInfo
exports.tumblrPosts = tumblrPosts
exports.TumblrPosts = TumblrPosts
exports.TumblrPostsRandom = TumblrPostsRandom
exports.TumblrPostsV1 = TumblrPostsV1
exports.TumblrPostsRandomV1 = TumblrPostsRandomV1
