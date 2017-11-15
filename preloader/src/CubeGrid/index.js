// @flow
import React from 'react'
import Atra from 'atra'
import Keyframes from 'create-keyframes'

const SIZE = 100
const BACKGROUND_COLOR = '#dddddd'
const OBJECT_COLOR = 'rgb(54, 73, 87)'
const DURATION = 1.5

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
    <Cubes
      {...{
        objectColor: props.objectColor || OBJECT_COLOR,
        duration: props.duration || DURATION
      }}
    />
  </div>
)

const CUBES = [0.5, 0.75, 1, 0.25, 0.5, 0.75, 0, 0.25, 0.5]

const Cubes = ({ objectColor, duration }) =>
  CUBES.map((c, i) => (
    <div
      {...a('CUBE', {
        key: i,
        style: {
          backgroundColor: objectColor,
          animationDuration: `${duration}s`,
          animationDelay: `${(duration - 3) / 3 * c}s`
        }
      })}
    />
  ))

const a = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CUBE: {
    style: {
      width: '33.33%',
      height: '33.33%',
      float: 'left',
      animationName: Keyframes({
        //   0: { transform: `scale3d(1, 1, 1)` },
        //  35: { transform: `scale3d(0, 0, 1)` },
        //  70: { transform: `scale3d(1, 1, 1)` },
        // 100: { transform: `scale3d(1, 1, 1)` }

        // 0: { transform: `scale(1)` },
        35: { transform: `scale(0)` },
        70: { transform: `scale(1)` }
        // 100: { transform: `scale(1)` }
      }),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out'
    }
  }
})
