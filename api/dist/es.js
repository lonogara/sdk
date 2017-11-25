import jsonp from '../../node_modules/jsonp-simple/dist/index.js'
import regeneratorRuntime from '../../node_modules/regenerator-runtime/runtime-module.js'

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

var _marked = /*#__PURE__*/ regeneratorRuntime.mark(loop)

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
    _marked,
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

var throwTotal = function throwTotal(total) {
  if (typeof total !== 'number') {
    throw new TypeError('hub first argument must be "number"')
  }
}

var throwCallback = function throwCallback(cb) {
  if (typeof cb !== 'function') {
    throw new TypeError('hub second argument must be "function"')
  }
}

var Straight = (function() {
  function Straight(total, cb) {
    var opts =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
    classCallCheck(this, Straight)

    throwTotal(total)
    throwCallback(cb)

    this._done = false
    this._offset = 0

    this._lastOffset = total - 1
    this._cb = cb

    var limit = opts.limit || 20
    this._limit = limit
    this._plus = limit - 1
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

var _marked$1 = /*#__PURE__*/ regeneratorRuntime.mark(twentyGenerator)

function twentyGenerator(offset) {
  var plus
  return regeneratorRuntime.wrap(
    function twentyGenerator$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            plus = 0

          case 1:
            if (!(plus < 20)) {
              _context.next = 7
              break
            }

            _context.next = 4
            return offset + plus

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
    _marked$1,
    this
  )
}

var Random = (function() {
  function Random(total, cb) {
    classCallCheck(this, Random)

    throwTotal(total)
    throwCallback(cb)

    this._done = false
    this._store = new Set()

    this._total = total
    this._lastOffset = total - 1
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

        var limit = this._recursiveAdd(twentyGenerator(offset))

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

var avatar = function avatar(account, size) {
  throwInvalid(account, 'account')
  return host(account) + '/avatar/' + (size || 64)
}

var info = function info(account, api_key) {
  return Promise.resolve()
    .then(function() {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(function() {
      return jsonp(host(account) + '/info?api_key=' + api_key)
    })
}

var posts = function posts(account, api_key, opts) {
  return Promise.resolve()
    .then(function() {
      throwInvalid(account, 'account')
      throwInvalid(api_key, 'api_key')
    })
    .then(function() {
      return new Query(opts, { api_key: api_key }).string()
    })
    .then(function(querystring) {
      return jsonp(host(account) + '/posts?' + querystring)
    })
}

var Posts = HoCreate(Straight)

var PostsRandom = HoCreate(Random)

var throwInvalid = function throwInvalid(target, name) {
  if (!target) {
    throw new Error('supplier.Tumblr require ' + name)
  }
  if (typeof target !== 'string') {
    throw new TypeError(
      'supplier.Tumblr argument ' + name + ' must be "string"'
    )
  }
}

var host = function host(account) {
  return 'https://api.tumblr.com/v2/blog/' + account + '.tumblr.com'
}

var extractTotal = function extractTotal(res) {
  return res.response.total_posts
}

var validTotal = function validTotal(total) {
  if (typeof total !== 'number') {
    throw new Error('')
  }
  return total
}

function HoCreate(Hub) {
  return Create

  function Create(account, api_key, opts) {
    return Promise.resolve()
      .then(function() {
        throwInvalid(account, 'account')
        throwInvalid(api_key, 'api_key')
      })
      .then(function() {
        return {
          query: new Query(opts, { api_key: api_key }),
          path: host(account) + '/posts'
        }
      })
      .then(function(_ref) {
        var query = _ref.query,
          path = _ref.path
        return jsonp(path + '?' + query.string({ limit: 1 }))
          .then(extractTotal)
          .then(validTotal)
          .then(function(total) {
            return { total: total, query: query, path: path }
          })
      })
      .then(function(_ref2) {
        var total = _ref2.total,
          query = _ref2.query,
          path = _ref2.path
        return new Hub(total, function(addition) {
          var querystring = query.string(addition)
          var src = path + '?' + querystring
          return jsonp(src)
        })
      })
      .then(create)
  }
}

var index = Object.freeze({
  avatar: avatar,
  info: info,
  posts: posts,
  Posts: Posts,
  PostsRandom: PostsRandom
})

export { index as tumblr }
