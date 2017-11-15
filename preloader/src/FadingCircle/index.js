// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'
import { getRange } from '../util.js'

const SIZE = 100
const BACKGROUND_COLOR = '#dddddd'
const OBJECT_COLOR = 'rgb(54, 73, 87)'
const DURATION = 1.2

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
    <Circles
      {...{
        duration: props.duration || DURATION,
        objectColor: props.objectColor || OBJECT_COLOR
      }}
    />
  </div>
)

const COUNT = 12

const Circles = ({ objectColor, duration }) =>
  getRange(COUNT).map(i => (
    <div
      {...a('CHILD_WRAP', {
        key: i,
        style: {
          transform: `rotate(${360 * i / COUNT}deg)`
        }
      })}
    >
      <div
        {...a('CHILD', {
          style: {
            backgroundColor: objectColor,
            animationDuration: `${duration}s`,
            animationDelay: `${duration - duration * i / COUNT}s`
          }
        })}
      />
    </div>
  ))

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD_WRAP: {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    }
  },
  CHILD: {
    style: {
      // margin: `0 auto`,
      margin: `auto`,
      width: '15%',
      height: '15%',
      borderRadius: `100%`,
      animationName: Keyframes({
        0: { opacity: 0 },
        39: { opacity: 0 },
        40: { opacity: 1 },
        100: { opacity: 0 }
      }),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      animationFillMode: `both`
    }
  }
})
