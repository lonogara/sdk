import React from 'react'
import Atra from 'atra'

export default ({ choised }) => (
  <svg {...a('svg')}>
    <path
      {...a('path_0', {
        style: {
          fill: choised ? 'var(--base-color)' : 'none'
        }
      })}
    />
    <path
      {...a('path_1', {
        style: {
          fill: choised ? 'none' : 'var(--base-color)',
          stroke: choised ? '#ffffff' : 'var(--base-color)'
        }
      })}
    />
  </svg>
)

const a = Atra({
  svg: {
    viewBox: '0 0 300 300'
  },
  path_0: {
    d:
      'M 150.00014,12.118164 C 82.143107,12.511394 12.118454,43.326403 12.118454,130.98169 l 0,156.89986 275.763376,0 0,-156.89986 c 0,-88.716204 -65.37208,-119.002102 -137.88169,-118.863526 z',
    style: {
      stroke: 'var(--base-color)',
      strokeWidth: '12'
    }
  },
  path_1: {
    d: 'm 62.5,60.565334 175,0 0,29.166664 -175,0 z',
    style: {
      strokeWidth: '5'
    }
  }
})
