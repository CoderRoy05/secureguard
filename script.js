/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var Z_ = Object.create;
  var sn = Object.defineProperty;
  var J_ = Object.getOwnPropertyDescriptor;
  var eb = Object.getOwnPropertyNames;
  var tb = Object.getPrototypeOf,
    rb = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    De = (e, t) => {
      for (var r in t) sn(e, r, { get: t[r], enumerable: !0 });
    },
    Ps = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of eb(t))
          !rb.call(e, i) &&
            i !== r &&
            sn(e, i, {
              get: () => t[i],
              enumerable: !(n = J_(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? Z_(tb(e)) : {}),
      Ps(
        t || !e || !e.__esModule
          ? sn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    nt = (e) => Ps(sn({}, "__esModule", { value: !0 }), e);
  var Pi = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, b) {
        var A = new y.Bare();
        return A.init(f, b);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      }
      function n(f) {
        var b = parseInt(f.slice(1), 16),
          A = (b >> 16) & 255,
          L = (b >> 8) & 255,
          w = 255 & b;
        return [A, L, w];
      }
      function i(f, b, A) {
        return (
          "#" + ((1 << 24) | (f << 16) | (b << 8) | A).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, b) {
        d("Type warning: Expected: [" + f + "] Got: [" + typeof b + "] " + b);
      }
      function u(f, b, A) {
        d("Units do not match [" + f + "]: " + b + ", " + A);
      }
      function s(f, b, A) {
        if ((b !== void 0 && (A = b), f === void 0)) return A;
        var L = A;
        return (
          Fe.test(f) || !He.test(f)
            ? (L = parseInt(f, 10))
            : He.test(f) && (L = 1e3 * parseFloat(f)),
          0 > L && (L = 0),
          L === L ? L : A
        );
      }
      function d(f) {
        oe.debug && window && window.console.warn(f);
      }
      function m(f) {
        for (var b = -1, A = f ? f.length : 0, L = []; ++b < A; ) {
          var w = f[b];
          w && L.push(w);
        }
        return L;
      }
      var h = (function (f, b, A) {
          function L(ae) {
            return typeof ae == "object";
          }
          function w(ae) {
            return typeof ae == "function";
          }
          function P() {}
          function Z(ae, ve) {
            function z() {
              var Re = new se();
              return w(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function se() {}
            ve === A && ((ve = ae), (ae = Object)), (z.Bare = se);
            var ue,
              be = (P[f] = ae[f]),
              rt = (se[f] = z[f] = new P());
            return (
              (rt.constructor = z),
              (z.mixin = function (Re) {
                return (se[f] = z[f] = Z(z, Re)[f]), z;
              }),
              (z.open = function (Re) {
                if (
                  ((ue = {}),
                  w(Re) ? (ue = Re.call(z, rt, be, z, ae)) : L(Re) && (ue = Re),
                  L(ue))
                )
                  for (var _r in ue) b.call(ue, _r) && (rt[_r] = ue[_r]);
                return w(rt.init) || (rt.init = ae), z;
              }),
              z.open(ve)
            );
          }
          return Z;
        })("prototype", {}.hasOwnProperty),
        v = {
          ease: [
            "ease",
            function (f, b, A, L) {
              var w = (f /= L) * f,
                P = w * f;
              return (
                b +
                A * (-2.75 * P * w + 11 * w * w + -15.5 * P + 8 * w + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, b, A, L) {
              var w = (f /= L) * f,
                P = w * f;
              return b + A * (-1 * P * w + 3 * w * w + -3 * P + 2 * w);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, b, A, L) {
              var w = (f /= L) * f,
                P = w * f;
              return (
                b +
                A * (0.3 * P * w + -1.6 * w * w + 2.2 * P + -1.8 * w + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, b, A, L) {
              var w = (f /= L) * f,
                P = w * f;
              return b + A * (2 * P * w + -5 * w * w + 2 * P + 2 * w);
            },
          ],
          linear: [
            "linear",
            function (f, b, A, L) {
              return (A * f) / L + b;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, b, A, L) {
              return A * (f /= L) * f + b;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, b, A, L) {
              return -A * (f /= L) * (f - 2) + b;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, b, A, L) {
              return (f /= L / 2) < 1
                ? (A / 2) * f * f + b
                : (-A / 2) * (--f * (f - 2) - 1) + b;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, b, A, L) {
              return A * (f /= L) * f * f + b;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, b, A, L) {
              return A * ((f = f / L - 1) * f * f + 1) + b;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, b, A, L) {
              return (f /= L / 2) < 1
                ? (A / 2) * f * f * f + b
                : (A / 2) * ((f -= 2) * f * f + 2) + b;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, b, A, L) {
              return A * (f /= L) * f * f * f + b;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, b, A, L) {
              return -A * ((f = f / L - 1) * f * f * f - 1) + b;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, b, A, L) {
              return (f /= L / 2) < 1
                ? (A / 2) * f * f * f * f + b
                : (-A / 2) * ((f -= 2) * f * f * f - 2) + b;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, b, A, L) {
              return A * (f /= L) * f * f * f * f + b;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, b, A, L) {
              return A * ((f = f / L - 1) * f * f * f * f + 1) + b;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, b, A, L) {
              return (f /= L / 2) < 1
                ? (A / 2) * f * f * f * f * f + b
                : (A / 2) * ((f -= 2) * f * f * f * f + 2) + b;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, b, A, L) {
              return -A * Math.cos((f / L) * (Math.PI / 2)) + A + b;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, b, A, L) {
              return A * Math.sin((f / L) * (Math.PI / 2)) + b;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, b, A, L) {
              return (-A / 2) * (Math.cos((Math.PI * f) / L) - 1) + b;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, b, A, L) {
              return f === 0 ? b : A * Math.pow(2, 10 * (f / L - 1)) + b;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, b, A, L) {
              return f === L
                ? b + A
                : A * (-Math.pow(2, (-10 * f) / L) + 1) + b;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, b, A, L) {
              return f === 0
                ? b
                : f === L
                ? b + A
                : (f /= L / 2) < 1
                ? (A / 2) * Math.pow(2, 10 * (f - 1)) + b
                : (A / 2) * (-Math.pow(2, -10 * --f) + 2) + b;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, b, A, L) {
              return -A * (Math.sqrt(1 - (f /= L) * f) - 1) + b;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, b, A, L) {
              return A * Math.sqrt(1 - (f = f / L - 1) * f) + b;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, b, A, L) {
              return (f /= L / 2) < 1
                ? (-A / 2) * (Math.sqrt(1 - f * f) - 1) + b
                : (A / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + b;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, b, A, L, w) {
              return (
                w === void 0 && (w = 1.70158),
                A * (f /= L) * f * ((w + 1) * f - w) + b
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, b, A, L, w) {
              return (
                w === void 0 && (w = 1.70158),
                A * ((f = f / L - 1) * f * ((w + 1) * f + w) + 1) + b
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, b, A, L, w) {
              return (
                w === void 0 && (w = 1.70158),
                (f /= L / 2) < 1
                  ? (A / 2) * f * f * (((w *= 1.525) + 1) * f - w) + b
                  : (A / 2) *
                      ((f -= 2) * f * (((w *= 1.525) + 1) * f + w) + 2) +
                    b
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        O = document,
        I = window,
        C = "bkwld-tram",
        T = /[\-\.0-9]/g,
        N = /[A-Z]/,
        R = "number",
        q = /^(rgb|#)/,
        M = /(em|cm|mm|in|pt|pc|px)$/,
        F = /(em|cm|mm|in|pt|pc|px|%)$/,
        H = /(deg|rad|turn)$/,
        K = "unitless",
        $ = /(all|none) 0s ease 0s/,
        J = /^(width|height)$/,
        ee = " ",
        G = O.createElement("a"),
        x = ["Webkit", "Moz", "O", "ms"],
        D = ["-webkit-", "-moz-", "-o-", "-ms-"],
        X = function (f) {
          if (f in G.style) return { dom: f, css: f };
          var b,
            A,
            L = "",
            w = f.split("-");
          for (b = 0; b < w.length; b++)
            L += w[b].charAt(0).toUpperCase() + w[b].slice(1);
          for (b = 0; b < x.length; b++)
            if (((A = x[b] + L), A in G.style))
              return { dom: A, css: D[b] + f };
        },
        B = (t.support = {
          bind: Function.prototype.bind,
          transform: X("transform"),
          transition: X("transition"),
          backface: X("backface-visibility"),
          timing: X("transition-timing-function"),
        });
      if (B.transition) {
        var te = B.timing.dom;
        if (((G.style[te] = v["ease-in-back"][0]), !G.style[te]))
          for (var re in E) v[re][0] = E[re];
      }
      var U = (t.frame = (function () {
          var f =
            I.requestAnimationFrame ||
            I.webkitRequestAnimationFrame ||
            I.mozRequestAnimationFrame ||
            I.oRequestAnimationFrame ||
            I.msRequestAnimationFrame;
          return f && B.bind
            ? f.bind(I)
            : function (b) {
                I.setTimeout(b, 16);
              };
        })()),
        Y = (t.now = (function () {
          var f = I.performance,
            b = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return b && B.bind
            ? b.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = h(function (f) {
          function b(ne, ce) {
            var ye = m(("" + ne).split(ee)),
              pe = ye[0];
            ce = ce || {};
            var Le = j[pe];
            if (!Le) return d("Unsupported property: " + pe);
            if (!ce.weak || !this.props[pe]) {
              var je = Le[0],
                Me = this.props[pe];
              return (
                Me || (Me = this.props[pe] = new je.Bare()),
                Me.init(this.$el, ye, Le, ce),
                Me
              );
            }
          }
          function A(ne, ce, ye) {
            if (ne) {
              var pe = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && ce)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: P,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && ce) {
                switch (ne) {
                  case "hide":
                    z.call(this);
                    break;
                  case "stop":
                    Z.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    b.call(this, ne, ye && ye[1]);
                }
                return P.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var Le = 0;
                rt.call(
                  this,
                  ne,
                  function (Te, Q_) {
                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(Q_);
                  },
                  function (Te) {
                    "wait" in Te && (Le = s(Te.wait, 0));
                  }
                ),
                  be.call(this),
                  Le > 0 &&
                    ((this.timer = new ie({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = P));
                var je = this,
                  Me = !1,
                  an = {};
                U(function () {
                  rt.call(je, ne, function (Te) {
                    Te.active && ((Me = !0), (an[Te.name] = Te.nextStyle));
                  }),
                    Me && je.$el.css(an);
                });
              }
            }
          }
          function L(ne) {
            (ne = s(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: P,
                  })),
                  (this.active = !0));
          }
          function w(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = P))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function P() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              A.call(this, ne.options, !0, ne.args);
            }
          }
          function Z(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              rt.call(this, ce, Re),
              be.call(this);
          }
          function ae(ne) {
            Z.call(this, ne), rt.call(this, ne, _r, Y_);
          }
          function ve(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function z() {
            Z.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            Z.call(this), e.removeData(this.el, C), (this.$el = this.el = null);
          }
          function be() {
            var ne,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[B.transition.dom] = ye));
          }
          function rt(ne, ce, ye) {
            var pe,
              Le,
              je,
              Me,
              an = ce !== Re,
              Te = {};
            for (pe in ne)
              (je = ne[pe]),
                pe in de
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[pe] = je))
                  : (N.test(pe) && (pe = r(pe)),
                    pe in j ? (Te[pe] = je) : (Me || (Me = {}), (Me[pe] = je)));
            for (pe in Te) {
              if (((je = Te[pe]), (Le = this.props[pe]), !Le)) {
                if (!an) continue;
                Le = b.call(this, pe);
              }
              ce.call(this, Le, je);
            }
            ye && Me && ye.call(this, Me);
          }
          function Re(ne) {
            ne.stop();
          }
          function _r(ne, ce) {
            ne.set(ce);
          }
          function Y_(ne) {
            this.$el.css(ne);
          }
          function Xe(ne, ce) {
            f[ne] = function () {
              return this.children
                ? $_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function $_(ne, ce) {
            var ye,
              pe = this.children.length;
            for (ye = 0; pe > ye; ye++) ne.apply(this.children[ye], ce);
            return this;
          }
          (f.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = W(this.el, "transition");
              ce && !$.test(ce) && (this.upstream = ce);
            }
            B.backface &&
              oe.hideBackface &&
              g(this.el, B.backface.css, "hidden");
          }),
            Xe("add", b),
            Xe("start", A),
            Xe("wait", L),
            Xe("then", w),
            Xe("next", P),
            Xe("stop", Z),
            Xe("set", ae),
            Xe("show", ve),
            Xe("hide", z),
            Xe("redraw", se),
            Xe("destroy", ue);
        }),
        y = h(p, function (f) {
          function b(A, L) {
            var w = e.data(A, C) || e.data(A, C, new p.Bare());
            return w.el || w.init(A), L ? w.start(L) : w;
          }
          f.init = function (A, L) {
            var w = e(A);
            if (!w.length) return this;
            if (w.length === 1) return b(w[0], L);
            var P = [];
            return (
              w.each(function (Z, ae) {
                P.push(b(ae, L));
              }),
              (this.children = P),
              this
            );
          };
        }),
        _ = h(function (f) {
          function b() {
            var P = this.get();
            this.update("auto");
            var Z = this.get();
            return this.update(P), Z;
          }
          function A(P, Z, ae) {
            return Z !== void 0 && (ae = Z), P in v ? P : ae;
          }
          function L(P) {
            var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(P);
            return (Z ? i(Z[1], Z[2], Z[3]) : P).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var w = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (P, Z, ae, ve) {
            (this.$el = P), (this.el = P[0]);
            var z = Z[0];
            ae[2] && (z = ae[2]),
              Q[z] && (z = Q[z]),
              (this.name = z),
              (this.type = ae[1]),
              (this.duration = s(Z[1], this.duration, w.duration)),
              (this.ease = A(Z[2], this.ease, w.ease)),
              (this.delay = s(Z[3], this.delay, w.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = J.test(this.name)),
              (this.unit = ve.unit || this.unit || oe.defaultUnit),
              (this.angle = ve.angle || this.angle || oe.defaultAngle),
              oe.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    ee +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? ee + v[this.ease][0] : "") +
                    (this.delay ? ee + this.delay + "ms" : "")));
          }),
            (f.set = function (P) {
              (P = this.convert(P, this.type)), this.update(P), this.redraw();
            }),
            (f.transition = function (P) {
              (this.active = !0),
                (P = this.convert(P, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  P == "auto" && (P = b.call(this))),
                (this.nextStyle = P);
            }),
            (f.fallback = function (P) {
              var Z =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (P = this.convert(P, this.type)),
                this.auto &&
                  (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                  P == "auto" && (P = b.call(this))),
                (this.tween = new S({
                  from: Z,
                  to: P,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return W(this.el, this.name);
            }),
            (f.update = function (P) {
              g(this.el, this.name, P);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                g(this.el, this.name, this.get()));
              var P = this.tween;
              P && P.context && P.destroy();
            }),
            (f.convert = function (P, Z) {
              if (P == "auto" && this.auto) return P;
              var ae,
                ve = typeof P == "number",
                z = typeof P == "string";
              switch (Z) {
                case R:
                  if (ve) return P;
                  if (z && P.replace(T, "") === "") return +P;
                  ae = "number(unitless)";
                  break;
                case q:
                  if (z) {
                    if (P === "" && this.original) return this.original;
                    if (Z.test(P))
                      return P.charAt(0) == "#" && P.length == 7 ? P : L(P);
                  }
                  ae = "hex or rgb string";
                  break;
                case M:
                  if (ve) return P + this.unit;
                  if (z && Z.test(P)) return P;
                  ae = "number(px) or string(unit)";
                  break;
                case F:
                  if (ve) return P + this.unit;
                  if (z && Z.test(P)) return P;
                  ae = "number(px) or string(unit or %)";
                  break;
                case H:
                  if (ve) return P + this.angle;
                  if (z && Z.test(P)) return P;
                  ae = "number(deg) or string(angle)";
                  break;
                case K:
                  if (ve || (z && F.test(P))) return P;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, P), P;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        l = h(_, function (f, b) {
          f.init = function () {
            b.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), q));
          };
        }),
        k = h(_, function (f, b) {
          (f.init = function () {
            b.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (A) {
              this.$el[this.name](A);
            });
        }),
        V = h(_, function (f, b) {
          function A(L, w) {
            var P, Z, ae, ve, z;
            for (P in L)
              (ve = de[P]),
                (ae = ve[0]),
                (Z = ve[1] || P),
                (z = this.convert(L[P], ae)),
                w.call(this, Z, z, ae);
          }
          (f.init = function () {
            b.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  g(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (L) {
              A.call(this, L, function (w, P) {
                this.current[w] = P;
              }),
                g(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (L) {
              var w = this.values(L);
              this.tween = new fe({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var P,
                Z = {};
              for (P in this.current) Z[P] = P in w ? w[P] : this.current[P];
              (this.active = !0), (this.nextStyle = this.style(Z));
            }),
            (f.fallback = function (L) {
              var w = this.values(L);
              this.tween = new fe({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              g(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (L) {
              var w,
                P = "";
              for (w in L) P += w + "(" + L[w] + ") ";
              return P;
            }),
            (f.values = function (L) {
              var w,
                P = {};
              return (
                A.call(this, L, function (Z, ae, ve) {
                  (P[Z] = ae),
                    this.current[Z] === void 0 &&
                      ((w = 0),
                      ~Z.indexOf("scale") && (w = 1),
                      (this.current[Z] = this.convert(w, ve)));
                }),
                P
              );
            });
        }),
        S = h(function (f) {
          function b(z) {
            ae.push(z) === 1 && U(A);
          }
          function A() {
            var z,
              se,
              ue,
              be = ae.length;
            if (be)
              for (U(A), se = Y(), z = be; z--; )
                (ue = ae[z]), ue && ue.render(se);
          }
          function L(z) {
            var se,
              ue = e.inArray(z, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function w(z) {
            return Math.round(z * ve) / ve;
          }
          function P(z, se, ue) {
            return i(
              z[0] + ue * (se[0] - z[0]),
              z[1] + ue * (se[1] - z[1]),
              z[2] + ue * (se[2] - z[2])
            );
          }
          var Z = { ease: v.ease[1], from: 0, to: 1 };
          (f.init = function (z) {
            (this.duration = z.duration || 0), (this.delay = z.delay || 0);
            var se = z.ease || Z.ease;
            v[se] && (se = v[se][1]),
              typeof se != "function" && (se = Z.ease),
              (this.ease = se),
              (this.update = z.update || o),
              (this.complete = z.complete || o),
              (this.context = z.context || this),
              (this.name = z.name);
            var ue = z.from,
              be = z.to;
            ue === void 0 && (ue = Z.from),
              be === void 0 && (be = Z.to),
              (this.unit = z.unit || ""),
              typeof ue == "number" && typeof be == "number"
                ? ((this.begin = ue), (this.change = be - ue))
                : this.format(be, ue),
              (this.value = this.begin + this.unit),
              (this.start = Y()),
              z.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = Y()), (this.active = !0), b(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), L(this));
            }),
            (f.render = function (z) {
              var se,
                ue = z - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var be = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? P(this.startRGB, this.endRGB, be)
                    : w(this.begin + be * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (z, se) {
              if (((se += ""), (z += ""), z.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n(z)),
                  (this.endHex = z),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(T, ""),
                  be = z.replace(T, "");
                ue !== be && u("tween", se, z), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (z = parseFloat(z)),
                (this.begin = this.value = se),
                (this.change = z - se);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ve = 1e3;
        }),
        ie = h(S, function (f) {
          (f.init = function (b) {
            (this.duration = b.duration || 0),
              (this.complete = b.complete || o),
              (this.context = b.context),
              this.play();
          }),
            (f.render = function (b) {
              var A = b - this.start;
              A < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        fe = h(S, function (f, b) {
          (f.init = function (A) {
            (this.context = A.context),
              (this.update = A.update),
              (this.tweens = []),
              (this.current = A.current);
            var L, w;
            for (L in A.values)
              (w = A.values[L]),
                this.current[L] !== w &&
                  this.tweens.push(
                    new S({
                      name: L,
                      from: this.current[L],
                      to: w,
                      duration: A.duration,
                      delay: A.delay,
                      ease: A.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (A) {
              var L,
                w,
                P = this.tweens.length,
                Z = !1;
              for (L = P; L--; )
                (w = this.tweens[L]),
                  w.context &&
                    (w.render(A), (this.current[w.name] = w.value), (Z = !0));
              return Z
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((b.destroy.call(this), this.tweens)) {
                var A,
                  L = this.tweens.length;
                for (A = L; A--; ) this.tweens[A].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !B.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!B.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + f + ")");
        var b = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = b.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new S(f);
        }),
        (t.delay = function (f, b, A) {
          return new ie({ complete: b, duration: f, context: A });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var g = e.style,
        W = e.css,
        Q = { transform: B.transform && B.transform.css },
        j = {
          color: [l, q],
          background: [l, q, "background-color"],
          "outline-color": [l, q],
          "border-color": [l, q],
          "border-top-color": [l, q],
          "border-right-color": [l, q],
          "border-bottom-color": [l, q],
          "border-left-color": [l, q],
          "border-width": [_, M],
          "border-top-width": [_, M],
          "border-right-width": [_, M],
          "border-bottom-width": [_, M],
          "border-left-width": [_, M],
          "border-spacing": [_, M],
          "letter-spacing": [_, M],
          margin: [_, M],
          "margin-top": [_, M],
          "margin-right": [_, M],
          "margin-bottom": [_, M],
          "margin-left": [_, M],
          padding: [_, M],
          "padding-top": [_, M],
          "padding-right": [_, M],
          "padding-bottom": [_, M],
          "padding-left": [_, M],
          "outline-width": [_, M],
          opacity: [_, R],
          top: [_, F],
          right: [_, F],
          bottom: [_, F],
          left: [_, F],
          "font-size": [_, F],
          "text-indent": [_, F],
          "word-spacing": [_, F],
          width: [_, F],
          "min-width": [_, F],
          "max-width": [_, F],
          height: [_, F],
          "min-height": [_, F],
          "max-height": [_, F],
          "line-height": [_, K],
          "scroll-top": [k, R, "scrollTop"],
          "scroll-left": [k, R, "scrollLeft"],
        },
        de = {};
      B.transform &&
        ((j.transform = [V]),
        (de = {
          x: [F, "translateX"],
          y: [F, "translateY"],
          rotate: [H],
          rotateX: [H],
          rotateY: [H],
          scale: [R],
          scaleX: [R],
          scaleY: [R],
          skew: [H],
          skewX: [H],
          skewY: [H],
        })),
        B.transform &&
          B.backface &&
          ((de.z = [F, "translateZ"]),
          (de.rotateZ = [H]),
          (de.scaleZ = [R]),
          (de.perspective = [M]));
      var Fe = /ms/,
        He = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Fs = c((XV, qs) => {
    "use strict";
    var nb = window.$,
      ib = Pi() && nb.tram;
    qs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        u = r.concat,
        s = n.toString,
        d = n.hasOwnProperty,
        m = r.forEach,
        h = r.map,
        v = r.reduce,
        E = r.reduceRight,
        O = r.filter,
        I = r.every,
        C = r.some,
        T = r.indexOf,
        N = r.lastIndexOf,
        R = Array.isArray,
        q = Object.keys,
        M = i.bind,
        F =
          (e.each =
          e.forEach =
            function (x, D, X) {
              if (x == null) return x;
              if (m && x.forEach === m) x.forEach(D, X);
              else if (x.length === +x.length) {
                for (var B = 0, te = x.length; B < te; B++)
                  if (D.call(X, x[B], B, x) === t) return;
              } else
                for (var re = e.keys(x), B = 0, te = re.length; B < te; B++)
                  if (D.call(X, x[re[B]], re[B], x) === t) return;
              return x;
            });
      (e.map = e.collect =
        function (x, D, X) {
          var B = [];
          return x == null
            ? B
            : h && x.map === h
            ? x.map(D, X)
            : (F(x, function (te, re, U) {
                B.push(D.call(X, te, re, U));
              }),
              B);
        }),
        (e.find = e.detect =
          function (x, D, X) {
            var B;
            return (
              H(x, function (te, re, U) {
                if (D.call(X, te, re, U)) return (B = te), !0;
              }),
              B
            );
          }),
        (e.filter = e.select =
          function (x, D, X) {
            var B = [];
            return x == null
              ? B
              : O && x.filter === O
              ? x.filter(D, X)
              : (F(x, function (te, re, U) {
                  D.call(X, te, re, U) && B.push(te);
                }),
                B);
          });
      var H =
        (e.some =
        e.any =
          function (x, D, X) {
            D || (D = e.identity);
            var B = !1;
            return x == null
              ? B
              : C && x.some === C
              ? x.some(D, X)
              : (F(x, function (te, re, U) {
                  if (B || (B = D.call(X, te, re, U))) return t;
                }),
                !!B);
          });
      (e.contains = e.include =
        function (x, D) {
          return x == null
            ? !1
            : T && x.indexOf === T
            ? x.indexOf(D) != -1
            : H(x, function (X) {
                return X === D;
              });
        }),
        (e.delay = function (x, D) {
          var X = a.call(arguments, 2);
          return setTimeout(function () {
            return x.apply(null, X);
          }, D);
        }),
        (e.defer = function (x) {
          return e.delay.apply(e, [x, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (x) {
          var D, X, B;
          return function () {
            D ||
              ((D = !0),
              (X = arguments),
              (B = this),
              ib.frame(function () {
                (D = !1), x.apply(B, X);
              }));
          };
        }),
        (e.debounce = function (x, D, X) {
          var B,
            te,
            re,
            U,
            Y,
            p = function () {
              var y = e.now() - U;
              y < D
                ? (B = setTimeout(p, D - y))
                : ((B = null), X || ((Y = x.apply(re, te)), (re = te = null)));
            };
          return function () {
            (re = this), (te = arguments), (U = e.now());
            var y = X && !B;
            return (
              B || (B = setTimeout(p, D)),
              y && ((Y = x.apply(re, te)), (re = te = null)),
              Y
            );
          };
        }),
        (e.defaults = function (x) {
          if (!e.isObject(x)) return x;
          for (var D = 1, X = arguments.length; D < X; D++) {
            var B = arguments[D];
            for (var te in B) x[te] === void 0 && (x[te] = B[te]);
          }
          return x;
        }),
        (e.keys = function (x) {
          if (!e.isObject(x)) return [];
          if (q) return q(x);
          var D = [];
          for (var X in x) e.has(x, X) && D.push(X);
          return D;
        }),
        (e.has = function (x, D) {
          return d.call(x, D);
        }),
        (e.isObject = function (x) {
          return x === Object(x);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        $ = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        ee = function (x) {
          return "\\" + $[x];
        },
        G = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (x, D, X) {
          !D && X && (D = X), (D = e.defaults({}, D, e.templateSettings));
          var B = RegExp(
              [
                (D.escape || K).source,
                (D.interpolate || K).source,
                (D.evaluate || K).source,
              ].join("|") + "|$",
              "g"
            ),
            te = 0,
            re = "__p+='";
          x.replace(B, function (y, _, l, k, V) {
            return (
              (re += x.slice(te, V).replace(J, ee)),
              (te = V + y.length),
              _
                ? (re +=
                    `'+
    ((__t=(` +
                    _ +
                    `))==null?'':_.escape(__t))+
    '`)
                : l
                ? (re +=
                    `'+
    ((__t=(` +
                    l +
                    `))==null?'':__t)+
    '`)
                : k &&
                  (re +=
                    `';
    ` +
                    k +
                    `
    __p+='`),
              y
            );
          }),
            (re += `';
    `);
          var U = D.variable;
          if (U) {
            if (!G.test(U))
              throw new Error("variable is not a bare identifier: " + U);
          } else
            (re =
              `with(obj||{}){
    ` +
              re +
              `}
    `),
              (U = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            re +
            `return __p;
    `;
          var Y;
          try {
            Y = new Function(D.variable || "obj", "_", re);
          } catch (y) {
            throw ((y.source = re), y);
          }
          var p = function (y) {
            return Y.call(this, y, e);
          };
          return (
            (p.source =
              "function(" +
              U +
              `){
    ` +
              re +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var ke = c((jV, Bs) => {
    "use strict";
    var ge = {},
      Wt = {},
      Bt = [],
      Fi = window.Webflow || [],
      _t = window.jQuery,
      Ke = _t(window),
      ob = _t(document),
      it = _t.isFunction,
      ze = (ge._ = Fs()),
      Ds = (ge.tram = Pi() && _t.tram),
      cn = !1,
      Mi = !1;
    Ds.config.hideBackface = !1;
    Ds.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      Wt[e] && Gs(Wt[e]);
      var n = (Wt[e] = t(_t, ze, r) || {});
      return ks(n), n;
    };
    ge.require = function (e) {
      return Wt[e];
    };
    function ks(e) {
      ge.env() &&
        (it(e.design) && Ke.on("__wf_design", e.design),
        it(e.preview) && Ke.on("__wf_preview", e.preview)),
        it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && ab(e);
    }
    function ab(e) {
      if (cn) {
        e.ready();
        return;
      }
      ze.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function Gs(e) {
      it(e.design) && Ke.off("__wf_design", e.design),
        it(e.preview) && Ke.off("__wf_preview", e.preview),
        it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && sb(e);
    }
    function sb(e) {
      Bt = ze.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (cn) {
        it(e) && e();
        return;
      }
      Fi.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var un = navigator.userAgent.toLowerCase(),
      Us = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      ub = (ge.env.chrome =
        /chrome/.test(un) &&
        /Google/.test(navigator.vendor) &&
        parseInt(un.match(/chrome\/(\d+)\./)[1], 10)),
      cb = (ge.env.ios = /(ipod|iphone|ipad)/.test(un));
    ge.env.safari = /safari/.test(un) && !ub && !cb;
    var qi;
    Us &&
      ob.on("touchstart mousedown", function (e) {
        qi = e.target;
      });
    ge.validClick = Us
      ? function (e) {
          return e === qi || _t.contains(e, qi);
        }
      : function () {
          return !0;
        };
    var Vs = "resize.webflow orientationchange.webflow load.webflow",
      lb = "scroll.webflow " + Vs;
    ge.resize = Di(Ke, Vs);
    ge.scroll = Di(Ke, lb);
    ge.redraw = Di();
    function Di(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (cn = !0), Mi ? fb() : ze.each(Bt, Ms), ze.each(Fi, Ms), ge.resize.up();
    };
    function Ms(e) {
      it(e) && e();
    }
    function fb() {
      (Mi = !1), ze.each(Wt, ks);
    }
    var Rt;
    ge.load = function (e) {
      Rt.then(e);
    };
    function Ws() {
      Rt && (Rt.reject(), Ke.off("load", Rt.resolve)),
        (Rt = new _t.Deferred()),
        Ke.on("load", Rt.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (Mi = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (cn = e.domready),
        ze.each(Wt, Gs),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (Bt = []),
        (Fi = []),
        Rt.state() === "pending" && Ws();
    };
    _t(ge.ready);
    Ws();
    Bs.exports = window.Webflow = ge;
  });
  var js = c((zV, Xs) => {
    "use strict";
    var Hs = ke();
    Hs.define(
      "brand",
      (Xs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          s =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            O = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(O) && a.hostname !== O && (E = !0),
            E &&
              !u &&
              ((d = d || h()),
              v(),
              setTimeout(v, 500),
              e(r).off(s, m).on(s, m));
        };
        function m() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", E ? "display: none !important;" : "");
        }
        function h() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            O = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            I = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(O, I), E[0];
        }
        function v() {
          var E = i.children(o),
            O = E.length && E.get(0) === d,
            I = Hs.env("editor");
          if (O) {
            I && E.remove();
            return;
          }
          E.length && E.remove(), I || i.append(d);
        }
        return t;
      })
    );
  });
  var Ks = c((KV, zs) => {
    "use strict";
    var ki = ke();
    ki.define(
      "edit",
      (zs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (ki.env("test") || ki.env("frame")) && !r.fixture && !db())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          s,
          d = r.load || v,
          m = !1;
        try {
          m =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        m
          ? d()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            d()
          : i.on(u, h).triggerHandler(u);
        function h() {
          s || (/\?edit/.test(a.hash) && d());
        }
        function v() {
          (s = !0),
            (window.WebflowEditor = !0),
            i.off(u, h),
            N(function (q) {
              e.ajax({
                url: T("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(q),
              });
            });
        }
        function E(q) {
          return function (M) {
            if (!M) {
              console.error("Could not load editor data");
              return;
            }
            (M.thirdPartyCookiesSupported = q),
              O(C(M.scriptPath), function () {
                window.WebflowEditor(M);
              });
          };
        }
        function O(q, M) {
          e.ajax({ type: "GET", url: q, dataType: "script", cache: !0 }).then(
            M,
            I
          );
        }
        function I(q, M, F) {
          throw (console.error("Could not load editor script: " + M), F);
        }
        function C(q) {
          return q.indexOf("//") >= 0
            ? q
            : T("https://editor-api.webflow.com" + q);
        }
        function T(q) {
          return q.replace(/([^:])\/\//g, "$1/");
        }
        function N(q) {
          var M = window.document.createElement("iframe");
          (M.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (M.style.display = "none"),
            (M.sandbox = "allow-scripts allow-same-origin");
          var F = function (H) {
            H.data === "WF_third_party_cookies_unsupported"
              ? (R(M, F), q(!1))
              : H.data === "WF_third_party_cookies_supported" &&
                (R(M, F), q(!0));
          };
          (M.onerror = function () {
            R(M, F), q(!1);
          }),
            window.addEventListener("message", F, !1),
            window.document.body.appendChild(M);
        }
        function R(q, M) {
          window.removeEventListener("message", M, !1), q.remove();
        }
        return n;
      })
    );
    function db() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var $s = c((YV, Ys) => {
    "use strict";
    var pb = ke();
    pb.define(
      "focus-visible",
      (Ys.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(R) {
            return !!(
              R &&
              R !== document &&
              R.nodeName !== "HTML" &&
              R.nodeName !== "BODY" &&
              "classList" in R &&
              "contains" in R.classList
            );
          }
          function s(R) {
            var q = R.type,
              M = R.tagName;
            return !!(
              (M === "INPUT" && a[q] && !R.readOnly) ||
              (M === "TEXTAREA" && !R.readOnly) ||
              R.isContentEditable
            );
          }
          function d(R) {
            R.getAttribute("data-wf-focus-visible") ||
              R.setAttribute("data-wf-focus-visible", "true");
          }
          function m(R) {
            R.getAttribute("data-wf-focus-visible") &&
              R.removeAttribute("data-wf-focus-visible");
          }
          function h(R) {
            R.metaKey ||
              R.altKey ||
              R.ctrlKey ||
              (u(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function v() {
            n = !1;
          }
          function E(R) {
            u(R.target) && (n || s(R.target)) && d(R.target);
          }
          function O(R) {
            u(R.target) &&
              R.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              m(R.target));
          }
          function I() {
            document.visibilityState === "hidden" && (i && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function T() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(R) {
            (R.target.nodeName && R.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), T());
          }
          document.addEventListener("keydown", h, !0),
            document.addEventListener("mousedown", v, !0),
            document.addEventListener("pointerdown", v, !0),
            document.addEventListener("touchstart", v, !0),
            document.addEventListener("visibilitychange", I, !0),
            C(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", O, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Js = c(($V, Zs) => {
    "use strict";
    var Qs = ke();
    Qs.define(
      "focus",
      (Zs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Qs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var ru = c((QV, tu) => {
    "use strict";
    var Gi = window.jQuery,
      ot = {},
      ln = [],
      eu = ".w-ix",
      fn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Gi(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Gi(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + eu, OUTRO: "w-ix-outro" + eu };
    ot.init = function () {
      for (var e = ln.length, t = 0; t < e; t++) {
        var r = ln[t];
        r[0](0, r[1]);
      }
      (ln = []), Gi.extend(ot.triggers, fn);
    };
    ot.async = function () {
      for (var e in fn) {
        var t = fn[e];
        fn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            ln.push([t, n]);
          });
      }
    };
    ot.async();
    tu.exports = ot;
  });
  var br = c((ZV, ou) => {
    "use strict";
    var Ui = ru();
    function nu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var gb = window.jQuery,
      dn = {},
      iu = ".w-ix",
      vb = {
        reset: function (e, t) {
          Ui.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ui.triggers.intro(e, t), nu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ui.triggers.outro(e, t), nu(t, "COMPONENT_INACTIVE");
        },
      };
    dn.triggers = {};
    dn.types = { INTRO: "w-ix-intro" + iu, OUTRO: "w-ix-outro" + iu };
    gb.extend(dn.triggers, vb);
    ou.exports = dn;
  });
  var au = c((JV, pt) => {
    function Vi(e) {
      return (
        (pt.exports = Vi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Vi(e)
      );
    }
    (pt.exports = Vi),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var pn = c((eW, Tr) => {
    var hb = au().default;
    function su(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (su = function (i) {
        return i ? r : t;
      })(e);
    }
    function mb(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (hb(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = su(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Tr.exports = mb),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var uu = c((tW, Ir) => {
    function Eb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Ir.exports = Eb),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var Ee = c((rW, cu) => {
    var gn = function (e) {
      return e && e.Math == Math && e;
    };
    cu.exports =
      gn(typeof globalThis == "object" && globalThis) ||
      gn(typeof window == "object" && window) ||
      gn(typeof self == "object" && self) ||
      gn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Ht = c((nW, lu) => {
    lu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Lt = c((iW, fu) => {
    var yb = Ht();
    fu.exports = !yb(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var vn = c((oW, du) => {
    var wr = Function.prototype.call;
    du.exports = wr.bind
      ? wr.bind(wr)
      : function () {
          return wr.apply(wr, arguments);
        };
  });
  var hu = c((vu) => {
    "use strict";
    var pu = {}.propertyIsEnumerable,
      gu = Object.getOwnPropertyDescriptor,
      _b = gu && !pu.call({ 1: 2 }, 1);
    vu.f = _b
      ? function (t) {
          var r = gu(this, t);
          return !!r && r.enumerable;
        }
      : pu;
  });
  var Wi = c((sW, mu) => {
    mu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((uW, yu) => {
    var Eu = Function.prototype,
      Bi = Eu.bind,
      Hi = Eu.call,
      bb = Bi && Bi.bind(Hi);
    yu.exports = Bi
      ? function (e) {
          return e && bb(Hi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Hi.apply(e, arguments);
            }
          );
        };
  });
  var Tu = c((cW, bu) => {
    var _u = Ye(),
      Tb = _u({}.toString),
      Ib = _u("".slice);
    bu.exports = function (e) {
      return Ib(Tb(e), 8, -1);
    };
  });
  var wu = c((lW, Iu) => {
    var wb = Ee(),
      Ob = Ye(),
      Ab = Ht(),
      xb = Tu(),
      Xi = wb.Object,
      Sb = Ob("".split);
    Iu.exports = Ab(function () {
      return !Xi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return xb(e) == "String" ? Sb(e, "") : Xi(e);
        }
      : Xi;
  });
  var ji = c((fW, Ou) => {
    var Cb = Ee(),
      Rb = Cb.TypeError;
    Ou.exports = function (e) {
      if (e == null) throw Rb("Can't call method on " + e);
      return e;
    };
  });
  var Or = c((dW, Au) => {
    var Lb = wu(),
      Nb = ji();
    Au.exports = function (e) {
      return Lb(Nb(e));
    };
  });
  var at = c((pW, xu) => {
    xu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Xt = c((gW, Su) => {
    var Pb = at();
    Su.exports = function (e) {
      return typeof e == "object" ? e !== null : Pb(e);
    };
  });
  var Ar = c((vW, Cu) => {
    var zi = Ee(),
      qb = at(),
      Fb = function (e) {
        return qb(e) ? e : void 0;
      };
    Cu.exports = function (e, t) {
      return arguments.length < 2 ? Fb(zi[e]) : zi[e] && zi[e][t];
    };
  });
  var Lu = c((hW, Ru) => {
    var Mb = Ye();
    Ru.exports = Mb({}.isPrototypeOf);
  });
  var Pu = c((mW, Nu) => {
    var Db = Ar();
    Nu.exports = Db("navigator", "userAgent") || "";
  });
  var Uu = c((EW, Gu) => {
    var ku = Ee(),
      Ki = Pu(),
      qu = ku.process,
      Fu = ku.Deno,
      Mu = (qu && qu.versions) || (Fu && Fu.version),
      Du = Mu && Mu.v8,
      $e,
      hn;
    Du &&
      (($e = Du.split(".")),
      (hn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !hn &&
      Ki &&
      (($e = Ki.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = Ki.match(/Chrome\/(\d+)/)), $e && (hn = +$e[1])));
    Gu.exports = hn;
  });
  var Yi = c((yW, Wu) => {
    var Vu = Uu(),
      kb = Ht();
    Wu.exports =
      !!Object.getOwnPropertySymbols &&
      !kb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Vu && Vu < 41)
        );
      });
  });
  var $i = c((_W, Bu) => {
    var Gb = Yi();
    Bu.exports = Gb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Qi = c((bW, Hu) => {
    var Ub = Ee(),
      Vb = Ar(),
      Wb = at(),
      Bb = Lu(),
      Hb = $i(),
      Xb = Ub.Object;
    Hu.exports = Hb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Vb("Symbol");
          return Wb(t) && Bb(t.prototype, Xb(e));
        };
  });
  var ju = c((TW, Xu) => {
    var jb = Ee(),
      zb = jb.String;
    Xu.exports = function (e) {
      try {
        return zb(e);
      } catch {
        return "Object";
      }
    };
  });
  var Ku = c((IW, zu) => {
    var Kb = Ee(),
      Yb = at(),
      $b = ju(),
      Qb = Kb.TypeError;
    zu.exports = function (e) {
      if (Yb(e)) return e;
      throw Qb($b(e) + " is not a function");
    };
  });
  var $u = c((wW, Yu) => {
    var Zb = Ku();
    Yu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : Zb(r);
    };
  });
  var Zu = c((OW, Qu) => {
    var Jb = Ee(),
      Zi = vn(),
      Ji = at(),
      eo = Xt(),
      eT = Jb.TypeError;
    Qu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Ji((r = e.toString)) && !eo((n = Zi(r, e)))) ||
        (Ji((r = e.valueOf)) && !eo((n = Zi(r, e)))) ||
        (t !== "string" && Ji((r = e.toString)) && !eo((n = Zi(r, e))))
      )
        return n;
      throw eT("Can't convert object to primitive value");
    };
  });
  var ec = c((AW, Ju) => {
    Ju.exports = !1;
  });
  var mn = c((xW, rc) => {
    var tc = Ee(),
      tT = Object.defineProperty;
    rc.exports = function (e, t) {
      try {
        tT(tc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        tc[e] = t;
      }
      return t;
    };
  });
  var En = c((SW, ic) => {
    var rT = Ee(),
      nT = mn(),
      nc = "__core-js_shared__",
      iT = rT[nc] || nT(nc, {});
    ic.exports = iT;
  });
  var to = c((CW, ac) => {
    var oT = ec(),
      oc = En();
    (ac.exports = function (e, t) {
      return oc[e] || (oc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: oT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var uc = c((RW, sc) => {
    var aT = Ee(),
      sT = ji(),
      uT = aT.Object;
    sc.exports = function (e) {
      return uT(sT(e));
    };
  });
  var bt = c((LW, cc) => {
    var cT = Ye(),
      lT = uc(),
      fT = cT({}.hasOwnProperty);
    cc.exports =
      Object.hasOwn ||
      function (t, r) {
        return fT(lT(t), r);
      };
  });
  var ro = c((NW, lc) => {
    var dT = Ye(),
      pT = 0,
      gT = Math.random(),
      vT = dT((1).toString);
    lc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + vT(++pT + gT, 36);
    };
  });
  var no = c((PW, vc) => {
    var hT = Ee(),
      mT = to(),
      fc = bt(),
      ET = ro(),
      dc = Yi(),
      gc = $i(),
      jt = mT("wks"),
      Nt = hT.Symbol,
      pc = Nt && Nt.for,
      yT = gc ? Nt : (Nt && Nt.withoutSetter) || ET;
    vc.exports = function (e) {
      if (!fc(jt, e) || !(dc || typeof jt[e] == "string")) {
        var t = "Symbol." + e;
        dc && fc(Nt, e)
          ? (jt[e] = Nt[e])
          : gc && pc
          ? (jt[e] = pc(t))
          : (jt[e] = yT(t));
      }
      return jt[e];
    };
  });
  var yc = c((qW, Ec) => {
    var _T = Ee(),
      bT = vn(),
      hc = Xt(),
      mc = Qi(),
      TT = $u(),
      IT = Zu(),
      wT = no(),
      OT = _T.TypeError,
      AT = wT("toPrimitive");
    Ec.exports = function (e, t) {
      if (!hc(e) || mc(e)) return e;
      var r = TT(e, AT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = bT(r, e, t)), !hc(n) || mc(n))
        )
          return n;
        throw OT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), IT(e, t);
    };
  });
  var io = c((FW, _c) => {
    var xT = yc(),
      ST = Qi();
    _c.exports = function (e) {
      var t = xT(e, "string");
      return ST(t) ? t : t + "";
    };
  });
  var ao = c((MW, Tc) => {
    var CT = Ee(),
      bc = Xt(),
      oo = CT.document,
      RT = bc(oo) && bc(oo.createElement);
    Tc.exports = function (e) {
      return RT ? oo.createElement(e) : {};
    };
  });
  var so = c((DW, Ic) => {
    var LT = Lt(),
      NT = Ht(),
      PT = ao();
    Ic.exports =
      !LT &&
      !NT(function () {
        return (
          Object.defineProperty(PT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var uo = c((Oc) => {
    var qT = Lt(),
      FT = vn(),
      MT = hu(),
      DT = Wi(),
      kT = Or(),
      GT = io(),
      UT = bt(),
      VT = so(),
      wc = Object.getOwnPropertyDescriptor;
    Oc.f = qT
      ? wc
      : function (t, r) {
          if (((t = kT(t)), (r = GT(r)), VT))
            try {
              return wc(t, r);
            } catch {}
          if (UT(t, r)) return DT(!FT(MT.f, t, r), t[r]);
        };
  });
  var xr = c((GW, xc) => {
    var Ac = Ee(),
      WT = Xt(),
      BT = Ac.String,
      HT = Ac.TypeError;
    xc.exports = function (e) {
      if (WT(e)) return e;
      throw HT(BT(e) + " is not an object");
    };
  });
  var Sr = c((Rc) => {
    var XT = Ee(),
      jT = Lt(),
      zT = so(),
      Sc = xr(),
      KT = io(),
      YT = XT.TypeError,
      Cc = Object.defineProperty;
    Rc.f = jT
      ? Cc
      : function (t, r, n) {
          if ((Sc(t), (r = KT(r)), Sc(n), zT))
            try {
              return Cc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw YT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var yn = c((VW, Lc) => {
    var $T = Lt(),
      QT = Sr(),
      ZT = Wi();
    Lc.exports = $T
      ? function (e, t, r) {
          return QT.f(e, t, ZT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var lo = c((WW, Nc) => {
    var JT = Ye(),
      eI = at(),
      co = En(),
      tI = JT(Function.toString);
    eI(co.inspectSource) ||
      (co.inspectSource = function (e) {
        return tI(e);
      });
    Nc.exports = co.inspectSource;
  });
  var Fc = c((BW, qc) => {
    var rI = Ee(),
      nI = at(),
      iI = lo(),
      Pc = rI.WeakMap;
    qc.exports = nI(Pc) && /native code/.test(iI(Pc));
  });
  var fo = c((HW, Dc) => {
    var oI = to(),
      aI = ro(),
      Mc = oI("keys");
    Dc.exports = function (e) {
      return Mc[e] || (Mc[e] = aI(e));
    };
  });
  var _n = c((XW, kc) => {
    kc.exports = {};
  });
  var Hc = c((jW, Bc) => {
    var sI = Fc(),
      Wc = Ee(),
      po = Ye(),
      uI = Xt(),
      cI = yn(),
      go = bt(),
      vo = En(),
      lI = fo(),
      fI = _n(),
      Gc = "Object already initialized",
      mo = Wc.TypeError,
      dI = Wc.WeakMap,
      bn,
      Cr,
      Tn,
      pI = function (e) {
        return Tn(e) ? Cr(e) : bn(e, {});
      },
      gI = function (e) {
        return function (t) {
          var r;
          if (!uI(t) || (r = Cr(t)).type !== e)
            throw mo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    sI || vo.state
      ? ((Tt = vo.state || (vo.state = new dI())),
        (Uc = po(Tt.get)),
        (ho = po(Tt.has)),
        (Vc = po(Tt.set)),
        (bn = function (e, t) {
          if (ho(Tt, e)) throw new mo(Gc);
          return (t.facade = e), Vc(Tt, e, t), t;
        }),
        (Cr = function (e) {
          return Uc(Tt, e) || {};
        }),
        (Tn = function (e) {
          return ho(Tt, e);
        }))
      : ((Pt = lI("state")),
        (fI[Pt] = !0),
        (bn = function (e, t) {
          if (go(e, Pt)) throw new mo(Gc);
          return (t.facade = e), cI(e, Pt, t), t;
        }),
        (Cr = function (e) {
          return go(e, Pt) ? e[Pt] : {};
        }),
        (Tn = function (e) {
          return go(e, Pt);
        }));
    var Tt, Uc, ho, Vc, Pt;
    Bc.exports = { set: bn, get: Cr, has: Tn, enforce: pI, getterFor: gI };
  });
  var zc = c((zW, jc) => {
    var Eo = Lt(),
      vI = bt(),
      Xc = Function.prototype,
      hI = Eo && Object.getOwnPropertyDescriptor,
      yo = vI(Xc, "name"),
      mI = yo && function () {}.name === "something",
      EI = yo && (!Eo || (Eo && hI(Xc, "name").configurable));
    jc.exports = { EXISTS: yo, PROPER: mI, CONFIGURABLE: EI };
  });
  var Zc = c((KW, Qc) => {
    var yI = Ee(),
      Kc = at(),
      _I = bt(),
      Yc = yn(),
      bI = mn(),
      TI = lo(),
      $c = Hc(),
      II = zc().CONFIGURABLE,
      wI = $c.get,
      OI = $c.enforce,
      AI = String(String).split("String");
    (Qc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        u = n && n.name !== void 0 ? n.name : t,
        s;
      if (
        (Kc(r) &&
          (String(u).slice(0, 7) === "Symbol(" &&
            (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!_I(r, "name") || (II && r.name !== u)) && Yc(r, "name", u),
          (s = OI(r)),
          s.source || (s.source = AI.join(typeof u == "string" ? u : ""))),
        e === yI)
      ) {
        o ? (e[t] = r) : bI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Yc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Kc(this) && wI(this).source) || TI(this);
    });
  });
  var _o = c((YW, Jc) => {
    var xI = Math.ceil,
      SI = Math.floor;
    Jc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? SI : xI)(t);
    };
  });
  var tl = c(($W, el) => {
    var CI = _o(),
      RI = Math.max,
      LI = Math.min;
    el.exports = function (e, t) {
      var r = CI(e);
      return r < 0 ? RI(r + t, 0) : LI(r, t);
    };
  });
  var nl = c((QW, rl) => {
    var NI = _o(),
      PI = Math.min;
    rl.exports = function (e) {
      return e > 0 ? PI(NI(e), 9007199254740991) : 0;
    };
  });
  var ol = c((ZW, il) => {
    var qI = nl();
    il.exports = function (e) {
      return qI(e.length);
    };
  });
  var bo = c((JW, sl) => {
    var FI = Or(),
      MI = tl(),
      DI = ol(),
      al = function (e) {
        return function (t, r, n) {
          var i = FI(t),
            o = DI(i),
            a = MI(n, o),
            u;
          if (e && r != r) {
            for (; o > a; ) if (((u = i[a++]), u != u)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    sl.exports = { includes: al(!0), indexOf: al(!1) };
  });
  var Io = c((eB, cl) => {
    var kI = Ye(),
      To = bt(),
      GI = Or(),
      UI = bo().indexOf,
      VI = _n(),
      ul = kI([].push);
    cl.exports = function (e, t) {
      var r = GI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !To(VI, o) && To(r, o) && ul(i, o);
      for (; t.length > n; ) To(r, (o = t[n++])) && (~UI(i, o) || ul(i, o));
      return i;
    };
  });
  var In = c((tB, ll) => {
    ll.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var dl = c((fl) => {
    var WI = Io(),
      BI = In(),
      HI = BI.concat("length", "prototype");
    fl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return WI(t, HI);
      };
  });
  var gl = c((pl) => {
    pl.f = Object.getOwnPropertySymbols;
  });
  var hl = c((iB, vl) => {
    var XI = Ar(),
      jI = Ye(),
      zI = dl(),
      KI = gl(),
      YI = xr(),
      $I = jI([].concat);
    vl.exports =
      XI("Reflect", "ownKeys") ||
      function (t) {
        var r = zI.f(YI(t)),
          n = KI.f;
        return n ? $I(r, n(t)) : r;
      };
  });
  var El = c((oB, ml) => {
    var QI = bt(),
      ZI = hl(),
      JI = uo(),
      e0 = Sr();
    ml.exports = function (e, t) {
      for (var r = ZI(t), n = e0.f, i = JI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        QI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var _l = c((aB, yl) => {
    var t0 = Ht(),
      r0 = at(),
      n0 = /#|\.prototype\./,
      Rr = function (e, t) {
        var r = o0[i0(e)];
        return r == s0 ? !0 : r == a0 ? !1 : r0(t) ? t0(t) : !!t;
      },
      i0 = (Rr.normalize = function (e) {
        return String(e).replace(n0, ".").toLowerCase();
      }),
      o0 = (Rr.data = {}),
      a0 = (Rr.NATIVE = "N"),
      s0 = (Rr.POLYFILL = "P");
    yl.exports = Rr;
  });
  var Tl = c((sB, bl) => {
    var wo = Ee(),
      u0 = uo().f,
      c0 = yn(),
      l0 = Zc(),
      f0 = mn(),
      d0 = El(),
      p0 = _l();
    bl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        u,
        s,
        d,
        m;
      if (
        (n
          ? (a = wo)
          : i
          ? (a = wo[r] || f0(r, {}))
          : (a = (wo[r] || {}).prototype),
        a)
      )
        for (u in t) {
          if (
            ((d = t[u]),
            e.noTargetGet ? ((m = u0(a, u)), (s = m && m.value)) : (s = a[u]),
            (o = p0(n ? u : r + (i ? "." : "#") + u, e.forced)),
            !o && s !== void 0)
          ) {
            if (typeof d == typeof s) continue;
            d0(d, s);
          }
          (e.sham || (s && s.sham)) && c0(d, "sham", !0), l0(a, u, d, e);
        }
    };
  });
  var wl = c((uB, Il) => {
    var g0 = Io(),
      v0 = In();
    Il.exports =
      Object.keys ||
      function (t) {
        return g0(t, v0);
      };
  });
  var Al = c((cB, Ol) => {
    var h0 = Lt(),
      m0 = Sr(),
      E0 = xr(),
      y0 = Or(),
      _0 = wl();
    Ol.exports = h0
      ? Object.defineProperties
      : function (t, r) {
          E0(t);
          for (var n = y0(r), i = _0(r), o = i.length, a = 0, u; o > a; )
            m0.f(t, (u = i[a++]), n[u]);
          return t;
        };
  });
  var Sl = c((lB, xl) => {
    var b0 = Ar();
    xl.exports = b0("document", "documentElement");
  });
  var Ml = c((fB, Fl) => {
    var T0 = xr(),
      I0 = Al(),
      Cl = In(),
      w0 = _n(),
      O0 = Sl(),
      A0 = ao(),
      x0 = fo(),
      Rl = ">",
      Ll = "<",
      Ao = "prototype",
      xo = "script",
      Pl = x0("IE_PROTO"),
      Oo = function () {},
      ql = function (e) {
        return Ll + xo + Rl + e + Ll + "/" + xo + Rl;
      },
      Nl = function (e) {
        e.write(ql("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      S0 = function () {
        var e = A0("iframe"),
          t = "java" + xo + ":",
          r;
        return (
          (e.style.display = "none"),
          O0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(ql("document.F=Object")),
          r.close(),
          r.F
        );
      },
      wn,
      On = function () {
        try {
          wn = new ActiveXObject("htmlfile");
        } catch {}
        On =
          typeof document < "u"
            ? document.domain && wn
              ? Nl(wn)
              : S0()
            : Nl(wn);
        for (var e = Cl.length; e--; ) delete On[Ao][Cl[e]];
        return On();
      };
    w0[Pl] = !0;
    Fl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Oo[Ao] = T0(t)), (n = new Oo()), (Oo[Ao] = null), (n[Pl] = t))
            : (n = On()),
          r === void 0 ? n : I0(n, r)
        );
      };
  });
  var kl = c((dB, Dl) => {
    var C0 = no(),
      R0 = Ml(),
      L0 = Sr(),
      So = C0("unscopables"),
      Co = Array.prototype;
    Co[So] == null && L0.f(Co, So, { configurable: !0, value: R0(null) });
    Dl.exports = function (e) {
      Co[So][e] = !0;
    };
  });
  var Gl = c(() => {
    "use strict";
    var N0 = Tl(),
      P0 = bo().includes,
      q0 = kl();
    N0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return P0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    q0("includes");
  });
  var Vl = c((vB, Ul) => {
    var F0 = Ee(),
      M0 = Ye();
    Ul.exports = function (e, t) {
      return M0(F0[e].prototype[t]);
    };
  });
  var Bl = c((hB, Wl) => {
    Gl();
    var D0 = Vl();
    Wl.exports = D0("Array", "includes");
  });
  var Xl = c((mB, Hl) => {
    var k0 = Bl();
    Hl.exports = k0;
  });
  var zl = c((EB, jl) => {
    var G0 = Xl();
    jl.exports = G0;
  });
  var Ro = c((yB, Kl) => {
    var U0 =
      typeof global == "object" && global && global.Object === Object && global;
    Kl.exports = U0;
  });
  var Qe = c((_B, Yl) => {
    var V0 = Ro(),
      W0 = typeof self == "object" && self && self.Object === Object && self,
      B0 = V0 || W0 || Function("return this")();
    Yl.exports = B0;
  });
  var zt = c((bB, $l) => {
    var H0 = Qe(),
      X0 = H0.Symbol;
    $l.exports = X0;
  });
  var ef = c((TB, Jl) => {
    var Ql = zt(),
      Zl = Object.prototype,
      j0 = Zl.hasOwnProperty,
      z0 = Zl.toString,
      Lr = Ql ? Ql.toStringTag : void 0;
    function K0(e) {
      var t = j0.call(e, Lr),
        r = e[Lr];
      try {
        e[Lr] = void 0;
        var n = !0;
      } catch {}
      var i = z0.call(e);
      return n && (t ? (e[Lr] = r) : delete e[Lr]), i;
    }
    Jl.exports = K0;
  });
  var rf = c((IB, tf) => {
    var Y0 = Object.prototype,
      $0 = Y0.toString;
    function Q0(e) {
      return $0.call(e);
    }
    tf.exports = Q0;
  });
  var It = c((wB, af) => {
    var nf = zt(),
      Z0 = ef(),
      J0 = rf(),
      ew = "[object Null]",
      tw = "[object Undefined]",
      of = nf ? nf.toStringTag : void 0;
    function rw(e) {
      return e == null
        ? e === void 0
          ? tw
          : ew
        : of && of in Object(e)
        ? Z0(e)
        : J0(e);
    }
    af.exports = rw;
  });
  var Lo = c((OB, sf) => {
    function nw(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    sf.exports = nw;
  });
  var No = c((AB, uf) => {
    var iw = Lo(),
      ow = iw(Object.getPrototypeOf, Object);
    uf.exports = ow;
  });
  var gt = c((xB, cf) => {
    function aw(e) {
      return e != null && typeof e == "object";
    }
    cf.exports = aw;
  });
  var Po = c((SB, ff) => {
    var sw = It(),
      uw = No(),
      cw = gt(),
      lw = "[object Object]",
      fw = Function.prototype,
      dw = Object.prototype,
      lf = fw.toString,
      pw = dw.hasOwnProperty,
      gw = lf.call(Object);
    function vw(e) {
      if (!cw(e) || sw(e) != lw) return !1;
      var t = uw(e);
      if (t === null) return !0;
      var r = pw.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && lf.call(r) == gw;
    }
    ff.exports = vw;
  });
  var df = c((qo) => {
    "use strict";
    Object.defineProperty(qo, "__esModule", { value: !0 });
    qo.default = hw;
    function hw(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var pf = c((Mo, Fo) => {
    "use strict";
    Object.defineProperty(Mo, "__esModule", { value: !0 });
    var mw = df(),
      Ew = yw(mw);
    function yw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Kt;
    typeof self < "u"
      ? (Kt = self)
      : typeof window < "u"
      ? (Kt = window)
      : typeof global < "u"
      ? (Kt = global)
      : typeof Fo < "u"
      ? (Kt = Fo)
      : (Kt = Function("return this")());
    var _w = (0, Ew.default)(Kt);
    Mo.default = _w;
  });
  var Do = c((Nr) => {
    "use strict";
    Nr.__esModule = !0;
    Nr.ActionTypes = void 0;
    Nr.default = mf;
    var bw = Po(),
      Tw = hf(bw),
      Iw = pf(),
      gf = hf(Iw);
    function hf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var vf = (Nr.ActionTypes = { INIT: "@@redux/INIT" });
    function mf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(mf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        s = !1;
      function d() {
        u === a && (u = a.slice());
      }
      function m() {
        return o;
      }
      function h(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          d(),
          u.push(I),
          function () {
            if (C) {
              (C = !1), d();
              var N = u.indexOf(I);
              u.splice(N, 1);
            }
          }
        );
      }
      function v(I) {
        if (!(0, Tw.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (o = i(o, I));
        } finally {
          s = !1;
        }
        for (var C = (a = u), T = 0; T < C.length; T++) C[T]();
        return I;
      }
      function E(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = I), v({ type: vf.INIT });
      }
      function O() {
        var I,
          C = h;
        return (
          (I = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function R() {
                N.next && N.next(m());
              }
              R();
              var q = C(R);
              return { unsubscribe: q };
            },
          }),
          (I[gf.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        v({ type: vf.INIT }),
        (n = { dispatch: v, subscribe: h, getState: m, replaceReducer: E }),
        (n[gf.default] = O),
        n
      );
    }
  });
  var Go = c((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = ww;
    function ww(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var _f = c((Uo) => {
    "use strict";
    Uo.__esModule = !0;
    Uo.default = Cw;
    var Ef = Do(),
      Ow = Po(),
      NB = yf(Ow),
      Aw = Go(),
      PB = yf(Aw);
    function yf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function xw(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Sw(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Ef.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Ef.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Cw(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        Sw(r);
      } catch (s) {
        u = s;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          m = arguments[1];
        if (u) throw u;
        if (!1) var h;
        for (var v = !1, E = {}, O = 0; O < o.length; O++) {
          var I = o[O],
            C = r[I],
            T = d[I],
            N = C(T, m);
          if (typeof N > "u") {
            var R = xw(I, m);
            throw new Error(R);
          }
          (E[I] = N), (v = v || N !== T);
        }
        return v ? E : d;
      };
    }
  });
  var Tf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = Rw;
    function bf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Rw(e, t) {
      if (typeof e == "function") return bf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = bf(a, t));
      }
      return n;
    }
  });
  var Bo = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = Lw;
    function Lw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var If = c((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    var Nw =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Ho.default = Mw;
    var Pw = Bo(),
      qw = Fw(Pw);
    function Fw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Mw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var u = n(i, o, a),
            s = u.dispatch,
            d = [],
            m = {
              getState: u.getState,
              dispatch: function (v) {
                return s(v);
              },
            };
          return (
            (d = t.map(function (h) {
              return h(m);
            })),
            (s = qw.default.apply(void 0, d)(u.dispatch)),
            Nw({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var Xo = c((Be) => {
    "use strict";
    Be.__esModule = !0;
    Be.compose =
      Be.applyMiddleware =
      Be.bindActionCreators =
      Be.combineReducers =
      Be.createStore =
        void 0;
    var Dw = Do(),
      kw = Yt(Dw),
      Gw = _f(),
      Uw = Yt(Gw),
      Vw = Tf(),
      Ww = Yt(Vw),
      Bw = If(),
      Hw = Yt(Bw),
      Xw = Bo(),
      jw = Yt(Xw),
      zw = Go(),
      kB = Yt(zw);
    function Yt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Be.createStore = kw.default;
    Be.combineReducers = Uw.default;
    Be.bindActionCreators = Ww.default;
    Be.applyMiddleware = Hw.default;
    Be.compose = jw.default;
  });
  var Ze,
    jo,
    st,
    Kw,
    Yw,
    An,
    $w,
    zo = me(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (jo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Kw = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Yw = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (An = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        ($w = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ge,
    Qw,
    xn = me(() => {
      "use strict";
      (Ge = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (Qw = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Zw,
    wf = me(() => {
      "use strict";
      Zw = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Jw,
    eO,
    tO,
    rO,
    nO,
    iO,
    oO,
    Ko,
    Of = me(() => {
      "use strict";
      xn();
      ({
        TRANSFORM_MOVE: Jw,
        TRANSFORM_SCALE: eO,
        TRANSFORM_ROTATE: tO,
        TRANSFORM_SKEW: rO,
        STYLE_SIZE: nO,
        STYLE_FILTER: iO,
        STYLE_FONT_VARIATION: oO,
      } = Ge),
        (Ko = {
          [Jw]: !0,
          [eO]: !0,
          [tO]: !0,
          [rO]: !0,
          [nO]: !0,
          [iO]: !0,
          [oO]: !0,
        });
    });
  var Ie = {};
  De(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => TO,
    IX2_ANIMATION_FRAME_CHANGED: () => hO,
    IX2_CLEAR_REQUESTED: () => pO,
    IX2_ELEMENT_STATE_CHANGED: () => bO,
    IX2_EVENT_LISTENER_ADDED: () => gO,
    IX2_EVENT_STATE_CHANGED: () => vO,
    IX2_INSTANCE_ADDED: () => EO,
    IX2_INSTANCE_REMOVED: () => _O,
    IX2_INSTANCE_STARTED: () => yO,
    IX2_MEDIA_QUERIES_DEFINED: () => wO,
    IX2_PARAMETER_CHANGED: () => mO,
    IX2_PLAYBACK_REQUESTED: () => fO,
    IX2_PREVIEW_REQUESTED: () => lO,
    IX2_RAW_DATA_IMPORTED: () => aO,
    IX2_SESSION_INITIALIZED: () => sO,
    IX2_SESSION_STARTED: () => uO,
    IX2_SESSION_STOPPED: () => cO,
    IX2_STOP_REQUESTED: () => dO,
    IX2_TEST_FRAME_RENDERED: () => OO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => IO,
  });
  var aO,
    sO,
    uO,
    cO,
    lO,
    fO,
    dO,
    pO,
    gO,
    vO,
    hO,
    mO,
    EO,
    yO,
    _O,
    bO,
    TO,
    IO,
    wO,
    OO,
    Af = me(() => {
      "use strict";
      (aO = "IX2_RAW_DATA_IMPORTED"),
        (sO = "IX2_SESSION_INITIALIZED"),
        (uO = "IX2_SESSION_STARTED"),
        (cO = "IX2_SESSION_STOPPED"),
        (lO = "IX2_PREVIEW_REQUESTED"),
        (fO = "IX2_PLAYBACK_REQUESTED"),
        (dO = "IX2_STOP_REQUESTED"),
        (pO = "IX2_CLEAR_REQUESTED"),
        (gO = "IX2_EVENT_LISTENER_ADDED"),
        (vO = "IX2_EVENT_STATE_CHANGED"),
        (hO = "IX2_ANIMATION_FRAME_CHANGED"),
        (mO = "IX2_PARAMETER_CHANGED"),
        (EO = "IX2_INSTANCE_ADDED"),
        (yO = "IX2_INSTANCE_STARTED"),
        (_O = "IX2_INSTANCE_REMOVED"),
        (bO = "IX2_ELEMENT_STATE_CHANGED"),
        (TO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (IO = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (wO = "IX2_MEDIA_QUERIES_DEFINED"),
        (OO = "IX2_TEST_FRAME_RENDERED");
    });
  var Ce = {};
  De(Ce, {
    ABSTRACT_NODE: () => IA,
    AUTO: () => dA,
    BACKGROUND: () => aA,
    BACKGROUND_COLOR: () => oA,
    BAR_DELIMITER: () => vA,
    BORDER_COLOR: () => sA,
    BOUNDARY_SELECTOR: () => RO,
    CHILDREN: () => hA,
    COLON_DELIMITER: () => gA,
    COLOR: () => uA,
    COMMA_DELIMITER: () => pA,
    CONFIG_UNIT: () => kO,
    CONFIG_VALUE: () => qO,
    CONFIG_X_UNIT: () => FO,
    CONFIG_X_VALUE: () => LO,
    CONFIG_Y_UNIT: () => MO,
    CONFIG_Y_VALUE: () => NO,
    CONFIG_Z_UNIT: () => DO,
    CONFIG_Z_VALUE: () => PO,
    DISPLAY: () => cA,
    FILTER: () => tA,
    FLEX: () => lA,
    FONT_VARIATION_SETTINGS: () => rA,
    HEIGHT: () => iA,
    HTML_ELEMENT: () => bA,
    IMMEDIATE_CHILDREN: () => mA,
    IX2_ID_DELIMITER: () => AO,
    OPACITY: () => eA,
    PARENT: () => yA,
    PLAIN_OBJECT: () => TA,
    PRESERVE_3D: () => _A,
    RENDER_GENERAL: () => OA,
    RENDER_PLUGIN: () => xA,
    RENDER_STYLE: () => AA,
    RENDER_TRANSFORM: () => wA,
    ROTATE_X: () => KO,
    ROTATE_Y: () => YO,
    ROTATE_Z: () => $O,
    SCALE_3D: () => zO,
    SCALE_X: () => HO,
    SCALE_Y: () => XO,
    SCALE_Z: () => jO,
    SIBLINGS: () => EA,
    SKEW: () => QO,
    SKEW_X: () => ZO,
    SKEW_Y: () => JO,
    TRANSFORM: () => GO,
    TRANSLATE_3D: () => BO,
    TRANSLATE_X: () => UO,
    TRANSLATE_Y: () => VO,
    TRANSLATE_Z: () => WO,
    WF_PAGE: () => xO,
    WIDTH: () => nA,
    WILL_CHANGE: () => fA,
    W_MOD_IX: () => CO,
    W_MOD_JS: () => SO,
  });
  var AO,
    xO,
    SO,
    CO,
    RO,
    LO,
    NO,
    PO,
    qO,
    FO,
    MO,
    DO,
    kO,
    GO,
    UO,
    VO,
    WO,
    BO,
    HO,
    XO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    gA,
    vA,
    hA,
    mA,
    EA,
    yA,
    _A,
    bA,
    TA,
    IA,
    wA,
    OA,
    AA,
    xA,
    xf = me(() => {
      "use strict";
      (AO = "|"),
        (xO = "data-wf-page"),
        (SO = "w-mod-js"),
        (CO = "w-mod-ix"),
        (RO = ".w-dyn-item"),
        (LO = "xValue"),
        (NO = "yValue"),
        (PO = "zValue"),
        (qO = "value"),
        (FO = "xUnit"),
        (MO = "yUnit"),
        (DO = "zUnit"),
        (kO = "unit"),
        (GO = "transform"),
        (UO = "translateX"),
        (VO = "translateY"),
        (WO = "translateZ"),
        (BO = "translate3d"),
        (HO = "scaleX"),
        (XO = "scaleY"),
        (jO = "scaleZ"),
        (zO = "scale3d"),
        (KO = "rotateX"),
        (YO = "rotateY"),
        ($O = "rotateZ"),
        (QO = "skew"),
        (ZO = "skewX"),
        (JO = "skewY"),
        (eA = "opacity"),
        (tA = "filter"),
        (rA = "font-variation-settings"),
        (nA = "width"),
        (iA = "height"),
        (oA = "backgroundColor"),
        (aA = "background"),
        (sA = "borderColor"),
        (uA = "color"),
        (cA = "display"),
        (lA = "flex"),
        (fA = "willChange"),
        (dA = "AUTO"),
        (pA = ","),
        (gA = ":"),
        (vA = "|"),
        (hA = "CHILDREN"),
        (mA = "IMMEDIATE_CHILDREN"),
        (EA = "SIBLINGS"),
        (yA = "PARENT"),
        (_A = "preserve-3d"),
        (bA = "HTML_ELEMENT"),
        (TA = "PLAIN_OBJECT"),
        (IA = "ABSTRACT_NODE"),
        (wA = "RENDER_TRANSFORM"),
        (OA = "RENDER_GENERAL"),
        (AA = "RENDER_STYLE"),
        (xA = "RENDER_PLUGIN");
    });
  var Sf = {};
  De(Sf, {
    ActionAppliesTo: () => Qw,
    ActionTypeConsts: () => Ge,
    EventAppliesTo: () => jo,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => Kw,
    EventLimitAffectedElements: () => Yw,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Ce,
    InteractionTypeConsts: () => Zw,
    QuickEffectDirectionConsts: () => $w,
    QuickEffectIds: () => An,
    ReducedMotionTypes: () => Ko,
  });
  var Ue = me(() => {
    "use strict";
    zo();
    xn();
    wf();
    Of();
    Af();
    xf();
    xn();
    zo();
  });
  var SA,
    Cf,
    Rf = me(() => {
      "use strict";
      Ue();
      ({ IX2_RAW_DATA_IMPORTED: SA } = Ie),
        (Cf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case SA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var $t = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    var CA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    _e.clone = Cn;
    _e.addLast = Pf;
    _e.addFirst = qf;
    _e.removeLast = Ff;
    _e.removeFirst = Mf;
    _e.insert = Df;
    _e.removeAt = kf;
    _e.replaceAt = Gf;
    _e.getIn = Rn;
    _e.set = Ln;
    _e.setIn = Nn;
    _e.update = Vf;
    _e.updateIn = Wf;
    _e.merge = Bf;
    _e.mergeDeep = Hf;
    _e.mergeIn = Xf;
    _e.omit = jf;
    _e.addDefaults = zf;
    var Lf = "INVALID_ARGS";
    function Nf(e) {
      throw new Error(e);
    }
    function Yo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var RA = {}.hasOwnProperty;
    function Cn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Yo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ve(e, t, r) {
      var n = r;
      n == null && Nf(Lf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3;
        u < o;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var d = a[s];
        if (d != null) {
          var m = Yo(d);
          if (m.length)
            for (var h = 0; h <= m.length; h++) {
              var v = m[h];
              if (!(e && n[v] !== void 0)) {
                var E = d[v];
                t && Sn(n[v]) && Sn(E) && (E = Ve(e, t, n[v], E)),
                  !(E === void 0 || E === n[v]) &&
                    (i || ((i = !0), (n = Cn(n))), (n[v] = E));
              }
            }
        }
      }
      return n;
    }
    function Sn(e) {
      var t = typeof e > "u" ? "undefined" : CA(e);
      return e != null && (t === "object" || t === "function");
    }
    function Pf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function qf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Ff(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Mf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Df(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function kf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Gf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Rn(e, t) {
      if ((!Array.isArray(t) && Nf(Lf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Ln(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Cn(i);
      return (o[t] = r), o;
    }
    function Uf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Sn(e) && Sn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Uf(a, t, r, n + 1);
      }
      return Ln(e, o, i);
    }
    function Nn(e, t, r) {
      return t.length ? Uf(e, t, r, 0) : r;
    }
    function Vf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Ln(e, t, i);
    }
    function Wf(e, t, r) {
      var n = Rn(e, t),
        i = r(n);
      return Nn(e, t, i);
    }
    function Bf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(u))
        : Ve(!1, !1, e, t, r, n, i, o);
    }
    function Hf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(u))
        : Ve(!1, !0, e, t, r, n, i, o);
    }
    function Xf(e, t, r, n, i, o, a) {
      var u = Rn(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          d = arguments.length,
          m = Array(d > 7 ? d - 7 : 0),
          h = 7;
        h < d;
        h++
      )
        m[h - 7] = arguments[h];
      return (
        m.length
          ? (s = Ve.call.apply(Ve, [null, !1, !1, u, r, n, i, o, a].concat(m)))
          : (s = Ve(!1, !1, u, r, n, i, o, a)),
        Nn(e, t, s)
      );
    }
    function jf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (RA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Yo(e), u = 0; u < a.length; u++) {
        var s = a[u];
        r.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function zf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(u))
        : Ve(!0, !1, e, t, r, n, i, o);
    }
    var LA = {
      clone: Cn,
      addLast: Pf,
      addFirst: qf,
      removeLast: Ff,
      removeFirst: Mf,
      insert: Df,
      removeAt: kf,
      replaceAt: Gf,
      getIn: Rn,
      set: Ln,
      setIn: Nn,
      update: Vf,
      updateIn: Wf,
      merge: Bf,
      mergeDeep: Hf,
      mergeIn: Xf,
      omit: jf,
      addDefaults: zf,
    };
    _e.default = LA;
  });
  var Yf,
    NA,
    PA,
    qA,
    FA,
    MA,
    Kf,
    $f,
    Qf = me(() => {
      "use strict";
      Ue();
      (Yf = le($t())),
        ({
          IX2_PREVIEW_REQUESTED: NA,
          IX2_PLAYBACK_REQUESTED: PA,
          IX2_STOP_REQUESTED: qA,
          IX2_CLEAR_REQUESTED: FA,
        } = Ie),
        (MA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Kf = Object.create(null, {
          [NA]: { value: "preview" },
          [PA]: { value: "playback" },
          [qA]: { value: "stop" },
          [FA]: { value: "clear" },
        })),
        ($f = (e = MA, t) => {
          if (t.type in Kf) {
            let r = [Kf[t.type]];
            return (0, Yf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ne,
    DA,
    kA,
    GA,
    UA,
    VA,
    WA,
    BA,
    HA,
    XA,
    jA,
    Zf,
    zA,
    Jf,
    ed = me(() => {
      "use strict";
      Ue();
      (Ne = le($t())),
        ({
          IX2_SESSION_INITIALIZED: DA,
          IX2_SESSION_STARTED: kA,
          IX2_TEST_FRAME_RENDERED: GA,
          IX2_SESSION_STOPPED: UA,
          IX2_EVENT_LISTENER_ADDED: VA,
          IX2_EVENT_STATE_CHANGED: WA,
          IX2_ANIMATION_FRAME_CHANGED: BA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: HA,
          IX2_VIEWPORT_WIDTH_CHANGED: XA,
          IX2_MEDIA_QUERIES_DEFINED: jA,
        } = Ie),
        (Zf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (zA = 20),
        (Jf = (e = Zf, t) => {
          switch (t.type) {
            case DA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ne.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case kA:
              return (0, Ne.set)(e, "active", !0);
            case GA: {
              let {
                payload: { step: r = zA },
              } = t;
              return (0, Ne.set)(e, "tick", e.tick + r);
            }
            case UA:
              return Zf;
            case BA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ne.set)(e, "tick", r);
            }
            case VA: {
              let r = (0, Ne.addLast)(e.eventListeners, t.payload);
              return (0, Ne.set)(e, "eventListeners", r);
            }
            case WA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ne.setIn)(e, ["eventState", r], n);
            }
            case HA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ne.setIn)(e, ["playbackState", r], n);
            }
            case XA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: u, min: s, max: d } = n[a];
                if (r >= s && r <= d) {
                  o = u;
                  break;
                }
              }
              return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case jA:
              return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var rd = c((iH, td) => {
    function KA() {
      (this.__data__ = []), (this.size = 0);
    }
    td.exports = KA;
  });
  var Pn = c((oH, nd) => {
    function YA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    nd.exports = YA;
  });
  var Pr = c((aH, id) => {
    var $A = Pn();
    function QA(e, t) {
      for (var r = e.length; r--; ) if ($A(e[r][0], t)) return r;
      return -1;
    }
    id.exports = QA;
  });
  var ad = c((sH, od) => {
    var ZA = Pr(),
      JA = Array.prototype,
      ex = JA.splice;
    function tx(e) {
      var t = this.__data__,
        r = ZA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : ex.call(t, r, 1), --this.size, !0;
    }
    od.exports = tx;
  });
  var ud = c((uH, sd) => {
    var rx = Pr();
    function nx(e) {
      var t = this.__data__,
        r = rx(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    sd.exports = nx;
  });
  var ld = c((cH, cd) => {
    var ix = Pr();
    function ox(e) {
      return ix(this.__data__, e) > -1;
    }
    cd.exports = ox;
  });
  var dd = c((lH, fd) => {
    var ax = Pr();
    function sx(e, t) {
      var r = this.__data__,
        n = ax(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    fd.exports = sx;
  });
  var qr = c((fH, pd) => {
    var ux = rd(),
      cx = ad(),
      lx = ud(),
      fx = ld(),
      dx = dd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = ux;
    Qt.prototype.delete = cx;
    Qt.prototype.get = lx;
    Qt.prototype.has = fx;
    Qt.prototype.set = dx;
    pd.exports = Qt;
  });
  var vd = c((dH, gd) => {
    var px = qr();
    function gx() {
      (this.__data__ = new px()), (this.size = 0);
    }
    gd.exports = gx;
  });
  var md = c((pH, hd) => {
    function vx(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    hd.exports = vx;
  });
  var yd = c((gH, Ed) => {
    function hx(e) {
      return this.__data__.get(e);
    }
    Ed.exports = hx;
  });
  var bd = c((vH, _d) => {
    function mx(e) {
      return this.__data__.has(e);
    }
    _d.exports = mx;
  });
  var ut = c((hH, Td) => {
    function Ex(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Td.exports = Ex;
  });
  var $o = c((mH, Id) => {
    var yx = It(),
      _x = ut(),
      bx = "[object AsyncFunction]",
      Tx = "[object Function]",
      Ix = "[object GeneratorFunction]",
      wx = "[object Proxy]";
    function Ox(e) {
      if (!_x(e)) return !1;
      var t = yx(e);
      return t == Tx || t == Ix || t == bx || t == wx;
    }
    Id.exports = Ox;
  });
  var Od = c((EH, wd) => {
    var Ax = Qe(),
      xx = Ax["__core-js_shared__"];
    wd.exports = xx;
  });
  var Sd = c((yH, xd) => {
    var Qo = Od(),
      Ad = (function () {
        var e = /[^.]+$/.exec((Qo && Qo.keys && Qo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Sx(e) {
      return !!Ad && Ad in e;
    }
    xd.exports = Sx;
  });
  var Zo = c((_H, Cd) => {
    var Cx = Function.prototype,
      Rx = Cx.toString;
    function Lx(e) {
      if (e != null) {
        try {
          return Rx.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Cd.exports = Lx;
  });
  var Ld = c((bH, Rd) => {
    var Nx = $o(),
      Px = Sd(),
      qx = ut(),
      Fx = Zo(),
      Mx = /[\\^$.*+?()[\]{}|]/g,
      Dx = /^\[object .+?Constructor\]$/,
      kx = Function.prototype,
      Gx = Object.prototype,
      Ux = kx.toString,
      Vx = Gx.hasOwnProperty,
      Wx = RegExp(
        "^" +
          Ux.call(Vx)
            .replace(Mx, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Bx(e) {
      if (!qx(e) || Px(e)) return !1;
      var t = Nx(e) ? Wx : Dx;
      return t.test(Fx(e));
    }
    Rd.exports = Bx;
  });
  var Pd = c((TH, Nd) => {
    function Hx(e, t) {
      return e?.[t];
    }
    Nd.exports = Hx;
  });
  var wt = c((IH, qd) => {
    var Xx = Ld(),
      jx = Pd();
    function zx(e, t) {
      var r = jx(e, t);
      return Xx(r) ? r : void 0;
    }
    qd.exports = zx;
  });
  var qn = c((wH, Fd) => {
    var Kx = wt(),
      Yx = Qe(),
      $x = Kx(Yx, "Map");
    Fd.exports = $x;
  });
  var Fr = c((OH, Md) => {
    var Qx = wt(),
      Zx = Qx(Object, "create");
    Md.exports = Zx;
  });
  var Gd = c((AH, kd) => {
    var Dd = Fr();
    function Jx() {
      (this.__data__ = Dd ? Dd(null) : {}), (this.size = 0);
    }
    kd.exports = Jx;
  });
  var Vd = c((xH, Ud) => {
    function eS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Ud.exports = eS;
  });
  var Bd = c((SH, Wd) => {
    var tS = Fr(),
      rS = "__lodash_hash_undefined__",
      nS = Object.prototype,
      iS = nS.hasOwnProperty;
    function oS(e) {
      var t = this.__data__;
      if (tS) {
        var r = t[e];
        return r === rS ? void 0 : r;
      }
      return iS.call(t, e) ? t[e] : void 0;
    }
    Wd.exports = oS;
  });
  var Xd = c((CH, Hd) => {
    var aS = Fr(),
      sS = Object.prototype,
      uS = sS.hasOwnProperty;
    function cS(e) {
      var t = this.__data__;
      return aS ? t[e] !== void 0 : uS.call(t, e);
    }
    Hd.exports = cS;
  });
  var zd = c((RH, jd) => {
    var lS = Fr(),
      fS = "__lodash_hash_undefined__";
    function dS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = lS && t === void 0 ? fS : t),
        this
      );
    }
    jd.exports = dS;
  });
  var Yd = c((LH, Kd) => {
    var pS = Gd(),
      gS = Vd(),
      vS = Bd(),
      hS = Xd(),
      mS = zd();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = pS;
    Zt.prototype.delete = gS;
    Zt.prototype.get = vS;
    Zt.prototype.has = hS;
    Zt.prototype.set = mS;
    Kd.exports = Zt;
  });
  var Zd = c((NH, Qd) => {
    var $d = Yd(),
      ES = qr(),
      yS = qn();
    function _S() {
      (this.size = 0),
        (this.__data__ = {
          hash: new $d(),
          map: new (yS || ES)(),
          string: new $d(),
        });
    }
    Qd.exports = _S;
  });
  var ep = c((PH, Jd) => {
    function bS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Jd.exports = bS;
  });
  var Mr = c((qH, tp) => {
    var TS = ep();
    function IS(e, t) {
      var r = e.__data__;
      return TS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    tp.exports = IS;
  });
  var np = c((FH, rp) => {
    var wS = Mr();
    function OS(e) {
      var t = wS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    rp.exports = OS;
  });
  var op = c((MH, ip) => {
    var AS = Mr();
    function xS(e) {
      return AS(this, e).get(e);
    }
    ip.exports = xS;
  });
  var sp = c((DH, ap) => {
    var SS = Mr();
    function CS(e) {
      return SS(this, e).has(e);
    }
    ap.exports = CS;
  });
  var cp = c((kH, up) => {
    var RS = Mr();
    function LS(e, t) {
      var r = RS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    up.exports = LS;
  });
  var Fn = c((GH, lp) => {
    var NS = Zd(),
      PS = np(),
      qS = op(),
      FS = sp(),
      MS = cp();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = NS;
    Jt.prototype.delete = PS;
    Jt.prototype.get = qS;
    Jt.prototype.has = FS;
    Jt.prototype.set = MS;
    lp.exports = Jt;
  });
  var dp = c((UH, fp) => {
    var DS = qr(),
      kS = qn(),
      GS = Fn(),
      US = 200;
    function VS(e, t) {
      var r = this.__data__;
      if (r instanceof DS) {
        var n = r.__data__;
        if (!kS || n.length < US - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new GS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    fp.exports = VS;
  });
  var Jo = c((VH, pp) => {
    var WS = qr(),
      BS = vd(),
      HS = md(),
      XS = yd(),
      jS = bd(),
      zS = dp();
    function er(e) {
      var t = (this.__data__ = new WS(e));
      this.size = t.size;
    }
    er.prototype.clear = BS;
    er.prototype.delete = HS;
    er.prototype.get = XS;
    er.prototype.has = jS;
    er.prototype.set = zS;
    pp.exports = er;
  });
  var vp = c((WH, gp) => {
    var KS = "__lodash_hash_undefined__";
    function YS(e) {
      return this.__data__.set(e, KS), this;
    }
    gp.exports = YS;
  });
  var mp = c((BH, hp) => {
    function $S(e) {
      return this.__data__.has(e);
    }
    hp.exports = $S;
  });
  var yp = c((HH, Ep) => {
    var QS = Fn(),
      ZS = vp(),
      JS = mp();
    function Mn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new QS(); ++t < r; ) this.add(e[t]);
    }
    Mn.prototype.add = Mn.prototype.push = ZS;
    Mn.prototype.has = JS;
    Ep.exports = Mn;
  });
  var bp = c((XH, _p) => {
    function eC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    _p.exports = eC;
  });
  var Ip = c((jH, Tp) => {
    function tC(e, t) {
      return e.has(t);
    }
    Tp.exports = tC;
  });
  var ea = c((zH, wp) => {
    var rC = yp(),
      nC = bp(),
      iC = Ip(),
      oC = 1,
      aC = 2;
    function sC(e, t, r, n, i, o) {
      var a = r & oC,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var d = o.get(e),
        m = o.get(t);
      if (d && m) return d == t && m == e;
      var h = -1,
        v = !0,
        E = r & aC ? new rC() : void 0;
      for (o.set(e, t), o.set(t, e); ++h < u; ) {
        var O = e[h],
          I = t[h];
        if (n) var C = a ? n(I, O, h, t, e, o) : n(O, I, h, e, t, o);
        if (C !== void 0) {
          if (C) continue;
          v = !1;
          break;
        }
        if (E) {
          if (
            !nC(t, function (T, N) {
              if (!iC(E, N) && (O === T || i(O, T, r, n, o))) return E.push(N);
            })
          ) {
            v = !1;
            break;
          }
        } else if (!(O === I || i(O, I, r, n, o))) {
          v = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), v;
    }
    wp.exports = sC;
  });
  var Ap = c((KH, Op) => {
    var uC = Qe(),
      cC = uC.Uint8Array;
    Op.exports = cC;
  });
  var Sp = c((YH, xp) => {
    function lC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    xp.exports = lC;
  });
  var Rp = c(($H, Cp) => {
    function fC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Cp.exports = fC;
  });
  var Fp = c((QH, qp) => {
    var Lp = zt(),
      Np = Ap(),
      dC = Pn(),
      pC = ea(),
      gC = Sp(),
      vC = Rp(),
      hC = 1,
      mC = 2,
      EC = "[object Boolean]",
      yC = "[object Date]",
      _C = "[object Error]",
      bC = "[object Map]",
      TC = "[object Number]",
      IC = "[object RegExp]",
      wC = "[object Set]",
      OC = "[object String]",
      AC = "[object Symbol]",
      xC = "[object ArrayBuffer]",
      SC = "[object DataView]",
      Pp = Lp ? Lp.prototype : void 0,
      ta = Pp ? Pp.valueOf : void 0;
    function CC(e, t, r, n, i, o, a) {
      switch (r) {
        case SC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case xC:
          return !(e.byteLength != t.byteLength || !o(new Np(e), new Np(t)));
        case EC:
        case yC:
        case TC:
          return dC(+e, +t);
        case _C:
          return e.name == t.name && e.message == t.message;
        case IC:
        case OC:
          return e == t + "";
        case bC:
          var u = gC;
        case wC:
          var s = n & hC;
          if ((u || (u = vC), e.size != t.size && !s)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= mC), a.set(e, t);
          var m = pC(u(e), u(t), n, i, o, a);
          return a.delete(e), m;
        case AC:
          if (ta) return ta.call(e) == ta.call(t);
      }
      return !1;
    }
    qp.exports = CC;
  });
  var Dn = c((ZH, Mp) => {
    function RC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Mp.exports = RC;
  });
  var we = c((JH, Dp) => {
    var LC = Array.isArray;
    Dp.exports = LC;
  });
  var ra = c((e5, kp) => {
    var NC = Dn(),
      PC = we();
    function qC(e, t, r) {
      var n = t(e);
      return PC(e) ? n : NC(n, r(e));
    }
    kp.exports = qC;
  });
  var Up = c((t5, Gp) => {
    function FC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Gp.exports = FC;
  });
  var na = c((r5, Vp) => {
    function MC() {
      return [];
    }
    Vp.exports = MC;
  });
  var ia = c((n5, Bp) => {
    var DC = Up(),
      kC = na(),
      GC = Object.prototype,
      UC = GC.propertyIsEnumerable,
      Wp = Object.getOwnPropertySymbols,
      VC = Wp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                DC(Wp(e), function (t) {
                  return UC.call(e, t);
                }));
          }
        : kC;
    Bp.exports = VC;
  });
  var Xp = c((i5, Hp) => {
    function WC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Hp.exports = WC;
  });
  var zp = c((o5, jp) => {
    var BC = It(),
      HC = gt(),
      XC = "[object Arguments]";
    function jC(e) {
      return HC(e) && BC(e) == XC;
    }
    jp.exports = jC;
  });
  var Dr = c((a5, $p) => {
    var Kp = zp(),
      zC = gt(),
      Yp = Object.prototype,
      KC = Yp.hasOwnProperty,
      YC = Yp.propertyIsEnumerable,
      $C = Kp(
        (function () {
          return arguments;
        })()
      )
        ? Kp
        : function (e) {
            return zC(e) && KC.call(e, "callee") && !YC.call(e, "callee");
          };
    $p.exports = $C;
  });
  var Zp = c((s5, Qp) => {
    function QC() {
      return !1;
    }
    Qp.exports = QC;
  });
  var kn = c((kr, tr) => {
    var ZC = Qe(),
      JC = Zp(),
      tg = typeof kr == "object" && kr && !kr.nodeType && kr,
      Jp = tg && typeof tr == "object" && tr && !tr.nodeType && tr,
      eR = Jp && Jp.exports === tg,
      eg = eR ? ZC.Buffer : void 0,
      tR = eg ? eg.isBuffer : void 0,
      rR = tR || JC;
    tr.exports = rR;
  });
  var Gn = c((u5, rg) => {
    var nR = 9007199254740991,
      iR = /^(?:0|[1-9]\d*)$/;
    function oR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? nR),
        !!t &&
          (r == "number" || (r != "symbol" && iR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    rg.exports = oR;
  });
  var Un = c((c5, ng) => {
    var aR = 9007199254740991;
    function sR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= aR;
    }
    ng.exports = sR;
  });
  var og = c((l5, ig) => {
    var uR = It(),
      cR = Un(),
      lR = gt(),
      fR = "[object Arguments]",
      dR = "[object Array]",
      pR = "[object Boolean]",
      gR = "[object Date]",
      vR = "[object Error]",
      hR = "[object Function]",
      mR = "[object Map]",
      ER = "[object Number]",
      yR = "[object Object]",
      _R = "[object RegExp]",
      bR = "[object Set]",
      TR = "[object String]",
      IR = "[object WeakMap]",
      wR = "[object ArrayBuffer]",
      OR = "[object DataView]",
      AR = "[object Float32Array]",
      xR = "[object Float64Array]",
      SR = "[object Int8Array]",
      CR = "[object Int16Array]",
      RR = "[object Int32Array]",
      LR = "[object Uint8Array]",
      NR = "[object Uint8ClampedArray]",
      PR = "[object Uint16Array]",
      qR = "[object Uint32Array]",
      he = {};
    he[AR] =
      he[xR] =
      he[SR] =
      he[CR] =
      he[RR] =
      he[LR] =
      he[NR] =
      he[PR] =
      he[qR] =
        !0;
    he[fR] =
      he[dR] =
      he[wR] =
      he[pR] =
      he[OR] =
      he[gR] =
      he[vR] =
      he[hR] =
      he[mR] =
      he[ER] =
      he[yR] =
      he[_R] =
      he[bR] =
      he[TR] =
      he[IR] =
        !1;
    function FR(e) {
      return lR(e) && cR(e.length) && !!he[uR(e)];
    }
    ig.exports = FR;
  });
  var sg = c((f5, ag) => {
    function MR(e) {
      return function (t) {
        return e(t);
      };
    }
    ag.exports = MR;
  });
  var cg = c((Gr, rr) => {
    var DR = Ro(),
      ug = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      Ur = ug && typeof rr == "object" && rr && !rr.nodeType && rr,
      kR = Ur && Ur.exports === ug,
      oa = kR && DR.process,
      GR = (function () {
        try {
          var e = Ur && Ur.require && Ur.require("util").types;
          return e || (oa && oa.binding && oa.binding("util"));
        } catch {}
      })();
    rr.exports = GR;
  });
  var Vn = c((d5, dg) => {
    var UR = og(),
      VR = sg(),
      lg = cg(),
      fg = lg && lg.isTypedArray,
      WR = fg ? VR(fg) : UR;
    dg.exports = WR;
  });
  var aa = c((p5, pg) => {
    var BR = Xp(),
      HR = Dr(),
      XR = we(),
      jR = kn(),
      zR = Gn(),
      KR = Vn(),
      YR = Object.prototype,
      $R = YR.hasOwnProperty;
    function QR(e, t) {
      var r = XR(e),
        n = !r && HR(e),
        i = !r && !n && jR(e),
        o = !r && !n && !i && KR(e),
        a = r || n || i || o,
        u = a ? BR(e.length, String) : [],
        s = u.length;
      for (var d in e)
        (t || $R.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (i && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              zR(d, s))
          ) &&
          u.push(d);
      return u;
    }
    pg.exports = QR;
  });
  var Wn = c((g5, gg) => {
    var ZR = Object.prototype;
    function JR(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || ZR;
      return e === r;
    }
    gg.exports = JR;
  });
  var hg = c((v5, vg) => {
    var eL = Lo(),
      tL = eL(Object.keys, Object);
    vg.exports = tL;
  });
  var Bn = c((h5, mg) => {
    var rL = Wn(),
      nL = hg(),
      iL = Object.prototype,
      oL = iL.hasOwnProperty;
    function aL(e) {
      if (!rL(e)) return nL(e);
      var t = [];
      for (var r in Object(e)) oL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    mg.exports = aL;
  });
  var qt = c((m5, Eg) => {
    var sL = $o(),
      uL = Un();
    function cL(e) {
      return e != null && uL(e.length) && !sL(e);
    }
    Eg.exports = cL;
  });
  var Vr = c((E5, yg) => {
    var lL = aa(),
      fL = Bn(),
      dL = qt();
    function pL(e) {
      return dL(e) ? lL(e) : fL(e);
    }
    yg.exports = pL;
  });
  var bg = c((y5, _g) => {
    var gL = ra(),
      vL = ia(),
      hL = Vr();
    function mL(e) {
      return gL(e, hL, vL);
    }
    _g.exports = mL;
  });
  var wg = c((_5, Ig) => {
    var Tg = bg(),
      EL = 1,
      yL = Object.prototype,
      _L = yL.hasOwnProperty;
    function bL(e, t, r, n, i, o) {
      var a = r & EL,
        u = Tg(e),
        s = u.length,
        d = Tg(t),
        m = d.length;
      if (s != m && !a) return !1;
      for (var h = s; h--; ) {
        var v = u[h];
        if (!(a ? v in t : _L.call(t, v))) return !1;
      }
      var E = o.get(e),
        O = o.get(t);
      if (E && O) return E == t && O == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var C = a; ++h < s; ) {
        v = u[h];
        var T = e[v],
          N = t[v];
        if (n) var R = a ? n(N, T, v, t, e, o) : n(T, N, v, e, t, o);
        if (!(R === void 0 ? T === N || i(T, N, r, n, o) : R)) {
          I = !1;
          break;
        }
        C || (C = v == "constructor");
      }
      if (I && !C) {
        var q = e.constructor,
          M = t.constructor;
        q != M &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof q == "function" &&
            q instanceof q &&
            typeof M == "function" &&
            M instanceof M
          ) &&
          (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    Ig.exports = bL;
  });
  var Ag = c((b5, Og) => {
    var TL = wt(),
      IL = Qe(),
      wL = TL(IL, "DataView");
    Og.exports = wL;
  });
  var Sg = c((T5, xg) => {
    var OL = wt(),
      AL = Qe(),
      xL = OL(AL, "Promise");
    xg.exports = xL;
  });
  var Rg = c((I5, Cg) => {
    var SL = wt(),
      CL = Qe(),
      RL = SL(CL, "Set");
    Cg.exports = RL;
  });
  var sa = c((w5, Lg) => {
    var LL = wt(),
      NL = Qe(),
      PL = LL(NL, "WeakMap");
    Lg.exports = PL;
  });
  var Hn = c((O5, kg) => {
    var ua = Ag(),
      ca = qn(),
      la = Sg(),
      fa = Rg(),
      da = sa(),
      Dg = It(),
      nr = Zo(),
      Ng = "[object Map]",
      qL = "[object Object]",
      Pg = "[object Promise]",
      qg = "[object Set]",
      Fg = "[object WeakMap]",
      Mg = "[object DataView]",
      FL = nr(ua),
      ML = nr(ca),
      DL = nr(la),
      kL = nr(fa),
      GL = nr(da),
      Ft = Dg;
    ((ua && Ft(new ua(new ArrayBuffer(1))) != Mg) ||
      (ca && Ft(new ca()) != Ng) ||
      (la && Ft(la.resolve()) != Pg) ||
      (fa && Ft(new fa()) != qg) ||
      (da && Ft(new da()) != Fg)) &&
      (Ft = function (e) {
        var t = Dg(e),
          r = t == qL ? e.constructor : void 0,
          n = r ? nr(r) : "";
        if (n)
          switch (n) {
            case FL:
              return Mg;
            case ML:
              return Ng;
            case DL:
              return Pg;
            case kL:
              return qg;
            case GL:
              return Fg;
          }
        return t;
      });
    kg.exports = Ft;
  });
  var jg = c((A5, Xg) => {
    var pa = Jo(),
      UL = ea(),
      VL = Fp(),
      WL = wg(),
      Gg = Hn(),
      Ug = we(),
      Vg = kn(),
      BL = Vn(),
      HL = 1,
      Wg = "[object Arguments]",
      Bg = "[object Array]",
      Xn = "[object Object]",
      XL = Object.prototype,
      Hg = XL.hasOwnProperty;
    function jL(e, t, r, n, i, o) {
      var a = Ug(e),
        u = Ug(t),
        s = a ? Bg : Gg(e),
        d = u ? Bg : Gg(t);
      (s = s == Wg ? Xn : s), (d = d == Wg ? Xn : d);
      var m = s == Xn,
        h = d == Xn,
        v = s == d;
      if (v && Vg(e)) {
        if (!Vg(t)) return !1;
        (a = !0), (m = !1);
      }
      if (v && !m)
        return (
          o || (o = new pa()),
          a || BL(e) ? UL(e, t, r, n, i, o) : VL(e, t, s, r, n, i, o)
        );
      if (!(r & HL)) {
        var E = m && Hg.call(e, "__wrapped__"),
          O = h && Hg.call(t, "__wrapped__");
        if (E || O) {
          var I = E ? e.value() : e,
            C = O ? t.value() : t;
          return o || (o = new pa()), i(I, C, r, n, o);
        }
      }
      return v ? (o || (o = new pa()), WL(e, t, r, n, i, o)) : !1;
    }
    Xg.exports = jL;
  });
  var ga = c((x5, Yg) => {
    var zL = jg(),
      zg = gt();
    function Kg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!zg(e) && !zg(t))
        ? e !== e && t !== t
        : zL(e, t, r, n, Kg, i);
    }
    Yg.exports = Kg;
  });
  var Qg = c((S5, $g) => {
    var KL = Jo(),
      YL = ga(),
      $L = 1,
      QL = 2;
    function ZL(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var u = r[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        u = r[i];
        var s = u[0],
          d = e[s],
          m = u[1];
        if (a && u[2]) {
          if (d === void 0 && !(s in e)) return !1;
        } else {
          var h = new KL();
          if (n) var v = n(d, m, s, e, t, h);
          if (!(v === void 0 ? YL(m, d, $L | QL, n, h) : v)) return !1;
        }
      }
      return !0;
    }
    $g.exports = ZL;
  });
  var va = c((C5, Zg) => {
    var JL = ut();
    function eN(e) {
      return e === e && !JL(e);
    }
    Zg.exports = eN;
  });
  var ev = c((R5, Jg) => {
    var tN = va(),
      rN = Vr();
    function nN(e) {
      for (var t = rN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, tN(i)];
      }
      return t;
    }
    Jg.exports = nN;
  });
  var ha = c((L5, tv) => {
    function iN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    tv.exports = iN;
  });
  var nv = c((N5, rv) => {
    var oN = Qg(),
      aN = ev(),
      sN = ha();
    function uN(e) {
      var t = aN(e);
      return t.length == 1 && t[0][2]
        ? sN(t[0][0], t[0][1])
        : function (r) {
            return r === e || oN(r, e, t);
          };
    }
    rv.exports = uN;
  });
  var Wr = c((P5, iv) => {
    var cN = It(),
      lN = gt(),
      fN = "[object Symbol]";
    function dN(e) {
      return typeof e == "symbol" || (lN(e) && cN(e) == fN);
    }
    iv.exports = dN;
  });
  var jn = c((q5, ov) => {
    var pN = we(),
      gN = Wr(),
      vN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      hN = /^\w*$/;
    function mN(e, t) {
      if (pN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        gN(e)
        ? !0
        : hN.test(e) || !vN.test(e) || (t != null && e in Object(t));
    }
    ov.exports = mN;
  });
  var uv = c((F5, sv) => {
    var av = Fn(),
      EN = "Expected a function";
    function ma(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(EN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ma.Cache || av)()), r;
    }
    ma.Cache = av;
    sv.exports = ma;
  });
  var lv = c((M5, cv) => {
    var yN = uv(),
      _N = 500;
    function bN(e) {
      var t = yN(e, function (n) {
          return r.size === _N && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    cv.exports = bN;
  });
  var dv = c((D5, fv) => {
    var TN = lv(),
      IN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      wN = /\\(\\)?/g,
      ON = TN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(IN, function (r, n, i, o) {
            t.push(i ? o.replace(wN, "$1") : n || r);
          }),
          t
        );
      });
    fv.exports = ON;
  });
  var Ea = c((k5, pv) => {
    function AN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    pv.exports = AN;
  });
  var yv = c((G5, Ev) => {
    var gv = zt(),
      xN = Ea(),
      SN = we(),
      CN = Wr(),
      RN = 1 / 0,
      vv = gv ? gv.prototype : void 0,
      hv = vv ? vv.toString : void 0;
    function mv(e) {
      if (typeof e == "string") return e;
      if (SN(e)) return xN(e, mv) + "";
      if (CN(e)) return hv ? hv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -RN ? "-0" : t;
    }
    Ev.exports = mv;
  });
  var bv = c((U5, _v) => {
    var LN = yv();
    function NN(e) {
      return e == null ? "" : LN(e);
    }
    _v.exports = NN;
  });
  var Br = c((V5, Tv) => {
    var PN = we(),
      qN = jn(),
      FN = dv(),
      MN = bv();
    function DN(e, t) {
      return PN(e) ? e : qN(e, t) ? [e] : FN(MN(e));
    }
    Tv.exports = DN;
  });
  var ir = c((W5, Iv) => {
    var kN = Wr(),
      GN = 1 / 0;
    function UN(e) {
      if (typeof e == "string" || kN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -GN ? "-0" : t;
    }
    Iv.exports = UN;
  });
  var zn = c((B5, wv) => {
    var VN = Br(),
      WN = ir();
    function BN(e, t) {
      t = VN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[WN(t[r++])];
      return r && r == n ? e : void 0;
    }
    wv.exports = BN;
  });
  var Kn = c((H5, Ov) => {
    var HN = zn();
    function XN(e, t, r) {
      var n = e == null ? void 0 : HN(e, t);
      return n === void 0 ? r : n;
    }
    Ov.exports = XN;
  });
  var xv = c((X5, Av) => {
    function jN(e, t) {
      return e != null && t in Object(e);
    }
    Av.exports = jN;
  });
  var Cv = c((j5, Sv) => {
    var zN = Br(),
      KN = Dr(),
      YN = we(),
      $N = Gn(),
      QN = Un(),
      ZN = ir();
    function JN(e, t, r) {
      t = zN(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = ZN(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && QN(i) && $N(a, i) && (YN(e) || KN(e)));
    }
    Sv.exports = JN;
  });
  var Lv = c((z5, Rv) => {
    var eP = xv(),
      tP = Cv();
    function rP(e, t) {
      return e != null && tP(e, t, eP);
    }
    Rv.exports = rP;
  });
  var Pv = c((K5, Nv) => {
    var nP = ga(),
      iP = Kn(),
      oP = Lv(),
      aP = jn(),
      sP = va(),
      uP = ha(),
      cP = ir(),
      lP = 1,
      fP = 2;
    function dP(e, t) {
      return aP(e) && sP(t)
        ? uP(cP(e), t)
        : function (r) {
            var n = iP(r, e);
            return n === void 0 && n === t ? oP(r, e) : nP(t, n, lP | fP);
          };
    }
    Nv.exports = dP;
  });
  var Yn = c((Y5, qv) => {
    function pP(e) {
      return e;
    }
    qv.exports = pP;
  });
  var ya = c(($5, Fv) => {
    function gP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Fv.exports = gP;
  });
  var Dv = c((Q5, Mv) => {
    var vP = zn();
    function hP(e) {
      return function (t) {
        return vP(t, e);
      };
    }
    Mv.exports = hP;
  });
  var Gv = c((Z5, kv) => {
    var mP = ya(),
      EP = Dv(),
      yP = jn(),
      _P = ir();
    function bP(e) {
      return yP(e) ? mP(_P(e)) : EP(e);
    }
    kv.exports = bP;
  });
  var Ot = c((J5, Uv) => {
    var TP = nv(),
      IP = Pv(),
      wP = Yn(),
      OP = we(),
      AP = Gv();
    function xP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? wP
        : typeof e == "object"
        ? OP(e)
          ? IP(e[0], e[1])
          : TP(e)
        : AP(e);
    }
    Uv.exports = xP;
  });
  var _a = c((eX, Vv) => {
    var SP = Ot(),
      CP = qt(),
      RP = Vr();
    function LP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!CP(t)) {
          var o = SP(r, 3);
          (t = RP(t)),
            (r = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Vv.exports = LP;
  });
  var ba = c((tX, Wv) => {
    function NP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Wv.exports = NP;
  });
  var Hv = c((rX, Bv) => {
    var PP = /\s/;
    function qP(e) {
      for (var t = e.length; t-- && PP.test(e.charAt(t)); );
      return t;
    }
    Bv.exports = qP;
  });
  var jv = c((nX, Xv) => {
    var FP = Hv(),
      MP = /^\s+/;
    function DP(e) {
      return e && e.slice(0, FP(e) + 1).replace(MP, "");
    }
    Xv.exports = DP;
  });
  var $n = c((iX, Yv) => {
    var kP = jv(),
      zv = ut(),
      GP = Wr(),
      Kv = 0 / 0,
      UP = /^[-+]0x[0-9a-f]+$/i,
      VP = /^0b[01]+$/i,
      WP = /^0o[0-7]+$/i,
      BP = parseInt;
    function HP(e) {
      if (typeof e == "number") return e;
      if (GP(e)) return Kv;
      if (zv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = zv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = kP(e);
      var r = VP.test(e);
      return r || WP.test(e) ? BP(e.slice(2), r ? 2 : 8) : UP.test(e) ? Kv : +e;
    }
    Yv.exports = HP;
  });
  var Zv = c((oX, Qv) => {
    var XP = $n(),
      $v = 1 / 0,
      jP = 17976931348623157e292;
    function zP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = XP(e)), e === $v || e === -$v)) {
        var t = e < 0 ? -1 : 1;
        return t * jP;
      }
      return e === e ? e : 0;
    }
    Qv.exports = zP;
  });
  var Ta = c((aX, Jv) => {
    var KP = Zv();
    function YP(e) {
      var t = KP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Jv.exports = YP;
  });
  var th = c((sX, eh) => {
    var $P = ba(),
      QP = Ot(),
      ZP = Ta(),
      JP = Math.max;
    function eq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : ZP(r);
      return i < 0 && (i = JP(n + i, 0)), $P(e, QP(t, 3), i);
    }
    eh.exports = eq;
  });
  var Ia = c((uX, rh) => {
    var tq = _a(),
      rq = th(),
      nq = tq(rq);
    rh.exports = nq;
  });
  var oh = {};
  De(oh, {
    ELEMENT_MATCHES: () => iq,
    FLEX_PREFIXED: () => wa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => At,
    TRANSFORM_STYLE_PREFIXED: () => Zn,
    withBrowser: () => Qn,
  });
  var ih,
    Je,
    Qn,
    iq,
    wa,
    At,
    nh,
    Zn,
    Jn = me(() => {
      "use strict";
      (ih = le(Ia())),
        (Je = typeof window < "u"),
        (Qn = (e, t) => (Je ? e() : t)),
        (iq = Qn(() =>
          (0, ih.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (wa = Qn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (At = Qn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (nh = At.split("transform")[0]),
        (Zn = nh ? nh + "TransformStyle" : "transformStyle");
    });
  var Oa = c((cX, lh) => {
    var oq = 4,
      aq = 0.001,
      sq = 1e-7,
      uq = 10,
      Hr = 11,
      ei = 1 / (Hr - 1),
      cq = typeof Float32Array == "function";
    function ah(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function sh(e, t) {
      return 3 * t - 6 * e;
    }
    function uh(e) {
      return 3 * e;
    }
    function ti(e, t, r) {
      return ((ah(t, r) * e + sh(t, r)) * e + uh(t)) * e;
    }
    function ch(e, t, r) {
      return 3 * ah(t, r) * e * e + 2 * sh(t, r) * e + uh(t);
    }
    function lq(e, t, r, n, i) {
      var o,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (o = ti(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > sq && ++u < uq);
      return a;
    }
    function fq(e, t, r, n) {
      for (var i = 0; i < oq; ++i) {
        var o = ch(t, r, n);
        if (o === 0) return t;
        var a = ti(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    lh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = cq ? new Float32Array(Hr) : new Array(Hr);
      if (t !== r || n !== i)
        for (var a = 0; a < Hr; ++a) o[a] = ti(a * ei, t, n);
      function u(s) {
        for (var d = 0, m = 1, h = Hr - 1; m !== h && o[m] <= s; ++m) d += ei;
        --m;
        var v = (s - o[m]) / (o[m + 1] - o[m]),
          E = d + v * ei,
          O = ch(E, t, n);
        return O >= aq ? fq(s, E, t, n) : O === 0 ? E : lq(s, d, d + ei, t, n);
      }
      return function (d) {
        return t === r && n === i
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : ti(u(d), r, i);
      };
    };
  });
  var jr = {};
  De(jr, {
    bounce: () => zq,
    bouncePast: () => Kq,
    ease: () => dq,
    easeIn: () => pq,
    easeInOut: () => vq,
    easeOut: () => gq,
    inBack: () => kq,
    inCirc: () => qq,
    inCubic: () => yq,
    inElastic: () => Vq,
    inExpo: () => Lq,
    inOutBack: () => Uq,
    inOutCirc: () => Mq,
    inOutCubic: () => bq,
    inOutElastic: () => Bq,
    inOutExpo: () => Pq,
    inOutQuad: () => Eq,
    inOutQuart: () => wq,
    inOutQuint: () => xq,
    inOutSine: () => Rq,
    inQuad: () => hq,
    inQuart: () => Tq,
    inQuint: () => Oq,
    inSine: () => Sq,
    outBack: () => Gq,
    outBounce: () => Dq,
    outCirc: () => Fq,
    outCubic: () => _q,
    outElastic: () => Wq,
    outExpo: () => Nq,
    outQuad: () => mq,
    outQuart: () => Iq,
    outQuint: () => Aq,
    outSine: () => Cq,
    swingFrom: () => Xq,
    swingFromTo: () => Hq,
    swingTo: () => jq,
  });
  function hq(e) {
    return Math.pow(e, 2);
  }
  function mq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Eq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function yq(e) {
    return Math.pow(e, 3);
  }
  function _q(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function bq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Tq(e) {
    return Math.pow(e, 4);
  }
  function Iq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function wq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Oq(e) {
    return Math.pow(e, 5);
  }
  function Aq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function xq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Sq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Cq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Rq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Lq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Nq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Pq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function qq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Fq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Mq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Dq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function kq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Gq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Uq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Vq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Wq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Bq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Hq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Xq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function jq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function zq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Kq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Xr,
    vt,
    dq,
    pq,
    gq,
    vq,
    Aa = me(() => {
      "use strict";
      (Xr = le(Oa())),
        (vt = 1.70158),
        (dq = (0, Xr.default)(0.25, 0.1, 0.25, 1)),
        (pq = (0, Xr.default)(0.42, 0, 1, 1)),
        (gq = (0, Xr.default)(0, 0, 0.58, 1)),
        (vq = (0, Xr.default)(0.42, 0, 0.58, 1));
    });
  var dh = {};
  De(dh, {
    applyEasing: () => $q,
    createBezierEasing: () => Yq,
    optimizeFloat: () => zr,
  });
  function zr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Yq(e) {
    return (0, fh.default)(...e);
  }
  function $q(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : zr(r ? (t > 0 ? r(t) : t) : t > 0 && e && jr[e] ? jr[e](t) : t);
  }
  var fh,
    xa = me(() => {
      "use strict";
      Aa();
      fh = le(Oa());
    });
  var vh = {};
  De(vh, {
    createElementState: () => gh,
    ixElements: () => lF,
    mergeActionState: () => Sa,
  });
  function gh(e, t, r, n, i) {
    let o =
      r === Qq ? (0, or.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, or.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Sa(e, t, r, n, i) {
    let o = dF(i);
    return (0, or.mergeIn)(e, [t, cF, r], n, o);
  }
  function dF(e) {
    let { config: t } = e;
    return fF.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        u = t[o];
      return a != null && u != null && (r[o] = u), r;
    }, {});
  }
  var or,
    fX,
    Qq,
    dX,
    Zq,
    Jq,
    eF,
    tF,
    rF,
    nF,
    iF,
    oF,
    aF,
    sF,
    uF,
    ph,
    cF,
    lF,
    fF,
    hh = me(() => {
      "use strict";
      or = le($t());
      Ue();
      ({
        HTML_ELEMENT: fX,
        PLAIN_OBJECT: Qq,
        ABSTRACT_NODE: dX,
        CONFIG_X_VALUE: Zq,
        CONFIG_Y_VALUE: Jq,
        CONFIG_Z_VALUE: eF,
        CONFIG_VALUE: tF,
        CONFIG_X_UNIT: rF,
        CONFIG_Y_UNIT: nF,
        CONFIG_Z_UNIT: iF,
        CONFIG_UNIT: oF,
      } = Ce),
        ({
          IX2_SESSION_STOPPED: aF,
          IX2_INSTANCE_ADDED: sF,
          IX2_ELEMENT_STATE_CHANGED: uF,
        } = Ie),
        (ph = {}),
        (cF = "refState"),
        (lF = (e = ph, t = {}) => {
          switch (t.type) {
            case aF:
              return ph;
            case sF: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: u } = o,
                s = e;
              return (
                (0, or.getIn)(s, [r, n]) !== n && (s = gh(s, n, a, r, o)),
                Sa(s, r, u, i, o)
              );
            }
            case uF: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Sa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      fF = [
        [Zq, rF],
        [Jq, nF],
        [eF, iF],
        [tF, oF],
      ];
    });
  var mh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    var pF = (e) => e.value;
    Oe.getPluginConfig = pF;
    var gF = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = gF;
    var vF = (e) => e || { value: 0 };
    Oe.getPluginOrigin = vF;
    var hF = (e) => ({ value: e.value });
    Oe.getPluginDestination = hF;
    var mF = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = mF;
    var EF = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = EF;
    var yF = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = yF;
  });
  var yh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var _F = (e) => document.querySelector(`[data-w-id="${e}"]`),
      bF = () => window.Webflow.require("spline"),
      TF = (e, t) => e.filter((r) => !t.includes(r)),
      IF = (e, t) => e.value[t];
    Ae.getPluginConfig = IF;
    var wF = () => null;
    Ae.getPluginDuration = wF;
    var Eh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      OF = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = TF(n, o);
          return a.length ? a.reduce((s, d) => ((s[d] = Eh[d]), s), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = Eh[a]), o), {});
      };
    Ae.getPluginOrigin = OF;
    var AF = (e) => e.value;
    Ae.getPluginDestination = AF;
    var xF = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? _F(n) : null;
    };
    Ae.createPluginInstance = xF;
    var SF = (e, t, r) => {
      let n = bF(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (u) => {
          if (!u) throw new Error("Invalid spline app passed to renderSpline");
          let s = o && u.findObjectById(o);
          if (!s) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (s.position.x = d.positionX),
            d.positionY != null && (s.position.y = d.positionY),
            d.positionZ != null && (s.position.z = d.positionZ),
            d.rotationX != null && (s.rotation.x = d.rotationX),
            d.rotationY != null && (s.rotation.y = d.rotationY),
            d.rotationZ != null && (s.rotation.z = d.rotationZ),
            d.scaleX != null && (s.scale.x = d.scaleX),
            d.scaleY != null && (s.scale.y = d.scaleY),
            d.scaleZ != null && (s.scale.z = d.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = SF;
    var CF = () => null;
    Ae.clearPlugin = CF;
  });
  var Ra = c((Ca) => {
    "use strict";
    Object.defineProperty(Ca, "__esModule", { value: !0 });
    Ca.normalizeColor = RF;
    var _h = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function RF(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof _h[o] == "string" ? _h[o].toLowerCase() : null) || o;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3
          ? ((t = parseInt(s[0] + s[0], 16)),
            (r = parseInt(s[1] + s[1], 16)),
            (n = parseInt(s[2] + s[2], 16)))
          : s.length === 6 &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (r = parseInt(s.substring(2, 4), 16)),
            (n = parseInt(s.substring(4, 6), 16)));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10)),
          (i = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          d = parseFloat(s[0]),
          m = parseFloat(s[1].replace("%", "")) / 100,
          h = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let v = (1 - Math.abs(2 * h - 1)) * m,
          E = v * (1 - Math.abs(((d / 60) % 2) - 1)),
          O = h - v / 2,
          I,
          C,
          T;
        d >= 0 && d < 60
          ? ((I = v), (C = E), (T = 0))
          : d >= 60 && d < 120
          ? ((I = E), (C = v), (T = 0))
          : d >= 120 && d < 180
          ? ((I = 0), (C = v), (T = E))
          : d >= 180 && d < 240
          ? ((I = 0), (C = E), (T = v))
          : d >= 240 && d < 300
          ? ((I = E), (C = 0), (T = v))
          : ((I = v), (C = 0), (T = E)),
          (t = Math.round((I + O) * 255)),
          (r = Math.round((C + O) * 255)),
          (n = Math.round((T + O) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          d = parseFloat(s[0]),
          m = parseFloat(s[1].replace("%", "")) / 100,
          h = parseFloat(s[2].replace("%", "")) / 100,
          v = (1 - Math.abs(2 * h - 1)) * m,
          E = v * (1 - Math.abs(((d / 60) % 2) - 1)),
          O = h - v / 2,
          I,
          C,
          T;
        d >= 0 && d < 60
          ? ((I = v), (C = E), (T = 0))
          : d >= 60 && d < 120
          ? ((I = E), (C = v), (T = 0))
          : d >= 120 && d < 180
          ? ((I = 0), (C = v), (T = E))
          : d >= 180 && d < 240
          ? ((I = 0), (C = E), (T = v))
          : d >= 240 && d < 300
          ? ((I = E), (C = 0), (T = v))
          : ((I = v), (C = 0), (T = E)),
          (t = Math.round((I + O) * 255)),
          (r = Math.round((C + O) * 255)),
          (n = Math.round((T + O) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var bh = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var LF = Ra(),
      NF = (e, t) => e.value[t];
    xe.getPluginConfig = NF;
    var PF = () => null;
    xe.getPluginDuration = PF;
    var qF = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, LF.normalizeColor)(i);
    };
    xe.getPluginOrigin = qF;
    var FF = (e) => e.value;
    xe.getPluginDestination = FF;
    var MF = () => null;
    xe.createPluginInstance = MF;
    var DF = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: u, green: s, blue: d, alpha: m } = o,
        h;
      a != null && (h = a + i),
        u != null &&
          d != null &&
          s != null &&
          m != null &&
          (h = `rgba(${u}, ${s}, ${d}, ${m})`),
        h != null && document.documentElement.style.setProperty(n, h);
    };
    xe.renderPlugin = DF;
    var kF = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    xe.clearPlugin = kF;
  });
  var Th = c((ri) => {
    "use strict";
    var Na = pn().default;
    Object.defineProperty(ri, "__esModule", { value: !0 });
    ri.pluginMethodMap = void 0;
    var La = (Ue(), nt(Sf)),
      GF = Na(mh()),
      UF = Na(yh()),
      VF = Na(bh()),
      mX = (ri.pluginMethodMap = new Map([
        [La.ActionTypeConsts.PLUGIN_LOTTIE, { ...GF }],
        [La.ActionTypeConsts.PLUGIN_SPLINE, { ...UF }],
        [La.ActionTypeConsts.PLUGIN_VARIABLE, { ...VF }],
      ]));
  });
  var Ih = {};
  De(Ih, {
    clearPlugin: () => ka,
    createPluginInstance: () => BF,
    getPluginConfig: () => qa,
    getPluginDestination: () => Ma,
    getPluginDuration: () => WF,
    getPluginOrigin: () => Fa,
    isPluginType: () => Mt,
    renderPlugin: () => Da,
  });
  function Mt(e) {
    return Pa.pluginMethodMap.has(e);
  }
  var Pa,
    Dt,
    qa,
    Fa,
    WF,
    Ma,
    BF,
    Da,
    ka,
    Ga = me(() => {
      "use strict";
      Jn();
      Pa = le(Th());
      (Dt = (e) => (t) => {
        if (!Je) return () => null;
        let r = Pa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (qa = Dt("getPluginConfig")),
        (Fa = Dt("getPluginOrigin")),
        (WF = Dt("getPluginDuration")),
        (Ma = Dt("getPluginDestination")),
        (BF = Dt("createPluginInstance")),
        (Da = Dt("renderPlugin")),
        (ka = Dt("clearPlugin"));
    });
  var Oh = c((_X, wh) => {
    function HF(e, t) {
      return e == null || e !== e ? t : e;
    }
    wh.exports = HF;
  });
  var xh = c((bX, Ah) => {
    function XF(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Ah.exports = XF;
  });
  var Ch = c((TX, Sh) => {
    function jF(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), u = a.length; u--; ) {
          var s = a[e ? u : ++i];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Sh.exports = jF;
  });
  var Lh = c((IX, Rh) => {
    var zF = Ch(),
      KF = zF();
    Rh.exports = KF;
  });
  var Ua = c((wX, Nh) => {
    var YF = Lh(),
      $F = Vr();
    function QF(e, t) {
      return e && YF(e, t, $F);
    }
    Nh.exports = QF;
  });
  var qh = c((OX, Ph) => {
    var ZF = qt();
    function JF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!ZF(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Ph.exports = JF;
  });
  var Va = c((AX, Fh) => {
    var eM = Ua(),
      tM = qh(),
      rM = tM(eM);
    Fh.exports = rM;
  });
  var Dh = c((xX, Mh) => {
    function nM(e, t, r, n, i) {
      return (
        i(e, function (o, a, u) {
          r = n ? ((n = !1), o) : t(r, o, a, u);
        }),
        r
      );
    }
    Mh.exports = nM;
  });
  var Gh = c((SX, kh) => {
    var iM = xh(),
      oM = Va(),
      aM = Ot(),
      sM = Dh(),
      uM = we();
    function cM(e, t, r) {
      var n = uM(e) ? iM : sM,
        i = arguments.length < 3;
      return n(e, aM(t, 4), r, i, oM);
    }
    kh.exports = cM;
  });
  var Vh = c((CX, Uh) => {
    var lM = ba(),
      fM = Ot(),
      dM = Ta(),
      pM = Math.max,
      gM = Math.min;
    function vM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = dM(r)), (i = r < 0 ? pM(n + i, 0) : gM(i, n - 1))),
        lM(e, fM(t, 3), i, !0)
      );
    }
    Uh.exports = vM;
  });
  var Bh = c((RX, Wh) => {
    var hM = _a(),
      mM = Vh(),
      EM = hM(mM);
    Wh.exports = EM;
  });
  function Hh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function yM(e, t) {
    if (Hh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Hh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Wa,
    Xh = me(() => {
      "use strict";
      Wa = yM;
    });
  var cm = {};
  De(cm, {
    cleanupHTMLElement: () => hD,
    clearAllStyles: () => vD,
    clearObjectCache: () => MM,
    getActionListProgress: () => ED,
    getAffectedElements: () => za,
    getComputedStyle: () => HM,
    getDestinationValues: () => QM,
    getElementId: () => UM,
    getInstanceId: () => kM,
    getInstanceOrigin: () => zM,
    getItemConfigByKey: () => $M,
    getMaxDurationItemIndex: () => um,
    getNamespacedParameterId: () => bD,
    getRenderType: () => om,
    getStyleProp: () => ZM,
    mediaQueriesEqual: () => ID,
    observeStore: () => BM,
    reduceListToGroup: () => yD,
    reifyState: () => VM,
    renderHTMLElement: () => JM,
    shallowEqual: () => Wa,
    shouldAllowMediaQuery: () => TD,
    shouldNamespaceEventParameter: () => _D,
    stringifyTarget: () => wD,
  });
  function MM() {
    ni.clear();
  }
  function kM() {
    return "i" + DM++;
  }
  function UM(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + GM++;
  }
  function VM({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, si.default)(
        e,
        (a, u) => {
          let { eventTypeId: s } = u;
          return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function BM({ store: e, select: t, onChange: r, comparator: n = WM }) {
    let { getState: i, subscribe: o } = e,
      a = o(s),
      u = t(i());
    function s() {
      let d = t(i());
      if (d == null) {
        a();
        return;
      }
      n(d, u) || ((u = d), r(u, e));
    }
    return a;
  }
  function Kh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      };
    }
    return {};
  }
  function za({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (G, x) =>
          G.concat(
            za({
              config: { target: x },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: u,
        queryDocument: s,
        getChildElements: d,
        getSiblingElements: m,
        matchSelector: h,
        elementContains: v,
        isSiblingNode: E,
      } = i,
      { target: O } = e;
    if (!O) return [];
    let {
      id: I,
      objectId: C,
      selector: T,
      selectorGuids: N,
      appliesTo: R,
      useEventTarget: q,
    } = Kh(O);
    if (C) return [ni.has(C) ? ni.get(C) : ni.set(C, {}).get(C)];
    if (R === jo.PAGE) {
      let G = a(I);
      return G ? [G] : [];
    }
    let F = (t?.action?.config?.affectedElements ?? {})[I || T] || {},
      H = !!(F.id || F.selector),
      K,
      $,
      J,
      ee = t && u(Kh(t.target));
    if (
      (H
        ? ((K = F.limitAffectedElements), ($ = ee), (J = u(F)))
        : ($ = J = u({ id: I, selector: T, selectorGuids: N })),
      t && q)
    ) {
      let G = r && (J || q === !0) ? [r] : s(ee);
      if (J) {
        if (q === PM) return s(J).filter((x) => G.some((D) => v(x, D)));
        if (q === jh) return s(J).filter((x) => G.some((D) => v(D, x)));
        if (q === zh) return s(J).filter((x) => G.some((D) => E(D, x)));
      }
      return G;
    }
    return $ == null || J == null
      ? []
      : Je && n
      ? s(J).filter((G) => n.contains(G))
      : K === jh
      ? s($, J)
      : K === NM
      ? d(s($)).filter(h(J))
      : K === zh
      ? m(s($)).filter(h(J))
      : s(J);
  }
  function HM({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case lr:
      case fr:
      case dr:
      case pr:
      case ci:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function zM(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Mt(a)) return Fa(a)(t[a], n);
    switch (n.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case Qr:
        return t[n.actionTypeId] || Ka[n.actionTypeId];
      case Zr:
        return XM(t[n.actionTypeId], n.config.filters);
      case Jr:
        return jM(t[n.actionTypeId], n.config.fontVariations);
      case rm:
        return { value: (0, ht.default)(parseFloat(o(e, oi)), 1) };
      case lr: {
        let u = o(e, ct),
          s = o(e, lt),
          d,
          m;
        return (
          n.config.widthUnit === xt
            ? (d = Yh.test(u) ? parseFloat(u) : parseFloat(r.width))
            : (d = (0, ht.default)(parseFloat(u), parseFloat(r.width))),
          n.config.heightUnit === xt
            ? (m = Yh.test(s) ? parseFloat(s) : parseFloat(r.height))
            : (m = (0, ht.default)(parseFloat(s), parseFloat(r.height))),
          { widthValue: d, heightValue: m }
        );
      }
      case fr:
      case dr:
      case pr:
        return dD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ci:
        return { value: (0, ht.default)(o(e, ai), r.display) };
      case FM:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function QM({ element: e, actionItem: t, elementApi: r }) {
    if (Mt(t.actionTypeId)) return Ma(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case Qr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case lr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: d } = t.config;
        if (!Je) return { widthValue: s, heightValue: d };
        if (a === xt) {
          let m = n(e, ct);
          i(e, ct, ""), (s = o(e, "offsetWidth")), i(e, ct, m);
        }
        if (u === xt) {
          let m = n(e, lt);
          i(e, lt, ""), (d = o(e, "offsetHeight")), i(e, lt, m);
        }
        return { widthValue: s, heightValue: d };
      }
      case fr:
      case dr:
      case pr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: u,
        } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = r,
            d = s(e, u),
            m = (0, Zh.normalizeColor)(d);
          return {
            rValue: m.red,
            gValue: m.green,
            bValue: m.blue,
            aValue: m.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Zr:
        return t.config.filters.reduce(KM, {});
      case Jr:
        return t.config.fontVariations.reduce(YM, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function om(e) {
    if (/^TRANSFORM_/.test(e)) return em;
    if (/^STYLE_/.test(e)) return Xa;
    if (/^GENERAL_/.test(e)) return Ha;
    if (/^PLUGIN_/.test(e)) return tm;
  }
  function ZM(e, t) {
    return e === Xa ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function JM(e, t, r, n, i, o, a, u, s) {
    switch (u) {
      case em:
        return iD(e, t, r, i, a);
      case Xa:
        return pD(e, t, r, i, o, a);
      case Ha:
        return gD(e, i, a);
      case tm: {
        let { actionTypeId: d } = i;
        if (Mt(d)) return Da(d)(s, t, i);
      }
    }
  }
  function iD(e, t, r, n, i) {
    let o = nD
        .map((u) => {
          let s = Ka[u],
            {
              xValue: d = s.xValue,
              yValue: m = s.yValue,
              zValue: h = s.zValue,
              xUnit: v = "",
              yUnit: E = "",
              zUnit: O = "",
            } = t[u] || {};
          switch (u) {
            case sr:
              return `${TM}(${d}${v}, ${m}${E}, ${h}${O})`;
            case ur:
              return `${IM}(${d}${v}, ${m}${E}, ${h}${O})`;
            case cr:
              return `${wM}(${d}${v}) ${OM}(${m}${E}) ${AM}(${h}${O})`;
            case Qr:
              return `${xM}(${d}${v}, ${m}${E})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    kt(e, At, i), a(e, At, o), sD(n, r) && a(e, Zn, SM);
  }
  function oD(e, t, r, n) {
    let i = (0, si.default)(t, (a, u, s) => `${a} ${s}(${u}${rD(s, r)})`, ""),
      { setStyle: o } = n;
    kt(e, Kr, n), o(e, Kr, i);
  }
  function aD(e, t, r, n) {
    let i = (0, si.default)(
        t,
        (a, u, s) => (a.push(`"${s}" ${u}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    kt(e, Yr, n), o(e, Yr, i);
  }
  function sD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === sr && n !== void 0) ||
      (e === ur && n !== void 0) ||
      (e === cr && (t !== void 0 || r !== void 0))
    );
  }
  function fD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function dD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = ja[t],
      o = n(e, i),
      a = cD.test(o) ? o : r[i],
      u = fD(lD, a).split($r);
    return {
      rValue: (0, ht.default)(parseInt(u[0], 10), 255),
      gValue: (0, ht.default)(parseInt(u[1], 10), 255),
      bValue: (0, ht.default)(parseInt(u[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(u[3]), 1),
    };
  }
  function pD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case lr: {
        let { widthUnit: u = "", heightUnit: s = "" } = n.config,
          { widthValue: d, heightValue: m } = r;
        d !== void 0 && (u === xt && (u = "px"), kt(e, ct, o), a(e, ct, d + u)),
          m !== void 0 &&
            (s === xt && (s = "px"), kt(e, lt, o), a(e, lt, m + s));
        break;
      }
      case Zr: {
        oD(e, r, n.config, o);
        break;
      }
      case Jr: {
        aD(e, r, n.config, o);
        break;
      }
      case fr:
      case dr:
      case pr: {
        let u = ja[n.actionTypeId],
          s = Math.round(r.rValue),
          d = Math.round(r.gValue),
          m = Math.round(r.bValue),
          h = r.aValue;
        kt(e, u, o),
          a(e, u, h >= 1 ? `rgb(${s},${d},${m})` : `rgba(${s},${d},${m},${h})`);
        break;
      }
      default: {
        let { unit: u = "" } = n.config;
        kt(e, i, o), a(e, i, r.value + u);
        break;
      }
    }
  }
  function gD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ci: {
        let { value: i } = t.config;
        i === CM && Je ? n(e, ai, wa) : n(e, ai, i);
        return;
      }
    }
  }
  function kt(e, t, r) {
    if (!Je) return;
    let n = im[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ar);
    if (!a) {
      o(e, ar, n);
      return;
    }
    let u = a.split($r).map(nm);
    u.indexOf(n) === -1 && o(e, ar, u.concat(n).join($r));
  }
  function am(e, t, r) {
    if (!Je) return;
    let n = im[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ar);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ar,
        a
          .split($r)
          .map(nm)
          .filter((u) => u !== n)
          .join($r)
      );
  }
  function vD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: u } = a.action,
        { actionListId: s } = u,
        d = i[s];
      d && $h({ actionList: d, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        $h({ actionList: i[o], elementApi: t });
      });
  }
  function $h({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Qh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((u) => {
            Qh({ actionGroup: u, event: t, elementApi: r });
          });
        });
  }
  function Qh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        u;
      Mt(o)
        ? (u = (s) => ka(o)(s, i))
        : (u = sm({ effect: mD, actionTypeId: o, elementApi: r })),
        za({ config: a, event: t, elementApi: r }).forEach(u);
    });
  }
  function hD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === lr) {
      let { config: a } = t;
      a.widthUnit === xt && n(e, ct, ""), a.heightUnit === xt && n(e, lt, "");
    }
    i(e, ar) && sm({ effect: am, actionTypeId: o, elementApi: r })(e);
  }
  function mD(e, t, r) {
    let { setStyle: n } = r;
    am(e, t, r), n(e, t, ""), t === At && n(e, Zn, "");
  }
  function um(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function ED(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      u = 0;
    return (
      r.forEach((s, d) => {
        if (n && d === 0) return;
        let { actionItems: m } = s,
          h = m[um(m)],
          { config: v, actionTypeId: E } = h;
        i.id === h.id && (u = a + o);
        let O = om(E) === Ha ? 0 : v.duration;
        a += v.delay + O;
      }),
      a > 0 ? zr(u / a) : 0
    );
  }
  function yD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (u) => (
        o.push((0, ui.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
        u.id === t
      );
    return (
      n && n.some(({ actionItems: u }) => u.some(a)),
      i &&
        i.some((u) => {
          let { continuousActionGroups: s } = u;
          return s.some(({ actionItems: d }) => d.some(a));
        }),
      (0, ui.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function _D(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function bD(e, t) {
    return e + qM + t;
  }
  function TD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function ID(e, t) {
    return Wa(e && e.sort(), t && t.sort());
  }
  function wD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ba + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ba + r + Ba + n;
  }
  var ht,
    si,
    ii,
    ui,
    Zh,
    _M,
    bM,
    TM,
    IM,
    wM,
    OM,
    AM,
    xM,
    SM,
    CM,
    oi,
    Kr,
    Yr,
    ct,
    lt,
    Jh,
    RM,
    LM,
    jh,
    NM,
    zh,
    PM,
    ai,
    ar,
    xt,
    $r,
    qM,
    Ba,
    em,
    Ha,
    Xa,
    tm,
    sr,
    ur,
    cr,
    Qr,
    rm,
    Zr,
    Jr,
    lr,
    fr,
    dr,
    pr,
    ci,
    FM,
    nm,
    ja,
    im,
    ni,
    DM,
    GM,
    WM,
    Yh,
    XM,
    jM,
    KM,
    YM,
    $M,
    Ka,
    eD,
    tD,
    rD,
    nD,
    uD,
    cD,
    lD,
    sm,
    lm = me(() => {
      "use strict";
      (ht = le(Oh())), (si = le(Gh())), (ii = le(Bh())), (ui = le($t()));
      Ue();
      Xh();
      xa();
      Zh = le(Ra());
      Ga();
      Jn();
      ({
        BACKGROUND: _M,
        TRANSFORM: bM,
        TRANSLATE_3D: TM,
        SCALE_3D: IM,
        ROTATE_X: wM,
        ROTATE_Y: OM,
        ROTATE_Z: AM,
        SKEW: xM,
        PRESERVE_3D: SM,
        FLEX: CM,
        OPACITY: oi,
        FILTER: Kr,
        FONT_VARIATION_SETTINGS: Yr,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: Jh,
        BORDER_COLOR: RM,
        COLOR: LM,
        CHILDREN: jh,
        IMMEDIATE_CHILDREN: NM,
        SIBLINGS: zh,
        PARENT: PM,
        DISPLAY: ai,
        WILL_CHANGE: ar,
        AUTO: xt,
        COMMA_DELIMITER: $r,
        COLON_DELIMITER: qM,
        BAR_DELIMITER: Ba,
        RENDER_TRANSFORM: em,
        RENDER_GENERAL: Ha,
        RENDER_STYLE: Xa,
        RENDER_PLUGIN: tm,
      } = Ce),
        ({
          TRANSFORM_MOVE: sr,
          TRANSFORM_SCALE: ur,
          TRANSFORM_ROTATE: cr,
          TRANSFORM_SKEW: Qr,
          STYLE_OPACITY: rm,
          STYLE_FILTER: Zr,
          STYLE_FONT_VARIATION: Jr,
          STYLE_SIZE: lr,
          STYLE_BACKGROUND_COLOR: fr,
          STYLE_BORDER: dr,
          STYLE_TEXT_COLOR: pr,
          GENERAL_DISPLAY: ci,
          OBJECT_VALUE: FM,
        } = Ge),
        (nm = (e) => e.trim()),
        (ja = Object.freeze({ [fr]: Jh, [dr]: RM, [pr]: LM })),
        (im = Object.freeze({
          [At]: bM,
          [Jh]: _M,
          [oi]: oi,
          [Kr]: Kr,
          [ct]: ct,
          [lt]: lt,
          [Yr]: Yr,
        })),
        (ni = new Map());
      DM = 1;
      GM = 1;
      WM = (e, t) => e === t;
      (Yh = /px/),
        (XM = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = eD[n.type]), r),
            e || {}
          )),
        (jM = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = tD[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (KM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (YM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        ($M = (e, t, r) => {
          if (Mt(e)) return qa(e)(r, t);
          switch (e) {
            case Zr: {
              let n = (0, ii.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Jr: {
              let n = (0, ii.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ka = {
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ur]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [cr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Qr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (eD = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (tD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (rD = (e, t) => {
          let r = (0, ii.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (nD = Object.keys(Ka));
      (uD = "\\(([^)]+)\\)"), (cD = /^rgb/), (lD = RegExp(`rgba?${uD}`));
      sm =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case sr:
            case ur:
            case cr:
            case Qr:
              e(n, At, r);
              break;
            case Zr:
              e(n, Kr, r);
              break;
            case Jr:
              e(n, Yr, r);
              break;
            case rm:
              e(n, oi, r);
              break;
            case lr:
              e(n, ct, r), e(n, lt, r);
              break;
            case fr:
            case dr:
            case pr:
              e(n, ja[t], r);
              break;
            case ci:
              e(n, ai, r);
              break;
          }
        };
    });
  var Gt = c((Pe) => {
    "use strict";
    var gr = pn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var OD = gr((Jn(), nt(oh)));
    Pe.IX2BrowserSupport = OD;
    var AD = gr((Aa(), nt(jr)));
    Pe.IX2Easings = AD;
    var xD = gr((xa(), nt(dh)));
    Pe.IX2EasingUtils = xD;
    var SD = gr((hh(), nt(vh)));
    Pe.IX2ElementsReducer = SD;
    var CD = gr((Ga(), nt(Ih)));
    Pe.IX2VanillaPlugins = CD;
    var RD = gr((lm(), nt(cm)));
    Pe.IX2VanillaUtils = RD;
  });
  var fi,
    mt,
    LD,
    ND,
    PD,
    qD,
    FD,
    MD,
    li,
    fm,
    DD,
    kD,
    Ya,
    GD,
    UD,
    VD,
    WD,
    dm,
    pm = me(() => {
      "use strict";
      Ue();
      (fi = le(Gt())),
        (mt = le($t())),
        ({
          IX2_RAW_DATA_IMPORTED: LD,
          IX2_SESSION_STOPPED: ND,
          IX2_INSTANCE_ADDED: PD,
          IX2_INSTANCE_STARTED: qD,
          IX2_INSTANCE_REMOVED: FD,
          IX2_ANIMATION_FRAME_CHANGED: MD,
        } = Ie),
        ({
          optimizeFloat: li,
          applyEasing: fm,
          createBezierEasing: DD,
        } = fi.IX2EasingUtils),
        ({ RENDER_GENERAL: kD } = Ce),
        ({
          getItemConfigByKey: Ya,
          getRenderType: GD,
          getStyleProp: UD,
        } = fi.IX2VanillaUtils),
        (VD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: u,
              actionTypeId: s,
              customEasingFn: d,
              skipMotion: m,
              skipToValue: h,
            } = e,
            { parameters: v } = t.payload,
            E = Math.max(1 - a, 0.01),
            O = v[n];
          O == null && ((E = 1), (O = u));
          let I = Math.max(O, 0) || 0,
            C = li(I - r),
            T = m ? h : li(r + C * E),
            N = T * 100;
          if (T === r && e.current) return e;
          let R, q, M, F;
          for (let K = 0, { length: $ } = i; K < $; K++) {
            let { keyframe: J, actionItems: ee } = i[K];
            if ((K === 0 && (R = ee[0]), N >= J)) {
              R = ee[0];
              let G = i[K + 1],
                x = G && N !== J;
              (q = x ? G.actionItems[0] : null),
                x && ((M = J / 100), (F = (G.keyframe - J) / 100));
            }
          }
          let H = {};
          if (R && !q)
            for (let K = 0, { length: $ } = o; K < $; K++) {
              let J = o[K];
              H[J] = Ya(s, J, R.config);
            }
          else if (R && q && M !== void 0 && F !== void 0) {
            let K = (T - M) / F,
              $ = R.config.easing,
              J = fm($, K, d);
            for (let ee = 0, { length: G } = o; ee < G; ee++) {
              let x = o[ee],
                D = Ya(s, x, R.config),
                te = (Ya(s, x, q.config) - D) * J + D;
              H[x] = te;
            }
          }
          return (0, mt.merge)(e, { position: T, current: H });
        }),
        (WD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: u,
              actionItem: s,
              destination: d,
              destinationKeys: m,
              pluginDuration: h,
              instanceDelay: v,
              customEasingFn: E,
              skipMotion: O,
            } = e,
            I = s.config.easing,
            { duration: C, delay: T } = s.config;
          h != null && (C = h),
            (T = v ?? T),
            a === kD ? (C = 0) : (o || O) && (C = T = 0);
          let { now: N } = t.payload;
          if (r && n) {
            let R = N - (i + T);
            if (u) {
              let K = N - i,
                $ = C + T,
                J = li(Math.min(Math.max(0, K / $), 1));
              e = (0, mt.set)(e, "verboseTimeElapsed", $ * J);
            }
            if (R < 0) return e;
            let q = li(Math.min(Math.max(0, R / C), 1)),
              M = fm(I, q, E),
              F = {},
              H = null;
            return (
              m.length &&
                (H = m.reduce((K, $) => {
                  let J = d[$],
                    ee = parseFloat(n[$]) || 0,
                    x = (parseFloat(J) - ee) * M + ee;
                  return (K[$] = x), K;
                }, {})),
              (F.current = H),
              (F.position = q),
              q === 1 && ((F.active = !1), (F.complete = !0)),
              (0, mt.merge)(e, F)
            );
          }
          return e;
        }),
        (dm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case LD:
              return t.payload.ixInstances || Object.freeze({});
            case ND:
              return Object.freeze({});
            case PD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: u,
                  actionListId: s,
                  groupIndex: d,
                  isCarrier: m,
                  origin: h,
                  destination: v,
                  immediate: E,
                  verbose: O,
                  continuous: I,
                  parameterId: C,
                  actionGroups: T,
                  smoothing: N,
                  restingValue: R,
                  pluginInstance: q,
                  pluginDuration: M,
                  instanceDelay: F,
                  skipMotion: H,
                  skipToValue: K,
                } = t.payload,
                { actionTypeId: $ } = i,
                J = GD($),
                ee = UD(J, $),
                G = Object.keys(v).filter(
                  (D) => v[D] != null && typeof v[D] != "string"
                ),
                { easing: x } = i.config;
              return (0, mt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: h,
                destination: v,
                destinationKeys: G,
                immediate: E,
                verbose: O,
                current: null,
                actionItem: i,
                actionTypeId: $,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: d,
                renderType: J,
                isCarrier: m,
                styleProp: ee,
                continuous: I,
                parameterId: C,
                actionGroups: T,
                smoothing: N,
                restingValue: R,
                pluginInstance: q,
                pluginDuration: M,
                instanceDelay: F,
                skipMotion: H,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(x) && x.length === 4 ? DD(x) : void 0,
              });
            }
            case qD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, mt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case FD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let u = i[a];
                u !== r && (n[u] = e[u]);
              }
              return n;
            }
            case MD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  u = e[a],
                  s = u.continuous ? VD : WD;
                r = (0, mt.set)(r, a, s(u, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var BD,
    HD,
    XD,
    gm,
    vm = me(() => {
      "use strict";
      Ue();
      ({
        IX2_RAW_DATA_IMPORTED: BD,
        IX2_SESSION_STOPPED: HD,
        IX2_PARAMETER_CHANGED: XD,
      } = Ie),
        (gm = (e = {}, t) => {
          switch (t.type) {
            case BD:
              return t.payload.ixParameters || {};
            case HD:
              return {};
            case XD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var Em = {};
  De(Em, { default: () => zD });
  var hm,
    mm,
    jD,
    zD,
    ym = me(() => {
      "use strict";
      hm = le(Xo());
      Rf();
      Qf();
      ed();
      mm = le(Gt());
      pm();
      vm();
      ({ ixElements: jD } = mm.IX2ElementsReducer),
        (zD = (0, hm.combineReducers)({
          ixData: Cf,
          ixRequest: $f,
          ixSession: Jf,
          ixElements: jD,
          ixInstances: dm,
          ixParameters: gm,
        }));
    });
  var bm = c((zX, _m) => {
    var KD = It(),
      YD = we(),
      $D = gt(),
      QD = "[object String]";
    function ZD(e) {
      return typeof e == "string" || (!YD(e) && $D(e) && KD(e) == QD);
    }
    _m.exports = ZD;
  });
  var Im = c((KX, Tm) => {
    var JD = ya(),
      e1 = JD("length");
    Tm.exports = e1;
  });
  var Om = c((YX, wm) => {
    var t1 = "\\ud800-\\udfff",
      r1 = "\\u0300-\\u036f",
      n1 = "\\ufe20-\\ufe2f",
      i1 = "\\u20d0-\\u20ff",
      o1 = r1 + n1 + i1,
      a1 = "\\ufe0e\\ufe0f",
      s1 = "\\u200d",
      u1 = RegExp("[" + s1 + t1 + o1 + a1 + "]");
    function c1(e) {
      return u1.test(e);
    }
    wm.exports = c1;
  });
  var qm = c(($X, Pm) => {
    var xm = "\\ud800-\\udfff",
      l1 = "\\u0300-\\u036f",
      f1 = "\\ufe20-\\ufe2f",
      d1 = "\\u20d0-\\u20ff",
      p1 = l1 + f1 + d1,
      g1 = "\\ufe0e\\ufe0f",
      v1 = "[" + xm + "]",
      $a = "[" + p1 + "]",
      Qa = "\\ud83c[\\udffb-\\udfff]",
      h1 = "(?:" + $a + "|" + Qa + ")",
      Sm = "[^" + xm + "]",
      Cm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Rm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      m1 = "\\u200d",
      Lm = h1 + "?",
      Nm = "[" + g1 + "]?",
      E1 = "(?:" + m1 + "(?:" + [Sm, Cm, Rm].join("|") + ")" + Nm + Lm + ")*",
      y1 = Nm + Lm + E1,
      _1 = "(?:" + [Sm + $a + "?", $a, Cm, Rm, v1].join("|") + ")",
      Am = RegExp(Qa + "(?=" + Qa + ")|" + _1 + y1, "g");
    function b1(e) {
      for (var t = (Am.lastIndex = 0); Am.test(e); ) ++t;
      return t;
    }
    Pm.exports = b1;
  });
  var Mm = c((QX, Fm) => {
    var T1 = Im(),
      I1 = Om(),
      w1 = qm();
    function O1(e) {
      return I1(e) ? w1(e) : T1(e);
    }
    Fm.exports = O1;
  });
  var km = c((ZX, Dm) => {
    var A1 = Bn(),
      x1 = Hn(),
      S1 = qt(),
      C1 = bm(),
      R1 = Mm(),
      L1 = "[object Map]",
      N1 = "[object Set]";
    function P1(e) {
      if (e == null) return 0;
      if (S1(e)) return C1(e) ? R1(e) : e.length;
      var t = x1(e);
      return t == L1 || t == N1 ? e.size : A1(e).length;
    }
    Dm.exports = P1;
  });
  var Um = c((JX, Gm) => {
    var q1 = "Expected a function";
    function F1(e) {
      if (typeof e != "function") throw new TypeError(q1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Gm.exports = F1;
  });
  var Za = c((ej, Vm) => {
    var M1 = wt(),
      D1 = (function () {
        try {
          var e = M1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Vm.exports = D1;
  });
  var Ja = c((tj, Bm) => {
    var Wm = Za();
    function k1(e, t, r) {
      t == "__proto__" && Wm
        ? Wm(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Bm.exports = k1;
  });
  var Xm = c((rj, Hm) => {
    var G1 = Ja(),
      U1 = Pn(),
      V1 = Object.prototype,
      W1 = V1.hasOwnProperty;
    function B1(e, t, r) {
      var n = e[t];
      (!(W1.call(e, t) && U1(n, r)) || (r === void 0 && !(t in e))) &&
        G1(e, t, r);
    }
    Hm.exports = B1;
  });
  var Km = c((nj, zm) => {
    var H1 = Xm(),
      X1 = Br(),
      j1 = Gn(),
      jm = ut(),
      z1 = ir();
    function K1(e, t, r, n) {
      if (!jm(e)) return e;
      t = X1(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
        var s = z1(t[i]),
          d = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (i != a) {
          var m = u[s];
          (d = n ? n(m, s, u) : void 0),
            d === void 0 && (d = jm(m) ? m : j1(t[i + 1]) ? [] : {});
        }
        H1(u, s, d), (u = u[s]);
      }
      return e;
    }
    zm.exports = K1;
  });
  var $m = c((ij, Ym) => {
    var Y1 = zn(),
      $1 = Km(),
      Q1 = Br();
    function Z1(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          u = Y1(e, a);
        r(u, a) && $1(o, Q1(a, e), u);
      }
      return o;
    }
    Ym.exports = Z1;
  });
  var Zm = c((oj, Qm) => {
    var J1 = Dn(),
      e2 = No(),
      t2 = ia(),
      r2 = na(),
      n2 = Object.getOwnPropertySymbols,
      i2 = n2
        ? function (e) {
            for (var t = []; e; ) J1(t, t2(e)), (e = e2(e));
            return t;
          }
        : r2;
    Qm.exports = i2;
  });
  var eE = c((aj, Jm) => {
    function o2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Jm.exports = o2;
  });
  var rE = c((sj, tE) => {
    var a2 = ut(),
      s2 = Wn(),
      u2 = eE(),
      c2 = Object.prototype,
      l2 = c2.hasOwnProperty;
    function f2(e) {
      if (!a2(e)) return u2(e);
      var t = s2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !l2.call(e, n))) || r.push(n);
      return r;
    }
    tE.exports = f2;
  });
  var iE = c((uj, nE) => {
    var d2 = aa(),
      p2 = rE(),
      g2 = qt();
    function v2(e) {
      return g2(e) ? d2(e, !0) : p2(e);
    }
    nE.exports = v2;
  });
  var aE = c((cj, oE) => {
    var h2 = ra(),
      m2 = Zm(),
      E2 = iE();
    function y2(e) {
      return h2(e, E2, m2);
    }
    oE.exports = y2;
  });
  var uE = c((lj, sE) => {
    var _2 = Ea(),
      b2 = Ot(),
      T2 = $m(),
      I2 = aE();
    function w2(e, t) {
      if (e == null) return {};
      var r = _2(I2(e), function (n) {
        return [n];
      });
      return (
        (t = b2(t)),
        T2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    sE.exports = w2;
  });
  var lE = c((fj, cE) => {
    var O2 = Ot(),
      A2 = Um(),
      x2 = uE();
    function S2(e, t) {
      return x2(e, A2(O2(t)));
    }
    cE.exports = S2;
  });
  var dE = c((dj, fE) => {
    var C2 = Bn(),
      R2 = Hn(),
      L2 = Dr(),
      N2 = we(),
      P2 = qt(),
      q2 = kn(),
      F2 = Wn(),
      M2 = Vn(),
      D2 = "[object Map]",
      k2 = "[object Set]",
      G2 = Object.prototype,
      U2 = G2.hasOwnProperty;
    function V2(e) {
      if (e == null) return !0;
      if (
        P2(e) &&
        (N2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          q2(e) ||
          M2(e) ||
          L2(e))
      )
        return !e.length;
      var t = R2(e);
      if (t == D2 || t == k2) return !e.size;
      if (F2(e)) return !C2(e).length;
      for (var r in e) if (U2.call(e, r)) return !1;
      return !0;
    }
    fE.exports = V2;
  });
  var gE = c((pj, pE) => {
    var W2 = Ja(),
      B2 = Ua(),
      H2 = Ot();
    function X2(e, t) {
      var r = {};
      return (
        (t = H2(t, 3)),
        B2(e, function (n, i, o) {
          W2(r, i, t(n, i, o));
        }),
        r
      );
    }
    pE.exports = X2;
  });
  var hE = c((gj, vE) => {
    function j2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    vE.exports = j2;
  });
  var EE = c((vj, mE) => {
    var z2 = Yn();
    function K2(e) {
      return typeof e == "function" ? e : z2;
    }
    mE.exports = K2;
  });
  var _E = c((hj, yE) => {
    var Y2 = hE(),
      $2 = Va(),
      Q2 = EE(),
      Z2 = we();
    function J2(e, t) {
      var r = Z2(e) ? Y2 : $2;
      return r(e, Q2(t));
    }
    yE.exports = J2;
  });
  var TE = c((mj, bE) => {
    var ek = Qe(),
      tk = function () {
        return ek.Date.now();
      };
    bE.exports = tk;
  });
  var OE = c((Ej, wE) => {
    var rk = ut(),
      es = TE(),
      IE = $n(),
      nk = "Expected a function",
      ik = Math.max,
      ok = Math.min;
    function ak(e, t, r) {
      var n,
        i,
        o,
        a,
        u,
        s,
        d = 0,
        m = !1,
        h = !1,
        v = !0;
      if (typeof e != "function") throw new TypeError(nk);
      (t = IE(t) || 0),
        rk(r) &&
          ((m = !!r.leading),
          (h = "maxWait" in r),
          (o = h ? ik(IE(r.maxWait) || 0, t) : o),
          (v = "trailing" in r ? !!r.trailing : v));
      function E(F) {
        var H = n,
          K = i;
        return (n = i = void 0), (d = F), (a = e.apply(K, H)), a;
      }
      function O(F) {
        return (d = F), (u = setTimeout(T, t)), m ? E(F) : a;
      }
      function I(F) {
        var H = F - s,
          K = F - d,
          $ = t - H;
        return h ? ok($, o - K) : $;
      }
      function C(F) {
        var H = F - s,
          K = F - d;
        return s === void 0 || H >= t || H < 0 || (h && K >= o);
      }
      function T() {
        var F = es();
        if (C(F)) return N(F);
        u = setTimeout(T, I(F));
      }
      function N(F) {
        return (u = void 0), v && n ? E(F) : ((n = i = void 0), a);
      }
      function R() {
        u !== void 0 && clearTimeout(u), (d = 0), (n = s = i = u = void 0);
      }
      function q() {
        return u === void 0 ? a : N(es());
      }
      function M() {
        var F = es(),
          H = C(F);
        if (((n = arguments), (i = this), (s = F), H)) {
          if (u === void 0) return O(s);
          if (h) return clearTimeout(u), (u = setTimeout(T, t)), E(s);
        }
        return u === void 0 && (u = setTimeout(T, t)), a;
      }
      return (M.cancel = R), (M.flush = q), M;
    }
    wE.exports = ak;
  });
  var xE = c((yj, AE) => {
    var sk = OE(),
      uk = ut(),
      ck = "Expected a function";
    function lk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(ck);
      return (
        uk(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        sk(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    AE.exports = lk;
  });
  var CE = {};
  De(CE, {
    actionListPlaybackChanged: () => hr,
    animationFrameChanged: () => pi,
    clearRequested: () => Fk,
    elementStateChanged: () => us,
    eventListenerAdded: () => di,
    eventStateChanged: () => os,
    instanceAdded: () => as,
    instanceRemoved: () => ss,
    instanceStarted: () => gi,
    mediaQueriesDefined: () => ls,
    parameterChanged: () => vr,
    playbackRequested: () => Pk,
    previewRequested: () => Nk,
    rawDataImported: () => ts,
    sessionInitialized: () => rs,
    sessionStarted: () => ns,
    sessionStopped: () => is,
    stopRequested: () => qk,
    testFrameRendered: () => Mk,
    viewportWidthChanged: () => cs,
  });
  var SE,
    fk,
    dk,
    pk,
    gk,
    vk,
    hk,
    mk,
    Ek,
    yk,
    _k,
    bk,
    Tk,
    Ik,
    wk,
    Ok,
    Ak,
    xk,
    Sk,
    Ck,
    Rk,
    Lk,
    ts,
    rs,
    ns,
    is,
    Nk,
    Pk,
    qk,
    Fk,
    di,
    Mk,
    os,
    pi,
    vr,
    as,
    gi,
    ss,
    us,
    hr,
    cs,
    ls,
    vi = me(() => {
      "use strict";
      Ue();
      (SE = le(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: fk,
          IX2_SESSION_INITIALIZED: dk,
          IX2_SESSION_STARTED: pk,
          IX2_SESSION_STOPPED: gk,
          IX2_PREVIEW_REQUESTED: vk,
          IX2_PLAYBACK_REQUESTED: hk,
          IX2_STOP_REQUESTED: mk,
          IX2_CLEAR_REQUESTED: Ek,
          IX2_EVENT_LISTENER_ADDED: yk,
          IX2_TEST_FRAME_RENDERED: _k,
          IX2_EVENT_STATE_CHANGED: bk,
          IX2_ANIMATION_FRAME_CHANGED: Tk,
          IX2_PARAMETER_CHANGED: Ik,
          IX2_INSTANCE_ADDED: wk,
          IX2_INSTANCE_STARTED: Ok,
          IX2_INSTANCE_REMOVED: Ak,
          IX2_ELEMENT_STATE_CHANGED: xk,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Sk,
          IX2_VIEWPORT_WIDTH_CHANGED: Ck,
          IX2_MEDIA_QUERIES_DEFINED: Rk,
        } = Ie),
        ({ reifyState: Lk } = SE.IX2VanillaUtils),
        (ts = (e) => ({ type: fk, payload: { ...Lk(e) } })),
        (rs = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: dk,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (ns = () => ({ type: pk })),
        (is = () => ({ type: gk })),
        (Nk = ({ rawData: e, defer: t }) => ({
          type: vk,
          payload: { defer: t, rawData: e },
        })),
        (Pk = ({
          actionTypeId: e = Ge.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: u,
          rawData: s,
        }) => ({
          type: hk,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: u,
            rawData: s,
          },
        })),
        (qk = (e) => ({ type: mk, payload: { actionListId: e } })),
        (Fk = () => ({ type: Ek })),
        (di = (e, t) => ({
          type: yk,
          payload: { target: e, listenerParams: t },
        })),
        (Mk = (e = 1) => ({ type: _k, payload: { step: e } })),
        (os = (e, t) => ({ type: bk, payload: { stateKey: e, newState: t } })),
        (pi = (e, t) => ({ type: Tk, payload: { now: e, parameters: t } })),
        (vr = (e, t) => ({ type: Ik, payload: { key: e, value: t } })),
        (as = (e) => ({ type: wk, payload: { ...e } })),
        (gi = (e, t) => ({ type: Ok, payload: { instanceId: e, time: t } })),
        (ss = (e) => ({ type: Ak, payload: { instanceId: e } })),
        (us = (e, t, r, n) => ({
          type: xk,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (hr = ({ actionListId: e, isPlaying: t }) => ({
          type: Sk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (cs = ({ width: e, mediaQueries: t }) => ({
          type: Ck,
          payload: { width: e, mediaQueries: t },
        })),
        (ls = () => ({ type: Rk }));
    });
  var qe = {};
  De(qe, {
    elementContains: () => ps,
    getChildElements: () => jk,
    getClosestElement: () => en,
    getProperty: () => Vk,
    getQuerySelector: () => ds,
    getRefType: () => gs,
    getSiblingElements: () => zk,
    getStyle: () => Uk,
    getValidDocument: () => Bk,
    isSiblingNode: () => Xk,
    matchSelector: () => Wk,
    queryDocument: () => Hk,
    setStyle: () => Gk,
  });
  function Gk(e, t, r) {
    e.style[t] = r;
  }
  function Uk(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function Vk(e, t) {
    return e[t];
  }
  function Wk(e) {
    return (t) => t[fs](e);
  }
  function ds({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(RE) !== -1) {
        let n = e.split(RE),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(NE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function Bk(e) {
    return e == null || e === document.documentElement.getAttribute(NE)
      ? document
      : null;
  }
  function Hk(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ps(e, t) {
    return e.contains(t);
  }
  function Xk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function jk(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function zk(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function gs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Dk
        : kk
      : null;
  }
  var LE,
    fs,
    RE,
    Dk,
    kk,
    NE,
    en,
    PE = me(() => {
      "use strict";
      LE = le(Gt());
      Ue();
      ({ ELEMENT_MATCHES: fs } = LE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: RE,
          HTML_ELEMENT: Dk,
          PLAIN_OBJECT: kk,
          WF_PAGE: NE,
        } = Ce);
      en = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[fs] && r[fs](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var vs = c((Tj, FE) => {
    var Kk = ut(),
      qE = Object.create,
      Yk = (function () {
        function e() {}
        return function (t) {
          if (!Kk(t)) return {};
          if (qE) return qE(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    FE.exports = Yk;
  });
  var hi = c((Ij, ME) => {
    function $k() {}
    ME.exports = $k;
  });
  var Ei = c((wj, DE) => {
    var Qk = vs(),
      Zk = hi();
    function mi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    mi.prototype = Qk(Zk.prototype);
    mi.prototype.constructor = mi;
    DE.exports = mi;
  });
  var VE = c((Oj, UE) => {
    var kE = zt(),
      Jk = Dr(),
      eG = we(),
      GE = kE ? kE.isConcatSpreadable : void 0;
    function tG(e) {
      return eG(e) || Jk(e) || !!(GE && e && e[GE]);
    }
    UE.exports = tG;
  });
  var HE = c((Aj, BE) => {
    var rG = Dn(),
      nG = VE();
    function WE(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = nG), i || (i = []); ++o < a; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? WE(u, t - 1, r, n, i)
            : rG(i, u)
          : n || (i[i.length] = u);
      }
      return i;
    }
    BE.exports = WE;
  });
  var jE = c((xj, XE) => {
    var iG = HE();
    function oG(e) {
      var t = e == null ? 0 : e.length;
      return t ? iG(e, 1) : [];
    }
    XE.exports = oG;
  });
  var KE = c((Sj, zE) => {
    function aG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    zE.exports = aG;
  });
  var QE = c((Cj, $E) => {
    var sG = KE(),
      YE = Math.max;
    function uG(e, t, r) {
      return (
        (t = YE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = YE(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(a)), sG(e, this, u);
        }
      );
    }
    $E.exports = uG;
  });
  var JE = c((Rj, ZE) => {
    function cG(e) {
      return function () {
        return e;
      };
    }
    ZE.exports = cG;
  });
  var ry = c((Lj, ty) => {
    var lG = JE(),
      ey = Za(),
      fG = Yn(),
      dG = ey
        ? function (e, t) {
            return ey(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: lG(t),
              writable: !0,
            });
          }
        : fG;
    ty.exports = dG;
  });
  var iy = c((Nj, ny) => {
    var pG = 800,
      gG = 16,
      vG = Date.now;
    function hG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = vG(),
          i = gG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= pG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    ny.exports = hG;
  });
  var ay = c((Pj, oy) => {
    var mG = ry(),
      EG = iy(),
      yG = EG(mG);
    oy.exports = yG;
  });
  var uy = c((qj, sy) => {
    var _G = jE(),
      bG = QE(),
      TG = ay();
    function IG(e) {
      return TG(bG(e, void 0, _G), e + "");
    }
    sy.exports = IG;
  });
  var fy = c((Fj, ly) => {
    var cy = sa(),
      wG = cy && new cy();
    ly.exports = wG;
  });
  var py = c((Mj, dy) => {
    function OG() {}
    dy.exports = OG;
  });
  var hs = c((Dj, vy) => {
    var gy = fy(),
      AG = py(),
      xG = gy
        ? function (e) {
            return gy.get(e);
          }
        : AG;
    vy.exports = xG;
  });
  var my = c((kj, hy) => {
    var SG = {};
    hy.exports = SG;
  });
  var ms = c((Gj, yy) => {
    var Ey = my(),
      CG = Object.prototype,
      RG = CG.hasOwnProperty;
    function LG(e) {
      for (
        var t = e.name + "", r = Ey[t], n = RG.call(Ey, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    yy.exports = LG;
  });
  var _i = c((Uj, _y) => {
    var NG = vs(),
      PG = hi(),
      qG = 4294967295;
    function yi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = qG),
        (this.__views__ = []);
    }
    yi.prototype = NG(PG.prototype);
    yi.prototype.constructor = yi;
    _y.exports = yi;
  });
  var Ty = c((Vj, by) => {
    function FG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    by.exports = FG;
  });
  var wy = c((Wj, Iy) => {
    var MG = _i(),
      DG = Ei(),
      kG = Ty();
    function GG(e) {
      if (e instanceof MG) return e.clone();
      var t = new DG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = kG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Iy.exports = GG;
  });
  var xy = c((Bj, Ay) => {
    var UG = _i(),
      Oy = Ei(),
      VG = hi(),
      WG = we(),
      BG = gt(),
      HG = wy(),
      XG = Object.prototype,
      jG = XG.hasOwnProperty;
    function bi(e) {
      if (BG(e) && !WG(e) && !(e instanceof UG)) {
        if (e instanceof Oy) return e;
        if (jG.call(e, "__wrapped__")) return HG(e);
      }
      return new Oy(e);
    }
    bi.prototype = VG.prototype;
    bi.prototype.constructor = bi;
    Ay.exports = bi;
  });
  var Cy = c((Hj, Sy) => {
    var zG = _i(),
      KG = hs(),
      YG = ms(),
      $G = xy();
    function QG(e) {
      var t = YG(e),
        r = $G[t];
      if (typeof r != "function" || !(t in zG.prototype)) return !1;
      if (e === r) return !0;
      var n = KG(r);
      return !!n && e === n[0];
    }
    Sy.exports = QG;
  });
  var Py = c((Xj, Ny) => {
    var Ry = Ei(),
      ZG = uy(),
      JG = hs(),
      Es = ms(),
      eU = we(),
      Ly = Cy(),
      tU = "Expected a function",
      rU = 8,
      nU = 32,
      iU = 128,
      oU = 256;
    function aU(e) {
      return ZG(function (t) {
        var r = t.length,
          n = r,
          i = Ry.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(tU);
          if (i && !a && Es(o) == "wrapper") var a = new Ry([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var u = Es(o),
            s = u == "wrapper" ? JG(o) : void 0;
          s &&
          Ly(s[0]) &&
          s[1] == (iU | rU | nU | oU) &&
          !s[4].length &&
          s[9] == 1
            ? (a = a[Es(s[0])].apply(a, s[3]))
            : (a = o.length == 1 && Ly(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var d = arguments,
            m = d[0];
          if (a && d.length == 1 && eU(m)) return a.plant(m).value();
          for (var h = 0, v = r ? t[h].apply(this, d) : m; ++h < r; )
            v = t[h].call(this, v);
          return v;
        };
      });
    }
    Ny.exports = aU;
  });
  var Fy = c((jj, qy) => {
    var sU = Py(),
      uU = sU();
    qy.exports = uU;
  });
  var Dy = c((zj, My) => {
    function cU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    My.exports = cU;
  });
  var Gy = c((Kj, ky) => {
    var lU = Dy(),
      ys = $n();
    function fU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ys(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ys(t)), (t = t === t ? t : 0)),
        lU(ys(e), t, r)
      );
    }
    ky.exports = fU;
  });
  var Ky,
    Yy,
    $y,
    Qy,
    dU,
    pU,
    gU,
    vU,
    hU,
    mU,
    EU,
    yU,
    _U,
    bU,
    TU,
    IU,
    wU,
    OU,
    AU,
    Zy,
    Jy,
    xU,
    SU,
    CU,
    e_,
    RU,
    LU,
    t_,
    NU,
    _s,
    r_,
    Uy,
    Vy,
    n_,
    rn,
    PU,
    ft,
    i_,
    qU,
    We,
    et,
    nn,
    o_,
    bs,
    Wy,
    Ts,
    FU,
    tn,
    MU,
    DU,
    kU,
    a_,
    By,
    GU,
    Hy,
    UU,
    VU,
    WU,
    Xy,
    Ti,
    Ii,
    jy,
    zy,
    s_,
    u_ = me(() => {
      "use strict";
      (Ky = le(Fy())), (Yy = le(Kn())), ($y = le(Gy()));
      Ue();
      Is();
      vi();
      (Qy = le(Gt())),
        ({
          MOUSE_CLICK: dU,
          MOUSE_SECOND_CLICK: pU,
          MOUSE_DOWN: gU,
          MOUSE_UP: vU,
          MOUSE_OVER: hU,
          MOUSE_OUT: mU,
          DROPDOWN_CLOSE: EU,
          DROPDOWN_OPEN: yU,
          SLIDER_ACTIVE: _U,
          SLIDER_INACTIVE: bU,
          TAB_ACTIVE: TU,
          TAB_INACTIVE: IU,
          NAVBAR_CLOSE: wU,
          NAVBAR_OPEN: OU,
          MOUSE_MOVE: AU,
          PAGE_SCROLL_DOWN: Zy,
          SCROLL_INTO_VIEW: Jy,
          SCROLL_OUT_OF_VIEW: xU,
          PAGE_SCROLL_UP: SU,
          SCROLLING_IN_VIEW: CU,
          PAGE_FINISH: e_,
          ECOMMERCE_CART_CLOSE: RU,
          ECOMMERCE_CART_OPEN: LU,
          PAGE_START: t_,
          PAGE_SCROLL: NU,
        } = Ze),
        (_s = "COMPONENT_ACTIVE"),
        (r_ = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Uy } = Ce),
        ({ getNamespacedParameterId: Vy } = Qy.IX2VanillaUtils),
        (n_ = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (rn = n_(({ element: e, nativeEvent: t }) => e === t.target)),
        (PU = n_(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, Ky.default)([rn, PU])),
        (i_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !FU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (qU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!i_(e, n);
        }),
        (We = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            d = i_(e, s);
          return (
            d &&
              mr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + Uy + n.split(Uy)[1],
                actionListId: (0, Yy.default)(d, "action.config.actionListId"),
              }),
            mr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            on({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (nn = { handler: et(ft, We) }),
        (o_ = { ...nn, types: [_s, r_].join(" ") }),
        (bs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Wy = "mouseover mouseout"),
        (Ts = { types: bs }),
        (FU = { PAGE_START: t_, PAGE_FINISH: e_ }),
        (tn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, $y.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (MU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (DU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (kU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = tn(),
            o = r.scrollOffsetValue,
            s = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return MU(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: n,
            bottom: i - s,
          });
        }),
        (a_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [_s, r_].indexOf(n) !== -1 ? n === _s : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (By = (e) => (t, r) => {
          let n = { elementHovered: DU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (GU = (e) => (t, r) => {
          let n = { ...r, elementVisible: kU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Hy =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = tn(),
              {
                event: { config: a, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: d } = a,
              m = d === "PX",
              h = i - o,
              v = Number((n / h).toFixed(2));
            if (r && r.percentTop === v) return r;
            let E = (m ? s : (o * (s || 0)) / 100) / h,
              O,
              I,
              C = 0;
            r &&
              ((O = v > r.percentTop),
              (I = r.scrollingDown !== O),
              (C = I ? v : r.anchorTop));
            let T = u === Zy ? v >= C + E : v <= C - E,
              N = {
                ...r,
                percentTop: v,
                inBounds: T,
                anchorTop: C,
                scrollingDown: O,
              };
            return (r && T && (I || N.inBounds !== r.inBounds) && e(t, N)) || N;
          }),
        (UU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (VU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (WU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Xy =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Ti = (e = !0) => ({
          ...o_,
          handler: et(
            e ? ft : rn,
            a_((t, r) => (r.isActive ? nn.handler(t, r) : r))
          ),
        })),
        (Ii = (e = !0) => ({
          ...o_,
          handler: et(
            e ? ft : rn,
            a_((t, r) => (r.isActive ? r : nn.handler(t, r)))
          ),
        })),
        (jy = {
          ...Ts,
          handler: GU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Jy) === r
              ? (We(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (zy = 0.05),
        (s_ = {
          [_U]: Ti(),
          [bU]: Ii(),
          [yU]: Ti(),
          [EU]: Ii(),
          [OU]: Ti(!1),
          [wU]: Ii(!1),
          [TU]: Ti(),
          [IU]: Ii(),
          [LU]: { types: "ecommerce-cart-open", handler: et(ft, We) },
          [RU]: { types: "ecommerce-cart-close", handler: et(ft, We) },
          [dU]: {
            types: "click",
            handler: et(
              ft,
              Xy((e, { clickCount: t }) => {
                qU(e) ? t === 1 && We(e) : We(e);
              })
            ),
          },
          [pU]: {
            types: "click",
            handler: et(
              ft,
              Xy((e, { clickCount: t }) => {
                t === 2 && We(e);
              })
            ),
          },
          [gU]: { ...nn, types: "mousedown" },
          [vU]: { ...nn, types: "mouseup" },
          [hU]: {
            types: Wy,
            handler: et(
              ft,
              By((e, t) => {
                t.elementHovered && We(e);
              })
            ),
          },
          [mU]: {
            types: Wy,
            handler: et(
              ft,
              By((e, t) => {
                t.elementHovered || We(e);
              })
            ),
          },
          [AU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: u,
                  continuousParameterGroupId: s,
                  reverse: d,
                  restingState: m = 0,
                } = r,
                {
                  clientX: h = o.clientX,
                  clientY: v = o.clientY,
                  pageX: E = o.pageX,
                  pageY: O = o.pageY,
                } = n,
                I = u === "X_AXIS",
                C = n.type === "mouseout",
                T = m / 100,
                N = s,
                R = !1;
              switch (a) {
                case st.VIEWPORT: {
                  T = I
                    ? Math.min(h, window.innerWidth) / window.innerWidth
                    : Math.min(v, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: q,
                    scrollTop: M,
                    scrollWidth: F,
                    scrollHeight: H,
                  } = tn();
                  T = I ? Math.min(q + E, F) / F : Math.min(M + O, H) / H;
                  break;
                }
                case st.ELEMENT:
                default: {
                  N = Vy(i, s);
                  let q = n.type.indexOf("mouse") === 0;
                  if (q && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let M = t.getBoundingClientRect(),
                    { left: F, top: H, width: K, height: $ } = M;
                  if (!q && !UU({ left: h, top: v }, M)) break;
                  (R = !0), (T = I ? (h - F) / K : (v - H) / $);
                  break;
                }
              }
              return (
                C && (T > 1 - zy || T < zy) && (T = Math.round(T)),
                (a !== st.ELEMENT || R || R !== o.elementHovered) &&
                  ((T = d ? 1 - T : T), e.dispatch(vr(N, T))),
                {
                  elementHovered: R,
                  clientX: h,
                  clientY: v,
                  pageX: E,
                  pageY: O,
                }
              );
            },
          },
          [NU]: {
            types: bs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = tn(),
                u = i / (o - a);
              (u = n ? 1 - u : u), e.dispatch(vr(r, u));
            },
          },
          [CU]: {
            types: bs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: u,
                  scrollHeight: s,
                  clientHeight: d,
                } = tn(),
                {
                  basedOn: m,
                  selectedAxis: h,
                  continuousParameterGroupId: v,
                  startsEntering: E,
                  startsExiting: O,
                  addEndOffset: I,
                  addStartOffset: C,
                  addOffsetValue: T = 0,
                  endOffsetValue: N = 0,
                } = r,
                R = h === "X_AXIS";
              if (m === st.VIEWPORT) {
                let q = R ? o / u : a / s;
                return (
                  q !== i.scrollPercent && t.dispatch(vr(v, q)),
                  { scrollPercent: q }
                );
              } else {
                let q = Vy(n, v),
                  M = e.getBoundingClientRect(),
                  F = (C ? T : 0) / 100,
                  H = (I ? N : 0) / 100;
                (F = E ? F : 1 - F), (H = O ? H : 1 - H);
                let K = M.top + Math.min(M.height * F, d),
                  J = M.top + M.height * H - K,
                  ee = Math.min(d + J, s),
                  x = Math.min(Math.max(0, d - K), ee) / ee;
                return (
                  x !== i.scrollPercent && t.dispatch(vr(q, x)),
                  { scrollPercent: x }
                );
              }
            },
          },
          [Jy]: jy,
          [xU]: jy,
          [Zy]: {
            ...Ts,
            handler: Hy((e, t) => {
              t.scrollingDown && We(e);
            }),
          },
          [SU]: {
            ...Ts,
            handler: Hy((e, t) => {
              t.scrollingDown || We(e);
            }),
          },
          [e_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(rn, VU(We)),
          },
          [t_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(rn, WU(We)),
          },
        });
    });
  var O_ = {};
  De(O_, {
    observeRequests: () => uV,
    startActionGroup: () => on,
    startEngine: () => Ci,
    stopActionGroup: () => mr,
    stopAllActionGroups: () => T_,
    stopEngine: () => Ri,
  });
  function uV(e) {
    Ut({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: fV }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: dV }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: pV }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: gV });
  }
  function cV(e) {
    Ut({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ri(e),
          E_({ store: e, elementApi: qe }),
          Ci({ store: e, allowEvents: !0 }),
          y_();
      },
    });
  }
  function lV(e, t) {
    let r = Ut({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function fV({ rawData: e, defer: t }, r) {
    let n = () => {
      Ci({ store: r, rawData: e, allowEvents: !0 }), y_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function y_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function dV(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: u,
        testManual: s,
        verbose: d = !0,
      } = e,
      { rawData: m } = e;
    if (n && i && m && u) {
      let h = m.actionLists[n];
      h && (m = QU({ actionList: h, actionItemId: i, rawData: m }));
    }
    if (
      (Ci({ store: t, rawData: m, allowEvents: a, testManual: s }),
      (n && r === Ge.GENERAL_START_ACTION) || ws(r))
    ) {
      mr({ store: t, actionListId: n }),
        b_({ store: t, actionListId: n, eventId: o });
      let h = on({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: u,
        verbose: d,
      });
      d && h && t.dispatch(hr({ actionListId: n, isPlaying: !u }));
    }
  }
  function pV({ actionListId: e }, t) {
    e ? mr({ store: t, actionListId: e }) : T_({ store: t }), Ri(t);
  }
  function gV(e, t) {
    Ri(t), E_({ store: t, elementApi: qe });
  }
  function Ci({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ts(t)),
      i.active ||
        (e.dispatch(
          rs({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (_V(e), vV(), e.getState().ixSession.hasDefinedMediaQueries && cV(e)),
        e.dispatch(ns()),
        hV(e, n));
  }
  function vV() {
    let { documentElement: e } = document;
    e.className.indexOf(c_) === -1 && (e.className += ` ${c_}`);
  }
  function hV(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(pi(n, o)), t ? lV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ri(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(mV), tV(), e.dispatch(is());
    }
  }
  function mV({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function EV({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: u,
    restingValue: s,
  }) {
    let { ixData: d, ixSession: m } = e.getState(),
      { events: h } = d,
      v = h[n],
      { eventTypeId: E } = v,
      O = {},
      I = {},
      C = [],
      { continuousActionGroups: T } = a,
      { id: N } = a;
    ZU(E, i) && (N = JU(t, N));
    let R = m.hasBoundaryNodes && r ? en(r, Oi) : null;
    T.forEach((q) => {
      let { keyframe: M, actionItems: F } = q;
      F.forEach((H) => {
        let { actionTypeId: K } = H,
          { target: $ } = H.config;
        if (!$) return;
        let J = $.boundaryMode ? R : null,
          ee = rV($) + Os + K;
        if (((I[ee] = yV(I[ee], M, H)), !O[ee])) {
          O[ee] = !0;
          let { config: G } = H;
          Ai({
            config: G,
            event: v,
            eventTarget: r,
            elementRoot: J,
            elementApi: qe,
          }).forEach((x) => {
            C.push({ element: x, key: ee });
          });
        }
      });
    }),
      C.forEach(({ element: q, key: M }) => {
        let F = I[M],
          H = (0, Et.default)(F, "[0].actionItems[0]", {}),
          { actionTypeId: K } = H,
          $ = Si(K) ? xs(K)(q, H) : null,
          J = As({ element: q, actionItem: H, elementApi: qe }, $);
        Ss({
          store: e,
          element: q,
          eventId: n,
          actionListId: o,
          actionItem: H,
          destination: J,
          continuous: !0,
          parameterId: N,
          actionGroups: F,
          smoothing: u,
          restingValue: s,
          pluginInstance: $,
        });
      });
  }
  function yV(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function _V(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    __(e),
      (0, Er.default)(r, (i, o) => {
        let a = s_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        AV({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && TV(e);
  }
  function TV(e) {
    let t = () => {
      __(e);
    };
    bV.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(di(window, [r, t]));
    }),
      t();
  }
  function __(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(cs({ width: n, mediaQueries: i }));
    }
  }
  function AV({ logic: e, store: t, events: r }) {
    xV(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      u = IV(r, OV);
    if (!(0, d_.default)(u)) return;
    (0, Er.default)(u, (h, v) => {
      let E = r[v],
        { action: O, id: I, mediaQueries: C = o.mediaQueryKeys } = E,
        { actionListId: T } = O.config;
      nV(C, o.mediaQueryKeys) || t.dispatch(ls()),
        O.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((R) => {
            let { continuousParameterGroupId: q } = R,
              M = (0, Et.default)(a, `${T}.continuousParameterGroups`, []),
              F = (0, f_.default)(M, ({ id: $ }) => $ === q),
              H = (R.smoothing || 0) / 100,
              K = (R.restingState || 0) / 100;
            F &&
              h.forEach(($, J) => {
                let ee = I + Os + J;
                EV({
                  store: t,
                  eventStateKey: ee,
                  eventTarget: $,
                  eventId: I,
                  eventConfig: R,
                  actionListId: T,
                  parameterGroup: F,
                  smoothing: H,
                  restingValue: K,
                });
              });
          }),
        (O.actionTypeId === Ge.GENERAL_START_ACTION || ws(O.actionTypeId)) &&
          b_({ store: t, actionListId: T, eventId: I });
    });
    let s = (h) => {
        let { ixSession: v } = t.getState();
        wV(u, (E, O, I) => {
          let C = r[O],
            T = v.eventState[I],
            { action: N, mediaQueries: R = o.mediaQueryKeys } = C;
          if (!xi(R, v.mediaQueryKey)) return;
          let q = (M = {}) => {
            let F = i(
              {
                store: t,
                element: E,
                event: C,
                eventConfig: M,
                nativeEvent: h,
                eventStateKey: I,
              },
              T
            );
            iV(F, T) || t.dispatch(os(I, F));
          };
          N.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(q)
            : q();
        });
      },
      d = (0, h_.default)(s, sV),
      m = ({ target: h = document, types: v, throttle: E }) => {
        v.split(" ")
          .filter(Boolean)
          .forEach((O) => {
            let I = E ? d : s;
            h.addEventListener(O, I), t.dispatch(di(h, [O, I]));
          });
      };
    Array.isArray(n) ? n.forEach(m) : typeof n == "string" && m(e);
  }
  function xV(e) {
    if (!aV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ds(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function b_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      u = a[r],
      s = o[t];
    if (s && s.useFirstGroupAsInitialState) {
      let d = (0, Et.default)(s, "actionItemGroups[0].actionItems", []),
        m = (0, Et.default)(u, "mediaQueries", n.mediaQueryKeys);
      if (!xi(m, i.mediaQueryKey)) return;
      d.forEach((h) => {
        let { config: v, actionTypeId: E } = h,
          O =
            v?.target?.useEventTarget === !0 && v?.target?.objectId == null
              ? { target: u.target, targets: u.targets }
              : v,
          I = Ai({ config: O, event: u, elementApi: qe }),
          C = Si(E);
        I.forEach((T) => {
          let N = C ? xs(E)(T, h) : null;
          Ss({
            destination: As({ element: T, actionItem: h, elementApi: qe }, N),
            immediate: !0,
            store: e,
            element: T,
            eventId: r,
            actionItem: h,
            actionListId: t,
            pluginInstance: N,
          });
        });
      });
    }
  }
  function T_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Er.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Cs(r, e), i && e.dispatch(hr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function mr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && r ? en(r, Oi) : null;
    (0, Er.default)(o, (s) => {
      let d = (0, Et.default)(s, "actionItem.config.target.boundaryMode"),
        m = n ? s.eventStateKey === n : !0;
      if (s.actionListId === i && s.eventId === t && m) {
        if (u && d && !ps(u, s.element)) return;
        Cs(s, e),
          s.verbose && e.dispatch(hr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function on({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: u,
  }) {
    let { ixData: s, ixSession: d } = e.getState(),
      { events: m } = s,
      h = m[t] || {},
      { mediaQueries: v = s.mediaQueryKeys } = h,
      E = (0, Et.default)(s, `actionLists.${i}`, {}),
      { actionItemGroups: O, useFirstGroupAsInitialState: I } = E;
    if (!O || !O.length) return !1;
    o >= O.length && (0, Et.default)(h, "config.loop") && (o = 0),
      o === 0 && I && o++;
    let T =
        (o === 0 || (o === 1 && I)) && ws(h.action?.actionTypeId)
          ? h.config.delay
          : void 0,
      N = (0, Et.default)(O, [o, "actionItems"], []);
    if (!N.length || !xi(v, d.mediaQueryKey)) return !1;
    let R = d.hasBoundaryNodes && r ? en(r, Oi) : null,
      q = KU(N),
      M = !1;
    return (
      N.forEach((F, H) => {
        let { config: K, actionTypeId: $ } = F,
          J = Si($),
          { target: ee } = K;
        if (!ee) return;
        let G = ee.boundaryMode ? R : null;
        Ai({
          config: K,
          event: h,
          eventTarget: r,
          elementRoot: G,
          elementApi: qe,
        }).forEach((D, X) => {
          let B = J ? xs($)(D, F) : null,
            te = J ? oV($)(D, F) : null;
          M = !0;
          let re = q === H && X === 0,
            U = YU({ element: D, actionItem: F }),
            Y = As({ element: D, actionItem: F, elementApi: qe }, B);
          Ss({
            store: e,
            element: D,
            actionItem: F,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: U,
            destination: Y,
            immediate: a,
            verbose: u,
            pluginInstance: B,
            pluginDuration: te,
            instanceDelay: T,
          });
        });
      }),
      M
    );
  }
  function Ss(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: u,
        continuous: s,
        restingValue: d,
        eventId: m,
      } = n,
      h = !s,
      v = jU(),
      { ixElements: E, ixSession: O, ixData: I } = t.getState(),
      C = XU(E, i),
      { refState: T } = E[C] || {},
      N = gs(i),
      R = O.reducedMotion && Ko[o.actionTypeId],
      q;
    if (R && s)
      switch (I.events[m]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          q = d;
          break;
        default:
          q = 0.5;
          break;
      }
    let M = $U(i, T, r, o, qe, u);
    if (
      (t.dispatch(
        as({
          instanceId: v,
          elementId: C,
          origin: M,
          refType: N,
          skipMotion: R,
          skipToValue: q,
          ...n,
        })
      ),
      I_(document.body, "ix2-animation-started", v),
      a)
    ) {
      SV(t, v);
      return;
    }
    Ut({ store: t, select: ({ ixInstances: F }) => F[v], onChange: w_ }),
      h && t.dispatch(gi(v, O.tick));
  }
  function Cs(e, t) {
    I_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === m_ && eV(o, n, qe), t.dispatch(ss(e.id));
  }
  function I_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function SV(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(gi(t, 0)), e.dispatch(pi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    w_(n[t], e);
  }
  function w_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: u,
        renderType: s,
        current: d,
        groupIndex: m,
        eventId: h,
        eventTarget: v,
        eventStateKey: E,
        actionListId: O,
        isCarrier: I,
        styleProp: C,
        verbose: T,
        pluginInstance: N,
      } = e,
      { ixData: R, ixSession: q } = t.getState(),
      { events: M } = R,
      F = M[h] || {},
      { mediaQueries: H = R.mediaQueryKeys } = F;
    if (xi(H, q.mediaQueryKey) && (n || r || i)) {
      if (d || (s === HU && i)) {
        t.dispatch(us(o, u, d, a));
        let { ixElements: K } = t.getState(),
          { ref: $, refType: J, refState: ee } = K[o] || {},
          G = ee && ee[u];
        (J === m_ || Si(u)) && zU($, ee, G, h, a, C, qe, s, N);
      }
      if (i) {
        if (I) {
          let K = on({
            store: t,
            eventId: h,
            eventTarget: v,
            eventStateKey: E,
            actionListId: O,
            groupIndex: m + 1,
            verbose: T,
          });
          T && !K && t.dispatch(hr({ actionListId: O, isPlaying: !1 }));
        }
        Cs(e, t);
      }
    }
  }
  var f_,
    Et,
    d_,
    p_,
    g_,
    v_,
    Er,
    h_,
    wi,
    BU,
    ws,
    Os,
    Oi,
    m_,
    HU,
    c_,
    Ai,
    XU,
    As,
    Ut,
    jU,
    zU,
    E_,
    KU,
    YU,
    $U,
    QU,
    ZU,
    JU,
    xi,
    eV,
    tV,
    rV,
    nV,
    iV,
    Si,
    xs,
    oV,
    l_,
    aV,
    sV,
    bV,
    IV,
    wV,
    OV,
    Is = me(() => {
      "use strict";
      (f_ = le(Ia())),
        (Et = le(Kn())),
        (d_ = le(km())),
        (p_ = le(lE())),
        (g_ = le(dE())),
        (v_ = le(gE())),
        (Er = le(_E())),
        (h_ = le(xE()));
      Ue();
      wi = le(Gt());
      vi();
      PE();
      u_();
      (BU = Object.keys(An)),
        (ws = (e) => BU.includes(e)),
        ({
          COLON_DELIMITER: Os,
          BOUNDARY_SELECTOR: Oi,
          HTML_ELEMENT: m_,
          RENDER_GENERAL: HU,
          W_MOD_IX: c_,
        } = Ce),
        ({
          getAffectedElements: Ai,
          getElementId: XU,
          getDestinationValues: As,
          observeStore: Ut,
          getInstanceId: jU,
          renderHTMLElement: zU,
          clearAllStyles: E_,
          getMaxDurationItemIndex: KU,
          getComputedStyle: YU,
          getInstanceOrigin: $U,
          reduceListToGroup: QU,
          shouldNamespaceEventParameter: ZU,
          getNamespacedParameterId: JU,
          shouldAllowMediaQuery: xi,
          cleanupHTMLElement: eV,
          clearObjectCache: tV,
          stringifyTarget: rV,
          mediaQueriesEqual: nV,
          shallowEqual: iV,
        } = wi.IX2VanillaUtils),
        ({
          isPluginType: Si,
          createPluginInstance: xs,
          getPluginDuration: oV,
        } = wi.IX2VanillaPlugins),
        (l_ = navigator.userAgent),
        (aV = l_.match(/iPad/i) || l_.match(/iPhone/)),
        (sV = 12);
      bV = ["resize", "orientationchange"];
      (IV = (e, t) => (0, p_.default)((0, v_.default)(e, t), g_.default)),
        (wV = (e, t) => {
          (0, Er.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Os + o;
              t(i, n, a);
            });
          });
        }),
        (OV = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ai({ config: t, elementApi: qe });
        });
    });
  var x_ = c((yt) => {
    "use strict";
    var CV = pn().default,
      RV = uu().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = A_;
    yt.init = FV;
    yt.setEnv = qV;
    yt.store = void 0;
    zl();
    var LV = Xo(),
      NV = RV((ym(), nt(Em))),
      Rs = (Is(), nt(O_)),
      PV = CV((vi(), nt(CE)));
    yt.actions = PV;
    var Ls = (yt.store = (0, LV.createStore)(NV.default));
    function qV(e) {
      e() && (0, Rs.observeRequests)(Ls);
    }
    function FV(e) {
      A_(), (0, Rs.startEngine)({ store: Ls, rawData: e, allowEvents: !0 });
    }
    function A_() {
      (0, Rs.stopEngine)(Ls);
    }
  });
  var L_ = c((nz, R_) => {
    "use strict";
    var S_ = ke(),
      C_ = x_();
    C_.setEnv(S_.env);
    S_.define(
      "ix2",
      (R_.exports = function () {
        return C_;
      })
    );
  });
  var P_ = c((iz, N_) => {
    "use strict";
    var yr = ke();
    yr.define(
      "links",
      (N_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = yr.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          d = /index\.(html|php)$/,
          m = /\/$/,
          h,
          v;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && yr.env("design")),
            (v = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(I),
            (h = []);
          for (var T = document.links, N = 0; N < T.length; ++N) O(T[N]);
          h.length && (yr.scroll.on(I), I());
        }
        function O(T) {
          if (!T.getAttribute("hreflang")) {
            var N =
              (i && T.getAttribute("href-disabled")) || T.getAttribute("href");
            if (((u.href = N), !(N.indexOf(":") >= 0))) {
              var R = e(T);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var q = e(u.hash);
                q.length && h.push({ link: R, sec: q, active: !1 });
                return;
              }
              if (!(N === "#" || N === "")) {
                var M =
                  u.href === a.href || N === v || (d.test(N) && m.test(v));
                C(R, s, M);
              }
            }
          }
        }
        function I() {
          var T = n.scrollTop(),
            N = n.height();
          t.each(h, function (R) {
            if (!R.link.attr("hreflang")) {
              var q = R.link,
                M = R.sec,
                F = M.offset().top,
                H = M.outerHeight(),
                K = N * 0.5,
                $ = M.is(":visible") && F + H - K >= T && F + K <= T + N;
              R.active !== $ && ((R.active = $), C(q, s, $));
            }
          });
        }
        function C(T, N, R) {
          var q = T.hasClass(N);
          (R && q) || (!R && !q) || (R ? T.addClass(N) : T.removeClass(N));
        }
        return r;
      })
    );
  });
  var F_ = c((oz, q_) => {
    "use strict";
    var Li = ke();
    Li.define(
      "scroll",
      (q_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = O() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (G) {
              window.setTimeout(G, 15);
            },
          s = Li.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          m = 'a[href="#"]',
          h = 'a[href*="#"]:not(.w-tab-link):not(' + m + ")",
          v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(v));
        function O() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(G) {
          return I.test(G.hash) && G.host + G.pathname === r.host + r.pathname;
        }
        let T =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            T.matches
          );
        }
        function R(G, x) {
          var D;
          switch (x) {
            case "add":
              (D = G.attr("tabindex")),
                D
                  ? G.attr("data-wf-tabindex-swap", D)
                  : G.attr("tabindex", "-1");
              break;
            case "remove":
              (D = G.attr("data-wf-tabindex-swap")),
                D
                  ? (G.attr("tabindex", D),
                    G.removeAttr("data-wf-tabindex-swap"))
                  : G.removeAttr("tabindex");
              break;
          }
          G.toggleClass("wf-force-outline-none", x === "add");
        }
        function q(G) {
          var x = G.currentTarget;
          if (
            !(
              Li.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(x.className))
            )
          ) {
            var D = C(x) ? x.hash : "";
            if (D !== "") {
              var X = e(D);
              X.length &&
                (G && (G.preventDefault(), G.stopPropagation()),
                M(D, G),
                window.setTimeout(
                  function () {
                    F(X, function () {
                      R(X, "add"),
                        X.get(0).focus({ preventScroll: !0 }),
                        R(X, "remove");
                    });
                  },
                  G ? 0 : 300
                ));
            }
          }
        }
        function M(G) {
          if (
            r.hash !== G &&
            n &&
            n.pushState &&
            !(Li.env.chrome && r.protocol === "file:")
          ) {
            var x = n.state && n.state.hash;
            x !== G && n.pushState({ hash: G }, "", G);
          }
        }
        function F(G, x) {
          var D = i.scrollTop(),
            X = H(G);
          if (D !== X) {
            var B = K(G, D, X),
              te = Date.now(),
              re = function () {
                var U = Date.now() - te;
                window.scroll(0, $(D, X, U, B)),
                  U <= B ? u(re) : typeof x == "function" && x();
              };
            u(re);
          }
        }
        function H(G) {
          var x = e(d),
            D = x.css("position") === "fixed" ? x.outerHeight() : 0,
            X = G.offset().top - D;
          if (G.data("scroll") === "mid") {
            var B = i.height() - D,
              te = G.outerHeight();
            te < B && (X -= Math.round((B - te) / 2));
          }
          return X;
        }
        function K(G, x, D) {
          if (N()) return 0;
          var X = 1;
          return (
            a.add(G).each(function (B, te) {
              var re = parseFloat(te.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (X = re);
            }),
            (472.143 * Math.log(Math.abs(x - D) + 125) - 2e3) * X
          );
        }
        function $(G, x, D, X) {
          return D > X ? x : G + (x - G) * J(D / X);
        }
        function J(G) {
          return G < 0.5
            ? 4 * G * G * G
            : (G - 1) * (2 * G - 2) * (2 * G - 2) + 1;
        }
        function ee() {
          var { WF_CLICK_EMPTY: G, WF_CLICK_SCROLL: x } = t;
          o.on(x, h, q),
            o.on(G, m, function (D) {
              D.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: ee };
      })
    );
  });
  var D_ = c((az, M_) => {
    "use strict";
    var MV = ke();
    MV.define(
      "touch",
      (M_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            m;
          o.addEventListener("touchstart", h, !1),
            o.addEventListener("touchmove", v, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", O, !1),
            o.addEventListener("mousedown", h, !1),
            o.addEventListener("mousemove", v, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", O, !1);
          function h(C) {
            var T = C.touches;
            (T && T.length > 1) ||
              ((a = !0),
              T ? ((u = !0), (d = T[0].clientX)) : (d = C.clientX),
              (m = d));
          }
          function v(C) {
            if (a) {
              if (u && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var T = C.touches,
                N = T ? T[0].clientX : C.clientX,
                R = N - m;
              (m = N),
                Math.abs(R) > s &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", C, { direction: R > 0 ? "right" : "left" }), O());
            }
          }
          function E(C) {
            if (a && ((a = !1), u && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (u = !1);
              return;
            }
          }
          function O() {
            a = !1;
          }
          function I() {
            o.removeEventListener("touchstart", h, !1),
              o.removeEventListener("touchmove", v, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", O, !1),
              o.removeEventListener("mousedown", h, !1),
              o.removeEventListener("mousemove", v, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", O, !1),
              (o = null);
          }
          this.destroy = I;
        }
        function i(o, a, u) {
          var s = e.Event(o, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var U_ = c((sz, G_) => {
    "use strict";
    var Vt = ke(),
      DV = br(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      k_ = !0,
      kV = /^#[a-zA-Z0-9\-_]+$/;
    Vt.define(
      "dropdown",
      (G_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Vt.env(),
          o = !1,
          a,
          u = Vt.env.touch,
          s = ".w-dropdown",
          d = "w--open",
          m = DV.triggers,
          h = 900,
          v = "focusout" + s,
          E = "keydown" + s,
          O = "mouseenter" + s,
          I = "mousemove" + s,
          C = "mouseleave" + s,
          T = (u ? "click" : "mouseup") + s,
          N = "w-close" + s,
          R = "setting" + s,
          q = e(document),
          M;
        (n.ready = F),
          (n.design = function () {
            o && x(), (o = !1), F();
          }),
          (n.preview = function () {
            (o = !0), F();
          });
        function F() {
          (a = i && Vt.env("design")), (M = q.find(s)), M.each(H);
        }
        function H(l, k) {
          var V = e(k),
            S = e.data(k, s);
          S ||
            (S = e.data(k, s, {
              open: !1,
              el: V,
              config: {},
              selectedIdx: -1,
            })),
            (S.toggle = S.el.children(".w-dropdown-toggle")),
            (S.list = S.el.children(".w-dropdown-list")),
            (S.links = S.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (S.complete = B(S)),
            (S.mouseLeave = re(S)),
            (S.mouseUpOutside = X(S)),
            (S.mouseMoveOutside = U(S)),
            K(S);
          var ie = S.toggle.attr("id"),
            fe = S.list.attr("id");
          ie || (ie = "w-dropdown-toggle-" + l),
            fe || (fe = "w-dropdown-list-" + l),
            S.toggle.attr("id", ie),
            S.toggle.attr("aria-controls", fe),
            S.toggle.attr("aria-haspopup", "menu"),
            S.toggle.attr("aria-expanded", "false"),
            S.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            S.toggle.prop("tagName") !== "BUTTON" &&
              (S.toggle.attr("role", "button"),
              S.toggle.attr("tabindex") || S.toggle.attr("tabindex", "0")),
            S.list.attr("id", fe),
            S.list.attr("aria-labelledby", ie),
            S.links.each(function (g, W) {
              W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"),
                kV.test(W.hash) && W.addEventListener("click", G.bind(null, S));
            }),
            S.el.off(s),
            S.toggle.off(s),
            S.nav && S.nav.off(s);
          var oe = J(S, k_);
          a && S.el.on(R, $(S)),
            a ||
              (i && ((S.hovering = !1), G(S)),
              S.config.hover && S.toggle.on(O, te(S)),
              S.el.on(N, oe),
              S.el.on(E, Y(S)),
              S.el.on(v, _(S)),
              S.toggle.on(T, oe),
              S.toggle.on(E, y(S)),
              (S.nav = S.el.closest(".w-nav")),
              S.nav.on(N, oe));
        }
        function K(l) {
          var k = Number(l.el.css("z-index"));
          (l.manageZ = k === h || k === h + 1),
            (l.config = {
              hover: l.el.attr("data-hover") === "true" && !u,
              delay: l.el.attr("data-delay"),
            });
        }
        function $(l) {
          return function (k, V) {
            (V = V || {}),
              K(l),
              V.open === !0 && ee(l, !0),
              V.open === !1 && G(l, { immediate: !0 });
          };
        }
        function J(l, k) {
          return r(function (V) {
            if (l.open || (V && V.type === "w-close"))
              return G(l, { forceClose: k });
            ee(l);
          });
        }
        function ee(l) {
          if (!l.open) {
            D(l),
              (l.open = !0),
              l.list.addClass(d),
              l.toggle.addClass(d),
              l.toggle.attr("aria-expanded", "true"),
              m.intro(0, l.el[0]),
              Vt.redraw.up(),
              l.manageZ && l.el.css("z-index", h + 1);
            var k = Vt.env("editor");
            a || q.on(T, l.mouseUpOutside),
              l.hovering && !k && l.el.on(C, l.mouseLeave),
              l.hovering && k && q.on(I, l.mouseMoveOutside),
              window.clearTimeout(l.delayId);
          }
        }
        function G(l, { immediate: k, forceClose: V } = {}) {
          if (l.open && !(l.config.hover && l.hovering && !V)) {
            l.toggle.attr("aria-expanded", "false"), (l.open = !1);
            var S = l.config;
            if (
              (m.outro(0, l.el[0]),
              q.off(T, l.mouseUpOutside),
              q.off(I, l.mouseMoveOutside),
              l.el.off(C, l.mouseLeave),
              window.clearTimeout(l.delayId),
              !S.delay || k)
            )
              return l.complete();
            l.delayId = window.setTimeout(l.complete, S.delay);
          }
        }
        function x() {
          q.find(s).each(function (l, k) {
            e(k).triggerHandler(N);
          });
        }
        function D(l) {
          var k = l.el[0];
          M.each(function (V, S) {
            var ie = e(S);
            ie.is(k) || ie.has(k).length || ie.triggerHandler(N);
          });
        }
        function X(l) {
          return (
            l.mouseUpOutside && q.off(T, l.mouseUpOutside),
            r(function (k) {
              if (l.open) {
                var V = e(k.target);
                if (!V.closest(".w-dropdown-toggle").length) {
                  var S = e.inArray(l.el[0], V.parents(s)) === -1,
                    ie = Vt.env("editor");
                  if (S) {
                    if (ie) {
                      var fe =
                          V.parents().length === 1 &&
                          V.parents("svg").length === 1,
                        oe = V.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (fe || oe) return;
                    }
                    G(l);
                  }
                }
              }
            })
          );
        }
        function B(l) {
          return function () {
            l.list.removeClass(d),
              l.toggle.removeClass(d),
              l.manageZ && l.el.css("z-index", "");
          };
        }
        function te(l) {
          return function () {
            (l.hovering = !0), ee(l);
          };
        }
        function re(l) {
          return function () {
            (l.hovering = !1), l.links.is(":focus") || G(l);
          };
        }
        function U(l) {
          return r(function (k) {
            if (l.open) {
              var V = e(k.target),
                S = e.inArray(l.el[0], V.parents(s)) === -1;
              if (S) {
                var ie = V.parents(".w-editor-bem-EditorHoverControls").length,
                  fe = V.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  g =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (ie || fe || g) return;
                (l.hovering = !1), G(l);
              }
            }
          });
        }
        function Y(l) {
          return function (k) {
            if (!(a || !l.open))
              switch (
                ((l.selectedIdx = l.links.index(document.activeElement)),
                k.keyCode)
              ) {
                case tt.HOME:
                  return l.open
                    ? ((l.selectedIdx = 0), p(l), k.preventDefault())
                    : void 0;
                case tt.END:
                  return l.open
                    ? ((l.selectedIdx = l.links.length - 1),
                      p(l),
                      k.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return G(l), l.toggle.focus(), k.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (l.selectedIdx = Math.min(
                      l.links.length - 1,
                      l.selectedIdx + 1
                    )),
                    p(l),
                    k.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)),
                    p(l),
                    k.preventDefault()
                  );
              }
          };
        }
        function p(l) {
          l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
        }
        function y(l) {
          var k = J(l, k_);
          return function (V) {
            if (!a) {
              if (!l.open)
                switch (V.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return V.stopPropagation();
                }
              switch (V.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return k(), V.stopPropagation(), V.preventDefault();
              }
            }
          };
        }
        function _(l) {
          return r(function (k) {
            var { relatedTarget: V, target: S } = k,
              ie = l.el[0],
              fe = ie.contains(V) || ie.contains(S);
            return fe || G(l), k.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var V_ = c((Ns) => {
    "use strict";
    Object.defineProperty(Ns, "__esModule", { value: !0 });
    Ns.default = GV;
    function GV(e, t, r, n, i, o, a, u, s, d, m, h, v) {
      return function (E) {
        e(E);
        var O = E.form,
          I = {
            name: O.attr("data-name") || O.attr("name") || "Untitled Form",
            pageId: O.attr("data-wf-page-id") || "",
            elementId: O.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              O.html()
            ),
            trackingCookies: n(),
          };
        let C = O.attr("data-wf-flow");
        C && (I.wfFlow = C), i(E);
        var T = o(O, I.fields);
        if (T) return a(T);
        if (((I.fileUploads = u(O)), s(E), !d)) {
          m(E);
          return;
        }
        h.ajax({
          url: v,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (N) {
            N && N.code === 200 && (E.success = !0), m(E);
          })
          .fail(function () {
            m(E);
          });
      };
    }
  });
  var B_ = c((cz, W_) => {
    "use strict";
    var Ni = ke();
    Ni.define(
      "forms",
      (W_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          u = ".w-form",
          s,
          d = /e(-)?mail/i,
          m = /^\S+@\S+$/,
          h = window.alert,
          v = Ni.env(),
          E,
          O,
          I,
          C = /list-manage[1-9]?.com/i,
          T = t.debounce(function () {
            h(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              N(), !v && !E && q();
            };
        function N() {
          (s = e("html").attr("data-wf-site")),
            (O = "https://webflow.com/api/v1/form/" + s),
            a &&
              O.indexOf("https://webflow.com") >= 0 &&
              (O = O.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (I = `${O}/signFile`),
            (i = e(u + " form")),
            i.length && i.each(R);
        }
        function R(U, Y) {
          var p = e(Y),
            y = e.data(Y, u);
          y || (y = e.data(Y, u, { form: p })), M(y);
          var _ = p.closest("div.w-form");
          (y.done = _.find("> .w-form-done")),
            (y.fail = _.find("> .w-form-fail")),
            (y.fileUploads = _.find(".w-file-upload")),
            y.fileUploads.each(function (V) {
              B(V, y);
            });
          var l =
            y.form.attr("aria-label") || y.form.attr("data-name") || "Form";
          y.done.attr("aria-label") || y.form.attr("aria-label", l),
            y.done.attr("tabindex", "-1"),
            y.done.attr("role", "region"),
            y.done.attr("aria-label") ||
              y.done.attr("aria-label", l + " success"),
            y.fail.attr("tabindex", "-1"),
            y.fail.attr("role", "region"),
            y.fail.attr("aria-label") ||
              y.fail.attr("aria-label", l + " failure");
          var k = (y.action = p.attr("action"));
          if (
            ((y.handler = null),
            (y.redirect = p.attr("data-redirect")),
            C.test(k))
          ) {
            y.handler = x;
            return;
          }
          if (!k) {
            if (s) {
              y.handler = (() => {
                let V = V_().default;
                return V(M, o, Ni, J, X, H, h, K, F, s, D, e, O);
              })();
              return;
            }
            T();
          }
        }
        function q() {
          (E = !0),
            n.on("submit", u + " form", function (V) {
              var S = e.data(this, u);
              S.handler && ((S.evt = V), S.handler(S));
            });
          let U = ".w-checkbox-input",
            Y = ".w-radio-input",
            p = "w--redirected-checked",
            y = "w--redirected-focus",
            _ = "w--redirected-focus-visible",
            l = ":focus-visible, [data-wf-focus-visible]",
            k = [
              ["checkbox", U],
              ["radio", Y],
            ];
          n.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + U + ")",
            (V) => {
              e(V.target).siblings(U).toggleClass(p);
            }
          ),
            n.on("change", u + ' form input[type="radio"]', (V) => {
              e(`input[name="${V.target.name}"]:not(${U})`).map((ie, fe) =>
                e(fe).siblings(Y).removeClass(p)
              );
              let S = e(V.target);
              S.hasClass("w-radio-input") || S.siblings(Y).addClass(p);
            }),
            k.forEach(([V, S]) => {
              n.on(
                "focus",
                u + ` form input[type="${V}"]:not(` + S + ")",
                (ie) => {
                  e(ie.target).siblings(S).addClass(y),
                    e(ie.target).filter(l).siblings(S).addClass(_);
                }
              ),
                n.on(
                  "blur",
                  u + ` form input[type="${V}"]:not(` + S + ")",
                  (ie) => {
                    e(ie.target).siblings(S).removeClass(`${y} ${_}`);
                  }
                );
            });
        }
        function M(U) {
          var Y = (U.btn = U.form.find(':input[type="submit"]'));
          (U.wait = U.btn.attr("data-wait") || null),
            (U.success = !1),
            Y.prop("disabled", !1),
            U.label && Y.val(U.label);
        }
        function F(U) {
          var Y = U.btn,
            p = U.wait;
          Y.prop("disabled", !0), p && ((U.label = Y.val()), Y.val(p));
        }
        function H(U, Y) {
          var p = null;
          return (
            (Y = Y || {}),
            U.find(':input:not([type="submit"]):not([type="file"])').each(
              function (y, _) {
                var l = e(_),
                  k = l.attr("type"),
                  V =
                    l.attr("data-name") || l.attr("name") || "Field " + (y + 1);
                V = encodeURIComponent(V);
                var S = l.val();
                if (k === "checkbox") S = l.is(":checked");
                else if (k === "radio") {
                  if (Y[V] === null || typeof Y[V] == "string") return;
                  S =
                    U.find(
                      'input[name="' + l.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof S == "string" && (S = e.trim(S)),
                  (Y[V] = S),
                  (p = p || ee(l, k, V, S));
              }
            ),
            p
          );
        }
        function K(U) {
          var Y = {};
          return (
            U.find(':input[type="file"]').each(function (p, y) {
              var _ = e(y),
                l = _.attr("data-name") || _.attr("name") || "File " + (p + 1),
                k = _.attr("data-value");
              typeof k == "string" && (k = e.trim(k)), (Y[l] = k);
            }),
            Y
          );
        }
        let $ = { _mkto_trk: "marketo" };
        function J() {
          return document.cookie.split("; ").reduce(function (Y, p) {
            let y = p.split("="),
              _ = y[0];
            if (_ in $) {
              let l = $[_],
                k = y.slice(1).join("=");
              Y[l] = k;
            }
            return Y;
          }, {});
        }
        function ee(U, Y, p, y) {
          var _ = null;
          return (
            Y === "password"
              ? (_ = "Passwords cannot be submitted.")
              : U.attr("required")
              ? y
                ? d.test(U.attr("type")) &&
                  (m.test(y) ||
                    (_ = "Please enter a valid email address for: " + p))
                : (_ = "Please fill out the required field: " + p)
              : p === "g-recaptcha-response" &&
                !y &&
                (_ = "Please confirm you\u2019re not a robot."),
            _
          );
        }
        function G(U) {
          X(U), D(U);
        }
        function x(U) {
          M(U);
          var Y = U.form,
            p = {};
          if (/^https/.test(o.href) && !/^https/.test(U.action)) {
            Y.attr("method", "post");
            return;
          }
          X(U);
          var y = H(Y, p);
          if (y) return h(y);
          F(U);
          var _;
          t.each(p, function (S, ie) {
            d.test(ie) && (p.EMAIL = S),
              /^((full[ _-]?)?name)$/i.test(ie) && (_ = S),
              /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = S),
              /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = S);
          }),
            _ &&
              !p.FNAME &&
              ((_ = _.split(" ")),
              (p.FNAME = _[0]),
              (p.LNAME = p.LNAME || _[1]));
          var l = U.action.replace("/post?", "/post-json?") + "&c=?",
            k = l.indexOf("u=") + 2;
          k = l.substring(k, l.indexOf("&", k));
          var V = l.indexOf("id=") + 3;
          (V = l.substring(V, l.indexOf("&", V))),
            (p["b_" + k + "_" + V] = ""),
            e
              .ajax({ url: l, data: p, dataType: "jsonp" })
              .done(function (S) {
                (U.success = S.result === "success" || /already/.test(S.msg)),
                  U.success || console.info("MailChimp error: " + S.msg),
                  D(U);
              })
              .fail(function () {
                D(U);
              });
        }
        function D(U) {
          var Y = U.form,
            p = U.redirect,
            y = U.success;
          if (y && p) {
            Ni.location(p);
            return;
          }
          U.done.toggle(y),
            U.fail.toggle(!y),
            y ? U.done.focus() : U.fail.focus(),
            Y.toggle(!y),
            M(U);
        }
        function X(U) {
          U.evt && U.evt.preventDefault(), (U.evt = null);
        }
        function B(U, Y) {
          if (!Y.fileUploads || !Y.fileUploads[U]) return;
          var p,
            y = e(Y.fileUploads[U]),
            _ = y.find("> .w-file-upload-default"),
            l = y.find("> .w-file-upload-uploading"),
            k = y.find("> .w-file-upload-success"),
            V = y.find("> .w-file-upload-error"),
            S = _.find(".w-file-upload-input"),
            ie = _.find(".w-file-upload-label"),
            fe = ie.children(),
            oe = V.find(".w-file-upload-error-msg"),
            g = k.find(".w-file-upload-file"),
            W = k.find(".w-file-remove-link"),
            Q = g.find(".w-file-upload-file-name"),
            j = oe.attr("data-w-size-error"),
            de = oe.attr("data-w-type-error"),
            Fe = oe.attr("data-w-generic-error");
          if (
            (v ||
              ie.on("click keydown", function (w) {
                (w.type === "keydown" && w.which !== 13 && w.which !== 32) ||
                  (w.preventDefault(), S.click());
              }),
            ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            v)
          )
            S.on("click", function (w) {
              w.preventDefault();
            }),
              ie.on("click", function (w) {
                w.preventDefault();
              }),
              fe.on("click", function (w) {
                w.preventDefault();
              });
          else {
            W.on("click keydown", function (w) {
              if (w.type === "keydown") {
                if (w.which !== 13 && w.which !== 32) return;
                w.preventDefault();
              }
              S.removeAttr("data-value"),
                S.val(""),
                Q.html(""),
                _.toggle(!0),
                k.toggle(!1),
                ie.focus();
            }),
              S.on("change", function (w) {
                (p = w.target && w.target.files && w.target.files[0]),
                  p &&
                    (_.toggle(!1),
                    V.toggle(!1),
                    l.toggle(!0),
                    l.focus(),
                    Q.text(p.name),
                    L() || F(Y),
                    (Y.fileUploads[U].uploading = !0),
                    te(p, b));
              });
            var He = ie.outerHeight();
            S.height(He), S.width(1);
          }
          function f(w) {
            var P = w.responseJSON && w.responseJSON.msg,
              Z = Fe;
            typeof P == "string" && P.indexOf("InvalidFileTypeError") === 0
              ? (Z = de)
              : typeof P == "string" &&
                P.indexOf("MaxFileSizeError") === 0 &&
                (Z = j),
              oe.text(Z),
              S.removeAttr("data-value"),
              S.val(""),
              l.toggle(!1),
              _.toggle(!0),
              V.toggle(!0),
              V.focus(),
              (Y.fileUploads[U].uploading = !1),
              L() || M(Y);
          }
          function b(w, P) {
            if (w) return f(w);
            var Z = P.fileName,
              ae = P.postData,
              ve = P.fileId,
              z = P.s3Url;
            S.attr("data-value", ve), re(z, ae, p, Z, A);
          }
          function A(w) {
            if (w) return f(w);
            l.toggle(!1),
              k.css("display", "inline-block"),
              k.focus(),
              (Y.fileUploads[U].uploading = !1),
              L() || M(Y);
          }
          function L() {
            var w = (Y.fileUploads && Y.fileUploads.toArray()) || [];
            return w.some(function (P) {
              return P.uploading;
            });
          }
        }
        function te(U, Y) {
          var p = new URLSearchParams({ name: U.name, size: U.size });
          e.ajax({ type: "GET", url: `${I}?${p}`, crossDomain: !0 })
            .done(function (y) {
              Y(null, y);
            })
            .fail(function (y) {
              Y(y);
            });
        }
        function re(U, Y, p, y, _) {
          var l = new FormData();
          for (var k in Y) l.append(k, Y[k]);
          l.append("file", p, y),
            e
              .ajax({
                type: "POST",
                url: U,
                data: l,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                _(null);
              })
              .fail(function (V) {
                _(V);
              });
        }
        return r;
      })
    );
  });
  var X_ = c((lz, H_) => {
    "use strict";
    var St = ke(),
      UV = br(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    St.define(
      "navbar",
      (H_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          u,
          s,
          d,
          m,
          h = St.env(),
          v = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          O = "w--open",
          I = "w--nav-dropdown-open",
          C = "w--nav-dropdown-toggle-open",
          T = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          R = UV.triggers,
          q = e();
        (r.ready = r.design = r.preview = M),
          (r.destroy = function () {
            (q = e()), F(), s && s.length && s.each(J);
          });
        function M() {
          (d = h && St.env("design")),
            (m = St.env("editor")),
            (u = e(document.body)),
            (s = o.find(E)),
            s.length && (s.each($), F(), H());
        }
        function F() {
          St.resize.off(K);
        }
        function H() {
          St.resize.on(K);
        }
        function K() {
          s.each(_);
        }
        function $(g, W) {
          var Q = e(W),
            j = e.data(W, E);
          j ||
            (j = e.data(W, E, {
              open: !1,
              el: Q,
              config: {},
              selectedIdx: -1,
            })),
            (j.menu = Q.find(".w-nav-menu")),
            (j.links = j.menu.find(".w-nav-link")),
            (j.dropdowns = j.menu.find(".w-dropdown")),
            (j.dropdownToggle = j.menu.find(".w-dropdown-toggle")),
            (j.dropdownList = j.menu.find(".w-dropdown-list")),
            (j.button = Q.find(".w-nav-button")),
            (j.container = Q.find(".w-container")),
            (j.overlayContainerId = "w-nav-overlay-" + g),
            (j.outside = p(j));
          var de = Q.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            j.button.attr("style", "-webkit-user-select: text;"),
            j.button.attr("aria-label") == null &&
              j.button.attr("aria-label", "menu"),
            j.button.attr("role", "button"),
            j.button.attr("tabindex", "0"),
            j.button.attr("aria-controls", j.overlayContainerId),
            j.button.attr("aria-haspopup", "menu"),
            j.button.attr("aria-expanded", "false"),
            j.el.off(E),
            j.button.off(E),
            j.menu.off(E),
            x(j),
            d
              ? (ee(j), j.el.on("setting" + E, D(j)))
              : (G(j),
                j.button.on("click" + E, U(j)),
                j.menu.on("click" + E, "a", Y(j)),
                j.button.on("keydown" + E, X(j)),
                j.el.on("keydown" + E, B(j))),
            _(g, W);
        }
        function J(g, W) {
          var Q = e.data(W, E);
          Q && (ee(Q), e.removeData(W, E));
        }
        function ee(g) {
          g.overlay && (oe(g, !0), g.overlay.remove(), (g.overlay = null));
        }
        function G(g) {
          g.overlay ||
            ((g.overlay = e(v).appendTo(g.el)),
            g.overlay.attr("id", g.overlayContainerId),
            (g.parent = g.menu.parent()),
            oe(g, !0));
        }
        function x(g) {
          var W = {},
            Q = g.config || {},
            j = (W.animation = g.el.attr("data-animation") || "default");
          (W.animOver = /^over/.test(j)),
            (W.animDirect = /left$/.test(j) ? -1 : 1),
            Q.animation !== j && g.open && t.defer(re, g),
            (W.easing = g.el.attr("data-easing") || "ease"),
            (W.easing2 = g.el.attr("data-easing2") || "ease");
          var de = g.el.attr("data-duration");
          (W.duration = de != null ? Number(de) : 400),
            (W.docHeight = g.el.attr("data-doc-height")),
            (g.config = W);
        }
        function D(g) {
          return function (W, Q) {
            Q = Q || {};
            var j = i.width();
            x(g),
              Q.open === !0 && ie(g, !0),
              Q.open === !1 && oe(g, !0),
              g.open &&
                t.defer(function () {
                  j !== i.width() && re(g);
                });
          };
        }
        function X(g) {
          return function (W) {
            switch (W.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return U(g)(), W.preventDefault(), W.stopPropagation();
              case Se.ESCAPE:
                return oe(g), W.preventDefault(), W.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return g.open
                  ? (W.keyCode === Se.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    te(g),
                    W.preventDefault(),
                    W.stopPropagation())
                  : (W.preventDefault(), W.stopPropagation());
            }
          };
        }
        function B(g) {
          return function (W) {
            if (g.open)
              switch (
                ((g.selectedIdx = g.links.index(document.activeElement)),
                W.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    W.keyCode === Se.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    te(g),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(g),
                    g.button.focus(),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (g.selectedIdx = Math.max(-1, g.selectedIdx - 1)),
                    te(g),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (g.selectedIdx = Math.min(
                      g.links.length - 1,
                      g.selectedIdx + 1
                    )),
                    te(g),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
              }
          };
        }
        function te(g) {
          if (g.links[g.selectedIdx]) {
            var W = g.links[g.selectedIdx];
            W.focus(), Y(W);
          }
        }
        function re(g) {
          g.open && (oe(g, !0), ie(g, !0));
        }
        function U(g) {
          return a(function () {
            g.open ? oe(g) : ie(g);
          });
        }
        function Y(g) {
          return function (W) {
            var Q = e(this),
              j = Q.attr("href");
            if (!St.validClick(W.currentTarget)) {
              W.preventDefault();
              return;
            }
            j && j.indexOf("#") === 0 && g.open && oe(g);
          };
        }
        function p(g) {
          return (
            g.outside && o.off("click" + E, g.outside),
            function (W) {
              var Q = e(W.target);
              (m && Q.closest(".w-editor-bem-EditorOverlay").length) || y(g, Q);
            }
          );
        }
        var y = a(function (g, W) {
          if (g.open) {
            var Q = W.closest(".w-nav-menu");
            g.menu.is(Q) || oe(g);
          }
        });
        function _(g, W) {
          var Q = e.data(W, E),
            j = (Q.collapsed = Q.button.css("display") !== "none");
          if ((Q.open && !j && !d && oe(Q, !0), Q.container.length)) {
            var de = k(Q);
            Q.links.each(de), Q.dropdowns.each(de);
          }
          Q.open && fe(Q);
        }
        var l = "max-width";
        function k(g) {
          var W = g.container.css(l);
          return (
            W === "none" && (W = ""),
            function (Q, j) {
              (j = e(j)), j.css(l, ""), j.css(l) === "none" && j.css(l, W);
            }
          );
        }
        function V(g, W) {
          W.setAttribute("data-nav-menu-open", "");
        }
        function S(g, W) {
          W.removeAttribute("data-nav-menu-open");
        }
        function ie(g, W) {
          if (g.open) return;
          (g.open = !0),
            g.menu.each(V),
            g.links.addClass(N),
            g.dropdowns.addClass(I),
            g.dropdownToggle.addClass(C),
            g.dropdownList.addClass(T),
            g.button.addClass(O);
          var Q = g.config,
            j = Q.animation;
          (j === "none" || !n.support.transform || Q.duration <= 0) && (W = !0);
          var de = fe(g),
            Fe = g.menu.outerHeight(!0),
            He = g.menu.outerWidth(!0),
            f = g.el.height(),
            b = g.el[0];
          if (
            (_(0, b),
            R.intro(0, b),
            St.redraw.up(),
            d || o.on("click" + E, g.outside),
            W)
          ) {
            w();
            return;
          }
          var A = "transform " + Q.duration + "ms " + Q.easing;
          if (
            (g.overlay &&
              ((q = g.menu.prev()), g.overlay.show().append(g.menu)),
            Q.animOver)
          ) {
            n(g.menu)
              .add(A)
              .set({ x: Q.animDirect * He, height: de })
              .start({ x: 0 })
              .then(w),
              g.overlay && g.overlay.width(He);
            return;
          }
          var L = f + Fe;
          n(g.menu).add(A).set({ y: -L }).start({ y: 0 }).then(w);
          function w() {
            g.button.attr("aria-expanded", "true");
          }
        }
        function fe(g) {
          var W = g.config,
            Q = W.docHeight ? o.height() : u.height();
          return (
            W.animOver
              ? g.menu.height(Q)
              : g.el.css("position") !== "fixed" && (Q -= g.el.outerHeight(!0)),
            g.overlay && g.overlay.height(Q),
            Q
          );
        }
        function oe(g, W) {
          if (!g.open) return;
          (g.open = !1), g.button.removeClass(O);
          var Q = g.config;
          if (
            ((Q.animation === "none" ||
              !n.support.transform ||
              Q.duration <= 0) &&
              (W = !0),
            R.outro(0, g.el[0]),
            o.off("click" + E, g.outside),
            W)
          ) {
            n(g.menu).stop(), b();
            return;
          }
          var j = "transform " + Q.duration + "ms " + Q.easing2,
            de = g.menu.outerHeight(!0),
            Fe = g.menu.outerWidth(!0),
            He = g.el.height();
          if (Q.animOver) {
            n(g.menu)
              .add(j)
              .start({ x: Fe * Q.animDirect })
              .then(b);
            return;
          }
          var f = He + de;
          n(g.menu).add(j).start({ y: -f }).then(b);
          function b() {
            g.menu.height(""),
              n(g.menu).set({ x: 0, y: 0 }),
              g.menu.each(S),
              g.links.removeClass(N),
              g.dropdowns.removeClass(I),
              g.dropdownToggle.removeClass(C),
              g.dropdownList.removeClass(T),
              g.overlay &&
                g.overlay.children().length &&
                (q.length ? g.menu.insertAfter(q) : g.menu.prependTo(g.parent),
                g.overlay.attr("style", "").hide()),
              g.el.triggerHandler("w-close"),
              g.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var K_ = c((fz, z_) => {
    "use strict";
    var Ct = ke(),
      VV = br(),
      dt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      j_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Ct.define(
      "slider",
      (z_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          u = Ct.env(),
          s = ".w-slider",
          d = '<div class="w-slider-dot" data-wf-ignore />',
          m =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          h = "w-slider-force-show",
          v = VV.triggers,
          E,
          O = !1;
        (r.ready = function () {
          (a = Ct.env("design")), I();
        }),
          (r.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (r.preview = function () {
            (a = !1), I();
          }),
          (r.redraw = function () {
            (O = !0), I(), (O = !1);
          }),
          (r.destroy = C);
        function I() {
          (o = i.find(s)), o.length && (o.each(R), !E && (C(), T()));
        }
        function C() {
          Ct.resize.off(N), Ct.redraw.off(r.redraw);
        }
        function T() {
          Ct.resize.on(N), Ct.redraw.on(r.redraw);
        }
        function N() {
          o.filter(":visible").each(B);
        }
        function R(p, y) {
          var _ = e(y),
            l = e.data(y, s);
          l ||
            (l = e.data(y, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: _,
              config: {},
            })),
            (l.mask = _.children(".w-slider-mask")),
            (l.left = _.children(".w-slider-arrow-left")),
            (l.right = _.children(".w-slider-arrow-right")),
            (l.nav = _.children(".w-slider-nav")),
            (l.slides = l.mask.children(".w-slide")),
            l.slides.each(v.reset),
            O && (l.maskWidth = 0),
            _.attr("role") === void 0 && _.attr("role", "region"),
            _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
          var k = l.mask.attr("id");
          if (
            (k || ((k = "w-slider-mask-" + p), l.mask.attr("id", k)),
            !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(m).appendTo(l.mask)),
            l.left.attr("role", "button"),
            l.left.attr("tabindex", "0"),
            l.left.attr("aria-controls", k),
            l.left.attr("aria-label") === void 0 &&
              l.left.attr("aria-label", "previous slide"),
            l.right.attr("role", "button"),
            l.right.attr("tabindex", "0"),
            l.right.attr("aria-controls", k),
            l.right.attr("aria-label") === void 0 &&
              l.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            l.left.hide(), l.right.hide(), l.nav.hide(), (E = !0);
            return;
          }
          l.el.off(s),
            l.left.off(s),
            l.right.off(s),
            l.nav.off(s),
            q(l),
            a
              ? (l.el.on("setting" + s, x(l)), G(l), (l.hasTimer = !1))
              : (l.el.on("swipe" + s, x(l)),
                l.left.on("click" + s, K(l)),
                l.right.on("click" + s, $(l)),
                l.left.on("keydown" + s, H(l, K)),
                l.right.on("keydown" + s, H(l, $)),
                l.nav.on("keydown" + s, "> div", x(l)),
                l.config.autoplay &&
                  !l.hasTimer &&
                  ((l.hasTimer = !0), (l.timerCount = 1), ee(l)),
                l.el.on("mouseenter" + s, F(l, !0, "mouse")),
                l.el.on("focusin" + s, F(l, !0, "keyboard")),
                l.el.on("mouseleave" + s, F(l, !1, "mouse")),
                l.el.on("focusout" + s, F(l, !1, "keyboard"))),
            l.nav.on("click" + s, "> div", x(l)),
            u ||
              l.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var V = _.filter(":hidden");
          V.addClass(h);
          var S = _.parents(":hidden");
          S.addClass(h), O || B(p, y), V.removeClass(h), S.removeClass(h);
        }
        function q(p) {
          var y = {};
          (y.crossOver = 0),
            (y.animation = p.el.attr("data-animation") || "slide"),
            y.animation === "outin" &&
              ((y.animation = "cross"), (y.crossOver = 0.5)),
            (y.easing = p.el.attr("data-easing") || "ease");
          var _ = p.el.attr("data-duration");
          if (
            ((y.duration = _ != null ? parseInt(_, 10) : 500),
            M(p.el.attr("data-infinite")) && (y.infinite = !0),
            M(p.el.attr("data-disable-swipe")) && (y.disableSwipe = !0),
            M(p.el.attr("data-hide-arrows"))
              ? (y.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            M(p.el.attr("data-autoplay")))
          ) {
            (y.autoplay = !0),
              (y.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (y.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var l = "mousedown" + s + " touchstart" + s;
            a ||
              p.el.off(l).one(l, function () {
                G(p);
              });
          }
          var k = p.right.width();
          (y.edge = k ? k + 40 : 100), (p.config = y);
        }
        function M(p) {
          return p === "1" || p === "true";
        }
        function F(p, y, _) {
          return function (l) {
            if (y) p.hasFocus[_] = y;
            else if (
              e.contains(p.el.get(0), l.relatedTarget) ||
              ((p.hasFocus[_] = y),
              (p.hasFocus.mouse && _ === "keyboard") ||
                (p.hasFocus.keyboard && _ === "mouse"))
            )
              return;
            y
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && G(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && ee(p));
          };
        }
        function H(p, y) {
          return function (_) {
            switch (_.keyCode) {
              case dt.SPACE:
              case dt.ENTER:
                return y(p)(), _.preventDefault(), _.stopPropagation();
            }
          };
        }
        function K(p) {
          return function () {
            X(p, { index: p.index - 1, vector: -1 });
          };
        }
        function $(p) {
          return function () {
            X(p, { index: p.index + 1, vector: 1 });
          };
        }
        function J(p, y) {
          var _ = null;
          y === p.slides.length && (I(), te(p)),
            t.each(p.anchors, function (l, k) {
              e(l.els).each(function (V, S) {
                e(S).index() === y && (_ = k);
              });
            }),
            _ != null && X(p, { index: _, immediate: !0 });
        }
        function ee(p) {
          G(p);
          var y = p.config,
            _ = y.timerMax;
          (_ && p.timerCount++ > _) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || ($(p)(), ee(p));
            }, y.delay));
        }
        function G(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function x(p) {
          return function (y, _) {
            _ = _ || {};
            var l = p.config;
            if (a && y.type === "setting") {
              if (_.select === "prev") return K(p)();
              if (_.select === "next") return $(p)();
              if ((q(p), te(p), _.select == null)) return;
              J(p, _.select);
              return;
            }
            if (y.type === "swipe")
              return l.disableSwipe || Ct.env("editor")
                ? void 0
                : _.direction === "left"
                ? $(p)()
                : _.direction === "right"
                ? K(p)()
                : void 0;
            if (p.nav.has(y.target).length) {
              var k = e(y.target).index();
              if (
                (y.type === "click" && X(p, { index: k }), y.type === "keydown")
              )
                switch (y.keyCode) {
                  case dt.ENTER:
                  case dt.SPACE: {
                    X(p, { index: k }), y.preventDefault();
                    break;
                  }
                  case dt.ARROW_LEFT:
                  case dt.ARROW_UP: {
                    D(p.nav, Math.max(k - 1, 0)), y.preventDefault();
                    break;
                  }
                  case dt.ARROW_RIGHT:
                  case dt.ARROW_DOWN: {
                    D(p.nav, Math.min(k + 1, p.pages)), y.preventDefault();
                    break;
                  }
                  case dt.HOME: {
                    D(p.nav, 0), y.preventDefault();
                    break;
                  }
                  case dt.END: {
                    D(p.nav, p.pages), y.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function D(p, y) {
          var _ = p.children().eq(y).focus();
          p.children().not(_);
        }
        function X(p, y) {
          y = y || {};
          var _ = p.config,
            l = p.anchors;
          p.previous = p.index;
          var k = y.index,
            V = {};
          k < 0
            ? ((k = l.length - 1),
              _.infinite &&
                ((V.x = -p.endX), (V.from = 0), (V.to = l[0].width)))
            : k >= l.length &&
              ((k = 0),
              _.infinite &&
                ((V.x = l[l.length - 1].width),
                (V.from = -l[l.length - 1].x),
                (V.to = V.from - V.x))),
            (p.index = k);
          var S = p.nav
            .children()
            .eq(k)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(S)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            _.hideArrows &&
              (p.index === l.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var ie = p.offsetX || 0,
            fe = (p.offsetX = -l[p.index].x),
            oe = { x: fe, opacity: 1, visibility: "" },
            g = e(l[p.index].els),
            W = e(l[p.previous] && l[p.previous].els),
            Q = p.slides.not(g),
            j = _.animation,
            de = _.easing,
            Fe = Math.round(_.duration),
            He = y.vector || (p.index > p.previous ? 1 : -1),
            f = "opacity " + Fe + "ms " + de,
            b = "transform " + Fe + "ms " + de;
          if (
            (g.find(j_).removeAttr("tabindex"),
            g.removeAttr("aria-hidden"),
            g.find("*").removeAttr("aria-hidden"),
            Q.find(j_).attr("tabindex", "-1"),
            Q.attr("aria-hidden", "true"),
            Q.find("*").attr("aria-hidden", "true"),
            a || (g.each(v.intro), Q.each(v.outro)),
            y.immediate && !O)
          ) {
            n(g).set(oe), w();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${k + 1} of ${l.length}.`),
            j === "cross")
          ) {
            var A = Math.round(Fe - Fe * _.crossOver),
              L = Math.round(Fe - A);
            (f = "opacity " + A + "ms " + de),
              n(W).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(g)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .wait(L)
                .then({ opacity: 1 })
                .then(w);
            return;
          }
          if (j === "fade") {
            n(W).set({ visibility: "" }).stop(),
              n(g)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(w);
            return;
          }
          if (j === "over") {
            (oe = { x: p.endX }),
              n(W).set({ visibility: "" }).stop(),
              n(g)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: fe + l[p.index].width * He,
                })
                .add(b)
                .start({ x: fe })
                .then(w);
            return;
          }
          _.infinite && V.x
            ? (n(p.slides.not(W))
                .set({ visibility: "", x: V.x })
                .add(b)
                .start({ x: fe }),
              n(W).set({ visibility: "", x: V.from }).add(b).start({ x: V.to }),
              (p.shifted = W))
            : (_.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: ie }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(b).start({ x: fe }));
          function w() {
            (g = e(l[p.index].els)),
              (Q = p.slides.not(g)),
              j !== "slide" && (oe.visibility = "hidden"),
              n(Q).set(oe);
          }
        }
        function B(p, y) {
          var _ = e.data(y, s);
          if (_) {
            if (U(_)) return te(_);
            a && Y(_) && te(_);
          }
        }
        function te(p) {
          var y = 1,
            _ = 0,
            l = 0,
            k = 0,
            V = p.maskWidth,
            S = V - p.config.edge;
          S < 0 && (S = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (fe, oe) {
              l - _ > S &&
                (y++,
                (_ += V),
                (p.anchors[y - 1] = { els: [], x: l, width: 0 })),
                (k = e(oe).outerWidth(!0)),
                (l += k),
                (p.anchors[y - 1].width += k),
                p.anchors[y - 1].els.push(oe);
              var g = fe + 1 + " of " + p.slides.length;
              e(oe).attr("aria-label", g), e(oe).attr("role", "group");
            }),
            (p.endX = l),
            a && (p.pages = null),
            p.nav.length && p.pages !== y && ((p.pages = y), re(p));
          var ie = p.index;
          ie >= y && (ie = y - 1), X(p, { immediate: !0, index: ie });
        }
        function re(p) {
          var y = [],
            _,
            l = p.el.attr("data-nav-spacing");
          l && (l = parseFloat(l) + "px");
          for (var k = 0, V = p.pages; k < V; k++)
            (_ = e(d)),
              _.attr("aria-label", "Show slide " + (k + 1) + " of " + V)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && _.text(k + 1),
              l != null && _.css({ "margin-left": l, "margin-right": l }),
              y.push(_);
          p.nav.empty().append(y);
        }
        function U(p) {
          var y = p.mask.width();
          return p.maskWidth !== y ? ((p.maskWidth = y), !0) : !1;
        }
        function Y(p) {
          var y = 0;
          return (
            p.slides.each(function (_, l) {
              y += e(l).outerWidth(!0);
            }),
            p.slidesWidth !== y ? ((p.slidesWidth = y), !0) : !1
          );
        }
        return r;
      })
    );
  });
  js();
  Ks();
  $s();
  Js();
  br();
  L_();
  P_();
  F_();
  D_();
  U_();
  B_();
  X_();
  K_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|da8982de-2742-e461-37c2-43341e33472c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|da8982de-2742-e461-37c2-43341e33472c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716216915720,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".topheading",
        originalId:
          "66107d2bf5ffaba9566da76d|d8949ed3-08ae-5b66-dde9-b1230d157261",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".topheading",
          originalId:
            "66107d2bf5ffaba9566da76d|d8949ed3-08ae-5b66-dde9-b1230d157261",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1714654864027,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".sg-services-block",
        originalId:
          "663e288837bc324d1efdd991|f51dc817-3189-740d-9e91-f8875afc7ffb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".sg-services-block",
          originalId:
            "663e288837bc324d1efdd991|f51dc817-3189-740d-9e91-f8875afc7ffb",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716168011311,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".sg-services-block",
        originalId:
          "663e288837bc324d1efdd991|f51dc817-3189-740d-9e91-f8875afc7ffb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".sg-services-block",
          originalId:
            "663e288837bc324d1efdd991|f51dc817-3189-740d-9e91-f8875afc7ffb",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716168011360,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|92761ba0-7d5b-22d7-8a67-83b06ec59909",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|92761ba0-7d5b-22d7-8a67-83b06ec59909",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1716419084557,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".accordion-title-name",
        originalId:
          "6664c3d1bf6041a7dd888940|104a8c69-65be-db22-1b9c-2f24d11bbe84",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".accordion-title-name",
          originalId:
            "6664c3d1bf6041a7dd888940|104a8c69-65be-db22-1b9c-2f24d11bbe84",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718157147281,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-103",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".accordion-title-name",
        originalId:
          "6664c3d1bf6041a7dd888940|104a8c69-65be-db22-1b9c-2f24d11bbe84",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".accordion-title-name",
          originalId:
            "6664c3d1bf6041a7dd888940|104a8c69-65be-db22-1b9c-2f24d11bbe84",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718157147318,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-175",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button-link-text",
        originalId:
          "65980c3daeb10bfdea14f492|e6b2c50b-fc29-90b1-ca30-02f1dee51516",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button-link-text",
          originalId:
            "65980c3daeb10bfdea14f492|e6b2c50b-fc29-90b1-ca30-02f1dee51516",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703861654807,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1013",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button-link-text",
        originalId:
          "65980c3daeb10bfdea14f492|e6b2c50b-fc29-90b1-ca30-02f1dee51516",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button-link-text",
          originalId:
            "65980c3daeb10bfdea14f492|e6b2c50b-fc29-90b1-ca30-02f1dee51516",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703861654812,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|d39d61f6-0222-d799-0abf-459bb5b1e219",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|d39d61f6-0222-d799-0abf-459bb5b1e219",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718213690273,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1007",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|d39d61f6-0222-d799-0abf-459bb5b1e21c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|d39d61f6-0222-d799-0abf-459bb5b1e21c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718213690273,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-278",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|fe5a3df4-b89a-448e-d079-0fc329545d19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|fe5a3df4-b89a-448e-d079-0fc329545d19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718044897328,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-297",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonials-card",
        originalId:
          "61a2838778986a5a956527ea|cdbcc0d0-42ad-896a-7412-7653aa17024f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonials-card",
          originalId:
            "61a2838778986a5a956527ea|cdbcc0d0-42ad-896a-7412-7653aa17024f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1578755237356,
    },
    "e-328": {
      id: "e-328",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-330",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".big-link-services",
        originalId:
          "66464859686cc5486fe85ffd|7c5284d4-4b9d-9d5b-3955-ed39b2adc126",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".big-link-services",
          originalId:
            "66464859686cc5486fe85ffd|7c5284d4-4b9d-9d5b-3955-ed39b2adc126",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716239737688,
    },
    "e-330": {
      id: "e-330",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-328",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".big-link-services",
        originalId:
          "66464859686cc5486fe85ffd|7c5284d4-4b9d-9d5b-3955-ed39b2adc126",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".big-link-services",
          originalId:
            "66464859686cc5486fe85ffd|7c5284d4-4b9d-9d5b-3955-ed39b2adc126",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716239737690,
    },
    "e-367": {
      id: "e-367",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-368",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|fe5a3df4-b89a-448e-d079-0fc329545d19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|fe5a3df4-b89a-448e-d079-0fc329545d19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718223044403,
    },
    "e-381": {
      id: "e-381",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-382",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|9c82d576-8a20-60c5-a3a3-da545be5eb48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|9c82d576-8a20-60c5-a3a3-da545be5eb48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718223044403,
    },
    "e-413": {
      id: "e-413",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-414",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|a172077c-53a4-96d1-6be8-3f8794ee14c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|a172077c-53a4-96d1-6be8-3f8794ee14c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718223300901,
    },
    "e-425": {
      id: "e-425",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-426",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|f86f3bf9-4978-a857-d8ee-9c1b8ef2216d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|f86f3bf9-4978-a857-d8ee-9c1b8ef2216d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718223428841,
    },
    "e-427": {
      id: "e-427",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-428",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|d27620de-274d-4063-4574-6cdb54e82820",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|d27620de-274d-4063-4574-6cdb54e82820",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718223445585,
    },
    "e-429": {
      id: "e-429",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-430",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|825e5b4e-06ec-978c-b0f5-daebb8df5543",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|825e5b4e-06ec-978c-b0f5-daebb8df5543",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718223447338,
    },
    "e-431": {
      id: "e-431",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-432",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|0c5c9f28-adf6-3e76-3602-d76de0a16ddd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|0c5c9f28-adf6-3e76-3602-d76de0a16ddd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718223453496,
    },
    "e-513": {
      id: "e-513",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-514",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|4408fac3-97c5-4cd6-9e30-25186869c6e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|4408fac3-97c5-4cd6-9e30-25186869c6e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718235803999,
    },
    "e-573": {
      id: "e-573",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-574",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|4408fac3-97c5-4cd6-9e30-25186869c6e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|4408fac3-97c5-4cd6-9e30-25186869c6e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718236867054,
    },
    "e-609": {
      id: "e-609",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-610",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ae5792f7f899f514e27ae|4408fac3-97c5-4cd6-9e30-25186869c6e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ae5792f7f899f514e27ae|4408fac3-97c5-4cd6-9e30-25186869c6e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718281594375,
    },
    "e-617": {
      id: "e-617",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-618",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ae5792f7f899f514e27ae|86f0b003-3da5-1fe9-ebf5-5456ac856206",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ae5792f7f899f514e27ae|86f0b003-3da5-1fe9-ebf5-5456ac856206",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718281594375,
    },
    "e-651": {
      id: "e-651",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-652",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|fe5a3df4-b89a-448e-d079-0fc329545d19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|fe5a3df4-b89a-448e-d079-0fc329545d19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718300797968,
    },
    "e-753": {
      id: "e-753",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-754",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0eb44931-446c-304b-2449-6239f042db22",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0eb44931-446c-304b-2449-6239f042db22",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718301224041,
    },
    "e-789": {
      id: "e-789",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-790",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|882c2a16-e56b-182c-6ceb-67e4eef889f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|882c2a16-e56b-182c-6ceb-67e4eef889f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718302012077,
    },
    "e-791": {
      id: "e-791",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-792",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|882c2a16-e56b-182c-6ceb-67e4eef889fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|882c2a16-e56b-182c-6ceb-67e4eef889fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718302012077,
    },
    "e-899": {
      id: "e-899",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-900",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|bcd5a2ec-a649-ffdf-b3ec-642a054aceb9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|bcd5a2ec-a649-ffdf-b3ec-642a054aceb9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718377826772,
    },
    "e-901": {
      id: "e-901",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-902",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|bcd5a2ec-a649-ffdf-b3ec-642a054acebc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|bcd5a2ec-a649-ffdf-b3ec-642a054acebc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718377826772,
    },
    "e-909": {
      id: "e-909",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-910",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c5732ed4dab8c1c6c3027|60befc8c-d31a-3615-013e-5bf695fc8611",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c5732ed4dab8c1c6c3027|60befc8c-d31a-3615-013e-5bf695fc8611",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718377848243,
    },
    "e-921": {
      id: "e-921",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-922",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|eb7103a6-8e26-2064-ea3b-576f3a876ca7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|eb7103a6-8e26-2064-ea3b-576f3a876ca7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718378456520,
    },
    "e-942": {
      id: "e-942",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-943",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|882c2a16-e56b-182c-6ceb-67e4eef889f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|882c2a16-e56b-182c-6ceb-67e4eef889f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718382711655,
    },
    "e-944": {
      id: "e-944",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-945",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|882c2a16-e56b-182c-6ceb-67e4eef889fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|882c2a16-e56b-182c-6ceb-67e4eef889fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718382711655,
    },
    "e-994": {
      id: "e-994",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-995",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|d4718b7d-a5d5-5f60-d03a-5a8defd6afa9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|d4718b7d-a5d5-5f60-d03a-5a8defd6afa9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718383677632,
    },
    "e-996": {
      id: "e-996",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-997",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|28d2738c-7abe-bc43-4f70-330a516c3300",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|28d2738c-7abe-bc43-4f70-330a516c3300",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718383678082,
    },
    "e-998": {
      id: "e-998",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-999",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|4a5d3895-9819-b8f0-beed-f4da3f8d3b88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|4a5d3895-9819-b8f0-beed-f4da3f8d3b88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718383678335,
    },
    "e-1000": {
      id: "e-1000",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1001",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|6a060b0c-542f-fd7d-1441-8b6fc03f2b75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|6a060b0c-542f-fd7d-1441-8b6fc03f2b75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1718383678868,
    },
    "e-1060": {
      id: "e-1060",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1061",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|e91916c9-e552-7852-c078-e2515712f5f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|e91916c9-e552-7852-c078-e2515712f5f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718487729728,
    },
    "e-1080": {
      id: "e-1080",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1081",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|ffbbeb93-97a8-7b19-83c8-9fdb0ab9cfa1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|ffbbeb93-97a8-7b19-83c8-9fdb0ab9cfa1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718487932020,
    },
    "e-1084": {
      id: "e-1084",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1085",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|c1bead92-5c83-85ee-82c6-766924c949a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|c1bead92-5c83-85ee-82c6-766924c949a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1718544564157,
    },
    "e-1088": {
      id: "e-1088",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1089",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|728b472b-5c25-4a2c-074b-de9aba20fa8d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|728b472b-5c25-4a2c-074b-de9aba20fa8d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718549370096,
    },
    "e-1092": {
      id: "e-1092",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1093",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|014efd98-b38d-c8a9-bd09-c39d462c367d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|014efd98-b38d-c8a9-bd09-c39d462c367d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718564070707,
    },
    "e-1094": {
      id: "e-1094",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1095",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|014efd98-b38d-c8a9-bd09-c39d462c3680",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|014efd98-b38d-c8a9-bd09-c39d462c3680",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718564070707,
    },
    "e-1096": {
      id: "e-1096",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1097",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|15973367-9d2e-48d4-a902-6b1d0d888985",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|15973367-9d2e-48d4-a902-6b1d0d888985",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718565332007,
    },
    "e-1106": {
      id: "e-1106",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|da8982de-2742-e461-37c2-43341e334720",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|da8982de-2742-e461-37c2-43341e334720",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718569188328,
    },
    "e-1107": {
      id: "e-1107",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|da8982de-2742-e461-37c2-43341e334727",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|da8982de-2742-e461-37c2-43341e334727",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718569388173,
    },
    "e-1109": {
      id: "e-1109",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1110",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|da8982de-2742-e461-37c2-43341e334729",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|da8982de-2742-e461-37c2-43341e334729",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718569522018,
    },
    "e-1111": {
      id: "e-1111",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|f7e99cd7-6e71-1606-06fc-d86d5a6d1d9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|f7e99cd7-6e71-1606-06fc-d86d5a6d1d9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718569539017,
    },
    "e-1113": {
      id: "e-1113",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|6fee2f59-46a0-708d-732e-212235f69c0e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|6fee2f59-46a0-708d-732e-212235f69c0e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718569848815,
    },
    "e-1117": {
      id: "e-1117",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570239435,
    },
    "e-1119": {
      id: "e-1119",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570247384,
    },
    "e-1121": {
      id: "e-1121",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1122",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570255484,
    },
    "e-1123": {
      id: "e-1123",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570265786,
    },
    "e-1125": {
      id: "e-1125",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1126",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|2dc44cfe-923e-1f17-f583-40675934b184",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|2dc44cfe-923e-1f17-f583-40675934b184",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570274192,
    },
    "e-1127": {
      id: "e-1127",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1128",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|2dc44cfe-923e-1f17-f583-40675934b186",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|2dc44cfe-923e-1f17-f583-40675934b186",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570281604,
    },
    "e-1129": {
      id: "e-1129",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1130",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|2dc44cfe-923e-1f17-f583-40675934b188",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|2dc44cfe-923e-1f17-f583-40675934b188",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570289685,
    },
    "e-1131": {
      id: "e-1131",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1132",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|2dc44cfe-923e-1f17-f583-40675934b18a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|2dc44cfe-923e-1f17-f583-40675934b18a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570310272,
    },
    "e-1135": {
      id: "e-1135",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-33", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f350",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f350",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-33-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718570418666,
    },
    "e-1136": {
      id: "e-1136",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-34", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e65",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e65",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-34-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718570736749,
    },
    "e-1137": {
      id: "e-1137",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e8d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|105ccd7b-8d26-2c68-6ae5-1e511b043e8d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570788431,
    },
    "e-1139": {
      id: "e-1139",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1140",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|3af79f0c-5801-b6fe-a151-e56884f5ec24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|3af79f0c-5801-b6fe-a151-e56884f5ec24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718570903204,
    },
    "e-1141": {
      id: "e-1141",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f358",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f358",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571023960,
    },
    "e-1143": {
      id: "e-1143",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1144",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f35b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f35b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571031281,
    },
    "e-1145": {
      id: "e-1145",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f35d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f35d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571039498,
    },
    "e-1147": {
      id: "e-1147",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1148",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f35f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|7e9034f2-c4a0-7ed1-0b97-d9156a81f35f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571047129,
    },
    "e-1149": {
      id: "e-1149",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|549506fd-1f40-f21d-288c-0125a93de215",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|549506fd-1f40-f21d-288c-0125a93de215",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571063422,
    },
    "e-1151": {
      id: "e-1151",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|101b2ded-aa8c-8c42-bc29-1dc7cf76acc2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|101b2ded-aa8c-8c42-bc29-1dc7cf76acc2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571069532,
    },
    "e-1153": {
      id: "e-1153",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1154",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|101b2ded-aa8c-8c42-bc29-1dc7cf76acc4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|101b2ded-aa8c-8c42-bc29-1dc7cf76acc4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571080280,
    },
    "e-1155": {
      id: "e-1155",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".card.no-border",
        originalId:
          "66686bf6c31bf6defa903798|101b2ded-aa8c-8c42-bc29-1dc7cf76acd7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".card.no-border",
          originalId:
            "66686bf6c31bf6defa903798|101b2ded-aa8c-8c42-bc29-1dc7cf76acd7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571092266,
    },
    "e-1157": {
      id: "e-1157",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|99c12976-8276-dcfc-b4af-1f74499db5c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|99c12976-8276-dcfc-b4af-1f74499db5c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571118903,
    },
    "e-1159": {
      id: "e-1159",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1160",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|96b61e43-98a1-05d9-f9df-0932cb57af57",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|96b61e43-98a1-05d9-f9df-0932cb57af57",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571126870,
    },
    "e-1161": {
      id: "e-1161",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1162",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|f95f8de6-cacb-94c4-a248-15831afacc81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|f95f8de6-cacb-94c4-a248-15831afacc81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571137922,
    },
    "e-1163": {
      id: "e-1163",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|0798520e-c28c-a4fc-2dab-e13cac79416a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|0798520e-c28c-a4fc-2dab-e13cac79416a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571152153,
    },
    "e-1165": {
      id: "e-1165",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571163775,
    },
    "e-1167": {
      id: "e-1167",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571171321,
    },
    "e-1169": {
      id: "e-1169",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|f234767c-2cda-a1ee-d6fb-27f933c47332",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|f234767c-2cda-a1ee-d6fb-27f933c47332",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571179705,
    },
    "e-1171": {
      id: "e-1171",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571193320,
    },
    "e-1177": {
      id: "e-1177",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571392502,
    },
    "e-1178": {
      id: "e-1178",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1177",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|6a0aea70-f871-dd92-f61d-ee324b7741d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571392533,
    },
    "e-1179": {
      id: "e-1179",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-1180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd7d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd7d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1718571513480,
    },
    "e-1181": {
      id: "e-1181",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1182",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571553247,
    },
    "e-1183": {
      id: "e-1183",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1184",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd6e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd6e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571560447,
    },
    "e-1185": {
      id: "e-1185",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1186",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd72",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd72",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571568580,
    },
    "e-1187": {
      id: "e-1187",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1188",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571577119,
    },
    "e-1189": {
      id: "e-1189",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1190",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bd83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571598017,
    },
    "e-1191": {
      id: "e-1191",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1192",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bda3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bda3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571604848,
    },
    "e-1193": {
      id: "e-1193",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1194",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bdb7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bdb7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571612268,
    },
    "e-1195": {
      id: "e-1195",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1196",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bdcb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bdcb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571619668,
    },
    "e-1197": {
      id: "e-1197",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1198",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bde1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f2bd7dc2-7a27-1c3d-6eed-3731c238bde1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718571634103,
    },
    "e-1199": {
      id: "e-1199",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|7b5f56ad-0707-aba9-c0fb-ac1233fa5bb7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|7b5f56ad-0707-aba9-c0fb-ac1233fa5bb7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718573011660,
    },
    "e-1200": {
      id: "e-1200",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1201",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|d39d61f6-0222-d799-0abf-459bb5b1e217",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|d39d61f6-0222-d799-0abf-459bb5b1e217",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573143162,
    },
    "e-1202": {
      id: "e-1202",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1203",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|49f76936-e7e2-67a9-2a8a-5f49c67876d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|49f76936-e7e2-67a9-2a8a-5f49c67876d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573216761,
    },
    "e-1204": {
      id: "e-1204",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1205",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|d5799978-db2a-6cf4-5bcc-486a5e741296",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|d5799978-db2a-6cf4-5bcc-486a5e741296",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573273721,
    },
    "e-1206": {
      id: "e-1206",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1207",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|d5799978-db2a-6cf4-5bcc-486a5e741298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|d5799978-db2a-6cf4-5bcc-486a5e741298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573297095,
    },
    "e-1208": {
      id: "e-1208",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1209",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|d5799978-db2a-6cf4-5bcc-486a5e74129a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|d5799978-db2a-6cf4-5bcc-486a5e74129a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573310594,
    },
    "e-1229": {
      id: "e-1229",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1230",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|99c12976-8276-dcfc-b4af-1f74499db5c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|99c12976-8276-dcfc-b4af-1f74499db5c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573508805,
    },
    "e-1231": {
      id: "e-1231",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1232",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|96b61e43-98a1-05d9-f9df-0932cb57af57",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|96b61e43-98a1-05d9-f9df-0932cb57af57",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573517404,
    },
    "e-1233": {
      id: "e-1233",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1234",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|96b61e43-98a1-05d9-f9df-0932cb57af5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|96b61e43-98a1-05d9-f9df-0932cb57af5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573527336,
    },
    "e-1235": {
      id: "e-1235",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1236",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".claim-card.vetical",
        originalId:
          "6669daa8d5e36d008c69e70e|9e546e62-f5a3-13e5-b4c8-fdbe4826e195",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".claim-card.vetical",
          originalId:
            "6669daa8d5e36d008c69e70e|9e546e62-f5a3-13e5-b4c8-fdbe4826e195",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573540361,
    },
    "e-1237": {
      id: "e-1237",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1238",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|048f9cf7-e2c6-9c04-52b9-19894313599d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|048f9cf7-e2c6-9c04-52b9-19894313599d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573571075,
    },
    "e-1239": {
      id: "e-1239",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1240",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|9b8228d0-c706-d4be-6df7-a7e663104c76",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|9b8228d0-c706-d4be-6df7-a7e663104c76",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573578693,
    },
    "e-1241": {
      id: "e-1241",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1242",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|9c82d576-8a20-60c5-a3a3-da545be5eb48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|9c82d576-8a20-60c5-a3a3-da545be5eb48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573598162,
    },
    "e-1243": {
      id: "e-1243",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1244",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|9edf81f5-1da7-9f87-1a7b-97b07153e910",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|9edf81f5-1da7-9f87-1a7b-97b07153e910",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573614342,
    },
    "e-1245": {
      id: "e-1245",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1246",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|9edf81f5-1da7-9f87-1a7b-97b07153e912",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|9edf81f5-1da7-9f87-1a7b-97b07153e912",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573621666,
    },
    "e-1247": {
      id: "e-1247",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1248",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|9edf81f5-1da7-9f87-1a7b-97b07153e918",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|9edf81f5-1da7-9f87-1a7b-97b07153e918",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573674444,
    },
    "e-1249": {
      id: "e-1249",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1250",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|fd79f0bb-33fc-2ba6-baa1-387aec9e4af7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|fd79f0bb-33fc-2ba6-baa1-387aec9e4af7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573684795,
    },
    "e-1251": {
      id: "e-1251",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1252",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|fd79f0bb-33fc-2ba6-baa1-387aec9e4af9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|fd79f0bb-33fc-2ba6-baa1-387aec9e4af9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573692797,
    },
    "e-1253": {
      id: "e-1253",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1254",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|fd79f0bb-33fc-2ba6-baa1-387aec9e4afb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|fd79f0bb-33fc-2ba6-baa1-387aec9e4afb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573702116,
    },
    "e-1257": {
      id: "e-1257",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1258",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|a76ca014-48f5-e204-f3c4-c31978d70729",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|a76ca014-48f5-e204-f3c4-c31978d70729",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573783621,
    },
    "e-1259": {
      id: "e-1259",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1260",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|a76ca014-48f5-e204-f3c4-c31978d70729",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|a76ca014-48f5-e204-f3c4-c31978d70729",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573793220,
    },
    "e-1260": {
      id: "e-1260",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1259",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|a76ca014-48f5-e204-f3c4-c31978d70729",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|a76ca014-48f5-e204-f3c4-c31978d70729",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573793222,
    },
    "e-1261": {
      id: "e-1261",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1262",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|cefb615b-4838-3f65-3590-059aa003cbdc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|cefb615b-4838-3f65-3590-059aa003cbdc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718573876428,
    },
    "e-1263": {
      id: "e-1263",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1264",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|d5799978-db2a-6cf4-5bcc-486a5e741296",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|d5799978-db2a-6cf4-5bcc-486a5e741296",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574089110,
    },
    "e-1265": {
      id: "e-1265",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1266",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|d5799978-db2a-6cf4-5bcc-486a5e741298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|d5799978-db2a-6cf4-5bcc-486a5e741298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574095786,
    },
    "e-1269": {
      id: "e-1269",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|151a303e-1ed2-9f56-ed1f-dd406ce952ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|151a303e-1ed2-9f56-ed1f-dd406ce952ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718574164692,
    },
    "e-1270": {
      id: "e-1270",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1271",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|fd9a0a99-1b36-a1ba-48c4-382928e9ee95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|fd9a0a99-1b36-a1ba-48c4-382928e9ee95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574217361,
    },
    "e-1272": {
      id: "e-1272",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1273",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|a172077c-53a4-96d1-6be8-3f8794ee14c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|a172077c-53a4-96d1-6be8-3f8794ee14c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574232628,
    },
    "e-1274": {
      id: "e-1274",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1275",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|a172077c-53a4-96d1-6be8-3f8794ee14c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|a172077c-53a4-96d1-6be8-3f8794ee14c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574240638,
    },
    "e-1276": {
      id: "e-1276",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-34", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e65",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e65",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-34-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718574299024,
    },
    "e-1277": {
      id: "e-1277",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1278",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574309542,
    },
    "e-1279": {
      id: "e-1279",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1280",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574316356,
    },
    "e-1281": {
      id: "e-1281",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574324620,
    },
    "e-1283": {
      id: "e-1283",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1284",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574335739,
    },
    "e-1285": {
      id: "e-1285",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1286",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e8d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|105ccd7b-8d26-2c68-6ae5-1e511b043e8d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574347373,
    },
    "e-1287": {
      id: "e-1287",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|048f9cf7-e2c6-9c04-52b9-19894313599d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|048f9cf7-e2c6-9c04-52b9-19894313599d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574360477,
    },
    "e-1289": {
      id: "e-1289",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|9b8228d0-c706-d4be-6df7-a7e663104c76",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|9b8228d0-c706-d4be-6df7-a7e663104c76",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574367893,
    },
    "e-1291": {
      id: "e-1291",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|afce8f14-6768-268e-d734-7166c4dfd362",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|afce8f14-6768-268e-d734-7166c4dfd362",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574389327,
    },
    "e-1293": {
      id: "e-1293",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1294",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|afce8f14-6768-268e-d734-7166c4dfd364",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|afce8f14-6768-268e-d734-7166c4dfd364",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574395893,
    },
    "e-1295": {
      id: "e-1295",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1296",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|9edf81f5-1da7-9f87-1a7b-97b07153e910",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|9edf81f5-1da7-9f87-1a7b-97b07153e910",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574411696,
    },
    "e-1297": {
      id: "e-1297",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1298",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|9edf81f5-1da7-9f87-1a7b-97b07153e912",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|9edf81f5-1da7-9f87-1a7b-97b07153e912",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574418464,
    },
    "e-1299": {
      id: "e-1299",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1300",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-link",
        originalId:
          "666a00c3604f2ae678099dc3|af256f7c-53e1-593e-89d6-cfadbc096191",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-link",
          originalId:
            "666a00c3604f2ae678099dc3|af256f7c-53e1-593e-89d6-cfadbc096191",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574452182,
    },
    "e-1301": {
      id: "e-1301",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1302",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-link",
        originalId:
          "666a00c3604f2ae678099dc3|af256f7c-53e1-593e-89d6-cfadbc096191",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-link",
          originalId:
            "666a00c3604f2ae678099dc3|af256f7c-53e1-593e-89d6-cfadbc096191",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574482315,
    },
    "e-1302": {
      id: "e-1302",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1301",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-link",
        originalId:
          "666a00c3604f2ae678099dc3|af256f7c-53e1-593e-89d6-cfadbc096191",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-link",
          originalId:
            "666a00c3604f2ae678099dc3|af256f7c-53e1-593e-89d6-cfadbc096191",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574482317,
    },
    "e-1303": {
      id: "e-1303",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1304",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|b5117f00-6f22-c6d8-034d-01747c6411a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|b5117f00-6f22-c6d8-034d-01747c6411a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574593327,
    },
    "e-1305": {
      id: "e-1305",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1306",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|b5117f00-6f22-c6d8-034d-01747c6411a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|b5117f00-6f22-c6d8-034d-01747c6411a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574602107,
    },
    "e-1307": {
      id: "e-1307",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1308",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|ca73b971-0c03-bbc6-898b-04e545c38203",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|ca73b971-0c03-bbc6-898b-04e545c38203",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718574610859,
    },
    "e-1309": {
      id: "e-1309",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1310",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|d5799978-db2a-6cf4-5bcc-486a5e741296",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|d5799978-db2a-6cf4-5bcc-486a5e741296",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579249115,
    },
    "e-1311": {
      id: "e-1311",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1312",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|d5799978-db2a-6cf4-5bcc-486a5e741298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|d5799978-db2a-6cf4-5bcc-486a5e741298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579261077,
    },
    "e-1313": {
      id: "e-1313",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1314",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|88984cd6-8539-4f1c-0a11-9b36c628f9ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|88984cd6-8539-4f1c-0a11-9b36c628f9ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579277721,
    },
    "e-1315": {
      id: "e-1315",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-1316" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|7c305790-281f-517c-fec3-0ed5a120f8ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|7c305790-281f-517c-fec3-0ed5a120f8ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1718579354808,
    },
    "e-1317": {
      id: "e-1317",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|7c305790-281f-517c-fec3-0ed5a120f8b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|7c305790-281f-517c-fec3-0ed5a120f8b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579410426,
    },
    "e-1319": {
      id: "e-1319",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1320",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|7c305790-281f-517c-fec3-0ed5a120f8bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|7c305790-281f-517c-fec3-0ed5a120f8bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579420194,
    },
    "e-1321": {
      id: "e-1321",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1322",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|7c305790-281f-517c-fec3-0ed5a120f8bf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|7c305790-281f-517c-fec3-0ed5a120f8bf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579429179,
    },
    "e-1323": {
      id: "e-1323",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1324",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|6c87fe71-da6d-b34e-f927-f0ee8368bb95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|6c87fe71-da6d-b34e-f927-f0ee8368bb95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579444577,
    },
    "e-1325": {
      id: "e-1325",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1326",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|fd79f0bb-33fc-2ba6-baa1-387aec9e4af7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|fd79f0bb-33fc-2ba6-baa1-387aec9e4af7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579461686,
    },
    "e-1327": {
      id: "e-1327",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1328",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|fd79f0bb-33fc-2ba6-baa1-387aec9e4af9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|fd79f0bb-33fc-2ba6-baa1-387aec9e4af9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579469082,
    },
    "e-1329": {
      id: "e-1329",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1330",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|f9b6be91-a51a-fbc3-52b4-d5b248607344",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|f9b6be91-a51a-fbc3-52b4-d5b248607344",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579475902,
    },
    "e-1331": {
      id: "e-1331",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1332",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a31e6f963be221bde5932|8262ec48-c25b-e47f-eb6e-393ea82536a9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a31e6f963be221bde5932|8262ec48-c25b-e47f-eb6e-393ea82536a9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579485883,
    },
    "e-1333": {
      id: "e-1333",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1334",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".link-services",
        originalId:
          "666a31e6f963be221bde5932|8262ec48-c25b-e47f-eb6e-393ea82536a9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link-services",
          originalId:
            "666a31e6f963be221bde5932|8262ec48-c25b-e47f-eb6e-393ea82536a9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579493180,
    },
    "e-1334": {
      id: "e-1334",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1333",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".link-services",
        originalId:
          "666a31e6f963be221bde5932|8262ec48-c25b-e47f-eb6e-393ea82536a9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link-services",
          originalId:
            "666a31e6f963be221bde5932|8262ec48-c25b-e47f-eb6e-393ea82536a9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579493182,
    },
    "e-1335": {
      id: "e-1335",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1336",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|4f5df650-74b3-a8d6-6827-da1997472d91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|4f5df650-74b3-a8d6-6827-da1997472d91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579608654,
    },
    "e-1337": {
      id: "e-1337",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1338",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|d5799978-db2a-6cf4-5bcc-486a5e741298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|d5799978-db2a-6cf4-5bcc-486a5e741298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579615487,
    },
    "e-1339": {
      id: "e-1339",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1340",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|d5799978-db2a-6cf4-5bcc-486a5e741296",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|d5799978-db2a-6cf4-5bcc-486a5e741296",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579621763,
    },
    "e-1341": {
      id: "e-1341",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1342",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|afce8f14-6768-268e-d734-7166c4dfd362",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|afce8f14-6768-268e-d734-7166c4dfd362",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579832219,
    },
    "e-1343": {
      id: "e-1343",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1344",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|afce8f14-6768-268e-d734-7166c4dfd364",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|afce8f14-6768-268e-d734-7166c4dfd364",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579844072,
    },
    "e-1345": {
      id: "e-1345",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1346",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|fd79f0bb-33fc-2ba6-baa1-387aec9e4af7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|fd79f0bb-33fc-2ba6-baa1-387aec9e4af7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579869473,
    },
    "e-1347": {
      id: "e-1347",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1348",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|fd79f0bb-33fc-2ba6-baa1-387aec9e4af9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|fd79f0bb-33fc-2ba6-baa1-387aec9e4af9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718579878444,
    },
    "e-1349": {
      id: "e-1349",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1350",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|cf0284a6-5897-349e-9914-ec58a6c3554b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|cf0284a6-5897-349e-9914-ec58a6c3554b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580448874,
    },
    "e-1351": {
      id: "e-1351",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1352",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|8262ec48-c25b-e47f-eb6e-393ea82536a9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|8262ec48-c25b-e47f-eb6e-393ea82536a9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580498763,
    },
    "e-1353": {
      id: "e-1353",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1354",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ae5792f7f899f514e27ae|fedb908c-0393-00ba-8299-cb33521e44a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ae5792f7f899f514e27ae|fedb908c-0393-00ba-8299-cb33521e44a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580545131,
    },
    "e-1355": {
      id: "e-1355",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1356",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ae5792f7f899f514e27ae|fedb908c-0393-00ba-8299-cb33521e44a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ae5792f7f899f514e27ae|fedb908c-0393-00ba-8299-cb33521e44a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580550470,
    },
    "e-1357": {
      id: "e-1357",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1358",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ae5792f7f899f514e27ae|444601d1-9022-e0d6-a485-974103966b33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ae5792f7f899f514e27ae|444601d1-9022-e0d6-a485-974103966b33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580827223,
    },
    "e-1359": {
      id: "e-1359",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1360",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ae5792f7f899f514e27ae|444601d1-9022-e0d6-a485-974103966b35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ae5792f7f899f514e27ae|444601d1-9022-e0d6-a485-974103966b35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580834965,
    },
    "e-1361": {
      id: "e-1361",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1362",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ae5792f7f899f514e27ae|444601d1-9022-e0d6-a485-974103966b37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ae5792f7f899f514e27ae|444601d1-9022-e0d6-a485-974103966b37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580843846,
    },
    "e-1363": {
      id: "e-1363",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1364",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|1c81471d-19d1-2a59-5a94-bfacc8926df5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|1c81471d-19d1-2a59-5a94-bfacc8926df5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580966675,
    },
    "e-1365": {
      id: "e-1365",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1366",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|1c81471d-19d1-2a59-5a94-bfacc8926df7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|1c81471d-19d1-2a59-5a94-bfacc8926df7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580972290,
    },
    "e-1367": {
      id: "e-1367",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1368",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|16ec9da2-8e46-c450-972e-32ad4ae8746f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|16ec9da2-8e46-c450-972e-32ad4ae8746f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718580997382,
    },
    "e-1369": {
      id: "e-1369",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|1c81471d-19d1-2a59-5a94-bfacc8926df0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|1c81471d-19d1-2a59-5a94-bfacc8926df0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718581030213,
    },
    "e-1387": {
      id: "e-1387",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1388",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|0ffbbf86-73ed-90ef-5aea-74ba80c321cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|0ffbbf86-73ed-90ef-5aea-74ba80c321cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581283757,
    },
    "e-1389": {
      id: "e-1389",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1390",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|0ffbbf86-73ed-90ef-5aea-74ba80c321ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|0ffbbf86-73ed-90ef-5aea-74ba80c321ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581291674,
    },
    "e-1391": {
      id: "e-1391",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1392",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|728b472b-5c25-4a2c-074b-de9aba20fa88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|728b472b-5c25-4a2c-074b-de9aba20fa88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581308677,
    },
    "e-1393": {
      id: "e-1393",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1394",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|728b472b-5c25-4a2c-074b-de9aba20fa8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|728b472b-5c25-4a2c-074b-de9aba20fa8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581316396,
    },
    "e-1395": {
      id: "e-1395",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1396",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|99c12976-8276-dcfc-b4af-1f74499db5c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|99c12976-8276-dcfc-b4af-1f74499db5c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581334511,
    },
    "e-1397": {
      id: "e-1397",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1398",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|96b61e43-98a1-05d9-f9df-0932cb57af57",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|96b61e43-98a1-05d9-f9df-0932cb57af57",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581341680,
    },
    "e-1399": {
      id: "e-1399",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1400",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|8b075b59-ac37-9122-dee4-af7eab6d79e3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|8b075b59-ac37-9122-dee4-af7eab6d79e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581365582,
    },
    "e-1401": {
      id: "e-1401",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|bcd5a2ec-a649-ffdf-b3ec-642a054aceb3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|bcd5a2ec-a649-ffdf-b3ec-642a054aceb3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718581578199,
    },
    "e-1402": {
      id: "e-1402",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1403",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|bcd5a2ec-a649-ffdf-b3ec-642a054aceb7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|bcd5a2ec-a649-ffdf-b3ec-642a054aceb7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581651503,
    },
    "e-1404": {
      id: "e-1404",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1405",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0eb44931-446c-304b-2449-6239f042db1b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0eb44931-446c-304b-2449-6239f042db1b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581674015,
    },
    "e-1406": {
      id: "e-1406",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1407",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0eb44931-446c-304b-2449-6239f042db1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0eb44931-446c-304b-2449-6239f042db1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581680764,
    },
    "e-1408": {
      id: "e-1408",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1409",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0ffbbf86-73ed-90ef-5aea-74ba80c321cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0ffbbf86-73ed-90ef-5aea-74ba80c321cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581709070,
    },
    "e-1410": {
      id: "e-1410",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1411",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0ffbbf86-73ed-90ef-5aea-74ba80c321ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0ffbbf86-73ed-90ef-5aea-74ba80c321ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581716187,
    },
    "e-1412": {
      id: "e-1412",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1413",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f55b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f55b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581894349,
    },
    "e-1414": {
      id: "e-1414",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1415",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f55e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f55e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581901581,
    },
    "e-1416": {
      id: "e-1416",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1417",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f562",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f562",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718581909352,
    },
    "e-1418": {
      id: "e-1418",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1419",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f565",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f565",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582012026,
    },
    "e-1420": {
      id: "e-1420",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-1421" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f571",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|61212314-4943-8501-09bb-bb754a99f571",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1718582024210,
    },
    "e-1422": {
      id: "e-1422",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1423",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".insta-image",
        originalId:
          "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".insta-image",
          originalId:
            "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582075115,
    },
    "e-1423": {
      id: "e-1423",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1422",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".insta-image",
        originalId:
          "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".insta-image",
          originalId:
            "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582075142,
    },
    "e-1424": {
      id: "e-1424",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1425",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".instagram-link-wrapper",
        originalId:
          "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".instagram-link-wrapper",
          originalId:
            "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a5",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582248840,
    },
    "e-1426": {
      id: "e-1426",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1427",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582439419,
    },
    "e-1428": {
      id: "e-1428",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1429",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582448268,
    },
    "e-1430": {
      id: "e-1430",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1431",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|882c2a16-e56b-182c-6ceb-67e4eef889f7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|882c2a16-e56b-182c-6ceb-67e4eef889f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582616060,
    },
    "e-1432": {
      id: "e-1432",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|882c2a16-e56b-182c-6ceb-67e4eef889f3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|882c2a16-e56b-182c-6ceb-67e4eef889f3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718582718416,
    },
    "e-1433": {
      id: "e-1433",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1434",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|d06fbfb0-60f5-308d-4044-81b0e27b6ed9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|d06fbfb0-60f5-308d-4044-81b0e27b6ed9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582743501,
    },
    "e-1435": {
      id: "e-1435",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1436",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|d06fbfb0-60f5-308d-4044-81b0e27b6edb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|d06fbfb0-60f5-308d-4044-81b0e27b6edb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582750667,
    },
    "e-1446": {
      id: "e-1446",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1447",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|38fbb276-fa8c-8681-d967-ec667aac028e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|38fbb276-fa8c-8681-d967-ec667aac028e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582881548,
    },
    "e-1448": {
      id: "e-1448",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1449",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|77bf1bb2-3423-301b-788a-128db9a39bc3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|77bf1bb2-3423-301b-788a-128db9a39bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582889011,
    },
    "e-1450": {
      id: "e-1450",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1451",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|77bf1bb2-3423-301b-788a-128db9a39bc7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|77bf1bb2-3423-301b-788a-128db9a39bc7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582895745,
    },
    "e-1452": {
      id: "e-1452",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1453",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|77bf1bb2-3423-301b-788a-128db9a39bc9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|77bf1bb2-3423-301b-788a-128db9a39bc9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582917997,
    },
    "e-1454": {
      id: "e-1454",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-34", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|77bf1bb2-3423-301b-788a-128db9a39ba8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|77bf1bb2-3423-301b-788a-128db9a39ba8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-34-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718582963922,
    },
    "e-1455": {
      id: "e-1455",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1456",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|8cf76220-a10c-c505-2568-3563e26a445f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|8cf76220-a10c-c505-2568-3563e26a445f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718582992341,
    },
    "e-1457": {
      id: "e-1457",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1458",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c5732ed4dab8c1c6c3027|abc701bd-dc27-427e-8154-535b6e20ee70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c5732ed4dab8c1c6c3027|abc701bd-dc27-427e-8154-535b6e20ee70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583046238,
    },
    "e-1459": {
      id: "e-1459",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1460",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c5732ed4dab8c1c6c3027|f189ec3c-a64d-bf00-51af-38fcc0def211",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c5732ed4dab8c1c6c3027|f189ec3c-a64d-bf00-51af-38fcc0def211",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583051840,
    },
    "e-1461": {
      id: "e-1461",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|882c2a16-e56b-182c-6ceb-67e4eef889f3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|882c2a16-e56b-182c-6ceb-67e4eef889f3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718583138297,
    },
    "e-1462": {
      id: "e-1462",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1463",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|882c2a16-e56b-182c-6ceb-67e4eef889f7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|882c2a16-e56b-182c-6ceb-67e4eef889f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583218235,
    },
    "e-1464": {
      id: "e-1464",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1465",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|942ca9f8-2990-476a-2e40-d4d305e3ea95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|942ca9f8-2990-476a-2e40-d4d305e3ea95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583229433,
    },
    "e-1466": {
      id: "e-1466",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1467",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|334a00ce-1085-9a43-72ec-20e529342ef9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|334a00ce-1085-9a43-72ec-20e529342ef9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583241149,
    },
    "e-1468": {
      id: "e-1468",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1469",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|d06fbfb0-60f5-308d-4044-81b0e27b6ed9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|d06fbfb0-60f5-308d-4044-81b0e27b6ed9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583267421,
    },
    "e-1470": {
      id: "e-1470",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1471",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|d06fbfb0-60f5-308d-4044-81b0e27b6edb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|d06fbfb0-60f5-308d-4044-81b0e27b6edb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583274785,
    },
    "e-1472": {
      id: "e-1472",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1473",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|0bd1509b-ac42-214e-7955-ee9592d5747f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|0bd1509b-ac42-214e-7955-ee9592d5747f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583294589,
    },
    "e-1474": {
      id: "e-1474",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1475",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|0bd1509b-ac42-214e-7955-ee9592d57481",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|0bd1509b-ac42-214e-7955-ee9592d57481",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583301606,
    },
    "e-1476": {
      id: "e-1476",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1477",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|0bd1509b-ac42-214e-7955-ee9592d57487",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|0bd1509b-ac42-214e-7955-ee9592d57487",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583312778,
    },
    "e-1478": {
      id: "e-1478",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1479",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f2b0a2a54fab5807ecd29|abc701bd-dc27-427e-8154-535b6e20ee70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f2b0a2a54fab5807ecd29|abc701bd-dc27-427e-8154-535b6e20ee70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583402260,
    },
    "e-1480": {
      id: "e-1480",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1481",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f2b0a2a54fab5807ecd29|f189ec3c-a64d-bf00-51af-38fcc0def211",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f2b0a2a54fab5807ecd29|f189ec3c-a64d-bf00-51af-38fcc0def211",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583408414,
    },
    "e-1482": {
      id: "e-1482",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1483",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666cbccd4c2d94aa516b3b20|42ccc80a-46e3-fd3a-fcbc-7671eede155e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666cbccd4c2d94aa516b3b20|42ccc80a-46e3-fd3a-fcbc-7671eede155e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583455697,
    },
    "e-1484": {
      id: "e-1484",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1485",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666cbccd4c2d94aa516b3b20|42ccc80a-46e3-fd3a-fcbc-7671eede1560",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666cbccd4c2d94aa516b3b20|42ccc80a-46e3-fd3a-fcbc-7671eede1560",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583480278,
    },
    "e-1486": {
      id: "e-1486",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1487",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666cbccd4c2d94aa516b3b20|2a7b9e48-d518-f7fd-3050-afe6ca19a2dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666cbccd4c2d94aa516b3b20|2a7b9e48-d518-f7fd-3050-afe6ca19a2dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583486297,
    },
    "e-1488": {
      id: "e-1488",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1489",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".component-wrapper-block",
        originalId:
          "666cbccd4c2d94aa516b3b20|a1d7da33-363e-ae10-f489-377a43054797",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".component-wrapper-block",
          originalId:
            "666cbccd4c2d94aa516b3b20|a1d7da33-363e-ae10-f489-377a43054797",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583497999,
    },
    "e-1490": {
      id: "e-1490",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1491",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666881d34a3ca39cddc0ac95|a6ac11b2-7ea2-729a-4dac-80529b0d82c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666881d34a3ca39cddc0ac95|a6ac11b2-7ea2-729a-4dac-80529b0d82c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583525121,
    },
    "e-1492": {
      id: "e-1492",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1493",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666881d34a3ca39cddc0ac95|a6ac11b2-7ea2-729a-4dac-80529b0d82c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666881d34a3ca39cddc0ac95|a6ac11b2-7ea2-729a-4dac-80529b0d82c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583530020,
    },
    "e-1494": {
      id: "e-1494",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1495",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".component-wrapper",
        originalId:
          "666881d34a3ca39cddc0ac95|25b4ec06-76f9-b449-757f-26399d1b32fb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".component-wrapper",
          originalId:
            "666881d34a3ca39cddc0ac95|25b4ec06-76f9-b449-757f-26399d1b32fb",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583540600,
    },
    "e-1496": {
      id: "e-1496",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1497",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".sg-elements-grid",
        originalId:
          "666881d34a3ca39cddc0ac95|25b4ec06-76f9-b449-757f-26399d1b3321",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".sg-elements-grid",
          originalId:
            "666881d34a3ca39cddc0ac95|25b4ec06-76f9-b449-757f-26399d1b3321",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583564585,
    },
    "e-1498": {
      id: "e-1498",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1499",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ccc369ca23789f2d88288|c629d138-1c76-c7e5-1164-e780584eda7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ccc369ca23789f2d88288|c629d138-1c76-c7e5-1164-e780584eda7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583619847,
    },
    "e-1500": {
      id: "e-1500",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1501",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ccc369ca23789f2d88288|412aa238-30d6-0b51-6081-b17299fd1073",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ccc369ca23789f2d88288|412aa238-30d6-0b51-6081-b17299fd1073",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583625249,
    },
    "e-1502": {
      id: "e-1502",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1503",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666ccc369ca23789f2d88288|fa2c6eb6-628f-b40c-3563-a7d538df6c70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666ccc369ca23789f2d88288|fa2c6eb6-628f-b40c-3563-a7d538df6c70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583634122,
    },
    "e-1505": {
      id: "e-1505",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1506",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|014efd98-b38d-c8a9-bd09-c39d462c367b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|014efd98-b38d-c8a9-bd09-c39d462c367b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583666048,
    },
    "e-1507": {
      id: "e-1507",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1508",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|321677c1-ab72-62b8-e0d3-97fde2357214",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|321677c1-ab72-62b8-e0d3-97fde2357214",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583682337,
    },
    "e-1509": {
      id: "e-1509",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1510",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|4e71a30c-4557-5e1d-5021-3ca7e6357354",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|4e71a30c-4557-5e1d-5021-3ca7e6357354",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583691511,
    },
    "e-1511": {
      id: "e-1511",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1512",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|40013673-2728-7e69-a2ef-8a3048297f1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|40013673-2728-7e69-a2ef-8a3048297f1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583702368,
    },
    "e-1513": {
      id: "e-1513",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1514",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|40013673-2728-7e69-a2ef-8a3048297f1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|40013673-2728-7e69-a2ef-8a3048297f1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583709543,
    },
    "e-1515": {
      id: "e-1515",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1516",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|95713332-4915-72cf-1c81-02066d794c37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|95713332-4915-72cf-1c81-02066d794c37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583732638,
    },
    "e-1521": {
      id: "e-1521",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1522",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669f85dd910066adaf49586|3f2d8849-f17c-06f4-9eb0-8a7cfaeaf670",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669f85dd910066adaf49586|3f2d8849-f17c-06f4-9eb0-8a7cfaeaf670",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583809444,
    },
    "e-1523": {
      id: "e-1523",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1524",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669f85dd910066adaf49586|24a8a4b9-f5da-ea35-a1bd-3c0f4c149172",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669f85dd910066adaf49586|24a8a4b9-f5da-ea35-a1bd-3c0f4c149172",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583841919,
    },
    "e-1525": {
      id: "e-1525",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1526",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|9cf144d7-845e-5d40-17d4-7fd6bf21544e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|9cf144d7-845e-5d40-17d4-7fd6bf21544e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583918820,
    },
    "e-1527": {
      id: "e-1527",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1528",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|929bf7cd-f5da-88d0-4b38-a33351ed235b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|929bf7cd-f5da-88d0-4b38-a33351ed235b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583924321,
    },
    "e-1529": {
      id: "e-1529",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1530",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|61520d71-35aa-f9ee-38b4-6b29ff64942f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|61520d71-35aa-f9ee-38b4-6b29ff64942f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718583930577,
    },
    "e-1531": {
      id: "e-1531",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|90619e41-bf91-22b2-7959-ff64ac2beadb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|90619e41-bf91-22b2-7959-ff64ac2beadb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1718584038846,
    },
    "e-1532": {
      id: "e-1532",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1533",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|11d41fff-50b3-80d0-6b57-a8e16f8d7b7a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|11d41fff-50b3-80d0-6b57-a8e16f8d7b7a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718584060697,
    },
    "e-1534": {
      id: "e-1534",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1535",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|ff4bcdbf-91f9-adc9-f5a4-d8593d02de77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|ff4bcdbf-91f9-adc9-f5a4-d8593d02de77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718584072015,
    },
    "e-1536": {
      id: "e-1536",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1537",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|ff4bcdbf-91f9-adc9-f5a4-d8593d02de79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|ff4bcdbf-91f9-adc9-f5a4-d8593d02de79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718584079433,
    },
    "e-1538": {
      id: "e-1538",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1539",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|e9852e40-4011-89d3-11f3-8dc88fe0c4b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|e9852e40-4011-89d3-11f3-8dc88fe0c4b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718584094300,
    },
    "e-1540": {
      id: "e-1540",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1541",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669d262c5398b6ee7d4f6d7|65d8c709-5579-58da-b610-a580b7a7da97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669d262c5398b6ee7d4f6d7|65d8c709-5579-58da-b610-a580b7a7da97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718584126556,
    },
    "e-1552": {
      id: "e-1552",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1553",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|a3902263-2c1f-0353-50cf-0f9871a7b135",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|a3902263-2c1f-0353-50cf-0f9871a7b135",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718584257594,
    },
    "e-1554": {
      id: "e-1554",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1555",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|a3902263-2c1f-0353-50cf-0f9871a7b137",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|a3902263-2c1f-0353-50cf-0f9871a7b137",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718584264529,
    },
    "e-1556": {
      id: "e-1556",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1557",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|13e505b7-0c79-f48f-0795-e699bd0e662a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|13e505b7-0c79-f48f-0795-e699bd0e662a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718584280897,
    },
    "e-1560": {
      id: "e-1560",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1561",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669f85dd910066adaf49586|2b514f2d-1603-0a6e-3e80-9261a4574e0e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669f85dd910066adaf49586|2b514f2d-1603-0a6e-3e80-9261a4574e0e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718984808959,
    },
    "e-1562": {
      id: "e-1562",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1563",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669f85dd910066adaf49586|851b3950-a7f1-de0f-8272-c435f288264f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669f85dd910066adaf49586|851b3950-a7f1-de0f-8272-c435f288264f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718984871301,
    },
    "e-1574": {
      id: "e-1574",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1575",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|d0f0432d-7c29-4a0a-afcb-1b5e90870c5f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|d0f0432d-7c29-4a0a-afcb-1b5e90870c5f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718986363120,
    },
    "e-1578": {
      id: "e-1578",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1579",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|542607e1-1852-6c6f-c355-1ec78b627ff2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|542607e1-1852-6c6f-c355-1ec78b627ff2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987047137,
    },
    "e-1580": {
      id: "e-1580",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1581",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|542607e1-1852-6c6f-c355-1ec78b627ffa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|542607e1-1852-6c6f-c355-1ec78b627ffa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987047137,
    },
    "e-1582": {
      id: "e-1582",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1583",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|542607e1-1852-6c6f-c355-1ec78b628002",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|542607e1-1852-6c6f-c355-1ec78b628002",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987047137,
    },
    "e-1584": {
      id: "e-1584",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1585",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|542607e1-1852-6c6f-c355-1ec78b62800a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|542607e1-1852-6c6f-c355-1ec78b62800a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987047137,
    },
    "e-1586": {
      id: "e-1586",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1587",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|f53acc1e-9155-3c73-9cd7-dbf82f79c641",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|f53acc1e-9155-3c73-9cd7-dbf82f79c641",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987377161,
    },
    "e-1588": {
      id: "e-1588",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1589",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|f53acc1e-9155-3c73-9cd7-dbf82f79c649",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|f53acc1e-9155-3c73-9cd7-dbf82f79c649",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987377161,
    },
    "e-1590": {
      id: "e-1590",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1591",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|f53acc1e-9155-3c73-9cd7-dbf82f79c651",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|f53acc1e-9155-3c73-9cd7-dbf82f79c651",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987377161,
    },
    "e-1592": {
      id: "e-1592",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1593",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|f53acc1e-9155-3c73-9cd7-dbf82f79c659",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|f53acc1e-9155-3c73-9cd7-dbf82f79c659",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987377161,
    },
    "e-1594": {
      id: "e-1594",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1595",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|5d3a29a9-3f56-9652-af48-46c86c25c8c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|5d3a29a9-3f56-9652-af48-46c86c25c8c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987659938,
    },
    "e-1596": {
      id: "e-1596",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1597",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66686bf6c31bf6defa903798|5d3a29a9-3f56-9652-af48-46c86c25c8cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66686bf6c31bf6defa903798|5d3a29a9-3f56-9652-af48-46c86c25c8cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718987659938,
    },
    "e-1598": {
      id: "e-1598",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1599",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|f08207c1-b724-6a4c-6d44-8ad9e554cfe5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|f08207c1-b724-6a4c-6d44-8ad9e554cfe5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718995837203,
    },
    "e-1600": {
      id: "e-1600",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1601",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|f08207c1-b724-6a4c-6d44-8ad9e554cfed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|f08207c1-b724-6a4c-6d44-8ad9e554cfed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718995837203,
    },
    "e-1602": {
      id: "e-1602",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1603",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|f08207c1-b724-6a4c-6d44-8ad9e554cff5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|f08207c1-b724-6a4c-6d44-8ad9e554cff5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718995837203,
    },
    "e-1604": {
      id: "e-1604",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1605",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a00c3604f2ae678099dc3|f08207c1-b724-6a4c-6d44-8ad9e554cffd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a00c3604f2ae678099dc3|f08207c1-b724-6a4c-6d44-8ad9e554cffd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1718995837203,
    },
    "e-1606": {
      id: "e-1606",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1607",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0db13f96-22cf-6924-0b94-17c66b37f26b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0db13f96-22cf-6924-0b94-17c66b37f26b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719002860516,
    },
    "e-1608": {
      id: "e-1608",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1609",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0db13f96-22cf-6924-0b94-17c66b37f273",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0db13f96-22cf-6924-0b94-17c66b37f273",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719002860516,
    },
    "e-1610": {
      id: "e-1610",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1611",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0db13f96-22cf-6924-0b94-17c66b37f27b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0db13f96-22cf-6924-0b94-17c66b37f27b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719002860516,
    },
    "e-1612": {
      id: "e-1612",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1613",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b31f28feb8753c0ccf118|0db13f96-22cf-6924-0b94-17c66b37f283",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b31f28feb8753c0ccf118|0db13f96-22cf-6924-0b94-17c66b37f283",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719002860516,
    },
    "e-1614": {
      id: "e-1614",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1615",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|ef732179-cf70-d94b-52af-149e8e87d565",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|ef732179-cf70-d94b-52af-149e8e87d565",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719003530054,
    },
    "e-1616": {
      id: "e-1616",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1617",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|ef732179-cf70-d94b-52af-149e8e87d56d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|ef732179-cf70-d94b-52af-149e8e87d56d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719003530054,
    },
    "e-1618": {
      id: "e-1618",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1619",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|ef732179-cf70-d94b-52af-149e8e87d575",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|ef732179-cf70-d94b-52af-149e8e87d575",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719003530054,
    },
    "e-1620": {
      id: "e-1620",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1621",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|ef732179-cf70-d94b-52af-149e8e87d57d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|ef732179-cf70-d94b-52af-149e8e87d57d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719003530054,
    },
    "e-1650": {
      id: "e-1650",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1651",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|c8900c90-fea6-d6f6-74b2-ef9f4b046c05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|c8900c90-fea6-d6f6-74b2-ef9f4b046c05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719006261523,
    },
    "e-1652": {
      id: "e-1652",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1653",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|c8900c90-fea6-d6f6-74b2-ef9f4b046c0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|c8900c90-fea6-d6f6-74b2-ef9f4b046c0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719006261523,
    },
    "e-1654": {
      id: "e-1654",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1655",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|c8900c90-fea6-d6f6-74b2-ef9f4b046c15",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|c8900c90-fea6-d6f6-74b2-ef9f4b046c15",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719006261523,
    },
    "e-1656": {
      id: "e-1656",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1657",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666a36c24bcf5c84d20fcaa3|c8900c90-fea6-d6f6-74b2-ef9f4b046c1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666a36c24bcf5c84d20fcaa3|c8900c90-fea6-d6f6-74b2-ef9f4b046c1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719006261523,
    },
    "e-1658": {
      id: "e-1658",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1659",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c5732ed4dab8c1c6c3027|511cf726-5dda-e633-a20e-e77eb491b64c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c5732ed4dab8c1c6c3027|511cf726-5dda-e633-a20e-e77eb491b64c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719006599688,
    },
    "e-1660": {
      id: "e-1660",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1661",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c5732ed4dab8c1c6c3027|511cf726-5dda-e633-a20e-e77eb491b64e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c5732ed4dab8c1c6c3027|511cf726-5dda-e633-a20e-e77eb491b64e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719006599688,
    },
    "e-1662": {
      id: "e-1662",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1663",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c5732ed4dab8c1c6c3027|511cf726-5dda-e633-a20e-e77eb491b650",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c5732ed4dab8c1c6c3027|511cf726-5dda-e633-a20e-e77eb491b650",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719006599688,
    },
    "e-1666": {
      id: "e-1666",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-33", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb45c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb45c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-33-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1719007621782,
    },
    "e-1667": {
      id: "e-1667",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1668",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb461",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb461",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719007621782,
    },
    "e-1669": {
      id: "e-1669",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1670",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb463",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb463",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719007621782,
    },
    "e-1671": {
      id: "e-1671",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1672",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb466",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb466",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719007621782,
    },
    "e-1673": {
      id: "e-1673",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1674",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb468",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb468",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719007621782,
    },
    "e-1675": {
      id: "e-1675",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-34", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004f3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004f3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-34-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1719008597123,
    },
    "e-1676": {
      id: "e-1676",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1677",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004f7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1678": {
      id: "e-1678",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1679",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1680": {
      id: "e-1680",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1681",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1682": {
      id: "e-1682",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1683",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004fd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a004fd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1684": {
      id: "e-1684",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1685",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a00501",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a00501",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1686": {
      id: "e-1686",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1687",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a0050b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a0050b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1688": {
      id: "e-1688",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1689",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a0050d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a0050d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1690": {
      id: "e-1690",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1691",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a0050f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a0050f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1692": {
      id: "e-1692",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1693",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a00511",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6669daa8d5e36d008c69e70e|6ff49fbd-55ec-c659-42a4-0d3a70a00511",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008597123,
    },
    "e-1694": {
      id: "e-1694",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-34", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b994",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b994",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-34-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1719008673779,
    },
    "e-1695": {
      id: "e-1695",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1696",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b998",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b998",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1697": {
      id: "e-1697",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1698",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b99a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b99a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1699": {
      id: "e-1699",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1700",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b99c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b99c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1701": {
      id: "e-1701",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1702",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b99e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b99e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1703": {
      id: "e-1703",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1704",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1705": {
      id: "e-1705",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1706",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1707": {
      id: "e-1707",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1708",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1709": {
      id: "e-1709",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1710",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1711": {
      id: "e-1711",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1712",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|70c68f10-d3bd-867d-9893-454b92d5b9b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719008673779,
    },
    "e-1713": {
      id: "e-1713",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1714",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|c61c5f69-f88f-12a7-b39b-e925654de0d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|c61c5f69-f88f-12a7-b39b-e925654de0d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719011352411,
    },
    "e-1715": {
      id: "e-1715",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1716",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b307d1b5f52b2de58e156|0a8486fb-d8ea-5d10-8610-6afef98c7f96",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b307d1b5f52b2de58e156|0a8486fb-d8ea-5d10-8610-6afef98c7f96",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1719011361336,
    },
    "e-1717": {
      id: "e-1717",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1718",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb46c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666b353b462e1a7374aeec39|0f347cf9-e5e3-da43-b99e-bc2c17bfb46c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719011465096,
    },
    "e-1721": {
      id: "e-1721",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666f25f49452410f090db3e1|014efd98-b38d-c8a9-bd09-c39d462c3674",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666f25f49452410f090db3e1|014efd98-b38d-c8a9-bd09-c39d462c3674",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-31-p",
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1719011669850,
    },
    "e-1722": {
      id: "e-1722",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1723",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|2e419a4d-5c58-009c-c217-d5aec7f51597",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|2e419a4d-5c58-009c-c217-d5aec7f51597",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719011805049,
    },
    "e-1724": {
      id: "e-1724",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1725",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|cd4ed768-5830-2df2-acbf-3944e053b8c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|cd4ed768-5830-2df2-acbf-3944e053b8c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719011819749,
    },
    "e-1726": {
      id: "e-1726",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1727",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6668ea0458cea62dda46f735|692b893c-de71-9fe4-de50-24b51f5a5adb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6668ea0458cea62dda46f735|692b893c-de71-9fe4-de50-24b51f5a5adb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719011824216,
    },
    "e-1728": {
      id: "e-1728",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1729",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|ec1bf615-fdea-fa4e-4990-2aeb081a1f56",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|ec1bf615-fdea-fa4e-4990-2aeb081a1f56",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719020716798,
    },
    "e-1730": {
      id: "e-1730",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1731",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|ec1bf615-fdea-fa4e-4990-2aeb081a1f5e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|ec1bf615-fdea-fa4e-4990-2aeb081a1f5e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719020716798,
    },
    "e-1732": {
      id: "e-1732",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1733",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|ec1bf615-fdea-fa4e-4990-2aeb081a1f66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|ec1bf615-fdea-fa4e-4990-2aeb081a1f66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719020716798,
    },
    "e-1734": {
      id: "e-1734",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1735",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "666c7077f155e8979a7a2798|ec1bf615-fdea-fa4e-4990-2aeb081a1f6e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "666c7077f155e8979a7a2798|ec1bf615-fdea-fa4e-4990-2aeb081a1f6e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1719020716798,
    },
  },
  actionLists: {
    "a-4": {
      id: "a-4",
      title: "Slide Inn 0.6s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "65db6e8c9f6b400b3836becc|587b113b-dcaa-9eac-e4ae-a98e1cabfed6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66107d2bf5ffaba9566da76d|67dbf29b-f5cf-ed43-22d6-552222787c57",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "65db6e8c9f6b400b3836becc|587b113b-dcaa-9eac-e4ae-a98e1cabfed6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "66107d2bf5ffaba9566da76d|67dbf29b-f5cf-ed43-22d6-552222787c57",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1707156390549,
    },
    "a-2": {
      id: "a-2",
      title: "Slide Inn 0.2s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "65db6e8c9f6b400b3836becc|587b113b-dcaa-9eac-e4ae-a98e1cabfed6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66107d2bf5ffaba9566da76d|67dbf29b-f5cf-ed43-22d6-552222787c57",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "65db6e8c9f6b400b3836becc|587b113b-dcaa-9eac-e4ae-a98e1cabfed6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "66107d2bf5ffaba9566da76d|67dbf29b-f5cf-ed43-22d6-552222787c57",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1707156390549,
    },
    "a-16": {
      id: "a-16",
      title: "Features Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["9a0785a6-f57b-c3d4-3fff-0ba1ed1cfc8e"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-icon",
                  selectorGuids: ["24e53051-472e-e7aa-87d2-bc97e9a1d986"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-text",
                  selectorGuids: ["9a0785a6-f57b-c3d4-3fff-0ba1ed1cfc8d"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-text",
                  selectorGuids: ["9a0785a6-f57b-c3d4-3fff-0ba1ed1cfc8d"],
                },
                xValue: -10,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-icon",
                  selectorGuids: ["24e53051-472e-e7aa-87d2-bc97e9a1d986"],
                },
                xValue: 1.05,
                yValue: 1.05,
                locked: true,
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["9a0785a6-f57b-c3d4-3fff-0ba1ed1cfc8e"],
                },
                xValue: 10,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1715967272446,
    },
    "a-17": {
      id: "a-17",
      title: "Feature Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["9a0785a6-f57b-c3d4-3fff-0ba1ed1cfc8e"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-icon",
                  selectorGuids: ["24e53051-472e-e7aa-87d2-bc97e9a1d986"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-text",
                  selectorGuids: ["9a0785a6-f57b-c3d4-3fff-0ba1ed1cfc8d"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1715967272446,
    },
    "a-18": {
      id: "a-18",
      title: "Accordion: Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1200,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-text-info",
                  selectorGuids: ["8b6b45c5-964e-3c49-4cce-bb6f8cffcea3"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-text-info",
                  selectorGuids: ["8b6b45c5-964e-3c49-4cce-bb6f8cffcea3"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-18-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".vertical-accordian-line",
                  selectorGuids: ["8b6b45c5-964e-3c49-4cce-bb6f8cffcea0"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588418976478,
    },
    "a-19": {
      id: "a-19",
      title: "Accordion: Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".accordion-text-info",
                  selectorGuids: ["8b6b45c5-964e-3c49-4cce-bb6f8cffcea3"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-19-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".vertical-accordian-line",
                  selectorGuids: ["8b6b45c5-964e-3c49-4cce-bb6f8cffcea0"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1588418976478,
    },
    "a-23": {
      id: "a-23",
      title: "Arrow IMG",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {},
                xValue: 6,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1702322670270,
    },
    "a-24": {
      id: "a-24",
      title: "Arrow IMG Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {},
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1702322670270,
    },
    "a-3": {
      id: "a-3",
      title: "Slide Inn 0.4s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "65db6e8c9f6b400b3836becc|587b113b-dcaa-9eac-e4ae-a98e1cabfed6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66107d2bf5ffaba9566da76d|67dbf29b-f5cf-ed43-22d6-552222787c57",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "65db6e8c9f6b400b3836becc|587b113b-dcaa-9eac-e4ae-a98e1cabfed6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "66107d2bf5ffaba9566da76d|67dbf29b-f5cf-ed43-22d6-552222787c57",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1707156390549,
    },
    "a-27": {
      id: "a-27",
      title: "Sponsor Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sponsor-flex",
                  selectorGuids: ["f2c1ca8d-2407-8744-bb7e-146c88515da9"],
                },
                xValue: -200,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sponsor-flex",
                  selectorGuids: ["f2c1ca8d-2407-8744-bb7e-146c88515da9"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1643388927854,
    },
    "a-28": {
      id: "a-28",
      title: "IMG Hover Inn",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-card",
                  selectorGuids: ["c8d71bbd-f36b-af08-b0b6-3d87136b7254"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-card",
                  selectorGuids: ["c8d71bbd-f36b-af08-b0b6-3d87136b7254"],
                },
                xValue: 1.07,
                yValue: 1.07,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716239463967,
    },
    "a-29": {
      id: "a-29",
      title: "IMG Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-card",
                  selectorGuids: ["c8d71bbd-f36b-af08-b0b6-3d87136b7254"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716239463967,
    },
    "a-31": {
      id: "a-31",
      title: "While Scrolling Cover IMG",
      continuousParameterGroups: [
        {
          id: "a-31-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-31-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._100-cover-img",
                      selectorGuids: ["e3536045-15c0-1fd2-c954-56e71fed7349"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-31-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._100-cover-img",
                      selectorGuids: ["e3536045-15c0-1fd2-c954-56e71fed7349"],
                    },
                    xValue: 1.2,
                    yValue: 1.2,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1718569191098,
    },
    "a-32": {
      id: "a-32",
      title: "Slide Inn 0.8s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "65db6e8c9f6b400b3836becc|587b113b-dcaa-9eac-e4ae-a98e1cabfed6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66107d2bf5ffaba9566da76d|67dbf29b-f5cf-ed43-22d6-552222787c57",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "65db6e8c9f6b400b3836becc|587b113b-dcaa-9eac-e4ae-a98e1cabfed6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-32-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: true,
                  id: "66107d2bf5ffaba9566da76d|67dbf29b-f5cf-ed43-22d6-552222787c57",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1707156390549,
    },
    "a-33": {
      id: "a-33",
      title: "While Scrolling Side IMG",
      continuousParameterGroups: [
        {
          id: "a-33-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-33-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".image-right-half",
                      selectorGuids: ["e626f0ed-5bf7-74e5-c194-76572d76807e"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-33-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".image-right-half",
                      selectorGuids: ["e626f0ed-5bf7-74e5-c194-76572d76807e"],
                    },
                    xValue: 1.2,
                    yValue: 1.2,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1718569191098,
    },
    "a-34": {
      id: "a-34",
      title: "While Scrolling IMG",
      continuousParameterGroups: [
        {
          id: "a-34-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-34-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img",
                      selectorGuids: ["04d446df-ef54-de59-f377-066366016de9"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-34-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".img",
                      selectorGuids: ["04d446df-ef54-de59-f377-066366016de9"],
                    },
                    xValue: 1.2,
                    yValue: 1.2,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1718569191098,
    },
    "a-35": {
      id: "a-35",
      title: "Post Hover Inn",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".services-img",
                  selectorGuids: ["3f4a1574-2db2-e8a0-24f3-7d37a800dc6c"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".services-img",
                  selectorGuids: ["3f4a1574-2db2-e8a0-24f3-7d37a800dc6c"],
                },
                xValue: 1.05,
                yValue: 1.05,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718571395085,
    },
    "a-36": {
      id: "a-36",
      title: "Post Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".services-img",
                  selectorGuids: ["3f4a1574-2db2-e8a0-24f3-7d37a800dc6c"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1718571395085,
    },
    "a-37": {
      id: "a-37",
      title: "Team Hover Inn",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._100-cover-image-team",
                  selectorGuids: ["3af68fed-7808-b0cd-1d19-1a5f8f634ac6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-37-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._100-cover-image-team",
                  selectorGuids: ["3af68fed-7808-b0cd-1d19-1a5f8f634ac6"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-37-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".label-text",
                  selectorGuids: ["c3d223ad-ffb2-b84b-8444-d3b3bd6640d0"],
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._100-cover-image-team",
                  selectorGuids: ["3af68fed-7808-b0cd-1d19-1a5f8f634ac6"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-37-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._100-cover-image-team",
                  selectorGuids: ["3af68fed-7808-b0cd-1d19-1a5f8f634ac6"],
                },
                zValue: 4,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-37-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".label-text",
                  selectorGuids: ["c3d223ad-ffb2-b84b-8444-d3b3bd6640d0"],
                },
                globalSwatchId: "--color-12",
                rValue: 235,
                bValue: 255,
                gValue: 245,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718574484828,
    },
    "a-38": {
      id: "a-38",
      title: "Team Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._100-cover-image-team",
                  selectorGuids: ["3af68fed-7808-b0cd-1d19-1a5f8f634ac6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._100-cover-image-team",
                  selectorGuids: ["3af68fed-7808-b0cd-1d19-1a5f8f634ac6"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-38-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".label-text",
                  selectorGuids: ["c3d223ad-ffb2-b84b-8444-d3b3bd6640d0"],
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1718574484828,
    },
    "a-39": {
      id: "a-39",
      title: "Insta Hover Inn",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-39-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-39-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
                },
                zValue: 5,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1718582079006,
    },
    "a-40": {
      id: "a-40",
      title: "Insta Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-40-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "666b31f28feb8753c0ccf118|b1c66f03-0829-e644-9ba2-00181ab921a6",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1718582079006,
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});

$(document).ready(function() {
    $(".w-webflow-badge").removeClass("w-webflow").empty();
    });
