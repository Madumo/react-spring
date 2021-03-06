import _inheritsLoose from '@babel/runtime/helpers/builtin/es6/inheritsLoose'

// Important note: start() and stop() will only be called at most once.
// Once an animation has been stopped or finished its course, it will
// not be reused.
var Animation =
  /*#__PURE__*/
  (function() {
    function Animation() {}

    var _proto = Animation.prototype

    _proto.start = function start(
      fromValue,
      onUpdate,
      onEnd,
      previousAnimation
    ) {}

    _proto.stop = function stop() {} // Helper function for subclasses to make sure onEnd is only called once.

    _proto.__debouncedOnEnd = function __debouncedOnEnd(result) {
      var onEnd = this.__onEnd
      this.__onEnd = null
      onEnd && onEnd(result)
    }

    return Animation
  })()

var requestFrame = function requestFrame(cb) {
  return global.requestAnimationFrame(cb)
}
var cancelFrame = function cancelFrame(cb) {
  return global.cancelAnimationFrame(cb)
}

var NEWTON_ITERATIONS = 4
var NEWTON_MIN_SLOPE = 0.001
var SUBDIVISION_PRECISION = 0.0000001
var SUBDIVISION_MAX_ITERATIONS = 10
var kSplineTableSize = 11
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0)
var float32ArraySupported = typeof Float32Array === 'function'

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1
}

function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1
}

function C(aA1) {
  return 3.0 * aA1
} // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.

function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT
} // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.

function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1)
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX
  var currentT
  var i = 0

  do {
    currentT = aA + (aB - aA) / 2.0
    currentX = calcBezier(currentT, mX1, mX2) - aX

    if (currentX > 0.0) {
      aB = currentT
    } else {
      aA = currentT
    }
  } while (
    Math.abs(currentX) > SUBDIVISION_PRECISION &&
    ++i < SUBDIVISION_MAX_ITERATIONS
  )

  return currentT
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2)

    if (currentSlope === 0.0) {
      return aGuessT
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX
    aGuessT -= currentX / currentSlope
  }

  return aGuessT
}

function _bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    // eslint-disable-line yoda
    throw new Error('bezier x values must be in [0, 1] range')
  } // Precompute samples table

  var sampleValues = float32ArraySupported
    ? new Float32Array(kSplineTableSize)
    : new Array(kSplineTableSize)

  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2)
    }
  }

  function getTForX(aX) {
    var intervalStart = 0.0
    var currentSample = 1
    var lastSample = kSplineTableSize - 1

    for (
      ;
      currentSample !== lastSample && sampleValues[currentSample] <= aX;
      ++currentSample
    ) {
      intervalStart += kSampleStepSize
    }

    --currentSample // Interpolate to provide an initial guess for t

    var dist =
      (aX - sampleValues[currentSample]) /
      (sampleValues[currentSample + 1] - sampleValues[currentSample])
    var guessForT = intervalStart + dist * kSampleStepSize
    var initialSlope = getSlope(guessForT, mX1, mX2)

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2)
    } else if (initialSlope === 0.0) {
      return guessForT
    } else {
      return binarySubdivide(
        aX,
        intervalStart,
        intervalStart + kSampleStepSize,
        mX1,
        mX2
      )
    }
  }

  return function BezierEasing(x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x // linear
    } // Because JavaScript number are imprecise, we should guarantee the extremes are right.

    if (x === 0) {
      return 0
    }

    if (x === 1) {
      return 1
    }

    return calcBezier(getTForX(x), mY1, mY2)
  }
}

