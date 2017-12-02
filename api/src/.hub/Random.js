import regeneratorRuntime from 'regenerator-runtime'
import { throwTotal, throwCallback } from './common.js'

function* generateFromTo(from, to) {
  let plus = 0
  while (plus < to) {
    yield from + plus
    plus += 1
  }
}

export default class Random {
  constructor(total, cb, opts = {}) {
    throwTotal(total)
    throwCallback(cb)

    this._done = false
    this._store = new Set()

    this._total = total
    this._lastOffset = total - 1
    this._cb = cb

    this._limit = opts.limit || 20
  }

  _value() {
    return Math.round(this._lastOffset * Math.random())
  }

  _recursiveAdd(iterator, times = 0) {
    const { value, done } = iterator.next()
    if (done || this._store.has(value) || value > this._lastOffset) {
      return times
    } else {
      this._store.add(value)
      return this._recursiveAdd(iterator, times + 1)
    }
  }

  _isReturn() {
    return this._store.size === this._total
  }

  _create() {
    const offset = this._value()

    if (typeof offset !== 'number' || this._store.has(offset)) {
      return this._create()
    }

    const limit = this._recursiveAdd(generateFromTo(offset, this._limit))

    if (this._isReturn()) {
      this._done = true
    }

    return { offset, limit }
  }

  pass() {
    const { offset, limit } = this._create()
    const value = this._cb({ offset, limit })
    return value
  }

  done() {
    return this._done
  }
}
