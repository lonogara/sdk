// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'
const { assign } = Object

const SIZE = 100
const BACKGROUND_COLOR = '#dddddd'
const OBJECT_COLOR = 'rgb(54, 73, 87)'
const DURATION = 2

type Props = {
  size?: number,
  backgroundColor?: string,
  objectColor?: string,
  duration?: number
}

export default (props: Props) => (
  <div
    {...a('PARENT', {
      style: {
        width: props.size || SIZE,
        height: props.size || SIZE,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR
      }
    })}
  >
    <div
      {...a('CHILD_FIRST', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR,
          animationDuration: `${props.duration || DURATION}s`
        }
      })}
    />
    <div
      {...a('CHILD_SECOND', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR,
          animationDuration: `${props.duration || DURATION}s`
        }
      })}
    />
  </div>
)

const CHILD_STYLE = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  opacity: 0.6,
  animationName: Keyframes({
    0: { transform: `scale(0)` },
    50: { transform: `scale(1)` },
    100: { transform: `scale(0)` }
  }),
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out'
}

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD_FIRST: {
    style: CHILD_STYLE
  },
  CHILD_SECOND: {
    style: assign({}, CHILD_STYLE, { animationDelay: `-1s` })
  }
})
