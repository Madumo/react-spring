!(function(t, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? n(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], n)
      : n((t.ReactSpringAddons = {}))
})(this, function(t) {
  'use strict'
  function e(t, n) {
    ;(t.prototype = Object.create(n.prototype)),
      ((t.prototype.constructor = t).__proto__ = n)
  }
  var n = (function() {
      function t() {}
      var n = t.prototype
      return (
        (n.start = function(t, n, i, e) {}),
        (n.stop = function() {}),
        (n.__debouncedOnEnd = function(t) {
          var n = this.__onEnd
          ;(this.__onEnd = null), n && n(t)
        }),
        t
      )
    })(),
    M = function(t) {
      return global.requestAnimationFrame(t)
    },
    o = function(t) {
      return global.cancelAnimationFrame(t)
    },
    u = 4,
    _ = 1e-7,
    c = 10,
    f = 'function' == typeof Float32Array
  function r(t, n) {
    return 1 - 3 * n + 3 * t
  }
  function a(t, n) {
    return 3 * n - 6 * t
  }
  function s(t) {
    return 3 * t
  }
  function l(t, n, i) {
    return ((r(n, i) * t + a(n, i)) * t + s(n)) * t
  }
  function h(t, n, i) {
    return 3 * r(n, i) * t * t + 2 * a(n, i) * t + s(n)
  }
  function d(r, n, a, i) {
    if (!(0 <= r && r <= 1 && 0 <= a && a <= 1))
      throw new Error('bezier x values must be in [0, 1] range')
    var s = f ? new Float32Array(11) : new Array(11)
    if (r !== n || a !== i) for (var t = 0; t < 11; ++t) s[t] = l(0.1 * t, r, a)
    function e(t) {
      for (var n = 0, i = 1; 10 !== i && s[i] <= t; ++i) n += 0.1
      var e = n + 0.1 * ((t - s[--i]) / (s[i + 1] - s[i])),
        o = h(e, r, a)
      return 0.001 <= o
        ? (function(t, n, i, e) {
            for (var o = 0; o < u; ++o) {
              var r = h(n, i, e)
              if (0 === r) return n
              n -= (l(n, i, e) - t) / r
            }
            return n
          })(t, e, r, a)
        : 0 === o
          ? e
          : (function(t, n, i, e, o) {
              for (
                var r, a, s = 0;
                0 < (r = l((a = n + (i - n) / 2), e, o) - t)
                  ? (i = a)
                  : (n = a),
                  Math.abs(r) > _ && ++s < c;

              );
              return a
            })(t, n, n + 0.1, r, a)
    }
    return function(t) {
      return r === n && a === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(e(t), n, i)
    }
  }
  var i = (function() {
      function t() {}
      return (
        (t.step0 = function(t) {
          return 0 < t ? 1 : 0
        }),
        (t.step1 = function(t) {
          return 1 <= t ? 1 : 0
        }),
        (t.linear = function(t) {
          return t
        }),
        (t.ease = function(t) {
          return m(t)
        }),
        (t.quad = function(t) {
          return t * t
        }),
        (t.cubic = function(t) {
          return t * t * t
        }),
        (t.poly = function(n) {
          return function(t) {
            return Math.pow(t, n)
          }
        }),
        (t.sin = function(t) {
          return 1 - Math.cos((t * Math.PI) / 2)
        }),
        (t.circle = function(t) {
          return 1 - Math.sqrt(1 - t * t)
        }),
        (t.exp = function(t) {
          return Math.pow(2, 10 * (t - 1))
        }),
        (t.elastic = function(t) {
          void 0 === t && (t = 1)
          var n = t * Math.PI
          return function(t) {
            return (
              1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * n)
            )
          }
        }),
        (t.back = function(n) {
          return (
            void 0 === n && (n = 1.70158),
            function(t) {
              return t * t * ((n + 1) * t - n)
            }
          )
        }),
        (t.bounce = function(t) {
          return t < 1 / 2.75
            ? 7.5625 * t * t
            : t < 2 / 2.75
              ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
              : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
        }),
        (t.bezier = function(t, n, i, e) {
          return d(t, n, i, e)
        }),
        (t.in = function(t) {
          return t
        }),
        (t.out = function(n) {
          return function(t) {
            return 1 - n(1 - t)
          }
        }),
        (t.inOut = function(n) {
          return function(t) {
            return t < 0.5 ? n(2 * t) / 2 : 1 - n(2 * (1 - t)) / 2
          }
        }),
        t
      )
    })(),
    m = i.bezier(0.42, 0, 1, 1),
    p = i.inOut(i.ease),
    v = (function(i) {
      function t(t) {
        var n
        return (
          ((n = i.call(this) || this).onUpdate = function() {
            var t = Date.now()
            if (t >= n._startTime + n._duration)
              return (
                n._onUpdate(
                  0 === n._duration
                    ? n._to
                    : n._fromValue + n._easing(1) * (n._to - n._fromValue)
                ),
                void n.__debouncedOnEnd({ finished: !0 })
              )
            n._onUpdate(
              n._fromValue +
                n._easing((t - n._startTime) / n._duration) *
                  (n._to - n._fromValue)
            ),
              n.__active && (n._animationFrame = M(n.onUpdate))
          }),
          (n._to = t.to),
          (n._easing = void 0 !== t.easing ? t.easing : p),
          (n._duration = void 0 !== t.duration ? t.duration : 500),
          n
        )
      }
      e(t, i)
      var n = t.prototype
      return (
        (n.start = function(t, n, i) {
          var e = this
          ;(this.__active = !0),
            (this._fromValue = t),
            (this._onUpdate = n),
            (this.__onEnd = i)
          var o = function() {
            0 === e._duration
              ? (e._onUpdate(e._to), e.__debouncedOnEnd({ finished: !0 }))
              : ((e._startTime = Date.now()),
                (e._animationFrame = M(e.onUpdate)))
          }
          o()
        }),
        (n.stop = function() {
          ;(this.__active = !1),
            clearTimeout(this._timeout),
            o(this._animationFrame),
            this.__debouncedOnEnd({ finished: !1 })
        }),
        t
      )
    })(n),
    T = function(t, n) {
      return null == t ? n : t
    },
    y = (function(a) {
      function r(t) {
        var y
        ;((y = a.call(this) || this).onUpdate = function() {
          var t = Date.now()
          t > y._lastTime + 64 && (t = y._lastTime + 64)
          var n = (t - y._lastTime) / 1e3
          y._frameTime += n
          var i = y._friction,
            e = y._mass,
            o = y._tension,
            r = -y._initialVelocity,
            a = i / (2 * Math.sqrt(o * e)),
            s = Math.sqrt(o / e),
            u = s * Math.sqrt(1 - a * a),
            _ = y._to - y._startPosition,
            c = 0,
            f = 0,
            l = y._frameTime
          if (a < 1) {
            var h = Math.exp(-a * s * l)
            ;(c =
              y._to -
              h *
                (((r + a * s * _) / u) * Math.sin(u * l) +
                  _ * Math.cos(u * l))),
              (f =
                a *
                  s *
                  h *
                  ((Math.sin(u * l) * (r + a * s * _)) / u +
                    _ * Math.cos(u * l)) -
                h *
                  (Math.cos(u * l) * (r + a * s * _) - u * _ * Math.sin(u * l)))
          } else {
            var d = Math.exp(-s * l)
            ;(c = y._to - d * (_ + (r + s * _) * l)),
              (f = d * (r * (l * s - 1) + l * _ * (s * s)))
          }
          if (
            ((y._lastTime = t),
            (y._lastPosition = c),
            (y._lastVelocity = f),
            y._onUpdate(c),
            y.__active)
          ) {
            var m = !1
            y._overshootClamping &&
              0 !== y._stiffness &&
              (m = y._startPosition < y._to ? c > y._to : c < y._to)
            var p = Math.abs(f) <= y._restSpeedThreshold,
              v = !0
            if (
              (0 !== y._stiffness &&
                (v = Math.abs(y._to - c) <= y._restDisplacementThreshold),
              m || (p && v))
            )
              return (
                0 !== y._stiffness &&
                  ((y._lastPosition = y._to),
                  (y._lastVelocity = 0),
                  y._onUpdate(y._to)),
                y.__debouncedOnEnd({ finished: !0 })
              )
            y._animationFrame = M(y.onUpdate)
          }
        }),
          (y._overshootClamping = T(t.overshootClamping, !1)),
          (y._restDisplacementThreshold = T(t.restDisplacementThreshold, 1e-4)),
          (y._restSpeedThreshold = T(t.restSpeedThreshold, 1e-4)),
          (y._initialVelocity = T(t.velocity, 0)),
          (y._lastVelocity = T(t.velocity, 0)),
          (y._to = t.to)
        var n,
          i,
          e,
          o,
          r = ((n = T(t.tension, 40)),
          (i = T(t.friction, 7)),
          {
            tension: ((o = n), 3.62 * (o - 30) + 194),
            friction: ((e = i), 3 * (e - 8) + 25),
          })
        return (
          (y._tension = r.tension),
          (y._friction = r.friction),
          (y._mass = T(t.mass, 1)),
          y
        )
      }
      e(r, a)
      var t = r.prototype
      return (
        (t.start = function(t, n, i, e) {
          if (
            ((this.__active = !0),
            (this._startPosition = t),
            (this._lastPosition = this._startPosition),
            (this._onUpdate = n),
            (this.__onEnd = i),
            (this._lastTime = Date.now()),
            (this._frameTime = 0),
            e instanceof r)
          ) {
            var o = e.getInternalState()
            ;(this._lastPosition = o.lastPosition),
              (this._lastVelocity = o.lastVelocity),
              (this._lastTime = o.lastTime)
          }
          void 0 !== this._initialVelocity &&
            null !== this._initialVelocity &&
            (this._lastVelocity = this._initialVelocity),
            this.onUpdate()
        }),
        (t.getInternalState = function() {
          return {
            lastPosition: this._lastPosition,
            lastVelocity: this._lastVelocity,
            lastTime: this._lastTime,
          }
        }),
        (t.stop = function() {
          ;(this.__active = !1),
            clearTimeout(this._timeout),
            o(this._animationFrame),
            this.__debouncedOnEnd({ finished: !1 })
        }),
        r
      )
    })(n)
  ;(t.TimingAnimation = v),
    (t.OscillatorAnimation = y),
    (t.Easing = i),
    Object.defineProperty(t, '__esModule', { value: !0 })
})
