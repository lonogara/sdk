'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = _interopDefault(require('react'))
var Atra = _interopDefault(require('atra'))
var Keyframes = _interopDefault(require('create-keyframes'))

//
var assign = Object.assign

var SIZE = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR = 'rgb(54, 73, 87)'
var DURATION = 2

var ChasingDots = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var duration = props.duration || DURATION
  return React.createElement(
    'div',
    a('PARENT', {
      style: {
        width: props.size || SIZE,
        height: props.size || SIZE,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(
      'div',
      a('WRAP', { style: { animationDuration: duration + 's' } }),
      React.createElement(
        'div',
        a('CHILD_FIRST', {
          style: {
            backgroundColor: props.objectColor || OBJECT_COLOR,
            animationDuration: duration + 's'
          }
        })
      ),
      React.createElement(
        'div',
        a('CHILD_SECOND', {
          style: {
            backgroundColor: props.objectColor || OBJECT_COLOR,
            animationDuration: duration + 's',
            animationDelay: -(duration / 2) + 's'
          }
        })
      )
    )
  )
}

var CHILD_STYLE = {
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

var a = Atra({
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

var slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value)

        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return']) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }

    return _arr
  }

  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i)
    } else {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      )
    }
  }
})()

var toConsumableArray = function(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i]

    return arr2
  } else {
    return Array.from(arr)
  }
}

//
var transform = function transform() {
  var obj =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return Object.entries(obj)
    .map(function(_ref) {
      var _ref2 = slicedToArray(_ref, 2),
        fnName = _ref2[0],
        val = _ref2[1]

      return fnName + '(' + val + ')'
    })
    .join(' ')
}

var getRange = function getRange(n) {
  return [].concat(toConsumableArray(Array(n).keys()))
}

//
// const SPEED = 1.2

var SIZE$1 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$1 = 'rgb(54, 73, 87)'
var DURATION$1 = 1.2

var Circle = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return React.createElement(
    'div',
    a$1('PARENT', {
      style: {
        width: props.size || SIZE$1,
        height: props.size || SIZE$1,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(Circles, {
      objectColor: props.objectColor || OBJECT_COLOR$1,
      duration: props.duration || DURATION$1
    })
  )
}

var COUNT = 12
var Circles = function Circles(_ref) {
  var objectColor = _ref.objectColor,
    duration = _ref.duration
  return getRange(COUNT).map(function(i) {
    return React.createElement(
      'div',
      a$1('CIRCLE_WRAP', {
        key: i,
        style: { transform: 'rotate(' + 360 / COUNT * (i + 1) + 'deg)' }
      }),
      React.createElement(
        'div',
        a$1('CIRCLE', {
          style: {
            backgroundColor: objectColor,
            animationDuration: duration + 's',
            animationDelay: duration / COUNT * i - duration + 's'
          }
        })
      )
    )
  })
}

var a$1 = Atra({
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

//
var SIZE$2 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$2 = 'rgb(54, 73, 87)'
var DURATION$2 = 1.5

var CubeGrid = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return React.createElement(
    'div',
    a$2('PARENT', {
      style: {
        width: props.size || SIZE$2,
        height: props.size || SIZE$2,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(Cubes, {
      objectColor: props.objectColor || OBJECT_COLOR$2,
      duration: props.duration || DURATION$2
    })
  )
}

var CUBES = [0.5, 0.75, 1, 0.25, 0.5, 0.75, 0, 0.25, 0.5]

var Cubes = function Cubes(_ref) {
  var objectColor = _ref.objectColor,
    duration = _ref.duration
  return CUBES.map(function(c, i) {
    return React.createElement(
      'div',
      a$2('CUBE', {
        key: i,
        style: {
          backgroundColor: objectColor,
          animationDuration: duration + 's',
          animationDelay: (duration - 3) / 3 * c + 's'
        }
      })
    )
  })
}

var a$2 = Atra({
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
        35: { transform: 'scale(0)' },
        70: {
          transform: 'scale(1)'
          // 100: { transform: `scale(1)` }
        }
      }),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out'
    }
  }
})

//
var assign$1 = Object.assign

var SIZE$3 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$3 = 'rgb(54, 73, 87)'
var DURATION$3 = 2

var DoubleDounceLoading = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return React.createElement(
    'div',
    a$3('PARENT', {
      style: {
        width: props.size || SIZE$3,
        height: props.size || SIZE$3,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(
      'div',
      a$3('CHILD_FIRST', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR$3,
          animationDuration: (props.duration || DURATION$3) + 's'
        }
      })
    ),
    React.createElement(
      'div',
      a$3('CHILD_SECOND', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR$3,
          animationDuration: (props.duration || DURATION$3) + 's'
        }
      })
    )
  )
}

