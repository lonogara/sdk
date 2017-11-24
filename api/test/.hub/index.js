import assert from 'assert'
import rewire from 'rewire'
import sinon from 'sinon'

describe(`hub:Hubs`, () => {
  const loop = rewire(`../../src/.util`).__get__('loop')
  const total = 1000
  const cbValue = { res: {}, meta: {} }

  it(`Straight`, () => {
    const Straight = rewire(`../../src/.hub/Straight.js`).default
    test()
    test({ limit: 10 })

    function test(opts = {}) {
      const cb = sinon.stub().returns(cbValue)
      const hub = new Straight(total, cb, opts)

      const array = [...loop(hub)]
      array.forEach(value => assert.deepStrictEqual(value, cbValue))

      const limit = opts.limit || 20
      cb.args.forEach((arg, index) => {
        const addition = arg[0]
        assert.equal(addition.limit, limit)
        assert.equal(addition.offset, limit * index)
      })
    }
  })

  it(`Random`, () => {
    const Random = rewire(`../../src/.hub/Random.js`).default

    const cb = sinon.stub().returns(cbValue)
    const hub = new Random(total, cb)

    const array = [...loop(hub)]
    array.forEach(value => assert.deepStrictEqual(value, cbValue))

    const offsets = [...hub._store.values()].sort((a, b) => a - b)
    assert.equal(offsets.length, total)
    assert.equal(offsets[0], 0)
    assert.equal(offsets[offsets.length - 1], total - 1)
  })
})

describe(`hub:locals`, () => {
  it(`twentyGenerator`, () => {
    const twentyGenerator = rewire(`../../src/.hub/Random.js`).__get__(
      'twentyGenerator'
    )

    const offset = 100
    const array = [...twentyGenerator(offset)]
    assert.equal(array[0], offset)
    assert.equal(array.length, 20)
  })
})

describe(`hub:throws`, () => {
  const modules = rewire(`../../src/.hub`)
  const hubKeys = ['Straight', 'Random']

  const first = 1
  const second = () => {}

  it(`first argument`, () => {
    hubKeys.forEach(key => throws(modules[key]))

    function throws(Hub) {
      const unNumbers = [undefined, null, true, 'string', {}, [], () => {}]
      unNumbers.forEach(first =>
        assert.throws(
          () => new Hub(first, second),
          /hub first argument must be "number"/
        )
      )
    }
  })

  it(`second argument`, () => {
    hubKeys.forEach(key => throws(modules[key]))

    function throws(Hub) {
      const unFunctions = [undefined, null, true, 'string', 1, {}, []]
      unFunctions.forEach(second =>
        assert.throws(
          () => new Hub(first, second),
          /hub second argument must be "function"/
        )
      )
    }
  })
})
