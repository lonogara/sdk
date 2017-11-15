'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _regenerator = require('babel-runtime/regenerator')

var _regenerator2 = _interopRequireDefault(_regenerator)

var _assign = require('babel-runtime/core-js/object/assign')

var _assign2 = _interopRequireDefault(_assign)

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require('babel-runtime/helpers/createClass')

var _createClass3 = _interopRequireDefault(_createClass2)

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray')

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2)

var _entries = require('babel-runtime/core-js/object/entries')

var _entries2 = _interopRequireDefault(_entries)

var _jsonp = require('../jsonp.js')

var _jsonp2 = _interopRequireDefault(_jsonp)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _marked = /*#__PURE__*/ _regenerator2.default.mark(generate)

var src = function src(account, query) {
  return (
    'https://api.tumblr.com/v2/blog/' +
    account +
    '.tumblr.com/posts?' +
    qs(query)
  )
}

var qs = function qs(query) {
  return (0, _entries2.default)(query)
    .map(function(_ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1]

      return key + '=' + value
    })
    .join('&')
}

var Tumblr = (function() {
  function Tumblr(account, api_key, opts) {
    ;(0, _classCallCheck3.default)(this, Tumblr)

    this.incomplete = true
    this.iterator = generate(account, api_key, opts)
  }

  ;(0, _createClass3.default)(Tumblr, [
    {
      key: 'supply',
      value: function supply() {
        var _this = this

        var result = this.iterator.next()
        return result.value().then(function(res) {
          return {
            res: res,
            done: _this.incomplete ? _this._full(res.total_posts) : result.done
          }
        })
      }
    },
    {
      key: '_full',
      value: function _full(total_posts) {
        this.incomplete = false
        return this.iterator.next(total_posts).done
      }
    }
  ])
  return Tumblr
})()

exports.default = Tumblr

function generate(account, api_key, opts) {
  var query, total
  return _regenerator2.default.wrap(
    function generate$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            query = (0, _assign2.default)(opts || {}, {
              api_key: api_key,
              offset: 0
            })
            _context.next = 3
            return (0, _jsonp2.default)(src(account, query))

          case 3:
            total = _context.sent

            if (!(total < 20)) {
              _context.next = 6
              break
            }

            return _context.abrupt('return', total)

          case 6:
            _context.next = 8
            return total

          case 8:
            query.offset += 20

          case 9:
            if (!(query.offset < total)) {
              _context.next = 19
              break
            }

            if (!(query.offset + 20 > total - 1)) {
              _context.next = 14
              break
            }

            return _context.abrupt(
              'return',
              (0, _jsonp2.default)(src(account, query))
            )

          case 14:
            _context.next = 16
            return (0, _jsonp2.default)(src(account, query))

          case 16:
            query.offset += 20
            _context.next = 9
            break

          case 19:
          case 'end':
            return _context.stop()
        }
      }
    },
    _marked,
    this
  )
}
