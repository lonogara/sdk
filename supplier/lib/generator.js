'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _regenerator = require('babel-runtime/regenerator')

var _regenerator2 = _interopRequireDefault(_regenerator)

exports.default = g

var _jsonp = require('./jsonp.js')

var _jsonp2 = _interopRequireDefault(_jsonp)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _marked = /*#__PURE__*/ _regenerator2.default.mark(g)

var isThrow = function isThrow(target) {
  return typeof target !== 'number'
}
var message = 'total is required as "number"'

var isReturn = function isReturn(offset, total) {
  var nowMaxOffset = offset + 19
  var lastOffset = total - 1
  return nowMaxOffset >= lastOffset
}

function g(createSrc) {
  var offset, firstSrc, total, src
  return _regenerator2.default.wrap(
    function g$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            offset = 0
            firstSrc = createSrc(offset)
            _context.next = 4
            return (0, _jsonp2.default)(firstSrc)

          case 4:
            total = _context.sent

            if (!isThrow(total)) {
              _context.next = 7
              break
            }

            throw new Error(message)

          case 7:
            if (!isReturn(offset, total)) {
              _context.next = 9
              break
            }

            return _context.abrupt('return')

          case 9:
            _context.next = 11
            return

          case 11:
            offset += 20

          case 12:
            src = createSrc(offset)

            if (!isReturn(offset, total)) {
              _context.next = 15
              break
            }

            return _context.abrupt('return', (0, _jsonp2.default)(src))

          case 15:
            _context.next = 17
            return (0, _jsonp2.default)(src)

          case 17:
            offset += 20

          case 18:
            if (true) {
              _context.next = 12
              break
            }

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
