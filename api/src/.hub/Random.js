import regeneratorRuntime from 'regenerator-runtime'
import { throwTotal, throwCallback } from './common.js'

function* twentyGenerator(offset) {
  let plus = 0
  while (plus < 20) {
    yield offset + plus
    plus += 1
  }
}

export default class Random {
  constructor(total, cb) {
    throwTotal(total)
    throwCallback(cb)

    this._done = false
    this._store = new Set()

    this._total = total
    this._lastOffset = total - 1
    this._cb = cb
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

    const limit = this._recursiveAdd(twentyGenerator(offset))

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
