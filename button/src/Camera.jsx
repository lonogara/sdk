import React from 'react'
import Atra from 'atra'

export default ({ choised, mainColor, subColor }) =>
  <svg {...a('svg')}>
    <path {...a('path_0', {
      style: {
        stroke: mainColor,
        fill: choised ? mainColor : 'none'
      }
    })} />
    <path {...a('path_1', { style: { stroke: choised ? subColor : mainColor } })} />
    <path {...a('path_2', {
      style: {
        fill: choised ? subColor : mainColor,
        stroke: choised ? subColor : mainColor
      }
    })} />
    <path {...a('path_3', { style: { fill: mainColor, stroke: mainColor } })} />
  </svg>

const a = Atra({
  svg: {
    viewBox: '0 0 300 300'
  },
  path_0: {
    d: 'm 55,41.671997 190,0 c 27.7,0 50,22.3 50,50 L 295,230 c 0,27.7 -22.3,50 -50,50 L 55,280 C 27.3,280 5,257.7 5,230 L 5,91.671997 c 0,-27.7 22.3,-50 50,-50 z',
    style: {
      strokeWidth: '12'
    }
  },
  path_1: {
    d: 'm 225,163 a 75,75 0 0 1 -75,75 75,75 0 0 1 -75,-75 75,75 0 0 1 75,-75 75,75 0 0 1 75,75 z',
    style: {
      fill: 'none',
      strokeWidth: 12
    }
  },
  path_2: {
    d: 'M 268.12503,77.767872 A 14.642857,14.642857 0 0 1 253.48217,92.410729 14.642857,14.642857 0 0 1 238.83932,77.767872 14.642857,14.642857 0 0 1 253.48217,63.125015 14.642857,14.642857 0 0 1 268.12503,77.767872 Z',
    style: {
      strokeWidth: 5
    }
  },
  path_3: {
    d: 'M 202.92173,10 210,30 90,30 96.74771,10 Z'
  }
})