var CHILD_STYLE$1 = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  opacity: 0.6,
  animationName: Keyframes({
    0: { transform: 'scale(0)' },
    50: { transform: 'scale(1)' },
    100: { transform: 'scale(0)' }
  }),
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out'
}

var a$3 = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD_FIRST: {
    style: CHILD_STYLE$1
  },
  CHILD_SECOND: {
    style: assign$1({}, CHILD_STYLE$1, { animationDelay: '-1s' })
  }
})

//
var SIZE$4 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$4 = 'rgb(54, 73, 87)'
var DURATION$4 = 1.2

var FadingCircle = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return React.createElement(
    'div',
    a$4('PARENT', {
      style: {
        width: props.size || SIZE$4,
        height: props.size || SIZE$4,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(Circles$1, {
      duration: props.duration || DURATION$4,
      objectColor: props.objectColor || OBJECT_COLOR$4
    })
  )
}

var COUNT$1 = 12

var Circles$1 = function Circles(_ref) {
  var objectColor = _ref.objectColor,
    duration = _ref.duration
  return getRange(COUNT$1).map(function(i) {
    return React.createElement(
      'div',
      a$4('CHILD_WRAP', {
        key: i,
        style: { transform: 'rotate(' + 360 * i / COUNT$1 + 'deg)' }
      }),
      React.createElement(
        'div',
        a$4('CHILD', {
          style: {
            backgroundColor: objectColor,
            animationDuration: duration + 's',
            animationDelay: duration - duration * i / COUNT$1 + 's'
          }
        })
      )
    )
  })
}

var a$4 = Atra({
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
      margin: 'auto',
      width: '15%',
      height: '15%',
      borderRadius: '100%',
      animationName: Keyframes({
        0: { opacity: 0 },
        39: { opacity: 0 },
        40: { opacity: 1 },
        100: { opacity: 0 }
      }),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      animationFillMode: 'both'
    }
  }
})

//
var SIZE$5 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$5 = 'rgb(54, 73, 87)'
var DURATION$5 = 2.4

var FoldingCube = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var parentSize = props.size || SIZE$5
  var wrapSize = parentSize / Math.SQRT2 - 1

  return React.createElement(
    'div',
    a$5('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(
      'div',
      a$5('WRAP', { style: { width: wrapSize, height: wrapSize } }),
      React.createElement(Cubes$1, {
        duration: props.duration || DURATION$5,
        objectColor: props.objectColor || OBJECT_COLOR$5
      })
    )
  )
}

var cubes = [0, 1, 3, 2]

var Cubes$1 = function Cubes(_ref) {
  var duration = _ref.duration,
    objectColor = _ref.objectColor
  return cubes.map(function(i) {
    return React.createElement(
      'div',
      a$5('CHILD_WRAP', {
        key: i,
        style: {
          transform: transform({
            scale: '1.1',
            rotateZ: 90 * i + 'deg'
          })
        }
      }),
      React.createElement(
        'div',
        a$5('CHILD', {
          style: {
            backgroundColor: objectColor,
            animationDuration: duration + 's',
            animationDelay: duration / 2 * i / cubes.length + 's'
          }
        })
      )
    )
  })
}

