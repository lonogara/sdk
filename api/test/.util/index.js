import assert from 'assert'
import rewire from 'rewire'
import sinon from 'sinon'

const modules = rewire('../../src/.util')

describe(`util`, () => {
  it(`create`, async () => {
    const create = modules.create

    const passValue = {}
    const pass = sinon.stub().returns(passValue)

    const done = sinon.stub()
    done.onFirstCall().returns(false)
    done.onSecondCall().returns(true)

    const hub = { pass, done }
    const handle = create(hub)

    const result1 = await handle()
    assert.deepStrictEqual(result1.res, passValue)
    assert.deepStrictEqual(result1.done, false)

    const result2 = await handle()
    assert.deepStrictEqual(result2.res, passValue)
    assert.deepStrictEqual(result2.done, true)
  })

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
