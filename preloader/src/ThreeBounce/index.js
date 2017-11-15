// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'
const { assign } = Object

const SIZE = 100
const BACKGROUND_COLOR = '#dddddd'
const OBJECT_COLOR = 'rgb(54, 73, 87)'
const DURATION = 1.4

type Props = {
  size?: number,
  backgroundColor?: string,
  objectColor?: string,
  duration?: number
}

export default (props: Props) => {
  const parentSize = props.size || SIZE

  const childSize = parentSize / 4
  const childMutable = {
    style: {
      width: childSize,
      height: childSize,
      animationDuration: `${props.duration || DURATION}s`,
      backgroundColor: props.objectColor || OBJECT_COLOR
    }
  }

  return (
    <div
      {...a('PARENT', {
        style: {
          width: parentSize,
          height: parentSize,
          backgroundColor: props.backgroundColor || BACKGROUND_COLOR
        }
      })}
    >
      <div {...a('CHILD_FIRST', childMutable)} />
      <div {...a('CHILD_SECOND', childMutable)} />
      <div {...a('CHILD_THIRD', childMutable)} />
    </div>
  )
}

const CHILD_STYLE = {
  position: 'relative',
  top: '35%',
  borderRadius: '100%',
  display: 'inline-block',
  animationName: Keyframes({
    0: { transform: `scale(0)` },
    40: { transform: `scale(1)` },
    80: { transform: `scale(0)` },
    100: { transform: `scale(0)` }
  }),
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationFillMode: 'both'
}

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
    }
  },
  CHILD_FIRST: {
    style: assign({}, CHILD_STYLE, {
      animationDelay: `-0.32s`
    })
  },
  CHILD_SECOND: {
    style: assign({}, CHILD_STYLE, {
      animationDelay: `-0.16s`
    })
  },
  CHILD_THIRD: {
    style: assign({}, CHILD_STYLE, {
      animationDelay: `0s`
    })
  }
})
