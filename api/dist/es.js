import jsonp from 'jsonp-simple'
import regeneratorRuntime from 'regenerator-runtime'

var facebook = Object.freeze({})

var instagram = Object.freeze({})

var throwNumber = function throwNumber(total, name) {
  if (typeof total !== 'number') {
    throw new TypeError('hub option "' + name + '" must be "number"')
  }
}

var throwCallback = function throwCallback(cb) {
  if (typeof cb !== 'function') {
    throw new TypeError('hub second argument must be "function"')
  }
}

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

var Straight = (function() {
  function Straight(opts, cb) {
    classCallCheck(this, Straight)

    throwNumber(opts.total, 'total')
    throwNumber(opts.limit, 'limit')
    throwCallback(cb)

    this._done = false
    this._offset = 0

    this._lastOffset = opts.total - 1
    this._limit = opts.limit
    this._plus = opts.limit - 1
    this._cb = cb
  }

  createClass(Straight, [
    {
      key: '_isReturn',
      value: function _isReturn() {
        var acquiredOffset = this._offset + this._plus
        var lastOffset = this._lastOffset
        return acquiredOffset >= this._lastOffset
      }
    },
    {
      key: '_create',
      value: function _create() {
        var offset = this._offset
        if (this._isReturn()) {
          this._done = true
        } else {
          this._offset += this._limit
        }
        return offset
      }
    },
    {
      key: 'pass',
      value: function pass() {
        var offset = this._create()
        var value = this._cb({ offset: offset, limit: this._limit })
        return value
      }
    },
    {
      key: 'done',
      value: function done() {
        return this._done
      }
    }
  ])
  return Straight
})()

var _marked = /*#__PURE__*/ regeneratorRuntime.mark(generateFromTo)

function generateFromTo(from, to) {
  var plus
  return regeneratorRuntime.wrap(
    function generateFromTo$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            plus = 0

          case 1:
            if (!(plus < to)) {
              _context.next = 7
              break
            }

            _context.next = 4
            return from + plus

          case 4:
            plus += 1
            _context.next = 1
            break

          case 7:
          case 'end':
            return _context.stop()
        }
      }
    },
    _marked,
    this
  )
}

var Random = (function() {
  function Random(opts, cb) {
    classCallCheck(this, Random)

    throwNumber(opts.total, 'total')
    throwNumber(opts.limit, 'limit')
    throwCallback(cb)

    this._done = false
    this._store = new Set()

    this._total = opts.total
    this._lastOffset = opts.total - 1
    this._limit = opts.limit
    this._cb = cb
  }

  createClass(Random, [
    {
      key: '_value',
      value: function _value() {
        return Math.round(this._lastOffset * Math.random())
      }
    },
    {
      key: '_recursiveAdd',
      value: function _recursiveAdd(iterator) {
        var times =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0

        var _iterator$next = iterator.next(),
          value = _iterator$next.value,
          done = _iterator$next.done

        if (done || this._store.has(value) || value > this._lastOffset) {
          return times
        } else {
          this._store.add(value)
          return this._recursiveAdd(iterator, times + 1)
        }
      }
    },
    {
      key: '_isReturn',
      value: function _isReturn() {
        return this._store.size === this._total
      }
    },
    {
      key: '_create',
      value: function _create() {
        var offset = this._value()

        if (typeof offset !== 'number' || this._store.has(offset)) {
          return this._create()
        }

        var limit = this._recursiveAdd(generateFromTo(offset, this._limit))

        if (this._isReturn()) {
          this._done = true
        }

        return { offset: offset, limit: limit }
      }
    },
    {
      key: 'pass',
      value: function pass() {
        var _create2 = this._create(),
          offset = _create2.offset,
          limit = _create2.limit

        var value = this._cb({ offset: offset, limit: limit })
        return value
      }
    },
    {
      key: 'done',
      value: function done() {
        return this._done
      }
    }
  ])
  return Random
})()

var _marked$1 = /*#__PURE__*/ regeneratorRuntime.mark(loop)

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

function loop(hub) {
  var value
  return regeneratorRuntime.wrap(
    function loop$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            value = hub.pass()

            if (!hub.done()) {
              _context.next = 6
              break
            }

            return _context.abrupt('return', value)

          case 6:
            _context.next = 8
            return value

          case 8:
            _context.next = 0
            break

          case 10:
          case 'end':
            return _context.stop()
        }
      }
    },
    _marked$1,
    this
  )
}

