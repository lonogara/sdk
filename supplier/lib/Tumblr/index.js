'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray')

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2)

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require('babel-runtime/helpers/createClass')

var _createClass3 = _interopRequireDefault(_createClass2)

var _entries = require('babel-runtime/core-js/object/entries')

var _entries2 = _interopRequireDefault(_entries)

var _assign = require('babel-runtime/core-js/object/assign')

var _assign2 = _interopRequireDefault(_assign)

var _generator = require('../generator.js')

var _generator2 = _interopRequireDefault(_generator)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var assign = _assign2.default,
  entries = _entries2.default

var throwInvalid = function throwInvalid(target, targetName) {
  if (!target) {
    throw new Error('supplier.Tumblr require ' + targetName)
  }
  if (typeof target !== 'string') {
    throw new TypeError(
      'supplier.Tumblr argument ' + targetName + ' must be "string"'
    )
  }
}

var Tumblr = (function() {
  function Tumblr(account, api_key, opts) {
    ;(0, _classCallCheck3.default)(this, Tumblr)

    throwInvalid(account, 'account')
    throwInvalid(api_key, 'api_key')
    this._iterator = (0, _generator2.default)(
      HoCreateSrc(account, api_key, opts)
    )
    this._complete = false
  }

  ;(0, _createClass3.default)(Tumblr, [
    {
      key: '_init',
      value: function _init(total_posts) {
        this._complete = true
        return this._iterator.next(total_posts).done
      }
    },
    {
      key: 'supply',
      value: function supply() {
        var _this = this

        var result = this._iterator.next()
        return result.value.then(function(_ref) {
          var response = _ref.response

          var done = _this._complete
            ? result.done
            : _this._init(response.total_posts)

          return { response: response, done: done }
        })
      }
    }
  ])
  return Tumblr
})()

exports.default = Tumblr

var HoCreateSrc = function HoCreateSrc(account, api_key, opts) {
  var query = assign({}, opts, { api_key: api_key })
  return createSrc

  function createSrc(offset) {
    var querystring = queryjoin(assign({}, query, { offset: offset }))
    return src(account, querystring)
  }
}

var queryjoin = function queryjoin(query) {
  return entries(query)
    .map(function(_ref2) {
      var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1]

      return key + '=' + value
    })
    .join('&')
}

var src = function src(account, querystring) {
  return (
    'https://api.tumblr.com/v2/blog/' +
    account +
    '.tumblr.com/posts?' +
    querystring
  )
}
