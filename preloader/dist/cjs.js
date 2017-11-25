'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = _interopDefault(require('../../node_modules/react/index.js'))
var Atra = _interopDefault(require('../../node_modules/atra/lib/index.js'))
var Keyframes = _interopDefault(
  require('../../node_modules/create-keyframes/index.js')
)

//
var assign = Object.assign

var SIZE = 100
var BACKGROUND_COLOR = '#dddddd'
var OBJECT_COLOR = 'rgb(54, 73, 87)'
var DURATION = 2

var index = function(props) {
  var duration = props.duration || DURATION
  return React.createElement(
    'div',
    a('PARENT', {
      style: {
        width: props.size || SIZE,
        height: props.size || SIZE,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR
      }
    }),
    React.createElement(
      'div',
      a('WRAP', {
        style: {
          animationDuration: duration + 's'
        }
      }),
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
var SIZE$1 = 100
var BACKGROUND_COLOR$1 = '#dddddd'
var OBJECT_COLOR$1 = 'rgb(54, 73, 87)'
var DURATION$1 = 1.2

var index$1 = function(props) {
  return React.createElement(
    'div',
    a$1('PARENT', {
      style: {
        width: props.size || SIZE$1,
        height: props.size || SIZE$1,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$1
      }
    }),
    React.createElement(Circles, {
      duration: props.duration || DURATION$1,
      objectColor: props.objectColor || OBJECT_COLOR$1
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
      a$1('CHILD_WRAP', {
        key: i,
        style: {
          transform: 'rotate(' + 360 * i / COUNT + 'deg)'
        }
      }),
      React.createElement(
        'div',
        a$1('CHILD', {
          style: {
            backgroundColor: objectColor,
            animationDuration: duration + 's',
            animationDelay: duration - duration * i / COUNT + 's'
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
var assign$1 = Object.assign

var SIZE$2 = 100
var BACKGROUND_COLOR$2 = '#dddddd'
var OBJECT_COLOR$2 = 'rgb(54, 73, 87)'
var DURATION$2 = 1.4

var index$2 = function(props) {
  var parentSize = props.size || SIZE$2

  var childSize = parentSize / 4
  var childMutable = {
    style: {
      width: childSize,
      height: childSize,
      animationDuration: (props.duration || DURATION$2) + 's',
      backgroundColor: props.objectColor || OBJECT_COLOR$2
    }
  }

  return React.createElement(
    'div',
    a$2('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$2
      }
    }),
    React.createElement('div', a$2('CHILD_FIRST', childMutable)),
    React.createElement('div', a$2('CHILD_SECOND', childMutable)),
    React.createElement('div', a$2('CHILD_THIRD', childMutable))
  )
}

var CHILD_STYLE$1 = {
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

var a$2 = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center'
    }
  },
  CHILD_FIRST: {
    style: assign$1({}, CHILD_STYLE$1, {
      animationDelay: '-0.32s'
    })
  },
  CHILD_SECOND: {
    style: assign$1({}, CHILD_STYLE$1, {
      animationDelay: '-0.16s'
    })
  },
  CHILD_THIRD: {
    style: assign$1({}, CHILD_STYLE$1, {
      animationDelay: '0s'
    })
  }
})

//
// const SPEED = 1.2

var SIZE$3 = 100
var BACKGROUND_COLOR$3 = '#dddddd'
var OBJECT_COLOR$3 = 'rgb(54, 73, 87)'
var DURATION$3 = 1.2

var index$3 = function(props) {
  return React.createElement(
    'div',
    a$3('PARENT', {
      style: {
        width: props.size || SIZE$3,
        height: props.size || SIZE$3,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$3
      }
    }),
    React.createElement(Circles$1, {
      objectColor: props.objectColor || OBJECT_COLOR$3,
      duration: props.duration || DURATION$3
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
      a$3('CIRCLE_WRAP', {
        key: i,
        style: { transform: 'rotate(' + 360 / COUNT$1 * (i + 1) + 'deg)' }
      }),
      React.createElement(
        'div',
        a$3('CIRCLE', {
          style: {
            backgroundColor: objectColor,
            animationDuration: duration + 's',
            animationDelay: duration / COUNT$1 * i - duration + 's'
          }
        })
      )
    )
  })
}

var a$3 = Atra({
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
var SIZE$4 = 100
var BACKGROUND_COLOR$4 = '#dddddd'
var OBJECT_COLOR$4 = 'rgb(54, 73, 87)'
var DURATION$4 = 2.4

var index$4 = function(props) {
  var parentSize = props.size || SIZE$4
  var wrapSize = parentSize / Math.SQRT2 - 1

  return React.createElement(
    'div',
    a$4('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$4
      }
    }),
    React.createElement(
      'div',
      a$4('WRAP', {
        style: {
          width: wrapSize,
          height: wrapSize
        }
      }),
      React.createElement(Cubes, {
        duration: props.duration || DURATION$4,
        objectColor: props.objectColor || OBJECT_COLOR$4
      })
    )
  )
}

var cubes = [0, 1, 3, 2]

var Cubes = function Cubes(props) {
  return cubes.map(function(i) {
    return React.createElement(
      'div',
      a$4('CHILD_WRAP', {
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
        a$4('CHILD', {
          style: {
            backgroundColor: props.objectColor,
            animationDuration: props.duration + 's',
            animationDelay: props.duration / 2 * i / cubes.length + 's'
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

var a$4 = Atra({
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
var SIZE$5 = 100
var BACKGROUND_COLOR$5 = '#dddddd'
var OBJECT_COLOR$5 = 'rgb(54, 73, 87)'
var DURATION$5 = 1.8

var index$5 = function(props) {
  var parentSize = props.size || SIZE$5

  var cubeSize = parentSize / 4
  var animationName = createAnim(parentSize * 0.75)
  var duration = props.duration || DURATION$5

  return React.createElement(
    'div',
    a$5('PARENT', {
      style: {
        width: parentSize,
        height: parentSize,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$5
      }
    }),
    React.createElement(
      'div',
      a$5('CHILD', {
        style: {
          animationName: animationName,
          animationDuration: duration + 's',
          animationDelay: duration + 's',
          width: cubeSize,
          height: cubeSize,
          backgroundColor: props.objectColor || OBJECT_COLOR$5
        }
      })
    ),
    React.createElement(
      'div',
      a$5('CHILD', {
        style: {
          animationName: animationName,
          animationDuration: duration + 's',
          animationDelay: duration / 2 + 's',
          width: cubeSize,
          height: cubeSize,
          backgroundColor: props.objectColor || OBJECT_COLOR$5
        }
      })
    )
  )
}

var a$5 = Atra({
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
var SIZE$6 = 100
var BACKGROUND_COLOR$6 = '#dddddd'
var OBJECT_COLOR$6 = 'rgb(54, 73, 87)'
var DURATION$6 = 1.5

var index$6 = function(props) {
  return React.createElement(
    'div',
    a$6('PARENT', {
      style: {
        width: props.size || SIZE$6,
        height: props.size || SIZE$6,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$6
      }
    }),
    React.createElement(Cubes$1, {
      objectColor: props.objectColor || OBJECT_COLOR$6,
      duration: props.duration || DURATION$6
    })
  )
}

var CUBES = [0.5, 0.75, 1, 0.25, 0.5, 0.75, 0, 0.25, 0.5]

var Cubes$1 = function Cubes(_ref) {
  var objectColor = _ref.objectColor,
    duration = _ref.duration
  return CUBES.map(function(c, i) {
    return React.createElement(
      'div',
      a$6('CUBE', {
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

var a$6 = Atra({
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
var SIZE$7 = 100
var BACKGROUND_COLOR$7 = '#dddddd'
var OBJECT_COLOR$7 = 'rgb(54, 73, 87)'
var DURATION$7 = 1

var index$7 = function(props) {
  return React.createElement(
    'div',
    a$7('PARENT', {
      style: {
        width: props.size || SIZE$7,
        height: props.size || SIZE$7,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$7
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
var SIZE$8 = 100
var BACKGROUND_COLOR$8 = '#dddddd'
var OBJECT_COLOR$8 = 'rgb(54, 73, 87)'
var DURATION$8 = 1.2

var index$8 = function(props) {
  return React.createElement(
    'div',
    a$8('PARENT', {
      style: {
        width: props.size || SIZE$8,
        height: props.size || SIZE$8,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$8
      }
    }),
    React.createElement(Rects, {
      size: props.size || SIZE$8,
      objectColor: props.objectColor || OBJECT_COLOR$8,
      duration: props.duration || DURATION$8
    })
  )
}

var RECT_COUNT = 5
var DELAY_RANGE = 0.4

var Rects = function Rects(props) {
  return getRange(RECT_COUNT).map(function(index) {
    return React.createElement(
      'div',
      a$8('RECT', {
        key: index,
        style: {
          width: props.size / 12,
          marginRight: props.size / 24,
          left: props.size / 24 / 2,
          backgroundColor: props.objectColor,
          animationDuration: props.duration + 's',
          animationDelay:
            DELAY_RANGE * index / (RECT_COUNT - 1) - props.duration + 's'
        }
      })
    )
  })
}

var a$8 = Atra({
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

//
var assign$3 = Object.assign

var SIZE$9 = 100
var BACKGROUND_COLOR$9 = '#dddddd'
var OBJECT_COLOR$9 = 'rgb(54, 73, 87)'
var DURATION$9 = 2

var index$9 = function(props) {
  return React.createElement(
    'div',
    a$9('PARENT', {
      style: {
        width: props.size || SIZE$9,
        height: props.size || SIZE$9,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$9
      }
    }),
    React.createElement(
      'div',
      a$9('CHILD_FIRST', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR$9,
          animationDuration: (props.duration || DURATION$9) + 's'
        }
      })
    ),
    React.createElement(
      'div',
      a$9('CHILD_SECOND', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR$9,
          animationDuration: (props.duration || DURATION$9) + 's'
        }
      })
    )
  )
}

var CHILD_STYLE$2 = {
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

var a$9 = Atra({
  PARENT: {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  },
  CHILD_FIRST: {
    style: CHILD_STYLE$2
  },
  CHILD_SECOND: {
    style: assign$3({}, CHILD_STYLE$2, { animationDelay: '-1s' })
  }
})

//
var SIZE$10 = 100
var BACKGROUND_COLOR$10 = '#dddddd'
var OBJECT_COLOR$10 = 'rgb(54, 73, 87)'
var DURATION$10 = 1.2

var index$10 = function(props) {
  return React.createElement(
    'div',
    a$10('PARENT', {
      style: {
        width: props.size || SIZE$10,
        height: props.size || SIZE$10,
        backgroundColor: props.backgroundColor || BACKGROUND_COLOR$10
      }
    }),
    React.createElement(
      'div',
      a$10('CHILD', {
        style: {
          backgroundColor: props.objectColor || OBJECT_COLOR$10,
          animationDuration: (props.duration || DURATION$10) + 's'
        }
      })
    )
  )
}

var a$10 = Atra({
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

exports.ChasingDots = index
exports.Circle = index$3
exports.CubeGrid = index$6
exports.Pulse = index$7
exports.FadingCircle = index$1
exports.ThreeBounce = index$2
exports.FoldingCube = index$4
exports.WanderingCubes = index$5
exports.WaveLoading = index$8
exports.DoubleDounceLoading = index$9
exports.RotaingPlaneLoading = index$10
