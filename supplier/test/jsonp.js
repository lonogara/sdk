import assert from 'assert'
import rewire from 'rewire'
import sinon from 'sinon'

const modules = rewire('../src/jsonp.js')

describe(`supplier:jsonp`, () => {
  const jsonp = modules.default
  const url = 'https://api.github.com/users/kthjm'

  it(`timeout() => fail(true)`, () => {
    const limit = 50
    const spies = {
      appendScript: sinon.spy(),
      removeScript: sinon.spy(),
      deleteGlobalName: sinon.spy()
    }

    return modules.__with__(spies)(() =>
      jsonp(url, limit).catch(parseError => {
        const { appendScript, removeScript, deleteGlobalName } = spies
        assert.ok(appendScript.calledOnce)
        assert.ok(removeScript.calledOnce)
        assert.ok(deleteGlobalName.calledOnce)

        const script = appendScript.args[0][0]
        assert.ok(script.src.includes(url))

        assert.ok(parseError)
      })
    )
  })

  it(`script.onerror() => fail(undefined)`, () => {
    const script = {
      execOnError() {
        this.onerror()
      }
    }
    const stubAndSpies = {
      createScript: sinon.stub().returns(script),
      appendScript: sinon.spy(),
      removeScript: sinon.spy(),
      deleteGlobalName: sinon.spy()
    }

    return modules.__with__(stubAndSpies)(
      () =>
        new Promise(resolve => {
          jsonp(url).catch(parseError => {
            const {
              appendScript,
              removeScript,
              deleteGlobalName
            } = stubAndSpies
            assert.ok(appendScript.calledOnce)
            assert.ok(removeScript.calledOnce)
            assert.ok(deleteGlobalName.calledOnce)

            assert.ok(!parseError)
            resolve()
          })

          script.execOnError()
        })
    )
  })

  it(`window[globalName]() => succeed()`, () => {
    const globalName = 'randomGlobalName'
    const stubAndSpies = {
      createGlobalName: sinon.stub().returns(globalName),
      appendScript: sinon.spy(),
      removeScript: sinon.spy(),
      deleteGlobalName: sinon.spy()
    }

    return modules.__with__(stubAndSpies)(
      () =>
        new Promise(resolve => {
          const callbackResponse = 'callbackResponse'

          jsonp(url).then(response => {
            const {
              appendScript,
              removeScript,
              deleteGlobalName
            } = stubAndSpies
            assert.ok(appendScript.calledOnce)
            assert.ok(removeScript.calledOnce)
            assert.ok(deleteGlobalName.calledOnce)

            assert.deepStrictEqual(response, callbackResponse)
            resolve()
          })

          window['randomGlobalName'](callbackResponse)
        })
    )
  })
})

describe(`supplier:jsonp/locals`, () => {
  describe(`createSrc`, () => {
    const createSrc = modules.__get__('createSrc')
    const globalName = 'callbackName'

    it(`!src.includes("?") => src?callback=globalName`, () => {
      const src = 'url'
      const result = createSrc(src, globalName)
      const expect = `${src}?callback=${globalName}`
      assert.deepStrictEqual(result, expect)
    })

    it(`src.includes("?") => src&callback=globalName`, () => {
      const src = 'url?param=value'
      const result = createSrc(src, globalName)
      const expect = `${src}&callback=${globalName}`
      assert.deepStrictEqual(result, expect)
    })
  })

  // https://github.com/babel/babel/issues/5426
  // Error thrown when using Sinon #5426
  //
  // it(`createGlobalName`, () => {
  //   const createGlobalName = modules.__get__("createGlobalName")
  //
  //   const firstNumber = 0.1
  //   const secondNumber = 0.2
  //   const random = sinon
  //     .stub(Math, "random")
  //     .onFirstCall().returns(firstNumber)
  //     .onSecondCall().returns(secondNumber)
  //
  //   const firstName = `jsonp_callback_${firstNumber * 10000 + 1}`
  //   const secondName = `jsonp_callback_${secondNumber * 10000 + 1}`
  //
  //   window[firstName] = true
  //   assert.deepStrictEqual(createGlobalName(), secondName)
  //
  //   random.restore()
  // })

  it(`deleteGlobalName`, () => {
    const deleteGlobalName = modules.__get__('deleteGlobalName')
    const globalName = 'callbackName'

    window[globalName] = () => {}
    assert.ok(window[globalName])

    deleteGlobalName(globalName)
    assert.ok(!window[globalName])
  })
})
