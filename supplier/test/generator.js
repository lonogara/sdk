import assert from 'assert'
import rewire from 'rewire'
import sinon from 'sinon'

const modules = rewire('../src/generator.js')
const generator = modules.default

describe(`supplier:generator`, () => {
  it(`total isn't pass via iterator.next()`, () => {
    const totals = ['0', true, false, undefined, null, {}, [], () => {}]

    totals.forEach(total => {
      const createSrc = sinon.spy()
      const jsonp = sinon.spy()

      modules.__with__({
        _jsonp2: { default: jsonp }
      })(() => {
        const iterator = generator(createSrc)
        iterator.next() // firstJsonp

        assert.ok(createSrc.calledOnce)
        assert.ok(jsonp.calledOnce)
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
      iterator.next() // firstJsonp

      assert.ok(createSrc.calledOnce)
      assert.ok(jsonp.calledOnce)

      const resultOfPassTotal = iterator.next(total)
      assert.ok(resultOfPassTotal.done)
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
      iterator.next() // firstJsonp

      assert.ok(createSrc.calledOnce)
      assert.ok(jsonp.calledOnce)

      const resultOfPassTotal = iterator.next(total)
      assert.ok(!resultOfPassTotal.done)

      iterator.next()
      const resultOfReturn = iterator.next()
      assert.ok(resultOfReturn.done)
    })
  })
})
