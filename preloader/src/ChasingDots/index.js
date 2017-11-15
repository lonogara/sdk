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

export default (props: Props) => {
  const duration = props.duration || DURATION
  return (
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
        {...a('WRAP', {
          style: {
            animationDuration: `${duration}s`
          }
        })}
      >
        <div
          {...a('CHILD_FIRST', {
            style: {
              backgroundColor: props.objectColor || OBJECT_COLOR,
              animationDuration: `${duration}s`
            }
          })}
        />
        <div
          {...a('CHILD_SECOND', {
            style: {
              backgroundColor: props.objectColor || OBJECT_COLOR,
              animationDuration: `${duration}s`,
              animationDelay: `${-(duration / 2)}s`
            }
          })}
        />
      </div>
    </div>
  )
}

const CHILD_STYLE = {
  width: '60%',
  height: '60%',
  display: 'inline-block',
  position: 'absolute',
  borderRadius: '100%',
  animationName: Keyframes({
    0: { transform: 'scale(0)' },
    50: { transform: 'scale(1)' },
    100: { transform: 'scale(0)' }
  }),
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite'
}

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  WRAP: {
    style: {
      height: '100%',
      textAlign: 'center',
      animationName: Keyframes({
        100: { transform: 'rotate(360deg)' }
      }),
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite'
    }
  },
  CHILD_FIRST: {
    style: assign({}, CHILD_STYLE, {
      top: 0
    })
  },
  CHILD_SECOND: {
    style: assign({}, CHILD_STYLE, {
      top: 'auto',
      bottom: 0
    })
  }
})
