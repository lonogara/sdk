// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'
import { getRange } from './util.js'

const SIZE = 100
// const BACKGROUND_COLOR = '#dddddd'
const OBJECT_COLOR = 'rgb(54, 73, 87)'
const DURATION = 1.2

type Props = {
  size?: number,
  backgroundColor?: string,
  objectColor?: string,
  duration?: number
}

export default (props: Props = {}) =>
  <div {...a('PARENT', {
    style: {
      width: props.size || SIZE,
      height: props.size || SIZE,
      backgroundColor: props.backgroundColor
    }
  })}>
    <Rects {...{
      size: props.size || SIZE,
      objectColor: props.objectColor || OBJECT_COLOR,
      duration: props.duration || DURATION
    }} />
  </div>

const RECT_COUNT = 5
const DELAY_RANGE = 0.4

const Rects = ({ size, objectColor, duration }) =>
  getRange(RECT_COUNT).map(index =>
    <div {...a('RECT', {
      key: index,
      style: {
        width: size / 12,
        marginRight: size / 24,
        left: size / 24 / 2,
        backgroundColor: objectColor,
        animationDuration: `${duration}s`,
        animationDelay: `${DELAY_RANGE * index / (RECT_COUNT - 1) - duration}s`
      }
    })} />
  )

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
      // fontSize: 10
    }
  },
  RECT: {
    style: {
      position: 'relative',
      // width: 7,
      // marginRight: 3,
      height: '100%',
      display: 'inline-block',
      animationName: Keyframes({
        0: { transform: 'scaleY(0.4)' },
        20: { transform: 'scaleY(1.0)' },
        40: { transform: 'scaleY(0.4)' },
        100: { transform: 'scaleY(0.4)' }
      }),
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite'
    }
  }
})
