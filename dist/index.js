import Pe from "react";
import Q from "classnames";
var X = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function dr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var m = Pe, _ = Symbol.for("react.element"), C = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), p = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), ee = Symbol.iterator, Me = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Me];
      return typeof r == "function" ? r : null;
    }
    var P = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Le = !1, Fe = !1, Ve = !1, De = !1, He = !1, re;
    re = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === j || He || e === T || e === h || e === f || De || e === D || Le || Fe || Ve || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === y || e.$$typeof === p || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case C:
          return "Portal";
        case j:
          return "Profiler";
        case T:
          return "StrictMode";
        case h:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return te(r) + ".Consumer";
          case y:
            var t = e;
            return te(t._context) + ".Provider";
          case u:
            return Ie(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case x: {
            var i = e, l = i._payload, o = i._init;
            try {
              return w(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, k = 0, ne, ae, oe, ie, le, ue, se;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function $e() {
      {
        if (k === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, le = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        k++;
      }
    }
    function Ne() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: ae
            }),
            warn: S({}, e, {
              value: oe
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: le
            }),
            groupCollapsed: S({}, e, {
              value: ue
            }),
            groupEnd: S({}, e, {
              value: se
            })
          });
        }
        k < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = P.ReactCurrentDispatcher, Y;
    function H(e, r, t) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Y = n && n[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var U = !1, z;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      z = new We();
    }
    function fe(e, r) {
      if (!e || U)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      U = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = W.current, W.current = null, $e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              n = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var a = O.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, c = v.length - 1; s >= 1 && c >= 0 && a[s] !== v[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (a[s] !== v[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || a[s] !== v[c]) {
                    var g = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, g), g;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        U = !1, W.current = l, Ne(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", Te = A ? H(A) : "";
      return typeof e == "function" && z.set(e, Te), Te;
    }
    function Ye(e, r, t) {
      return fe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function I(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ue(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case h:
          return H("Suspense");
        case f:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ye(e.render);
          case b:
            return I(e.type, r, t);
          case x: {
            var n = e, i = n._payload, l = n._init;
            try {
              return I(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, de = {}, ve = P.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = I(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var l = Function.call.bind($);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (N(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, N(i), d("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Ze = Array.isArray;
    function B(e) {
      return Ze(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function pe(e) {
      if (Je(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), _e(e);
    }
    var L = P.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, Z;
    Z = {};
    function Ke(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = w(L.current.type);
        Z[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(L.current.type), e.ref), Z[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          he || (he = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, l, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var l, o = {}, a = null, v = null;
        t !== void 0 && (pe(t), a = "" + t), Xe(r) && (pe(r.key), a = "" + r.key), Ke(r) && (v = r.ref, Qe(r, i));
        for (l in r)
          $.call(r, l) && !Ge.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (l in s)
            o[l] === void 0 && (o[l] = s[l]);
        }
        if (a || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, c), v && rr(o, c);
        }
        return tr(e, a, v, i, n, L.current, o);
      }
    }
    var q = P.ReactCurrentOwner, me = P.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = I(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function ye() {
      {
        if (q.current) {
          var e = w(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function or(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== q.current && (n = " It was passed a child from " + w(e._owner.type) + "."), M(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), M(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            G(n) && Ce(n, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ae(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), o; !(o = l.next()).done; )
              G(o.value) && Ce(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = w(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            M(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    function Re(e, r, t, n, i, l) {
      {
        var o = ze(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = ar(i);
          v ? a += v : a += ye();
          var s;
          e === null ? s = "null" : B(e) ? s = "array" : e !== void 0 && e.$$typeof === _ ? (s = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var c = nr(e, r, t, i, l);
        if (c == null)
          return c;
        if (o) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (B(g)) {
                for (var A = 0; A < g.length; A++)
                  Ee(g[A], e);
                Object.freeze && Object.freeze(g);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(g, e);
        }
        return e === E ? lr(c) : ir(c), c;
      }
    }
    function ur(e, r, t) {
      return Re(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Re(e, r, t, !1);
    }
    var cr = sr, fr = ur;
    F.Fragment = E, F.jsx = cr, F.jsxs = fr;
  }()), F;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe)
    return V;
  Oe = 1;
  var m = Pe, _ = Symbol.for("react.element"), C = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, T = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(p, u, h) {
    var f, b = {}, x = null, D = null;
    h !== void 0 && (x = "" + h), u.key !== void 0 && (x = "" + u.key), u.ref !== void 0 && (D = u.ref);
    for (f in u)
      E.call(u, f) && !j.hasOwnProperty(f) && (b[f] = u[f]);
    if (p && p.defaultProps)
      for (f in u = p.defaultProps, u)
        b[f] === void 0 && (b[f] = u[f]);
    return { $$typeof: _, type: p, key: x, ref: D, props: b, _owner: T.current };
  }
  return V.Fragment = C, V.jsx = y, V.jsxs = y, V;
}
process.env.NODE_ENV === "production" ? X.exports = vr() : X.exports = dr();
var R = X.exports;
const K = {
  horn: "M18.6 12.6875V10.3125H23V12.6875H18.6ZM19.92 21L16.4 18.15L17.72 16.25L21.24 19.1L19.92 21ZM17.72 6.75L16.4 4.85L19.92 2L21.24 3.9L17.72 6.75ZM4.3 19.8125V15.0625H3.2C2.595 15.0625 2.07708 14.8299 1.64625 14.3648C1.21542 13.8997 1 13.3406 1 12.6875V10.3125C1 9.65938 1.21542 9.10026 1.64625 8.63516C2.07708 8.17005 2.595 7.9375 3.2 7.9375H7.6L13.1 4.375V18.625L7.6 15.0625H6.5V19.8125H4.3ZM14.2 15.4781V7.52187C14.695 7.99688 15.0938 8.57578 15.3963 9.25859C15.6988 9.94141 15.85 10.6885 15.85 11.5C15.85 12.3115 15.6988 13.0586 15.3963 13.7414C15.0938 14.4242 14.695 15.0031 14.2 15.4781ZM3.2 10.3125V12.6875H8.205L10.9 14.4094V8.59063L8.205 10.3125H3.2Z",
  chevron: "M4.471 5.528c-.26-.26-.682-.26-.943 0s-.26.682 0 .943l.943-.943zM8 10l-.471.471c.26.26.682.26.943 0L8 10zm4.471-3.529c.26-.26.26-.682 0-.943s-.682-.26-.943 0l.943.943zm-8.943 0l4 4 .943-.943-4-4-.943.943zm4.943 4l4-4-.943-.943-4 4 .943.943z",
  "plus-circle": "M8 1.333A6.67 6.67 0 0 1 14.666 8 6.67 6.67 0 0 1 8 14.666 6.67 6.67 0 0 1 1.333 8 6.67 6.67 0 0 1 8 1.333zm0 1.333C5.054 2.666 2.666 5.054 2.666 8S5.054 13.333 8 13.333 13.333 10.945 13.333 8 10.945 2.666 8 2.666zm0 2c.368 0 .667.298.667.667h0v2h2c.368 0 .667.298.667.667s-.298.667-.667.667h0-2v2c0 .368-.298.667-.667.667s-.667-.298-.667-.667h0v-2h-2c-.368 0-.667-.298-.667-.667s.298-.667.667-.667h0 2v-2c0-.368.298-.667.667-.667z",
  add: "M8.667 3.334c0-.368-.298-.667-.667-.667s-.667.298-.667.667v4h-4c-.368 0-.667.298-.667.667s.298.667.667.667h4v4c0 .368.298.667.667.667s.667-.298.667-.667v-4h4c.368 0 .667-.298.667-.667s-.298-.667-.667-.667h-4v-4z",
  list: "M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01",
  "left-arrow": "M19 12H5M5 12L12 19M5 12L12 5",
  "right-arrow": "M5 12H19M19 12L12 5M19 12L12 19",
  linkedin: [
    {
      path: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z",
      fill: "#0288D1"
    },
    {
      path: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z",
      fill: "#FFF"
    }
  ],
  google: [
    {
      path: "M23.7459 12.27C23.7459 11.48 23.6759 10.73 23.5559 10H12.2559V14.51H18.7259C18.4359 15.99 17.5859 17.24 16.3259 18.09V21.09H20.1859C22.4459 19 23.7459 15.92 23.7459 12.27Z",
      fill: "#4285F4"
    },
    {
      path: "M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z",
      fill: "#34A853"
    },
    {
      path: "M5.52586 14.2901C5.27586 13.5701 5.14586 12.8001 5.14586 12.0001C5.14586 11.2001 5.28586 10.4301 5.52586 9.71012V6.62012H1.54586C0.725858 8.24012 0.255859 10.0601 0.255859 12.0001C0.255859 13.9401 0.725858 15.7601 1.54586 17.3801L5.52586 14.2901Z",
      fill: "#FBBC05"
    },
    {
      path: "M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z",
      fill: "#EA4335"
    }
  ],
  eyeHide: [
    {
      path: "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
    },
    {
      path: "M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
    },
    {
      path: "M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
    }
  ],
  eye: [
    {
      path: "m34 256 26.2 26.2c108 108 283.7 108 391.7 0L478 256l-26.2-26.2c-108-108-283.7-108-391.7 0L34 256zm222 126.2c-75.8 0-151.6-28.9-209.3-86.6l-32.9-32.9c-3.7-3.7-3.7-9.7 0-13.5l32.9-32.9c115.4-115.4 303.2-115.4 418.6 0l32.9 32.9c3.7 3.7 3.7 9.7 0 13.5l-32.9 32.9c-57.7 57.7-133.5 86.6-209.3 86.6z"
    },
    {
      path: "M256 183.5c-40 0-72.5 32.5-72.5 72.5s32.5 72.5 72.5 72.5 72.5-32.5 72.5-72.5-32.5-72.5-72.5-72.5zm0 164c-50.5 0-91.5-41.1-91.5-91.5 0-50.5 41.1-91.5 91.5-91.5s91.5 41.1 91.5 91.5c0 50.5-41 91.5-91.5 91.5z"
    }
  ],
  euro: "M8.125 11.875C7.05972 11.875 6.11181 11.5726 5.28125 10.9677C4.45069 10.3628 3.86389 9.58194 3.52083 8.625H1.625V7.54167H3.27708C3.25903 7.44236 3.25 7.35208 3.25 7.27083V6.72917C3.25 6.64792 3.25903 6.55764 3.27708 6.45833H1.625V5.375H3.52083C3.86389 4.41806 4.45069 3.63715 5.28125 3.03229C6.11181 2.42743 7.05972 2.125 8.125 2.125C8.74792 2.125 9.33698 2.23333 9.89219 2.45C10.4474 2.66667 10.9417 2.97361 11.375 3.37083L10.4271 4.31875C10.1111 4.05694 9.75677 3.85156 9.36406 3.7026C8.97135 3.55365 8.55833 3.47917 8.125 3.47917C7.44792 3.47917 6.83177 3.65295 6.27656 4.00052C5.72135 4.34809 5.29931 4.80625 5.01042 5.375H8.125V6.45833H4.65833C4.64028 6.55764 4.62674 6.64792 4.61771 6.72917C4.60868 6.81042 4.60417 6.90069 4.60417 7C4.60417 7.09931 4.60868 7.18958 4.61771 7.27083C4.62674 7.35208 4.64028 7.44236 4.65833 7.54167H8.125V8.625H5.01042C5.29931 9.19375 5.72135 9.65191 6.27656 9.99948C6.83177 10.347 7.44792 10.5208 8.125 10.5208C8.55833 10.5208 8.97587 10.4464 9.3776 10.2974C9.77934 10.1484 10.1292 9.94306 10.4271 9.68125L11.375 10.6292C10.9417 11.0264 10.4474 11.3333 9.89219 11.55C9.33698 11.7667 8.74792 11.875 8.125 11.875Z",
  search: "M6.609 0a6.61 6.61 0 0 1 6.609 6.609 6.58 6.58 0 0 1-1.256 3.877l3.733 3.733c.408.408.408 1.068 0 1.476-.376.376-.968.405-1.377.087l-.098-.087-3.732-3.733a6.58 6.58 0 0 1-3.877 1.256A6.61 6.61 0 0 1 0 6.609 6.61 6.61 0 0 1 6.609 0zm0 2.087c-2.497 0-4.522 2.025-4.522 4.522s2.025 4.522 4.522 4.522 4.522-2.025 4.522-4.522-2.025-4.522-4.522-4.522z"
}, je = ({
  name: m,
  size: _,
  className: C,
  fill: E,
  viewBox: T,
  onClick: j,
  stroke: y,
  strokeLinecap: p,
  strokeLinejoin: u,
  strokeWidth: h
}) => /* @__PURE__ */ R.jsx(
  "svg",
  {
    className: Q(C),
    width: _ || 16,
    height: _ || 16,
    viewBox: T || "0 0 16 16",
    fill: E,
    onClick: j,
    children: Array.isArray(K[m]) ? K[m].map(({ path: f, fill: b }) => /* @__PURE__ */ R.jsx(
      "path",
      {
        stroke: y || "10",
        strokeLinecap: p,
        strokeLinejoin: u,
        strokeWidth: h,
        fill: b,
        d: f
      },
      f
    )) : /* @__PURE__ */ R.jsx(
      "path",
      {
        stroke: y || "10",
        strokeWidth: h,
        strokeLinejoin: u,
        strokeLinecap: p,
        d: K[m]
      }
    )
  }
), _r = "_icon_container_18jjb_1", pr = "_end_icon_container_18jjb_5", xe = {
  icon_container: _r,
  end_icon_container: pr
}, hr = "_loader_19y8t_1", gr = "_loader_white_19y8t_17", mr = "_loader_red_19y8t_21", yr = "_loader_orange_19y8t_25", br = "_loader_green_19y8t_29", Cr = "_loader_blue_19y8t_33", Se = {
  loader: hr,
  loader_white: gr,
  "loader-white": "_loader-white_19y8t_1",
  loader_red: mr,
  "loader-red": "_loader-red_19y8t_1",
  loader_orange: yr,
  "loader-orange": "_loader-orange_19y8t_1",
  loader_green: br,
  "loader-green": "_loader-green_19y8t_1",
  loader_blue: Cr,
  "loader-blue": "_loader-blue_19y8t_1"
}, Er = ({ className: m, color: _, useColor: C }) => /* @__PURE__ */ R.jsx(
  "div",
  {
    className: Q(Se.loader, m, {
      [Se[`loader_${C ? _ : "white"}`]]: !!_
    })
  }
), wr = ({
  title: m,
  color: _,
  icon: C,
  iconProps: E,
  endIcon: T,
  endIconProps: j,
  secondary: y,
  stroke: p,
  text: u,
  isLoading: h,
  ...f
}) => /* @__PURE__ */ R.jsxs(
  "button",
  {
    disabled: h,
    className: Q("button", _, { secondary: y, stroke: p, text: u }),
    ...f,
    children: [
      C && /* @__PURE__ */ R.jsx("div", { className: xe.icon_container, children: /* @__PURE__ */ R.jsx(je, { ...E, name: C, size: 20 }) }),
      m,
      T && /* @__PURE__ */ R.jsx("div", { className: xe.end_icon_container, children: /* @__PURE__ */ R.jsx(je, { ...j, name: T, size: 20 }) }),
      h && /* @__PURE__ */ R.jsx(Er, { color: p || u ? void 0 : _, useColor: y })
    ]
  }
);
export {
  wr as AppButton
};
