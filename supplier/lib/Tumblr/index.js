'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require('babel-runtime/helpers/createClass')

var _createClass3 = _interopRequireDefault(_createClass2)

var _assign = require('babel-runtime/core-js/object/assign')

var _assign2 = _interopRequireDefault(_assign)

var _generator = require('../generator.js')

var _generator2 = _interopRequireDefault(_generator)

var _util = require('../util.js')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var assign = _assign2.default

var HoCreateSrc = function HoCreateSrc(account, api_key, opts) {
  var query = assign({}, opts, { api_key: api_key })
  return createSrc

  function createSrc(offset) {
    var querystring = (0, _util.queryjoin)(
      assign({}, query, { offset: offset })
    )
    return src(account, querystring)
  }
}

var src = function src(account, querystring) {
  return (
    'https://api.tumblr.com/v2/blog/' +
    account +
    '.tumblr.com/posts?' +
    querystring
  )
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
      value: function _init(total) {
        this._complete = true
        return this._iterator.next(total).done
      }
    },
    {
      key: '_extract',
      value: function _extract(res) {
        return res.response
      }
    },
    {
      key: 'supply',
      value: function supply() {
        var _this = this

        var _iterator$next = this._iterator.next(),
          value = _iterator$next.value,
          done = _iterator$next.done

        return value.then(this._extract).then(function(response) {
          return {
            response: response,
            done: _this._complete ? done : _this._init(response.total_posts)
          }
        })
      }
    }
  ])
  return Tumblr
})()

exports.default = Tumblr

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
