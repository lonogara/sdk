// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'
import { transform } from '../util.js'

const SIZE = 100
const BACKGROUND_COLOR = '#dddddd'
const OBJECT_COLOR = 'rgb(54, 73, 87)'
const DURATION = 2.4

type Props = {
  size?: number,
  backgroundColor?: string,
  objectColor?: string,
  duration?: number
}

export default (props: Props) => {
  const parentSize = props.size || SIZE
  const wrapSize = parentSize / Math.SQRT2 - 1

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
      <div
        {...a('WRAP', {
          style: {
            width: wrapSize,
            height: wrapSize
          }
        })}
      >
        <Cubes
          duration={props.duration || DURATION}
          objectColor={props.objectColor || OBJECT_COLOR}
        />
      </div>
    </div>
  )
}

const cubes = [0, 1, 3, 2]

const Cubes = props =>
  cubes.map(i => (
    <div
      {...a('CHILD_WRAP', {
        key: i,
        style: {
          transform: transform({
            scale: '1.1',
            rotateZ: `${90 * i}deg`
          })
        }
      })}
    >
      <div
        {...a('CHILD', {
          style: {
            backgroundColor: props.objectColor,
            animationDuration: `${props.duration}s`,
            animationDelay: `${props.duration / 2 * i / cubes.length}s`
          }
        })}
      />
    </div>
  ))

// transform: `perspective(140px) rotateX(-180deg)`,
const anim1 = {
  transform: transform({
    perspective: `140px`,
    rotateX: `-180deg`
  }),
  opacity: 0
}

// transform: `perspective(140px) rotateX(0deg)`,
const anim2 = {
  transform: transform({
    perspective: `140px`,
    rotateX: `0deg`
  }),
  opacity: 1
}

// transform: `perspective(140px) rotateY(180deg)`,
const anim3 = {
  transform: transform({
    perspective: `140px`,
    rotateY: `180deg`
  }),
  opacity: 0
}

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
    }
  },
  WRAP: {
    style: {
      position: 'relative',
      top: '15%',
      display: 'inline-block',
      transform: 'rotateZ(45deg) scale(0.95)'
    }
  },
  CHILD_WRAP: {
    style: {
      float: 'left',
      width: '50%',
      height: '50%',
      position: 'relative'
    }
  },
  CHILD: {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transformOrigin: '100% 100%',
      // perspective: 140,
      animationName: Keyframes({
        0: anim1,
        10: anim1,
        25: anim2,
        75: anim2,
        90: anim3,
        100: anim3
      }),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationFillMode: 'both'
    }
  }
})