var Easing =
  /*#__PURE__*/
  (function() {
    function Easing() {}

    Easing.step0 = function step0(n) {
      return n > 0 ? 1 : 0
    }

    Easing.step1 = function step1(n) {
      return n >= 1 ? 1 : 0
    }

    Easing.linear = function linear(t) {
      return t
    }

    Easing.ease = function ease(t) {
      return _ease(t)
    }

    Easing.quad = function quad(t) {
      return t * t
    }

    Easing.cubic = function cubic(t) {
      return t * t * t
    }

    Easing.poly = function poly(n) {
      return function(t) {
        return Math.pow(t, n)
      }
    }

    Easing.sin = function sin(t) {
      return 1 - Math.cos((t * Math.PI) / 2)
    }

    Easing.circle = function circle(t) {
      return 1 - Math.sqrt(1 - t * t)
    }

    Easing.exp = function exp(t) {
      return Math.pow(2, 10 * (t - 1))
    }
    /**
     * A simple elastic interaction, similar to a spring.  Default bounciness
     * is 1, which overshoots a little bit once.  0 bounciness doesn't overshoot
     * at all, and bounciness of N > 1 will overshoot about N times.
     *
     * Wolfram Plots:
     *
     *   http://tiny.cc/elastic_b_1 (default bounciness = 1)
     *   http://tiny.cc/elastic_b_3 (bounciness = 3)
     */

    Easing.elastic = function elastic(bounciness) {
      if (bounciness === void 0) {
        bounciness = 1
      }

      var p = bounciness * Math.PI
      return function(t) {
        return 1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * p)
      }
    }

    Easing.back = function back(s) {
      if (s === undefined) s = 1.70158
      return function(t) {
        return t * t * ((s + 1) * t - s)
      }
    }

    Easing.bounce = function bounce(t) {
      if (t < 1 / 2.75) {
        return 7.5625 * t * t
      }

      if (t < 2 / 2.75) {
        t -= 1.5 / 2.75
        return 7.5625 * t * t + 0.75
      }

      if (t < 2.5 / 2.75) {
        t -= 2.25 / 2.75
        return 7.5625 * t * t + 0.9375
      }

      t -= 2.625 / 2.75
      return 7.5625 * t * t + 0.984375
    }

    Easing.bezier = function bezier(x1, y1, x2, y2) {
      return _bezier(x1, y1, x2, y2)
    }

    Easing.in = function _in(easing) {
      return easing
    }
    /**
     * Runs an easing function backwards.
     */

    Easing.out = function out(easing) {
      return function(t) {
        return 1 - easing(1 - t)
      }
    }
    /**
     * Makes any easing function symmetrical.
     */

    Easing.inOut = function inOut(easing) {
      return function(t) {
        if (t < 0.5) return easing(t * 2) / 2
        return 1 - easing((1 - t) * 2) / 2
      }
    }

    return Easing
  })()

var _ease = Easing.bezier(0.42, 0, 1, 1)

var easeInOut = Easing.inOut(Easing.ease)

var TimingAnimation =
  /*#__PURE__*/
  (function(_Animation) {
    _inheritsLoose(TimingAnimation, _Animation)

    function TimingAnimation(config) {
      var _this

      _this = _Animation.call(this) || this

      _this.onUpdate = function() {
        var now = Date.now()

        if (now >= _this._startTime + _this._duration) {
          _this._onUpdate(
            _this._duration === 0
              ? _this._to
              : _this._fromValue +
                _this._easing(1) * (_this._to - _this._fromValue)
          )

          _this.__debouncedOnEnd({
            finished: true,
          })

          return
        }

        _this._onUpdate(
          _this._fromValue +
            _this._easing((now - _this._startTime) / _this._duration) *
              (_this._to - _this._fromValue)
        )

        if (_this.__active) _this._animationFrame = requestFrame(_this.onUpdate)
      }

      _this._to = config.to
      _this._easing = config.easing !== undefined ? config.easing : easeInOut
      _this._duration = config.duration !== undefined ? config.duration : 500
      return _this
    }

    var _proto = TimingAnimation.prototype

    _proto.start = function start(fromValue, onUpdate, onEnd) {
      var _this2 = this

      this.__active = true
      this._fromValue = fromValue
      this._onUpdate = onUpdate
      this.__onEnd = onEnd

      var start = function start() {
        if (_this2._duration === 0) {
          _this2._onUpdate(_this2._to)

          _this2.__debouncedOnEnd({
            finished: true,
          })
        } else {
          _this2._startTime = Date.now()
          _this2._animationFrame = requestFrame(_this2.onUpdate)
        }
      }

      start()
    }

    _proto.stop = function stop() {
      this.__active = false
      clearTimeout(this._timeout)
      cancelFrame(this._animationFrame)

      this.__debouncedOnEnd({
        finished: false,
      })
    }

    return TimingAnimation
  })(Animation)

var withDefault = function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value
}

var tensionFromOrigamiValue = function tensionFromOrigamiValue(oValue) {
  return (oValue - 30) * 3.62 + 194
}

var frictionFromOrigamiValue = function frictionFromOrigamiValue(oValue) {
  return (oValue - 8) * 3 + 25
}

var fromOrigamiTensionAndFriction = function fromOrigamiTensionAndFriction(
  tension,
  friction
) {
  return {
    tension: tensionFromOrigamiValue(tension),
    friction: frictionFromOrigamiValue(friction),
  }
}

