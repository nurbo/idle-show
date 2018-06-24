"object" == typeof navigator && function() {
  "use strict";
  var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  var e, r = (function(t, e) {
      function r(t, e) {
        for (var r = 0; r < t.length; ++r)
          if (t[r] === e) return r;
        return -1
      }

      function n(t, e) {
        var n = [],
          o = [];
        return null == e && (e = function(t, e) {
            return n[0] === e ? "[Circular ~]" : "[Circular ~." + o.slice(0, r(n, e)).join(".") + "]"
          }),
          function(i, a) {
            if (n.length > 0) {
              var s = r(n, this);
              ~s ? n.splice(s + 1) : n.push(this), ~s ? o.splice(s, 1 / 0, i) : o.push(i), ~r(n, a) && (a = e.call(this, i, a))
            } else n.push(a);
            return null == t ? a instanceof Error ? function(t) {
              var e = {
                stack: t.stack,
                message: t.message,
                name: t.name
              };
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e
            }(a) : a : t.call(this, i, a)
          }
      }(t.exports = function(t, e, r, o) {
        return JSON.stringify(t, n(e, o), r)
      }).getSerialize = n
    }(e = {
      exports: {}
    }, e.exports), e.exports),
    n = (r.getSerialize, "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {});

  function o(t) {
    return void 0 === t
  }

  function i(t) {
    return "[object Object]" === Object.prototype.toString.call(t)
  }

  function a(t) {
    return "[object String]" === Object.prototype.toString.call(t)
  }

  function s(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }

  function c() {
    if (!("fetch" in n)) return !1;
    try {
      return new Headers, new Request(""), new Response, !0
    } catch (t) {
      return !1
    }
  }

  function l(t, e) {
    var r, n;
    if (o(t.length))
      for (r in t) p(t, r) && e.call(null, r, t[r]);
    else if (n = t.length)
      for (r = 0; r < n; r++) e.call(null, r, t[r])
  }

  function u(t, e) {
    if ("number" != typeof e) throw new Error("2nd argument to `truncate` function should be a number");
    return "string" != typeof t || 0 === e ? t : t.length <= e ? t : t.substr(0, e) + "…"
  }

  function p(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }

  function h(t) {
    for (var e, r = [], n = 0, o = t.length; n < o; n++) a(e = t[n]) ? r.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source && r.push(e.source);
    return new RegExp(r.join("|"), "i")
  }

  function f(t) {
    var e, r, n, o, i, s = [];
    if (!t || !t.tagName) return "";
    if (s.push(t.tagName.toLowerCase()), t.id && s.push("#" + t.id), (e = t.className) && a(e))
      for (r = e.split(/\s+/), i = 0; i < r.length; i++) s.push("." + r[i]);
    var c = ["type", "name", "title", "alt"];
    for (i = 0; i < c.length; i++) n = c[i], (o = t.getAttribute(n)) && s.push("[" + n + '="' + o + '"]');
    return s.join("")
  }

  function d(t, e) {
    return !!(!!t ^ !!e)
  }

  function g(t, e) {
    if (d(t, e)) return !1;
    var r, n, o = t.frames,
      i = e.frames;
    if (o.length !== i.length) return !1;
    for (var a = 0; a < o.length; a++)
      if (r = o[a], n = i[a], r.filename !== n.filename || r.lineno !== n.lineno || r.colno !== n.colno || r.function !== n.function) return !1;
    return !0
  }
  var _ = 3,
    v = 51200,
    m = 40;

  function b(t) {
    return function(t) {
      return ~-encodeURI(t).split(/%..|./).length
    }(JSON.stringify(t))
  }

  function y(t) {
    if ("string" == typeof t) {
      return u(t, 40)
    }
    if ("number" == typeof t || "boolean" == typeof t || void 0 === t) return t;
    var e = Object.prototype.toString.call(t);
    return "[object Object]" === e ? "[Object]" : "[object Array]" === e ? "[Array]" : "[object Function]" === e ? t.name ? "[Function: " + t.name + "]" : "[Function]" : t
  }
  var E = {
      isObject: function(t) {
        return "object" == typeof t && null !== t
      },
      isError: function(t) {
        switch (Object.prototype.toString.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return t instanceof Error
        }
      },
      isErrorEvent: function(t) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(t)
      },
      isDOMError: function(t) {
        return "[object DOMError]" === Object.prototype.toString.call(t)
      },
      isDOMException: function(t) {
        return "[object DOMException]" === Object.prototype.toString.call(t)
      },
      isUndefined: o,
      isFunction: function(t) {
        return "function" == typeof t
      },
      isPlainObject: i,
      isString: a,
      isArray: s,
      isEmptyObject: function(t) {
        if (!i(t)) return !1;
        for (var e in t)
          if (t.hasOwnProperty(e)) return !1;
        return !0
      },
      supportsErrorEvent: function() {
        try {
          return new ErrorEvent(""), !0
        } catch (t) {
          return !1
        }
      },
      supportsDOMError: function() {
        try {
          return new DOMError(""), !0
        } catch (t) {
          return !1
        }
      },
      supportsDOMException: function() {
        try {
          return new DOMException(""), !0
        } catch (t) {
          return !1
        }
      },
      supportsFetch: c,
      supportsReferrerPolicy: function() {
        if (!c()) return !1;
        try {
          return new Request("pickleRick", {
            referrerPolicy: "origin"
          }), !0
        } catch (t) {
          return !1
        }
      },
      supportsPromiseRejectionEvent: function() {
        return "function" == typeof PromiseRejectionEvent
      },
      wrappedCallback: function(t) {
        return function(e, r) {
          var n = t(e) || e;
          return r && r(n) || n
        }
      },
      each: l,
      objectMerge: function(t, e) {
        return e ? (l(e, function(e, r) {
          t[e] = r
        }), t) : t
      },
      truncate: u,
      objectFrozen: function(t) {
        return !!Object.isFrozen && Object.isFrozen(t)
      },
      hasKey: p,
      joinRegExp: h,
      urlencode: function(t) {
        var e = [];
        return l(t, function(t, r) {
          e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r))
        }), e.join("&")
      },
      uuid4: function() {
        var t = n.crypto || n.msCrypto;
        if (!o(t) && t.getRandomValues) {
          var e = new Uint16Array(8);
          t.getRandomValues(e), e[3] = 4095 & e[3] | 16384, e[4] = 16383 & e[4] | 32768;
          var r = function(t) {
            for (var e = t.toString(16); e.length < 4;) e = "0" + e;
            return e
          };
          return r(e[0]) + r(e[1]) + r(e[2]) + r(e[3]) + r(e[4]) + r(e[5]) + r(e[6]) + r(e[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
          var e = 16 * Math.random() | 0;
          return ("x" === t ? e : 3 & e | 8).toString(16)
        })
      },
      htmlTreeAsString: function(t) {
        for (var e, r = [], n = 0, o = 0, i = " > ".length; t && n++ < 5 && !("html" === (e = f(t)) || n > 1 && o + r.length * i + e.length >= 80);) r.push(e), o += e.length, t = t.parentNode;
        return r.reverse().join(" > ")
      },
      htmlElementAsString: f,
      isSameException: function(t, e) {
        return !d(t, e) && (t = t.values[0], e = e.values[0], t.type === e.type && t.value === e.value && (r = t.stacktrace, n = e.stacktrace, (!o(r) || !o(n)) && g(t.stacktrace, e.stacktrace)));
        var r, n
      },
      isSameStacktrace: g,
      parseUrl: function(t) {
        if ("string" != typeof t) return {};
        var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/),
          r = e[6] || "",
          n = e[8] || "";
        return {
          protocol: e[2],
          host: e[4],
          path: e[5],
          relative: e[5] + r + n
        }
      },
      fill: function(t, e, r, n) {
        if (null != t) {
          var o = t[e];
          t[e] = r(o), t[e].__raven__ = !0, t[e].__orig__ = o, n && n.push([t, e, o])
        }
      },
      safeJoin: function(t, e) {
        if (!s(t)) return "";
        for (var r = [], n = 0; n < t.length; n++) try {
          r.push(String(t[n]))
        } catch (t) {
          r.push("[value cannot be serialized]")
        }
        return r.join(e)
      },
      serializeException: function t(e, n, o) {
        if (!i(e)) return e;
        o = "number" != typeof(n = "number" != typeof n ? _ : n) ? v : o;
        var a = function t(e, r) {
          return 0 === r ? y(e) : i(e) ? Object.keys(e).reduce(function(n, o) {
            return n[o] = t(e[o], r - 1), n
          }, {}) : Array.isArray(e) ? e.map(function(e) {
            return t(e, r - 1)
          }) : y(e)
        }(e, n);
        return b(r(a)) > o ? t(e, n - 1) : a
      },
      serializeKeysForMessage: function(t, e) {
        if ("number" == typeof t || "string" == typeof t) return t.toString();
        if (!Array.isArray(t)) return "";
        if (0 === (t = t.filter(function(t) {
            return "string" == typeof t
          })).length) return "[object has no keys]";
        if (e = "number" != typeof e ? m : e, t[0].length >= e) return t[0];
        for (var r = t.length; r > 0; r--) {
          var n = t.slice(0, r).join(", ");
          if (!(n.length > e)) return r === t.length ? n : n + "…"
        }
        return ""
      },
      sanitize: function(t, e) {
        if (!s(e) || s(e) && 0 === e.length) return t;
        var n, o = h(e),
          a = "********";
        try {
          n = JSON.parse(r(t))
        } catch (e) {
          return t
        }
        return function t(e) {
          return s(e) ? e.map(function(e) {
            return t(e)
          }) : i(e) ? Object.keys(e).reduce(function(r, n) {
            return o.test(n) ? r[n] = a : r[n] = t(e[n]), r
          }, {}) : e
        }(n)
      }
    },
    w = {
      collectWindowErrors: !0,
      debug: !1
    },
    x = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
    k = [].slice,
    S = "?",
    O = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

  function C() {
    return "undefined" == typeof document || null == document.location ? "" : document.location.href
  }
  w.report = function() {
    var t, e, r = [],
      n = null,
      o = null,
      i = null;

    function a(t, e) {
      var n = null;
      if (!e || w.collectWindowErrors) {
        for (var o in r)
          if (r.hasOwnProperty(o)) try {
            r[o].apply(null, [t].concat(k.call(arguments, 2)))
          } catch (t) {
            n = t
          }
        if (n) throw n
      }
    }

    function s(e, r, n, o, s) {
      var l = E.isErrorEvent(s) ? s.error : s,
        u = E.isErrorEvent(e) ? e.message : e;
      if (i) w.computeStackTrace.augmentStackTraceWithInitialElement(i, r, n, u), c();
      else if (l && E.isError(l)) a(w.computeStackTrace(l), !0);
      else {
        var p, h = {
            url: r,
            line: n,
            column: o
          },
          f = void 0;
        if ("[object String]" === {}.toString.call(u))(p = u.match(O)) && (f = p[1], u = p[2]);
        h.func = S, a({
          name: f,
          message: u,
          url: C(),
          stack: [h]
        }, !0)
      }
      return !!t && t.apply(this, arguments)
    }

    function c() {
      var t = i,
        e = n;
      n = null, i = null, o = null, a.apply(null, [t, !1].concat(e))
    }

    function l(t, e) {
      var r = k.call(arguments, 1);
      if (i) {
        if (o === t) return;
        c()
      }
      var a = w.computeStackTrace(t);
      if (i = a, o = t, n = r, setTimeout(function() {
          o === t && c()
        }, a.incomplete ? 2e3 : 0), !1 !== e) throw t
    }
    return l.subscribe = function(n) {
      e || (t = x.onerror, x.onerror = s, e = !0), r.push(n)
    }, l.unsubscribe = function(t) {
      for (var e = r.length - 1; e >= 0; --e) r[e] === t && r.splice(e, 1)
    }, l.uninstall = function() {
      e && (x.onerror = t, e = !1, t = void 0), r = []
    }, l
  }(), w.computeStackTrace = function() {
    function t(t) {
      if (void 0 !== t.stack && t.stack) {
        for (var e, r, n, o = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, i = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, c = /\((\S*)(?::(\d+))(?::(\d+))\)/, l = t.stack.split("\n"), u = [], p = (/^(.*) is undefined$/.exec(t.message), 0), h = l.length; p < h; ++p) {
          if (r = o.exec(l[p])) {
            var f = r[2] && 0 === r[2].indexOf("native");
            r[2] && 0 === r[2].indexOf("eval") && (e = c.exec(r[2])) && (r[2] = e[1], r[3] = e[2], r[4] = e[3]), n = {
              url: f ? null : r[2],
              func: r[1] || S,
              args: f ? [r[2]] : [],
              line: r[3] ? +r[3] : null,
              column: r[4] ? +r[4] : null
            }
          } else if (r = i.exec(l[p])) n = {
            url: r[2],
            func: r[1] || S,
            args: [],
            line: +r[3],
            column: r[4] ? +r[4] : null
          };
          else {
            if (!(r = a.exec(l[p]))) continue;
            r[3] && r[3].indexOf(" > eval") > -1 && (e = s.exec(r[3])) ? (r[3] = e[1], r[4] = e[2], r[5] = null) : 0 !== p || r[5] || void 0 === t.columnNumber || (u[0].column = t.columnNumber + 1), n = {
              url: r[3],
              func: r[1] || S,
              args: r[2] ? r[2].split(",") : [],
              line: r[4] ? +r[4] : null,
              column: r[5] ? +r[5] : null
            }
          }
          if (!n.func && n.line && (n.func = S), n.url && "blob:" === n.url.substr(0, 5)) {
            var d = new XMLHttpRequest;
            if (d.open("GET", n.url, !1), d.send(null), 200 === d.status) {
              var g = d.responseText || "",
                _ = (g = g.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
              if (_) {
                var v = _[1];
                "~" === v.charAt(0) && (v = ("undefined" == typeof document || null == document.location ? "" : (document.location.origin || (document.location.origin = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")), document.location.origin)) + v.slice(1)), n.url = v.slice(0, -4)
              }
            }
          }
          u.push(n)
        }
        return u.length ? {
          name: t.name,
          message: t.message,
          url: C(),
          stack: u
        } : null
      }
    }

    function e(t, e, r, n) {
      var o = {
        url: e,
        line: r
      };
      if (o.url && o.line) {
        if (t.incomplete = !1, o.func || (o.func = S), t.stack.length > 0 && t.stack[0].url === o.url) {
          if (t.stack[0].line === o.line) return !1;
          if (!t.stack[0].line && t.stack[0].func === o.func) return t.stack[0].line = o.line, !1
        }
        return t.stack.unshift(o), t.partial = !0, !0
      }
      return t.incomplete = !0, !1
    }

    function r(t, o) {
      for (var i, a, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, c = [], l = {}, u = !1, p = r.caller; p && !u; p = p.caller)
        if (p !== n && p !== w.report) {
          if (a = {
              url: null,
              func: S,
              line: null,
              column: null
            }, p.name ? a.func = p.name : (i = s.exec(p.toString())) && (a.func = i[1]), void 0 === a.func) try {
            a.func = i.input.substring(0, i.input.indexOf("{"))
          } catch (t) {}
          l["" + p] ? u = !0 : l["" + p] = !0, c.push(a)
        }
      o && c.splice(0, o);
      var h = {
        name: t.name,
        message: t.message,
        url: C(),
        stack: c
      };
      return e(h, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description), h
    }

    function n(e, n) {
      var o = null;
      n = null == n ? 0 : +n;
      try {
        if (o = t(e)) return o
      } catch (t) {
        if (w.debug) throw t
      }
      try {
        if (o = r(e, n + 1)) return o
      } catch (t) {
        if (w.debug) throw t
      }
      return {
        name: e.name,
        message: e.message,
        url: C()
      }
    }
    return n.augmentStackTraceWithInitialElement = e, n.computeStackTraceFromStackProp = t, n
  }();
  var R = w;

  function j(t, e) {
    var r = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
  }

  function T(t, e, r, n, o, i) {
    return j((a = j(j(e, t), j(n, i))) << (s = o) | a >>> 32 - s, r);
    var a, s
  }

  function D(t, e, r, n, o, i, a) {
    return T(e & r | ~e & n, t, e, o, i, a)
  }

  function F(t, e, r, n, o, i, a) {
    return T(e & n | r & ~n, t, e, o, i, a)
  }

  function A(t, e, r, n, o, i, a) {
    return T(e ^ r ^ n, t, e, o, i, a)
  }

  function B(t, e, r, n, o, i, a) {
    return T(r ^ (e | ~n), t, e, o, i, a)
  }

  function M(t, e) {
    var r, n, o, i, a;
    t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
    var s = 1732584193,
      c = -271733879,
      l = -1732584194,
      u = 271733878;
    for (r = 0; r < t.length; r += 16) n = s, o = c, i = l, a = u, s = D(s, c, l, u, t[r], 7, -680876936), u = D(u, s, c, l, t[r + 1], 12, -389564586), l = D(l, u, s, c, t[r + 2], 17, 606105819), c = D(c, l, u, s, t[r + 3], 22, -1044525330), s = D(s, c, l, u, t[r + 4], 7, -176418897), u = D(u, s, c, l, t[r + 5], 12, 1200080426), l = D(l, u, s, c, t[r + 6], 17, -1473231341), c = D(c, l, u, s, t[r + 7], 22, -45705983), s = D(s, c, l, u, t[r + 8], 7, 1770035416), u = D(u, s, c, l, t[r + 9], 12, -1958414417), l = D(l, u, s, c, t[r + 10], 17, -42063), c = D(c, l, u, s, t[r + 11], 22, -1990404162), s = D(s, c, l, u, t[r + 12], 7, 1804603682), u = D(u, s, c, l, t[r + 13], 12, -40341101), l = D(l, u, s, c, t[r + 14], 17, -1502002290), s = F(s, c = D(c, l, u, s, t[r + 15], 22, 1236535329), l, u, t[r + 1], 5, -165796510), u = F(u, s, c, l, t[r + 6], 9, -1069501632), l = F(l, u, s, c, t[r + 11], 14, 643717713), c = F(c, l, u, s, t[r], 20, -373897302), s = F(s, c, l, u, t[r + 5], 5, -701558691), u = F(u, s, c, l, t[r + 10], 9, 38016083), l = F(l, u, s, c, t[r + 15], 14, -660478335), c = F(c, l, u, s, t[r + 4], 20, -405537848), s = F(s, c, l, u, t[r + 9], 5, 568446438), u = F(u, s, c, l, t[r + 14], 9, -1019803690), l = F(l, u, s, c, t[r + 3], 14, -187363961), c = F(c, l, u, s, t[r + 8], 20, 1163531501), s = F(s, c, l, u, t[r + 13], 5, -1444681467), u = F(u, s, c, l, t[r + 2], 9, -51403784), l = F(l, u, s, c, t[r + 7], 14, 1735328473), s = A(s, c = F(c, l, u, s, t[r + 12], 20, -1926607734), l, u, t[r + 5], 4, -378558), u = A(u, s, c, l, t[r + 8], 11, -2022574463), l = A(l, u, s, c, t[r + 11], 16, 1839030562), c = A(c, l, u, s, t[r + 14], 23, -35309556), s = A(s, c, l, u, t[r + 1], 4, -1530992060), u = A(u, s, c, l, t[r + 4], 11, 1272893353), l = A(l, u, s, c, t[r + 7], 16, -155497632), c = A(c, l, u, s, t[r + 10], 23, -1094730640), s = A(s, c, l, u, t[r + 13], 4, 681279174), u = A(u, s, c, l, t[r], 11, -358537222), l = A(l, u, s, c, t[r + 3], 16, -722521979), c = A(c, l, u, s, t[r + 6], 23, 76029189), s = A(s, c, l, u, t[r + 9], 4, -640364487), u = A(u, s, c, l, t[r + 12], 11, -421815835), l = A(l, u, s, c, t[r + 15], 16, 530742520), s = B(s, c = A(c, l, u, s, t[r + 2], 23, -995338651), l, u, t[r], 6, -198630844), u = B(u, s, c, l, t[r + 7], 10, 1126891415), l = B(l, u, s, c, t[r + 14], 15, -1416354905), c = B(c, l, u, s, t[r + 5], 21, -57434055), s = B(s, c, l, u, t[r + 12], 6, 1700485571), u = B(u, s, c, l, t[r + 3], 10, -1894986606), l = B(l, u, s, c, t[r + 10], 15, -1051523), c = B(c, l, u, s, t[r + 1], 21, -2054922799), s = B(s, c, l, u, t[r + 8], 6, 1873313359), u = B(u, s, c, l, t[r + 15], 10, -30611744), l = B(l, u, s, c, t[r + 6], 15, -1560198380), c = B(c, l, u, s, t[r + 13], 21, 1309151649), s = B(s, c, l, u, t[r + 4], 6, -145523070), u = B(u, s, c, l, t[r + 11], 10, -1120210379), l = B(l, u, s, c, t[r + 2], 15, 718787259), c = B(c, l, u, s, t[r + 9], 21, -343485551), s = j(s, n), c = j(c, o), l = j(l, i), u = j(u, a);
    return [s, c, l, u]
  }

  function H(t) {
    var e, r = "",
      n = 32 * t.length;
    for (e = 0; e < n; e += 8) r += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return r
  }

  function L(t) {
    var e, r = [];
    for (r[(t.length >> 2) - 1] = void 0, e = 0; e < r.length; e += 1) r[e] = 0;
    var n = 8 * t.length;
    for (e = 0; e < n; e += 8) r[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return r
  }

  function P(t) {
    var e, r, n = "";
    for (r = 0; r < t.length; r += 1) e = t.charCodeAt(r), n += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
    return n
  }

  function I(t) {
    return unescape(encodeURIComponent(t))
  }

  function U(t) {
    return function(t) {
      return H(M(L(t), 8 * t.length))
    }(I(t))
  }

  function N(t, e) {
    return function(t, e) {
      var r, n, o = L(t),
        i = [],
        a = [];
      for (i[15] = a[15] = void 0, o.length > 16 && (o = M(o, 8 * t.length)), r = 0; r < 16; r += 1) i[r] = 909522486 ^ o[r], a[r] = 1549556828 ^ o[r];
      return n = M(i.concat(L(e)), 512 + 8 * e.length), H(M(a.concat(n), 640))
    }(I(t), I(e))
  }
  var q = function(t, e, r) {
    return e ? r ? N(e, t) : P(N(e, t)) : r ? U(t) : P(U(t))
  };

  function z(t) {
    this.name = "RavenConfigError", this.message = t
  }
  z.prototype = new Error, z.prototype.constructor = z;
  var K = z,
    W = function(t, e, r) {
      var n = t[e],
        o = t;
      if (e in t) {
        var i = "warn" === e ? "warning" : e;
        t[e] = function() {
          var t = [].slice.call(arguments),
            a = E.safeJoin(t, " "),
            s = {
              level: i,
              logger: "console",
              extra: {
                arguments: t
              }
            };
          "assert" === e ? !1 === t[0] && (a = "Assertion failed: " + (E.safeJoin(t.slice(1), " ") || "console.assert"), s.extra.arguments = t.slice(1), r && r(a, s)) : r && r(a, s), n && Function.prototype.apply.call(n, o, t)
        }
      }
    },
    V = E.isErrorEvent,
    $ = E.isDOMError,
    X = E.isDOMException,
    J = E.isError,
    G = E.isObject,
    Y = E.isPlainObject,
    Z = E.isUndefined,
    Q = E.isFunction,
    tt = E.isString,
    et = E.isArray,
    rt = E.isEmptyObject,
    nt = E.each,
    ot = E.objectMerge,
    it = E.truncate,
    at = E.objectFrozen,
    st = E.hasKey,
    ct = E.joinRegExp,
    lt = E.urlencode,
    ut = E.uuid4,
    pt = E.htmlTreeAsString,
    ht = E.isSameException,
    ft = E.isSameStacktrace,
    dt = E.parseUrl,
    gt = E.fill,
    _t = E.supportsFetch,
    vt = E.supportsReferrerPolicy,
    mt = E.serializeKeysForMessage,
    bt = E.serializeException,
    yt = E.sanitize,
    Et = W,
    wt = "source protocol user pass host port path".split(" "),
    xt = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

  function kt() {
    return +new Date
  }
  var St = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
    Ot = St.document,
    Ct = St.navigator;

  function Rt(t, e) {
    return Q(e) ? function(r) {
      return e(r, t)
    } : e
  }

  function jt() {
    for (var t in this._hasJSON = !("object" != typeof JSON || !JSON.stringify), this._hasDocument = !Z(Ot), this._hasNavigator = !Z(Ct), this._lastCapturedException = null, this._lastData = null, this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, this._globalContext = {}, this._globalOptions = {
        release: St.SENTRY_RELEASE && St.SENTRY_RELEASE.id,
        logger: "javascript",
        ignoreErrors: [],
        ignoreUrls: [],
        whitelistUrls: [],
        includePaths: [],
        headers: null,
        collectWindowErrors: !0,
        captureUnhandledRejections: !0,
        maxMessageLength: 0,
        maxUrlLength: 250,
        stackTraceLimit: 50,
        autoBreadcrumbs: !0,
        instrument: !0,
        sampleRate: 1,
        sanitizeKeys: []
      }, this._fetchDefaults = {
        method: "POST",
        keepalive: !0,
        referrerPolicy: vt() ? "origin" : ""
      }, this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, this._originalConsole = St.console || {}, this._originalConsoleMethods = {}, this._plugins = [], this._startTime = kt(), this._wrappedBuiltIns = [], this._breadcrumbs = [], this._lastCapturedEvent = null, this._keypressTimeout, this._location = St.location, this._lastHref = this._location && this._location.href, this._resetBackoff(), this._originalConsole) this._originalConsoleMethods[t] = this._originalConsole[t]
  }
  jt.prototype = {
    VERSION: "3.25.2",
    debug: !1,
    TraceKit: R,
    config: function(t, e) {
      var r = this;
      if (r._globalServer) return this._logDebug("error", "Error: Raven has already been configured"), r;
      if (!t) return r;
      var n = r._globalOptions;
      e && nt(e, function(t, e) {
        "tags" === t || "extra" === t || "user" === t ? r._globalContext[t] = e : n[t] = e
      }), r.setDSN(t), n.ignoreErrors.push(/^Script error\.?$/), n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), n.ignoreErrors = ct(n.ignoreErrors), n.ignoreUrls = !!n.ignoreUrls.length && ct(n.ignoreUrls), n.whitelistUrls = !!n.whitelistUrls.length && ct(n.whitelistUrls), n.includePaths = ct(n.includePaths), n.maxBreadcrumbs = Math.max(0, Math.min(n.maxBreadcrumbs || 100, 100));
      var o = {
          xhr: !0,
          console: !0,
          dom: !0,
          location: !0,
          sentry: !0
        },
        i = n.autoBreadcrumbs;
      "[object Object]" === {}.toString.call(i) ? i = ot(o, i) : !1 !== i && (i = o), n.autoBreadcrumbs = i;
      var a = {
          tryCatch: !0
        },
        s = n.instrument;
      return "[object Object]" === {}.toString.call(s) ? s = ot(a, s) : !1 !== s && (s = a), n.instrument = s, R.collectWindowErrors = !!n.collectWindowErrors, r
    },
    install: function() {
      var t = this;
      return t.isSetup() && !t._isRavenInstalled && (R.report.subscribe(function() {
        t._handleOnErrorStackInfo.apply(t, arguments)
      }), t._globalOptions.captureUnhandledRejections && t._attachPromiseRejectionHandler(), t._patchFunctionToString(), t._globalOptions.instrument && t._globalOptions.instrument.tryCatch && t._instrumentTryCatch(), t._globalOptions.autoBreadcrumbs && t._instrumentBreadcrumbs(), t._drainPlugins(), t._isRavenInstalled = !0), Error.stackTraceLimit = t._globalOptions.stackTraceLimit, this
    },
    setDSN: function(t) {
      var e = this._parseDSN(t),
        r = e.path.lastIndexOf("/"),
        n = e.path.substr(1, r);
      this._dsn = t, this._globalKey = e.user, this._globalSecret = e.pass && e.pass.substr(1), this._globalProject = e.path.substr(r + 1), this._globalServer = this._getGlobalServer(e), this._globalEndpoint = this._globalServer + "/" + n + "api/" + this._globalProject + "/store/", this._resetBackoff()
    },
    context: function(t, e, r) {
      return Q(t) && (r = e || [], e = t, t = void 0), this.wrap(t, e).apply(this, r)
    },
    wrap: function(t, e, r) {
      var n = this;
      if (Z(e) && !Q(t)) return t;
      if (Q(t) && (e = t, t = void 0), !Q(e)) return e;
      try {
        if (e.__raven__) return e;
        if (e.__raven_wrapper__) return e.__raven_wrapper__
      } catch (t) {
        return e
      }

      function o() {
        var o = [],
          i = arguments.length,
          a = !t || t && !1 !== t.deep;
        for (r && Q(r) && r.apply(this, arguments); i--;) o[i] = a ? n.wrap(t, arguments[i]) : arguments[i];
        try {
          return e.apply(this, o)
        } catch (e) {
          throw n._ignoreNextOnError(), n.captureException(e, t), e
        }
      }
      for (var i in e) st(e, i) && (o[i] = e[i]);
      return o.prototype = e.prototype, e.__raven_wrapper__ = o, o.__raven__ = !0, o.__orig__ = e, o
    },
    uninstall: function() {
      return R.report.uninstall(), this._detachPromiseRejectionHandler(), this._unpatchFunctionToString(), this._restoreBuiltIns(), this._restoreConsole(), Error.stackTraceLimit = this._originalErrorStackTraceLimit, this._isRavenInstalled = !1, this
    },
    _promiseRejectionHandler: function(t) {
      this._logDebug("debug", "Raven caught unhandled promise rejection:", t), this.captureException(t.reason, {
        extra: {
          unhandledPromiseRejection: !0
        }
      })
    },
    _attachPromiseRejectionHandler: function() {
      return this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this), St.addEventListener && St.addEventListener("unhandledrejection", this._promiseRejectionHandler), this
    },
    _detachPromiseRejectionHandler: function() {
      return St.removeEventListener && St.removeEventListener("unhandledrejection", this._promiseRejectionHandler), this
    },
    captureException: function(t, e) {
      if (e = ot({
          trimHeadFrames: 0
        }, e || {}), V(t) && t.error) t = t.error;
      else {
        if ($(t) || X(t)) {
          var r = t.name || ($(t) ? "DOMError" : "DOMException"),
            n = t.message ? r + ": " + t.message : r;
          return this.captureMessage(n, ot(e, {
            stacktrace: !0,
            trimHeadFrames: e.trimHeadFrames + 1
          }))
        }
        if (J(t)) t = t;
        else {
          if (!Y(t)) return this.captureMessage(t, ot(e, {
            stacktrace: !0,
            trimHeadFrames: e.trimHeadFrames + 1
          }));
          e = this._getCaptureExceptionOptionsFromPlainObject(e, t), t = new Error(e.message)
        }
      }
      this._lastCapturedException = t;
      try {
        var o = R.computeStackTrace(t);
        this._handleStackInfo(o, e)
      } catch (e) {
        if (t !== e) throw e
      }
      return this
    },
    _getCaptureExceptionOptionsFromPlainObject: function(t, e) {
      var r = Object.keys(e).sort(),
        n = ot(t, {
          message: "Non-Error exception captured with keys: " + mt(r),
          fingerprint: [q(r)],
          extra: t.extra || {}
        });
      return n.extra.__serialized__ = bt(e), n
    },
    captureMessage: function(t, e) {
      if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) {
        var r, n = ot({
          message: t += ""
        }, e = e || {});
        try {
          throw new Error(t)
        } catch (t) {
          r = t
        }
        r.name = null;
        var o = R.computeStackTrace(r),
          i = et(o.stack) && o.stack[1];
        i && "Raven.captureException" === i.func && (i = o.stack[2]);
        var a = i && i.url || "";
        if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(a)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(a))) {
          if (this._globalOptions.stacktrace || e && e.stacktrace) {
            n.fingerprint = null == n.fingerprint ? t : n.fingerprint, (e = ot({
              trimHeadFrames: 0
            }, e)).trimHeadFrames += 1;
            var s = this._prepareFrames(o, e);
            n.stacktrace = {
              frames: s.reverse()
            }
          }
          return n.fingerprint && (n.fingerprint = et(n.fingerprint) ? n.fingerprint : [n.fingerprint]), this._send(n), this
        }
      }
    },
    captureBreadcrumb: function(t) {
      var e = ot({
        timestamp: kt() / 1e3
      }, t);
      if (Q(this._globalOptions.breadcrumbCallback)) {
        var r = this._globalOptions.breadcrumbCallback(e);
        if (G(r) && !rt(r)) e = r;
        else if (!1 === r) return this
      }
      return this._breadcrumbs.push(e), this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(), this
    },
    addPlugin: function(t) {
      var e = [].slice.call(arguments, 1);
      return this._plugins.push([t, e]), this._isRavenInstalled && this._drainPlugins(), this
    },
    setUserContext: function(t) {
      return this._globalContext.user = t, this
    },
    setExtraContext: function(t) {
      return this._mergeContext("extra", t), this
    },
    setTagsContext: function(t) {
      return this._mergeContext("tags", t), this
    },
    clearContext: function() {
      return this._globalContext = {}, this
    },
    getContext: function() {
      return JSON.parse(r(this._globalContext))
    },
    setEnvironment: function(t) {
      return this._globalOptions.environment = t, this
    },
    setRelease: function(t) {
      return this._globalOptions.release = t, this
    },
    setDataCallback: function(t) {
      var e = this._globalOptions.dataCallback;
      return this._globalOptions.dataCallback = Rt(e, t), this
    },
    setBreadcrumbCallback: function(t) {
      var e = this._globalOptions.breadcrumbCallback;
      return this._globalOptions.breadcrumbCallback = Rt(e, t), this
    },
    setShouldSendCallback: function(t) {
      var e = this._globalOptions.shouldSendCallback;
      return this._globalOptions.shouldSendCallback = Rt(e, t), this
    },
    setTransport: function(t) {
      return this._globalOptions.transport = t, this
    },
    lastException: function() {
      return this._lastCapturedException
    },
    lastEventId: function() {
      return this._lastEventId
    },
    isSetup: function() {
      return !!this._hasJSON && (!!this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), !1))
    },
    afterLoad: function() {
      var t = St.RavenConfig;
      t && this.config(t.dsn, t.config).install()
    },
    showReportDialog: function(t) {
      if (Ot) {
        var e = (t = t || {}).eventId || this.lastEventId();
        if (!e) throw new K("Missing eventId");
        var r = t.dsn || this._dsn;
        if (!r) throw new K("Missing DSN");
        var n = encodeURIComponent,
          o = "";
        o += "?eventId=" + n(e), o += "&dsn=" + n(r);
        var i = t.user || this._globalContext.user;
        i && (i.name && (o += "&name=" + n(i.name)), i.email && (o += "&email=" + n(i.email)));
        var a = this._getGlobalServer(this._parseDSN(r)),
          s = Ot.createElement("script");
        s.async = !0, s.src = a + "/api/embed/error-page/" + o, (Ot.head || Ot.body).appendChild(s)
      }
    },
    _ignoreNextOnError: function() {
      var t = this;
      this._ignoreOnError += 1, setTimeout(function() {
        t._ignoreOnError -= 1
      })
    },
    _triggerEvent: function(t, e) {
      var r, n;
      if (this._hasDocument) {
        for (n in e = e || {}, t = "raven" + t.substr(0, 1).toUpperCase() + t.substr(1), Ot.createEvent ? (r = Ot.createEvent("HTMLEvents")).initEvent(t, !0, !0) : (r = Ot.createEventObject()).eventType = t, e) st(e, n) && (r[n] = e[n]);
        if (Ot.createEvent) Ot.dispatchEvent(r);
        else try {
          Ot.fireEvent("on" + r.eventType.toLowerCase(), r)
        } catch (t) {}
      }
    },
    _breadcrumbEventHandler: function(t) {
      var e = this;
      return function(r) {
        if (e._keypressTimeout = null, e._lastCapturedEvent !== r) {
          var n;
          e._lastCapturedEvent = r;
          try {
            n = pt(r.target)
          } catch (t) {
            n = "<unknown>"
          }
          e.captureBreadcrumb({
            category: "ui." + t,
            message: n
          })
        }
      }
    },
    _keypressEventHandler: function() {
      var t = this;
      return function(e) {
        var r;
        try {
          r = e.target
        } catch (t) {
          return
        }
        var n = r && r.tagName;
        if (n && ("INPUT" === n || "TEXTAREA" === n || r.isContentEditable)) {
          var o = t._keypressTimeout;
          o || t._breadcrumbEventHandler("input")(e), clearTimeout(o), t._keypressTimeout = setTimeout(function() {
            t._keypressTimeout = null
          }, 1e3)
        }
      }
    },
    _captureUrlChange: function(t, e) {
      var r = dt(this._location.href),
        n = dt(e),
        o = dt(t);
      this._lastHref = e, r.protocol === n.protocol && r.host === n.host && (e = n.relative), r.protocol === o.protocol && r.host === o.host && (t = o.relative), this.captureBreadcrumb({
        category: "navigation",
        data: {
          to: e,
          from: t
        }
      })
    },
    _patchFunctionToString: function() {
      var t = this;
      t._originalFunctionToString = Function.prototype.toString, Function.prototype.toString = function() {
        return "function" == typeof this && this.__raven__ ? t._originalFunctionToString.apply(this.__orig__, arguments) : t._originalFunctionToString.apply(this, arguments)
      }
    },
    _unpatchFunctionToString: function() {
      this._originalFunctionToString && (Function.prototype.toString = this._originalFunctionToString)
    },
    _instrumentTryCatch: function() {
      var t = this,
        e = t._wrappedBuiltIns;

      function r(e) {
        return function(r, n) {
          for (var o = new Array(arguments.length), i = 0; i < o.length; ++i) o[i] = arguments[i];
          var a = o[0];
          return Q(a) && (o[0] = t.wrap(a)), e.apply ? e.apply(this, o) : e(o[0], o[1])
        }
      }
      var n = this._globalOptions.autoBreadcrumbs;

      function o(r) {
        var o = St[r] && St[r].prototype;
        o && o.hasOwnProperty && o.hasOwnProperty("addEventListener") && (gt(o, "addEventListener", function(e) {
          return function(o, i, a, s) {
            try {
              i && i.handleEvent && (i.handleEvent = t.wrap(i.handleEvent))
            } catch (t) {}
            var c, l, u;
            return n && n.dom && ("EventTarget" === r || "Node" === r) && (l = t._breadcrumbEventHandler("click"), u = t._keypressEventHandler(), c = function(t) {
              if (t) {
                var e;
                try {
                  e = t.type
                } catch (t) {
                  return
                }
                return "click" === e ? l(t) : "keypress" === e ? u(t) : void 0
              }
            }), e.call(this, o, t.wrap(i, void 0, c), a, s)
          }
        }, e), gt(o, "removeEventListener", function(t) {
          return function(e, r, n, o) {
            try {
              r = r && (r.__raven_wrapper__ ? r.__raven_wrapper__ : r)
            } catch (t) {}
            return t.call(this, e, r, n, o)
          }
        }, e))
      }
      gt(St, "setTimeout", r, e), gt(St, "setInterval", r, e), St.requestAnimationFrame && gt(St, "requestAnimationFrame", function(e) {
        return function(r) {
          return e(t.wrap(r))
        }
      }, e);
      for (var i = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], a = 0; a < i.length; a++) o(i[a])
    },
    _instrumentBreadcrumbs: function() {
      var t = this,
        e = this._globalOptions.autoBreadcrumbs,
        r = t._wrappedBuiltIns;

      function n(e, r) {
        e in r && Q(r[e]) && gt(r, e, function(e) {
          return t.wrap(e)
        })
      }
      if (e.xhr && "XMLHttpRequest" in St) {
        var o = St.XMLHttpRequest && St.XMLHttpRequest.prototype;
        gt(o, "open", function(e) {
          return function(r, n) {
            return tt(n) && -1 === n.indexOf(t._globalKey) && (this.__raven_xhr = {
              method: r,
              url: n,
              status_code: null
            }), e.apply(this, arguments)
          }
        }, r), gt(o, "send", function(e) {
          return function() {
            var r = this;

            function o() {
              if (r.__raven_xhr && 4 === r.readyState) {
                try {
                  r.__raven_xhr.status_code = r.status
                } catch (t) {}
                t.captureBreadcrumb({
                  type: "http",
                  category: "xhr",
                  data: r.__raven_xhr
                })
              }
            }
            for (var i = ["onload", "onerror", "onprogress"], a = 0; a < i.length; a++) n(i[a], r);
            return "onreadystatechange" in r && Q(r.onreadystatechange) ? gt(r, "onreadystatechange", function(e) {
              return t.wrap(e, void 0, o)
            }) : r.onreadystatechange = o, e.apply(this, arguments)
          }
        }, r)
      }
      e.xhr && _t() && gt(St, "fetch", function(e) {
        return function() {
          for (var r = new Array(arguments.length), n = 0; n < r.length; ++n) r[n] = arguments[n];
          var o, i = r[0],
            a = "GET";
          if ("string" == typeof i ? o = i : "Request" in St && i instanceof St.Request ? (o = i.url, i.method && (a = i.method)) : o = "" + i, -1 !== o.indexOf(t._globalKey)) return e.apply(this, r);
          r[1] && r[1].method && (a = r[1].method);
          var s = {
            method: a,
            url: o,
            status_code: null
          };
          return e.apply(this, r).then(function(e) {
            return s.status_code = e.status, t.captureBreadcrumb({
              type: "http",
              category: "fetch",
              data: s
            }), e
          }).catch(function(e) {
            throw t.captureBreadcrumb({
              type: "http",
              category: "fetch",
              data: s,
              level: "error"
            }), e
          })
        }
      }, r), e.dom && this._hasDocument && (Ot.addEventListener ? (Ot.addEventListener("click", t._breadcrumbEventHandler("click"), !1), Ot.addEventListener("keypress", t._keypressEventHandler(), !1)) : Ot.attachEvent && (Ot.attachEvent("onclick", t._breadcrumbEventHandler("click")), Ot.attachEvent("onkeypress", t._keypressEventHandler())));
      var i = St.chrome,
        a = !(i && i.app && i.app.runtime) && St.history && St.history.pushState && St.history.replaceState;
      if (e.location && a) {
        var s = St.onpopstate;
        St.onpopstate = function() {
          var e = t._location.href;
          if (t._captureUrlChange(t._lastHref, e), s) return s.apply(this, arguments)
        };
        var c = function(e) {
          return function() {
            var r = arguments.length > 2 ? arguments[2] : void 0;
            return r && t._captureUrlChange(t._lastHref, r + ""), e.apply(this, arguments)
          }
        };
        gt(St.history, "pushState", c, r), gt(St.history, "replaceState", c, r)
      }
      if (e.console && "console" in St && console.log) {
        var l = function(e, r) {
          t.captureBreadcrumb({
            message: e,
            level: r.level,
            category: "console"
          })
        };
        nt(["debug", "info", "warn", "error", "log"], function(t, e) {
          Et(console, e, l)
        })
      }
    },
    _restoreBuiltIns: function() {
      for (var t; this._wrappedBuiltIns.length;) {
        var e = (t = this._wrappedBuiltIns.shift())[0],
          r = t[1],
          n = t[2];
        e[r] = n
      }
    },
    _restoreConsole: function() {
      for (var t in this._originalConsoleMethods) this._originalConsole[t] = this._originalConsoleMethods[t]
    },
    _drainPlugins: function() {
      var t = this;
      nt(this._plugins, function(e, r) {
        var n = r[0],
          o = r[1];
        n.apply(t, [t].concat(o))
      })
    },
    _parseDSN: function(t) {
      var e = xt.exec(t),
        r = {},
        n = 7;
      try {
        for (; n--;) r[wt[n]] = e[n] || ""
      } catch (e) {
        throw new K("Invalid DSN: " + t)
      }
      if (r.pass && !this._globalOptions.allowSecretKey) throw new K("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
      return r
    },
    _getGlobalServer: function(t) {
      var e = "//" + t.host + (t.port ? ":" + t.port : "");
      return t.protocol && (e = t.protocol + ":" + e), e
    },
    _handleOnErrorStackInfo: function() {
      this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
    },
    _handleStackInfo: function(t, e) {
      var r = this._prepareFrames(t, e);
      this._triggerEvent("handle", {
        stackInfo: t,
        options: e
      }), this._processException(t.name, t.message, t.url, t.lineno, r, e)
    },
    _prepareFrames: function(t, e) {
      var r = this,
        n = [];
      if (t.stack && t.stack.length && (nt(t.stack, function(e, o) {
          var i = r._normalizeFrame(o, t.url);
          i && n.push(i)
        }), e && e.trimHeadFrames))
        for (var o = 0; o < e.trimHeadFrames && o < n.length; o++) n[o].in_app = !1;
      return n = n.slice(0, this._globalOptions.stackTraceLimit)
    },
    _normalizeFrame: function(t, e) {
      var r = {
        filename: t.url,
        lineno: t.line,
        colno: t.column,
        function: t.func || "?"
      };
      return t.url || (r.filename = e), r.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(r.filename) || /(Raven|TraceKit)\./.test(r.function) || /raven\.(min\.)?js$/.test(r.filename)), r
    },
    _processException: function(t, e, r, n, o, i) {
      var a, s = (t ? t + ": " : "") + (e || "");
      if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e) && !this._globalOptions.ignoreErrors.test(s)) && (o && o.length ? (r = o[0].filename || r, o.reverse(), a = {
          frames: o
        }) : r && (a = {
          frames: [{
            filename: r,
            lineno: n,
            in_app: !0
          }]
        }), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(r)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(r)))) {
        var c = ot({
          exception: {
            values: [{
              type: t,
              value: e,
              stacktrace: a
            }]
          },
          transaction: r
        }, i);
        this._send(c)
      }
    },
    _trimPacket: function(t) {
      var e = this._globalOptions.maxMessageLength;
      if (t.message && (t.message = it(t.message, e)), t.exception) {
        var r = t.exception.values[0];
        r.value = it(r.value, e)
      }
      var n = t.request;
      return n && (n.url && (n.url = it(n.url, this._globalOptions.maxUrlLength)), n.Referer && (n.Referer = it(n.Referer, this._globalOptions.maxUrlLength))), t.breadcrumbs && t.breadcrumbs.values && this._trimBreadcrumbs(t.breadcrumbs), t
    },
    _trimBreadcrumbs: function(t) {
      for (var e, r, n, o = ["to", "from", "url"], i = 0; i < t.values.length; ++i)
        if ((r = t.values[i]).hasOwnProperty("data") && G(r.data) && !at(r.data)) {
          n = ot({}, r.data);
          for (var a = 0; a < o.length; ++a) e = o[a], n.hasOwnProperty(e) && n[e] && (n[e] = it(n[e], this._globalOptions.maxUrlLength));
          t.values[i].data = n
        }
    },
    _getHttpData: function() {
      if (this._hasNavigator || this._hasDocument) {
        var t = {};
        return this._hasNavigator && Ct.userAgent && (t.headers = {
          "User-Agent": Ct.userAgent
        }), St.location && St.location.href && (t.url = St.location.href), this._hasDocument && Ot.referrer && (t.headers || (t.headers = {}), t.headers.Referer = Ot.referrer), t
      }
    },
    _resetBackoff: function() {
      this._backoffDuration = 0, this._backoffStart = null
    },
    _shouldBackoff: function() {
      return this._backoffDuration && kt() - this._backoffStart < this._backoffDuration
    },
    _isRepeatData: function(t) {
      var e = this._lastData;
      return !(!e || t.message !== e.message || t.transaction !== e.transaction) && (t.stacktrace || e.stacktrace ? ft(t.stacktrace, e.stacktrace) : !t.exception && !e.exception || ht(t.exception, e.exception))
    },
    _setBackoffState: function(t) {
      if (!this._shouldBackoff()) {
        var e = t.status;
        if (400 === e || 401 === e || 429 === e) {
          var r;
          try {
            r = _t() ? t.headers.get("Retry-After") : t.getResponseHeader("Retry-After"), r = 1e3 * parseInt(r, 10)
          } catch (t) {}
          this._backoffDuration = r || (2 * this._backoffDuration || 1e3), this._backoffStart = kt()
        }
      }
    },
    _send: function(t) {
      var e = this._globalOptions,
        r = {
          project: this._globalProject,
          logger: e.logger,
          platform: "javascript"
        },
        n = this._getHttpData();
      n && (r.request = n), t.trimHeadFrames && delete t.trimHeadFrames, (t = ot(r, t)).tags = ot(ot({}, this._globalContext.tags), t.tags), t.extra = ot(ot({}, this._globalContext.extra), t.extra), t.extra["session:duration"] = kt() - this._startTime, this._breadcrumbs && this._breadcrumbs.length > 0 && (t.breadcrumbs = {
        values: [].slice.call(this._breadcrumbs, 0)
      }), this._globalContext.user && (t.user = this._globalContext.user), e.environment && (t.environment = e.environment), e.release && (t.release = e.release), e.serverName && (t.server_name = e.serverName), t = this._sanitizeData(t), Object.keys(t).forEach(function(e) {
        (null == t[e] || "" === t[e] || rt(t[e])) && delete t[e]
      }), Q(e.dataCallback) && (t = e.dataCallback(t) || t), t && !rt(t) && (Q(e.shouldSendCallback) && !e.shouldSendCallback(t) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", t) : "number" == typeof e.sampleRate ? Math.random() < e.sampleRate && this._sendProcessedPayload(t) : this._sendProcessedPayload(t)))
    },
    _sanitizeData: function(t) {
      return yt(t, this._globalOptions.sanitizeKeys)
    },
    _getUuid: function() {
      return ut()
    },
    _sendProcessedPayload: function(t, e) {
      var r = this,
        n = this._globalOptions;
      if (this.isSetup())
        if (t = this._trimPacket(t), this._globalOptions.allowDuplicates || !this._isRepeatData(t)) {
          this._lastEventId = t.event_id || (t.event_id = this._getUuid()), this._lastData = t, this._logDebug("debug", "Raven about to send:", t);
          var o = {
            sentry_version: "7",
            sentry_client: "raven-js/" + this.VERSION,
            sentry_key: this._globalKey
          };
          this._globalSecret && (o.sentry_secret = this._globalSecret);
          var i = t.exception && t.exception.values[0];
          this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry && this.captureBreadcrumb({
            category: "sentry",
            message: i ? (i.type ? i.type + ": " : "") + i.value : t.message,
            event_id: t.event_id,
            level: t.level || "error"
          });
          var a = this._globalEndpoint;
          (n.transport || this._makeRequest).call(this, {
            url: a,
            auth: o,
            data: t,
            options: n,
            onSuccess: function() {
              r._resetBackoff(), r._triggerEvent("success", {
                data: t,
                src: a
              }), e && e()
            },
            onError: function(n) {
              r._logDebug("error", "Raven transport failed to send: ", n), n.request && r._setBackoffState(n.request), r._triggerEvent("failure", {
                data: t,
                src: a
              }), n = n || new Error("Raven send failed (no additional details provided)"), e && e(n)
            }
          })
        } else this._logDebug("warn", "Raven dropped repeat event: ", t)
    },
    _makeRequest: function(t) {
      var e = t.url + "?" + lt(t.auth),
        n = null,
        o = {};
      if (t.options.headers && (n = this._evaluateHash(t.options.headers)), t.options.fetchParameters && (o = this._evaluateHash(t.options.fetchParameters)), _t()) {
        o.body = r(t.data);
        var i = ot({}, this._fetchDefaults),
          a = ot(i, o);
        return n && (a.headers = n), St.fetch(e, a).then(function(e) {
          if (e.ok) t.onSuccess && t.onSuccess();
          else {
            var r = new Error("Sentry error code: " + e.status);
            r.request = e, t.onError && t.onError(r)
          }
        }).catch(function() {
          t.onError && t.onError(new Error("Sentry error code: network unavailable"))
        })
      }
      var s = St.XMLHttpRequest && new St.XMLHttpRequest;
      s && (("withCredentials" in s || "undefined" != typeof XDomainRequest) && ("withCredentials" in s ? s.onreadystatechange = function() {
        if (4 === s.readyState)
          if (200 === s.status) t.onSuccess && t.onSuccess();
          else if (t.onError) {
          var e = new Error("Sentry error code: " + s.status);
          e.request = s, t.onError(e)
        }
      } : (s = new XDomainRequest, e = e.replace(/^https?:/, ""), t.onSuccess && (s.onload = t.onSuccess), t.onError && (s.onerror = function() {
        var e = new Error("Sentry error code: XDomainRequest");
        e.request = s, t.onError(e)
      })), s.open("POST", e), n && nt(n, function(t, e) {
        s.setRequestHeader(t, e)
      }), s.send(r(t.data))))
    },
    _evaluateHash: function(t) {
      var e = {};
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var n = t[r];
          e[r] = "function" == typeof n ? n() : n
        }
      return e
    },
    _logDebug: function(t) {
      this._originalConsoleMethods[t] && (this.debug || this._globalOptions.debug) && Function.prototype.apply.call(this._originalConsoleMethods[t], this._originalConsole, [].slice.call(arguments, 1))
    },
    _mergeContext: function(t, e) {
      Z(e) ? delete this._globalContext[t] : this._globalContext[t] = ot(this._globalContext[t] || {}, e)
    }
  }, jt.prototype.setUser = jt.prototype.setUserContext, jt.prototype.setReleaseContext = jt.prototype.setRelease;
  var Tt = jt,
    Dt = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
    Ft = Dt.Raven,
    At = new Tt;
  At.noConflict = function() {
    return Dt.Raven = Ft, At
  }, At.afterLoad();
  var Bt, Mt, Ht, Lt, Pt, It, Ut, Nt = At,
    qt = Tt;
  Nt.Client = qt, (Ut = "plyr.io" === window.location.host) && Nt.config("https://d4ad9866ad834437a4754e23937071e4@sentry.io/305555").install(), document.addEventListener("DOMContentLoaded", function() {
    Nt.context(function() {
      window.shr && window.shr.setup({
        count: {
          classname: "button__count"
        }
      }), document.addEventListener("focusout", function(t) {
        t.target.classList.remove("tab-focus")
      }), document.addEventListener("keydown", function(t) {
        9 === t.keyCode && setTimeout(function() {
          document.activeElement.classList.add("tab-focus")
        }, 0)
      });
      var t = new Plyr("#player", {
        "title": "{{ page.info }}",
        "controls": ['play', 'progress', 'current-time'],
        "autoplay": false,
        "speed": {
          selected: 1, options: [1]
        },
        "disableContextMenu": true
      });
      window.player = t;
      var e = document.querySelectorAll("[data-source]"),
        r = {
          video: "video",
          audio: "audio",
          youtube: "youtube",
          vimeo: "vimeo"
        },
        n = window.location.hash.replace("#", ""),
        o = window.history && window.history.pushState;

      function i(t, e, r) {
        t && t.classList[r ? "add" : "remove"](e)
      }

      function a(o, a) {
        if (o in r && (a || o !== n) && (n.length || o !== r.video)) {
          switch (o) {
            case r.video:
              t.source = {
                type: "video",
                title: "View From A Blue Moon",
                sources: [{
                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                  type: "video/mp4",
                  size: 576
                }, {
                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
                  type: "video/mp4",
                  size: 720
                }, {
                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
                  type: "video/mp4",
                  size: 1080
                }, {
                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4",
                  type: "video/mp4",
                  size: 1440
                }],
                poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
                tracks: [{
                  kind: "captions",
                  label: "English",
                  srclang: "en",
                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
                  default: !0
                }, {
                  kind: "captions",
                  label: "French",
                  srclang: "fr",
                  src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
                }]
              };
              break;
            case r.audio:
              t.source = {
                type: "audio",
                title: "Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",
                sources: [{
                  src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
                  type: "audio/mp3"
                }, {
                  src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",
                  type: "audio/ogg"
                }]
              };
              break;
            case r.youtube:
              t.source = {
                type: "video",
                sources: [{
                  src: "https://youtube.com/watch?v=bTqVqk7FSmY",
                  provider: "youtube"
                }]
              };
              break;
            case r.vimeo:
              t.source = {
                type: "video",
                sources: [{
                  src: "https://vimeo.com/76979871",
                  provider: "vimeo"
                }]
              }
          }
          n = o, Array.from(e).forEach(function(t) {
            return i(t.parentElement, "active", !1)
          }), i(document.querySelector('[data-source="' + o + '"]'), "active", !0), Array.from(document.querySelectorAll(".plyr__cite")).forEach(function(t) {
            t.setAttribute("hidden", "")
          }), document.querySelector(".plyr__cite--" + o).removeAttribute("hidden")
        }
      }
      if (Array.from(e).forEach(function(t) {
          t.addEventListener("click", function() {
            var e = t.getAttribute("data-source");
            a(e), o && window.history.pushState({
              type: e
            }, "", "#" + e)
          })
        }), window.addEventListener("popstate", function(t) {
          t.state && "type" in t.state && a(t.state.type)
        }), o) {
        var s = !n.length;
        s && (n = r.video), n in r && window.history.replaceState({
          type: n
        }, "", s ? "" : "#" + n), n !== r.video && a(n, !0)
      }
    })
  }), Ut && (Bt = window, Mt = document, Ht = "script", Lt = "ga", Bt.GoogleAnalyticsObject = Lt, Bt.ga = Bt.ga || function() {
    (Bt.ga.q = Bt.ga.q || []).push(arguments)
  }, Bt.ga.l = 1 * new Date, Pt = Mt.createElement(Ht), It = Mt.getElementsByTagName(Ht)[0], Pt.async = 1, Pt.src = "https://www.google-analytics.com/analytics.js", It.parentNode.insertBefore(Pt, It), window.ga("create", "UA-40881672-11", "auto"), window.ga("send", "pageview"))
}();
//# sourceMappingURL=demo.js.map
