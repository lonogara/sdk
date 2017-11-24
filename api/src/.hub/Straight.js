import { throwTotal, throwCallback } from './common.js'

export default class Straight {
  constructor(total, cb, opts = {}) {
    throwTotal(total)
    throwCallback(cb)

    this._done = false
    this._offset = 0

    this._lastOffset = total - 1
    this._cb = cb

    const limit = opts.limit || 20
    this._limit = limit
    this._plus = limit - 1
  }

  _isReturn() {
    const acquiredOffset = this._offset + this._plus
    const lastOffset = this._lastOffset
    return acquiredOffset >= this._lastOffset
  }

  _create() {
    const offset = this._offset
    if (this._isReturn()) {
      this._done = true
    } else {
      this._offset += this._limit
    }
    return offset
  }

  pass() {
    const offset = this._create()
    const value = this._cb({ offset, limit: this._limit })
    return value
  }

  done() {
    return this._done
  }
}