var OscillatorAnimation =
  /*#__PURE__*/
  (function(_Animation) {
    _inheritsLoose(OscillatorAnimation, _Animation)

    function OscillatorAnimation(config) {
      var _this

      _this = _Animation.call(this) || this

      _this.onUpdate = function() {
        // If for some reason we lost a lot of frames (e.g. process large payload or
        // stopped in the debugger), we only advance by 4 frames worth of
        // computation and will continue on the next frame. It's better to have it
        // running at faster speed than jumping to the end.
        var MAX_STEPS = 64
        var now = Date.now()

        if (now > _this._lastTime + MAX_STEPS) {
          now = _this._lastTime + MAX_STEPS
        }

        var deltaTime = (now - _this._lastTime) / 1000
        _this._frameTime += deltaTime
        var c = _this._friction
        var m = _this._mass
        var k = _this._tension
        var v0 = -_this._initialVelocity
        var zeta = c / (2 * Math.sqrt(k * m)) // damping ratio

        var omega0 = Math.sqrt(k / m) // undamped angular frequency of the oscillator (rad/ms)

        var omega1 = omega0 * Math.sqrt(1.0 - zeta * zeta) // exponential decay

        var x0 = _this._to - _this._startPosition // calculate the oscillation from x0 = 1 to x = 0

        var position = 0.0
        var velocity = 0.0
        var t = _this._frameTime

        if (zeta < 1) {
          // Under damped
          var envelope = Math.exp(-zeta * omega0 * t)
          position =
            _this._to -
            envelope *
              (((v0 + zeta * omega0 * x0) / omega1) * Math.sin(omega1 * t) +
                x0 * Math.cos(omega1 * t)) // This looks crazy -- it's actually just the derivative of the
          // oscillation function

          velocity =
            zeta *
              omega0 *
              envelope *
              ((Math.sin(omega1 * t) * (v0 + zeta * omega0 * x0)) / omega1 +
                x0 * Math.cos(omega1 * t)) -
            envelope *
              (Math.cos(omega1 * t) * (v0 + zeta * omega0 * x0) -
                omega1 * x0 * Math.sin(omega1 * t))
        } else {
          // Critically damped
          var _envelope = Math.exp(-omega0 * t)

          position = _this._to - _envelope * (x0 + (v0 + omega0 * x0) * t)
          velocity =
            _envelope * (v0 * (t * omega0 - 1) + t * x0 * (omega0 * omega0))
        }

        _this._lastTime = now
        _this._lastPosition = position
        _this._lastVelocity = velocity

        _this._onUpdate(position) // a listener might have stopped us in _onUpdate

        if (!_this.__active) return // Conditions for stopping the spring animation

        var isOvershooting = false

        if (_this._overshootClamping && _this._stiffness !== 0) {
          isOvershooting =
            _this._startPosition < _this._to
              ? position > _this._to
              : position < _this._to
        }

        var isVelocity = Math.abs(velocity) <= _this._restSpeedThreshold

        var isDisplacement = true

        if (_this._stiffness !== 0) {
          isDisplacement =
            Math.abs(_this._to - position) <= _this._restDisplacementThreshold
        }

        if (isOvershooting || (isVelocity && isDisplacement)) {
          if (_this._stiffness !== 0) {
            // Ensure that we end up with a round value
            _this._lastPosition = _this._to
            _this._lastVelocity = 0

            _this._onUpdate(_this._to)
          }

          return _this.__debouncedOnEnd({
            finished: true,
          })
        }

        _this._animationFrame = requestFrame(_this.onUpdate)
      }

      _this._overshootClamping = withDefault(config.overshootClamping, false)
      _this._restDisplacementThreshold = withDefault(
        config.restDisplacementThreshold,
        0.0001
      )
      _this._restSpeedThreshold = withDefault(config.restSpeedThreshold, 0.0001)
      _this._initialVelocity = withDefault(config.velocity, 0)
      _this._lastVelocity = withDefault(config.velocity, 0)
      _this._to = config.to
      var springConfig = fromOrigamiTensionAndFriction(
        withDefault(config.tension, 40),
        withDefault(config.friction, 7)
      )
      _this._tension = springConfig.tension
      _this._friction = springConfig.friction
      _this._mass = withDefault(config.mass, 1)
      return _this
    }

    var _proto = OscillatorAnimation.prototype

    _proto.start = function start(
      fromValue,
      onUpdate,
      onEnd,
      previousAnimation
    ) {
      this.__active = true
      this._startPosition = fromValue
      this._lastPosition = this._startPosition
      this._onUpdate = onUpdate
      this.__onEnd = onEnd
      this._lastTime = Date.now()
      this._frameTime = 0.0

      if (previousAnimation instanceof OscillatorAnimation) {
        var internalState = previousAnimation.getInternalState()
        this._lastPosition = internalState.lastPosition
        this._lastVelocity = internalState.lastVelocity
        this._lastTime = internalState.lastTime
      }

      if (this._initialVelocity !== undefined && this._initialVelocity !== null)
        this._lastVelocity = this._initialVelocity
      this.onUpdate()
    }

    _proto.getInternalState = function getInternalState() {
      return {
        lastPosition: this._lastPosition,
        lastVelocity: this._lastVelocity,
        lastTime: this._lastTime,
      }
    }

    _proto.stop = function stop() {
      this.__active = false
      clearTimeout(this._timeout)
      cancelFrame(this._animationFrame)

      this.__debouncedOnEnd({
        finished: false,
      })
    }

    return OscillatorAnimation
  })(Animation)

export { TimingAnimation, OscillatorAnimation, Easing }
