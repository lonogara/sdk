import React from 'react'
import Atra from 'atra'

var index = function(_ref) {
  var choised = _ref.choised
  return React.createElement(
    'svg',
    a('svg'),
    React.createElement(
      'path',
      a('path_0', {
        style: {
          fill: choised ? 'var(--base-color)' : 'none'
        }
      })
    ),
    React.createElement(
      'path',
      a('path_1', {
        style: {
          stroke: choised ? '#ffffff' : 'var(--base-color)',
          strokeWidth: choised ? 9 : 12
        }
      })
    ),
    React.createElement(
      'path',
      a('path_2', {
        style: {
          fill: choised ? '#ffffff' : 'var(--base-color)',
          stroke: choised ? 'none' : 'var(--base-color)',
          strokeWidth: choised ? 0 : 5
        }
      })
    ),
    React.createElement('path', a('path_3'))
  )
}

var a = Atra({
  svg: {
    viewBox: '0 0 300 300'
  },
  path_0: {
    d:
      'm 55,41.671997 190,0 c 27.7,0 50,22.3 50,50 L 295,230 c 0,27.7 -22.3,50 -50,50 L 55,280 C 27.3,280 5,257.7 5,230 L 5,91.671997 c 0,-27.7 22.3,-50 50,-50 z',
    style: {
      stroke: 'var(--base-color)',
      strokeWidth: '12'
    }
  },
  path_1: {
    d:
      'm 225,163 a 75,75 0 0 1 -75,75 75,75 0 0 1 -75,-75 75,75 0 0 1 75,-75 75,75 0 0 1 75,75 z',
    style: {
      fill: 'none'
    }
  },
  path_2: {
    d:
      'M 268.12503,77.767872 A 14.642857,14.642857 0 0 1 253.48217,92.410729 14.642857,14.642857 0 0 1 238.83932,77.767872 14.642857,14.642857 0 0 1 253.48217,63.125015 14.642857,14.642857 0 0 1 268.12503,77.767872 Z'
  },
  path_3: {
    d: 'M 202.92173,10 210,30 90,30 96.74771,10 Z',
    style: {
      fill: 'var(--base-color)',
      stroke: 'var(--base-color)'
    }
  }
})

var index$1 = function(_ref) {
  var choised = _ref.choised
  return React.createElement(
    'svg',
    a$1('svg'),
    React.createElement(
      'path',
      a$1('path', {
        style: {
          fill: choised ? 'var(--base-color)' : 'none'
        }
      })
    )
  )
}

var a$1 = Atra({
  svg: {
    viewBox: '0 0 300 300'
  },
  path: {
    d:
      'M 150.0005,11.642 11.643,121.37381 l 0,166.98319 100.18991,0 0,-71.56422 76.33518,0 0,71.56422 100.18991,0 0,-166.98319 z',
    style: {
      stroke: 'var(--base-color)',
      strokeWidth: '12'
    }
  }
})

var index$2 = function(_ref) {
  var choised = _ref.choised
  return React.createElement(
    'svg',
    a$2('svg'),
    React.createElement(
      'path',
      a$2('path_0', {
        style: {
          fill: choised ? 'var(--base-color)' : 'none'
        }
      })
    ),
    React.createElement(
      'path',
      a$2('path_1', {
        style: {
          fill: choised ? '#ffffff' : 'var(--base-color)',
          stroke: choised ? '#ffffff' : 'var(--base-color)'
        }
      })
    )
  )
}

var a$2 = Atra({
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

var index$3 = function(_ref) {
  var choised = _ref.choised
  return React.createElement(
    'svg',
    a$3('svg'),
    React.createElement(
      'path',
      a$3('info_0', {
        style: {
          fill: choised ? 'var(--base-color)' : 'none'
        }
      })
    ),
    React.createElement(
      'path',
      a$3('info_1', {
        style: {
          stroke: choised ? 'none' : 'var(--base-color)',
          fill: choised ? '#ffffff' : 'var(--base-color)'
        }
      })
    )
  )
}

var a$3 = Atra({
  svg: {
    viewBox: '0 0 300 300'
  },
  info_0: {
    d:
      'm 289.86614,149.99993 c 0,36.63983 -21.14726,73.984 -21.14726,73.984 l 15.91828,58.92333 -62.09509,-13.30008 c 0,0 -28.32637,20.25882 -72.542,20.25882 -77.245897,0 -139.86607,-62.62017 -139.86607,-139.86607 0,-77.2459 62.620173,-139.866073 139.86607,-139.866073 77.2459,0 139.86607,62.620173 139.86607,139.866073 z',
    style: {
      stroke: 'var(--base-color)',
      strokeWidth: '12'
    }
  },
  info_1: {
    d:
      'm 109.82143,123.31408 q 1.8945,-16.72102 12.27306,-25.78167 10.37857,-9.14302 26.85248,-9.14302 16.96813,0 27.8409,9.39013 10.95515,9.30776 10.95515,23.47532 0,7.08378 -3.21241,13.75571 -3.13004,6.67194 -14.99126,17.13287 -9.06065,8.07222 -11.44937,12.76729 -2.30634,4.61269 -2.55345,16.63864 l -14.16756,0 q 0,-9.55486 0.65895,-13.92045 0.74133,-4.44796 2.88294,-8.64881 2.22398,-4.20084 5.6835,-7.90747 3.54189,-3.70663 9.88434,-9.22539 8.07222,-7.16615 10.04909,-11.20226 2.05923,-4.11848 2.05923,-8.31933 0,-8.64879 -6.83667,-15.15599 -6.83667,-6.58957 -16.63865,-6.58957 -19.93342,0 -24.05191,24.38139 l -15.23836,-1.64739 z m 47.44486,87.88831 -16.88576,0 0,-16.88576 16.88576,0 0,16.88576 z',
    style: {
      strokeWidth: '5'
    }
  }
})

export {
  index as Camera,
  index$1 as House,
  index$2 as Post,
  index$3 as Question
}
