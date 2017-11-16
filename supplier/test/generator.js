import assert from 'assert'
import rewire from 'rewire'
import sinon from 'sinon'

const modules = rewire('../src/generator.js')
const generator = modules.default

describe(`supplier:generator`, () => {
  it(`total isn't pass via iterator.next()`, () => {
    const invalidTotals = ['0', true, false, undefined, null, {}, [], () => {}]

    invalidTotals.forEach(total => {
      const createSrc = sinon.spy()
      const jsonp = sinon.spy()

      modules.__with__({
        _jsonp2: { default: jsonp }
      })(() => {
        const iterator = generator(createSrc)

        // firstJsonp
        iterator.next()
        assert.deepStrictEqual(createSrc.callCount, 1)
        assert.deepStrictEqual(jsonp.callCount, 1)

        assert.throws(
          () => iterator.next(total),
          /total is required as "number"/
        )
      })
    })
  })

  it(`total === 20`, () => {
    const total = 20
    const createSrc = sinon.spy()
    const jsonp = sinon.spy()

    modules.__with__({
      _jsonp2: { default: jsonp }
    })(() => {
      const iterator = generator(createSrc)

      // firstJsonp
      iterator.next()
      assert.deepStrictEqual(createSrc.callCount, 1)
      assert.deepStrictEqual(jsonp.callCount, 1)

      // pass total
      assert.deepStrictEqual(iterator.next(total).done, true)
      assert.deepStrictEqual(createSrc.callCount, 1)
      assert.deepStrictEqual(jsonp.callCount, 1)
    })
  })

  it(`total === 60`, () => {
    const total = 60
    const createSrc = sinon.spy()
    const jsonp = sinon.spy()

    modules.__with__({
      _jsonp2: { default: jsonp }
    })(() => {
      const iterator = generator(createSrc)

      // firstJsonp
      iterator.next()
      assert.deepStrictEqual(createSrc.callCount, 1)
      assert.deepStrictEqual(jsonp.callCount, 1)

      // pass total
      assert.deepStrictEqual(iterator.next(total).done, false)
      assert.deepStrictEqual(createSrc.callCount, 1)
      assert.deepStrictEqual(jsonp.callCount, 1)

      // offset === 20
      assert.deepStrictEqual(iterator.next().done, false)
      assert.deepStrictEqual(createSrc.callCount, 2)
      assert.deepStrictEqual(jsonp.callCount, 2)

      // offset === 40
      assert.deepStrictEqual(iterator.next().done, true)
      assert.deepStrictEqual(createSrc.callCount, 3)
      assert.deepStrictEqual(jsonp.callCount, 3)
    })
  })
})