// transform: `perspective(140px) rotateX(-180deg)`,
var anim1 = {
  transform: transform({
    perspective: '140px',
    rotateX: '-180deg'
  }),
  opacity: 0

  // transform: `perspective(140px) rotateX(0deg)`,
}
var anim2 = {
  transform: transform({
    perspective: '140px',
    rotateX: '0deg'
  }),
  opacity: 1

  // transform: `perspective(140px) rotateY(180deg)`,
}
var anim3 = {
  transform: transform({
    perspective: '140px',
    rotateY: '180deg'
  }),
  opacity: 0
}

var a$5 = Atra({
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

//
var SIZE$6 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$6 = 'rgb(54, 73, 87)'
var DURATION$6 = 1

var Pulse = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return React.createElement(
    'div',
    a$6('PARENT', {
      style: {
        width: props.size || SIZE$6,
        height: props.size || SIZE$6,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(
      'div',
      a$6('CHILD', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR$6,
          animationDuration: (props.duration || DURATION$6) + 's'
        }
      })
    )
  )
}

var a$6 = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD: {
    style: {
      height: '100%',
      borderRadius: '100%',
      animationName: Keyframes({
        0: { transform: 'scale(0)' },
        100: { transform: 'scale(1)', opacity: 0 }
      }),
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite'
    }
  }
})

//
var SIZE$7 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$7 = 'rgb(54, 73, 87)'
var DURATION$7 = 1.2

var RotaingPlaneLoading = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return React.createElement(
    'div',
    a$7('PARENT', {
      style: {
        width: props.size || SIZE$7,
        height: props.size || SIZE$7,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(
      'div',
      a$7('CHILD', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR$7,
          animationDuration: (props.duration || DURATION$7) + 's'
        }
      })
    )
  )
}

var a$7 = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD: {
    style: {
      height: '100%',
      animationName: Keyframes({
        0: {
          transform: transform({
            perspective: '120px',
            rotateX: '0deg',
            rotateY: '0deg'
          })
        },
        50: {
          transform: transform({
            perspective: '120px',
            rotateX: '-180.1deg',
            rotateY: '0deg'
          })
        },
        100: {
          transform: transform({
            perspective: '120px',
            rotateX: '-180deg',
            rotateY: '-179.9deg'
          })
        }
      }),
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite'
    }
  }
})

//
var assign$2 = Object.assign

var SIZE$8 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$8 = 'rgb(54, 73, 87)'
var DURATION$8 = 1.4

var ThreeBounce = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var parentSize = props.size || SIZE$8
  var childSize = parentSize / 4
  var childStyle = {
    width: childSize,
    height: childSize,
    animationDuration: (props.duration || DURATION$8) + 's',
    backgroundColor: props.objectColor || OBJECT_COLOR$8
  }

  return React.createElement(
    'div',
    a$8('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement('div', a$8('CHILD_FIRST', { style: childStyle })),
    React.createElement('div', a$8('CHILD_SECOND', { style: childStyle })),
    React.createElement('div', a$8('CHILD_THIRD', { style: childStyle }))
  )
}

var CHILD_STYLE$2 = {
  position: 'relative',
  top: '35%',
  borderRadius: '100%',
  display: 'inline-block',
  animationName: Keyframes({
    0: { transform: 'scale(0)' },
    40: { transform: 'scale(1)' },
    80: { transform: 'scale(0)' },
    100: { transform: 'scale(0)' }
  }),
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationFillMode: 'both'
}

var a$8 = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
    }
  },
  CHILD_FIRST: {
    style: assign$2({}, CHILD_STYLE$2, {
      animationDelay: '-0.32s'
    })
  },
  CHILD_SECOND: {
    style: assign$2({}, CHILD_STYLE$2, {
      animationDelay: '-0.16s'
    })
  },
  CHILD_THIRD: {
    style: assign$2({}, CHILD_STYLE$2, {
      animationDelay: '0s'
    })
  }
})

