import assert from 'assert'
import rewire from 'rewire'
import sinon from 'sinon'

const modules = rewire('../../src/Tumblr')
const account = 'account'
const api_key = 'api_key'

describe(`supplier:Tumblr`, () => {
  const Tumblr = modules.default

  describe(`throw because !argument`, () => {
    const invalids = [undefined, null, false]

    it(`account`, () =>
      invalids.forEach(invalid =>
        assert.throws(
          () => new Tumblr(invalid, api_key),
          /supplier.Tumblr require account/
        )
      ))

    it(`api_key`, () =>
      invalids.forEach(invalid =>
        assert.throws(
          () => new Tumblr(account, invalid),
          /supplier.Tumblr require api_key/
        )
      ))
  })

  describe(`throw because argument !== "string"`, () => {
    const invalids = [10, true, {}, [], () => {}]

    it(`account`, () =>
      invalids.forEach(invalid =>
        assert.throws(
          () => new Tumblr(invalid, api_key),
          /supplier.Tumblr argument account must be "string"/
        )
      ))

    it(`api_key`, () =>
      invalids.forEach(invalid =>
        assert.throws(
          () => new Tumblr(account, invalid),
          /supplier.Tumblr argument api_key must be "string"/
        )
      ))
  })

  it(`success`, () => {
    const jsonpRes = {
      meta: {
        status: 200,
        msg: 'OK'
      },
      response: {
        blog: {},
        posts: [],
        total_posts: 100
      }
    }

    const result = { value: Promise.resolve(jsonpRes), done: false }

    const iterator = { next: sinon.stub().returns(result) }
    const generator = sinon.stub().returns(iterator)

    return modules.__with__({
      _generator2: { default: generator }
    })(() => {
      const tumblr = new Tumblr(account, api_key)

      assert.deepStrictEqual(generator.callCount, 1)
      assert.deepStrictEqual(tumblr._complete, false)
      assert.deepStrictEqual(iterator.next.callCount, 0)

      return tumblr
        .supply()
        .then(res => {
          assert.deepStrictEqual(tumblr._complete, true)
          assert.deepStrictEqual(iterator.next.callCount, 2)

          const { response, done } = res
          assert.deepStrictEqual(response, jsonpRes.response)
          assert.deepStrictEqual(done, result.done)

          return tumblr.supply()
        })
        .then(res => {
          assert.deepStrictEqual(iterator.next.callCount, 3)
          return tumblr.supply()
        })
        .then(() => assert.deepStrictEqual(iterator.next.callCount, 4))
    })
  })
})

describe(`supplier:Tumblr/locals`, () => {
  it(`HoCreateSrc`, () => {
    const HoCreateSrc = modules.__get__('HoCreateSrc')

    const type = 'photo'
    const offset = 100

    const createSrc = HoCreateSrc(account, api_key, { type })

    assert.deepStrictEqual(
      createSrc(offset),
      `https://api.tumblr.com/v2/blog/${account}.tumblr.com/posts?type=${type}&api_key=${api_key}&offset=${offset}`
    )
  })
})
