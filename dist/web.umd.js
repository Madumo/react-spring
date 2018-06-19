!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('react'), require('react-dom'))
    : 'function' == typeof define && define.amd
      ? define(['exports', 'react', 'react-dom'], e)
      : e((t.ReactSpring = {}), t.React, t.ReactDOM)
})(this, function(t, g, _) {
  'use strict'
  function P() {
    return (P =
      Object.assign ||
      function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      }).apply(this, arguments)
  }
  function y(t, e) {
    if (null == t) return {}
    var n,
      r,
      i = {},
      o = Object.keys(t)
    for (r = 0; r < o.length; r++)
      (n = o[r]), 0 <= e.indexOf(n) || (i[n] = t[n])
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t)
      for (r = 0; r < a.length; r++)
        (n = a[r]),
          0 <= e.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]))
    }
    return i
  }
  ;(g = g && g.hasOwnProperty('default') ? g.default : g),
    (_ = _ && _.hasOwnProperty('default') ? _.default : _)
  var e = void 0,
    i = void 0,
    V = [],
    b = function(t) {
      return global.requestAnimationFrame(t)
    },
    r = function(t) {
      return global.cancelAnimationFrame(t)
    },
    u = void 0,
    n = function(t, e) {
      return (i = { fn: t, transform: e })
    },
    o = function(t) {
      return (V = t)
    },
    a = function(t) {
      return (e = t)
    },
    s = function(t) {
      return (u = t)
    },
    l = Object.freeze({
      get bugfixes() {
        return e
      },
      get applyAnimatedValues() {
        return i
      },
      get colorNames() {
        return V
      },
      get requestFrame() {
        return b
      },
      get cancelFrame() {
        return r
      },
      get interpolation() {
        return u
      },
      injectApplyAnimatedValues: n,
      injectColorNames: o,
      injectBugfixes: a,
      injectInterpolation: s,
      injectFrame: function(t, e) {
        var n
        return (b = (n = [t, e])[0]), (r = n[1]), n
      },
    }),
    c = {
      transparent: 0,
      aliceblue: 4042850303,
      antiquewhite: 4209760255,
      aqua: 16777215,
      aquamarine: 2147472639,
      azure: 4043309055,
      beige: 4126530815,
      bisque: 4293182719,
      black: 255,
      blanchedalmond: 4293643775,
      blue: 65535,
      blueviolet: 2318131967,
      brown: 2771004159,
      burlywood: 3736635391,
      burntsienna: 3934150143,
      cadetblue: 1604231423,
      chartreuse: 2147418367,
      chocolate: 3530104575,
      coral: 4286533887,
      cornflowerblue: 1687547391,
      cornsilk: 4294499583,
      crimson: 3692313855,
      cyan: 16777215,
      darkblue: 35839,
      darkcyan: 9145343,
      darkgoldenrod: 3095792639,
      darkgray: 2846468607,
      darkgreen: 6553855,
      darkgrey: 2846468607,
      darkkhaki: 3182914559,
      darkmagenta: 2332068863,
      darkolivegreen: 1433087999,
      darkorange: 4287365375,
      darkorchid: 2570243327,
      darkred: 2332033279,
      darksalmon: 3918953215,
      darkseagreen: 2411499519,
      darkslateblue: 1211993087,
      darkslategray: 793726975,
      darkslategrey: 793726975,
      darkturquoise: 13554175,
      darkviolet: 2483082239,
      deeppink: 4279538687,
      deepskyblue: 12582911,
      dimgray: 1768516095,
      dimgrey: 1768516095,
      dodgerblue: 512819199,
      firebrick: 2988581631,
      floralwhite: 4294635775,
      forestgreen: 579543807,
      fuchsia: 4278255615,
      gainsboro: 3705462015,
      ghostwhite: 4177068031,
      gold: 4292280575,
      goldenrod: 3668254975,
      gray: 2155905279,
      green: 8388863,
      greenyellow: 2919182335,
      grey: 2155905279,
      honeydew: 4043305215,
      hotpink: 4285117695,
      indianred: 3445382399,
      indigo: 1258324735,
      ivory: 4294963455,
      khaki: 4041641215,
      lavender: 3873897215,
      lavenderblush: 4293981695,
      lawngreen: 2096890111,
      lemonchiffon: 4294626815,
      lightblue: 2916673279,
      lightcoral: 4034953471,
      lightcyan: 3774873599,
      lightgoldenrodyellow: 4210742015,
      lightgray: 3553874943,
      lightgreen: 2431553791,
      lightgrey: 3553874943,
      lightpink: 4290167295,
      lightsalmon: 4288707327,
      lightseagreen: 548580095,
      lightskyblue: 2278488831,
      lightslategray: 2005441023,
      lightslategrey: 2005441023,
      lightsteelblue: 2965692159,
      lightyellow: 4294959359,
      lime: 16711935,
      limegreen: 852308735,
      linen: 4210091775,
      magenta: 4278255615,
      maroon: 2147483903,
      mediumaquamarine: 1724754687,
      mediumblue: 52735,
      mediumorchid: 3126187007,
      mediumpurple: 2473647103,
      mediumseagreen: 1018393087,
      mediumslateblue: 2070474495,
      mediumspringgreen: 16423679,
      mediumturquoise: 1221709055,
      mediumvioletred: 3340076543,
      midnightblue: 421097727,
      mintcream: 4127193855,
      mistyrose: 4293190143,
      moccasin: 4293178879,
      navajowhite: 4292783615,
      navy: 33023,
      oldlace: 4260751103,
      olive: 2155872511,
      olivedrab: 1804477439,
      orange: 4289003775,
      orangered: 4282712319,
      orchid: 3664828159,
      palegoldenrod: 4008225535,
      palegreen: 2566625535,
      paleturquoise: 2951671551,
      palevioletred: 3681588223,
      papayawhip: 4293907967,
      peachpuff: 4292524543,
      peru: 3448061951,
      pink: 4290825215,
      plum: 3718307327,
      powderblue: 2967529215,
      purple: 2147516671,
      rebeccapurple: 1714657791,
      red: 4278190335,
      rosybrown: 3163525119,
      royalblue: 1097458175,
      saddlebrown: 2336560127,
      salmon: 4202722047,
      sandybrown: 4104413439,
      seagreen: 780883967,
      seashell: 4294307583,
      sienna: 2689740287,
      silver: 3233857791,
      skyblue: 2278484991,
      slateblue: 1784335871,
      slategray: 1887473919,
      slategrey: 1887473919,
      snow: 4294638335,
      springgreen: 16744447,
      steelblue: 1182971135,
      tan: 3535047935,
      teal: 8421631,
      thistle: 3636451583,
      tomato: 4284696575,
      turquoise: 1088475391,
      violet: 4001558271,
      wheat: 4125012991,
      white: 4294967295,
      whitesmoke: 4126537215,
      yellow: 4294902015,
      yellowgreen: 2597139199,
    },
    f = function(t) {
      return t
    },
    p = (function() {
      function t() {}
      return (
        (t.create = function(t) {
          if ('function' == typeof t)
            return function() {
              return t.apply(void 0, arguments)
            }
          if (u && t.output && 'string' == typeof t.output[0]) return u(t)
          var n = t.output,
            r = t.range,
            i = t.easing || f,
            o = 'extend',
            a = t.map
          void 0 !== t.extrapolateLeft
            ? (o = t.extrapolateLeft)
            : void 0 !== t.extrapolate && (o = t.extrapolate)
          var s = 'extend'
          return (
            void 0 !== t.extrapolateRight
              ? (s = t.extrapolateRight)
              : void 0 !== t.extrapolate && (s = t.extrapolate),
            function(t) {
              var e = (function(t, e) {
                for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
                return n - 1
              })(t, r)
              return (function(t, e, n, r, i, o, a, s, u) {
                var l = u ? u(t) : t
                if (l < e) {
                  if ('identity' === a) return l
                  'clamp' === a && (l = e)
                }
                if (n < l) {
                  if ('identity' === s) return l
                  'clamp' === s && (l = n)
                }
                if (r === i) return r
                if (e === n) return t <= e ? r : i
                e === -1 / 0
                  ? (l = -l)
                  : n === 1 / 0
                    ? (l -= e)
                    : (l = (l - e) / (n - e))
                ;(l = o(l)),
                  r === -1 / 0
                    ? (l = -l)
                    : i === 1 / 0
                      ? (l += r)
                      : (l = l * (i - r) + r)
                return l
              })(t, r[e], r[e + 1], n[e], n[e + 1], i, o, s, a)
            }
          )
        }),
        t
      )
    })()
  function h(t, e, n) {
    return (
      n < 0 && (n += 1),
      1 < n && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
          ? e
          : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
    )
  }
  function d(t, e, n) {
    var r = n < 0.5 ? n * (1 + e) : n + e - n * e,
      i = 2 * n - r,
      o = h(i, r, t + 1 / 3),
      a = h(i, r, t),
      s = h(i, r, t - 1 / 3)
    return (
      (Math.round(255 * o) << 24) |
      (Math.round(255 * a) << 16) |
      (Math.round(255 * s) << 8)
    )
  }
  var m = '[-+]?\\d*\\.?\\d+',
    v = m + '%'
  function k() {
    return (
      '\\(\\s*(' +
      ((t = arguments), Array.prototype.slice.call(t, 0)).join(')\\s*,\\s*(') +
      ')\\s*\\)'
    )
    var t
  }
  var w = {
    rgb: new RegExp('rgb' + k(m, m, m)),
    rgba: new RegExp('rgba' + k(m, m, m, m)),
    hsl: new RegExp('hsl' + k(m, v, v)),
    hsla: new RegExp('hsla' + k(m, v, v, m)),
    hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#([0-9a-fA-F]{6})$/,
    hex8: /^#([0-9a-fA-F]{8})$/,
  }
  function x(t) {
    var e = parseInt(t, 10)
    return e < 0 ? 0 : 255 < e ? 255 : e
  }
  function A(t) {
    return ((parseFloat(t) % 360 + 360) % 360) / 360
  }
  function S(t) {
    var e = parseFloat(t)
    return e < 0 ? 0 : 1 < e ? 255 : Math.round(255 * e)
  }
  function C(t) {
    var e = parseFloat(t, 10)
    return e < 0 ? 0 : 100 < e ? 1 : e / 100
  }
  function F(t) {
    var e,
      n,
      r =
        'number' == typeof (e = t)
          ? e >>> 0 === e && 0 <= e && e <= 4294967295
            ? e
            : null
          : (n = w.hex6.exec(e))
            ? parseInt(n[1] + 'ff', 16) >>> 0
            : c.hasOwnProperty(e)
              ? c[e]
              : (n = w.rgb.exec(e))
                ? ((x(n[1]) << 24) | (x(n[2]) << 16) | (x(n[3]) << 8) | 255) >>>
                  0
                : (n = w.rgba.exec(e))
                  ? ((x(n[1]) << 24) |
                      (x(n[2]) << 16) |
                      (x(n[3]) << 8) |
                      S(n[4])) >>>
                    0
                  : (n = w.hex3.exec(e))
                    ? parseInt(
                        n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + 'ff',
                        16
                      ) >>> 0
                    : (n = w.hex8.exec(e))
                      ? parseInt(n[1], 16) >>> 0
                      : (n = w.hex4.exec(e))
                        ? parseInt(
                            n[1] +
                              n[1] +
                              n[2] +
                              n[2] +
                              n[3] +
                              n[3] +
                              n[4] +
                              n[4],
                            16
                          ) >>> 0
                        : (n = w.hsl.exec(e))
                          ? (255 | d(A(n[1]), C(n[2]), C(n[3]))) >>> 0
                          : (n = w.hsla.exec(e))
                            ? (d(A(n[1]), C(n[2]), C(n[3])) | S(n[4])) >>> 0
                            : null
    return null === r
      ? t
      : 'rgba(' +
          ((4278190080 & (r = r || 0)) >>> 24) +
          ', ' +
          ((16711680 & r) >>> 16) +
          ', ' +
          ((65280 & r) >>> 8) +
          ', ' +
          (255 & r) / 255 +
          ')'
  }
  var O = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
  function T(t, e) {
    ;(t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e)
  }
  var E = (function() {
      function t() {}
      var e = t.prototype
      return (
        (e.__attach = function() {}),
        (e.__detach = function() {}),
        (e.__getValue = function() {}),
        (e.__getAnimatedValue = function() {
          return this.__getValue()
        }),
        (e.__addChild = function(t) {}),
        (e.__removeChild = function(t) {}),
        (e.__getChildren = function() {
          return []
        }),
        t
      )
    })(),
    j = (function(l) {
      function t(t, e, n, r, i) {
        var o, a, s, u
        return (
          ((o = l.call(this) || this).update = ((s = 1e3 / 30),
          (u = !(a = function() {
            o._value.animate(
              new o._animationClass(
                P({}, o._animationConfig, {
                  to: o._animationConfig.to.__getValue(),
                })
              ),
              o._callback
            )
          })),
          function() {
            u ||
              (a.call(),
              (u = !0),
              setTimeout(function() {
                return (u = !1)
              }, s))
          })),
          (o._value = t),
          (o._parent = e),
          (o._animationClass = n),
          (o._animationConfig = r),
          (o._callback = i),
          o.__attach(),
          o
        )
      }
      T(t, l)
      var e = t.prototype
      return (
        (e.__getValue = function() {
          return this._parent.__getValue()
        }),
        (e.__attach = function() {
          this._parent.__addChild(this)
        }),
        (e.__detach = function() {
          this._parent.__removeChild(this)
        }),
        t
      )
    })(E)
  var R = (function(e) {
      function t() {
        var t
        return ((t = e.call(this) || this)._children = []), t
      }
      T(t, e)
      var n = t.prototype
      return (
        (n.__addChild = function(t) {
          t instanceof j && (this._tracked = !0),
            0 === this._children.length && this.__attach(),
            this._children.push(t)
        }),
        (n.__removeChild = function(t) {
          var e = this._children.indexOf(t)
          ;-1 !== e
            ? (this._children.splice(e, 1),
              0 === this._children.length && this.__detach())
            : console.warn("Trying to remove a child that doesn't exist")
        }),
        (n.__getChildren = function() {
          return this._children
        }),
        t
      )
    })(E),
    M = (function(r) {
      function e(t, e) {
        var n
        return (
          ((n = r.call(this) || this)._parents = Array.isArray(t) ? t : [t]),
          (n._interpolation = p.create(e)),
          n
        )
      }
      T(e, r)
      var t = e.prototype
      return (
        (t.__getValue = function() {
          return this._interpolation.apply(
            this,
            this._parents.map(function(t) {
              return t.__getValue()
            })
          )
        }),
        (t.__attach = function() {
          for (var t = 0; t < this._parents.length; ++t)
            this._parents[t] instanceof E && this._parents[t].__addChild(this)
        }),
        (t.__detach = function() {
          for (var t = 0; t < this._parents.length; ++t)
            this._parents[t] instanceof E &&
              this._parents[t].__removeChild(this)
        }),
        (t.interpolate = function(t) {
          return new e(this, t)
        }),
        e
      )
    })(R),
    W = 0
  var U = (function(n) {
      function t(t) {
        var e
        return (
          ((e = n.call(this) || this)._value = t),
          (e._animation = null),
          (e._animatedStyles = new Set()),
          (e._listeners = {}),
          e
        )
      }
      T(t, n)
      var e = t.prototype
      return (
        (e.__detach = function() {
          this.stopAnimation()
        }),
        (e.__getValue = function() {
          return this._value
        }),
        (e._update = function() {
          !(function e(t, n) {
            'function' == typeof t.update
              ? n.add(t)
              : t.__getChildren().forEach(function(t) {
                  return e(t, n)
                })
          })(this, this._animatedStyles)
        }),
        (e._flush = function() {
          0 === this._animatedStyles.size && this._update(),
            this._animatedStyles.forEach(function(t) {
              return t.update()
            })
        }),
        (e._updateValue = function(t) {
          for (var e in ((this._value = t), this._flush(), this._listeners))
            this._listeners[e]({ value: this.__getValue() })
        }),
        (e.setValue = function(t) {
          this._animation && (this._animation.stop(), (this._animation = null)),
            this._animatedStyles.clear(),
            this._updateValue(t)
        }),
        (e.stopAnimation = function(t) {
          this.stopTracking(),
            this._animation && this._animation.stop(),
            (this._animation = null),
            t && t(this.__getValue())
        }),
        (e.interpolate = function(t) {
          return new M(this, t)
        }),
        (e.animate = function(t, e) {
          var n = this,
            r = this._animation
          this._animation && this._animation.stop(),
            (this._animation = t),
            this._animatedStyles.clear(),
            t.start(
              this._value,
              function(t) {
                return n._updateValue(t)
              },
              function(t) {
                ;(n._animation = null), e && e(t)
              },
              r
            )
        }),
        (e.addListener = function(t) {
          var e = String(W++)
          return (this._listeners[e] = t), e
        }),
        (e.removeListener = function(t) {
          delete this._listeners[t]
        }),
        (e.removeAllListeners = function() {
          this._listeners = {}
        }),
        (e.stopTracking = function() {
          this._tracking && this._tracking.__detach(), (this._tracking = null)
        }),
        (e.track = function(t) {
          this.stopTracking(), (this._tracking = t)
        }),
        t
      )
    })(R),
    D = function(e) {
      return Object.keys(e).map(function(t) {
        return e[t]
      })
    },
    q = function(t) {
      return 'auto' === t
    }
  var z = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    I = ['Webkit', 'Ms', 'Moz', 'O']
  Object.keys(z).forEach(function(r) {
    return I.forEach(function(t) {
      return (z[
        ((e = t), (n = r), e + n.charAt(0).toUpperCase() + n.substring(1))
      ] =
        z[r])
      var e, n
    })
  }),
    s(function(n) {
      var t = n.output.map(F),
        r = t[0].match(O).map(function() {
          return []
        })
      t.forEach(function(t) {
        t.match(O).forEach(function(t, e) {
          return r[e].push(+t)
        })
      })
      var i = t[0].match(O).map(function(t, e) {
          return p.create(P({}, n, { output: r[e] }))
        }),
        o = /^rgb/.test(t[0])
      return function(e) {
        var n = 0
        return t[0].replace(O, function() {
          var t = i[n++](e)
          return String(o && n < 4 ? Math.round(t) : t)
        })
      }
    }),
    o(c),
    a(function(p, h) {
      h.native, h.children, h.render
      var d = h.from,
        m = h.to
      if (
        D(d)
          .concat(D(m))
          .some(q)
      ) {
        var t = p.renderChildren(h, p.convertValues(h)),
          e = t.props.style
        return g.createElement(
          t.type,
          P({}, t.props, {
            style: P({}, e, { position: 'absolute', visibility: 'hidden' }),
            ref: function(t) {
              if (t) {
                var e,
                  n,
                  r = _.findDOMNode(t),
                  i = getComputedStyle(r)
                if ('border-box' === i.boxSizing)
                  (e = r.clientWidth), (n = r.clientHeight)
                else {
                  var o =
                      parseFloat(i.paddingLeft || 0) +
                      parseFloat(i.paddingRight || 0),
                    a =
                      parseFloat(i.paddingTop || 0) +
                      parseFloat(i.paddingBottom || 0),
                    s =
                      parseFloat(i.borderLeftWidth || 0) +
                      parseFloat(i.borderRightWidth || 0),
                    u =
                      parseFloat(i.borderTopWidth || 0) +
                      parseFloat(i.borderBottomWidth || 0)
                  ;(e = r.offsetWidth - o - s), (n = r.offsetHeight - a - u)
                }
                var l = ((c = e),
                (f = n),
                function(t, e) {
                  var n,
                    r = e[0],
                    i = e[1]
                  return P(
                    {},
                    t,
                    (((n = {})[r] =
                      'auto' === i ? (~r.indexOf('height') ? f : c) : i),
                    n)
                  )
                })
                requestAnimationFrame(function() {
                  return p.updateProps(
                    P({}, h, {
                      from: Object.entries(d).reduce(l, d),
                      to: Object.entries(m).reduce(l, m),
                    }),
                    !0,
                    !0
                  )
                })
              }
              var c, f
            },
          })
        )
      }
    }),
    n(
      function(t, e) {
        if (!t.nodeType || void 0 === t.setAttribute) return !1
        var n,
          r,
          i,
          o = e.style,
          a = y(e, ['style'])
        for (var s in o)
          if (o.hasOwnProperty(s)) {
            var u = 0 === s.indexOf('--'),
              l = ((r = o[(n = s)]),
              (i = u),
              null == r || 'boolean' == typeof r || '' === r
                ? ''
                : i ||
                  'number' != typeof r ||
                  0 === r ||
                  (z.hasOwnProperty(n) && z[n])
                  ? ('' + r).trim()
                  : r + 'px')
            'float' === s && (s = 'cssFloat'),
              u ? t.style.setProperty(s, l) : (t.style[s] = l)
          }
        for (var c in a) t.getAttribute(c) && t.setAttribute(c, a[c])
      },
      function(t) {
        return t
      }
    )
  var L = (function() {
      function t() {}
      var e = t.prototype
      return (
        (e.start = function(t, e, n, r) {}),
        (e.stop = function() {}),
        (e.__debouncedOnEnd = function(t) {
          var e = this.__onEnd
          ;(this.__onEnd = null), e && e(t)
        }),
        t
      )
    })(),
    N = function(t, e) {
      return null == t ? e : t
    },
    G = (function(a) {
      function o(t) {
        var y
        ;((y = a.call(this) || this).onUpdate = function() {
          var t = y._lastPosition,
            e = y._lastVelocity,
            n = y._lastPosition,
            r = y._lastVelocity,
            i = Date.now()
          i > y._lastTime + 64 && (i = y._lastTime + 64)
          for (var o = Math.floor((i - y._lastTime) / 1), a = 0; a < o; ++a) {
            var s = 0.001,
              u = e,
              l = y._tension * (y._to - n) - y._friction * r,
              c = ((n = t + u * s / 2), (r = e + l * s / 2)),
              f = y._tension * (y._to - n) - y._friction * r
            n = t + c * s / 2
            var p = (r = e + f * s / 2),
              h = y._tension * (y._to - n) - y._friction * r
            n = t + p * s / 2
            var d = (r = e + h * s / 2),
              m = y._tension * (y._to - n) - y._friction * r
            ;(n = t + p * s / 2),
              (r = e + h * s / 2),
              (t += (u + 2 * (c + p) + d) / 6 * s),
              (e += (l + 2 * (f + h) + m) / 6 * s)
          }
          if (
            ((y._lastTime = i),
            (y._lastPosition = t),
            (y._lastVelocity = e),
            y._onUpdate(t),
            y.__active)
          ) {
            var _ = !1
            y._overshootClamping &&
              0 !== y._tension &&
              (_ = y._startPosition < y._to ? t > y._to : t < y._to)
            var v = Math.abs(e) <= y._restSpeedThreshold,
              g = !0
            if (
              (0 !== y._tension &&
                (g = Math.abs(y._to - t) <= y._restDisplacementThreshold),
              _ || (v && g))
            )
              return (
                0 !== y._tension && y._onUpdate(y._to),
                y.__debouncedOnEnd({ finished: !0 })
              )
            y._animationFrame = b(y.onUpdate)
          }
        }),
          (y._overshootClamping = N(t.overshootClamping, !1)),
          (y._restDisplacementThreshold = N(t.restDisplacementThreshold, 1e-4)),
          (y._restSpeedThreshold = N(t.restSpeedThreshold, 1e-4)),
          (y._initialVelocity = t.velocity),
          (y._lastVelocity = N(t.velocity, 0)),
          (y._to = t.to)
        var e,
          n,
          r,
          i,
          o = ((e = N(t.tension, 40)),
          (n = N(t.friction, 7)),
          {
            tension: ((i = e), 3.62 * (i - 30) + 194),
            friction: ((r = n), 3 * (r - 8) + 25),
          })
        return (y._tension = o.tension), (y._friction = o.friction), y
      }
      T(o, a)
      var t = o.prototype
      return (
        (t.start = function(t, e, n, r) {
          if (
            ((this.__active = !0),
            (this._startPosition = t),
            (this._lastPosition = this._startPosition),
            (this._onUpdate = e),
            (this.__onEnd = n),
            (this._lastTime = Date.now()),
            r instanceof o)
          ) {
            var i = r.getInternalState()
            ;(this._lastPosition = i.lastPosition),
              (this._lastVelocity = i.lastVelocity),
              (this._lastTime = i.lastTime)
          }
          if ('string' == typeof t)
            return this._onUpdate(t), this.__debouncedOnEnd({ finished: !0 })
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
            r(this._animationFrame),
            this.__debouncedOnEnd({ finished: !1 })
        }),
        o
      )
    })(L),
    H = (function(n) {
      function t(t) {
        var e
        return (
          ((e = n.call(this) || this)._values = t.map(function(t) {
            return new U(t)
          })),
          e
        )
      }
      T(t, n)
      var e = t.prototype
      return (
        (e.setValue = function(t) {
          var n = this
          t.forEach(function(t, e) {
            return n._values[e].setValue(t)
          })
        }),
        (e.__getValue = function() {
          return this._values.map(function(t) {
            return t.__getValue()
          })
        }),
        (e.stopAnimation = function(t) {
          this._values.forEach(function(t) {
            return t.stopAnimation()
          }),
            t && t(this.__getValue())
        }),
        (e.__attach = function() {
          for (var t = 0; t < this._values.length; ++t)
            this._values[t] instanceof E && this._values[t].__addChild(this)
        }),
        (e.__detach = function() {
          for (var t = 0; t < this._values.length; ++t)
            this._values[t] instanceof E && this._values[t].__removeChild(this)
        }),
        t
      )
    })(R)
  function K(r, i, o) {
    return (
      void 0 === o && (o = G),
      (t = r),
      (n = K),
      (a = o),
      (h = (e = i).tension),
      (d = e.friction),
      (m = e.to),
      (t instanceof H
        ? ((s = t._values.map(function(t, e) {
            return n(t, { tension: h, friction: d, to: m[e] }, a)
          })),
          (l = 0),
          (u = { stopTogether: ((c = {}), !1) }),
          (f = !(!1 === u.stopTogether)),
          (p = {
            start: function(r) {
              if (l === s.length) return r && r({ finished: !0 })
              s.forEach(function(t, e) {
                var n = function(t) {
                  if (((c[e] = !0), ++l === s.length)) return (l = 0), r && r(t)
                  !t.finished && f && p.stop()
                }
                t ? t.start(n) : n({ finished: !0 })
              })
            },
            stop: function() {
              s.forEach(function(t, e) {
                !c[e] && t.stop(), (c[e] = !0)
              })
            },
          }))
        : null) || {
        start: function(t) {
          var e = r,
            n = i
          e.stopTracking(),
            i.to instanceof E
              ? e.track(new j(e, i.to, o, n, t))
              : e.animate(new o(n), t)
        },
        stop: function() {
          r.stopAnimation()
        },
      }
    )
    var t, e, n, a, s, u, l, c, f, p, h, d, m
  }
  var $ = (function(n) {
      function t(t) {
        var e
        return (
          (e = n.call(this) || this),
          !(t = t || {}).transform ||
            t.transform instanceof E ||
            (t = i.transform(t)),
          (e._style = t),
          e
        )
      }
      T(t, n)
      var e = t.prototype
      return (
        (e.__getValue = function() {
          var t = {}
          for (var e in this._style) {
            var n = this._style[e]
            t[e] = n instanceof E ? n.__getValue() : n
          }
          return t
        }),
        (e.__getAnimatedValue = function() {
          var t = {}
          for (var e in this._style) {
            var n = this._style[e]
            n instanceof E && (t[e] = n.__getAnimatedValue())
          }
          return t
        }),
        (e.__attach = function() {
          for (var t in this._style) {
            var e = this._style[t]
            e instanceof E && e.__addChild(this)
          }
        }),
        (e.__detach = function() {
          for (var t in this._style) {
            var e = this._style[t]
            e instanceof E && e.__removeChild(this)
          }
        }),
        t
      )
    })(R),
    B = (function(r) {
      function t(t, e) {
        var n
        return (
          (n = r.call(this) || this),
          t.style && (t = P({}, t, { style: new $(t.style) })),
          (n._props = t),
          (n._callback = e),
          n.__attach(),
          n
        )
      }
      T(t, r)
      var e = t.prototype
      return (
        (e.__getValue = function() {
          var t = {}
          for (var e in this._props) {
            var n = this._props[e]
            t[e] = n instanceof E ? n.__getValue() : n
          }
          return t
        }),
        (e.__getAnimatedValue = function() {
          var t = {}
          for (var e in this._props) {
            var n = this._props[e]
            n instanceof E && (t[e] = n.__getAnimatedValue())
          }
          return t
        }),
        (e.__attach = function() {
          for (var t in this._props) {
            var e = this._props[t]
            e instanceof E && e.__addChild(this)
          }
        }),
        (e.__detach = function() {
          for (var t in this._props) {
            var e = this._props[t]
            e instanceof E && e.__removeChild(this)
          }
        }),
        (e.update = function() {
          this._callback()
        }),
        t
      )
    })(E)
  function X(r) {
    return (function(t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      T(e, t)
      var n = e.prototype
      return (
        (n.componentWillUnmount = function() {
          this._propsAnimated && this._propsAnimated.__detach()
        }),
        (n.setNativeProps = function(t) {
          !1 === i.fn(this.node, t, this) && this.forceUpdate()
        }),
        (n.componentWillMount = function() {
          this.attachProps(this.props)
        }),
        (n.attachProps = function(t) {
          var e = this,
            n = this._propsAnimated
          ;(this._propsAnimated = new B(t, function() {
            e.node &&
              !1 === i.fn(e.node, e._propsAnimated.__getAnimatedValue(), e) &&
              e.forceUpdate()
          })),
            n && n.__detach()
        }),
        (n.componentWillReceiveProps = function(t) {
          this.attachProps(t)
        }),
        (n.render = function() {
          var e = this,
            t = this._propsAnimated.__getValue()
          return g.createElement(
            r,
            P({}, t, {
              ref: function(t) {
                return (e.node = t)
              },
            })
          )
        }),
        e
      )
    })(g.Component)
  }
  function Y(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return t
  }
  var J = {
      default: { tension: 170, friction: 26 },
      gentle: { tension: 120, friction: 14 },
      wobbly: { tension: 180, friction: 12 },
      stiff: { tension: 210, friction: 20 },
      slow: { tension: 280, friction: 60 },
    },
    Q = function(t, e) {
      return 'function' == typeof t ? t(e) : t
    },
    Z = function(t, e) {
      var n,
        r = e[0],
        i = e[1]
      return P({}, t, (((n = {})[r] = new U(i)), n))
    },
    tt = (function(o) {
      function t() {
        for (
          var t, e, n = arguments.length, r = new Array(n), i = 0;
          i < n;
          i++
        )
          r[i] = arguments[i]
        return (
          (t = e = o.call.apply(o, [this].concat(r)) || this),
          (e.state = { props: void 0 }),
          (e.animations = {}),
          (e.callback = function() {
            e.props.onFrame && e.props.onFrame(e.animatedProps.__getValue()),
              !e.props.native && e.forceUpdate()
          }),
          t || Y(e)
        )
      }
      T(t, o)
      var e = t.prototype
      return (
        (e.componentWillUnmount = function() {
          this.stop()
        }),
        (e.componentWillMount = function() {
          this.updatePropsAsync(this.props)
        }),
        (e.componentWillUpdate = function(t) {
          ;(t.reset ||
            (function(t, e) {
              for (var n in t) if (!(n in e)) return !0
              for (var r in e) if (t[r] !== e[r]) return !0
              return !1
            })(t.to, this.props.to)) &&
            this.updatePropsAsync(t)
        }),
        (e.updatePropsAsync = function(t) {
          ;(t.inject && ((this.inject = t.inject(this, t)), this.inject)) ||
            this.updateProps(t)
        }),
        (e.updateProps = function(t, e, _) {
          var v = this
          if (
            (void 0 === e && (e = !1),
            void 0 === _ && (_ = !1),
            !this.destroyed || !t.destroyed)
          ) {
            this.destroyed = t.destroyed
            var g = t.impl,
              y = t.from,
              n = t.to,
              b = t.config,
              k = t.attach,
              w = t.immediate,
              x = t.reset,
              A = (t.onFrame, t.onRest),
              r = (t.inject, t.native, Object.entries(P({}, y, n)))
            ;(this.interpolators = {}),
              (this.animations = r.reduce(function(t, e, n) {
                var r,
                  i = e[0],
                  o = e[1],
                  a = (!1 === x && v.animations[i]) || (v.animations[i] = {}),
                  s = 'number' == typeof o,
                  u =
                    'string' == typeof o &&
                    !o.startsWith('#') &&
                    !/\d/.test(o) &&
                    !V[o],
                  l = !s && !u && Array.isArray(o),
                  c = void 0 !== y[i] ? y[i] : o,
                  f = c instanceof U,
                  p = s || l ? o : 1
                if (k) {
                  var h = k(v),
                    d = h && h.animations[i]
                  d && (p = d.animation)
                }
                if (f) a.animation = a.interpolation = c
                else if (s || u)
                  a.animation = a.interpolation = a.animation || new U(c)
                else if (l)
                  a.animation = a.interpolation = a.animation || new H(c)
                else {
                  var m =
                    a.interpolation &&
                    a.interpolation._interpolation(a.animation._value)
                  ;(a.animation = new U(0)),
                    (a.interpolation = a.animation.interpolate({
                      range: [0, 1],
                      output: [void 0 !== m ? m : c, o],
                    }))
                }
                return (
                  Q(w, i) && a.animation.setValue(p),
                  (a.stopped = !1),
                  (a.onFinish = function(t) {
                    if (
                      ((v.animations[i].stopped = !0),
                      v.getAnimations().every(function(t) {
                        return t.stopped
                      }))
                    ) {
                      var e = P({}, v.props.from, v.props.to)
                      if ((A && A(e), t && 'function' == typeof t && t(e), _)) {
                        var n = v.convertValues(v.props)
                        ;(v.inject = v.renderChildren(v.props, n)),
                          v.forceUpdate()
                      }
                    }
                  }),
                  (a.start = function(e) {
                    if (a.animation.__getValue() === p) return a.onFinish(e)
                    K(a.animation, P({ to: p }, Q(b, i)), g).start(function(t) {
                      return t.finished && a.onFinish(e)
                    })
                  }),
                  (a.stop = function() {
                    ;(a.stopped = !0), a.animation.stopAnimation()
                  }),
                  (v.interpolators[i] = a.interpolation),
                  P({}, t, (((r = {})[i] = a), r))
                )
              }, {}))
            var i = this.animatedProps
            ;(this.animatedProps = new B(this.interpolators, this.callback)),
              i && i.__detach(),
              (this.updateToken = !0),
              e && this.forceUpdate()
          }
        }),
        (e.start = function() {
          var e,
            t = this,
            n = function() {
              return t.getAnimations().forEach(function(t) {
                return t.start(e)
              })
            },
            r = new Promise(function(t) {
              return (e = t)
            })
          return this.props.delay
            ? (this.timeout && clearTimeout(this.timeout),
              (this.timeout = setTimeout(function() {
                return n()
              }, this.props.delay)))
            : (n(), r)
        }),
        (e.stop = function() {
          this.getAnimations().forEach(function(t) {
            return t.stop()
          })
        }),
        (e.flush = function() {
          this.getAnimations().forEach(function(t) {
            var e = t.interpolation
            return e._update && e._update()
          })
        }),
        (e.getAnimations = function() {
          var e = this
          return Object.keys(this.animations).map(function(t) {
            return e.animations[t]
          })
        }),
        (e.getValues = function() {
          return this.animatedProps ? this.animatedProps.__getValue() : {}
        }),
        (e.getAnimatedValues = function() {
          return this.props.native ? this.interpolators : this.getValues()
        }),
        (e.convertValues = function(t) {
          var e = t.from,
            n = t.to,
            r = t.native,
            i = (t.children, t.render, this.getForwardProps(t)),
            o = Object.entries(P({}, e, n))
          return r ? o.reduce(Z, i) : P({}, e, n, i)
        }),
        (e.getForwardProps = function(t) {
          void 0 === t && (t = this.props)
          var e = t
          e.to,
            e.from,
            e.config,
            e.native,
            e.onRest,
            e.onFrame,
            e.children,
            e.render,
            e.reset,
            e.immediate,
            e.impl,
            e.inject
          return y(e, [
            'to',
            'from',
            'config',
            'native',
            'onRest',
            'onFrame',
            'children',
            'render',
            'reset',
            'immediate',
            'impl',
            'inject',
          ])
        }),
        (e.componentDidUpdate = function() {
          this.updateToken && ((this.updateToken = !1), this.start())
        }),
        (e.componentDidMount = function() {
          ;(this.updateToken = !1), this.start()
        }),
        (e.renderChildren = function(t, e) {
          return t.render
            ? t.render(P({}, e, { children: t.children }))
            : t.children(e)
        }),
        (e.render = function() {
          if (this.inject) {
            var t = this.inject
            return (this.inject = void 0), t
          }
          var e = this.props,
            n = (e.children, e.render, this.getAnimatedValues())
          return n && Object.keys(n).length
            ? this.renderChildren(this.props, P({}, n, this.getForwardProps()))
            : null
        }),
        t
      )
    })(g.Component)
  tt.defaultProps = {
    from: {},
    to: {},
    config: J.default,
    native: !1,
    immediate: !1,
    reset: !1,
    impl: G,
    inject: e,
  }
  var et = function() {
      return null
    },
    nt = function(t, e) {
      return void 0 === t && (t = {}), 'function' == typeof t ? t(e) : t
    },
    rt = function(t) {
      var e = t.keys,
        n = t.children,
        r = t.render,
        i = t.items,
        o = y(t, ['keys', 'children', 'render', 'items'])
      return (
        (n = r || n || et),
        (e = 'function' == typeof e ? i.map(e) : e),
        Array.isArray(n) ||
          ((n = [n]),
          (e = e
            ? [e]
            : n.map(function(t) {
                return t.toString()
              }))),
        P({ keys: e, children: n, items: i }, o)
      )
    },
    it = (function(n) {
      function t(t) {
        var e
        return (
          ((e = n.call(this) || this).springs = []),
          (e.state = { transitions: [], prevProps: t }),
          e
        )
      }
      T(t, n),
        (t.getDerivedStateFromProps = function(t, e) {
          var n = e.transitions,
            r = e.prevProps,
            i = rt(t),
            o = i.keys,
            a = i.children,
            s = i.items,
            u = i.from,
            l = i.enter,
            c = i.leave,
            f = i.update,
            p = rt(r),
            h = p.keys,
            d = (p.children, p.items),
            m = n.map(function(t) {
              return t.key
            }),
            _ = new Set(o),
            v = new Set(m),
            g = o.filter(function(t) {
              return !v.has(t)
            }),
            y = m.filter(function(t) {
              return !_.has(t)
            }),
            b = o.filter(function(t) {
              return v.has(t)
            })
          g.forEach(function(t) {
            var e = o.indexOf(t)
            n = n.slice(0, e).concat([t], n.slice(e))
          }),
            (n = n.map(function(t) {
              var e = 'object' == typeof t,
                n = e ? t.key : t,
                r = o.indexOf(n),
                i = s ? s[r] : n
              return e
                ? y.find(function(t) {
                    return t === n
                  })
                  ? P({}, t, {
                      destroyed: !0,
                      prevKey: n,
                      key: t.key + '_',
                      to: t.destroyed ? t.to : nt(c, d ? d[h.indexOf(n)] : n),
                    })
                  : P({}, t, {
                      children: a[r] || t.children,
                      to: (f && -1 !== b.indexOf(t.key) && nt(f, i)) || t.to,
                    })
                : {
                    children: a[r],
                    key: n,
                    item: i,
                    to: nt(l, i),
                    from: nt(u, i),
                  }
            }))
          var k = o.map(function(e) {
            return n.find(function(t) {
              return t.key === e
            })
          })
          return (
            n.forEach(function(t, e) {
              t.destroyed && (k = k.slice(0, e).concat([t], k.slice(e)))
            }),
            { transitions: k, prevProps: t }
          )
        })
      var e = t.prototype
      return (
        (e.getValues = function() {}),
        (e.render = function() {
          var u = this,
            t = this.props,
            l = t.render,
            e = (t.from, t.enter, t.leave, t.native),
            n = void 0 !== e && e,
            r = t.config,
            i = void 0 === r ? J.default : r,
            c = (t.keys, t.items, t.onFrame),
            f = t.onRest,
            p = P(
              { native: n, config: i },
              y(t, [
                'render',
                'from',
                'enter',
                'leave',
                'native',
                'config',
                'keys',
                'items',
                'onFrame',
                'onRest',
              ])
            )
          return this.state.transitions.map(function(e, t) {
            var n = e.prevKey,
              r = e.key,
              i = e.item,
              o = e.children,
              a = e.from,
              s = y(e, ['prevKey', 'key', 'item', 'children', 'from'])
            return g.createElement(
              tt,
              P(
                {
                  ref: function(t) {
                    return t && (u.springs[r] = t)
                  },
                  key: r,
                  onRest: s.destroyed
                    ? function() {
                        return u.setState(
                          function(t) {
                            return {
                              transitions: t.transitions.filter(function(t) {
                                return t !== e
                              }),
                            }
                          },
                          function() {
                            return delete u.springs[r]
                          }
                        )
                      }
                    : f &&
                      function(t) {
                        return f(i, t)
                      },
                  onFrame:
                    c &&
                    function(t) {
                      return c(i, t)
                    },
                },
                s,
                p,
                {
                  from: s.destroyed ? u.springs[n].getValues() : a,
                  render: l && o,
                  children: l ? u.props.children : o,
                }
              )
            )
          })
        }),
        t
      )
    })(g.PureComponent),
    ot = (function(t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      T(e, t)
      var n = e.prototype
      return (
        (n.getValues = function() {
          return this.instance && this.instance.getValues()
        }),
        (n.componentDidMount = function() {
          this.instance && this.instance.flush()
        }),
        (n.componentDidUpdate = function() {
          this.instance && this.instance.flush()
        }),
        (n.render = function() {
          var n = this,
            t = this.props,
            i = t.children,
            o = t.render,
            e = t.from,
            r = void 0 === e ? {} : e,
            a = t.to,
            s = void 0 === a ? {} : a,
            u = t.native,
            l = void 0 !== u && u,
            c = t.config,
            f = void 0 === c ? J.default : c,
            p = t.keys,
            h = t.delay,
            d = t.onRest,
            m = y(t, [
              'children',
              'render',
              'from',
              'to',
              'native',
              'config',
              'keys',
              'delay',
              'onRest',
            ]),
            _ = new Set(),
            v = P({}, m, { native: l, from: r, config: f, to: s })
          return (o || i).map(function(t, r) {
            var e = 0 === r && h
            return g.createElement(
              tt,
              P(
                {
                  ref: function(t) {
                    return 0 === r && (n.instance = t)
                  },
                  onRest: 0 === r ? d : null,
                  key: p[r],
                },
                v,
                {
                  delay: e,
                  attach: function(t) {
                    return (
                      (e = r),
                      (n = t),
                      _.add(n),
                      0 === e ? void 0 : Array.from(_)[e - 1]
                    )
                    var e, n
                  },
                  render: o && t,
                  children: o ? i : t,
                }
              )
            )
          })
        }),
        e
      )
    })(g.PureComponent),
    at = (function(o) {
      function t() {
        for (
          var t, i, e = arguments.length, n = new Array(e), r = 0;
          r < e;
          r++
        )
          n[r] = arguments[r]
        return (
          (t = i = o.call.apply(o, [this].concat(n)) || this),
          (i.guid = 0),
          (i.state = {
            primitive: void 0,
            props: {},
            oldProps: {},
            resolve: function() {
              return null
            },
          }),
          (i.next = function(n, r) {
            return new Promise(function(e) {
              i.setState(function(t) {
                return {
                  primitive: n,
                  props: r,
                  oldProps: P({}, i.state.props),
                  resolve: e,
                }
              })
            })
          }),
          t || Y(i)
        )
      }
      T(t, o)
      var e = t.prototype
      return (
        (e.componentDidMount = function() {
          this.props.script && this.props.script(this.next),
            this.componentDidUpdate({})
        }),
        (e.componentDidUpdate = function(t) {
          var e,
            u,
            l,
            c,
            f = this
          t.state !== this.props.state &&
            ((e = f.props),
            (u = e.states),
            (l = e.state),
            (c = e.primitive),
            u &&
              l &&
              c &&
              (function() {
                var e = ++f.guid,
                  t = u[l]
                if (Array.isArray(t)) {
                  var n = Promise.resolve(),
                    r = function() {
                      if (o) {
                        if (a >= i.length) return 'break'
                        s = i[a++]
                      } else {
                        if ((a = i.next()).done) return 'break'
                        s = a.value
                      }
                      var t = s
                      n = n.then(function() {
                        return e === f.guid && f.next(c, t)
                      })
                    },
                    i = t,
                    o = Array.isArray(i),
                    a = 0
                  for (i = o ? i : i[Symbol.iterator](); ; ) {
                    var s
                    if ('break' === r()) break
                  }
                } else
                  'function' == typeof t
                    ? t(function(t) {
                        return e === f.guid && f.next(c, t)
                      })
                    : f.next(c, u[l])
              })())
        }),
        (e.render = function() {
          var e = this,
            t = this.state,
            n = t.primitive,
            r = t.props,
            i = t.oldProps,
            o = t.resolve,
            a = this.props,
            s = (a.script, a.from),
            u = a.onRest,
            l = y(a, ['script', 'from', 'onRest'])
          if (n) {
            var c = this.instance && this.instance.getValues(),
              f =
                'function' == typeof r.from ? r.from : P({}, i.from, c, r.from)
            return g.createElement(
              n,
              P(
                {
                  ref: function(t) {
                    return (e.instance = t)
                  },
                },
                l,
                r,
                {
                  from: P({}, f, s),
                  onRest: function(t) {
                    o(t), u && u(t)
                  },
                }
              )
            )
          }
          return null
        }),
        t
      )
    })(g.PureComponent)
  ;(at.create = function(n) {
    return function(e) {
      return function(t) {
        return g.createElement(at, P({ primitive: n, states: e }, t))
      }
    }
  }),
    (at.Spring = at.create(tt)),
    (at.Trail = at.create(ot)),
    (at.Transition = at.create(it))
  var st = X('div'),
    ut = g.createContext(null),
    lt = ut.Provider,
    ct = ut.Consumer
  function ft(t) {
    return t ? 'scrollLeft' : 'scrollTop'
  }
  var pt = 'translate3d(0px,0px,0px)',
    ht = 'translate(0px,0px)',
    dt = (function(t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      T(e, t)
      var n = e.prototype
      return (
        (n.componentDidMount = function() {
          var t = this.parent
          t && ((t.layers = t.layers.concat(this)), t.update())
        }),
        (n.componentWillUnmount = function() {
          var e = this,
            t = this.parent
          t &&
            ((t.layers = t.layers.filter(function(t) {
              return t !== e
            })),
            t.update())
        }),
        (n.setPosition = function(t, e, n) {
          void 0 === n && (n = !1)
          var r = this.parent.props,
            i = r.config,
            o = r.impl,
            a = Math.floor(this.props.offset) * t,
            s = t * this.props.offset + a * this.props.speed,
            u = parseFloat(-e * this.props.speed + s)
          n
            ? this.animatedTranslate.setValue(u)
            : K(this.animatedTranslate, P({ to: u }, i), o).start()
        }),
        (n.setHeight = function(t, e) {
          void 0 === e && (e = !1)
          var n = this.parent.props,
            r = n.config,
            i = n.impl,
            o = parseFloat(t * this.props.factor)
          e
            ? this.animatedSpace.setValue(o)
            : K(this.animatedSpace, P({ to: o }, r), i).start()
        }),
        (n.initialize = function() {
          var t = this.props,
            e = this.parent,
            n = Math.floor(t.offset) * e.space,
            r = e.space * t.offset + n * t.speed,
            i = parseFloat(-e.current * t.speed + r)
          ;(this.animatedTranslate = new U(i)),
            (this.animatedSpace = new U(e.space * t.factor))
        }),
        (n.renderLayer = function() {
          var t,
            e = this.props,
            n = e.style,
            r = e.children,
            i = (e.offset, e.speed, e.factor, e.className),
            o = y(e, [
              'style',
              'children',
              'offset',
              'speed',
              'factor',
              'className',
            ]),
            a = this.parent.props.horizontal,
            s = this.animatedTranslate.interpolate({
              range: [0, 1],
              output: a
                ? [pt, 'translate3d(1px,0,0)']
                : [pt, 'translate3d(0,1px,0)'],
            })
          return g.createElement(
            st,
            P({}, o, {
              className: i,
              style: P(
                ((t = {
                  position: 'absolute',
                  backgroundSize: 'auto',
                  backgroundRepeat: 'no-repeat',
                  willChange: 'transform',
                }),
                (t[a ? 'height' : 'width'] = '100%'),
                (t[a ? 'width' : 'height'] = this.animatedSpace),
                (t.WebkitTransform = s),
                (t.MsTransform = s),
                (t.transform = s),
                t),
                n
              ),
            }),
            r
          )
        }),
        (n.render = function() {
          var e = this
          return g.createElement(ct, null, function(t) {
            return (
              t && !e.parent && ((e.parent = t), e.initialize()),
              e.renderLayer()
            )
          })
        }),
        e
      )
    })(g.PureComponent)
  dt.defaultProps = { factor: 1, offset: 0, speed: 0 }
  var mt = (function(o) {
    function t() {
      for (var t, i, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r]
      return (
        (t = i = o.call.apply(o, [this].concat(n)) || this),
        (i.state = { ready: !1 }),
        (i.layers = []),
        (i.space = 0),
        (i.current = 0),
        (i.offset = 0),
        (i.busy = !1),
        (i.moveItems = function() {
          i.layers.forEach(function(t) {
            return t.setPosition(i.space, i.current)
          }),
            (i.busy = !1)
        }),
        (i.scrollerRaf = function() {
          return requestAnimationFrame(i.moveItems)
        }),
        (i.onScroll = function(t) {
          var e = i.props.horizontal
          i.busy ||
            ((i.busy = !0), i.scrollerRaf(), (i.current = t.target[ft(e)]))
        }),
        (i.update = function() {
          var t = i.props,
            e = t.scrolling,
            n = t.horizontal,
            r = ft(n)
          i.container &&
            ((i.space = i.container[n ? 'clientWidth' : 'clientHeight']),
            e
              ? (i.current = i.container[r])
              : (i.container[r] = i.current = i.offset * i.space),
            i.content &&
              (i.content.style[n ? 'width' : 'height'] =
                i.space * i.props.pages + 'px'),
            i.layers.forEach(function(t) {
              t.setHeight(i.space, !0), t.setPosition(i.space, i.current, !0)
            }))
        }),
        (i.updateRaf = function() {
          requestAnimationFrame(i.update), setTimeout(i.update, 150)
        }),
        (i.scrollStop = function(t) {
          return i.animatedScroll && i.animatedScroll.stopAnimation()
        }),
        t || Y(i)
      )
    }
    T(t, o)
    var e = t.prototype
    return (
      (e.scrollTo = function(t) {
        var e = this.props,
          n = e.horizontal,
          r = e.config,
          i = e.impl,
          o = ft(n)
        this.scrollStop(), (this.offset = t)
        var a = this.container
        ;(this.animatedScroll = new U(a[o])),
          this.animatedScroll.addListener(function(t) {
            var e = t.value
            return (a[o] = e)
          }),
          K(this.animatedScroll, P({ to: t * this.space }, r), i).start()
      }),
      (e.componentDidMount = function() {
        window.addEventListener('resize', this.updateRaf, !1),
          this.update(),
          this.setState({ ready: !0 })
      }),
      (e.componentWillUnmount = function() {
        window.removeEventListener('resize', this.updateRaf, !1)
      }),
      (e.componentDidUpdate = function() {
        this.update()
      }),
      (e.render = function() {
        var t,
          e = this,
          n = this.props,
          r = n.style,
          i = n.innerStyle,
          o = n.pages,
          a = n.className,
          s = n.scrolling,
          u = n.children,
          l = n.horizontal,
          c = s ? 'scroll' : 'hidden'
        return g.createElement(
          'div',
          {
            ref: function(t) {
              return (e.container = t)
            },
            onScroll: this.onScroll,
            onWheel: s ? this.scrollStop : null,
            onTouchStart: s ? this.scrollStop : null,
            style: P(
              {
                position: 'absolute',
                width: '100%',
                height: '100%',
                overflow: c,
                overflowY: l ? 'hidden' : c,
                overflowX: l ? c : 'hidden',
                WebkitOverflowScrolling: 'touch',
                WebkitTransform: ht,
                MsTransform: ht,
                transform: pt,
              },
              r
            ),
            className: a,
          },
          g.createElement(
            'div',
            {
              ref: function(t) {
                return (e.content = t)
              },
              style: P(
                ((t = { position: 'absolute' }),
                (t[l ? 'height' : 'width'] = '100%'),
                (t.WebkitTransform = ht),
                (t.MsTransform = ht),
                (t.transform = pt),
                (t.overflow = 'hidden'),
                (t[l ? 'width' : 'height'] = this.space * o),
                t),
                i
              ),
            },
            g.createElement(lt, { value: this }, u)
          )
        )
      }),
      t
    )
  })(g.PureComponent)
  ;(mt.Layer = dt),
    (mt.defaultProps = {
      config: J.slow,
      scrolling: !0,
      horizontal: !1,
      impl: G,
    })
  var _t = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ].reduce(function(t, e) {
    var n
    return P({}, t, (((n = {})[e] = X(e)), n))
  }, {})
  Object.assign(X, _t)
  ;(t.Spring = tt),
    (t.Keyframes = at),
    (t.Transition = it),
    (t.Trail = ot),
    (t.Parallax = mt),
    (t.ParallaxLayer = dt),
    (t.Animation = L),
    (t.SpringAnimation = G),
    (t.AnimatedValue = U),
    (t.config = J),
    (t.animated = X),
    (t.controller = K),
    (t.interpolate = function(t, e) {
      return new M(t, e)
    }),
    (t.createAnimatedComponent = function(t) {
      return (
        console.warn(
          'createAnimatedComponent is deprecated, use animated(comp) instead'
        ) || X(t)
      )
    }),
    (t.Globals = l),
    Object.defineProperty(t, '__esModule', { value: !0 })
})