//
var SIZE$9 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$9 = 'rgb(54, 73, 87)'
var DURATION$9 = 1.8

var WanderingCubes = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  var parentSize = props.size || SIZE$9
  var duration = props.duration || DURATION$9
  var cubeSize = parentSize / 4
  var childPreStyle = {
    animationName: createAnim(parentSize * 0.75),
    animationDuration: duration + 's',
    width: cubeSize,
    height: cubeSize,
    backgroundColor: props.objectColor || OBJECT_COLOR$9
  }

  return React.createElement(
    'div',
    a$9('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(
      'div',
      a$9('CHILD', {
        style: Object.assign({}, childPreStyle, {
          animationDelay: duration + 's'
        })
      })
    ),
    React.createElement(
      'div',
      a$9('CHILD', {
        style: Object.assign({}, childPreStyle, {
          animationDelay: duration / 2 + 's'
        })
      })
    )
  )
}

var a$9 = Atra({
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

var createAnim = function createAnim(cubeDistance) {
  return Keyframes({
    0: {
      transform: transform({
        rotate: '0deg'
      })
    },
    25: {
      transform: transform({
        rotate: '-90deg',
        translateX: cubeDistance + 'px',
        scale: 0.5
      })
    },
    50: {
      transform: transform({
        rotate: '-179.9deg',
        translateX: cubeDistance + 'px',
        translateY: cubeDistance + 'px'
      })
    },
    75: {
      transform: transform({
        rotate: '-270deg',
        translateY: cubeDistance + 'px',
        scale: -0.5
      })
    },
    100: {
      transform: transform({
        rotate: '-360deg'
      })
    }
  })
}

//
var SIZE$10 = 100
// const BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR$10 = 'rgb(54, 73, 87)'
var DURATION$10 = 1.2

var WaveLoading = function() {
  var props =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  return React.createElement(
    'div',
    a$10('PARENT', {
      style: {
        width: props.size || SIZE$10,
        height: props.size || SIZE$10,
        backgroundColor: props.backgroundColor
      }
    }),
    React.createElement(Rects, {
      size: props.size || SIZE$10,
      objectColor: props.objectColor || OBJECT_COLOR$10,
      duration: props.duration || DURATION$10
    })
  )
}

var RECT_COUNT = 5
var DELAY_RANGE = 0.4

var Rects = function Rects(_ref) {
  var size = _ref.size,
    objectColor = _ref.objectColor,
    duration = _ref.duration
  return getRange(RECT_COUNT).map(function(index) {
    return React.createElement(
      'div',
      a$10('RECT', {
        key: index,
        style: {
          width: size / 12,
          marginRight: size / 24,
          left: size / 24 / 2,
          backgroundColor: objectColor,
          animationDuration: duration + 's',
          animationDelay:
            DELAY_RANGE * index / (RECT_COUNT - 1) - duration + 's'
        }
      })
    )
  })
}

var a$10 = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
      // fontSize: 10
    }
  },
  RECT: {
    style: {
      position: 'relative',
      // width: 7,
      // marginRight: 3,
      height: '100%',
      display: 'inline-block',
      animationName: Keyframes({
        0: { transform: 'scaleY(0.4)' },
        20: { transform: 'scaleY(1.0)' },
        40: { transform: 'scaleY(0.4)' },
        100: { transform: 'scaleY(0.4)' }
      }),
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite'
    }
  }
})

exports.ChasingDots = ChasingDots
exports.Circle = Circle
exports.CubeGrid = CubeGrid
exports.DoubleDounceLoading = DoubleDounceLoading
exports.FadingCircle = FadingCircle
exports.FoldingCube = FoldingCube
exports.Pulse = Pulse
exports.RotaingPlaneLoading = RotaingPlaneLoading
exports.ThreeBounce = ThreeBounce
exports.WanderingCubes = WanderingCubes
exports.WaveLoading = WaveLoading
