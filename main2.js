Arguments: ` + Array.prototype.slice.call(S).join("") + `
` + new Error().stack), w = !1
                }
                return p.apply(this, arguments)
            }, p)
        }
        var G = {};

        function J(f, p) {
            t.deprecationHandler != null && t.deprecationHandler(f, p), G[f] || (P(p), G[f] = !0)
        }
        t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;

        function Q(f) {
            return typeof Function != "undefined" && f instanceof Function || Object.prototype.toString.call(f) === "[object Function]"
        }

        function oe(f) {
            var p, w;
            for (w in f) a(f, w) && (p = f[w], Q(p) ? this[w] = p : this["_" + w] = p);
            this._config = f, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }

        function te(f, p) {
            var w = d({}, f),
                S;
            for (S in p) a(p, S) && (i(f[S]) && i(p[S]) ? (w[S] = {}, d(w[S], f[S]), d(w[S], p[S])) : p[S] != null ? w[S] = p[S] : delete w[S]);
            for (S in f) a(f, S) && !a(p, S) && i(f[S]) && (w[S] = d({}, w[S]));
            return w
        }

        function re(f) {
            f != null && this.set(f)
        }
        var ne;
        Object.keys ? ne = Object.keys : ne = function(f) {
            var p, w = [];
            for (p in f) a(f, p) && w.push(p);
            return w
        };
        var be = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        };

        function pe(f, p, w) {
            var S = this._calendar[f] || this._calendar.sameElse;
            return Q(S) ? S.call(p, w) : S
        }

        function De(f, p, w) {
            var S = "" + Math.abs(f),
                F = p - S.length,
                j = f >= 0;
            return (j ? w ? "+" : "" : "-") + Math.pow(10, Math.max(0, F)).toString().substr(1) + S
        }
        var Ce = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            U = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Je = {},
            it = {};

        function N(f, p, w, S) {
            var F = S;
            typeof S == "string" && (F = function() {
                return this[S]()
            }), f && (it[f] = F), p && (it[p[0]] = function() {
                return De(F.apply(this, arguments), p[1], p[2])
            }), w && (it[w] = function() {
                return this.localeData().ordinal(F.apply(this, arguments), f)
            })
        }

        function Ze(f) {
            return f.match(/\[[\s\S]/) ? f.replace(/^\[|\]$/g, "") : f.replace(/\\/g, "")
        }

        function It(f) {
            var p = f.match(Ce),
                w, S;
            for (w = 0, S = p.length; w < S; w++) it[p[w]] ? p[w] = it[p[w]] : p[w] = Ze(p[w]);
            return function(F) {
                var j = "",
                    se;
                for (se = 0; se < S; se++) j += Q(p[se]) ? p[se].call(F, f) : p[se];
                return j
            }
        }

        function Mt(f, p) {
            return f.isValid() ? (p = jt(p, f.localeData()), Je[p] = Je[p] || It(p), Je[p](f)) : f.localeData().invalidDate()
        }

        function jt(f, p) {
            var w = 5;

            function S(F) {
                return p.longDateFormat(F) || F
            }
            for (U.lastIndex = 0; w >= 0 && U.test(f);) f = f.replace(U, S), U.lastIndex = 0, w -= 1;
            return f
        }
        var vt = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        };

        function Wt(f) {
            var p = this._longDateFormat[f],
                w = this._longDateFormat[f.toUpperCase()];
            return p || !w ? p : (this._longDateFormat[f] = w.match(Ce).map(function(S) {
                return S === "MMMM" || S === "MM" || S === "DD" || S === "dddd" ? S.slice(1) : S
            }).join(""), this._longDateFormat[f])
        }
        var Tt = "Invalid date";

        function Jt() {
            return this._invalidDate
        }
        var en = "%d",
            gn = /\d{1,2}/;

        function yn(f) {
            return this._ordinal.replace("%d", f)
        }
        var vn = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        };

        function xn(f, p, w, S) {
            var F = this._relativeTime[w];
            return Q(F) ? F(f, p, w, S) : F.replace(/%d/i, f)
        }

        function jn(f, p) {
            var w = this._relativeTime[f > 0 ? "future" : "past"];
            return Q(w) ? w(p) : w.replace(/%s/i, p)
        }
        var sn = {};

        function Rt(f, p) {
            var w = f.toLowerCase();
            sn[w] = sn[w + "s"] = sn[p] = f
        }

        function Vt(f) {
            return typeof f == "string" ? sn[f] || sn[f.toLowerCase()] : void 0
        }

        function Sr(f) {
            var p = {},
                w, S;
            for (S in f) a(f, S) && (w = Vt(S), w && (p[w] = f[S]));
            return p
        }
        var Rr = {};

        function Bt(f, p) {
            Rr[f] = p
        }

        function Hr(f) {
            var p = [],
                w;
            for (w in f) a(f, w) && p.push({
                unit: w,
                priority: Rr[w]
            });
            return p.sort(function(S, F) {
                return S.priority - F.priority
            }), p
        }

        function rn(f) {
            return f % 4 === 0 && f % 100 !== 0 || f % 400 === 0
        }

        function At(f) {
            return f < 0 ? Math.ceil(f) || 0 : Math.floor(f)
        }

        function Z(f) {
            var p = +f,
                w = 0;
            return p !== 0 && isFinite(p) && (w = At(p)), w
        }

        function me(f, p) {
            return function(w) {
                return w != null ? (at(this, f, w), t.updateOffset(this, p), this) : Ie(this, f)
            }
        }

        function Ie(f, p) {
            return f.isValid() ? f._d["get" + (f._isUTC ? "UTC" : "") + p]() : NaN
        }

        function at(f, p, w) {
            f.isValid() && !isNaN(w) && (p === "FullYear" && rn(f.year()) && f.month() === 1 && f.date() === 29 ? (w = Z(w), f._d["set" + (f._isUTC ? "UTC" : "") + p](w, f.month(), b(w, f.month()))) : f._d["set" + (f._isUTC ? "UTC" : "") + p](w))
        }

        function Dt(f) {
            return f = Vt(f), Q(this[f]) ? this[f]() : this
        }

        function Cn(f, p) {
            if (typeof f == "object") {
                f = Sr(f);
                var w = Hr(f),
                    S, F = w.length;
                for (S = 0; S < F; S++) this[w[S].unit](f[w[S].unit])
            } else if (f = Vt(f), Q(this[f])) return this[f](p);
            return this
        }
        var _n = /\d/,
            Ht = /\d\d/,
            ar = /\d{3}/,
            ht = /\d{4}/,
            St = /[+-]?\d{6}/,
            L = /\d\d?/,
            K = /\d\d\d\d?/,
            ee = /\d\d\d\d\d\d?/,
            ue = /\d{1,3}/,
            de = /\d{1,4}/,
            ve = /[+-]?\d{1,6}/,
            ge = /\d+/,
            M = /[+-]?\d+/,
            H = /Z|[+-]\d\d:?\d\d/gi,
            q = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ie = /[+-]?\d+(\.\d{1,3})?/,
            ye = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            ce;
        ce = {};

        function ae(f, p, w) {
            ce[f] = Q(p) ? p : function(S, F) {
                return S && w ? w : p
            }
        }

        function Se(f, p) {
            return a(ce, f) ? ce[f](p._strict, p._locale) : new RegExp(nt(f))
        }

        function nt(f) {
            return Te(f.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(p, w, S, F, j) {
                return w || S || F || j
            }))
        }

        function Te(f) {
            return f.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        var Ue = {};

        function We(f, p) {
            var w, S = p,
                F;
            for (typeof f == "string" && (f = [f]), u(p) && (S = function(j, se) {
                    se[p] = Z(j)
                }), F = f.length, w = 0; w < F; w++) Ue[f[w]] = S
        }

        function Ft(f, p) {
            We(f, function(w, S, F, j) {
                F._w = F._w || {}, p(w, F._w, F, j)
            })
        }

        function Hn(f, p, w) {
            p != null && a(Ue, f) && Ue[f](p, w._a, w, f)
        }
        var Ot = 0,
            or = 1,
            sr = 2,
            Yt = 3,
            Bn = 4,
            Er = 5,
            Gr = 6,
            tu = 7,
            z = 8;

        function k(f, p) {
            return (f % p + p) % p
        }
        var _;
        Array.prototype.indexOf ? _ = Array.prototype.indexOf : _ = function(f) {
            var p;
            for (p = 0; p < this.length; ++p)
                if (this[p] === f) return p;
            return -1
        };

        function b(f, p) {
            if (isNaN(f) || isNaN(p)) return NaN;
            var w = k(p, 12);
            return f += (p - w) / 12, w === 1 ? rn(f) ? 29 : 28 : 31 - w % 7 % 2
        }
        N("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), N("MMM", 0, 0, function(f) {
            return this.localeData().monthsShort(this, f)
        }), N("MMMM", 0, 0, function(f) {
            return this.localeData().months(this, f)
        }), Rt("month", "M"), Bt("month", 8), ae("M", L), ae("MM", L, Ht), ae("MMM", function(f, p) {
            return p.monthsShortRegex(f)
        }), ae("MMMM", function(f, p) {
            return p.monthsRegex(f)
        }), We(["M", "MM"], function(f, p) {
            p[or] = Z(f) - 1
        }), We(["MMM", "MMMM"], function(f, p, w, S) {
            var F = w._locale.monthsParse(f, S, w._strict);
            F != null ? p[or] = F : g(w).invalidMonth = f
        });
        var T = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            V = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Y = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            X = ye,
            le = ye;

        function he(f, p) {
            return f ? n(this._months) ? this._months[f.month()] : this._months[(this._months.isFormat || Y).test(p) ? "format" : "standalone"][f.month()] : n(this._months) ? this._months : this._months.standalone
        }

        function Me(f, p) {
            return f ? n(this._monthsShort) ? this._monthsShort[f.month()] : this._monthsShort[Y.test(p) ? "format" : "standalone"][f.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }

        function Ve(f, p, w) {
            var S, F, j, se = f.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], S = 0; S < 12; ++S) j = m([2e3, S]), this._shortMonthsParse[S] = this.monthsShort(j, "").toLocaleLowerCase(), this._longMonthsParse[S] = this.months(j, "").toLocaleLowerCase();
            return w ? p === "MMM" ? (F = _.call(this._shortMonthsParse, se), F !== -1 ? F : null) : (F = _.call(this._longMonthsParse, se), F !== -1 ? F : null) : p === "MMM" ? (F = _.call(this._shortMonthsParse, se), F !== -1 ? F : (F = _.call(this._longMonthsParse, se), F !== -1 ? F : null)) : (F = _.call(this._longMonthsParse, se), F !== -1 ? F : (F = _.call(this._shortMonthsParse, se), F !== -1 ? F : null))
        }

        function Le(f, p, w) {
            var S, F, j;
            if (this._monthsParseExact) return Ve.call(this, f, p, w);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), S = 0; S < 12; S++) {
                if (F = m([2e3, S]), w && !this._longMonthsParse[S] && (this._longMonthsParse[S] = new RegExp("^" + this.months(F, "").replace(".", "") + "$", "i"), this._shortMonthsParse[S] = new RegExp("^" + this.monthsShort(F, "").replace(".", "") + "$", "i")), !w && !this._monthsParse[S] && (j = "^" + this.months(F, "") + "|^" + this.monthsShort(F, ""), this._monthsParse[S] = new RegExp(j.replace(".", ""), "i")), w && p === "MMMM" && this._longMonthsParse[S].test(f)) return S;
                if (w && p === "MMM" && this._shortMonthsParse[S].test(f)) return S;
                if (!w && this._monthsParse[S].test(f)) return S
            }
        }

        function Qe(f, p) {
            var w;
            if (!f.isValid()) return f;
            if (typeof p == "string") {
                if (/^\d+$/.test(p)) p = Z(p);
                else if (p = f.localeData().monthsParse(p), !u(p)) return f
            }
            return w = Math.min(f.date(), b(f.year(), p)), f._d["set" + (f._isUTC ? "UTC" : "") + "Month"](p, w), f
        }

        function ot(f) {
            return f != null ? (Qe(this, f), t.updateOffset(this, !0), this) : Ie(this, "Month")
        }

        function qe() {
            return b(this.year(), this.month())
        }

        function yt(f) {
            return this._monthsParseExact ? (a(this, "_monthsRegex") || lt.call(this), f ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = X), this._monthsShortStrictRegex && f ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function st(f) {
            return this._monthsParseExact ? (a(this, "_monthsRegex") || lt.call(this), f ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = le), this._monthsStrictRegex && f ? this._monthsStrictRegex : this._monthsRegex)
        }

        function lt() {
            function f(se, Pe) {
                return Pe.length - se.length
            }
            var p = [],
                w = [],
                S = [],
                F, j;
            for (F = 0; F < 12; F++) j = m([2e3, F]), p.push(this.monthsShort(j, "")), w.push(this.months(j, "")), S.push(this.months(j, "")), S.push(this.monthsShort(j, ""));
            for (p.sort(f), w.sort(f), S.sort(f), F = 0; F < 12; F++) p[F] = Te(p[F]), w[F] = Te(w[F]);
            for (F = 0; F < 24; F++) S[F] = Te(S[F]);
            this._monthsRegex = new RegExp("^(" + S.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + w.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + p.join("|") + ")", "i")
        }
        N("Y", 0, 0, function() {
            var f = this.year();
            return f <= 9999 ? De(f, 4) : "+" + f
        }), N(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), N(0, ["YYYY", 4], 0, "year"), N(0, ["YYYYY", 5], 0, "year"), N(0, ["YYYYYY", 6, !0], 0, "year"), Rt("year", "y"), Bt("year", 1), ae("Y", M), ae("YY", L, Ht), ae("YYYY", de, ht), ae("YYYYY", ve, St), ae("YYYYYY", ve, St), We(["YYYYY", "YYYYYY"], Ot), We("YYYY", function(f, p) {
            p[Ot] = f.length === 2 ? t.parseTwoDigitYear(f) : Z(f)
        }), We("YY", function(f, p) {
            p[Ot] = t.parseTwoDigitYear(f)
        }), We("Y", function(f, p) {
            p[Ot] = parseInt(f, 10)
        });

        function qt(f) {
            return rn(f) ? 366 : 365
        }
        t.parseTwoDigitYear = function(f) {
            return Z(f) + (Z(f) > 68 ? 1900 : 2e3)
        };
        var On = me("FullYear", !0);

        function Vn() {
            return rn(this.year())
        }

        function ki(f, p, w, S, F, j, se) {
            var Pe;
            return f < 100 && f >= 0 ? (Pe = new Date(f + 400, p, w, S, F, j, se), isFinite(Pe.getFullYear()) && Pe.setFullYear(f)) : Pe = new Date(f, p, w, S, F, j, se), Pe
        }

        function kr(f) {
            var p, w;
            return f < 100 && f >= 0 ? (w = Array.prototype.slice.call(arguments), w[0] = f + 400, p = new Date(Date.UTC.apply(null, w)), isFinite(p.getUTCFullYear()) && p.setUTCFullYear(f)) : p = new Date(Date.UTC.apply(null, arguments)), p
        }

        function Jr(f, p, w) {
            var S = 7 + p - w,
                F = (7 + kr(f, 0, S).getUTCDay() - p) % 7;
            return -F + S - 1
        }

        function My(f, p, w, S, F) {
            var j = (7 + w - S) % 7,
                se = Jr(f, S, F),
                Pe = 1 + 7 * (p - 1) + j + se,
                ut, $t;
            return Pe <= 0 ? (ut = f - 1, $t = qt(ut) + Pe) : Pe > qt(f) ? (ut = f + 1, $t = Pe - qt(f)) : (ut = f, $t = Pe), {
                year: ut,
                dayOfYear: $t
            }
        }

        function Ns(f, p, w) {
            var S = Jr(f.year(), p, w),
                F = Math.floor((f.dayOfYear() - S - 1) / 7) + 1,
                j, se;
            return F < 1 ? (se = f.year() - 1, j = F + xi(se, p, w)) : F > xi(f.year(), p, w) ? (j = F - xi(f.year(), p, w), se = f.year() + 1) : (se = f.year(), j = F), {
                week: j,
                year: se
            }
        }

        function xi(f, p, w) {
            var S = Jr(f, p, w),
                F = Jr(f + 1, p, w);
            return (qt(f) - S + F) / 7
        }
        N("w", ["ww", 2], "wo", "week"), N("W", ["WW", 2], "Wo", "isoWeek"), Rt("week", "w"), Rt("isoWeek", "W"), Bt("week", 5), Bt("isoWeek", 5), ae("w", L), ae("ww", L, Ht), ae("W", L), ae("WW", L, Ht), Ft(["w", "ww", "W", "WW"], function(f, p, w, S) {
            p[S.substr(0, 1)] = Z(f)
        });

        function j_(f) {
            return Ns(f, this._week.dow, this._week.doy).week
        }
        var q_ = {
            dow: 0,
            doy: 6
        };

        function G_() {
            return this._week.dow
        }

        function J_() {
            return this._week.doy
        }

        function Z_(f) {
            var p = this.localeData().week(this);
            return f == null ? p : this.add((f - p) * 7, "d")
        }

        function Q_(f) {
            var p = Ns(this, 1, 4).week;
            return f == null ? p : this.add((f - p) * 7, "d")
        }
        N("d", 0, "do", "day"), N("dd", 0, 0, function(f) {
            return this.localeData().weekdaysMin(this, f)
        }), N("ddd", 0, 0, function(f) {
            return this.localeData().weekdaysShort(this, f)
        }), N("dddd", 0, 0, function(f) {
            return this.localeData().weekdays(this, f)
        }), N("e", 0, 0, "weekday"), N("E", 0, 0, "isoWeekday"), Rt("day", "d"), Rt("weekday", "e"), Rt("isoWeekday", "E"), Bt("day", 11), Bt("weekday", 11), Bt("isoWeekday", 11), ae("d", L), ae("e", L), ae("E", L), ae("dd", function(f, p) {
            return p.weekdaysMinRegex(f)
        }), ae("ddd", function(f, p) {
            return p.weekdaysShortRegex(f)
        }), ae("dddd", function(f, p) {
            return p.weekdaysRegex(f)
        }), Ft(["dd", "ddd", "dddd"], function(f, p, w, S) {
            var F = w._locale.weekdaysParse(f, S, w._strict);
            F != null ? p.d = F : g(w).invalidWeekday = f
        }), Ft(["d", "e", "E"], function(f, p, w, S) {
            p[S] = Z(f)
        });

        function X_(f, p) {
            return typeof f != "string" ? f : isNaN(f) ? (f = p.weekdaysParse(f), typeof f == "number" ? f : null) : parseInt(f, 10)
        }

        function e1(f, p) {
            return typeof f == "string" ? p.weekdaysParse(f) % 7 || 7 : isNaN(f) ? null : f
        }

        function bf(f, p) {
            return f.slice(p, 7).concat(f.slice(0, p))
        }
        var t1 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Ty = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            n1 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            r1 = ye,
            i1 = ye,
            a1 = ye;

        function o1(f, p) {
            var w = n(this._weekdays) ? this._weekdays : this._weekdays[f && f !== !0 && this._weekdays.isFormat.test(p) ? "format" : "standalone"];
            return f === !0 ? bf(w, this._week.dow) : f ? w[f.day()] : w
        }

        function s1(f) {
            return f === !0 ? bf(this._weekdaysShort, this._week.dow) : f ? this._weekdaysShort[f.day()] : this._weekdaysShort
        }

        function l1(f) {
            return f === !0 ? bf(this._weekdaysMin, this._week.dow) : f ? this._weekdaysMin[f.day()] : this._weekdaysMin
        }

        function u1(f, p, w) {
            var S, F, j, se = f.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], S = 0; S < 7; ++S) j = m([2e3, 1]).day(S), this._minWeekdaysParse[S] = this.weekdaysMin(j, "").toLocaleLowerCase(), this._shortWeekdaysParse[S] = this.weekdaysShort(j, "").toLocaleLowerCase(), this._weekdaysParse[S] = this.weekdays(j, "").toLocaleLowerCase();
            return w ? p === "dddd" ? (F = _.call(this._weekdaysParse, se), F !== -1 ? F : null) : p === "ddd" ? (F = _.call(this._shortWeekdaysParse, se), F !== -1 ? F : null) : (F = _.call(this._minWeekdaysParse, se), F !== -1 ? F : null) : p === "dddd" ? (F = _.call(this._weekdaysParse, se), F !== -1 || (F = _.call(this._shortWeekdaysParse, se), F !== -1) ? F : (F = _.call(this._minWeekdaysParse, se), F !== -1 ? F : null)) : p === "ddd" ? (F = _.call(this._shortWeekdaysParse, se), F !== -1 || (F = _.call(this._weekdaysParse, se), F !== -1) ? F : (F = _.call(this._minWeekdaysParse, se), F !== -1 ? F : null)) : (F = _.call(this._minWeekdaysParse, se), F !== -1 || (F = _.call(this._weekdaysParse, se), F !== -1) ? F : (F = _.call(this._shortWeekdaysParse, se), F !== -1 ? F : null))
        }

        function c1(f, p, w) {
            var S, F, j;
            if (this._weekdaysParseExact) return u1.call(this, f, p, w);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), S = 0; S < 7; S++) {
                if (F = m([2e3, 1]).day(S), w && !this._fullWeekdaysParse[S] && (this._fullWeekdaysParse[S] = new RegExp("^" + this.weekdays(F, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[S] = new RegExp("^" + this.weekdaysShort(F, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[S] = new RegExp("^" + this.weekdaysMin(F, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[S] || (j = "^" + this.weekdays(F, "") + "|^" + this.weekdaysShort(F, "") + "|^" + this.weekdaysMin(F, ""), this._weekdaysParse[S] = new RegExp(j.replace(".", ""), "i")), w && p === "dddd" && this._fullWeekdaysParse[S].test(f)) return S;
                if (w && p === "ddd" && this._shortWeekdaysParse[S].test(f)) return S;
                if (w && p === "dd" && this._minWeekdaysParse[S].test(f)) return S;
                if (!w && this._weekdaysParse[S].test(f)) return S
            }
        }

        function d1(f) {
            if (!this.isValid()) return f != null ? this : NaN;
            var p = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return f != null ? (f = X_(f, this.localeData()), this.add(f - p, "d")) : p
        }

        function f1(f) {
            if (!this.isValid()) return f != null ? this : NaN;
            var p = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return f == null ? p : this.add(f - p, "d")
        }

        function h1(f) {
            if (!this.isValid()) return f != null ? this : NaN;
            if (f != null) {
                var p = e1(f, this.localeData());
                return this.day(this.day() % 7 ? p : p - 7)
            } else return this.day() || 7
        }

        function m1(f) {
            return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Df.call(this), f ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = r1), this._weekdaysStrictRegex && f ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function p1(f) {
            return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Df.call(this), f ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = i1), this._weekdaysShortStrictRegex && f ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function g1(f) {
            return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Df.call(this), f ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = a1), this._weekdaysMinStrictRegex && f ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function Df() {
            function f(lr, Fi) {
                return Fi.length - lr.length
            }
            var p = [],
                w = [],
                S = [],
                F = [],
                j, se, Pe, ut, $t;
            for (j = 0; j < 7; j++) se = m([2e3, 1]).day(j), Pe = Te(this.weekdaysMin(se, "")), ut = Te(this.weekdaysShort(se, "")), $t = Te(this.weekdays(se, "")), p.push(Pe), w.push(ut), S.push($t), F.push(Pe), F.push(ut), F.push($t);
            p.sort(f), w.sort(f), S.sort(f), F.sort(f), this._weekdaysRegex = new RegExp("^(" + F.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + S.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + w.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + p.join("|") + ")", "i")
        }

        function Sf() {
            return this.hours() % 12 || 12
        }

        function y1() {
            return this.hours() || 24
        }
        N("H", ["HH", 2], 0, "hour"), N("h", ["hh", 2], 0, Sf), N("k", ["kk", 2], 0, y1), N("hmm", 0, 0, function() {
            return "" + Sf.apply(this) + De(this.minutes(), 2)
        }), N("hmmss", 0, 0, function() {
            return "" + Sf.apply(this) + De(this.minutes(), 2) + De(this.seconds(), 2)
        }), N("Hmm", 0, 0, function() {
            return "" + this.hours() + De(this.minutes(), 2)
        }), N("Hmmss", 0, 0, function() {
            return "" + this.hours() + De(this.minutes(), 2) + De(this.seconds(), 2)
        });

        function Fy(f, p) {
            N(f, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), p)
            })
        }
        Fy("a", !0), Fy("A", !1), Rt("hour", "h"), Bt("hour", 13);

        function Iy(f, p) {
            return p._meridiemParse
        }
        ae("a", Iy), ae("A", Iy), ae("H", L), ae("h", L), ae("k", L), ae("HH", L, Ht), ae("hh", L, Ht), ae("kk", L, Ht), ae("hmm", K), ae("hmmss", ee), ae("Hmm", K), ae("Hmmss", ee), We(["H", "HH"], Yt), We(["k", "kk"], function(f, p, w) {
            var S = Z(f);
            p[Yt] = S === 24 ? 0 : S
        }), We(["a", "A"], function(f, p, w) {
            w._isPm = w._locale.isPM(f), w._meridiem = f
        }), We(["h", "hh"], function(f, p, w) {
            p[Yt] = Z(f), g(w).bigHour = !0
        }), We("hmm", function(f, p, w) {
            var S = f.length - 2;
            p[Yt] = Z(f.substr(0, S)), p[Bn] = Z(f.substr(S)), g(w).bigHour = !0
        }), We("hmmss", function(f, p, w) {
            var S = f.length - 4,
                F = f.length - 2;
            p[Yt] = Z(f.substr(0, S)), p[Bn] = Z(f.substr(S, 2)), p[Er] = Z(f.substr(F)), g(w).bigHour = !0
        }), We("Hmm", function(f, p, w) {
            var S = f.length - 2;
            p[Yt] = Z(f.substr(0, S)), p[Bn] = Z(f.substr(S))
        }), We("Hmmss", function(f, p, w) {
            var S = f.length - 4,
                F = f.length - 2;
            p[Yt] = Z(f.substr(0, S)), p[Bn] = Z(f.substr(S, 2)), p[Er] = Z(f.substr(F))
        });

        function v1(f) {
            return (f + "").toLowerCase().charAt(0) === "p"
        }
        var w1 = /[ap]\.?m?\.?/i,
            b1 = me("Hours", !0);

        function D1(f, p, w) {
            return f > 11 ? w ? "pm" : "PM" : w ? "am" : "AM"
        }
        var Ay = {
                calendar: be,
                longDateFormat: vt,
                invalidDate: Tt,
                ordinal: en,
                dayOfMonthOrdinalParse: gn,
                relativeTime: vn,
                months: T,
                monthsShort: V,
                week: q_,
                weekdays: t1,
                weekdaysMin: n1,
                weekdaysShort: Ty,
                meridiemParse: w1
            },
            tn = {},
            Rs = {},
            Hs;

        function S1(f, p) {
            var w, S = Math.min(f.length, p.length);
            for (w = 0; w < S; w += 1)
                if (f[w] !== p[w]) return w;
            return S
        }

        function Oy(f) {
            return f && f.toLowerCase().replace("_", "-")
        }

        function E1(f) {
            for (var p = 0, w, S, F, j; p < f.length;) {
                for (j = Oy(f[p]).split("-"), w = j.length, S = Oy(f[p + 1]), S = S ? S.split("-") : null; w > 0;) {
                    if (F = nu(j.slice(0, w).join("-")), F) return F;
                    if (S && S.length >= w && S1(j, S) >= w - 1) break;
                    w--
                }
                p++
            }
            return Hs
        }

        function k1(f) {
            return f.match("^[^/\\\\]*$") != null
        }

        function nu(f) {
            var p = null,
                w;
            if (tn[f] === void 0 && typeof ls != "undefined" && ls && ls.exports && k1(f)) try {
                p = Hs._abbr, w = require, w("./locale/" + f), na(p)
            } catch (S) {
                tn[f] = null
            }
            return tn[f]
        }

        function na(f, p) {
            var w;
            return f && (s(p) ? w = Ci(f) : w = Ef(f, p), w ? Hs = w : typeof console != "undefined" && console.warn && console.warn("Locale " + f + " not found. Did you forget to load it?")), Hs._abbr
        }

        function Ef(f, p) {
            if (p !== null) {
                var w, S = Ay;
                if (p.abbr = f, tn[f] != null) J("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), S = tn[f]._config;
                else if (p.parentLocale != null)
                    if (tn[p.parentLocale] != null) S = tn[p.parentLocale]._config;
                    else if (w = nu(p.parentLocale), w != null) S = w._config;
                else return Rs[p.parentLocale] || (Rs[p.parentLocale] = []), Rs[p.parentLocale].push({
                    name: f,
                    config: p
                }), null;
                return tn[f] = new re(te(S, p)), Rs[f] && Rs[f].forEach(function(F) {
                    Ef(F.name, F.config)
                }), na(f), tn[f]
            } else return delete tn[f], null
        }

        function x1(f, p) {
            if (p != null) {
                var w, S, F = Ay;
                tn[f] != null && tn[f].parentLocale != null ? tn[f].set(te(tn[f]._config, p)) : (S = nu(f), S != null && (F = S._config), p = te(F, p), S == null && (p.abbr = f), w = new re(p), w.parentLocale = tn[f], tn[f] = w), na(f)
            } else tn[f] != null && (tn[f].parentLocale != null ? (tn[f] = tn[f].parentLocale, f === na() && na(f)) : tn[f] != null && delete tn[f]);
            return tn[f]
        }

        function Ci(f) {
            var p;
            if (f && f._locale && f._locale._abbr && (f = f._locale._abbr), !f) return Hs;
            if (!n(f)) {
                if (p = nu(f), p) return p;
                f = [f]
            }
            return E1(f)
        }

        function C1() {
            return ne(tn)
        }

        function kf(f) {
            var p, w = f._a;
            return w && g(f).overflow === -2 && (p = w[or] < 0 || w[or] > 11 ? or : w[sr] < 1 || w[sr] > b(w[Ot], w[or]) ? sr : w[Yt] < 0 || w[Yt] > 24 || w[Yt] === 24 && (w[Bn] !== 0 || w[Er] !== 0 || w[Gr] !== 0) ? Yt : w[Bn] < 0 || w[Bn] > 59 ? Bn : w[Er] < 0 || w[Er] > 59 ? Er : w[Gr] < 0 || w[Gr] > 999 ? Gr : -1, g(f)._overflowDayOfYear && (p < Ot || p > sr) && (p = sr), g(f)._overflowWeeks && p === -1 && (p = tu), g(f)._overflowWeekday && p === -1 && (p = z), g(f).overflow = p), f
        }
        var _1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            M1 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            T1 = /Z|[+-]\d\d(?::?\d\d)?/,
            ru = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/],
                ["YYYYMM", /\d{6}/, !1],
                ["YYYY", /\d{4}/, !1]
            ],
            xf = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            F1 = /^\/?Date\((-?\d+)/i,
            I1 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            A1 = {
                UT: 0,
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

        function Ly(f) {
            var p, w, S = f._i,
                F = _1.exec(S) || M1.exec(S),
                j, se, Pe, ut, $t = ru.length,
                lr = xf.length;
            if (F) {
                for (g(f).iso = !0, p = 0, w = $t; p < w; p++)
                    if (ru[p][1].exec(F[1])) {
                        se = ru[p][0], j = ru[p][2] !== !1;
                        break
                    } if (se == null) {
                    f._isValid = !1;
                    return
                }
                if (F[3]) {
                    for (p = 0, w = lr; p < w; p++)
                        if (xf[p][1].exec(F[3])) {
                            Pe = (F[2] || " ") + xf[p][0];
                            break
                        } if (Pe == null) {
                        f._isValid = !1;
                        return
                    }
                }
                if (!j && Pe != null) {
                    f._isValid = !1;
                    return
                }
                if (F[4])
                    if (T1.exec(F[4])) ut = "Z";
                    else {
                        f._isValid = !1;
                        return
                    } f._f = se + (Pe || "") + (ut || ""), _f(f)
            } else f._isValid = !1
        }

        function O1(f, p, w, S, F, j) {
            var se = [L1(f), V.indexOf(p), parseInt(w, 10), parseInt(S, 10), parseInt(F, 10)];
            return j && se.push(parseInt(j, 10)), se
        }

        function L1(f) {
            var p = parseInt(f, 10);
            return p <= 49 ? 2e3 + p : p <= 999 ? 1900 + p : p
        }

        function P1(f) {
            return f.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }

        function N1(f, p, w) {
            if (f) {
                var S = Ty.indexOf(f),
                    F = new Date(p[0], p[1], p[2]).getDay();
                if (S !== F) return g(w).weekdayMismatch = !0, w._isValid = !1, !1
            }
            return !0
        }

        function R1(f, p, w) {
            if (f) return A1[f];
            if (p) return 0;
            var S = parseInt(w, 10),
                F = S % 100,
                j = (S - F) / 100;
            return j * 60 + F
        }

        function Py(f) {
            var p = I1.exec(P1(f._i)),
                w;
            if (p) {
                if (w = O1(p[4], p[3], p[2], p[5], p[6], p[7]), !N1(p[1], w, f)) return;
                f._a = w, f._tzm = R1(p[8], p[9], p[10]), f._d = kr.apply(null, f._a), f._d.setUTCMinutes(f._d.getUTCMinutes() - f._tzm), g(f).rfc2822 = !0
            } else f._isValid = !1
        }

        function H1(f) {
            var p = F1.exec(f._i);
            if (p !== null) {
                f._d = new Date(+p[1]);
                return
            }
            if (Ly(f), f._isValid === !1) delete f._isValid;
            else return;
            if (Py(f), f._isValid === !1) delete f._isValid;
            else return;
            f._strict ? f._isValid = !1 : t.createFromInputFallback(f)
        }
        t.createFromInputFallback = B("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(f) {
            f._d = new Date(f._i + (f._useUTC ? " UTC" : ""))
        });

        function bo(f, p, w) {
            return f != null ? f : p != null ? p : w
        }

        function B1(f) {
            var p = new Date(t.now());
            return f._useUTC ? [p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()] : [p.getFullYear(), p.getMonth(), p.getDate()]
        }

        function Cf(f) {
            var p, w, S = [],
                F, j, se;
            if (!f._d) {
                for (F = B1(f), f._w && f._a[sr] == null && f._a[or] == null && V1(f), f._dayOfYear != null && (se = bo(f._a[Ot], F[Ot]), (f._dayOfYear > qt(se) || f._dayOfYear === 0) && (g(f)._overflowDayOfYear = !0), w = kr(se, 0, f._dayOfYear), f._a[or] = w.getUTCMonth(), f._a[sr] = w.getUTCDate()), p = 0; p < 3 && f._a[p] == null; ++p) f._a[p] = S[p] = F[p];
                for (; p < 7; p++) f._a[p] = S[p] = f._a[p] == null ? p === 2 ? 1 : 0 : f._a[p];
                f._a[Yt] === 24 && f._a[Bn] === 0 && f._a[Er] === 0 && f._a[Gr] === 0 && (f._nextDay = !0, f._a[Yt] = 0), f._d = (f._useUTC ? kr : ki).apply(null, S), j = f._useUTC ? f._d.getUTCDay() : f._d.getDay(), f._tzm != null && f._d.setUTCMinutes(f._d.getUTCMinutes() - f._tzm), f._nextDay && (f._a[Yt] = 24), f._w && typeof f._w.d != "undefined" && f._w.d !== j && (g(f).weekdayMismatch = !0)
            }
        }

        function V1(f) {
            var p, w, S, F, j, se, Pe, ut, $t;
            p = f._w, p.GG != null || p.W != null || p.E != null ? (j = 1, se = 4, w = bo(p.GG, f._a[Ot], Ns(Zt(), 1, 4).year), S = bo(p.W, 1), F = bo(p.E, 1), (F < 1 || F > 7) && (ut = !0)) : (j = f._locale._week.dow, se = f._locale._week.doy, $t = Ns(Zt(), j, se), w = bo(p.gg, f._a[Ot], $t.year), S = bo(p.w, $t.week), p.d != null ? (F = p.d, (F < 0 || F > 6) && (ut = !0)) : p.e != null ? (F = p.e + j, (p.e < 0 || p.e > 6) && (ut = !0)) : F = j), S < 1 || S > xi(w, j, se) ? g(f)._overflowWeeks = !0 : ut != null ? g(f)._overflowWeekday = !0 : (Pe = My(w, S, F, j, se), f._a[Ot] = Pe.year, f._dayOfYear = Pe.dayOfYear)
        }
        t.ISO_8601 = function() {}, t.RFC_2822 = function() {};

        function _f(f) {
            if (f._f === t.ISO_8601) {
                Ly(f);
                return
            }
            if (f._f === t.RFC_2822) {
                Py(f);
                return
            }
            f._a = [], g(f).empty = !0;
            var p = "" + f._i,
                w, S, F, j, se, Pe = p.length,
                ut = 0,
                $t, lr;
            for (F = jt(f._f, f._locale).match(Ce) || [], lr = F.length, w = 0; w < lr; w++) j = F[w], S = (p.match(Se(j, f)) || [])[0], S && (se = p.substr(0, p.indexOf(S)), se.length > 0 && g(f).unusedInput.push(se), p = p.slice(p.indexOf(S) + S.length), ut += S.length), it[j] ? (S ? g(f).empty = !1 : g(f).unusedTokens.push(j), Hn(j, S, f)) : f._strict && !S && g(f).unusedTokens.push(j);
            g(f).charsLeftOver = Pe - ut, p.length > 0 && g(f).unusedInput.push(p), f._a[Yt] <= 12 && g(f).bigHour === !0 && f._a[Yt] > 0 && (g(f).bigHour = void 0), g(f).parsedDateParts = f._a.slice(0), g(f).meridiem = f._meridiem, f._a[Yt] = $1(f._locale, f._a[Yt], f._meridiem), $t = g(f).era, $t !== null && (f._a[Ot] = f._locale.erasConvertYear($t, f._a[Ot])), Cf(f), kf(f)
        }

        function $1(f, p, w) {
            var S;
            return w == null ? p : f.meridiemHour != null ? f.meridiemHour(p, w) : (f.isPM != null && (S = f.isPM(w), S && p < 12 && (p += 12), !S && p === 12 && (p = 0)), p)
        }

        function U1(f) {
            var p, w, S, F, j, se, Pe = !1,
                ut = f._f.length;
            if (ut === 0) {
                g(f).invalidFormat = !0, f._d = new Date(NaN);
                return
            }
            for (F = 0; F < ut; F++) j = 0, se = !1, p = x({}, f), f._useUTC != null && (p._useUTC = f._useUTC), p._f = f._f[F], _f(p), v(p) && (se = !0), j += g(p).charsLeftOver, j += g(p).unusedTokens.length * 10, g(p).score = j, Pe ? j < S && (S = j, w = p) : (S == null || j < S || se) && (S = j, w = p, se && (Pe = !0));
            d(f, w || p)
        }

        function W1(f) {
            if (!f._d) {
                var p = Sr(f._i),
                    w = p.day === void 0 ? p.date : p.day;
                f._a = c([p.year, p.month, w, p.hour, p.minute, p.second, p.millisecond], function(S) {
                    return S && parseInt(S, 10)
                }), Cf(f)
            }
        }

        function Y1(f) {
            var p = new O(kf(Ny(f)));
            return p._nextDay && (p.add(1, "d"), p._nextDay = void 0), p
        }

        function Ny(f) {
            var p = f._i,
                w = f._f;
            return f._locale = f._locale || Ci(f._l), p === null || w === void 0 && p === "" ? D({
                nullInput: !0
            }) : (typeof p == "string" && (f._i = p = f._locale.preparse(p)), A(p) ? new O(kf(p)) : (l(p) ? f._d = p : n(w) ? U1(f) : w ? _f(f) : z1(f), v(f) || (f._d = null), f))
        }

        function z1(f) {
            var p = f._i;
            s(p) ? f._d = new Date(t.now()) : l(p) ? f._d = new Date(p.valueOf()) : typeof p == "string" ? H1(f) : n(p) ? (f._a = c(p.slice(0), function(w) {
                return parseInt(w, 10)
            }), Cf(f)) : i(p) ? W1(f) : u(p) ? f._d = new Date(p) : t.createFromInputFallback(f)
        }

        function Ry(f, p, w, S, F) {
            var j = {};
            return (p === !0 || p === !1) && (S = p, p = void 0), (w === !0 || w === !1) && (S = w, w = void 0), (i(f) && o(f) || n(f) && f.length === 0) && (f = void 0), j._isAMomentObject = !0, j._useUTC = j._isUTC = F, j._l = w, j._i = f, j._f = p, j._strict = S, Y1(j)
        }

        function Zt(f, p, w, S) {
            return Ry(f, p, w, S, !1)
        }
        var K1 = B("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var f = Zt.apply(null, arguments);
                return this.isValid() && f.isValid() ? f < this ? this : f : D()
            }),
            j1 = B("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var f = Zt.apply(null, arguments);
                return this.isValid() && f.isValid() ? f > this ? this : f : D()
            });

        function Hy(f, p) {
            var w, S;
            if (p.length === 1 && n(p[0]) && (p = p[0]), !p.length) return Zt();
            for (w = p[0], S = 1; S < p.length; ++S)(!p[S].isValid() || p[S][f](w)) && (w = p[S]);
            return w
        }

        function q1() {
            var f = [].slice.call(arguments, 0);
            return Hy("isBefore", f)
        }

        function G1() {
            var f = [].slice.call(arguments, 0);
            return Hy("isAfter", f)
        }
        var J1 = function() {
                return Date.now ? Date.now() : +new Date
            },
            Bs = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Z1(f) {
            var p, w = !1,
                S, F = Bs.length;
            for (p in f)
                if (a(f, p) && !(_.call(Bs, p) !== -1 && (f[p] == null || !isNaN(f[p])))) return !1;
            for (S = 0; S < F; ++S)
                if (f[Bs[S]]) {
                    if (w) return !1;
                    parseFloat(f[Bs[S]]) !== Z(f[Bs[S]]) && (w = !0)
                } return !0
        }

        function Q1() {
            return this._isValid
        }

        function X1() {
            return Zr(NaN)
        }

        function iu(f) {
            var p = Sr(f),
                w = p.year || 0,
                S = p.quarter || 0,
                F = p.month || 0,
                j = p.week || p.isoWeek || 0,
                se = p.day || 0,
                Pe = p.hour || 0,
                ut = p.minute || 0,
                $t = p.second || 0,
                lr = p.millisecond || 0;
            this._isValid = Z1(p), this._milliseconds = +lr + $t * 1e3 + ut * 6e4 + Pe * 1e3 * 60 * 60, this._days = +se + j * 7, this._months = +F + S * 3 + w * 12, this._data = {}, this._locale = Ci(), this._bubble()
        }

        function au(f) {
            return f instanceof iu
        }

        function Mf(f) {
            return f < 0 ? Math.round(-1 * f) * -1 : Math.round(f)
        }

        function eM(f, p, w) {
            var S = Math.min(f.length, p.length),
                F = Math.abs(f.length - p.length),
                j = 0,
                se;
            for (se = 0; se < S; se++)(w && f[se] !== p[se] || !w && Z(f[se]) !== Z(p[se])) && j++;
            return j + F
        }

        function By(f, p) {
            N(f, 0, 0, function() {
                var w = this.utcOffset(),
                    S = "+";
                return w < 0 && (w = -w, S = "-"), S + De(~~(w / 60), 2) + p + De(~~w % 60, 2)
            })
        }
        By("Z", ":"), By("ZZ", ""), ae("Z", q), ae("ZZ", q), We(["Z", "ZZ"], function(f, p, w) {
            w._useUTC = !0, w._tzm = Tf(q, f)
        });
        var tM = /([\+\-]|\d\d)/gi;

        function Tf(f, p) {
            var w = (p || "").match(f),
                S, F, j;
            return w === null ? null : (S = w[w.length - 1] || [], F = (S + "").match(tM) || ["-", 0, 0], j = +(F[1] * 60) + Z(F[2]), j === 0 ? 0 : F[0] === "+" ? j : -j)
        }

        function Ff(f, p) {
            var w, S;
            return p._isUTC ? (w = p.clone(), S = (A(f) || l(f) ? f.valueOf() : Zt(f).valueOf()) - w.valueOf(), w._d.setTime(w._d.valueOf() + S), t.updateOffset(w, !1), w) : Zt(f).local()
        }

        function If(f) {
            return -Math.round(f._d.getTimezoneOffset())
        }
        t.updateOffset = function() {};

        function nM(f, p, w) {
            var S = this._offset || 0,
                F;
            if (!this.isValid()) return f != null ? this : NaN;
            if (f != null) {
                if (typeof f == "string") {
                    if (f = Tf(q, f), f === null) return this
                } else Math.abs(f) < 16 && !w && (f = f * 60);
                return !this._isUTC && p && (F = If(this)), this._offset = f, this._isUTC = !0, F != null && this.add(F, "m"), S !== f && (!p || this._changeInProgress ? Wy(this, Zr(f - S, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
            } else return this._isUTC ? S : If(this)
        }

        function rM(f, p) {
            return f != null ? (typeof f != "string" && (f = -f), this.utcOffset(f, p), this) : -this.utcOffset()
        }

        function iM(f) {
            return this.utcOffset(0, f)
        }

        function aM(f) {
            return this._isUTC && (this.utcOffset(0, f), this._isUTC = !1, f && this.subtract(If(this), "m")), this
        }

        function oM() {
            if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
            else if (typeof this._i == "string") {
                var f = Tf(H, this._i);
                f != null ? this.utcOffset(f) : this.utcOffset(0, !0)
            }
            return this
        }

        function sM(f) {
            return this.isValid() ? (f = f ? Zt(f).utcOffset() : 0, (this.utcOffset() - f) % 60 === 0) : !1
        }

        function lM() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function uM() {
            if (!s(this._isDSTShifted)) return this._isDSTShifted;
            var f = {},
                p;
            return x(f, this), f = Ny(f), f._a ? (p = f._isUTC ? m(f._a) : Zt(f._a), this._isDSTShifted = this.isValid() && eM(f._a, p.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
        }

        function cM() {
            return this.isValid() ? !this._isUTC : !1
        }

        function dM() {
            return this.isValid() ? this._isUTC : !1
        }

        function Vy() {
            return this.isValid() ? this._isUTC && this._offset === 0 : !1
        }
        var fM = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            hM = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function Zr(f, p) {
            var w = f,
                S = null,
                F, j, se;
            return au(f) ? w = {
                ms: f._milliseconds,
                d: f._days,
                M: f._months
            } : u(f) || !isNaN(+f) ? (w = {}, p ? w[p] = +f : w.milliseconds = +f) : (S = fM.exec(f)) ? (F = S[1] === "-" ? -1 : 1, w = {
                y: 0,
                d: Z(S[sr]) * F,
                h: Z(S[Yt]) * F,
                m: Z(S[Bn]) * F,
                s: Z(S[Er]) * F,
                ms: Z(Mf(S[Gr] * 1e3)) * F
            }) : (S = hM.exec(f)) ? (F = S[1] === "-" ? -1 : 1, w = {
                y: Ha(S[2], F),
                M: Ha(S[3], F),
                w: Ha(S[4], F),
                d: Ha(S[5], F),
                h: Ha(S[6], F),
                m: Ha(S[7], F),
                s: Ha(S[8], F)
            }) : w == null ? w = {} : typeof w == "object" && ("from" in w || "to" in w) && (se = mM(Zt(w.from), Zt(w.to)), w = {}, w.ms = se.milliseconds, w.M = se.months), j = new iu(w), au(f) && a(f, "_locale") && (j._locale = f._locale), au(f) && a(f, "_isValid") && (j._isValid = f._isValid), j
        }
        Zr.fn = iu.prototype, Zr.invalid = X1;

        function Ha(f, p) {
            var w = f && parseFloat(f.replace(",", "."));
            return (isNaN(w) ? 0 : w) * p
        }

        function $y(f, p) {
            var w = {};
            return w.months = p.month() - f.month() + (p.year() - f.year()) * 12, f.clone().add(w.months, "M").isAfter(p) && --w.months, w.milliseconds = +p - +f.clone().add(w.months, "M"), w
        }

        function mM(f, p) {
            var w;
            return f.isValid() && p.isValid() ? (p = Ff(p, f), f.isBefore(p) ? w = $y(f, p) : (w = $y(p, f), w.milliseconds = -w.milliseconds, w.months = -w.months), w) : {
                milliseconds: 0,
                months: 0
            }
        }

        function Uy(f, p) {
            return function(w, S) {
                var F, j;
                return S !== null && !isNaN(+S) && (J(p, "moment()." + p + "(period, number) is deprecated. Please use moment()." + p + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), j = w, w = S, S = j), F = Zr(w, S), Wy(this, F, f), this
            }
        }

        function Wy(f, p, w, S) {
            var F = p._milliseconds,
                j = Mf(p._days),
                se = Mf(p._months);
            f.isValid() && (S = S == null ? !0 : S, se && Qe(f, Ie(f, "Month") + se * w), j && at(f, "Date", Ie(f, "Date") + j * w), F && f._d.setTime(f._d.valueOf() + F * w), S && t.updateOffset(f, j || se))
        }
        var pM = Uy(1, "add"),
            gM = Uy(-1, "subtract");

        function Yy(f) {
            return typeof f == "string" || f instanceof String
        }

        function yM(f) {
            return A(f) || l(f) || Yy(f) || u(f) || wM(f) || vM(f) || f === null || f === void 0
        }

        function vM(f) {
            var p = i(f) && !o(f),
                w = !1,
                S = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                F, j, se = S.length;
            for (F = 0; F < se; F += 1) j = S[F], w = w || a(f, j);
            return p && w
        }

        function wM(f) {
            var p = n(f),
                w = !1;
            return p && (w = f.filter(function(S) {
                return !u(S) && Yy(f)
            }).length === 0), p && w
        }

        function bM(f) {
            var p = i(f) && !o(f),
                w = !1,
                S = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
                F, j;
            for (F = 0; F < S.length; F += 1) j = S[F], w = w || a(f, j);
            return p && w
        }

        function DM(f, p) {
            var w = f.diff(p, "days", !0);
            return w < -6 ? "sameElse" : w < -1 ? "lastWeek" : w < 0 ? "lastDay" : w < 1 ? "sameDay" : w < 2 ? "nextDay" : w < 7 ? "nextWeek" : "sameElse"
        }

        function SM(f, p) {
            arguments.length === 1 && (arguments[0] ? yM(arguments[0]) ? (f = arguments[0], p = void 0) : bM(arguments[0]) && (p = arguments[0], f = void 0) : (f = void 0, p = void 0));
            var w = f || Zt(),
                S = Ff(w, this).startOf("day"),
                F = t.calendarFormat(this, S) || "sameElse",
                j = p && (Q(p[F]) ? p[F].call(this, w) : p[F]);
            return this.format(j || this.localeData().calendar(F, this, Zt(w)))
        }

        function EM() {
            return new O(this)
        }

        function kM(f, p) {
            var w = A(f) ? f : Zt(f);
            return this.isValid() && w.isValid() ? (p = Vt(p) || "millisecond", p === "millisecond" ? this.valueOf() > w.valueOf() : w.valueOf() < this.clone().startOf(p).valueOf()) : !1
        }

        function xM(f, p) {
            var w = A(f) ? f : Zt(f);
            return this.isValid() && w.isValid() ? (p = Vt(p) || "millisecond", p === "millisecond" ? this.valueOf() < w.valueOf() : this.clone().endOf(p).valueOf() < w.valueOf()) : !1
        }

        function CM(f, p, w, S) {
            var F = A(f) ? f : Zt(f),
                j = A(p) ? p : Zt(p);
            return this.isValid() && F.isValid() && j.isValid() ? (S = S || "()", (S[0] === "(" ? this.isAfter(F, w) : !this.isBefore(F, w)) && (S[1] === ")" ? this.isBefore(j, w) : !this.isAfter(j, w))) : !1
        }

        function _M(f, p) {
            var w = A(f) ? f : Zt(f),
                S;
            return this.isValid() && w.isValid() ? (p = Vt(p) || "millisecond", p === "millisecond" ? this.valueOf() === w.valueOf() : (S = w.valueOf(), this.clone().startOf(p).valueOf() <= S && S <= this.clone().endOf(p).valueOf())) : !1
        }

        function MM(f, p) {
            return this.isSame(f, p) || this.isAfter(f, p)
        }

        function TM(f, p) {
            return this.isSame(f, p) || this.isBefore(f, p)
        }

        function FM(f, p, w) {
            var S, F, j;
            if (!this.isValid()) return NaN;
            if (S = Ff(f, this), !S.isValid()) return NaN;
            switch (F = (S.utcOffset() - this.utcOffset()) * 6e4, p = Vt(p), p) {
                case "year":
                    j = ou(this, S) / 12;
                    break;
                case "month":
                    j = ou(this, S);
                    break;
                case "quarter":
                    j = ou(this, S) / 3;
                    break;
                case "second":
                    j = (this - S) / 1e3;
                    break;
                case "minute":
                    j = (this - S) / 6e4;
                    break;
                case "hour":
                    j = (this - S) / 36e5;
                    break;
                case "day":
                    j = (this - S - F) / 864e5;
                    break;
                case "week":
                    j = (this - S - F) / 6048e5;
                    break;
                default:
                    j = this - S
            }
            return w ? j : At(j)
        }

        function ou(f, p) {
            if (f.date() < p.date()) return -ou(p, f);
            var w = (p.year() - f.year()) * 12 + (p.month() - f.month()),
                S = f.clone().add(w, "months"),
                F, j;
            return p - S < 0 ? (F = f.clone().add(w - 1, "months"), j = (p - S) / (S - F)) : (F = f.clone().add(w + 1, "months"), j = (p - S) / (F - S)), -(w + j) || 0
        }
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

        function IM() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function AM(f) {
            if (!this.isValid()) return null;
            var p = f !== !0,
                w = p ? this.clone().utc() : this;
            return w.year() < 0 || w.year() > 9999 ? Mt(w, p ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : Q(Date.prototype.toISOString) ? p ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Mt(w, "Z")) : Mt(w, p ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }

        function OM() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var f = "moment",
                p = "",
                w, S, F, j;
            return this.isLocal() || (f = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", p = "Z"), w = "[" + f + '("]', S = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", F = "-MM-DD[T]HH:mm:ss.SSS", j = p + '[")]', this.format(w + S + F + j)
        }

        function LM(f) {
            f || (f = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var p = Mt(this, f);
            return this.localeData().postformat(p)
        }

        function PM(f, p) {
            return this.isValid() && (A(f) && f.isValid() || Zt(f).isValid()) ? Zr({
                to: this,
                from: f
            }).locale(this.locale()).humanize(!p) : this.localeData().invalidDate()
        }

        function NM(f) {
            return this.from(Zt(), f)
        }

        function RM(f, p) {
            return this.isValid() && (A(f) && f.isValid() || Zt(f).isValid()) ? Zr({
                from: this,
                to: f
            }).locale(this.locale()).humanize(!p) : this.localeData().invalidDate()
        }

        function HM(f) {
            return this.to(Zt(), f)
        }

        function zy(f) {
            var p;
            return f === void 0 ? this._locale._abbr : (p = Ci(f), p != null && (this._locale = p), this)
        }
        var Ky = B("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(f) {
            return f === void 0 ? this.localeData() : this.locale(f)
        });

        function jy() {
            return this._locale
        }
        var su = 1e3,
            Do = 60 * su,
            lu = 60 * Do,
            qy = (365 * 400 + 97) * 24 * lu;

        function So(f, p) {
            return (f % p + p) % p
        }

        function Gy(f, p, w) {
            return f < 100 && f >= 0 ? new Date(f + 400, p, w) - qy : new Date(f, p, w).valueOf()
        }

        function Jy(f, p, w) {
            return f < 100 && f >= 0 ? Date.UTC(f + 400, p, w) - qy : Date.UTC(f, p, w)
        }

        function BM(f) {
            var p, w;
            if (f = Vt(f), f === void 0 || f === "millisecond" || !this.isValid()) return this;
            switch (w = this._isUTC ? Jy : Gy, f) {
                case "year":
                    p = w(this.year(), 0, 1);
                    break;
                case "quarter":
                    p = w(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    p = w(this.year(), this.month(), 1);
                    break;
                case "week":
                    p = w(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    p = w(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    p = w(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    p = this._d.valueOf(), p -= So(p + (this._isUTC ? 0 : this.utcOffset() * Do), lu);
                    break;
                case "minute":
                    p = this._d.valueOf(), p -= So(p, Do);
                    break;
                case "second":
                    p = this._d.valueOf(), p -= So(p, su);
                    break
            }
            return this._d.setTime(p), t.updateOffset(this, !0), this
        }

        function VM(f) {
            var p, w;
            if (f = Vt(f), f === void 0 || f === "millisecond" || !this.isValid()) return this;
            switch (w = this._isUTC ? Jy : Gy, f) {
                case "year":
                    p = w(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    p = w(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    p = w(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    p = w(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    p = w(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    p = w(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    p = this._d.valueOf(), p += lu - So(p + (this._isUTC ? 0 : this.utcOffset() * Do), lu) - 1;
                    break;
                case "minute":
                    p = this._d.valueOf(), p += Do - So(p, Do) - 1;
                    break;
                case "second":
                    p = this._d.valueOf(), p += su - So(p, su) - 1;
                    break
            }
            return this._d.setTime(p), t.updateOffset(this, !0), this
        }

        function $M() {
            return this._d.valueOf() - (this._offset || 0) * 6e4
        }

        function UM() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function WM() {
            return new Date(this.valueOf())
        }

        function YM() {
            var f = this;
            return [f.year(), f.month(), f.date(), f.hour(), f.minute(), f.second(), f.millisecond()]
        }

        function zM() {
            var f = this;
            return {
                years: f.year(),
                months: f.month(),
                date: f.date(),
                hours: f.hours(),
                minutes: f.minutes(),
                seconds: f.seconds(),
                milliseconds: f.milliseconds()
            }
        }

        function KM() {
            return this.isValid() ? this.toISOString() : null
        }

        function jM() {
            return v(this)
        }

        function qM() {
            return d({}, g(this))
        }

        function GM() {
            return g(this).overflow
        }

        function JM() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }
        N("N", 0, 0, "eraAbbr"), N("NN", 0, 0, "eraAbbr"), N("NNN", 0, 0, "eraAbbr"), N("NNNN", 0, 0, "eraName"), N("NNNNN", 0, 0, "eraNarrow"), N("y", ["y", 1], "yo", "eraYear"), N("y", ["yy", 2], 0, "eraYear"), N("y", ["yyy", 3], 0, "eraYear"), N("y", ["yyyy", 4], 0, "eraYear"), ae("N", Af), ae("NN", Af), ae("NNN", Af), ae("NNNN", sT), ae("NNNNN", lT), We(["N", "NN", "NNN", "NNNN", "NNNNN"], function(f, p, w, S) {
            var F = w._locale.erasParse(f, S, w._strict);
            F ? g(w).era = F : g(w).invalidEra = f
        }), ae("y", ge), ae("yy", ge), ae("yyy", ge), ae("yyyy", ge), ae("yo", uT), We(["y", "yy", "yyy", "yyyy"], Ot), We(["yo"], function(f, p, w, S) {
            var F;
            w._locale._eraYearOrdinalRegex && (F = f.match(w._locale._eraYearOrdinalRegex)), w._locale.eraYearOrdinalParse ? p[Ot] = w._locale.eraYearOrdinalParse(f, F) : p[Ot] = parseInt(f, 10)
        });

        function ZM(f, p) {
            var w, S, F, j = this._eras || Ci("en")._eras;
            for (w = 0, S = j.length; w < S; ++w) {
                switch (typeof j[w].since) {
                    case "string":
                        F = t(j[w].since).startOf("day"), j[w].since = F.valueOf();
                        break
                }
                switch (typeof j[w].until) {
                    case "undefined":
                        j[w].until = 1 / 0;
                        break;
                    case "string":
                        F = t(j[w].until).startOf("day").valueOf(), j[w].until = F.valueOf();
                        break
                }
            }
            return j
        }

        function QM(f, p, w) {
            var S, F, j = this.eras(),
                se, Pe, ut;
            for (f = f.toUpperCase(), S = 0, F = j.length; S < F; ++S)
                if (se = j[S].name.toUpperCase(), Pe = j[S].abbr.toUpperCase(), ut = j[S].narrow.toUpperCase(), w) switch (p) {
                    case "N":
                    case "NN":
                    case "NNN":
                        if (Pe === f) return j[S];
                        break;
                    case "NNNN":
                        if (se === f) return j[S];
                        break;
                    case "NNNNN":
                        if (ut === f) return j[S];
                        break
                } else if ([se, Pe, ut].indexOf(f) >= 0) return j[S]
        }

        function XM(f, p) {
            var w = f.since <= f.until ? 1 : -1;
            return p === void 0 ? t(f.since).year() : t(f.since).year() + (p - f.offset) * w
        }

        function eT() {
            var f, p, w, S = this.localeData().eras();
            for (f = 0, p = S.length; f < p; ++f)
                if (w = this.clone().startOf("day").valueOf(), S[f].since <= w && w <= S[f].until || S[f].until <= w && w <= S[f].since) return S[f].name;
            return ""
        }

        function tT() {
            var f, p, w, S = this.localeData().eras();
            for (f = 0, p = S.length; f < p; ++f)
                if (w = this.clone().startOf("day").valueOf(), S[f].since <= w && w <= S[f].until || S[f].until <= w && w <= S[f].since) return S[f].narrow;
            return ""
        }

        function nT() {
            var f, p, w, S = this.localeData().eras();
            for (f = 0, p = S.length; f < p; ++f)
                if (w = this.clone().startOf("day").valueOf(), S[f].since <= w && w <= S[f].until || S[f].until <= w && w <= S[f].since) return S[f].abbr;
            return ""
        }

        function rT() {
            var f, p, w, S, F = this.localeData().eras();
            for (f = 0, p = F.length; f < p; ++f)
                if (w = F[f].since <= F[f].until ? 1 : -1, S = this.clone().startOf("day").valueOf(), F[f].since <= S && S <= F[f].until || F[f].until <= S && S <= F[f].since) return (this.year() - t(F[f].since).year()) * w + F[f].offset;
            return this.year()
        }

        function iT(f) {
            return a(this, "_erasNameRegex") || Of.call(this), f ? this._erasNameRegex : this._erasRegex
        }

        function aT(f) {
            return a(this, "_erasAbbrRegex") || Of.call(this), f ? this._erasAbbrRegex : this._erasRegex
        }

        function oT(f) {
            return a(this, "_erasNarrowRegex") || Of.call(this), f ? this._erasNarrowRegex : this._erasRegex
        }

        function Af(f, p) {
            return p.erasAbbrRegex(f)
        }

        function sT(f, p) {
            return p.erasNameRegex(f)
        }

        function lT(f, p) {
            return p.erasNarrowRegex(f)
        }

        function uT(f, p) {
            return p._eraYearOrdinalRegex || ge
        }

        function Of() {
            var f = [],
                p = [],
                w = [],
                S = [],
                F, j, se = this.eras();
            for (F = 0, j = se.length; F < j; ++F) p.push(Te(se[F].name)), f.push(Te(se[F].abbr)), w.push(Te(se[F].narrow)), S.push(Te(se[F].name)), S.push(Te(se[F].abbr)), S.push(Te(se[F].narrow));
            this._erasRegex = new RegExp("^(" + S.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + w.join("|") + ")", "i")
        }
        N(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), N(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        });

        function uu(f, p) {
            N(0, [f, f.length], 0, p)
        }
        uu("gggg", "weekYear"), uu("ggggg", "weekYear"), uu("GGGG", "isoWeekYear"), uu("GGGGG", "isoWeekYear"), Rt("weekYear", "gg"), Rt("isoWeekYear", "GG"), Bt("weekYear", 1), Bt("isoWeekYear", 1), ae("G", M), ae("g", M), ae("GG", L, Ht), ae("gg", L, Ht), ae("GGGG", de, ht), ae("gggg", de, ht), ae("GGGGG", ve, St), ae("ggggg", ve, St), Ft(["gggg", "ggggg", "GGGG", "GGGGG"], function(f, p, w, S) {
            p[S.substr(0, 2)] = Z(f)
        }), Ft(["gg", "GG"], function(f, p, w, S) {
            p[S] = t.parseTwoDigitYear(f)
        });

        function cT(f) {
            return Zy.call(this, f, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function dT(f) {
            return Zy.call(this, f, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function fT() {
            return xi(this.year(), 1, 4)
        }

        function hT() {
            return xi(this.isoWeekYear(), 1, 4)
        }

        function mT() {
            var f = this.localeData()._week;
            return xi(this.year(), f.dow, f.doy)
        }

        function pT() {
            var f = this.localeData()._week;
            return xi(this.weekYear(), f.dow, f.doy)
        }

        function Zy(f, p, w, S, F) {
            var j;
            return f == null ? Ns(this, S, F).year : (j = xi(f, S, F), p > j && (p = j), gT.call(this, f, p, w, S, F))
        }

        function gT(f, p, w, S, F) {
            var j = My(f, p, w, S, F),
                se = kr(j.year, 0, j.dayOfYear);
            return this.year(se.getUTCFullYear()), this.month(se.getUTCMonth()), this.date(se.getUTCDate()), this
        }
        N("Q", 0, "Qo", "quarter"), Rt("quarter", "Q"), Bt("quarter", 7), ae("Q", _n), We("Q", function(f, p) {
            p[or] = (Z(f) - 1) * 3
        });

        function yT(f) {
            return f == null ? Math.ceil((this.month() + 1) / 3) : this.month((f - 1) * 3 + this.month() % 3)
        }
        N("D", ["DD", 2], "Do", "date"), Rt("date", "D"), Bt("date", 9), ae("D", L), ae("DD", L, Ht), ae("Do", function(f, p) {
            return f ? p._dayOfMonthOrdinalParse || p._ordinalParse : p._dayOfMonthOrdinalParseLenient
        }), We(["D", "DD"], sr), We("Do", function(f, p) {
            p[sr] = Z(f.match(L)[0])
        });
        var Qy = me("Date", !0);
        N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), Rt("dayOfYear", "DDD"), Bt("dayOfYear", 4), ae("DDD", ue), ae("DDDD", ar), We(["DDD", "DDDD"], function(f, p, w) {
            w._dayOfYear = Z(f)
        });

        function vT(f) {
            var p = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return f == null ? p : this.add(f - p, "d")
        }
        N("m", ["mm", 2], 0, "minute"), Rt("minute", "m"), Bt("minute", 14), ae("m", L), ae("mm", L, Ht), We(["m", "mm"], Bn);
        var wT = me("Minutes", !1);
        N("s", ["ss", 2], 0, "second"), Rt("second", "s"), Bt("second", 15), ae("s", L), ae("ss", L, Ht), We(["s", "ss"], Er);
        var bT = me("Seconds", !1);
        N("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), N(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), N(0, ["SSS", 3], 0, "millisecond"), N(0, ["SSSS", 4], 0, function() {
            return this.millisecond() * 10
        }), N(0, ["SSSSS", 5], 0, function() {
            return this.millisecond() * 100
        }), N(0, ["SSSSSS", 6], 0, function() {
            return this.millisecond() * 1e3
        }), N(0, ["SSSSSSS", 7], 0, function() {
            return this.millisecond() * 1e4
        }), N(0, ["SSSSSSSS", 8], 0, function() {
            return this.millisecond() * 1e5
        }), N(0, ["SSSSSSSSS", 9], 0, function() {
            return this.millisecond() * 1e6
        }), Rt("millisecond", "ms"), Bt("millisecond", 16), ae("S", ue, _n), ae("SS", ue, Ht), ae("SSS", ue, ar);
        var ra, Xy;
        for (ra = "SSSS"; ra.length <= 9; ra += "S") ae(ra, ge);

        function DT(f, p) {
            p[Gr] = Z(("0." + f) * 1e3)
        }
        for (ra = "S"; ra.length <= 9; ra += "S") We(ra, DT);
        Xy = me("Milliseconds", !1), N("z", 0, 0, "zoneAbbr"), N("zz", 0, 0, "zoneName");

        function ST() {
            return this._isUTC ? "UTC" : ""
        }

        function ET() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }
        var we = O.prototype;
        we.add = pM, we.calendar = SM, we.clone = EM, we.diff = FM, we.endOf = VM, we.format = LM, we.from = PM, we.fromNow = NM, we.to = RM, we.toNow = HM, we.get = Dt, we.invalidAt = GM, we.isAfter = kM, we.isBefore = xM, we.isBetween = CM, we.isSame = _M, we.isSameOrAfter = MM, we.isSameOrBefore = TM, we.isValid = jM, we.lang = Ky, we.locale = zy, we.localeData = jy, we.max = j1, we.min = K1, we.parsingFlags = qM, we.set = Cn, we.startOf = BM, we.subtract = gM, we.toArray = YM, we.toObject = zM, we.toDate = WM, we.toISOString = AM, we.inspect = OM, typeof Symbol != "undefined" && Symbol.for != null && (we[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">"
        }), we.toJSON = KM, we.toString = IM, we.unix = UM, we.valueOf = $M, we.creationData = JM, we.eraName = eT, we.eraNarrow = tT, we.eraAbbr = nT, we.eraYear = rT, we.year = On, we.isLeapYear = Vn, we.weekYear = cT, we.isoWeekYear = dT, we.quarter = we.quarters = yT, we.month = ot, we.daysInMonth = qe, we.week = we.weeks = Z_, we.isoWeek = we.isoWeeks = Q_, we.weeksInYear = mT, we.weeksInWeekYear = pT, we.isoWeeksInYear = fT, we.isoWeeksInISOWeekYear = hT, we.date = Qy, we.day = we.days = d1, we.weekday = f1, we.isoWeekday = h1, we.dayOfYear = vT, we.hour = we.hours = b1, we.minute = we.minutes = wT, we.second = we.seconds = bT, we.millisecond = we.milliseconds = Xy, we.utcOffset = nM, we.utc = iM, we.local = aM, we.parseZone = oM, we.hasAlignedHourOffset = sM, we.isDST = lM, we.isLocal = cM, we.isUtcOffset = dM, we.isUtc = Vy, we.isUTC = Vy, we.zoneAbbr = ST, we.zoneName = ET, we.dates = B("dates accessor is deprecated. Use date instead.", Qy), we.months = B("months accessor is deprecated. Use month instead", ot), we.years = B("years accessor is deprecated. Use year instead", On), we.zone = B("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", rM), we.isDSTShifted = B("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", uM);

        function kT(f) {
            return Zt(f * 1e3)
        }

        function xT() {
            return Zt.apply(null, arguments).parseZone()
        }

        function ev(f) {
            return f
        }
        var Lt = re.prototype;
        Lt.calendar = pe, Lt.longDateFormat = Wt, Lt.invalidDate = Jt, Lt.ordinal = yn, Lt.preparse = ev, Lt.postformat = ev, Lt.relativeTime = xn, Lt.pastFuture = jn, Lt.set = oe, Lt.eras = ZM, Lt.erasParse = QM, Lt.erasConvertYear = XM, Lt.erasAbbrRegex = aT, Lt.erasNameRegex = iT, Lt.erasNarrowRegex = oT, Lt.months = he, Lt.monthsShort = Me, Lt.monthsParse = Le, Lt.monthsRegex = st, Lt.monthsShortRegex = yt, Lt.week = j_, Lt.firstDayOfYear = J_, Lt.firstDayOfWeek = G_, Lt.weekdays = o1, Lt.weekdaysMin = l1, Lt.weekdaysShort = s1, Lt.weekdaysParse = c1, Lt.weekdaysRegex = m1, Lt.weekdaysShortRegex = p1, Lt.weekdaysMinRegex = g1, Lt.isPM = v1, Lt.meridiem = D1;

        function cu(f, p, w, S) {
            var F = Ci(),
                j = m().set(S, p);
            return F[w](j, f)
        }

        function tv(f, p, w) {
            if (u(f) && (p = f, f = void 0), f = f || "", p != null) return cu(f, p, w, "month");
            var S, F = [];
            for (S = 0; S < 12; S++) F[S] = cu(f, S, w, "month");
            return F
        }

        function Lf(f, p, w, S) {
            typeof f == "boolean" ? (u(p) && (w = p, p = void 0), p = p || "") : (p = f, w = p, f = !1, u(p) && (w = p, p = void 0), p = p || "");
            var F = Ci(),
                j = f ? F._week.dow : 0,
                se, Pe = [];
            if (w != null) return cu(p, (w + j) % 7, S, "day");
            for (se = 0; se < 7; se++) Pe[se] = cu(p, (se + j) % 7, S, "day");
            return Pe
        }

        function CT(f, p) {
            return tv(f, p, "months")
        }

        function _T(f, p) {
            return tv(f, p, "monthsShort")
        }

        function MT(f, p, w) {
            return Lf(f, p, w, "weekdays")
        }

        function TT(f, p, w) {
            return Lf(f, p, w, "weekdaysShort")
        }

        function FT(f, p, w) {
            return Lf(f, p, w, "weekdaysMin")
        }
        na("en", {
            eras: [{
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD"
            }, {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC"
            }],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(f) {
                var p = f % 10,
                    w = Z(f % 100 / 10) === 1 ? "th" : p === 1 ? "st" : p === 2 ? "nd" : p === 3 ? "rd" : "th";
                return f + w
            }
        }), t.lang = B("moment.lang is deprecated. Use moment.locale instead.", na), t.langData = B("moment.langData is deprecated. Use moment.localeData instead.", Ci);
        var _i = Math.abs;

        function IT() {
            var f = this._data;
            return this._milliseconds = _i(this._milliseconds), this._days = _i(this._days), this._months = _i(this._months), f.milliseconds = _i(f.milliseconds), f.seconds = _i(f.seconds), f.minutes = _i(f.minutes), f.hours = _i(f.hours), f.months = _i(f.months), f.years = _i(f.years), this
        }

        function nv(f, p, w, S) {
            var F = Zr(p, w);
            return f._milliseconds += S * F._milliseconds, f._days += S * F._days, f._months += S * F._months, f._bubble()
        }

        function AT(f, p) {
            return nv(this, f, p, 1)
        }

        function OT(f, p) {
            return nv(this, f, p, -1)
        }

        function rv(f) {
            return f < 0 ? Math.floor(f) : Math.ceil(f)
        }

        function LT() {
            var f = this._milliseconds,
                p = this._days,
                w = this._months,
                S = this._data,
                F, j, se, Pe, ut;
            return f >= 0 && p >= 0 && w >= 0 || f <= 0 && p <= 0 && w <= 0 || (f += rv(Pf(w) + p) * 864e5, p = 0, w = 0), S.milliseconds = f % 1e3, F = At(f / 1e3), S.seconds = F % 60, j = At(F / 60), S.minutes = j % 60, se = At(j / 60), S.hours = se % 24, p += At(se / 24), ut = At(iv(p)), w += ut, p -= rv(Pf(ut)), Pe = At(w / 12), w %= 12, S.days = p, S.months = w, S.years = Pe, this
        }

        function iv(f) {
            return f * 4800 / 146097
        }

        function Pf(f) {
            return f * 146097 / 4800
        }

        function PT(f) {
            if (!this.isValid()) return NaN;
            var p, w, S = this._milliseconds;
            if (f = Vt(f), f === "month" || f === "quarter" || f === "year") switch (p = this._days + S / 864e5, w = this._months + iv(p), f) {
                case "month":
                    return w;
                case "quarter":
                    return w / 3;
                case "year":
                    return w / 12
            } else switch (p = this._days + Math.round(Pf(this._months)), f) {
                case "week":
                    return p / 7 + S / 6048e5;
                case "day":
                    return p + S / 864e5;
                case "hour":
                    return p * 24 + S / 36e5;
                case "minute":
                    return p * 1440 + S / 6e4;
                case "second":
                    return p * 86400 + S / 1e3;
                case "millisecond":
                    return Math.floor(p * 864e5) + S;
                default:
                    throw new Error("Unknown unit " + f)
            }
        }

        function NT() {
            return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Z(this._months / 12) * 31536e6 : NaN
        }

        function Mi(f) {
            return function() {
                return this.as(f)
            }
        }
        var RT = Mi("ms"),
            HT = Mi("s"),
            BT = Mi("m"),
            VT = Mi("h"),
            $T = Mi("d"),
            UT = Mi("w"),
            WT = Mi("M"),
            YT = Mi("Q"),
            zT = Mi("y");

        function KT() {
            return Zr(this)
        }

        function jT(f) {
            return f = Vt(f), this.isValid() ? this[f + "s"]() : NaN
        }

        function Ba(f) {
            return function() {
                return this.isValid() ? this._data[f] : NaN
            }
        }
        var qT = Ba("milliseconds"),
            GT = Ba("seconds"),
            JT = Ba("minutes"),
            ZT = Ba("hours"),
            QT = Ba("days"),
            XT = Ba("months"),
            eF = Ba("years");

        function tF() {
            return At(this.days() / 7)
        }
        var Ti = Math.round,
            Eo = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                w: null,
                M: 11
            };

        function nF(f, p, w, S, F) {
            return F.relativeTime(p || 1, !!w, f, S)
        }

        function rF(f, p, w, S) {
            var F = Zr(f).abs(),
                j = Ti(F.as("s")),
                se = Ti(F.as("m")),
                Pe = Ti(F.as("h")),
                ut = Ti(F.as("d")),
                $t = Ti(F.as("M")),
                lr = Ti(F.as("w")),
                Fi = Ti(F.as("y")),
                ia = j <= w.ss && ["s", j] || j < w.s && ["ss", j] || se <= 1 && ["m"] || se < w.m && ["mm", se] || Pe <= 1 && ["h"] || Pe < w.h && ["hh", Pe] || ut <= 1 && ["d"] || ut < w.d && ["dd", ut];
            return w.w != null && (ia = ia || lr <= 1 && ["w"] || lr < w.w && ["ww", lr]), ia = ia || $t <= 1 && ["M"] || $t < w.M && ["MM", $t] || Fi <= 1 && ["y"] || ["yy", Fi], ia[2] = p, ia[3] = +f > 0, ia[4] = S, nF.apply(null, ia)
        }

        function iF(f) {
            return f === void 0 ? Ti : typeof f == "function" ? (Ti = f, !0) : !1
        }

        function aF(f, p) {
            return Eo[f] === void 0 ? !1 : p === void 0 ? Eo[f] : (Eo[f] = p, f === "s" && (Eo.ss = p - 1), !0)
        }

        function oF(f, p) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var w = !1,
                S = Eo,
                F, j;
            return typeof f == "object" && (p = f, f = !1), typeof f == "boolean" && (w = f), typeof p == "object" && (S = Object.assign({}, Eo, p), p.s != null && p.ss == null && (S.ss = p.s - 1)), F = this.localeData(), j = rF(this, !w, S, F), w && (j = F.pastFuture(+this, j)), F.postformat(j)
        }
        var Nf = Math.abs;

        function ko(f) {
            return (f > 0) - (f < 0) || +f
        }

        function du() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var f = Nf(this._milliseconds) / 1e3,
                p = Nf(this._days),
                w = Nf(this._months),
                S, F, j, se, Pe = this.asSeconds(),
                ut, $t, lr, Fi;
            return Pe ? (S = At(f / 60), F = At(S / 60), f %= 60, S %= 60, j = At(w / 12), w %= 12, se = f ? f.toFixed(3).replace(/\.?0+$/, "") : "", ut = Pe < 0 ? "-" : "", $t = ko(this._months) !== ko(Pe) ? "-" : "", lr = ko(this._days) !== ko(Pe) ? "-" : "", Fi = ko(this._milliseconds) !== ko(Pe) ? "-" : "", ut + "P" + (j ? $t + j + "Y" : "") + (w ? $t + w + "M" : "") + (p ? lr + p + "D" : "") + (F || S || f ? "T" : "") + (F ? Fi + F + "H" : "") + (S ? Fi + S + "M" : "") + (f ? Fi + se + "S" : "")) : "P0D"
        }
        var xt = iu.prototype;
        xt.isValid = Q1, xt.abs = IT, xt.add = AT, xt.subtract = OT, xt.as = PT, xt.asMilliseconds = RT, xt.asSeconds = HT, xt.asMinutes = BT, xt.asHours = VT, xt.asDays = $T, xt.asWeeks = UT, xt.asMonths = WT, xt.asQuarters = YT, xt.asYears = zT, xt.valueOf = NT, xt._bubble = LT, xt.clone = KT, xt.get = jT, xt.milliseconds = qT, xt.seconds = GT, xt.minutes = JT, xt.hours = ZT, xt.days = QT, xt.weeks = tF, xt.months = XT, xt.years = eF, xt.humanize = oF, xt.toISOString = du, xt.toString = du, xt.toJSON = du, xt.locale = zy, xt.localeData = jy, xt.toIsoString = B("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", du), xt.lang = Ky, N("X", 0, 0, "unix"), N("x", 0, 0, "valueOf"), ae("x", M), ae("X", ie), We("X", function(f, p, w) {
            w._d = new Date(parseFloat(f) * 1e3)
        }), We("x", function(f, p, w) {
            w._d = new Date(Z(f))
        });
        return t.version = "2.29.4", r(Zt), t.fn = we, t.min = q1, t.max = G1, t.now = J1, t.utc = m, t.unix = kT, t.months = CT, t.isDate = l, t.locale = na, t.invalid = D, t.duration = Zr, t.isMoment = A, t.weekdays = MT, t.parseZone = xT, t.localeData = Ci, t.isDuration = au, t.monthsShort = _T, t.weekdaysMin = FT, t.defineLocale = Ef, t.updateLocale = x1, t.locales = C1, t.weekdaysShort = TT, t.normalizeUnits = Vt, t.relativeTimeRounding = iF, t.relativeTimeThreshold = aF, t.calendarFormat = DM, t.prototype = we, t.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM"
        }, t
    })
});
var dx = wn((Fd, _g) => {
    (function(t, r) {
        typeof Fd == "object" && typeof _g == "object" ? _g.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof Fd == "object" ? Fd.Choices = r() : t.Choices = r()
    })(window, function() {
        return function(e) {
            var t = {};

            function r(n) {
                if (t[n]) return t[n].exports;
                var i = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
            }
            return r.m = e, r.c = t, r.d = function(n, i, a) {
                r.o(n, i) || Object.defineProperty(n, i, {
                    enumerable: !0,
                    get: a
                })
            }, r.r = function(n) {
                typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                })
            }, r.t = function(n, i) {
                if (i & 1 && (n = r(n)), i & 8 || i & 4 && typeof n == "object" && n && n.__esModule) return n;
                var a = Object.create(null);
                if (r.r(a), Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: n
                    }), i & 2 && typeof n != "string")
                    for (var o in n) r.d(a, o, function(s) {
                        return n[s]
                    }.bind(null, o));
                return a
            }, r.n = function(n) {
                var i = n && n.__esModule ? function() {
                    return n.default
                } : function() {
                    return n
                };
                return r.d(i, "a", i), i
            }, r.o = function(n, i) {
                return Object.prototype.hasOwnProperty.call(n, i)
            }, r.p = "/public/assets/scripts/", r(r.s = 4)
        }([function(e, t, r) {
            "use strict";
            var n = function(x) {
                return i(x) && !a(x)
            };

            function i(C) {
                return !!C && typeof C == "object"
            }

            function a(C) {
                var x = Object.prototype.toString.call(C);
                return x === "[object RegExp]" || x === "[object Date]" || u(C)
            }
            var o = typeof Symbol == "function" && Symbol.for,
                s = o ? Symbol.for("react.element") : 60103;

            function u(C) {
                return C.$$typeof === s
            }

            function l(C) {
                return Array.isArray(C) ? [] : {}
            }

            function c(C, x) {
                return x.clone !== !1 && x.isMergeableObject(C) ? D(l(C), C, x) : C
            }

            function d(C, x, O) {
                return C.concat(x).map(function(A) {
                    return c(A, O)
                })
            }

            function m(C, x) {
                if (!x.customMerge) return D;
                var O = x.customMerge(C);
                return typeof O == "function" ? O : D
            }

            function h(C) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(C).filter(function(x) {
                    return C.propertyIsEnumerable(x)
                }) : []
            }

            function g(C) {
                return Object.keys(C).concat(h(C))
            }

            function y(C, x) {
                try {
                    return x in C && !(Object.hasOwnProperty.call(C, x) && Object.propertyIsEnumerable.call(C, x))
                } catch (O) {
                    return !1
                }
            }

            function v(C, x, O) {
                var A = {};
                return O.isMergeableObject(C) && g(C).forEach(function(P) {
                    A[P] = c(C[P], O)
                }), g(x).forEach(function(P) {
                    y(C, P) || (!O.isMergeableObject(x[P]) || !C[P] ? A[P] = c(x[P], O) : A[P] = m(P, O)(C[P], x[P], O))
                }), A
            }

            function D(C, x, O) {
                O = O || {}, O.arrayMerge = O.arrayMerge || d, O.isMergeableObject = O.isMergeableObject || n, O.cloneUnlessOtherwiseSpecified = c;
                var A = Array.isArray(x),
                    P = Array.isArray(C),
                    B = A === P;
                return B ? A ? O.arrayMerge(C, x, O) : v(C, x, O) : c(x, O)
            }
            D.all = function(x, O) {
                if (!Array.isArray(x)) throw new Error("first argument should be an array");
                return x.reduce(function(A, P) {
                    return D(A, P, O)
                }, {})
            };
            var I = D;
            e.exports = I
        }, function(e, t, r) {
            "use strict";
            (function(n, i) {
                var a = r(3),
                    o;
                typeof self != "undefined" ? o = self : typeof window != "undefined" ? o = window : typeof n != "undefined" ? o = n : o = i;
                var s = Object(a.a)(o);
                t.a = s
            }).call(this, r(5), r(6)(e))
        }, function(e, t, r) {
            (function(n, i) {
                e.exports = i()
            })(this, function() {
                return function(n) {
                    var i = {};

                    function a(o) {
                        if (i[o]) return i[o].exports;
                        var s = i[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return n[o].call(s.exports, s, s.exports, a), s.l = !0, s.exports
                    }
                    return a.m = n, a.c = i, a.d = function(o, s, u) {
                        a.o(o, s) || Object.defineProperty(o, s, {
                            enumerable: !0,
                            get: u
                        })
                    }, a.r = function(o) {
                        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(o, "__esModule", {
                            value: !0
                        })
                    }, a.t = function(o, s) {
                        if (1 & s && (o = a(o)), 8 & s || 4 & s && typeof o == "object" && o && o.__esModule) return o;
                        var u = Object.create(null);
                        if (a.r(u), Object.defineProperty(u, "default", {
                                enumerable: !0,
                                value: o
                            }), 2 & s && typeof o != "string")
                            for (var l in o) a.d(u, l, function(c) {
                                return o[c]
                            }.bind(null, l));
                        return u
                    }, a.n = function(o) {
                        var s = o && o.__esModule ? function() {
                            return o.default
                        } : function() {
                            return o
                        };
                        return a.d(s, "a", s), s
                    }, a.o = function(o, s) {
                        return Object.prototype.hasOwnProperty.call(o, s)
                    }, a.p = "", a(a.s = 1)
                }([function(n, i) {
                    n.exports = function(a) {
                        return Array.isArray ? Array.isArray(a) : Object.prototype.toString.call(a) === "[object Array]"
                    }
                }, function(n, i, a) {
                    function o(m) {
                        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
                            return typeof h
                        } : function(h) {
                            return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
                        })(m)
                    }

                    function s(m, h) {
                        for (var g = 0; g < h.length; g++) {
                            var y = h[g];
                            y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(m, y.key, y)
                        }
                    }
                    var u = a(2),
                        l = a(8),
                        c = a(0),
                        d = function() {
                            function m(v, D) {
                                var I = D.location,
                                    C = I === void 0 ? 0 : I,
                                    x = D.distance,
                                    O = x === void 0 ? 100 : x,
                                    A = D.threshold,
                                    P = A === void 0 ? .6 : A,
                                    B = D.maxPatternLength,
                                    G = B === void 0 ? 32 : B,
                                    J = D.caseSensitive,
                                    Q = J !== void 0 && J,
                                    oe = D.tokenSeparator,
                                    te = oe === void 0 ? / +/g : oe,
                                    re = D.findAllMatches,
                                    ne = re !== void 0 && re,
                                    be = D.minMatchCharLength,
                                    pe = be === void 0 ? 1 : be,
                                    De = D.id,
                                    Ce = De === void 0 ? null : De,
                                    U = D.keys,
                                    Je = U === void 0 ? [] : U,
                                    it = D.shouldSort,
                                    N = it === void 0 || it,
                                    Ze = D.getFn,
                                    It = Ze === void 0 ? l : Ze,
                                    Mt = D.sortFn,
                                    jt = Mt === void 0 ? function(sn, Rt) {
                                        return sn.score - Rt.score
                                    } : Mt,
                                    vt = D.tokenize,
                                    Wt = vt !== void 0 && vt,
                                    Tt = D.matchAllTokens,
                                    Jt = Tt !== void 0 && Tt,
                                    en = D.includeMatches,
                                    gn = en !== void 0 && en,
                                    yn = D.includeScore,
                                    vn = yn !== void 0 && yn,
                                    xn = D.verbose,
                                    jn = xn !== void 0 && xn;
                                (function(sn, Rt) {
                                    if (!(sn instanceof Rt)) throw new TypeError("Cannot call a class as a function")
                                })(this, m), this.options = {
                                    location: C,
                                    distance: O,
                                    threshold: P,
                                    maxPatternLength: G,
                                    isCaseSensitive: Q,
                                    tokenSeparator: te,
                                    findAllMatches: ne,
                                    minMatchCharLength: pe,
                                    id: Ce,
                                    keys: Je,
                                    includeMatches: gn,
                                    includeScore: vn,
                                    shouldSort: N,
                                    getFn: It,
                                    sortFn: jt,
                                    verbose: jn,
                                    tokenize: Wt,
                                    matchAllTokens: Jt
                                }, this.setCollection(v)
                            }
                            var h, g, y;
                            return h = m, (g = [{
                                key: "setCollection",
                                value: function(v) {
                                    return this.list = v, v
                                }
                            }, {
                                key: "search",
                                value: function(v) {
                                    var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                        limit: !1
                                    };
                                    this._log(`---------
Search pattern: "`.concat(v, '"'));
                                    var I = this._prepareSearchers(v),
                                        C = I.tokenSearchers,
                                        x = I.fullSearcher,
                                        O = this._search(C, x),
                                        A = O.weights,
                                        P = O.results;
                                    return this._computeScore(A, P), this.options.shouldSort && this._sort(P), D.limit && typeof D.limit == "number" && (P = P.slice(0, D.limit)), this._format(P)
                                }
                            }, {
                                key: "_prepareSearchers",
                                value: function() {
                                    var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
                                        D = [];
                                    if (this.options.tokenize)
                                        for (var I = v.split(this.options.tokenSeparator), C = 0, x = I.length; C < x; C += 1) D.push(new u(I[C], this.options));
                                    return {
                                        tokenSearchers: D,
                                        fullSearcher: new u(v, this.options)
                                    }
                                }
                            }, {
                                key: "_search",
                                value: function() {
                                    var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                                        D = arguments.length > 1 ? arguments[1] : void 0,
                                        I = this.list,
                                        C = {},
                                        x = [];
                                    if (typeof I[0] == "string") {
                                        for (var O = 0, A = I.length; O < A; O += 1) this._analyze({
                                            key: "",
                                            value: I[O],
                                            record: O,
                                            index: O
                                        }, {
                                            resultMap: C,
                                            results: x,
                                            tokenSearchers: v,
                                            fullSearcher: D
                                        });
                                        return {
                                            weights: null,
                                            results: x
                                        }
                                    }
                                    for (var P = {}, B = 0, G = I.length; B < G; B += 1)
                                        for (var J = I[B], Q = 0, oe = this.options.keys.length; Q < oe; Q += 1) {
                                            var te = this.options.keys[Q];
                                            if (typeof te != "string") {
                                                if (P[te.name] = {
                                                        weight: 1 - te.weight || 1
                                                    }, te.weight <= 0 || te.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                                                te = te.name
                                            } else P[te] = {
                                                weight: 1
                                            };
                                            this._analyze({
                                                key: te,
                                                value: this.options.getFn(J, te),
                                                record: J,
                                                index: B
                                            }, {
                                                resultMap: C,
                                                results: x,
                                                tokenSearchers: v,
                                                fullSearcher: D
                                            })
                                        }
                                    return {
                                        weights: P,
                                        results: x
                                    }
                                }
                            }, {
                                key: "_analyze",
                                value: function(v, D) {
                                    var I = v.key,
                                        C = v.arrayIndex,
                                        x = C === void 0 ? -1 : C,
                                        O = v.value,
                                        A = v.record,
                                        P = v.index,
                                        B = D.tokenSearchers,
                                        G = B === void 0 ? [] : B,
                                        J = D.fullSearcher,
                                        Q = J === void 0 ? [] : J,
                                        oe = D.resultMap,
                                        te = oe === void 0 ? {} : oe,
                                        re = D.results,
                                        ne = re === void 0 ? [] : re;
                                    if (O != null) {
                                        var be = !1,
                                            pe = -1,
                                            De = 0;
                                        if (typeof O == "string") {
                                            this._log(`
Key: `.concat(I === "" ? "-" : I));
                                            var Ce = Q.search(O);
                                            if (this._log('Full text: "'.concat(O, '", score: ').concat(Ce.score)), this.options.tokenize) {
                                                for (var U = O.split(this.options.tokenSeparator), Je = [], it = 0; it < G.length; it += 1) {
                                                    var N = G[it];
                                                    this._log(`
Pattern: "`.concat(N.pattern, '"'));
                                                    for (var Ze = !1, It = 0; It < U.length; It += 1) {
                                                        var Mt = U[It],
                                                            jt = N.search(Mt),
                                                            vt = {};
                                                        jt.isMatch ? (vt[Mt] = jt.score, be = !0, Ze = !0, Je.push(jt.score)) : (vt[Mt] = 1, this.options.matchAllTokens || Je.push(1)), this._log('Token: "'.concat(Mt, '", score: ').concat(vt[Mt]))
                                                    }
                                                    Ze && (De += 1)
                                                }
                                                pe = Je[0];
                                                for (var Wt = Je.length, Tt = 1; Tt < Wt; Tt += 1) pe += Je[Tt];
                                                pe /= Wt, this._log("Token score average:", pe)
                                            }
                                            var Jt = Ce.score;
                                            pe > -1 && (Jt = (Jt + pe) / 2), this._log("Score average:", Jt);
                                            var en = !this.options.tokenize || !this.options.matchAllTokens || De >= G.length;
                                            if (this._log(`
Check Matches: `.concat(en)), (be || Ce.isMatch) && en) {
                                                var gn = te[P];
                                                gn ? gn.output.push({
                                                    key: I,
                                                    arrayIndex: x,
                                                    value: O,
                                                    score: Jt,
                                                    matchedIndices: Ce.matchedIndices
                                                }) : (te[P] = {
                                                    item: A,
                                                    output: [{
                                                        key: I,
                                                        arrayIndex: x,
                                                        value: O,
                                                        score: Jt,
                                                        matchedIndices: Ce.matchedIndices
                                                    }]
                                                }, ne.push(te[P]))
                                            }
                                        } else if (c(O))
                                            for (var yn = 0, vn = O.length; yn < vn; yn += 1) this._analyze({
                                                key: I,
                                                arrayIndex: yn,
                                                value: O[yn],
                                                record: A,
                                                index: P
                                            }, {
                                                resultMap: te,
                                                results: ne,
                                                tokenSearchers: G,
                                                fullSearcher: Q
                                            })
                                    }
                                }
                            }, {
                                key: "_computeScore",
                                value: function(v, D) {
                                    this._log(`

Computing score:
`);
                                    for (var I = 0, C = D.length; I < C; I += 1) {
                                        for (var x = D[I].output, O = x.length, A = 1, P = 1, B = 0; B < O; B += 1) {
                                            var G = v ? v[x[B].key].weight : 1,
                                                J = (G === 1 ? x[B].score : x[B].score || .001) * G;
                                            G !== 1 ? P = Math.min(P, J) : (x[B].nScore = J, A *= J)
                                        }
                                        D[I].score = P === 1 ? A : P, this._log(D[I])
                                    }
                                }
                            }, {
                                key: "_sort",
                                value: function(v) {
                                    this._log(`

Sorting....`), v.sort(this.options.sortFn)
                                }
                            }, {
                                key: "_format",
                                value: function(v) {
                                    var D = [];
                                    if (this.options.verbose) {
                                        var I = [];
                                        this._log(`

Output:

`, JSON.stringify(v, function(J, Q) {
                                            if (o(Q) === "object" && Q !== null) {
                                                if (I.indexOf(Q) !== -1) return;
                                                I.push(Q)
                                            }
                                            return Q
                                        })), I = null
                                    }
                                    var C = [];
                                    this.options.includeMatches && C.push(function(J, Q) {
                                        var oe = J.output;
                                        Q.matches = [];
                                        for (var te = 0, re = oe.length; te < re; te += 1) {
                                            var ne = oe[te];
                                            if (ne.matchedIndices.length !== 0) {
                                                var be = {
                                                    indices: ne.matchedIndices,
                                                    value: ne.value
                                                };
                                                ne.key && (be.key = ne.key), ne.hasOwnProperty("arrayIndex") && ne.arrayIndex > -1 && (be.arrayIndex = ne.arrayIndex), Q.matches.push(be)
                                            }
                                        }
                                    }), this.options.includeScore && C.push(function(J, Q) {
                                        Q.score = J.score
                                    });
                                    for (var x = 0, O = v.length; x < O; x += 1) {
                                        var A = v[x];
                                        if (this.options.id && (A.item = this.options.getFn(A.item, this.options.id)[0]), C.length) {
                                            for (var P = {
                                                    item: A.item
                                                }, B = 0, G = C.length; B < G; B += 1) C[B](A, P);
                                            D.push(P)
                                        } else D.push(A.item)
                                    }
                                    return D
                                }
                            }, {
                                key: "_log",
                                value: function() {
                                    var v;
                                    this.options.verbose && (v = console).log.apply(v, arguments)
                                }
                            }]) && s(h.prototype, g), y && s(h, y), m
                        }();
                    n.exports = d
                }, function(n, i, a) {
                    function o(d, m) {
                        for (var h = 0; h < m.length; h++) {
                            var g = m[h];
                            g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(d, g.key, g)
                        }
                    }
                    var s = a(3),
                        u = a(4),
                        l = a(7),
                        c = function() {
                            function d(y, v) {
                                var D = v.location,
                                    I = D === void 0 ? 0 : D,
                                    C = v.distance,
                                    x = C === void 0 ? 100 : C,
                                    O = v.threshold,
                                    A = O === void 0 ? .6 : O,
                                    P = v.maxPatternLength,
                                    B = P === void 0 ? 32 : P,
                                    G = v.isCaseSensitive,
                                    J = G !== void 0 && G,
                                    Q = v.tokenSeparator,
                                    oe = Q === void 0 ? / +/g : Q,
                                    te = v.findAllMatches,
                                    re = te !== void 0 && te,
                                    ne = v.minMatchCharLength,
                                    be = ne === void 0 ? 1 : ne;
                                (function(pe, De) {
                                    if (!(pe instanceof De)) throw new TypeError("Cannot call a class as a function")
                                })(this, d), this.options = {
                                    location: I,
                                    distance: x,
                                    threshold: A,
                                    maxPatternLength: B,
                                    isCaseSensitive: J,
                                    tokenSeparator: oe,
                                    findAllMatches: re,
                                    minMatchCharLength: be
                                }, this.pattern = this.options.isCaseSensitive ? y : y.toLowerCase(), this.pattern.length <= B && (this.patternAlphabet = l(this.pattern))
                            }
                            var m, h, g;
                            return m = d, (h = [{
                                key: "search",
                                value: function(y) {
                                    if (this.options.isCaseSensitive || (y = y.toLowerCase()), this.pattern === y) return {
                                        isMatch: !0,
                                        score: 0,
                                        matchedIndices: [
                                            [0, y.length - 1]
                                        ]
                                    };
                                    var v = this.options,
                                        D = v.maxPatternLength,
                                        I = v.tokenSeparator;
                                    if (this.pattern.length > D) return s(y, this.pattern, I);
                                    var C = this.options,
                                        x = C.location,
                                        O = C.distance,
                                        A = C.threshold,
                                        P = C.findAllMatches,
                                        B = C.minMatchCharLength;
                                    return u(y, this.pattern, this.patternAlphabet, {
                                        location: x,
                                        distance: O,
                                        threshold: A,
                                        findAllMatches: P,
                                        minMatchCharLength: B
                                    })
                                }
                            }]) && o(m.prototype, h), g && o(m, g), d
                        }();
                    n.exports = c
                }, function(n, i) {
                    var a = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
                    n.exports = function(o, s) {
                        var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : / +/g,
                            l = new RegExp(s.replace(a, "\\$&").replace(u, "|")),
                            c = o.match(l),
                            d = !!c,
                            m = [];
                        if (d)
                            for (var h = 0, g = c.length; h < g; h += 1) {
                                var y = c[h];
                                m.push([o.indexOf(y), y.length - 1])
                            }
                        return {
                            score: d ? .5 : 1,
                            isMatch: d,
                            matchedIndices: m
                        }
                    }
                }, function(n, i, a) {
                    var o = a(5),
                        s = a(6);
                    n.exports = function(u, l, c, d) {
                        for (var m = d.location, h = m === void 0 ? 0 : m, g = d.distance, y = g === void 0 ? 100 : g, v = d.threshold, D = v === void 0 ? .6 : v, I = d.findAllMatches, C = I !== void 0 && I, x = d.minMatchCharLength, O = x === void 0 ? 1 : x, A = h, P = u.length, B = D, G = u.indexOf(l, A), J = l.length, Q = [], oe = 0; oe < P; oe += 1) Q[oe] = 0;
                        if (G !== -1) {
                            var te = o(l, {
                                errors: 0,
                                currentLocation: G,
                                expectedLocation: A,
                                distance: y
                            });
                            if (B = Math.min(te, B), (G = u.lastIndexOf(l, A + J)) !== -1) {
                                var re = o(l, {
                                    errors: 0,
                                    currentLocation: G,
                                    expectedLocation: A,
                                    distance: y
                                });
                                B = Math.min(re, B)
                            }
                        }
                        G = -1;
                        for (var ne = [], be = 1, pe = J + P, De = 1 << J - 1, Ce = 0; Ce < J; Ce += 1) {
                            for (var U = 0, Je = pe; U < Je;) o(l, {
                                errors: Ce,
                                currentLocation: A + Je,
                                expectedLocation: A,
                                distance: y
                            }) <= B ? U = Je : pe = Je, Je = Math.floor((pe - U) / 2 + U);
                            pe = Je;
                            var it = Math.max(1, A - Je + 1),
                                N = C ? P : Math.min(A + Je, P) + J,
                                Ze = Array(N + 2);
                            Ze[N + 1] = (1 << Ce) - 1;
                            for (var It = N; It >= it; It -= 1) {
                                var Mt = It - 1,
                                    jt = c[u.charAt(Mt)];
                                if (jt && (Q[Mt] = 1), Ze[It] = (Ze[It + 1] << 1 | 1) & jt, Ce !== 0 && (Ze[It] |= (ne[It + 1] | ne[It]) << 1 | 1 | ne[It + 1]), Ze[It] & De && (be = o(l, {
                                        errors: Ce,
                                        currentLocation: Mt,
                                        expectedLocation: A,
                                        distance: y
                                    })) <= B) {
                                    if (B = be, (G = Mt) <= A) break;
                                    it = Math.max(1, 2 * A - G)
                                }
                            }
                            if (o(l, {
                                    errors: Ce + 1,
                                    currentLocation: A,
                                    expectedLocation: A,
                                    distance: y
                                }) > B) break;
                            ne = Ze
                        }
                        return {
                            isMatch: G >= 0,
                            score: be === 0 ? .001 : be,
                            matchedIndices: s(Q, O)
                        }
                    }
                }, function(n, i) {
                    n.exports = function(a, o) {
                        var s = o.errors,
                            u = s === void 0 ? 0 : s,
                            l = o.currentLocation,
                            c = l === void 0 ? 0 : l,
                            d = o.expectedLocation,
                            m = d === void 0 ? 0 : d,
                            h = o.distance,
                            g = h === void 0 ? 100 : h,
                            y = u / a.length,
                            v = Math.abs(m - c);
                        return g ? y + v / g : v ? 1 : y
                    }
                }, function(n, i) {
                    n.exports = function() {
                        for (var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, s = [], u = -1, l = -1, c = 0, d = a.length; c < d; c += 1) {
                            var m = a[c];
                            m && u === -1 ? u = c : m || u === -1 || ((l = c - 1) - u + 1 >= o && s.push([u, l]), u = -1)
                        }
                        return a[c - 1] && c - u >= o && s.push([u, c - 1]), s
                    }
                }, function(n, i) {
                    n.exports = function(a) {
                        for (var o = {}, s = a.length, u = 0; u < s; u += 1) o[a.charAt(u)] = 0;
                        for (var l = 0; l < s; l += 1) o[a.charAt(l)] |= 1 << s - l - 1;
                        return o
                    }
                }, function(n, i, a) {
                    var o = a(0);
                    n.exports = function(s, u) {
                        return function l(c, d, m) {
                            if (d) {
                                var h = d.indexOf("."),
                                    g = d,
                                    y = null;
                                h !== -1 && (g = d.slice(0, h), y = d.slice(h + 1));
                                var v = c[g];
                                if (v != null)
                                    if (y || typeof v != "string" && typeof v != "number")
                                        if (o(v))
                                            for (var D = 0, I = v.length; D < I; D += 1) l(v[D], y, m);
                                        else y && l(v, y, m);
                                else m.push(v.toString())
                            } else m.push(c);
                            return m
                        }(s, u, [])
                    }
                }])
            })
        }, function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return n
            });

            function n(i) {
                var a, o = i.Symbol;
                return typeof o == "function" ? o.observable ? a = o.observable : (a = o("observable"), o.observable = a) : a = "@@observable", a
            }
        }, function(e, t, r) {
            e.exports = r(7)
        }, function(e, t) {
            var r;
            r = function() {
                return this
            }();
            try {
                r = r || new Function("return this")()
            } catch (n) {
                typeof window == "object" && (r = window)
            }
            e.exports = r
        }, function(e, t) {
            e.exports = function(r) {
                if (!r.webpackPolyfill) {
                    var n = Object.create(r);
                    n.children || (n.children = []), Object.defineProperty(n, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return n.l
                        }
                    }), Object.defineProperty(n, "id", {
                        enumerable: !0,
                        get: function() {
                            return n.i
                        }
                    }), Object.defineProperty(n, "exports", {
                        enumerable: !0
                    }), n.webpackPolyfill = 1
                }
                return n
            }
        }, function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(2),
                i = r.n(n),
                a = r(0),
                o = r.n(a),
                s = r(1),
                u = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                l = {
                    INIT: "@@redux/INIT" + u(),
                    REPLACE: "@@redux/REPLACE" + u(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + u()
                    }
                };

            function c(z) {
                if (typeof z != "object" || z === null) return !1;
                for (var k = z; Object.getPrototypeOf(k) !== null;) k = Object.getPrototypeOf(k);
                return Object.getPrototypeOf(z) === k
            }

            function d(z, k, _) {
                var b;
                if (typeof k == "function" && typeof _ == "function" || typeof _ == "function" && typeof arguments[3] == "function") throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
                if (typeof k == "function" && typeof _ == "undefined" && (_ = k, k = void 0), typeof _ != "undefined") {
                    if (typeof _ != "function") throw new Error("Expected the enhancer to be a function.");
                    return _(d)(z, k)
                }
                if (typeof z != "function") throw new Error("Expected the reducer to be a function.");
                var T = z,
                    V = k,
                    Y = [],
                    X = Y,
                    le = !1;

                function he() {
                    X === Y && (X = Y.slice())
                }

                function Me() {
                    if (le) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                    return V
                }

                function Ve(qe) {
                    if (typeof qe != "function") throw new Error("Expected the listener to be a function.");
                    if (le) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    var yt = !0;
                    return he(), X.push(qe),
                        function() {
                            if (yt) {
                                if (le) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                                yt = !1, he();
                                var lt = X.indexOf(qe);
                                X.splice(lt, 1)
                            }
                        }
                }

                function Le(qe) {
                    if (!c(qe)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                    if (typeof qe.type == "undefined") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                    if (le) throw new Error("Reducers may not dispatch actions.");
                    try {
                        le = !0, V = T(V, qe)
                    } finally {
                        le = !1
                    }
                    for (var yt = Y = X, st = 0; st < yt.length; st++) {
                        var lt = yt[st];
                        lt()
                    }
                    return qe
                }

                function Qe(qe) {
                    if (typeof qe != "function") throw new Error("Expected the nextReducer to be a function.");
                    T = qe, Le({
                        type: l.REPLACE
                    })
                }

                function ot() {
                    var qe, yt = Ve;
                    return qe = {
                        subscribe: function(lt) {
                            if (typeof lt != "object" || lt === null) throw new TypeError("Expected the observer to be an object.");

                            function qt() {
                                lt.next && lt.next(Me())
                            }
                            qt();
                            var On = yt(qt);
                            return {
                                unsubscribe: On
                            }
                        }
                    }, qe[s.a] = function() {
                        return this
                    }, qe
                }
                return Le({
                    type: l.INIT
                }), b = {
                    dispatch: Le,
                    subscribe: Ve,
                    getState: Me,
                    replaceReducer: Qe
                }, b[s.a] = ot, b
            }

            function m(z) {
                typeof console != "undefined" && typeof console.error == "function" && console.error(z);
                try {
                    throw new Error(z)
                } catch (k) {}
            }

            function h(z, k) {
                var _ = k && k.type,
                    b = _ && 'action "' + String(_) + '"' || "an action";
                return "Given " + b + ', reducer "' + z + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            }

            function g(z, k, _, b) {
                var T = Object.keys(k),
                    V = _ && _.type === l.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                if (T.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                if (!c(z)) return "The " + V + ' has unexpected type of "' + {}.toString.call(z).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + T.join('", "') + '"');
                var Y = Object.keys(z).filter(function(X) {
                    return !k.hasOwnProperty(X) && !b[X]
                });
                if (Y.forEach(function(X) {
                        b[X] = !0
                    }), !(_ && _.type === l.REPLACE) && Y.length > 0) return "Unexpected " + (Y.length > 1 ? "keys" : "key") + " " + ('"' + Y.join('", "') + '" found in ' + V + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + T.join('", "') + '". Unexpected keys will be ignored.')
            }

            function y(z) {
                Object.keys(z).forEach(function(k) {
                    var _ = z[k],
                        b = _(void 0, {
                            type: l.INIT
                        });
                    if (typeof b == "undefined") throw new Error('Reducer "' + k + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
                    if (typeof _(void 0, {
                            type: l.PROBE_UNKNOWN_ACTION()
                        }) == "undefined") throw new Error('Reducer "' + k + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + l.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")
                })
            }

            function v(z) {
                for (var k = Object.keys(z), _ = {}, b = 0; b < k.length; b++) {
                    var T = k[b];
                    typeof z[T] == "function" && (_[T] = z[T])
                }
                var V = Object.keys(_),
                    Y, X;
                try {
                    y(_)
                } catch (le) {
                    X = le
                }
                return function(he, Me) {
                    if (he === void 0 && (he = {}), X) throw X;
                    if (0) var Ve;
                    for (var Le = !1, Qe = {}, ot = 0; ot < V.length; ot++) {
                        var qe = V[ot],
                            yt = _[qe],
                            st = he[qe],
                            lt = yt(st, Me);
                        if (typeof lt == "undefined") {
                            var qt = h(qe, Me);
                            throw new Error(qt)
                        }
                        Qe[qe] = lt, Le = Le || lt !== st
                    }
                    return Le ? Qe : he
                }
            }

            function D(z, k) {
                return function() {
                    return k(z.apply(this, arguments))
                }
            }

            function I(z, k) {
                if (typeof z == "function") return D(z, k);
                if (typeof z != "object" || z === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (z === null ? "null" : typeof z) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                var _ = {};
                for (var b in z) {
                    var T = z[b];
                    typeof T == "function" && (_[b] = D(T, k))
                }
                return _
            }

            function C(z, k, _) {
                return k in z ? Object.defineProperty(z, k, {
                    value: _,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : z[k] = _, z
            }

            function x(z, k) {
                var _ = Object.keys(z);
                return Object.getOwnPropertySymbols && _.push.apply(_, Object.getOwnPropertySymbols(z)), k && (_ = _.filter(function(b) {
                    return Object.getOwnPropertyDescriptor(z, b).enumerable
                })), _
            }

            function O(z) {
                for (var k = 1; k < arguments.length; k++) {
                    var _ = arguments[k] != null ? arguments[k] : {};
                    k % 2 ? x(_, !0).forEach(function(b) {
                        C(z, b, _[b])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(_)) : x(_).forEach(function(b) {
                        Object.defineProperty(z, b, Object.getOwnPropertyDescriptor(_, b))
                    })
                }
                return z
            }

            function A() {
                for (var z = arguments.length, k = new Array(z), _ = 0; _ < z; _++) k[_] = arguments[_];
                return k.length === 0 ? function(b) {
                    return b
                } : k.length === 1 ? k[0] : k.reduce(function(b, T) {
                    return function() {
                        return b(T.apply(void 0, arguments))
                    }
                })
            }

            function P() {
                for (var z = arguments.length, k = new Array(z), _ = 0; _ < z; _++) k[_] = arguments[_];
                return function(b) {
                    return function() {
                        var T = b.apply(void 0, arguments),
                            V = function() {
                                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                            },
                            Y = {
                                getState: T.getState,
                                dispatch: function() {
                                    return V.apply(void 0, arguments)
                                }
                            },
                            X = k.map(function(le) {
                                return le(Y)
                            });
                        return V = A.apply(void 0, X)(T.dispatch), O({}, T, {
                            dispatch: V
                        })
                    }
                }
            }

            function B() {}
            var G = [];

            function J(z, k) {
                switch (z === void 0 && (z = G), k.type) {
                    case "ADD_ITEM": {
                        var _ = [].concat(z, [{
                            id: k.id,
                            choiceId: k.choiceId,
                            groupId: k.groupId,
                            value: k.value,
                            label: k.label,
                            active: !0,
                            highlighted: !1,
                            customProperties: k.customProperties,
                            placeholder: k.placeholder || !1,
                            keyCode: null
                        }]);
                        return _.map(function(b) {
                            var T = b;
                            return T.highlighted = !1, T
                        })
                    }
                    case "REMOVE_ITEM":
                        return z.map(function(b) {
                            var T = b;
                            return T.id === k.id && (T.active = !1), T
                        });
                    case "HIGHLIGHT_ITEM":
                        return z.map(function(b) {
                            var T = b;
                            return T.id === k.id && (T.highlighted = k.highlighted), T
                        });
                    default:
                        return z
                }
            }
            var Q = [];

            function oe(z, k) {
                switch (z === void 0 && (z = Q), k.type) {
                    case "ADD_GROUP":
                        return [].concat(z, [{
                            id: k.id,
                            value: k.value,
                            active: k.active,
                            disabled: k.disabled
                        }]);
                    case "CLEAR_CHOICES":
                        return [];
                    default:
                        return z
                }
            }
            var te = [];

            function re(z, k) {
                switch (z === void 0 && (z = te), k.type) {
                    case "ADD_CHOICE":
                        return [].concat(z, [{
                            id: k.id,
                            elementId: k.elementId,
                            groupId: k.groupId,
                            value: k.value,
                            label: k.label || k.value,
                            disabled: k.disabled || !1,
                            selected: !1,
                            active: !0,
                            score: 9999,
                            customProperties: k.customProperties,
                            placeholder: k.placeholder || !1,
                            keyCode: null
                        }]);
                    case "ADD_ITEM":
                        return k.activateOptions ? z.map(function(_) {
                            var b = _;
                            return b.active = k.active, b
                        }) : k.choiceId > -1 ? z.map(function(_) {
                            var b = _;
                            return b.id === parseInt(k.choiceId, 10) && (b.selected = !0), b
                        }) : z;
                    case "REMOVE_ITEM":
                        return k.choiceId > -1 ? z.map(function(_) {
                            var b = _;
                            return b.id === parseInt(k.choiceId, 10) && (b.selected = !1), b
                        }) : z;
                    case "FILTER_CHOICES":
                        return z.map(function(_) {
                            var b = _;
                            return b.active = k.results.some(function(T) {
                                var V = T.item,
                                    Y = T.score;
                                return V.id === b.id ? (b.score = Y, !0) : !1
                            }), b
                        });
                    case "ACTIVATE_CHOICES":
                        return z.map(function(_) {
                            var b = _;
                            return b.active = k.active, b
                        });
                    case "CLEAR_CHOICES":
                        return te;
                    default:
                        return z
                }
            }
            var ne = {
                    loading: !1
                },
                be = function(k, _) {
                    switch (k === void 0 && (k = ne), _.type) {
                        case "SET_IS_LOADING":
                            return {
                                loading: _.isLoading
                            };
                        default:
                            return k
                    }
                },
                pe = be,
                De = function(k, _) {
                    return Math.floor(Math.random() * (_ - k) + k)
                },
                Ce = function(k) {
                    return Array.from({
                        length: k
                    }, function() {
                        return De(0, 36).toString(36)
                    }).join("")
                },
                U = function(k, _) {
                    var b = k.id || k.name && k.name + "-" + Ce(2) || Ce(4);
                    return b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = _ + "-" + b, b
                },
                Je = function(k) {
                    return Object.prototype.toString.call(k).slice(8, -1)
                },
                it = function(k, _) {
                    return _ != null && Je(_) === k
                },
                N = function(k, _) {
                    return _ === void 0 && (_ = document.createElement("div")), k.nextSibling ? k.parentNode.insertBefore(_, k.nextSibling) : k.parentNode.appendChild(_), _.appendChild(k)
                },
                Ze = function(k, _, b) {
                    if (b === void 0 && (b = 1), !(!(k instanceof Element) || typeof _ != "string")) {
                        for (var T = (b > 0 ? "next" : "previous") + "ElementSibling", V = k[T]; V;) {
                            if (V.matches(_)) return V;
                            V = V[T]
                        }
                        return V
                    }
                },
                It = function(k, _, b) {
                    if (b === void 0 && (b = 1), !k) return !1;
                    var T;
                    return b > 0 ? T = _.scrollTop + _.offsetHeight >= k.offsetTop + k.offsetHeight : T = k.offsetTop >= _.scrollTop, T
                },
                Mt = function(k) {
                    return typeof k != "string" ? k : k.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
                },
                jt = function() {
                    var z = document.createElement("div");
                    return function(k) {
                        var _ = k.trim();
                        z.innerHTML = _;
                        for (var b = z.children[0]; z.firstChild;) z.removeChild(z.firstChild);
                        return b
                    }
                }(),
                vt = function(k, _) {
                    var b = k.value,
                        T = k.label,
                        V = T === void 0 ? b : T,
                        Y = _.value,
                        X = _.label,
                        le = X === void 0 ? Y : X;
                    return V.localeCompare(le, [], {
                        sensitivity: "base",
                        ignorePunctuation: !0,
                        numeric: !0
                    })
                },
                Wt = function(k, _) {
                    return k.score - _.score
                },
                Tt = function(k, _, b) {
                    b === void 0 && (b = null);
                    var T = new CustomEvent(_, {
                        detail: b,
                        bubbles: !0,
                        cancelable: !0
                    });
                    return k.dispatchEvent(T)
                },
                Jt = function(k, _, b) {
                    return b === void 0 && (b = "value"), k.some(function(T) {
                        return typeof _ == "string" ? T[b] === _.trim() : T[b] === _
                    })
                },
                en = function(k) {
                    return JSON.parse(JSON.stringify(k))
                },
                gn = function(k, _) {
                    var b = Object.keys(k).sort(),
                        T = Object.keys(_).sort();
                    return b.filter(function(V) {
                        return T.indexOf(V) < 0
                    })
                },
                yn = v({
                    items: J,
                    groups: oe,
                    choices: re,
                    general: pe
                }),
                vn = function(k, _) {
                    var b = k;
                    if (_.type === "CLEAR_ALL") b = void 0;
                    else if (_.type === "RESET_TO") return en(_.state);
                    return yn(b, _)
                },
                xn = vn;

            function jn(z, k) {
                for (var _ = 0; _ < k.length; _++) {
                    var b = k[_];
                    b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(z, b.key, b)
                }
            }

            function sn(z, k, _) {
                return k && jn(z.prototype, k), _ && jn(z, _), z
            }
            var Rt = function() {
                function z() {
                    this._store = d(xn, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
                }
                var k = z.prototype;
                return k.subscribe = function(b) {
                    this._store.subscribe(b)
                }, k.dispatch = function(b) {
                    this._store.dispatch(b)
                }, k.isLoading = function() {
                    return this.state.general.loading
                }, k.getChoiceById = function(b) {
                    return this.activeChoices.find(function(T) {
                        return T.id === parseInt(b, 10)
                    })
                }, k.getGroupById = function(b) {
                    return this.groups.find(function(T) {
                        return T.id === b
                    })
                }, sn(z, [{
                    key: "state",
                    get: function() {
                        return this._store.getState()
                    }
                }, {
                    key: "items",
                    get: function() {
                        return this.state.items
                    }
                }, {
                    key: "activeItems",
                    get: function() {
                        return this.items.filter(function(b) {
                            return b.active === !0
                        })
                    }
                }, {
                    key: "highlightedActiveItems",
                    get: function() {
                        return this.items.filter(function(b) {
                            return b.active && b.highlighted
                        })
                    }
                }, {
                    key: "choices",
                    get: function() {
                        return this.state.choices
                    }
                }, {
                    key: "activeChoices",
                    get: function() {
                        return this.choices.filter(function(b) {
                            return b.active === !0
                        })
                    }
                }, {
                    key: "selectableChoices",
                    get: function() {
                        return this.choices.filter(function(b) {
                            return b.disabled !== !0
                        })
                    }
                }, {
                    key: "searchableChoices",
                    get: function() {
                        return this.selectableChoices.filter(function(b) {
                            return b.placeholder !== !0
                        })
                    }
                }, {
                    key: "placeholderChoice",
                    get: function() {
                        return [].concat(this.choices).reverse().find(function(b) {
                            return b.placeholder === !0
                        })
                    }
                }, {
                    key: "groups",
                    get: function() {
                        return this.state.groups
                    }
                }, {
                    key: "activeGroups",
                    get: function() {
                        var b = this.groups,
                            T = this.choices;
                        return b.filter(function(V) {
                            var Y = V.active === !0 && V.disabled === !1,
                                X = T.some(function(le) {
                                    return le.active === !0 && le.disabled === !1
                                });
                            return Y && X
                        }, [])
                    }
                }]), z
            }();

            function Vt(z, k) {
                for (var _ = 0; _ < k.length; _++) {
                    var b = k[_];
                    b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(z, b.key, b)
                }
            }

            function Sr(z, k, _) {
                return k && Vt(z.prototype, k), _ && Vt(z, _), z
            }
            var Rr = function() {
                    function z(_) {
                        var b = _.element,
                            T = _.type,
                            V = _.classNames;
                        this.element = b, this.classNames = V, this.type = T, this.isActive = !1
                    }
                    var k = z.prototype;
                    return k.getChild = function(b) {
                        return this.element.querySelector(b)
                    }, k.show = function() {
                        return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this
                    }, k.hide = function() {
                        return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this
                    }, Sr(z, [{
                        key: "distanceFromTopWindow",
                        get: function() {
                            return this.element.getBoundingClientRect().bottom
                        }
                    }]), z
                }(),
                Bt = {
                    containerOuter: "choices",
                    containerInner: "choices__inner",
                    input: "choices__input",
                    inputCloned: "choices__input--cloned",
                    list: "choices__list",
                    listItems: "choices__list--multiple",
                    listSingle: "choices__list--single",
                    listDropdown: "choices__list--dropdown",
                    item: "choices__item",
                    itemSelectable: "choices__item--selectable",
                    itemDisabled: "choices__item--disabled",
                    itemChoice: "choices__item--choice",
                    placeholder: "choices__placeholder",
                    group: "choices__group",
                    groupHeading: "choices__heading",
                    button: "choices__button",
                    activeState: "is-active",
                    focusState: "is-focused",
                    openState: "is-open",
                    disabledState: "is-disabled",
                    highlightedState: "is-highlighted",
                    selectedState: "is-selected",
                    flippedState: "is-flipped",
                    loadingState: "is-loading",
                    noResults: "has-no-results",
                    noChoices: "has-no-choices"
                },
                Hr = {
                    items: [],
                    choices: [],
                    silent: !1,
                    renderChoiceLimit: -1,
                    maxItemCount: -1,
                    addItems: !0,
                    addItemFilter: null,
                    removeItems: !0,
                    removeItemButton: !1,
                    editItems: !1,
                    duplicateItemsAllowed: !0,
                    delimiter: ",",
                    paste: !0,
                    searchEnabled: !0,
                    searchChoices: !0,
                    searchFloor: 1,
                    searchResultLimit: 4,
                    searchFields: ["label", "value"],
                    position: "auto",
                    resetScrollPosition: !0,
                    shouldSort: !0,
                    shouldSortItems: !1,
                    sorter: vt,
                    placeholder: !0,
                    placeholderValue: null,
                    searchPlaceholderValue: null,
                    prependValue: null,
                    appendValue: null,
                    renderSelectedChoices: "auto",
                    loadingText: "Loading...",
                    noResultsText: "No results found",
                    noChoicesText: "No choices to choose from",
                    itemSelectText: "Press to select",
                    uniqueItemText: "Only unique values can be added",
                    customAddItemText: "Only values matching specific conditions can be added",
                    addItemText: function(k) {
                        return 'Press Enter to add <b>"' + Mt(k) + '"</b>'
                    },
                    maxItemText: function(k) {
                        return "Only " + k + " values can be added"
                    },
                    valueComparer: function(k, _) {
                        return k === _
                    },
                    fuseOptions: {
                        includeScore: !0
                    },
                    callbackOnInit: null,
                    callbackOnCreateTemplates: null,
                    classNames: Bt
                },
                rn = {
                    showDropdown: "showDropdown",
                    hideDropdown: "hideDropdown",
                    change: "change",
                    choice: "choice",
                    search: "search",
                    addItem: "addItem",
                    removeItem: "removeItem",
                    highlightItem: "highlightItem",
                    highlightChoice: "highlightChoice"
                },
                At = {
                    ADD_CHOICE: "ADD_CHOICE",
                    FILTER_CHOICES: "FILTER_CHOICES",
                    ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                    CLEAR_CHOICES: "CLEAR_CHOICES",
                    ADD_GROUP: "ADD_GROUP",
                    ADD_ITEM: "ADD_ITEM",
                    REMOVE_ITEM: "REMOVE_ITEM",
                    HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                    CLEAR_ALL: "CLEAR_ALL"
                },
                Z = {
                    BACK_KEY: 46,
                    DELETE_KEY: 8,
                    ENTER_KEY: 13,
                    A_KEY: 65,
                    ESC_KEY: 27,
                    UP_KEY: 38,
                    DOWN_KEY: 40,
                    PAGE_UP_KEY: 33,
                    PAGE_DOWN_KEY: 34
                },
                me = "text",
                Ie = "select-one",
                at = "select-multiple",
                Dt = 4,
                Cn = function() {
                    function z(_) {
                        var b = _.element,
                            T = _.type,
                            V = _.classNames,
                            Y = _.position;
                        this.element = b, this.classNames = V, this.type = T, this.position = Y, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this)
                    }
                    var k = z.prototype;
                    return k.addEventListeners = function() {
                        this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur)
                    }, k.removeEventListeners = function() {
                        this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur)
                    }, k.shouldFlip = function(b) {
                        if (typeof b != "number") return !1;
                        var T = !1;
                        return this.position === "auto" ? T = !window.matchMedia("(min-height: " + (b + 1) + "px)").matches : this.position === "top" && (T = !0), T
                    }, k.setActiveDescendant = function(b) {
                        this.element.setAttribute("aria-activedescendant", b)
                    }, k.removeActiveDescendant = function() {
                        this.element.removeAttribute("aria-activedescendant")
                    }, k.open = function(b) {
                        this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(b) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0)
                    }, k.close = function() {
                        this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1)
                    }, k.focus = function() {
                        this.isFocussed || this.element.focus()
                    }, k.addFocusState = function() {
                        this.element.classList.add(this.classNames.focusState)
                    }, k.removeFocusState = function() {
                        this.element.classList.remove(this.classNames.focusState)
                    }, k.enable = function() {
                        this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === Ie && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1
                    }, k.disable = function() {
                        this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === Ie && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0
                    }, k.wrap = function(b) {
                        N(b, this.element)
                    }, k.unwrap = function(b) {
                        this.element.parentNode.insertBefore(b, this.element), this.element.parentNode.removeChild(this.element)
                    }, k.addLoadingState = function() {
                        this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0
                    }, k.removeLoadingState = function() {
                        this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1
                    }, k._onFocus = function() {
                        this.isFocussed = !0
                    }, k._onBlur = function() {
                        this.isFocussed = !1
                    }, z
                }();

            function _n(z, k) {
                for (var _ = 0; _ < k.length; _++) {
                    var b = k[_];
                    b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(z, b.key, b)
                }
            }

            function Ht(z, k, _) {
                return k && _n(z.prototype, k), _ && _n(z, _), z
            }
            var ar = function() {
                    function z(_) {
                        var b = _.element,
                            T = _.type,
                            V = _.classNames,
                            Y = _.preventPaste;
                        this.element = b, this.type = T, this.classNames = V, this.preventPaste = Y, this.isFocussed = this.element === document.activeElement, this.isDisabled = b.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this)
                    }
                    var k = z.prototype;
                    return k.addEventListeners = function() {
                        this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
                            passive: !0
                        }), this.element.addEventListener("focus", this._onFocus, {
                            passive: !0
                        }), this.element.addEventListener("blur", this._onBlur, {
                            passive: !0
                        })
                    }, k.removeEventListeners = function() {
                        this.element.removeEventListener("input", this._onInput, {
                            passive: !0
                        }), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus, {
                            passive: !0
                        }), this.element.removeEventListener("blur", this._onBlur, {
                            passive: !0
                        })
                    }, k.enable = function() {
                        this.element.removeAttribute("disabled"), this.isDisabled = !1
                    }, k.disable = function() {
                        this.element.setAttribute("disabled", ""), this.isDisabled = !0
                    }, k.focus = function() {
                        this.isFocussed || this.element.focus()
                    }, k.blur = function() {
                        this.isFocussed && this.element.blur()
                    }, k.clear = function(b) {
                        return b === void 0 && (b = !0), this.element.value && (this.element.value = ""), b && this.setWidth(), this
                    }, k.setWidth = function() {
                        var b = this.element,
                            T = b.style,
                            V = b.value,
                            Y = b.placeholder;
                        T.minWidth = Y.length + 1 + "ch", T.width = V.length + 1 + "ch"
                    }, k.setActiveDescendant = function(b) {
                        this.element.setAttribute("aria-activedescendant", b)
                    }, k.removeActiveDescendant = function() {
                        this.element.removeAttribute("aria-activedescendant")
                    }, k._onInput = function() {
                        this.type !== Ie && this.setWidth()
                    }, k._onPaste = function(b) {
                        this.preventPaste && b.preventDefault()
                    }, k._onFocus = function() {
                        this.isFocussed = !0
                    }, k._onBlur = function() {
                        this.isFocussed = !1
                    }, Ht(z, [{
                        key: "placeholder",
                        set: function(b) {
                            this.element.placeholder = b
                        }
                    }, {
                        key: "value",
                        get: function() {
                            return Mt(this.element.value)
                        },
                        set: function(b) {
                            this.element.value = b
                        }
                    }]), z
                }(),
                ht = function() {
                    function z(_) {
                        var b = _.element;
                        this.element = b, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight
                    }
                    var k = z.prototype;
                    return k.clear = function() {
                        this.element.innerHTML = ""
                    }, k.append = function(b) {
                        this.element.appendChild(b)
                    }, k.getChild = function(b) {
                        return this.element.querySelector(b)
                    }, k.hasChildren = function() {
                        return this.element.hasChildNodes()
                    }, k.scrollToTop = function() {
                        this.element.scrollTop = 0
                    }, k.scrollToChildElement = function(b, T) {
                        var V = this;
                        if (b) {
                            var Y = this.element.offsetHeight,
                                X = this.element.scrollTop + Y,
                                le = b.offsetHeight,
                                he = b.offsetTop + le,
                                Me = T > 0 ? this.element.scrollTop + he - X : b.offsetTop;
                            activeWindow.requestAnimationFrame(function() {
                                V._animateScroll(Me, T)
                            })
                        }
                    }, k._scrollDown = function(b, T, V) {
                        var Y = (V - b) / T,
                            X = Y > 1 ? Y : 1;
                        this.element.scrollTop = b + X
                    }, k._scrollUp = function(b, T, V) {
                        var Y = (b - V) / T,
                            X = Y > 1 ? Y : 1;
                        this.element.scrollTop = b - X
                    }, k._animateScroll = function(b, T) {
                        var V = this,
                            Y = Dt,
                            X = this.element.scrollTop,
                            le = !1;
                        T > 0 ? (this._scrollDown(X, Y, b), X < b && (le = !0)) : (this._scrollUp(X, Y, b), X > b && (le = !0)), le && activeWindow.requestAnimationFrame(function() {
                            V._animateScroll(b, T)
                        })
                    }, z
                }();

            function St(z, k) {
                for (var _ = 0; _ < k.length; _++) {
                    var b = k[_];
                    b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(z, b.key, b)
                }
            }

            function L(z, k, _) {
                return k && St(z.prototype, k), _ && St(z, _), z
            }
            var K = function() {
                function z(_) {
                    var b = _.element,
                        T = _.classNames;
                    if (this.element = b, this.classNames = T, !(b instanceof HTMLInputElement) && !(b instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                    this.isDisabled = !1
                }
                var k = z.prototype;
                return k.conceal = function() {
                    this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
                    var b = this.element.getAttribute("style");
                    b && this.element.setAttribute("data-choice-orig-style", b), this.element.setAttribute("data-choice", "active")
                }, k.reveal = function() {
                    this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
                    var b = this.element.getAttribute("data-choice-orig-style");
                    b ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", b)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value
                }, k.enable = function() {
                    this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1
                }, k.disable = function() {
                    this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0
                }, k.triggerEvent = function(b, T) {
                    Tt(this.element, b, T)
                }, L(z, [{
                    key: "isActive",
                    get: function() {
                        return this.element.dataset.choice === "active"
                    }
                }, {
                    key: "dir",
                    get: function() {
                        return this.element.dir
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.element.value
                    },
                    set: function(b) {
                        this.element.value = b
                    }
                }]), z
            }();

            function ee(z, k) {
                for (var _ = 0; _ < k.length; _++) {
                    var b = k[_];
                    b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(z, b.key, b)
                }
            }

            function ue(z, k, _) {
                return k && ee(z.prototype, k), _ && ee(z, _), z
            }

            function de(z, k) {
                z.prototype = Object.create(k.prototype), z.prototype.constructor = z, z.__proto__ = k
            }
            var ve = function(z) {
                de(k, z);

                function k(_) {
                    var b, T = _.element,
                        V = _.classNames,
                        Y = _.delimiter;
                    return b = z.call(this, {
                        element: T,
                        classNames: V
                    }) || this, b.delimiter = Y, b
                }
                return ue(k, [{
                    key: "value",
                    get: function() {
                        return this.element.value
                    },
                    set: function(b) {
                        var T = b.map(function(Y) {
                                var X = Y.value;
                                return X
                            }),
                            V = T.join(this.delimiter);
                        this.element.setAttribute("value", V), this.element.value = V
                    }
                }]), k
            }(K);

            function ge(z, k) {
                for (var _ = 0; _ < k.length; _++) {
                    var b = k[_];
                    b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(z, b.key, b)
                }
            }

            function M(z, k, _) {
                return k && ge(z.prototype, k), _ && ge(z, _), z
            }

            function H(z, k) {
                z.prototype = Object.create(k.prototype), z.prototype.constructor = z, z.__proto__ = k
            }
            var q = function(z) {
                    H(k, z);

                    function k(b) {
                        var T, V = b.element,
                            Y = b.classNames,
                            X = b.template;
                        return T = z.call(this, {
                            element: V,
                            classNames: Y
                        }) || this, T.template = X, T
                    }
                    var _ = k.prototype;
                    return _.appendDocFragment = function(T) {
                        this.element.innerHTML = "", this.element.appendChild(T)
                    }, M(k, [{
                        key: "placeholderOption",
                        get: function() {
                            return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]")
                        }
                    }, {
                        key: "optionGroups",
                        get: function() {
                            return Array.from(this.element.getElementsByTagName("OPTGROUP"))
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return Array.from(this.element.options)
                        },
                        set: function(T) {
                            var V = this,
                                Y = document.createDocumentFragment(),
                                X = function(he) {
                                    var Me = V.template(he);
                                    Y.appendChild(Me)
                                };
                            T.forEach(function(le) {
                                return X(le)
                            }), this.appendDocFragment(Y)
                        }
                    }]), k
                }(K),
                ie = {
                    containerOuter: function(k, _, b, T, V, Y) {
                        var X = k.containerOuter,
                            le = Object.assign(document.createElement("div"), {
                                className: X
                            });
                        return le.dataset.type = Y, _ && (le.dir = _), T && (le.tabIndex = 0), b && (le.setAttribute("role", V ? "combobox" : "listbox"), V && le.setAttribute("aria-autocomplete", "list")), le.setAttribute("aria-haspopup", "true"), le.setAttribute("aria-expanded", "false"), le
                    },
                    containerInner: function(k) {
                        var _ = k.containerInner;
                        return Object.assign(document.createElement("div"), {
                            className: _
                        })
                    },
                    itemList: function(k, _) {
                        var b = k.list,
                            T = k.listSingle,
                            V = k.listItems;
                        return Object.assign(document.createElement("div"), {
                            className: b + " " + (_ ? T : V)
                        })
                    },
                    placeholder: function(k, _) {
                        var b = k.placeholder;
                        return Object.assign(document.createElement("div"), {
                            className: b,
                            innerHTML: _
                        })
                    },
                    item: function(k, _, b) {
                        var T = k.item,
                            V = k.button,
                            Y = k.highlightedState,
                            X = k.itemSelectable,
                            le = k.placeholder,
                            he = _.id,
                            Me = _.value,
                            Ve = _.label,
                            Le = _.customProperties,
                            Qe = _.active,
                            ot = _.disabled,
                            qe = _.highlighted,
                            yt = _.placeholder,
                            st = Object.assign(document.createElement("div"), {
                                className: T,
                                innerHTML: Ve
                            });
                        if (Object.assign(st.dataset, {
                                item: "",
                                id: he,
                                value: Me,
                                customProperties: Le
                            }), Qe && st.setAttribute("aria-selected", "true"), ot && st.setAttribute("aria-disabled", "true"), yt && st.classList.add(le), st.classList.add(qe ? Y : X), b) {
                            ot && st.classList.remove(X), st.dataset.deletable = "";
                            var lt = "Remove item",
                                qt = Object.assign(document.createElement("button"), {
                                    type: "button",
                                    className: V,
                                    innerHTML: lt
                                });
                            qt.setAttribute("aria-label", lt + ": '" + Me + "'"), qt.dataset.button = "", st.appendChild(qt)
                        }
                        return st
                    },
                    choiceList: function(k, _) {
                        var b = k.list,
                            T = Object.assign(document.createElement("div"), {
                                className: b
                            });
                        return _ || T.setAttribute("aria-multiselectable", "true"), T.setAttribute("role", "listbox"), T
                    },
                    choiceGroup: function(k, _) {
                        var b = k.group,
                            T = k.groupHeading,
                            V = k.itemDisabled,
                            Y = _.id,
                            X = _.value,
                            le = _.disabled,
                            he = Object.assign(document.createElement("div"), {
                                className: b + " " + (le ? V : "")
                            });
                        return he.setAttribute("role", "group"), Object.assign(he.dataset, {
                            group: "",
                            id: Y,
                            value: X
                        }), le && he.setAttribute("aria-disabled", "true"), he.appendChild(Object.assign(document.createElement("div"), {
                            className: T,
                            innerHTML: X
                        })), he
                    },
                    choice: function(k, _, b) {
                        var T = k.item,
                            V = k.itemChoice,
                            Y = k.itemSelectable,
                            X = k.selectedState,
                            le = k.itemDisabled,
                            he = k.placeholder,
                            Me = _.id,
                            Ve = _.value,
                            Le = _.label,
                            Qe = _.groupId,
                            ot = _.elementId,
                            qe = _.disabled,
                            yt = _.selected,
                            st = _.placeholder,
                            lt = Object.assign(document.createElement("div"), {
                                id: ot,
                                innerHTML: Le,
                                className: T + " " + V
                            });
                        return yt && lt.classList.add(X), st && lt.classList.add(he), lt.setAttribute("role", Qe > 0 ? "treeitem" : "option"), Object.assign(lt.dataset, {
                            choice: "",
                            id: Me,
                            value: Ve,
                            selectText: b
                        }), qe ? (lt.classList.add(le), lt.dataset.choiceDisabled = "", lt.setAttribute("aria-disabled", "true")) : (lt.classList.add(Y), lt.dataset.choiceSelectable = ""), lt
                    },
                    input: function(k, _) {
                        var b = k.input,
                            T = k.inputCloned,
                            V = Object.assign(document.createElement("input"), {
                                type: "text",
                                className: b + " " + T,
                                autocomplete: "off",
                                autocapitalize: "off",
                                spellcheck: !1
                            });
                        return V.setAttribute("role", "textbox"), V.setAttribute("aria-autocomplete", "list"), V.setAttribute("aria-label", _), V
                    },
                    dropdown: function(k) {
                        var _ = k.list,
                            b = k.listDropdown,
                            T = document.createElement("div");
                        return T.classList.add(_, b), T.setAttribute("aria-expanded", "false"), T
                    },
                    notice: function(k, _, b) {
                        var T = k.item,
                            V = k.itemChoice,
                            Y = k.noResults,
                            X = k.noChoices;
                        b === void 0 && (b = "");
                        var le = [T, V];
                        return b === "no-choices" ? le.push(X) : b === "no-results" && le.push(Y), Object.assign(document.createElement("div"), {
                            innerHTML: _,
                            className: le.join(" ")
                        })
                    },
                    option: function(k) {
                        var _ = k.label,
                            b = k.value,
                            T = k.customProperties,
                            V = k.active,
                            Y = k.disabled,
                            X = new Option(_, b, !1, V);
                        return T && (X.dataset.customProperties = T), X.disabled = Y, X
                    }
                },
                ye = ie,
                ce = function(k) {
                    var _ = k.value,
                        b = k.label,
                        T = k.id,
                        V = k.groupId,
                        Y = k.disabled,
                        X = k.elementId,
                        le = k.customProperties,
                        he = k.placeholder,
                        Me = k.keyCode;
                    return {
                        type: At.ADD_CHOICE,
                        value: _,
                        label: b,
                        id: T,
                        groupId: V,
                        disabled: Y,
                        elementId: X,
                        customProperties: le,
                        placeholder: he,
                        keyCode: Me
                    }
                },
                ae = function(k) {
                    return {
                        type: At.FILTER_CHOICES,
                        results: k
                    }
                },
                Se = function(k) {
                    return k === void 0 && (k = !0), {
                        type: At.ACTIVATE_CHOICES,
                        active: k
                    }
                },
                nt = function() {
                    return {
                        type: At.CLEAR_CHOICES
                    }
                },
                Te = function(k) {
                    var _ = k.value,
                        b = k.label,
                        T = k.id,
                        V = k.choiceId,
                        Y = k.groupId,
                        X = k.customProperties,
                        le = k.placeholder,
                        he = k.keyCode;
                    return {
                        type: At.ADD_ITEM,
                        value: _,
                        label: b,
                        id: T,
                        choiceId: V,
                        groupId: Y,
                        customProperties: X,
                        placeholder: le,
                        keyCode: he
                    }
                },
                Ue = function(k, _) {
                    return {
                        type: At.REMOVE_ITEM,
                        id: k,
                        choiceId: _
                    }
                },
                We = function(k, _) {
                    return {
                        type: At.HIGHLIGHT_ITEM,
                        id: k,
                        highlighted: _
                    }
                },
                Ft = function(k) {
                    var _ = k.value,
                        b = k.id,
                        T = k.active,
                        V = k.disabled;
                    return {
                        type: At.ADD_GROUP,
                        value: _,
                        id: b,
                        active: T,
                        disabled: V
                    }
                },
                Hn = function() {
                    return {
                        type: "CLEAR_ALL"
                    }
                },
                Ot = function(k) {
                    return {
                        type: "RESET_TO",
                        state: k
                    }
                },
                or = function(k) {
                    return {
                        type: "SET_IS_LOADING",
                        isLoading: k
                    }
                };

            function sr(z, k) {
                for (var _ = 0; _ < k.length; _++) {
                    var b = k[_];
                    b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(z, b.key, b)
                }
            }

            function Yt(z, k, _) {
                return k && sr(z.prototype, k), _ && sr(z, _), z
            }
            var Bn = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
                Er = {},
                Gr = function() {
                    Yt(z, null, [{
                        key: "defaults",
                        get: function() {
                            return Object.preventExtensions({
                                get options() {
                                    return Er
                                },
                                get templates() {
                                    return ie
                                }
                            })
                        }
                    }]);

                    function z(_, b) {
                        var T = this;
                        _ === void 0 && (_ = "[data-choice]"), b === void 0 && (b = {}), this.config = o.a.all([Hr, z.defaults.options, b], {
                            arrayMerge: function(Qe, ot) {
                                return [].concat(ot)
                            }
                        });
                        var V = gn(this.config, Hr);
                        V.length && console.warn("Unknown config option(s) passed", V.join(", "));
                        var Y = typeof _ == "string" ? document.querySelector(_) : _;
                        if (!(Y instanceof HTMLInputElement || Y instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                        if (this._isTextElement = Y.type === me, this._isSelectOneElement = Y.type === Ie, this._isSelectMultipleElement = Y.type === at, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto"), b.addItemFilter && typeof b.addItemFilter != "function") {
                            var X = b.addItemFilter instanceof RegExp ? b.addItemFilter : new RegExp(b.addItemFilter);
                            this.config.addItemFilter = X.test.bind(X)
                        }
                        if (this._isTextElement ? this.passedElement = new ve({
                                element: Y,
                                classNames: this.config.classNames,
                                delimiter: this.config.delimiter
                            }) : this.passedElement = new q({
                                element: Y,
                                classNames: this.config.classNames,
                                template: function(Qe) {
                                    return T._templates.option(Qe)
                                }
                            }), this.initialised = !1, this._store = new Rt, this._initialState = {}, this._currentState = {}, this._prevState = {}, this._currentValue = "", this._canSearch = this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = U(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
                            var le = window.getComputedStyle(this.passedElement.element),
                                he = le.direction,
                                Me = window.getComputedStyle(document.documentElement),
                                Ve = Me.direction;
                            he !== Ve && (this._direction = he)
                        }
                        if (this._idNames = {
                                itemChoice: "item-choice"
                            }, this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options, this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this.passedElement.options && this.passedElement.options.forEach(function(Le) {
                                T._presetChoices.push({
                                    value: Le.value,
                                    label: Le.innerHTML,
                                    selected: Le.selected,
                                    disabled: Le.disabled || Le.parentNode.disabled,
                                    placeholder: Le.value === "" || Le.hasAttribute("placeholder"),
                                    customProperties: Le.getAttribute("data-custom-properties")
                                })
                            }), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onAKey = this._onAKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) {
                            this.config.silent || console.warn("Trying to initialise Choices on element already initialised"), this.initialised = !0;
                            return
                        }
                        this.init()
                    }
                    var k = z.prototype;
                    return k.init = function() {
                        if (!this.initialised) {
                            this._createTemplates(), this._createElements(), this._createStructure(), this._initialState = en(this._store.state), this._store.subscribe(this._render), this._render(), this._addEventListeners();
                            var b = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                            b && this.disable(), this.initialised = !0;
                            var T = this.config.callbackOnInit;
                            T && typeof T == "function" && T.call(this)
                        }
                    }, k.destroy = function() {
                        this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = null, this.initialised = !1)
                    }, k.enable = function() {
                        return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this
                    }, k.disable = function() {
                        return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this
                    }, k.highlightItem = function(b, T) {
                        if (T === void 0 && (T = !0), !b) return this;
                        var V = b.id,
                            Y = b.groupId,
                            X = Y === void 0 ? -1 : Y,
                            le = b.value,
                            he = le === void 0 ? "" : le,
                            Me = b.label,
                            Ve = Me === void 0 ? "" : Me,
                            Le = X >= 0 ? this._store.getGroupById(X) : null;
                        return this._store.dispatch(We(V, !0)), T && this.passedElement.triggerEvent(rn.highlightItem, {
                            id: V,
                            value: he,
                            label: Ve,
                            groupValue: Le && Le.value ? Le.value : null
                        }), this
                    }, k.unhighlightItem = function(b) {
                        if (!b) return this;
                        var T = b.id,
                            V = b.groupId,
                            Y = V === void 0 ? -1 : V,
                            X = b.value,
                            le = X === void 0 ? "" : X,
                            he = b.label,
                            Me = he === void 0 ? "" : he,
                            Ve = Y >= 0 ? this._store.getGroupById(Y) : null;
                        return this._store.dispatch(We(T, !1)), this.passedElement.triggerEvent(rn.highlightItem, {
                            id: T,
                            value: le,
                            label: Me,
                            groupValue: Ve && Ve.value ? Ve.value : null
                        }), this
                    }, k.highlightAll = function() {
                        var b = this;
                        return this._store.items.forEach(function(T) {
                            return b.highlightItem(T)
                        }), this
                    }, k.unhighlightAll = function() {
                        var b = this;
                        return this._store.items.forEach(function(T) {
                            return b.unhighlightItem(T)
                        }), this
                    }, k.removeActiveItemsByValue = function(b) {
                        var T = this;
                        return this._store.activeItems.filter(function(V) {
                            return V.value === b
                        }).forEach(function(V) {
                            return T._removeItem(V)
                        }), this
                    }, k.removeActiveItems = function(b) {
                        var T = this;
                        return this._store.activeItems.filter(function(V) {
                            var Y = V.id;
                            return Y !== b
                        }).forEach(function(V) {
                            return T._removeItem(V)
                        }), this
                    }, k.removeHighlightedItems = function(b) {
                        var T = this;
                        return b === void 0 && (b = !1), this._store.highlightedActiveItems.forEach(function(V) {
                            T._removeItem(V), b && T._triggerChange(V.value)
                        }), this
                    }, k.showDropdown = function(b) {
                        var T = this;
                        return this.dropdown.isActive ? this : (activeWindow.requestAnimationFrame(function() {
                            T.dropdown.show(), T.containerOuter.open(T.dropdown.distanceFromTopWindow), !b && T._canSearch && T.input.focus(), T.passedElement.triggerEvent(rn.showDropdown, {})
                        }), this)
                    }, k.hideDropdown = function(b) {
                        var T = this;
                        return this.dropdown.isActive ? (activeWindow.requestAnimationFrame(function() {
                            T.dropdown.hide(), T.containerOuter.close(), !b && T._canSearch && (T.input.removeActiveDescendant(), T.input.blur()), T.passedElement.triggerEvent(rn.hideDropdown, {})
                        }), this) : this
                    }, k.getValue = function(b) {
                        b === void 0 && (b = !1);
                        var T = this._store.activeItems.reduce(function(V, Y) {
                            var X = b ? Y.value : Y;
                            return V.push(X), V
                        }, []);
                        return this._isSelectOneElement ? T[0] : T
                    }, k.setValue = function(b) {
                        var T = this;
                        return this.initialised ? (b.forEach(function(V) {
                            return T._setChoiceOrItem(V)
                        }), this) : this
                    }, k.setChoiceByValue = function(b) {
                        var T = this;
                        if (!this.initialised || this._isTextElement) return this;
                        var V = Array.isArray(b) ? b : [b];
                        return V.forEach(function(Y) {
                            return T._findAndSelectChoiceByValue(Y)
                        }), this
                    }, k.setChoices = function(b, T, V, Y) {
                        var X = this;
                        if (b === void 0 && (b = []), T === void 0 && (T = "value"), V === void 0 && (V = "label"), Y === void 0 && (Y = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                        if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                        if (typeof T != "string" || !T) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                        if (Y && this.clearChoices(), typeof b == "function") {
                            var le = b(this);
                            if (typeof Promise == "function" && le instanceof Promise) return new Promise(function(he) {
                                return activeWindow.requestAnimationFrame(he)
                            }).then(function() {
                                return X._handleLoadingState(!0)
                            }).then(function() {
                                return le
                            }).then(function(he) {
                                return X.setChoices(he, T, V, Y)
                            }).catch(function(he) {
                                X.config.silent || console.error(he)
                            }).then(function() {
                                return X._handleLoadingState(!1)
                            }).then(function() {
                                return X
                            });
                            if (!Array.isArray(le)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof le);
                            return this.setChoices(le, T, V, !1)
                        }
                        if (!Array.isArray(b)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                        return this.containerOuter.removeLoadingState(), this._startLoading(), b.forEach(function(he) {
                            he.choices ? X._addGroup({
                                id: parseInt(he.id, 10) || null,
                                group: he,
                                valueKey: T,
                                labelKey: V
                            }) : X._addChoice({
                                value: he[T],
                                label: he[V],
                                isSelected: he.selected,
                                isDisabled: he.disabled,
                                customProperties: he.customProperties,
                                placeholder: he.placeholder
                            })
                        }), this._stopLoading(), this
                    }, k.clearChoices = function() {
                        return this._store.dispatch(nt()), this
                    }, k.clearStore = function() {
                        return this._store.dispatch(Hn()), this
                    }, k.clearInput = function() {
                        var b = !this._isSelectOneElement;
                        return this.input.clear(b), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch(Se(!0))), this
                    }, k._render = function() {
                        if (!this._store.isLoading()) {
                            this._currentState = this._store.state;
                            var b = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                                T = this._isSelectElement,
                                V = this._currentState.items !== this._prevState.items;
                            b && (T && this._renderChoices(), V && this._renderItems(), this._prevState = this._currentState)
                        }
                    }, k._renderChoices = function() {
                        var b = this,
                            T = this._store,
                            V = T.activeGroups,
                            Y = T.activeChoices,
                            X = document.createDocumentFragment();
                        if (this.choiceList.clear(), this.config.resetScrollPosition && activeWindow.requestAnimationFrame(function() {
                                return b.choiceList.scrollToTop()
                            }), V.length >= 1 && !this._isSearching) {
                            var le = Y.filter(function(Qe) {
                                return Qe.placeholder === !0 && Qe.groupId === -1
                            });
                            le.length >= 1 && (X = this._createChoicesFragment(le, X)), X = this._createGroupsFragment(V, Y, X)
                        } else Y.length >= 1 && (X = this._createChoicesFragment(Y, X));
                        if (X.childNodes && X.childNodes.length > 0) {
                            var he = this._store.activeItems,
                                Me = this._canAddItem(he, this.input.value);
                            Me.response ? (this.choiceList.append(X), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", Me.notice))
                        } else {
                            var Ve, Le;
                            this._isSearching ? (Le = typeof this.config.noResultsText == "function" ? this.config.noResultsText() : this.config.noResultsText, Ve = this._getTemplate("notice", Le, "no-results")) : (Le = typeof this.config.noChoicesText == "function" ? this.config.noChoicesText() : this.config.noChoicesText, Ve = this._getTemplate("notice", Le, "no-choices")), this.choiceList.append(Ve)
                        }
                    }, k._renderItems = function() {
                        var b = this._store.activeItems || [];
                        this.itemList.clear();
                        var T = this._createItemsFragment(b);
                        T.childNodes && this.itemList.append(T)
                    }, k._createGroupsFragment = function(b, T, V) {
                        var Y = this;
                        V === void 0 && (V = document.createDocumentFragment());
                        var X = function(he) {
                            return T.filter(function(Me) {
                                return Y._isSelectOneElement ? Me.groupId === he.id : Me.groupId === he.id && (Y.config.renderSelectedChoices === "always" || !Me.selected)
                            })
                        };
                        return this.config.shouldSort && b.sort(this.config.sorter), b.forEach(function(le) {
                            var he = X(le);
                            if (he.length >= 1) {
                                var Me = Y._getTemplate("choiceGroup", le);
                                V.appendChild(Me), Y._createChoicesFragment(he, V, !0)
                            }
                        }), V
                    }, k._createChoicesFragment = function(b, T, V) {
                        var Y = this;
                        T === void 0 && (T = document.createDocumentFragment()), V === void 0 && (V = !1);
                        var X = this.config,
                            le = X.renderSelectedChoices,
                            he = X.searchResultLimit,
                            Me = X.renderChoiceLimit,
                            Ve = this._isSearching ? Wt : this.config.sorter,
                            Le = function(Vn) {
                                var ki = le === "auto" ? Y._isSelectOneElement || !Vn.selected : !0;
                                if (ki) {
                                    var kr = Y._getTemplate("choice", Vn, Y.config.itemSelectText);
                                    T.appendChild(kr)
                                }
                            },
                            Qe = b;
                        le === "auto" && !this._isSelectOneElement && (Qe = b.filter(function(On) {
                            return !On.selected
                        }));
                        var ot = Qe.reduce(function(On, Vn) {
                                return Vn.placeholder ? On.placeholderChoices.push(Vn) : On.normalChoices.push(Vn), On
                            }, {
                                placeholderChoices: [],
                                normalChoices: []
                            }),
                            qe = ot.placeholderChoices,
                            yt = ot.normalChoices;
                        (this.config.shouldSort || this._isSearching) && yt.sort(Ve);
                        var st = Qe.length,
                            lt = this._isSelectOneElement ? [].concat(qe, yt) : yt;
                        this._isSearching ? st = he : Me && Me > 0 && !V && (st = Me);
                        for (var qt = 0; qt < st; qt += 1) lt[qt] && Le(lt[qt]);
                        return T
                    }, k._createItemsFragment = function(b, T) {
                        var V = this;
                        T === void 0 && (T = document.createDocumentFragment());
                        var Y = this.config,
                            X = Y.shouldSortItems,
                            le = Y.sorter,
                            he = Y.removeItemButton;
                        X && !this._isSelectOneElement && b.sort(le), this._isTextElement ? this.passedElement.value = b : this.passedElement.options = b;
                        var Me = function(Le) {
                            var Qe = V._getTemplate("item", Le, he);
                            T.appendChild(Qe)
                        };
                        return b.forEach(Me), T
                    }, k._triggerChange = function(b) {
                        b != null && this.passedElement.triggerEvent(rn.change, {
                            value: b
                        })
                    }, k._selectPlaceholderChoice = function() {
                        var b = this._store.placeholderChoice;
                        b && (this._addItem({
                            value: b.value,
                            label: b.label,
                            choiceId: b.id,
                            groupId: b.groupId,
                            placeholder: b.placeholder
                        }), this._triggerChange(b.value))
                    }, k._handleButtonAction = function(b, T) {
                        if (!(!b || !T || !this.config.removeItems || !this.config.removeItemButton)) {
                            var V = T.parentNode.getAttribute("data-id"),
                                Y = b.find(function(X) {
                                    return X.id === parseInt(V, 10)
                                });
                            this._removeItem(Y), this._triggerChange(Y.value), this._isSelectOneElement && this._selectPlaceholderChoice()
                        }
                    }, k._handleItemAction = function(b, T, V) {
                        var Y = this;
                        if (V === void 0 && (V = !1), !(!b || !T || !this.config.removeItems || this._isSelectOneElement)) {
                            var X = T.getAttribute("data-id");
                            b.forEach(function(le) {
                                le.id === parseInt(X, 10) && !le.highlighted ? Y.highlightItem(le) : !V && le.highlighted && Y.unhighlightItem(le)
                            }), this.input.focus()
                        }
                    }, k._handleChoiceAction = function(b, T) {
                        if (!(!b || !T)) {
                            var V = T.dataset.id,
                                Y = this._store.getChoiceById(V);
                            if (Y) {
                                var X = b[0] && b[0].keyCode ? b[0].keyCode : null,
                                    le = this.dropdown.isActive;
                                if (Y.keyCode = X, this.passedElement.triggerEvent(rn.choice, {
                                        choice: Y
                                    }), !Y.selected && !Y.disabled) {
                                    var he = this._canAddItem(b, Y.value);
                                    he.response && (this._addItem({
                                        value: Y.value,
                                        label: Y.label,
                                        choiceId: Y.id,
                                        groupId: Y.groupId,
                                        customProperties: Y.customProperties,
                                        placeholder: Y.placeholder,
                                        keyCode: Y.keyCode
                                    }), this._triggerChange(Y.value))
                                }
                                this.clearInput(), le && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus())
                            }
                        }
                    }, k._handleBackspace = function(b) {
                        if (!(!this.config.removeItems || !b)) {
                            var T = b[b.length - 1],
                                V = b.some(function(Y) {
                                    return Y.highlighted
                                });
                            this.config.editItems && !V && T ? (this.input.value = T.value, this.input.setWidth(), this._removeItem(T), this._triggerChange(T.value)) : (V || this.highlightItem(T, !1), this.removeHighlightedItems(!0))
                        }
                    }, k._startLoading = function() {
                        this._store.dispatch(or(!0))
                    }, k._stopLoading = function() {
                        this._store.dispatch(or(!1))
                    }, k._handleLoadingState = function(b) {
                        b === void 0 && (b = !0);
                        var T = this.itemList.getChild("." + this.config.classNames.placeholder);
                        b ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? T ? T.innerHTML = this.config.loadingText : (T = this._getTemplate("placeholder", this.config.loadingText), this.itemList.append(T)) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? T.innerHTML = this._placeholderValue || "" : this.input.placeholder = this._placeholderValue || "")
                    }, k._handleSearch = function(b) {
                        if (!(!b || !this.input.isFocussed)) {
                            var T = this._store.choices,
                                V = this.config,
                                Y = V.searchFloor,
                                X = V.searchChoices,
                                le = T.some(function(Me) {
                                    return !Me.active
                                });
                            if (b && b.length >= Y) {
                                var he = X ? this._searchChoices(b) : 0;
                                this.passedElement.triggerEvent(rn.search, {
                                    value: b,
                                    resultCount: he
                                })
                            } else le && (this._isSearching = !1, this._store.dispatch(Se(!0)))
                        }
                    }, k._canAddItem = function(b, T) {
                        var V = !0,
                            Y = typeof this.config.addItemText == "function" ? this.config.addItemText(T) : this.config.addItemText;
                        if (!this._isSelectOneElement) {
                            var X = Jt(b, T);
                            this.config.maxItemCount > 0 && this.config.maxItemCount <= b.length && (V = !1, Y = typeof this.config.maxItemText == "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && X && V && (V = !1, Y = typeof this.config.uniqueItemText == "function" ? this.config.uniqueItemText(T) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && V && typeof this.config.addItemFilter == "function" && !this.config.addItemFilter(T) && (V = !1, Y = typeof this.config.customAddItemText == "function" ? this.config.customAddItemText(T) : this.config.customAddItemText)
                        }
                        return {
                            response: V,
                            notice: Y
                        }
                    }, k._searchChoices = function(b) {
                        var T = typeof b == "string" ? b.trim() : b,
                            V = typeof this._currentValue == "string" ? this._currentValue.trim() : this._currentValue;
                        if (T.length < 1 && T === V + " ") return 0;
                        var Y = this._store.searchableChoices,
                            X = T,
                            le = [].concat(this.config.searchFields),
                            he = Object.assign(this.config.fuseOptions, {
                                keys: le
                            }),
                            Me = new i.a(Y, he),
                            Ve = Me.search(X);
                        return this._currentValue = T, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch(ae(Ve)), Ve.length
                    }, k._addEventListeners = function() {
                        var b = document,
                            T = b.documentElement;
                        T.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), T.addEventListener("click", this._onClick, {
                            passive: !0
                        }), T.addEventListener("touchmove", this._onTouchMove, {
                            passive: !0
                        }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                            passive: !0
                        }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
                            passive: !0
                        }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
                            passive: !0
                        })), this.input.element.addEventListener("keyup", this._onKeyUp, {
                            passive: !0
                        }), this.input.element.addEventListener("focus", this._onFocus, {
                            passive: !0
                        }), this.input.element.addEventListener("blur", this._onBlur, {
                            passive: !0
                        }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
                            passive: !0
                        }), this.input.addEventListeners()
                    }, k._removeEventListeners = function() {
                        var b = document,
                            T = b.documentElement;
                        T.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), T.removeEventListener("click", this._onClick), T.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners()
                    }, k._onKeyDown = function(b) {
                        var T, V = b.target,
                            Y = b.keyCode,
                            X = b.ctrlKey,
                            le = b.metaKey,
                            he = this._store.activeItems,
                            Me = this.input.isFocussed,
                            Ve = this.dropdown.isActive,
                            Le = this.itemList.hasChildren(),
                            Qe = String.fromCharCode(Y),
                            ot = Z.BACK_KEY,
                            qe = Z.DELETE_KEY,
                            yt = Z.ENTER_KEY,
                            st = Z.A_KEY,
                            lt = Z.ESC_KEY,
                            qt = Z.UP_KEY,
                            On = Z.DOWN_KEY,
                            Vn = Z.PAGE_UP_KEY,
                            ki = Z.PAGE_DOWN_KEY,
                            kr = X || le;
                        !this._isTextElement && /[a-zA-Z0-9-_ ]/.test(Qe) && this.showDropdown();
                        var Jr = (T = {}, T[st] = this._onAKey, T[yt] = this._onEnterKey, T[lt] = this._onEscapeKey, T[qt] = this._onDirectionKey, T[Vn] = this._onDirectionKey, T[On] = this._onDirectionKey, T[ki] = this._onDirectionKey, T[qe] = this._onDeleteKey, T[ot] = this._onDeleteKey, T);
                        Jr[Y] && Jr[Y]({
                            event: b,
                            target: V,
                            keyCode: Y,
                            metaKey: le,
                            activeItems: he,
                            hasFocusedInput: Me,
                            hasActiveDropdown: Ve,
                            hasItems: Le,
                            hasCtrlDownKeyPressed: kr
                        })
                    }, k._onKeyUp = function(b) {
                        var T = b.target,
                            V = b.keyCode,
                            Y = this.input.value,
                            X = this._store.activeItems,
                            le = this._canAddItem(X, Y),
                            he = Z.BACK_KEY,
                            Me = Z.DELETE_KEY;
                        if (this._isTextElement) {
                            var Ve = le.notice && Y;
                            if (Ve) {
                                var Le = this._getTemplate("notice", le.notice);
                                this.dropdown.element.innerHTML = Le.outerHTML, this.showDropdown(!0)
                            } else this.hideDropdown(!0)
                        } else {
                            var Qe = (V === he || V === Me) && !T.value,
                                ot = !this._isTextElement && this._isSearching,
                                qe = this._canSearch && le.response;
                            Qe && ot ? (this._isSearching = !1, this._store.dispatch(Se(!0))) : qe && this._handleSearch(this.input.value)
                        }
                        this._canSearch = this.config.searchEnabled
                    }, k._onAKey = function(b) {
                        var T = b.hasItems,
                            V = b.hasCtrlDownKeyPressed;
                        if (V && T) {
                            this._canSearch = !1;
                            var Y = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                            Y && this.highlightAll()
                        }
                    }, k._onEnterKey = function(b) {
                        var T = b.event,
                            V = b.target,
                            Y = b.activeItems,
                            X = b.hasActiveDropdown,
                            le = Z.ENTER_KEY,
                            he = V.hasAttribute("data-button");
                        if (this._isTextElement && V.value) {
                            var Me = this.input.value,
                                Ve = this._canAddItem(Y, Me);
                            Ve.response && (this.hideDropdown(!0), this._addItem({
                                value: Me
                            }), this._triggerChange(Me), this.clearInput())
                        }
                        if (he && (this._handleButtonAction(Y, V), T.preventDefault()), X) {
                            var Le = this.dropdown.getChild("." + this.config.classNames.highlightedState);
                            Le && (Y[0] && (Y[0].keyCode = le), this._handleChoiceAction(Y, Le)), T.preventDefault()
                        } else this._isSelectOneElement && (this.showDropdown(), T.preventDefault())
                    }, k._onEscapeKey = function(b) {
                        var T = b.hasActiveDropdown;
                        T && (this.hideDropdown(!0), this.containerOuter.focus())
                    }, k._onDirectionKey = function(b) {
                        var T = b.event,
                            V = b.hasActiveDropdown,
                            Y = b.keyCode,
                            X = b.metaKey,
                            le = Z.DOWN_KEY,
                            he = Z.PAGE_UP_KEY,
                            Me = Z.PAGE_DOWN_KEY;
                        if (V || this._isSelectOneElement) {
                            this.showDropdown(), this._canSearch = !1;
                            var Ve = Y === le || Y === Me ? 1 : -1,
                                Le = X || Y === Me || Y === he,
                                Qe = "[data-choice-selectable]",
                                ot;
                            if (Le) Ve > 0 ? ot = this.dropdown.element.querySelector(Qe + ":last-of-type") : ot = this.dropdown.element.querySelector(Qe);
                            else {
                                var qe = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
                                qe ? ot = Ze(qe, Qe, Ve) : ot = this.dropdown.element.querySelector(Qe)
                            }
                            ot && (It(ot, this.choiceList.element, Ve) || this.choiceList.scrollToChildElement(ot, Ve), this._highlightChoice(ot)), T.preventDefault()
                        }
                    }, k._onDeleteKey = function(b) {
                        var T = b.event,
                            V = b.target,
                            Y = b.hasFocusedInput,
                            X = b.activeItems;
                        Y && !V.value && !this._isSelectOneElement && (this._handleBackspace(X), T.preventDefault())
                    }, k._onTouchMove = function() {
                        this._wasTap && (this._wasTap = !1)
                    }, k._onTouchEnd = function(b) {
                        var T = b || b.touches[0],
                            V = T.target,
                            Y = this._wasTap && this.containerOuter.element.contains(V);
                        if (Y) {
                            var X = V === this.containerOuter.element || V === this.containerInner.element;
                            X && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), b.stopPropagation()
                        }
                        this._wasTap = !0
                    }, k._onMouseDown = function(b) {
                        var T = b.target;
                        if (T instanceof HTMLElement) {
                            if (Bn && this.choiceList.element.contains(T)) {
                                var V = this.choiceList.element.firstElementChild,
                                    Y = this._direction === "ltr" ? b.offsetX >= V.offsetWidth : b.offsetX < V.offsetLeft;
                                this._isScrollingOnIe = Y
                            }
                            if (T !== this.input.element) {
                                var X = T.closest("[data-button],[data-item],[data-choice]");
                                if (X instanceof HTMLElement) {
                                    var le = b.shiftKey,
                                        he = this._store.activeItems,
                                        Me = X.dataset;
                                    "button" in Me ? this._handleButtonAction(he, X) : "item" in Me ? this._handleItemAction(he, X, le) : "choice" in Me && this._handleChoiceAction(he, X)
                                }
                                b.preventDefault()
                            }
                        }
                    }, k._onMouseOver = function(b) {
                        var T = b.target;
                        T instanceof HTMLElement && "choice" in T.dataset && this._highlightChoice(T)
                    }, k._onClick = function(b) {
                        var T = b.target,
                            V = this.containerOuter.element.contains(T);
                        if (V) !this.dropdown.isActive && !this.containerOuter.isDisabled ? this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : this._isSelectOneElement && T !== this.input.element && !this.dropdown.element.contains(T) && this.hideDropdown();
                        else {
                            var Y = this._store.highlightedActiveItems.length > 0;
                            Y && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0)
                        }
                    }, k._onFocus = function(b) {
                        var T = this,
                            V, Y = b.target,
                            X = this.containerOuter.element.contains(Y);
                        if (X) {
                            var le = (V = {}, V[me] = function() {
                                Y === T.input.element && T.containerOuter.addFocusState()
                            }, V[Ie] = function() {
                                T.containerOuter.addFocusState(), Y === T.input.element && T.showDropdown(!0)
                            }, V[at] = function() {
                                Y === T.input.element && (T.showDropdown(!0), T.containerOuter.addFocusState())
                            }, V);
                            le[this.passedElement.element.type]()
                        }
                    }, k._onBlur = function(b) {
                        var T = this,
                            V = b.target,
                            Y = this.containerOuter.element.contains(V);
                        if (Y && !this._isScrollingOnIe) {
                            var X, le = this._store.activeItems,
                                he = le.some(function(Ve) {
                                    return Ve.highlighted
                                }),
                                Me = (X = {}, X[me] = function() {
                                    V === T.input.element && (T.containerOuter.removeFocusState(), he && T.unhighlightAll(), T.hideDropdown(!0))
                                }, X[Ie] = function() {
                                    T.containerOuter.removeFocusState(), (V === T.input.element || V === T.containerOuter.element && !T._canSearch) && T.hideDropdown(!0)
                                }, X[at] = function() {
                                    V === T.input.element && (T.containerOuter.removeFocusState(), T.hideDropdown(!0), he && T.unhighlightAll())
                                }, X);
                            Me[this.passedElement.element.type]()
                        } else this._isScrollingOnIe = !1, this.input.element.focus()
                    }, k._onFormReset = function() {
                        this._store.dispatch(Ot(this._initialState))
                    }, k._highlightChoice = function(b) {
                        var T = this;
                        b === void 0 && (b = null);
                        var V = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                        if (V.length) {
                            var Y = b,
                                X = Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState));
                            X.forEach(function(le) {
                                le.classList.remove(T.config.classNames.highlightedState), le.setAttribute("aria-selected", "false")
                            }), Y ? this._highlightPosition = V.indexOf(Y) : (V.length > this._highlightPosition ? Y = V[this._highlightPosition] : Y = V[V.length - 1], Y || (Y = V[0])), Y.classList.add(this.config.classNames.highlightedState), Y.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(rn.highlightChoice, {
                                el: Y
                            }), this.dropdown.isActive && (this.input.setActiveDescendant(Y.id), this.containerOuter.setActiveDescendant(Y.id))
                        }
                    }, k._addItem = function(b) {
                        var T = b.value,
                            V = b.label,
                            Y = V === void 0 ? null : V,
                            X = b.choiceId,
                            le = X === void 0 ? -1 : X,
                            he = b.groupId,
                            Me = he === void 0 ? -1 : he,
                            Ve = b.customProperties,
                            Le = Ve === void 0 ? null : Ve,
                            Qe = b.placeholder,
                            ot = Qe === void 0 ? !1 : Qe,
                            qe = b.keyCode,
                            yt = qe === void 0 ? null : qe,
                            st = typeof T == "string" ? T.trim() : T,
                            lt = yt,
                            qt = Le,
                            On = this._store.items,
                            Vn = Y || st,
                            ki = le || -1,
                            kr = Me >= 0 ? this._store.getGroupById(Me) : null,
                            Jr = On ? On.length + 1 : 1;
                        return this.config.prependValue && (st = this.config.prependValue + st.toString()), this.config.appendValue && (st += this.config.appendValue.toString()), this._store.dispatch(Te({
                            value: st,
                            label: Vn,
                            id: Jr,
                            choiceId: ki,
                            groupId: Me,
                            customProperties: Le,
                            placeholder: ot,
                            keyCode: lt
                        })), this._isSelectOneElement && this.removeActiveItems(Jr), this.passedElement.triggerEvent(rn.addItem, {
                            id: Jr,
                            value: st,
                            label: Vn,
                            customProperties: qt,
                            groupValue: kr && kr.value ? kr.value : void 0,
                            keyCode: lt
                        }), this
                    }, k._removeItem = function(b) {
                        if (!b || !it("Object", b)) return this;
                        var T = b.id,
                            V = b.value,
                            Y = b.label,
                            X = b.choiceId,
                            le = b.groupId,
                            he = le >= 0 ? this._store.getGroupById(le) : null;
                        return this._store.dispatch(Ue(T, X)), he && he.value ? this.passedElement.triggerEvent(rn.removeItem, {
                            id: T,
                            value: V,
                            label: Y,
                            groupValue: he.value
                        }) : this.passedElement.triggerEvent(rn.removeItem, {
                            id: T,
                            value: V,
                            label: Y
                        }), this
                    }, k._addChoice = function(b) {
                        var T = b.value,
                            V = b.label,
                            Y = V === void 0 ? null : V,
                            X = b.isSelected,
                            le = X === void 0 ? !1 : X,
                            he = b.isDisabled,
                            Me = he === void 0 ? !1 : he,
                            Ve = b.groupId,
                            Le = Ve === void 0 ? -1 : Ve,
                            Qe = b.customProperties,
                            ot = Qe === void 0 ? null : Qe,
                            qe = b.placeholder,
                            yt = qe === void 0 ? !1 : qe,
                            st = b.keyCode,
                            lt = st === void 0 ? null : st;
                        if (!(typeof T == "undefined" || T === null)) {
                            var qt = this._store.choices,
                                On = Y || T,
                                Vn = qt ? qt.length + 1 : 1,
                                ki = this._baseId + "-" + this._idNames.itemChoice + "-" + Vn;
                            this._store.dispatch(ce({
                                id: Vn,
                                groupId: Le,
                                elementId: ki,
                                value: T,
                                label: On,
                                disabled: Me,
                                customProperties: ot,
                                placeholder: yt,
                                keyCode: lt
                            })), le && this._addItem({
                                value: T,
                                label: On,
                                choiceId: Vn,
                                customProperties: ot,
                                placeholder: yt,
                                keyCode: lt
                            })
                        }
                    }, k._addGroup = function(b) {
                        var T = this,
                            V = b.group,
                            Y = b.id,
                            X = b.valueKey,
                            le = X === void 0 ? "value" : X,
                            he = b.labelKey,
                            Me = he === void 0 ? "label" : he,
                            Ve = it("Object", V) ? V.choices : Array.from(V.getElementsByTagName("OPTION")),
                            Le = Y || Math.floor(new Date().valueOf() * Math.random()),
                            Qe = V.disabled ? V.disabled : !1;
                        if (Ve) {
                            this._store.dispatch(Ft({
                                value: V.label,
                                id: Le,
                                active: !0,
                                disabled: Qe
                            }));
                            var ot = function(yt) {
                                var st = yt.disabled || yt.parentNode && yt.parentNode.disabled;
                                T._addChoice({
                                    value: yt[le],
                                    label: it("Object", yt) ? yt[Me] : yt.innerHTML,
                                    isSelected: yt.selected,
                                    isDisabled: st,
                                    groupId: Le,
                                    customProperties: yt.customProperties,
                                    placeholder: yt.placeholder
                                })
                            };
                            Ve.forEach(ot)
                        } else this._store.dispatch(Ft({
                            value: V.label,
                            id: V.id,
                            active: !1,
                            disabled: V.disabled
                        }))
                    }, k._getTemplate = function(b) {
                        var T;
                        if (!b) return null;
                        for (var V = this.config.classNames, Y = arguments.length, X = new Array(Y > 1 ? Y - 1 : 0), le = 1; le < Y; le++) X[le - 1] = arguments[le];
                        return (T = this._templates[b]).call.apply(T, [this, V].concat(X))
                    }, k._createTemplates = function() {
                        var b = this.config.callbackOnCreateTemplates,
                            T = {};
                        b && typeof b == "function" && (T = b.call(this, jt)), this._templates = o()(ie, T)
                    }, k._createElements = function() {
                        this.containerOuter = new Cn({
                            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position
                        }), this.containerInner = new Cn({
                            element: this._getTemplate("containerInner"),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position
                        }), this.input = new ar({
                            element: this._getTemplate("input", this._placeholderValue),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            preventPaste: !this.config.paste
                        }), this.choiceList = new ht({
                            element: this._getTemplate("choiceList", this._isSelectOneElement)
                        }), this.itemList = new ht({
                            element: this._getTemplate("itemList", this._isSelectOneElement)
                        }), this.dropdown = new Rr({
                            element: this._getTemplate("dropdown"),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type
                        })
                    }, k._createStructure = function() {
                        this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems)
                    }, k._addPredefinedGroups = function(b) {
                        var T = this,
                            V = this.passedElement.placeholderOption;
                        V && V.parentNode.tagName === "SELECT" && this._addChoice({
                            value: V.value,
                            label: V.innerHTML,
                            isSelected: V.selected,
                            isDisabled: V.disabled,
                            placeholder: !0
                        }), b.forEach(function(Y) {
                            return T._addGroup({
                                group: Y,
                                id: Y.id || null
                            })
                        })
                    }, k._addPredefinedChoices = function(b) {
                        var T = this;
                        this.config.shouldSort && b.sort(this.config.sorter);
                        var V = b.some(function(X) {
                                return X.selected
                            }),
                            Y = b.findIndex(function(X) {
                                return X.disabled === void 0 || !X.disabled
                            });
                        b.forEach(function(X, le) {
                            var he = X.value,
                                Me = X.label,
                                Ve = X.customProperties,
                                Le = X.placeholder;
                            if (T._isSelectElement)
                                if (X.choices) T._addGroup({
                                    group: X,
                                    id: X.id || null
                                });
                                else {
                                    var Qe = T._isSelectOneElement && !V && le === Y,
                                        ot = Qe ? !0 : X.selected,
                                        qe = X.disabled;
                                    T._addChoice({
                                        value: he,
                                        label: Me,
                                        isSelected: ot,
                                        isDisabled: qe,
                                        customProperties: Ve,
                                        placeholder: Le
                                    })
                                }
                            else T._addChoice({
                                value: he,
                                label: Me,
                                isSelected: X.selected,
                                isDisabled: X.disabled,
                                customProperties: Ve,
                                placeholder: Le
                            })
                        })
                    }, k._addPredefinedItems = function(b) {
                        var T = this;
                        b.forEach(function(V) {
                            typeof V == "object" && V.value && T._addItem({
                                value: V.value,
                                label: V.label,
                                choiceId: V.id,
                                customProperties: V.customProperties,
                                placeholder: V.placeholder
                            }), typeof V == "string" && T._addItem({
                                value: V
                            })
                        })
                    }, k._setChoiceOrItem = function(b) {
                        var T = this,
                            V = Je(b).toLowerCase(),
                            Y = {
                                object: function() {
                                    b.value && (T._isTextElement ? T._addItem({
                                        value: b.value,
                                        label: b.label,
                                        choiceId: b.id,
                                        customProperties: b.customProperties,
                                        placeholder: b.placeholder
                                    }) : T._addChoice({
                                        value: b.value,
                                        label: b.label,
                                        isSelected: !0,
                                        isDisabled: !1,
                                        customProperties: b.customProperties,
                                        placeholder: b.placeholder
                                    }))
                                },
                                string: function() {
                                    T._isTextElement ? T._addItem({
                                        value: b
                                    }) : T._addChoice({
                                        value: b,
                                        label: b,
                                        isSelected: !0,
                                        isDisabled: !1
                                    })
                                }
                            };
                        Y[V]()
                    }, k._findAndSelectChoiceByValue = function(b) {
                        var T = this,
                            V = this._store.choices,
                            Y = V.find(function(X) {
                                return T.config.valueComparer(X.value, b)
                            });
                        Y && !Y.selected && this._addItem({
                            value: Y.value,
                            label: Y.label,
                            choiceId: Y.id,
                            groupId: Y.groupId,
                            customProperties: Y.customProperties,
                            placeholder: Y.placeholder,
                            keyCode: Y.keyCode
                        })
                    }, k._generatePlaceholderValue = function() {
                        if (this._isSelectElement) {
                            var b = this.passedElement.placeholderOption;
                            return b ? b.text : !1
                        }
                        var T = this.config,
                            V = T.placeholder,
                            Y = T.placeholderValue,
                            X = this.passedElement.element.dataset;
                        if (V) {
                            if (Y) return Y;
                            if (X.placeholder) return X.placeholder
                        }
                        return !1
                    }, z
                }(),
                tu = t.default = Gr
        }]).default
    })
});
var gC = wn((FZ, pC) => {
    var IH = typeof Element != "undefined",
        AH = typeof Map == "function",
        OH = typeof Set == "function",
        LH = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

    function jd(e, t) {
        if (e === t) return !0;
        if (e && t && typeof e == "object" && typeof t == "object") {
            if (e.constructor !== t.constructor) return !1;
            var r, n, i;
            if (Array.isArray(e)) {
                if (r = e.length, r != t.length) return !1;
                for (n = r; n-- !== 0;)
                    if (!jd(e[n], t[n])) return !1;
                return !0
            }
            var a;
            if (AH && e instanceof Map && t instanceof Map) {
                if (e.size !== t.size) return !1;
                for (a = e.entries(); !(n = a.next()).done;)
                    if (!t.has(n.value[0])) return !1;
                for (a = e.entries(); !(n = a.next()).done;)
                    if (!jd(n.value[1], t.get(n.value[0]))) return !1;
                return !0
            }
            if (OH && e instanceof Set && t instanceof Set) {
                if (e.size !== t.size) return !1;
                for (a = e.entries(); !(n = a.next()).done;)
                    if (!t.has(n.value[0])) return !1;
                return !0
            }
            if (LH && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
                if (r = e.length, r != t.length) return !1;
                for (n = r; n-- !== 0;)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
            if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
            if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
            if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length) return !1;
            for (n = r; n-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
            if (IH && e instanceof Element) return !1;
            for (n = r; n-- !== 0;)
                if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !jd(e[i[n]], t[i[n]])) return !1;
            return !0
        }
        return e !== e && t !== t
    }
    pC.exports = function(t, r) {
        try {
            return jd(t, r)
        } catch (n) {
            if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
            throw n
        }
    }
});
var S_ = wn((Gne, Dy) => {
    (function() {
        var e;
        typeof Dy != "undefined" ? e = Dy.exports = n : e = function() {
            return this || (0, eval)("this")
        }(), e.format = n, e.vsprintf = r, typeof console != "undefined" && typeof console.log == "function" && (e.printf = t);

        function t() {
            console.log(n.apply(null, arguments))
        }

        function r(i, a) {
            return n.apply(null, [i].concat(a))
        }

        function n(i) {
            for (var a = 1, o = [].slice.call(arguments), s = 0, u = i.length, l = "", c, d = !1, m, h, g = !1, y, v = function() {
                    return o[a++]
                }, D = function() {
                    for (var I = "";
                        /\d/.test(i[s]);) I += i[s++], c = i[s];
                    return I.length > 0 ? parseInt(I) : null
                }; s < u; ++s)
                if (c = i[s], d) switch (d = !1, c == "." ? (g = !1, c = i[++s]) : c == "0" && i[s + 1] == "." ? (g = !0, s += 2, c = i[s]) : g = !0, y = D(), c) {
                    case "b":
                        l += parseInt(v(), 10).toString(2);
                        break;
                    case "c":
                        m = v(), typeof m == "string" || m instanceof String ? l += m : l += String.fromCharCode(parseInt(m, 10));
                        break;
                    case "d":
                        l += parseInt(v(), 10);
                        break;
                    case "f":
                        h = String(parseFloat(v()).toFixed(y || 6)), l += g ? h : h.replace(/^0/, "");
                        break;
                    case "j":
                        l += JSON.stringify(v());
                        break;
                    case "o":
                        l += "0" + parseInt(v(), 10).toString(8);
                        break;
                    case "s":
                        l += v();
                        break;
                    case "x":
                        l += "0x" + parseInt(v(), 10).toString(16);
                        break;
                    case "X":
                        l += "0x" + parseInt(v(), 10).toString(16).toUpperCase();
                        break;
                    default:
                        l += c;
                        break
                } else c === "%" ? d = !0 : l += c;
            return l
        }
    })()
});
var HB = {};
Rf(HB, {
    default: () => wf
});
module.exports = ov(HB);

function fu(e, t) {
    let r = Object.keys(t).map(n => mF(e, n, t[n]));
    return r.length === 1 ? r[0] : function() {
        r.forEach(n => n())
    }
}

function mF(e, t, r) {
    let n = e[t],
        i = e.hasOwnProperty(t),
        a = r(n);
    return n && Object.setPrototypeOf(a, n), Object.setPrototypeOf(o, a), e[t] = o, s;

    function o(...u) {
        return a === n && e[t] === o && s(), a.apply(this, u)
    }

    function s() {
        e[t] === o && (i ? e[t] = n : delete e[t]), a !== n && (a = n, Object.setPrototypeOf(o, n || Function))
    }
}
var Rn = require("obsidian");
var Ws, Xe, cv, pF, Va, sv, dv, Hf, Wf, Bf, Vf, fv, Us = {},
    hv = [],
    gF = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    pu = Array.isArray;

function Ii(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function mv(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function xr(e, t, r) {
    var n, i, a, o = {};
    for (a in t) a == "key" ? n = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? Ws.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
        for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
    return $s(e, o, n, i, null)
}

function $s(e, t, r, n, i) {
    var a = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i == null ? ++cv : i,
        __i: -1,
        __u: 0
    };
    return i == null && Xe.vnode != null && Xe.vnode(a), a
}

function Yf() {
    return {
        current: null
    }
}

function ct(e) {
    return e.children
}

function Br(e, t) {
    this.props = e, this.context = t
}

function $a(e, t) {
    if (t == null) return e.__ ? $a(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
    return typeof e.type == "function" ? $a(e) : null
}

function pv(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            } return pv(e)
    }
}

function $f(e) {
    (!e.__d && (e.__d = !0) && Va.push(e) && !mu.__r++ || sv !== Xe.debounceRendering) && ((sv = Xe.debounceRendering) || dv)(mu)
}

function mu() {
    var e, t, r, n, i, a, o, s;
    for (Va.sort(Hf); e = Va.shift();) e.__d && (t = Va.length, n = void 0, a = (i = (r = e).__v).__e, o = [], s = [], r.__P && ((n = Ii({}, i)).__v = i.__v + 1, Xe.vnode && Xe.vnode(n), zf(r.__P, n, i, r.__n, r.__P.ownerSVGElement !== void 0, 32 & i.__u ? [a] : null, o, a == null ? $a(i) : a, !!(32 & i.__u), s), n.__v = i.__v, n.__.__k[n.__i] = n, vv(o, n, s), n.__e != a && pv(n)), Va.length > t && Va.sort(Hf));
    mu.__r = 0
}

function gv(e, t, r, n, i, a, o, s, u, l, c) {
    var d, m, h, g, y, v = n && n.__k || hv,
        D = t.length;
    for (r.__d = u, yF(r, t, v), u = r.__d, d = 0; d < D; d++)(h = r.__k[d]) != null && typeof h != "boolean" && typeof h != "function" && (m = h.__i === -1 ? Us : v[h.__i] || Us, h.__i = d, zf(e, h, m, i, a, o, s, u, l, c), g = h.__e, h.ref && m.ref != h.ref && (m.ref && Kf(m.ref, null, h), c.push(h.ref, h.__c || g, h)), y == null && g != null && (y = g), 65536 & h.__u || m.__k === h.__k ? (u && !u.isConnected && (u = $a(m)), u = yv(h, u, e)) : typeof h.type == "function" && h.__d !== void 0 ? u = h.__d : g && (u = g.nextSibling), h.__d = void 0, h.__u &= -196609);
    r.__d = u, r.__e = y
}

function yF(e, t, r) {
    var n, i, a, o, s, u = t.length,
        l = r.length,
        c = l,
        d = 0;
    for (e.__k = [], n = 0; n < u; n++) o = n + d, (i = e.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? $s(null, i, null, null, null) : pu(i) ? $s(ct, {
        children: i
    }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? $s(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = e, i.__b = e.__b + 1, s = vF(i, r, o, c), i.__i = s, a = null, s !== -1 && (c--, (a = r[s]) && (a.__u |= 131072)), a == null || a.__v === null ? (s == -1 && d--, typeof i.type != "function" && (i.__u |= 65536)) : s !== o && (s === o + 1 ? d++ : s > o ? c > u - o ? d += s - o : d-- : s < o ? s == o - 1 && (d = s - o) : d = 0, s !== n + d && (i.__u |= 65536))) : (a = r[o]) && a.key == null && a.__e && !(131072 & a.__u) && (a.__e == e.__d && (e.__d = $a(a)), Uf(a, a, !1), r[o] = null, c--);
    if (c)
        for (n = 0; n < l; n++)(a = r[n]) != null && !(131072 & a.__u) && (a.__e == e.__d && (e.__d = $a(a)), Uf(a, a))
}

function yv(e, t, r) {
    var n, i;
    if (typeof e.type == "function") {
        for (n = e.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = e, t = yv(n[i], t, r));
        return t
    }
    e.__e != t && (r.insertBefore(e.__e, t || null), t = e.__e);
    do t = t && t.nextSibling; while (t != null && t.nodeType === 8);
    return t
}

function fi(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (pu(e) ? e.some(function(r) {
        fi(r, t)
    }) : t.push(e)), t
}

function vF(e, t, r, n) {
    var i = e.key,
        a = e.type,
        o = r - 1,
        s = r + 1,
        u = t[r];
    if (u === null || u && i == u.key && a === u.type && !(131072 & u.__u)) return r;
    if (n > (u != null && !(131072 & u.__u) ? 1 : 0))
        for (; o >= 0 || s < t.length;) {
            if (o >= 0) {
                if ((u = t[o]) && !(131072 & u.__u) && i == u.key && a === u.type) return o;
                o--
            }
            if (s < t.length) {
                if ((u = t[s]) && !(131072 & u.__u) && i == u.key && a === u.type) return s;
                s++
            }
        }
    return -1
}

function lv(e, t, r) {
    t[0] === "-" ? e.setProperty(t, r == null ? "" : r) : e[t] = r == null ? "" : typeof r != "number" || gF.test(t) ? r : r + "px"
}

function hu(e, t, r, n, i) {
    var a;
    e: if (t === "style")
        if (typeof r == "string") e.style.cssText = r;
        else {
            if (typeof n == "string" && (e.style.cssText = n = ""), n)
                for (t in n) r && t in r || lv(e.style, t, "");
            if (r)
                for (t in r) n && r[t] === n[t] || lv(e.style, t, r[t])
        }
    else if (t[0] === "o" && t[1] === "n") a = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = r, r ? n ? r.u = n.u : (r.u = Wf, e.addEventListener(t, a ? Vf : Bf, a)) : e.removeEventListener(t, a ? Vf : Bf, a);
    else {
        if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t in e) try {
            e[t] = r == null ? "" : r;
            break e
        } catch (o) {}
        typeof r == "function" || (r == null || r === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, r))
    }
}

function uv(e) {
    return function(t) {
        if (this.l) {
            var r = this.l[t.type + e];
            if (t.t == null) t.t = Wf++;
            else if (t.t < r.u) return;
            return r(Xe.event ? Xe.event(t) : t)
        }
    }
}

function zf(e, t, r, n, i, a, o, s, u, l) {
    var c, d, m, h, g, y, v, D, I, C, x, O, A, P, B, G = t.type;
    if (t.constructor !== void 0) return null;
    128 & r.__u && (u = !!(32 & r.__u), a = [s = t.__e = r.__e]), (c = Xe.__b) && c(t);
    e: if (typeof G == "function") try {
        if (D = t.props, I = (c = G.contextType) && n[c.__c], C = c ? I ? I.props.value : c.__ : n, r.__c ? v = (d = t.__c = r.__c).__ = d.__E : ("prototype" in G && G.prototype.render ? t.__c = d = new G(D, C) : (t.__c = d = new Br(D, C), d.constructor = G, d.render = bF), I && I.sub(d), d.props = D, d.state || (d.state = {}), d.context = C, d.__n = n, m = d.__d = !0, d.__h = [], d._sb = []), d.__s == null && (d.__s = d.state), G.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = Ii({}, d.__s)), Ii(d.__s, G.getDerivedStateFromProps(D, d.__s))), h = d.props, g = d.state, d.__v = t, m) G.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
            if (G.getDerivedStateFromProps == null && D !== h && d.componentWillReceiveProps != null && d.componentWillReceiveProps(D, C), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(D, d.__s, C) === !1 || t.__v === r.__v)) {
                for (t.__v !== r.__v && (d.props = D, d.state = d.__s, d.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(J) {
                        J && (J.__ = t)
                    }), x = 0; x < d._sb.length; x++) d.__h.push(d._sb[x]);
                d._sb = [], d.__h.length && o.push(d);
                break e
            }
            d.componentWillUpdate != null && d.componentWillUpdate(D, d.__s, C), d.componentDidUpdate != null && d.__h.push(function() {
                d.componentDidUpdate(h, g, y)
            })
        }
        if (d.context = C, d.props = D, d.__P = e, d.__e = !1, O = Xe.__r, A = 0, "prototype" in G && G.prototype.render) {
            for (d.state = d.__s, d.__d = !1, O && O(t), c = d.render(d.props, d.state, d.context), P = 0; P < d._sb.length; P++) d.__h.push(d._sb[P]);
            d._sb = []
        } else
            do d.__d = !1, O && O(t), c = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++A < 25);
        d.state = d.__s, d.getChildContext != null && (n = Ii(Ii({}, n), d.getChildContext())), m || d.getSnapshotBeforeUpdate == null || (y = d.getSnapshotBeforeUpdate(h, g)), gv(e, pu(B = c != null && c.type === ct && c.key == null ? c.props.children : c) ? B : [B], t, r, n, i, a, o, s, u, l), d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), v && (d.__E = d.__ = null)
    } catch (J) {
        t.__v = null, u || a != null ? (t.__e = s, t.__u |= u ? 160 : 32, a[a.indexOf(s)] = null) : (t.__e = r.__e, t.__k = r.__k), Xe.__e(J, t, r)
    } else a == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = wF(r.__e, t, r, n, i, a, o, u, l);
    (c = Xe.diffed) && c(t)
}

function vv(e, t, r) {
    t.__d = void 0;
    for (var n = 0; n < r.length; n++) Kf(r[n], r[++n], r[++n]);
    Xe.__c && Xe.__c(t, e), e.some(function(i) {
        try {
            e = i.__h, i.__h = [], e.some(function(a) {
                a.call(i)
            })
        } catch (a) {
            Xe.__e(a, i.__v)
        }
    })
}

function wF(e, t, r, n, i, a, o, s, u) {
    var l, c, d, m, h, g, y, v = r.props,
        D = t.props,
        I = t.type;
    if (I === "svg" && (i = !0), a != null) {
        for (l = 0; l < a.length; l++)
            if ((h = a[l]) && "setAttribute" in h == !!I && (I ? h.localName === I : h.nodeType === 3)) {
                e = h, a[l] = null;
                break
            }
    }
    if (e == null) {
        if (I === null) return document.createTextNode(D);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", I) : document.createElement(I, D.is && D), a = null, s = !1
    }
    if (I === null) v === D || s && e.data === D || (e.data = D);
    else {
        if (a = a && Ws.call(e.childNodes), v = r.props || Us, !s && a != null)
            for (v = {}, l = 0; l < e.attributes.length; l++) v[(h = e.attributes[l]).name] = h.value;
        for (l in v) h = v[l], l == "children" || (l == "dangerouslySetInnerHTML" ? d = h : l === "key" || l in D || hu(e, l, null, h, i));
        for (l in D) h = D[l], l == "children" ? m = h : l == "dangerouslySetInnerHTML" ? c = h : l == "value" ? g = h : l == "checked" ? y = h : l === "key" || s && typeof h != "function" || v[l] === h || hu(e, l, h, v[l], i);
        if (c) s || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
        else if (d && (e.innerHTML = ""), gv(e, pu(m) ? m : [m], t, r, n, i && I !== "foreignObject", a, o, a ? a[0] : r.__k && $a(r, 0), s, u), a != null)
            for (l = a.length; l--;) a[l] != null && mv(a[l]);
        s || (l = "value", g !== void 0 && (g !== e[l] || I === "progress" && !g || I === "option" && g !== v[l]) && hu(e, l, g, v[l], !1), l = "checked", y !== void 0 && y !== e[l] && hu(e, l, y, v[l], !1))
    }
    return e
}

function Kf(e, t, r) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (n) {
        Xe.__e(n, r)
    }
}

function Uf(e, t, r) {
    var n, i;
    if (Xe.unmount && Xe.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Kf(n, null, t)), (n = e.__c) != null) {
        if (n.componentWillUnmount) try {
            n.componentWillUnmount()
        } catch (a) {
            Xe.__e(a, t)
        }
        n.base = n.__P = null
    }
    if (n = e.__k)
        for (i = 0; i < n.length; i++) n[i] && Uf(n[i], t, r || typeof e.type != "function");
    r || e.__e == null || mv(e.__e), e.__c = e.__ = e.__e = e.__d = void 0
}

function bF(e, t, r) {
    return this.constructor(e, r)
}

function xo(e, t, r) {
    var n, i, a, o;
    Xe.__ && Xe.__(e, t), i = (n = typeof r == "function") ? null : r && r.__k || t.__k, a = [], o = [], zf(t, e = (!n && r || t).__k = xr(ct, null, [e]), i || Us, Us, t.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : t.firstChild ? Ws.call(t.childNodes) : null, a, !n && r ? r : i ? i.__e : t.firstChild, n, o), vv(a, e, o)
}

function jf(e, t) {
    xo(e, t, jf)
}

function wv(e, t, r) {
    var n, i, a, o, s = Ii({}, e.props);
    for (a in e.type && e.type.defaultProps && (o = e.type.defaultProps), t) a == "key" ? n = t[a] : a == "ref" ? i = t[a] : s[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? Ws.call(arguments, 2) : r), $s(e.type, s, n || e.key, i || e.ref, null)
}

function aa(e, t) {
    var r = {
        __c: t = "__cC" + fv++,
        __: e,
        Consumer: function(n, i) {
            return n.children(i)
        },
        Provider: function(n) {
            var i, a;
            return this.getChildContext || (i = [], (a = {})[t] = this, this.getChildContext = function() {
                return a
            }, this.shouldComponentUpdate = function(o) {
                this.props.value !== o.value && i.some(function(s) {
                    s.__e = !0, $f(s)
                })
            }, this.sub = function(o) {
                i.push(o);
                var s = o.componentWillUnmount;
                o.componentWillUnmount = function() {
                    i.splice(i.indexOf(o), 1), s && s.call(o)
                }
            }), n.children
        }
    };
    return r.Provider.__ = r.Consumer.contextType = r
}
Ws = hv.slice, Xe = {
    __e: function(e, t, r, n) {
        for (var i, a, o; t = t.__;)
            if ((i = t.__c) && !i.__) try {
                if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), o = i.__d), o) return i.__E = i
            } catch (s) {
                e = s
            }
        throw e
    }
}, cv = 0, pF = function(e) {
    return e != null && e.constructor == null
}, Br.prototype.setState = function(e, t) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ii({}, this.state), typeof e == "function" && (e = e(Ii({}, r), this.props)), e && Ii(r, e), e != null && this.__v && (t && this._sb.push(t), $f(this))
}, Br.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), $f(this))
}, Br.prototype.render = ct, Va = [], dv = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : activeWindow.setTimeout, Hf = function(e, t) {
    return e.__v.__b - t.__v.__b
}, mu.__r = 0, Wf = 0, Bf = uv(!1), Vf = uv(!0), fv = 0;
var oa, Qt, qf, bv, Co = 0,
    Mv = [],
    gu = [],
    an = Xe,
    Dv = an.__b,
    Sv = an.__r,
    Ev = an.diffed,
    kv = an.__c,
    xv = an.unmount,
    Cv = an.__;

function _o(e, t) {
    an.__h && an.__h(Qt, e, Co || t), Co = 0;
    var r = Qt.__H || (Qt.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({
        __V: gu
    }), r.__[e]
}

function Ne(e) {
    return Co = 1, Jf(Av, e)
}

function Jf(e, t, r) {
    var n = _o(oa++, 2);
    if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Av(void 0, t), function(s) {
            var u = n.__N ? n.__N[0] : n.__[0],
                l = n.t(u, s);
            u !== l && (n.__N = [l, n.__[1]], n.__c.setState({}))
        }], n.__c = Qt, !Qt.u)) {
        var i = function(s, u, l) {
            if (!n.__c.__H) return !0;
            var c = n.__c.__H.__.filter(function(m) {
                return !!m.__c
            });
            if (c.every(function(m) {
                    return !m.__N
                })) return !a || a.call(this, s, u, l);
            var d = !1;
            return c.forEach(function(m) {
                if (m.__N) {
                    var h = m.__[0];
                    m.__ = m.__N, m.__N = void 0, h !== m.__[0] && (d = !0)
                }
            }), !(!d && n.__c.props === s) && (!a || a.call(this, s, u, l))
        };
        Qt.u = !0;
        var a = Qt.shouldComponentUpdate,
            o = Qt.componentWillUpdate;
        Qt.componentWillUpdate = function(s, u, l) {
            if (this.__e) {
                var c = a;
                a = void 0, i(s, u, l), a = c
            }
            o && o.call(this, s, u, l)
        }, Qt.shouldComponentUpdate = i
    }
    return n.__N || n.__
}

function Ae(e, t) {
    var r = _o(oa++, 3);
    !an.__s && Zf(r.__H, t) && (r.__ = e, r.i = t, Qt.__H.__h.push(r))
}

function Ai(e, t) {
    var r = _o(oa++, 4);
    !an.__s && Zf(r.__H, t) && (r.__ = e, r.i = t, Qt.__h.push(r))
}

function Fe(e) {
    return Co = 5, Re(function() {
        return {
            current: e
        }
    }, [])
}

function Tv(e, t, r) {
    Co = 6, Ai(function() {
        return typeof e == "function" ? (e(t()), function() {
            return e(null)
        }) : e ? (e.current = t(), function() {
            return e.current = null
        }) : void 0
    }, r == null ? r : r.concat(e))
}

function Re(e, t) {
    var r = _o(oa++, 7);
    return Zf(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__
}

function Ye(e, t) {
    return Co = 8, Re(function() {
        return e
    }, t)
}

function Ee(e) {
    var t = Qt.context[e.__c],
        r = _o(oa++, 9);
    return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(Qt)), t.props.value) : e.__
}

function Fv(e, t) {
    an.useDebugValue && an.useDebugValue(t ? t(e) : e)
}

function Iv() {
    var e = _o(oa++, 11);
    if (!e.__) {
        for (var t = Qt.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
    }
    return e.__
}

function DF() {
    for (var e; e = Mv.shift();)
        if (e.__P && e.__H) try {
            e.__H.__h.forEach(yu), e.__H.__h.forEach(Gf), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], an.__e(t, e.__v)
        }
}
an.__b = function(e) {
    Qt = null, Dv && Dv(e)
}, an.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Cv && Cv(e, t)
}, an.__r = function(e) {
    Sv && Sv(e), oa = 0;
    var t = (Qt = e.__c).__H;
    t && (qf === Qt ? (t.__h = [], Qt.__h = [], t.__.forEach(function(r) {
        r.__N && (r.__ = r.__N), r.__V = gu, r.__N = r.i = void 0
    })) : (t.__h.forEach(yu), t.__h.forEach(Gf), t.__h = [], oa = 0)), qf = Qt
}, an.diffed = function(e) {
    Ev && Ev(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Mv.push(t) !== 1 && bv === an.requestAnimationFrame || ((bv = an.requestAnimationFrame) || SF)(DF)), t.__H.__.forEach(function(r) {
        r.i && (r.__H = r.i), r.__V !== gu && (r.__ = r.__V), r.i = void 0, r.__V = gu
    })), qf = Qt = null
}, an.__c = function(e, t) {
    t.some(function(r) {
        try {
            r.__h.forEach(yu), r.__h = r.__h.filter(function(n) {
                return !n.__ || Gf(n)
            })
        } catch (n) {
            t.some(function(i) {
                i.__h && (i.__h = [])
            }), t = [], an.__e(n, r.__v)
        }
    }), kv && kv(e, t)
}, an.unmount = function(e) {
    xv && xv(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            yu(n)
        } catch (i) {
            t = i
        }
    }), r.__H = void 0, t && an.__e(t, r.__v))
};
var _v = typeof activeWindow.requestAnimationFrame == "function";

function SF(e) {
    var t, r = function() {
            activeWindow.clearTimeout(n), _v && activeWindow.cancelAnimationFrame(t), activeWindow.setTimeout(e)
        },
        n = activeWindow.setTimeout(r, 100);
    _v && (t = activeWindow.requestAnimationFrame(r))
}

function yu(e) {
    var t = Qt,
        r = e.__c;
    typeof r == "function" && (e.__c = void 0, r()), Qt = t
}

function Gf(e) {
    var t = Qt;
    e.__c = e.__(), Qt = t
}

function Zf(e, t) {
    return !e || e.length !== t.length || t.some(function(r, n) {
        return r !== e[n]
    })
}

function Av(e, t) {
    return typeof t == "function" ? t(e) : t
}

function $v(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function Xf(e, t) {
    for (var r in e)
        if (r !== "__source" && !(r in t)) return !0;
    for (var n in t)
        if (n !== "__source" && e[n] !== t[n]) return !0;
    return !1
}

function eh(e, t) {
    this.props = e, this.context = t
}

function zt(e, t) {
    function r(i) {
        var a = this.props.ref,
            o = a == i.ref;
        return !o && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, i) || !o : Xf(this.props, i)
    }

    function n(i) {
        return this.shouldComponentUpdate = r, xr(e, i)
    }
    return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n
}(eh.prototype = new Br).isPureReactComponent = !0, eh.prototype.shouldComponentUpdate = function(e, t) {
    return Xf(this.props, e) || Xf(this.state, t)
};
var Ov = Xe.__b;
Xe.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ov && Ov(e)
};
var EF = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function kF(e) {
    function t(r) {
        var n = $v({}, r);
        return delete n.ref, e(n, r.ref || null)
    }
    return t.$$typeof = EF, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Lv = function(e, t) {
        return e == null ? null : fi(fi(e).map(t))
    },
    xF = {
        map: Lv,
        forEach: Lv,
        count: function(e) {
            return e ? fi(e).length : 0
        },
        only: function(e) {
            var t = fi(e);
            if (t.length !== 1) throw "Children.only";
            return t[0]
        },
        toArray: fi
    },
    CF = Xe.__e;
Xe.__e = function(e, t, r, n) {
    if (e.then) {
        for (var i, a = t; a = a.__;)
            if ((i = a.__c) && i.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), i.__c(e, t)
    }
    CF(e, t, r, n)
};
var Pv = Xe.unmount;

function Uv(e, t, r) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
        typeof n.__c == "function" && n.__c()
    }), e.__c.__H = null), (e = $v({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
        return Uv(n, t, r)
    })), e
}

function Wv(e, t, r) {
    return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
        return Wv(n, t, r)
    }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e
}

function vu() {
    this.__u = 0, this.t = null, this.__b = null
}

function Yv(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}

function _F(e) {
    var t, r, n;

    function i(a) {
        if (t || (t = e()).then(function(o) {
                r = o.default || o
            }, function(o) {
                n = o
            }), n) throw n;
        if (!r) throw t;
        return xr(r, a)
    }
    return i.displayName = "Lazy", i.__f = !0, i
}

function Ys() {
    this.u = null, this.o = null
}
Xe.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Pv && Pv(e)
}, (vu.prototype = new Br).__c = function(e, t) {
    var r = t.__c,
        n = this;
    n.t == null && (n.t = []), n.t.push(r);
    var i = Yv(n.__v),
        a = !1,
        o = function() {
            a || (a = !0, r.__R = null, i ? i(s) : s())
        };
    r.__R = o;
    var s = function() {
        if (!--n.__u) {
            if (n.state.__a) {
                var u = n.state.__a;
                n.__v.__k[0] = Wv(u, u.__c.__P, u.__c.__O)
            }
            var l;
            for (n.setState({
                    __a: n.__b = null
                }); l = n.t.pop();) l.forceUpdate()
        }
    };
    n.__u++ || 32 & t.__u || n.setState({
        __a: n.__b = n.__v.__k[0]
    }), e.then(o, o)
}, vu.prototype.componentWillUnmount = function() {
    this.t = []
}, vu.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var r = document.createElement("div"),
                n = this.__v.__k[0].__c;
            this.__v.__k[0] = Uv(this.__b, r, n.__O = n.__P)
        }
        this.__b = null
    }
    var i = t.__a && xr(ct, null, e.fallback);
    return i && (i.__u &= -33), [xr(ct, null, t.__a ? null : e.children), i]
};
var Nv = function(e, t, r) {
    if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
        for (r = e.u; r;) {
            for (; r.length > 3;) r.pop()();
            if (r[1] < r[0]) break;
            e.u = r = r[2]
        }
};

function MF(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function TF(e) {
    var t = this,
        r = e.i;
    t.componentWillUnmount = function() {
        xo(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== r && t.componentWillUnmount(), t.l || (t.i = r, t.l = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        appendChild: function(n) {
            this.childNodes.push(n), t.i.appendChild(n)
        },
        insertBefore: function(n, i) {
            this.childNodes.push(n), t.i.appendChild(n)
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n)
        }
    }), xo(xr(MF, {
        context: t.context
    }, e.__v), t.l)
}

function Oi(e, t) {
    var r = xr(TF, {
        __v: e,
        i: t
    });
    return r.containerInfo = t, r
}(Ys.prototype = new Br).__a = function(e) {
    var t = this,
        r = Yv(t.__v),
        n = t.o.get(e);
    return n[0]++,
        function(i) {
            var a = function() {
                t.props.revealOrder ? (n.push(i), Nv(t, e, n)) : i()
            };
            r ? r(a) : a()
        }
}, Ys.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = fi(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var r = t.length; r--;) this.o.set(t[r], this.u = [1, 0, this.u]);
    return e.children
}, Ys.prototype.componentDidUpdate = Ys.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, r) {
        Nv(e, r, t)
    })
};
var zv = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103,
    FF = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    IF = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    AF = /[A-Z0-9]/g,
    OF = typeof document != "undefined",
    LF = function(e) {
        return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
    };

function Li(e, t, r) {
    return t.__k == null && (t.textContent = ""), xo(e, t), typeof r == "function" && r(), e ? e.__c : null
}

function PF(e, t, r) {
    return jf(e, t), typeof r == "function" && r(), e ? e.__c : null
}
Br.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Br.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var Rv = Xe.event;

function NF() {}

function RF() {
    return this.cancelBubble
}

function HF() {
    return this.defaultPrevented
}
Xe.event = function(e) {
    return Rv && (e = Rv(e)), e.persist = NF, e.isPropagationStopped = RF, e.isDefaultPrevented = HF, e.nativeEvent = e
};
var th, BF = {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    Hv = Xe.vnode;
Xe.vnode = function(e) {
    typeof e.type == "string" && function(t) {
        var r = t.props,
            n = t.type,
            i = {};
        for (var a in r) {
            var o = r[a];
            if (!(a === "value" && "defaultValue" in r && o == null || OF && a === "children" && n === "noscript" || a === "class" || a === "className")) {
                var s = a.toLowerCase();
                a === "defaultValue" && "value" in r && r.value == null ? a = "value" : a === "download" && o === !0 ? o = "" : s === "translate" && o === "no" ? o = !1 : s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || LF(r.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : IF.test(a) ? a = s : n.indexOf("-") === -1 && FF.test(a) ? a = a.replace(AF, "-$&").toLowerCase() : o === null && (o = void 0) : s = a = "oninput", s === "oninput" && i[a = s] && (a = "oninputCapture"), i[a] = o
            }
        }
        n == "select" && i.multiple && Array.isArray(i.value) && (i.value = fi(r.children).forEach(function(u) {
            u.props.selected = i.value.indexOf(u.props.value) != -1
        })), n == "select" && i.defaultValue != null && (i.value = fi(r.children).forEach(function(u) {
            u.props.selected = i.multiple ? i.defaultValue.indexOf(u.props.value) != -1 : i.defaultValue == u.props.value
        })), r.class && !r.className ? (i.class = r.class, Object.defineProperty(i, "className", BF)) : (r.className && !r.class || r.class && r.className) && (i.class = i.className = r.className), t.props = i
    }(e), e.$$typeof = zv, Hv && Hv(e)
};
var Bv = Xe.__r;
Xe.__r = function(e) {
    Bv && Bv(e), th = e.__c
};
var Vv = Xe.diffed;
Xe.diffed = function(e) {
    Vv && Vv(e);
    var t = e.props,
        r = e.__e;
    r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), th = null
};
var VF = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return th.__n[e.__c].props.value
            }
        }
    }
};

function $F(e) {
    return xr.bind(null, e)
}

function wu(e) {
    return !!e && e.$$typeof === zv
}

function UF(e) {
    return wu(e) && e.type === ct
}

function WF(e) {
    return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(")
}

function YF(e) {
    return wu(e) ? wv.apply(null, arguments) : e
}

function Pi(e) {
    return !!e.__k && (xo(null, e), !0)
}

function zF(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
}
var KF = function(e, t) {
        return e(t)
    },
    jF = function(e, t) {
        return e(t)
    },
    qF = ct;

function Kv(e) {
    e()
}

function GF(e) {
    return e
}

function JF() {
    return [!1, Kv]
}
var ZF = Ai,
    QF = wu;

function XF(e, t) {
    var r = t(),
        n = Ne({
            h: {
                __: r,
                v: t
            }
        }),
        i = n[0].h,
        a = n[1];
    return Ai(function() {
        i.__ = r, i.v = t, Qf(i) && a({
            h: i
        })
    }, [e, r, t]), Ae(function() {
        return Qf(i) && a({
            h: i
        }), e(function() {
            Qf(i) && a({
                h: i
            })
        })
    }, [e]), r
}

function Qf(e) {
    var t, r, n = e.v,
        i = e.__;
    try {
        var a = n();
        return !((t = i) === (r = a) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r)
    } catch (o) {
        return !0
    }
}
var $e = {
    useState: Ne,
    useId: Iv,
    useReducer: Jf,
    useEffect: Ae,
    useLayoutEffect: Ai,
    useInsertionEffect: ZF,
    useTransition: JF,
    useDeferredValue: GF,
    useSyncExternalStore: XF,
    startTransition: Kv,
    useRef: Fe,
    useImperativeHandle: Tv,
    useMemo: Re,
    useCallback: Ye,
    useContext: Ee,
    useDebugValue: Fv,
    version: "17.0.2",
    Children: xF,
    render: Li,
    hydrate: PF,
    unmountComponentAtNode: Pi,
    createPortal: Oi,
    createElement: xr,
    createContext: aa,
    createFactory: $F,
    cloneElement: YF,
    createRef: Yf,
    Fragment: ct,
    isValidElement: wu,
    isElement: QF,
    isFragment: UF,
    isMemo: WF,
    findDOMNode: zF,
    Component: Br,
    PureComponent: eh,
    memo: zt,
    forwardRef: kF,
    flushSync: jF,
    unstable_batchedUpdates: KF,
    StrictMode: qF,
    Suspense: vu,
    SuspenseList: Ys,
    lazy: _F,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: VF
};

function Ge(e) {
    if (typeof e == "string" || typeof e == "number") return "" + e;
    let t = "";
    if (Array.isArray(e))
        for (let r = 0, n; r < e.length; r++)(n = Ge(e[r])) !== "" && (t += (t && " ") + n);
    else
        for (let r in e) e[r] && (t += (t && " ") + r);
    return t
}
var Ss = Ct(ln());
var Sh = Ct(ln()),
    da = require("obsidian");
var rw = Ct(tw()),
    la = Ct(ln());

function nw(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function Ni(e) {
    var t, r;
    return nw(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(nw(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)))
}

function DI(e, t) {
    return e.length !== t.length ? !1 : e.every((r, n, i) => n === i.length - 1 ? r !== t[n] : r === t[n])
}

function SI(e, t) {
    return e.length === t.length && e.every((r, n) => r === t[n])
}

function js(e, t) {
    if (SI(e, t)) return 2;
    if (!DI(e, t)) return 3;
    let r = e.length - 1;
    return e[r] < t[r] ? 1 : 0
}

function un(e, t) {
    let r = t.length ? t[0] : null;
    return r !== null && e.children && e.children[r] ? un(e.children[r], t.slice(1)) : e
}

function kI(e, t) {
    let r = t;
    for (let n = e.length - 1; n >= 0; n--) r = {
        children: {
            [e[n]]: r
        }
    };
    return r
}

function qs(e, t) {
    let r = t;
    for (let n = e.length - 2; n >= 0; n--) r = {
        children: {
            [e[n]]: r
        }
    };
    return r
}

function iw(e, t) {
    let r = t ? [e.last(), 1, t] : [e.last(), 1];
    return qs(e, {
        children: {
            $splice: [r]
        }
    })
}

function aw(e, t, r = 0) {
    return qs(e, {
        children: {
            $splice: [
                [e.last() + r, 0, ...t]
            ]
        }
    })
}

function xI(e, t) {
    return qs(e, {
        children: {
            $push: t
        }
    })
}

function CI(e, t) {
    return qs(e, {
        children: {
            $unshift: t
        }
    })
}

function Ri(e, t, r, n, i) {
    let a = n ? n(un(e, t)) : un(e, t),
        s = js(t, r) === 1 ? -1 : 0,
        u = i == null ? void 0 : i(un(e, t)),
        l = iw(t, u),
        c = aw(r, Array.isArray(a) ? a : [a], s),
        d = (0, rw.default)(l, c, {
            isMergeableObject: h => Ni(h) || Array.isArray(h)
        });
    return (0, la.default)(e, d)
}

function mi(e, t, r) {
    return (0, la.default)(e, iw(t, r))
}

function Xr(e, t, r) {
    return (0, la.default)(e, aw(t, r))
}

function ah(e, t, r) {
    return (0, la.default)(e, xI(t, r))
}

function ow(e, t, r) {
    return (0, la.default)(e, CI(t, r))
}

function Du(e, t, r) {
    return (0, la.default)(e, kI(t, r))
}

function oh(e, t, r) {
    return (0, la.default)(e, qs(t, r))
}
var Gs = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
    Mn = function() {
        function e(t, r) {
            if (r === 0) throw new Error("Can't create weekday with n == 0");
            this.weekday = t, this.n = r
        }
        return e.fromStr = function(t) {
            return new e(Gs.indexOf(t))
        }, e.prototype.nth = function(t) {
            return this.n === t ? this : new e(this.weekday, t)
        }, e.prototype.equals = function(t) {
            return this.weekday === t.weekday && this.n === t.n
        }, e.prototype.toString = function() {
            var t = Gs[this.weekday];
            return this.n && (t = (this.n > 0 ? "+" : "") + String(this.n) + t), t
        }, e.prototype.getJsWeekday = function() {
            return this.weekday === 6 ? 0 : this.weekday + 1
        }, e
    }();
var Gt = function(e) {
        return e != null
    },
    Cr = function(e) {
        return typeof e == "number"
    },
    sh = function(e) {
        return typeof e == "string" && Gs.includes(e)
    },
    $n = Array.isArray,
    $r = function(e, t) {
        t === void 0 && (t = e), arguments.length === 1 && (t = e, e = 0);
        for (var r = [], n = e; n < t; n++) r.push(n);
        return r
    };
var wt = function(e, t) {
        var r = 0,
            n = [];
        if ($n(e))
            for (; r < t; r++) n[r] = [].concat(e);
        else
            for (; r < t; r++) n[r] = e;
        return n
    },
    sw = function(e) {
        return $n(e) ? e : [e]
    };

function Wa(e, t, r) {
    r === void 0 && (r = " ");
    var n = String(e);
    return t = t >> 0, n.length > t ? String(n) : (t = t - n.length, t > r.length && (r += wt(r, t / r.length)), r.slice(0, t) + String(n))
}
var lw = function(e, t, r) {
        var n = e.split(t);
        return r ? n.slice(0, r).concat([n.slice(r).join(t)]) : n
    },
    qn = function(e, t) {
        var r = e % t;
        return r * t < 0 ? r + t : r
    },
    Su = function(e, t) {
        return {
            div: Math.floor(e / t),
            mod: qn(e, t)
        }
    },
    _r = function(e) {
        return !Gt(e) || e.length === 0
    },
    bn = function(e) {
        return !_r(e)
    },
    Et = function(e, t) {
        return bn(e) && e.indexOf(t) !== -1
    };
var pi = function(e, t, r, n, i, a) {
        return n === void 0 && (n = 0), i === void 0 && (i = 0), a === void 0 && (a = 0), new Date(Date.UTC(e, t - 1, r, n, i, a))
    },
    _I = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    cw = 1e3 * 60 * 60 * 24,
    Eu = 9999,
    dw = pi(1970, 1, 1),
    MI = [6, 0, 1, 2, 3, 4, 5];
var To = function(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    },
    lh = function(e) {
        return e instanceof Date
    },
    Ya = function(e) {
        return lh(e) && !isNaN(e.getTime())
    };
var TI = function(e, t) {
        var r = e.getTime(),
            n = t.getTime(),
            i = r - n;
        return Math.round(i / cw)
    },
    Js = function(e) {
        return TI(e, dw)
    },
    ku = function(e) {
        return new Date(dw.getTime() + e * cw)
    },
    FI = function(e) {
        var t = e.getUTCMonth();
        return t === 1 && To(e.getUTCFullYear()) ? 29 : _I[t]
    },
    Hi = function(e) {
        return MI[e.getUTCDay()]
    },
    uh = function(e, t) {
        var r = pi(e, t + 1, 1);
        return [Hi(r), FI(r)]
    },
    xu = function(e, t) {
        return t = t || e, new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()))
    },
    Cu = function(e) {
        var t = new Date(e.getTime());
        return t
    },
    ch = function(e) {
        for (var t = [], r = 0; r < e.length; r++) t.push(Cu(e[r]));
        return t
    },
    Bi = function(e) {
        e.sort(function(t, r) {
            return t.getTime() - r.getTime()
        })
    },
    Fo = function(e, t) {
        t === void 0 && (t = !0);
        var r = new Date(e);
        return [Wa(r.getUTCFullYear().toString(), 4, "0"), Wa(r.getUTCMonth() + 1, 2, "0"), Wa(r.getUTCDate(), 2, "0"), "T", Wa(r.getUTCHours(), 2, "0"), Wa(r.getUTCMinutes(), 2, "0"), Wa(r.getUTCSeconds(), 2, "0"), t ? "Z" : ""].join("")
    },
    Zs = function(e) {
        var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/,
            r = t.exec(e);
        if (!r) throw new Error("Invalid UNTIL value: ".concat(e));
        return new Date(Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[5], 10) || 0, parseInt(r[6], 10) || 0, parseInt(r[7], 10) || 0))
    },
    uw = function(e, t) {
        var r = e.toLocaleString("sv-SE", {
            timeZone: t
        });
        return r.replace(" ", "T") + "Z"
    },
    fw = function(e, t) {
        var r = Intl.DateTimeFormat().resolvedOptions().timeZone,
            n = new Date(uw(e, r)),
            i = new Date(uw(e, t != null ? t : "UTC")),
            a = i.getTime() - n.getTime();
        return new Date(e.getTime() - a)
    };
var II = function() {
        function e(t, r) {
            this.minDate = null, this.maxDate = null, this._result = [], this.total = 0, this.method = t, this.args = r, t === "between" ? (this.maxDate = r.inc ? r.before : new Date(r.before.getTime() - 1), this.minDate = r.inc ? r.after : new Date(r.after.getTime() + 1)) : t === "before" ? this.maxDate = r.inc ? r.dt : new Date(r.dt.getTime() - 1) : t === "after" && (this.minDate = r.inc ? r.dt : new Date(r.dt.getTime() + 1))
        }
        return e.prototype.accept = function(t) {
            ++this.total;
            var r = this.minDate && t < this.minDate,
                n = this.maxDate && t > this.maxDate;
            if (this.method === "between") {
                if (r) return !0;
                if (n) return !1
            } else if (this.method === "before") {
                if (n) return !1
            } else if (this.method === "after") return r ? !0 : (this.add(t), !1);
            return this.add(t)
        }, e.prototype.add = function(t) {
            return this._result.push(t), !0
        }, e.prototype.getValue = function() {
            var t = this._result;
            switch (this.method) {
                case "all":
                case "between":
                    return t;
                case "before":
                case "after":
                default:
                    return t.length ? t[t.length - 1] : null
            }
        }, e.prototype.clone = function() {
            return new e(this.method, this.args)
        }, e
    }(),
    Vi = II;
var dh = function(e, t) {
    return dh = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
    }, dh(e, t)
};

function Io(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    dh(e, t);

    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
var Un = function() {
    return Un = Object.assign || function(t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
        }
        return t
    }, Un.apply(this, arguments)
};

function Ao(e, t, r, n) {
    function i(a) {
        return a instanceof r ? a : new r(function(o) {
            o(a)
        })
    }
    return new(r || (r = Promise))(function(a, o) {
        function s(c) {
            try {
                l(n.next(c))
            } catch (d) {
                o(d)
            }
        }

        function u(c) {
            try {
                l(n.throw(c))
            } catch (d) {
                o(d)
            }
        }

        function l(c) {
            c.done ? a(c.value) : i(c.value).then(s, u)
        }
        l((n = n.apply(e, t || [])).next())
    })
}

function Oo(e, t) {
    var r = {
            label: 0,
            sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        },
        n, i, a, o;
    return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function s(l) {
        return function(c) {
            return u([l, c])
        }
    }

    function u(l) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; o && (o = 0, l[0] && (r = 0)), r;) try {
            if (n = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
            switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
                case 0:
                case 1:
                    a = l;
                    break;
                case 4:
                    return r.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    r.label++, i = l[1], l = [0];
                    continue;
                case 7:
                    l = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
                        r.label = l[1];
                        break
                    }
                    if (l[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = l;
                        break
                    }
                    if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(l);
                        break
                    }
                    a[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            l = t.call(e, r)
        } catch (c) {
            l = [6, c], i = 0
        } finally {
            n = a = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}

function AI(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) return e;
    var n = r.call(e),
        i, a = [],
        o;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(i = n.next()).done;) a.push(i.value)
    } catch (s) {
        o = {
            error: s
        }
    } finally {
        try {
            i && !i.done && (r = n.return) && r.call(n)
        } finally {
            if (o) throw o.error
        }
    }
    return a
}

function hw() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(AI(arguments[t]));
    return e
}

function ke(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = t.length, a; n < i; n++)(a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var OI = function(e) {
        Io(t, e);

        function t(r, n, i) {
            var a = e.call(this, r, n) || this;
            return a.iterator = i, a
        }
        return t.prototype.add = function(r) {
            return this.iterator(r, this._result.length) ? (this._result.push(r), !0) : !1
        }, t
    }(Vi),
    fh = OI;
var LI = {
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        tokens: {
            SKIP: /^[ \r\n\t]+|^\.$/,
            number: /^[1-9][0-9]*/,
            numberAsText: /^(one|two|three)/i,
            every: /^every/i,
            "day(s)": /^days?/i,
            "weekday(s)": /^weekdays?/i,
            "week(s)": /^weeks?/i,
            "hour(s)": /^hours?/i,
            "minute(s)": /^minutes?/i,
            "month(s)": /^months?/i,
            "year(s)": /^years?/i,
            on: /^(on|in)/i,
            at: /^(at)/i,
            the: /^the/i,
            first: /^first/i,
            second: /^second/i,
            third: /^third/i,
            nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
            last: /^last/i,
            for: /^for/i,
            "time(s)": /^times?/i,
            until: /^(un)?til/i,
            monday: /^mo(n(day)?)?/i,
            tuesday: /^tu(e(s(day)?)?)?/i,
            wednesday: /^we(d(n(esday)?)?)?/i,
            thursday: /^th(u(r(sday)?)?)?/i,
            friday: /^fr(i(day)?)?/i,
            saturday: /^sa(t(urday)?)?/i,
            sunday: /^su(n(day)?)?/i,
            january: /^jan(uary)?/i,
            february: /^feb(ruary)?/i,
            march: /^mar(ch)?/i,
            april: /^apr(il)?/i,
            may: /^may/i,
            june: /^june?/i,
            july: /^july?/i,
            august: /^aug(ust)?/i,
            september: /^sep(t(ember)?)?/i,
            october: /^oct(ober)?/i,
            november: /^nov(ember)?/i,
            december: /^dec(ember)?/i,
            comma: /^(,\s*|(and|or)\s*)+/i
        }
    },
    za = LI;
var mw = function(e, t) {
        return e.indexOf(t) !== -1
    },
    PI = function(e) {
        return e.toString()
    },
    NI = function(e, t, r) {
        return "".concat(t, " ").concat(r, ", ").concat(e)
    },
    RI = function() {
        function e(t, r, n, i) {
            if (r === void 0 && (r = PI), n === void 0 && (n = za), i === void 0 && (i = NI), this.text = [], this.language = n || za, this.gettext = r, this.dateFormatter = i, this.rrule = t, this.options = t.options, this.origOptions = t.origOptions, this.origOptions.bymonthday) {
                var a = [].concat(this.options.bymonthday),
                    o = [].concat(this.options.bynmonthday);
                a.sort(function(c, d) {
                    return c - d
                }), o.sort(function(c, d) {
                    return d - c
                }), this.bymonthday = a.concat(o), this.bymonthday.length || (this.bymonthday = null)
            }
            if (Gt(this.origOptions.byweekday)) {
                var s = $n(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
                    u = String(s);
                this.byweekday = {
                    allWeeks: s.filter(function(c) {
                        return !c.n
                    }),
                    someWeeks: s.filter(function(c) {
                        return !!c.n
                    }),
                    isWeekdays: u.indexOf("MO") !== -1 && u.indexOf("TU") !== -1 && u.indexOf("WE") !== -1 && u.indexOf("TH") !== -1 && u.indexOf("FR") !== -1 && u.indexOf("SA") === -1 && u.indexOf("SU") === -1,
                    isEveryDay: u.indexOf("MO") !== -1 && u.indexOf("TU") !== -1 && u.indexOf("WE") !== -1 && u.indexOf("TH") !== -1 && u.indexOf("FR") !== -1 && u.indexOf("SA") !== -1 && u.indexOf("SU") !== -1
                };
                var l = function(c, d) {
                    return c.weekday - d.weekday
                };
                this.byweekday.allWeeks.sort(l), this.byweekday.someWeeks.sort(l), this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null), this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null)
            } else this.byweekday = null
        }
        return e.isFullyConvertible = function(t) {
            var r = !0;
            if (!(t.options.freq in e.IMPLEMENTED) || t.origOptions.until && t.origOptions.count) return !1;
            for (var n in t.origOptions) {
                if (mw(["dtstart", "tzid", "wkst", "freq"], n)) return !0;
                if (!mw(e.IMPLEMENTED[t.options.freq], n)) return !1
            }
            return r
        }, e.prototype.isFullyConvertible = function() {
            return e.isFullyConvertible(this.rrule)
        }, e.prototype.toString = function() {
            var t = this.gettext;
            if (!(this.options.freq in e.IMPLEMENTED)) return t("RRule error: Unable to fully convert this rrule to text");
            if (this.text = [t("every")], this[Oe.FREQUENCIES[this.options.freq]](), this.options.until) {
                this.add(t("until"));
                var r = this.options.until;
                this.add(this.dateFormatter(r.getUTCFullYear(), this.language.monthNames[r.getUTCMonth()], r.getUTCDate()))
            } else this.options.count && this.add(t("for")).add(this.options.count.toString()).add(this.plural(this.options.count) ? t("times") : t("time"));
            return this.isFullyConvertible() || this.add(t("(~ approximate)")), this.text.join("")
        }, e.prototype.HOURLY = function() {
            var t = this.gettext;
            this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? t("hours") : t("hour"))
        }, e.prototype.MINUTELY = function() {
            var t = this.gettext;
            this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? t("minutes") : t("minute"))
        }, e.prototype.DAILY = function() {
            var t = this.gettext;
            this.options.interval !== 1 && this.add(this.options.interval.toString()), this.byweekday && this.byweekday.isWeekdays ? this.add(this.plural(this.options.interval) ? t("weekdays") : t("weekday")) : this.add(this.plural(this.options.interval) ? t("days") : t("day")), this.origOptions.bymonth && (this.add(t("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday ? this._byweekday() : this.origOptions.byhour && this._byhour()
        }, e.prototype.WEEKLY = function() {
            var t = this.gettext;
            this.options.interval !== 1 && this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? t("weeks") : t("week")), this.byweekday && this.byweekday.isWeekdays ? this.options.interval === 1 ? this.add(this.plural(this.options.interval) ? t("weekdays") : t("weekday")) : this.add(t("on")).add(t("weekdays")) : this.byweekday && this.byweekday.isEveryDay ? this.add(this.plural(this.options.interval) ? t("days") : t("day")) : (this.options.interval === 1 && this.add(t("week")), this.origOptions.bymonth && (this.add(t("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.origOptions.byhour && this._byhour())
        }, e.prototype.MONTHLY = function() {
            var t = this.gettext;
            this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()).add(t("months")), this.plural(this.options.interval) && this.add(t("in"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? t("months") : t("month"))), this.bymonthday ? this._bymonthday() : this.byweekday && this.byweekday.isWeekdays ? this.add(t("on")).add(t("weekdays")) : this.byweekday && this._byweekday()
        }, e.prototype.YEARLY = function() {
            var t = this.gettext;
            this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()), this.add(t("years"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? t("years") : t("year"))), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.options.byyearday && this.add(t("on the")).add(this.list(this.options.byyearday, this.nth, t("and"))).add(t("day")), this.options.byweekno && this.add(t("in")).add(this.plural(this.options.byweekno.length) ? t("weeks") : t("week")).add(this.list(this.options.byweekno, void 0, t("and")))
        }, e.prototype._bymonthday = function() {
            var t = this.gettext;
            this.byweekday && this.byweekday.allWeeks ? this.add(t("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, t("or"))).add(t("the")).add(this.list(this.bymonthday, this.nth, t("or"))) : this.add(t("on the")).add(this.list(this.bymonthday, this.nth, t("and")))
        }, e.prototype._byweekday = function() {
            var t = this.gettext;
            this.byweekday.allWeeks && !this.byweekday.isWeekdays && this.add(t("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)), this.byweekday.someWeeks && (this.byweekday.allWeeks && this.add(t("and")), this.add(t("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, t("and"))))
        }, e.prototype._byhour = function() {
            var t = this.gettext;
            this.add(t("at")).add(this.list(this.origOptions.byhour, void 0, t("and")))
        }, e.prototype._bymonth = function() {
            this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")))
        }, e.prototype.nth = function(t) {
            t = parseInt(t.toString(), 10);
            var r, n = this.gettext;
            if (t === -1) return n("last");
            var i = Math.abs(t);
            switch (i) {
                case 1:
                case 21:
                case 31:
                    r = i + n("st");
                    break;
                case 2:
                case 22:
                    r = i + n("nd");
                    break;
                case 3:
                case 23:
                    r = i + n("rd");
                    break;
                default:
                    r = i + n("th")
            }
            return t < 0 ? r + " " + n("last") : r
        }, e.prototype.monthtext = function(t) {
            return this.language.monthNames[t - 1]
        }, e.prototype.weekdaytext = function(t) {
            var r = Cr(t) ? (t + 1) % 7 : t.getJsWeekday();
            return (t.n ? this.nth(t.n) + " " : "") + this.language.dayNames[r]
        }, e.prototype.plural = function(t) {
            return t % 100 !== 1
        }, e.prototype.add = function(t) {
            return this.text.push(" "), this.text.push(t), this
        }, e.prototype.list = function(t, r, n, i) {
            var a = this;
            i === void 0 && (i = ","), $n(t) || (t = [t]);
            var o = function(u, l, c) {
                for (var d = "", m = 0; m < u.length; m++) m !== 0 && (m === u.length - 1 ? d += " " + c + " " : d += l + " "), d += u[m];
                return d
            };
            r = r || function(u) {
                return u.toString()
            };
            var s = function(u) {
                return r && r.call(a, u)
            };
            return n ? o(t.map(s), i, n) : t.map(s).join(i + " ")
        }, e
    }(),
    gi = RI;
var HI = function() {
    function e(t) {
        this.done = !0, this.rules = t
    }
    return e.prototype.start = function(t) {
        return this.text = t, this.done = !1, this.nextSymbol()
    }, e.prototype.isDone = function() {
        return this.done && this.symbol === null
    }, e.prototype.nextSymbol = function() {
        var t, r;
        this.symbol = null, this.value = null;
        do {
            if (this.done) return !1;
            var n = void 0;
            t = null;
            for (var i in this.rules) {
                n = this.rules[i];
                var a = n.exec(this.text);
                a && (t === null || a[0].length > t[0].length) && (t = a, r = i)
            }
            if (t != null && (this.text = this.text.substr(t[0].length), this.text === "" && (this.done = !0)), t == null) {
                this.done = !0, this.symbol = null, this.value = null;
                return
            }
        } while (r === "SKIP");
        return this.symbol = r, this.value = t, !0
    }, e.prototype.accept = function(t) {
        if (this.symbol === t) {
            if (this.value) {
                var r = this.value;
                return this.nextSymbol(), r
            }
            return this.nextSymbol(), !0
        }
        return !1
    }, e.prototype.acceptNumber = function() {
        return this.accept("number")
    }, e.prototype.expect = function(t) {
        if (this.accept(t)) return !0;
        throw new Error("expected " + t + " but found " + this.symbol)
    }, e
}();

function Qs(e, t) {
    t === void 0 && (t = za);
    var r = {},
        n = new HI(t.tokens);
    if (!n.start(e)) return null;
    return i(), r;

    function i() {
        n.expect("every");
        var m = n.acceptNumber();
        if (m && (r.interval = parseInt(m[0], 10)), n.isDone()) throw new Error("Unexpected end");
        switch (n.symbol) {
            case "day(s)":
                r.freq = Oe.DAILY, n.nextSymbol() && (o(), d());
                break;
            case "weekday(s)":
                r.freq = Oe.WEEKLY, r.byweekday = [Oe.MO, Oe.TU, Oe.WE, Oe.TH, Oe.FR], n.nextSymbol(), o(), d();
                break;
            case "week(s)":
                r.freq = Oe.WEEKLY, n.nextSymbol() && (a(), o(), d());
                break;
            case "hour(s)":
                r.freq = Oe.HOURLY, n.nextSymbol() && (a(), d());
                break;
            case "minute(s)":
                r.freq = Oe.MINUTELY, n.nextSymbol() && (a(), d());
                break;
            case "month(s)":
                r.freq = Oe.MONTHLY, n.nextSymbol() && (a(), d());
                break;
            case "year(s)":
                r.freq = Oe.YEARLY, n.nextSymbol() && (a(), d());
                break;
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            case "saturday":
            case "sunday":
                r.freq = Oe.WEEKLY;
                var h = n.symbol.substr(0, 2).toUpperCase();
                if (r.byweekday = [Oe[h]], !n.nextSymbol()) return;
                for (; n.accept("comma");) {
                    if (n.isDone()) throw new Error("Unexpected end");
                    var g = u();
                    if (!g) throw new Error("Unexpected symbol " + n.symbol + ", expected weekday");
                    r.byweekday.push(Oe[g]), n.nextSymbol()
                }
                o(), c(), d();
                break;
            case "january":
            case "february":
            case "march":
            case "april":
            case "may":
            case "june":
            case "july":
            case "august":
            case "september":
            case "october":
            case "november":
            case "december":
                if (r.freq = Oe.YEARLY, r.bymonth = [s()], !n.nextSymbol()) return;
                for (; n.accept("comma");) {
                    if (n.isDone()) throw new Error("Unexpected end");
                    var y = s();
                    if (!y) throw new Error("Unexpected symbol " + n.symbol + ", expected month");
                    r.bymonth.push(y), n.nextSymbol()
                }
                a(), d();
                break;
            default:
                throw new Error("Unknown symbol")
        }
    }

    function a() {
        var m = n.accept("on"),
            h = n.accept("the");
        if (m || h)
            do {
                var g = l(),
                    y = u(),
                    v = s();
                if (g) y ? (n.nextSymbol(), r.byweekday || (r.byweekday = []), r.byweekday.push(Oe[y].nth(g))) : (r.bymonthday || (r.bymonthday = []), r.bymonthday.push(g), n.accept("day(s)"));
                else if (y) n.nextSymbol(), r.byweekday || (r.byweekday = []), r.byweekday.push(Oe[y]);
                else if (n.symbol === "weekday(s)") n.nextSymbol(), r.byweekday || (r.byweekday = [Oe.MO, Oe.TU, Oe.WE, Oe.TH, Oe.FR]);
                else if (n.symbol === "week(s)") {
                    n.nextSymbol();
                    var D = n.acceptNumber();
                    if (!D) throw new Error("Unexpected symbol " + n.symbol + ", expected week number");
                    for (r.byweekno = [parseInt(D[0], 10)]; n.accept("comma");) {
                        if (D = n.acceptNumber(), !D) throw new Error("Unexpected symbol " + n.symbol + "; expected monthday");
                        r.byweekno.push(parseInt(D[0], 10))
                    }
                } else if (v) n.nextSymbol(), r.bymonth || (r.bymonth = []), r.bymonth.push(v);
                else return
            } while (n.accept("comma") || n.accept("the") || n.accept("on"))
    }

    function o() {
        var m = n.accept("at");
        if (m)
            do {
                var h = n.acceptNumber();
                if (!h) throw new Error("Unexpected symbol " + n.symbol + ", expected hour");
                for (r.byhour = [parseInt(h[0], 10)]; n.accept("comma");) {
                    if (h = n.acceptNumber(), !h) throw new Error("Unexpected symbol " + n.symbol + "; expected hour");
                    r.byhour.push(parseInt(h[0], 10))
                }
            } while (n.accept("comma") || n.accept("at"))
    }

    function s() {
        switch (n.symbol) {
            case "january":
                return 1;
            case "february":
                return 2;
            case "march":
                return 3;
            case "april":
                return 4;
            case "may":
                return 5;
            case "june":
                return 6;
            case "july":
                return 7;
            case "august":
                return 8;
            case "september":
                return 9;
            case "october":
                return 10;
            case "november":
                return 11;
            case "december":
                return 12;
            default:
                return !1
        }
    }

    function u() {
        switch (n.symbol) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
            case "saturday":
            case "sunday":
                return n.symbol.substr(0, 2).toUpperCase();
            default:
                return !1
        }
    }

    function l() {
        switch (n.symbol) {
            case "last":
                return n.nextSymbol(), -1;
            case "first":
                return n.nextSymbol(), 1;
            case "second":
                return n.nextSymbol(), n.accept("last") ? -2 : 2;
            case "third":
                return n.nextSymbol(), n.accept("last") ? -3 : 3;
            case "nth":
                var m = parseInt(n.value[1], 10);
                if (m < -366 || m > 366) throw new Error("Nth out of range: " + m);
                return n.nextSymbol(), n.accept("last") ? -m : m;
            default:
                return !1
        }
    }

    function c() {
        n.accept("on"), n.accept("the");
        var m = l();
        if (m)
            for (r.bymonthday = [m], n.nextSymbol(); n.accept("comma");) {
                if (m = l(), !m) throw new Error("Unexpected symbol " + n.symbol + "; expected monthday");
                r.bymonthday.push(m), n.nextSymbol()
            }
    }

    function d() {
        if (n.symbol === "until") {
            var m = Date.parse(n.text);
            if (!m) throw new Error("Cannot parse until date:" + n.text);
            r.until = new Date(m)
        } else n.accept("for") && (r.count = parseInt(n.value[0], 10), n.expect("number"))
    }
}
var pt;
(function(e) {
    e[e.YEARLY = 0] = "YEARLY", e[e.MONTHLY = 1] = "MONTHLY", e[e.WEEKLY = 2] = "WEEKLY", e[e.DAILY = 3] = "DAILY", e[e.HOURLY = 4] = "HOURLY", e[e.MINUTELY = 5] = "MINUTELY", e[e.SECONDLY = 6] = "SECONDLY"
})(pt || (pt = {}));

function Xs(e) {
    return e < pt.HOURLY
}
var pw = function(e, t) {
        return t === void 0 && (t = za), new Oe(Qs(e, t) || void 0)
    },
    Lo = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
gi.IMPLEMENTED = [];
gi.IMPLEMENTED[pt.HOURLY] = Lo;
gi.IMPLEMENTED[pt.MINUTELY] = Lo;
gi.IMPLEMENTED[pt.DAILY] = ["byhour"].concat(Lo);
gi.IMPLEMENTED[pt.WEEKLY] = Lo;
gi.IMPLEMENTED[pt.MONTHLY] = Lo;
gi.IMPLEMENTED[pt.YEARLY] = ["byweekno", "byyearday"].concat(Lo);
var gw = function(e, t, r, n) {
        return new gi(e, t, r, n).toString()
    },
    yw = gi.isFullyConvertible;
var Po = function() {
    function e(t, r, n, i) {
        this.hour = t, this.minute = r, this.second = n, this.millisecond = i || 0
    }
    return e.prototype.getHours = function() {
        return this.hour
    }, e.prototype.getMinutes = function() {
        return this.minute
    }, e.prototype.getSeconds = function() {
        return this.second
    }, e.prototype.getMilliseconds = function() {
        return this.millisecond
    }, e.prototype.getTime = function() {
        return (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1e3 + this.millisecond
    }, e
}();
var vw = function(e) {
    Io(t, e);

    function t(r, n, i, a, o, s, u) {
        var l = e.call(this, a, o, s, u) || this;
        return l.year = r, l.month = n, l.day = i, l
    }
    return t.fromDate = function(r) {
        return new this(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.valueOf() % 1e3)
    }, t.prototype.getWeekday = function() {
        return Hi(new Date(this.getTime()))
    }, t.prototype.getTime = function() {
        return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime()
    }, t.prototype.getDay = function() {
        return this.day
    }, t.prototype.getMonth = function() {
        return this.month
    }, t.prototype.getYear = function() {
        return this.year
    }, t.prototype.addYears = function(r) {
        this.year += r
    }, t.prototype.addMonths = function(r) {
        if (this.month += r, this.month > 12) {
            var n = Math.floor(this.month / 12),
                i = qn(this.month, 12);
            this.month = i, this.year += n, this.month === 0 && (this.month = 12, --this.year)
        }
    }, t.prototype.addWeekly = function(r, n) {
        n > this.getWeekday() ? this.day += -(this.getWeekday() + 1 + (6 - n)) + r * 7 : this.day += -(this.getWeekday() - n) + r * 7, this.fixDay()
    }, t.prototype.addDaily = function(r) {
        this.day += r, this.fixDay()
    }, t.prototype.addHours = function(r, n, i) {
        for (n && (this.hour += Math.floor((23 - this.hour) / r) * r);;) {
            this.hour += r;
            var a = Su(this.hour, 24),
                o = a.div,
                s = a.mod;
            if (o && (this.hour = s, this.addDaily(o)), _r(i) || Et(i, this.hour)) break
        }
    }, t.prototype.addMinutes = function(r, n, i, a) {
        for (n && (this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / r) * r);;) {
            this.minute += r;
            var o = Su(this.minute, 60),
                s = o.div,
                u = o.mod;
            if (s && (this.minute = u, this.addHours(s, !1, i)), (_r(i) || Et(i, this.hour)) && (_r(a) || Et(a, this.minute))) break
        }
    }, t.prototype.addSeconds = function(r, n, i, a, o) {
        for (n && (this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / r) * r);;) {
            this.second += r;
            var s = Su(this.second, 60),
                u = s.div,
                l = s.mod;
            if (u && (this.second = l, this.addMinutes(u, !1, i, a)), (_r(i) || Et(i, this.hour)) && (_r(a) || Et(a, this.minute)) && (_r(o) || Et(o, this.second))) break
        }
    }, t.prototype.fixDay = function() {
        if (!(this.day <= 28)) {
            var r = uh(this.year, this.month - 1)[1];
            if (!(this.day <= r))
                for (; this.day > r;) {
                    if (this.day -= r, ++this.month, this.month === 13 && (this.month = 1, ++this.year, this.year > Eu)) return;
                    r = uh(this.year, this.month - 1)[1]
                }
        }
    }, t.prototype.add = function(r, n) {
        var i = r.freq,
            a = r.interval,
            o = r.wkst,
            s = r.byhour,
            u = r.byminute,
            l = r.bysecond;
        switch (i) {
            case pt.YEARLY:
                return this.addYears(a);
            case pt.MONTHLY:
                return this.addMonths(a);
            case pt.WEEKLY:
                return this.addWeekly(a, o);
            case pt.DAILY:
                return this.addDaily(a);
            case pt.HOURLY:
                return this.addHours(a, n, s);
            case pt.MINUTELY:
                return this.addMinutes(a, n, s, u);
            case pt.SECONDLY:
                return this.addSeconds(a, n, s, u, l)
        }
    }, t
}(Po);

function hh(e) {
    for (var t = [], r = Object.keys(e), n = 0, i = r; n < i.length; n++) {
        var a = i[n];
        Et(Dw, a) || t.push(a), lh(e[a]) && !Ya(e[a]) && t.push(a)
    }
    if (t.length) throw new Error("Invalid options: " + t.join(", "));
    return Un({}, e)
}

function ww(e) {
    var t = Un(Un({}, el), hh(e));
    if (Gt(t.byeaster) && (t.freq = Oe.YEARLY), !(Gt(t.freq) && Oe.FREQUENCIES[t.freq])) throw new Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
    if (t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))), Gt(t.wkst) ? Cr(t.wkst) || (t.wkst = t.wkst.weekday) : t.wkst = Oe.MO.weekday, Gt(t.bysetpos)) {
        Cr(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
        for (var r = 0; r < t.bysetpos.length; r++) {
            var n = t.bysetpos[r];
            if (n === 0 || !(n >= -366 && n <= 366)) throw new Error("bysetpos must be between 1 and 366, or between -366 and -1")
        }
    }
    if (!(t.byweekno || bn(t.byweekno) || bn(t.byyearday) || t.bymonthday || bn(t.bymonthday) || Gt(t.byweekday) || Gt(t.byeaster))) switch (t.freq) {
        case Oe.YEARLY:
            t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1), t.bymonthday = t.dtstart.getUTCDate();
            break;
        case Oe.MONTHLY:
            t.bymonthday = t.dtstart.getUTCDate();
            break;
        case Oe.WEEKLY:
            t.byweekday = [Hi(t.dtstart)];
            break
    }
    if (Gt(t.bymonth) && !$n(t.bymonth) && (t.bymonth = [t.bymonth]), Gt(t.byyearday) && !$n(t.byyearday) && Cr(t.byyearday) && (t.byyearday = [t.byyearday]), !Gt(t.bymonthday)) t.bymonthday = [], t.bynmonthday = [];
    else if ($n(t.bymonthday)) {
        for (var i = [], a = [], r = 0; r < t.bymonthday.length; r++) {
            var n = t.bymonthday[r];
            n > 0 ? i.push(n) : n < 0 && a.push(n)
        }
        t.bymonthday = i, t.bynmonthday = a
    } else t.bymonthday < 0 ? (t.bynmonthday = [t.bymonthday], t.bymonthday = []) : (t.bynmonthday = [], t.bymonthday = [t.bymonthday]);
    if (Gt(t.byweekno) && !$n(t.byweekno) && (t.byweekno = [t.byweekno]), !Gt(t.byweekday)) t.bynweekday = null;
    else if (Cr(t.byweekday)) t.byweekday = [t.byweekday], t.bynweekday = null;
    else if (sh(t.byweekday)) t.byweekday = [Mn.fromStr(t.byweekday).weekday], t.bynweekday = null;
    else if (t.byweekday instanceof Mn) !t.byweekday.n || t.freq > Oe.MONTHLY ? (t.byweekday = [t.byweekday.weekday], t.bynweekday = null) : (t.bynweekday = [
        [t.byweekday.weekday, t.byweekday.n]
    ], t.byweekday = null);
    else {
        for (var o = [], s = [], r = 0; r < t.byweekday.length; r++) {
            var u = t.byweekday[r];
            if (Cr(u)) {
                o.push(u);
                continue
            } else if (sh(u)) {
                o.push(Mn.fromStr(u).weekday);
                continue
            }!u.n || t.freq > Oe.MONTHLY ? o.push(u.weekday) : s.push([u.weekday, u.n])
        }
        t.byweekday = bn(o) ? o : null, t.bynweekday = bn(s) ? s : null
    }
    return Gt(t.byhour) ? Cr(t.byhour) && (t.byhour = [t.byhour]) : t.byhour = t.freq < Oe.HOURLY ? [t.dtstart.getUTCHours()] : null, Gt(t.byminute) ? Cr(t.byminute) && (t.byminute = [t.byminute]) : t.byminute = t.freq < Oe.MINUTELY ? [t.dtstart.getUTCMinutes()] : null, Gt(t.bysecond) ? Cr(t.bysecond) && (t.bysecond = [t.bysecond]) : t.bysecond = t.freq < Oe.SECONDLY ? [t.dtstart.getUTCSeconds()] : null, {
        parsedOptions: t
    }
}

function bw(e) {
    var t = e.dtstart.getTime() % 1e3;
    if (!Xs(e.freq)) return [];
    var r = [];
    return e.byhour.forEach(function(n) {
        e.byminute.forEach(function(i) {
            e.bysecond.forEach(function(a) {
                r.push(new Po(n, i, a, t))
            })
        })
    }), r
}

function nl(e) {
    var t = e.split(`
`).map(BI).filter(function(r) {
        return r !== null
    });
    return Un(Un({}, t[0]), t[1])
}

function tl(e) {
    var t = {},
        r = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!r) return t;
    var n = r[1],
        i = r[2];
    return n && (t.tzid = n), t.dtstart = Zs(i), t
}

function BI(e) {
    if (e = e.replace(/^\s+|\s+$/, ""), !e.length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return Sw(e);
    var r = t[1];
    switch (r.toUpperCase()) {
        case "RRULE":
        case "EXRULE":
            return Sw(e);
        case "DTSTART":
            return tl(e);
        default:
            throw new Error("Unsupported RFC prop ".concat(r, " in ").concat(e))
    }
}

function Sw(e) {
    var t = e.replace(/^RRULE:/i, ""),
        r = tl(t),
        n = e.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
    return n.forEach(function(i) {
        var a = i.split("="),
            o = a[0],
            s = a[1];
        switch (o.toUpperCase()) {
            case "FREQ":
                r.freq = pt[s.toUpperCase()];
                break;
            case "WKST":
                r.wkst = Ur[s.toUpperCase()];
                break;
            case "COUNT":
            case "INTERVAL":
            case "BYSETPOS":
            case "BYMONTH":
            case "BYMONTHDAY":
            case "BYYEARDAY":
            case "BYWEEKNO":
            case "BYHOUR":
            case "BYMINUTE":
            case "BYSECOND":
                var u = VI(s),
                    l = o.toLowerCase();
                r[l] = u;
                break;
            case "BYWEEKDAY":
            case "BYDAY":
                r.byweekday = $I(s);
                break;
            case "DTSTART":
            case "TZID":
                var c = tl(e);
                r.tzid = c.tzid, r.dtstart = c.dtstart;
                break;
            case "UNTIL":
                r.until = Zs(s);
                break;
            case "BYEASTER":
                r.byeaster = Number(s);
                break;
            default:
                throw new Error("Unknown RRULE property '" + o + "'")
        }
    }), r
}

function VI(e) {
    if (e.indexOf(",") !== -1) {
        var t = e.split(",");
        return t.map(Ew)
    }
    return Ew(e)
}

function Ew(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e
}

function $I(e) {
    var t = e.split(",");
    return t.map(function(r) {
        if (r.length === 2) return Ur[r];
        var n = r.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
        if (!n || n.length < 3) throw new SyntaxError("Invalid weekday string: ".concat(r));
        var i = Number(n[1]),
            a = n[2],
            o = Ur[a].weekday;
        return new Mn(o, i)
    })
}
var Ka = function() {
    function e(t, r) {
        if (isNaN(t.getTime())) throw new RangeError("Invalid date passed to DateWithZone");
        this.date = t, this.tzid = r
    }
    return Object.defineProperty(e.prototype, "isUTC", {
        get: function() {
            return !this.tzid || this.tzid.toUpperCase() === "UTC"
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.toString = function() {
        var t = Fo(this.date.getTime(), this.isUTC);
        return this.isUTC ? ":".concat(t) : ";TZID=".concat(this.tzid, ":").concat(t)
    }, e.prototype.getTime = function() {
        return this.date.getTime()
    }, e.prototype.rezonedDate = function() {
        return this.isUTC ? this.date : fw(this.date, this.tzid)
    }, e
}();

function rl(e) {
    for (var t = [], r = "", n = Object.keys(e), i = Object.keys(el), a = 0; a < n.length; a++)
        if (n[a] !== "tzid" && Et(i, n[a])) {
            var o = n[a].toUpperCase(),
                s = e[n[a]],
                u = "";
            if (!(!Gt(s) || $n(s) && !s.length)) {
                switch (o) {
                    case "FREQ":
                        u = Oe.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        Cr(s) ? u = new Mn(s).toString() : u = s.toString();
                        break;
                    case "BYWEEKDAY":
                        o = "BYDAY", u = sw(s).map(function(h) {
                            return h instanceof Mn ? h : $n(h) ? new Mn(h[0], h[1]) : new Mn(h)
                        }).toString();
                        break;
                    case "DTSTART":
                        r = UI(s, e.tzid);
                        break;
                    case "UNTIL":
                        u = Fo(s, !e.tzid);
                        break;
                    default:
                        if ($n(s)) {
                            for (var l = [], c = 0; c < s.length; c++) l[c] = String(s[c]);
                            u = l.toString()
                        } else u = String(s)
                }
                u && t.push([o, u])
            }
        } var d = t.map(function(h) {
            var g = h[0],
                y = h[1];
            return "".concat(g, "=").concat(y.toString())
        }).join(";"),
        m = "";
    return d !== "" && (m = "RRULE:".concat(d)), [r, m].filter(function(h) {
        return !!h
    }).join(`
`)
}

function UI(e, t) {
    return e ? "DTSTART" + new Ka(new Date(e), t).toString() : ""
}

function WI(e, t) {
    return Array.isArray(e) ? !Array.isArray(t) || e.length !== t.length ? !1 : e.every(function(r, n) {
        return r.getTime() === t[n].getTime()
    }) : e instanceof Date ? t instanceof Date && e.getTime() === t.getTime() : e === t
}
var kw = function() {
    function e() {
        this.all = !1, this.before = [], this.after = [], this.between = []
    }
    return e.prototype._cacheAdd = function(t, r, n) {
        r && (r = r instanceof Date ? Cu(r) : ch(r)), t === "all" ? this.all = r : (n._value = r, this[t].push(n))
    }, e.prototype._cacheGet = function(t, r) {
        var n = !1,
            i = r ? Object.keys(r) : [],
            a = function(c) {
                for (var d = 0; d < i.length; d++) {
                    var m = i[d];
                    if (!WI(r[m], c[m])) return !0
                }
                return !1
            },
            o = this[t];
        if (t === "all") n = this.all;
        else if ($n(o))
            for (var s = 0; s < o.length; s++) {
                var u = o[s];
                if (!(i.length && a(u))) {
                    n = u._value;
                    break
                }
            }
        if (!n && this.all) {
            for (var l = new Vi(t, r), s = 0; s < this.all.length && l.accept(this.all[s]); s++);
            n = l.getValue(), this._cacheAdd(t, n, r)
        }
        return $n(n) ? ch(n) : n instanceof Date ? Cu(n) : n
    }, e
}();
var xw = ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke([], wt(1, 31), !0), wt(2, 28), !0), wt(3, 31), !0), wt(4, 30), !0), wt(5, 31), !0), wt(6, 30), !0), wt(7, 31), !0), wt(8, 31), !0), wt(9, 30), !0), wt(10, 31), !0), wt(11, 30), !0), wt(12, 31), !0), wt(1, 7), !0),
    Cw = ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke([], wt(1, 31), !0), wt(2, 29), !0), wt(3, 31), !0), wt(4, 30), !0), wt(5, 31), !0), wt(6, 30), !0), wt(7, 31), !0), wt(8, 31), !0), wt(9, 30), !0), wt(10, 31), !0), wt(11, 30), !0), wt(12, 31), !0), wt(1, 7), !0),
    YI = $r(1, 29),
    zI = $r(1, 30),
    ua = $r(1, 31),
    Gn = $r(1, 32),
    _w = ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke([], Gn, !0), zI, !0), Gn, !0), ua, !0), Gn, !0), ua, !0), Gn, !0), Gn, !0), ua, !0), Gn, !0), ua, !0), Gn, !0), Gn.slice(0, 7), !0),
    Mw = ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke([], Gn, !0), YI, !0), Gn, !0), ua, !0), Gn, !0), ua, !0), Gn, !0), Gn, !0), ua, !0), Gn, !0), ua, !0), Gn, !0), Gn.slice(0, 7), !0),
    KI = $r(-28, 0),
    jI = $r(-29, 0),
    ca = $r(-30, 0),
    Jn = $r(-31, 0),
    Tw = ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke([], Jn, !0), jI, !0), Jn, !0), ca, !0), Jn, !0), ca, !0), Jn, !0), Jn, !0), ca, !0), Jn, !0), ca, !0), Jn, !0), Jn.slice(0, 7), !0),
    Fw = ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke([], Jn, !0), KI, !0), Jn, !0), ca, !0), Jn, !0), ca, !0), Jn, !0), Jn, !0), ca, !0), Jn, !0), ca, !0), Jn, !0), Jn.slice(0, 7), !0),
    Iw = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366],
    Aw = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
    mh = function() {
        for (var e = [], t = 0; t < 55; t++) e = e.concat($r(7));
        return e
    }();

function Ow(e, t) {
    var r = pi(e, 1, 1),
        n = To(e) ? 366 : 365,
        i = To(e + 1) ? 366 : 365,
        a = Js(r),
        o = Hi(r),
        s = Un(Un({
            yearlen: n,
            nextyearlen: i,
            yearordinal: a,
            yearweekday: o
        }, qI(e)), {
            wnomask: null
        });
    if (_r(t.byweekno)) return s;
    s.wnomask = wt(0, n + 7);
    var u, l, c = u = qn(7 - o + t.wkst, 7);
    c >= 4 ? (c = 0, l = s.yearlen + qn(o - t.wkst, 7)) : l = n - c;
    for (var d = Math.floor(l / 7), m = qn(l, 7), h = Math.floor(d + m / 4), g = 0; g < t.byweekno.length; g++) {
        var y = t.byweekno[g];
        if (y < 0 && (y += h + 1), y > 0 && y <= h) {
            var v = void 0;
            y > 1 ? (v = c + (y - 1) * 7, c !== u && (v -= 7 - u)) : v = c;
            for (var D = 0; D < 7 && (s.wnomask[v] = 1, v++, s.wdaymask[v] !== t.wkst); D++);
        }
    }
    if (Et(t.byweekno, 1)) {
        var v = c + h * 7;
        if (c !== u && (v -= 7 - u), v < n)
            for (var g = 0; g < 7 && (s.wnomask[v] = 1, v += 1, s.wdaymask[v] !== t.wkst); g++);
    }
    if (c) {
        var I = void 0;
        if (Et(t.byweekno, -1)) I = -1;
        else {
            var C = Hi(pi(e - 1, 1, 1)),
                x = qn(7 - C.valueOf() + t.wkst, 7),
                O = To(e - 1) ? 366 : 365,
                A = void 0;
            x >= 4 ? (x = 0, A = O + qn(C - t.wkst, 7)) : A = n - c, I = Math.floor(52 + qn(A, 7) / 4)
        }
        if (Et(t.byweekno, I))
            for (var v = 0; v < c; v++) s.wnomask[v] = 1
    }
    return s
}

function qI(e) {
    var t = To(e) ? 366 : 365,
        r = pi(e, 1, 1),
        n = Hi(r);
    return t === 365 ? {
        mmask: xw,
        mdaymask: Mw,
        nmdaymask: Fw,
        wdaymask: mh.slice(n),
        mrange: Aw
    } : {
        mmask: Cw,
        mdaymask: _w,
        nmdaymask: Tw,
        wdaymask: mh.slice(n),
        mrange: Iw
    }
}

function Lw(e, t, r, n, i, a) {
    var o = {
            lastyear: e,
            lastmonth: t,
            nwdaymask: []
        },
        s = [];
    if (a.freq === Oe.YEARLY)
        if (_r(a.bymonth)) s = [
            [0, r]
        ];
        else
            for (var u = 0; u < a.bymonth.length; u++) t = a.bymonth[u], s.push(n.slice(t - 1, t + 1));
    else a.freq === Oe.MONTHLY && (s = [n.slice(t - 1, t + 1)]);
    if (_r(s)) return o;
    o.nwdaymask = wt(0, r);
    for (var u = 0; u < s.length; u++)
        for (var l = s[u], c = l[0], d = l[1] - 1, m = 0; m < a.bynweekday.length; m++) {
            var h = void 0,
                g = a.bynweekday[m],
                y = g[0],
                v = g[1];
            v < 0 ? (h = d + (v + 1) * 7, h -= qn(i[h] - y, 7)) : (h = c + (v - 1) * 7, h += qn(7 - i[h] + y, 7)), c <= h && h <= d && (o.nwdaymask[h] = 1)
        }
    return o
}

function Pw(e, t) {
    t === void 0 && (t = 0);
    var r = e % 19,
        n = Math.floor(e / 100),
        i = e % 100,
        a = Math.floor(n / 4),
        o = n % 4,
        s = Math.floor((n + 8) / 25),
        u = Math.floor((n - s + 1) / 3),
        l = Math.floor(19 * r + n - a - u + 15) % 30,
        c = Math.floor(i / 4),
        d = i % 4,
        m = Math.floor(32 + 2 * o + 2 * c - l - d) % 7,
        h = Math.floor((r + 11 * l + 22 * m) / 451),
        g = Math.floor((l + m - 7 * h + 114) / 31),
        y = (l + m - 7 * h + 114) % 31 + 1,
        v = Date.UTC(e, g - 1, y + t),
        D = Date.UTC(e, 0, 1);
    return [Math.ceil((v - D) / (1e3 * 60 * 60 * 24))]
}
var GI = function() {
        function e(t) {
            this.options = t
        }
        return e.prototype.rebuild = function(t, r) {
            var n = this.options;
            if (t !== this.lastyear && (this.yearinfo = Ow(t, n)), bn(n.bynweekday) && (r !== this.lastmonth || t !== this.lastyear)) {
                var i = this.yearinfo,
                    a = i.yearlen,
                    o = i.mrange,
                    s = i.wdaymask;
                this.monthinfo = Lw(t, r, a, o, s, n)
            }
            Gt(n.byeaster) && (this.eastermask = Pw(t, n.byeaster))
        }, Object.defineProperty(e.prototype, "lastyear", {
            get: function() {
                return this.monthinfo ? this.monthinfo.lastyear : null
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "lastmonth", {
            get: function() {
                return this.monthinfo ? this.monthinfo.lastmonth : null
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "yearlen", {
            get: function() {
                return this.yearinfo.yearlen
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "yearordinal", {
            get: function() {
                return this.yearinfo.yearordinal
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "mrange", {
            get: function() {
                return this.yearinfo.mrange
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "wdaymask", {
            get: function() {
                return this.yearinfo.wdaymask
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "mmask", {
            get: function() {
                return this.yearinfo.mmask
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "wnomask", {
            get: function() {
                return this.yearinfo.wnomask
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nwdaymask", {
            get: function() {
                return this.monthinfo ? this.monthinfo.nwdaymask : []
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nextyearlen", {
            get: function() {
                return this.yearinfo.nextyearlen
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "mdaymask", {
            get: function() {
                return this.yearinfo.mdaymask
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nmdaymask", {
            get: function() {
                return this.yearinfo.nmdaymask
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.ydayset = function() {
            return [$r(this.yearlen), 0, this.yearlen]
        }, e.prototype.mdayset = function(t, r) {
            for (var n = this.mrange[r - 1], i = this.mrange[r], a = wt(null, this.yearlen), o = n; o < i; o++) a[o] = o;
            return [a, n, i]
        }, e.prototype.wdayset = function(t, r, n) {
            for (var i = wt(null, this.yearlen + 7), a = Js(pi(t, r, n)) - this.yearordinal, o = a, s = 0; s < 7 && (i[a] = a, ++a, this.wdaymask[a] !== this.options.wkst); s++);
            return [i, o, a]
        }, e.prototype.ddayset = function(t, r, n) {
            var i = wt(null, this.yearlen),
                a = Js(pi(t, r, n)) - this.yearordinal;
            return i[a] = a, [i, a, a + 1]
        }, e.prototype.htimeset = function(t, r, n, i) {
            var a = this,
                o = [];
            return this.options.byminute.forEach(function(s) {
                o = o.concat(a.mtimeset(t, s, n, i))
            }), Bi(o), o
        }, e.prototype.mtimeset = function(t, r, n, i) {
            var a = this.options.bysecond.map(function(o) {
                return new Po(t, r, o, i)
            });
            return Bi(a), a
        }, e.prototype.stimeset = function(t, r, n, i) {
            return [new Po(t, r, n, i)]
        }, e.prototype.getdayset = function(t) {
            switch (t) {
                case pt.YEARLY:
                    return this.ydayset.bind(this);
                case pt.MONTHLY:
                    return this.mdayset.bind(this);
                case pt.WEEKLY:
                    return this.wdayset.bind(this);
                case pt.DAILY:
                    return this.ddayset.bind(this);
                default:
                    return this.ddayset.bind(this)
            }
        }, e.prototype.gettimeset = function(t) {
            switch (t) {
                case pt.HOURLY:
                    return this.htimeset.bind(this);
                case pt.MINUTELY:
                    return this.mtimeset.bind(this);
                case pt.SECONDLY:
                    return this.stimeset.bind(this)
            }
        }, e
    }(),
    Nw = GI;

function Rw(e, t, r, n, i, a) {
    for (var o = [], s = 0; s < e.length; s++) {
        var u = void 0,
            l = void 0,
            c = e[s];
        c < 0 ? (u = Math.floor(c / t.length), l = qn(c, t.length)) : (u = Math.floor((c - 1) / t.length), l = qn(c - 1, t.length));
        for (var d = [], m = r; m < n; m++) {
            var h = a[m];
            Gt(h) && d.push(h)
        }
        var g = void 0;
        u < 0 ? g = d.slice(u)[0] : g = d[u];
        var y = t[l],
            v = ku(i.yearordinal + g),
            D = xu(v, y);
        Et(o, D) || o.push(D)
    }
    return Bi(o), o
}

function _u(e, t) {
    var r = t.dtstart,
        n = t.freq,
        i = t.interval,
        a = t.until,
        o = t.bysetpos,
        s = t.count;
    if (s === 0 || i === 0) return $i(e);
    var u = vw.fromDate(r),
        l = new Nw(t);
    l.rebuild(u.year, u.month);
    for (var c = QI(l, u, t);;) {
        var d = l.getdayset(n)(u.year, u.month, u.day),
            m = d[0],
            h = d[1],
            g = d[2],
            y = ZI(m, h, g, l, t);
        if (bn(o))
            for (var v = Rw(o, c, h, g, l, m), D = 0; D < v.length; D++) {
                var I = v[D];
                if (a && I > a) return $i(e);
                if (I >= r) {
                    var C = Hw(I, t);
                    if (!e.accept(C) || s && (--s, !s)) return $i(e)
                }
            } else
                for (var D = h; D < g; D++) {
                    var x = m[D];
                    if (Gt(x))
                        for (var O = ku(l.yearordinal + x), A = 0; A < c.length; A++) {
                            var P = c[A],
                                I = xu(O, P);
                            if (a && I > a) return $i(e);
                            if (I >= r) {
                                var C = Hw(I, t);
                                if (!e.accept(C) || s && (--s, !s)) return $i(e)
                            }
                        }
                }
        if (t.interval === 0 || (u.add(t, y), u.year > Eu)) return $i(e);
        Xs(n) || (c = l.gettimeset(n)(u.hour, u.minute, u.second, 0)), l.rebuild(u.year, u.month)
    }
}

function JI(e, t, r) {
    var n = r.bymonth,
        i = r.byweekno,
        a = r.byweekday,
        o = r.byeaster,
        s = r.bymonthday,
        u = r.bynmonthday,
        l = r.byyearday;
    return bn(n) && !Et(n, e.mmask[t]) || bn(i) && !e.wnomask[t] || bn(a) && !Et(a, e.wdaymask[t]) || bn(e.nwdaymask) && !e.nwdaymask[t] || o !== null && !Et(e.eastermask, t) || (bn(s) || bn(u)) && !Et(s, e.mdaymask[t]) && !Et(u, e.nmdaymask[t]) || bn(l) && (t < e.yearlen && !Et(l, t + 1) && !Et(l, -e.yearlen + t) || t >= e.yearlen && !Et(l, t + 1 - e.yearlen) && !Et(l, -e.nextyearlen + t - e.yearlen))
}

function Hw(e, t) {
    return new Ka(e, t.tzid).rezonedDate()
}

function $i(e) {
    return e.getValue()
}

function ZI(e, t, r, n, i) {
    for (var a = !1, o = t; o < r; o++) {
        var s = e[o];
        a = JI(n, s, i), a && (e[s] = null)
    }
    return a
}

function QI(e, t, r) {
    var n = r.freq,
        i = r.byhour,
        a = r.byminute,
        o = r.bysecond;
    return Xs(n) ? bw(r) : n >= Oe.HOURLY && bn(i) && !Et(i, t.hour) || n >= Oe.MINUTELY && bn(a) && !Et(a, t.minute) || n >= Oe.SECONDLY && bn(o) && !Et(o, t.second) ? [] : e.gettimeset(n)(t.hour, t.minute, t.second, t.millisecond)
}
var Ur = {
        MO: new Mn(0),
        TU: new Mn(1),
        WE: new Mn(2),
        TH: new Mn(3),
        FR: new Mn(4),
        SA: new Mn(5),
        SU: new Mn(6)
    },
    el = {
        freq: pt.YEARLY,
        dtstart: null,
        interval: 1,
        wkst: Ur.MO,
        count: null,
        until: null,
        tzid: null,
        bysetpos: null,
        bymonth: null,
        bymonthday: null,
        bynmonthday: null,
        byyearday: null,
        byweekno: null,
        byweekday: null,
        bynweekday: null,
        byhour: null,
        byminute: null,
        bysecond: null,
        byeaster: null
    },
    Dw = Object.keys(el),
    Oe = function() {
        function e(t, r) {
            t === void 0 && (t = {}), r === void 0 && (r = !1), this._cache = r ? null : new kw, this.origOptions = hh(t);
            var n = ww(t).parsedOptions;
            this.options = n
        }
        return e.parseText = function(t, r) {
            return Qs(t, r)
        }, e.fromText = function(t, r) {
            return pw(t, r)
        }, e.fromString = function(t) {
            return new e(e.parseString(t) || void 0)
        }, e.prototype._iter = function(t) {
            return _u(t, this.options)
        }, e.prototype._cacheGet = function(t, r) {
            return this._cache ? this._cache._cacheGet(t, r) : !1
        }, e.prototype._cacheAdd = function(t, r, n) {
            if (this._cache) return this._cache._cacheAdd(t, r, n)
        }, e.prototype.all = function(t) {
            if (t) return this._iter(new fh("all", {}, t));
            var r = this._cacheGet("all");
            return r === !1 && (r = this._iter(new Vi("all", {})), this._cacheAdd("all", r)), r
        }, e.prototype.between = function(t, r, n, i) {
            if (n === void 0 && (n = !1), !Ya(t) || !Ya(r)) throw new Error("Invalid date passed in to RRule.between");
            var a = {
                before: r,
                after: t,
                inc: n
            };
            if (i) return this._iter(new fh("between", a, i));
            var o = this._cacheGet("between", a);
            return o === !1 && (o = this._iter(new Vi("between", a)), this._cacheAdd("between", o, a)), o
        }, e.prototype.before = function(t, r) {
            if (r === void 0 && (r = !1), !Ya(t)) throw new Error("Invalid date passed in to RRule.before");
            var n = {
                    dt: t,
                    inc: r
                },
                i = this._cacheGet("before", n);
            return i === !1 && (i = this._iter(new Vi("before", n)), this._cacheAdd("before", i, n)), i
        }, e.prototype.after = function(t, r) {
            if (r === void 0 && (r = !1), !Ya(t)) throw new Error("Invalid date passed in to RRule.after");
            var n = {
                    dt: t,
                    inc: r
                },
                i = this._cacheGet("after", n);
            return i === !1 && (i = this._iter(new Vi("after", n)), this._cacheAdd("after", i, n)), i
        }, e.prototype.count = function() {
            return this.all().length
        }, e.prototype.toString = function() {
            return rl(this.origOptions)
        }, e.prototype.toText = function(t, r, n) {
            return gw(this, t, r, n)
        }, e.prototype.isFullyConvertibleToText = function() {
            return yw(this)
        }, e.prototype.clone = function() {
            return new e(this.origOptions)
        }, e.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"], e.YEARLY = pt.YEARLY, e.MONTHLY = pt.MONTHLY, e.WEEKLY = pt.WEEKLY, e.DAILY = pt.DAILY, e.HOURLY = pt.HOURLY, e.MINUTELY = pt.MINUTELY, e.SECONDLY = pt.SECONDLY, e.MO = Ur.MO, e.TU = Ur.TU, e.WE = Ur.WE, e.TH = Ur.TH, e.FR = Ur.FR, e.SA = Ur.SA, e.SU = Ur.SU, e.parseString = nl, e.optionsToString = rl, e
    }();

function Bw(e, t, r, n, i, a) {
    var o = {},
        s = e.accept;

    function u(m, h) {
        r.forEach(function(g) {
            g.between(m, h, !0).forEach(function(y) {
                o[Number(y)] = !0
            })
        })
    }
    i.forEach(function(m) {
        var h = new Ka(m, a).rezonedDate();
        o[Number(h)] = !0
    }), e.accept = function(m) {
        var h = Number(m);
        return isNaN(h) ? s.call(this, m) : !o[h] && (u(new Date(h - 1), new Date(h + 1)), !o[h]) ? (o[h] = !0, s.call(this, m)) : !0
    }, e.method === "between" && (u(e.args.after, e.args.before), e.accept = function(m) {
        var h = Number(m);
        return o[h] ? !0 : (o[h] = !0, s.call(this, m))
    });
    for (var l = 0; l < n.length; l++) {
        var c = new Ka(n[l], a).rezonedDate();
        if (!e.accept(new Date(c.getTime()))) break
    }
    t.forEach(function(m) {
        _u(e, m.options)
    });
    var d = e._result;
    switch (Bi(d), e.method) {
        case "all":
        case "between":
            return d;
        case "before":
            return d.length && d[d.length - 1] || null;
        case "after":
        default:
            return d.length && d[0] || null
    }
}
var Vw = {
    dtstart: null,
    cache: !1,
    unfold: !1,
    forceset: !1,
    compatible: !1,
    tzid: null
};

function XI(e, t) {
    var r = [],
        n = [],
        i = [],
        a = [],
        o = tl(e),
        s = o.dtstart,
        u = o.tzid,
        l = iA(e, t.unfold);
    return l.forEach(function(c) {
        var d;
        if (c) {
            var m = rA(c),
                h = m.name,
                g = m.parms,
                y = m.value;
            switch (h.toUpperCase()) {
                case "RRULE":
                    if (g.length) throw new Error("unsupported RRULE parm: ".concat(g.join(",")));
                    r.push(nl(c));
                    break;
                case "RDATE":
                    var v = (d = /RDATE(?:;TZID=([^:=]+))?/i.exec(c)) !== null && d !== void 0 ? d : [],
                        D = v[1];
                    D && !u && (u = D), n = n.concat($w(y, g));
                    break;
                case "EXRULE":
                    if (g.length) throw new Error("unsupported EXRULE parm: ".concat(g.join(",")));
                    i.push(nl(y));
                    break;
                case "EXDATE":
                    a = a.concat($w(y, g));
                    break;
                case "DTSTART":
                    break;
                default:
                    throw new Error("unsupported property: " + h)
            }
        }
    }), {
        dtstart: s,
        tzid: u,
        rrulevals: r,
        rdatevals: n,
        exrulevals: i,
        exdatevals: a
    }
}

function eA(e, t) {
    var r = XI(e, t),
        n = r.rrulevals,
        i = r.rdatevals,
        a = r.exrulevals,
        o = r.exdatevals,
        s = r.dtstart,
        u = r.tzid,
        l = t.cache === !1;
    if (t.compatible && (t.forceset = !0, t.unfold = !0), t.forceset || n.length > 1 || i.length || a.length || o.length) {
        var c = new gh(l);
        return c.dtstart(s), c.tzid(u || void 0), n.forEach(function(m) {
            c.rrule(new Oe(ph(m, s, u), l))
        }), i.forEach(function(m) {
            c.rdate(m)
        }), a.forEach(function(m) {
            c.exrule(new Oe(ph(m, s, u), l))
        }), o.forEach(function(m) {
            c.exdate(m)
        }), t.compatible && t.dtstart && c.rdate(s), c
    }
    var d = n[0] || {};
    return new Oe(ph(d, d.dtstart || t.dtstart || s, d.tzid || t.tzid || u), l)
}

function Mu(e, t) {
    return t === void 0 && (t = {}), eA(e, tA(t))
}

function ph(e, t, r) {
    return Un(Un({}, e), {
        dtstart: t,
        tzid: r
    })
}

function tA(e) {
    var t = [],
        r = Object.keys(e),
        n = Object.keys(Vw);
    if (r.forEach(function(i) {
            Et(n, i) || t.push(i)
        }), t.length) throw new Error("Invalid options: " + t.join(", "));
    return Un(Un({}, Vw), e)
}

function nA(e) {
    if (e.indexOf(":") === -1) return {
        name: "RRULE",
        value: e
    };
    var t = lw(e, ":", 1),
        r = t[0],
        n = t[1];
    return {
        name: r,
        value: n
    }
}

function rA(e) {
    var t = nA(e),
        r = t.name,
        n = t.value,
        i = r.split(";");
    if (!i) throw new Error("empty property name");
    return {
        name: i[0].toUpperCase(),
        parms: i.slice(1),
        value: n
    }
}

function iA(e, t) {
    if (t === void 0 && (t = !1), e = e && e.trim(), !e) throw new Error("Invalid empty string");
    if (!t) return e.split(/\s/);
    for (var r = e.split(`
`), n = 0; n < r.length;) {
        var i = r[n] = r[n].replace(/\s+$/g, "");
        i ? n > 0 && i[0] === " " ? (r[n - 1] += i.slice(1), r.splice(n, 1)) : n += 1 : r.splice(n, 1)
    }
    return r
}

function aA(e) {
    e.forEach(function(t) {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(t)) throw new Error("unsupported RDATE/EXDATE parm: " + t)
    })
}

function $w(e, t) {
    return aA(t), e.split(",").map(function(r) {
        return Zs(r)
    })
}

function Uw(e) {
    var t = this;
    return function(r) {
        if (r !== void 0 && (t["_".concat(e)] = r), t["_".concat(e)] !== void 0) return t["_".concat(e)];
        for (var n = 0; n < t._rrule.length; n++) {
            var i = t._rrule[n].origOptions[e];
            if (i) return i
        }
    }
}
var gh = function(e) {
    Io(t, e);

    function t(r) {
        r === void 0 && (r = !1);
        var n = e.call(this, {}, r) || this;
        return n.dtstart = Uw.apply(n, ["dtstart"]), n.tzid = Uw.apply(n, ["tzid"]), n._rrule = [], n._rdate = [], n._exrule = [], n._exdate = [], n
    }
    return t.prototype._iter = function(r) {
        return Bw(r, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid())
    }, t.prototype.rrule = function(r) {
        Ww(r, this._rrule)
    }, t.prototype.exrule = function(r) {
        Ww(r, this._exrule)
    }, t.prototype.rdate = function(r) {
        Yw(r, this._rdate)
    }, t.prototype.exdate = function(r) {
        Yw(r, this._exdate)
    }, t.prototype.rrules = function() {
        return this._rrule.map(function(r) {
            return Mu(r.toString())
        })
    }, t.prototype.exrules = function() {
        return this._exrule.map(function(r) {
            return Mu(r.toString())
        })
    }, t.prototype.rdates = function() {
        return this._rdate.map(function(r) {
            return new Date(r.getTime())
        })
    }, t.prototype.exdates = function() {
        return this._exdate.map(function(r) {
            return new Date(r.getTime())
        })
    }, t.prototype.valueOf = function() {
        var r = [];
        return !this._rrule.length && this._dtstart && (r = r.concat(rl({
            dtstart: this._dtstart
        }))), this._rrule.forEach(function(n) {
            r = r.concat(n.toString().split(`
`))
        }), this._exrule.forEach(function(n) {
            r = r.concat(n.toString().split(`
`).map(function(i) {
                return i.replace(/^RRULE:/, "EXRULE:")
            }).filter(function(i) {
                return !/^DTSTART/.test(i)
            }))
        }), this._rdate.length && r.push(zw("RDATE", this._rdate, this.tzid())), this._exdate.length && r.push(zw("EXDATE", this._exdate, this.tzid())), r
    }, t.prototype.toString = function() {
        return this.valueOf().join(`
`)
    }, t.prototype.clone = function() {
        var r = new t(!!this._cache);
        return this._rrule.forEach(function(n) {
            return r.rrule(n.clone())
        }), this._exrule.forEach(function(n) {
            return r.exrule(n.clone())
        }), this._rdate.forEach(function(n) {
            return r.rdate(new Date(n.getTime()))
        }), this._exdate.forEach(function(n) {
            return r.exdate(new Date(n.getTime()))
        }), r
    }, t
}(Oe);

function Ww(e, t) {
    if (!(e instanceof Oe)) throw new TypeError(String(e) + " is not RRule instance");
    Et(t.map(String), String(e)) || t.push(e)
}

function Yw(e, t) {
    if (!(e instanceof Date)) throw new TypeError(String(e) + " is not Date instance");
    Et(t.map(Number), Number(e)) || (t.push(e), Bi(t))
}

function zw(e, t, r) {
    var n = !r || r.toUpperCase() === "UTC",
        i = n ? "".concat(e, ":") : "".concat(e, ";TZID=").concat(r, ":"),
        a = t.map(function(o) {
            return Fo(o.valueOf(), n)
        }).join(",");
    return "".concat(i).concat(a)
}
var oA = {},
    Kw = oA;
var sA = {},
    jw = sA;
var lA = {},
    qw = lA;
var uA = {
        "Open as kanban board": "\xD6ffne als Kanban-Board",
        "Create new board": "Erstelle ein neues Board",
        "Archive completed cards in active board": "Archiviere fertiggestellte Karten im aktiven Board",
        "Error: current file is not a Kanban board": "Fehler: Momentan ge\xF6ffnete Datei ist kein Kanban-Board",
        "Convert empty note to Kanban": "Konvertiere leere Notiz in ein Kanban-Board",
        "Error: cannot create Kanban, the current note is not empty": "Fehler: Kanban konnte nicht erstellt werden, momentan ge\xF6ffnete Datei ist nicht leer",
        "New kanban board": "Neues Kanban-Board",
        "Untitled Kanban": "Unbenanntes Kanban",
        "Toggle between Kanban and markdown mode": "Wechsle zwischen Kanban und Markdown Modus",
        "Open as markdown": "\xD6ffne als Markdown",
        "Open board settings": "\xD6ffne Board-Einstellungen",
        "Archive completed cards": "Archiviere fertiggestellte Karten",
        "Something went wrong": "Etwas ist schief gelaufen",
        "You may wish to open as markdown and inspect or edit the file.": "Du kannst die Datei im Markdown Modus \xF6ffnen und \xFCberpr\xFCfen oder bearbeiten.",
        "Are you sure you want to archive all completed cards on this board?": "Bist du dir sicher, dass du alle fertiggestellten Karten des Boards archivieren m\xF6chtest?",
        Complete: "Fertiggestellt",
        Archive: "Archiv",
        "Invalid Kanban file: problems parsing frontmatter": "Fehlerhafte Kanban Datei: Probleme beim Parsen des Frontmatters",
        "I don't know how to interpret this line:": "Ich wei\xDF nicht, wie ich diese Zeile interpretieren soll:",
        Untitled: "Unbenannt",
        "Note: No template plugins are currently enabled.": "Beachte: Keine Template-Plugins sind derzeit aktiviert.",
        default: "Standard",
        "Search...": "Suche...",
        "These settings will take precedence over the default Kanban board settings.": "Diese Einstellung wird Vorrang vor der standard Kanban-Board Einstellung haben. ",
        "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.": "Stelle standard Kanban-Board Einstellungen ein. Einstellungen k\xF6nnen auf einer Board-f\xFCr-Board Basis \xFCberschrieben werden.",
        "Note template": "Notiz Vorlage",
        "This template will be used when creating new notes from Kanban cards.": "Diese Vorlage wird beim Erstellen neuer Notizen aus Kanban-Karten verwendet.",
        "No template": "Keine Vorlage",
        "Note folder": "Notiz Ordner",
        "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.": "Notizen, welche aus einer Kanban-Karte erstellt wurden, werden in diesem Ordner platziert. Falls leer, werden die Einstellungen des Vaults verwendet.",
        "Default folder": "Standard Ordner",
        "Maximum number of archived cards": "Maximale Anzahl archivierter Karten.",
        "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.": "Archivierte Karten k\xF6nnen im Markdown-Modus betrachtet werden. Diese Einstellung wird alte Karten l\xF6schen, sobald das Limit erreicht wird. Eine Einstellung von -1 setzt das Archiv auf eine unendliche Gr\xF6\xDFe.",
        "Display card checkbox": "Zeige Karten Checkbox",
        "When toggled, a checkbox will be displayed with each card": "Wenn aktiviert, wird eine Checkbox mit jeder Karte angezeigt.",
        "Reset to default": "Zur\xFCcksetzen",
        "Date & Time": "Datum & Uhrzeit",
        "Date trigger": "Datums Ausl\xF6ser",
        "When this is typed, it will trigger the date selector": "Wenn dies eingegeben wird, dann wird die Datumsauswahl angezeigt",
        "Time trigger": "Uhrzeit Ausl\xF6ser",
        "When this is typed, it will trigger the time selector": "Wenn dies eingegeben wird, dann wird die Uhrzeitsauswahl angezeigt",
        "Date format": "Format des Datums",
        "This format will be used when saving dates in markdown.": "Dieses Format wird verwendet, wenn ein Datum in Markdown gespeichert wird.",
        "For more syntax, refer to": "F\xFCr mehr Syntax Informationen siehe",
        "format reference": "Formatvorlage",
        "Your current syntax looks like this": "Dein momentanes Format sieht so aus",
        "Time format": "Format der Uhrzeit",
        "Date display format": "Format der Datums Anzeige",
        "This format will be used when displaying dates in Kanban cards.": "Dieses Format wird verwendet, wenn ein Datum in einer Kanban-Karte angezeigt wird.",
        "Show relative date": "Zeige relatives Datum",
        "Link dates to daily notes": "Verbinde Daten zu Daily Notes",
        "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]": "Wenn aktiviert, werden Daten mit Daily Notes verbunden. Zum Beispiel [[26.4.2021]]",
        "Add date and time to archived cards": "F\xFCge Datum und Uhrzeit zu archivierten Notizen hinzu",
        "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title": "Wenn aktiviert, wird das momentane Datum und die momentane Zeit am Anfang einer Karte hinzugef\xFCgt, wenn sie archiviert wird. Zum Beispiel: - [ ] 14.05.2021 10:00 Mein Karten Titel",
        "Archive date/time separator": "Datum/Uhrzeit Trenner f\xFCr das Archiv",
        "This will be used to separate the archived date/time from the title": "Dies wird verwendet, um das Datum und die Uhrzeit archivierter Karten vom Titel zu trennen",
        "Archive date/time format": "Format des Datums und der Uhrzeit f\xFCr das Archiv",
        "Kanban Plugin": "Kanban Erweiterung",
        "New line trigger": "Taste f\xFCr neue Zeile",
        "Shift + Enter": "Umschalttaste + Enter",
        Enter: "Enter",
        "Prepend / append new cards": "Neue Karten voranf\xFCgen / anh\xE4ngen",
        "This setting controls whether new cards are added to the beginning or end of the list.": "Diese Einstellung gibt an ob neue Karten am Anfang oder am Ende einer Liste hinzugef\xFCgt werden.",
        Prepend: "Voranf\xFCgen",
        Append: "Anh\xE4ngen",
        "Linked Page Metadata": "Metadaten f\xFCr verkn\xFCpfte (verlinkte) Notizen",
        "Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.": "Zeigen Sie Metadaten f\xFCr die erste Notiz an, die innerhalb einer Karte verkn\xFCpft ist. Geben Sie an, welche Metadatenschl\xFCssel unten angezeigt werden sollen. Ein optionales Label kann hinzugef\xFCgt werden, es kann aber auch vollst\xE4ndig ausgeblendet werden.",
        "Metadata key": "Metadatenschl\xFCssel",
        "Display label": "Anzeigelabel",
        "Hide label": "Label ausblenden",
        "Drag to rearrange": "Zum Neuanordnen ziehen",
        Delete: "L\xF6schen",
        "Add key": "Schl\xFCssel hinzuf\xFCgen",
        "Field contains markdown": "Feld beinhaltet Markdown",
        "More options": "Mehr optionen",
        Cancel: "Abbrechen",
        today: "heute",
        yesterday: "gestern",
        tomorrow: "morgen",
        "Change date": "Ver\xE4ndere Datum",
        "Change time": "Ver\xE4ndere Uhrzeit",
        "Card title...": "Karten Titel...",
        "Add card": "Karte hinzuf\xFCgen",
        "Add a card": "F\xFCge eine Karte hinzu",
        "Edit card": "Karte editieren",
        "New note from card": "Neue Notiz aus Karte erstellen",
        "Archive card": "Karte archivieren",
        "Delete card": "Karte l\xF6schen",
        "Edit date": "Datum editieren",
        "Add date": "Datum hinzuf\xFCgen",
        "Remove date": "Datum entfernen",
        "Edit time": "Karte editieren",
        "Add time": "Uhrzeit hinzuf\xFCgen",
        "Remove time": "Uhrzeit entfernen",
        "Duplicate card": "Karte duplizieren",
        "Enter list title...": "Listen Titel eingeben..",
        "Mark cards in this list as complete": "Markiere Karten in dieser Liste als fertiggestellt",
        "Add list": "Liste hinzuf\xFCgen",
        "Add a list": "F\xFCge eine Liste hinzu",
        "Move list": "Liste verschieben",
        Close: "Schlie\xDFen",
        "Are you sure you want to delete this list and all its cards?": "Bist du dir sicher, dass du diese Liste und alle ihre Karten l\xF6schen m\xF6chtest?",
        "Yes, delete list": "Ja, l\xF6sche diese Liste",
        "Are you sure you want to archive this list and all its cards?": "Bist du dir sicher, dass du diese Liste und alle ihre Karten archivieren m\xF6chtest?",
        "Yes, archive list": "Ja, archiviere diese Liste",
        "Are you sure you want to archive all cards in this list?": "Bist du dir sicher, dass du alle Karten in dieser Liste archivieren m\xF6chtest?",
        "Yes, archive cards": "Ja, archiviere Karten",
        "Edit list": "Editiere Liste",
        "Archive cards": "Archiviere Karten",
        "Archive list": "Archiviere List",
        "Delete list": "L\xF6sche Liste"
    },
    Gw = uA;
var cA = {
        "Open as kanban board": "Open as kanban board",
        "Create new board": "Create new board",
        "Archive completed cards in active board": "Archive completed cards in active board",
        "Error: current file is not a Kanban board": "Error: current file is not a Kanban board",
        "Convert empty note to Kanban": "Convert empty note to Kanban",
        "Error: cannot create Kanban, the current note is not empty": "Error: cannot create Kanban, the current note is not empty",
        "New kanban board": "New kanban board",
        "Untitled Kanban": "Untitled Kanban",
        "Toggle between Kanban and markdown mode": "Toggle between Kanban and markdown mode",
        "View as board": "View as board",
        "View as list": "View as list",
        "View as table": "View as table",
        "Board view": "Board view",
        "Open as markdown": "Open as markdown",
        "Open board settings": "Open board settings",
        "Archive completed cards": "Archive completed cards",
        "Something went wrong": "Something went wrong",
        "You may wish to open as markdown and inspect or edit the file.": "You may wish to open as markdown and inspect or edit the file.",
        "Are you sure you want to archive all completed cards on this board?": "Are you sure you want to archive all completed cards on this board?",
        Complete: "Complete",
        Archive: "Archive",
        "Invalid Kanban file: problems parsing frontmatter": "Invalid Kanban file: problems parsing frontmatter",
        "I don't know how to interpret this line:": "I don't know how to interpret this line:",
        Untitled: "Untitled",
        "Note: No template plugins are currently enabled.": "Note: No template plugins are currently enabled.",
        default: "default",
        "Search...": "Search...",
        "New line trigger": "New line trigger",
        "Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.": "Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.",
        "Shift + Enter": "Shift + Enter",
        Enter: "Enter",
        "Prepend / append new cards": "Prepend / append new cards",
        "This setting controls whether new cards are added to the beginning or end of the list.": "This setting controls whether new cards are added to the beginning or end of the list.",
        Prepend: "Prepend",
        "Prepend (compact)": "Prepend (compact)",
        Append: "Append",
        "These settings will take precedence over the default Kanban board settings.": "These settings will take precedence over the default Kanban board settings.",
        "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.": "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.",
        "Note template": "Note template",
        "This template will be used when creating new notes from Kanban cards.": "This template will be used when creating new notes from Kanban cards.",
        "No template": "No template",
        "Note folder": "Note folder",
        "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.": "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.",
        "Default folder": "Default folder",
        "List width": "List width",
        "Expand lists to full width in list view": "Expand lists to full width in list view",
        "Enter a number to set the list width in pixels.": "Enter a number to set the list width in pixels.",
        "Maximum number of archived cards": "Maximum number of archived cards",
        "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.": "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.",
        "Display card checkbox": "Display card checkbox",
        "When toggled, a checkbox will be displayed with each card": "When toggled, a checkbox will be displayed with each card",
        "Reset to default": "Reset to default",
        "Date & Time": "Date & Time",
        "Date trigger": "Date trigger",
        "When this is typed, it will trigger the date selector": "When this is typed, it will trigger the date selector",
        "Time trigger": "Time trigger",
        "When this is typed, it will trigger the time selector": "When this is typed, it will trigger the time selector",
        "Date format": "Date format",
        "This format will be used when saving dates in markdown.": "This format will be used when saving dates in markdown.",
        "For more syntax, refer to": "For more syntax, refer to",
        "format reference": "format reference",
        "Your current syntax looks like this": "Your current syntax looks like this",
        "Time format": "Time format",
        "Date display format": "Date display format",
        "This format will be used when displaying dates in Kanban cards.": "This format will be used when displaying dates in Kanban cards.",
        "Show relative date": "Show relative date",
        "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'. Relative dates will not be shown for dates from the Tasks and Dataview plugins.": "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'. Relative dates will not be shown for dates from the Tasks and Dataview plugins.",
        "Move dates to card footer": "Move dates to card footer",
        "When toggled, dates will be displayed in the card's footer instead of the card's body.": "When toggled, dates will be displayed in the card's footer instead of the card's body.",
        "Move tags to card footer": "Move tags to card footer",
        "When toggled, tags will be displayed in the card's footer instead of the card's body.": "When toggled, tags will be displayed in the card's footer instead of the card's body.",
        "Move task data to card footer": "Move task data to card footer",
        "When toggled, task data (from the Tasks plugin) will be displayed in the card's footer instead of the card's body.": "When toggled, task data (from the Tasks plugin) will be displayed in the card's footer instead of the card's body.",
        "Inline metadata position": "Inline metadata position",
        "Controls where the inline metadata (from the Dataview plugin) will be displayed.": "Controls where the inline metadata (from the Dataview plugin) will be displayed.",
        "Card body": "Card body",
        "Card footer": "Card footer",
        "Merge with linked page metadata": "Merge with linked page metadata",
        "Hide card counts in list titles": "Hide card counts in list titles",
        "When toggled, card counts are hidden from the list title": "When toggled, card counts are hidden from the list title",
        "Link dates to daily notes": "Link dates to daily notes",
        "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]": "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]",
        "Add date and time to archived cards": "Add date and time to archived cards",
        "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title": "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title",
        "Add archive date/time after card title": "Add archive date/time after card title",
        "When toggled, the archived date/time will be added after the card title, e.g.- [ ] My card title 2021-05-14 10:00am. By default, it is inserted before the title.": "When toggled, the archived date/time will be added after the card title, e.g.- [ ] My card title 2021-05-14 10:00am. By default, it is inserted before the title.",
        "Archive date/time separator": "Archive date/time separator",
        "This will be used to separate the archived date/time from the title": "This will be used to separate the archived date/time from the title",
        "Archive date/time format": "Archive date/time format",
        "Kanban Plugin": "Kanban Plugin",
        "Tag click action": "Tag click action",
        "Search Kanban Board": "Search Kanban Board",
        "Search Obsidian Vault": "Search Obsidian Vault",
        "This setting controls whether clicking the tags displayed below the card title opens the Obsidian search or the Kanban board search.": "This setting controls whether clicking the tags displayed below the card title opens the Obsidian search or the Kanban board search.",
        "Tag colors": "Tag colors",
        "Set colors for tags displayed in cards.": "Set colors for tags displayed in cards.",
        "Linked Page Metadata": "Linked Page Metadata",
        "Inline Metadata": "Inline Metadata",
        "Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.": "Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.",
        "Board Header Buttons": "Board Header Buttons",
        "Calendar: first day of week": "Calendar: first day of week",
        "Override which day is used as the start of the week": "Override which day is used as the start of the week",
        Sunday: "Sunday",
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
        Friday: "Friday",
        Saturday: "Saturday",
        "Background color": "Background color",
        Tag: "Tag",
        "Text color": "Text color",
        "Date is": "Date is",
        Today: "Today",
        "After now": "After now",
        "Before now": "Before now",
        "Between now and": "Between now and",
        "Display date colors": "Display date colors",
        "Set colors for dates displayed in cards based on the rules below.": "Set colors for dates displayed in cards based on the rules below.",
        "Add date color": "Add date color",
        "Metadata key": "Metadata key",
        "Display label": "Display label",
        "Hide label": "Hide label",
        "Drag to rearrange": "Drag to rearrange",
        Delete: "Delete",
        "Add key": "Add key",
        "Add tag": "Add tag",
        "Field contains markdown": "Field contains markdown",
        "Tag sort order": "Tag sort order",
        "Set an explicit sort order for the specified tags.": "Set an explicit sort order for the specified tags.",
        "Add tag color": "Add tag color",
        List: "List",
        Card: "Card",
        Date: "Date",
        Tags: "Tags",
        Priority: "Priority",
        Start: "Start",
        Created: "Created",
        Scheduled: "Scheduled",
        Due: "Due",
        Cancelled: "Cancelled",
        Recurrence: "Recurrence",
        "Depends on": "Depends on",
        ID: "ID",
        "More options": "More options",
        Cancel: "Cancel",
        Done: "Done",
        Save: "Save",
        today: "today",
        yesterday: "yesterday",
        tomorrow: "tomorrow",
        "Change date": "Change date",
        "Change time": "Change time",
        "Card title...": "Card title...",
        "Add card": "Add card",
        "Add a card": "Add a card",
        "Edit card": "Edit card",
        "New note from card": "New note from card",
        "Archive card": "Archive card",
        "Delete card": "Delete card",
        "Edit date": "Edit date",
        "Add date": "Add date",
        "Remove date": "Remove date",
        "Edit time": "Edit time",
        "Add time": "Add time",
        "Remove time": "Remove time",
        "Duplicate card": "Duplicate card",
        "Split card": "Split card",
        "Copy link to card": "Copy link to card",
        "Insert card before": "Insert card before",
        "Insert card after": "Insert card after",
        "Add label": "Add label",
        "Move to top": "Move to top",
        "Move to bottom": "Move to bottom",
        "Move to list": "Move to list",
        "Enter list title...": "Enter list title...",
        "Mark cards in this list as complete": "Mark cards in this list as complete",
        "Add list": "Add list",
        "Add a list": "Add a list",
        "Move list": "Move list",
        Close: "Close",
        "Are you sure you want to delete this list and all its cards?": "Are you sure you want to delete this list and all its cards?",
        "Yes, delete list": "Yes, delete list",
        "Are you sure you want to archive this list and all its cards?": "Are you sure you want to archive this list and all its cards?",
        "Yes, archive list": "Yes, archive list",
        "Are you sure you want to archive all cards in this list?": "Are you sure you want to archive all cards in this list?",
        "Yes, archive cards": "Yes, archive cards",
        "Edit list": "Edit list",
        "Archive cards": "Archive cards",
        "Archive list": "Archive list",
        "Delete list": "Delete list",
        "Insert list before": "Insert list before",
        "Insert list after": "Insert list after",
        "Sort by card text": "Sort by card text",
        "Sort by date": "Sort by date",
        "Sort by tags": "Sort by tags",
        "Sort by": "Sort by",
        "Unable to find": "Unable to find",
        "Open in default app": "Open in default app",
        Submit: "Submit"
    },
    yh = cA;
var dA = {},
    Jw = dA;
var fA = {},
    Zw = fA;
var hA = {},
    Qw = hA;
var mA = {},
    Xw = mA;
var pA = {
        "Open as kanban board": "Apri come bacheca Kanban",
        "Create new board": "Crea nuova bacheca",
        "Archive completed cards in active board": "Archivia schede completate nella bacheca attiva",
        "Error: current file is not a Kanban board": "Errore: il file corrente non \xE8 una bacheca Kanban",
        "Convert empty note to Kanban": "Converti nota vuota in Kanban",
        "Error: cannot create Kanban, the current note is not empty": "Errore: Impossibile creare Kanban, la nota corrente non \xE8 vuota",
        "New kanban board": "Nuova bacheca Kanban",
        "Untitled Kanban": "Kanban senza titolo",
        "Open as markdown": "Apri come markdown",
        "Open board settings": "Apri impostazioni bacheca",
        "Archive completed cards": "Archivia schede completate",
        Complete: "Completato",
        Archive: "Archivio",
        "Note: No template plugins are currently enabled.": "Nota: Nessun plugin dei modelli attualmente abilitato.",
        default: "predefinito",
        "Search...": "Ricerca...",
        "These settings will take precedence over the default Kanban board settings.": "Queste impostazioni avranno la precedenza sulle impostazioni predefinite della bacheca Kanban.",
        "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.": "Impostazioni predefinite della bacheca Kanban. Le impostazioni possono essere sovrascritte per ogni bacheca.",
        "Note template": "Nota modello",
        "This template will be used when creating new notes from Kanban cards.": "Questo modello verr\xE0 utilizzato durante la creazione di nuove note dalle schede Kanban.",
        "No template": "Nessun modello",
        "Note folder": "Cartella delle note",
        "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.": "Le note create dalle schede Kanban verranno inserite in questa cartella. Se vuota, verranno inserite nella posizione predefinita del vault.",
        "Default folder": "Cartella predefinita",
        "Maximum number of archived cards": "Numero massimo di schede archiviate",
        "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.": "Le schede archiviate possono essere visualizzate in modalit\xE0 Markdown. Le vecchie schede verranno rimosse una volta raggiunto il limite. Impostando il valore -1 il numero di schede archiviate sar\xE0 illimitato.",
        "Display card checkbox": "Mostra casella di controllo",
        "When toggled, a checkbox will be displayed with each card": "Se attiva, verr\xE0 visualizzata una casella di controllo per ogni scheda",
        "Reset to default": "Ripristina predefiniti",
        "Date & Time": "Data e ora",
        "Date trigger": "Selettore data",
        "When this is typed, it will trigger the date selector": "Digitando questo, verr\xE0 attivato il selettore della data",
        "Time trigger": "Selettore ora",
        "When this is typed, it will trigger the time selector": "Digitando questo, verr\xE0 attivato il selettore dell'ora",
        "Date format": "Formato data",
        "This format will be used when saving dates in markdown.": "Formato utilizzato per il salvataggio delle date in Markdown.",
        "For more syntax, refer to": "Per maggiori informazioni, vedere",
        "format reference": "formato di riferimento",
        "Your current syntax looks like this": "Formato corrente",
        "Time format": "Formato ora",
        "Date display format": "Formato visualizzazione data",
        "This format will be used when displaying dates in Kanban cards.": "Formato utilizzato per visualizzare le date nelle schede Kanban.",
        "Show relative date": "Mostra data relativa",
        "Link dates to daily notes": "Collega date alle Note del giorno",
        "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]": "Se attiva, le date verranno collegate alle Note del giorno. Eg. [[2021-04-26]]",
        "Add date and time to archived cards": "Aggiungi data e ora alle schede archiviate",
        "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title": "Se attiva, la data e l'ora corrente verranno aggiunte all'inizio della scheda quando viene archiviata. Eg. - [ ] 2021-05-14 10:00am Mia scheda",
        "Archive date/time separator": "Separatore data/ora dell'archivio",
        "This will be used to separate the archived date/time from the title": "Verr\xE0 usato per separare data e ora dell'archiviazione dal titolo",
        "Archive date/time format": "Formato data/ora dell'archivio",
        "Kanban Plugin": "Plugin Kanban",
        "More options": "Altre opzioni",
        Cancel: "Annulla",
        today: "oggi",
        yesterday: "ieri",
        tomorrow: "domani",
        "Change date": "Modifica data",
        "Change time": "Modifica ora",
        "Card title...": "Titolo elemento...",
        "Add card": "Aggiungi elemento",
        "Add a card": "Aggiungi un'altra scheda",
        "Edit card": "Modifica scheda",
        "New note from card": "Nuova nota da scheda",
        "Archive card": "Archivia scheda",
        "Delete card": "Elimina scheda",
        "Edit date": "Modifica data",
        "Add date": "Aggiungi data",
        "Remove date": "Rimuovi data",
        "Edit time": "Modifica ora",
        "Add time": "Aggiungi ora",
        "Remove time": "Rimuovi ora",
        "Enter list title...": "Inserisci titolo lista...",
        "Mark cards in this list as complete": "Segna elementi della lista come completati",
        "Add list": "Aggiungi lista",
        "Add a list": "Aggiungi un'altra lista",
        "Move list": "Sposta lista",
        Close: "Chiudi",
        "Are you sure you want to delete this list and all its cards?": "Cancellare questa lista e tutte le sue schede?",
        "Yes, delete list": "Cancella lista",
        "Are you sure you want to archive this list and all its cards?": "Archiviare questa lista e tutte le sue schede?",
        "Yes, archive list": "Archivia lista",
        "Are you sure you want to archive all cards in this list?": "Archiviare tutte le schede in questa lista?",
        "Yes, archive cards": "Archivia schede",
        "Edit list": "Modifica lista",
        "Archive cards": "Archivia schede",
        "Archive list": "Archivia lista",
        "Delete list": "Cancella lista"
    },
    eb = pA;
var gA = {
        "Open as kanban board": "\u30AB\u30F3\u30D0\u30F3\u30DC\u30FC\u30C9\u3068\u3057\u3066\u958B\u304F",
        "Create new board": "\u30AB\u30F3\u30D0\u30F3\u30DC\u30FC\u30C9\u3092\u65B0\u898F\u4F5C\u6210",
        "Archive completed cards in active board": "\u30A2\u30AF\u30C6\u30A3\u30D6\u30DC\u30FC\u30C9\u306E\u5B8C\u4E86\u3057\u305F\u30AB\u30FC\u30C9\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
        "Error: current file is not a Kanban board": "\u30A8\u30E9\u30FC: \u73FE\u5728\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u30AB\u30F3\u30D0\u30F3\u30DC\u30FC\u30C9\u3067\u306F\u3042\u308A\u307E\u305B\u3093",
        "Convert empty note to Kanban": "\u7A7A\u306E\u30CE\u30FC\u30C8\u3092\u30AB\u30F3\u30D0\u30F3\u306B\u5909\u63DB",
        "Error: cannot create Kanban, the current note is not empty": "\u30A8\u30E9\u30FC: \u73FE\u5728\u958B\u3044\u3066\u3044\u308B\u30CE\u30FC\u30C8\u306F\u7A7A\u3067\u3042\u308A\u3001\u30AB\u30F3\u30D0\u30F3\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093",
        "New kanban board": "\u65B0\u898F\u30AB\u30F3\u30D0\u30F3\u30DC\u30FC\u30C9",
        "Untitled Kanban": "\u7121\u984C\u306E\u30AB\u30F3\u30D0\u30F3",
        "Toggle between Kanban and markdown mode": "\u30AB\u30F3\u30D0\u30F3\u3068\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u306E\u30E2\u30FC\u30C9\u3092\u5207\u308A\u66FF\u3048\u308B",
        "Open as markdown": "\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3068\u3057\u3066\u958B\u304F",
        "Open board settings": "\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3092\u958B\u304F",
        "Archive completed cards": "\u5B8C\u4E86\u3057\u305F\u30AB\u30FC\u30C9\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
        "Something went wrong": "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
        "You may wish to open as markdown and inspect or edit the file.": "\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3068\u3057\u3066\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u3044\u3066\u8ABF\u67FB\u3059\u308B\u304B\u7DE8\u96C6\u3059\u308B\u3053\u3068\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059\u3002",
        "Are you sure you want to archive all completed cards on this board?": "\u3053\u306E\u30DC\u30FC\u30C9\u306B\u542B\u307E\u308C\u308B\u3059\u3079\u3066\u306E\u5B8C\u4E86\u3057\u305F\u30AB\u30FC\u30C9\u3092\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u307E\u3059\u304B\uFF1F",
        Complete: "\u5B8C\u4E86",
        Archive: "\u30A2\u30FC\u30AB\u30A4\u30D6",
        "Invalid Kanban file: problems parsing frontmatter": "\u7121\u52B9\u306A\u30AB\u30F3\u30D0\u30F3\u30D5\u30A1\u30A4\u30EB: \u30D5\u30ED\u30F3\u30C8\u30DE\u30BF\u30FC\u306E\u30D1\u30FC\u30B9\u306B\u554F\u984C\u304C\u3042\u308A\u307E\u3059",
        "I don't know how to interpret this line:": "\u3053\u306E\u884C\u3092\u3069\u3046\u89E3\u91C8\u3059\u308C\u3070\u3088\u3044\u304B\u5206\u304B\u308A\u307E\u305B\u3093",
        Untitled: "\u7121\u984C",
        "Note: No template plugins are currently enabled.": "\u30CE\u30FC\u30C8:  \u73FE\u5728\u3001\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059",
        default: "\u30C7\u30D5\u30A9\u30EB\u30C8",
        "Search...": "\u691C\u7D22\u2026",
        "New line trigger": "\u6539\u884C\u30C8\u30EA\u30AC\u30FC",
        "Shift + Enter": "Shift + Enter",
        Enter: "Enter",
        "Prepend / append new cards": "\u5148\u982D\u307E\u305F\u306F\u672B\u5C3E\u306B\u65B0\u898F\u30AB\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B",
        "This setting controls whether new cards are added to the beginning or end of the list.": "\u3053\u306E\u8A2D\u5B9A\u306B\u3088\u3063\u3066\u65B0\u898F\u30AB\u30FC\u30C9\u3092\u30EA\u30B9\u30C8\u306E\u5148\u982D\u307E\u305F\u306F\u672B\u5C3E\u306B\u8FFD\u52A0\u3059\u308B\u304B\u3092\u6C7A\u3081\u307E\u3059\u3002",
        Prepend: "\u5148\u982D\u306B\u8FFD\u52A0",
        "Prepend (compact)": "\u5148\u982D\u306B\u8FFD\u52A0(\u30B3\u30F3\u30D1\u30AF\u30C8)",
        Append: "\u672B\u5C3E\u306B\u8FFD\u52A0",
        "These settings will take precedence over the default Kanban board settings.": "\u3053\u308C\u3089\u306E\u8A2D\u5B9A\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30AB\u30F3\u30D0\u30F3\u8A2D\u5B9A\u3088\u308A\u512A\u5148\u3055\u308C\u307E\u3059\u3002",
        "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.": "\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30AB\u30F3\u30D0\u30F3\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3092\u30BB\u30C3\u30C8\u3057\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306F\u30DC\u30FC\u30C9\u6BCE\u306B\u4E0A\u66F8\u304D\u3067\u304D\u307E\u3059\u3002",
        "Note template": "\u30CE\u30FC\u30C8\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8",
        "This template will be used when creating new notes from Kanban cards.": "\u3053\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306F\u30AB\u30F3\u30D0\u30F3\u30AB\u30FC\u30C9\u304B\u3089\u30CE\u30FC\u30C8\u3092\u65B0\u898F\u4F5C\u6210\u3057\u305F\u969B\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",
        "No template": "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304C\u3042\u308A\u307E\u305B\u3093",
        "Note folder": "\u30CE\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0",
        "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.": "\u30AB\u30F3\u30D0\u30F3\u30AB\u30FC\u30C9\u304B\u3089\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306F\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u7F6E\u304B\u308C\u307E\u3059\u3002\u30D6\u30E9\u30F3\u30AF\u306E\u5834\u5408\u306B\u306F\u3001\u3053\u306E\u4FDD\u7BA1\u5EAB\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30ED\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u7F6E\u304B\u308C\u307E\u3059\u3002",
        "Default folder": "\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0",
        "Maximum number of archived cards": "\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u30AB\u30FC\u30C9\u306E\u6700\u5927\u6570",
        "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.": "\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u30AB\u30FC\u30C9\u306F\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u30E2\u30FC\u30C9\u3067\u95B2\u89A7\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u6307\u5B9A\u3055\u308C\u305F\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u9650\u754C\u6570\u307E\u3067\u9054\u3057\u305F\u969B\u306B\u306F\u53E4\u3044\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u3002\u3053\u306E\u5024\u3092-1\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u30DC\u30FC\u30C9\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u9650\u754C\u3092\u7121\u9650\u306B\u3057\u307E\u3059\u3002",
        "Display card checkbox": "\u30AB\u30FC\u30C9\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A",
        "When toggled, a checkbox will be displayed with each card": "\u6709\u52B9\u5316\u3059\u308B\u3068\u5404\u30AB\u30FC\u30C9\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
        "Reset to default": "\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u30EA\u30BB\u30C3\u30C8",
        "Date & Time": "\u65E5\u4ED8\u3068\u6642\u9593",
        "Date trigger": "\u65E5\u4ED8\u30C8\u30EA\u30AC\u30FC",
        "When this is typed, it will trigger the date selector": "\u3053\u306E\u8A2D\u5B9A\u306B\u5165\u529B\u3055\u308C\u305F\u6587\u5B57\u5217\u3067\u65E5\u4ED8\u30BB\u30EC\u30AF\u30BF\u30FC\u3092\u30C8\u30EA\u30AC\u30FC\u3057\u307E\u3059\u3002",
        "Time trigger": "\u6642\u9593\u30C8\u30EA\u30AC\u30FC",
        "When this is typed, it will trigger the time selector": "\u3053\u306E\u8A2D\u5B9A\u306B\u5165\u529B\u3055\u308C\u305F\u6587\u5B57\u5217\u3067\u6642\u9593\u30BB\u30EC\u30AF\u30BF\u30FC\u3092\u30C8\u30EA\u30AC\u30FC\u3057\u307E\u3059\u3002",
        "Date format": "\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
        "This format will be used when saving dates in markdown.": "\u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3067\u65E5\u4ED8\u304C\u4FDD\u5B58\u3055\u308C\u308B\u969B\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",
        "For more syntax, refer to": "\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306B\u3064\u3044\u3066\u306F\u3053\u3061\u3089\u3092\u53C2\u7167:",
        "format reference": "\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9",
        "Your current syntax looks like this": "\u73FE\u5728\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306F\u6B21\u306E\u3088\u3046\u306B\u898B\u3048\u307E\u3059",
        "Time format": "\u6642\u9593\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
        "Date display format": "\u65E5\u4ED8\u8868\u793A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8",
        "This format will be used when displaying dates in Kanban cards.": "\u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u30AB\u30F3\u30D0\u30F3\u30AB\u30FC\u30C9\u5185\u306B\u3066\u65E5\u4ED8\u306E\u8868\u793A\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",
        "Show relative date": "\u76F8\u5BFE\u65E5\u4ED8\u3092\u8868\u793A",
        "Link dates to daily notes": "\u30C7\u30A4\u30EA\u30FC\u30CE\u30FC\u30C8\u306B\u65E5\u4ED8\u3092\u30EA\u30F3\u30AF",
        "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]": "\u6709\u52B9\u5316\u3059\u308B\u3068\u65E5\u4ED8\u304C\u30C7\u30A4\u30EA\u30FC\u30CE\u30FC\u30C8\u306B\u30EA\u30F3\u30AF\u3055\u308C\u307E\u3059\u3002 \u4F8B: [[2021-04-26]]",
        "Add date and time to archived cards": "\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u30AB\u30FC\u30C9\u306B\u65E5\u4ED8\u3068\u6642\u9593\u3092\u8FFD\u52A0",
        "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title": "\u6709\u52B9\u5316\u3059\u308B\u3068\u30AB\u30FC\u30C9\u304C\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u969B\u306B\u73FE\u5728\u306E\u65E5\u4ED8\u3068\u6642\u9593\u304C\u30AB\u30FC\u30C9\u306E\u6700\u521D\u306B\u8FFD\u8A18\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u4F8B: - [ ] 2021-05-14 10:00am \u30AB\u30FC\u30C9\u30BF\u30A4\u30C8\u30EB",
        "Archive date/time separator": "\u65E5\u4ED8\u30FB\u6642\u9593\u30BB\u30D1\u30EC\u30FC\u30BF\u30FC\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
        "This will be used to separate the archived date/time from the title": "\u3053\u308C\u306F\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u65E5\u4ED8\u30FB\u6642\u9593\u3092\u30BF\u30A4\u30C8\u30EB\u304B\u3089\u5206\u96E2\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",
        "Archive date/time format": "\u65E5\u4ED8\u30FB\u6642\u9593\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
        "Kanban Plugin": "\u30AB\u30F3\u30D0\u30F3\u30D7\u30E9\u30B0\u30A4\u30F3",
        "Linked Page Metadata": "\u30EA\u30F3\u30AF\u3055\u308C\u305F\u30DA\u30FC\u30B8\u306E\u30E1\u30BF\u30C7\u30FC\u30BF",
        "Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.": "\u30AB\u30FC\u30C9\u5185\u3067\u30EA\u30F3\u30AF\u3055\u308C\u3066\u3044\u308B\u6700\u521D\u306E\u30CE\u30FC\u30C8\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u4E0B\u306B\u8868\u793A\u3059\u308B\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u30AD\u30FC\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066\u30E9\u30D9\u30EB\u306E\u4ED8\u4E0E\u304C\u53EF\u80FD\u3067\u3042\u308A\u3001\u30E9\u30D9\u30EB\u306F\u5B8C\u5168\u306B\u975E\u8868\u793A\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",
        "Board Header Buttons": "\u30DC\u30FC\u30C9\u306E\u30D8\u30C3\u30C0\u30FC\u30DC\u30BF\u30F3",
        "Calendar: first day of week": "\u30AB\u30EC\u30F3\u30C0\u30FC: \u9031\u306E\u59CB\u307E\u308A",
        "Override which day is used as the start of the week": "\u9031\u306E\u59CB\u307E\u308A\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u66DC\u65E5\u3092\u5909\u66F4\u3057\u307E\u3059\u3002",
        Sunday: "\u65E5\u66DC\u65E5",
        Monday: "\u6708\u66DC\u65E5",
        Tuesday: "\u706B\u66DC\u65E5",
        Wednesday: "\u6C34\u66DC\u65E5",
        Thursday: "\u6728\u66DC\u65E5",
        Friday: "\u91D1\u66DC\u65E5",
        Saturday: "\u571F\u66DC\u65E5",
        "Metadata key": "\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u30AD\u30FC",
        "Display label": "\u30E9\u30D9\u30EB\u3092\u8868\u793A",
        "Hide label": "\u30E9\u30D9\u30EB\u3092\u96A0\u3059",
        "Drag to rearrange": "\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3079\u66FF\u3048\u308B",
        Delete: "\u524A\u9664",
        "Add key": "\u30AD\u30FC\u3092\u8FFD\u52A0",
        "Field contains markdown": "\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3092\u542B\u307F\u307E\u3059",
        "More options": "\u4ED6\u306E\u30AA\u30D7\u30B7\u30E7\u30F3",
        Cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
        today: "\u4ECA\u65E5",
        yesterday: "\u6628\u65E5",
        tomorrow: "\u660E\u65E5",
        "Change date": "\u65E5\u4ED8\u3092\u5909\u66F4",
        "Change time": "\u6642\u9593\u3092\u5909\u66F4",
        "Card title...": "\u30AB\u30FC\u30C9\u30BF\u30A4\u30C8\u30EB\u2026",
        "Add card": "\u30AB\u30FC\u30C9\u3092\u8FFD\u52A0",
        "Add a card": "\u30AB\u30FC\u30C9\u3092\u8FFD\u52A0",
        "Edit card": "\u30AB\u30FC\u30C9\u3092\u7DE8\u96C6",
        "New note from card": "\u30AB\u30FC\u30C9\u304B\u3089\u30CE\u30FC\u30C8\u3092\u65B0\u898F\u4F5C\u6210",
        "Archive card": "\u30AB\u30FC\u30C9\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
        "Delete card": "\u30AB\u30FC\u30C9\u3092\u524A\u9664",
        "Edit date": "\u65E5\u4ED8\u3092\u7DE8\u96C6",
        "Add date": "\u65E5\u4ED8\u3092\u8FFD\u52A0",
        "Remove date": "\u65E5\u4ED8\u3092\u524A\u9664",
        "Edit time": "\u6642\u9593\u3092\u7DE8\u96C6",
        "Add time": "\u6642\u9593\u3092\u8FFD\u52A0",
        "Remove time": "\u6642\u9593\u3092\u524A\u9664",
        "Duplicate card": "\u30AB\u30FC\u30C9\u3092\u8907\u88FD",
        "Split card": "\u30AB\u30FC\u30C9\u3092\u5206\u5272",
        "Copy link to card": "\u30AB\u30FC\u30C9\u3078\u306E\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",
        "Enter list title...": "\u30EA\u30B9\u30C8\u30BF\u30A4\u30C8\u30EB\u3092\u7DE8\u96C6\u2026",
        "Mark cards in this list as complete": "\u3053\u306E\u30EA\u30B9\u30C8\u306B\u542B\u307E\u308C\u308B\u30AB\u30FC\u30C9\u3092\u5B8C\u4E86\u3068\u3057\u3066\u30DE\u30FC\u30AF\u3059\u308B",
        "Add list": "\u30EA\u30B9\u30C8\u3092\u8FFD\u52A0",
        "Add a list": "\u30EA\u30B9\u30C8\u3092\u8FFD\u52A0",
        "Move list": "\u30EA\u30B9\u30C8\u3092\u79FB\u52D5",
        Close: "\u9589\u3058\u308B",
        "Are you sure you want to delete this list and all its cards?": "\u3053\u306E\u30EA\u30B9\u30C8\u3068\u542B\u307E\u308C\u308B\u3059\u3079\u3066\u306E\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u304B\b\uFF1F",
        "Yes, delete list": "\u306F\u3044\u3001\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3057\u307E\u3059",
        "Are you sure you want to archive this list and all its cards?": "\u3053\u306E\u30EA\u30B9\u30C8\u3068\u542B\u307E\u308C\u308B\u3059\u3079\u3066\u306E\u30AB\u30FC\u30C9\u3092\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u307E\u3059\u304B\uFF1F",
        "Yes, archive list": "\u306F\u3044\u3001\u30EA\u30B9\u30C8\u3092\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u307E\u3059",
        "Are you sure you want to archive all cards in this list?": "\u3053\u306E\u30EA\u30B9\u30C8\u306B\u542B\u307E\u308C\u308B\u3059\u3079\u3066\u306E\u30AB\u30FC\u30C9\u3092\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u307E\u3059\u304B\uFF1F",
        "Yes, archive cards": "\u306F\u3044\u3001\u30AB\u30FC\u30C9\u3092\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u307E\u3059",
        "Edit list": "\u30EA\u30B9\u30C8\u3092\u7DE8\u96C6",
        "Archive cards": "\u30AB\u30FC\u30C9\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
        "Archive list": "\u30EA\u30B9\u30C8\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
        "Delete list": "\u30EA\u30B9\u30C8\u3092\u524A\u9664",
        "Unable to find": "\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
        "Open in default app": "\u30C7\u30D5\u30A9\u30EB\u30C8\u30A2\u30D7\u30EA\u3067\u958B\u304F"
    },
    tb = gA;
var yA = {
        "Open as kanban board": "\uCE78\uBC18 \uBCF4\uB4DC\uB85C \uC5F4\uAE30",
        "Create new board": "\uC0C8 \uBCF4\uB4DC \uB9CC\uB4E4\uAE30",
        "Archive completed cards in active board": "\uD65C\uC131 \uBCF4\uB4DC\uC5D0\uC11C \uC644\uB8CC\uB41C \uCE74\uB4DC \uBCF4\uAD00",
        "Error: current file is not a Kanban board": "\uC5D0\uB7EC: \uD604\uC7AC \uD30C\uC77C\uC740 \uCE78\uBC18 \uBCF4\uB4DC\uAC00 \uC544\uB2D9\uB2C8\uB2E4.",
        "Convert empty note to Kanban": "\uBE48 \uB178\uD2B8\uB97C \uCE78\uBC18 \uBCF4\uB4DC\uB85C \uBCC0\uD658",
        "Error: cannot create Kanban, the current note is not empty": "\uC5D0\uB7EC: \uCE78\uBC18\uC744 \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD604\uC7AC \uB178\uD2B8\uAC00 \uBE44\uC5B4\uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
        "New kanban board": "\uC0C8 \uBCF4\uB4DC \uB9CC\uB4E4\uAE30",
        "Untitled Kanban": "\uC774\uB984 \uC5C6\uB294 \uBCF4\uB4DC",
        "Toggle between Kanban and markdown mode": "\uCE78\uBC18 \uBAA8\uB4DC\uC640 \uB9C8\uD06C\uB2E4\uC6B4 \uBAA8\uB4DC \uC804\uD658",
        "Open as markdown": "\uB9C8\uD06C\uB2E4\uC6B4\uC73C\uB85C \uC5F4\uAE30",
        "Open board settings": "\uBCF4\uB4DC \uC124\uC815 \uC5F4\uAE30",
        "Archive completed cards": "\uC644\uB8CC\uB41C \uCE74\uB4DC \uBCF4\uAD00",
        "Something went wrong": "\uC54C \uC218 \uC5C6\uB294 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",
        "You may wish to open as markdown and inspect or edit the file.": "\uB9C8\uD06C\uB2E4\uC6B4\uC73C\uB85C \uC5F4\uC5B4 \uD30C\uC77C\uC744 \uAC80\uC0AC\uD558\uAC70\uB098 \uD3B8\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "Are you sure you want to archive all completed cards on this board?": "\uC815\uB9D0 \uC774 \uBCF4\uB4DC\uC758 \uBAA8\uB4E0 \uC644\uB8CC\uB41C \uCE74\uB4DC\uB97C \uBCF4\uAD00\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
        Complete: "\uC644\uB8CC\uB428",
        Archive: "\uBCF4\uAD00\uB428",
        "Invalid Kanban file: problems parsing frontmatter": "\uC798\uBABB\uB41C \uCE78\uBC18 \uD30C\uC77C: \uD504\uB860\uD2B8\uB9E4\uD130 \uD30C\uC2F1 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",
        "I don't know how to interpret this line:": "\uC774 \uC904\uC744 \uD574\uC11D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4:",
        Untitled: "\uC81C\uBAA9 \uC5C6\uC74C",
        "Note: No template plugins are currently enabled.": "\uB178\uD2B8: \uD604\uC7AC \uD15C\uD50C\uB9BF \uD50C\uB7EC\uADF8\uC778\uC774 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
        default: "\uAE30\uBCF8",
        "Search...": "\uAC80\uC0C9\uD558\uAE30...",
        "New line trigger": "\uC0C8 \uC904 \uB9CC\uB4E4\uAE30",
        "Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.": "Enter \uB610\uB294 Shift + Enter \uC911 \uC5B4\uB290 \uB2E8\uCD95\uD0A4\uB85C \uC0C8 \uC904\uB85C \uB118\uC5B4\uAC08\uC9C0 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uC120\uD0DD\uD558\uC9C0 \uC54A\uC740 \uB2E8\uCD95\uD0A4 (\uB9CC\uC57D Enter\uB97C \uC120\uD0DD\uD588\uB2E4\uBA74 Shift + Enter) \uB294 \uC9C4\uD589\uC911\uC778 \uCE74\uB4DC \uB610\uB294 \uBAA9\uB85D\uC758 \uC0DD\uC131 \uBC0F \uC218\uC815\uC744 \uC644\uB8CC\uD569\uB2C8\uB2E4.",
        "Shift + Enter": "Shift + Enter",
        Enter: "Enter",
        "Prepend / append new cards": "\uC0C8\uB85C\uC6B4 \uCE74\uB4DC\uB97C \uCD94\uAC00\uD560 \uC704\uCE58",
        "This setting controls whether new cards are added to the beginning or end of the list.": "\uC0C8\uB85C\uC6B4 \uCE74\uB4DC\uB97C \uCD94\uAC00\uD558\uB294 \uBC84\uD2BC\uC774 \uB9E8 \uC704\uC5D0 \uCD94\uAC00\uB420\uC9C0 \uB9E8 \uC544\uB798\uC5D0 \uCD94\uAC00\uB420\uC9C0 \uC124\uC815\uD569\uB2C8\uB2E4.",
        Prepend: "\uC0C1\uB2E8",
        "Prepend (compact)": "\uC0C1\uB2E8 (\uC791\uC740 \uBC84\uD2BC)",
        Append: "\uD558\uB2E8",
        "These settings will take precedence over the default Kanban board settings.": "\uC774 \uC124\uC815\uC740 \uAE30\uBCF8 \uCE78\uBC18 \uBCF4\uB4DC \uC124\uC815\uBCF4\uB2E4 \uC6B0\uC120\uD569\uB2C8\uB2E4.",
        "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.": "\uAE30\uBCF8 \uCE78\uBC18 \uBCF4\uB4DC \uC124\uC815\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uC124\uC815\uC740 \uBCF4\uB4DC\uBCC4\uB85C \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "Note template": "\uB178\uD2B8 \uD15C\uD50C\uB9BF",
        "This template will be used when creating new notes from Kanban cards.": "\uC774 \uD15C\uD50C\uB9BF\uC740 \uCE78\uBC18 \uCE74\uB4DC\uC5D0\uC11C \uC0C8 \uB178\uD2B8\uB97C \uB9CC\uB4E4 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",
        "No template": "\uD15C\uD50C\uB9BF \uC5C6\uC74C",
        "Note folder": "\uB178\uD2B8 \uD3F4\uB354",
        "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.": "\uCE74\uB4DC\uC5D0\uC11C \uB9CC\uB4E0 \uB178\uD2B8\uB294 \uC774 \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB9CC\uC57D \uBE44\uC5B4\uC788\uB2E4\uBA74, \uAE30\uBCF8 \uC704\uCE58\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.",
        "Default folder": "\uAE30\uBCF8 \uD3F4\uB354",
        "List width": "\uBAA9\uB85D \uB108\uBE44",
        "Enter a number to set the list width in pixels.": "\uD53D\uC140 \uB2E8\uC704\uB85C \uBAA9\uB85D\uC758 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
        "Maximum number of archived cards": "\uBCF4\uAD00\uB41C \uCE74\uB4DC\uC758 \uCD5C\uB300 \uC218",
        "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.": "\uBCF4\uAD00\uB41C \uCE74\uB4DC\uB294 \uB9C8\uD06C\uB2E4\uC6B4 \uBAA8\uB4DC\uC5D0\uC11C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC124\uC815\uC740 \uD55C\uB3C4\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uC774\uC804 \uCE74\uB4DC\uB97C \uC81C\uAC70\uD558\uAE30 \uC2DC\uC791\uD569\uB2C8\uB2E4. \uC774 \uAC12\uC744 -1\uB85C \uC124\uC815\uD558\uBA74 \uBCF4\uAD00\uD568\uC774 \uBB34\uD55C\uC815\uC73C\uB85C \uCEE4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "Display card checkbox": "\uCE74\uB4DC\uC5D0 \uCCB4\uD06C\uBC15\uC2A4 \uD45C\uC2DC",
        "When toggled, a checkbox will be displayed with each card": "\uD65C\uC131\uD654\uD558\uBA74 \uAC01 \uCE74\uB4DC\uC5D0 \uCCB4\uD06C\uBC15\uC2A4\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.",
        "Reset to default": "\uAE30\uBCF8\uAC12\uC73C\uB85C \uCD08\uAE30\uD654",
        "Date & Time": "\uB0A0\uC9DC \uBC0F \uC2DC\uAC04",
        "Date trigger": "\uB0A0\uC9DC \uC120\uD0DD\uAE30 \uD2B8\uB9AC\uAC70",
        "When this is typed, it will trigger the date selector": "\uC774 \uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uBA74 \uB0A0\uC9DC \uC120\uD0DD\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.",
        "Time trigger": "\uC2DC\uAC04 \uC120\uD0DD\uAE30 \uD2B8\uB9AC\uAC70",
        "When this is typed, it will trigger the time selector": "\uC774 \uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uBA74 \uC2DC\uAC04 \uC120\uD0DD\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.",
        "Date format": "\uB0A0\uC9DC \uD615\uC2DD",
        "This format will be used when saving dates in markdown.": "\uC774 \uD615\uC2DD\uC740 \uB9C8\uD06C\uB2E4\uC6B4\uC5D0\uC11C \uB0A0\uC9DC\uB97C \uC800\uC7A5\uD560 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",
        "For more syntax, refer to": "\uC790\uC138\uD55C \uBB38\uBC95\uC740 \uB2E4\uC74C\uC744 \uCC38\uC870\uD558\uC138\uC694.",
        "format reference": "\uD615\uC2DD \uCC38\uC870",
        "Your current syntax looks like this": "\uD604\uC7AC \uBB38\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.",
        "Time format": "\uC2DC\uAC04 \uD615\uC2DD",
        "Date display format": "\uB0A0\uC9DC \uD45C\uC2DC \uD615\uC2DD",
        "This format will be used when displaying dates in Kanban cards.": "\uC774 \uD615\uC2DD\uC740 \uCE74\uBC18 \uBCF4\uB4DC\uC5D0\uC11C \uB0A0\uC9DC\uB97C \uD45C\uC2DC\uD560\uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",
        "Show relative date": "\uB0A0\uC9DC\uB97C \uC0C1\uB300\uC801\uC73C\uB85C \uD45C\uC2DC",
        "Hide card counts in list titles": "\uBAA9\uB85D \uC81C\uBAA9\uC5D0 \uCE74\uB4DC \uC218 \uD45C\uC2DC \uC228\uAE30\uAE30",
        "When toggled, card counts are hidden from the list title": "\uD65C\uC131\uD654\uD558\uBA74 \uBAA9\uB85D \uC81C\uBAA9\uC5D0 \uCD1D \uCE74\uB4DC \uC218\uAC00 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
        "Link dates to daily notes": "\uC77C\uC77C \uB178\uD2B8\uC5D0 \uB0A0\uC9DC \uC5F0\uACB0",
        "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]": "\uD65C\uC131\uD654\uD558\uBA74 \uB0A0\uC9DC\uAC00 \uC77C\uC77C \uB178\uD2B8\uC5D0 \uC5F0\uACB0\uB429\uB2C8\uB2E4. \uC608: [[2021-04-26]]",
        "Add date and time to archived cards": "\uBCF4\uAD00\uB41C \uCE74\uB4DC\uC5D0 \uB0A0\uC9DC\uC640 \uC2DC\uAC04 \uCD94\uAC00",
        "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title": "\uD65C\uC131\uD654\uD558\uBA74 \uCE74\uB4DC\uAC00 \uBCF4\uAD00\uB420 \uB54C \uD604\uC7AC \uB0A0\uC9DC\uC640 \uC2DC\uAC04\uC774 \uCE74\uB4DC \uC81C\uBAA9\uC5D0 \uCD94\uAC00\uB429\uB2C8\uB2E4. \uC608: - [ ] 2021-05-14 10:00am \uB0B4 \uCE74\uB4DC \uC81C\uBAA9",
        "Add archive date/time after card title": "\uCE74\uB4DC \uC81C\uBAA9 \uB4A4\uC5D0 \uBCF4\uAD00\uB41C \uB0A0\uC9DC/\uC2DC\uAC04 \uCD94\uAC00",
        "When toggled, the archived date/time will be added after the card title, e.g.- [ ] My card title 2021-05-14 10:00am. By default, it is inserted before the title.": "\uD65C\uC131\uD654\uD558\uBA74 \uCE74\uB4DC \uC81C\uBAA9 \uB4A4\uC5D0 \uBCF4\uAD00\uB41C \uB0A0\uC9DC/\uC2DC\uAC04\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4. \uC608: - [ ] \uB0B4 \uCE74\uB4DC \uC81C\uBAA9 2021-05-14 10:00am. \uAE30\uBCF8\uC801\uC73C\uB85C \uC81C\uBAA9 \uC55E\uC5D0 \uC0BD\uC785\uB429\uB2C8\uB2E4.",
        "Archive date/time separator": "\uBCF4\uAD00\uB420 \uCE74\uB4DC\uC758 \uB0A0\uC9DC/\uC2DC\uAC04 \uAD6C\uBD84\uC790",
        "This will be used to separate the archived date/time from the title": "\uC774 \uAD6C\uBD84\uC790\uB294 \uCE74\uB4DC \uC81C\uBAA9\uACFC \uBCF4\uAD00\uB41C \uB0A0\uC9DC/\uC2DC\uAC04\uC744 \uAD6C\uBD84\uD558\uB294\uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",
        "Archive date/time format": "\uBCF4\uAD00\uB41C \uCE74\uB4DC\uC758 \uB0A0\uC9DC/\uC2DC\uAC04 \uD615\uC2DD",
        "Kanban Plugin": "\uCE78\uBC18 \uD50C\uB7EC\uADF8\uC778",
        "Tag colors": "\uD0DC\uADF8 \uC0C9\uC0C1 \uD45C\uC2DC",
        "Set colors for tags displayed in cards.": "\uCE74\uB4DC \uC81C\uBAA9 \uC544\uB798\uC5D0 \uD45C\uC2DC\uB418\uB294 \uD0DC\uADF8\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
        "Linked Page Metadata": "\uB9C1\uD06C\uB41C \uD398\uC774\uC9C0 \uBA54\uD0C0\uB370\uC774\uD130",
        "Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.": "\uCE74\uB4DC \uB0B4\uC5D0\uC11C \uCCAB \uBC88\uC9F8\uB85C \uB9C1\uD06C\uB41C \uB178\uD2B8\uC758 \uBA54\uD0C0\uB370\uC774\uD130\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC544\uB798\uC5D0 \uD45C\uC2DC\uD560 \uBA54\uD0C0\uB370\uC774\uD130 \uD0A4\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4. \uC120\uD0DD\uC801\uC73C\uB85C \uB808\uC774\uBE14\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC73C\uBA70, \uB808\uC774\uBE14\uC744 \uC644\uC804\uD788 \uC228\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "Board Header Buttons": "\uBCF4\uB4DC \uD5E4\uB354 \uBC84\uD2BC",
        "Calendar: first day of week": "\uB2EC\uB825: \uCCAB \uBC88\uC9F8 \uC694\uC77C",
        "Override which day is used as the start of the week": "\uD55C \uC8FC\uC758 \uC2DC\uC791\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uC694\uC77C\uC744 \uC7AC\uC815\uC758\uD569\uB2C8\uB2E4.",
        Sunday: "\uC77C\uC694\uC77C",
        Monday: "\uC6D4\uC694\uC77C",
        Tuesday: "\uD654\uC694\uC77C",
        Wednesday: "\uC218\uC694\uC77C",
        Thursday: "\uBAA9\uC694\uC77C",
        Friday: "\uAE08\uC694\uC77C",
        Saturday: "\uD1A0\uC694\uC77C",
        "Background color": "\uBC30\uACBD \uC0C9\uC0C1",
        Tag: "\uD0DC\uADF8",
        "Text color": "\uAE00\uC790 \uC0C9\uC0C1",
        "Date is": "\uB0A0\uC9DC\uB294",
        Today: "\uC624\uB298",
        "After now": "\uC774\uD6C4",
        "Before now": "\uC774\uC804",
        "Between now and": "\uACFC\uC758 \uC0AC\uC774",
        "Display date colors": "\uB0A0\uC9DC \uC0C9\uC0C1 \uD45C\uC2DC",
        "Set colors for dates displayed in cards based on the rules below.": "\uC544\uB798 \uCE74\uB4DC\uC5D0 \uD45C\uC2DC\uB41C \uB0A0\uC9DC\uC758 \uC0C9\uC0C1\uC744 \uC544\uB798\uC758 \uADDC\uCE59\uC5D0 \uB530\uB77C \uC124\uC815\uD558\uC138\uC694.",
        "Add date color": "\uB0A0\uC9DC \uC0C9\uC0C1 \uCD94\uAC00",
        "Metadata key": "\uBA54\uD0C0\uB370\uC774\uD130 \uD0A4",
        "Display label": "\uD45C\uC2DC\uB420 \uB77C\uBCA8",
        "Hide label": "\uB77C\uBCA8 \uC228\uAE30\uAE30",
        "Drag to rearrange": "\uB4DC\uB798\uADF8\uD558\uC5EC \uC7AC\uC815\uB82C",
        Delete: "\uC0AD\uC81C",
        "Add key": "\uD0A4 \uCD94\uAC00",
        "Field contains markdown": "\uD544\uB4DC\uC5D0 \uB9C8\uD06C\uB2E4\uC6B4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
        "Add tag color": "\uD0DC\uADF8 \uC0C9\uC0C1 \uCD94\uAC00",
        "More options": "\uB354 \uB9CE\uC740 \uC635\uC158",
        Cancel: "\uCDE8\uC18C",
        today: "\uC624\uB298",
        yesterday: "\uC5B4\uC81C",
        tomorrow: "\uB0B4\uC77C",
        "Change date": "\uB0A0\uC9DC \uBCC0\uACBD",
        "Change time": "\uC2DC\uAC04 \uBCC0\uACBD",
        "Card title...": "\uCE74\uB4DC \uC81C\uBAA9...",
        "Add card": "\uCE74\uB4DC \uCD94\uAC00",
        "Add a card": "\uCE74\uB4DC \uCD94\uAC00",
        "Edit card": "\uCE74\uB4DC \uC218\uC815",
        "New note from card": "\uCE74\uB4DC\uC5D0\uC11C \uC0C8 \uB178\uD2B8 \uB9CC\uB4E4\uAE30",
        "Archive card": "\uCE74\uB4DC \uBCF4\uAD00",
        "Delete card": "\uCE74\uB4DC \uC0AD\uC81C",
        "Edit date": "\uB0A0\uC9DC \uC218\uC815",
        "Add date": "\uB0A0\uC9DC \uCD94\uAC00",
        "Remove date": "\uB0A0\uC9DC \uC0AD\uC81C",
        "Edit time": "\uC2DC\uAC04 \uC218\uC815",
        "Add time": "\uC2DC\uAC04 \uCD94\uAC00",
        "Remove time": "\uC2DC\uAC04 \uC0AD\uC81C",
        "Duplicate card": "\uCE74\uB4DC \uBCF5\uC81C",
        "Split card": "\uCE74\uB4DC \uBD84\uD560",
        "Copy link to card": "\uCE74\uB4DC \uB9C1\uD06C \uBCF5\uC0AC",
        "Insert card before": "\uCE74\uB4DC \uC704\uC5D0 \uC0BD\uC785",
        "Insert card after": "\uCE74\uB4DC \uC544\uB798\uC5D0 \uC0BD\uC785",
        "Add label": "\uB77C\uBCA8 \uCD94\uAC00",
        "Move to top": "\uB9E8 \uC704\uB85C \uC774\uB3D9",
        "Move to bottom": "\uB9E8 \uC544\uB798\uB85C \uC774\uB3D9",
        "Enter list title...": "\uBAA9\uB85D \uC81C\uBAA9 \uC785\uB825...",
        "Mark cards in this list as complete": "\uC774 \uBAA9\uB85D\uC758 \uCE74\uB4DC\uB97C \uC644\uB8CC\uB428\uC73C\uB85C \uD45C\uC2DC",
        "Add list": "\uBAA9\uB85D \uCD94\uAC00",
        "Add a list": "\uBAA9\uB85D \uCD94\uAC00",
        "Move list": "\uBAA9\uB85D \uC774\uB3D9",
        Close: "\uB2EB\uAE30",
        "Are you sure you want to delete this list and all its cards?": "\uC815\uB9D0\uB85C \uC774 \uBAA9\uB85D\uACFC \uADF8 \uC548\uC758 \uBAA8\uB4E0 \uCE74\uB4DC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
        "Yes, delete list": "\uB124, \uBAA9\uB85D\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4.",
        "Are you sure you want to archive this list and all its cards?": "\uC815\uB9D0\uB85C \uC774 \uBAA9\uB85D\uACFC \uADF8 \uC548\uC758 \uBAA8\uB4E0 \uCE74\uB4DC\uB97C \uBCF4\uAD00\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
        "Yes, archive list": "\uB124, \uBAA8\uB450 \uBCF4\uAD00\uD569\uB2C8\uB2E4.",
        "Are you sure you want to archive all cards in this list?": "\uC815\uB9D0\uB85C \uC774 \uBAA9\uB85D\uC758 \uBAA8\uB4E0 \uCE74\uB4DC\uB97C \uBCF4\uAD00\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
        "Yes, archive cards": "\uB124, \uBAA8\uB450 \uBCF4\uAD00\uD569\uB2C8\uB2E4.",
        "Edit list": "\uBAA9\uB85D \uC218\uC815",
        "Archive cards": "\uCE74\uB4DC \uBCF4\uAD00",
        "Archive list": "\uBAA9\uB85D \uBCF4\uAD00",
        "Delete list": "\uBAA9\uB85D \uC0AD\uC81C",
        "Insert list before": "\uBAA9\uB85D\uC744 \uC67C\uCABD\uC5D0 \uC0DD\uC131",
        "Insert list after": "\uBAA9\uB85D\uC744 \uC624\uB978\uCABD\uC5D0 \uC0DD\uC131",
        "Sort by card text": "\uB0B4\uC6A9\uC73C\uB85C \uC815\uB82C",
        "Sort by date": "\uB0A0\uC9DC\uC21C\uC73C\uB85C \uC815\uB82C",
        "Unable to find": "\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
        "Open in default app": "\uAE30\uBCF8 \uC571\uC73C\uB85C \uC5F4\uAE30",
        Submit: "\uD655\uC778"
    },
    nb = yA;
var vA = {},
    rb = vA;
var wA = {},
    ib = wA;
var bA = {},
    ab = bA;
var DA = {},
    ob = DA;
var SA = {
        "Create new board": "Criar um novo quadro",
        "Archive completed cards in active board": "Arquivar cart\xF5es conclu\xEDdos no quadro ativo",
        "Error: current file is not a Kanban board": "Erro: o arquivo atual n\xE3o \xE9 um quadro Kanban",
        "Convert empty note to Kanban": "Converter nota vazia em Kanban",
        "Error: cannot create Kanban, the current note is not empty": "Erro: n\xE3o \xE9 poss\xEDvel criar o quadro Kanban, a nota atual n\xE3o est\xE1 vazia",
        "Untitled Kanban": "Kanban sem t\xEDtulo",
        "Toggle between Kanban and markdown mode": "Alternar entre os modos Kanban e Markdown",
        "Open as markdown": "Abrir como markdown",
        "Open board settings": "Abrir configura\xE7\xF5es do quadro Kanban",
        "Archive completed cards": "Arquivar cart\xF5es conclu\xEDdos",
        Complete: "Conclu\xEDdo",
        Archive: "Arquivado",
        "Note: No template plugins are currently enabled.": "Nota: N\xE3o h\xE1 plug-ins de modelo habilitados no momento.",
        default: "padr\xE3o",
        "Search...": "Pesquisar...",
        "These settings will take precedence over the default Kanban board settings.": "Essas configura\xE7\xF5es sobrescrever\xE3o as configura\xE7\xF5es padr\xE3o do quadro Kanban",
        "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.": "Defina as configura\xE7\xF5es padr\xE3o do quadro Kanban. Cada quadro Kanban pode ter sua pr\xF3pria configura\xE7\xE3o.",
        "Note template": "Modelo de nota",
        "This template will be used when creating new notes from Kanban cards.": "Este modelo ser\xE1 usado quando uma nova nota Kanban for criada.",
        "No template": "Sem modelo",
        "Note folder": "Pasta de notas",
        "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.": "As notas criadas pelos links dos cart\xF5es Kanban ser\xE3o colocadas nesta pasta. Se estiver em branco, ser\xE3o colocadas no local configurado como padr\xE3o deste cofre.",
        "Default folder": "Pasta padr\xE3o",
        "Maximum number of archived cards": "Quantidade m\xE1xima de cart\xF5es arquivados",
        "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.": "Os cart\xF5es arquivados podem ser vistos no modo Markdown. Esta configura\xE7\xE3o excluir\xE1 os cart\xF5es antigos assim que o limite for atingido. Inserir o valor -1 retira o limite para cart\xF5es arquivados.",
        "Display card checkbox": "Exibe uma caixa de sele\xE7\xE3o do cart\xE3o",
        "When toggled, a checkbox will be displayed with each card": "Quando ativada, uma caixa de sele\xE7\xE3o ser\xE1 exibida em cada cart\xE3o.",
        "Reset to default": "Redefinir configura\xE7\xF5es padr\xE3o",
        "Date & Time": "Data e Hora",
        "Date trigger": "Gatilho de data",
        "When this is typed, it will trigger the date selector": "Quando este caractere \xE9 digitado, o seletor de data \xE9 exibido.",
        "Time trigger": "Gatilho de hora",
        "When this is typed, it will trigger the time selector": "Quando este caractere \xE9 digitado, o seletor de hora \xE9 exibido.",
        "Date format": "Formado da data",
        "This format will be used when saving dates in markdown.": "Este formato ser\xE1 usado quando datas forem armazenadas no Markdown.",
        "For more syntax, refer to": "Para mais informa\xE7\xF5es sobre esta sintaxe, consulte os",
        "format reference": "modelos de formato.",
        "Your current syntax looks like this": "Sua atual sintaxe est\xE1 assim",
        "Time format": "Formato da hora",
        "Date display format": "Formato de exibi\xE7\xE3o da data",
        "This format will be used when displaying dates in Kanban cards.": "Este ser\xE1 o formato das datas exibido nos cart\xF5es do Kanban.",
        "Show relative date": "Exibir datas relativas",
        "Link dates to daily notes": "Vincular datas a notas di\xE1rias",
        "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]": "Ao ativar, as datas ser\xE3o vinculadas \xE0s notas di\xE1rias. Ex.: [[2021-04-26]]",
        "Add date and time to archived cards": "Adicionar data e hora aos cart\xF5es arquivados",
        "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title": "Quando ativada, a data e a hora atuais ser\xE3o adicionadas ao in\xEDcio de um cart\xE3o quando ele for arquivado. Ex.: - [] 2021-05-14 10:00 T\xEDtulo do meu cart\xE3o",
        "Archive date/time separator": "Separador de data/hora do arquivo",
        "This will be used to separate the archived date/time from the title": "Isso ser\xE1 usado para separar a data/hora arquivada do t\xEDtulo.",
        "Archive date/time format": "Formato de data/hora do arquivo",
        "Kanban Plugin": "Plugin Kanban",
        "Linked Page Metadata": "Metadados de p\xE1ginas 'lincadas'",
        "Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.": "Exibe metadados para a primeira nota 'lincada' em um cart\xE3o. Especifique abaixo quais metadados ser\xE3o exibidos. Um r\xF3tulo opcional pode ser fornecido e os r\xF3tulos podem ser ocultados completamente.",
        "Metadata key": "Metadado",
        "Display label": "Descri\xE7\xE3o personalizada",
        "Hide label": "Ocultar",
        "Drag to rearrange": "Arraste para reorganizar",
        Delete: "Excluir",
        "Add key": "Adicionar metadado",
        "More options": "Mais op\xE7\xF5es",
        Cancel: "Cancelar",
        today: "hoje",
        yesterday: "ontem",
        tomorrow: "amanh\xE3",
        "Change date": "Alterar data",
        "Change time": "Mudar hora",
        "Card title...": "T\xEDtulo do item...",
        "Add card": "Adicionar Item",
        "Add a card": "Adicione um cart\xE3o",
        "Edit card": "Editar cart\xE3o",
        "New note from card": "Nova nota do cart\xE3o",
        "Archive card": "Arquivar cart\xE3o",
        "Delete card": "Excluir cart\xE3o",
        "Edit date": "Editar data",
        "Add date": "Adicionar data",
        "Remove date": "Remover data",
        "Edit time": "Editar hora",
        "Add time": "Adicionar hora",
        "Remove time": "Remover hora",
        "Duplicate card": "Duplicate card",
        "Enter list title...": "Insira o t\xEDtulo da lista...",
        "Mark cards in this list as complete": "Marcar os itens nesta lista como conclu\xEDdos",
        "Add list": "Adicionar lista",
        "Add a list": "Adicionar uma lista",
        "Move list": "Mover lista",
        Close: "Fechar",
        "Are you sure you want to delete this list and all its cards?": "Tem certeza de que deseja excluir esta lista e todos os seus cart\xF5es?",
        "Yes, delete list": "Sim, excluir esta lista",
        "Are you sure you want to archive this list and all its cards?": "Tem certeza de que deseja arquivar esta lista e todos os seus cart\xF5es?",
        "Yes, archive list": "Sim, arquivar esta lista",
        "Are you sure you want to archive all cards in this list?": "Tem certeza de que deseja arquivar todos os cart\xF5es desta lista?",
        "Yes, archive cards": "Sim, arquivar cart\xF5es",
        "Edit list": "Editar lista",
        "Archive cards": "Arquivar cart\xF5es",
        "Archive list": "Arquivar lista",
        "Delete list": "Excluir lista"
    },
    sb = SA;
var EA = {},
    lb = EA;
var kA = {
        "Open as kanban board": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u043A Kanban-\u0434\u043E\u0441\u043A\u0443",
        "Create new board": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0434\u043E\u0441\u043A\u0443",
        "Archive completed cards in active board": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0434\u043E\u0441\u043A\u0435",
        "Error: current file is not a Kanban board": "\u041E\u0448\u0438\u0431\u043A\u0430: \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0444\u0430\u0439\u043B \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F Kanban-\u0434\u043E\u0441\u043A\u043E\u0439",
        "Convert empty note to Kanban": "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0443\u0441\u0442\u0443\u044E \u0437\u0430\u043C\u0435\u0442\u043A\u0443 \u0432 Kanban",
        "Error: cannot create Kanban, the current note is not empty": "\u041E\u0448\u0438\u0431\u043A\u0430: \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C Kanban, \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0430 \u043D\u0435 \u043F\u0443\u0441\u0442\u0430",
        "New kanban board": "\u041D\u043E\u0432\u0430\u044F Kanban-\u0434\u043E\u0441\u043A\u0430",
        "Untitled Kanban": "\u0411\u0435\u0437\u044B\u043C\u044F\u043D\u043D\u0430\u044F Kanban-\u0434\u043E\u0441\u043A\u0430",
        "Toggle between Kanban and markdown mode": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043C\u0435\u0436\u0434\u0443 Kanban \u0438 markdown \u0440\u0435\u0436\u0438\u043C\u0430\u043C\u0438",
        "Open as markdown": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u043A markdown",
        "Open board settings": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u043A\u0438",
        "Archive completed cards": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        "Something went wrong": "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A",
        "You may wish to open as markdown and inspect or edit the file.": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u0430\u0439\u043B \u043A\u0430\u043A markdown \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0438\u043B\u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0435\u0433\u043E.",
        "Are you sure you want to archive all completed cards on this board?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u0451\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u044D\u0442\u043E\u0439 \u0434\u043E\u0441\u043A\u0435?",
        Complete: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E",
        Archive: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
        "Invalid Kanban file: problems parsing frontmatter": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u0430\u0439\u043B Kanban: \u043D\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044F \u043F\u0430\u0440\u0441\u0438\u043D\u0433 frontmatter",
        "I don't know how to interpret this line:": "\u042F \u043D\u0435 \u0437\u043D\u0430\u044E, \u043A\u0430\u043A \u0438\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u0441\u0442\u0440\u043E\u043A\u0443:",
        Untitled: "\u0411\u0435\u0437 \u0438\u043C\u0435\u043D\u0438",
        "Note: No template plugins are currently enabled.": "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435: \u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0438 \u043E\u0434\u0438\u043D \u043F\u043B\u0430\u0433\u0438\u043D \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D.",
        default: "\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
        "Search...": "\u041D\u0430\u0439\u0442\u0438...",
        "New line trigger": "\u0422\u0440\u0438\u0433\u0433\u0435\u0440 \u043D\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438",
        "Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435, \u0431\u0443\u0434\u0435\u0442 \u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Enter \u0438\u043B\u0438 Shift+Enter. \u041F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0432\u044B \u0432\u044B\u0431\u0435\u0440\u0435\u0442\u0435, \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u0432.",
        "Shift + Enter": "Shift + Enter",
        Enter: "Enter",
        "Prepend / append new cards": "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A",
        "This setting controls whether new cards are added to the beginning or end of the list.": "\u042D\u0442\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u043D\u043E\u0432\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A, \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u0438\u043B\u0438 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0441\u043F\u0438\u0441\u043A\u0430.",
        Prepend: "\u0412 \u043D\u0430\u0447\u0430\u043B\u0435",
        "Prepend (compact)": "\u0412 \u043D\u0430\u0447\u0430\u043B\u0435 (\u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E)",
        Append: "\u0412 \u043A\u043E\u043D\u0446\u0435",
        "These settings will take precedence over the default Kanban board settings.": "\u042D\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u043C\u0435\u0442\u044C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u043D\u0430\u0434 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438 \u0434\u043E\u0441\u043A\u0438 Kanban \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E.",
        "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u043A\u0438 Kanban \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E. \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0434\u043E\u0441\u043A\u0438.",
        "Note template": "\u0428\u0430\u0431\u043B\u043E\u043D \u0437\u0430\u043C\u0435\u0442\u043A\u0438",
        "This template will be used when creating new notes from Kanban cards.": "\u042D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A Kanban.",
        "No template": "\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u0430",
        "Note folder": "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043C\u0435\u0442\u043E\u043A",
        "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.": "\u0412 \u044D\u0442\u0443 \u043F\u0430\u043F\u043A\u0443 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u044B \u0437\u0430\u043C\u0435\u0442\u043A\u0438, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A Kanban. \u0415\u0441\u043B\u0438 \u043F\u043E\u043B\u0435 \u043F\u0443\u0441\u0442\u043E\u0435, \u043E\u043D\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u044B \u0432 \u043F\u0430\u043F\u043A\u0443 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430.",
        "Default folder": "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
        "List width": "\u0428\u0438\u0440\u0438\u043D\u0430 \u0441\u043F\u0438\u0441\u043A\u0430",
        "Enter a number to set the list width in pixels.": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0448\u0438\u0440\u0438\u043D\u0443 \u0441\u043F\u0438\u0441\u043A\u0430 \u0432 \u043F\u0438\u043A\u0441\u0435\u043B\u044F\u0445.",
        "Maximum number of archived cards": "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A",
        "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 markdown. \u042D\u0442\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430\u0447\u043D\u0435\u0442 \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0441\u0442\u0430\u0440\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u043E\u0441\u043B\u0435 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u043B\u0438\u043C\u0438\u0442\u0430. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u044D\u0442\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0430 -1 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0430\u0440\u0445\u0438\u0432\u0443 \u0434\u043E\u0441\u043A\u0438 \u0440\u0430\u0441\u0442\u0438 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E.",
        "Display card checkbox": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0444\u043B\u0430\u0436\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        "When toggled, a checkbox will be displayed with each card": "\u041A\u043E\u0433\u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u0444\u043B\u0430\u0436\u043E\u043A",
        "Reset to default": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        "Date & Time": "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
        "Date trigger": "\u0422\u0440\u0438\u0433\u0433\u0435\u0440 \u0434\u0430\u0442\u044B",
        "When this is typed, it will trigger the date selector": "\u0412\u0432\u043E\u0434 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442 \u0432\u044B\u0431\u043E\u0440 \u0434\u0430\u0442\u044B",
        "Time trigger": "\u0422\u0440\u0438\u0433\u0433\u0435\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
        "When this is typed, it will trigger the time selector": "\u0412\u0432\u043E\u0434 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442 \u0432\u044B\u0431\u043E\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
        "Date format": "\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B",
        "This format will be used when saving dates in markdown.": "\u042D\u0442\u043E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0434\u0430\u0442 \u0432 markdown.",
        "For more syntax, refer to": "\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430",
        "format reference": "\u0441\u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0443",
        "Your current syntax looks like this": "\u0412\u0430\u0448 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441 \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0442\u0430\u043A",
        "Time format": "\u0424\u043E\u0440\u043C\u0430\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
        "Date display format": "\u0424\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u043A\u0430\u0437\u0430 \u0434\u0430\u0442\u044B",
        "This format will be used when displaying dates in Kanban cards.": "\u042D\u0442\u043E\u0442 \u0444\u043E\u0440\u043C\u0430\u0442 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D \u043F\u0440\u0438 \u043F\u043E\u043A\u0430\u0437\u0435 \u0434\u0430\u0442 \u0432 Kanban-\u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u0445.",
        "Show relative date": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0434\u0430\u0442\u0443",
        "Hide card counts in list titles": "\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0451\u0442\u0447\u0438\u043A\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430\u0445 \u0441\u043F\u0438\u0441\u043A\u0430",
        "When toggled, card counts are hidden from the list title": "\u041A\u043E\u0433\u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u0441\u0447\u0451\u0442\u0447\u0438\u043A\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0441\u043A\u0440\u044B\u0442\u044B \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430\u0445 \u0441\u043F\u0438\u0441\u043A\u0430",
        "Link dates to daily notes": "\u0421\u0432\u044F\u0437\u044B\u0432\u0430\u0442\u044C \u0434\u0430\u0442\u044B \u0441 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u043C\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u043C\u0438",
        "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]": "\u041A\u043E\u0433\u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u0434\u0430\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, [[2021-04-26]]",
        "Add date and time to archived cards": "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F \u043A \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u043C",
        "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title": "\u041A\u043E\u0433\u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0430 \u0437\u0430\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, - [ ] 2021-05-14 10:00am \u041C\u043E\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        "Add archive date/time after card title": "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u0430\u0442\u0443/\u0432\u0440\u0435\u043C\u044F \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        "When toggled, the archived date/time will be added after the card title, e.g.- [ ] My card title 2021-05-14 10:00am. By default, it is inserted before the title.": "\u041A\u043E\u0433\u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, - [ ] \u041C\u043E\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 2021-05-14 10:00am. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C.",
        "Archive date/time separator": "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0434\u0430\u0442\u044B/\u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
        "This will be used to separate the archived date/time from the title": "\u0411\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u0442\u044B/\u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430",
        "Archive date/time format": "\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B/\u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
        "Kanban Plugin": "\u041F\u043B\u0430\u0433\u0438\u043D Kanban",
        "Tag colors": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430 \u043C\u0435\u0442\u043E\u043A",
        "Set colors for tags displayed in cards.": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u0430 \u0434\u043B\u044F \u043C\u0435\u0442\u043E\u043A \u043F\u043E\u0434 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430\u043C\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A.",
        "Linked Page Metadata": "\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
        "Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.": "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u0435\u0440\u0432\u043E\u0439 \u0437\u0430\u043C\u0435\u0442\u043A\u0438, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u043E\u0439 \u0441 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u043E\u0439. \u041D\u0438\u0436\u0435 \u0443\u043A\u0430\u0436\u0438\u0442\u0435, \u043A\u0430\u043A\u0438\u0435 \u043A\u043B\u044E\u0447\u0438 \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C. \u041C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u0435\u0442\u043A\u0443, \u043B\u0438\u0431\u043E \u0441\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u0442\u043A\u0438 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E.",
        "Board Header Buttons": "\u041A\u043D\u043E\u043F\u043A\u0438 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0434\u043E\u0441\u043A\u0438",
        "Calendar: first day of week": "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C: \u043F\u0435\u0440\u0432\u044B\u0439 \u0434\u0435\u043D\u044C \u043D\u0435\u0434\u0435\u043B\u0438",
        "Override which day is used as the start of the week": "\u0423\u043A\u0430\u0436\u0438\u0442\u0435, \u043A\u0430\u043A\u043E\u0439 \u0434\u0435\u043D\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u043D\u0430\u0447\u0430\u043B\u043E \u043D\u0435\u0434\u0435\u043B\u0438",
        Sunday: "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
        Monday: "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
        Tuesday: "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
        Wednesday: "\u0421\u0440\u0435\u0434\u0430",
        Thursday: "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
        Friday: "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
        Saturday: "\u0421\u0443\u0431\u0431\u043E\u0442\u0430",
        "Background color": "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
        Tag: "\u041C\u0435\u0442\u043A\u0430",
        "Text color": "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430",
        "Date is": "\u0414\u0430\u0442\u0430",
        Today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
        "After now": "\u041F\u043E\u0441\u043B\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430",
        "Before now": "\u0414\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430",
        "Between now and": "\u041C\u0435\u0436\u0434\u0443 \u0441\u0435\u0439\u0447\u0430\u0441 \u0438",
        "Display date colors": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430 \u0434\u0430\u0442\u044B",
        "Set colors for dates displayed in cards based on the rules below.": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u0430 \u0434\u043B\u044F \u0434\u0430\u0442\u044B, \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0439 \u043F\u043E\u0434 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u043E\u0439, \u0431\u0430\u0437\u0438\u0440\u0443\u044F\u0441\u044C \u043D\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445 \u043D\u0438\u0436\u0435",
        "Add date color": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0432\u0435\u0442 \u0434\u0430\u0442\u044B",
        "Metadata key": "\u041A\u043B\u044E\u0447 \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445",
        "Display label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u044F\u0440\u044B\u043B\u043A",
        "Hide label": "\u0421\u043F\u0440\u044F\u0442\u0430\u0442\u044C \u044F\u0440\u043B\u044B\u043A",
        "Drag to rearrange": "\u041F\u043E\u0442\u044F\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0438\u0442\u044C",
        Delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        "Add key": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043B\u044E\u0447",
        "Field contains markdown": "\u041F\u043E\u043B\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 markdown",
        "Add tag color": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0432\u0435\u0442 \u043C\u0435\u0442\u043A\u0438",
        "More options": "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",
        Cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
        today: "\u0441\u0435\u0433\u043E\u0434\u043D\u044F",
        yesterday: "\u0432\u0447\u0435\u0440\u0430",
        tomorrow: "\u0437\u0430\u0432\u0442\u0440\u0430",
        "Change date": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u0442\u0443",
        "Change time": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F",
        "Card title...": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438...",
        "Add card": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
        "Add a card": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
        "Edit card": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
        "New note from card": "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0430 \u0438\u0437 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        "Archive card": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
        "Delete card": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
        "Edit date": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u0442\u0443",
        "Add date": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u0442\u0443",
        "Remove date": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0430\u0442\u0443",
        "Edit time": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F",
        "Add time": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F",
        "Remove time": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F",
        "Duplicate card": "\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
        "Split card": "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
        "Copy link to card": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",
        "Insert card before": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0434\u043E",
        "Insert card after": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u043F\u043E\u0441\u043B\u0435",
        "Add label": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044F\u0440\u043B\u044B\u043A",
        "Move to top": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u0432\u0435\u0440\u0445",
        "Move to bottom": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u0437",
        "Enter list title...": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u043F\u0438\u0441\u043A\u0430...",
        "Mark cards in this list as complete": "\u041E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u044D\u0442\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 \u043A\u0430\u043A \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435",
        "Add list": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
        "Add a list": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
        "Move list": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
        Close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        "Are you sure you want to delete this list and all its cards?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0438 \u0432\u0441\u0435 \u0435\u0433\u043E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438?",
        "Yes, delete list": "\u0414\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
        "Are you sure you want to archive this list and all its cards?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0438 \u0432\u0441\u0435 \u0435\u0433\u043E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438?",
        "Yes, archive list": "\u0414\u0430, \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
        "Are you sure you want to archive all cards in this list?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u044D\u0442\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435?",
        "Yes, archive cards": "\u0414\u0430, \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        "Edit list": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
        "Archive cards": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        "Archive list": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
        "Delete list": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
        "Insert list before": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u043E",
        "Insert list after": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0441\u043B\u0435",
        "Sort by card text": "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0442\u0435\u043A\u0441\u0442\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
        "Sort by date": "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0434\u0430\u0442\u0435",
        "Unable to find": "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438",
        "Open in default app": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
        Submit: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
    },
    ub = kA;
var xA = {},
    cb = xA;
var CA = {},
    Tu = CA;
var _A = {
        "Open as kanban board": "\u6253\u5F00\u4E3A\u770B\u677F",
        "Create new board": "\u521B\u5EFA\u65B0\u770B\u677F",
        "Archive completed cards in active board": "\u5728\u5F53\u524D\u770B\u677F\u4E2D\u5F52\u6863\u5DF2\u5B8C\u6210\u5361\u7247",
        "Error: current file is not a Kanban board": "\u9519\u8BEF\uFF1A\u5F53\u524D\u6587\u4EF6\u4E0D\u662F\u770B\u677F\u6587\u4EF6",
        "Convert empty note to Kanban": "\u8F6C\u6362\u7A7A\u767D\u7B14\u8BB0\u4E3A\u770B\u677F",
        "Error: cannot create Kanban, the current note is not empty": "\u9519\u8BEF\uFF1A\u65E0\u6CD5\u8F6C\u6362\u5F53\u524D\u6587\u4EF6\uFF0C\u5F53\u524D\u7B14\u8BB0\u4E0D\u662F\u7A7A\u767D\u7B14\u8BB0",
        "New kanban board": "\u65B0\u770B\u677F",
        "Untitled Kanban": "\u672A\u547D\u540D\u770B\u677F",
        "Toggle between Kanban and markdown mode": "\u5728\u770B\u677F\u548C Markdown \u6A21\u5F0F\u4E4B\u95F4\u8FDB\u884C\u5207\u6362",
        "Open as markdown": "\u6253\u5F00\u4E3A Markdown \u6587\u4EF6",
        "Open board settings": "\u6253\u5F00\u770B\u677F\u8BBE\u7F6E",
        "Archive completed cards": "\u5F52\u6863\u5DF2\u5B8C\u6210\u5361\u7247",
        "Something went wrong": "\u51FA\u4E86\u70B9\u95EE\u9898",
        "You may wish to open as markdown and inspect or edit the file.": "\u4F60\u53EF\u80FD\u5E0C\u671B\u4EE5 Markdown \u65B9\u5F0F\u6253\u5F00\uFF0C\u5E76\u68C0\u67E5\u6216\u7F16\u8F91\u8BE5\u6587\u4EF6\u3002",
        "Are you sure you want to archive all completed cards on this board?": "\u4F60\u786E\u5B9A\u8981\u5C06\u8FD9\u4E2A\u677F\u5757\u4E0A\u6240\u6709\u5DF2\u5B8C\u6210\u7684\u5361\u7247\u5F52\u6863\u5417\uFF1F",
        Complete: "\u5B8C\u6210",
        Archive: "\u5F52\u6863",
        "Invalid Kanban file: problems parsing frontmatter": "\u65E0\u6548\u7684\u770B\u677F\u6587\u4EF6\uFF1A\u89E3\u6790 frontmatter \u65F6\u51FA\u73B0\u95EE\u9898",
        "I don't know how to interpret this line:": "\u6211\u4E0D\u77E5\u9053\u5982\u4F55\u89E3\u8BFB\u8FD9\u53E5\u8BDD\uFF1A",
        Untitled: "\u672A\u547D\u540D",
        "Note: No template plugins are currently enabled.": "\u6CE8\u610F\uFF1A\u5F53\u524D\u6CA1\u6709\u542F\u7528\u6A21\u677F\u63D2\u4EF6",
        default: "\u9ED8\u8BA4",
        "Search...": "\u641C\u7D22\u2026\u2026",
        "New line trigger": "\u6362\u884C\u89E6\u53D1\u5668",
        "Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.": "\u9009\u62E9 Enter \u6216\u662F Shift+Enter \u6765\u521B\u5EFA\u65B0\u884C, \u672A\u9009\u7528\u7684\u5FEB\u6377\u952E\u5C06\u88AB\u7528\u4E8E\u521B\u5EFA\u5361\u7247\u548C\u5217\uFF0C\u4EE5\u53CA\u5B8C\u6210\u5361\u7247\u3001\u5217\u7684\u7F16\u8F91\u3002",
        "Shift + Enter": "Shift + Enter",
        Enter: "Enter",
        "Prepend / append new cards": "\u8FFD\u52A0\u65B0\u5361\u7247",
        "This setting controls whether new cards are added to the beginning or end of the list.": "\u8BBE\u7F6E\u65B0\u5361\u7247\u8FFD\u52A0\u5230\u5217\u5934\u90E8\u6216\u5C3E\u90E8\u3002",
        Prepend: "\u5934\u90E8",
        "Prepend (compact)": "\u5934\u90E8 (\u7D27\u51D1)",
        Append: "\u5C3E\u90E8",
        "These settings will take precedence over the default Kanban board settings.": "\u5F53\u524D\u770B\u677F\u8BBE\u7F6E\u5C06\u4F1A\u8986\u76D6\u9ED8\u8BA4\u7684\u770B\u677F\u8BBE\u7F6E\u3002",
        "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.": "\u66F4\u6539\u9ED8\u8BA4\u7684\u770B\u677F\u8BBE\u7F6E\u3002\u4E3A\u6BCF\u4E2A\u770B\u677F\u5355\u72EC\u8FDB\u884C\u8BBE\u7F6E\u5C06\u8986\u76D6\u9ED8\u8BA4\u8BBE\u7F6E\u3002",
        "Note template": "\u7B14\u8BB0\u6A21\u677F",
        "This template will be used when creating new notes from Kanban cards.": "\u4ECE\u770B\u677F\u5361\u7247\u521B\u5EFA\u65B0\u7B14\u8BB0\u65F6\u4F1A\u4F7F\u7528\u8BE5\u6A21\u677F\u3002",
        "No template": "\u6CA1\u6709\u6A21\u677F",
        "Note folder": "\u7B14\u8BB0\u5B58\u653E\u4F4D\u7F6E",
        "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.": "\u4ECE\u770B\u677F\u5361\u7247\u521B\u5EFA\u7684\u7B14\u8BB0\u4F1A\u653E\u7F6E\u5230\u8BE5\u6587\u4EF6\u5939\u4E2D\u3002\u5982\u679C\u4E3A\u7A7A\uFF0C\u7B14\u8BB0\u5C06\u4F1A\u653E\u7F6E\u5230 Obsidian \u7684\u9ED8\u8BA4\u6587\u4EF6\u5B58\u653E\u4F4D\u7F6E\u3002",
        "Default folder": "\u9ED8\u8BA4\u6587\u4EF6\u5939",
        "List width": "\u5217\u5BBD",
        "Enter a number to set the list width in pixels.": "\u8F93\u5165\u4E00\u4E2A\u50CF\u7D20\u503C\u6765\u8BBE\u7F6E\u5217\u7684\u5BBD\u5EA6",
        "Maximum number of archived cards": "\u5355\u4E2A\u770B\u677F\u5185\u5DF2\u5F52\u6863\u5361\u7247\u7684\u6700\u5927\u6570\u91CF",
        "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.": "\u5DF2\u5F52\u6863\u5361\u7247\u53EF\u4EE5\u5728 Markdown \u6A21\u5F0F\u4E0B\u67E5\u770B\u3002\u8BE5\u8BBE\u7F6E\u5C06\u4F7F\u5DF2\u5F52\u6863\u5361\u7247\u5728\u8FBE\u5230\u6700\u5927\u6570\u91CF\u65F6\u5220\u9664\u65E7\u5361\u3002\u8BBE\u7F6E\u4E3A -1 \u53EF\u4EE5\u6C38\u4E45\u4FDD\u7559\u6240\u6709\u5F52\u6863\u5361\u7247\u3002",
        "Display card checkbox": "\u5C55\u793A\u5361\u7247\u590D\u9009\u6846",
        "When toggled, a checkbox will be displayed with each card": "\u6253\u5F00\u65F6\uFF0C\u590D\u9009\u6846\u4F1A\u51FA\u73B0\u5728\u6BCF\u5F20\u5361\u7247\u4E0A",
        "Reset to default": "\u8FD8\u539F\u521D\u59CB\u8BBE\u7F6E",
        "Date & Time": "\u65E5\u671F\u548C\u65F6\u95F4",
        "Date trigger": "\u65E5\u671F\u89E6\u53D1\u6307\u4EE4",
        "When this is typed, it will trigger the date selector": "\u5F53\u5728\u770B\u677F\u5361\u7247\u4E2D\u8F93\u5165\u8FD9\u4E2A\u65F6\uFF0C\u4F1A\u89E6\u53D1\u4E00\u4E2A\u65E5\u671F\u9009\u62E9\u5668",
        "Time trigger": "\u65F6\u95F4\u89E6\u53D1\u6307\u4EE4",
        "When this is typed, it will trigger the time selector": "\u5F53\u5728\u770B\u677F\u5361\u7247\u4E2D\u8F93\u5165\u8FD9\u4E2A\u65F6\uFF0C\u4F1A\u89E6\u53D1\u4E00\u4E2A\u65F6\u95F4\u9009\u62E9\u5668",
        "Date format": "\u65E5\u671F\u683C\u5F0F",
        "This format will be used when saving dates in markdown.": "\u8FD9\u4E2A\u683C\u5F0F\u4F1A\u5728\u65E5\u671F\u4FDD\u5B58\u5230 Markdown \u683C\u5F0F\u65F6\u4F7F\u7528\u3002",
        "For more syntax, refer to": "\u66F4\u591A\u683C\u5F0F\uFF0C\u8BF7\u67E5\u770B",
        "format reference": "\u683C\u5F0F\u53C2\u8003",
        "Your current syntax looks like this": "\u4F60\u5F53\u524D\u8BBE\u7F6E\u7684\u683C\u5F0F\u4F1A\u662F",
        "Time format": "\u65F6\u95F4\u683C\u5F0F",
        "Date display format": "\u65E5\u671F\u5C55\u793A\u683C\u5F0F",
        "This format will be used when displaying dates in Kanban cards.": "\u770B\u677F\u5361\u7247\u4F1A\u4EE5\u8BE5\u683C\u5F0F\u5C55\u793A\u65E5\u671F\u3002",
        "Show relative date": "\u5C55\u793A\u76F8\u5BF9\u65E5\u671F",
        "Hide card counts in list titles": "\u5728\u5217\u6807\u9898\u4E0A\u9690\u85CF\u5361\u7247\u8BA1\u6570",
        "When toggled, card counts are hidden from the list title": "\u6253\u5F00\u65F6\uFF0C\u5217\u6807\u9898\u4E0A\u7684\u5361\u7247\u8BA1\u6570\u5C06\u9690\u85CF",
        "Link dates to daily notes": "\u94FE\u63A5\u65E5\u671F\u5230\u65E5\u8BB0",
        "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]": "\u6253\u5F00\u65F6\uFF0C\u65E5\u671F\u4F1A\u81EA\u52A8\u94FE\u63A5\u5230\u65E5\u8BB0\u9875\u9762\uFF0C\u4F8B\u5982[[2021-04-26]]",
        "Add date and time to archived cards": "\u6DFB\u52A0\u65E5\u671F\u548C\u65F6\u95F4\u5230\u5F52\u6863\u5361\u7247",
        "When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title": "\u6253\u5F00\u65F6\uFF0C\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4\u4F1A\u88AB\u6DFB\u52A0\u5230\u5F52\u6863\u5361\u7247\u7684 frontmatter \u4E0A\uFF0C\u4F8B\u5982\u201C- [ ] 2021-05-14 10:00am \u6211\u7684\u5361\u7247\u6807\u9898\u201D",
        "Archive date/time separator": "\u5F52\u6863\u65E5\u671F\u6216\u65F6\u95F4\u5206\u9694\u7B26Archive date/time separator",
        "This will be used to separate the archived date/time from the title": "\u7528\u4E8E\u5206\u9694\u6807\u9898\u4E0E\u5F52\u6863\u5361\u7247\u7684\u65E5\u671F\u6216\u65F6\u95F4",
        "Archive date/time format": "\u5F52\u6863\u65E5\u671F\u6216\u65F6\u95F4\u683C\u5F0F",
        "Kanban Plugin": "\u770B\u677F\u63D2\u4EF6",
        "Linked Page Metadata": "\u8FDE\u63A5\u7684\u9875\u9762\u5143\u6570\u636E",
        "Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.": "\u5C55\u793A\u5361\u7247\u4E2D\u7B2C\u4E00\u4E2A\u8FDE\u63A5\u6240\u5BF9\u5E94\u7684\u7B14\u8BB0\u5143\u6570\u636E\u3002\u8BF7\u5728\u4E0B\u65B9\u6307\u5B9A\u54EA\u4E9B\u5143\u6570\u636E\u53EF\u4EE5\u5C55\u793A\u3002\u4F60\u53EF\u4EE5\u9009\u62E9\u5C55\u793A\u54EA\u4E9B\u6807\u5FD7\uFF0C\u6240\u6709\u6807\u5FD7\u90FD\u53EF\u4EE5\u88AB\u9690\u85CF\u3002",
        "Board Header Buttons": "\u677F\u5934\u6309\u94AE",
        "Calendar: first day of week": "\u65E5\u5386\uFF1A\u4E00\u5468\u7684\u7B2C\u4E00\u5929",
        "Override which day is used as the start of the week": "\u8BBE\u7F6E\u54EA\u4E00\u5929\u4F5C\u4E3A\u4E00\u5468\u7684\u5F00\u59CB",
        Sunday: "\u5468\u65E5",
        Monday: "\u5468\u4E00",
        Tuesday: "\u5468\u4E8C",
        Wednesday: "\u5468\u4E09",
        Thursday: "\u5468\u56DB",
        Friday: "\u5468\u4E94",
        Saturday: "\u5468\u516D",
        "Metadata key": "\u5143\u6570\u636E\u53C2\u6570\u540D",
        "Display label": "\u5C55\u793A\u6807\u5FD7",
        "Hide label": "\u9690\u85CF\u6807\u5FD7",
        "Drag to rearrange": "\u62D6\u52A8\u4EE5\u91CD\u6392\u987A\u5E8F",
        Delete: "\u5220\u9664",
        "Add key": "\u6DFB\u52A0\u53C2\u6570\u540D",
        "Field contains markdown": "\u5B57\u6BB5\u5305\u542B Markdown",
        "More options": "\u66F4\u591A\u9009\u9879",
        Cancel: "\u53D6\u6D88",
        today: "\u4ECA\u5929",
        yesterday: "\u6628\u5929",
        tomorrow: "\u660E\u5929",
        "Change date": "\u66F4\u6539\u65E5\u671F",
        "Change time": "\u66F4\u6539\u65F6\u95F4",
        "Card title...": "\u5361\u7247\u6807\u9898\u2026\u2026",
        "Add card": "\u6DFB\u52A0",
        "Add a card": "\u6DFB\u52A0\u5361\u7247",
        "Edit card": "\u7F16\u8F91\u5361\u7247",
        "New note from card": "\u4ECE\u5361\u7247\u65B0\u5EFA\u7B14\u8BB0",
        "Archive card": "\u5F52\u6863\u5361\u7247",
        "Delete card": "\u5220\u9664\u5361\u7247",
        "Edit date": "\u7F16\u8F91\u65E5\u671F",
        "Add date": "\u6DFB\u52A0\u65E5\u671F",
        "Remove date": "\u79FB\u9664\u65E5\u671F",
        "Edit time": "\u7F16\u8F91\u65F6\u95F4",
        "Add time": "\u6DFB\u52A0\u65F6\u95F4",
        "Remove time": "\u79FB\u9664\u65F6\u95F4",
        "Duplicate card": "\u590D\u5236\u5361\u7247",
        "Split card": "\u5206\u79BB\u5361\u7247",
        "Copy link to card": "\u590D\u5236\u94FE\u63A5\u81F3\u5361\u7247",
        "Insert card before": "\u5728\u4E0A\u65B9\u63D2\u5165\u5361\u7247",
        "Insert card after": "\u5728\u4E0B\u65B9\u63D2\u5165\u5361\u7247",
        "Move to top": "\u79FB\u5230\u9876\u90E8",
        "Move to bottom": "\u79FB\u81F3\u5E95\u90E8",
        "Enter list title...": "\u8F93\u5165\u65B0\u7684\u5217\u6807\u9898\u2026\u2026",
        "Mark cards in this list as complete": "\u5C06\u8BE5\u5217\u8BBE\u7F6E\u4E3A\u5B8C\u6210\u5217",
        "Add list": "\u6DFB\u52A0",
        "Add a list": "\u6DFB\u52A0\u5217",
        "Move list": "\u79FB\u52A8\u5217",
        Close: "\u5173\u95ED",
        "Are you sure you want to delete this list and all its cards?": "\u4F60\u786E\u5B9A\u4F60\u8981\u5220\u9664\u6574\u5217\u4EE5\u53CA\u8BE5\u5217\u4E0B\u6240\u6709\u5361\u7247\u5417\uFF1F",
        "Yes, delete list": "\u662F\uFF0C\u5220\u9664\u5217",
        "Are you sure you want to archive this list and all its cards?": "\u4F60\u786E\u5B9A\u4F60\u8981\u5F52\u6863\u6574\u5217\u4EE5\u53CA\u8BE5\u5217\u4E0B\u6240\u6709\u5361\u7247\u5417\uFF1F",
        "Yes, archive list": "\u662F, \u5F52\u6863\u5217",
        "Are you sure you want to archive all cards in this list?": "\u4F60\u786E\u8BA4\u4F60\u8981\u5F52\u6863\u5F53\u524D\u5217\u7684\u6240\u6709\u5361\u7247\u5417\uFF1F",
        "Yes, archive cards": "\u662F\uFF0C\u5F52\u6863\u6240\u6709\u5361\u7247",
        "Edit list": "\u7F16\u8F91\u5217",
        "Archive cards": "\u5F52\u6863\u5361\u7247",
        "Archive list": "\u5F52\u6863\u5217",
        "Delete list": "\u5220\u9664\u5217",
        "Insert list before": "\u5728\u4E0A\u65B9\u63D2\u5165\u5217",
        "Insert list after": "\u5728\u4E0B\u65B9\u63D2\u5165\u5217",
        "Sort by card text": "\u4EE5\u5361\u7247\u6587\u672C\u6392\u5E8F",
        "Sort by date": "\u4EE5\u65E5\u671F\u6392\u5E8F",
        "Unable to find": "\u65E0\u6CD5\u627E\u5230",
        "Open in default app": "\u5728\u9ED8\u8BA4\u5E94\u7528\u4E2D\u6253\u5F00",
        Submit: "\u63D0\u4EA4"
    },
    db = _A;
var MA = {},
    fb = MA;
var TA = {
        ar: Kw,
        cz: jw,
        da: qw,
        de: Gw,
        en: yh,
        es: Jw,
        fr: Zw,
        hi: Qw,
        id: Xw,
        it: eb,
        ja: tb,
        ko: nb,
        nl: rb,
        no: ib,
        pl: ab,
        "pt-BR": sb,
        pt: ob,
        ro: lb,
        ru: ub,
        sq: cb,
        tr: Tu,
        uk: Tu,
        "zh-TW": fb,
        zh: db
    },
    hb = window.localStorage.getItem("language"),
    vh = TA[hb || "en"];

function R(e) {
    return vh || console.error("Error: kanban locale not found", hb), vh && vh[e] || yh[e]
}
var Ln = {
    prioritySymbols: {
        Highest: "\u{1F53A}",
        High: "\u23EB",
        Medium: "\u{1F53C}",
        Low: "\u{1F53D}",
        Lowest: "\u23EC",
        None: ""
    },
    startDateSymbol: "\u{1F6EB}",
    createdDateSymbol: "\u2795",
    scheduledDateSymbol: "\u23F3",
    dueDateSymbol: "\u{1F4C5}",
    doneDateSymbol: "\u2705",
    cancelledDateSymbol: "\u274C",
    recurrenceSymbol: "\u{1F501}",
    dependsOnSymbol: "\u26D4",
    idSymbol: "\u{1F194}"
};

function mb(e, t) {
    switch (e) {
        case "priority":
            return FA(t);
        case "start":
            return Ln.startDateSymbol;
        case "created":
            return Ln.createdDateSymbol;
        case "scheduled":
            return Ln.scheduledDateSymbol;
        case "due":
            return Ln.dueDateSymbol;
        case "completion":
            return Ln.doneDateSymbol;
        case "cancelled":
            return Ln.cancelledDateSymbol;
        case "repeat":
            return Ln.recurrenceSymbol;
        case "dependsOn":
            return Ln.dependsOnSymbol;
        case "id":
            return Ln.idSymbol
    }
    return e
}

function No(e) {
    switch (e) {
        case "priority":
            return R("Priority");
        case "start":
            return R("Start");
        case "created":
            return R("Created");
        case "scheduled":
            return R("Scheduled");
        case "due":
            return R("Due");
        case "completion":
            return R("Done");
        case "cancelled":
            return R("Cancelled");
        case "repeat":
            return R("Recurrence");
        case "dependsOn":
            return R("Depends on");
        case "id":
            return R("ID")
    }
    return e
}

function FA(e) {
    switch (e) {
        case "0":
            return Ln.prioritySymbols.Highest;
        case "1":
            return Ln.prioritySymbols.High;
        case "2":
            return Ln.prioritySymbols.Medium;
        case "4":
            return Ln.prioritySymbols.Low;
        case "5":
            return Ln.prioritySymbols.Lowest
    }
    return null
}

function IA(e) {
    switch (e) {
        case Ln.prioritySymbols.Highest:
            return "0";
        case Ln.prioritySymbols.High:
            return "1";
        case Ln.prioritySymbols.Medium:
            return "2";
        case Ln.prioritySymbols.Low:
            return "4";
        case Ln.prioritySymbols.Lowest:
            return "5"
    }
    return null
}

function wh() {
    return app.plugins.enabledPlugins.has("obsidian-tasks-plugin") ? app.plugins.plugins["obsidian-tasks-plugin"] : null
}

function bh() {
    var e;
    return (e = app.workspace.editorSuggest.suggests.find(t => t.settings && t.settings.taskFormat)) == null ? void 0 : e.settings
}

function Zn() {
    var n, i;
    let e = bh(),
        t = e == null ? void 0 : e.statusSettings;
    if (!t) return "x";
    let r = (n = t.coreStatuses) == null ? void 0 : n.find(a => a.type === "DONE");
    return r || (r = (i = t.customStatuses) == null ? void 0 : i.find(a => a.type === "DONE")), r ? r.symbol : "x"
}

function Iu() {
    var i, a;
    let e = bh(),
        t = e == null ? void 0 : e.statusSettings;
    if (!t) return " ";
    let r = Zn(),
        n = (i = t.coreStatuses) == null ? void 0 : i.find(o => o.nextStatusSymbol === r);
    return n || (n = (a = t.customStatuses) == null ? void 0 : a.find(o => o.nextStatusSymbol === r)), n ? n.symbol : " "
}

function pb(e, t) {
    var n, i, a;
    let r = wh();
    return r && (a = (i = (n = r.apiV1) == null ? void 0 : n.executeToggleTaskDoneCommand) == null ? void 0 : i.call(n, e, t.path)) != null ? a : null
}

function Ro(e, t) {
    var d, m;
    let r = wh();
    if (!r) return null;
    let n = `- [${e.data.checkChar}] `,
        i = e.data.titleRaw.split(/\n\r?/g),
        a = bh(),
        o = !!(a != null && a.recurrenceOnNextLine),
        s = 0,
        u = (m = (d = r.apiV1) == null ? void 0 : d.executeToggleTaskDoneCommand) == null ? void 0 : m.call(d, n + i[0], t.path);
    if (!u) return null;
    let l = [];
    return [u.split(/\n/g).map((h, g) => {
        (o && g === 0 || !o && g > 0) && (s = g);
        let y = h.match(/^- \[([^\]]+)\]/);
        return y != null && y[1] && l.push(y[1]), [h.replace(/^- \[[^\]]+\] */, ""), ...i.slice(1)].join(`
`)
    }), l, s]
}
var Fu = Object.freeze({
    "[": "]",
    "(": ")"
});

function AA(e, t) {
    let r = e.indexOf("::", t);
    if (!(r < 0)) return {
        key: e.substring(t, r).trim(),
        valueIndex: r + 2
    }
}

function OA(e, t, r, n) {
    let i = 0,
        a = !1;
    for (let o = t; o < e.length; o++) {
        let s = e.charAt(o);
        if (s == "\\") {
            a = !a;
            continue
        }
        if (a) {
            a = !1;
            continue
        }
        if (s == r ? i++ : s == n && i--, i < 0) return {
            value: e.substring(t, o).trim(),
            endIndex: o + 1
        };
        a = !1
    }
}

function LA(e, t) {
    let r = e.charAt(t),
        n = AA(e, t + 1);
    if (n === void 0) return;
    for (let a of Object.keys(Fu).concat(Object.values(Fu)))
        if (n.key.includes(a)) return;
    let i = OA(e, n.valueIndex, r, Fu[r]);
    if (i !== void 0) return {
        key: n.key,
        value: i.value,
        start: t,
        startValue: n.valueIndex,
        end: i.endIndex,
        wrapping: r
    }
}
var PA = /([🔺⏫🔼🔽⏬])\uFE0F?/u,
    NA = /🛫 *(\d{4}-\d{2}-\d{2})/u,
    RA = /➕ *(\d{4}-\d{2}-\d{2})/u,
    HA = /[⏳⌛] *(\d{4}-\d{2}-\d{2})/u,
    BA = /[📅📆🗓] *(\d{4}-\d{2}-\d{2})/u,
    VA = /✅ *(\d{4}-\d{2}-\d{2})/u,
    $A = /❌ *(\d{4}-\d{2}-\d{2})/u,
    UA = /⛔\uFE0F? *([a-zA-Z0-9-_]+)/u,
    WA = /🆔 *([a-zA-Z0-9-_]+)/u,
    YA = /🔁 *([a-zA-Z0-9; !]+)/u,
    yi = new Set(["priority", "start", "created", "scheduled", "due", "completion", "cancelled", "id", "dependsOn", "repeat"]),
    zA = [{
        regex: PA,
        key: "priority"
    }, {
        regex: NA,
        key: "start"
    }, {
        regex: RA,
        key: "created"
    }, {
        regex: HA,
        key: "scheduled"
    }, {
        regex: BA,
        key: "due"
    }, {
        regex: VA,
        key: "completion"
    }, {
        regex: $A,
        key: "cancelled"
    }, {
        regex: WA,
        key: "id"
    }, {
        regex: UA,
        key: "dependsOn"
    }, {
        regex: YA,
        key: "repeat"
    }];

function KA(e) {
    let t = [];
    for (let {
            regex: r,
            key: n
        }
        of zA) {
        let i = r.exec(e);
        if (!i) continue;
        let a = i[1],
            o = i.index + i[0].length;
        if (n === "priority") a = IA(a);
        else if (n === "repeat") {
            let s = a.length;
            a = Oe.fromText(a).toText(), o -= s - a.length
        }
        t.push({
            key: n,
            value: a,
            start: i.index,
            startValue: i.index + 1,
            end: o,
            wrapping: "emoji-shorthand"
        })
    }
    return t
}

function gb(e, t = !1) {
    let r = il(),
        n = wh(),
        i = [];
    if (r)
        for (let o of Object.keys(Fu)) {
            let s = e.indexOf(o);
            for (; s >= 0;) {
                let u = LA(e, s);
                if (!u) {
                    s = e.indexOf(o, s + 1);
                    continue
                }
                i.push(u), s = e.indexOf(o, u.end)
            }
        }
    n && t && (i = i.concat(KA(e))), i.sort((o, s) => o.start - s.start);
    let a = [];
    for (let o = 0; o < i.length; o++) {
        let s = i[o];
        (o == 0 || a[a.length - 1].end < s.start) && a.push(s)
    }
    return a
}

function il() {
    return app.plugins.enabledPlugins.has("dataview") ? app.plugins.plugins.dataview : null
}
var Eh = "kanban-plugin";

function Mr() {}
var Dh = new Map;

function $(e) {
    if (Dh.has(e)) return Dh.get(e);
    let t = `${Eh}__${e}`;
    return Dh.set(e, t), t
}

function et(e = 9) {
    return Math.random().toString(36).slice(2, 2 + e)
}

function Au(e, t, r, n, i, a, o) {
    var h, g;
    let s = un(t, r.slice(0, -1)),
        u = un(i, a.slice(0, -1)),
        l = (h = s == null ? void 0 : s.data) == null ? void 0 : h.shouldMarkItemsComplete,
        c = (g = u == null ? void 0 : u.data) == null ? void 0 : g.shouldMarkItemsComplete;
    if (!l && !c) return {
        next: o
    };
    let d = o.data.checked && o.data.checkChar === Zn();
    if (c === d) return {
        next: o
    };
    c && (o = (0, Sh.default)(o, {
        data: {
            checkChar: {
                $set: Iu()
            }
        }
    }));
    let m = Ro(o, n.file);
    if (m) {
        let [y, v, D] = m, I, C;
        return y.forEach((x, O) => {
            O === D ? I = n.getNewItem(x, v[O]) : C = n.getNewItem(x, v[O])
        }), {
            next: I,
            replacement: C
        }
    }
    return {
        next: (0, Sh.default)(o, {
            data: {
                checked: {
                    $set: c
                },
                checkChar: {
                    $set: c ? Zn() : " "
                }
            }
        })
    }
}

function Ou() {
    let e = $e.useRef(!1);
    return {
        oncompositionstart: () => {
            e.current = !0
        },
        oncompositionend: () => {
            e.current = !1
        },
        getShouldIMEBlockAction: () => e.current
    }
}
var jA = /<%/;
async function yb(e, t) {
    let r = t ? e.app.vault.getAbstractFileByPath(t) : null;
    if (r && r instanceof da.TFile) {
        let n = app.workspace.getActiveViewOfType(da.MarkdownView);
        try {
            (n == null ? void 0 : n.getMode()) !== "source" && await n.setState({
                ...n.getState(),
                mode: "source"
            }, {
                history: !1
            });
            let {
                templatesEnabled: i,
                templaterEnabled: a,
                templatesPlugin: o,
                templaterPlugin: s
            } = kh(e.app), u = await e.app.vault.read(r);
            if (i && a) return jA.test(u) ? await s.append_template_to_active_file(r) : await o.instance.insertTemplate(r);
            if (i) return await o.instance.insertTemplate(r);
            if (a) return await s.append_template_to_active_file(r);
            await e.app.vault.modify(e.app.workspace.getActiveFile(), u)
        } catch (i) {
            console.error(i), e.setError(i)
        }
    }
}

function ja(e) {
    var s, u, l, c, d;
    let t = e.internalPlugins.plugins,
        r = (s = t["daily-notes"]) == null ? void 0 : s.enabled,
        n = (u = t["daily-notes"]) == null ? void 0 : u.instance.options.format,
        i = (l = e.plugins.plugins["nldates-obsidian"]) == null ? void 0 : l.settings.format,
        a = (c = t.templates) == null ? void 0 : c.enabled,
        o = (d = t.templates) == null ? void 0 : d.instance.options.dateFormat;
    return r && n || i || a && o || "YYYY-MM-DD"
}

function Ho(e) {
    var a, o, s;
    let t = e.internalPlugins.plugins,
        r = (a = e.plugins.plugins["nldates-obsidian"]) == null ? void 0 : a.settings.timeFormat,
        n = (o = t.templates) == null ? void 0 : o.enabled,
        i = (s = t.templates) == null ? void 0 : s.instance.options.timeFormat;
    return r || n && i || "HH:mm"
}
var vb = /[\\^$.*+?()[\]{}|]/g,
    qA = RegExp(vb.source);

function Qn(e) {
    return e && qA.test(e) ? e.replace(vb, "\\$&") : e || ""
}

function kh(e) {
    var s;
    let t = e.internalPlugins.plugins.templates,
        r = t.enabled,
        n = e.plugins.plugins["templater-obsidian"],
        i = e.plugins.enabledPlugins.has("templater-obsidian"),
        a = n && ((s = this.app.plugins.plugins["templater-obsidian"].settings) == null ? void 0 : s.empty_file_template),
        o = r ? t.instance.options.folder : n ? n.settings.template_folder : void 0;
    return {
        templatesPlugin: t,
        templatesEnabled: r,
        templaterPlugin: n == null ? void 0 : n.templater,
        templaterEnabled: i,
        templaterEmptyFileTemplate: a,
        templateFolder: o
    }
}

function GA(e) {
    let t = (e || []).reduce((r, n) => (n.tagKey && (r[n.tagKey] = n), r), {});
    return r => t[r] ? t[r] : null
}

function Lu(e) {
    let t = e.useSetting("tag-colors");
    return Re(() => GA(t), [t])
}

function xh(e) {
    let t = (e || []).map(n => {
            if (n.isToday) return ["today", n];
            if (n.isBefore) return ["before", n];
            if (n.isAfter) return ["after", n];
            let i = n.direction === "after" ? 1 : -1,
                a = (0, da.moment)();
            return a.add(n.distance * i, n.unit), [a, n]
        }),
        r = (0, da.moment)();
    return t.sort((n, i) => n[0] === "today" ? typeof i[0] == "string" ? -1 : i[0].isSame(r, "day") ? 1 : -1 : i[0] === "today" ? typeof n[0] == "string" ? 1 : n[0].isSame(r, "day") ? -1 : 1 : n[0] === "after" || n[0] === "before" ? 1 : i[0] === "after" || i[0] === "before" || n[0].isBefore(i[0]) ? -1 : 1), n => {
        let i = (0, da.moment)(),
            a = t.find(o => {
                let s = o[1];
                if (s.isToday) return n.isSame(i, "day");
                if (s.isAfter) return n.isAfter(i);
                if (s.isBefore) return n.isBefore(i);
                let u = "days";
                return s.unit === "hours" && (u = "hours"), s.direction === "before" ? n.isBetween(o[0], i, u, "[]") : n.isBetween(i, o[0], u, "[]")
            });
        return a ? a[1] : null
    }
}

