// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'
import { transform } from './util.js'
const { assign } = Object

const SIZE = 100
// const BACKGROUND_COLOR = '#dddddd'
const OBJECT_COLOR = 'rgb(54, 73, 87)'
const DURATION = 1.8

type Props = {
  size?: number,
  backgroundColor?: string,
  objectColor?: string,
  duration?: number
}

export default (props: Props = {}) => {
  const parentSize = props.size || SIZE
  const duration = props.duration || DURATION
  const cubeSize = parentSize / 4
  const childPreStyle = {
    animationName: createAnim(parentSize * 0.75),
    animationDuration: `${duration}s`,
    width: cubeSize,
    height: cubeSize,
    backgroundColor: props.objectColor || OBJECT_COLOR
  }

  return (
    <div {...a('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor
      }
    })}>
      <div {...a('CHILD', { style: Object.assign({}, childPreStyle, { animationDelay: `${duration}s` }) })} />
      <div {...a('CHILD', { style: Object.assign({}, childPreStyle, { animationDelay: `${duration / 2}s` }) })} />
    </div>
  )
}

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
      // fontSize: 10
    }
  },
  CHILD: {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationFillMode: 'both'
    }
  }
})

const createAnim = cubeDistance =>
  Keyframes({
    0: {
      transform: transform({
        rotate: `0deg`
      })
    },
    25: {
      transform: transform({
        rotate: `-90deg`,
        translateX: `${cubeDistance}px`,
        scale: 0.5
      })
    },
    50: {
      transform: transform({
        rotate: `-179.9deg`,
        translateX: `${cubeDistance}px`,
        translateY: `${cubeDistance}px`
      })
    },
    75: {
      transform: transform({
        rotate: `-270deg`,
        translateY: `${cubeDistance}px`,
        scale: -0.5
      })
    },
    100: {
      transform: transform({
        rotate: `-360deg`
      })
    }
  })
