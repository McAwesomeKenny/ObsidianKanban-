var sF = Object.create;
var Vs = Object.defineProperty;
var lF = Object.getOwnPropertyDescriptor;
var uF = Object.getOwnPropertyNames;
var cF = Object.getPrototypeOf,
    dF = Object.prototype.hasOwnProperty;
var fF = (e, t, r) => t in e ? Vs(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var hF = (e, t) => () => (e && (t = e(e = 0)), t);
var wn = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports),
    Rf = (e, t) => {
        for (var r in t) Vs(e, r, {
            get: t[r],
            enumerable: !0
        })
    },
    av = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of uF(t)) !dF.call(e, i) && i !== r && Vs(e, i, {
                get: () => t[i],
                enumerable: !(n = lF(t, i)) || n.enumerable
            });
        return e
    };
var Ct = (e, t, r) => (r = e != null ? sF(cF(e)) : {}, av(t || !e || !e.__esModule ? Vs(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e)),
    ov = e => av(Vs({}, "__esModule", {
        value: !0
    }), e);
var ur = (e, t, r) => (fF(e, typeof t != "symbol" ? t + "" : t, r), r);
var ln = wn((hi, Zv) => {
    "use strict";
    Object.defineProperty(hi, "__esModule", {
        value: !0
    });

    function Qr(e) {
        return typeof e == "object" && !("toString" in e) ? Object.prototype.toString.call(e).slice(8, -1) : e
    }
    var eI = typeof process == "object" && !0;

    function Vr(e, t) {
        if (!e) throw eI ? new Error("Invariant failed") : new Error(t())
    }
    hi.invariant = Vr;
    var nh = Object.prototype.hasOwnProperty,
        tI = Array.prototype.splice,
        nI = Object.prototype.toString;

    function Ua(e) {
        return nI.call(e).slice(8, -1)
    }
    var bu = Object.assign || function(e, t) {
            return rh(t).forEach(function(r) {
                nh.call(t, r) && (e[r] = t[r])
            }), e
        },
        rh = typeof Object.getOwnPropertySymbols == "function" ? function(e) {
            return Object.keys(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
            return Object.keys(e)
        };

    function sa(e) {
        return Array.isArray(e) ? bu(e.constructor(e.length), e) : Ua(e) === "Map" ? new Map(e) : Ua(e) === "Set" ? new Set(e) : e && typeof e == "object" ? bu(Object.create(Object.getPrototypeOf(e)), e) : e
    }
    var Gv = function() {
        function e() {
            this.commands = bu({}, rI), this.update = this.update.bind(this), this.update.extend = this.extend = this.extend.bind(this), this.update.isEquals = function(t, r) {
                return t === r
            }, this.update.newContext = function() {
                return new e().update
            }
        }
        return Object.defineProperty(e.prototype, "isEquals", {
            get: function() {
                return this.update.isEquals
            },
            set: function(t) {
                this.update.isEquals = t
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.extend = function(t, r) {
            this.commands[t] = r
        }, e.prototype.update = function(t, r) {
            var n = this,
                i = typeof r == "function" ? {
                    $apply: r
                } : r;
            Array.isArray(t) && Array.isArray(i) || Vr(!Array.isArray(i), function() {
                return "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."
            }), Vr(typeof i == "object" && i !== null, function() {
                return "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the " + ("following commands: " + Object.keys(n.commands).join(", ") + ".")
            });
            var a = t;
            return rh(i).forEach(function(o) {
                if (nh.call(n.commands, o)) {
                    var s = t === a;
                    a = n.commands[o](i[o], a, i, t), s && n.isEquals(a, t) && (a = t)
                } else {
                    var u = Ua(t) === "Map" ? n.update(t.get(o), i[o]) : n.update(t[o], i[o]),
                        l = Ua(a) === "Map" ? a.get(o) : a[o];
                    (!n.isEquals(u, l) || typeof u == "undefined" && !nh.call(t, o)) && (a === t && (a = sa(t)), Ua(a) === "Map" ? a.set(o, u) : a[o] = u)
                }
            }), a
        }, e
    }();
    hi.Context = Gv;
    var rI = {
            $push: function(e, t, r) {
                return jv(t, r, "$push"), e.length ? t.concat(e) : t
            },
            $unshift: function(e, t, r) {
                return jv(t, r, "$unshift"), e.length ? e.concat(t) : t
            },
            $splice: function(e, t, r, n) {
                return iI(t, r), e.forEach(function(i) {
                    Jv(i), t === n && i.length && (t = sa(n)), tI.apply(t, i)
                }), t
            },
            $set: function(e, t, r) {
                return oI(r), e
            },
            $toggle: function(e, t) {
                zs(e, "$toggle");
                var r = e.length ? sa(t) : t;
                return e.forEach(function(n) {
                    r[n] = !t[n]
                }), r
            },
            $unset: function(e, t, r, n) {
                return zs(e, "$unset"), e.forEach(function(i) {
                    Object.hasOwnProperty.call(t, i) && (t === n && (t = sa(n)), delete t[i])
                }), t
            },
            $add: function(e, t, r, n) {
                return qv(t, "$add"), zs(e, "$add"), Ua(t) === "Map" ? e.forEach(function(i) {
                    var a = i[0],
                        o = i[1];
                    t === n && t.get(a) !== o && (t = sa(n)), t.set(a, o)
                }) : e.forEach(function(i) {
                    t === n && !t.has(i) && (t = sa(n)), t.add(i)
                }), t
            },
            $remove: function(e, t, r, n) {
                return qv(t, "$remove"), zs(e, "$remove"), e.forEach(function(i) {
                    t === n && t.has(i) && (t = sa(n)), t.delete(i)
                }), t
            },
            $merge: function(e, t, r, n) {
                return sI(t, e), rh(e).forEach(function(i) {
                    e[i] !== t[i] && (t === n && (t = sa(n)), t[i] = e[i])
                }), t
            },
            $apply: function(e, t) {
                return aI(e), e(t)
            }
        },
        ih = new Gv;
    hi.isEquals = ih.update.isEquals;
    hi.extend = ih.extend;
    hi.default = ih.update;
    hi.default.default = Zv.exports = bu(hi.default, hi);

    function jv(e, t, r) {
        Vr(Array.isArray(e), function() {
            return "update(): expected target of " + Qr(r) + " to be an array; got " + Qr(e) + "."
        }), zs(t[r], r)
    }

    function zs(e, t) {
        Vr(Array.isArray(e), function() {
            return "update(): expected spec of " + Qr(t) + " to be an array; got " + Qr(e) + ". Did you forget to wrap your parameter in an array?"
        })
    }

    function iI(e, t) {
        Vr(Array.isArray(e), function() {
            return "Expected $splice target to be an array; got " + Qr(e)
        }), Jv(t.$splice)
    }

    function Jv(e) {
        Vr(Array.isArray(e), function() {
            return "update(): expected spec of $splice to be an array of arrays; got " + Qr(e) + ". Did you forget to wrap your parameters in an array?"
        })
    }

    function aI(e) {
        Vr(typeof e == "function", function() {
            return "update(): expected spec of $apply to be a function; got " + Qr(e) + "."
        })
    }

    function oI(e) {
        Vr(Object.keys(e).length === 1, function() {
            return "Cannot have more than one key in an object with $set"
        })
    }

    function sI(e, t) {
        Vr(t && typeof t == "object", function() {
            return "update(): $merge expects a spec of type 'object'; got " + Qr(t)
        }), Vr(e && typeof e == "object", function() {
            return "update(): $merge expects a target of type 'object'; got " + Qr(e)
        })
    }

    function qv(e, t) {
        var r = Ua(e);
        Vr(r === "Map" || r === "Set", function() {
            return "update(): " + Qr(t) + " expects a target of type Set or Map; got " + Qr(r)
        })
    }
});
var tw = wn((JB, ew) => {
    "use strict";
    var lI = function(t) {
        return uI(t) && !cI(t)
    };

    function uI(e) {
        return !!e && typeof e == "object"
    }

    function cI(e) {
        var t = Object.prototype.toString.call(e);
        return t === "[object RegExp]" || t === "[object Date]" || hI(e)
    }
    var dI = typeof Symbol == "function" && Symbol.for,
        fI = dI ? Symbol.for("react.element") : 60103;

    function hI(e) {
        return e.$$typeof === fI
    }

    function mI(e) {
        return Array.isArray(e) ? [] : {}
    }

    function Ks(e, t) {
        return t.clone !== !1 && t.isMergeableObject(e) ? Mo(mI(e), e, t) : e
    }

    function pI(e, t, r) {
        return e.concat(t).map(function(n) {
            return Ks(n, r)
        })
    }

    function gI(e, t) {
        if (!t.customMerge) return Mo;
        var r = t.customMerge(e);
        return typeof r == "function" ? r : Mo
    }

    function yI(e) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
        }) : []
    }

    function Qv(e) {
        return Object.keys(e).concat(yI(e))
    }

    function Xv(e, t) {
        try {
            return t in e
        } catch (r) {
            return !1
        }
    }

    function vI(e, t) {
        return Xv(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
    }

    function wI(e, t, r) {
        var n = {};
        return r.isMergeableObject(e) && Qv(e).forEach(function(i) {
            n[i] = Ks(e[i], r)
        }), Qv(t).forEach(function(i) {
            vI(e, i) || (Xv(e, i) && r.isMergeableObject(t[i]) ? n[i] = gI(i, r)(e[i], t[i], r) : n[i] = Ks(t[i], r))
        }), n
    }

    function Mo(e, t, r) {
        r = r || {}, r.arrayMerge = r.arrayMerge || pI, r.isMergeableObject = r.isMergeableObject || lI, r.cloneUnlessOtherwiseSpecified = Ks;
        var n = Array.isArray(t),
            i = Array.isArray(e),
            a = n === i;
        return a ? n ? r.arrayMerge(e, t, r) : wI(e, t, r) : Ks(t, r)
    }
    Mo.all = function(t, r) {
        if (!Array.isArray(t)) throw new Error("first argument should be an array");
        return t.reduce(function(n, i) {
            return Mo(n, i, r)
        }, {})
    };
    var bI = Mo;
    ew.exports = bI
});
var Db = wn((FU, Ch) => {
    "use strict";
    var JA = Object.prototype.hasOwnProperty,
        cr = "~";

    function al() {}
    Object.create && (al.prototype = Object.create(null), new al().__proto__ || (cr = !1));

    function ZA(e, t, r) {
        this.fn = e, this.context = t, this.once = r || !1
    }

    function bb(e, t, r, n, i) {
        if (typeof r != "function") throw new TypeError("The listener must be a function");
        var a = new ZA(r, n || e, i),
            o = cr ? cr + t : t;
        return e._events[o] ? e._events[o].fn ? e._events[o] = [e._events[o], a] : e._events[o].push(a) : (e._events[o] = a, e._eventsCount++), e
    }

    function Ru(e, t) {
        --e._eventsCount === 0 ? e._events = new al : delete e._events[t]
    }

    function Xn() {
        this._events = new al, this._eventsCount = 0
    }
    Xn.prototype.eventNames = function() {
        var t = [],
            r, n;
        if (this._eventsCount === 0) return t;
        for (n in r = this._events) JA.call(r, n) && t.push(cr ? n.slice(1) : n);
        return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(r)) : t
    };
    Xn.prototype.listeners = function(t) {
        var r = cr ? cr + t : t,
            n = this._events[r];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var i = 0, a = n.length, o = new Array(a); i < a; i++) o[i] = n[i].fn;
        return o
    };
    Xn.prototype.listenerCount = function(t) {
        var r = cr ? cr + t : t,
            n = this._events[r];
        return n ? n.fn ? 1 : n.length : 0
    };
    Xn.prototype.emit = function(t, r, n, i, a, o) {
        var s = cr ? cr + t : t;
        if (!this._events[s]) return !1;
        var u = this._events[s],
            l = arguments.length,
            c, d;
        if (u.fn) {
            switch (u.once && this.removeListener(t, u.fn, void 0, !0), l) {
                case 1:
                    return u.fn.call(u.context), !0;
                case 2:
                    return u.fn.call(u.context, r), !0;
                case 3:
                    return u.fn.call(u.context, r, n), !0;
                case 4:
                    return u.fn.call(u.context, r, n, i), !0;
                case 5:
                    return u.fn.call(u.context, r, n, i, a), !0;
                case 6:
                    return u.fn.call(u.context, r, n, i, a, o), !0
            }
            for (d = 1, c = new Array(l - 1); d < l; d++) c[d - 1] = arguments[d];
            u.fn.apply(u.context, c)
        } else {
            var m = u.length,
                h;
            for (d = 0; d < m; d++) switch (u[d].once && this.removeListener(t, u[d].fn, void 0, !0), l) {
                case 1:
                    u[d].fn.call(u[d].context);
                    break;
                case 2:
                    u[d].fn.call(u[d].context, r);
                    break;
                case 3:
                    u[d].fn.call(u[d].context, r, n);
                    break;
                case 4:
                    u[d].fn.call(u[d].context, r, n, i);
                    break;
                default:
                    if (!c)
                        for (h = 1, c = new Array(l - 1); h < l; h++) c[h - 1] = arguments[h];
                    u[d].fn.apply(u[d].context, c)
            }
        }
        return !0
    };
    Xn.prototype.on = function(t, r, n) {
        return bb(this, t, r, n, !1)
    };
    Xn.prototype.once = function(t, r, n) {
        return bb(this, t, r, n, !0)
    };
    Xn.prototype.removeListener = function(t, r, n, i) {
        var a = cr ? cr + t : t;
        if (!this._events[a]) return this;
        if (!r) return Ru(this, a), this;
        var o = this._events[a];
        if (o.fn) o.fn === r && (!i || o.once) && (!n || o.context === n) && Ru(this, a);
        else {
            for (var s = 0, u = [], l = o.length; s < l; s++)(o[s].fn !== r || i && !o[s].once || n && o[s].context !== n) && u.push(o[s]);
            u.length ? this._events[a] = u.length === 1 ? u[0] : u : Ru(this, a)
        }
        return this
    };
    Xn.prototype.removeAllListeners = function(t) {
        var r;
        return t ? (r = cr ? cr + t : t, this._events[r] && Ru(this, r)) : (this._events = new al, this._eventsCount = 0), this
    };
    Xn.prototype.off = Xn.prototype.removeListener;
    Xn.prototype.addListener = Xn.prototype.on;
    Xn.prefixed = cr;
    Xn.EventEmitter = Xn;
    typeof Ch != "undefined" && (Ch.exports = Xn)
});
var Wu = wn(dn => {
    "use strict";
    "use restrict";
    var Ih = 32;
    dn.INT_BITS = Ih;
    dn.INT_MAX = 2147483647;
    dn.INT_MIN = -1 << Ih - 1;
    dn.sign = function(e) {
        return (e > 0) - (e < 0)
    };
    dn.abs = function(e) {
        var t = e >> Ih - 1;
        return (e ^ t) - t
    };
    dn.min = function(e, t) {
        return t ^ (e ^ t) & -(e < t)
    };
    dn.max = function(e, t) {
        return e ^ (e ^ t) & -(e < t)
    };
    dn.isPow2 = function(e) {
        return !(e & e - 1) && !!e
    };
    dn.log2 = function(e) {
        var t, r;
        return t = (e > 65535) << 4, e >>>= t, r = (e > 255) << 3, e >>>= r, t |= r, r = (e > 15) << 2, e >>>= r, t |= r, r = (e > 3) << 1, e >>>= r, t |= r, t | e >> 1
    };
    dn.log10 = function(e) {
        return e >= 1e9 ? 9 : e >= 1e8 ? 8 : e >= 1e7 ? 7 : e >= 1e6 ? 6 : e >= 1e5 ? 5 : e >= 1e4 ? 4 : e >= 1e3 ? 3 : e >= 100 ? 2 : e >= 10 ? 1 : 0
    };
    dn.popCount = function(e) {
        return e = e - (e >>> 1 & 1431655765), e = (e & 858993459) + (e >>> 2 & 858993459), (e + (e >>> 4) & 252645135) * 16843009 >>> 24
    };

    function Fb(e) {
        var t = 32;
        return e &= -e, e && t--, e & 65535 && (t -= 16), e & 16711935 && (t -= 8), e & 252645135 && (t -= 4), e & 858993459 && (t -= 2), e & 1431655765 && (t -= 1), t
    }
    dn.countTrailingZeros = Fb;
    dn.nextPow2 = function(e) {
        return e += e === 0, --e, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e + 1
    };
    dn.prevPow2 = function(e) {
        return e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e - (e >>> 1)
    };
    dn.parity = function(e) {
        return e ^= e >>> 16, e ^= e >>> 8, e ^= e >>> 4, e &= 15, 27030 >>> e & 1
    };
    var ll = new Array(256);
    (function(e) {
        for (var t = 0; t < 256; ++t) {
            var r = t,
                n = t,
                i = 7;
            for (r >>>= 1; r; r >>>= 1) n <<= 1, n |= r & 1, --i;
            e[t] = n << i & 255
        }
    })(ll);
    dn.reverse = function(e) {
        return ll[e & 255] << 24 | ll[e >>> 8 & 255] << 16 | ll[e >>> 16 & 255] << 8 | ll[e >>> 24 & 255]
    };
    dn.interleave2 = function(e, t) {
        return e &= 65535, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t &= 65535, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1
    };
    dn.deinterleave2 = function(e, t) {
        return e = e >>> t & 1431655765, e = (e | e >>> 1) & 858993459, e = (e | e >>> 2) & 252645135, e = (e | e >>> 4) & 16711935, e = (e | e >>> 16) & 65535, e << 16 >> 16
    };
    dn.interleave3 = function(e, t, r) {
        return e &= 1023, e = (e | e << 16) & 4278190335, e = (e | e << 8) & 251719695, e = (e | e << 4) & 3272356035, e = (e | e << 2) & 1227133513, t &= 1023, t = (t | t << 16) & 4278190335, t = (t | t << 8) & 251719695, t = (t | t << 4) & 3272356035, t = (t | t << 2) & 1227133513, e |= t << 1, r &= 1023, r = (r | r << 16) & 4278190335, r = (r | r << 8) & 251719695, r = (r | r << 4) & 3272356035, r = (r | r << 2) & 1227133513, e | r << 2
    };
    dn.deinterleave3 = function(e, t) {
        return e = e >>> t & 1227133513, e = (e | e >>> 2) & 3272356035, e = (e | e >>> 4) & 251719695, e = (e | e >>> 8) & 4278190335, e = (e | e >>> 16) & 1023, e << 22 >> 22
    };
    dn.nextCombination = function(e) {
        var t = e | e - 1;
        return t + 1 | (~t & -~t) - 1 >>> Fb(e) + 1
    }
});
var Ob = wn((lW, Ab) => {
    "use strict";

    function Ib(e, t, r) {
        var n = e[r] | 0;
        if (n <= 0) return [];
        var i = new Array(n),
            a;
        if (r === e.length - 1)
            for (a = 0; a < n; ++a) i[a] = t;
        else
            for (a = 0; a < n; ++a) i[a] = Ib(e, t, r + 1);
        return i
    }

    function tO(e, t) {
        var r, n;
        for (r = new Array(e), n = 0; n < e; ++n) r[n] = t;
        return r
    }

    function nO(e, t) {
        switch (typeof t == "undefined" && (t = 0), typeof e) {
            case "number":
                if (e > 0) return tO(e | 0, t);
                break;
            case "object":
                if (typeof e.length == "number") return Ib(e, t, 0);
                break
        }
        return []
    }
    Ab.exports = nO
});
var eD = {};
Rf(eD, {
    Buffer: () => fe,
    INSPECT_MAX_BYTES: () => $b,
    SlowBuffer: () => mO,
    isBuffer: () => Qb,
    kMaxLength: () => uO
});

function Hb() {
    Oh = !0;
    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, r = e.length; t < r; ++t) wi[t] = e[t], Wr[e.charCodeAt(t)] = t;
    Wr[45] = 62, Wr[95] = 63
}

function iO(e) {
    Oh || Hb();
    var t, r, n, i, a, o, s = e.length;
    if (s % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    a = e[s - 2] === "=" ? 2 : e[s - 1] === "=" ? 1 : 0, o = new rO(s * 3 / 4 - a), n = a > 0 ? s - 4 : s;
    var u = 0;
    for (t = 0, r = 0; t < n; t += 4, r += 3) i = Wr[e.charCodeAt(t)] << 18 | Wr[e.charCodeAt(t + 1)] << 12 | Wr[e.charCodeAt(t + 2)] << 6 | Wr[e.charCodeAt(t + 3)], o[u++] = i >> 16 & 255, o[u++] = i >> 8 & 255, o[u++] = i & 255;
    return a === 2 ? (i = Wr[e.charCodeAt(t)] << 2 | Wr[e.charCodeAt(t + 1)] >> 4, o[u++] = i & 255) : a === 1 && (i = Wr[e.charCodeAt(t)] << 10 | Wr[e.charCodeAt(t + 1)] << 4 | Wr[e.charCodeAt(t + 2)] >> 2, o[u++] = i >> 8 & 255, o[u++] = i & 255), o
}

function aO(e) {
    return wi[e >> 18 & 63] + wi[e >> 12 & 63] + wi[e >> 6 & 63] + wi[e & 63]
}

function oO(e, t, r) {
    for (var n, i = [], a = t; a < r; a += 3) n = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], i.push(aO(n));
    return i.join("")
}

function Lb(e) {
    Oh || Hb();
    for (var t, r = e.length, n = r % 3, i = "", a = [], o = 16383, s = 0, u = r - n; s < u; s += o) a.push(oO(e, s, s + o > u ? u : s + o));
    return n === 1 ? (t = e[r - 1], i += wi[t >> 2], i += wi[t << 4 & 63], i += "==") : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i += wi[t >> 10], i += wi[t >> 4 & 63], i += wi[t << 2 & 63], i += "="), a.push(i), a.join("")
}

function Ku(e, t, r, n, i) {
    var a, o, s = i * 8 - n - 1,
        u = (1 << s) - 1,
        l = u >> 1,
        c = -7,
        d = r ? i - 1 : 0,
        m = r ? -1 : 1,
        h = e[t + d];
    for (d += m, a = h & (1 << -c) - 1, h >>= -c, c += s; c > 0; a = a * 256 + e[t + d], d += m, c -= 8);
    for (o = a & (1 << -c) - 1, a >>= -c, c += n; c > 0; o = o * 256 + e[t + d], d += m, c -= 8);
    if (a === 0) a = 1 - l;
    else {
        if (a === u) return o ? NaN : (h ? -1 : 1) * (1 / 0);
        o = o + Math.pow(2, n), a = a - l
    }
    return (h ? -1 : 1) * o * Math.pow(2, a - n)
}

function Bb(e, t, r, n, i, a) {
    var o, s, u, l = a * 8 - i - 1,
        c = (1 << l) - 1,
        d = c >> 1,
        m = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        h = n ? 0 : a - 1,
        g = n ? 1 : -1,
        y = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), o + d >= 1 ? t += m / u : t += m * Math.pow(2, 1 - d), t * u >= 2 && (o++, u /= 2), o + d >= c ? (s = 0, o = c) : o + d >= 1 ? (s = (t * u - 1) * Math.pow(2, i), o = o + d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; e[r + h] = s & 255, h += g, s /= 256, i -= 8);
    for (o = o << i | s, l += i; l > 0; e[r + h] = o & 255, h += g, o /= 256, l -= 8);
    e[r + h - g] |= y * 128
}

function Yu() {
    return fe.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
}

function Wi(e, t) {
    if (Yu() < t) throw new RangeError("Invalid typed array length");
    return fe.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = fe.prototype) : (e === null && (e = new fe(t)), e.length = t), e
}

function fe(e, t, r) {
    if (!fe.TYPED_ARRAY_SUPPORT && !(this instanceof fe)) return new fe(e, t, r);
    if (typeof e == "number") {
        if (typeof t == "string") throw new Error("If encoding is specified then the first argument must be a string");
        return Lh(this, e)
    }
    return Ub(this, e, t, r)
}

function Ub(e, t, r, n) {
    if (typeof t == "number") throw new TypeError('"value" argument must not be a number');
    return typeof ArrayBuffer != "undefined" && t instanceof ArrayBuffer ? fO(e, t, r, n) : typeof t == "string" ? dO(e, t, r) : hO(e, t)
}

function Wb(e) {
    if (typeof e != "number") throw new TypeError('"size" argument must be a number');
    if (e < 0) throw new RangeError('"size" argument must not be negative')
}

function cO(e, t, r, n) {
    return Wb(t), t <= 0 ? Wi(e, t) : r !== void 0 ? typeof n == "string" ? Wi(e, t).fill(r, n) : Wi(e, t).fill(r) : Wi(e, t)
}

function Lh(e, t) {
    if (Wb(t), e = Wi(e, t < 0 ? 0 : Ph(t) | 0), !fe.TYPED_ARRAY_SUPPORT)
        for (var r = 0; r < t; ++r) e[r] = 0;
    return e
}

function dO(e, t, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !fe.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
    var n = Yb(t, r) | 0;
    e = Wi(e, n);
    var i = e.write(t, r);
    return i !== n && (e = e.slice(0, i)), e
}

function Ah(e, t) {
    var r = t.length < 0 ? 0 : Ph(t.length) | 0;
    e = Wi(e, r);
    for (var n = 0; n < r; n += 1) e[n] = t[n] & 255;
    return e
}

function fO(e, t, r, n) {
    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
    return r === void 0 && n === void 0 ? t = new Uint8Array(t) : n === void 0 ? t = new Uint8Array(t, r) : t = new Uint8Array(t, r, n), fe.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = fe.prototype) : e = Ah(e, t), e
}

function hO(e, t) {
    if (bi(t)) {
        var r = Ph(t.length) | 0;
        return e = Wi(e, r), e.length === 0 || t.copy(e, 0, 0, r), e
    }
    if (t) {
        if (typeof ArrayBuffer != "undefined" && t.buffer instanceof ArrayBuffer || "length" in t) return typeof t.length != "number" || OO(t.length) ? Wi(e, 0) : Ah(e, t);
        if (t.type === "Buffer" && Vb(t.data)) return Ah(e, t.data)
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
}

function Ph(e) {
    if (e >= Yu()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Yu().toString(16) + " bytes");
    return e | 0
}

function mO(e) {
    return +e != e && (e = 0), fe.alloc(+e)
}

function bi(e) {
    return !!(e != null && e._isBuffer)
}

function Yb(e, t) {
    if (bi(e)) return e.length;
    if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
    typeof e != "string" && (e = "" + e);
    var r = e.length;
    if (r === 0) return 0;
    for (var n = !1;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
            return r;
        case "utf8":
        case "utf-8":
        case void 0:
            return zu(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return r * 2;
        case "hex":
            return r >>> 1;
        case "base64":
            return Zb(e).length;
        default:
            if (n) return zu(e).length;
            t = ("" + t).toLowerCase(), n = !0
    }
}

function pO(e, t, r) {
    var n = !1;
    if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t)) return "";
    for (e || (e = "utf8");;) switch (e) {
        case "hex":
            return xO(this, t, r);
        case "utf8":
        case "utf-8":
            return jb(this, t, r);
        case "ascii":
            return EO(this, t, r);
        case "latin1":
        case "binary":
            return kO(this, t, r);
        case "base64":
            return DO(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return CO(this, t, r);
        default:
            if (n) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = !0
    }
}

function Ga(e, t, r) {
    var n = e[t];
    e[t] = e[r], e[r] = n
}

function zb(e, t, r, n, i) {
    if (e.length === 0) return -1;
    if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (i) return -1;
        r = e.length - 1
    } else if (r < 0)
        if (i) r = 0;
        else return -1;
    if (typeof t == "string" && (t = fe.from(t, n)), bi(t)) return t.length === 0 ? -1 : Nb(e, t, r, n, i);
    if (typeof t == "number") return t = t & 255, fe.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : Nb(e, [t], r, n, i);
    throw new TypeError("val must be string, number or Buffer")
}

function Nb(e, t, r, n, i) {
    var a = 1,
        o = e.length,
        s = t.length;
    if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || t.length < 2) return -1;
        a = 2, o /= 2, s /= 2, r /= 2
    }

    function u(h, g) {
        return a === 1 ? h[g] : h.readUInt16BE(g * a)
    }
    var l;
    if (i) {
        var c = -1;
        for (l = r; l < o; l++)
            if (u(e, l) === u(t, c === -1 ? 0 : l - c)) {
                if (c === -1 && (c = l), l - c + 1 === s) return c * a
            } else c !== -1 && (l -= l - c), c = -1
    } else
        for (r + s > o && (r = o - s), l = r; l >= 0; l--) {
            for (var d = !0, m = 0; m < s; m++)
                if (u(e, l + m) !== u(t, m)) {
                    d = !1;
                    break
                } if (d) return l
        }
    return -1
}

function gO(e, t, r, n) {
    r = Number(r) || 0;
    var i = e.length - r;
    n ? (n = Number(n), n > i && (n = i)) : n = i;
    var a = t.length;
    if (a % 2 !== 0) throw new TypeError("Invalid hex string");
    n > a / 2 && (n = a / 2);
    for (var o = 0; o < n; ++o) {
        var s = parseInt(t.substr(o * 2, 2), 16);
        if (isNaN(s)) return o;
        e[r + o] = s
    }
    return o
}

function yO(e, t, r, n) {
    return Gu(zu(t, e.length - r), e, r, n)
}

function Kb(e, t, r, n) {
    return Gu(IO(t), e, r, n)
}

function vO(e, t, r, n) {
    return Kb(e, t, r, n)
}

function wO(e, t, r, n) {
    return Gu(Zb(t), e, r, n)
}

function bO(e, t, r, n) {
    return Gu(AO(t, e.length - r), e, r, n)
}

function DO(e, t, r) {
    return t === 0 && r === e.length ? Lb(e) : Lb(e.slice(t, r))
}

function jb(e, t, r) {
    r = Math.min(e.length, r);
    for (var n = [], i = t; i < r;) {
        var a = e[i],
            o = null,
            s = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
        if (i + s <= r) {
            var u, l, c, d;
            switch (s) {
                case 1:
                    a < 128 && (o = a);
                    break;
                case 2:
                    u = e[i + 1], (u & 192) === 128 && (d = (a & 31) << 6 | u & 63, d > 127 && (o = d));
                    break;
                case 3:
                    u = e[i + 1], l = e[i + 2], (u & 192) === 128 && (l & 192) === 128 && (d = (a & 15) << 12 | (u & 63) << 6 | l & 63, d > 2047 && (d < 55296 || d > 57343) && (o = d));
                    break;
                case 4:
                    u = e[i + 1], l = e[i + 2], c = e[i + 3], (u & 192) === 128 && (l & 192) === 128 && (c & 192) === 128 && (d = (a & 15) << 18 | (u & 63) << 12 | (l & 63) << 6 | c & 63, d > 65535 && d < 1114112 && (o = d))
            }
        }
        o === null ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), i += s
    }
    return SO(n)
}

function SO(e) {
    var t = e.length;
    if (t <= Rb) return String.fromCharCode.apply(String, e);
    for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += Rb));
    return r
}

function EO(e, t, r) {
    var n = "";
    r = Math.min(e.length, r);
    for (var i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
    return n
}

function kO(e, t, r) {
    var n = "";
    r = Math.min(e.length, r);
    for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n
}

function xO(e, t, r) {
    var n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    for (var i = "", a = t; a < r; ++a) i += FO(e[a]);
    return i
}

function CO(e, t, r) {
    for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2) i += String.fromCharCode(n[a] + n[a + 1] * 256);
    return i
}

function Pn(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
}

function gr(e, t, r, n, i, a) {
    if (!bi(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range")
}

function ju(e, t, r, n) {
    t < 0 && (t = 65535 + t + 1);
    for (var i = 0, a = Math.min(e.length - r, 2); i < a; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> (n ? i : 1 - i) * 8
}

function qu(e, t, r, n) {
    t < 0 && (t = 4294967295 + t + 1);
    for (var i = 0, a = Math.min(e.length - r, 4); i < a; ++i) e[r + i] = t >>> (n ? i : 3 - i) * 8 & 255
}

function qb(e, t, r, n, i, a) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range")
}

function Gb(e, t, r, n, i) {
    return i || qb(e, t, r, 4), Bb(e, t, r, n, 23, 4), r + 4
}

function Jb(e, t, r, n, i) {
    return i || qb(e, t, r, 8), Bb(e, t, r, n, 52, 8), r + 8
}

function MO(e) {
    if (e = TO(e).replace(_O, ""), e.length < 2) return "";
    for (; e.length % 4 !== 0;) e = e + "=";
    return e
}

function TO(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
}

function FO(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16)
}

function zu(e, t) {
    t = t || 1 / 0;
    for (var r, n = e.length, i = null, a = [], o = 0; o < n; ++o) {
        if (r = e.charCodeAt(o), r > 55295 && r < 57344) {
            if (!i) {
                if (r > 56319) {
                    (t -= 3) > -1 && a.push(239, 191, 189);
                    continue
                } else if (o + 1 === n) {
                    (t -= 3) > -1 && a.push(239, 191, 189);
                    continue
                }
                i = r;
                continue
            }
            if (r < 56320) {
                (t -= 3) > -1 && a.push(239, 191, 189), i = r;
                continue
            }
            r = (i - 55296 << 10 | r - 56320) + 65536
        } else i && (t -= 3) > -1 && a.push(239, 191, 189);
        if (i = null, r < 128) {
            if ((t -= 1) < 0) break;
            a.push(r)
        } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            a.push(r >> 6 | 192, r & 63 | 128)
        } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            a.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128)
        } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128)
        } else throw new Error("Invalid code point")
    }
    return a
}

function IO(e) {
    for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t
}

function AO(e, t) {
    for (var r, n, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), n = r >> 8, i = r % 256, a.push(i), a.push(n);
    return a
}

function Zb(e) {
    return iO(MO(e))
}

function Gu(e, t, r, n) {
    for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
    return i
}

function OO(e) {
    return e !== e
}

function Qb(e) {
    return e != null && (!!e._isBuffer || Xb(e) || LO(e))
}

