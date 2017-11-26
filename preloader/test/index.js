import assert from 'assert'
import sinon from 'sinon'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'
import * as components from '../src'
import { transform, getRange } from '../src/util.js'

enzyme.configure({ adapter: new Adapter() })

it(`preloader:just enzyme.mount()`, () =>
  Object.values(components).forEach(Component => enzyme.mount(<Component />)))

describe(`preloader:util`, () => {
  it(`transform:empty`, () => assert.deepStrictEqual(transform(), ''))

  it(`transform`, () => {
    const result = transform({
      fnName1: 'value1',
      fnName2: 'value2'
    })
    const expect = `fnName1(value1) fnName2(value2)`
    assert.deepStrictEqual(result, expect)
  })

  it(`getRange`, () => {
    const number = 10
    const result = getRange(number)
    assert.ok(Array.isArray(result))
    assert.equal(result.length, 10)
    assert.equal(result[0], 0)
    assert.equal(result[result.length - 1], 9)
  })
})
