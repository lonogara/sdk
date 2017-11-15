import assert from 'assert'
import sinon from 'sinon'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'
enzyme.configure({ adapter: new Adapter() })

import {
  ChasingDots,
  Circle,
  CubeGrid,
  Pulse,
  FadingCircle,
  ThreeBounce,
  FoldingCube,
  WanderingCubes,
  WaveLoading,
  DoubleDounceLoading,
  RotaingPlaneLoading
} from '../src'