var create = function create(hub) {
  var iterator = loop(hub)
  return handle

  function handle() {
    var _iterator$next = iterator.next(),
      value = _iterator$next.value,
      done = _iterator$next.done

    return Promise.resolve(value).then(function(res) {
      return { res: res, done: done }
    })
  }
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

var TIMEOUT = 5000
var LIMIT_V2 = 20
var LIMIT_V1 = 50
var hostV2 = function hostV2(account) {
  return 'https://api.tumblr.com/v2/blog/' + account + '.tumblr.com'
}
var hostV1 = function hostV1(account) {
  return 'https://' + account + '.tumblr.com/api/read/json'
}
var extractTotalV2 = function extractTotalV2(res) {
  return res.response.total_posts
}
var extractTotalV1 = function extractTotalV1(res) {
  return res['posts-total']
}
var fetchOpts = { mode: 'cors' }

var Posts = HoCreateV2(Straight)
var PostsRandom = HoCreateV2(Random)
var PostsV1 = HoCreateV1(Straight)
var PostsRandomV1 = HoCreateV1(Random)

var avatar = function avatar(account, size) {
  throwInvalid(account, 'account')
  return hostV2(account) + '/avatar/' + (size || 64)
}

var info = function info(account, api_key) {
  return Promise.resolve()
    .then(function() {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(function() {
      return fetchJson(hostV2(account) + '/info?api_key=' + api_key, fetchOpts)
    })
}

var posts = function posts(account, api_key, query) {
  return Promise.resolve()
    .then(function() {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(function() {
      return new Query(query, { api_key: api_key }).string()
    })
    .then(function(querystring) {
      return fetchJson(hostV2(account) + '/posts?' + querystring, fetchOpts)
    })
}

function HoCreateV2(Hub) {
  return function(_ref) {
    var account = _ref.account,
      api_key = _ref.api_key,
      query = _ref.query,
      limit = _ref.limit
    return Promise.resolve()
      .then(function() {
        throwInvalid(account, 'account')
        throwInvalid(api_key, 'api_key')
      })
      .then(function() {
        return {
          query: new Query(query, { api_key: api_key }),
          path: hostV2(account) + '/posts'
        }
      })
      .then(function(_ref2) {
        var query = _ref2.query,
          path = _ref2.path
        return fetchJson(path + '?' + query.string({ limit: 1 }))
          .then(extractTotalV2)
          .then(validTotal)
          .then(function(total) {
            return {
              opts: { total: total, limit: limit || LIMIT_V2 },
              query: query,
              path: path
            }
          })
      })
      .then(function(_ref3) {
        var opts = _ref3.opts,
          query = _ref3.query,
          path = _ref3.path
        return new Hub(opts, function(addition) {
          var querystring = query.string(addition)
          var src = path + '?' + querystring
          return fetchJson(src, fetchOpts)
        })
      })
      .then(create)
  }
}

function HoCreateV1(Hub) {
  return function(_ref4) {
    var account = _ref4.account,
      query = _ref4.query,
      limit = _ref4.limit,
      timeout = _ref4.timeout
    return Promise.resolve()
      .then(function() {
        throwInvalid(account, 'account')
      })
      .then(function() {
        return {
          query: new Query(query),
          path: hostV1(account)
        }
      })
      .then(function(_ref5) {
        var query = _ref5.query,
          path = _ref5.path
        return jsonp(path + '?' + query.string({ num: 0 }), timeout || TIMEOUT)
          .then(extractTotalV1)
          .then(validTotal)
          .then(function(total) {
            return {
              opts: { total: total, limit: limit || LIMIT_V1 },
              query: query,
              path: path
            }
          })
      })
      .then(function(_ref6) {
        var opts = _ref6.opts,
          query = _ref6.query,
          path = _ref6.path
        return new Hub(opts, function(_ref7) {
          var offset = _ref7.offset,
            limit = _ref7.limit

          var querystring = query.string({ start: offset, num: limit })
          var src = path + '?' + querystring
          return jsonp(src, timeout || TIMEOUT)
        })
      })
      .then(create)
  }
}

function throwInvalid(target, name) {
  if (!target) {
    throw new Error('lonogara-tool/api/tumblr require ' + name)
  }
  if (typeof target !== 'string') {
    throw new TypeError(
      'lonogara-tool/api/tumblr argument ' + name + ' must be "string"'
    )
  }
}

var tumblr = Object.freeze({
  Posts: Posts,
  PostsRandom: PostsRandom,
  PostsV1: PostsV1,
  PostsRandomV1: PostsRandomV1,
  avatar: avatar,
  info: info,
  posts: posts
})

var twitter = Object.freeze({})

export { facebook, instagram, tumblr, twitter }
