import assert from 'assert'
import rewire from 'rewire'
import sinon from 'sinon'

const modules = rewire('../src/util.js')

describe(`util`, () => {
  it(`Query`, () => {
    const Query = modules.Query

    const param1 = { foo: 10 }
    const param2 = { foo: 20, bar: 'string' }
    const addition = { baa: true }
    const expect = `foo=20&bar=string&baa=true`

    const result = new Query(param1, param2).string(addition)
    assert.deepStrictEqual(result, expect)
  })
})
