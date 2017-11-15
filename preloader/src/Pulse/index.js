// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'

const SIZE = 100
const BACKGROUND_COLOR = '#dddddd'
const OBJECT_COLOR = 'rgb(54, 73, 87)'
const DURATION = 1

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
      {...a('CHILD', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR,
          animationDuration: `${props.duration || DURATION}s`
        }
      })}
    />
  </div>
)

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD: {
    style: {
      height: '100%',
      borderRadius: `100%`,
      animationName: Keyframes({
        0: { transform: `scale(0)` },
        100: { transform: `scale(1)`, opacity: 0 }
      }),
      animationTimingFunction: `ease-in-out`,
      animationIterationCount: `infinite`
    }
  }
})