function Xb(e) {
    return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

function LO(e) {
    return typeof e.readFloatLE == "function" && typeof e.slice == "function" && Xb(e.slice(0, 0))
}
var wi, Wr, rO, Oh, sO, Vb, $b, Pb, lO, uO, Rb, _O, tD = hF(() => {
    wi = [], Wr = [], rO = typeof Uint8Array != "undefined" ? Uint8Array : Array, Oh = !1;
    sO = {}.toString, Vb = Array.isArray || function(e) {
        return sO.call(e) == "[object Array]"
    };
    $b = 50, Pb = window;
    fe.TYPED_ARRAY_SUPPORT = Pb.TYPED_ARRAY_SUPPORT !== void 0 ? Pb.TYPED_ARRAY_SUPPORT : !0;
    lO = Yu(), uO = lO;
    fe.poolSize = 8192;
    fe._augment = function(e) {
        return e.__proto__ = fe.prototype, e
    };
    fe.from = function(e, t, r) {
        return Ub(null, e, t, r)
    };
    fe.TYPED_ARRAY_SUPPORT && (fe.prototype.__proto__ = Uint8Array.prototype, fe.__proto__ = Uint8Array);
    fe.alloc = function(e, t, r) {
        return cO(null, e, t, r)
    };
    fe.allocUnsafe = function(e) {
        return Lh(null, e)
    };
    fe.allocUnsafeSlow = function(e) {
        return Lh(null, e)
    };
    fe.isBuffer = Qb;
    fe.compare = function(t, r) {
        if (!bi(t) || !bi(r)) throw new TypeError("Arguments must be Buffers");
        if (t === r) return 0;
        for (var n = t.length, i = r.length, a = 0, o = Math.min(n, i); a < o; ++a)
            if (t[a] !== r[a]) {
                n = t[a], i = r[a];
                break
            } return n < i ? -1 : i < n ? 1 : 0
    };
    fe.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    };
    fe.concat = function(t, r) {
        if (!Vb(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0) return fe.alloc(0);
        var n;
        if (r === void 0)
            for (r = 0, n = 0; n < t.length; ++n) r += t[n].length;
        var i = fe.allocUnsafe(r),
            a = 0;
        for (n = 0; n < t.length; ++n) {
            var o = t[n];
            if (!bi(o)) throw new TypeError('"list" argument must be an Array of Buffers');
            o.copy(i, a), a += o.length
        }
        return i
    };
    fe.byteLength = Yb;
    fe.prototype._isBuffer = !0;
    fe.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var r = 0; r < t; r += 2) Ga(this, r, r + 1);
        return this
    };
    fe.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var r = 0; r < t; r += 4) Ga(this, r, r + 3), Ga(this, r + 1, r + 2);
        return this
    };
    fe.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var r = 0; r < t; r += 8) Ga(this, r, r + 7), Ga(this, r + 1, r + 6), Ga(this, r + 2, r + 5), Ga(this, r + 3, r + 4);
        return this
    };
    fe.prototype.toString = function() {
        var t = this.length | 0;
        return t === 0 ? "" : arguments.length === 0 ? jb(this, 0, t) : pO.apply(this, arguments)
    };
    fe.prototype.equals = function(t) {
        if (!bi(t)) throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : fe.compare(this, t) === 0
    };
    fe.prototype.inspect = function() {
        var t = "",
            r = $b;
        return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
    };
    fe.prototype.compare = function(t, r, n, i, a) {
        if (!bi(t)) throw new TypeError("Argument must be a Buffer");
        if (r === void 0 && (r = 0), n === void 0 && (n = t ? t.length : 0), i === void 0 && (i = 0), a === void 0 && (a = this.length), r < 0 || n > t.length || i < 0 || a > this.length) throw new RangeError("out of range index");
        if (i >= a && r >= n) return 0;
        if (i >= a) return -1;
        if (r >= n) return 1;
        if (r >>>= 0, n >>>= 0, i >>>= 0, a >>>= 0, this === t) return 0;
        for (var o = a - i, s = n - r, u = Math.min(o, s), l = this.slice(i, a), c = t.slice(r, n), d = 0; d < u; ++d)
            if (l[d] !== c[d]) {
                o = l[d], s = c[d];
                break
            } return o < s ? -1 : s < o ? 1 : 0
    };
    fe.prototype.includes = function(t, r, n) {
        return this.indexOf(t, r, n) !== -1
    };
    fe.prototype.indexOf = function(t, r, n) {
        return zb(this, t, r, n, !0)
    };
    fe.prototype.lastIndexOf = function(t, r, n) {
        return zb(this, t, r, n, !1)
    };
    fe.prototype.write = function(t, r, n, i) {
        if (r === void 0) i = "utf8", n = this.length, r = 0;
        else if (n === void 0 && typeof r == "string") i = r, n = this.length, r = 0;
        else if (isFinite(r)) r = r | 0, isFinite(n) ? (n = n | 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var a = this.length - r;
        if ((n === void 0 || n > a) && (n = a), t.length > 0 && (n < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        for (var o = !1;;) switch (i) {
            case "hex":
                return gO(this, t, r, n);
            case "utf8":
            case "utf-8":
                return yO(this, t, r, n);
            case "ascii":
                return Kb(this, t, r, n);
            case "latin1":
            case "binary":
                return vO(this, t, r, n);
            case "base64":
                return wO(this, t, r, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return bO(this, t, r, n);
            default:
                if (o) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), o = !0
        }
    };
    fe.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };
    Rb = 4096;
    fe.prototype.slice = function(t, r) {
        var n = this.length;
        t = ~~t, r = r === void 0 ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t);
        var i;
        if (fe.TYPED_ARRAY_SUPPORT) i = this.subarray(t, r), i.__proto__ = fe.prototype;
        else {
            var a = r - t;
            i = new fe(a, void 0);
            for (var o = 0; o < a; ++o) i[o] = this[o + t]
        }
        return i
    };
    fe.prototype.readUIntLE = function(t, r, n) {
        t = t | 0, r = r | 0, n || Pn(t, r, this.length);
        for (var i = this[t], a = 1, o = 0; ++o < r && (a *= 256);) i += this[t + o] * a;
        return i
    };
    fe.prototype.readUIntBE = function(t, r, n) {
        t = t | 0, r = r | 0, n || Pn(t, r, this.length);
        for (var i = this[t + --r], a = 1; r > 0 && (a *= 256);) i += this[t + --r] * a;
        return i
    };
    fe.prototype.readUInt8 = function(t, r) {
        return r || Pn(t, 1, this.length), this[t]
    };
    fe.prototype.readUInt16LE = function(t, r) {
        return r || Pn(t, 2, this.length), this[t] | this[t + 1] << 8
    };
    fe.prototype.readUInt16BE = function(t, r) {
        return r || Pn(t, 2, this.length), this[t] << 8 | this[t + 1]
    };
    fe.prototype.readUInt32LE = function(t, r) {
        return r || Pn(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    };
    fe.prototype.readUInt32BE = function(t, r) {
        return r || Pn(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    };
    fe.prototype.readIntLE = function(t, r, n) {
        t = t | 0, r = r | 0, n || Pn(t, r, this.length);
        for (var i = this[t], a = 1, o = 0; ++o < r && (a *= 256);) i += this[t + o] * a;
        return a *= 128, i >= a && (i -= Math.pow(2, 8 * r)), i
    };
    fe.prototype.readIntBE = function(t, r, n) {
        t = t | 0, r = r | 0, n || Pn(t, r, this.length);
        for (var i = r, a = 1, o = this[t + --i]; i > 0 && (a *= 256);) o += this[t + --i] * a;
        return a *= 128, o >= a && (o -= Math.pow(2, 8 * r)), o
    };
    fe.prototype.readInt8 = function(t, r) {
        return r || Pn(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    };
    fe.prototype.readInt16LE = function(t, r) {
        r || Pn(t, 2, this.length);
        var n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    fe.prototype.readInt16BE = function(t, r) {
        r || Pn(t, 2, this.length);
        var n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    fe.prototype.readInt32LE = function(t, r) {
        return r || Pn(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    };
    fe.prototype.readInt32BE = function(t, r) {
        return r || Pn(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    };
    fe.prototype.readFloatLE = function(t, r) {
        return r || Pn(t, 4, this.length), Ku(this, t, !0, 23, 4)
    };
    fe.prototype.readFloatBE = function(t, r) {
        return r || Pn(t, 4, this.length), Ku(this, t, !1, 23, 4)
    };
    fe.prototype.readDoubleLE = function(t, r) {
        return r || Pn(t, 8, this.length), Ku(this, t, !0, 52, 8)
    };
    fe.prototype.readDoubleBE = function(t, r) {
        return r || Pn(t, 8, this.length), Ku(this, t, !1, 52, 8)
    };
    fe.prototype.writeUIntLE = function(t, r, n, i) {
        if (t = +t, r = r | 0, n = n | 0, !i) {
            var a = Math.pow(2, 8 * n) - 1;
            gr(this, t, r, n, a, 0)
        }
        var o = 1,
            s = 0;
        for (this[r] = t & 255; ++s < n && (o *= 256);) this[r + s] = t / o & 255;
        return r + n
    };
    fe.prototype.writeUIntBE = function(t, r, n, i) {
        if (t = +t, r = r | 0, n = n | 0, !i) {
            var a = Math.pow(2, 8 * n) - 1;
            gr(this, t, r, n, a, 0)
        }
        var o = n - 1,
            s = 1;
        for (this[r + o] = t & 255; --o >= 0 && (s *= 256);) this[r + o] = t / s & 255;
        return r + n
    };
    fe.prototype.writeUInt8 = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 1, 255, 0), fe.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = t & 255, r + 1
    };
    fe.prototype.writeUInt16LE = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 2, 65535, 0), fe.TYPED_ARRAY_SUPPORT ? (this[r] = t & 255, this[r + 1] = t >>> 8) : ju(this, t, r, !0), r + 2
    };
    fe.prototype.writeUInt16BE = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 2, 65535, 0), fe.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = t & 255) : ju(this, t, r, !1), r + 2
    };
    fe.prototype.writeUInt32LE = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 4, 4294967295, 0), fe.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255) : qu(this, t, r, !0), r + 4
    };
    fe.prototype.writeUInt32BE = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 4, 4294967295, 0), fe.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255) : qu(this, t, r, !1), r + 4
    };
    fe.prototype.writeIntLE = function(t, r, n, i) {
        if (t = +t, r = r | 0, !i) {
            var a = Math.pow(2, 8 * n - 1);
            gr(this, t, r, n, a - 1, -a)
        }
        var o = 0,
            s = 1,
            u = 0;
        for (this[r] = t & 255; ++o < n && (s *= 256);) t < 0 && u === 0 && this[r + o - 1] !== 0 && (u = 1), this[r + o] = (t / s >> 0) - u & 255;
        return r + n
    };
    fe.prototype.writeIntBE = function(t, r, n, i) {
        if (t = +t, r = r | 0, !i) {
            var a = Math.pow(2, 8 * n - 1);
            gr(this, t, r, n, a - 1, -a)
        }
        var o = n - 1,
            s = 1,
            u = 0;
        for (this[r + o] = t & 255; --o >= 0 && (s *= 256);) t < 0 && u === 0 && this[r + o + 1] !== 0 && (u = 1), this[r + o] = (t / s >> 0) - u & 255;
        return r + n
    };
    fe.prototype.writeInt8 = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 1, 127, -128), fe.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1
    };
    fe.prototype.writeInt16LE = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 2, 32767, -32768), fe.TYPED_ARRAY_SUPPORT ? (this[r] = t & 255, this[r + 1] = t >>> 8) : ju(this, t, r, !0), r + 2
    };
    fe.prototype.writeInt16BE = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 2, 32767, -32768), fe.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = t & 255) : ju(this, t, r, !1), r + 2
    };
    fe.prototype.writeInt32LE = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 4, 2147483647, -2147483648), fe.TYPED_ARRAY_SUPPORT ? (this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : qu(this, t, r, !0), r + 4
    };
    fe.prototype.writeInt32BE = function(t, r, n) {
        return t = +t, r = r | 0, n || gr(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), fe.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255) : qu(this, t, r, !1), r + 4
    };
    fe.prototype.writeFloatLE = function(t, r, n) {
        return Gb(this, t, r, !0, n)
    };
    fe.prototype.writeFloatBE = function(t, r, n) {
        return Gb(this, t, r, !1, n)
    };
    fe.prototype.writeDoubleLE = function(t, r, n) {
        return Jb(this, t, r, !0, n)
    };
    fe.prototype.writeDoubleBE = function(t, r, n) {
        return Jb(this, t, r, !1, n)
    };
    fe.prototype.copy = function(t, r, n, i) {
        if (n || (n = 0), !i && i !== 0 && (i = this.length), r >= t.length && (r = t.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0) return 0;
        if (r < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), t.length - r < i - n && (i = t.length - r + n);
        var a = i - n,
            o;
        if (this === t && n < r && r < i)
            for (o = a - 1; o >= 0; --o) t[o + r] = this[o + n];
        else if (a < 1e3 || !fe.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < a; ++o) t[o + r] = this[o + n];
        else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), r);
        return a
    };
    fe.prototype.fill = function(t, r, n, i) {
        if (typeof t == "string") {
            if (typeof r == "string" ? (i = r, r = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), t.length === 1) {
                var a = t.charCodeAt(0);
                a < 256 && (t = a)
            }
            if (i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !fe.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
        } else typeof t == "number" && (t = t & 255);
        if (r < 0 || this.length < r || this.length < n) throw new RangeError("Out of range index");
        if (n <= r) return this;
        r = r >>> 0, n = n === void 0 ? this.length : n >>> 0, t || (t = 0);
        var o;
        if (typeof t == "number")
            for (o = r; o < n; ++o) this[o] = t;
        else {
            var s = bi(t) ? t : zu(new fe(t, i).toString()),
                u = s.length;
            for (o = 0; o < n - r; ++o) this[o + r] = s[o % u]
        }
        return this
    };
    _O = /[^+\/0-9A-Za-z-_]/g
});
var nD = wn((uW, Ju) => {
    var Ja = (tD(), ov(eD));
    if (Ja && Ja.default) {
        Ju.exports = Ja.default;
        for (let e in Ja) Ju.exports[e] = Ja[e]
    } else Ja && (Ju.exports = Ja)
});
var Xu = wn(bt => {
    "use strict";
    var pa = Wu(),
        Wn = Ob(),
        rD = nD().Buffer;
    window.__TYPEDARRAY_POOL || (window.__TYPEDARRAY_POOL = {
        UINT8: Wn([32, 0]),
        UINT16: Wn([32, 0]),
        UINT32: Wn([32, 0]),
        BIGUINT64: Wn([32, 0]),
        INT8: Wn([32, 0]),
        INT16: Wn([32, 0]),
        INT32: Wn([32, 0]),
        BIGINT64: Wn([32, 0]),
        FLOAT: Wn([32, 0]),
        DOUBLE: Wn([32, 0]),
        DATA: Wn([32, 0]),
        UINT8C: Wn([32, 0]),
        BUFFER: Wn([32, 0])
    });
    var PO = typeof Uint8ClampedArray != "undefined",
        NO = typeof BigUint64Array != "undefined",
        RO = typeof BigInt64Array != "undefined",
        Sn = window.__TYPEDARRAY_POOL;
    Sn.UINT8C || (Sn.UINT8C = Wn([32, 0]));
    Sn.BIGUINT64 || (Sn.BIGUINT64 = Wn([32, 0]));
    Sn.BIGINT64 || (Sn.BIGINT64 = Wn([32, 0]));
    Sn.BUFFER || (Sn.BUFFER = Wn([32, 0]));
    var Zu = Sn.DATA,
        Qu = Sn.BUFFER;
    bt.free = function(t) {
        if (rD.isBuffer(t)) Qu[pa.log2(t.length)].push(t);
        else {
            if (Object.prototype.toString.call(t) !== "[object ArrayBuffer]" && (t = t.buffer), !t) return;
            var r = t.length || t.byteLength,
                n = pa.log2(r) | 0;
            Zu[n].push(t)
        }
    };

    function iD(e) {
        if (e) {
            var t = e.length || e.byteLength,
                r = pa.log2(t);
            Zu[r].push(e)
        }
    }

    function HO(e) {
        iD(e.buffer)
    }
    bt.freeUint8 = bt.freeUint16 = bt.freeUint32 = bt.freeBigUint64 = bt.freeInt8 = bt.freeInt16 = bt.freeInt32 = bt.freeBigInt64 = bt.freeFloat32 = bt.freeFloat = bt.freeFloat64 = bt.freeDouble = bt.freeUint8Clamped = bt.freeDataView = HO;
    bt.freeArrayBuffer = iD;
    bt.freeBuffer = function(t) {
        Qu[pa.log2(t.length)].push(t)
    };
    bt.malloc = function(t, r) {
        if (r === void 0 || r === "arraybuffer") return yr(t);
        switch (r) {
            case "uint8":
                return Nh(t);
            case "uint16":
                return aD(t);
            case "uint32":
                return oD(t);
            case "int8":
                return sD(t);
            case "int16":
                return lD(t);
            case "int32":
                return uD(t);
            case "float":
            case "float32":
                return cD(t);
            case "double":
            case "float64":
                return dD(t);
            case "uint8_clamped":
                return fD(t);
            case "bigint64":
                return mD(t);
            case "biguint64":
                return hD(t);
            case "buffer":
                return gD(t);
            case "data":
            case "dataview":
                return pD(t);
            default:
                return null
        }
        return null
    };

    function yr(t) {
        var t = pa.nextPow2(t),
            r = pa.log2(t),
            n = Zu[r];
        return n.length > 0 ? n.pop() : new ArrayBuffer(t)
    }
    bt.mallocArrayBuffer = yr;

    function Nh(e) {
        return new Uint8Array(yr(e), 0, e)
    }
    bt.mallocUint8 = Nh;

    function aD(e) {
        return new Uint16Array(yr(2 * e), 0, e)
    }
    bt.mallocUint16 = aD;

    function oD(e) {
        return new Uint32Array(yr(4 * e), 0, e)
    }
    bt.mallocUint32 = oD;

    function sD(e) {
        return new Int8Array(yr(e), 0, e)
    }
    bt.mallocInt8 = sD;

    function lD(e) {
        return new Int16Array(yr(2 * e), 0, e)
    }
    bt.mallocInt16 = lD;

    function uD(e) {
        return new Int32Array(yr(4 * e), 0, e)
    }
    bt.mallocInt32 = uD;

    function cD(e) {
        return new Float32Array(yr(4 * e), 0, e)
    }
    bt.mallocFloat32 = bt.mallocFloat = cD;

    function dD(e) {
        return new Float64Array(yr(8 * e), 0, e)
    }
    bt.mallocFloat64 = bt.mallocDouble = dD;

    function fD(e) {
        return PO ? new Uint8ClampedArray(yr(e), 0, e) : Nh(e)
    }
    bt.mallocUint8Clamped = fD;

    function hD(e) {
        return NO ? new BigUint64Array(yr(8 * e), 0, e) : null
    }
    bt.mallocBigUint64 = hD;

    function mD(e) {
        return RO ? new BigInt64Array(yr(8 * e), 0, e) : null
    }
    bt.mallocBigInt64 = mD;

    function pD(e) {
        return new DataView(yr(e), 0, e)
    }
    bt.mallocDataView = pD;

    function gD(e) {
        e = pa.nextPow2(e);
        var t = pa.log2(e),
            r = Qu[t];
        return r.length > 0 ? r.pop() : new rD(e)
    }
    bt.mallocBuffer = gD;
    bt.clearCache = function() {
        for (var t = 0; t < 32; ++t) Sn.UINT8[t].length = 0, Sn.UINT16[t].length = 0, Sn.UINT32[t].length = 0, Sn.INT8[t].length = 0, Sn.INT16[t].length = 0, Sn.INT32[t].length = 0, Sn.FLOAT[t].length = 0, Sn.DOUBLE[t].length = 0, Sn.BIGUINT64[t].length = 0, Sn.BIGINT64[t].length = 0, Sn.UINT8C[t].length = 0, Zu[t].length = 0, Qu[t].length = 0
    }
});
var DD = wn((dW, bD) => {
    "use strict";
    bD.exports = BO;
    var tc = 32;

    function BO(e, t) {
        t <= 4 * tc ? nc(0, t - 1, e) : rc(0, t - 1, e)
    }

    function nc(e, t, r) {
        for (var n = 2 * (e + 1), i = e + 1; i <= t; ++i) {
            for (var a = r[n++], o = r[n++], s = i, u = n - 2; s-- > e;) {
                var l = r[u - 2],
                    c = r[u - 1];
                if (l < a) break;
                if (l === a && c < o) break;
                r[u] = l, r[u + 1] = c, u -= 2
            }
            r[u] = a, r[u + 1] = o
        }
    }

    function yD(e, t, r) {
        e *= 2, t *= 2;
        var n = r[e],
            i = r[e + 1];
        r[e] = r[t], r[e + 1] = r[t + 1], r[t] = n, r[t + 1] = i
    }

    function vD(e, t, r) {
        e *= 2, t *= 2, r[e] = r[t], r[e + 1] = r[t + 1]
    }

    function VO(e, t, r, n) {
        e *= 2, t *= 2, r *= 2;
        var i = n[e],
            a = n[e + 1];
        n[e] = n[t], n[e + 1] = n[t + 1], n[t] = n[r], n[t + 1] = n[r + 1], n[r] = i, n[r + 1] = a
    }

    function wD(e, t, r, n, i) {
        e *= 2, t *= 2, i[e] = i[t], i[t] = r, i[e + 1] = i[t + 1], i[t + 1] = n
    }

    function Yi(e, t, r) {
        e *= 2, t *= 2;
        var n = r[e],
            i = r[t];
        return n < i ? !1 : n === i ? r[e + 1] > r[t + 1] : !0
    }

    function ec(e, t, r, n) {
        e *= 2;
        var i = n[e];
        return i < t ? !0 : i === t ? n[e + 1] < r : !1
    }

    function rc(e, t, r) {
        var n = (t - e + 1) / 6 | 0,
            i = e + n,
            a = t - n,
            o = e + t >> 1,
            s = o - n,
            u = o + n,
            l = i,
            c = s,
            d = o,
            m = u,
            h = a,
            g = e + 1,
            y = t - 1,
            v = 0;
        Yi(l, c, r) && (v = l, l = c, c = v), Yi(m, h, r) && (v = m, m = h, h = v), Yi(l, d, r) && (v = l, l = d, d = v), Yi(c, d, r) && (v = c, c = d, d = v), Yi(l, m, r) && (v = l, l = m, m = v), Yi(d, m, r) && (v = d, d = m, m = v), Yi(c, h, r) && (v = c, c = h, h = v), Yi(c, d, r) && (v = c, c = d, d = v), Yi(m, h, r) && (v = m, m = h, h = v);
        for (var D = r[2 * c], I = r[2 * c + 1], C = r[2 * m], x = r[2 * m + 1], O = 2 * l, A = 2 * d, P = 2 * h, B = 2 * i, G = 2 * o, J = 2 * a, Q = 0; Q < 2; ++Q) {
            var oe = r[O + Q],
                te = r[A + Q],
                re = r[P + Q];
            r[B + Q] = oe, r[G + Q] = te, r[J + Q] = re
        }
        vD(s, e, r), vD(u, t, r);
        for (var ne = g; ne <= y; ++ne)
            if (ec(ne, D, I, r)) ne !== g && yD(ne, g, r), ++g;
            else if (!ec(ne, C, x, r))
            for (;;)
                if (ec(y, C, x, r)) {
                    ec(y, D, I, r) ? (VO(ne, g, y, r), ++g, --y) : (yD(ne, y, r), --y);
                    break
                } else {
                    if (--y < ne) break;
                    continue
                } wD(e, g - 1, D, I, r), wD(t, y + 1, C, x, r), g - 2 - e <= tc ? nc(e, g - 2, r) : rc(e, g - 2, r), t - (y + 2) <= tc ? nc(y + 2, t, r) : rc(y + 2, t, r), y - g <= tc ? nc(g, y, r) : rc(g, y, r)
    }
});
var Rh = wn((fW, SD) => {
    "use strict";
    SD.exports = {
        init: UO,
        sweepBipartite: WO,
        sweepComplete: YO,
        scanBipartite: zO,
        scanComplete: KO
    };
    var En = Xu(),
        $O = Wu(),
        ic = DD(),
        Fr = 1 << 28,
        Qa = 1024,
        Yn = En.mallocInt32(Qa),
        zi = En.mallocInt32(Qa),
        Ki = En.mallocInt32(Qa),
        Za = En.mallocInt32(Qa),
        Uo = En.mallocInt32(Qa),
        ul = En.mallocInt32(Qa),
        dt = En.mallocDouble(Qa * 8);

    function UO(e) {
        var t = $O.nextPow2(e);
        Yn.length < t && (En.free(Yn), Yn = En.mallocInt32(t)), zi.length < t && (En.free(zi), zi = En.mallocInt32(t)), Ki.length < t && (En.free(Ki), Ki = En.mallocInt32(t)), Za.length < t && (En.free(Za), Za = En.mallocInt32(t)), Uo.length < t && (En.free(Uo), Uo = En.mallocInt32(t)), ul.length < t && (En.free(ul), ul = En.mallocInt32(t));
        var r = 8 * t;
        dt.length < r && (En.free(dt), dt = En.mallocDouble(r))
    }

    function Wo(e, t, r, n) {
        var i = t[n],
            a = e[r - 1];
        e[i] = a, t[a] = i
    }

    function Yo(e, t, r, n) {
        e[r] = n, t[n] = r
    }

    function WO(e, t, r, n, i, a, o, s, u, l) {
        for (var c = 0, d = 2 * e, m = e - 1, h = d - 1, g = r; g < n; ++g) {
            var y = a[g],
                v = d * g;
            dt[c++] = i[v + m], dt[c++] = -(y + 1), dt[c++] = i[v + h], dt[c++] = y
        }
        for (var g = o; g < s; ++g) {
            var y = l[g] + Fr,
                D = d * g;
            dt[c++] = u[D + m], dt[c++] = -y, dt[c++] = u[D + h], dt[c++] = y
        }
        var I = c >>> 1;
        ic(dt, I);
        for (var C = 0, x = 0, g = 0; g < I; ++g) {
            var O = dt[2 * g + 1] | 0;
            if (O >= Fr) O = O - Fr | 0, Wo(Ki, Za, x--, O);
            else if (O >= 0) Wo(Yn, zi, C--, O);
            else if (O <= -Fr) {
                O = -O - Fr | 0;
                for (var A = 0; A < C; ++A) {
                    var P = t(Yn[A], O);
                    if (P !== void 0) return P
                }
                Yo(Ki, Za, x++, O)
            } else {
                O = -O - 1 | 0;
                for (var A = 0; A < x; ++A) {
                    var P = t(O, Ki[A]);
                    if (P !== void 0) return P
                }
                Yo(Yn, zi, C++, O)
            }
        }
    }

    function YO(e, t, r, n, i, a, o, s, u, l) {
        for (var c = 0, d = 2 * e, m = e - 1, h = d - 1, g = r; g < n; ++g) {
            var y = a[g] + 1 << 1,
                v = d * g;
            dt[c++] = i[v + m], dt[c++] = -y, dt[c++] = i[v + h], dt[c++] = y
        }
        for (var g = o; g < s; ++g) {
            var y = l[g] + 1 << 1,
                D = d * g;
            dt[c++] = u[D + m], dt[c++] = -y | 1, dt[c++] = u[D + h], dt[c++] = y | 1
        }
        var I = c >>> 1;
        ic(dt, I);
        for (var C = 0, x = 0, O = 0, g = 0; g < I; ++g) {
            var A = dt[2 * g + 1] | 0,
                P = A & 1;
            if (g < I - 1 && A >> 1 === dt[2 * g + 3] >> 1 && (P = 2, g += 1), A < 0) {
                for (var B = -(A >> 1) - 1, G = 0; G < O; ++G) {
                    var J = t(Uo[G], B);
                    if (J !== void 0) return J
                }
                if (P !== 0)
                    for (var G = 0; G < C; ++G) {
                        var J = t(Yn[G], B);
                        if (J !== void 0) return J
                    }
                if (P !== 1)
                    for (var G = 0; G < x; ++G) {
                        var J = t(Ki[G], B);
                        if (J !== void 0) return J
                    }
                P === 0 ? Yo(Yn, zi, C++, B) : P === 1 ? Yo(Ki, Za, x++, B) : P === 2 && Yo(Uo, ul, O++, B)
            } else {
                var B = (A >> 1) - 1;
                P === 0 ? Wo(Yn, zi, C--, B) : P === 1 ? Wo(Ki, Za, x--, B) : P === 2 && Wo(Uo, ul, O--, B)
            }
        }
    }

    function zO(e, t, r, n, i, a, o, s, u, l, c, d) {
        var m = 0,
            h = 2 * e,
            g = t,
            y = t + e,
            v = 1,
            D = 1;
        n ? D = Fr : v = Fr;
        for (var I = i; I < a; ++I) {
            var C = I + v,
                x = h * I;
            dt[m++] = o[x + g], dt[m++] = -C, dt[m++] = o[x + y], dt[m++] = C
        }
        for (var I = u; I < l; ++I) {
            var C = I + D,
                O = h * I;
            dt[m++] = c[O + g], dt[m++] = -C
        }
        var A = m >>> 1;
        ic(dt, A);
        for (var P = 0, I = 0; I < A; ++I) {
            var B = dt[2 * I + 1] | 0;
            if (B < 0) {
                var C = -B,
                    G = !1;
                if (C >= Fr ? (G = !n, C -= Fr) : (G = !!n, C -= 1), G) Yo(Yn, zi, P++, C);
                else {
                    var J = d[C],
                        Q = h * C,
                        oe = c[Q + t + 1],
                        te = c[Q + t + 1 + e];
                    e: for (var re = 0; re < P; ++re) {
                        var ne = Yn[re],
                            be = h * ne;
                        if (!(te < o[be + t + 1] || o[be + t + 1 + e] < oe)) {
                            for (var pe = t + 2; pe < e; ++pe)
                                if (c[Q + pe + e] < o[be + pe] || o[be + pe + e] < c[Q + pe]) continue e;
                            var De = s[ne],
                                Ce;
                            if (n ? Ce = r(J, De) : Ce = r(De, J), Ce !== void 0) return Ce
                        }
                    }
                }
            } else Wo(Yn, zi, P--, B - v)
        }
    }

    function KO(e, t, r, n, i, a, o, s, u, l, c) {
        for (var d = 0, m = 2 * e, h = t, g = t + e, y = n; y < i; ++y) {
            var v = y + Fr,
                D = m * y;
            dt[d++] = a[D + h], dt[d++] = -v, dt[d++] = a[D + g], dt[d++] = v
        }
        for (var y = s; y < u; ++y) {
            var v = y + 1,
                I = m * y;
            dt[d++] = l[I + h], dt[d++] = -v
        }
        var C = d >>> 1;
        ic(dt, C);
        for (var x = 0, y = 0; y < C; ++y) {
            var O = dt[2 * y + 1] | 0;
            if (O < 0) {
                var v = -O;
                if (v >= Fr) Yn[x++] = v - Fr;
                else {
                    v -= 1;
                    var A = c[v],
                        P = m * v,
                        B = l[P + t + 1],
                        G = l[P + t + 1 + e];
                    e: for (var J = 0; J < x; ++J) {
                        var Q = Yn[J],
                            oe = o[Q];
                        if (oe === A) break;
                        var te = m * Q;
                        if (!(G < a[te + t + 1] || a[te + t + 1 + e] < B)) {
                            for (var re = t + 2; re < e; ++re)
                                if (l[P + re + e] < a[te + re] || a[te + re + e] < l[P + re]) continue e;
                            var ne = r(oe, A);
                            if (ne !== void 0) return ne
                        }
                    }
                }
            } else {
                for (var v = O - Fr, J = x - 1; J >= 0; --J)
                    if (Yn[J] === v) {
                        for (var re = J + 1; re < x; ++re) Yn[re - 1] = Yn[re];
                        break
                    }-- x
            }
        }
    }
});
var _D = wn(Yh => {
    "use strict";
    var Xa = "d",
        jo = "ax",
        ED = "vv",
        Hh = "fp",
        cl = "es",
        ac = "rs",
        Uh = "re",
        dl = "rb",
        kD = "ri",
        zo = "rp",
        oc = "bs",
        Wh = "be",
        fl = "bb",
        xD = "bi",
        Ko = "bp",
        Bh = "rv",
        Vh = "Q",
        $h = [Xa, jo, ED, ac, Uh, dl, kD, oc, Wh, fl, xD];

    function jO(e, t, r) {
        var n = "bruteForce" + (e ? "Red" : "Blue") + (t ? "Flip" : "") + (r ? "Full" : ""),
            i = ["function ", n, "(", $h.join(), "){", "var ", cl, "=2*", Xa, ";"],
            a = "for(var i=" + ac + "," + zo + "=" + cl + "*" + ac + ";i<" + Uh + ";++i," + zo + "+=" + cl + "){var x0=" + dl + "[" + jo + "+" + zo + "],x1=" + dl + "[" + jo + "+" + zo + "+" + Xa + "],xi=" + kD + "[i];",
            o = "for(var j=" + oc + "," + Ko + "=" + cl + "*" + oc + ";j<" + Wh + ";++j," + Ko + "+=" + cl + "){var y0=" + fl + "[" + jo + "+" + Ko + "]," + (r ? "y1=" + fl + "[" + jo + "+" + Ko + "+" + Xa + "]," : "") + "yi=" + xD + "[j];";
        return e ? i.push(a, Vh, ":", o) : i.push(o, Vh, ":", a), r ? i.push("if(y1<x0||x1<y0)continue;") : t ? i.push("if(y0<=x0||x1<y0)continue;") : i.push("if(y0<x0||x1<y0)continue;"), i.push("for(var k=" + jo + "+1;k<" + Xa + ";++k){var r0=" + dl + "[k+" + zo + "],r1=" + dl + "[k+" + Xa + "+" + zo + "],b0=" + fl + "[k+" + Ko + "],b1=" + fl + "[k+" + Xa + "+" + Ko + "];if(r1<b0||b1<r0)continue " + Vh + ";}var " + Bh + "=" + ED + "("), t ? i.push("yi,xi") : i.push("xi,yi"), i.push(");if(" + Bh + "!==void 0)return " + Bh + ";}}}"), {
            name: n,
            code: i.join("")
        }
    }

    function CD(e) {
        var t = "bruteForce" + (e ? "Full" : "Partial"),
            r = [],
            n = $h.slice();
        e || n.splice(3, 0, Hh);
        var i = ["function " + t + "(" + n.join() + "){"];

        function a(u, l) {
            var c = jO(u, l, e);
            r.push(c.code), i.push("return " + c.name + "(" + $h.join() + ");")
        }
        i.push("if(" + Uh + "-" + ac + ">" + Wh + "-" + oc + "){"), e ? (a(!0, !1), i.push("}else{"), a(!1, !1)) : (i.push("if(" + Hh + "){"), a(!0, !0), i.push("}else{"), a(!0, !1), i.push("}}else{if(" + Hh + "){"), a(!1, !0), i.push("}else{"), a(!1, !1), i.push("}")), i.push("}}return " + t);
        var o = r.join("") + i.join(""),
            s = new Function(o);
        return s()
    }
    Yh.partial = CD(!1);
    Yh.full = CD(!0)
});
var zh = wn((mW, MD) => {
    "use strict";
    MD.exports = GO;
    var qO = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m";

    function GO(e, t) {
        var r = "abcdef".split("").concat(t),
            n = [];
        return e.indexOf("lo") >= 0 && n.push("lo=e[k+n]"), e.indexOf("hi") >= 0 && n.push("hi=e[k+o]"), r.push(qO.replace("_", n.join()).replace("$", e)), Function.apply(void 0, r)
    }
});
var ID = wn((pW, FD) => {
    "use strict";
    FD.exports = XO;
    var JO = zh(),
        TD = JO("lo<p0", ["p0"]),
        ZO = 8;

    function QO(e, t, r, n, i, a) {
        for (var o = 2 * e, s = o * (r + 1) + t, u = r + 1; u < n; ++u, s += o)
            for (var l = i[s], c = u, d = o * (u - 1); c > r && i[d + t] > l; --c, d -= o) {
                for (var m = d, h = d + o, g = 0; g < o; ++g, ++m, ++h) {
                    var y = i[m];
                    i[m] = i[h], i[h] = y
                }
                var v = a[c];
                a[c] = a[c - 1], a[c - 1] = v
            }
    }

    function XO(e, t, r, n, i, a) {
        if (n <= r + 1) return r;
        for (var o = r, s = n, u = n + r >>> 1, l = 2 * e, c = u, d = i[l * u + t]; o < s;) {
            if (s - o < ZO) {
                QO(e, t, o, s, i, a), d = i[l * u + t];
                break
            }
            var m = s - o,
                h = Math.random() * m + o | 0,
                g = i[l * h + t],
                y = Math.random() * m + o | 0,
                v = i[l * y + t],
                D = Math.random() * m + o | 0,
                I = i[l * D + t];
            g <= v ? I >= v ? (c = y, d = v) : g >= I ? (c = h, d = g) : (c = D, d = I) : v >= I ? (c = y, d = v) : I >= g ? (c = h, d = g) : (c = D, d = I);
            for (var O = l * (s - 1), A = l * c, C = 0; C < l; ++C, ++O, ++A) {
                var x = i[O];
                i[O] = i[A], i[A] = x
            }
            var P = a[s - 1];
            a[s - 1] = a[c], a[c] = P, c = TD(e, t, o, s - 1, i, a, d);
            for (var O = l * (s - 1), A = l * c, C = 0; C < l; ++C, ++O, ++A) {
                var x = i[O];
                i[O] = i[A], i[A] = x
            }
            var P = a[s - 1];
            if (a[s - 1] = a[c], a[c] = P, u < c) {
                for (s = c - 1; o < s && i[l * (s - 1) + t] === d;) s -= 1;
                s += 1
            } else if (c < u)
                for (o = c + 1; o < s && i[l * o + t] === d;) o += 1;
            else break
        }
        return TD(e, t, r, u, i, a, i[l * u + t])
    }
});
var HD = wn((gW, RD) => {
    "use strict";
    RD.exports = fL;
    var qo = Xu(),
        Kh = Wu(),
        PD = _D(),
        eL = PD.partial,
        tL = PD.full,
        ga = Rh(),
        nL = ID(),
        Go = zh(),
        AD = 128,
        rL = 1 << 22,
        iL = 1 << 22,
        aL = Go("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
        OD = Go("lo===p0", ["p0"]),
        oL = Go("lo<p0", ["p0"]),
        sL = Go("hi<=p0", ["p0"]),
        LD = Go("lo<=p0&&p0<=hi", ["p0"]),
        lL = Go("lo<p0&&p0<=hi", ["p0"]),
        jh = 6,
        qh = 2,
        ND = 1024,
        dr = qo.mallocInt32(ND),
        eo = qo.mallocDouble(ND);

    function uL(e, t) {
        var r = 8 * Kh.log2(t + 1) * (e + 1) | 0,
            n = Kh.nextPow2(jh * r);
        dr.length < n && (qo.free(dr), dr = qo.mallocInt32(n));
        var i = Kh.nextPow2(qh * r);
        eo.length < i && (qo.free(eo), eo = qo.mallocDouble(i))
    }

    function ti(e, t, r, n, i, a, o, s, u) {
        var l = jh * e;
        dr[l] = t, dr[l + 1] = r, dr[l + 2] = n, dr[l + 3] = i, dr[l + 4] = a, dr[l + 5] = o;
        var c = qh * e;
        eo[c] = s, eo[c + 1] = u
    }

    function cL(e, t, r, n, i, a, o, s, u, l, c) {
        var d = 2 * e,
            m = u * d,
            h = l[m + t];
        e: for (var g = i, y = i * d; g < a; ++g, y += d) {
            var v = o[y + t],
                D = o[y + t + e];
            if (!(h < v || D < h) && !(n && h === v)) {
                for (var I = s[g], C = t + 1; C < e; ++C) {
                    var v = o[y + C],
                        D = o[y + C + e],
                        x = l[m + C],
                        O = l[m + C + e];
                    if (D < x || O < v) continue e
                }
                var A;
                if (n ? A = r(c, I) : A = r(I, c), A !== void 0) return A
            }
        }
    }

    function dL(e, t, r, n, i, a, o, s, u, l) {
        var c = 2 * e,
            d = s * c,
            m = u[d + t];
        e: for (var h = n, g = n * c; h < i; ++h, g += c) {
            var y = o[h];
            if (y !== l) {
                var v = a[g + t],
                    D = a[g + t + e];
                if (!(m < v || D < m)) {
                    for (var I = t + 1; I < e; ++I) {
                        var v = a[g + I],
                            D = a[g + I + e],
                            C = u[d + I],
                            x = u[d + I + e];
                        if (D < C || x < v) continue e
                    }
                    var O = r(y, l);
                    if (O !== void 0) return O
                }
            }
        }
    }

    function fL(e, t, r, n, i, a, o, s, u) {
        uL(e, n + o);
        var l = 0,
            c = 2 * e,
            d;
        for (ti(l++, 0, 0, n, 0, o, r ? 16 : 0, -1 / 0, 1 / 0), r || ti(l++, 0, 0, o, 0, n, 1, -1 / 0, 1 / 0); l > 0;) {
            l -= 1;
            var m = l * jh,
                h = dr[m],
                g = dr[m + 1],
                y = dr[m + 2],
                v = dr[m + 3],
                D = dr[m + 4],
                I = dr[m + 5],
                C = l * qh,
                x = eo[C],
                O = eo[C + 1],
                A = I & 1,
                P = !!(I & 16),
                B = i,
                G = a,
                J = s,
                Q = u;
            if (A && (B = s, G = u, J = i, Q = a), !(I & 2 && (y = oL(e, h, g, y, B, G, O), g >= y)) && !(I & 4 && (g = sL(e, h, g, y, B, G, x), g >= y))) {
                var oe = y - g,
                    te = D - v;
                if (P) {
                    if (e * oe * (oe + te) < iL) {
                        if (d = ga.scanComplete(e, h, t, g, y, B, G, v, D, J, Q), d !== void 0) return d;
                        continue
                    }
                } else if (e * Math.min(oe, te) < AD) {
                    if (d = eL(e, h, t, A, g, y, B, G, v, D, J, Q), d !== void 0) return d;
                    continue
                } else if (e * oe * te < rL) {
                    if (d = ga.scanBipartite(e, h, t, A, g, y, B, G, v, D, J, Q), d !== void 0) return d;
                    continue
                }
                var re = aL(e, h, g, y, B, G, x, O);
                if (g < re)
                    if (e * (re - g) < AD) {
                        if (d = tL(e, h + 1, t, g, re, B, G, v, D, J, Q), d !== void 0) return d
                    } else if (h === e - 2) {
                    if (A ? d = ga.sweepBipartite(e, t, v, D, J, Q, g, re, B, G) : d = ga.sweepBipartite(e, t, g, re, B, G, v, D, J, Q), d !== void 0) return d
                } else ti(l++, h + 1, g, re, v, D, A, -1 / 0, 1 / 0), ti(l++, h + 1, v, D, g, re, A ^ 1, -1 / 0, 1 / 0);
                if (re < y) {
                    var ne = nL(e, h, v, D, J, Q),
                        be = J[c * ne + h],
                        pe = OD(e, h, ne, D, J, Q, be);
                    if (pe < D && ti(l++, h, re, y, pe, D, (A | 4) + (P ? 16 : 0), be, O), v < ne && ti(l++, h, re, y, v, ne, (A | 2) + (P ? 16 : 0), x, be), ne + 1 === pe) {
                        if (P ? d = dL(e, h, t, re, y, B, G, ne, J, Q[ne]) : d = cL(e, h, t, A, re, y, B, G, ne, J, Q[ne]), d !== void 0) return d
                    } else if (ne < pe) {
                        var De;
                        if (P) {
                            if (De = LD(e, h, re, y, B, G, be), re < De) {
                                var Ce = OD(e, h, re, De, B, G, be);
                                if (h === e - 2) {
                                    if (re < Ce && (d = ga.sweepComplete(e, t, re, Ce, B, G, ne, pe, J, Q), d !== void 0) || Ce < De && (d = ga.sweepBipartite(e, t, Ce, De, B, G, ne, pe, J, Q), d !== void 0)) return d
                                } else re < Ce && ti(l++, h + 1, re, Ce, ne, pe, 16, -1 / 0, 1 / 0), Ce < De && (ti(l++, h + 1, Ce, De, ne, pe, 0, -1 / 0, 1 / 0), ti(l++, h + 1, ne, pe, Ce, De, 1, -1 / 0, 1 / 0))
                            }
                        } else A ? De = lL(e, h, re, y, B, G, be) : De = LD(e, h, re, y, B, G, be), re < De && (h === e - 2 ? A ? d = ga.sweepBipartite(e, t, ne, pe, J, Q, re, De, B, G) : d = ga.sweepBipartite(e, t, re, De, B, G, ne, pe, J, Q) : (ti(l++, h + 1, re, De, ne, pe, A, -1 / 0, 1 / 0), ti(l++, h + 1, ne, pe, re, De, A ^ 1, -1 / 0, 1 / 0)))
                    }
                }
            }
        }
    }
});
var UD = wn((yW, $D) => {
    "use strict";
    $D.exports = yL;
    var ya = Xu(),
        sc = Rh(),
        hL = HD();

    function mL(e, t) {
        for (var r = 0; r < e; ++r)
            if (!(t[r] <= t[r + e])) return !0;
        return !1
    }

    function BD(e, t, r, n) {
        for (var i = 0, a = 0, o = 0, s = e.length; o < s; ++o) {
            var u = e[o];
            if (!mL(t, u)) {
                for (var l = 0; l < 2 * t; ++l) r[i++] = u[l];
                n[a++] = o
            }
        }
        return a
    }

    function lc(e, t, r, n) {
        var i = e.length,
            a = t.length;
        if (!(i <= 0 || a <= 0)) {
            var o = e[0].length >>> 1;
            if (!(o <= 0)) {
                var s, u = ya.mallocDouble(2 * o * i),
                    l = ya.mallocInt32(i);
                if (i = BD(e, o, u, l), i > 0) {
                    if (o === 1 && n) sc.init(i), s = sc.sweepComplete(o, r, 0, i, u, l, 0, i, u, l);
                    else {
                        var c = ya.mallocDouble(2 * o * a),
                            d = ya.mallocInt32(a);
                        a = BD(t, o, c, d), a > 0 && (sc.init(i + a), o === 1 ? s = sc.sweepBipartite(o, r, 0, i, u, l, 0, a, c, d) : s = hL(o, r, n, i, u, l, a, c, d), ya.free(c), ya.free(d))
                    }
                    ya.free(u), ya.free(l)
                }
                return s
            }
        }
    }
    var hl;

    function VD(e, t) {
        hl.push([e, t])
    }

    function pL(e) {
        return hl = [], lc(e, e, VD, !0), hl
    }

    function gL(e, t) {
        return hl = [], lc(e, t, VD, !1), hl
    }

    function yL(e, t, r) {
        var n;
        switch (arguments.length) {
            case 1:
                return pL(e);
            case 2:
                return typeof t == "function" ? lc(e, e, t, !0) : gL(e, t);
            case 3:
                return lc(e, t, r, !1);
            default:
                throw new Error("box-intersect: Invalid arguments")
        }
    }
});
var o0 = wn(gt => {
    "use strict";
    Object.defineProperty(gt, "__esModule", {
        value: !0
    });
    var on = require("obsidian"),
        Zh = "YYYY-MM-DD",
        Qh = "gggg-[W]ww",
        jD = "YYYY-MM",
        qD = "YYYY-[Q]Q",
        GD = "YYYY";

    function pl(e) {
        var r, n;
        let t = window.app.plugins.getPlugin("periodic-notes");
        return t && ((n = (r = t.settings) == null ? void 0 : r[e]) == null ? void 0 : n.enabled)
    }

    function gl() {
        var e, t, r, n;
        try {
            let {
                internalPlugins: i,
                plugins: a
            } = window.app;
            if (pl("daily")) {
                let {
                    format: l,
                    folder: c,
                    template: d
                } = ((t = (e = a.getPlugin("periodic-notes")) == null ? void 0 : e.settings) == null ? void 0 : t.daily) || {};
                return {
                    format: l || Zh,
                    folder: (c == null ? void 0 : c.trim()) || "",
                    template: (d == null ? void 0 : d.trim()) || ""
                }
            }
            let {
                folder: o,
                format: s,
                template: u
            } = ((n = (r = i.getPluginById("daily-notes")) == null ? void 0 : r.instance) == null ? void 0 : n.options) || {};
            return {
                format: s || Zh,
                folder: (o == null ? void 0 : o.trim()) || "",
                template: (u == null ? void 0 : u.trim()) || ""
            }
        } catch (i) {
            console.info("No custom daily note settings found!", i)
        }
    }

    function yl() {
        var e, t, r, n, i, a, o;
        try {
            let s = window.app.plugins,
                u = (e = s.getPlugin("calendar")) == null ? void 0 : e.options,
                l = (r = (t = s.getPlugin("periodic-notes")) == null ? void 0 : t.settings) == null ? void 0 : r.weekly;
            if (pl("weekly")) return {
                format: l.format || Qh,
                folder: ((n = l.folder) == null ? void 0 : n.trim()) || "",
                template: ((i = l.template) == null ? void 0 : i.trim()) || ""
            };
            let c = u || {};
            return {
                format: c.weeklyNoteFormat || Qh,
                folder: ((a = c.weeklyNoteFolder) == null ? void 0 : a.trim()) || "",
                template: ((o = c.weeklyNoteTemplate) == null ? void 0 : o.trim()) || ""
            }
        } catch (s) {
            console.info("No custom weekly note settings found!", s)
        }
    }

    function vl() {
        var t, r, n, i;
        let e = window.app.plugins;
        try {
            let a = pl("monthly") && ((r = (t = e.getPlugin("periodic-notes")) == null ? void 0 : t.settings) == null ? void 0 : r.monthly) || {};
            return {
                format: a.format || jD,
                folder: ((n = a.folder) == null ? void 0 : n.trim()) || "",
                template: ((i = a.template) == null ? void 0 : i.trim()) || ""
            }
        } catch (a) {
            console.info("No custom monthly note settings found!", a)
        }
    }

    function wl() {
        var t, r, n, i;
        let e = window.app.plugins;
        try {
            let a = pl("quarterly") && ((r = (t = e.getPlugin("periodic-notes")) == null ? void 0 : t.settings) == null ? void 0 : r.quarterly) || {};
            return {
                format: a.format || qD,
                folder: ((n = a.folder) == null ? void 0 : n.trim()) || "",
                template: ((i = a.template) == null ? void 0 : i.trim()) || ""
            }
        } catch (a) {
            console.info("No custom quarterly note settings found!", a)
        }
    }

    function bl() {
        var t, r, n, i;
        let e = window.app.plugins;
        try {
            let a = pl("yearly") && ((r = (t = e.getPlugin("periodic-notes")) == null ? void 0 : t.settings) == null ? void 0 : r.yearly) || {};
            return {
                format: a.format || GD,
                folder: ((n = a.folder) == null ? void 0 : n.trim()) || "",
                template: ((i = a.template) == null ? void 0 : i.trim()) || ""
            }
        } catch (a) {
            console.info("No custom yearly note settings found!", a)
        }
    }

    function JD(...e) {
        let t = [];
        for (let n = 0, i = e.length; n < i; n++) t = t.concat(e[n].split("/"));
        let r = [];
        for (let n = 0, i = t.length; n < i; n++) {
            let a = t[n];
            !a || a === "." || r.push(a)
        }
        return t[0] === "" && r.unshift(""), r.join("/")
    }

    function ML(e) {
        let t = e.substring(e.lastIndexOf("/") + 1);
        return t.lastIndexOf(".") != -1 && (t = t.substring(0, t.lastIndexOf("."))), t
    }
    async function TL(e) {
        let t = e.replace(/\\/g, "/").split("/");
        if (t.pop(), t.length) {
            let r = JD(...t);
            window.app.vault.getAbstractFileByPath(r) || await window.app.vault.createFolder(r)
        }
    }
    async function Dl(e, t) {
        t.endsWith(".md") || (t += ".md");
        let r = on.normalizePath(JD(e, t));
        return await TL(r), r
    }
    async function Jo(e) {
        let {
            metadataCache: t,
            vault: r
        } = window.app, n = on.normalizePath(e);
        if (n === "/") return Promise.resolve(["", null]);
        try {
            let i = t.getFirstLinkpathDest(n, ""),
                a = await r.cachedRead(i),
                o = window.app.foldManager.load(i);
            return [a, o]
        } catch (i) {
            return console.error(`Failed to read the daily note template '${n}'`, i), new on.Notice("Failed to read the daily note template"), ["", null]
        }
    }

    function ni(e, t = "day") {
        let r = e.clone().startOf(t).format();
        return `${t}-${r}`
    }

    function ZD(e) {
        return e.replace(/\[[^\]]*\]/g, "")
    }

    function FL(e, t) {
        if (t === "week") {
            let r = ZD(e);
            return /w{1,2}/i.test(r) && (/M{1,4}/.test(r) || /D{1,4}/.test(r))
        }
        return !1
    }

    function Zo(e, t) {
        return QD(e.basename, t)
    }

    function IL(e, t) {
        return QD(ML(e), t)
    }

    function QD(e, t) {
        let n = {
                day: gl,
                week: yl,
                month: vl,
                quarter: wl,
                year: bl
            } [t]().format.split("/").pop(),
            i = window.moment(e, n, !0);
        if (!i.isValid()) return null;
        if (FL(n, t) && t === "week") {
            let a = ZD(n);
            if (/w{1,2}/i.test(a)) return window.moment(e, n.replace(/M{1,4}/g, "").replace(/D{1,4}/g, ""), !1)
        }
        return i
    }
    var Xh = class extends Error {};
    async function XD(e) {
        let t = window.app,
            {
                vault: r
            } = t,
            n = window.moment,
            {
                template: i,
                format: a,
                folder: o
            } = gl(),
            [s, u] = await Jo(i),
            l = e.format(a),
            c = await Dl(o, l);
        try {
            let d = await r.create(c, s.replace(/{{\s*date\s*}}/gi, l).replace(/{{\s*time\s*}}/gi, n().format("HH:mm")).replace(/{{\s*title\s*}}/gi, l).replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (m, h, g, y, v, D) => {
                let I = n(),
                    C = e.clone().set({
                        hour: I.get("hour"),
                        minute: I.get("minute"),
                        second: I.get("second")
                    });
                return g && C.add(parseInt(y, 10), v), D ? C.format(D.substring(1).trim()) : C.format(a)
            }).replace(/{{\s*yesterday\s*}}/gi, e.clone().subtract(1, "day").format(a)).replace(/{{\s*tomorrow\s*}}/gi, e.clone().add(1, "d").format(a)));
            return t.foldManager.save(d, u), d
        } catch (d) {
            console.error(`Failed to create file: '${c}'`, d), new on.Notice("Unable to create new file.")
        }
    }

    function AL(e, t) {
        var r;
        return (r = t[ni(e, "day")]) != null ? r : null
    }

    function OL() {
        let {
            vault: e
        } = window.app, {
            folder: t
        } = gl(), r = e.getAbstractFileByPath(on.normalizePath(t));
        if (!r) throw new Xh("Failed to find daily notes folder");
        let n = {};
        return on.Vault.recurseChildren(r, i => {
            if (i instanceof on.TFile) {
                let a = Zo(i, "day");
                if (a) {
                    let o = ni(a, "day");
                    n[o] = i
                }
            }
        }), n
    }
    var em = class extends Error {};

    function LL() {
        let {
            moment: e
        } = window, t = e.localeData()._week.dow, r = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        for (; t;) r.push(r.shift()), t--;
        return r
    }

    function PL(e) {
        return LL().indexOf(e.toLowerCase())
    }
    async function e0(e) {
        let {
            vault: t
        } = window.app, {
            template: r,
            format: n,
            folder: i
        } = yl(), [a, o] = await Jo(r), s = e.format(n), u = await Dl(i, s);
        try {
            let l = await t.create(u, a.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (c, d, m, h, g, y) => {
                let v = window.moment(),
                    D = e.clone().set({
                        hour: v.get("hour"),
                        minute: v.get("minute"),
                        second: v.get("second")
                    });
                return m && D.add(parseInt(h, 10), g), y ? D.format(y.substring(1).trim()) : D.format(n)
            }).replace(/{{\s*title\s*}}/gi, s).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s*:(.*?)}}/gi, (c, d, m) => {
                let h = PL(d);
                return e.weekday(h).format(m.trim())
            }));
            return window.app.foldManager.save(l, o), l
        } catch (l) {
            console.error(`Failed to create file: '${u}'`, l), new on.Notice("Unable to create new file.")
        }
    }

    function NL(e, t) {
        var r;
        return (r = t[ni(e, "week")]) != null ? r : null
    }

    function RL() {
        let e = {};
        if (!n0()) return e;
        let {
            vault: t
        } = window.app, {
            folder: r
        } = yl(), n = t.getAbstractFileByPath(on.normalizePath(r));
        if (!n) throw new em("Failed to find weekly notes folder");
        return on.Vault.recurseChildren(n, i => {
            if (i instanceof on.TFile) {
                let a = Zo(i, "week");
                if (a) {
                    let o = ni(a, "week");
                    e[o] = i
                }
            }
        }), e
    }
    var tm = class extends Error {};
    async function t0(e) {
        let {
            vault: t
        } = window.app, {
            template: r,
            format: n,
            folder: i
        } = vl(), [a, o] = await Jo(r), s = e.format(n), u = await Dl(i, s);
        try {
            let l = await t.create(u, a.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (c, d, m, h, g, y) => {
                let v = window.moment(),
                    D = e.clone().set({
                        hour: v.get("hour"),
                        minute: v.get("minute"),
                        second: v.get("second")
                    });
                return m && D.add(parseInt(h, 10), g), y ? D.format(y.substring(1).trim()) : D.format(n)
            }).replace(/{{\s*date\s*}}/gi, s).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, s));
            return window.app.foldManager.save(l, o), l
        } catch (l) {
            console.error(`Failed to create file: '${u}'`, l), new on.Notice("Unable to create new file.")
        }
    }

    function HL(e, t) {
        var r;
        return (r = t[ni(e, "month")]) != null ? r : null
    }

    function BL() {
        let e = {};
        if (!r0()) return e;
        let {
            vault: t
        } = window.app, {
            folder: r
        } = vl(), n = t.getAbstractFileByPath(on.normalizePath(r));
        if (!n) throw new tm("Failed to find monthly notes folder");
        return on.Vault.recurseChildren(n, i => {
            if (i instanceof on.TFile) {
                let a = Zo(i, "month");
                if (a) {
                    let o = ni(a, "month");
                    e[o] = i
                }
            }
        }), e
    }
    var nm = class extends Error {};
    async function VL(e) {
        let {
            vault: t
        } = window.app, {
            template: r,
            format: n,
            folder: i
        } = wl(), [a, o] = await Jo(r), s = e.format(n), u = await Dl(i, s);
        try {
            let l = await t.create(u, a.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (c, d, m, h, g, y) => {
                let v = window.moment(),
                    D = e.clone().set({
                        hour: v.get("hour"),
                        minute: v.get("minute"),
                        second: v.get("second")
                    });
                return m && D.add(parseInt(h, 10), g), y ? D.format(y.substring(1).trim()) : D.format(n)
            }).replace(/{{\s*date\s*}}/gi, s).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, s));
            return window.app.foldManager.save(l, o), l
        } catch (l) {
            console.error(`Failed to create file: '${u}'`, l), new on.Notice("Unable to create new file.")
        }
    }

    function $L(e, t) {
        var r;
        return (r = t[ni(e, "quarter")]) != null ? r : null
    }

    function UL() {
        let e = {};
        if (!i0()) return e;
        let {
            vault: t
        } = window.app, {
            folder: r
        } = wl(), n = t.getAbstractFileByPath(on.normalizePath(r));
        if (!n) throw new nm("Failed to find quarterly notes folder");
        return on.Vault.recurseChildren(n, i => {
            if (i instanceof on.TFile) {
                let a = Zo(i, "quarter");
                if (a) {
                    let o = ni(a, "quarter");
                    e[o] = i
                }
            }
        }), e
    }
    var rm = class extends Error {};
    async function WL(e) {
        let {
            vault: t
        } = window.app, {
            template: r,
            format: n,
            folder: i
        } = bl(), [a, o] = await Jo(r), s = e.format(n), u = await Dl(i, s);
        try {
            let l = await t.create(u, a.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (c, d, m, h, g, y) => {
                let v = window.moment(),
                    D = e.clone().set({
                        hour: v.get("hour"),
                        minute: v.get("minute"),
                        second: v.get("second")
                    });
                return m && D.add(parseInt(h, 10), g), y ? D.format(y.substring(1).trim()) : D.format(n)
            }).replace(/{{\s*date\s*}}/gi, s).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, s));
            return window.app.foldManager.save(l, o), l
        } catch (l) {
            console.error(`Failed to create file: '${u}'`, l), new on.Notice("Unable to create new file.")
        }
    }

    function YL(e, t) {
        var r;
        return (r = t[ni(e, "year")]) != null ? r : null
    }

    function zL() {
        let e = {};
        if (!a0()) return e;
        let {
            vault: t
        } = window.app, {
            folder: r
        } = bl(), n = t.getAbstractFileByPath(on.normalizePath(r));
        if (!n) throw new rm("Failed to find yearly notes folder");
        return on.Vault.recurseChildren(n, i => {
            if (i instanceof on.TFile) {
                let a = Zo(i, "year");
                if (a) {
                    let o = ni(a, "year");
                    e[o] = i
                }
            }
        }), e
    }

    function KL() {
        var n, i;
        let {
            app: e
        } = window, t = e.internalPlugins.plugins["daily-notes"];
        if (t && t.enabled) return !0;
        let r = e.plugins.getPlugin("periodic-notes");
        return r && ((i = (n = r.settings) == null ? void 0 : n.daily) == null ? void 0 : i.enabled)
    }

    function n0() {
        var r, n;
        let {
            app: e
        } = window;
        if (e.plugins.getPlugin("calendar")) return !0;
        let t = e.plugins.getPlugin("periodic-notes");
        return t && ((n = (r = t.settings) == null ? void 0 : r.weekly) == null ? void 0 : n.enabled)
    }

    function r0() {
        var r, n;
        let {
            app: e
        } = window, t = e.plugins.getPlugin("periodic-notes");
        return t && ((n = (r = t.settings) == null ? void 0 : r.monthly) == null ? void 0 : n.enabled)
    }

    function i0() {
        var r, n;
        let {
            app: e
        } = window, t = e.plugins.getPlugin("periodic-notes");
        return t && ((n = (r = t.settings) == null ? void 0 : r.quarterly) == null ? void 0 : n.enabled)
    }

    function a0() {
        var r, n;
        let {
            app: e
        } = window, t = e.plugins.getPlugin("periodic-notes");
        return t && ((n = (r = t.settings) == null ? void 0 : r.yearly) == null ? void 0 : n.enabled)
    }

    function jL(e) {
        let t = {
            day: gl,
            week: yl,
            month: vl,
            quarter: wl,
            year: bl
        } [e];
        return t()
    }

    function qL(e, t) {
        return {
            day: XD,
            month: t0,
            week: e0
        } [e](t)
    }
    gt.DEFAULT_DAILY_NOTE_FORMAT = Zh;
    gt.DEFAULT_MONTHLY_NOTE_FORMAT = jD;
    gt.DEFAULT_QUARTERLY_NOTE_FORMAT = qD;
    gt.DEFAULT_WEEKLY_NOTE_FORMAT = Qh;
    gt.DEFAULT_YEARLY_NOTE_FORMAT = GD;
    gt.appHasDailyNotesPluginLoaded = KL;
    gt.appHasMonthlyNotesPluginLoaded = r0;
    gt.appHasQuarterlyNotesPluginLoaded = i0;
    gt.appHasWeeklyNotesPluginLoaded = n0;
    gt.appHasYearlyNotesPluginLoaded = a0;
    gt.createDailyNote = XD;
    gt.createMonthlyNote = t0;
    gt.createPeriodicNote = qL;
    gt.createQuarterlyNote = VL;
    gt.createWeeklyNote = e0;
    gt.createYearlyNote = WL;
    gt.getAllDailyNotes = OL;
    gt.getAllMonthlyNotes = BL;
    gt.getAllQuarterlyNotes = UL;
    gt.getAllWeeklyNotes = RL;
    gt.getAllYearlyNotes = zL;
    gt.getDailyNote = AL;
    gt.getDailyNoteSettings = gl;
    gt.getDateFromFile = Zo;
    gt.getDateFromPath = IL;
    gt.getDateUID = ni;
    gt.getMonthlyNote = HL;
    gt.getMonthlyNoteSettings = vl;
    gt.getPeriodicNoteSettings = jL;
    gt.getQuarterlyNote = $L;
    gt.getQuarterlyNoteSettings = wl;
    gt.getTemplateInfo = Jo;
    gt.getWeeklyNote = NL;
    gt.getWeeklyNoteSettings = yl;
    gt.getYearlyNote = YL;
    gt.getYearlyNoteSettings = bl
});
var Ic = wn(Ei => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", {
        value: !0
    });
    require("obsidian");
    var qi = class extends Error {},
        fm = class extends qi {
            constructor(t) {
                super(`Invalid DateTime: ${t.toMessage()}`)
            }
        },
        hm = class extends qi {
            constructor(t) {
                super(`Invalid Interval: ${t.toMessage()}`)
            }
        },
        mm = class extends qi {
            constructor(t) {
                super(`Invalid Duration: ${t.toMessage()}`)
            }
        },
        ro = class extends qi {},
        yc = class extends qi {
            constructor(t) {
                super(`Invalid unit ${t}`)
            }
        },
        vr = class extends qi {},
        Di = class extends qi {
            constructor() {
                super("Zone is an abstract class")
            }
        },
        _e = "numeric",
        oi = "short",
        Or = "long",
        vc = {
            year: _e,
            month: _e,
            day: _e
        },
        H0 = {
            year: _e,
            month: oi,
            day: _e
        },
        GL = {
            year: _e,
            month: oi,
            day: _e,
            weekday: oi
        },
        B0 = {
            year: _e,
            month: Or,
            day: _e
        },
        V0 = {
            year: _e,
            month: Or,
            day: _e,
            weekday: Or
        },
        $0 = {
            hour: _e,
            minute: _e
        },
        U0 = {
            hour: _e,
            minute: _e,
            second: _e
        },
        W0 = {
            hour: _e,
            minute: _e,
            second: _e,
            timeZoneName: oi
        },
        Y0 = {
            hour: _e,
            minute: _e,
            second: _e,
            timeZoneName: Or
        },
        z0 = {
            hour: _e,
            minute: _e,
            hourCycle: "h23"
        },
        K0 = {
            hour: _e,
            minute: _e,
            second: _e,
            hourCycle: "h23"
        },
        j0 = {
            hour: _e,
            minute: _e,
            second: _e,
            hourCycle: "h23",
            timeZoneName: oi
        },
        q0 = {
            hour: _e,
            minute: _e,
            second: _e,
            hourCycle: "h23",
            timeZoneName: Or
        },
        G0 = {
            year: _e,
            month: _e,
            day: _e,
            hour: _e,
            minute: _e
        },
        J0 = {
            year: _e,
            month: _e,
            day: _e,
            hour: _e,
            minute: _e,
            second: _e
        },
        Z0 = {
            year: _e,
            month: oi,
            day: _e,
            hour: _e,
            minute: _e
        },
        Q0 = {
            year: _e,
            month: oi,
            day: _e,
            hour: _e,
            minute: _e,
            second: _e
        },
        JL = {
            year: _e,
            month: oi,
            day: _e,
            weekday: oi,
            hour: _e,
            minute: _e
        },
        X0 = {
            year: _e,
            month: Or,
            day: _e,
            hour: _e,
            minute: _e,
            timeZoneName: oi
        },
        eS = {
            year: _e,
            month: Or,
            day: _e,
            hour: _e,
            minute: _e,
            second: _e,
            timeZoneName: oi
        },
        tS = {
            year: _e,
            month: Or,
            day: _e,
            weekday: Or,
            hour: _e,
            minute: _e,
            timeZoneName: Or
        },
        nS = {
            year: _e,
            month: Or,
            day: _e,
            weekday: Or,
            hour: _e,
            minute: _e,
            second: _e,
            timeZoneName: Or
        },
        oo = class {
            get type() {
                throw new Di
            }
            get name() {
                throw new Di
            }
            get ianaName() {
                return this.name
            }
            get isUniversal() {
                throw new Di
            }
            offsetName(t, r) {
                throw new Di
            }
            formatOffset(t, r) {
                throw new Di
            }
            offset(t) {
                throw new Di
            }
            equals(t) {
                throw new Di
            }
            get isValid() {
                throw new Di
            }
        },
        im = null,
        wc = class e extends oo {
            static get instance() {
                return im === null && (im = new e), im
            }
            get type() {
                return "system"
            }
            get name() {
                return new Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            get isUniversal() {
                return !1
            }
            offsetName(t, {
                format: r,
                locale: n
            }) {
                return iS(t, r, n)
            }
            formatOffset(t, r) {
                return _l(this.offset(t), r)
            }
            offset(t) {
                return -new Date(t).getTimezoneOffset()
            }
            equals(t) {
                return t.type === "system"
            }
            get isValid() {
                return !0
            }
        },
        pc = {};

    function ZL(e) {
        return pc[e] || (pc[e] = new Intl.DateTimeFormat("en-US", {
            hour12: !1,
            timeZone: e,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            era: "short"
        })), pc[e]
    }
    var QL = {
        year: 0,
        month: 1,
        day: 2,
        era: 3,
        hour: 4,
        minute: 5,
        second: 6
    };

    function XL(e, t) {
        let r = e.format(t).replace(/\u200E/g, ""),
            n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),
            [, i, a, o, s, u, l, c] = n;
        return [o, i, a, s, u, l, c]
    }

    function e2(e, t) {
        let r = e.formatToParts(t),
            n = [];
        for (let i = 0; i < r.length; i++) {
            let {
                type: a,
                value: o
            } = r[i], s = QL[a];
            a === "era" ? n[s] = o : kt(s) || (n[s] = parseInt(o, 10))
        }
        return n
    }
    var uc = {},
        Da = class e extends oo {
            static create(t) {
                return uc[t] || (uc[t] = new e(t)), uc[t]
            }
            static resetCache() {
                uc = {}, pc = {}
            }
            static isValidSpecifier(t) {
                return this.isValidZone(t)
            }
            static isValidZone(t) {
                if (!t) return !1;
                try {
                    return new Intl.DateTimeFormat("en-US", {
                        timeZone: t
                    }).format(), !0
                } catch (r) {
                    return !1
                }
            }
            constructor(t) {
                super(), this.zoneName = t, this.valid = e.isValidZone(t)
            }
            get type() {
                return "iana"
            }
            get name() {
                return this.zoneName
            }
            get isUniversal() {
                return !1
            }
            offsetName(t, {
                format: r,
                locale: n
            }) {
                return iS(t, r, n, this.name)
            }
            formatOffset(t, r) {
                return _l(this.offset(t), r)
            }
            offset(t) {
                let r = new Date(t);
                if (isNaN(r)) return NaN;
                let n = ZL(this.name),
                    [i, a, o, s, u, l, c] = n.formatToParts ? e2(n, r) : XL(n, r);
                s === "BC" && (i = -Math.abs(i) + 1);
                let m = Mc({
                        year: i,
                        month: a,
                        day: o,
                        hour: u === 24 ? 0 : u,
                        minute: l,
                        second: c,
                        millisecond: 0
                    }),
                    h = +r,
                    g = h % 1e3;
                return h -= g >= 0 ? g : 1e3 + g, (m - h) / (60 * 1e3)
            }
            equals(t) {
                return t.type === "iana" && t.name === this.name
            }
            get isValid() {
                return this.valid
            }
        },
        s0 = {};

    function t2(e, t = {}) {
        let r = JSON.stringify([e, t]),
            n = s0[r];
        return n || (n = new Intl.ListFormat(e, t), s0[r] = n), n
    }
    var pm = {};

    function gm(e, t = {}) {
        let r = JSON.stringify([e, t]),
            n = pm[r];
        return n || (n = new Intl.DateTimeFormat(e, t), pm[r] = n), n
    }
    var ym = {};

    function n2(e, t = {}) {
        let r = JSON.stringify([e, t]),
            n = ym[r];
        return n || (n = new Intl.NumberFormat(e, t), ym[r] = n), n
    }
    var vm = {};

    function r2(e, t = {}) {
        let {
            base: r,
            ...n
        } = t, i = JSON.stringify([e, n]), a = vm[i];
        return a || (a = new Intl.RelativeTimeFormat(e, t), vm[i] = a), a
    }
    var xl = null;

    function i2() {
        return xl || (xl = new Intl.DateTimeFormat().resolvedOptions().locale, xl)
    }

    function a2(e) {
        let t = e.indexOf("-x-");
        t !== -1 && (e = e.substring(0, t));
        let r = e.indexOf("-u-");
        if (r === -1) return [e];
        {
            let n, i;
            try {
                n = gm(e).resolvedOptions(), i = e
            } catch (s) {
                let u = e.substring(0, r);
                n = gm(u).resolvedOptions(), i = u
            }
            let {
                numberingSystem: a,
                calendar: o
            } = n;
            return [i, a, o]
        }
    }

    function o2(e, t, r) {
        return (r || t) && (e.includes("-u-") || (e += "-u"), r && (e += `-ca-${r}`), t && (e += `-nu-${t}`)), e
    }

    function s2(e) {
        let t = [];
        for (let r = 1; r <= 12; r++) {
            let n = mt.utc(2009, r, 1);
            t.push(e(n))
        }
        return t
    }

    function l2(e) {
        let t = [];
        for (let r = 1; r <= 7; r++) {
            let n = mt.utc(2016, 11, 13 + r);
            t.push(e(n))
        }
        return t
    }

    function cc(e, t, r, n) {
        let i = e.listingMode();
        return i === "error" ? null : i === "en" ? r(t) : n(t)
    }

    function u2(e) {
        return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn"
    }
    var wm = class {
            constructor(t, r, n) {
                this.padTo = n.padTo || 0, this.floor = n.floor || !1;
                let {
                    padTo: i,
                    floor: a,
                    ...o
                } = n;
                if (!r || Object.keys(o).length > 0) {
                    let s = {
                        useGrouping: !1,
                        ...n
                    };
                    n.padTo > 0 && (s.minimumIntegerDigits = n.padTo), this.inf = n2(t, s)
                }
            }
            format(t) {
                if (this.inf) {
                    let r = this.floor ? Math.floor(t) : t;
                    return this.inf.format(r)
                } else {
                    let r = this.floor ? Math.floor(t) : Om(t, 3);
                    return Tn(r, this.padTo)
                }
            }
        },
        bm = class {
            constructor(t, r, n) {
                this.opts = n, this.originalZone = void 0;
                let i;
                if (this.opts.timeZone) this.dt = t;
                else if (t.zone.type === "fixed") {
                    let o = -1 * (t.offset / 60),
                        s = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
                    t.offset !== 0 && Da.create(s).valid ? (i = s, this.dt = t) : (i = "UTC", this.dt = t.offset === 0 ? t : t.setZone("UTC").plus({
                        minutes: t.offset
                    }), this.originalZone = t.zone)
                } else t.zone.type === "system" ? this.dt = t : t.zone.type === "iana" ? (this.dt = t, i = t.zone.name) : (i = "UTC", this.dt = t.setZone("UTC").plus({
                    minutes: t.offset
                }), this.originalZone = t.zone);
                let a = {
                    ...this.opts
                };
                a.timeZone = a.timeZone || i, this.dtf = gm(r, a)
            }
            format() {
                return this.originalZone ? this.formatToParts().map(({
                    value: t
                }) => t).join("") : this.dtf.format(this.dt.toJSDate())
            }
            formatToParts() {
                let t = this.dtf.formatToParts(this.dt.toJSDate());
                return this.originalZone ? t.map(r => {
                    if (r.type === "timeZoneName") {
                        let n = this.originalZone.offsetName(this.dt.ts, {
                            locale: this.dt.locale,
                            format: this.opts.timeZoneName
                        });
                        return {
                            ...r,
                            value: n
                        }
                    } else return r
                }) : t
            }
            resolvedOptions() {
                return this.dtf.resolvedOptions()
            }
        },
        Dm = class {
            constructor(t, r, n) {
                this.opts = {
                    style: "long",
                    ...n
                }, !r && rS() && (this.rtf = r2(t, n))
            }
            format(t, r) {
                return this.rtf ? this.rtf.format(t, r) : x2(r, t, this.opts.numeric, this.opts.style !== "long")
            }
            formatToParts(t, r) {
                return this.rtf ? this.rtf.formatToParts(t, r) : []
            }
        },
        mn = class e {
            static fromOpts(t) {
                return e.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN)
            }
            static create(t, r, n, i = !1) {
                let a = t || hn.defaultLocale,
                    o = a || (i ? "en-US" : i2()),
                    s = r || hn.defaultNumberingSystem,
                    u = n || hn.defaultOutputCalendar;
                return new e(o, s, u, a)
            }
            static resetCache() {
                xl = null, pm = {}, ym = {}, vm = {}
            }
            static fromObject({
                locale: t,
                numberingSystem: r,
                outputCalendar: n
            } = {}) {
                return e.create(t, r, n)
            }
            constructor(t, r, n, i) {
                let [a, o, s] = a2(t);
                this.locale = a, this.numberingSystem = r || o || null, this.outputCalendar = n || s || null, this.intl = o2(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
                    format: {},
                    standalone: {}
                }, this.monthsCache = {
                    format: {},
                    standalone: {}
                }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null
            }
            get fastNumbers() {
                return this.fastNumbersCached == null && (this.fastNumbersCached = u2(this)), this.fastNumbersCached
            }
            listingMode() {
                let t = this.isEnglish(),
                    r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
                return t && r ? "en" : "intl"
            }
            clone(t) {
                return !t || Object.getOwnPropertyNames(t).length === 0 ? this : e.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || !1)
            }
            redefaultToEN(t = {}) {
                return this.clone({
                    ...t,
                    defaultToEN: !0
                })
            }
            redefaultToSystem(t = {}) {
                return this.clone({
                    ...t,
                    defaultToEN: !1
                })
            }
            months(t, r = !1) {
                return cc(this, t, sS, () => {
                    let n = r ? {
                            month: t,
                            day: "numeric"
                        } : {
                            month: t
                        },
                        i = r ? "format" : "standalone";
                    return this.monthsCache[i][t] || (this.monthsCache[i][t] = s2(a => this.extract(a, n, "month"))), this.monthsCache[i][t]
                })
            }
            weekdays(t, r = !1) {
                return cc(this, t, cS, () => {
                    let n = r ? {
                            weekday: t,
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        } : {
                            weekday: t
                        },
                        i = r ? "format" : "standalone";
                    return this.weekdaysCache[i][t] || (this.weekdaysCache[i][t] = l2(a => this.extract(a, n, "weekday"))), this.weekdaysCache[i][t]
                })
            }
            meridiems() {
                return cc(this, void 0, () => dS, () => {
                    if (!this.meridiemCache) {
                        let t = {
                            hour: "numeric",
                            hourCycle: "h12"
                        };
                        this.meridiemCache = [mt.utc(2016, 11, 13, 9), mt.utc(2016, 11, 13, 19)].map(r => this.extract(r, t, "dayperiod"))
                    }
                    return this.meridiemCache
                })
            }
            eras(t) {
                return cc(this, t, fS, () => {
                    let r = {
                        era: t
                    };
                    return this.eraCache[t] || (this.eraCache[t] = [mt.utc(-40, 1, 1), mt.utc(2017, 1, 1)].map(n => this.extract(n, r, "era"))), this.eraCache[t]
                })
            }
            extract(t, r, n) {
                let i = this.dtFormatter(t, r),
                    a = i.formatToParts(),
                    o = a.find(s => s.type.toLowerCase() === n);
                return o ? o.value : null
            }
            numberFormatter(t = {}) {
                return new wm(this.intl, t.forceSimple || this.fastNumbers, t)
            }
            dtFormatter(t, r = {}) {
                return new bm(t, this.intl, r)
            }
            relFormatter(t = {}) {
                return new Dm(this.intl, this.isEnglish(), t)
            }
            listFormatter(t = {}) {
                return t2(this.intl, t)
            }
            isEnglish() {
                return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
            }
            equals(t) {
                return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar
            }
        },
        am = null,
        Kr = class e extends oo {
            static get utcInstance() {
                return am === null && (am = new e(0)), am
            }
            static instance(t) {
                return t === 0 ? e.utcInstance : new e(t)
            }
            static parseSpecifier(t) {
                if (t) {
                    let r = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                    if (r) return new e(Tc(r[1], r[2]))
                }
                return null
            }
            constructor(t) {
                super(), this.fixed = t
            }
            get type() {
                return "fixed"
            }
            get name() {
                return this.fixed === 0 ? "UTC" : `UTC${_l(this.fixed,"narrow")}`
            }
            get ianaName() {
                return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${_l(-this.fixed,"narrow")}`
            }
            offsetName() {
                return this.name
            }
            formatOffset(t, r) {
                return _l(this.fixed, r)
            }
            get isUniversal() {
                return !0
            }
            offset() {
                return this.fixed
            }
            equals(t) {
                return t.type === "fixed" && t.fixed === this.fixed
            }
            get isValid() {
                return !0
            }
        },
        Sm = class extends oo {
            constructor(t) {
                super(), this.zoneName = t
            }
            get type() {
                return "invalid"
            }
            get name() {
                return this.zoneName
            }
            get isUniversal() {
                return !1
            }
            offsetName() {
                return null
            }
            formatOffset() {
                return ""
            }
            offset() {
                return NaN
            }
            equals() {
                return !1
            }
            get isValid() {
                return !1
            }
        };

    function ba(e, t) {
        if (kt(e) || e === null) return t;
        if (e instanceof oo) return e;
        if (c2(e)) {
            let r = e.toLowerCase();
            return r === "default" ? t : r === "local" || r === "system" ? wc.instance : r === "utc" || r === "gmt" ? Kr.utcInstance : Kr.parseSpecifier(r) || Da.create(e)
        } else return ao(e) ? Kr.instance(e) : typeof e == "object" && "offset" in e && typeof e.offset == "function" ? e : new Sm(e)
    }
    var l0 = () => Date.now(),
        u0 = "system",
        c0 = null,
        d0 = null,
        f0 = null,
        h0 = 60,
        m0, hn = class {
            static get now() {
                return l0
            }
            static set now(t) {
                l0 = t
            }
            static set defaultZone(t) {
                u0 = t
            }
            static get defaultZone() {
                return ba(u0, wc.instance)
            }
            static get defaultLocale() {
                return c0
            }
            static set defaultLocale(t) {
                c0 = t
            }
            static get defaultNumberingSystem() {
                return d0
            }
            static set defaultNumberingSystem(t) {
                d0 = t
            }
            static get defaultOutputCalendar() {
                return f0
            }
            static set defaultOutputCalendar(t) {
                f0 = t
            }
            static get twoDigitCutoffYear() {
                return h0
            }
            static set twoDigitCutoffYear(t) {
                h0 = t % 100
            }
            static get throwOnInvalid() {
                return m0
            }
            static set throwOnInvalid(t) {
                m0 = t
            }
            static resetCaches() {
                mn.resetCache(), Da.resetCache()
            }
        };

    function kt(e) {
        return typeof e == "undefined"
    }

    function ao(e) {
        return typeof e == "number"
    }

    function _c(e) {
        return typeof e == "number" && e % 1 === 0
    }

    function c2(e) {
        return typeof e == "string"
    }

    function d2(e) {
        return Object.prototype.toString.call(e) === "[object Date]"
    }

    function rS() {
        try {
            return typeof Intl != "undefined" && !!Intl.RelativeTimeFormat
        } catch (e) {
            return !1
        }
    }

    function f2(e) {
        return Array.isArray(e) ? e : [e]
    }

    function p0(e, t, r) {
        if (e.length !== 0) return e.reduce((n, i) => {
            let a = [t(i), i];
            return n && r(n[0], a[0]) === n[0] ? n : a
        }, null)[1]
    }

    function h2(e, t) {
        return t.reduce((r, n) => (r[n] = e[n], r), {})
    }

    function rs(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function ji(e, t, r) {
        return _c(e) && e >= t && e <= r
    }

    function m2(e, t) {
        return e - t * Math.floor(e / t)
    }

    function Tn(e, t = 2) {
        let r = e < 0,
            n;
        return r ? n = "-" + ("" + -e).padStart(t, "0") : n = ("" + e).padStart(t, "0"), n
    }

    function wa(e) {
        if (!(kt(e) || e === null || e === "")) return parseInt(e, 10)
    }

    function to(e) {
        if (!(kt(e) || e === null || e === "")) return parseFloat(e)
    }

    function Am(e) {
        if (!(kt(e) || e === null || e === "")) {
            let t = parseFloat("0." + e) * 1e3;
            return Math.floor(t)
        }
    }

    function Om(e, t, r = !1) {
        let n = 10 ** t;
        return (r ? Math.trunc : Math.round)(e * n) / n
    }

    function Fl(e) {
        return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)
    }

    function Cl(e) {
        return Fl(e) ? 366 : 365
    }

    function bc(e, t) {
        let r = m2(t - 1, 12) + 1,
            n = e + (t - r) / 12;
        return r === 2 ? Fl(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1]
    }

    function Mc(e) {
        let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
        return e.year < 100 && e.year >= 0 && (t = new Date(t), t.setUTCFullYear(e.year, e.month - 1, e.day)), +t
    }

    function Dc(e) {
        let t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
            r = e - 1,
            n = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7;
        return t === 4 || n === 3 ? 53 : 52
    }

    function Em(e) {
        return e > 99 ? e : e > hn.twoDigitCutoffYear ? 1900 + e : 2e3 + e
    }

    function iS(e, t, r, n = null) {
        let i = new Date(e),
            a = {
                hourCycle: "h23",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            };
        n && (a.timeZone = n);
        let o = {
                timeZoneName: t,
                ...a
            },
            s = new Intl.DateTimeFormat(r, o).formatToParts(i).find(u => u.type.toLowerCase() === "timezonename");
        return s ? s.value : null
    }

    function Tc(e, t) {
        let r = parseInt(e, 10);
        Number.isNaN(r) && (r = 0);
        let n = parseInt(t, 10) || 0,
            i = r < 0 || Object.is(r, -0) ? -n : n;
        return r * 60 + i
    }

    function aS(e) {
        let t = Number(e);
        if (typeof e == "boolean" || e === "" || Number.isNaN(t)) throw new vr(`Invalid unit value ${e}`);
        return t
    }

    function Sc(e, t) {
        let r = {};
        for (let n in e)
            if (rs(e, n)) {
                let i = e[n];
                if (i == null) continue;
                r[t(n)] = aS(i)
            } return r
    }

    function _l(e, t) {
        let r = Math.trunc(Math.abs(e / 60)),
            n = Math.trunc(Math.abs(e % 60)),
            i = e >= 0 ? "+" : "-";
        switch (t) {
            case "short":
                return `${i}${Tn(r,2)}:${Tn(n,2)}`;
            case "narrow":
                return `${i}${r}${n>0?`:${n}`:""}`;
            case "techie":
                return `${i}${Tn(r,2)}${Tn(n,2)}`;
            default:
                throw new RangeError(`Value format ${t} is out of range for property format`)
        }
    }

    function Fc(e) {
        return h2(e, ["hour", "minute", "second", "millisecond"])
    }
    var p2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        oS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        g2 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

    function sS(e) {
        switch (e) {
            case "narrow":
                return [...g2];
            case "short":
                return [...oS];
            case "long":
                return [...p2];
            case "numeric":
                return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
            case "2-digit":
                return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            default:
                return null
        }
    }
    var lS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        uS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        y2 = ["M", "T", "W", "T", "F", "S", "S"];

    function cS(e) {
        switch (e) {
            case "narrow":
                return [...y2];
            case "short":
                return [...uS];
            case "long":
                return [...lS];
            case "numeric":
                return ["1", "2", "3", "4", "5", "6", "7"];
            default:
                return null
        }
    }
    var dS = ["AM", "PM"],
        v2 = ["Before Christ", "Anno Domini"],
        w2 = ["BC", "AD"],
        b2 = ["B", "A"];

    function fS(e) {
        switch (e) {
            case "narrow":
                return [...b2];
            case "short":
                return [...w2];
            case "long":
                return [...v2];
            default:
                return null
        }
    }

    function D2(e) {
        return dS[e.hour < 12 ? 0 : 1]
    }

    function S2(e, t) {
        return cS(t)[e.weekday - 1]
    }

    function E2(e, t) {
        return sS(t)[e.month - 1]
    }

    function k2(e, t) {
        return fS(t)[e.year < 0 ? 0 : 1]
    }

    function x2(e, t, r = "always", n = !1) {
        let i = {
                years: ["year", "yr."],
                quarters: ["quarter", "qtr."],
                months: ["month", "mo."],
                weeks: ["week", "wk."],
                days: ["day", "day", "days"],
                hours: ["hour", "hr."],
                minutes: ["minute", "min."],
                seconds: ["second", "sec."]
            },
            a = ["hours", "minutes", "seconds"].indexOf(e) === -1;
        if (r === "auto" && a) {
            let d = e === "days";
            switch (t) {
                case 1:
                    return d ? "tomorrow" : `next ${i[e][0]}`;
                case -1:
                    return d ? "yesterday" : `last ${i[e][0]}`;
                case 0:
                    return d ? "today" : `this ${i[e][0]}`
            }
        }
        let o = Object.is(t, -0) || t < 0,
            s = Math.abs(t),
            u = s === 1,
            l = i[e],
            c = n ? u ? l[1] : l[2] || l[1] : u ? i[e][0] : e;
        return o ? `${s} ${c} ago` : `in ${s} ${c}`
    }

    function g0(e, t) {
        let r = "";
        for (let n of e) n.literal ? r += n.val : r += t(n.val);
        return r
    }
    var C2 = {
            D: vc,
            DD: H0,
            DDD: B0,
            DDDD: V0,
            t: $0,
            tt: U0,
            ttt: W0,
            tttt: Y0,
            T: z0,
            TT: K0,
            TTT: j0,
            TTTT: q0,
            f: G0,
            ff: Z0,
            fff: X0,
            ffff: tS,
            F: J0,
            FF: Q0,
            FFF: eS,
            FFFF: nS
        },
        Ir = class e {
            static create(t, r = {}) {
                return new e(t, r)
            }
            static parseFormat(t) {
                let r = null,
                    n = "",
                    i = !1,
                    a = [];
                for (let o = 0; o < t.length; o++) {
                    let s = t.charAt(o);
                    s === "'" ? (n.length > 0 && a.push({
                        literal: i || /^\s+$/.test(n),
                        val: n
                    }), r = null, n = "", i = !i) : i || s === r ? n += s : (n.length > 0 && a.push({
                        literal: /^\s+$/.test(n),
                        val: n
                    }), n = s, r = s)
                }
                return n.length > 0 && a.push({
                    literal: i || /^\s+$/.test(n),
                    val: n
                }), a
            }
            static macroTokenToFormatOpts(t) {
                return C2[t]
            }
            constructor(t, r) {
                this.opts = r, this.loc = t, this.systemLoc = null
            }
            formatWithSystemDefault(t, r) {
                return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(t, {
                    ...this.opts,
                    ...r
                }).format()
            }
            dtFormatter(t, r = {}) {
                return this.loc.dtFormatter(t, {
                    ...this.opts,
                    ...r
                })
            }
            formatDateTime(t, r) {
                return this.dtFormatter(t, r).format()
            }
            formatDateTimeParts(t, r) {
                return this.dtFormatter(t, r).formatToParts()
            }
            formatInterval(t, r) {
                return this.dtFormatter(t.start, r).dtf.formatRange(t.start.toJSDate(), t.end.toJSDate())
            }
            resolvedOptions(t, r) {
                return this.dtFormatter(t, r).resolvedOptions()
            }
            num(t, r = 0) {
                if (this.opts.forceSimple) return Tn(t, r);
                let n = {
                    ...this.opts
                };
                return r > 0 && (n.padTo = r), this.loc.numberFormatter(n).format(t)
            }
            formatDateTimeFromString(t, r) {
                let n = this.loc.listingMode() === "en",
                    i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
                    a = (h, g) => this.loc.extract(t, h, g),
                    o = h => t.isOffsetFixed && t.offset === 0 && h.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, h.format) : "",
                    s = () => n ? D2(t) : a({
                        hour: "numeric",
                        hourCycle: "h12"
                    }, "dayperiod"),
                    u = (h, g) => n ? E2(t, h) : a(g ? {
                        month: h
                    } : {
                        month: h,
                        day: "numeric"
                    }, "month"),
                    l = (h, g) => n ? S2(t, h) : a(g ? {
                        weekday: h
                    } : {
                        weekday: h,
                        month: "long",
                        day: "numeric"
                    }, "weekday"),
                    c = h => {
                        let g = e.macroTokenToFormatOpts(h);
                        return g ? this.formatWithSystemDefault(t, g) : h
                    },
                    d = h => n ? k2(t, h) : a({
                        era: h
                    }, "era"),
                    m = h => {
                        switch (h) {
                            case "S":
                                return this.num(t.millisecond);
                            case "u":
                            case "SSS":
                                return this.num(t.millisecond, 3);
                            case "s":
                                return this.num(t.second);
                            case "ss":
                                return this.num(t.second, 2);
                            case "uu":
                                return this.num(Math.floor(t.millisecond / 10), 2);
                            case "uuu":
                                return this.num(Math.floor(t.millisecond / 100));
                            case "m":
                                return this.num(t.minute);
                            case "mm":
                                return this.num(t.minute, 2);
                            case "h":
                                return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
                            case "hh":
                                return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
                            case "H":
                                return this.num(t.hour);
                            case "HH":
                                return this.num(t.hour, 2);
                            case "Z":
                                return o({
                                    format: "narrow",
                                    allowZ: this.opts.allowZ
                                });
                            case "ZZ":
                                return o({
                                    format: "short",
                                    allowZ: this.opts.allowZ
                                });
                            case "ZZZ":
                                return o({
                                    format: "techie",
                                    allowZ: this.opts.allowZ
                                });
                            case "ZZZZ":
                                return t.zone.offsetName(t.ts, {
                                    format: "short",
                                    locale: this.loc.locale
                                });
                            case "ZZZZZ":
                                return t.zone.offsetName(t.ts, {
                                    format: "long",
                                    locale: this.loc.locale
                                });
                            case "z":
                                return t.zoneName;
                            case "a":
                                return s();
                            case "d":
                                return i ? a({
                                    day: "numeric"
                                }, "day") : this.num(t.day);
                            case "dd":
                                return i ? a({
                                    day: "2-digit"
                                }, "day") : this.num(t.day, 2);
                            case "c":
                                return this.num(t.weekday);
                            case "ccc":
                                return l("short", !0);
                            case "cccc":
                                return l("long", !0);
                            case "ccccc":
                                return l("narrow", !0);
                            case "E":
                                return this.num(t.weekday);
                            case "EEE":
                                return l("short", !1);
                            case "EEEE":
                                return l("long", !1);
                            case "EEEEE":
                                return l("narrow", !1);
                            case "L":
                                return i ? a({
                                    month: "numeric",
                                    day: "numeric"
                                }, "month") : this.num(t.month);
                            case "LL":
                                return i ? a({
                                    month: "2-digit",
                                    day: "numeric"
                                }, "month") : this.num(t.month, 2);
                            case "LLL":
                                return u("short", !0);
                            case "LLLL":
                                return u("long", !0);
                            case "LLLLL":
                                return u("narrow", !0);
                            case "M":
                                return i ? a({
                                    month: "numeric"
                                }, "month") : this.num(t.month);
                            case "MM":
                                return i ? a({
                                    month: "2-digit"
                                }, "month") : this.num(t.month, 2);
                            case "MMM":
                                return u("short", !1);
                            case "MMMM":
                                return u("long", !1);
                            case "MMMMM":
                                return u("narrow", !1);
                            case "y":
                                return i ? a({
                                    year: "numeric"
                                }, "year") : this.num(t.year);
                            case "yy":
                                return i ? a({
                                    year: "2-digit"
                                }, "year") : this.num(t.year.toString().slice(-2), 2);
                            case "yyyy":
                                return i ? a({
                                    year: "numeric"
                                }, "year") : this.num(t.year, 4);
                            case "yyyyyy":
                                return i ? a({
                                    year: "numeric"
                                }, "year") : this.num(t.year, 6);
                            case "G":
                                return d("short");
                            case "GG":
                                return d("long");
                            case "GGGGG":
                                return d("narrow");
                            case "kk":
                                return this.num(t.weekYear.toString().slice(-2), 2);
                            case "kkkk":
                                return this.num(t.weekYear, 4);
                            case "W":
                                return this.num(t.weekNumber);
                            case "WW":
                                return this.num(t.weekNumber, 2);
                            case "o":
                                return this.num(t.ordinal);
                            case "ooo":
                                return this.num(t.ordinal, 3);
                            case "q":
                                return this.num(t.quarter);
                            case "qq":
                                return this.num(t.quarter, 2);
                            case "X":
                                return this.num(Math.floor(t.ts / 1e3));
                            case "x":
                                return this.num(t.ts);
                            default:
                                return c(h)
                        }
                    };
                return g0(e.parseFormat(r), m)
            }
            formatDurationFromString(t, r) {
                let n = u => {
                        switch (u[0]) {
                            case "S":
                                return "millisecond";
                            case "s":
                                return "second";
                            case "m":
                                return "minute";
                            case "h":
                                return "hour";
                            case "d":
                                return "day";
                            case "w":
                                return "week";
                            case "M":
                                return "month";
                            case "y":
                                return "year";
                            default:
                                return null
                        }
                    },
                    i = u => l => {
                        let c = n(l);
                        return c ? this.num(u.get(c), l.length) : l
                    },
                    a = e.parseFormat(r),
                    o = a.reduce((u, {
                        literal: l,
                        val: c
                    }) => l ? u : u.concat(c), []),
                    s = t.shiftTo(...o.map(n).filter(u => u));
                return g0(a, i(s))
            }
        },
        Ar = class {
            constructor(t, r) {
                this.reason = t, this.explanation = r
            }
            toMessage() {
                return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason
            }
        },
        hS = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

    function is(...e) {
        let t = e.reduce((r, n) => r + n.source, "");
        return RegExp(`^${t}$`)
    }

    function as(...e) {
        return t => e.reduce(([r, n, i], a) => {
            let [o, s, u] = a(t, i);
            return [{
                ...r,
                ...o
            }, s || n, u]
        }, [{}, null, 1]).slice(0, 2)
    }

    function os(e, ...t) {
        if (e == null) return [null, null];
        for (let [r, n] of t) {
            let i = r.exec(e);
            if (i) return n(i)
        }
        return [null, null]
    }

    function mS(...e) {
        return (t, r) => {
            let n = {},
                i;
            for (i = 0; i < e.length; i++) n[e[i]] = wa(t[r + i]);
            return [n, null, r + i]
        }
    }
    var pS = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
        _2 = `(?:${pS.source}?(?:\\[(${hS.source})\\])?)?`,
        Lm = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
        gS = RegExp(`${Lm.source}${_2}`),
        Pm = RegExp(`(?:T${gS.source})?`),
        M2 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
        T2 = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
        F2 = /(\d{4})-?(\d{3})/,
        I2 = mS("weekYear", "weekNumber", "weekDay"),
        A2 = mS("year", "ordinal"),
        O2 = /(\d{4})-(\d\d)-(\d\d)/,
        yS = RegExp(`${Lm.source} ?(?:${pS.source}|(${hS.source}))?`),
        L2 = RegExp(`(?: ${yS.source})?`);

    function ts(e, t, r) {
        let n = e[t];
        return kt(n) ? r : wa(n)
    }

    function P2(e, t) {
        return [{
            year: ts(e, t),
            month: ts(e, t + 1, 1),
            day: ts(e, t + 2, 1)
        }, null, t + 3]
    }

    function ss(e, t) {
        return [{
            hours: ts(e, t, 0),
            minutes: ts(e, t + 1, 0),
            seconds: ts(e, t + 2, 0),
            milliseconds: Am(e[t + 3])
        }, null, t + 4]
    }

    function Il(e, t) {
        let r = !e[t] && !e[t + 1],
            n = Tc(e[t + 1], e[t + 2]),
            i = r ? null : Kr.instance(n);
        return [{}, i, t + 3]
    }

    function Al(e, t) {
        let r = e[t] ? Da.create(e[t]) : null;
        return [{}, r, t + 1]
    }
    var N2 = RegExp(`^T?${Lm.source}$`),
        R2 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

    function H2(e) {
        let [t, r, n, i, a, o, s, u, l] = e, c = t[0] === "-", d = u && u[0] === "-", m = (h, g = !1) => h !== void 0 && (g || h && c) ? -h : h;
        return [{
            years: m(to(r)),
            months: m(to(n)),
            weeks: m(to(i)),
            days: m(to(a)),
            hours: m(to(o)),
            minutes: m(to(s)),
            seconds: m(to(u), u === "-0"),
            milliseconds: m(Am(l), d)
        }]
    }
    var B2 = {
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function Nm(e, t, r, n, i, a, o) {
        let s = {
            year: t.length === 2 ? Em(wa(t)) : wa(t),
            month: oS.indexOf(r) + 1,
            day: wa(n),
            hour: wa(i),
            minute: wa(a)
        };
        return o && (s.second = wa(o)), e && (s.weekday = e.length > 3 ? lS.indexOf(e) + 1 : uS.indexOf(e) + 1), s
    }
    var V2 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

    function $2(e) {
        let [, t, r, n, i, a, o, s, u, l, c, d] = e, m = Nm(t, i, n, r, a, o, s), h;
        return u ? h = B2[u] : l ? h = 0 : h = Tc(c, d), [m, new Kr(h)]
    }

    function U2(e) {
        return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
    }
    var W2 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
        Y2 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
        z2 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

    function y0(e) {
        let [, t, r, n, i, a, o, s] = e;
        return [Nm(t, i, n, r, a, o, s), Kr.utcInstance]
    }

    function K2(e) {
        let [, t, r, n, i, a, o, s] = e;
        return [Nm(t, s, r, n, i, a, o), Kr.utcInstance]
    }
    var j2 = is(M2, Pm),
        q2 = is(T2, Pm),
        G2 = is(F2, Pm),
        J2 = is(gS),
        vS = as(P2, ss, Il, Al),
        Z2 = as(I2, ss, Il, Al),
        Q2 = as(A2, ss, Il, Al),
        X2 = as(ss, Il, Al);

    function eP(e) {
        return os(e, [j2, vS], [q2, Z2], [G2, Q2], [J2, X2])
    }

    function tP(e) {
        return os(U2(e), [V2, $2])
    }

    function nP(e) {
        return os(e, [W2, y0], [Y2, y0], [z2, K2])
    }

    function rP(e) {
        return os(e, [R2, H2])
    }
    var iP = as(ss);

    function aP(e) {
        return os(e, [N2, iP])
    }
    var oP = is(O2, L2),
        sP = is(yS),
        lP = as(ss, Il, Al);

    function uP(e) {
        return os(e, [oP, vS], [sP, lP])
    }
    var v0 = "Invalid Duration",
        wS = {
            weeks: {
                days: 7,
                hours: 7 * 24,
                minutes: 7 * 24 * 60,
                seconds: 7 * 24 * 60 * 60,
                milliseconds: 7 * 24 * 60 * 60 * 1e3
            },
            days: {
                hours: 24,
                minutes: 24 * 60,
                seconds: 24 * 60 * 60,
                milliseconds: 24 * 60 * 60 * 1e3
            },
            hours: {
                minutes: 60,
                seconds: 60 * 60,
                milliseconds: 60 * 60 * 1e3
            },
            minutes: {
                seconds: 60,
                milliseconds: 60 * 1e3
            },
            seconds: {
                milliseconds: 1e3
            }
        },
        cP = {
            years: {
                quarters: 4,
                months: 12,
                weeks: 52,
                days: 365,
                hours: 365 * 24,
                minutes: 365 * 24 * 60,
                seconds: 365 * 24 * 60 * 60,
                milliseconds: 365 * 24 * 60 * 60 * 1e3
            },
            quarters: {
                months: 3,
                weeks: 13,
                days: 91,
                hours: 91 * 24,
                minutes: 91 * 24 * 60,
                seconds: 91 * 24 * 60 * 60,
                milliseconds: 91 * 24 * 60 * 60 * 1e3
            },
            months: {
                weeks: 4,
                days: 30,
                hours: 30 * 24,
                minutes: 30 * 24 * 60,
                seconds: 30 * 24 * 60 * 60,
                milliseconds: 30 * 24 * 60 * 60 * 1e3
            },
            ...wS
        },
        Yr = 146097 / 400,
        Qo = 146097 / 4800,
        dP = {
            years: {
                quarters: 4,
                months: 12,
                weeks: Yr / 7,
                days: Yr,
                hours: Yr * 24,
                minutes: Yr * 24 * 60,
                seconds: Yr * 24 * 60 * 60,
                milliseconds: Yr * 24 * 60 * 60 * 1e3
            },
            quarters: {
                months: 3,
                weeks: Yr / 28,
                days: Yr / 4,
                hours: Yr * 24 / 4,
                minutes: Yr * 24 * 60 / 4,
                seconds: Yr * 24 * 60 * 60 / 4,
                milliseconds: Yr * 24 * 60 * 60 * 1e3 / 4
            },
            months: {
                weeks: Qo / 7,
                days: Qo,
                hours: Qo * 24,
                minutes: Qo * 24 * 60,
                seconds: Qo * 24 * 60 * 60,
                milliseconds: Qo * 24 * 60 * 60 * 1e3
            },
            ...wS
        },
        io = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
        fP = io.slice(0).reverse();

    function va(e, t, r = !1) {
        let n = {
            values: r ? t.values : {
                ...e.values,
                ...t.values || {}
            },
            loc: e.loc.clone(t.loc),
            conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
            matrix: t.matrix || e.matrix
        };
        return new He(n)
    }

    function bS(e, t) {
        var n;
        let r = (n = t.milliseconds) != null ? n : 0;
        for (let i of fP.slice(1)) t[i] && (r += t[i] * e[i].milliseconds);
        return r
    }

    function w0(e, t) {
        let r = bS(e, t) < 0 ? -1 : 1;
        io.reduceRight((n, i) => {
            if (kt(t[i])) return n;
            if (n) {
                let a = t[n] * r,
                    o = e[i][n],
                    s = Math.floor(a / o);
                t[i] += s * r, t[n] -= s * o * r
            }
            return i
        }, null), io.reduce((n, i) => {
            if (kt(t[i])) return n;
            if (n) {
                let a = t[n] % 1;
                t[n] -= a, t[i] += a * e[n][i]
            }
            return i
        }, null)
    }

    function hP(e) {
        let t = {};
        for (let [r, n] of Object.entries(e)) n !== 0 && (t[r] = n);
        return t
    }
    var He = class e {
            constructor(t) {
                let r = t.conversionAccuracy === "longterm" || !1,
                    n = r ? dP : cP;
                t.matrix && (n = t.matrix), this.values = t.values, this.loc = t.loc || mn.create(), this.conversionAccuracy = r ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n, this.isLuxonDuration = !0
            }
            static fromMillis(t, r) {
                return e.fromObject({
                    milliseconds: t
                }, r)
            }
            static fromObject(t, r = {}) {
                if (t == null || typeof t != "object") throw new vr(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);
                return new e({
                    values: Sc(t, e.normalizeUnit),
                    loc: mn.fromObject(r),
                    conversionAccuracy: r.conversionAccuracy,
                    matrix: r.matrix
                })
            }
            static fromDurationLike(t) {
                if (ao(t)) return e.fromMillis(t);
                if (e.isDuration(t)) return t;
                if (typeof t == "object") return e.fromObject(t);
                throw new vr(`Unknown duration argument ${t} of type ${typeof t}`)
            }
            static fromISO(t, r) {
                let [n] = rP(t);
                return n ? e.fromObject(n, r) : e.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`)
            }
            static fromISOTime(t, r) {
                let [n] = aP(t);
                return n ? e.fromObject(n, r) : e.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`)
            }
            static invalid(t, r = null) {
                if (!t) throw new vr("need to specify a reason the Duration is invalid");
                let n = t instanceof Ar ? t : new Ar(t, r);
                if (hn.throwOnInvalid) throw new mm(n);
                return new e({
                    invalid: n
                })
            }
            static normalizeUnit(t) {
                let r = {
                    year: "years",
                    years: "years",
                    quarter: "quarters",
                    quarters: "quarters",
                    month: "months",
                    months: "months",
                    week: "weeks",
                    weeks: "weeks",
                    day: "days",
                    days: "days",
                    hour: "hours",
                    hours: "hours",
                    minute: "minutes",
                    minutes: "minutes",
                    second: "seconds",
                    seconds: "seconds",
                    millisecond: "milliseconds",
                    milliseconds: "milliseconds"
                } [t && t.toLowerCase()];
                if (!r) throw new yc(t);
                return r
            }
            static isDuration(t) {
                return t && t.isLuxonDuration || !1
            }
            get locale() {
                return this.isValid ? this.loc.locale : null
            }
            get numberingSystem() {
                return this.isValid ? this.loc.numberingSystem : null
            }
            toFormat(t, r = {}) {
                let n = {
                    ...r,
                    floor: r.round !== !1 && r.floor !== !1
                };
                return this.isValid ? Ir.create(this.loc, n).formatDurationFromString(this, t) : v0
            }
            toHuman(t = {}) {
                if (!this.isValid) return v0;
                let r = io.map(n => {
                    let i = this.values[n];
                    return kt(i) ? null : this.loc.numberFormatter({
                        style: "unit",
                        unitDisplay: "long",
                        ...t,
                        unit: n.slice(0, -1)
                    }).format(i)
                }).filter(n => n);
                return this.loc.listFormatter({
                    type: "conjunction",
                    style: t.listStyle || "narrow",
                    ...t
                }).format(r)
            }
            toObject() {
                return this.isValid ? {
                    ...this.values
                } : {}
            }
            toISO() {
                if (!this.isValid) return null;
                let t = "P";
                return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += Om(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t
            }
            toISOTime(t = {}) {
                if (!this.isValid) return null;
                let r = this.toMillis();
                return r < 0 || r >= 864e5 ? null : (t = {
                    suppressMilliseconds: !1,
                    suppressSeconds: !1,
                    includePrefix: !1,
                    format: "extended",
                    ...t,
                    includeOffset: !1
                }, mt.fromMillis(r, {
                    zone: "UTC"
                }).toISOTime(t))
            }
            toJSON() {
                return this.toISO()
            }
            toString() {
                return this.toISO()
            }
            toMillis() {
                return this.isValid ? bS(this.matrix, this.values) : NaN
            }
            valueOf() {
                return this.toMillis()
            }
            plus(t) {
                if (!this.isValid) return this;
                let r = e.fromDurationLike(t),
                    n = {};
                for (let i of io)(rs(r.values, i) || rs(this.values, i)) && (n[i] = r.get(i) + this.get(i));
                return va(this, {
                    values: n
                }, !0)
            }
            minus(t) {
                if (!this.isValid) return this;
                let r = e.fromDurationLike(t);
                return this.plus(r.negate())
            }
            mapUnits(t) {
                if (!this.isValid) return this;
                let r = {};
                for (let n of Object.keys(this.values)) r[n] = aS(t(this.values[n], n));
                return va(this, {
                    values: r
                }, !0)
            }
            get(t) {
                return this[e.normalizeUnit(t)]
            }
            set(t) {
                if (!this.isValid) return this;
                let r = {
                    ...this.values,
                    ...Sc(t, e.normalizeUnit)
                };
                return va(this, {
                    values: r
                })
            }
            reconfigure({
                locale: t,
                numberingSystem: r,
                conversionAccuracy: n,
                matrix: i
            } = {}) {
                let o = {
                    loc: this.loc.clone({
                        locale: t,
                        numberingSystem: r
                    }),
                    matrix: i,
                    conversionAccuracy: n
                };
                return va(this, o)
            }
            as(t) {
                return this.isValid ? this.shiftTo(t).get(t) : NaN
            }
            normalize() {
                if (!this.isValid) return this;
                let t = this.toObject();
                return w0(this.matrix, t), va(this, {
                    values: t
                }, !0)
            }
            rescale() {
                if (!this.isValid) return this;
                let t = hP(this.normalize().shiftToAll().toObject());
                return va(this, {
                    values: t
                }, !0)
            }
            shiftTo(...t) {
                if (!this.isValid) return this;
                if (t.length === 0) return this;
                t = t.map(o => e.normalizeUnit(o));
                let r = {},
                    n = {},
                    i = this.toObject(),
                    a;
                for (let o of io)
                    if (t.indexOf(o) >= 0) {
                        a = o;
                        let s = 0;
                        for (let l in n) s += this.matrix[l][o] * n[l], n[l] = 0;
                        ao(i[o]) && (s += i[o]);
                        let u = Math.trunc(s);
                        r[o] = u, n[o] = (s * 1e3 - u * 1e3) / 1e3
                    } else ao(i[o]) && (n[o] = i[o]);
                for (let o in n) n[o] !== 0 && (r[a] += o === a ? n[o] : n[o] / this.matrix[a][o]);
                return w0(this.matrix, r), va(this, {
                    values: r
                }, !0)
            }
            shiftToAll() {
                return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this
            }
            negate() {
                if (!this.isValid) return this;
                let t = {};
                for (let r of Object.keys(this.values)) t[r] = this.values[r] === 0 ? 0 : -this.values[r];
                return va(this, {
                    values: t
                }, !0)
            }
            get years() {
                return this.isValid ? this.values.years || 0 : NaN
            }
            get quarters() {
                return this.isValid ? this.values.quarters || 0 : NaN
            }
            get months() {
                return this.isValid ? this.values.months || 0 : NaN
            }
            get weeks() {
                return this.isValid ? this.values.weeks || 0 : NaN
            }
            get days() {
                return this.isValid ? this.values.days || 0 : NaN
            }
            get hours() {
                return this.isValid ? this.values.hours || 0 : NaN
            }
            get minutes() {
                return this.isValid ? this.values.minutes || 0 : NaN
            }
            get seconds() {
                return this.isValid ? this.values.seconds || 0 : NaN
            }
            get milliseconds() {
                return this.isValid ? this.values.milliseconds || 0 : NaN
            }
            get isValid() {
                return this.invalid === null
            }
            get invalidReason() {
                return this.invalid ? this.invalid.reason : null
            }
            get invalidExplanation() {
                return this.invalid ? this.invalid.explanation : null
            }
            equals(t) {
                if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1;

                function r(n, i) {
                    return n === void 0 || n === 0 ? i === void 0 || i === 0 : n === i
                }
                for (let n of io)
                    if (!r(this.values[n], t.values[n])) return !1;
                return !0
            }
        },
        Xo = "Invalid Interval";

    function mP(e, t) {
        return !e || !e.isValid ? ns.invalid("missing or invalid start") : !t || !t.isValid ? ns.invalid("missing or invalid end") : t < e ? ns.invalid("end before start", `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`) : null
    }
    var ns = class e {
            constructor(t) {
                this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0
            }
            static invalid(t, r = null) {
                if (!t) throw new vr("need to specify a reason the Interval is invalid");
                let n = t instanceof Ar ? t : new Ar(t, r);
                if (hn.throwOnInvalid) throw new hm(n);
                return new e({
                    invalid: n
                })
            }
            static fromDateTimes(t, r) {
                let n = El(t),
                    i = El(r),
                    a = mP(n, i);
                return a == null ? new e({
                    start: n,
                    end: i
                }) : a
            }
            static after(t, r) {
                let n = He.fromDurationLike(r),
                    i = El(t);
                return e.fromDateTimes(i, i.plus(n))
            }
            static before(t, r) {
                let n = He.fromDurationLike(r),
                    i = El(t);
                return e.fromDateTimes(i.minus(n), i)
            }
            static fromISO(t, r) {
                let [n, i] = (t || "").split("/", 2);
                if (n && i) {
                    let a, o;
                    try {
                        a = mt.fromISO(n, r), o = a.isValid
                    } catch (l) {
                        o = !1
                    }
                    let s, u;
                    try {
                        s = mt.fromISO(i, r), u = s.isValid
                    } catch (l) {
                        u = !1
                    }
                    if (o && u) return e.fromDateTimes(a, s);
                    if (o) {
                        let l = He.fromISO(i, r);
                        if (l.isValid) return e.after(a, l)
                    } else if (u) {
                        let l = He.fromISO(n, r);
                        if (l.isValid) return e.before(s, l)
                    }
                }
                return e.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`)
            }
            static isInterval(t) {
                return t && t.isLuxonInterval || !1
            }
            get start() {
                return this.isValid ? this.s : null
            }
            get end() {
                return this.isValid ? this.e : null
            }
            get isValid() {
                return this.invalidReason === null
            }
            get invalidReason() {
                return this.invalid ? this.invalid.reason : null
            }
            get invalidExplanation() {
                return this.invalid ? this.invalid.explanation : null
            }
            length(t = "milliseconds") {
                return this.isValid ? this.toDuration(t).get(t) : NaN
            }
            count(t = "milliseconds") {
                if (!this.isValid) return NaN;
                let r = this.start.startOf(t),
                    n = this.end.startOf(t);
                return Math.floor(n.diff(r, t).get(t)) + (n.valueOf() !== this.end.valueOf())
            }
            hasSame(t) {
                return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1
            }
            isEmpty() {
                return this.s.valueOf() === this.e.valueOf()
            }
            isAfter(t) {
                return this.isValid ? this.s > t : !1
            }
            isBefore(t) {
                return this.isValid ? this.e <= t : !1
            }
            contains(t) {
                return this.isValid ? this.s <= t && this.e > t : !1
            }
            set({
                start: t,
                end: r
            } = {}) {
                return this.isValid ? e.fromDateTimes(t || this.s, r || this.e) : this
            }
            splitAt(...t) {
                if (!this.isValid) return [];
                let r = t.map(El).filter(o => this.contains(o)).sort(),
                    n = [],
                    {
                        s: i
                    } = this,
                    a = 0;
                for (; i < this.e;) {
                    let o = r[a] || this.e,
                        s = +o > +this.e ? this.e : o;
                    n.push(e.fromDateTimes(i, s)), i = s, a += 1
                }
                return n
            }
            splitBy(t) {
                let r = He.fromDurationLike(t);
                if (!this.isValid || !r.isValid || r.as("milliseconds") === 0) return [];
                let {
                    s: n
                } = this, i = 1, a, o = [];
                for (; n < this.e;) {
                    let s = this.start.plus(r.mapUnits(u => u * i));
                    a = +s > +this.e ? this.e : s, o.push(e.fromDateTimes(n, a)), n = a, i += 1
                }
                return o
            }
            divideEqually(t) {
                return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : []
            }
            overlaps(t) {
                return this.e > t.s && this.s < t.e
            }
            abutsStart(t) {
                return this.isValid ? +this.e == +t.s : !1
            }
            abutsEnd(t) {
                return this.isValid ? +t.e == +this.s : !1
            }
            engulfs(t) {
                return this.isValid ? this.s <= t.s && this.e >= t.e : !1
            }
            equals(t) {
                return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e)
            }
            intersection(t) {
                if (!this.isValid) return this;
                let r = this.s > t.s ? this.s : t.s,
                    n = this.e < t.e ? this.e : t.e;
                return r >= n ? null : e.fromDateTimes(r, n)
            }
            union(t) {
                if (!this.isValid) return this;
                let r = this.s < t.s ? this.s : t.s,
                    n = this.e > t.e ? this.e : t.e;
                return e.fromDateTimes(r, n)
            }
            static merge(t) {
                let [r, n] = t.sort((i, a) => i.s - a.s).reduce(([i, a], o) => a ? a.overlaps(o) || a.abutsStart(o) ? [i, a.union(o)] : [i.concat([a]), o] : [i, o], [
                    [], null
                ]);
                return n && r.push(n), r
            }
            static xor(t) {
                let r = null,
                    n = 0,
                    i = [],
                    a = t.map(u => [{
                        time: u.s,
                        type: "s"
                    }, {
                        time: u.e,
                        type: "e"
                    }]),
                    o = Array.prototype.concat(...a),
                    s = o.sort((u, l) => u.time - l.time);
                for (let u of s) n += u.type === "s" ? 1 : -1, n === 1 ? r = u.time : (r && +r != +u.time && i.push(e.fromDateTimes(r, u.time)), r = null);
                return e.merge(i)
            }
            difference(...t) {
                return e.xor([this].concat(t)).map(r => this.intersection(r)).filter(r => r && !r.isEmpty())
            }
            toString() {
                return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : Xo
            }
            toLocaleString(t = vc, r = {}) {
                return this.isValid ? Ir.create(this.s.loc.clone(r), t).formatInterval(this) : Xo
            }
            toISO(t) {
                return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Xo
            }
            toISODate() {
                return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Xo
            }
            toISOTime(t) {
                return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Xo
            }
            toFormat(t, {
                separator: r = " \u2013 "
            } = {}) {
                return this.isValid ? `${this.s.toFormat(t)}${r}${this.e.toFormat(t)}` : Xo
            }
            toDuration(t, r) {
                return this.isValid ? this.e.diff(this.s, t, r) : He.invalid(this.invalidReason)
            }
            mapEndpoints(t) {
                return e.fromDateTimes(t(this.s), t(this.e))
            }
        },
        es = class {
            static hasDST(t = hn.defaultZone) {
                let r = mt.now().setZone(t).set({
                    month: 12
                });
                return !t.isUniversal && r.offset !== r.set({
                    month: 6
                }).offset
            }
            static isValidIANAZone(t) {
                return Da.isValidZone(t)
            }
            static normalizeZone(t) {
                return ba(t, hn.defaultZone)
            }
            static months(t = "long", {
                locale: r = null,
                numberingSystem: n = null,
                locObj: i = null,
                outputCalendar: a = "gregory"
            } = {}) {
                return (i || mn.create(r, n, a)).months(t)
            }
            static monthsFormat(t = "long", {
                locale: r = null,
                numberingSystem: n = null,
                locObj: i = null,
                outputCalendar: a = "gregory"
            } = {}) {
                return (i || mn.create(r, n, a)).months(t, !0)
            }
            static weekdays(t = "long", {
                locale: r = null,
                numberingSystem: n = null,
                locObj: i = null
            } = {}) {
                return (i || mn.create(r, n, null)).weekdays(t)
            }
            static weekdaysFormat(t = "long", {
                locale: r = null,
                numberingSystem: n = null,
                locObj: i = null
            } = {}) {
                return (i || mn.create(r, n, null)).weekdays(t, !0)
            }
            static meridiems({
                locale: t = null
            } = {}) {
                return mn.create(t).meridiems()
            }
            static eras(t = "short", {
                locale: r = null
            } = {}) {
                return mn.create(r, null, "gregory").eras(t)
            }
            static features() {
                return {
                    relative: rS()
                }
            }
        };

    function b0(e, t) {
        let r = i => i.toUTC(0, {
                keepLocalTime: !0
            }).startOf("day").valueOf(),
            n = r(t) - r(e);
        return Math.floor(He.fromMillis(n).as("days"))
    }

    function pP(e, t, r) {
        let n = [
                ["years", (u, l) => l.year - u.year],
                ["quarters", (u, l) => l.quarter - u.quarter + (l.year - u.year) * 4],
                ["months", (u, l) => l.month - u.month + (l.year - u.year) * 12],
                ["weeks", (u, l) => {
                    let c = b0(u, l);
                    return (c - c % 7) / 7
                }],
                ["days", b0]
            ],
            i = {},
            a = e,
            o, s;
        for (let [u, l] of n) r.indexOf(u) >= 0 && (o = u, i[u] = l(e, t), s = a.plus(i), s > t ? (i[u]--, e = a.plus(i), e > t && (s = e, i[u]--, e = a.plus(i))) : e = s);
        return [e, i, s, o]
    }

    function gP(e, t, r, n) {
        let [i, a, o, s] = pP(e, t, r), u = t - i, l = r.filter(d => ["hours", "minutes", "seconds", "milliseconds"].indexOf(d) >= 0);
        l.length === 0 && (o < t && (o = i.plus({
            [s]: 1
        })), o !== i && (a[s] = (a[s] || 0) + u / (o - i)));
        let c = He.fromObject(a, n);
        return l.length > 0 ? He.fromMillis(u, n).shiftTo(...l).plus(c) : c
    }
    var Rm = {
            arab: "[\u0660-\u0669]",
            arabext: "[\u06F0-\u06F9]",
            bali: "[\u1B50-\u1B59]",
            beng: "[\u09E6-\u09EF]",
            deva: "[\u0966-\u096F]",
            fullwide: "[\uFF10-\uFF19]",
            gujr: "[\u0AE6-\u0AEF]",
            hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
            khmr: "[\u17E0-\u17E9]",
            knda: "[\u0CE6-\u0CEF]",
            laoo: "[\u0ED0-\u0ED9]",
            limb: "[\u1946-\u194F]",
            mlym: "[\u0D66-\u0D6F]",
            mong: "[\u1810-\u1819]",
            mymr: "[\u1040-\u1049]",
            orya: "[\u0B66-\u0B6F]",
            tamldec: "[\u0BE6-\u0BEF]",
            telu: "[\u0C66-\u0C6F]",
            thai: "[\u0E50-\u0E59]",
            tibt: "[\u0F20-\u0F29]",
            latn: "\\d"
        },
        D0 = {
            arab: [1632, 1641],
            arabext: [1776, 1785],
            bali: [6992, 7001],
            beng: [2534, 2543],
            deva: [2406, 2415],
            fullwide: [65296, 65303],
            gujr: [2790, 2799],
            khmr: [6112, 6121],
            knda: [3302, 3311],
            laoo: [3792, 3801],
            limb: [6470, 6479],
            mlym: [3430, 3439],
            mong: [6160, 6169],
            mymr: [4160, 4169],
            orya: [2918, 2927],
            tamldec: [3046, 3055],
            telu: [3174, 3183],
            thai: [3664, 3673],
            tibt: [3872, 3881]
        },
        yP = Rm.hanidec.replace(/[\[|\]]/g, "").split("");

    function vP(e) {
        let t = parseInt(e, 10);
        if (isNaN(t)) {
            t = "";
            for (let r = 0; r < e.length; r++) {
                let n = e.charCodeAt(r);
                if (e[r].search(Rm.hanidec) !== -1) t += yP.indexOf(e[r]);
                else
                    for (let i in D0) {
                        let [a, o] = D0[i];
                        n >= a && n <= o && (t += n - a)
                    }
            }
            return parseInt(t, 10)
        } else return t
    }

    function ri({
        numberingSystem: e
    }, t = "") {
        return new RegExp(`${Rm[e||"latn"]}${t}`)
    }
    var wP = "missing Intl.DateTimeFormat.formatToParts support";

    function Nt(e, t = r => r) {
        return {
            regex: e,
            deser: ([r]) => t(vP(r))
        }
    }
    var bP = "\xA0",
        DS = `[ ${bP}]`,
        SS = new RegExp(DS, "g");

    function DP(e) {
        return e.replace(/\./g, "\\.?").replace(SS, DS)
    }

    function S0(e) {
        return e.replace(/\./g, "").replace(SS, " ").toLowerCase()
    }

    function ii(e, t) {
        return e === null ? null : {
            regex: RegExp(e.map(DP).join("|")),
            deser: ([r]) => e.findIndex(n => S0(r) === S0(n)) + t
        }
    }

    function E0(e, t) {
        return {
            regex: e,
            deser: ([, r, n]) => Tc(r, n),
            groups: t
        }
    }

    function dc(e) {
        return {
            regex: e,
            deser: ([t]) => t
        }
    }

    function SP(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function EP(e, t) {
        let r = ri(t),
            n = ri(t, "{2}"),
            i = ri(t, "{3}"),
            a = ri(t, "{4}"),
            o = ri(t, "{6}"),
            s = ri(t, "{1,2}"),
            u = ri(t, "{1,3}"),
            l = ri(t, "{1,6}"),
            c = ri(t, "{1,9}"),
            d = ri(t, "{2,4}"),
            m = ri(t, "{4,6}"),
            h = v => ({
                regex: RegExp(SP(v.val)),
                deser: ([D]) => D,
                literal: !0
            }),
            y = (v => {
                if (e.literal) return h(v);
                switch (v.val) {
                    case "G":
                        return ii(t.eras("short"), 0);
                    case "GG":
                        return ii(t.eras("long"), 0);
                    case "y":
                        return Nt(l);
                    case "yy":
                        return Nt(d, Em);
                    case "yyyy":
                        return Nt(a);
                    case "yyyyy":
                        return Nt(m);
                    case "yyyyyy":
                        return Nt(o);
                    case "M":
                        return Nt(s);
                    case "MM":
                        return Nt(n);
                    case "MMM":
                        return ii(t.months("short", !0), 1);
                    case "MMMM":
                        return ii(t.months("long", !0), 1);
                    case "L":
                        return Nt(s);
                    case "LL":
                        return Nt(n);
                    case "LLL":
                        return ii(t.months("short", !1), 1);
                    case "LLLL":
                        return ii(t.months("long", !1), 1);
                    case "d":
                        return Nt(s);
                    case "dd":
                        return Nt(n);
                    case "o":
                        return Nt(u);
                    case "ooo":
                        return Nt(i);
                    case "HH":
                        return Nt(n);
                    case "H":
                        return Nt(s);
                    case "hh":
                        return Nt(n);
                    case "h":
                        return Nt(s);
                    case "mm":
                        return Nt(n);
                    case "m":
                        return Nt(s);
                    case "q":
                        return Nt(s);
                    case "qq":
                        return Nt(n);
                    case "s":
                        return Nt(s);
                    case "ss":
                        return Nt(n);
                    case "S":
                        return Nt(u);
                    case "SSS":
                        return Nt(i);
                    case "u":
                        return dc(c);
                    case "uu":
                        return dc(s);
                    case "uuu":
                        return Nt(r);
                    case "a":
                        return ii(t.meridiems(), 0);
                    case "kkkk":
                        return Nt(a);
                    case "kk":
                        return Nt(d, Em);
                    case "W":
                        return Nt(s);
                    case "WW":
                        return Nt(n);
                    case "E":
                    case "c":
                        return Nt(r);
                    case "EEE":
                        return ii(t.weekdays("short", !1), 1);
                    case "EEEE":
                        return ii(t.weekdays("long", !1), 1);
                    case "ccc":
                        return ii(t.weekdays("short", !0), 1);
                    case "cccc":
                        return ii(t.weekdays("long", !0), 1);
                    case "Z":
                    case "ZZ":
                        return E0(new RegExp(`([+-]${s.source})(?::(${n.source}))?`), 2);
                    case "ZZZ":
                        return E0(new RegExp(`([+-]${s.source})(${n.source})?`), 2);
                    case "z":
                        return dc(/[a-z_+-/]{1,256}?/i);
                    case " ":
                        return dc(/[^\S\n\r]/);
                    default:
                        return h(v)
                }
            })(e) || {
                invalidReason: wP
            };
        return y.token = e, y
    }
    var kP = {
        year: {
            "2-digit": "yy",
            numeric: "yyyyy"
        },
        month: {
            numeric: "M",
            "2-digit": "MM",
            short: "MMM",
            long: "MMMM"
        },
        day: {
            numeric: "d",
            "2-digit": "dd"
        },
        weekday: {
            short: "EEE",
            long: "EEEE"
        },
        dayperiod: "a",
        dayPeriod: "a",
        hour12: {
            numeric: "h",
            "2-digit": "hh"
        },
        hour24: {
            numeric: "H",
            "2-digit": "HH"
        },
        minute: {
            numeric: "m",
            "2-digit": "mm"
        },
        second: {
            numeric: "s",
            "2-digit": "ss"
        },
        timeZoneName: {
            long: "ZZZZZ",
            short: "ZZZ"
        }
    };

    function xP(e, t, r) {
        let {
            type: n,
            value: i
        } = e;
        if (n === "literal") {
            let u = /^\s+$/.test(i);
            return {
                literal: !u,
                val: u ? " " : i
            }
        }
        let a = t[n],
            o = n;
        n === "hour" && (t.hour12 != null ? o = t.hour12 ? "hour12" : "hour24" : t.hourCycle != null ? t.hourCycle === "h11" || t.hourCycle === "h12" ? o = "hour12" : o = "hour24" : o = r.hour12 ? "hour12" : "hour24");
        let s = kP[o];
        if (typeof s == "object" && (s = s[a]), s) return {
            literal: !1,
            val: s
        }
    }

    function CP(e) {
        return [`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`, e]
    }

    function _P(e, t, r) {
        let n = e.match(t);
        if (n) {
            let i = {},
                a = 1;
            for (let o in r)
                if (rs(r, o)) {
                    let s = r[o],
                        u = s.groups ? s.groups + 1 : 1;
                    !s.literal && s.token && (i[s.token.val[0]] = s.deser(n.slice(a, a + u))), a += u
                } return [n, i]
        } else return [n, {}]
    }

    function MP(e) {
        let t = a => {
                switch (a) {
                    case "S":
                        return "millisecond";
                    case "s":
                        return "second";
                    case "m":
                        return "minute";
                    case "h":
                    case "H":
                        return "hour";
                    case "d":
                        return "day";
                    case "o":
                        return "ordinal";
                    case "L":
                    case "M":
                        return "month";
                    case "y":
                        return "year";
                    case "E":
                    case "c":
                        return "weekday";
                    case "W":
                        return "weekNumber";
                    case "k":
                        return "weekYear";
                    case "q":
                        return "quarter";
                    default:
                        return null
                }
            },
            r = null,
            n;
        return kt(e.z) || (r = Da.create(e.z)), kt(e.Z) || (r || (r = new Kr(e.Z)), n = e.Z), kt(e.q) || (e.M = (e.q - 1) * 3 + 1), kt(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), kt(e.u) || (e.S = Am(e.u)), [Object.keys(e).reduce((a, o) => {
            let s = t(o);
            return s && (a[s] = e[o]), a
        }, {}), r, n]
    }
    var om = null;

    function TP() {
        return om || (om = mt.fromMillis(1555555555555)), om
    }

    function FP(e, t) {
        if (e.literal) return e;
        let r = Ir.macroTokenToFormatOpts(e.val),
            n = xS(r, t);
        return n == null || n.includes(void 0) ? e : n
    }

    function ES(e, t) {
        return Array.prototype.concat(...e.map(r => FP(r, t)))
    }

    function kS(e, t, r) {
        let n = ES(Ir.parseFormat(r), e),
            i = n.map(o => EP(o, e)),
            a = i.find(o => o.invalidReason);
        if (a) return {
            input: t,
            tokens: n,
            invalidReason: a.invalidReason
        };
        {
            let [o, s] = CP(i), u = RegExp(o, "i"), [l, c] = _P(t, u, s), [d, m, h] = c ? MP(c) : [null, null, void 0];
            if (rs(c, "a") && rs(c, "H")) throw new ro("Can't include meridiem when specifying 24-hour format");
            return {
                input: t,
                tokens: n,
                regex: u,
                rawMatches: l,
                matches: c,
                result: d,
                zone: m,
                specificOffset: h
            }
        }
    }

    function IP(e, t, r) {
        let {
            result: n,
            zone: i,
            specificOffset: a,
            invalidReason: o
        } = kS(e, t, r);
        return [n, i, a, o]
    }

    function xS(e, t) {
        if (!e) return null;
        let n = Ir.create(t, e).dtFormatter(TP()),
            i = n.formatToParts(),
            a = n.resolvedOptions();
        return i.map(o => xP(o, e, a))
    }
    var CS = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        _S = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

    function zr(e, t) {
        return new Ar("unit out of range", `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)
    }

    function MS(e, t, r) {
        let n = new Date(Date.UTC(e, t - 1, r));
        e < 100 && e >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
        let i = n.getUTCDay();
        return i === 0 ? 7 : i
    }

    function TS(e, t, r) {
        return r + (Fl(e) ? _S : CS)[t - 1]
    }

    function FS(e, t) {
        let r = Fl(e) ? _S : CS,
            n = r.findIndex(a => a < t),
            i = t - r[n];
        return {
            month: n + 1,
            day: i
        }
    }

    function km(e) {
        let {
            year: t,
            month: r,
            day: n
        } = e, i = TS(t, r, n), a = MS(t, r, n), o = Math.floor((i - a + 10) / 7), s;
        return o < 1 ? (s = t - 1, o = Dc(s)) : o > Dc(t) ? (s = t + 1, o = 1) : s = t, {
            weekYear: s,
            weekNumber: o,
            weekday: a,
            ...Fc(e)
        }
    }

    function k0(e) {
        let {
            weekYear: t,
            weekNumber: r,
            weekday: n
        } = e, i = MS(t, 1, 4), a = Cl(t), o = r * 7 + n - i - 3, s;
        o < 1 ? (s = t - 1, o += Cl(s)) : o > a ? (s = t + 1, o -= Cl(t)) : s = t;
        let {
            month: u,
            day: l
        } = FS(s, o);
        return {
            year: s,
            month: u,
            day: l,
            ...Fc(e)
        }
    }

    function sm(e) {
        let {
            year: t,
            month: r,
            day: n
        } = e, i = TS(t, r, n);
        return {
            year: t,
            ordinal: i,
            ...Fc(e)
        }
    }

    function x0(e) {
        let {
            year: t,
            ordinal: r
        } = e, {
            month: n,
            day: i
        } = FS(t, r);
        return {
            year: t,
            month: n,
            day: i,
            ...Fc(e)
        }
    }

    function AP(e) {
        let t = _c(e.weekYear),
            r = ji(e.weekNumber, 1, Dc(e.weekYear)),
            n = ji(e.weekday, 1, 7);
        return t ? r ? n ? !1 : zr("weekday", e.weekday) : zr("week", e.week) : zr("weekYear", e.weekYear)
    }

    function OP(e) {
        let t = _c(e.year),
            r = ji(e.ordinal, 1, Cl(e.year));
        return t ? r ? !1 : zr("ordinal", e.ordinal) : zr("year", e.year)
    }

    function IS(e) {
        let t = _c(e.year),
            r = ji(e.month, 1, 12),
            n = ji(e.day, 1, bc(e.year, e.month));
        return t ? r ? n ? !1 : zr("day", e.day) : zr("month", e.month) : zr("year", e.year)
    }

    function AS(e) {
        let {
            hour: t,
            minute: r,
            second: n,
            millisecond: i
        } = e, a = ji(t, 0, 23) || t === 24 && r === 0 && n === 0 && i === 0, o = ji(r, 0, 59), s = ji(n, 0, 59), u = ji(i, 0, 999);
        return a ? o ? s ? u ? !1 : zr("millisecond", i) : zr("second", n) : zr("minute", r) : zr("hour", t)
    }
    var lm = "Invalid DateTime",
        C0 = 864e13;

    function fc(e) {
        return new Ar("unsupported zone", `the zone "${e.name}" is not supported`)
    }

    function um(e) {
        return e.weekData === null && (e.weekData = km(e.c)), e.weekData
    }

    function no(e, t) {
        let r = {
            ts: e.ts,
            zone: e.zone,
            c: e.c,
            o: e.o,
            loc: e.loc,
            invalid: e.invalid
        };
        return new mt({
            ...r,
            ...t,
            old: r
        })
    }

    function OS(e, t, r) {
        let n = e - t * 60 * 1e3,
            i = r.offset(n);
        if (t === i) return [n, t];
        n -= (i - t) * 60 * 1e3;
        let a = r.offset(n);
        return i === a ? [n, i] : [e - Math.min(i, a) * 60 * 1e3, Math.max(i, a)]
    }

    function hc(e, t) {
        e += t * 60 * 1e3;
        let r = new Date(e);
        return {
            year: r.getUTCFullYear(),
            month: r.getUTCMonth() + 1,
            day: r.getUTCDate(),
            hour: r.getUTCHours(),
            minute: r.getUTCMinutes(),
            second: r.getUTCSeconds(),
            millisecond: r.getUTCMilliseconds()
        }
    }

    function gc(e, t, r) {
        return OS(Mc(e), t, r)
    }

    function _0(e, t) {
        let r = e.o,
            n = e.c.year + Math.trunc(t.years),
            i = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
            a = {
                ...e.c,
                year: n,
                month: i,
                day: Math.min(e.c.day, bc(n, i)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
            },
            o = He.fromObject({
                years: t.years - Math.trunc(t.years),
                quarters: t.quarters - Math.trunc(t.quarters),
                months: t.months - Math.trunc(t.months),
                weeks: t.weeks - Math.trunc(t.weeks),
                days: t.days - Math.trunc(t.days),
                hours: t.hours,
                minutes: t.minutes,
                seconds: t.seconds,
                milliseconds: t.milliseconds
            }).as("milliseconds"),
            s = Mc(a),
            [u, l] = OS(s, r, e.zone);
        return o !== 0 && (u += o, l = e.zone.offset(u)), {
            ts: u,
            o: l
        }
    }

    function Sl(e, t, r, n, i, a) {
        let {
            setZone: o,
            zone: s
        } = r;
        if (e && Object.keys(e).length !== 0 || t) {
            let u = t || s,
                l = mt.fromObject(e, {
                    ...r,
                    zone: u,
                    specificOffset: a
                });
            return o ? l : l.setZone(s)
        } else return mt.invalid(new Ar("unparsable", `the input "${i}" can't be parsed as ${n}`))
    }

    function mc(e, t, r = !0) {
        return e.isValid ? Ir.create(mn.create("en-US"), {
            allowZ: r,
            forceSimple: !0
        }).formatDateTimeFromString(e, t) : null
    }

    function cm(e, t) {
        let r = e.c.year > 9999 || e.c.year < 0,
            n = "";
        return r && e.c.year >= 0 && (n += "+"), n += Tn(e.c.year, r ? 6 : 4), t ? (n += "-", n += Tn(e.c.month), n += "-", n += Tn(e.c.day)) : (n += Tn(e.c.month), n += Tn(e.c.day)), n
    }

    function M0(e, t, r, n, i, a) {
        let o = Tn(e.c.hour);
        return t ? (o += ":", o += Tn(e.c.minute), (e.c.millisecond !== 0 || e.c.second !== 0 || !r) && (o += ":")) : o += Tn(e.c.minute), (e.c.millisecond !== 0 || e.c.second !== 0 || !r) && (o += Tn(e.c.second), (e.c.millisecond !== 0 || !n) && (o += ".", o += Tn(e.c.millisecond, 3))), i && (e.isOffsetFixed && e.offset === 0 && !a ? o += "Z" : e.o < 0 ? (o += "-", o += Tn(Math.trunc(-e.o / 60)), o += ":", o += Tn(Math.trunc(-e.o % 60))) : (o += "+", o += Tn(Math.trunc(e.o / 60)), o += ":", o += Tn(Math.trunc(e.o % 60)))), a && (o += "[" + e.zone.ianaName + "]"), o
    }
    var LS = {
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        },
        LP = {
            weekNumber: 1,
            weekday: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        },
        PP = {
            ordinal: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        },
        PS = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
        NP = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
        RP = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

    function T0(e) {
        let t = {
            year: "year",
            years: "year",
            month: "month",
            months: "month",
            day: "day",
            days: "day",
            hour: "hour",
            hours: "hour",
            minute: "minute",
            minutes: "minute",
            quarter: "quarter",
            quarters: "quarter",
            second: "second",
            seconds: "second",
            millisecond: "millisecond",
            milliseconds: "millisecond",
            weekday: "weekday",
            weekdays: "weekday",
            weeknumber: "weekNumber",
            weeksnumber: "weekNumber",
            weeknumbers: "weekNumber",
            weekyear: "weekYear",
            weekyears: "weekYear",
            ordinal: "ordinal"
        } [e.toLowerCase()];
        if (!t) throw new yc(e);
        return t
    }

    function F0(e, t) {
        let r = ba(t.zone, hn.defaultZone),
            n = mn.fromObject(t),
            i = hn.now(),
            a, o;
        if (kt(e.year)) a = i;
        else {
            for (let l of PS) kt(e[l]) && (e[l] = LS[l]);
            let s = IS(e) || AS(e);
            if (s) return mt.invalid(s);
            let u = r.offset(i);
            [a, o] = gc(e, u, r)
        }
        return new mt({
            ts: a,
            zone: r,
            loc: n,
            o
        })
    }

    function I0(e, t, r) {
        let n = kt(r.round) ? !0 : r.round,
            i = (o, s) => (o = Om(o, n || r.calendary ? 0 : 2, !0), t.loc.clone(r).relFormatter(r).format(o, s)),
            a = o => r.calendary ? t.hasSame(e, o) ? 0 : t.startOf(o).diff(e.startOf(o), o).get(o) : t.diff(e, o).get(o);
        if (r.unit) return i(a(r.unit), r.unit);
        for (let o of r.units) {
            let s = a(o);
            if (Math.abs(s) >= 1) return i(s, o)
        }
        return i(e > t ? -0 : 0, r.units[r.units.length - 1])
    }

    function A0(e) {
        let t = {},
            r;
        return e.length > 0 && typeof e[e.length - 1] == "object" ? (t = e[e.length - 1], r = Array.from(e).slice(0, e.length - 1)) : r = Array.from(e), [t, r]
    }
    var mt = class e {
        constructor(t) {
            let r = t.zone || hn.defaultZone,
                n = t.invalid || (Number.isNaN(t.ts) ? new Ar("invalid input") : null) || (r.isValid ? null : fc(r));
            this.ts = kt(t.ts) ? hn.now() : t.ts;
            let i = null,
                a = null;
            if (!n)
                if (t.old && t.old.ts === this.ts && t.old.zone.equals(r))[i, a] = [t.old.c, t.old.o];
                else {
                    let s = r.offset(this.ts);
                    i = hc(this.ts, s), n = Number.isNaN(i.year) ? new Ar("invalid input") : null, i = n ? null : i, a = n ? null : s
                } this._zone = r, this.loc = t.loc || mn.create(), this.invalid = n, this.weekData = null, this.c = i, this.o = a, this.isLuxonDateTime = !0
        }
        static now() {
            return new e({})
        }
        static local() {
            let [t, r] = A0(arguments), [n, i, a, o, s, u, l] = r;
            return F0({
                year: n,
                month: i,
                day: a,
                hour: o,
                minute: s,
                second: u,
                millisecond: l
            }, t)
        }
        static utc() {
            let [t, r] = A0(arguments), [n, i, a, o, s, u, l] = r;
            return t.zone = Kr.utcInstance, F0({
                year: n,
                month: i,
                day: a,
                hour: o,
                minute: s,
                second: u,
                millisecond: l
            }, t)
        }
        static fromJSDate(t, r = {}) {
            let n = d2(t) ? t.valueOf() : NaN;
            if (Number.isNaN(n)) return e.invalid("invalid input");
            let i = ba(r.zone, hn.defaultZone);
            return i.isValid ? new e({
                ts: n,
                zone: i,
                loc: mn.fromObject(r)
            }) : e.invalid(fc(i))
        }
        static fromMillis(t, r = {}) {
            if (ao(t)) return t < -C0 || t > C0 ? e.invalid("Timestamp out of range") : new e({
                ts: t,
                zone: ba(r.zone, hn.defaultZone),
                loc: mn.fromObject(r)
            });
            throw new vr(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)
        }
        static fromSeconds(t, r = {}) {
            if (ao(t)) return new e({
                ts: t * 1e3,
                zone: ba(r.zone, hn.defaultZone),
                loc: mn.fromObject(r)
            });
            throw new vr("fromSeconds requires a numerical input")
        }
        static fromObject(t, r = {}) {
            t = t || {};
            let n = ba(r.zone, hn.defaultZone);
            if (!n.isValid) return e.invalid(fc(n));
            let i = hn.now(),
                a = kt(r.specificOffset) ? n.offset(i) : r.specificOffset,
                o = Sc(t, T0),
                s = !kt(o.ordinal),
                u = !kt(o.year),
                l = !kt(o.month) || !kt(o.day),
                c = u || l,
                d = o.weekYear || o.weekNumber,
                m = mn.fromObject(r);
            if ((c || s) && d) throw new ro("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
            if (l && s) throw new ro("Can't mix ordinal dates with month/day");
            let h = d || o.weekday && !c,
                g, y, v = hc(i, a);
            h ? (g = NP, y = LP, v = km(v)) : s ? (g = RP, y = PP, v = sm(v)) : (g = PS, y = LS);
            let D = !1;
            for (let B of g) {
                let G = o[B];
                kt(G) ? D ? o[B] = y[B] : o[B] = v[B] : D = !0
            }
            let I = h ? AP(o) : s ? OP(o) : IS(o),
                C = I || AS(o);
            if (C) return e.invalid(C);
            let x = h ? k0(o) : s ? x0(o) : o,
                [O, A] = gc(x, a, n),
                P = new e({
                    ts: O,
                    zone: n,
                    o: A,
                    loc: m
                });
            return o.weekday && c && t.weekday !== P.weekday ? e.invalid("mismatched weekday", `you can't specify both a weekday of ${o.weekday} and a date of ${P.toISO()}`) : P
        }
        static fromISO(t, r = {}) {
            let [n, i] = eP(t);
            return Sl(n, i, r, "ISO 8601", t)
        }
        static fromRFC2822(t, r = {}) {
            let [n, i] = tP(t);
            return Sl(n, i, r, "RFC 2822", t)
        }
        static fromHTTP(t, r = {}) {
            let [n, i] = nP(t);
            return Sl(n, i, r, "HTTP", r)
        }
        static fromFormat(t, r, n = {}) {
            if (kt(t) || kt(r)) throw new vr("fromFormat requires an input string and a format");
            let {
                locale: i = null,
                numberingSystem: a = null
            } = n, o = mn.fromOpts({
                locale: i,
                numberingSystem: a,
                defaultToEN: !0
            }), [s, u, l, c] = IP(o, t, r);
            return c ? e.invalid(c) : Sl(s, u, n, `format ${r}`, t, l)
        }
        static fromString(t, r, n = {}) {
            return e.fromFormat(t, r, n)
        }
        static fromSQL(t, r = {}) {
            let [n, i] = uP(t);
            return Sl(n, i, r, "SQL", t)
        }
        static invalid(t, r = null) {
            if (!t) throw new vr("need to specify a reason the DateTime is invalid");
            let n = t instanceof Ar ? t : new Ar(t, r);
            if (hn.throwOnInvalid) throw new fm(n);
            return new e({
                invalid: n
            })
        }
        static isDateTime(t) {
            return t && t.isLuxonDateTime || !1
        }
        static parseFormatForOpts(t, r = {}) {
            let n = xS(t, mn.fromObject(r));
            return n ? n.map(i => i ? i.val : null).join("") : null
        }
        static expandFormat(t, r = {}) {
            return ES(Ir.parseFormat(t), mn.fromObject(r)).map(i => i.val).join("")
        }
        get(t) {
            return this[t]
        }
        get isValid() {
            return this.invalid === null
        }
        get invalidReason() {
            return this.invalid ? this.invalid.reason : null
        }
        get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null
        }
        get locale() {
            return this.isValid ? this.loc.locale : null
        }
        get numberingSystem() {
            return this.isValid ? this.loc.numberingSystem : null
        }
        get outputCalendar() {
            return this.isValid ? this.loc.outputCalendar : null
        }
        get zone() {
            return this._zone
        }
        get zoneName() {
            return this.isValid ? this.zone.name : null
        }
        get year() {
            return this.isValid ? this.c.year : NaN
        }
        get quarter() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN
        }
        get month() {
            return this.isValid ? this.c.month : NaN
        }
        get day() {
            return this.isValid ? this.c.day : NaN
        }
        get hour() {
            return this.isValid ? this.c.hour : NaN
        }
        get minute() {
            return this.isValid ? this.c.minute : NaN
        }
        get second() {
            return this.isValid ? this.c.second : NaN
        }
        get millisecond() {
            return this.isValid ? this.c.millisecond : NaN
        }
        get weekYear() {
            return this.isValid ? um(this).weekYear : NaN
        }
        get weekNumber() {
            return this.isValid ? um(this).weekNumber : NaN
        }
        get weekday() {
            return this.isValid ? um(this).weekday : NaN
        }
        get ordinal() {
            return this.isValid ? sm(this.c).ordinal : NaN
        }
        get monthShort() {
            return this.isValid ? es.months("short", {
                locObj: this.loc
            })[this.month - 1] : null
        }
        get monthLong() {
            return this.isValid ? es.months("long", {
                locObj: this.loc
            })[this.month - 1] : null
        }
        get weekdayShort() {
            return this.isValid ? es.weekdays("short", {
                locObj: this.loc
            })[this.weekday - 1] : null
        }
        get weekdayLong() {
            return this.isValid ? es.weekdays("long", {
                locObj: this.loc
            })[this.weekday - 1] : null
        }
        get offset() {
            return this.isValid ? +this.o : NaN
        }
        get offsetNameShort() {
            return this.isValid ? this.zone.offsetName(this.ts, {
                format: "short",
                locale: this.locale
            }) : null
        }
        get offsetNameLong() {
            return this.isValid ? this.zone.offsetName(this.ts, {
                format: "long",
                locale: this.locale
            }) : null
        }
        get isOffsetFixed() {
            return this.isValid ? this.zone.isUniversal : null
        }
        get isInDST() {
            return this.isOffsetFixed ? !1 : this.offset > this.set({
                month: 1,
                day: 1
            }).offset || this.offset > this.set({
                month: 5
            }).offset
        }
        getPossibleOffsets() {
            if (!this.isValid || this.isOffsetFixed) return [this];
            let t = 864e5,
                r = 6e4,
                n = Mc(this.c),
                i = this.zone.offset(n - t),
                a = this.zone.offset(n + t),
                o = this.zone.offset(n - i * r),
                s = this.zone.offset(n - a * r);
            if (o === s) return [this];
            let u = n - o * r,
                l = n - s * r,
                c = hc(u, o),
                d = hc(l, s);
            return c.hour === d.hour && c.minute === d.minute && c.second === d.second && c.millisecond === d.millisecond ? [no(this, {
                ts: u
            }), no(this, {
                ts: l
            })] : [this]
        }
        get isInLeapYear() {
            return Fl(this.year)
        }
        get daysInMonth() {
            return bc(this.year, this.month)
        }
        get daysInYear() {
            return this.isValid ? Cl(this.year) : NaN
        }
        get weeksInWeekYear() {
            return this.isValid ? Dc(this.weekYear) : NaN
        }
        resolvedLocaleOptions(t = {}) {
            let {
                locale: r,
                numberingSystem: n,
                calendar: i
            } = Ir.create(this.loc.clone(t), t).resolvedOptions(this);
            return {
                locale: r,
                numberingSystem: n,
                outputCalendar: i
            }
        }
        toUTC(t = 0, r = {}) {
            return this.setZone(Kr.instance(t), r)
        }
        toLocal() {
            return this.setZone(hn.defaultZone)
        }
        setZone(t, {
            keepLocalTime: r = !1,
            keepCalendarTime: n = !1
        } = {}) {
            if (t = ba(t, hn.defaultZone), t.equals(this.zone)) return this;
            if (t.isValid) {
                let i = this.ts;
                if (r || n) {
                    let a = t.offset(this.ts),
                        o = this.toObject();
                    [i] = gc(o, a, t)
                }
                return no(this, {
                    ts: i,
                    zone: t
                })
            } else return e.invalid(fc(t))
        }
        reconfigure({
            locale: t,
            numberingSystem: r,
            outputCalendar: n
        } = {}) {
            let i = this.loc.clone({
                locale: t,
                numberingSystem: r,
                outputCalendar: n
            });
            return no(this, {
                loc: i
            })
        }
        setLocale(t) {
            return this.reconfigure({
                locale: t
            })
        }
        set(t) {
            if (!this.isValid) return this;
            let r = Sc(t, T0),
                n = !kt(r.weekYear) || !kt(r.weekNumber) || !kt(r.weekday),
                i = !kt(r.ordinal),
                a = !kt(r.year),
                o = !kt(r.month) || !kt(r.day),
                s = a || o,
                u = r.weekYear || r.weekNumber;
            if ((s || i) && u) throw new ro("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
            if (o && i) throw new ro("Can't mix ordinal dates with month/day");
            let l;
            n ? l = k0({
                ...km(this.c),
                ...r
            }) : kt(r.ordinal) ? (l = {
                ...this.toObject(),
                ...r
            }, kt(r.day) && (l.day = Math.min(bc(l.year, l.month), l.day))) : l = x0({
                ...sm(this.c),
                ...r
            });
            let [c, d] = gc(l, this.o, this.zone);
            return no(this, {
                ts: c,
                o: d
            })
        }
        plus(t) {
            if (!this.isValid) return this;
            let r = He.fromDurationLike(t);
            return no(this, _0(this, r))
        }
        minus(t) {
            if (!this.isValid) return this;
            let r = He.fromDurationLike(t).negate();
            return no(this, _0(this, r))
        }
        startOf(t) {
            if (!this.isValid) return this;
            let r = {},
                n = He.normalizeUnit(t);
            switch (n) {
                case "years":
                    r.month = 1;
                case "quarters":
                case "months":
                    r.day = 1;
                case "weeks":
                case "days":
                    r.hour = 0;
                case "hours":
                    r.minute = 0;
                case "minutes":
                    r.second = 0;
                case "seconds":
                    r.millisecond = 0;
                    break
            }
            if (n === "weeks" && (r.weekday = 1), n === "quarters") {
                let i = Math.ceil(this.month / 3);
                r.month = (i - 1) * 3 + 1
            }
            return this.set(r)
        }
        endOf(t) {
            return this.isValid ? this.plus({
                [t]: 1
            }).startOf(t).minus(1) : this
        }
        toFormat(t, r = {}) {
            return this.isValid ? Ir.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, t) : lm
        }
        toLocaleString(t = vc, r = {}) {
            return this.isValid ? Ir.create(this.loc.clone(r), t).formatDateTime(this) : lm
        }
        toLocaleParts(t = {}) {
            return this.isValid ? Ir.create(this.loc.clone(t), t).formatDateTimeParts(this) : []
        }
        toISO({
            format: t = "extended",
            suppressSeconds: r = !1,
            suppressMilliseconds: n = !1,
            includeOffset: i = !0,
            extendedZone: a = !1
        } = {}) {
            if (!this.isValid) return null;
            let o = t === "extended",
                s = cm(this, o);
            return s += "T", s += M0(this, o, r, n, i, a), s
        }
        toISODate({
            format: t = "extended"
        } = {}) {
            return this.isValid ? cm(this, t === "extended") : null
        }
        toISOWeekDate() {
            return mc(this, "kkkk-'W'WW-c")
        }
        toISOTime({
            suppressMilliseconds: t = !1,
            suppressSeconds: r = !1,
            includeOffset: n = !0,
            includePrefix: i = !1,
            extendedZone: a = !1,
            format: o = "extended"
        } = {}) {
            return this.isValid ? (i ? "T" : "") + M0(this, o === "extended", r, t, n, a) : null
        }
        toRFC2822() {
            return mc(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
        }
        toHTTP() {
            return mc(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
        }
        toSQLDate() {
            return this.isValid ? cm(this, !0) : null
        }
        toSQLTime({
            includeOffset: t = !0,
            includeZone: r = !1,
            includeOffsetSpace: n = !0
        } = {}) {
            let i = "HH:mm:ss.SSS";
            return (r || t) && (n && (i += " "), r ? i += "z" : t && (i += "ZZ")), mc(this, i, !0)
        }
        toSQL(t = {}) {
            return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null
        }
        toString() {
            return this.isValid ? this.toISO() : lm
        }
        valueOf() {
            return this.toMillis()
        }
        toMillis() {
            return this.isValid ? this.ts : NaN
        }
        toSeconds() {
            return this.isValid ? this.ts / 1e3 : NaN
        }
        toUnixInteger() {
            return this.isValid ? Math.floor(this.ts / 1e3) : NaN
        }
        toJSON() {
            return this.toISO()
        }
        toBSON() {
            return this.toJSDate()
        }
        toObject(t = {}) {
            if (!this.isValid) return {};
            let r = {
                ...this.c
            };
            return t.includeConfig && (r.outputCalendar = this.outputCalendar, r.numberingSystem = this.loc.numberingSystem, r.locale = this.loc.locale), r
        }
        toJSDate() {
            return new Date(this.isValid ? this.ts : NaN)
        }
        diff(t, r = "milliseconds", n = {}) {
            if (!this.isValid || !t.isValid) return He.invalid("created by diffing an invalid DateTime");
            let i = {
                    locale: this.locale,
                    numberingSystem: this.numberingSystem,
                    ...n
                },
                a = f2(r).map(He.normalizeUnit),
                o = t.valueOf() > this.valueOf(),
                s = o ? this : t,
                u = o ? t : this,
                l = gP(s, u, a, i);
            return o ? l.negate() : l
        }
        diffNow(t = "milliseconds", r = {}) {
            return this.diff(e.now(), t, r)
        }
        until(t) {
            return this.isValid ? ns.fromDateTimes(this, t) : this
        }
        hasSame(t, r) {
            if (!this.isValid) return !1;
            let n = t.valueOf(),
                i = this.setZone(t.zone, {
                    keepLocalTime: !0
                });
            return i.startOf(r) <= n && n <= i.endOf(r)
        }
        equals(t) {
            return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc)
        }
        toRelative(t = {}) {
            if (!this.isValid) return null;
            let r = t.base || e.fromObject({}, {
                    zone: this.zone
                }),
                n = t.padding ? this < r ? -t.padding : t.padding : 0,
                i = ["years", "months", "days", "hours", "minutes", "seconds"],
                a = t.unit;
            return Array.isArray(t.unit) && (i = t.unit, a = void 0), I0(r, this.plus(n), {
                ...t,
                numeric: "always",
                units: i,
                unit: a
            })
        }
        toRelativeCalendar(t = {}) {
            return this.isValid ? I0(t.base || e.fromObject({}, {
                zone: this.zone
            }), this, {
                ...t,
                numeric: "auto",
                units: ["years", "months", "days"],
                calendary: !0
            }) : null
        }
        static min(...t) {
            if (!t.every(e.isDateTime)) throw new vr("min requires all arguments be DateTimes");
            return p0(t, r => r.valueOf(), Math.min)
        }
        static max(...t) {
            if (!t.every(e.isDateTime)) throw new vr("max requires all arguments be DateTimes");
            return p0(t, r => r.valueOf(), Math.max)
        }
        static fromFormatExplain(t, r, n = {}) {
            let {
                locale: i = null,
                numberingSystem: a = null
            } = n, o = mn.fromOpts({
                locale: i,
                numberingSystem: a,
                defaultToEN: !0
            });
            return kS(o, t, r)
        }
        static fromStringExplain(t, r, n = {}) {
            return e.fromFormatExplain(t, r, n)
        }
        static get DATE_SHORT() {
            return vc
        }
        static get DATE_MED() {
            return H0
        }
        static get DATE_MED_WITH_WEEKDAY() {
            return GL
        }
        static get DATE_FULL() {
            return B0
        }
        static get DATE_HUGE() {
            return V0
        }
        static get TIME_SIMPLE() {
            return $0
        }
        static get TIME_WITH_SECONDS() {
            return U0
        }
        static get TIME_WITH_SHORT_OFFSET() {
            return W0
        }
        static get TIME_WITH_LONG_OFFSET() {
            return Y0
        }
        static get TIME_24_SIMPLE() {
            return z0
        }
        static get TIME_24_WITH_SECONDS() {
            return K0
        }
        static get TIME_24_WITH_SHORT_OFFSET() {
            return j0
        }
        static get TIME_24_WITH_LONG_OFFSET() {
            return q0
        }
        static get DATETIME_SHORT() {
            return G0
        }
        static get DATETIME_SHORT_WITH_SECONDS() {
            return J0
        }
        static get DATETIME_MED() {
            return Z0
        }
        static get DATETIME_MED_WITH_SECONDS() {
            return Q0
        }
        static get DATETIME_MED_WITH_WEEKDAY() {
            return JL
        }
        static get DATETIME_FULL() {
            return X0
        }
        static get DATETIME_FULL_WITH_SECONDS() {
            return eS
        }
        static get DATETIME_HUGE() {
            return tS
        }
        static get DATETIME_HUGE_WITH_SECONDS() {
            return nS
        }
    };

    function El(e) {
        if (mt.isDateTime(e)) return e;
        if (e && e.valueOf && ao(e.valueOf())) return mt.fromJSDate(e);
        if (e && typeof e == "object") return mt.fromObject(e);
        throw new vr(`Unknown datetime argument: ${e}, of type ${typeof e}`)
    }
    var Hm = {
            renderNullAs: "\\-",
            taskCompletionTracking: !1,
            taskCompletionUseEmojiShorthand: !1,
            taskCompletionText: "completion",
            taskCompletionDateFormat: "yyyy-MM-dd",
            recursiveSubTaskCompletion: !1,
            warnOnEmptyResult: !0,
            refreshEnabled: !0,
            refreshInterval: 2500,
            defaultDateFormat: "MMMM dd, yyyy",
            defaultDateTimeFormat: "h:mm a - MMMM dd, yyyy",
            maxRecursiveRenderDepth: 4,
            tableIdColumnName: "File",
            tableGroupColumnName: "Group",
            showResultCount: !0
        },
        HP = {
            allowHtml: !0
        };
    ({
        ...Hm,
        ...HP
    });
    var xm = class e {
            constructor(t) {
                ur(this, "value");
                ur(this, "successful");
                this.value = t, this.successful = !0
            }
            map(t) {
                return new e(t(this.value))
            }
            flatMap(t) {
                return t(this.value)
            }
            mapErr(t) {
                return this
            }
            bimap(t, r) {
                return this.map(t)
            }
            orElse(t) {
                return this.value
            }
            cast() {
                return this
            }
            orElseThrow(t) {
                return this.value
            }
        },
        Cm = class e {
            constructor(t) {
                ur(this, "error");
                ur(this, "successful");
                this.error = t, this.successful = !1
            }
            map(t) {
                return this
            }
            flatMap(t) {
                return this
            }
            mapErr(t) {
                return new e(t(this.error))
            }
            bimap(t, r) {
                return this.mapErr(r)
            }
            orElse(t) {
                return t
            }
            cast() {
                return this
            }
            orElseThrow(t) {
                throw t ? new Error(t(this.error)) : new Error("" + this.error)
            }
        },
        Ec;
    (function(e) {
        function t(a) {
            return new xm(a)
        }
        e.success = t;

        function r(a) {
            return new Cm(a)
        }
        e.failure = r;

        function n(a, o, s) {
            return a.successful ? o.successful ? s(a.value, o.value) : r(o.error) : r(a.error)
        }
        e.flatMap2 = n;

        function i(a, o, s) {
            return n(a, o, (u, l) => t(s(u, l)))
        }
        e.map2 = i
    })(Ec || (Ec = {}));
    var BP = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" || typeof window != "undefined" ? window : typeof self != "undefined" ? self : {},
        kc = {
            exports: {}
        };
    kc.exports;
    (function(e, t) {
        (function(r, n) {
            e.exports = n()
        })(typeof self != "undefined" ? self : BP, function() {
            return function(r) {
                var n = {};

                function i(a) {
                    if (n[a]) return n[a].exports;
                    var o = n[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return r[a].call(o.exports, o, o.exports, i), o.l = !0, o.exports
                }
                return i.m = r, i.c = n, i.d = function(a, o, s) {
                    i.o(a, o) || Object.defineProperty(a, o, {
                        configurable: !1,
                        enumerable: !0,
                        get: s
                    })
                }, i.r = function(a) {
                    Object.defineProperty(a, "__esModule", {
                        value: !0
                    })
                }, i.n = function(a) {
                    var o = a && a.__esModule ? function() {
                        return a.default
                    } : function() {
                        return a
                    };
                    return i.d(o, "a", o), o
                }, i.o = function(a, o) {
                    return Object.prototype.hasOwnProperty.call(a, o)
                }, i.p = "", i(i.s = 0)
            }([function(r, n, i) {
                function a(L) {
                    if (!(this instanceof a)) return new a(L);
                    this._ = L
                }
                var o = a.prototype;

                function s(L, K) {
                    for (var ee = 0; ee < L; ee++) K(ee)
                }

                function u(L, K, ee) {
                    return function(ue, de) {
                        s(de.length, function(ve) {
                            ue(de[ve], ve, de)
                        })
                    }(function(ue, de, ve) {
                        K = L(K, ue, de, ve)
                    }, ee), K
                }

                function l(L, K) {
                    return u(function(ee, ue, de, ve) {
                        return ee.concat([L(ue, de, ve)])
                    }, [], K)
                }

                function c(L, K) {
                    var ee = {
                        v: 0,
                        buf: K
                    };
                    return s(L, function() {
                        var ue;
                        ee = {
                            v: ee.v << 1 | (ue = ee.buf, ue[0] >> 7),
                            buf: function(de) {
                                var ve = u(function(ge, M, H, q) {
                                    return ge.concat(H === q.length - 1 ? Buffer.from([M, 0]).readUInt16BE(0) : q.readUInt16BE(H))
                                }, [], de);
                                return Buffer.from(l(function(ge) {
                                    return (ge << 1 & 65535) >> 8
                                }, ve))
                            }(ee.buf)
                        }
                    }), ee
                }

                function d() {
                    return typeof Buffer != "undefined"
                }

                function m() {
                    if (!d()) throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.")
                }

                function h(L) {
                    m();
                    var K = u(function(ve, ge) {
                        return ve + ge
                    }, 0, L);
                    if (K % 8 != 0) throw new Error("The bits [" + L.join(", ") + "] add up to " + K + " which is not an even number of bytes; the total should be divisible by 8");
                    var ee, ue = K / 8,
                        de = (ee = function(ve) {
                            return ve > 48
                        }, u(function(ve, ge) {
                            return ve || (ee(ge) ? ge : ve)
                        }, null, L));
                    if (de) throw new Error(de + " bit range requested exceeds 48 bit (6 byte) Number max.");
                    return new a(function(ve, ge) {
                        var M = ue + ge;
                        return M > ve.length ? B(ge, ue.toString() + " bytes") : P(M, u(function(H, q) {
                            var ie = c(q, H.buf);
                            return {
                                coll: H.coll.concat(ie.v),
                                buf: ie.buf
                            }
                        }, {
                            coll: [],
                            buf: ve.slice(ge, M)
                        }, L).coll)
                    })
                }

                function g(L, K) {
                    return new a(function(ee, ue) {
                        return m(), ue + K > ee.length ? B(ue, K + " bytes for " + L) : P(ue + K, ee.slice(ue, ue + K))
                    })
                }

                function y(L, K) {
                    if (typeof(ee = K) != "number" || Math.floor(ee) !== ee || K < 0 || K > 6) throw new Error(L + " requires integer length in range [0, 6].");
                    var ee
                }

                function v(L) {
                    return y("uintBE", L), g("uintBE(" + L + ")", L).map(function(K) {
                        return K.readUIntBE(0, L)
                    })
                }

                function D(L) {
                    return y("uintLE", L), g("uintLE(" + L + ")", L).map(function(K) {
                        return K.readUIntLE(0, L)
                    })
                }

                function I(L) {
                    return y("intBE", L), g("intBE(" + L + ")", L).map(function(K) {
                        return K.readIntBE(0, L)
                    })
                }

                function C(L) {
                    return y("intLE", L), g("intLE(" + L + ")", L).map(function(K) {
                        return K.readIntLE(0, L)
                    })
                }

                function x(L) {
                    return L instanceof a
                }

                function O(L) {
                    return {}.toString.call(L) === "[object Array]"
                }

                function A(L) {
                    return d() && Buffer.isBuffer(L)
                }

                function P(L, K) {
                    return {
                        status: !0,
                        index: L,
                        value: K,
                        furthest: -1,
                        expected: []
                    }
                }

                function B(L, K) {
                    return O(K) || (K = [K]), {
                        status: !1,
                        index: -1,
                        value: null,
                        furthest: L,
                        expected: K
                    }
                }

                function G(L, K) {
                    if (!K || L.furthest > K.furthest) return L;
                    var ee = L.furthest === K.furthest ? function(ue, de) {
                        if (function() {
                                if (a._supportsSet !== void 0) return a._supportsSet;
                                var ae = typeof Set != "undefined";
                                return a._supportsSet = ae, ae
                            }() && Array.from) {
                            for (var ve = new Set(ue), ge = 0; ge < de.length; ge++) ve.add(de[ge]);
                            var M = Array.from(ve);
                            return M.sort(), M
                        }
                        for (var H = {}, q = 0; q < ue.length; q++) H[ue[q]] = !0;
                        for (var ie = 0; ie < de.length; ie++) H[de[ie]] = !0;
                        var ye = [];
                        for (var ce in H)({}).hasOwnProperty.call(H, ce) && ye.push(ce);
                        return ye.sort(), ye
                    }(L.expected, K.expected) : K.expected;
                    return {
                        status: L.status,
                        index: L.index,
                        value: L.value,
                        furthest: K.furthest,
                        expected: ee
                    }
                }
                var J = {};

                function Q(L, K) {
                    if (A(L)) return {
                        offset: K,
                        line: -1,
                        column: -1
                    };
                    L in J || (J[L] = {});
                    for (var ee = J[L], ue = 0, de = 0, ve = 0, ge = K; ge >= 0;) {
                        if (ge in ee) {
                            ue = ee[ge].line, ve === 0 && (ve = ee[ge].lineStart);
                            break
                        }(L.charAt(ge) === `
` || L.charAt(ge) === "\r" && L.charAt(ge + 1) !== `
`) && (de++, ve === 0 && (ve = ge + 1)), ge--
                    }
                    var M = ue + de,
                        H = K - ve;
                    return ee[K] = {
                        line: M,
                        lineStart: ve
                    }, {
                        offset: K,
                        line: M + 1,
                        column: H + 1
                    }
                }

                function oe(L) {
                    if (!x(L)) throw new Error("not a parser: " + L)
                }

                function te(L, K) {
                    return typeof L == "string" ? L.charAt(K) : L[K]
                }

                function re(L) {
                    if (typeof L != "number") throw new Error("not a number: " + L)
                }

                function ne(L) {
                    if (typeof L != "function") throw new Error("not a function: " + L)
                }

                function be(L) {
                    if (typeof L != "string") throw new Error("not a string: " + L)
                }
                var pe = 2,
                    De = 3,
                    Ce = 8,
                    U = 5 * Ce,
                    Je = 4 * Ce,
                    it = "  ";

                function N(L, K) {
                    return new Array(K + 1).join(L)
                }

                function Ze(L, K, ee) {
                    var ue = K - L.length;
                    return ue <= 0 ? L : N(ee, ue) + L
                }

                function It(L, K, ee, ue) {
                    return {
                        from: L - K > 0 ? L - K : 0,
                        to: L + ee > ue ? ue : L + ee
                    }
                }

                function Mt(L, K) {
                    var ee, ue, de, ve, ge, M = K.index,
                        H = M.offset,
                        q = 1;
                    if (H === L.length) return "Got the end of the input";
                    if (A(L)) {
                        var ie = H - H % Ce,
                            ye = H - ie,
                            ce = It(ie, U, Je + Ce, L.length),
                            ae = l(function(Te) {
                                return l(function(Ue) {
                                    return Ze(Ue.toString(16), 2, "0")
                                }, Te)
                            }, function(Te, Ue) {
                                var We = Te.length,
                                    Ft = [],
                                    Hn = 0;
                                if (We <= Ue) return [Te.slice()];
                                for (var Ot = 0; Ot < We; Ot++) Ft[Hn] || Ft.push([]), Ft[Hn].push(Te[Ot]), (Ot + 1) % Ue == 0 && Hn++;
                                return Ft
                            }(L.slice(ce.from, ce.to).toJSON().data, Ce));
                        ve = function(Te) {
                            return Te.from === 0 && Te.to === 1 ? {
                                from: Te.from,
                                to: Te.to
                            } : {
                                from: Te.from / Ce,
                                to: Math.floor(Te.to / Ce)
                            }
                        }(ce), ue = ie / Ce, ee = 3 * ye, ye >= 4 && (ee += 1), q = 2, de = l(function(Te) {
                            return Te.length <= 4 ? Te.join(" ") : Te.slice(0, 4).join(" ") + "  " + Te.slice(4).join(" ")
                        }, ae), (ge = (8 * (ve.to > 0 ? ve.to - 1 : ve.to)).toString(16).length) < 2 && (ge = 2)
                    } else {
                        var Se = L.split(/\r\n|[\n\r\u2028\u2029]/);
                        ee = M.column - 1, ue = M.line - 1, ve = It(ue, pe, De, Se.length), de = Se.slice(ve.from, ve.to), ge = ve.to.toString().length
                    }
                    var nt = ue - ve.from;
                    return A(L) && (ge = (8 * (ve.to > 0 ? ve.to - 1 : ve.to)).toString(16).length) < 2 && (ge = 2), u(function(Te, Ue, We) {
                        var Ft, Hn = We === nt,
                            Ot = Hn ? "> " : it;
                        return Ft = A(L) ? Ze((8 * (ve.from + We)).toString(16), ge, "0") : Ze((ve.from + We + 1).toString(), ge, " "), [].concat(Te, [Ot + Ft + " | " + Ue], Hn ? [it + N(" ", ge) + " | " + Ze("", ee, " ") + N("^", q)] : [])
                    }, [], de).join(`
`)
                }

                function jt(L, K) {
                    return [`
`, "-- PARSING FAILED " + N("-", 50), `

`, Mt(L, K), `

`, (ee = K.expected, ee.length === 1 ? `Expected:

` + ee[0] : `Expected one of the following:

` + ee.join(", ")), `
`].join("");
                    var ee
                }

                function vt(L) {
                    return L.flags !== void 0 ? L.flags : [L.global ? "g" : "", L.ignoreCase ? "i" : "", L.multiline ? "m" : "", L.unicode ? "u" : "", L.sticky ? "y" : ""].join("")
                }

                function Wt() {
                    for (var L = [].slice.call(arguments), K = L.length, ee = 0; ee < K; ee += 1) oe(L[ee]);
                    return a(function(ue, de) {
                        for (var ve, ge = new Array(K), M = 0; M < K; M += 1) {
                            if (!(ve = G(L[M]._(ue, de), ve)).status) return ve;
                            ge[M] = ve.value, de = ve.index
                        }
                        return G(P(de, ge), ve)
                    })
                }

                function Tt() {
                    var L = [].slice.call(arguments);
                    if (L.length === 0) throw new Error("seqMap needs at least one argument");
                    var K = L.pop();
                    return ne(K), Wt.apply(null, L).map(function(ee) {
                        return K.apply(null, ee)
                    })
                }

                function Jt() {
                    var L = [].slice.call(arguments),
                        K = L.length;
                    if (K === 0) return jn("zero alternates");
                    for (var ee = 0; ee < K; ee += 1) oe(L[ee]);
                    return a(function(ue, de) {
                        for (var ve, ge = 0; ge < L.length; ge += 1)
                            if ((ve = G(L[ge]._(ue, de), ve)).status) return ve;
                        return ve
                    })
                }

                function en(L, K) {
                    return gn(L, K).or(xn([]))
                }

                function gn(L, K) {
                    return oe(L), oe(K), Tt(L, K.then(L).many(), function(ee, ue) {
                        return [ee].concat(ue)
                    })
                }

                function yn(L) {
                    be(L);
                    var K = "'" + L + "'";
                    return a(function(ee, ue) {
                        var de = ue + L.length,
                            ve = ee.slice(ue, de);
                        return ve === L ? P(de, ve) : B(ue, K)
                    })
                }

                function vn(L, K) {
                    (function(de) {
                        if (!(de instanceof RegExp)) throw new Error("not a regexp: " + de);
                        for (var ve = vt(de), ge = 0; ge < ve.length; ge++) {
                            var M = ve.charAt(ge);
                            if (M !== "i" && M !== "m" && M !== "u" && M !== "s") throw new Error('unsupported regexp flag "' + M + '": ' + de)
                        }
                    })(L), arguments.length >= 2 ? re(K) : K = 0;
                    var ee = function(de) {
                            return RegExp("^(?:" + de.source + ")", vt(de))
                        }(L),
                        ue = "" + L;
                    return a(function(de, ve) {
                        var ge = ee.exec(de.slice(ve));
                        if (ge) {
                            if (0 <= K && K <= ge.length) {
                                var M = ge[0],
                                    H = ge[K];
                                return P(ve + M.length, H)
                            }
                            return B(ve, "valid match group (0 to " + ge.length + ") in " + ue)
                        }
                        return B(ve, ue)
                    })
                }

                function xn(L) {
                    return a(function(K, ee) {
                        return P(ee, L)
                    })
                }

                function jn(L) {
                    return a(function(K, ee) {
                        return B(ee, L)
                    })
                }

                function sn(L) {
                    if (x(L)) return a(function(K, ee) {
                        var ue = L._(K, ee);
                        return ue.index = ee, ue.value = "", ue
                    });
                    if (typeof L == "string") return sn(yn(L));
                    if (L instanceof RegExp) return sn(vn(L));
                    throw new Error("not a string, regexp, or parser: " + L)
                }

                function Rt(L) {
                    return oe(L), a(function(K, ee) {
                        var ue = L._(K, ee),
                            de = K.slice(ee, ue.index);
                        return ue.status ? B(ee, 'not "' + de + '"') : P(ee, null)
                    })
                }

                function Vt(L) {
                    return ne(L), a(function(K, ee) {
                        var ue = te(K, ee);
                        return ee < K.length && L(ue) ? P(ee + 1, ue) : B(ee, "a character/byte matching " + L)
                    })
                }

                function Sr(L, K) {
                    arguments.length < 2 && (K = L, L = void 0);
                    var ee = a(function(ue, de) {
                        return ee._ = K()._, ee._(ue, de)
                    });
                    return L ? ee.desc(L) : ee
                }

                function Rr() {
                    return jn("fantasy-land/empty")
                }
                o.parse = function(L) {
                    if (typeof L != "string" && !A(L)) throw new Error(".parse must be called with a string or Buffer as its argument");
                    var K, ee = this.skip(At)._(L, 0);
                    return K = ee.status ? {
                        status: !0,
                        value: ee.value
                    } : {
                        status: !1,
                        index: Q(L, ee.furthest),
                        expected: ee.expected
                    }, delete J[L], K
                }, o.tryParse = function(L) {
                    var K = this.parse(L);
                    if (K.status) return K.value;
                    var ee = jt(L, K),
                        ue = new Error(ee);
                    throw ue.type = "ParsimmonError", ue.result = K, ue
                }, o.assert = function(L, K) {
                    return this.chain(function(ee) {
                        return L(ee) ? xn(ee) : jn(K)
                    })
                }, o.or = function(L) {
                    return Jt(this, L)
                }, o.trim = function(L) {
                    return this.wrap(L, L)
                }, o.wrap = function(L, K) {
                    return Tt(L, this, K, function(ee, ue) {
                        return ue
                    })
                }, o.thru = function(L) {
                    return L(this)
                }, o.then = function(L) {
                    return oe(L), Wt(this, L).map(function(K) {
                        return K[1]
                    })
                }, o.many = function() {
                    var L = this;
                    return a(function(K, ee) {
                        for (var ue = [], de = void 0;;) {
                            if (!(de = G(L._(K, ee), de)).status) return G(P(ee, ue), de);
                            if (ee === de.index) throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");
                            ee = de.index, ue.push(de.value)
                        }
                    })
                }, o.tieWith = function(L) {
                    return be(L), this.map(function(K) {
                        if (function(de) {
                                if (!O(de)) throw new Error("not an array: " + de)
                            }(K), K.length) {
                            be(K[0]);
                            for (var ee = K[0], ue = 1; ue < K.length; ue++) be(K[ue]), ee += L + K[ue];
                            return ee
                        }
                        return ""
                    })
                }, o.tie = function() {
                    return this.tieWith("")
                }, o.times = function(L, K) {
                    var ee = this;
                    return arguments.length < 2 && (K = L), re(L), re(K), a(function(ue, de) {
                        for (var ve = [], ge = void 0, M = void 0, H = 0; H < L; H += 1) {
                            if (M = G(ge = ee._(ue, de), M), !ge.status) return M;
                            de = ge.index, ve.push(ge.value)
                        }
                        for (; H < K && (M = G(ge = ee._(ue, de), M), ge.status); H += 1) de = ge.index, ve.push(ge.value);
                        return G(P(de, ve), M)
                    })
                }, o.result = function(L) {
                    return this.map(function() {
                        return L
                    })
                }, o.atMost = function(L) {
                    return this.times(0, L)
                }, o.atLeast = function(L) {
                    return Tt(this.times(L), this.many(), function(K, ee) {
                        return K.concat(ee)
                    })
                }, o.map = function(L) {
                    ne(L);
                    var K = this;
                    return a(function(ee, ue) {
                        var de = K._(ee, ue);
                        return de.status ? G(P(de.index, L(de.value)), de) : de
                    })
                }, o.contramap = function(L) {
                    ne(L);
                    var K = this;
                    return a(function(ee, ue) {
                        var de = K.parse(L(ee.slice(ue)));
                        return de.status ? P(ue + ee.length, de.value) : de
                    })
                }, o.promap = function(L, K) {
                    return ne(L), ne(K), this.contramap(L).map(K)
                }, o.skip = function(L) {
                    return Wt(this, L).map(function(K) {
                        return K[0]
                    })
                }, o.mark = function() {
                    return Tt(Bt, this, Bt, function(L, K, ee) {
                        return {
                            start: L,
                            value: K,
                            end: ee
                        }
                    })
                }, o.node = function(L) {
                    return Tt(Bt, this, Bt, function(K, ee, ue) {
                        return {
                            name: L,
                            value: ee,
                            start: K,
                            end: ue
                        }
                    })
                }, o.sepBy = function(L) {
                    return en(this, L)
                }, o.sepBy1 = function(L) {
                    return gn(this, L)
                }, o.lookahead = function(L) {
                    return this.skip(sn(L))
                }, o.notFollowedBy = function(L) {
                    return this.skip(Rt(L))
                }, o.desc = function(L) {
                    O(L) || (L = [L]);
                    var K = this;
                    return a(function(ee, ue) {
                        var de = K._(ee, ue);
                        return de.status || (de.expected = L), de
                    })
                }, o.fallback = function(L) {
                    return this.or(xn(L))
                }, o.ap = function(L) {
                    return Tt(L, this, function(K, ee) {
                        return K(ee)
                    })
                }, o.chain = function(L) {
                    var K = this;
                    return a(function(ee, ue) {
                        var de = K._(ee, ue);
                        return de.status ? G(L(de.value)._(ee, de.index), de) : de
                    })
                }, o.concat = o.or, o.empty = Rr, o.of = xn, o["fantasy-land/ap"] = o.ap, o["fantasy-land/chain"] = o.chain, o["fantasy-land/concat"] = o.concat, o["fantasy-land/empty"] = o.empty, o["fantasy-land/of"] = o.of, o["fantasy-land/map"] = o.map;
                var Bt = a(function(L, K) {
                        return P(K, Q(L, K))
                    }),
                    Hr = a(function(L, K) {
                        return K >= L.length ? B(K, "any character/byte") : P(K + 1, te(L, K))
                    }),
                    rn = a(function(L, K) {
                        return P(L.length, L.slice(K))
                    }),
                    At = a(function(L, K) {
                        return K < L.length ? B(K, "EOF") : P(K, null)
                    }),
                    Z = vn(/[0-9]/).desc("a digit"),
                    me = vn(/[0-9]*/).desc("optional digits"),
                    Ie = vn(/[a-z]/i).desc("a letter"),
                    at = vn(/[a-z]*/i).desc("optional letters"),
                    Dt = vn(/\s*/).desc("optional whitespace"),
                    Cn = vn(/\s+/).desc("whitespace"),
                    _n = yn("\r"),
                    Ht = yn(`
`),
                    ar = yn(`\r
`),
                    ht = Jt(ar, Ht, _n).desc("newline"),
                    St = Jt(ht, At);
                a.all = rn, a.alt = Jt, a.any = Hr, a.cr = _n, a.createLanguage = function(L) {
                    var K = {};
                    for (var ee in L)({}).hasOwnProperty.call(L, ee) && function(ue) {
                        K[ue] = Sr(function() {
                            return L[ue](K)
                        })
                    }(ee);
                    return K
                }, a.crlf = ar, a.custom = function(L) {
                    return a(L(P, B))
                }, a.digit = Z, a.digits = me, a.empty = Rr, a.end = St, a.eof = At, a.fail = jn, a.formatError = jt, a.index = Bt, a.isParser = x, a.lazy = Sr, a.letter = Ie, a.letters = at, a.lf = Ht, a.lookahead = sn, a.makeFailure = B, a.makeSuccess = P, a.newline = ht, a.noneOf = function(L) {
                    return Vt(function(K) {
                        return L.indexOf(K) < 0
                    }).desc("none of '" + L + "'")
                }, a.notFollowedBy = Rt, a.of = xn, a.oneOf = function(L) {
                    for (var K = L.split(""), ee = 0; ee < K.length; ee++) K[ee] = "'" + K[ee] + "'";
                    return Vt(function(ue) {
                        return L.indexOf(ue) >= 0
                    }).desc(K)
                }, a.optWhitespace = Dt, a.Parser = a, a.range = function(L, K) {
                    return Vt(function(ee) {
                        return L <= ee && ee <= K
                    }).desc(L + "-" + K)
                }, a.regex = vn, a.regexp = vn, a.sepBy = en, a.sepBy1 = gn, a.seq = Wt, a.seqMap = Tt, a.seqObj = function() {
                    for (var L, K = {}, ee = 0, ue = (L = arguments, Array.prototype.slice.call(L)), de = ue.length, ve = 0; ve < de; ve += 1) {
                        var ge = ue[ve];
                        if (!x(ge)) {
                            if (O(ge) && ge.length === 2 && typeof ge[0] == "string" && x(ge[1])) {
                                var M = ge[0];
                                if (Object.prototype.hasOwnProperty.call(K, M)) throw new Error("seqObj: duplicate key " + M);
                                K[M] = !0, ee++;
                                continue
                            }
                            throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.")
                        }
                    }
                    if (ee === 0) throw new Error("seqObj expects at least one named parser, found zero");
                    return a(function(H, q) {
                        for (var ie, ye = {}, ce = 0; ce < de; ce += 1) {
                            var ae, Se;
                            if (O(ue[ce]) ? (ae = ue[ce][0], Se = ue[ce][1]) : (ae = null, Se = ue[ce]), !(ie = G(Se._(H, q), ie)).status) return ie;
                            ae && (ye[ae] = ie.value), q = ie.index
                        }
                        return G(P(q, ye), ie)
                    })
                }, a.string = yn, a.succeed = xn, a.takeWhile = function(L) {
                    return ne(L), a(function(K, ee) {
                        for (var ue = ee; ue < K.length && L(te(K, ue));) ue++;
                        return P(ue, K.slice(ee, ue))
                    })
                }, a.test = Vt, a.whitespace = Cn, a["fantasy-land/empty"] = Rr, a["fantasy-land/of"] = xn, a.Binary = {
                    bitSeq: h,
                    bitSeqObj: function(L) {
                        m();
                        var K = {},
                            ee = 0,
                            ue = l(function(ve) {
                                if (O(ve)) {
                                    var ge = ve;
                                    if (ge.length !== 2) throw new Error("[" + ge.join(", ") + "] should be length 2, got length " + ge.length);
                                    if (be(ge[0]), re(ge[1]), Object.prototype.hasOwnProperty.call(K, ge[0])) throw new Error("duplicate key in bitSeqObj: " + ge[0]);
                                    return K[ge[0]] = !0, ee++, ge
                                }
                                return re(ve), [null, ve]
                            }, L);
                        if (ee < 1) throw new Error("bitSeqObj expects at least one named pair, got [" + L.join(", ") + "]");
                        var de = l(function(ve) {
                            return ve[0]
                        }, ue);
                        return h(l(function(ve) {
                            return ve[1]
                        }, ue)).map(function(ve) {
                            return u(function(ge, M) {
                                return M[0] !== null && (ge[M[0]] = M[1]), ge
                            }, {}, l(function(ge, M) {
                                return [ge, ve[M]]
                            }, de))
                        })
                    },
                    byte: function(L) {
                        if (m(), re(L), L > 255) throw new Error("Value specified to byte constructor (" + L + "=0x" + L.toString(16) + ") is larger in value than a single byte.");
                        var K = (L > 15 ? "0x" : "0x0") + L.toString(16);
                        return a(function(ee, ue) {
                            var de = te(ee, ue);
                            return de === L ? P(ue + 1, de) : B(ue, K)
                        })
                    },
                    buffer: function(L) {
                        return g("buffer", L).map(function(K) {
                            return Buffer.from(K)
                        })
                    },
                    encodedString: function(L, K) {
                        return g("string", K).map(function(ee) {
                            return ee.toString(L)
                        })
                    },
                    uintBE: v,
                    uint8BE: v(1),
                    uint16BE: v(2),
                    uint32BE: v(4),
                    uintLE: D,
                    uint8LE: D(1),
                    uint16LE: D(2),
                    uint32LE: D(4),
                    intBE: I,
                    int8BE: I(1),
                    int16BE: I(2),
                    int32BE: I(4),
                    intLE: C,
                    int8LE: C(1),
                    int16LE: C(2),
                    int32LE: C(4),
                    floatBE: g("floatBE", 4).map(function(L) {
                        return L.readFloatBE(0)
                    }),
                    floatLE: g("floatLE", 4).map(function(L) {
                        return L.readFloatLE(0)
                    }),
                    doubleBE: g("doubleBE", 8).map(function(L) {
                        return L.readDoubleBE(0)
                    }),
                    doubleLE: g("doubleLE", 8).map(function(L) {
                        return L.readDoubleLE(0)
                    })
                }, r.exports = a
            }])
        })
    })(kc, kc.exports);
    var W = kc.exports,
        Bm = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;

    function NS(e) {
        return e == null ? e : e.shiftToAll().normalize()
    }

    function O0(e) {
        return e.includes("/") && (e = e.substring(e.lastIndexOf("/") + 1)), e.endsWith(".md") && (e = e.substring(0, e.length - 3)), e
    }
    W.alt(W.regex(new RegExp(Bm(), "")), W.regex(/[0-9\p{Letter}_-]+/u).map(e => e.toLocaleLowerCase()), W.whitespace.map(e => "-"), W.any.map(e => "")).many().map(e => e.join(""));
    var VP = W.alt(W.regex(new RegExp(Bm(), "")), W.regex(/[0-9\p{Letter}_-]+/u), W.whitespace.map(e => " "), W.any.map(e => " ")).many().map(e => e.join("").split(/\s+/).join(" ").trim());

    function $P(e) {
        return VP.tryParse(e)
    }

    function UP(e) {
        return e = NS(e), e = He.fromObject(Object.fromEntries(Object.entries(e.toObject()).filter(([, t]) => t != 0))), e.toHuman()
    }
    var Ml;
    (function(e) {
        function t(x, O = Hm, A = !1) {
            let P = r(x);
            if (!P) return O.renderNullAs;
            switch (P.type) {
                case "null":
                    return O.renderNullAs;
                case "string":
                    return P.value;
                case "number":
                case "boolean":
                    return "" + P.value;
                case "html":
                    return P.value.outerHTML;
                case "widget":
                    return P.value.markdown();
                case "link":
                    return P.value.markdown();
                case "function":
                    return "<function>";
                case "array":
                    let B = "";
                    return A && (B += "["), B += P.value.map(G => t(G, O, !0)).join(", "), A && (B += "]"), B;
                case "object":
                    return "{ " + Object.entries(P.value).map(G => G[0] + ": " + t(G[1], O, !0)).join(", ") + " }";
                case "date":
                    return P.value.second == 0 && P.value.hour == 0 && P.value.minute == 0 ? P.value.toFormat(O.defaultDateFormat) : P.value.toFormat(O.defaultDateTimeFormat);
                case "duration":
                    return UP(P.value)
            }
        }
        e.toString = t;

        function r(x) {
            return m(x) ? {
                type: "null",
                value: x
            } : l(x) ? {
                type: "number",
                value: x
            } : u(x) ? {
                type: "string",
                value: x
            } : g(x) ? {
                type: "boolean",
                value: x
            } : d(x) ? {
                type: "duration",
                value: x
            } : c(x) ? {
                type: "date",
                value: x
            } : v(x) ? {
                type: "widget",
                value: x
            } : h(x) ? {
                type: "array",
                value: x
            } : y(x) ? {
                type: "link",
                value: x
            } : C(x) ? {
                type: "function",
                value: x
            } : D(x) ? {
                type: "html",
                value: x
            } : I(x) ? {
                type: "object",
                value: x
            } : void 0
        }
        e.wrapValue = r;

        function n(x, O) {
            if (I(x)) {
                let A = {};
                for (let [P, B] of Object.entries(x)) A[P] = n(B, O);
                return A
            } else if (h(x)) {
                let A = [];
                for (let P of x) A.push(n(P, O));
                return A
            } else return O(x)
        }
        e.mapLeaves = n;

        function i(x, O, A) {
            var G, J;
            if (x === void 0 && (x = null), O === void 0 && (O = null), x === null && O === null) return 0;
            if (x === null) return -1;
            if (O === null) return 1;
            let P = r(x),
                B = r(O);
            if (P === void 0 && B === void 0) return 0;
            if (P === void 0) return -1;
            if (B === void 0) return 1;
            if (P.type != B.type) return P.type.localeCompare(B.type);
            if (P.value === B.value) return 0;
            switch (P.type) {
                case "string":
                    return P.value.localeCompare(B.value);
                case "number":
                    return P.value < B.value ? -1 : P.value == B.value ? 0 : 1;
                case "null":
                    return 0;
                case "boolean":
                    return P.value == B.value ? 0 : P.value ? 1 : -1;
                case "link":
                    let Q = P.value,
                        oe = B.value,
                        te = A != null ? A : N => N,
                        re = te(Q.path).localeCompare(te(oe.path));
                    if (re != 0) return re;
                    let ne = Q.type.localeCompare(oe.type);
                    return ne != 0 ? ne : Q.subpath && !oe.subpath ? 1 : !Q.subpath && oe.subpath ? -1 : !Q.subpath && !oe.subpath ? 0 : ((G = Q.subpath) != null ? G : "").localeCompare((J = oe.subpath) != null ? J : "");
                case "date":
                    return P.value < B.value ? -1 : P.value.equals(B.value) ? 0 : 1;
                case "duration":
                    return P.value < B.value ? -1 : P.value.equals(B.value) ? 0 : 1;
                case "array":
                    let be = P.value,
                        pe = B.value;
                    for (let N = 0; N < Math.min(be.length, pe.length); N++) {
                        let Ze = i(be[N], pe[N]);
                        if (Ze != 0) return Ze
                    }
                    return be.length - pe.length;
                case "object":
                    let De = P.value,
                        Ce = B.value,
                        U = Array.from(Object.keys(De)),
                        Je = Array.from(Object.keys(Ce));
                    U.sort(), Je.sort();
                    let it = i(U, Je);
                    if (it != 0) return it;
                    for (let N of U) {
                        let Ze = i(De[N], Ce[N]);
                        if (Ze != 0) return Ze
                    }
                    return 0;
                case "widget":
                case "html":
                case "function":
                    return 0
            }
        }
        e.compareValue = i;

        function a(x) {
            var O;
            return (O = r(x)) == null ? void 0 : O.type
        }
        e.typeOf = a;

        function o(x) {
            let O = r(x);
            if (!O) return !1;
            switch (O.type) {
                case "number":
                    return O.value != 0;
                case "string":
                    return O.value.length > 0;
                case "boolean":
                    return O.value;
                case "link":
                    return !!O.value.path;
                case "date":
                    return O.value.toMillis() != 0;
                case "duration":
                    return O.value.as("seconds") != 0;
                case "object":
                    return Object.keys(O.value).length > 0;
                case "array":
                    return O.value.length > 0;
                case "null":
                    return !1;
                case "html":
                case "widget":
                case "function":
                    return !0
            }
        }
        e.isTruthy = o;

        function s(x) {
            if (x == null) return x;
            if (e.isArray(x)) return [].concat(x.map(O => s(O)));
            if (e.isObject(x)) {
                let O = {};
                for (let [A, P] of Object.entries(x)) O[A] = s(P);
                return O
            } else return x
        }
        e.deepCopy = s;

        function u(x) {
            return typeof x == "string"
        }
        e.isString = u;

        function l(x) {
            return typeof x == "number"
        }
        e.isNumber = l;

        function c(x) {
            return x instanceof mt
        }
        e.isDate = c;

        function d(x) {
            return x instanceof He
        }
        e.isDuration = d;

        function m(x) {
            return x == null
        }
        e.isNull = m;

        function h(x) {
            return Array.isArray(x)
        }
        e.isArray = h;

        function g(x) {
            return typeof x == "boolean"
        }
        e.isBoolean = g;

        function y(x) {
            return x instanceof xc
        }
        e.isLink = y;

        function v(x) {
            return x instanceof Tl
        }
        e.isWidget = v;

        function D(x) {
            return typeof HTMLElement != "undefined" ? x instanceof HTMLElement : !1
        }
        e.isHtml = D;

        function I(x) {
            return typeof x == "object" && !D(x) && !v(x) && !h(x) && !d(x) && !c(x) && !y(x) && x !== void 0 && !m(x)
        }
        e.isObject = I;

        function C(x) {
            return typeof x == "function"
        }
        e.isFunction = C
    })(Ml || (Ml = {}));
    var L0;
    (function(e) {
        function t(i) {
            return Ml.isObject(i) && Object.keys(i).length == 2 && "key" in i && "rows" in i
        }
        e.isElementGroup = t;

        function r(i) {
            for (let a of i)
                if (!t(a)) return !1;
            return !0
        }
        e.isGrouping = r;

        function n(i) {
            if (r(i)) {
                let a = 0;
                for (let o of i) a += n(o.rows);
                return a
            } else return i.length
        }
        e.count = n
    })(L0 || (L0 = {}));
    var xc = class e {
            constructor(t) {
                ur(this, "path");
                ur(this, "display");
                ur(this, "subpath");
                ur(this, "embed");
                ur(this, "type");
                Object.assign(this, t)
            }
            static file(t, r = !1, n) {
                return new e({
                    path: t,
                    embed: r,
                    display: n,
                    subpath: void 0,
                    type: "file"
                })
            }
            static infer(t, r = !1, n) {
                if (t.includes("#^")) {
                    let i = t.split("#^");
                    return e.block(i[0], i[1], r, n)
                } else if (t.includes("#")) {
                    let i = t.split("#");
                    return e.header(i[0], i[1], r, n)
                } else return e.file(t, r, n)
            }
            static header(t, r, n, i) {
                return new e({
                    path: t,
                    embed: n,
                    display: i,
                    subpath: $P(r),
                    type: "header"
                })
            }
            static block(t, r, n, i) {
                return new e({
                    path: t,
                    embed: n,
                    display: i,
                    subpath: r,
                    type: "block"
                })
            }
            static fromObject(t) {
                return new e(t)
            }
            equals(t) {
                return t == null || t == null ? !1 : this.path == t.path && this.type == t.type && this.subpath == t.subpath
            }
            toString() {
                return this.markdown()
            }
            toObject() {
                return {
                    path: this.path,
                    type: this.type,
                    subpath: this.subpath,
                    display: this.display,
                    embed: this.embed
                }
            }
            withPath(t) {
                return new e(Object.assign({}, this, {
                    path: t
                }))
            }
            withDisplay(t) {
                return new e(Object.assign({}, this, {
                    display: t
                }))
            }
            withHeader(t) {
                return e.header(this.path, t, this.embed, this.display)
            }
            toFile() {
                return e.file(this.path, this.embed, this.display)
            }
            toEmbed() {
                if (this.embed) return this;
                {
                    let t = new e(this);
                    return t.embed = !0, t
                }
            }
            fromEmbed() {
                if (this.embed) {
                    let t = new e(this);
                    return t.embed = !1, t
                } else return this
            }
            markdown() {
                let t = (this.embed ? "!" : "") + "[[" + this.obsidianLink();
                return this.display ? t += "|" + this.display : (t += "|" + O0(this.path), (this.type == "header" || this.type == "block") && (t += " > " + this.subpath)), t += "]]", t
            }
            obsidianLink() {
                var r, n;
                let t = this.path.replaceAll("|", "\\|");
                return this.type == "header" ? t + "#" + ((r = this.subpath) == null ? void 0 : r.replaceAll("|", "\\|")) : this.type == "block" ? t + "#^" + ((n = this.subpath) == null ? void 0 : n.replaceAll("|", "\\|")) : t
            }
            fileName() {
                return O0(this.path).replace(".md", "")
            }
        },
        Tl = class {
            constructor(t) {
                ur(this, "$widget");
                this.$widget = t
            }
        },
        _m = class extends Tl {
            constructor(r, n) {
                super("dataview:list-pair");
                ur(this, "key");
                ur(this, "value");
                this.key = r, this.value = n
            }
            markdown() {
                return `${Ml.toString(this.key)}: ${Ml.toString(this.value)}`
            }
        },
        Mm = class extends Tl {
            constructor(r, n) {
                super("dataview:external-link");
                ur(this, "url");
                ur(this, "display");
                this.url = r, this.display = n
            }
            markdown() {
                var r;
                return `[${(r=this.display)!=null?r:this.url}](${this.url})`
            }
        },
        P0;
    (function(e) {
        function t(o, s) {
            return new _m(o, s)
        }
        e.listPair = t;

        function r(o, s) {
            return new Mm(o, s)
        }
        e.externalLink = r;

        function n(o) {
            return o.$widget === "dataview:list-pair"
        }
        e.isListPair = n;

        function i(o) {
            return o.$widget === "dataview:external-link"
        }
        e.isExternalLink = i;

        function a(o) {
            return n(o) || i(o)
        }
        e.isBuiltin = a
    })(P0 || (P0 = {}));
    var fn;
    (function(e) {
        function t(m) {
            return {
                type: "variable",
                name: m
            }
        }
        e.variable = t;

        function r(m) {
            return {
                type: "literal",
                value: m
            }
        }
        e.literal = r;

        function n(m, h, g) {
            return {
                type: "binaryop",
                left: m,
                op: h,
                right: g
            }
        }
        e.binaryOp = n;

        function i(m, h) {
            return {
                type: "index",
                object: m,
                index: h
            }
        }
        e.index = i;

        function a(m) {
            let h = m.split("."),
                g = e.variable(h[0]);
            for (let y = 1; y < h.length; y++) g = e.index(g, e.literal(h[y]));
            return g
        }
        e.indexVariable = a;

        function o(m, h) {
            return {
                type: "lambda",
                arguments: m,
                value: h
            }
        }
        e.lambda = o;

        function s(m, h) {
            return {
                type: "function",
                func: m,
                arguments: h
            }
        }
        e.func = s;

        function u(m) {
            return {
                type: "list",
                values: m
            }
        }
        e.list = u;

        function l(m) {
            return {
                type: "object",
                values: m
            }
        }
        e.object = l;

        function c(m) {
            return {
                type: "negated",
                child: m
            }
        }
        e.negate = c;

        function d(m) {
            return m == "<=" || m == "<" || m == ">" || m == ">=" || m == "!=" || m == "="
        }
        e.isCompareOp = d, e.NULL = e.literal(null)
    })(fn || (fn = {}));
    var Si;
    (function(e) {
        function t(c) {
            return {
                type: "tag",
                tag: c
            }
        }
        e.tag = t;

        function r(c) {
            return {
                type: "csv",
                path: c
            }
        }
        e.csv = r;

        function n(c) {
            return {
                type: "folder",
                folder: c
            }
        }
        e.folder = n;

        function i(c, d) {
            return {
                type: "link",
                file: c,
                direction: d ? "incoming" : "outgoing"
            }
        }
        e.link = i;

        function a(c, d, m) {
            return {
                type: "binaryop",
                left: c,
                op: d,
                right: m
            }
        }
        e.binaryOp = a;

        function o(c, d) {
            return {
                type: "binaryop",
                left: c,
                op: "&",
                right: d
            }
        }
        e.and = o;

        function s(c, d) {
            return {
                type: "binaryop",
                left: c,
                op: "|",
                right: d
            }
        }
        e.or = s;

        function u(c) {
            return {
                type: "negate",
                child: c
            }
        }
        e.negate = u;

        function l() {
            return {
                type: "empty"
            }
        }
        e.empty = l
    })(Si || (Si = {}));
    var N0 = new RegExp(Bm(), ""),
        Tm = {
            year: He.fromObject({
                years: 1
            }),
            years: He.fromObject({
                years: 1
            }),
            yr: He.fromObject({
                years: 1
            }),
            yrs: He.fromObject({
                years: 1
            }),
            month: He.fromObject({
                months: 1
            }),
            months: He.fromObject({
                months: 1
            }),
            mo: He.fromObject({
                months: 1
            }),
            mos: He.fromObject({
                months: 1
            }),
            week: He.fromObject({
                weeks: 1
            }),
            weeks: He.fromObject({
                weeks: 1
            }),
            wk: He.fromObject({
                weeks: 1
            }),
            wks: He.fromObject({
                weeks: 1
            }),
            w: He.fromObject({
                weeks: 1
            }),
            day: He.fromObject({
                days: 1
            }),
            days: He.fromObject({
                days: 1
            }),
            d: He.fromObject({
                days: 1
            }),
            hour: He.fromObject({
                hours: 1
            }),
            hours: He.fromObject({
                hours: 1
            }),
            hr: He.fromObject({
                hours: 1
            }),
            hrs: He.fromObject({
                hours: 1
            }),
            h: He.fromObject({
                hours: 1
            }),
            minute: He.fromObject({
                minutes: 1
            }),
            minutes: He.fromObject({
                minutes: 1
            }),
            min: He.fromObject({
                minutes: 1
            }),
            mins: He.fromObject({
                minutes: 1
            }),
            m: He.fromObject({
                minutes: 1
            }),
            second: He.fromObject({
                seconds: 1
            }),
            seconds: He.fromObject({
                seconds: 1
            }),
            sec: He.fromObject({
                seconds: 1
            }),
            secs: He.fromObject({
                seconds: 1
            }),
            s: He.fromObject({
                seconds: 1
            })
        },
        Fm = {
            now: () => mt.local(),
            today: () => mt.local().startOf("day"),
            yesterday: () => mt.local().startOf("day").minus(He.fromObject({
                days: 1
            })),
            tomorrow: () => mt.local().startOf("day").plus(He.fromObject({
                days: 1
            })),
            sow: () => mt.local().startOf("week"),
            "start-of-week": () => mt.local().startOf("week"),
            eow: () => mt.local().endOf("week"),
            "end-of-week": () => mt.local().endOf("week"),
            soy: () => mt.local().startOf("year"),
            "start-of-year": () => mt.local().startOf("year"),
            eoy: () => mt.local().endOf("year"),
            "end-of-year": () => mt.local().endOf("year"),
            som: () => mt.local().startOf("month"),
            "start-of-month": () => mt.local().startOf("month"),
            eom: () => mt.local().endOf("month"),
            "end-of-month": () => mt.local().endOf("month")
        },
        Im = ["FROM", "WHERE", "LIMIT", "GROUP", "FLATTEN"];

    function WP(e) {
        let t = -1;
        for (;
            (t = e.indexOf("|", t + 1)) >= 0;)
            if (!(t > 0 && e[t - 1] == "\\")) return [e.substring(0, t).replace(/\\\|/g, "|"), e.substring(t + 1)];
        return [e.replace(/\\\|/g, "|"), void 0]
    }

    function YP(e) {
        let [t, r] = WP(e);
        return xc.infer(t, !1, r)
    }

    function kl(e, t, r) {
        return W.seqMap(e, W.seq(W.optWhitespace, t, W.optWhitespace, e).many(), (n, i) => {
            if (i.length == 0) return n;
            let a = r(n, i[0][1], i[0][3]);
            for (let o = 1; o < i.length; o++) a = r(a, i[o][1], i[o][3]);
            return a
        })
    }

    function zP(e, ...t) {
        return W.custom((r, n) => (i, a) => {
            let o = e._(i, a);
            if (!o.status) return o;
            for (let s of t) {
                let u = s(o.value)._(i, o.index);
                if (!u.status) return o;
                o = u
            }
            return o
        })
    }
    var ai = W.createLanguage({
        number: e => W.regexp(/-?[0-9]+(\.[0-9]+)?/).map(t => Number.parseFloat(t)).desc("number"),
        string: e => W.string('"').then(W.alt(e.escapeCharacter, W.noneOf('"\\')).atLeast(0).map(t => t.join(""))).skip(W.string('"')).desc("string"),
        escapeCharacter: e => W.string("\\").then(W.any).map(t => t === '"' ? '"' : t === "\\" ? "\\" : "\\" + t),
        bool: e => W.regexp(/true|false|True|False/).map(t => t.toLowerCase() == "true").desc("boolean ('true' or 'false')"),
        tag: e => W.seqMap(W.string("#"), W.alt(W.regexp(/[^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~\[\]\\\s]/).desc("text")).many(), (t, r) => t + r.join("")).desc("tag ('#hello/stuff')"),
        identifier: e => W.seqMap(W.alt(W.regexp(/\p{Letter}/u), W.regexp(N0).desc("text")), W.alt(W.regexp(/[0-9\p{Letter}_-]/u), W.regexp(N0).desc("text")).many(), (t, r) => t + r.join("")).desc("variable identifier"),
        link: e => W.regexp(/\[\[([^\[\]]*?)\]\]/u, 1).map(t => YP(t)).desc("file link"),
        embedLink: e => W.seqMap(W.string("!").atMost(1), e.link, (t, r) => (t.length > 0 && (r.embed = !0), r)).desc("file link"),
        binaryPlusMinus: e => W.regexp(/\+|-/).map(t => t).desc("'+' or '-'"),
        binaryMulDiv: e => W.regexp(/\*|\/|%/).map(t => t).desc("'*' or '/' or '%'"),
        binaryCompareOp: e => W.regexp(/>=|<=|!=|>|<|=/).map(t => t).desc("'>=' or '<=' or '!=' or '=' or '>' or '<'"),
        binaryBooleanOp: e => W.regexp(/and|or|&|\|/i).map(t => t.toLowerCase() == "and" ? "&" : t.toLowerCase() == "or" ? "|" : t).desc("'and' or 'or'"),
        rootDate: e => W.seqMap(W.regexp(/\d{4}/), W.string("-"), W.regexp(/\d{2}/), (t, r, n) => mt.fromObject({
            year: Number.parseInt(t),
            month: Number.parseInt(n)
        })).desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
        dateShorthand: e => W.alt(...Object.keys(Fm).sort((t, r) => r.length - t.length).map(W.string)),
        date: e => zP(e.rootDate, t => W.seqMap(W.string("-"), W.regexp(/\d{2}/), (r, n) => t.set({
            day: Number.parseInt(n)
        })), t => W.seqMap(W.string("T"), W.regexp(/\d{2}/), (r, n) => t.set({
            hour: Number.parseInt(n)
        })), t => W.seqMap(W.string(":"), W.regexp(/\d{2}/), (r, n) => t.set({
            minute: Number.parseInt(n)
        })), t => W.seqMap(W.string(":"), W.regexp(/\d{2}/), (r, n) => t.set({
            second: Number.parseInt(n)
        })), t => W.alt(W.seqMap(W.string("."), W.regexp(/\d{3}/), (r, n) => t.set({
            millisecond: Number.parseInt(n)
        })), W.succeed(t)), t => W.alt(W.seqMap(W.string("+").or(W.string("-")), W.regexp(/\d{1,2}(:\d{2})?/), (r, n) => t.setZone("UTC" + r + n, {
            keepLocalTime: !0
        })), W.seqMap(W.string("Z"), () => t.setZone("utc", {
            keepLocalTime: !0
        })), W.seqMap(W.string("["), W.regexp(/[0-9A-Za-z+-\/]+/u), W.string("]"), (r, n, i) => t.setZone(n, {
            keepLocalTime: !0
        })))).assert(t => t.isValid, "valid date").desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
        datePlus: e => W.alt(e.dateShorthand.map(t => Fm[t]()), e.date).desc("date in format YYYY-MM[-DDTHH-MM-SS.MS] or in shorthand"),
        durationType: e => W.alt(...Object.keys(Tm).sort((t, r) => r.length - t.length).map(W.string)),
        duration: e => W.seqMap(e.number, W.optWhitespace, e.durationType, (t, r, n) => Tm[n].mapUnits(i => i * t)).sepBy1(W.string(",").trim(W.optWhitespace).or(W.optWhitespace)).map(t => t.reduce((r, n) => r.plus(n))).desc("duration like 4hr2min"),
        rawNull: e => W.string("null"),
        tagSource: e => e.tag.map(t => Si.tag(t)),
        csvSource: e => W.seqMap(W.string("csv(").skip(W.optWhitespace), e.string, W.string(")"), (t, r, n) => Si.csv(r)),
        linkIncomingSource: e => e.link.map(t => Si.link(t.path, !0)),
        linkOutgoingSource: e => W.seqMap(W.string("outgoing(").skip(W.optWhitespace), e.link, W.string(")"), (t, r, n) => Si.link(r.path, !1)),
        folderSource: e => e.string.map(t => Si.folder(t)),
        parensSource: e => W.seqMap(W.string("("), W.optWhitespace, e.source, W.optWhitespace, W.string(")"), (t, r, n, i, a) => n),
        negateSource: e => W.seqMap(W.alt(W.string("-"), W.string("!")), e.atomSource, (t, r) => Si.negate(r)),
        atomSource: e => W.alt(e.parensSource, e.negateSource, e.linkOutgoingSource, e.linkIncomingSource, e.folderSource, e.tagSource, e.csvSource),
        binaryOpSource: e => kl(e.atomSource, e.binaryBooleanOp.map(t => t), Si.binaryOp),
        source: e => e.binaryOpSource,
        variableField: e => e.identifier.chain(t => Im.includes(t.toUpperCase()) ? W.fail("Variable fields cannot be a keyword (" + Im.join(" or ") + ")") : W.succeed(fn.variable(t))).desc("variable"),
        numberField: e => e.number.map(t => fn.literal(t)).desc("number"),
        stringField: e => e.string.map(t => fn.literal(t)).desc("string"),
        boolField: e => e.bool.map(t => fn.literal(t)).desc("boolean"),
        dateField: e => W.seqMap(W.string("date("), W.optWhitespace, e.datePlus, W.optWhitespace, W.string(")"), (t, r, n, i, a) => fn.literal(n)).desc("date"),
        durationField: e => W.seqMap(W.string("dur("), W.optWhitespace, e.duration, W.optWhitespace, W.string(")"), (t, r, n, i, a) => fn.literal(n)).desc("duration"),
        nullField: e => e.rawNull.map(t => fn.NULL),
        linkField: e => e.link.map(t => fn.literal(t)),
        listField: e => e.field.sepBy(W.string(",").trim(W.optWhitespace)).wrap(W.string("[").skip(W.optWhitespace), W.optWhitespace.then(W.string("]"))).map(t => fn.list(t)).desc("list ('[1, 2, 3]')"),
        objectField: e => W.seqMap(e.identifier.or(e.string), W.string(":").trim(W.optWhitespace), e.field, (t, r, n) => ({
            name: t,
            value: n
        })).sepBy(W.string(",").trim(W.optWhitespace)).wrap(W.string("{").skip(W.optWhitespace), W.optWhitespace.then(W.string("}"))).map(t => {
            let r = {};
            for (let n of t) r[n.name] = n.value;
            return fn.object(r)
        }).desc("object ('{ a: 1, b: 2 }')"),
        atomInlineField: e => W.alt(e.date, e.duration.map(t => NS(t)), e.string, e.tag, e.embedLink, e.bool, e.number, e.rawNull),
        inlineFieldList: e => e.atomInlineField.sepBy(W.string(",").trim(W.optWhitespace).lookahead(e.atomInlineField)),
        inlineField: e => W.alt(W.seqMap(e.atomInlineField, W.string(",").trim(W.optWhitespace), e.inlineFieldList, (t, r, n) => [t].concat(n)), e.atomInlineField),
        atomField: e => W.alt(e.embedLink.map(t => fn.literal(t)), e.negatedField, e.linkField, e.listField, e.objectField, e.lambdaField, e.parensField, e.boolField, e.numberField, e.stringField, e.dateField, e.durationField, e.nullField, e.variableField),
        indexField: e => W.seqMap(e.atomField, W.alt(e.dotPostfix, e.indexPostfix, e.functionPostfix).many(), (t, r) => {
            let n = t;
            for (let i of r) switch (i.type) {
                case "dot":
                    n = fn.index(n, fn.literal(i.field));
                    break;
                case "index":
                    n = fn.index(n, i.field);
                    break;
                case "function":
                    n = fn.func(n, i.fields);
                    break
            }
            return n
        }),
        negatedField: e => W.seqMap(W.string("!"), e.indexField, (t, r) => fn.negate(r)).desc("negated field"),
        parensField: e => W.seqMap(W.string("("), W.optWhitespace, e.field, W.optWhitespace, W.string(")"), (t, r, n, i, a) => n),
        lambdaField: e => W.seqMap(e.identifier.sepBy(W.string(",").trim(W.optWhitespace)).wrap(W.string("(").trim(W.optWhitespace), W.string(")").trim(W.optWhitespace)), W.string("=>").trim(W.optWhitespace), e.field, (t, r, n) => ({
            type: "lambda",
            arguments: t,
            value: n
        })),
        dotPostfix: e => W.seqMap(W.string("."), e.identifier, (t, r) => ({
            type: "dot",
            field: r
        })),
        indexPostfix: e => W.seqMap(W.string("["), W.optWhitespace, e.field, W.optWhitespace, W.string("]"), (t, r, n, i, a) => ({
            type: "index",
            field: n
        })),
        functionPostfix: e => W.seqMap(W.string("("), W.optWhitespace, e.field.sepBy(W.string(",").trim(W.optWhitespace)), W.optWhitespace, W.string(")"), (t, r, n, i, a) => ({
            type: "function",
            fields: n
        })),
        binaryMulDivField: e => kl(e.indexField, e.binaryMulDiv, fn.binaryOp),
        binaryPlusMinusField: e => kl(e.binaryMulDivField, e.binaryPlusMinus, fn.binaryOp),
        binaryCompareField: e => kl(e.binaryPlusMinusField, e.binaryCompareOp, fn.binaryOp),
        binaryBooleanField: e => kl(e.binaryCompareField, e.binaryBooleanOp, fn.binaryOp),
        binaryOpField: e => e.binaryBooleanField,
        field: e => e.binaryOpField
    });

    function KP(e) {
        try {
            return Ec.success(ai.field.tryParse(e))
        } catch (t) {
            return Ec.failure("" + t)
        }
    }
    var Cc;
    (function(e) {
        function t(n, i) {
            return {
                name: n,
                field: i
            }
        }
        e.named = t;

        function r(n, i) {
            return {
                field: n,
                direction: i
            }
        }
        e.sortBy = r
    })(Cc || (Cc = {}));

    function jP(e) {
        return W.custom((t, r) => (n, i) => {
            let a = e._(n, i);
            return a.status ? Object.assign({}, a, {
                value: [a.value, n.substring(i, a.index)]
            }) : a
        })
    }

    function qP(e) {
        return e.split(/[\r\n]+/).map(t => t.trim()).join("")
    }

    function R0(e, t) {
        return W.eof.map(e).or(W.whitespace.then(t))
    }
    var RS = W.createLanguage({
            queryType: e => W.alt(W.regexp(/TABLE|LIST|TASK|CALENDAR/i)).map(t => t.toLowerCase()).desc("query type ('TABLE', 'LIST', 'TASK', or 'CALENDAR')"),
            explicitNamedField: e => W.seqMap(ai.field.skip(W.whitespace), W.regexp(/AS/i).skip(W.whitespace), ai.identifier.or(ai.string), (t, r, n) => Cc.named(n, t)),
            comment: () => W.Parser((e, t) => {
                let r = e.substring(t);
                if (!r.startsWith("//")) return W.makeFailure(t, "Not a comment");
                r = r.split(`
`)[0];
                let n = r.substring(2).trim();
                return W.makeSuccess(t + r.length, n)
            }),
            namedField: e => W.alt(e.explicitNamedField, jP(ai.field).map(([t, r]) => Cc.named(qP(r), t))),
            sortField: e => W.seqMap(ai.field.skip(W.optWhitespace), W.regexp(/ASCENDING|DESCENDING|ASC|DESC/i).atMost(1), (t, r) => {
                let n = r.length == 0 ? "ascending" : r[0].toLowerCase();
                return n == "desc" && (n = "descending"), n == "asc" && (n = "ascending"), {
                    field: t,
                    direction: n
                }
            }),
            headerClause: e => e.queryType.chain(t => {
                switch (t) {
                    case "table":
                        return R0(() => ({
                            type: t,
                            fields: [],
                            showId: !0
                        }), W.seqMap(W.regexp(/WITHOUT\s+ID/i).skip(W.optWhitespace).atMost(1), W.sepBy(e.namedField, W.string(",").trim(W.optWhitespace)), (r, n) => ({
                            type: t,
                            fields: n,
                            showId: r.length == 0
                        })));
                    case "list":
                        return R0(() => ({
                            type: t,
                            format: void 0,
                            showId: !0
                        }), W.seqMap(W.regexp(/WITHOUT\s+ID/i).skip(W.optWhitespace).atMost(1), ai.field.atMost(1), (r, n) => ({
                            type: t,
                            format: n.length == 1 ? n[0] : void 0,
                            showId: r.length == 0
                        })));
                    case "task":
                        return W.succeed({
                            type: t
                        });
                    case "calendar":
                        return W.whitespace.then(W.seqMap(e.namedField, r => ({
                            type: t,
                            showId: !0,
                            field: r
                        })));
                    default:
                        return W.fail(`Unrecognized query type '${t}'`)
                }
            }).desc("TABLE or LIST or TASK or CALENDAR"),
            fromClause: e => W.seqMap(W.regexp(/FROM/i), W.whitespace, ai.source, (t, r, n) => n),
            whereClause: e => W.seqMap(W.regexp(/WHERE/i), W.whitespace, ai.field, (t, r, n) => ({
                type: "where",
                clause: n
            })).desc("WHERE <expression>"),
            sortByClause: e => W.seqMap(W.regexp(/SORT/i), W.whitespace, e.sortField.sepBy1(W.string(",").trim(W.optWhitespace)), (t, r, n) => ({
                type: "sort",
                fields: n
            })).desc("SORT field [ASC/DESC]"),
            limitClause: e => W.seqMap(W.regexp(/LIMIT/i), W.whitespace, ai.field, (t, r, n) => ({
                type: "limit",
                amount: n
            })).desc("LIMIT <value>"),
            flattenClause: e => W.seqMap(W.regexp(/FLATTEN/i).skip(W.whitespace), e.namedField, (t, r) => ({
                type: "flatten",
                field: r
            })).desc("FLATTEN <value> [AS <name>]"),
            groupByClause: e => W.seqMap(W.regexp(/GROUP BY/i).skip(W.whitespace), e.namedField, (t, r) => ({
                type: "group",
                field: r
            })).desc("GROUP BY <value> [AS <name>]"),
            clause: e => W.alt(e.fromClause, e.whereClause, e.sortByClause, e.limitClause, e.groupByClause, e.flattenClause),
            query: e => W.seqMap(e.headerClause.trim(dm), e.fromClause.trim(dm).atMost(1), e.clause.trim(dm).many(), (t, r, n) => ({
                header: t,
                source: r.length == 0 ? Si.folder("") : r[0],
                operations: n,
                settings: Hm
            }))
        }),
        dm = W.alt(W.whitespace, RS.comment).many().map(e => e.join("")),
        GP = e => {
            var t;
            return e ? (t = e.plugins.plugins.dataview) == null ? void 0 : t.api : window.DataviewAPI
        },
        JP = e => e.plugins.enabledPlugins.has("dataview");
    Ei.DATE_SHORTHANDS = Fm;
    Ei.DURATION_TYPES = Tm;
    Ei.EXPRESSION = ai;
    Ei.KEYWORDS = Im;
    Ei.QUERY_LANGUAGE = RS;
    Ei.getAPI = GP;
    Ei.isPluginEnabled = JP;
    Ei.parseField = KP
});
var HS = wn((Vm, $m) => {
    (function(e, t) {
        typeof Vm == "object" && typeof $m != "undefined" ? $m.exports = t() : typeof define == "function" && define.amd ? define(t) : e.Mark = t()
    })(Vm, function() {
        "use strict";
        var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
                return typeof s
            } : function(s) {
                return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
            },
            t = function(s, u) {
                if (!(s instanceof u)) throw new TypeError("Cannot call a class as a function")
            },
            r = function() {
                function s(u, l) {
                    for (var c = 0; c < l.length; c++) {
                        var d = l[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(u, d.key, d)
                    }
                }
                return function(u, l, c) {
                    return l && s(u.prototype, l), c && s(u, c), u
                }
            }(),
            n = Object.assign || function(s) {
                for (var u = 1; u < arguments.length; u++) {
                    var l = arguments[u];
                    for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (s[c] = l[c])
                }
                return s
            },
            i = function() {
                function s(u) {
                    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                        c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
                        d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 5e3;
                    t(this, s), this.ctx = u, this.iframes = l, this.exclude = c, this.iframesTimeout = d
                }
                return r(s, [{
                    key: "getContexts",
                    value: function() {
                        var l = void 0,
                            c = [];
                        return typeof this.ctx == "undefined" || !this.ctx ? l = [] : NodeList.prototype.isPrototypeOf(this.ctx) ? l = Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? l = this.ctx : typeof this.ctx == "string" ? l = Array.prototype.slice.call(document.querySelectorAll(this.ctx)) : l = [this.ctx], l.forEach(function(d) {
                            var m = c.filter(function(h) {
                                return h.contains(d)
                            }).length > 0;
                            c.indexOf(d) === -1 && !m && c.push(d)
                        }), c
                    }
                }, {
                    key: "getIframeContents",
                    value: function(l, c) {
                        var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {},
                            m = void 0;
                        try {
                            var h = l.contentWindow;
                            if (m = h.document, !h || !m) throw new Error("iframe inaccessible")
                        } catch (g) {
                            d()
                        }
                        m && c(m)
                    }
                }, {
                    key: "isIframeBlank",
                    value: function(l) {
                        var c = "about:blank",
                            d = l.getAttribute("src").trim(),
                            m = l.contentWindow.location.href;
                        return m === c && d !== c && d
                    }
                }, {
                    key: "observeIframeLoad",
                    value: function(l, c, d) {
                        var m = this,
                            h = !1,
                            g = null,
                            y = function v() {
                                if (!h) {
                                    h = !0, activeWindow.clearTimeout(g);
                                    try {
                                        m.isIframeBlank(l) || (l.removeEventListener("load", v), m.getIframeContents(l, c, d))
                                    } catch (D) {
                                        d()
                                    }
                                }
                            };
                        l.addEventListener("load", y), g = activeWindow.setTimeout(y, this.iframesTimeout)
                    }
                }, {
                    key: "onIframeReady",
                    value: function(l, c, d) {
                        try {
                            l.contentWindow.document.readyState === "complete" ? this.isIframeBlank(l) ? this.observeIframeLoad(l, c, d) : this.getIframeContents(l, c, d) : this.observeIframeLoad(l, c, d)
                        } catch (m) {
                            d()
                        }
                    }
                }, {
                    key: "waitForIframes",
                    value: function(l, c) {
                        var d = this,
                            m = 0;
                        this.forEachIframe(l, function() {
                            return !0
                        }, function(h) {
                            m++, d.waitForIframes(h.querySelector("html"), function() {
                                --m || c()
                            })
                        }, function(h) {
                            h || c()
                        })
                    }
                }, {
                    key: "forEachIframe",
                    value: function(l, c, d) {
                        var m = this,
                            h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {},
                            g = l.querySelectorAll("iframe"),
                            y = g.length,
                            v = 0;
                        g = Array.prototype.slice.call(g);
                        var D = function() {
                            --y <= 0 && h(v)
                        };
                        y || D(), g.forEach(function(I) {
                            s.matches(I, m.exclude) ? D() : m.onIframeReady(I, function(C) {
                                c(I) && (v++, d(C)), D()
                            }, D)
                        })
                    }
                }, {
                    key: "createIterator",
                    value: function(l, c, d) {
                        return document.createNodeIterator(l, c, d, !1)
                    }
                }, {
                    key: "createInstanceOnIframe",
                    value: function(l) {
                        return new s(l.querySelector("html"), this.iframes)
                    }
                }, {
                    key: "compareNodeIframe",
                    value: function(l, c, d) {
                        var m = l.compareDocumentPosition(d),
                            h = Node.DOCUMENT_POSITION_PRECEDING;
                        if (m & h)
                            if (c !== null) {
                                var g = c.compareDocumentPosition(d),
                                    y = Node.DOCUMENT_POSITION_FOLLOWING;
                                if (g & y) return !0
                            } else return !0;
                        return !1
                    }
                }, {
                    key: "getIteratorNode",
                    value: function(l) {
                        var c = l.previousNode(),
                            d = void 0;
                        return c === null ? d = l.nextNode() : d = l.nextNode() && l.nextNode(), {
                            prevNode: c,
                            node: d
                        }
                    }
                }, {
                    key: "checkIframeFilter",
                    value: function(l, c, d, m) {
                        var h = !1,
                            g = !1;
                        return m.forEach(function(y, v) {
                            y.val === d && (h = v, g = y.handled)
                        }), this.compareNodeIframe(l, c, d) ? (h === !1 && !g ? m.push({
                            val: d,
                            handled: !0
                        }) : h !== !1 && !g && (m[h].handled = !0), !0) : (h === !1 && m.push({
                            val: d,
                            handled: !1
                        }), !1)
                    }
                }, {
                    key: "handleOpenIframes",
                    value: function(l, c, d, m) {
                        var h = this;
                        l.forEach(function(g) {
                            g.handled || h.getIframeContents(g.val, function(y) {
                                h.createInstanceOnIframe(y).forEachNode(c, d, m)
                            })
                        })
                    }
                }, {
                    key: "iterateThroughNodes",
                    value: function(l, c, d, m, h) {
                        for (var g = this, y = this.createIterator(c, l, m), v = [], D = [], I = void 0, C = void 0, x = function() {
                                var A = g.getIteratorNode(y);
                                return C = A.prevNode, I = A.node, I
                            }; x();) this.iframes && this.forEachIframe(c, function(O) {
                            return g.checkIframeFilter(I, C, O, v)
                        }, function(O) {
                            g.createInstanceOnIframe(O).forEachNode(l, function(A) {
                                return D.push(A)
                            }, m)
                        }), D.push(I);
                        D.forEach(function(O) {
                            d(O)
                        }), this.iframes && this.handleOpenIframes(v, l, d, m), h()
                    }
                }, {
                    key: "forEachNode",
                    value: function(l, c, d) {
                        var m = this,
                            h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {},
                            g = this.getContexts(),
                            y = g.length;
                        y || h(), g.forEach(function(v) {
                            var D = function() {
                                m.iterateThroughNodes(l, v, c, d, function() {
                                    --y <= 0 && h()
                                })
                            };
                            m.iframes ? m.waitForIframes(v, D) : D()
                        })
                    }
                }], [{
                    key: "matches",
                    value: function(l, c) {
                        var d = typeof c == "string" ? [c] : c,
                            m = l.matches || l.matchesSelector || l.msMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.webkitMatchesSelector;
                        if (m) {
                            var h = !1;
                            return d.every(function(g) {
                                return m.call(l, g) ? (h = !0, !1) : !0
                            }), h
                        } else return !1
                    }
                }]), s
            }(),
            a = function() {
                function s(u) {
                    t(this, s), this.ctx = u, this.ie = !1;
                    var l = window.navigator.userAgent;
                    (l.indexOf("MSIE") > -1 || l.indexOf("Trident") > -1) && (this.ie = !0)
                }
                return r(s, [{
                    key: "log",
                    value: function(l) {
                        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "debug",
                            d = this.opt.log;
                        this.opt.debug && (typeof d == "undefined" ? "undefined" : e(d)) === "object" && typeof d[c] == "function" && d[c]("mark.js: " + l)
                    }
                }, {
                    key: "escapeStr",
                    value: function(l) {
                        return l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    }
                }, {
                    key: "createRegExp",
                    value: function(l) {
                        return this.opt.wildcards !== "disabled" && (l = this.setupWildcardsRegExp(l)), l = this.escapeStr(l), Object.keys(this.opt.synonyms).length && (l = this.createSynonymsRegExp(l)), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (l = this.setupIgnoreJoinersRegExp(l)), this.opt.diacritics && (l = this.createDiacriticsRegExp(l)), l = this.createMergedBlanksRegExp(l), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (l = this.createJoinersRegExp(l)), this.opt.wildcards !== "disabled" && (l = this.createWildcardsRegExp(l)), l = this.createAccuracyRegExp(l), l
                    }
                }, {
                    key: "createSynonymsRegExp",
                    value: function(l) {
                        var c = this.opt.synonyms,
                            d = this.opt.caseSensitive ? "" : "i",
                            m = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
                        for (var h in c)
                            if (c.hasOwnProperty(h)) {
                                var g = c[h],
                                    y = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(h) : this.escapeStr(h),
                                    v = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(g) : this.escapeStr(g);
                                y !== "" && v !== "" && (l = l.replace(new RegExp("(" + this.escapeStr(y) + "|" + this.escapeStr(v) + ")", "gm" + d), m + ("(" + this.processSynomyms(y) + "|") + (this.processSynomyms(v) + ")") + m))
                            } return l
                    }
                }, {
                    key: "processSynomyms",
                    value: function(l) {
                        return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (l = this.setupIgnoreJoinersRegExp(l)), l
                    }
                }, {
                    key: "setupWildcardsRegExp",
                    value: function(l) {
                        return l = l.replace(/(?:\\)*\?/g, function(c) {
                            return c.charAt(0) === "\\" ? "?" : ""
                        }), l.replace(/(?:\\)*\*/g, function(c) {
                            return c.charAt(0) === "\\" ? "*" : ""
                        })
                    }
                }, {
                    key: "createWildcardsRegExp",
                    value: function(l) {
                        var c = this.opt.wildcards === "withSpaces";
                        return l.replace(/\u0001/g, c ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, c ? "[\\S\\s]*?" : "\\S*")
                    }
                }, {
                    key: "setupIgnoreJoinersRegExp",
                    value: function(l) {
                        return l.replace(/[^(|)\\]/g, function(c, d, m) {
                            var h = m.charAt(d + 1);
                            return /[(|)\\]/.test(h) || h === "" ? c : c + "\0"
                        })
                    }
                }, {
                    key: "createJoinersRegExp",
                    value: function(l) {
                        var c = [],
                            d = this.opt.ignorePunctuation;
                        return Array.isArray(d) && d.length && c.push(this.escapeStr(d.join(""))), this.opt.ignoreJoiners && c.push("\\u00ad\\u200b\\u200c\\u200d"), c.length ? l.split(/\u0000+/).join("[" + c.join("") + "]*") : l
                    }
                }, {
                    key: "createDiacriticsRegExp",
                    value: function(l) {
                        var c = this.opt.caseSensitive ? "" : "i",
                            d = this.opt.caseSensitive ? ["a\xE0\xE1\u1EA3\xE3\u1EA1\u0103\u1EB1\u1EAF\u1EB3\u1EB5\u1EB7\xE2\u1EA7\u1EA5\u1EA9\u1EAB\u1EAD\xE4\xE5\u0101\u0105", "A\xC0\xC1\u1EA2\xC3\u1EA0\u0102\u1EB0\u1EAE\u1EB2\u1EB4\u1EB6\xC2\u1EA6\u1EA4\u1EA8\u1EAA\u1EAC\xC4\xC5\u0100\u0104", "c\xE7\u0107\u010D", "C\xC7\u0106\u010C", "d\u0111\u010F", "D\u0110\u010E", "e\xE8\xE9\u1EBB\u1EBD\u1EB9\xEA\u1EC1\u1EBF\u1EC3\u1EC5\u1EC7\xEB\u011B\u0113\u0119", "E\xC8\xC9\u1EBA\u1EBC\u1EB8\xCA\u1EC0\u1EBE\u1EC2\u1EC4\u1EC6\xCB\u011A\u0112\u0118", "i\xEC\xED\u1EC9\u0129\u1ECB\xEE\xEF\u012B", "I\xCC\xCD\u1EC8\u0128\u1ECA\xCE\xCF\u012A", "l\u0142", "L\u0141", "n\xF1\u0148\u0144", "N\xD1\u0147\u0143", "o\xF2\xF3\u1ECF\xF5\u1ECD\xF4\u1ED3\u1ED1\u1ED5\u1ED7\u1ED9\u01A1\u1EDF\u1EE1\u1EDB\u1EDD\u1EE3\xF6\xF8\u014D", "O\xD2\xD3\u1ECE\xD5\u1ECC\xD4\u1ED2\u1ED0\u1ED4\u1ED6\u1ED8\u01A0\u1EDE\u1EE0\u1EDA\u1EDC\u1EE2\xD6\xD8\u014C", "r\u0159", "R\u0158", "s\u0161\u015B\u0219\u015F", "S\u0160\u015A\u0218\u015E", "t\u0165\u021B\u0163", "T\u0164\u021A\u0162", "u\xF9\xFA\u1EE7\u0169\u1EE5\u01B0\u1EEB\u1EE9\u1EED\u1EEF\u1EF1\xFB\xFC\u016F\u016B", "U\xD9\xDA\u1EE6\u0168\u1EE4\u01AF\u1EEA\u1EE8\u1EEC\u1EEE\u1EF0\xDB\xDC\u016E\u016A", "y\xFD\u1EF3\u1EF7\u1EF9\u1EF5\xFF", "Y\xDD\u1EF2\u1EF6\u1EF8\u1EF4\u0178", "z\u017E\u017C\u017A", "Z\u017D\u017B\u0179"] : ["a\xE0\xE1\u1EA3\xE3\u1EA1\u0103\u1EB1\u1EAF\u1EB3\u1EB5\u1EB7\xE2\u1EA7\u1EA5\u1EA9\u1EAB\u1EAD\xE4\xE5\u0101\u0105A\xC0\xC1\u1EA2\xC3\u1EA0\u0102\u1EB0\u1EAE\u1EB2\u1EB4\u1EB6\xC2\u1EA6\u1EA4\u1EA8\u1EAA\u1EAC\xC4\xC5\u0100\u0104", "c\xE7\u0107\u010DC\xC7\u0106\u010C", "d\u0111\u010FD\u0110\u010E", "e\xE8\xE9\u1EBB\u1EBD\u1EB9\xEA\u1EC1\u1EBF\u1EC3\u1EC5\u1EC7\xEB\u011B\u0113\u0119E\xC8\xC9\u1EBA\u1EBC\u1EB8\xCA\u1EC0\u1EBE\u1EC2\u1EC4\u1EC6\xCB\u011A\u0112\u0118", "i\xEC\xED\u1EC9\u0129\u1ECB\xEE\xEF\u012BI\xCC\xCD\u1EC8\u0128\u1ECA\xCE\xCF\u012A", "l\u0142L\u0141", "n\xF1\u0148\u0144N\xD1\u0147\u0143", "o\xF2\xF3\u1ECF\xF5\u1ECD\xF4\u1ED3\u1ED1\u1ED5\u1ED7\u1ED9\u01A1\u1EDF\u1EE1\u1EDB\u1EDD\u1EE3\xF6\xF8\u014DO\xD2\xD3\u1ECE\xD5\u1ECC\xD4\u1ED2\u1ED0\u1ED4\u1ED6\u1ED8\u01A0\u1EDE\u1EE0\u1EDA\u1EDC\u1EE2\xD6\xD8\u014C", "r\u0159R\u0158", "s\u0161\u015B\u0219\u015FS\u0160\u015A\u0218\u015E", "t\u0165\u021B\u0163T\u0164\u021A\u0162", "u\xF9\xFA\u1EE7\u0169\u1EE5\u01B0\u1EEB\u1EE9\u1EED\u1EEF\u1EF1\xFB\xFC\u016F\u016BU\xD9\xDA\u1EE6\u0168\u1EE4\u01AF\u1EEA\u1EE8\u1EEC\u1EEE\u1EF0\xDB\xDC\u016E\u016A", "y\xFD\u1EF3\u1EF7\u1EF9\u1EF5\xFFY\xDD\u1EF2\u1EF6\u1EF8\u1EF4\u0178", "z\u017E\u017C\u017AZ\u017D\u017B\u0179"],
                            m = [];
                        return l.split("").forEach(function(h) {
                            d.every(function(g) {
                                if (g.indexOf(h) !== -1) {
                                    if (m.indexOf(g) > -1) return !1;
                                    l = l.replace(new RegExp("[" + g + "]", "gm" + c), "[" + g + "]"), m.push(g)
                                }
                                return !0
                            })
                        }), l
                    }
                }, {
                    key: "createMergedBlanksRegExp",
                    value: function(l) {
                        return l.replace(/[\s]+/gmi, "[\\s]+")
                    }
                }, {
                    key: "createAccuracyRegExp",
                    value: function(l) {
                        var c = this,
                            d = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\xA1\xBF",
                            m = this.opt.accuracy,
                            h = typeof m == "string" ? m : m.value,
                            g = typeof m == "string" ? [] : m.limiters,
                            y = "";
                        switch (g.forEach(function(v) {
                                y += "|" + c.escapeStr(v)
                            }), h) {
                            case "partially":
                            default:
                                return "()(" + l + ")";
                            case "complementary":
                                return y = "\\s" + (y || this.escapeStr(d)), "()([^" + y + "]*" + l + "[^" + y + "]*)";
                            case "exactly":
                                return "(^|\\s" + y + ")(" + l + ")(?=$|\\s" + y + ")"
                        }
                    }
                }, {
                    key: "getSeparatedKeywords",
                    value: function(l) {
                        var c = this,
                            d = [];
                        return l.forEach(function(m) {
                            c.opt.separateWordSearch ? m.split(" ").forEach(function(h) {
                                h.trim() && d.indexOf(h) === -1 && d.push(h)
                            }) : m.trim() && d.indexOf(m) === -1 && d.push(m)
                        }), {
                            keywords: d.sort(function(m, h) {
                                return h.length - m.length
                            }),
                            length: d.length
                        }
                    }
                }, {
                    key: "isNumeric",
                    value: function(l) {
                        return Number(parseFloat(l)) == l
                    }
                }, {
                    key: "checkRanges",
                    value: function(l) {
                        var c = this;
                        if (!Array.isArray(l) || Object.prototype.toString.call(l[0]) !== "[object Object]") return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(l), [];
                        var d = [],
                            m = 0;
                        return l.sort(function(h, g) {
                            return h.start - g.start
                        }).forEach(function(h) {
                            var g = c.callNoMatchOnInvalidRanges(h, m),
                                y = g.start,
                                v = g.end,
                                D = g.valid;
                            D && (h.start = y, h.length = v - y, d.push(h), m = v)
                        }), d
                    }
                }, {
                    key: "callNoMatchOnInvalidRanges",
                    value: function(l, c) {
                        var d = void 0,
                            m = void 0,
                            h = !1;
                        return l && typeof l.start != "undefined" ? (d = parseInt(l.start, 10), m = d + parseInt(l.length, 10), this.isNumeric(l.start) && this.isNumeric(l.length) && m - c > 0 && m - d > 0 ? h = !0 : (this.log("Ignoring invalid or overlapping range: " + ("" + JSON.stringify(l))), this.opt.noMatch(l))) : (this.log("Ignoring invalid range: " + JSON.stringify(l)), this.opt.noMatch(l)), {
                            start: d,
                            end: m,
                            valid: h
                        }
                    }
                }, {
                    key: "checkWhitespaceRanges",
                    value: function(l, c, d) {
                        var m = void 0,
                            h = !0,
                            g = d.length,
                            y = c - g,
                            v = parseInt(l.start, 10) - y;
                        return v = v > g ? g : v, m = v + parseInt(l.length, 10), m > g && (m = g, this.log("End range automatically set to the max value of " + g)), v < 0 || m - v < 0 || v > g || m > g ? (h = !1, this.log("Invalid range: " + JSON.stringify(l)), this.opt.noMatch(l)) : d.substring(v, m).replace(/\s+/g, "") === "" && (h = !1, this.log("Skipping whitespace only range: " + JSON.stringify(l)), this.opt.noMatch(l)), {
                            start: v,
                            end: m,
                            valid: h
                        }
                    }
                }, {
                    key: "getTextNodes",
                    value: function(l) {
                        var c = this,
                            d = "",
                            m = [];
                        this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function(h) {
                            m.push({
                                start: d.length,
                                end: (d += h.textContent).length,
                                node: h
                            })
                        }, function(h) {
                            return c.matchesExclude(h.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                        }, function() {
                            l({
                                value: d,
                                nodes: m
                            })
                        })
                    }
                }, {
                    key: "matchesExclude",
                    value: function(l) {
                        return i.matches(l, this.opt.exclude.concat(["script", "style", "title", "head", "html"]))
                    }
                }, {
                    key: "wrapRangeInTextNode",
                    value: function(l, c, d) {
                        var m = this.opt.element ? this.opt.element : "mark",
                            h = l.splitText(c),
                            g = h.splitText(d - c),
                            y = document.createElement(m);
                        return y.setAttribute("data-markjs", "true"), this.opt.className && y.setAttribute("class", this.opt.className), y.textContent = h.textContent, h.parentNode.replaceChild(y, h), g
                    }
                }, {
                    key: "wrapRangeInMappedTextNode",
                    value: function(l, c, d, m, h) {
                        var g = this;
                        l.nodes.every(function(y, v) {
                            var D = l.nodes[v + 1];
                            if (typeof D == "undefined" || D.start > c) {
                                if (!m(y.node)) return !1;
                                var I = c - y.start,
                                    C = (d > y.end ? y.end : d) - y.start,
                                    x = l.value.substr(0, y.start),
                                    O = l.value.substr(C + y.start);
                                if (y.node = g.wrapRangeInTextNode(y.node, I, C), l.value = x + O, l.nodes.forEach(function(A, P) {
                                        P >= v && (l.nodes[P].start > 0 && P !== v && (l.nodes[P].start -= C), l.nodes[P].end -= C)
                                    }), d -= C, h(y.node.previousSibling, y.start), d > y.end) c = y.end;
                                else return !1
                            }
                            return !0
                        })
                    }
                }, {
                    key: "wrapMatches",
                    value: function(l, c, d, m, h) {
                        var g = this,
                            y = c === 0 ? 0 : c + 1;
                        this.getTextNodes(function(v) {
                            v.nodes.forEach(function(D) {
                                D = D.node;
                                for (var I = void 0;
                                    (I = l.exec(D.textContent)) !== null && I[y] !== "";)
                                    if (d(I[y], D)) {
                                        var C = I.index;
                                        if (y !== 0)
                                            for (var x = 1; x < y; x++) C += I[x].length;
                                        D = g.wrapRangeInTextNode(D, C, C + I[y].length), m(D.previousSibling), l.lastIndex = 0
                                    }
                            }), h()
                        })
                    }
                }, {
                    key: "wrapMatchesAcrossElements",
                    value: function(l, c, d, m, h) {
                        var g = this,
                            y = c === 0 ? 0 : c + 1;
                        this.getTextNodes(function(v) {
                            for (var D = void 0;
                                (D = l.exec(v.value)) !== null && D[y] !== "";) {
                                var I = D.index;
                                if (y !== 0)
                                    for (var C = 1; C < y; C++) I += D[C].length;
                                var x = I + D[y].length;
                                g.wrapRangeInMappedTextNode(v, I, x, function(O) {
                                    return d(D[y], O)
                                }, function(O, A) {
                                    l.lastIndex = A, m(O)
                                })
                            }
                            h()
                        })
                    }
                }, {
                    key: "wrapRangeFromIndex",
                    value: function(l, c, d, m) {
                        var h = this;
                        this.getTextNodes(function(g) {
                            var y = g.value.length;
                            l.forEach(function(v, D) {
                                var I = h.checkWhitespaceRanges(v, y, g.value),
                                    C = I.start,
                                    x = I.end,
                                    O = I.valid;
                                O && h.wrapRangeInMappedTextNode(g, C, x, function(A) {
                                    return c(A, v, g.value.substring(C, x), D)
                                }, function(A) {
                                    d(A, v)
                                })
                            }), m()
                        })
                    }
                }, {
                    key: "unwrapMatches",
                    value: function(l) {
                        for (var c = l.parentNode, d = document.createDocumentFragment(); l.firstChild;) d.appendChild(l.removeChild(l.firstChild));
                        c.replaceChild(d, l), this.ie ? this.normalizeTextNode(c) : c.normalize()
                    }
                }, {
                    key: "normalizeTextNode",
                    value: function(l) {
                        if (l) {
                            if (l.nodeType === 3)
                                for (; l.nextSibling && l.nextSibling.nodeType === 3;) l.nodeValue += l.nextSibling.nodeValue, l.parentNode.removeChild(l.nextSibling);
                            else this.normalizeTextNode(l.firstChild);
                            this.normalizeTextNode(l.nextSibling)
                        }
                    }
                }, {
                    key: "markRegExp",
                    value: function(l, c) {
                        var d = this;
                        this.opt = c, this.log('Searching with expression "' + l + '"');
                        var m = 0,
                            h = "wrapMatches",
                            g = function(v) {
                                m++, d.opt.each(v)
                            };
                        this.opt.acrossElements && (h = "wrapMatchesAcrossElements"), this[h](l, this.opt.ignoreGroups, function(y, v) {
                            return d.opt.filter(v, y, m)
                        }, g, function() {
                            m === 0 && d.opt.noMatch(l), d.opt.done(m)
                        })
                    }
                }, {
                    key: "mark",
                    value: function(l, c) {
                        var d = this;
                        this.opt = c;
                        var m = 0,
                            h = "wrapMatches",
                            g = this.getSeparatedKeywords(typeof l == "string" ? [l] : l),
                            y = g.keywords,
                            v = g.length,
                            D = this.opt.caseSensitive ? "" : "i",
                            I = function C(x) {
                                var O = new RegExp(d.createRegExp(x), "gm" + D),
                                    A = 0;
                                d.log('Searching with expression "' + O + '"'), d[h](O, 1, function(P, B) {
                                    return d.opt.filter(B, x, m, A)
                                }, function(P) {
                                    A++, m++, d.opt.each(P)
                                }, function() {
                                    A === 0 && d.opt.noMatch(x), y[v - 1] === x ? d.opt.done(m) : C(y[y.indexOf(x) + 1])
                                })
                            };
                        this.opt.acrossElements && (h = "wrapMatchesAcrossElements"), v === 0 ? this.opt.done(m) : I(y[0])
                    }
                }, {
                    key: "markRanges",
                    value: function(l, c) {
                        var d = this;
                        this.opt = c;
                        var m = 0,
                            h = this.checkRanges(l);
                        h && h.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(h)), this.wrapRangeFromIndex(h, function(g, y, v, D) {
                            return d.opt.filter(g, y, v, D)
                        }, function(g, y) {
                            m++, d.opt.each(g, y)
                        }, function() {
                            d.opt.done(m)
                        })) : this.opt.done(m)
                    }
                }, {
                    key: "unmark",
                    value: function(l) {
                        var c = this;
                        this.opt = l;
                        var d = this.opt.element ? this.opt.element : "*";
                        d += "[data-markjs]", this.opt.className && (d += "." + this.opt.className), this.log('Removal selector "' + d + '"'), this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function(m) {
                            c.unwrapMatches(m)
                        }, function(m) {
                            var h = i.matches(m, d),
                                g = c.matchesExclude(m);
                            return !h || g ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                        }, this.opt.done)
                    }
                }, {
                    key: "opt",
                    set: function(l) {
                        this._opt = n({}, {
                            element: "",
                            className: "",
                            exclude: [],
                            iframes: !1,
                            iframesTimeout: 5e3,
                            separateWordSearch: !0,
                            diacritics: !0,
                            synonyms: {},
                            accuracy: "partially",
                            acrossElements: !1,
                            caseSensitive: !1,
                            ignoreJoiners: !1,
                            ignoreGroups: 0,
                            ignorePunctuation: [],
                            wildcards: "disabled",
                            each: function() {},
                            noMatch: function() {},
                            filter: function() {
                                return !0
                            },
                            done: function() {},
                            debug: !1,
                            log: window.console
                        }, l)
                    },
                    get: function() {
                        return this._opt
                    }
                }, {
                    key: "iterator",
                    get: function() {
                        return new i(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout)
                    }
                }]), s
            }();

        function o(s) {
            var u = this,
                l = new a(s);
            return this.mark = function(c, d) {
                return l.mark(c, d), u
            }, this.markRegExp = function(c, d) {
                return l.markRegExp(c, d), u
            }, this.markRanges = function(c, d) {
                return l.markRanges(c, d), u
            }, this.unmark = function(c) {
                return l.unmark(c), u
            }, this
        }
        return o
    })
});
var Wm = wn((Um, ls) => {
    (function(e, t) {
        typeof Um == "object" && typeof ls != "undefined" ? ls.exports = t() : typeof define == "function" && define.amd ? define(t) : e.moment = t()
    })(Um, function() {
        "use strict";
        var e;

        function t() {
            return e.apply(null, arguments)
        }

        function r(f) {
            e = f
        }

        function n(f) {
            return f instanceof Array || Object.prototype.toString.call(f) === "[object Array]"
        }

        function i(f) {
            return f != null && Object.prototype.toString.call(f) === "[object Object]"
        }

        function a(f, p) {
            return Object.prototype.hasOwnProperty.call(f, p)
        }

        function o(f) {
            if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(f).length === 0;
            var p;
            for (p in f)
                if (a(f, p)) return !1;
            return !0
        }

        function s(f) {
            return f === void 0
        }

        function u(f) {
            return typeof f == "number" || Object.prototype.toString.call(f) === "[object Number]"
        }

        function l(f) {
            return f instanceof Date || Object.prototype.toString.call(f) === "[object Date]"
        }

        function c(f, p) {
            var w = [],
                S, F = f.length;
            for (S = 0; S < F; ++S) w.push(p(f[S], S));
            return w
        }

        function d(f, p) {
            for (var w in p) a(p, w) && (f[w] = p[w]);
            return a(p, "toString") && (f.toString = p.toString), a(p, "valueOf") && (f.valueOf = p.valueOf), f
        }

        function m(f, p, w, S) {
            return Ry(f, p, w, S, !0).utc()
        }

        function h() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }
        }

        function g(f) {
            return f._pf == null && (f._pf = h()), f._pf
        }
        var y;
        Array.prototype.some ? y = Array.prototype.some : y = function(f) {
            var p = Object(this),
                w = p.length >>> 0,
                S;
            for (S = 0; S < w; S++)
                if (S in p && f.call(this, p[S], S, p)) return !0;
            return !1
        };

        function v(f) {
            if (f._isValid == null) {
                var p = g(f),
                    w = y.call(p.parsedDateParts, function(F) {
                        return F != null
                    }),
                    S = !isNaN(f._d.getTime()) && p.overflow < 0 && !p.empty && !p.invalidEra && !p.invalidMonth && !p.invalidWeekday && !p.weekdayMismatch && !p.nullInput && !p.invalidFormat && !p.userInvalidated && (!p.meridiem || p.meridiem && w);
                if (f._strict && (S = S && p.charsLeftOver === 0 && p.unusedTokens.length === 0 && p.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(f)) f._isValid = S;
                else return S
            }
            return f._isValid
        }

        function D(f) {
            var p = m(NaN);
            return f != null ? d(g(p), f) : g(p).userInvalidated = !0, p
        }
        var I = t.momentProperties = [],
            C = !1;

        function x(f, p) {
            var w, S, F, j = I.length;
            if (s(p._isAMomentObject) || (f._isAMomentObject = p._isAMomentObject), s(p._i) || (f._i = p._i), s(p._f) || (f._f = p._f), s(p._l) || (f._l = p._l), s(p._strict) || (f._strict = p._strict), s(p._tzm) || (f._tzm = p._tzm), s(p._isUTC) || (f._isUTC = p._isUTC), s(p._offset) || (f._offset = p._offset), s(p._pf) || (f._pf = g(p)), s(p._locale) || (f._locale = p._locale), j > 0)
                for (w = 0; w < j; w++) S = I[w], F = p[S], s(F) || (f[S] = F);
            return f
        }

        function O(f) {
            x(this, f), this._d = new Date(f._d != null ? f._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), C === !1 && (C = !0, t.updateOffset(this), C = !1)
        }

        function A(f) {
            return f instanceof O || f != null && f._isAMomentObject != null
        }

        function P(f) {
            t.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + f)
        }

        function B(f, p) {
            var w = !0;
            return d(function() {
                if (t.deprecationHandler != null && t.deprecationHandler(null, f), w) {
                    var S = [],
                        F, j, se, Pe = arguments.length;
                    for (j = 0; j < Pe; j++) {
                        if (F = "", typeof arguments[j] == "object") {
                            F += `
[` + j + "] ";
                            for (se in arguments[0]) a(arguments[0], se) && (F += se + ": " + arguments[0][se] + ", ");
                            F = F.slice(0, -2)
                        } else F = arguments[j];
                        S.push(F)
                    }
                    P(f + `
