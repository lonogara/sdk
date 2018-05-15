import assert from 'assert'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'
import * as components from '../.src/button'
enzyme.configure({ adapter: new Adapter() })

it(`button:just enzyme.mount()`, () =>
  Object.values(components).forEach(Component => enzyme.shallow(<Component />)))
