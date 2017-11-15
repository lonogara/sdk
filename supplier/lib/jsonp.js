'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _promise = require('babel-runtime/core-js/promise')

var _promise2 = _interopRequireDefault(_promise)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var createGlobalName = function createGlobalName() {
  var random = Math.floor(Math.random() * 10000 + 1)
  var name = 'jsonp_callback_' + random
  return window[name] ? createGlobalName() : name
}

var createScript = function createScript(src) {
  var script = document.createElement('script')
  script.src = src
  return script
}

var createClean = function createClean(_ref) {
  var script = _ref.script,
    globalName = _ref.globalName,
    resolve = _ref.resolve,
    reject = _ref.reject

  return { succeed: succeed, fail: fail }

  function succeed(res) {
    resolve(res)
    rm()
  }
  function fail(parseError) {
    reject(parseError)
    rm()
  }
  function rm() {
    removeScript(script)
    deleteGlobalName(globalName)
  }
}

var appendScript = function appendScript(script) {
  return document.head.appendChild(script)
}
var removeScript = function removeScript(script) {
  return document.head.removeChild(script)
}
var deleteGlobalName = function deleteGlobalName(globalName) {
  delete window[globalName]
}

exports.default = function(src) {
  var limit =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000
  return new _promise2.default(function(resolve, reject) {
    var globalName = createGlobalName()
    var script = createScript(src + '&callback=' + globalName)

    var _createClean = createClean({
        script: script,
        globalName: globalName,
        resolve: resolve,
        reject: reject
      }),
      succeed = _createClean.succeed,
      fail = _createClean.fail

    var timeout = setTimeout(function() {
      return fail(true)
    }, limit)

    script.onerror = function() {
      clearTimeout(timeout)
      fail()
    }

    window[globalName] = function(res) {
      clearTimeout(timeout)
      succeed(res)
    }

    appendScript(script)
  })
}
