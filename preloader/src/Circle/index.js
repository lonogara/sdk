// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'
import { getRange } from '../util.js'

// const SPEED = 1.2

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
        objectColor: props.objectColor || OBJECT_COLOR,
        duration: props.duration || DURATION
      }}
    />
  </div>
)

const COUNT = 12
const Circles = ({ objectColor, duration }) =>
  getRange(COUNT).map(i => (
    <div
      {...a('CIRCLE_WRAP', {
        key: i,
        style: { transform: `rotate(${360 / COUNT * (i + 1)}deg)` }
      })}
    >
      <div
        {...a('CIRCLE', {
          style: {
            backgroundColor: objectColor,
            animationDuration: `${duration}s`,
            animationDelay: `${duration / COUNT * i - duration}s`
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
  CIRCLE_WRAP: {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  },
  CIRCLE: {
    style: {
      margin: '0px auto',
      width: '15%',
      height: '15%',
      borderRadius: '100%',
      // backgroundColor: 'var(--main-color)',
      animation: Keyframes({
        0: { transform: 'scale(0)' },
        40: { transform: 'scale(1)' },
        80: { transform: 'scale(0)' },
        100: { transform: 'scale(0)' }
      }),
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationFillMode: 'both'
    }
  }
})
