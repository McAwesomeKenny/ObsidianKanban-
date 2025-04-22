var xC = Ct(ln());

function zx({
    onNewLane: e,
    closeLaneForm: t
}) {
    let [r, n] = Ne(!1), i = Fe(), a = Fe(), o = ws(() => t(), {
        ignoreClass: [$("ignore-click-outside"), "mobile-toolbar", "suggestion-container"]
    }), {
        boardModifiers: s,
        stateManager: u
    } = Ee(tt);
    Ai(() => {
        var h;
        (h = a.current) == null || h.focus()
    }, []);
    let l = Ye((h, g) => {
            s.addLane({
                ...Ea,
                id: et(),
                children: [],
                data: {
                    ...co(g),
                    shouldMarkItemsComplete: r
                }
            }), h.dispatch({
                changes: {
                    from: 0,
                    to: h.state.doc.length,
                    insert: ""
                }
            }), n(!1), e()
        }, [e, n, s]),
        c = Re(() => ({
            x: 0,
            y: 0
        }), []),
        d = Ye((h, g, y) => {
            if (!Ca(u, g, y)) return l(h, h.state.doc.toString()), !0
        }, [l]),
        m = Ye(h => l(h, h.state.doc.toString()), [l]);
    return E("div", {
        ref: o,
        className: $("lane-form-wrapper"),
        children: [E("div", {
            className: $("lane-input-wrapper"),
            children: E(_a, {
                className: $("lane-input"),
                editorRef: i,
                editState: c,
                onEnter: d,
                onEscape: t,
                onSubmit: m
            })
        }), E("div", {
            className: $("checkbox-wrapper"),
            children: [E("div", {
                className: $("checkbox-label"),
                children: R("Mark cards in this list as complete")
            }), E("div", {
                onClick: () => n(!r),
                className: `checkbox-container ${r?"is-enabled":""}`
            })]
        }), E("div", {
            className: $("lane-input-actions"),
            children: [E("button", {
                className: $("lane-action-add"),
                onClick: () => {
                    i.current && l(i.current, i.current.state.doc.toString())
                },
                children: R("Add list")
            }), E("button", {
                className: $("lane-action-cancel"),
                onClick: t,
                children: R("Done")
            })]
        })]
    })
}

function qx() {
    return {
        accessor: (e, t) => typeof e == "function" ? {
            ...t,
            accessorFn: e
        } : {
            ...t,
            accessorKey: e
        },
        display: e => e,
        group: e => e
    }
}

function Oa(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Pr(e, t) {
    return r => {
        t.setState(n => ({
            ...n,
            [e]: Oa(r, n[e])
        }))
    }
}

function Kd(e) {
    return e instanceof Function
}

function LR(e) {
    return Array.isArray(e) && e.every(t => typeof t == "number")
}

function PR(e, t) {
    let r = [],
        n = i => {
            i.forEach(a => {
                r.push(a);
                let o = t(a);
                o != null && o.length && n(o)
            })
        };
    return n(e), r
}

function ze(e, t, r) {
    let n = [],
        i;
    return a => {
        let o;
        r.key && r.debug && (o = Date.now());
        let s = e(a);
        if (!(s.length !== n.length || s.some((c, d) => n[d] !== c))) return i;
        n = s;
        let l;
        if (r.key && r.debug && (l = Date.now()), i = t(...s), r == null || r.onChange == null || r.onChange(i), r.key && r.debug && r != null && r.debug()) {
            let c = Math.round((Date.now() - o) * 100) / 100,
                d = Math.round((Date.now() - l) * 100) / 100,
                m = d / 16,
                h = (g, y) => {
                    for (g = String(g); g.length < y;) g = " " + g;
                    return g
                };
            console.info(`%c\u23F1 ${h(d,5)} /${h(c,5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*m,120))}deg 100% 31%);`, r == null ? void 0 : r.key)
        }
        return i
    }
}

function Ke(e, t, r, n) {
    return {
        debug: () => {
            var i;
            return (i = e == null ? void 0 : e.debugAll) != null ? i : e[t]
        },
        key: !1,
        onChange: n
    }
}

function NR(e, t, r, n) {
    let i = () => {
            var o;
            return (o = a.getValue()) != null ? o : e.options.renderFallbackValue
        },
        a = {
            id: `${t.id}_${r.id}`,
            row: t,
            column: r,
            getValue: () => t.getValue(n),
            renderValue: i,
            getContext: ze(() => [e, r, t, a], (o, s, u, l) => ({
                table: o,
                column: s,
                row: u,
                cell: l,
                getValue: l.getValue,
                renderValue: l.renderValue
            }), Ke(e.options, "debugCells", "cell.getContext"))
        };
    return e._features.forEach(o => {
        o.createCell == null || o.createCell(a, r, t, e)
    }, {}), a
}

function RR(e, t, r, n) {
    var i, a;
    let s = {
            ...e._getDefaultColumnDef(),
            ...t
        },
        u = s.accessorKey,
        l = (i = (a = s.id) != null ? a : u ? u.replace(".", "_") : void 0) != null ? i : typeof s.header == "string" ? s.header : void 0,
        c;
    if (s.accessorFn ? c = s.accessorFn : u && (u.includes(".") ? c = m => {
            let h = m;
            for (let y of u.split(".")) {
                var g;
                h = (g = h) == null ? void 0 : g[y]
            }
            return h
        } : c = m => m[s.accessorKey]), !l) throw new Error;
    let d = {
        id: `${String(l)}`,
        accessorFn: c,
        parent: n,
        depth: r,
        columnDef: s,
        columns: [],
        getFlatColumns: ze(() => [!0], () => {
            var m;
            return [d, ...(m = d.columns) == null ? void 0 : m.flatMap(h => h.getFlatColumns())]
        }, Ke(e.options, "debugColumns", "column.getFlatColumns")),
        getLeafColumns: ze(() => [e._getOrderColumnsFn()], m => {
            var h;
            if ((h = d.columns) != null && h.length) {
                let g = d.columns.flatMap(y => y.getLeafColumns());
                return m(g)
            }
            return [d]
        }, Ke(e.options, "debugColumns", "column.getLeafColumns"))
    };
    for (let m of e._features) m.createColumn == null || m.createColumn(d, e);
    return d
}
var nr = "debugHeaders";

function Kx(e, t, r) {
    var n;
    let a = {
        id: (n = r.id) != null ? n : t.id,
        column: t,
        index: r.index,
        isPlaceholder: !!r.isPlaceholder,
        placeholderId: r.placeholderId,
        depth: r.depth,
        subHeaders: [],
        colSpan: 0,
        rowSpan: 0,
        headerGroup: null,
        getLeafHeaders: () => {
            let o = [],
                s = u => {
                    u.subHeaders && u.subHeaders.length && u.subHeaders.map(s), o.push(u)
                };
            return s(a), o
        },
        getContext: () => ({
            table: e,
            header: a,
            column: t
        })
    };
    return e._features.forEach(o => {
        o.createHeader == null || o.createHeader(a, e)
    }), a
}
var HR = {
    createTable: e => {
        e.getHeaderGroups = ze(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, r, n, i) => {
            var a, o;
            let s = (a = n == null ? void 0 : n.map(d => r.find(m => m.id === d)).filter(Boolean)) != null ? a : [],
                u = (o = i == null ? void 0 : i.map(d => r.find(m => m.id === d)).filter(Boolean)) != null ? o : [],
                l = r.filter(d => !(n != null && n.includes(d.id)) && !(i != null && i.includes(d.id)));
            return Wd(t, [...s, ...l, ...u], e)
        }, Ke(e.options, nr, "getHeaderGroups")), e.getCenterHeaderGroups = ze(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, r, n, i) => (r = r.filter(a => !(n != null && n.includes(a.id)) && !(i != null && i.includes(a.id))), Wd(t, r, e, "center")), Ke(e.options, nr, "getCenterHeaderGroups")), e.getLeftHeaderGroups = ze(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, r, n) => {
            var i;
            let a = (i = n == null ? void 0 : n.map(o => r.find(s => s.id === o)).filter(Boolean)) != null ? i : [];
            return Wd(t, a, e, "left")
        }, Ke(e.options, nr, "getLeftHeaderGroups")), e.getRightHeaderGroups = ze(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, r, n) => {
            var i;
            let a = (i = n == null ? void 0 : n.map(o => r.find(s => s.id === o)).filter(Boolean)) != null ? i : [];
            return Wd(t, a, e, "right")
        }, Ke(e.options, nr, "getRightHeaderGroups")), e.getFooterGroups = ze(() => [e.getHeaderGroups()], t => [...t].reverse(), Ke(e.options, nr, "getFooterGroups")), e.getLeftFooterGroups = ze(() => [e.getLeftHeaderGroups()], t => [...t].reverse(), Ke(e.options, nr, "getLeftFooterGroups")), e.getCenterFooterGroups = ze(() => [e.getCenterHeaderGroups()], t => [...t].reverse(), Ke(e.options, nr, "getCenterFooterGroups")), e.getRightFooterGroups = ze(() => [e.getRightHeaderGroups()], t => [...t].reverse(), Ke(e.options, nr, "getRightFooterGroups")), e.getFlatHeaders = ze(() => [e.getHeaderGroups()], t => t.map(r => r.headers).flat(), Ke(e.options, nr, "getFlatHeaders")), e.getLeftFlatHeaders = ze(() => [e.getLeftHeaderGroups()], t => t.map(r => r.headers).flat(), Ke(e.options, nr, "getLeftFlatHeaders")), e.getCenterFlatHeaders = ze(() => [e.getCenterHeaderGroups()], t => t.map(r => r.headers).flat(), Ke(e.options, nr, "getCenterFlatHeaders")), e.getRightFlatHeaders = ze(() => [e.getRightHeaderGroups()], t => t.map(r => r.headers).flat(), Ke(e.options, nr, "getRightFlatHeaders")), e.getCenterLeafHeaders = ze(() => [e.getCenterFlatHeaders()], t => t.filter(r => {
            var n;
            return !((n = r.subHeaders) != null && n.length)
        }), Ke(e.options, nr, "getCenterLeafHeaders")), e.getLeftLeafHeaders = ze(() => [e.getLeftFlatHeaders()], t => t.filter(r => {
            var n;
            return !((n = r.subHeaders) != null && n.length)
        }), Ke(e.options, nr, "getLeftLeafHeaders")), e.getRightLeafHeaders = ze(() => [e.getRightFlatHeaders()], t => t.filter(r => {
            var n;
            return !((n = r.subHeaders) != null && n.length)
        }), Ke(e.options, nr, "getRightLeafHeaders")), e.getLeafHeaders = ze(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, r, n) => {
            var i, a, o, s, u, l;
            return [...(i = (a = t[0]) == null ? void 0 : a.headers) != null ? i : [], ...(o = (s = r[0]) == null ? void 0 : s.headers) != null ? o : [], ...(u = (l = n[0]) == null ? void 0 : l.headers) != null ? u : []].map(c => c.getLeafHeaders()).flat()
        }, Ke(e.options, nr, "getLeafHeaders"))
    }
};

function Wd(e, t, r, n) {
    var i, a;
    let o = 0,
        s = function(m, h) {
            h === void 0 && (h = 1), o = Math.max(o, h), m.filter(g => g.getIsVisible()).forEach(g => {
                var y;
                (y = g.columns) != null && y.length && s(g.columns, h + 1)
            }, 0)
        };
    s(e);
    let u = [],
        l = (m, h) => {
            let g = {
                    depth: h,
                    id: [n, `${h}`].filter(Boolean).join("_"),
                    headers: []
                },
                y = [];
            m.forEach(v => {
                let D = [...y].reverse()[0],
                    I = v.column.depth === g.depth,
                    C, x = !1;
                if (I && v.column.parent ? C = v.column.parent : (C = v.column, x = !0), D && (D == null ? void 0 : D.column) === C) D.subHeaders.push(v);
                else {
                    let O = Kx(r, C, {
                        id: [n, h, C.id, v == null ? void 0 : v.id].filter(Boolean).join("_"),
                        isPlaceholder: x,
                        placeholderId: x ? `${y.filter(A=>A.column===C).length}` : void 0,
                        depth: h,
                        index: y.length
                    });
                    O.subHeaders.push(v), y.push(O)
                }
                g.headers.push(v), v.headerGroup = g
            }), u.push(g), h > 0 && l(y, h - 1)
        },
        c = t.map((m, h) => Kx(r, m, {
            depth: o,
            index: h
        }));
    l(c, o - 1), u.reverse();
    let d = m => m.filter(g => g.column.getIsVisible()).map(g => {
        let y = 0,
            v = 0,
            D = [0];
        g.subHeaders && g.subHeaders.length ? (D = [], d(g.subHeaders).forEach(C => {
            let {
                colSpan: x,
                rowSpan: O
            } = C;
            y += x, D.push(O)
        })) : y = 1;
        let I = Math.min(...D);
        return v = v + I, g.colSpan = y, g.rowSpan = v, {
            colSpan: y,
            rowSpan: v
        }
    });
    return d((i = (a = u[0]) == null ? void 0 : a.headers) != null ? i : []), u
}
var Zg = (e, t, r, n, i, a, o) => {
        let s = {
            id: t,
            index: n,
            original: r,
            depth: i,
            parentId: o,
            _valuesCache: {},
            _uniqueValuesCache: {},
            getValue: u => {
                if (s._valuesCache.hasOwnProperty(u)) return s._valuesCache[u];
                let l = e.getColumn(u);
                if (l != null && l.accessorFn) return s._valuesCache[u] = l.accessorFn(s.original, n), s._valuesCache[u]
            },
            getUniqueValues: u => {
                if (s._uniqueValuesCache.hasOwnProperty(u)) return s._uniqueValuesCache[u];
                let l = e.getColumn(u);
                if (l != null && l.accessorFn) return l.columnDef.getUniqueValues ? (s._uniqueValuesCache[u] = l.columnDef.getUniqueValues(s.original, n), s._uniqueValuesCache[u]) : (s._uniqueValuesCache[u] = [s.getValue(u)], s._uniqueValuesCache[u])
            },
            renderValue: u => {
                var l;
                return (l = s.getValue(u)) != null ? l : e.options.renderFallbackValue
            },
            subRows: a != null ? a : [],
            getLeafRows: () => PR(s.subRows, u => u.subRows),
            getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
            getParentRows: () => {
                let u = [],
                    l = s;
                for (;;) {
                    let c = l.getParentRow();
                    if (!c) break;
                    u.push(c), l = c
                }
                return u.reverse()
            },
            getAllCells: ze(() => [e.getAllLeafColumns()], u => u.map(l => NR(e, s, l, l.id)), Ke(e.options, "debugRows", "getAllCells")),
            _getAllCellsByColumnId: ze(() => [s.getAllCells()], u => u.reduce((l, c) => (l[c.column.id] = c, l), {}), Ke(e.options, "debugRows", "getAllCellsByColumnId"))
        };
        for (let u = 0; u < e._features.length; u++) {
            let l = e._features[u];
            l == null || l.createRow == null || l.createRow(s, e)
        }
        return s
    },
    BR = {
        createColumn: (e, t) => {
            e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map, e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
                if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues()
            }
        }
    },
    Gx = (e, t, r) => {
        var n;
        let i = r.toLowerCase();
        return !!(!((n = e.getValue(t)) == null || (n = n.toString()) == null || (n = n.toLowerCase()) == null) && n.includes(i))
    };
Gx.autoRemove = e => di(e);
var Jx = (e, t, r) => {
    var n;
    return !!(!((n = e.getValue(t)) == null || (n = n.toString()) == null) && n.includes(r))
};
Jx.autoRemove = e => di(e);
var Zx = (e, t, r) => {
    var n;
    return ((n = e.getValue(t)) == null || (n = n.toString()) == null ? void 0 : n.toLowerCase()) === (r == null ? void 0 : r.toLowerCase())
};
Zx.autoRemove = e => di(e);
var Qx = (e, t, r) => {
    var n;
    return (n = e.getValue(t)) == null ? void 0 : n.includes(r)
};
Qx.autoRemove = e => di(e) || !(e != null && e.length);
var Xx = (e, t, r) => !r.some(n => {
    var i;
    return !((i = e.getValue(t)) != null && i.includes(n))
});
Xx.autoRemove = e => di(e) || !(e != null && e.length);
var eC = (e, t, r) => r.some(n => {
    var i;
    return (i = e.getValue(t)) == null ? void 0 : i.includes(n)
});
eC.autoRemove = e => di(e) || !(e != null && e.length);
var tC = (e, t, r) => e.getValue(t) === r;
tC.autoRemove = e => di(e);
var nC = (e, t, r) => e.getValue(t) == r;
nC.autoRemove = e => di(e);
var Qg = (e, t, r) => {
    let [n, i] = r, a = e.getValue(t);
    return a >= n && a <= i
};
Qg.resolveFilterValue = e => {
    let [t, r] = e, n = typeof t != "number" ? parseFloat(t) : t, i = typeof r != "number" ? parseFloat(r) : r, a = t === null || Number.isNaN(n) ? -1 / 0 : n, o = r === null || Number.isNaN(i) ? 1 / 0 : i;
    if (a > o) {
        let s = a;
        a = o, o = s
    }
    return [a, o]
};
Qg.autoRemove = e => di(e) || di(e[0]) && di(e[1]);
var Xi = {
    includesString: Gx,
    includesStringSensitive: Jx,
    equalsString: Zx,
    arrIncludes: Qx,
    arrIncludesAll: Xx,
    arrIncludesSome: eC,
    equals: tC,
    weakEquals: nC,
    inNumberRange: Qg
};

function di(e) {
    return e == null || e === ""
}
var VR = {
    getDefaultColumnDef: () => ({
        filterFn: "auto"
    }),
    getInitialState: e => ({
        columnFilters: [],
        ...e
    }),
    getDefaultOptions: e => ({
        onColumnFiltersChange: Pr("columnFilters", e),
        filterFromLeafRows: !1,
        maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
        e.getAutoFilterFn = () => {
            let r = t.getCoreRowModel().flatRows[0],
                n = r == null ? void 0 : r.getValue(e.id);
            return typeof n == "string" ? Xi.includesString : typeof n == "number" ? Xi.inNumberRange : typeof n == "boolean" || n !== null && typeof n == "object" ? Xi.equals : Array.isArray(n) ? Xi.arrIncludes : Xi.weakEquals
        }, e.getFilterFn = () => {
            var r, n;
            return Kd(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (r = (n = t.options.filterFns) == null ? void 0 : n[e.columnDef.filterFn]) != null ? r : Xi[e.columnDef.filterFn]
        }, e.getCanFilter = () => {
            var r, n, i;
            return ((r = e.columnDef.enableColumnFilter) != null ? r : !0) && ((n = t.options.enableColumnFilters) != null ? n : !0) && ((i = t.options.enableFilters) != null ? i : !0) && !!e.accessorFn
        }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
            var r;
            return (r = t.getState().columnFilters) == null || (r = r.find(n => n.id === e.id)) == null ? void 0 : r.value
        }, e.getFilterIndex = () => {
            var r, n;
            return (r = (n = t.getState().columnFilters) == null ? void 0 : n.findIndex(i => i.id === e.id)) != null ? r : -1
        }, e.setFilterValue = r => {
            t.setColumnFilters(n => {
                let i = e.getFilterFn(),
                    a = n == null ? void 0 : n.find(c => c.id === e.id),
                    o = Oa(r, a ? a.value : void 0);
                if (jx(i, o, e)) {
                    var s;
                    return (s = n == null ? void 0 : n.filter(c => c.id !== e.id)) != null ? s : []
                }
                let u = {
                    id: e.id,
                    value: o
                };
                if (a) {
                    var l;
                    return (l = n == null ? void 0 : n.map(c => c.id === e.id ? u : c)) != null ? l : []
                }
                return n != null && n.length ? [...n, u] : [u]
            })
        }
    },
    createRow: (e, t) => {
        e.columnFilters = {}, e.columnFiltersMeta = {}
    },
    createTable: e => {
        e.setColumnFilters = t => {
            let r = e.getAllLeafColumns(),
                n = i => {
                    var a;
                    return (a = Oa(t, i)) == null ? void 0 : a.filter(o => {
                        let s = r.find(u => u.id === o.id);
                        if (s) {
                            let u = s.getFilterFn();
                            if (jx(u, o.value, s)) return !1
                        }
                        return !0
                    })
                };
            e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(n)
        }, e.resetColumnFilters = t => {
            var r, n;
            e.setColumnFilters(t ? [] : (r = (n = e.initialState) == null ? void 0 : n.columnFilters) != null ? r : [])
        }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel())
    }
};

function jx(e, t, r) {
    return (e && e.autoRemove ? e.autoRemove(t, r) : !1) || typeof t == "undefined" || typeof t == "string" && !t
}
var $R = (e, t, r) => r.reduce((n, i) => {
        let a = i.getValue(e);
        return n + (typeof a == "number" ? a : 0)
    }, 0),
    UR = (e, t, r) => {
        let n;
        return r.forEach(i => {
            let a = i.getValue(e);
            a != null && (n > a || n === void 0 && a >= a) && (n = a)
        }), n
    },
    WR = (e, t, r) => {
        let n;
        return r.forEach(i => {
            let a = i.getValue(e);
            a != null && (n < a || n === void 0 && a >= a) && (n = a)
        }), n
    },
    YR = (e, t, r) => {
        let n, i;
        return r.forEach(a => {
            let o = a.getValue(e);
            o != null && (n === void 0 ? o >= o && (n = i = o) : (n > o && (n = o), i < o && (i = o)))
        }), [n, i]
    },
    zR = (e, t) => {
        let r = 0,
            n = 0;
        if (t.forEach(i => {
                let a = i.getValue(e);
                a != null && (a = +a) >= a && (++r, n += a)
            }), r) return n / r
    },
    KR = (e, t) => {
        if (!t.length) return;
        let r = t.map(a => a.getValue(e));
        if (!LR(r)) return;
        if (r.length === 1) return r[0];
        let n = Math.floor(r.length / 2),
            i = r.sort((a, o) => a - o);
        return r.length % 2 !== 0 ? i[n] : (i[n - 1] + i[n]) / 2
    },
    jR = (e, t) => Array.from(new Set(t.map(r => r.getValue(e))).values()),
    qR = (e, t) => new Set(t.map(r => r.getValue(e))).size,
    GR = (e, t) => t.length,
    Bg = {
        sum: $R,
        min: UR,
        max: WR,
        extent: YR,
        mean: zR,
        median: KR,
        unique: jR,
        uniqueCount: qR,
        count: GR
    },
    JR = {
        getDefaultColumnDef: () => ({
            aggregatedCell: e => {
                var t, r;
                return (t = (r = e.getValue()) == null || r.toString == null ? void 0 : r.toString()) != null ? t : null
            },
            aggregationFn: "auto"
        }),
        getInitialState: e => ({
            grouping: [],
            ...e
        }),
        getDefaultOptions: e => ({
            onGroupingChange: Pr("grouping", e),
            groupedColumnMode: "reorder"
        }),
        createColumn: (e, t) => {
            e.toggleGrouping = () => {
                t.setGrouping(r => r != null && r.includes(e.id) ? r.filter(n => n !== e.id) : [...r != null ? r : [], e.id])
            }, e.getCanGroup = () => {
                var r, n;
                return ((r = e.columnDef.enableGrouping) != null ? r : !0) && ((n = t.options.enableGrouping) != null ? n : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue)
            }, e.getIsGrouped = () => {
                var r;
                return (r = t.getState().grouping) == null ? void 0 : r.includes(e.id)
            }, e.getGroupedIndex = () => {
                var r;
                return (r = t.getState().grouping) == null ? void 0 : r.indexOf(e.id)
            }, e.getToggleGroupingHandler = () => {
                let r = e.getCanGroup();
                return () => {
                    r && e.toggleGrouping()
                }
            }, e.getAutoAggregationFn = () => {
                let r = t.getCoreRowModel().flatRows[0],
                    n = r == null ? void 0 : r.getValue(e.id);
                if (typeof n == "number") return Bg.sum;
                if (Object.prototype.toString.call(n) === "[object Date]") return Bg.extent
            }, e.getAggregationFn = () => {
                var r, n;
                if (!e) throw new Error;
                return Kd(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (r = (n = t.options.aggregationFns) == null ? void 0 : n[e.columnDef.aggregationFn]) != null ? r : Bg[e.columnDef.aggregationFn]
            }
        },
        createTable: e => {
            e.setGrouping = t => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = t => {
                var r, n;
                e.setGrouping(t ? [] : (r = (n = e.initialState) == null ? void 0 : n.grouping) != null ? r : [])
            }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel())
        },
        createRow: (e, t) => {
            e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = r => {
                if (e._groupingValuesCache.hasOwnProperty(r)) return e._groupingValuesCache[r];
                let n = t.getColumn(r);
                return n != null && n.columnDef.getGroupingValue ? (e._groupingValuesCache[r] = n.columnDef.getGroupingValue(e.original), e._groupingValuesCache[r]) : e.getValue(r)
            }, e._groupingValuesCache = {}
        },
        createCell: (e, t, r, n) => {
            e.getIsGrouped = () => t.getIsGrouped() && t.id === r.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
                var i;
                return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((i = r.subRows) != null && i.length)
            }
        }
    };

function ZR(e, t, r) {
    if (!(t != null && t.length) || !r) return e;
    let n = e.filter(a => !t.includes(a.id));
    return r === "remove" ? n : [...t.map(a => e.find(o => o.id === a)).filter(Boolean), ...n]
}
var QR = {
        getInitialState: e => ({
            columnOrder: [],
            ...e
        }),
        getDefaultOptions: e => ({
            onColumnOrderChange: Pr("columnOrder", e)
        }),
        createColumn: (e, t) => {
            e.getIndex = ze(r => [jl(t, r)], r => r.findIndex(n => n.id === e.id), Ke(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = r => {
                var n;
                return ((n = jl(t, r)[0]) == null ? void 0 : n.id) === e.id
            }, e.getIsLastColumn = r => {
                var n;
                let i = jl(t, r);
                return ((n = i[i.length - 1]) == null ? void 0 : n.id) === e.id
            }
        },
        createTable: e => {
            e.setColumnOrder = t => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = t => {
                var r;
                e.setColumnOrder(t ? [] : (r = e.initialState.columnOrder) != null ? r : [])
            }, e._getOrderColumnsFn = ze(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, r, n) => i => {
                let a = [];
                if (!(t != null && t.length)) a = i;
                else {
                    let o = [...t],
                        s = [...i];
                    for (; s.length && o.length;) {
                        let u = o.shift(),
                            l = s.findIndex(c => c.id === u);
                        l > -1 && a.push(s.splice(l, 1)[0])
                    }
                    a = [...a, ...s]
                }
                return ZR(a, r, n)
            }, Ke(e.options, "debugTable", "_getOrderColumnsFn"))
        }
    },
    Vg = () => ({
        left: [],
        right: []
    }),
    XR = {
        getInitialState: e => ({
            columnPinning: Vg(),
            ...e
        }),
        getDefaultOptions: e => ({
            onColumnPinningChange: Pr("columnPinning", e)
        }),
        createColumn: (e, t) => {
            e.pin = r => {
                let n = e.getLeafColumns().map(i => i.id).filter(Boolean);
                t.setColumnPinning(i => {
                    var a, o;
                    if (r === "right") {
                        var s, u;
                        return {
                            left: ((s = i == null ? void 0 : i.left) != null ? s : []).filter(d => !(n != null && n.includes(d))),
                            right: [...((u = i == null ? void 0 : i.right) != null ? u : []).filter(d => !(n != null && n.includes(d))), ...n]
                        }
                    }
                    if (r === "left") {
                        var l, c;
                        return {
                            left: [...((l = i == null ? void 0 : i.left) != null ? l : []).filter(d => !(n != null && n.includes(d))), ...n],
                            right: ((c = i == null ? void 0 : i.right) != null ? c : []).filter(d => !(n != null && n.includes(d)))
                        }
                    }
                    return {
                        left: ((a = i == null ? void 0 : i.left) != null ? a : []).filter(d => !(n != null && n.includes(d))),
                        right: ((o = i == null ? void 0 : i.right) != null ? o : []).filter(d => !(n != null && n.includes(d)))
                    }
                })
            }, e.getCanPin = () => e.getLeafColumns().some(n => {
                var i, a, o;
                return ((i = n.columnDef.enablePinning) != null ? i : !0) && ((a = (o = t.options.enableColumnPinning) != null ? o : t.options.enablePinning) != null ? a : !0)
            }), e.getIsPinned = () => {
                let r = e.getLeafColumns().map(s => s.id),
                    {
                        left: n,
                        right: i
                    } = t.getState().columnPinning,
                    a = r.some(s => n == null ? void 0 : n.includes(s)),
                    o = r.some(s => i == null ? void 0 : i.includes(s));
                return a ? "left" : o ? "right" : !1
            }, e.getPinnedIndex = () => {
                var r, n;
                let i = e.getIsPinned();
                return i ? (r = (n = t.getState().columnPinning) == null || (n = n[i]) == null ? void 0 : n.indexOf(e.id)) != null ? r : -1 : 0
            }
        },
        createRow: (e, t) => {
            e.getCenterVisibleCells = ze(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (r, n, i) => {
                let a = [...n != null ? n : [], ...i != null ? i : []];
                return r.filter(o => !a.includes(o.column.id))
            }, Ke(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = ze(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (r, n) => (n != null ? n : []).map(a => r.find(o => o.column.id === a)).filter(Boolean).map(a => ({
                ...a,
                position: "left"
            })), Ke(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = ze(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (r, n) => (n != null ? n : []).map(a => r.find(o => o.column.id === a)).filter(Boolean).map(a => ({
                ...a,
                position: "right"
            })), Ke(t.options, "debugRows", "getRightVisibleCells"))
        },
        createTable: e => {
            e.setColumnPinning = t => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = t => {
                var r, n;
                return e.setColumnPinning(t ? Vg() : (r = (n = e.initialState) == null ? void 0 : n.columnPinning) != null ? r : Vg())
            }, e.getIsSomeColumnsPinned = t => {
                var r;
                let n = e.getState().columnPinning;
                if (!t) {
                    var i, a;
                    return !!((i = n.left) != null && i.length || (a = n.right) != null && a.length)
                }
                return !!((r = n[t]) != null && r.length)
            }, e.getLeftLeafColumns = ze(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, r) => (r != null ? r : []).map(n => t.find(i => i.id === n)).filter(Boolean), Ke(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = ze(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, r) => (r != null ? r : []).map(n => t.find(i => i.id === n)).filter(Boolean), Ke(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = ze(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, r, n) => {
                let i = [...r != null ? r : [], ...n != null ? n : []];
                return t.filter(a => !i.includes(a.id))
            }, Ke(e.options, "debugColumns", "getCenterLeafColumns"))
        }
    },
    Yd = {
        size: 150,
        minSize: 20,
        maxSize: Number.MAX_SAFE_INTEGER
    },
    $g = () => ({
        startOffset: null,
        startSize: null,
        deltaOffset: null,
        deltaPercentage: null,
        isResizingColumn: !1,
        columnSizingStart: []
    }),
    eH = {
        getDefaultColumnDef: () => Yd,
        getInitialState: e => ({
            columnSizing: {},
            columnSizingInfo: $g(),
            ...e
        }),
        getDefaultOptions: e => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: Pr("columnSizing", e),
            onColumnSizingInfoChange: Pr("columnSizingInfo", e)
        }),
        createColumn: (e, t) => {
            e.getSize = () => {
                var r, n, i;
                let a = t.getState().columnSizing[e.id];
                return Math.min(Math.max((r = e.columnDef.minSize) != null ? r : Yd.minSize, (n = a != null ? a : e.columnDef.size) != null ? n : Yd.size), (i = e.columnDef.maxSize) != null ? i : Yd.maxSize)
            }, e.getStart = ze(r => [r, jl(t, r), t.getState().columnSizing], (r, n) => n.slice(0, e.getIndex(r)).reduce((i, a) => i + a.getSize(), 0), Ke(t.options, "debugColumns", "getStart")), e.getAfter = ze(r => [r, jl(t, r), t.getState().columnSizing], (r, n) => n.slice(e.getIndex(r) + 1).reduce((i, a) => i + a.getSize(), 0), Ke(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
                t.setColumnSizing(r => {
                    let {
                        [e.id]: n, ...i
                    } = r;
                    return i
                })
            }, e.getCanResize = () => {
                var r, n;
                return ((r = e.columnDef.enableResizing) != null ? r : !0) && ((n = t.options.enableColumnResizing) != null ? n : !0)
            }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id
        },
        createHeader: (e, t) => {
            e.getSize = () => {
                let r = 0,
                    n = i => {
                        if (i.subHeaders.length) i.subHeaders.forEach(n);
                        else {
                            var a;
                            r += (a = i.column.getSize()) != null ? a : 0
                        }
                    };
                return n(e), r
            }, e.getStart = () => {
                if (e.index > 0) {
                    let r = e.headerGroup.headers[e.index - 1];
                    return r.getStart() + r.getSize()
                }
                return 0
            }, e.getResizeHandler = r => {
                let n = t.getColumn(e.column.id),
                    i = n == null ? void 0 : n.getCanResize();
                return a => {
                    if (!n || !i || (a.persist == null || a.persist(), Ug(a) && a.touches && a.touches.length > 1)) return;
                    let o = e.getSize(),
                        s = e ? e.getLeafHeaders().map(D => [D.column.id, D.column.getSize()]) : [
                            [n.id, n.getSize()]
                        ],
                        u = Ug(a) ? Math.round(a.touches[0].clientX) : a.clientX,
                        l = {},
                        c = (D, I) => {
                            typeof I == "number" && (t.setColumnSizingInfo(C => {
                                var x, O;
                                let A = t.options.columnResizeDirection === "rtl" ? -1 : 1,
                                    P = (I - ((x = C == null ? void 0 : C.startOffset) != null ? x : 0)) * A,
                                    B = Math.max(P / ((O = C == null ? void 0 : C.startSize) != null ? O : 0), -.999999);
                                return C.columnSizingStart.forEach(G => {
                                    let [J, Q] = G;
                                    l[J] = Math.round(Math.max(Q + Q * B, 0) * 100) / 100
                                }), {
                                    ...C,
                                    deltaOffset: P,
                                    deltaPercentage: B
                                }
                            }), (t.options.columnResizeMode === "onChange" || D === "end") && t.setColumnSizing(C => ({
                                ...C,
                                ...l
                            })))
                        },
                        d = D => c("move", D),
                        m = D => {
                            c("end", D), t.setColumnSizingInfo(I => ({
                                ...I,
                                isResizingColumn: !1,
                                startOffset: null,
                                startSize: null,
                                deltaOffset: null,
                                deltaPercentage: null,
                                columnSizingStart: []
                            }))
                        },
                        h = r || typeof document != "undefined" ? document : null,
                        g = {
                            moveHandler: D => d(D.clientX),
                            upHandler: D => {
                                h == null || h.removeEventListener("mousemove", g.moveHandler), h == null || h.removeEventListener("mouseup", g.upHandler), m(D.clientX)
                            }
                        },
                        y = {
                            moveHandler: D => (D.cancelable && (D.preventDefault(), D.stopPropagation()), d(D.touches[0].clientX), !1),
                            upHandler: D => {
                                var I;
                                h == null || h.removeEventListener("touchmove", y.moveHandler), h == null || h.removeEventListener("touchend", y.upHandler), D.cancelable && (D.preventDefault(), D.stopPropagation()), m((I = D.touches[0]) == null ? void 0 : I.clientX)
                            }
                        },
                        v = tH() ? {
                            passive: !1
                        } : !1;
                    Ug(a) ? (h == null || h.addEventListener("touchmove", y.moveHandler, v), h == null || h.addEventListener("touchend", y.upHandler, v)) : (h == null || h.addEventListener("mousemove", g.moveHandler, v), h == null || h.addEventListener("mouseup", g.upHandler, v)), t.setColumnSizingInfo(D => ({
                        ...D,
                        startOffset: u,
                        startSize: o,
                        deltaOffset: 0,
                        deltaPercentage: 0,
                        columnSizingStart: s,
                        isResizingColumn: n.id
                    }))
                }
            }
        },
        createTable: e => {
            e.setColumnSizing = t => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = t => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = t => {
                var r;
                e.setColumnSizing(t ? {} : (r = e.initialState.columnSizing) != null ? r : {})
            }, e.resetHeaderSizeInfo = t => {
                var r;
                e.setColumnSizingInfo(t ? $g() : (r = e.initialState.columnSizingInfo) != null ? r : $g())
            }, e.getTotalSize = () => {
                var t, r;
                return (t = (r = e.getHeaderGroups()[0]) == null ? void 0 : r.headers.reduce((n, i) => n + i.getSize(), 0)) != null ? t : 0
            }, e.getLeftTotalSize = () => {
                var t, r;
                return (t = (r = e.getLeftHeaderGroups()[0]) == null ? void 0 : r.headers.reduce((n, i) => n + i.getSize(), 0)) != null ? t : 0
            }, e.getCenterTotalSize = () => {
                var t, r;
                return (t = (r = e.getCenterHeaderGroups()[0]) == null ? void 0 : r.headers.reduce((n, i) => n + i.getSize(), 0)) != null ? t : 0
            }, e.getRightTotalSize = () => {
                var t, r;
                return (t = (r = e.getRightHeaderGroups()[0]) == null ? void 0 : r.headers.reduce((n, i) => n + i.getSize(), 0)) != null ? t : 0
            }
        }
    },
    zd = null;

function tH() {
    if (typeof zd == "boolean") return zd;
    let e = !1;
    try {
        let t = {
                get passive() {
                    return e = !0, !1
                }
            },
            r = () => {};
        window.addEventListener("test", r, t), window.removeEventListener("test", r)
    } catch (t) {
        e = !1
    }
    return zd = e, zd
}

function Ug(e) {
    return e.type === "touchstart"
}
var nH = {
    getInitialState: e => ({
        columnVisibility: {},
        ...e
    }),
    getDefaultOptions: e => ({
        onColumnVisibilityChange: Pr("columnVisibility", e)
    }),
    createColumn: (e, t) => {
        e.toggleVisibility = r => {
            e.getCanHide() && t.setColumnVisibility(n => ({
                ...n,
                [e.id]: r != null ? r : !e.getIsVisible()
            }))
        }, e.getIsVisible = () => {
            var r, n;
            let i = e.columns;
            return (r = i.length ? i.some(a => a.getIsVisible()) : (n = t.getState().columnVisibility) == null ? void 0 : n[e.id]) != null ? r : !0
        }, e.getCanHide = () => {
            var r, n;
            return ((r = e.columnDef.enableHiding) != null ? r : !0) && ((n = t.options.enableHiding) != null ? n : !0)
        }, e.getToggleVisibilityHandler = () => r => {
            e.toggleVisibility == null || e.toggleVisibility(r.target.checked)
        }
    },
    createRow: (e, t) => {
        e._getAllVisibleCells = ze(() => [e.getAllCells(), t.getState().columnVisibility], r => r.filter(n => n.column.getIsVisible()), Ke(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = ze(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (r, n, i) => [...r, ...n, ...i], Ke(t.options, "debugRows", "getVisibleCells"))
    },
    createTable: e => {
        let t = (r, n) => ze(() => [n(), n().filter(i => i.getIsVisible()).map(i => i.id).join("_")], i => i.filter(a => a.getIsVisible == null ? void 0 : a.getIsVisible()), Ke(e.options, "debugColumns", r));
        e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = r => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(r), e.resetColumnVisibility = r => {
            var n;
            e.setColumnVisibility(r ? {} : (n = e.initialState.columnVisibility) != null ? n : {})
        }, e.toggleAllColumnsVisible = r => {
            var n;
            r = (n = r) != null ? n : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((i, a) => ({
                ...i,
                [a.id]: r || !(a.getCanHide != null && a.getCanHide())
            }), {}))
        }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some(r => !(r.getIsVisible != null && r.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some(r => r.getIsVisible == null ? void 0 : r.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => r => {
            var n;
            e.toggleAllColumnsVisible((n = r.target) == null ? void 0 : n.checked)
        }
    }
};

function jl(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns()
}
var rH = {
        createTable: e => {
            e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : new Map, e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
                if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues()
            }
        }
    },
    iH = {
        getInitialState: e => ({
            globalFilter: void 0,
            ...e
        }),
        getDefaultOptions: e => ({
            onGlobalFilterChange: Pr("globalFilter", e),
            globalFilterFn: "auto",
            getColumnCanGlobalFilter: t => {
                var r;
                let n = (r = e.getCoreRowModel().flatRows[0]) == null || (r = r._getAllCellsByColumnId()[t.id]) == null ? void 0 : r.getValue();
                return typeof n == "string" || typeof n == "number"
            }
        }),
        createColumn: (e, t) => {
            e.getCanGlobalFilter = () => {
                var r, n, i, a;
                return ((r = e.columnDef.enableGlobalFilter) != null ? r : !0) && ((n = t.options.enableGlobalFilter) != null ? n : !0) && ((i = t.options.enableFilters) != null ? i : !0) && ((a = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? a : !0) && !!e.accessorFn
            }
        },
        createTable: e => {
            e.getGlobalAutoFilterFn = () => Xi.includesString, e.getGlobalFilterFn = () => {
                var t, r;
                let {
                    globalFilterFn: n
                } = e.options;
                return Kd(n) ? n : n === "auto" ? e.getGlobalAutoFilterFn() : (t = (r = e.options.filterFns) == null ? void 0 : r[n]) != null ? t : Xi[n]
            }, e.setGlobalFilter = t => {
                e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t)
            }, e.resetGlobalFilter = t => {
                e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter)
            }
        }
    },
    aH = {
        getInitialState: e => ({
            expanded: {},
            ...e
        }),
        getDefaultOptions: e => ({
            onExpandedChange: Pr("expanded", e),
            paginateExpandedRows: !0
        }),
        createTable: e => {
            let t = !1,
                r = !1;
            e._autoResetExpanded = () => {
                var n, i;
                if (!t) {
                    e._queue(() => {
                        t = !0
                    });
                    return
                }
                if ((n = (i = e.options.autoResetAll) != null ? i : e.options.autoResetExpanded) != null ? n : !e.options.manualExpanding) {
                    if (r) return;
                    r = !0, e._queue(() => {
                        e.resetExpanded(), r = !1
                    })
                }
            }, e.setExpanded = n => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(n), e.toggleAllRowsExpanded = n => {
                (n != null ? n : !e.getIsAllRowsExpanded()) ? e.setExpanded(!0): e.setExpanded({})
            }, e.resetExpanded = n => {
                var i, a;
                e.setExpanded(n ? {} : (i = (a = e.initialState) == null ? void 0 : a.expanded) != null ? i : {})
            }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some(n => n.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => n => {
                n.persist == null || n.persist(), e.toggleAllRowsExpanded()
            }, e.getIsSomeRowsExpanded = () => {
                let n = e.getState().expanded;
                return n === !0 || Object.values(n).some(Boolean)
            }, e.getIsAllRowsExpanded = () => {
                let n = e.getState().expanded;
                return typeof n == "boolean" ? n === !0 : !(!Object.keys(n).length || e.getRowModel().flatRows.some(i => !i.getIsExpanded()))
            }, e.getExpandedDepth = () => {
                let n = 0;
                return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach(a => {
                    let o = a.split(".");
                    n = Math.max(n, o.length)
                }), n
            }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel())
        },
        createRow: (e, t) => {
            e.toggleExpanded = r => {
                t.setExpanded(n => {
                    var i;
                    let a = n === !0 ? !0 : !!(n != null && n[e.id]),
                        o = {};
                    if (n === !0 ? Object.keys(t.getRowModel().rowsById).forEach(s => {
                            o[s] = !0
                        }) : o = n, r = (i = r) != null ? i : !a, !a && r) return {
                        ...o,
                        [e.id]: !0
                    };
                    if (a && !r) {
                        let {
                            [e.id]: s, ...u
                        } = o;
                        return u
                    }
                    return n
                })
            }, e.getIsExpanded = () => {
                var r;
                let n = t.getState().expanded;
                return !!((r = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? r : n === !0 || n != null && n[e.id])
            }, e.getCanExpand = () => {
                var r, n, i;
                return (r = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? r : ((n = t.options.enableExpanding) != null ? n : !0) && !!((i = e.subRows) != null && i.length)
            }, e.getIsAllParentsExpanded = () => {
                let r = !0,
                    n = e;
                for (; r && n.parentId;) n = t.getRow(n.parentId, !0), r = n.getIsExpanded();
                return r
            }, e.getToggleExpandedHandler = () => {
                let r = e.getCanExpand();
                return () => {
                    r && e.toggleExpanded()
                }
            }
        }
    },
    Kg = 0,
    jg = 10,
    Wg = () => ({
        pageIndex: Kg,
        pageSize: jg
    }),
    oH = {
        getInitialState: e => ({
            ...e,
            pagination: {
                ...Wg(),
                ...e == null ? void 0 : e.pagination
            }
        }),
        getDefaultOptions: e => ({
            onPaginationChange: Pr("pagination", e)
        }),
        createTable: e => {
            let t = !1,
                r = !1;
            e._autoResetPageIndex = () => {
                var n, i;
                if (!t) {
                    e._queue(() => {
                        t = !0
                    });
                    return
                }
                if ((n = (i = e.options.autoResetAll) != null ? i : e.options.autoResetPageIndex) != null ? n : !e.options.manualPagination) {
                    if (r) return;
                    r = !0, e._queue(() => {
                        e.resetPageIndex(), r = !1
                    })
                }
            }, e.setPagination = n => {
                let i = a => Oa(n, a);
                return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(i)
            }, e.resetPagination = n => {
                var i;
                e.setPagination(n ? Wg() : (i = e.initialState.pagination) != null ? i : Wg())
            }, e.setPageIndex = n => {
                e.setPagination(i => {
                    let a = Oa(n, i.pageIndex),
                        o = typeof e.options.pageCount == "undefined" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
                    return a = Math.max(0, Math.min(a, o)), {
                        ...i,
                        pageIndex: a
                    }
                })
            }, e.resetPageIndex = n => {
                var i, a;
                e.setPageIndex(n ? Kg : (i = (a = e.initialState) == null || (a = a.pagination) == null ? void 0 : a.pageIndex) != null ? i : Kg)
            }, e.resetPageSize = n => {
                var i, a;
                e.setPageSize(n ? jg : (i = (a = e.initialState) == null || (a = a.pagination) == null ? void 0 : a.pageSize) != null ? i : jg)
            }, e.setPageSize = n => {
                e.setPagination(i => {
                    let a = Math.max(1, Oa(n, i.pageSize)),
                        o = i.pageSize * i.pageIndex,
                        s = Math.floor(o / a);
                    return {
                        ...i,
                        pageIndex: s,
                        pageSize: a
                    }
                })
            }, e.setPageCount = n => e.setPagination(i => {
                var a;
                let o = Oa(n, (a = e.options.pageCount) != null ? a : -1);
                return typeof o == "number" && (o = Math.max(-1, o)), {
                    ...i,
                    pageCount: o
                }
            }), e.getPageOptions = ze(() => [e.getPageCount()], n => {
                let i = [];
                return n && n > 0 && (i = [...new Array(n)].fill(null).map((a, o) => o)), i
            }, Ke(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
                let {
                    pageIndex: n
                } = e.getState().pagination, i = e.getPageCount();
                return i === -1 ? !0 : i === 0 ? !1 : n < i - 1
            }, e.previousPage = () => e.setPageIndex(n => n - 1), e.nextPage = () => e.setPageIndex(n => n + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
                var n;
                return (n = e.options.pageCount) != null ? n : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize)
            }, e.getRowCount = () => {
                var n;
                return (n = e.options.rowCount) != null ? n : e.getPrePaginationRowModel().rows.length
            }
        }
    },
    Yg = () => ({
        top: [],
        bottom: []
    }),
    sH = {
        getInitialState: e => ({
            rowPinning: Yg(),
            ...e
        }),
        getDefaultOptions: e => ({
            onRowPinningChange: Pr("rowPinning", e)
        }),
        createRow: (e, t) => {
            e.pin = (r, n, i) => {
                let a = n ? e.getLeafRows().map(u => {
                        let {
                            id: l
                        } = u;
                        return l
                    }) : [],
                    o = i ? e.getParentRows().map(u => {
                        let {
                            id: l
                        } = u;
                        return l
                    }) : [],
                    s = new Set([...o, e.id, ...a]);
                t.setRowPinning(u => {
                    var l, c;
                    if (r === "bottom") {
                        var d, m;
                        return {
                            top: ((d = u == null ? void 0 : u.top) != null ? d : []).filter(y => !(s != null && s.has(y))),
                            bottom: [...((m = u == null ? void 0 : u.bottom) != null ? m : []).filter(y => !(s != null && s.has(y))), ...Array.from(s)]
                        }
                    }
                    if (r === "top") {
                        var h, g;
                        return {
                            top: [...((h = u == null ? void 0 : u.top) != null ? h : []).filter(y => !(s != null && s.has(y))), ...Array.from(s)],
                            bottom: ((g = u == null ? void 0 : u.bottom) != null ? g : []).filter(y => !(s != null && s.has(y)))
                        }
                    }
                    return {
                        top: ((l = u == null ? void 0 : u.top) != null ? l : []).filter(y => !(s != null && s.has(y))),
                        bottom: ((c = u == null ? void 0 : u.bottom) != null ? c : []).filter(y => !(s != null && s.has(y)))
                    }
                })
            }, e.getCanPin = () => {
                var r;
                let {
                    enableRowPinning: n,
                    enablePinning: i
                } = t.options;
                return typeof n == "function" ? n(e) : (r = n != null ? n : i) != null ? r : !0
            }, e.getIsPinned = () => {
                let r = [e.id],
                    {
                        top: n,
                        bottom: i
                    } = t.getState().rowPinning,
                    a = r.some(s => n == null ? void 0 : n.includes(s)),
                    o = r.some(s => i == null ? void 0 : i.includes(s));
                return a ? "top" : o ? "bottom" : !1
            }, e.getPinnedIndex = () => {
                var r, n;
                let i = e.getIsPinned();
                if (!i) return -1;
                let a = (r = t._getPinnedRows(i)) == null ? void 0 : r.map(o => {
                    let {
                        id: s
                    } = o;
                    return s
                });
                return (n = a == null ? void 0 : a.indexOf(e.id)) != null ? n : -1
            }
        },
        createTable: e => {
            e.setRowPinning = t => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = t => {
                var r, n;
                return e.setRowPinning(t ? Yg() : (r = (n = e.initialState) == null ? void 0 : n.rowPinning) != null ? r : Yg())
            }, e.getIsSomeRowsPinned = t => {
                var r;
                let n = e.getState().rowPinning;
                if (!t) {
                    var i, a;
                    return !!((i = n.top) != null && i.length || (a = n.bottom) != null && a.length)
                }
                return !!((r = n[t]) != null && r.length)
            }, e._getPinnedRows = ze(t => [e.getRowModel().rows, e.getState().rowPinning[t], t], (t, r, n) => {
                var i;
                return ((i = e.options.keepPinnedRows) == null || i ? (r != null ? r : []).map(o => {
                    let s = e.getRow(o, !0);
                    return s.getIsAllParentsExpanded() ? s : null
                }) : (r != null ? r : []).map(o => t.find(s => s.id === o))).filter(Boolean).map(o => ({
                    ...o,
                    position: n
                }))
            }, Ke(e.options, "debugRows", "_getPinnedRows")), e.getTopRows = () => e._getPinnedRows("top"), e.getBottomRows = () => e._getPinnedRows("bottom"), e.getCenterRows = ze(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, r, n) => {
                let i = new Set([...r != null ? r : [], ...n != null ? n : []]);
                return t.filter(a => !i.has(a.id))
            }, Ke(e.options, "debugRows", "getCenterRows"))
        }
    },
    lH = {
        getInitialState: e => ({
            rowSelection: {},
            ...e
        }),
        getDefaultOptions: e => ({
            onRowSelectionChange: Pr("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0
        }),
        createTable: e => {
            e.setRowSelection = t => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = t => {
                var r;
                return e.setRowSelection(t ? {} : (r = e.initialState.rowSelection) != null ? r : {})
            }, e.toggleAllRowsSelected = t => {
                e.setRowSelection(r => {
                    t = typeof t != "undefined" ? t : !e.getIsAllRowsSelected();
                    let n = {
                            ...r
                        },
                        i = e.getPreGroupedRowModel().flatRows;
                    return t ? i.forEach(a => {
                        a.getCanSelect() && (n[a.id] = !0)
                    }) : i.forEach(a => {
                        delete n[a.id]
                    }), n
                })
            }, e.toggleAllPageRowsSelected = t => e.setRowSelection(r => {
                let n = typeof t != "undefined" ? t : !e.getIsAllPageRowsSelected(),
                    i = {
                        ...r
                    };
                return e.getRowModel().rows.forEach(a => {
                    qg(i, a.id, n, !0, e)
                }), i
            }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = ze(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, r) => Object.keys(t).length ? zg(e, r) : {
                rows: [],
                flatRows: [],
                rowsById: {}
            }, Ke(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = ze(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, r) => Object.keys(t).length ? zg(e, r) : {
                rows: [],
                flatRows: [],
                rowsById: {}
            }, Ke(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = ze(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, r) => Object.keys(t).length ? zg(e, r) : {
                rows: [],
                flatRows: [],
                rowsById: {}
            }, Ke(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
                let t = e.getFilteredRowModel().flatRows,
                    {
                        rowSelection: r
                    } = e.getState(),
                    n = !!(t.length && Object.keys(r).length);
                return n && t.some(i => i.getCanSelect() && !r[i.id]) && (n = !1), n
            }, e.getIsAllPageRowsSelected = () => {
                let t = e.getPaginationRowModel().flatRows.filter(i => i.getCanSelect()),
                    {
                        rowSelection: r
                    } = e.getState(),
                    n = !!t.length;
                return n && t.some(i => !r[i.id]) && (n = !1), n
            }, e.getIsSomeRowsSelected = () => {
                var t;
                let r = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
                return r > 0 && r < e.getFilteredRowModel().flatRows.length
            }, e.getIsSomePageRowsSelected = () => {
                let t = e.getPaginationRowModel().flatRows;
                return e.getIsAllPageRowsSelected() ? !1 : t.filter(r => r.getCanSelect()).some(r => r.getIsSelected() || r.getIsSomeSelected())
            }, e.getToggleAllRowsSelectedHandler = () => t => {
                e.toggleAllRowsSelected(t.target.checked)
            }, e.getToggleAllPageRowsSelectedHandler = () => t => {
                e.toggleAllPageRowsSelected(t.target.checked)
            }
        },
        createRow: (e, t) => {
            e.toggleSelected = (r, n) => {
                let i = e.getIsSelected();
                t.setRowSelection(a => {
                    var o;
                    if (r = typeof r != "undefined" ? r : !i, e.getCanSelect() && i === r) return a;
                    let s = {
                        ...a
                    };
                    return qg(s, e.id, r, (o = n == null ? void 0 : n.selectChildren) != null ? o : !0, t), s
                })
            }, e.getIsSelected = () => {
                let {
                    rowSelection: r
                } = t.getState();
                return Xg(e, r)
            }, e.getIsSomeSelected = () => {
                let {
                    rowSelection: r
                } = t.getState();
                return Gg(e, r) === "some"
            }, e.getIsAllSubRowsSelected = () => {
                let {
                    rowSelection: r
                } = t.getState();
                return Gg(e, r) === "all"
            }, e.getCanSelect = () => {
                var r;
                return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (r = t.options.enableRowSelection) != null ? r : !0
            }, e.getCanSelectSubRows = () => {
                var r;
                return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (r = t.options.enableSubRowSelection) != null ? r : !0
            }, e.getCanMultiSelect = () => {
                var r;
                return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (r = t.options.enableMultiRowSelection) != null ? r : !0
            }, e.getToggleSelectedHandler = () => {
                let r = e.getCanSelect();
                return n => {
                    var i;
                    r && e.toggleSelected((i = n.target) == null ? void 0 : i.checked)
                }
            }
        }
    },
    qg = (e, t, r, n, i) => {
        var a;
        let o = i.getRow(t, !0);
        r ? (o.getCanMultiSelect() || Object.keys(e).forEach(s => delete e[s]), o.getCanSelect() && (e[t] = !0)) : delete e[t], n && (a = o.subRows) != null && a.length && o.getCanSelectSubRows() && o.subRows.forEach(s => qg(e, s.id, r, n, i))
    };

function zg(e, t) {
    let r = e.getState().rowSelection,
        n = [],
        i = {},
        a = function(o, s) {
            return o.map(u => {
                var l;
                let c = Xg(u, r);
                if (c && (n.push(u), i[u.id] = u), (l = u.subRows) != null && l.length && (u = {
                        ...u,
                        subRows: a(u.subRows)
                    }), c) return u
            }).filter(Boolean)
        };
    return {
        rows: a(t.rows),
        flatRows: n,
        rowsById: i
    }
}

function Xg(e, t) {
    var r;
    return (r = t[e.id]) != null ? r : !1
}

function Gg(e, t, r) {
    var n;
    if (!((n = e.subRows) != null && n.length)) return !1;
    let i = !0,
        a = !1;
    return e.subRows.forEach(o => {
        if (!(a && !i) && (o.getCanSelect() && (Xg(o, t) ? a = !0 : i = !1), o.subRows && o.subRows.length)) {
            let s = Gg(o, t);
            s === "all" ? a = !0 : (s === "some" && (a = !0), i = !1)
        }
    }), i ? "all" : a ? "some" : !1
}
var Jg = /([0-9]+)/gm,
    uH = (e, t, r) => rC(La(e.getValue(r)).toLowerCase(), La(t.getValue(r)).toLowerCase()),
    cH = (e, t, r) => rC(La(e.getValue(r)), La(t.getValue(r))),
    dH = (e, t, r) => ey(La(e.getValue(r)).toLowerCase(), La(t.getValue(r)).toLowerCase()),
    fH = (e, t, r) => ey(La(e.getValue(r)), La(t.getValue(r))),
    hH = (e, t, r) => {
        let n = e.getValue(r),
            i = t.getValue(r);
        return n > i ? 1 : n < i ? -1 : 0
    },
    mH = (e, t, r) => ey(e.getValue(r), t.getValue(r));

function ey(e, t) {
    return e === t ? 0 : e > t ? 1 : -1
}

function La(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : ""
}

function rC(e, t) {
    let r = e.split(Jg).filter(Boolean),
        n = t.split(Jg).filter(Boolean);
    for (; r.length && n.length;) {
        let i = r.shift(),
            a = n.shift(),
            o = parseInt(i, 10),
            s = parseInt(a, 10),
            u = [o, s].sort();
        if (isNaN(u[0])) {
            if (i > a) return 1;
            if (a > i) return -1;
            continue
        }
        if (isNaN(u[1])) return isNaN(o) ? -1 : 1;
        if (o > s) return 1;
        if (s > o) return -1
    }
    return r.length - n.length
}
var Kl = {
        alphanumeric: uH,
        alphanumericCaseSensitive: cH,
        text: dH,
        textCaseSensitive: fH,
        datetime: hH,
        basic: mH
    },
    pH = {
        getInitialState: e => ({
            sorting: [],
            ...e
        }),
        getDefaultColumnDef: () => ({
            sortingFn: "auto",
            sortUndefined: 1
        }),
        getDefaultOptions: e => ({
            onSortingChange: Pr("sorting", e),
            isMultiSortEvent: t => t.shiftKey
        }),
        createColumn: (e, t) => {
            e.getAutoSortingFn = () => {
                let r = t.getFilteredRowModel().flatRows.slice(10),
                    n = !1;
                for (let i of r) {
                    let a = i == null ? void 0 : i.getValue(e.id);
                    if (Object.prototype.toString.call(a) === "[object Date]") return Kl.datetime;
                    if (typeof a == "string" && (n = !0, a.split(Jg).length > 1)) return Kl.alphanumeric
                }
                return n ? Kl.text : Kl.basic
            }, e.getAutoSortDir = () => {
                let r = t.getFilteredRowModel().flatRows[0];
                return typeof(r == null ? void 0 : r.getValue(e.id)) == "string" ? "asc" : "desc"
            }, e.getSortingFn = () => {
                var r, n;
                if (!e) throw new Error;
                return Kd(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (r = (n = t.options.sortingFns) == null ? void 0 : n[e.columnDef.sortingFn]) != null ? r : Kl[e.columnDef.sortingFn]
            }, e.toggleSorting = (r, n) => {
                let i = e.getNextSortingOrder(),
                    a = typeof r != "undefined" && r !== null;
                t.setSorting(o => {
                    let s = o == null ? void 0 : o.find(h => h.id === e.id),
                        u = o == null ? void 0 : o.findIndex(h => h.id === e.id),
                        l = [],
                        c, d = a ? r : i === "desc";
                    if (o != null && o.length && e.getCanMultiSort() && n ? s ? c = "toggle" : c = "add" : o != null && o.length && u !== o.length - 1 ? c = "replace" : s ? c = "toggle" : c = "replace", c === "toggle" && (a || i || (c = "remove")), c === "add") {
                        var m;
                        l = [...o, {
                            id: e.id,
                            desc: d
                        }], l.splice(0, l.length - ((m = t.options.maxMultiSortColCount) != null ? m : Number.MAX_SAFE_INTEGER))
                    } else c === "toggle" ? l = o.map(h => h.id === e.id ? {
                        ...h,
                        desc: d
                    } : h) : c === "remove" ? l = o.filter(h => h.id !== e.id) : l = [{
                        id: e.id,
                        desc: d
                    }];
                    return l
                })
            }, e.getFirstSortDir = () => {
                var r, n;
                return ((r = (n = e.columnDef.sortDescFirst) != null ? n : t.options.sortDescFirst) != null ? r : e.getAutoSortDir() === "desc") ? "desc" : "asc"
            }, e.getNextSortingOrder = r => {
                var n, i;
                let a = e.getFirstSortDir(),
                    o = e.getIsSorted();
                return o ? o !== a && ((n = t.options.enableSortingRemoval) == null || n) && (!(r && (i = t.options.enableMultiRemove) != null) || i) ? !1 : o === "desc" ? "asc" : "desc" : a
            }, e.getCanSort = () => {
                var r, n;
                return ((r = e.columnDef.enableSorting) != null ? r : !0) && ((n = t.options.enableSorting) != null ? n : !0) && !!e.accessorFn
            }, e.getCanMultiSort = () => {
                var r, n;
                return (r = (n = e.columnDef.enableMultiSort) != null ? n : t.options.enableMultiSort) != null ? r : !!e.accessorFn
            }, e.getIsSorted = () => {
                var r;
                let n = (r = t.getState().sorting) == null ? void 0 : r.find(i => i.id === e.id);
                return n ? n.desc ? "desc" : "asc" : !1
            }, e.getSortIndex = () => {
                var r, n;
                return (r = (n = t.getState().sorting) == null ? void 0 : n.findIndex(i => i.id === e.id)) != null ? r : -1
            }, e.clearSorting = () => {
                t.setSorting(r => r != null && r.length ? r.filter(n => n.id !== e.id) : [])
            }, e.getToggleSortingHandler = () => {
                let r = e.getCanSort();
                return n => {
                    r && (n.persist == null || n.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(n) : !1))
                }
            }
        },
        createTable: e => {
            e.setSorting = t => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = t => {
                var r, n;
                e.setSorting(t ? [] : (r = (n = e.initialState) == null ? void 0 : n.sorting) != null ? r : [])
            }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel())
        }
    },
    gH = [HR, nH, QR, XR, BR, VR, rH, iH, pH, JR, aH, oH, sH, lH, eH];

function iC(e) {
    var t, r;
    let n = [...gH, ...(t = e._features) != null ? t : []],
        i = {
            _features: n
        },
        a = i._features.reduce((m, h) => Object.assign(m, h.getDefaultOptions == null ? void 0 : h.getDefaultOptions(i)), {}),
        o = m => i.options.mergeOptions ? i.options.mergeOptions(a, m) : {
            ...a,
            ...m
        },
        u = {
            ...{},
            ...(r = e.initialState) != null ? r : {}
        };
    i._features.forEach(m => {
        var h;
        u = (h = m.getInitialState == null ? void 0 : m.getInitialState(u)) != null ? h : u
    });
    let l = [],
        c = !1,
        d = {
            _features: n,
            options: {
                ...a,
                ...e
            },
            initialState: u,
            _queue: m => {
                l.push(m), c || (c = !0, Promise.resolve().then(() => {
                    for (; l.length;) l.shift()();
                    c = !1
                }).catch(h => activeWindow.setTimeout(() => {
                    throw h
                })))
            },
            reset: () => {
                i.setState(i.initialState)
            },
            setOptions: m => {
                let h = Oa(m, i.options);
                i.options = o(h)
            },
            getState: () => i.options.state,
            setState: m => {
                i.options.onStateChange == null || i.options.onStateChange(m)
            },
            _getRowId: (m, h, g) => {
                var y;
                return (y = i.options.getRowId == null ? void 0 : i.options.getRowId(m, h, g)) != null ? y : `${g?[g.id,h].join("."):h}`
            },
            getCoreRowModel: () => (i._getCoreRowModel || (i._getCoreRowModel = i.options.getCoreRowModel(i)), i._getCoreRowModel()),
            getRowModel: () => i.getPaginationRowModel(),
            getRow: (m, h) => {
                let g = (h ? i.getPrePaginationRowModel() : i.getRowModel()).rowsById[m];
                if (!g && (g = i.getCoreRowModel().rowsById[m], !g)) throw new Error;
                return g
            },
            _getDefaultColumnDef: ze(() => [i.options.defaultColumn], m => {
                var h;
                return m = (h = m) != null ? h : {}, {
                    header: g => {
                        let y = g.header.column.columnDef;
                        return y.accessorKey ? y.accessorKey : y.accessorFn ? y.id : null
                    },
                    cell: g => {
                        var y, v;
                        return (y = (v = g.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? y : null
                    },
                    ...i._features.reduce((g, y) => Object.assign(g, y.getDefaultColumnDef == null ? void 0 : y.getDefaultColumnDef()), {}),
                    ...m
                }
            }, Ke(e, "debugColumns", "_getDefaultColumnDef")),
            _getColumnDefs: () => i.options.columns,
            getAllColumns: ze(() => [i._getColumnDefs()], m => {
                let h = function(g, y, v) {
                    return v === void 0 && (v = 0), g.map(D => {
                        let I = RR(i, D, v, y),
                            C = D;
                        return I.columns = C.columns ? h(C.columns, I, v + 1) : [], I
                    })
                };
                return h(m)
            }, Ke(e, "debugColumns", "getAllColumns")),
            getAllFlatColumns: ze(() => [i.getAllColumns()], m => m.flatMap(h => h.getFlatColumns()), Ke(e, "debugColumns", "getAllFlatColumns")),
            _getAllFlatColumnsById: ze(() => [i.getAllFlatColumns()], m => m.reduce((h, g) => (h[g.id] = g, h), {}), Ke(e, "debugColumns", "getAllFlatColumnsById")),
            getAllLeafColumns: ze(() => [i.getAllColumns(), i._getOrderColumnsFn()], (m, h) => {
                let g = m.flatMap(y => y.getLeafColumns());
                return h(g)
            }, Ke(e, "debugColumns", "getAllLeafColumns")),
            getColumn: m => i._getAllFlatColumnsById()[m]
        };
    Object.assign(i, d);
    for (let m = 0; m < i._features.length; m++) {
        let h = i._features[m];
        h == null || h.createTable == null || h.createTable(i)
    }
    return i
}

function aC() {
    return e => ze(() => [e.options.data], t => {
        let r = {
                rows: [],
                flatRows: [],
                rowsById: {}
            },
            n = function(i, a, o) {
                a === void 0 && (a = 0);
                let s = [];
                for (let l = 0; l < i.length; l++) {
                    let c = Zg(e, e._getRowId(i[l], l, o), i[l], l, a, void 0, o == null ? void 0 : o.id);
                    if (r.flatRows.push(c), r.rowsById[c.id] = c, s.push(c), e.options.getSubRows) {
                        var u;
                        c.originalSubRows = e.options.getSubRows(i[l], l), (u = c.originalSubRows) != null && u.length && (c.subRows = n(c.originalSubRows, a + 1, c))
                    }
                }
                return s
            };
        return r.rows = n(t), r
    }, Ke(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()))
}

function yH(e, t, r) {
    return r.options.filterFromLeafRows ? vH(e, t, r) : wH(e, t, r)
}

function vH(e, t, r) {
    var n;
    let i = [],
        a = {},
        o = (n = r.options.maxLeafRowFilterDepth) != null ? n : 100,
        s = function(u, l) {
            l === void 0 && (l = 0);
            let c = [];
            for (let m = 0; m < u.length; m++) {
                var d;
                let h = u[m],
                    g = Zg(r, h.id, h.original, h.index, h.depth, void 0, h.parentId);
                if (g.columnFilters = h.columnFilters, (d = h.subRows) != null && d.length && l < o) {
                    if (g.subRows = s(h.subRows, l + 1), h = g, t(h) && !g.subRows.length) {
                        c.push(h), a[h.id] = h, i.push(h);
                        continue
                    }
                    if (t(h) || g.subRows.length) {
                        c.push(h), a[h.id] = h, i.push(h);
                        continue
                    }
                } else h = g, t(h) && (c.push(h), a[h.id] = h, i.push(h))
            }
            return c
        };
    return {
        rows: s(e),
        flatRows: i,
        rowsById: a
    }
}

function wH(e, t, r) {
    var n;
    let i = [],
        a = {},
        o = (n = r.options.maxLeafRowFilterDepth) != null ? n : 100,
        s = function(u, l) {
            l === void 0 && (l = 0);
            let c = [];
            for (let m = 0; m < u.length; m++) {
                let h = u[m];
                if (t(h)) {
                    var d;
                    if ((d = h.subRows) != null && d.length && l < o) {
                        let y = Zg(r, h.id, h.original, h.index, h.depth, void 0, h.parentId);
                        y.subRows = s(h.subRows, l + 1), h = y
                    }
                    c.push(h), i.push(h), a[h.id] = h
                }
            }
            return c
        };
    return {
        rows: s(e),
        flatRows: i,
        rowsById: a
    }
}

function oC() {
    return e => ze(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, r, n) => {
        if (!t.rows.length || !(r != null && r.length) && !n) {
            for (let m = 0; m < t.flatRows.length; m++) t.flatRows[m].columnFilters = {}, t.flatRows[m].columnFiltersMeta = {};
            return t
        }
        let i = [],
            a = [];
        (r != null ? r : []).forEach(m => {
            var h;
            let g = e.getColumn(m.id);
            if (!g) return;
            let y = g.getFilterFn();
            y && i.push({
                id: m.id,
                filterFn: y,
                resolvedValue: (h = y.resolveFilterValue == null ? void 0 : y.resolveFilterValue(m.value)) != null ? h : m.value
            })
        });
        let o = r.map(m => m.id),
            s = e.getGlobalFilterFn(),
            u = e.getAllLeafColumns().filter(m => m.getCanGlobalFilter());
        n && s && u.length && (o.push("__global__"), u.forEach(m => {
            var h;
            a.push({
                id: m.id,
                filterFn: s,
                resolvedValue: (h = s.resolveFilterValue == null ? void 0 : s.resolveFilterValue(n)) != null ? h : n
            })
        }));
        let l, c;
        for (let m = 0; m < t.flatRows.length; m++) {
            let h = t.flatRows[m];
            if (h.columnFilters = {}, i.length)
                for (let g = 0; g < i.length; g++) {
                    l = i[g];
                    let y = l.id;
                    h.columnFilters[y] = l.filterFn(h, y, l.resolvedValue, v => {
                        h.columnFiltersMeta[y] = v
                    })
                }
            if (a.length) {
                for (let g = 0; g < a.length; g++) {
                    c = a[g];
                    let y = c.id;
                    if (c.filterFn(h, y, c.resolvedValue, v => {
                            h.columnFiltersMeta[y] = v
                        })) {
                        h.columnFilters.__global__ = !0;
                        break
                    }
                }
                h.columnFilters.__global__ !== !0 && (h.columnFilters.__global__ = !1)
            }
        }
        let d = m => {
            for (let h = 0; h < o.length; h++)
                if (m.columnFilters[o[h]] === !1) return !1;
            return !0
        };
        return yH(t.rows, d, e)
    }, Ke(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()))
}

function sC() {
    return e => ze(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, r) => {
        if (!r.rows.length || !(t != null && t.length)) return r;
        let n = e.getState().sorting,
            i = [],
            a = n.filter(u => {
                var l;
                return (l = e.getColumn(u.id)) == null ? void 0 : l.getCanSort()
            }),
            o = {};
        a.forEach(u => {
            let l = e.getColumn(u.id);
            l && (o[u.id] = {
                sortUndefined: l.columnDef.sortUndefined,
                invertSorting: l.columnDef.invertSorting,
                sortingFn: l.getSortingFn()
            })
        });
        let s = u => {
            let l = u.map(c => ({
                ...c
            }));
            return l.sort((c, d) => {
                for (let h = 0; h < a.length; h += 1) {
                    var m;
                    let g = a[h],
                        y = o[g.id],
                        v = y.sortUndefined,
                        D = (m = g == null ? void 0 : g.desc) != null ? m : !1,
                        I = 0;
                    if (v) {
                        let C = c.getValue(g.id),
                            x = d.getValue(g.id),
                            O = C === void 0,
                            A = x === void 0;
                        if (O || A) {
                            if (v === "first") return O ? -1 : 1;
                            if (v === "last") return O ? 1 : -1;
                            I = O && A ? 0 : O ? v : -v
                        }
                    }
                    if (I === 0 && (I = y.sortingFn(c, d, g.id)), I !== 0) return D && (I *= -1), y.invertSorting && (I *= -1), I
                }
                return c.index - d.index
            }), l.forEach(c => {
                var d;
                i.push(c), (d = c.subRows) != null && d.length && (c.subRows = s(c.subRows))
            }), l
        };
        return {
            rows: s(r.rows),
            flatRows: i,
            rowsById: r.rowsById
        }
    }, Ke(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()))
}

function ty(e, t) {
    return e ? bH(e) ? xr(e, t) : e : null
}

function bH(e) {
    return DH(e) || typeof e == "function" || SH(e)
}

function DH(e) {
    return typeof e == "function" && (() => {
        let t = Object.getPrototypeOf(e);
        return t.prototype && t.prototype.isReactComponent
    })()
}

function SH(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description)
}

function lC(e) {
    let t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e
        },
        [r] = Ne(() => ({
            current: iC(t)
        })),
        [n, i] = Ne(() => r.current.initialState);
    return r.current.setOptions(a => ({
        ...a,
        ...e,
        state: {
            ...n,
            ...e.state
        },
        onStateChange: o => {
            i(o), e.onStateChange == null || e.onStateChange(o)
        }
    })), r.current
}
var EC = Ct(ln());
var fC = {
        \u00C0: "A",
        \u00C1: "A",
        \u00C2: "A",
        \u00C3: "A",
        \u00C4: "A",
        \u00C5: "A",
        \u1EA4: "A",
        \u1EAE: "A",
        \u1EB2: "A",
        \u1EB4: "A",
        \u1EB6: "A",
        \u00C6: "AE",
        \u1EA6: "A",
        \u1EB0: "A",
        \u0202: "A",
        \u00C7: "C",
        \u1E08: "C",
        \u00C8: "E",
        \u00C9: "E",
        \u00CA: "E",
        \u00CB: "E",
        \u1EBE: "E",
        \u1E16: "E",
        \u1EC0: "E",
        \u1E14: "E",
        \u1E1C: "E",
        \u0206: "E",
        \u00CC: "I",
        \u00CD: "I",
        \u00CE: "I",
        \u00CF: "I",
        \u1E2E: "I",
        \u020A: "I",
        \u00D0: "D",
        \u00D1: "N",
        \u00D2: "O",
        \u00D3: "O",
        \u00D4: "O",
        \u00D5: "O",
        \u00D6: "O",
        \u00D8: "O",
        \u1ED0: "O",
        \u1E4C: "O",
        \u1E52: "O",
        \u020E: "O",
        \u00D9: "U",
        \u00DA: "U",
        \u00DB: "U",
        \u00DC: "U",
        \u00DD: "Y",
        \u00E0: "a",
        \u00E1: "a",
        \u00E2: "a",
        \u00E3: "a",
        \u00E4: "a",
        \u00E5: "a",
        \u1EA5: "a",
        \u1EAF: "a",
        \u1EB3: "a",
        \u1EB5: "a",
        \u1EB7: "a",
        \u00E6: "ae",
        \u1EA7: "a",
        \u1EB1: "a",
        \u0203: "a",
        \u00E7: "c",
        \u1E09: "c",
        \u00E8: "e",
        \u00E9: "e",
        \u00EA: "e",
        \u00EB: "e",
        \u1EBF: "e",
        \u1E17: "e",
        \u1EC1: "e",
        \u1E15: "e",
        \u1E1D: "e",
        \u0207: "e",
        \u00EC: "i",
        \u00ED: "i",
        \u00EE: "i",
        \u00EF: "i",
        \u1E2F: "i",
        \u020B: "i",
        \u00F0: "d",
        \u00F1: "n",
        \u00F2: "o",
        \u00F3: "o",
        \u00F4: "o",
        \u00F5: "o",
        \u00F6: "o",
        \u00F8: "o",
        \u1ED1: "o",
        \u1E4D: "o",
        \u1E53: "o",
        \u020F: "o",
        \u00F9: "u",
        \u00FA: "u",
        \u00FB: "u",
        \u00FC: "u",
        \u00FD: "y",
        \u00FF: "y",
        \u0100: "A",
        \u0101: "a",
        \u0102: "A",
        \u0103: "a",
        \u0104: "A",
        \u0105: "a",
        \u0106: "C",
        \u0107: "c",
        \u0108: "C",
        \u0109: "c",
        \u010A: "C",
        \u010B: "c",
        \u010C: "C",
        \u010D: "c",
        C\u0306: "C",
        c\u0306: "c",
        \u010E: "D",
        \u010F: "d",
        \u0110: "D",
        \u0111: "d",
        \u0112: "E",
        \u0113: "e",
        \u0114: "E",
        \u0115: "e",
        \u0116: "E",
        \u0117: "e",
        \u0118: "E",
        \u0119: "e",
        \u011A: "E",
        \u011B: "e",
        \u011C: "G",
        \u01F4: "G",
        \u011D: "g",
        \u01F5: "g",
        \u011E: "G",
        \u011F: "g",
        \u0120: "G",
        \u0121: "g",
        \u0122: "G",
        \u0123: "g",
        \u0124: "H",
        \u0125: "h",
        \u0126: "H",
        \u0127: "h",
        \u1E2A: "H",
        \u1E2B: "h",
        \u0128: "I",
        \u0129: "i",
        \u012A: "I",
        \u012B: "i",
        \u012C: "I",
        \u012D: "i",
        \u012E: "I",
        \u012F: "i",
        \u0130: "I",
        \u0131: "i",
        \u0132: "IJ",
        \u0133: "ij",
        \u0134: "J",
        \u0135: "j",
        \u0136: "K",
        \u0137: "k",
        \u1E30: "K",
        \u1E31: "k",
        K\u0306: "K",
        k\u0306: "k",
        \u0139: "L",
        \u013A: "l",
        \u013B: "L",
        \u013C: "l",
        \u013D: "L",
        \u013E: "l",
        \u013F: "L",
        \u0140: "l",
        \u0141: "l",
        \u0142: "l",
        \u1E3E: "M",
        \u1E3F: "m",
        M\u0306: "M",
        m\u0306: "m",
        \u0143: "N",
        \u0144: "n",
        \u0145: "N",
        \u0146: "n",
        \u0147: "N",
        \u0148: "n",
        \u0149: "n",
        N\u0306: "N",
        n\u0306: "n",
        \u014C: "O",
        \u014D: "o",
        \u014E: "O",
        \u014F: "o",
        \u0150: "O",
        \u0151: "o",
        \u0152: "OE",
        \u0153: "oe",
        P\u0306: "P",
        p\u0306: "p",
        \u0154: "R",
        \u0155: "r",
        \u0156: "R",
        \u0157: "r",
        \u0158: "R",
        \u0159: "r",
        R\u0306: "R",
        r\u0306: "r",
        \u0212: "R",
        \u0213: "r",
        \u015A: "S",
        \u015B: "s",
        \u015C: "S",
        \u015D: "s",
        \u015E: "S",
        \u0218: "S",
        \u0219: "s",
        \u015F: "s",
        \u0160: "S",
        \u0161: "s",
        \u0162: "T",
        \u0163: "t",
        \u021B: "t",
        \u021A: "T",
        \u0164: "T",
        \u0165: "t",
        \u0166: "T",
        \u0167: "t",
        T\u0306: "T",
        t\u0306: "t",
        \u0168: "U",
        \u0169: "u",
        \u016A: "U",
        \u016B: "u",
        \u016C: "U",
        \u016D: "u",
        \u016E: "U",
        \u016F: "u",
        \u0170: "U",
        \u0171: "u",
        \u0172: "U",
        \u0173: "u",
        \u0216: "U",
        \u0217: "u",
        V\u0306: "V",
        v\u0306: "v",
        \u0174: "W",
        \u0175: "w",
        \u1E82: "W",
        \u1E83: "w",
        X\u0306: "X",
        x\u0306: "x",
        \u0176: "Y",
        \u0177: "y",
        \u0178: "Y",
        Y\u0306: "Y",
        y\u0306: "y",
        \u0179: "Z",
        \u017A: "z",
        \u017B: "Z",
        \u017C: "z",
        \u017D: "Z",
        \u017E: "z",
        \u017F: "s",
        \u0192: "f",
        \u01A0: "O",
        \u01A1: "o",
        \u01AF: "U",
        \u01B0: "u",
        \u01CD: "A",
        \u01CE: "a",
        \u01CF: "I",
        \u01D0: "i",
        \u01D1: "O",
        \u01D2: "o",
        \u01D3: "U",
        \u01D4: "u",
        \u01D5: "U",
        \u01D6: "u",
        \u01D7: "U",
        \u01D8: "u",
        \u01D9: "U",
        \u01DA: "u",
        \u01DB: "U",
        \u01DC: "u",
        \u1EE8: "U",
        \u1EE9: "u",
        \u1E78: "U",
        \u1E79: "u",
        \u01FA: "A",
        \u01FB: "a",
        \u01FC: "AE",
        \u01FD: "ae",
        \u01FE: "O",
        \u01FF: "o",
        \u00DE: "TH",
        \u00FE: "th",
        \u1E54: "P",
        \u1E55: "p",
        \u1E64: "S",
        \u1E65: "s",
        X\u0301: "X",
        x\u0301: "x",
        \u0403: "\u0413",
        \u0453: "\u0433",
        \u040C: "\u041A",
        \u045C: "\u043A",
        A\u030B: "A",
        a\u030B: "a",
        E\u030B: "E",
        e\u030B: "e",
        I\u030B: "I",
        i\u030B: "i",
        \u01F8: "N",
        \u01F9: "n",
        \u1ED2: "O",
        \u1ED3: "o",
        \u1E50: "O",
        \u1E51: "o",
        \u1EEA: "U",
        \u1EEB: "u",
        \u1E80: "W",
        \u1E81: "w",
        \u1EF2: "Y",
        \u1EF3: "y",
        \u0200: "A",
        \u0201: "a",
        \u0204: "E",
        \u0205: "e",
        \u0208: "I",
        \u0209: "i",
        \u020C: "O",
        \u020D: "o",
        \u0210: "R",
        \u0211: "r",
        \u0214: "U",
        \u0215: "u",
        B\u030C: "B",
        b\u030C: "b",
        \u010C\u0323: "C",
        \u010D\u0323: "c",
        \u00CA\u030C: "E",
        \u00EA\u030C: "e",
        F\u030C: "F",
        f\u030C: "f",
        \u01E6: "G",
        \u01E7: "g",
        \u021E: "H",
        \u021F: "h",
        J\u030C: "J",
        \u01F0: "j",
        \u01E8: "K",
        \u01E9: "k",
        M\u030C: "M",
        m\u030C: "m",
        P\u030C: "P",
        p\u030C: "p",
        Q\u030C: "Q",
        q\u030C: "q",
        \u0158\u0329: "R",
        \u0159\u0329: "r",
        \u1E66: "S",
        \u1E67: "s",
        V\u030C: "V",
        v\u030C: "v",
        W\u030C: "W",
        w\u030C: "w",
        X\u030C: "X",
        x\u030C: "x",
        Y\u030C: "Y",
        y\u030C: "y",
        A\u0327: "A",
        a\u0327: "a",
        B\u0327: "B",
        b\u0327: "b",
        \u1E10: "D",
        \u1E11: "d",
        \u0228: "E",
        \u0229: "e",
        \u0190\u0327: "E",
        \u025B\u0327: "e",
        \u1E28: "H",
        \u1E29: "h",
        I\u0327: "I",
        i\u0327: "i",
        \u0197\u0327: "I",
        \u0268\u0327: "i",
        M\u0327: "M",
        m\u0327: "m",
        O\u0327: "O",
        o\u0327: "o",
        Q\u0327: "Q",
        q\u0327: "q",
        U\u0327: "U",
        u\u0327: "u",
        X\u0327: "X",
        x\u0327: "x",
        Z\u0327: "Z",
        z\u0327: "z"
    },
    EH = Object.keys(fC).join("|"),
    kH = new RegExp(EH, "g");

function xH(e) {
    return e.replace(kH, t => fC[t])
}
var rr = {
    CASE_SENSITIVE_EQUAL: 7,
    EQUAL: 6,
    STARTS_WITH: 5,
    WORD_STARTS_WITH: 4,
    CONTAINS: 3,
    ACRONYM: 2,
    MATCHES: 1,
    NO_MATCH: 0
};

function hC(e, t, r) {
    var n;
    if (r = r || {}, r.threshold = (n = r.threshold) != null ? n : rr.MATCHES, !r.accessors) {
        let o = uC(e, t, r);
        return {
            rankedValue: e,
            rank: o,
            accessorIndex: -1,
            accessorThreshold: r.threshold,
            passed: o >= r.threshold
        }
    }
    let i = TH(e, r.accessors),
        a = {
            rankedValue: e,
            rank: rr.NO_MATCH,
            accessorIndex: -1,
            accessorThreshold: r.threshold,
            passed: !1
        };
    for (let o = 0; o < i.length; o++) {
        let s = i[o],
            u = uC(s.itemValue, t, r),
            {
                minRanking: l,
                maxRanking: c,
                threshold: d = r.threshold
            } = s.attributes;
        u < l && u >= rr.MATCHES ? u = l : u > c && (u = c), u = Math.min(u, c), u >= d && u > a.rank && (a.rank = u, a.passed = !0, a.accessorIndex = o, a.accessorThreshold = d, a.rankedValue = s.itemValue)
    }
    return a
}

function uC(e, t, r) {
    return e = cC(e, r), t = cC(t, r), t.length > e.length ? rr.NO_MATCH : e === t ? rr.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), t = t.toLowerCase(), e === t ? rr.EQUAL : e.startsWith(t) ? rr.STARTS_WITH : e.includes(` ${t}`) ? rr.WORD_STARTS_WITH : e.includes(t) ? rr.CONTAINS : t.length === 1 ? rr.NO_MATCH : CH(e).includes(t) ? rr.ACRONYM : _H(e, t))
}

function CH(e) {
    let t = "";
    return e.split(" ").forEach(n => {
        n.split("-").forEach(a => {
            t += a.substr(0, 1)
        })
    }), t
}

function _H(e, t) {
    let r = 0,
        n = 0;

    function i(u, l, c) {
        for (let d = c, m = l.length; d < m; d++)
            if (l[d] === u) return r += 1, d + 1;
        return -1
    }

    function a(u) {
        let l = 1 / u,
            c = r / t.length;
        return rr.MATCHES + c * l
    }
    let o = i(t[0], e, 0);
    if (o < 0) return rr.NO_MATCH;
    n = o;
    for (let u = 1, l = t.length; u < l; u++) {
        let c = t[u];
        if (n = i(c, e, n), !(n > -1)) return rr.NO_MATCH
    }
    let s = n - o;
    return a(s)
}

function mC(e, t) {
    return e.rank === t.rank ? 0 : e.rank > t.rank ? -1 : 1
}

function cC(e, t) {
    let {
        keepDiacritics: r
    } = t;
    return e = `${e}`, r || (e = xH(e)), e
}

function MH(e, t) {
    let r = t;
    typeof t == "object" && (r = t.accessor);
    let n = r(e);
    return n == null ? [] : Array.isArray(n) ? n : [String(n)]
}

function TH(e, t) {
    let r = [];
    for (let n = 0, i = t.length; n < i; n++) {
        let a = t[n],
            o = FH(a),
            s = MH(e, a);
        for (let u = 0, l = s.length; u < l; u++) r.push({
            itemValue: s[u],
            attributes: o
        })
    }
    return r
}
var dC = {
    maxRanking: 1 / 0,
    minRanking: -1 / 0
};

function FH(e) {
    return typeof e == "function" ? dC : {
        ...dC,
        ...e
    }
}
var yC = require("obsidian");
var ny = Ct(gC());
var vC = zt(function({
        item: t,
        hideDateDisplay: r,
        shouldShowRelativeDate: n
    }) {
        let {
            stateManager: i,
            filePath: a
        } = Ee(tt), {
            onEditDate: o,
            onEditTime: s
        } = ug(t.item, t.path), u = fa(i);
        return E(ct, {
            children: [n ? E(rd, {
                item: t.item,
                stateManager: i
            }) : null, r ? null : E(id, {
                item: t.item,
                stateManager: i,
                filePath: a != null ? a : "",
                onEditDate: o,
                onEditTime: s,
                getDateColor: u
            })]
        })
    }),
    wC = zt(function({
        item: t,
        lane: r,
        path: n
    }) {
        let {
            stateManager: i,
            boardModifiers: a
        } = Ee(tt), o = Ee(zn), [s, u] = Ne(null), l = !!r.data.shouldMarkItemsComplete, c = gd({
            boardModifiers: a,
            item: t,
            setEditState: u,
            stateManager: i,
            path: n
        }), d = Ye(h => {
            kn(s) || h.targetNode.instanceOf(HTMLAnchorElement) && (h.targetNode.hasClass("internal-link") || h.targetNode.hasClass("external-link")) || c(h)
        }, [c, s]), m = Ye(h => {
            u({
                x: h.clientX,
                y: h.clientY
            })
        }, []);
        return E(Uu.Provider, {
            value: n,
            children: E("div", {
                onContextMenu: d,
                onDblClick: m,
                className: $("item-content-wrapper"),
                children: E("div", {
                    className: $("item-title-wrapper"),
                    children: [E(md, {
                        boardModifiers: a,
                        item: t,
                        path: n,
                        shouldMarkItemsComplete: l,
                        stateManager: i
                    }), E(ad, {
                        editState: s,
                        item: t,
                        setEditState: u,
                        showMetadata: !1,
                        searchQuery: o == null ? void 0 : o.query,
                        isStatic: !1
                    })]
                })
            })
        })
    }, (e, t) => e.lane.data.shouldMarkItemsComplete === t.lane.data.shouldMarkItemsComplete && (0, ny.default)(e.item, t.item) && (0, ny.default)(e.path, t.path)),
    bC = zt(function({
        lane: t,
        path: r
    }) {
        let {
            stateManager: n
        } = Ee(tt), i = Ee(zn);
        return E("div", {
            className: $("cell-flex-wrapper"),
            children: [E(Sa, {
                searchQuery: i == null ? void 0 : i.query,
                markdownString: t.data.title
            }), E("div", {
                onClick: a => {
                    let o = new yC.Menu,
                        s = n.state.children;
                    for (let u = 0, l = s.length; u < l; u++) {
                        let c = s[u];
                        o.addItem(d => d.setChecked(t === c).setTitle(c.data.title).onClick(() => {
                            t !== c && n.setState(m => {
                                let h = m.children[u];
                                return Ri(m, r, [u, h.children.length])
                            })
                        }))
                    }
                    o.showAtMouseEvent(a)
                },
                className: Ge(["clickable-icon", $("icon-wrapper"), $("lane-menu")]),
                children: E(Ut, {
                    name: "lucide-square-kanban"
                })
            })]
        })
    });
var xs = qx(),
    DC = (e, t, r, n) => {
        let i = e.getValue(t);
        if (i === null) return !1;
        let a = e.original.stateManager,
            o = i.value ? In(i.value, a) : In(i, a),
            s = hC(o, r, {
                threshold: rr.CONTAINS
            });
        return n({
            itemRank: s
        }), s.passed
    },
    Cs = (e, t, r) => {
        var n, i;
        return !e.columnFiltersMeta[r] && !t.columnFiltersMeta[r] ? null : e.columnFiltersMeta[r] ? t.columnFiltersMeta[r] ? mC((n = e.columnFiltersMeta[r]) == null ? void 0 : n.itemRank, (i = t.columnFiltersMeta[r]) == null ? void 0 : i.itemRank) : 1 : -1
    };

function PH(e, t) {
    return Re(() => {
        var c;
        let r = [],
            n = new Set,
            i = new Set,
            a = new Set,
            o = new Map,
            s = (e == null ? void 0 : e.children) || [],
            u = t.getSetting("metadata-keys"),
            l = t.getSetting("inline-metadata-position") !== "body";
        for (let d = 0, m = s.length; d < m; d++) {
            let h = s[d];
            for (let g = 0, y = h.children.length; g < y; g++) {
                let v = h.children[g],
                    D = v.data.metadata,
                    I = D.fileMetadata || {},
                    C = D.fileMetadataOrder || [],
                    x = D.inlineMetadata;
                !n.has("date") && D.date && n.add("date"), !n.has("tags") && ((c = D.tags) != null && c.length) && n.add("tags");
                for (let O of C) !i.has(O) && I[O] && (i.add(O), o.set(O, I[O].label || O));
                x && l && x.forEach(O => {
                    if (!a.has(O.key) && (a.add(O.key), !o.has(O.key)))
                        if (yi.has(O.key)) o.set(O.key, No(O.key));
                        else {
                            let A = u.find(P => P.metadataKey === O.key);
                            o.set(O.key, (A == null ? void 0 : A.label) || O.key)
                        }
                }), r.push({
                    item: v,
                    lane: h,
                    path: [d, g],
                    stateManager: t
                })
            }
        }
        return {
            items: r,
            metadataLabels: o,
            metadata: Array.from(n),
            fileMetadata: Array.from(i),
            inlineMetadata: Array.from(a)
        }
    }, [e])
}
var NH = e => [xs.accessor(t => t.item.data.title, {
    id: "card",
    cell: t => {
        let {
            lane: r,
            item: n,
            path: i
        } = t.row.original;
        return E(wC, {
            item: n,
            lane: r,
            path: i
        })
    },
    header: () => R("Card"),
    sortingFn: (t, r, n) => {
        let i = Cs(t, r, n);
        return i === null ? fr(t.getValue(n), r.getValue(n)) : i
    },
    size: e.card || 272
}), xs.accessor(t => t.lane.data.title, {
    id: "lane",
    cell: t => {
        let {
            lane: r,
            path: n
        } = t.row.original;
        return E(bC, {
            lane: r,
            path: n
        })
    },
    header: () => R("List"),
    sortingFn: (t, r, n) => {
        let i = Cs(t, r, n);
        return i === null ? fr(t.getValue(n), r.getValue(n)) : i
    },
    size: e.lane
})];

function SC(e, t) {
    let r = Ee(zn),
        [n, i] = Ne([]),
        a = t.useSetting("show-relative-date"),
        o = t.useSetting("move-dates"),
        s = t.useSetting("move-tags"),
        u = t.useSetting("inline-metadata-position") !== "body",
        l = t.useSetting("move-task-metadata"),
        c = t.useSetting("table-sizing") || {},
        d = Fe(!1),
        m = Ye(A => {
            i(P => {
                let B = A(P);
                return B.length && (d.current = B[0].desc), B
            })
        }, [i]),
        h = Re(() => ({
            sorting: n,
            globalFilter: r == null ? void 0 : r.query
        }), [n, r == null ? void 0 : r.query]),
        {
            items: g,
            metadata: y,
            fileMetadata: v,
            inlineMetadata: D,
            metadataLabels: I
        } = PH(e, t),
        C = Re(() => {
            let A = [...NH(c)];
            for (let P of y) switch (P) {
                case "date":
                    (a || o) && A.push(xs.accessor(B => {
                        var G;
                        return ((G = B.item.data.metadata) == null ? void 0 : G.date) || null
                    }, {
                        header: () => R("Date"),
                        id: "date",
                        size: c.date,
                        cell: B => B.getValue() ? E(vC, {
                            item: B.row.original,
                            shouldShowRelativeDate: a,
                            hideDateDisplay: !o
                        }) : null,
                        sortUndefined: !1,
                        sortingFn: (B, G, J) => {
                            let Q = Cs(B, G, J);
                            if (Q === null) {
                                let oe = B.getValue(J),
                                    te = G.getValue(J);
                                return !oe && !te ? 0 : oe ? te ? oe.valueOf() - te.valueOf() : d.current ? 1 : -1 : d.current ? -1 : 1
                            }
                            return Q
                        },
                        sortDescFirst: !1
                    }));
                    break;
                case "tags":
                    s && A.push(xs.accessor(B => {
                        var G;
                        return ((G = B.item.data.metadata) == null ? void 0 : G.tags) || null
                    }, {
                        header: () => R("Tags"),
                        id: "card-tags",
                        size: c["card-tags"],
                        cell: B => {
                            let G = B.table.getState().globalFilter,
                                J = B.getValue();
                            return J != null && J.length ? E(ps, {
                                tags: J,
                                searchQuery: G
                            }) : null
                        },
                        sortUndefined: !1,
                        sortingFn: (B, G, J) => {
                            var oe, te;
                            let Q = Cs(B, G, J);
                            if (Q === null) {
                                let re = B.getValue(J),
                                    ne = G.getValue(J);
                                if (!(re != null && re.length) && !(ne != null && ne.length)) return 0;
                                if (!(re != null && re.length)) return d.current ? -1 : 1;
                                if (!(ne != null && ne.length)) return d.current ? 1 : -1;
                                let be = t.getSetting("tag-sort"),
                                    pe = (oe = be == null ? void 0 : be.findIndex(Ce => re.includes(Ce.tag))) != null ? oe : -1,
                                    De = (te = be == null ? void 0 : be.findIndex(Ce => ne.includes(Ce.tag))) != null ? te : -1;
                                return pe > -1 && De < 0 ? -1 : De > -1 && pe < 0 ? 1 : pe > -1 && De > -1 ? pe - De : fr(re.join(""), ne.join(""))
                            }
                            return Q
                        },
                        sortDescFirst: !1
                    }));
                    break
            }
            return A
        }, [a, o, s, ...y]),
        x = Re(() => {
            var P;
            let A = [...C];
            for (let B of D) A.push(xs.accessor(G => {
                var Q;
                let J = (Q = G.item.data.metadata.inlineMetadata) == null ? void 0 : Q.find(oe => oe.key === B);
                return J || null
            }, {
                id: B,
                header: (P = I.get(B)) != null ? P : B,
                cell: G => {
                    var be, pe, De;
                    let J = G.getValue();
                    if (!J) return null;
                    let Q = yi.has(J.key);
                    if (!l && Q || !u && !Q) return null;
                    let oe = J.wrapping === "emoji-shorthand",
                        te = (De = (pe = (be = il()) == null ? void 0 : be.api) == null ? void 0 : pe.parse(J.value)) != null ? De : J.value,
                        re = oe && J.key === "priority",
                        ne = !!(te != null && te.ts);
                    return E("span", {
                        className: Ge([$("item-task-inline-metadata-item"), J.key.replace(/[^a-z0-9]/g, "-"), {
                            "is-task-metadata": Q,
                            "is-emoji": oe,
                            "is-date": ne
                        }]),
                        children: !re && E("span", {
                            className: $("item-task-inline-metadata-item-value"),
                            children: E(hs, {
                                searchQuery: r == null ? void 0 : r.query,
                                data: {
                                    value: te,
                                    label: "",
                                    metadataKey: J.key,
                                    shouldHideLabel: !1,
                                    containsMarkdown: !1
                                }
                            })
                        })
                    })
                },
                sortDescFirst: !1,
                sortingFn: (G, J, Q) => {
                    let oe = G.getValue(Q),
                        te = J.getValue(Q);
                    if (oe === null && te === null) return 0;
                    if (oe === null) return d.current ? -1 : 1;
                    if (te === null) return d.current ? 1 : -1;
                    let re = Cs(G, J, Q);
                    return re === null ? fr(In(oe.value, t), In(te.value, t)) : re
                }
            }));
            return A
        }, [C, ...D, ...I.values()]),
        O = Re(() => {
            var P;
            let A = [...x];
            for (let B of v) A.push(xs.accessor(G => {
                var Q;
                let J = (Q = G.item.data.metadata) == null ? void 0 : Q.fileMetadata;
                return J && J[B] ? J[B] : null
            }, {
                id: B,
                header: (P = I.get(B)) != null ? P : B,
                cell: G => {
                    let J = G.getValue();
                    if (!J) return null;
                    let Q = G.table.getState().globalFilter;
                    return B === "tags" ? E(ps, {
                        searchQuery: Q,
                        tags: J.value,
                        alwaysShow: !0
                    }) : E(hs, {
                        data: J,
                        searchQuery: Q
                    })
                },
                sortDescFirst: !1,
                sortingFn: (G, J, Q) => {
                    var ne, be;
                    let oe = G.getValue(Q),
                        te = J.getValue(Q);
                    if (!(oe != null && oe.value) && !(te != null && te.value)) return 0;
                    if (!(oe != null && oe.value)) return d.current ? -1 : 1;
                    if (!(te != null && te.value)) return d.current ? 1 : -1;
                    let re = Cs(G, J, Q);
                    if (re === null) {
                        if (Q === "tags") {
                            let pe = t.getSetting("tag-sort"),
                                De = (ne = pe == null ? void 0 : pe.findIndex(U => oe.value.includes(U.tag))) != null ? ne : -1,
                                Ce = (be = pe == null ? void 0 : pe.findIndex(U => te.value.includes(U.tag))) != null ? be : -1;
                            if (De > -1 && Ce < 0) return -1;
                            if (Ce > -1 && De < 0) return 1;
                            if (De > -1 && Ce > -1) return De - Ce
                        }
                        return fr(In(oe.value, t), In(te.value, t))
                    }
                    return re
                }
            }));
            return A
        }, [x, ...v, ...I.values()]);
    return {
        data: g,
        columns: O,
        state: h,
        setSorting: m
    }
}

function RH() {
    let e = Fe(),
        t = Fe(),
        r = Fe(new WeakMap),
        n = Fe([]);
    Ae(() => () => {
        var o;
        (o = e.current) == null || o.disconnect(), r.current = null, n.current.length = 0
    }, []);
    let i = o => {
            if (!o || t.current === o) return;
            e.current && e.current.disconnect();
            let s = getComputedStyle(o);
            e.current = new IntersectionObserver(u => {
                u.forEach(l => {
                    if (!r.current.has(l.target)) return;
                    r.current.get(l.target)(l)
                })
            }, {
                root: o,
                threshold: .01,
                rootMargin: `${s.paddingTop} 0px ${s.paddingBottom} 0px`
            }), t.current = o, n.current.forEach(u => e.current.observe(u)), n.current.length = 0
        },
        a = Re(() => ({
            registerHandler: (o, s) => {
                if (o) {
                    if (r.current.set(o, s), !e.current) {
                        n.current.push(o);
                        return
                    }
                    e.current.observe(o)
                }
            },
            unregisterHandler: o => {
                var s, u, l;
                o && ((s = r.current) == null || s.delete(o), (u = n.current) != null && u.length && (n.current = n.current.filter(c => c !== o)), (l = e.current) == null || l.unobserve(o))
            }
        }), []);
    return {
        bindObserver: i,
        context: a
    }
}

function kC({
    boardData: e,
    stateManager: t
}) {
    let {
        bindObserver: r,
        context: n
    } = RH(), {
        data: i,
        columns: a,
        state: o,
        setSorting: s
    } = SC(e, t), u = lC({
        data: i,
        columns: a,
        state: o,
        globalFilterFn: DC,
        getColumnCanGlobalFilter: () => !0,
        enableColumnResizing: !0,
        columnResizeMode: "onChange",
        columnResizeDirection: t.app.vault.getConfig("rightToLeft") ? "rtl" : "ltr",
        onSortingChange: s,
        getCoreRowModel: aC(),
        getSortedRowModel: sC(),
        getFilteredRowModel: oC()
    }), l = u.getState(), c = Fe(-1);
    Ae(() => {
        if (c.current === -1) {
            c.current = 0;
            return
        }
        activeWindow.clearTimeout(c.current), c.current = activeWindow.setTimeout(() => {
            t.getAView() && t.setState(h => (0, EC.default)(h, {
                data: {
                    settings: {
                        "table-sizing": {
                            $set: l.columnSizing
                        }
                    }
                }
            }))
        }, 500)
    }, [l.columnSizing]);
    let d = u.getCenterTotalSize(),
        m = Re(() => ({
            width: d
        }), [d]);
    return E("div", {
        className: `markdown-rendered ${$("table-wrapper")}`,
        ref: r,
        children: E(Lc.Provider, {
            value: n,
            children: E("table", {
                style: m,
                children: [E("thead", {
                    children: u.getHeaderGroups().map(h => E("tr", {
                        children: h.headers.map(g => {
                            let y = g.column.getIsSorted();
                            return E("th", {
                                className: "mod-has-icon",
                                children: E("div", {
                                    className: $("table-cell-wrapper"),
                                    style: {
                                        width: g.getSize()
                                    },
                                    children: [g.isPlaceholder ? null : E("div", {
                                        className: $("table-header"),
                                        onClick: g.column.getToggleSortingHandler(),
                                        children: [E("div", {
                                            children: ty(g.column.columnDef.header, g.getContext())
                                        }), E("div", {
                                            className: $("table-header-sort"),
                                            children: y === "asc" ? E(Ut, {
                                                name: "lucide-chevron-up"
                                            }) : y === "desc" ? E(Ut, {
                                                name: "lucide-chevron-down"
                                            }) : E(Ut, {
                                                name: "lucide-chevrons-up-down"
                                            })
                                        })]
                                    }), E("div", {
                                        onDoubleClick: () => g.column.resetSize(),
                                        onMouseDown: g.getResizeHandler(),
                                        onTouchStart: g.getResizeHandler(),
                                        className: `resizer ${u.options.columnResizeDirection} ${g.column.getIsResizing()?"isResizing":""}`
                                    })]
                                })
                            }, g.id)
                        })
                    }, h.id))
                }), E("tbody", {
                    children: u.getRowModel().rows.map(h => E("tr", {
                        children: h.getVisibleCells().map(g => E("td", {
                            className: Ge({
                                "mod-has-icon": g.column.id === "lane",
                                "mod-search-match": h.columnFiltersMeta[g.column.id] ? h.columnFiltersMeta[g.column.id].itemRank.passed : !1
                            }),
                            children: E("div", {
                                className: $("table-cell-wrapper"),
                                style: {
                                    width: g.column.getSize()
                                },
                                children: ty(g.column.columnDef.cell, g.getContext())
                            })
                        }, g.id))
                    }, h.id))
                })]
            })
        })
    })
}
var HH = [ft.Item, ft.Lane],
    BH = [ft.Lane];

function VH(e) {
    let t = [];
    return Array.isArray(e.cssclass) ? t.push(...e.cssclass) : typeof e.cssclass == "string" && t.push(e.cssclass), Array.isArray(e.cssclasses) ? t.push(...e.cssclasses) : typeof e.cssclasses == "string" && t.push(e.cssclasses), t
}
var CC = ({
    view: e,
    stateManager: t
}) => {
    let r = t.useState(),
        n = lx(),
        i = Fe(null),
        a = Fe(null),
        [o, s] = Ne(""),
        [u, l] = Ne(""),
        [c, d] = Ne(!1),
        [m, h] = Ne((r == null ? void 0 : r.children.length) === 0),
        g = t.file.path,
        y = t.useSetting("max-archive-size"),
        v = t.useSetting("date-colors"),
        D = t.useSetting("tag-colors"),
        I = e.useViewState(_t),
        C = Ye(() => {
            (r == null ? void 0 : r.children.length) > 0 && h(!1)
        }, [r == null ? void 0 : r.children.length]);
    Ae(() => {
        (r == null ? void 0 : r.children.length) === 0 && !t.hasError() && h(!0)
    }, [r == null ? void 0 : r.children.length, t]);
    let x = Ye(() => {
        var J;
        (J = i.current) == null || J.win.setTimeout(() => {
            var oe;
            let Q = (oe = i.current) == null ? void 0 : oe.getElementsByClassName($("board"));
            Q != null && Q.length && vd([Q[0].scrollWidth, 0], {
                elementToScroll: Q[0],
                speed: 300,
                minDuration: 150,
                easing: te => te === 1 ? 1 : 1 - Math.pow(2, -10 * te)
            })
        })
    }, []);
    Ae(() => {
        let J = oe => {
                oe.commandId === "editor:open-search" && (typeof oe.data == "string" ? (d(!0), s(oe.data), l(oe.data)) : d(te => !te))
            },
            Q = () => {
                h(!0)
            };
        return e.emitter.on("hotkey", J), e.emitter.on("showLaneForm", Q), () => {
            e.emitter.off("hotkey", J), e.emitter.off("showLaneForm", Q)
        }
    }, [e]), Ae(() => {
        var J;
        c && ((J = a.current) == null || J.focus())
    }, [c]), Ae(() => {
        let J = e.getWindow(),
            Q = o.trim(),
            oe;
        return Q ? oe = J.setTimeout(() => {
            l(Q)
        }, 250) : l(""), () => {
            J.clearTimeout(oe)
        }
    }, [o, e]), Ae(() => {
        y === void 0 || y === -1 || typeof y == "number" && (r == null ? void 0 : r.data.archive.length) > y && t.setState(J => (0, xC.default)(J, {
            data: {
                archive: {
                    $set: J.data.archive.slice(y * -1)
                }
            }
        }))
    }, [r == null ? void 0 : r.data.archive.length, y]);
    let O = Re(() => Td(e, t), [t, e]),
        A = Re(() => ({
            view: e,
            stateManager: t,
            boardModifiers: O,
            filePath: g
        }), [e, t, O, g, v, D]),
        P = Ik(t);
    if (r == null) return E("div", {
        className: $("loading"),
        children: E("div", {
            className: "sk-pulse"
        })
    });
    if (r.data.errors.length > 0) return E("div", {
        children: [E("div", {
            children: "Error:"
        }), r.data.errors.map((J, Q) => E("div", {
            children: [E("div", {
                children: J.description
            }), E("pre", {
                children: J.stack
            })]
        }, Q))]
    });
    let B = I === "list" ? "vertical" : "horizontal",
        G = wb(r, u, s, l, d);
    return E(ks, {
        id: e.id,
        children: E(tt.Provider, {
            value: A,
            children: E(zn.Provider, {
                value: G,
                children: E("div", {
                    ref: i,
                    className: Ge([Eh, {
                        "something-is-dragging": n
                    }, ...VH(r.data.frontmatter)]),
                    ...P,
                    children: [(m || r.children.length === 0) && E(zx, {
                        onNewLane: x,
                        closeLaneForm: C
                    }), c && E("div", {
                        className: $("search-wrapper"),
                        children: [E("input", {
                            ref: a,
                            value: o,
                            onChange: J => {
                                s(J.target.value)
                            },
                            onKeyDown: J => {
                                J.key === "Escape" && (s(""), l(""), J.target.blur(), d(!1))
                            },
                            type: "text",
                            className: $("filter-input"),
                            placeholder: R("Search...")
                        }), E("a", {
                            className: `${$("search-cancel-button")} clickable-icon`,
                            onClick: () => {
                                s(""), l(""), d(!1)
                            },
                            "aria-label": R("Cancel"),
                            children: E(Ut, {
                                name: "lucide-x"
                            })
                        })]
                    }), I === "table" ? E(kC, {
                        boardData: r,
                        stateManager: t
                    }) : E(Sd, {
                        id: e.id,
                        className: Ge([$("board"), {
                            [$("horizontal")]: I !== "list",
                            [$("vertical")]: I === "list",
                            "is-adding-lane": m
                        }]),
                        triggerTypes: HH,
                        children: E("div", {
                            children: E(Ia, {
                                axis: B,
                                children: [E(ox, {
                                    lanes: r.children,
                                    collapseDir: B
                                }), E(Fa, {
                                    accepts: BH,
                                    className: $("lane-placeholder"),
                                    index: r.children.length
                                })]
                            })
                        })
                    })]
                })
            })
        })
    })
};
var qr = "kanban",
    ho = "lucide-trello",
    pn = class extends ea.TextFileView {
        constructor(r, n) {
            super(r);
            this.actionButtons = {};
            this.viewSettings = {};
            this.initHeaderButtons = (0, ea.debounce)(() => this._initHeaderButtons(), 10, !0);
            this._initHeaderButtons = async () => {
                if (ea.Platform.isPhone) return;
                let r = this.plugin.getStateManager(this.file);
                if (r)
                    if (r.getSetting("show-board-settings") && !this.actionButtons["show-board-settings"] ? this.actionButtons["show-board-settings"] = this.addAction("lucide-settings", R("Open board settings"), () => {
                            this.getBoardSettings()
                        }) : !r.getSetting("show-board-settings") && this.actionButtons["show-board-settings"] && (this.actionButtons["show-board-settings"].remove(), delete this.actionButtons["show-board-settings"]), r.getSetting("show-set-view") && !this.actionButtons["show-set-view"] ? this.actionButtons["show-set-view"] = this.addAction("lucide-view", R("Board view"), n => {
                            let i = this.viewSettings[_t] || r.getSetting(_t);
                            new ea.Menu().addItem(a => a.setTitle(R("View as board")).setIcon("lucide-trello").setChecked(i === "basic" || i === "board").onClick(() => this.setView("board"))).addItem(a => a.setTitle(R("View as table")).setIcon("lucide-table").setChecked(i === "table").onClick(() => this.setView("table"))).addItem(a => a.setTitle(R("View as list")).setIcon("lucide-server").setChecked(i === "list").onClick(() => this.setView("list"))).showAtMouseEvent(n)
                        }) : !r.getSetting("show-set-view") && this.actionButtons["show-set-view"] && (this.actionButtons["show-set-view"].remove(), delete this.actionButtons["show-set-view"]), r.getSetting("show-search") && !this.actionButtons["show-search"] ? this.actionButtons["show-search"] = this.addAction("lucide-search", R("Search..."), () => {
                            this.emitter.emit("hotkey", {
                                commandId: "editor:open-search"
                            })
                        }) : !r.getSetting("show-search") && this.actionButtons["show-search"] && (this.actionButtons["show-search"].remove(), delete this.actionButtons["show-search"]), r.getSetting("show-view-as-markdown") && !this.actionButtons["show-view-as-markdown"] ? this.actionButtons["show-view-as-markdown"] = this.addAction("lucide-file-text", R("Open as markdown"), () => {
                            this.plugin.kanbanFileModes[this.leaf.id || this.file.path] = "markdown", this.plugin.setMarkdownView(this.leaf)
                        }) : !r.getSetting("show-view-as-markdown") && this.actionButtons["show-view-as-markdown"] && (this.actionButtons["show-view-as-markdown"].remove(), delete this.actionButtons["show-view-as-markdown"]), r.getSetting("show-archive-all") && !this.actionButtons["show-archive-all"] ? this.actionButtons["show-archive-all"] = this.addAction("lucide-archive", R("Archive completed cards"), () => {
                            this.plugin.stateManagers.get(this.file).archiveCompletedCards()
                        }) : !r.getSetting("show-archive-all") && this.actionButtons["show-archive-all"] && (this.actionButtons["show-archive-all"].remove(), delete this.actionButtons["show-archive-all"]), r.getSetting("show-add-list") && !this.actionButtons["show-add-list"]) {
                        let n = this.addAction("lucide-plus-circle", R("Add a list"), () => {
                            this.emitter.emit("showLaneForm", void 0)
                        });
                        n.addClass($("ignore-click-outside")), this.actionButtons["show-add-list"] = n
                    } else !r.getSetting("show-add-list") && this.actionButtons["show-add-list"] && (this.actionButtons["show-add-list"].remove(), delete this.actionButtons["show-add-list"])
            };
            this.plugin = n, this.emitter = new Bo, this.previewCache = new Map, this.previewQueue = new Ac(() => this.emitter.emit("queueEmpty")), this.emitter.on("hotkey", ({
                commandId: i
            }) => {
                switch (i) {
                    case "daily-notes:goto-prev": {
                        Sk(this.app, this.file);
                        break
                    }
                    case "daily-notes:goto-next": {
                        Dk(this.app, this.file);
                        break
                    }
                }
            }), VS(this)
        }
        get isPrimary() {
            var r;
            return ((r = this.plugin.getStateManager(this.file)) == null ? void 0 : r.getAView()) === this
        }
        get id() {
            var r;
            return `${this.leaf.id}:::${(r=this.file)==null?void 0:r.path}`
        }
        get isShiftPressed() {
            return this.plugin.isShiftPressed
        }
        async prerender(r) {
            r.children.forEach(n => {
                n.children.forEach(i => {
                    this.previewCache.has(i.id) || this.previewQueue.add(async () => {
                        let a = this.addChild(new Ll(this, i.data.title));
                        this.previewCache.set(i.id, a), await a.renderCapability.promise
                    })
                })
            }), this.previewQueue.isRunning && await new Promise(n => {
                this.emitter.once("queueEmpty", n)
            }), this.initHeaderButtons()
        }
        validatePreviewCache(r) {
            let n = new Set;
            r.children.forEach(i => {
                n.add(i.id), i.children.forEach(a => {
                    n.add(a.id)
                })
            });
            for (let i of this.previewCache.keys()) n.has(i) || (this.removeChild(this.previewCache.get(i)), this.previewCache.delete(i))
        }
        setView(r) {
            this.setViewState(_t, r), this.app.fileManager.processFrontMatter(this.file, n => {
                n[_t] = r
            })
        }
        setBoard(r, n = !0) {
            this.plugin.stateManagers.get(this.file).setState(r, n)
        }
        getBoard() {
            return this.plugin.stateManagers.get(this.file).state
        }
        getViewType() {
            return qr
        }
        getIcon() {
            return ho
        }
        getDisplayText() {
            var r;
            return ((r = this.file) == null ? void 0 : r.basename) || "Kanban"
        }
        getWindow() {
            return Dn(this.containerEl)
        }
        async loadFile(r) {
            return this.plugin.removeView(this), super.loadFile(r)
        }
        async onLoadFile(r) {
            try {
                return await super.onLoadFile(r)
            } catch (n) {
                let i = this.plugin.stateManagers.get(this.file);
                throw i == null || i.setError(n), n
            }
        }
        onload() {
            super.onload(), ea.Platform.isMobile && this.containerEl.setCssProps({
                "--mobile-navbar-height": this.app.mobileNavbar.containerEl.clientHeight + "px"
            }), this.register(this.containerEl.onWindowMigrated(() => {
                this.plugin.removeView(this), this.plugin.addView(this, this.data, this.isPrimary)
            }))
        }
        onunload() {
            super.onunload(), this.previewQueue.clear(), this.previewCache.clear(), this.emitter.emit("queueEmpty"), this.plugin.removeView(this), this.emitter.removeAllListeners(), this.activeEditor = null, this.actionButtons = {}
        }
        handleRename(r, n) {
            this.file.path === r && this.plugin.handleViewFileRename(this, n)
        }
        requestSaveToDisk(r) {
            this.data !== r && this.isPrimary ? (this.data = r, this.requestSave()) : this.data = r
        }
        getViewData() {
            return this.data
        }
        setViewData(r, n) {
            if (!Ek(r)) {
                this.plugin.kanbanFileModes[this.leaf.id || this.file.path] = "markdown", this.plugin.removeView(this), this.plugin.setMarkdownView(this.leaf, !1);
                return
            }
            n && (this.activeEditor = null, this.previewQueue.clear(), this.previewCache.clear(), this.emitter.emit("queueEmpty"), Object.values(this.actionButtons).forEach(i => i.remove()), this.actionButtons = {}), this.plugin.addView(this, r, !n && this.isPrimary)
        }
        async setState(r, n) {
            this.viewSettings = {
                ...r.kanbanViewState
            }, await super.setState(r, n)
        }
        getState() {
            let r = super.getState();
            return r.kanbanViewState = {
                ...this.viewSettings
            }, r
        }
        setViewState(r, n, i) {
            i ? this.plugin.getStateManager(this.file).viewSet.forEach(o => {
                o.viewSettings[r] = i(o.viewSettings[r])
            }) : n && (this.viewSettings[r] = n), this.app.workspace.requestSaveLayout()
        }
        populateViewState(r) {
            var n, i, a, o;
            (i = (n = this.viewSettings)["kanban-plugin"]) != null || (n["kanban-plugin"] = r["kanban-plugin"] || "board"), (o = (a = this.viewSettings)["list-collapse"]) != null || (a["list-collapse"] = r["list-collapse"] || [])
        }
        getViewState(r) {
            var a;
            let i = this.plugin.stateManagers.get(this.file).getSetting(r);
            return (a = this.viewSettings[r]) != null ? a : i
        }
        useViewState(r) {
            var a;
            let i = this.plugin.stateManagers.get(this.file).useSetting(r);
            return (a = this.viewSettings[r]) != null ? a : i
        }
        getPortal() {
            let r = this.plugin.stateManagers.get(this.file);
            return E(CC, {
                stateManager: r,
                view: this
            })
        }
        getBoardSettings() {
            let r = this.plugin.stateManagers.get(this.file),
                n = r.state;
            new $d(this, {
                onSettingsChange: i => {
                    let a = (0, _C.default)(n, {
                        data: {
                            settings: {
                                $set: i
                            }
                        }
                    });
                    r.setState(a)
                }
            }, n.data.settings).open()
        }
        onPaneMenu(r, n, i = !0) {
            if (n !== "more-options") {
                super.onPaneMenu(r, n);
                return
            }
            r.addItem(a => {
                a.setTitle(R("Open as markdown")).setIcon("lucide-file-text").setSection("pane").onClick(() => {
                    this.plugin.kanbanFileModes[this.leaf.id || this.file.path] = "markdown", this.plugin.setMarkdownView(this.leaf)
                })
            }).addItem(a => {
                a.setTitle(R("Open board settings")).setIcon("lucide-settings").setSection("pane").onClick(() => {
                    this.getBoardSettings()
                })
            }).addItem(a => {
                a.setTitle(R("Archive completed cards")).setIcon("lucide-archive").setSection("pane").onClick(() => {
                    this.plugin.stateManagers.get(this.file).archiveCompletedCards()
                })
            }), i && super.onPaneMenu(r, n)
        }
        clear() {}
    };
var Ps = Ct(ln()),
    K_ = require("obsidian");
var Y_ = require("obsidian"),
    z_ = Ct(Ic());
var FC = Ct(Wm()),
    IC = Ct(Ic()),
    qd = "remove",
    Gd = "replace",
    AC = "add";

function mo(e) {
    if (!e) return !1;
    if (Ni(e) || Array.isArray(e)) return !0;
    let t = (0, IC.getAPI)();
    return !!(!FC.default.isMoment(e) && (t != null && t.value.isObject(e)))
}

function OC(e, t, r = () => !1, n = i => String(i)) {
    if (!mo(e) || !mo(t)) throw new Error("both arguments must be objects or arrays");
    let i = LC(e, t, [], [], {
        remove: [],
        replace: [],
        add: []
    }, r, n);
    return i.remove.reverse().concat(i.replace).concat(i.add)
}

function LC(e, t, r, n, i, a, o) {
    if (!mo(e) || !mo(t)) return i;
    let s = Object.keys(e),
        u = Object.keys(t),
        l = u.length,
        c = e.length - t.length,
        d;
    if (UH(e, t)) {
        for (let m of s) {
            let h = Array.isArray(e) ? Number(m) : m;
            if (!(h in t)) {
                if (d = n.concat(h), a(d)) continue;
                i.remove.push({
                    op: qd,
                    path: d
                })
            }
        }
        for (let m of u) {
            let h = Array.isArray(t) ? Number(m) : m;
            MC(h, e, t, r.concat(h), r.concat(h), i, a, o)
        }
    } else {
        for (let h = 0; h < c; h++) d = n.concat(h), !a(d) && i.remove.push({
            op: qd,
            path: d
        });
        let m = e.slice(c);
        for (let h = 0; h < l; h++) MC(h, m, t, r.concat(h), r.concat(h + c), i, a, o)
    }
    return i
}

function MC(e, t, r, n, i, a, o, s) {
    let u = t[e],
        l = r[e];
    o(n, l) || (!(e in t) && e in r ? a.add.push({
        op: AC,
        path: n,
        value: l
    }) : u !== l && (Object(u) !== u || Object(l) !== l || $H(u, l) ? a.replace.push({
        op: Gd,
        path: n,
        value: l
    }) : !mo(u) && !mo(l) && s(u) !== s(l) ? a.replace.push({
        op: Gd,
        path: n,
        value: l
    }) : LC(t[e], r[e], n, i, a, o, s)))
}

function $H(e, t) {
    return Object.prototype.toString.call(e) !== Object.prototype.toString.call(t)
}

function UH(e, t) {
    let r = e.length - t.length;
    if (Array.isArray(e) && Array.isArray(t) && r > 0) {
        let n = 0,
            i = 0;
        for (let a = 0; a < t.length && String(e[a]) === String(t[a]); a++) n++;
        for (let a = t.length; a > 0 && String(e[a + r]) === String(t[a]); a--) i++;
        return n >= i
    }
    return !0
}

function PC(e, t) {
    if (!mo(e)) throw new Error("base object must be an object or an array");
    if (!Array.isArray(t)) throw new Error("diff must be an array");
    Array.isArray(e) ? e = e.slice() : e = {
        ...e
    };
    for (let r of t) {
        let n = r.op,
            a = r.path.slice(),
            o = a.pop(),
            s = e;
        if (TC(o), o == null) return !1;
        let u;
        for (;
            (u = a.shift()) !== null && u !== void 0;) TC(u), u in s ? Array.isArray(s[u]) ? s = s[u] = s[u].slice() : Ni(s[u]) ? s = s[u] = {
            ...s[u]
        } : s = s[u] : s = s[u] = {};
        if (n === qd || n === Gd) {
            let l = r.path;
            if (!Object.prototype.hasOwnProperty.call(s, o)) throw new Error(["expected to find property", l, "in object", e].join(" "))
        }
        n === qd && typeof o == "number" && (Array.isArray(s) ? s.splice(o, 1) : delete s[o]), (n === Gd || n === AC) && (s[o] = r.value)
    }
    return e
}

function TC(e) {
    if (e === "__proto__" || e === "constructor" || e === "prototype") throw new Error("setting of prototype values not supported")
}
var pf = Ct(ln());
var WH = {};

function _s(e, t) {
    let r = t || WH,
        n = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0,
        i = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
    return RC(e, n, i)
}

function RC(e, t, r) {
    if (YH(e)) {
        if ("value" in e) return e.type === "html" && !r ? "" : e.value;
        if (t && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return NC(e.children, t, r)
    }
    return Array.isArray(e) ? NC(e, t, r) : ""
}

function NC(e, t, r) {
    let n = [],
        i = -1;
    for (; ++i < e.length;) n[i] = RC(e[i], t, r);
    return n.join("")
}

function YH(e) {
    return !!(e && typeof e == "object")
}
var H_ = require("obsidian");
var Jd = function(e) {
    if (e == null) return qH;
    if (typeof e == "string") return jH(e);
    if (typeof e == "object") return Array.isArray(e) ? zH(e) : KH(e);
    if (typeof e == "function") return Zd(e);
    throw new Error("Expected function, string, or object as test")
};

function zH(e) {
    let t = [],
        r = -1;
    for (; ++r < e.length;) t[r] = Jd(e[r]);
    return Zd(n);

    function n(...i) {
        let a = -1;
        for (; ++a < t.length;)
            if (t[a].call(this, ...i)) return !0;
        return !1
    }
}

function KH(e) {
    return Zd(t);

    function t(r) {
        let n;
        for (n in e)
            if (r[n] !== e[n]) return !1;
        return !0
    }
}

function jH(e) {
    return Zd(t);

    function t(r) {
        return r && r.type === e
    }
}

function Zd(e) {
    return t;

    function t(r, ...n) {
        return !!(r && typeof r == "object" && "type" in r && e.call(this, r, ...n))
    }
}

function qH() {
    return !0
}
var ry = !0,
    Qd = !1,
    iy = "skip",
    ay = function(e, t, r, n) {
        typeof t == "function" && typeof r != "function" && (n = r, r = t, t = null);
        let i = Jd(t),
            a = n ? -1 : 1;
        o(e, void 0, [])();

        function o(s, u, l) {
            let c = s && typeof s == "object" ? s : {};
            if (typeof c.type == "string") {
                let m = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0;
                Object.defineProperty(d, "name", {
                    value: "node (" + (s.type + (m ? "<" + m + ">" : "")) + ")"
                })
            }
            return d;

            function d() {
                let m = [],
                    h, g, y;
                if ((!t || i(s, u, l[l.length - 1] || null)) && (m = GH(r(s, l)), m[0] === Qd)) return m;
                if (s.children && m[0] !== iy)
                    for (g = (n ? s.children.length : -1) + a, y = l.concat(s); g > -1 && g < s.children.length;) {
                        if (h = o(s.children[g], g, y)(), h[0] === Qd) return h;
                        g = typeof h[1] == "number" ? h[1] : g + a
                    }
                return m
            }
        }
    };

function GH(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [ry, e] : [e]
}
var Xd = function(e, t, r, n) {
    typeof t == "function" && typeof r != "function" && (n = r, r = t, t = null), ay(e, t, i, n);

    function i(a, o) {
        let s = o[o.length - 1];
        return r(a, s ? s.children.indexOf(a) : null, s)
    }
};

function ef(e) {
    if (e.children.length === 0) return null;
    let t = e.children.length - 1;
    return e.children[t].type === "blockid" ? t === 0 ? {
        start: e.children[0].position.start.offset,
        end: e.children[0].position.start.offset
    } : {
        start: e.children[0].position.start.offset,
        end: e.children[t - 1].position.end.offset
    } : {
        start: e.children[0].position.start.offset,
        end: e.children[t].position.end.offset
    }
}

function oy(e, t) {
    return t ? e.slice(t.start, t.end) : ""
}

function HC(e, t) {
    return t <= 0 ? null : e[t - 1]
}

function BC(e, t, r, n = () => !0) {
    for (let i = t + 1, a = e.length; i < a; i++) {
        let o = e[i];
        if (r === o.type) return o;
        if (!n(o)) return null
    }
    return null
}
var po = require("obsidian");

function VC(e, t) {
    return t
}

function $C(e, t) {
    let r = xh(e.getSetting("date-colors")),
        n = e.getSetting("date-trigger"),
        i = e.getSetting("date-format"),
        a = e.getSetting("date-display-format"),
        o = e.getSetting("time-trigger"),
        s = e.getSetting("time-format"),
        {
            app: u
        } = e,
        l, c, d = m => {
            let h = "";
            return c && (c.backgroundColor ? (m += " has-background", h = ` style="--date-color: ${c.color}; --date-background-color: ${c.backgroundColor};"`) : h = ` style="--date-color: ${c.color};"`), {
                wrapperClass: m,
                wrapperStyle: h
            }
        };
    return t = t.replace(new RegExp(`(^|\\s)${Qn(n)}\\[\\[([^\\]]+)\\]\\]`, "g"), (m, h, g) => {
        var C, x;
        let y = (0, po.moment)(g, i);
        if (!y.isValid()) return m;
        l = y;
        let v = u.metadataCache.getFirstLinkpathDest(g, e.file.path);
        c || (c = r(y));
        let {
            wrapperClass: D,
            wrapperStyle: I
        } = d($("preview-date-wrapper"));
        return `${h}<span data-date="${l.toISOString()}" class="${D} ${$("date")} ${$("preview-date-link")}"${I}><a class="${$("preview-date")} internal-link" data-href="${(C=v==null?void 0:v.path)!=null?C:g}" href="${(x=v==null?void 0:v.path)!=null?x:g}" target="_blank" rel="noopener">${y.format(a)}</a></span>`
    }), t = t.replace(new RegExp(`(^|\\s)${Qn(n)}\\[([^\\]]+)\\]\\([^)]+\\)`, "g"), (m, h, g) => {
        var C, x;
        let y = (0, po.moment)(g, i);
        if (!y.isValid()) return m;
        l = y;
        let v = u.metadataCache.getFirstLinkpathDest(g, e.file.path);
        c || (c = r(y));
        let {
            wrapperClass: D,
            wrapperStyle: I
        } = d($("preview-date-wrapper"));
        return `${h}<span data-date="${l.toISOString()}" class="${D} ${$("date")} ${$("preview-date-link")}"${I}><a class="${$("preview-date")} internal-link" data-href="${(C=v==null?void 0:v.path)!=null?C:g}" href="${(x=v==null?void 0:v.path)!=null?x:g}" target="_blank" rel="noopener">${y.format(a)}</a></span>`
    }), t = t.replace(new RegExp(`(^|\\s)${Qn(n)}{([^}]+)}`, "g"), (m, h, g) => {
        let y = (0, po.moment)(g, i);
        if (!y.isValid()) return m;
        l = y, c || (c = r(y));
        let {
            wrapperClass: v,
            wrapperStyle: D
        } = d($("preview-date-wrapper"));
        return `${h}<span data-date="${l.toISOString()}" class="${v} ${$("date")}"${D}><span class="${$("preview-date")} ${$("item-metadata-date")}">${y.format(a)}</span></span>`
    }), t = t.replace(new RegExp(`(^|\\s)${Qn(o)}{([^}]+)}`, "g"), (m, h, g) => {
        let y = (0, po.moment)(g, s);
        if (!y.isValid()) return m;
        l ? (l.hour(y.hour()), l.minute(y.minute()), l.second(y.second())) : (l = y, l.year(1970));
        let {
            wrapperClass: v,
            wrapperStyle: D
        } = d($("preview-time-wrapper"));
        return `${h}<span data-date="${l.toISOString()}" class="${v} ${$("date")}"${D}><span class="${$("preview-time")} ${$("item-metadata-time")}">${y.format(s)}</span></span>`
    }), t
}

function ql(e, t) {
    let {
        dateStr: r,
        timeStr: n,
        fileAccessor: i
    } = t.data.metadata;
    if (r && (t.data.metadata.date = (0, po.moment)(r, e.getSetting("date-format"))), n) {
        let a = (0, po.moment)(n, e.getSetting("time-format"));
        if (t.data.metadata.date) {
            let o = t.data.metadata.date;
            o.hour(a.hour()), o.minute(a.minute()), o.second(a.second()), a = o.clone()
        }
        t.data.metadata.time = a
    }
    if (i) {
        let a = e.app.metadataCache.getFirstLinkpathDest(i.target, e.file.path);
        a && (t.data.metadata.file = a)
    }
    return t.data.titleSearch = wk(t, e), t
}

function UC(e, t) {
    try {
        t.children.map(r => {
            VC(e, r), r.children.map(n => ql(e, n))
        })
    } catch (r) {
        throw e.setError(r), r
    }
    return t
}

function JH(e) {
    return (e.op === "add" || e.op === "replace") && ["title", "titleRaw", "dateStr", "timeStr", /\d$/, /\/fileAccessor\/.+$/].some(t => typeof t == "string" ? e.path.last().toString().endsWith(t) : t.test(e.path.last().toString()))
}

function WC(e, t, r) {
    let n = {};
    return r.reduce((a, o) => {
        if (!JH(o)) return a;
        let s = o.path.reduce((l, c) => (typeof c == "number" && l.push(c), l), []),
            u = s.join(",");
        return n[u] || (n[u] = !0, a.push(s)), a
    }, []).map(a => {
        let o = un(t, a);
        if (o.type === ft.Lane) return VC(e, o);
        if (o.type === ft.Item) return ql(e, o)
    }), t
}

function Kn(e, t, r, n) {
    let i = e.length,
        a = 0,
        o;
    if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, r = r > 0 ? r : 0, n.length < 1e4) o = Array.from(n), o.unshift(t, r), e.splice(...o);
    else
        for (r && e.splice(t, r); a < n.length;) o = n.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4
}

function mr(e, t) {
    return e.length > 0 ? (Kn(e, e.length, 0, t), e) : t
}
var YC = {}.hasOwnProperty;

function zC(e) {
    let t = {},
        r = -1;
    for (; ++r < e.length;) ZH(t, e[r]);
    return t
}

function ZH(e, t) {
    let r;
    for (r in t) {
        let i = (YC.call(e, r) ? e[r] : void 0) || (e[r] = {}),
            a = t[r],
            o;
        if (a)
            for (o in a) {
                YC.call(i, o) || (i[o] = []);
                let s = a[o];
                QH(i[o], Array.isArray(s) ? s : s ? [s] : [])
            }
    }
}

function QH(e, t) {
    let r = -1,
        n = [];
    for (; ++r < t.length;)(t[r].add === "after" ? e : n).push(t[r]);
    Kn(e, 0, 0, n)
}
var KC = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var Nr = Pa(/[A-Za-z]/),
    pr = Pa(/[\dA-Za-z]/),
    jC = Pa(/[#-'*+\--9=?A-Z^-~]/);

function Gl(e) {
    return e !== null && (e < 32 || e === 127)
}
var Jl = Pa(/\d/),
    qC = Pa(/[\dA-Fa-f]/),
    GC = Pa(/[!-/:-@[-`{-~]/);

function xe(e) {
    return e !== null && e < -2
}

function Kt(e) {
    return e !== null && (e < 0 || e === 32)
}

function Be(e) {
    return e === -2 || e === -1 || e === 32
}
var JC = Pa(KC),
    ZC = Pa(/\s/);

function Pa(e) {
    return t;

    function t(r) {
        return r !== null && e.test(String.fromCharCode(r))
    }
}

function je(e, t, r, n) {
    let i = n ? n - 1 : Number.POSITIVE_INFINITY,
        a = 0;
    return o;

    function o(u) {
        return Be(u) ? (e.enter(r), s(u)) : t(u)
    }

    function s(u) {
        return Be(u) && a++ < i ? (e.consume(u), s) : (e.exit(r), t(u))
    }
}
var QC = {
    tokenize: XH
};

function XH(e) {
    let t = e.attempt(this.parser.constructs.contentInitial, n, i),
        r;
    return t;

    function n(s) {
        if (s === null) {
            e.consume(s);
            return
        }
        return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), je(e, t, "linePrefix")
    }

    function i(s) {
        return e.enter("paragraph"), a(s)
    }

    function a(s) {
        let u = e.enter("chunkText", {
            contentType: "text",
            previous: r
        });
        return r && (r.next = u), r = u, o(s)
    }

    function o(s) {
        if (s === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
            return
        }
        return xe(s) ? (e.consume(s), e.exit("chunkText"), a) : (e.consume(s), o)
    }
}
var e_ = {
        tokenize: e3
    },
    XC = {
        tokenize: t3
    };

function e3(e) {
    let t = this,
        r = [],
        n = 0,
        i, a, o;
    return s;

    function s(C) {
        if (n < r.length) {
            let x = r[n];
            return t.containerState = x[1], e.attempt(x[0].continuation, u, l)(C)
        }
        return l(C)
    }

    function u(C) {
        if (n++, t.containerState._closeFlow) {
            t.containerState._closeFlow = void 0, i && I();
            let x = t.events.length,
                O = x,
                A;
            for (; O--;)
                if (t.events[O][0] === "exit" && t.events[O][1].type === "chunkFlow") {
                    A = t.events[O][1].end;
                    break
                } D(n);
            let P = x;
            for (; P < t.events.length;) t.events[P][1].end = Object.assign({}, A), P++;
            return Kn(t.events, O + 1, 0, t.events.slice(x)), t.events.length = P, l(C)
        }
        return s(C)
    }

    function l(C) {
        if (n === r.length) {
            if (!i) return m(C);
            if (i.currentConstruct && i.currentConstruct.concrete) return g(C);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return t.containerState = {}, e.check(XC, c, d)(C)
    }

    function c(C) {
        return i && I(), D(n), m(C)
    }

    function d(C) {
        return t.parser.lazy[t.now().line] = n !== r.length, o = t.now().offset, g(C)
    }

    function m(C) {
        return t.containerState = {}, e.attempt(XC, h, g)(C)
    }

    function h(C) {
        return n++, r.push([t.currentConstruct, t.containerState]), m(C)
    }

    function g(C) {
        if (C === null) {
            i && I(), D(0), e.consume(C);
            return
        }
        return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
            contentType: "flow",
            previous: a,
            _tokenizer: i
        }), y(C)
    }

    function y(C) {
        if (C === null) {
            v(e.exit("chunkFlow"), !0), D(0), e.consume(C);
            return
        }
        return xe(C) ? (e.consume(C), v(e.exit("chunkFlow")), n = 0, t.interrupt = void 0, s) : (e.consume(C), y)
    }

    function v(C, x) {
        let O = t.sliceStream(C);
        if (x && O.push(null), C.previous = a, a && (a.next = C), a = C, i.defineSkip(C.start), i.write(O), t.parser.lazy[C.start.line]) {
            let A = i.events.length;
            for (; A--;)
                if (i.events[A][1].start.offset < o && (!i.events[A][1].end || i.events[A][1].end.offset > o)) return;
            let P = t.events.length,
                B = P,
                G, J;
            for (; B--;)
                if (t.events[B][0] === "exit" && t.events[B][1].type === "chunkFlow") {
                    if (G) {
                        J = t.events[B][1].end;
                        break
                    }
                    G = !0
                } for (D(n), A = P; A < t.events.length;) t.events[A][1].end = Object.assign({}, J), A++;
            Kn(t.events, B + 1, 0, t.events.slice(P)), t.events.length = A
        }
    }

    function D(C) {
        let x = r.length;
        for (; x-- > C;) {
            let O = r[x];
            t.containerState = O[1], O[0].exit.call(t, e)
        }
        r.length = C
    }

    function I() {
        i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0
    }
}

function t3(e, t, r) {
    return je(e, e.attempt(this.parser.constructs.document, t, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function sy(e) {
    if (e === null || Kt(e) || ZC(e)) return 1;
    if (JC(e)) return 2
}

function Ms(e, t, r) {
    let n = [],
        i = -1;
    for (; ++i < e.length;) {
        let a = e[i].resolveAll;
        a && !n.includes(a) && (t = a(t, r), n.push(a))
    }
    return t
}
var Zl = {
    name: "attention",
    tokenize: r3,
    resolveAll: n3
};

function n3(e, t) {
    let r = -1,
        n, i, a, o, s, u, l, c;
    for (; ++r < e.length;)
        if (e[r][0] === "enter" && e[r][1].type === "attentionSequence" && e[r][1]._close) {
            for (n = r; n--;)
                if (e[n][0] === "exit" && e[n][1].type === "attentionSequence" && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[r][1]).charCodeAt(0)) {
                    if ((e[n][1]._close || e[r][1]._open) && (e[r][1].end.offset - e[r][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[r][1].end.offset - e[r][1].start.offset) % 3)) continue;
                    u = e[n][1].end.offset - e[n][1].start.offset > 1 && e[r][1].end.offset - e[r][1].start.offset > 1 ? 2 : 1;
                    let d = Object.assign({}, e[n][1].end),
                        m = Object.assign({}, e[r][1].start);
                    t_(d, -u), t_(m, u), o = {
                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                        start: d,
                        end: Object.assign({}, e[n][1].end)
                    }, s = {
                        type: u > 1 ? "strongSequence" : "emphasisSequence",
                        start: Object.assign({}, e[r][1].start),
                        end: m
                    }, a = {
                        type: u > 1 ? "strongText" : "emphasisText",
                        start: Object.assign({}, e[n][1].end),
                        end: Object.assign({}, e[r][1].start)
                    }, i = {
                        type: u > 1 ? "strong" : "emphasis",
                        start: Object.assign({}, o.start),
                        end: Object.assign({}, s.end)
                    }, e[n][1].end = Object.assign({}, o.start), e[r][1].start = Object.assign({}, s.end), l = [], e[n][1].end.offset - e[n][1].start.offset && (l = mr(l, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t]
                    ])), l = mr(l, [
                        ["enter", i, t],
                        ["enter", o, t],
                        ["exit", o, t],
                        ["enter", a, t]
                    ]), l = mr(l, Ms(t.parser.constructs.insideSpan.null, e.slice(n + 1, r), t)), l = mr(l, [
                        ["exit", a, t],
                        ["enter", s, t],
                        ["exit", s, t],
                        ["exit", i, t]
                    ]), e[r][1].end.offset - e[r][1].start.offset ? (c = 2, l = mr(l, [
                        ["enter", e[r][1], t],
                        ["exit", e[r][1], t]
                    ])) : c = 0, Kn(e, n - 1, r - n + 3, l), r = n + l.length - c - 2;
                    break
                }
        } for (r = -1; ++r < e.length;) e[r][1].type === "attentionSequence" && (e[r][1].type = "data");
    return e
}

function r3(e, t) {
    let r = this.parser.constructs.attentionMarkers.null,
        n = this.previous,
        i = sy(n),
        a;
    return o;

    function o(u) {
        return a = u, e.enter("attentionSequence"), s(u)
    }

    function s(u) {
        if (u === a) return e.consume(u), s;
        let l = e.exit("attentionSequence"),
            c = sy(u),
            d = !c || c === 2 && i || r.includes(u),
            m = !i || i === 2 && c || r.includes(n);
        return l._open = !!(a === 42 ? d : d && (i || !m)), l._close = !!(a === 42 ? m : m && (c || !d)), t(u)
    }
}

function t_(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t
}
var ly = {
    name: "autolink",
    tokenize: i3
};

function i3(e, t, r) {
    let n = 0;
    return i;

    function i(h) {
        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a
    }

    function a(h) {
        return Nr(h) ? (e.consume(h), o) : l(h)
    }

    function o(h) {
        return h === 43 || h === 45 || h === 46 || pr(h) ? (n = 1, s(h)) : l(h)
    }

    function s(h) {
        return h === 58 ? (e.consume(h), n = 0, u) : (h === 43 || h === 45 || h === 46 || pr(h)) && n++ < 32 ? (e.consume(h), s) : (n = 0, l(h))
    }

    function u(h) {
        return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || Gl(h) ? r(h) : (e.consume(h), u)
    }

    function l(h) {
        return h === 64 ? (e.consume(h), c) : jC(h) ? (e.consume(h), l) : r(h)
    }

    function c(h) {
        return pr(h) ? d(h) : r(h)
    }

    function d(h) {
        return h === 46 ? (e.consume(h), n = 0, c) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : m(h)
    }

    function m(h) {
        if ((h === 45 || pr(h)) && n++ < 63) {
            let g = h === 45 ? m : d;
            return e.consume(h), g
        }
        return r(h)
    }
}
var Na = {
    tokenize: a3,
    partial: !0
};

function a3(e, t, r) {
    return n;

    function n(a) {
        return Be(a) ? je(e, i, "linePrefix")(a) : i(a)
    }

    function i(a) {
        return a === null || xe(a) ? t(a) : r(a)
    }
}
var tf = {
    name: "blockQuote",
    tokenize: o3,
    continuation: {
        tokenize: s3
    },
    exit: l3
};

function o3(e, t, r) {
    let n = this;
    return i;

    function i(o) {
        if (o === 62) {
            let s = n.containerState;
            return s.open || (e.enter("blockQuote", {
                _container: !0
            }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), a
        }
        return r(o)
    }

    function a(o) {
        return Be(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o))
    }
}

function s3(e, t, r) {
    let n = this;
    return i;

    function i(o) {
        return Be(o) ? je(e, a, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : a(o)
    }

    function a(o) {
        return e.attempt(tf, t, r)(o)
    }
}

function l3(e) {
    e.exit("blockQuote")
}
var nf = {
    name: "characterEscape",
    tokenize: u3
};

function u3(e, t, r) {
    return n;

    function n(a) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i
    }

    function i(a) {
        return GC(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : r(a)
    }
}
var n_ = document.createElement("i");

function Ts(e) {
    let t = "&" + e + ";";
    n_.innerHTML = t;
    let r = n_.textContent;
    return r.charCodeAt(r.length - 1) === 59 && e !== "semi" || r === t ? !1 : r
}
var rf = {
    name: "characterReference",
    tokenize: c3
};

function c3(e, t, r) {
    let n = this,
        i = 0,
        a, o;
    return s;

    function s(d) {
        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), u
    }

    function u(d) {
        return d === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = pr, c(d))
    }

    function l(d) {
        return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = qC, c) : (e.enter("characterReferenceValue"), a = 7, o = Jl, c(d))
    }

    function c(d) {
        if (d === 59 && i) {
            let m = e.exit("characterReferenceValue");
            return o === pr && !Ts(n.sliceSerialize(m)) ? r(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
        }
        return o(d) && i++ < a ? (e.consume(d), c) : r(d)
    }
}
var r_ = {
        tokenize: f3,
        partial: !0
    },
    af = {
        name: "codeFenced",
        tokenize: d3,
        concrete: !0
    };

function d3(e, t, r) {
    let n = this,
        i = {
            tokenize: O,
            partial: !0
        },
        a = 0,
        o = 0,
        s;
    return u;

    function u(A) {
        return l(A)
    }

    function l(A) {
        let P = n.events[n.events.length - 1];
        return a = P && P[1].type === "linePrefix" ? P[2].sliceSerialize(P[1], !0).length : 0, s = A, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(A)
    }

    function c(A) {
        return A === s ? (o++, e.consume(A), c) : o < 3 ? r(A) : (e.exit("codeFencedFenceSequence"), Be(A) ? je(e, d, "whitespace")(A) : d(A))
    }

    function d(A) {
        return A === null || xe(A) ? (e.exit("codeFencedFence"), n.interrupt ? t(A) : e.check(r_, y, x)(A)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
            contentType: "string"
        }), m(A))
    }

    function m(A) {
        return A === null || xe(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(A)) : Be(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), je(e, h, "whitespace")(A)) : A === 96 && A === s ? r(A) : (e.consume(A), m)
    }

    function h(A) {
        return A === null || xe(A) ? d(A) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
            contentType: "string"
        }), g(A))
    }

    function g(A) {
        return A === null || xe(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(A)) : A === 96 && A === s ? r(A) : (e.consume(A), g)
    }

    function y(A) {
        return e.attempt(i, x, v)(A)
    }

    function v(A) {
        return e.enter("lineEnding"), e.consume(A), e.exit("lineEnding"), D
    }

    function D(A) {
        return a > 0 && Be(A) ? je(e, I, "linePrefix", a + 1)(A) : I(A)
    }

    function I(A) {
        return A === null || xe(A) ? e.check(r_, y, x)(A) : (e.enter("codeFlowValue"), C(A))
    }

    function C(A) {
        return A === null || xe(A) ? (e.exit("codeFlowValue"), I(A)) : (e.consume(A), C)
    }

    function x(A) {
        return e.exit("codeFenced"), t(A)
    }

    function O(A, P, B) {
        let G = 0;
        return J;

        function J(ne) {
            return A.enter("lineEnding"), A.consume(ne), A.exit("lineEnding"), Q
        }

        function Q(ne) {
            return A.enter("codeFencedFence"), Be(ne) ? je(A, oe, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ne) : oe(ne)
        }

        function oe(ne) {
            return ne === s ? (A.enter("codeFencedFenceSequence"), te(ne)) : B(ne)
        }

        function te(ne) {
            return ne === s ? (G++, A.consume(ne), te) : G >= o ? (A.exit("codeFencedFenceSequence"), Be(ne) ? je(A, re, "whitespace")(ne) : re(ne)) : B(ne)
        }

        function re(ne) {
            return ne === null || xe(ne) ? (A.exit("codeFencedFence"), P(ne)) : B(ne)
        }
    }
}

function f3(e, t, r) {
    let n = this;
    return i;

    function i(o) {
        return o === null ? r(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a)
    }

    function a(o) {
        return n.parser.lazy[n.now().line] ? r(o) : t(o)
    }
}
var Ql = {
        name: "codeIndented",
        tokenize: m3
    },
    h3 = {
        tokenize: p3,
        partial: !0
    };

function m3(e, t, r) {
    let n = this;
    return i;

    function i(l) {
        return e.enter("codeIndented"), je(e, a, "linePrefix", 5)(l)
    }

    function a(l) {
        let c = n.events[n.events.length - 1];
        return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? o(l) : r(l)
    }

    function o(l) {
        return l === null ? u(l) : xe(l) ? e.attempt(h3, o, u)(l) : (e.enter("codeFlowValue"), s(l))
    }

    function s(l) {
        return l === null || xe(l) ? (e.exit("codeFlowValue"), o(l)) : (e.consume(l), s)
    }

    function u(l) {
        return e.exit("codeIndented"), t(l)
    }
}

function p3(e, t, r) {
    let n = this;
    return i;

    function i(o) {
        return n.parser.lazy[n.now().line] ? r(o) : xe(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : je(e, a, "linePrefix", 5)(o)
    }

    function a(o) {
        let s = n.events[n.events.length - 1];
        return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : xe(o) ? i(o) : r(o)
    }
}
var uy = {
    name: "codeText",
    tokenize: v3,
    resolve: g3,
    previous: y3
};

function g3(e) {
    let t = e.length - 4,
        r = 3,
        n, i;
    if ((e[r][1].type === "lineEnding" || e[r][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for (n = r; ++n < t;)
            if (e[n][1].type === "codeTextData") {
                e[r][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", r += 2, t -= 2;
                break
            }
    }
    for (n = r - 1, t++; ++n <= t;) i === void 0 ? n !== t && e[n][1].type !== "lineEnding" && (i = n) : (n === t || e[n][1].type === "lineEnding") && (e[i][1].type = "codeTextData", n !== i + 2 && (e[i][1].end = e[n - 1][1].end, e.splice(i + 2, n - i - 2), t -= n - i - 2, n = i + 2), i = void 0);
    return e
}

function y3(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function v3(e, t, r) {
    let n = this,
        i = 0,
        a, o;
    return s;

    function s(m) {
        return e.enter("codeText"), e.enter("codeTextSequence"), u(m)
    }

    function u(m) {
        return m === 96 ? (e.consume(m), i++, u) : (e.exit("codeTextSequence"), l(m))
    }

    function l(m) {
        return m === null ? r(m) : m === 32 ? (e.enter("space"), e.consume(m), e.exit("space"), l) : m === 96 ? (o = e.enter("codeTextSequence"), a = 0, d(m)) : xe(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), l) : (e.enter("codeTextData"), c(m))
    }

    function c(m) {
        return m === null || m === 32 || m === 96 || xe(m) ? (e.exit("codeTextData"), l(m)) : (e.consume(m), c)
    }

    function d(m) {
        return m === 96 ? (e.consume(m), a++, d) : a === i ? (e.exit("codeTextSequence"), e.exit("codeText"), t(m)) : (o.type = "codeTextData", c(m))
    }
}

function of(e) {
    let t = {},
        r = -1,
        n, i, a, o, s, u, l;
    for (; ++r < e.length;) {
        for (; r in t;) r = t[r];
        if (n = e[r], r && n[1].type === "chunkFlow" && e[r - 1][1].type === "listItemPrefix" && (u = n[1]._tokenizer.events, a = 0, a < u.length && u[a][1].type === "lineEndingBlank" && (a += 2), a < u.length && u[a][1].type === "content"))
            for (; ++a < u.length && u[a][1].type !== "content";) u[a][1].type === "chunkText" && (u[a][1]._isInFirstContentOfListItem = !0, a++);
        if (n[0] === "enter") n[1].contentType && (Object.assign(t, w3(e, r)), r = t[r], l = !0);
        else if (n[1]._container) {
            for (a = r, i = void 0; a-- && (o = e[a], o[1].type === "lineEnding" || o[1].type === "lineEndingBlank");) o[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
            i && (n[1].end = Object.assign({}, e[i][1].start), s = e.slice(i, r), s.unshift(n), Kn(e, i, r - i + 1, s))
        }
    }
    return !l
}

function w3(e, t) {
    let r = e[t][1],
        n = e[t][2],
        i = t - 1,
        a = [],
        o = r._tokenizer || n.parser[r.contentType](r.start),
        s = o.events,
        u = [],
        l = {},
        c, d, m = -1,
        h = r,
        g = 0,
        y = 0,
        v = [y];
    for (; h;) {
        for (; e[++i][1] !== h;);
        a.push(i), h._tokenizer || (c = n.sliceStream(h), h.next || c.push(null), d && o.defineSkip(h.start), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = h, h = h.next
    }
    for (h = r; ++m < s.length;) s[m][0] === "exit" && s[m - 1][0] === "enter" && s[m][1].type === s[m - 1][1].type && s[m][1].start.line !== s[m][1].end.line && (y = m + 1, v.push(y), h._tokenizer = void 0, h.previous = void 0, h = h.next);
    for (o.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : v.pop(), m = v.length; m--;) {
        let D = s.slice(v[m], v[m + 1]),
            I = a.pop();
        u.unshift([I, I + D.length - 1]), Kn(e, I, 2, D)
    }
    for (m = -1; ++m < u.length;) l[g + u[m][0]] = g + u[m][1], g += u[m][1] - u[m][0] - 1;
    return l
}
var cy = {
        tokenize: S3,
        resolve: D3
    },
    b3 = {
        tokenize: E3,
        partial: !0
    };

function D3(e) {
    return of(e), e
}

function S3(e, t) {
    let r;
    return n;

    function n(s) {
        return e.enter("content"), r = e.enter("chunkContent", {
            contentType: "content"
        }), i(s)
    }

    function i(s) {
        return s === null ? a(s) : xe(s) ? e.check(b3, o, a)(s) : (e.consume(s), i)
    }

    function a(s) {
        return e.exit("chunkContent"), e.exit("content"), t(s)
    }

    function o(s) {
        return e.consume(s), e.exit("chunkContent"), r.next = e.enter("chunkContent", {
            contentType: "content",
            previous: r
        }), r = r.next, i
    }
}

function E3(e, t, r) {
    let n = this;
    return i;

    function i(o) {
        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), je(e, a, "linePrefix")
    }

    function a(o) {
        if (o === null || xe(o)) return r(o);
        let s = n.events[n.events.length - 1];
        return !n.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : e.interrupt(n.parser.constructs.flow, r, t)(o)
    }
}

function sf(e, t, r, n, i, a, o, s, u) {
    let l = u || Number.POSITIVE_INFINITY,
        c = 0;
    return d;

    function d(D) {
        return D === 60 ? (e.enter(n), e.enter(i), e.enter(a), e.consume(D), e.exit(a), m) : D === null || D === 32 || D === 41 || Gl(D) ? r(D) : (e.enter(n), e.enter(o), e.enter(s), e.enter("chunkString", {
            contentType: "string"
        }), y(D))
    }

    function m(D) {
        return D === 62 ? (e.enter(a), e.consume(D), e.exit(a), e.exit(i), e.exit(n), t) : (e.enter(s), e.enter("chunkString", {
            contentType: "string"
        }), h(D))
    }

    function h(D) {
        return D === 62 ? (e.exit("chunkString"), e.exit(s), m(D)) : D === null || D === 60 || xe(D) ? r(D) : (e.consume(D), D === 92 ? g : h)
    }

    function g(D) {
        return D === 60 || D === 62 || D === 92 ? (e.consume(D), h) : h(D)
    }

    function y(D) {
        return !c && (D === null || D === 41 || Kt(D)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(n), t(D)) : c < l && D === 40 ? (e.consume(D), c++, y) : D === 41 ? (e.consume(D), c--, y) : D === null || D === 32 || D === 40 || Gl(D) ? r(D) : (e.consume(D), D === 92 ? v : y)
    }

    function v(D) {
        return D === 40 || D === 41 || D === 92 ? (e.consume(D), y) : y(D)
    }
}

function lf(e, t, r, n, i, a) {
    let o = this,
        s = 0,
        u;
    return l;

    function l(h) {
        return e.enter(n), e.enter(i), e.consume(h), e.exit(i), e.enter(a), c
    }

    function c(h) {
        return s > 999 || h === null || h === 91 || h === 93 && !u || h === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? r(h) : h === 93 ? (e.exit(a), e.enter(i), e.consume(h), e.exit(i), e.exit(n), t) : xe(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), c) : (e.enter("chunkString", {
            contentType: "string"
        }), d(h))
    }

    function d(h) {
        return h === null || h === 91 || h === 93 || xe(h) || s++ > 999 ? (e.exit("chunkString"), c(h)) : (e.consume(h), u || (u = !Be(h)), h === 92 ? m : d)
    }

    function m(h) {
        return h === 91 || h === 92 || h === 93 ? (e.consume(h), s++, d) : d(h)
    }
}

function uf(e, t, r, n, i, a) {
    let o;
    return s;

    function s(m) {
        return m === 34 || m === 39 || m === 40 ? (e.enter(n), e.enter(i), e.consume(m), e.exit(i), o = m === 40 ? 41 : m, u) : r(m)
    }

    function u(m) {
        return m === o ? (e.enter(i), e.consume(m), e.exit(i), e.exit(n), t) : (e.enter(a), l(m))
    }

    function l(m) {
        return m === o ? (e.exit(a), u(o)) : m === null ? r(m) : xe(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), je(e, l, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
        }), c(m))
    }

    function c(m) {
        return m === o || m === null || xe(m) ? (e.exit("chunkString"), l(m)) : (e.consume(m), m === 92 ? d : c)
    }

    function d(m) {
        return m === o || m === 92 ? (e.consume(m), c) : c(m)
    }
}

function go(e, t) {
    let r;
    return n;

    function n(i) {
        return xe(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), r = !0, n) : Be(i) ? je(e, n, r ? "linePrefix" : "lineSuffix")(i) : t(i)
    }
}

function ta(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
var dy = {
        name: "definition",
        tokenize: x3
    },
    k3 = {
        tokenize: C3,
        partial: !0
    };

function x3(e, t, r) {
    let n = this,
        i;
    return a;

    function a(h) {
        return e.enter("definition"), o(h)
    }

    function o(h) {
        return lf.call(n, e, s, r, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(h)
    }

    function s(h) {
        return i = ta(n.sliceSerialize(n.events[n.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), u) : r(h)
    }

    function u(h) {
        return Kt(h) ? go(e, l)(h) : l(h)
    }

    function l(h) {
        return sf(e, c, r, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(h)
    }

    function c(h) {
        return e.attempt(k3, d, d)(h)
    }

    function d(h) {
        return Be(h) ? je(e, m, "whitespace")(h) : m(h)
    }

    function m(h) {
        return h === null || xe(h) ? (e.exit("definition"), n.parser.defined.push(i), t(h)) : r(h)
    }
}

function C3(e, t, r) {
    return n;

    function n(s) {
        return Kt(s) ? go(e, i)(s) : r(s)
    }

    function i(s) {
        return uf(e, a, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s)
    }

    function a(s) {
        return Be(s) ? je(e, o, "whitespace")(s) : o(s)
    }

    function o(s) {
        return s === null || xe(s) ? t(s) : r(s)
    }
}
var fy = {
    name: "hardBreakEscape",
    tokenize: _3
};

function _3(e, t, r) {
    return n;

    function n(a) {
        return e.enter("hardBreakEscape"), e.consume(a), i
    }

    function i(a) {
        return xe(a) ? (e.exit("hardBreakEscape"), t(a)) : r(a)
    }
}
var hy = {
    name: "headingAtx",
    tokenize: T3,
    resolve: M3
};

function M3(e, t) {
    let r = e.length - 2,
        n = 3,
        i, a;
    return e[n][1].type === "whitespace" && (n += 2), r - 2 > n && e[r][1].type === "whitespace" && (r -= 2), e[r][1].type === "atxHeadingSequence" && (n === r - 1 || r - 4 > n && e[r - 2][1].type === "whitespace") && (r -= n + 1 === r ? 2 : 4), r > n && (i = {
        type: "atxHeadingText",
        start: e[n][1].start,
        end: e[r][1].end
    }, a = {
        type: "chunkText",
        start: e[n][1].start,
        end: e[r][1].end,
        contentType: "text"
    }, Kn(e, n, r - n + 1, [
        ["enter", i, t],
        ["enter", a, t],
        ["exit", a, t],
        ["exit", i, t]
    ])), e
}

function T3(e, t, r) {
    let n = 0;
    return i;

    function i(c) {
        return e.enter("atxHeading"), a(c)
    }

    function a(c) {
        return e.enter("atxHeadingSequence"), o(c)
    }

    function o(c) {
        return c === 35 && n++ < 6 ? (e.consume(c), o) : c === null || Kt(c) ? (e.exit("atxHeadingSequence"), s(c)) : r(c)
    }

    function s(c) {
        return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || xe(c) ? (e.exit("atxHeading"), t(c)) : Be(c) ? je(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), l(c))
    }

    function u(c) {
        return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), s(c))
    }

    function l(c) {
        return c === null || c === 35 || Kt(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), l)
    }
}
var i_ = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
    my = ["pre", "script", "style", "textarea"];
var py = {
        name: "htmlFlow",
        tokenize: O3,
        resolveTo: A3,
        concrete: !0
    },
    F3 = {
        tokenize: P3,
        partial: !0
    },
    I3 = {
        tokenize: L3,
        partial: !0
    };

function A3(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function O3(e, t, r) {
    let n = this,
        i, a, o, s, u;
    return l;

    function l(N) {
        return c(N)
    }

    function c(N) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(N), d
    }

    function d(N) {
        return N === 33 ? (e.consume(N), m) : N === 47 ? (e.consume(N), a = !0, y) : N === 63 ? (e.consume(N), i = 3, n.interrupt ? t : U) : Nr(N) ? (e.consume(N), o = String.fromCharCode(N), v) : r(N)
    }

    function m(N) {
        return N === 45 ? (e.consume(N), i = 2, h) : N === 91 ? (e.consume(N), i = 5, s = 0, g) : Nr(N) ? (e.consume(N), i = 4, n.interrupt ? t : U) : r(N)
    }

    function h(N) {
        return N === 45 ? (e.consume(N), n.interrupt ? t : U) : r(N)
    }

    function g(N) {
        let Ze = "CDATA[";
        return N === Ze.charCodeAt(s++) ? (e.consume(N), s === Ze.length ? n.interrupt ? t : oe : g) : r(N)
    }

    function y(N) {
        return Nr(N) ? (e.consume(N), o = String.fromCharCode(N), v) : r(N)
    }

    function v(N) {
        if (N === null || N === 47 || N === 62 || Kt(N)) {
            let Ze = N === 47,
                It = o.toLowerCase();
            return !Ze && !a && my.includes(It) ? (i = 1, n.interrupt ? t(N) : oe(N)) : i_.includes(o.toLowerCase()) ? (i = 6, Ze ? (e.consume(N), D) : n.interrupt ? t(N) : oe(N)) : (i = 7, n.interrupt && !n.parser.lazy[n.now().line] ? r(N) : a ? I(N) : C(N))
        }
        return N === 45 || pr(N) ? (e.consume(N), o += String.fromCharCode(N), v) : r(N)
    }

    function D(N) {
        return N === 62 ? (e.consume(N), n.interrupt ? t : oe) : r(N)
    }

    function I(N) {
        return Be(N) ? (e.consume(N), I) : J(N)
    }

    function C(N) {
        return N === 47 ? (e.consume(N), J) : N === 58 || N === 95 || Nr(N) ? (e.consume(N), x) : Be(N) ? (e.consume(N), C) : J(N)
    }

    function x(N) {
        return N === 45 || N === 46 || N === 58 || N === 95 || pr(N) ? (e.consume(N), x) : O(N)
    }

    function O(N) {
        return N === 61 ? (e.consume(N), A) : Be(N) ? (e.consume(N), O) : C(N)
    }

    function A(N) {
        return N === null || N === 60 || N === 61 || N === 62 || N === 96 ? r(N) : N === 34 || N === 39 ? (e.consume(N), u = N, P) : Be(N) ? (e.consume(N), A) : B(N)
    }

    function P(N) {
        return N === u ? (e.consume(N), u = null, G) : N === null || xe(N) ? r(N) : (e.consume(N), P)
    }

    function B(N) {
        return N === null || N === 34 || N === 39 || N === 47 || N === 60 || N === 61 || N === 62 || N === 96 || Kt(N) ? O(N) : (e.consume(N), B)
    }

    function G(N) {
        return N === 47 || N === 62 || Be(N) ? C(N) : r(N)
    }

    function J(N) {
        return N === 62 ? (e.consume(N), Q) : r(N)
    }

    function Q(N) {
        return N === null || xe(N) ? oe(N) : Be(N) ? (e.consume(N), Q) : r(N)
    }

    function oe(N) {
        return N === 45 && i === 2 ? (e.consume(N), be) : N === 60 && i === 1 ? (e.consume(N), pe) : N === 62 && i === 4 ? (e.consume(N), Je) : N === 63 && i === 3 ? (e.consume(N), U) : N === 93 && i === 5 ? (e.consume(N), Ce) : xe(N) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(F3, it, te)(N)) : N === null || xe(N) ? (e.exit("htmlFlowData"), te(N)) : (e.consume(N), oe)
    }

    function te(N) {
        return e.check(I3, re, it)(N)
    }

    function re(N) {
        return e.enter("lineEnding"), e.consume(N), e.exit("lineEnding"), ne
    }

    function ne(N) {
        return N === null || xe(N) ? te(N) : (e.enter("htmlFlowData"), oe(N))
    }

    function be(N) {
        return N === 45 ? (e.consume(N), U) : oe(N)
    }

    function pe(N) {
        return N === 47 ? (e.consume(N), o = "", De) : oe(N)
    }

    function De(N) {
        if (N === 62) {
            let Ze = o.toLowerCase();
            return my.includes(Ze) ? (e.consume(N), Je) : oe(N)
        }
        return Nr(N) && o.length < 8 ? (e.consume(N), o += String.fromCharCode(N), De) : oe(N)
    }

    function Ce(N) {
        return N === 93 ? (e.consume(N), U) : oe(N)
    }

    function U(N) {
        return N === 62 ? (e.consume(N), Je) : N === 45 && i === 2 ? (e.consume(N), U) : oe(N)
    }

    function Je(N) {
        return N === null || xe(N) ? (e.exit("htmlFlowData"), it(N)) : (e.consume(N), Je)
    }

    function it(N) {
        return e.exit("htmlFlow"), t(N)
    }
}

function L3(e, t, r) {
    let n = this;
    return i;

    function i(o) {
        return xe(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a) : r(o)
    }

    function a(o) {
        return n.parser.lazy[n.now().line] ? r(o) : t(o)
    }
}

function P3(e, t, r) {
    return n;

    function n(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Na, t, r)
    }
}
var gy = {
    name: "htmlText",
    tokenize: N3
};

function N3(e, t, r) {
    let n = this,
        i, a, o;
    return s;

    function s(U) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(U), u
    }

    function u(U) {
        return U === 33 ? (e.consume(U), l) : U === 47 ? (e.consume(U), O) : U === 63 ? (e.consume(U), C) : Nr(U) ? (e.consume(U), B) : r(U)
    }

    function l(U) {
        return U === 45 ? (e.consume(U), c) : U === 91 ? (e.consume(U), a = 0, g) : Nr(U) ? (e.consume(U), I) : r(U)
    }

    function c(U) {
        return U === 45 ? (e.consume(U), h) : r(U)
    }

    function d(U) {
        return U === null ? r(U) : U === 45 ? (e.consume(U), m) : xe(U) ? (o = d, pe(U)) : (e.consume(U), d)
    }

    function m(U) {
        return U === 45 ? (e.consume(U), h) : d(U)
    }

    function h(U) {
        return U === 62 ? be(U) : U === 45 ? m(U) : d(U)
    }

    function g(U) {
        let Je = "CDATA[";
        return U === Je.charCodeAt(a++) ? (e.consume(U), a === Je.length ? y : g) : r(U)
    }

    function y(U) {
        return U === null ? r(U) : U === 93 ? (e.consume(U), v) : xe(U) ? (o = y, pe(U)) : (e.consume(U), y)
    }

    function v(U) {
        return U === 93 ? (e.consume(U), D) : y(U)
    }

    function D(U) {
        return U === 62 ? be(U) : U === 93 ? (e.consume(U), D) : y(U)
    }

    function I(U) {
        return U === null || U === 62 ? be(U) : xe(U) ? (o = I, pe(U)) : (e.consume(U), I)
    }

    function C(U) {
        return U === null ? r(U) : U === 63 ? (e.consume(U), x) : xe(U) ? (o = C, pe(U)) : (e.consume(U), C)
    }

    function x(U) {
        return U === 62 ? be(U) : C(U)
    }

    function O(U) {
        return Nr(U) ? (e.consume(U), A) : r(U)
    }

    function A(U) {
        return U === 45 || pr(U) ? (e.consume(U), A) : P(U)
    }

    function P(U) {
        return xe(U) ? (o = P, pe(U)) : Be(U) ? (e.consume(U), P) : be(U)
    }

    function B(U) {
        return U === 45 || pr(U) ? (e.consume(U), B) : U === 47 || U === 62 || Kt(U) ? G(U) : r(U)
    }

    function G(U) {
        return U === 47 ? (e.consume(U), be) : U === 58 || U === 95 || Nr(U) ? (e.consume(U), J) : xe(U) ? (o = G, pe(U)) : Be(U) ? (e.consume(U), G) : be(U)
    }

    function J(U) {
        return U === 45 || U === 46 || U === 58 || U === 95 || pr(U) ? (e.consume(U), J) : Q(U)
    }

    function Q(U) {
        return U === 61 ? (e.consume(U), oe) : xe(U) ? (o = Q, pe(U)) : Be(U) ? (e.consume(U), Q) : G(U)
    }

    function oe(U) {
        return U === null || U === 60 || U === 61 || U === 62 || U === 96 ? r(U) : U === 34 || U === 39 ? (e.consume(U), i = U, te) : xe(U) ? (o = oe, pe(U)) : Be(U) ? (e.consume(U), oe) : (e.consume(U), re)
    }

    function te(U) {
        return U === i ? (e.consume(U), i = void 0, ne) : U === null ? r(U) : xe(U) ? (o = te, pe(U)) : (e.consume(U), te)
    }

    function re(U) {
        return U === null || U === 34 || U === 39 || U === 60 || U === 61 || U === 96 ? r(U) : U === 47 || U === 62 || Kt(U) ? G(U) : (e.consume(U), re)
    }

    function ne(U) {
        return U === 47 || U === 62 || Kt(U) ? G(U) : r(U)
    }

    function be(U) {
        return U === 62 ? (e.consume(U), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(U)
    }

    function pe(U) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(U), e.exit("lineEnding"), De
    }

    function De(U) {
        return Be(U) ? je(e, Ce, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : Ce(U)
    }

    function Ce(U) {
        return e.enter("htmlTextData"), o(U)
    }
}
var yo = {
        name: "labelEnd",
        tokenize: U3,
        resolveTo: $3,
        resolveAll: V3
    },
    R3 = {
        tokenize: W3
    },
    H3 = {
        tokenize: Y3
    },
    B3 = {
        tokenize: z3
    };

function V3(e) {
    let t = -1;
    for (; ++t < e.length;) {
        let r = e[t][1];
        (r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") && (e.splice(t + 1, r.type === "labelImage" ? 4 : 2), r.type = "data", t++)
    }
    return e
}

function $3(e, t) {
    let r = e.length,
        n = 0,
        i, a, o, s;
    for (; r--;)
        if (i = e[r][1], a) {
            if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
            e[r][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
        } else if (o) {
        if (e[r][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = r, i.type !== "labelLink")) {
            n = 2;
            break
        }
    } else i.type === "labelEnd" && (o = r);
    let u = {
            type: e[a][1].type === "labelLink" ? "link" : "image",
            start: Object.assign({}, e[a][1].start),
            end: Object.assign({}, e[e.length - 1][1].end)
        },
        l = {
            type: "label",
            start: Object.assign({}, e[a][1].start),
            end: Object.assign({}, e[o][1].end)
        },
        c = {
            type: "labelText",
            start: Object.assign({}, e[a + n + 2][1].end),
            end: Object.assign({}, e[o - 2][1].start)
        };
    return s = [
        ["enter", u, t],
        ["enter", l, t]
    ], s = mr(s, e.slice(a + 1, a + n + 3)), s = mr(s, [
        ["enter", c, t]
    ]), s = mr(s, Ms(t.parser.constructs.insideSpan.null, e.slice(a + n + 4, o - 3), t)), s = mr(s, [
        ["exit", c, t], e[o - 2], e[o - 1],
        ["exit", l, t]
    ]), s = mr(s, e.slice(o + 1)), s = mr(s, [
        ["exit", u, t]
    ]), Kn(e, a, e.length, s), e
}

function U3(e, t, r) {
    let n = this,
        i = n.events.length,
        a, o;
    for (; i--;)
        if ((n.events[i][1].type === "labelImage" || n.events[i][1].type === "labelLink") && !n.events[i][1]._balanced) {
            a = n.events[i][1];
            break
        } return s;

    function s(m) {
        return a ? a._inactive ? d(m) : (o = n.parser.defined.includes(ta(n.sliceSerialize({
            start: a.end,
            end: n.now()
        }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(m), e.exit("labelMarker"), e.exit("labelEnd"), u) : r(m)
    }

    function u(m) {
        return m === 40 ? e.attempt(R3, c, o ? c : d)(m) : m === 91 ? e.attempt(H3, c, o ? l : d)(m) : o ? c(m) : d(m)
    }

    function l(m) {
        return e.attempt(B3, c, d)(m)
    }

    function c(m) {
        return t(m)
    }

    function d(m) {
        return a._balanced = !0, r(m)
    }
}

function W3(e, t, r) {
    return n;

    function n(d) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), i
    }

    function i(d) {
        return Kt(d) ? go(e, a)(d) : a(d)
    }

    function a(d) {
        return d === 41 ? c(d) : sf(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d)
    }

    function o(d) {
        return Kt(d) ? go(e, u)(d) : c(d)
    }

    function s(d) {
        return r(d)
    }

    function u(d) {
        return d === 34 || d === 39 || d === 40 ? uf(e, l, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : c(d)
    }

    function l(d) {
        return Kt(d) ? go(e, c)(d) : c(d)
    }

    function c(d) {
        return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : r(d)
    }
}

function Y3(e, t, r) {
    let n = this;
    return i;

    function i(s) {
        return lf.call(n, e, a, o, "reference", "referenceMarker", "referenceString")(s)
    }

    function a(s) {
        return n.parser.defined.includes(ta(n.sliceSerialize(n.events[n.events.length - 1][1]).slice(1, -1))) ? t(s) : r(s)
    }

    function o(s) {
        return r(s)
    }
}

function z3(e, t, r) {
    return n;

    function n(a) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i
    }

    function i(a) {
        return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : r(a)
    }
}
var yy = {
    name: "labelStartImage",
    tokenize: K3,
    resolveAll: yo.resolveAll
};

function K3(e, t, r) {
    let n = this;
    return i;

    function i(s) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), a
    }

    function a(s) {
        return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), o) : r(s)
    }

    function o(s) {
        return s === 94 && "_hiddenFootnoteSupport" in n.parser.constructs ? r(s) : t(s)
    }
}
var vy = {
    name: "labelStartLink",
    tokenize: j3,
    resolveAll: yo.resolveAll
};

function j3(e, t, r) {
    let n = this;
    return i;

    function i(o) {
        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), a
    }

    function a(o) {
        return o === 94 && "_hiddenFootnoteSupport" in n.parser.constructs ? r(o) : t(o)
    }
}
var Xl = {
    name: "lineEnding",
    tokenize: q3
};

function q3(e, t) {
    return r;

    function r(n) {
        return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), je(e, t, "linePrefix")
    }
}
var vo = {
    name: "thematicBreak",
    tokenize: G3
};

function G3(e, t, r) {
    let n = 0,
        i;
    return a;

    function a(l) {
        return e.enter("thematicBreak"), o(l)
    }

    function o(l) {
        return i = l, s(l)
    }

    function s(l) {
        return l === i ? (e.enter("thematicBreakSequence"), u(l)) : n >= 3 && (l === null || xe(l)) ? (e.exit("thematicBreak"), t(l)) : r(l)
    }

    function u(l) {
        return l === i ? (e.consume(l), n++, u) : (e.exit("thematicBreakSequence"), Be(l) ? je(e, s, "whitespace")(l) : s(l))
    }
}
var ir = {
        name: "list",
        tokenize: Q3,
        continuation: {
            tokenize: X3
        },
        exit: tB
    },
    J3 = {
        tokenize: nB,
        partial: !0
    },
    Z3 = {
        tokenize: eB,
        partial: !0
    };

function Q3(e, t, r) {
    let n = this,
        i = n.events[n.events.length - 1],
        a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        o = 0;
    return s;

    function s(h) {
        let g = n.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
        if (g === "listUnordered" ? !n.containerState.marker || h === n.containerState.marker : Jl(h)) {
            if (n.containerState.type || (n.containerState.type = g, e.enter(g, {
                    _container: !0
                })), g === "listUnordered") return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(vo, r, l)(h) : l(h);
            if (!n.interrupt || h === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(h)
        }
        return r(h)
    }

    function u(h) {
        return Jl(h) && ++o < 10 ? (e.consume(h), u) : (!n.interrupt || o < 2) && (n.containerState.marker ? h === n.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), l(h)) : r(h)
    }

    function l(h) {
        return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), n.containerState.marker = n.containerState.marker || h, e.check(Na, n.interrupt ? r : c, e.attempt(J3, m, d))
    }

    function c(h) {
        return n.containerState.initialBlankLine = !0, a++, m(h)
    }

    function d(h) {
        return Be(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), m) : r(h)
    }

    function m(h) {
        return n.containerState.size = a + n.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h)
    }
}

function X3(e, t, r) {
    let n = this;
    return n.containerState._closeFlow = void 0, e.check(Na, i, a);

    function i(s) {
        return n.containerState.furtherBlankLines = n.containerState.furtherBlankLines || n.containerState.initialBlankLine, je(e, t, "listItemIndent", n.containerState.size + 1)(s)
    }

    function a(s) {
        return n.containerState.furtherBlankLines || !Be(s) ? (n.containerState.furtherBlankLines = void 0, n.containerState.initialBlankLine = void 0, o(s)) : (n.containerState.furtherBlankLines = void 0, n.containerState.initialBlankLine = void 0, e.attempt(Z3, t, o)(s))
    }

    function o(s) {
        return n.containerState._closeFlow = !0, n.interrupt = void 0, je(e, e.attempt(ir, t, r), "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s)
    }
}

function eB(e, t, r) {
    let n = this;
    return je(e, i, "listItemIndent", n.containerState.size + 1);

    function i(a) {
        let o = n.events[n.events.length - 1];
        return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === n.containerState.size ? t(a) : r(a)
    }
}

function tB(e) {
    e.exit(this.containerState.type)
}

function nB(e, t, r) {
    let n = this;
    return je(e, i, "listItemPrefixWhitespace", n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);

    function i(a) {
        let o = n.events[n.events.length - 1];
        return !Be(a) && o && o[1].type === "listItemPrefixWhitespace" ? t(a) : r(a)
    }
}
var cf = {
    name: "setextUnderline",
    tokenize: iB,
    resolveTo: rB
};

function rB(e, t) {
    let r = e.length,
        n, i, a;
    for (; r--;)
        if (e[r][0] === "enter") {
            if (e[r][1].type === "content") {
                n = r;
                break
            }
            e[r][1].type === "paragraph" && (i = r)
        } else e[r][1].type === "content" && e.splice(r, 1), !a && e[r][1].type === "definition" && (a = r);
    let o = {
        type: "setextHeading",
        start: Object.assign({}, e[i][1].start),
        end: Object.assign({}, e[e.length - 1][1].end)
    };
    return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", o, t]), e.splice(a + 1, 0, ["exit", e[n][1], t]), e[n][1].end = Object.assign({}, e[a][1].end)) : e[n][1] = o, e.push(["exit", o, t]), e
}

function iB(e, t, r) {
    let n = this,
        i;
    return a;

    function a(l) {
        let c = n.events.length,
            d;
        for (; c--;)
            if (n.events[c][1].type !== "lineEnding" && n.events[c][1].type !== "linePrefix" && n.events[c][1].type !== "content") {
                d = n.events[c][1].type === "paragraph";
                break
            } return !n.parser.lazy[n.now().line] && (n.interrupt || d) ? (e.enter("setextHeadingLine"), i = l, o(l)) : r(l)
    }

    function o(l) {
        return e.enter("setextHeadingLineSequence"), s(l)
    }

    function s(l) {
        return l === i ? (e.consume(l), s) : (e.exit("setextHeadingLineSequence"), Be(l) ? je(e, u, "lineSuffix")(l) : u(l))
    }

    function u(l) {
        return l === null || xe(l) ? (e.exit("setextHeadingLine"), t(l)) : r(l)
    }
}
var a_ = {
    tokenize: aB
};

function aB(e) {
    let t = this,
        r = e.attempt(Na, n, e.attempt(this.parser.constructs.flowInitial, i, je(e, e.attempt(this.parser.constructs.flow, i, e.attempt(cy, i)), "linePrefix")));
    return r;

    function n(a) {
        if (a === null) {
            e.consume(a);
            return
        }
        return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, r
    }

    function i(a) {
        if (a === null) {
            e.consume(a);
            return
        }
        return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, r
    }
}
var o_ = {
        resolveAll: c_()
    },
    s_ = u_("string"),
    l_ = u_("text");

function u_(e) {
    return {
        tokenize: t,
        resolveAll: c_(e === "text" ? oB : void 0)
    };

    function t(r) {
        let n = this,
            i = this.parser.constructs[e],
            a = r.attempt(i, o, s);
        return o;

        function o(c) {
            return l(c) ? a(c) : s(c)
        }

        function s(c) {
            if (c === null) {
                r.consume(c);
                return
            }
            return r.enter("data"), r.consume(c), u
        }

        function u(c) {
            return l(c) ? (r.exit("data"), a(c)) : (r.consume(c), u)
        }

        function l(c) {
            if (c === null) return !0;
            let d = i[c],
                m = -1;
            if (d)
                for (; ++m < d.length;) {
                    let h = d[m];
                    if (!h.previous || h.previous.call(n, n.previous)) return !0
                }
            return !1
        }
    }
}

function c_(e) {
    return t;

    function t(r, n) {
        let i = -1,
            a;
        for (; ++i <= r.length;) a === void 0 ? r[i] && r[i][1].type === "data" && (a = i, i++) : (!r[i] || r[i][1].type !== "data") && (i !== a + 2 && (r[a][1].end = r[i - 1][1].end, r.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
        return e ? e(r, n) : r
    }
}

function oB(e, t) {
    let r = 0;
    for (; ++r <= e.length;)
        if ((r === e.length || e[r][1].type === "lineEnding") && e[r - 1][1].type === "data") {
            let n = e[r - 1][1],
                i = t.sliceStream(n),
                a = i.length,
                o = -1,
                s = 0,
                u;
            for (; a--;) {
                let l = i[a];
                if (typeof l == "string") {
                    for (o = l.length; l.charCodeAt(o - 1) === 32;) s++, o--;
                    if (o) break;
                    o = -1
                } else if (l === -2) u = !0, s++;
                else if (l !== -1) {
                    a++;
                    break
                }
            }
            if (s) {
                let l = {
                    type: r === e.length || u || s < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: n.end.line,
                        column: n.end.column - s,
                        offset: n.end.offset - s,
                        _index: n.start._index + a,
                        _bufferIndex: a ? o : n.start._bufferIndex + o
                    },
                    end: Object.assign({}, n.end)
                };
                n.end = Object.assign({}, l.start), n.start.offset === n.end.offset ? Object.assign(n, l) : (e.splice(r, 0, ["enter", l, t], ["exit", l, t]), r += 2)
            }
            r++
        } return e
}

function d_(e, t, r) {
    let n = Object.assign(r ? Object.assign({}, r) : {
            line: 1,
            column: 1,
            offset: 0
        }, {
            _index: 0,
            _bufferIndex: -1
        }),
        i = {},
        a = [],
        o = [],
        s = [],
        u = !0,
        l = {
            consume: x,
            enter: O,
            exit: A,
            attempt: G(P),
            check: G(B),
            interrupt: G(B, {
                interrupt: !0
            })
        },
        c = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: y,
            sliceSerialize: g,
            now: v,
            defineSkip: D,
            write: h
        },
        d = t.tokenize.call(c, l),
        m;
    return t.resolveAll && a.push(t), c;

    function h(te) {
        return o = mr(o, te), I(), o[o.length - 1] !== null ? [] : (J(t, 0), c.events = Ms(a, c.events, c), c.events)
    }

    function g(te, re) {
        return lB(y(te), re)
    }

    function y(te) {
        return sB(o, te)
    }

    function v() {
        let {
            line: te,
            column: re,
            offset: ne,
            _index: be,
            _bufferIndex: pe
        } = n;
        return {
            line: te,
            column: re,
            offset: ne,
            _index: be,
            _bufferIndex: pe
        }
    }

    function D(te) {
        i[te.line] = te.column, oe()
    }

    function I() {
        let te;
        for (; n._index < o.length;) {
            let re = o[n._index];
            if (typeof re == "string")
                for (te = n._index, n._bufferIndex < 0 && (n._bufferIndex = 0); n._index === te && n._bufferIndex < re.length;) C(re.charCodeAt(n._bufferIndex));
            else C(re)
        }
    }

    function C(te) {
        u = void 0, m = te, d = d(te)
    }

    function x(te) {
        xe(te) ? (n.line++, n.column = 1, n.offset += te === -3 ? 2 : 1, oe()) : te !== -1 && (n.column++, n.offset++), n._bufferIndex < 0 ? n._index++ : (n._bufferIndex++, n._bufferIndex === o[n._index].length && (n._bufferIndex = -1, n._index++)), c.previous = te, u = !0
    }

    function O(te, re) {
        let ne = re || {};
        return ne.type = te, ne.start = v(), c.events.push(["enter", ne, c]), s.push(ne), ne
    }

    function A(te) {
        let re = s.pop();
        return re.end = v(), c.events.push(["exit", re, c]), re
    }

    function P(te, re) {
        J(te, re.from)
    }

    function B(te, re) {
        re.restore()
    }

    function G(te, re) {
        return ne;

        function ne(be, pe, De) {
            let Ce, U, Je, it;
            return Array.isArray(be) ? Ze(be) : "tokenize" in be ? Ze([be]) : N(be);

            function N(vt) {
                return Wt;

                function Wt(Tt) {
                    let Jt = Tt !== null && vt[Tt],
                        en = Tt !== null && vt.null,
                        gn = [...Array.isArray(Jt) ? Jt : Jt ? [Jt] : [], ...Array.isArray(en) ? en : en ? [en] : []];
                    return Ze(gn)(Tt)
                }
            }

            function Ze(vt) {
                return Ce = vt, U = 0, vt.length === 0 ? De : It(vt[U])
            }

            function It(vt) {
                return Wt;

                function Wt(Tt) {
                    return it = Q(), Je = vt, vt.partial || (c.currentConstruct = vt), vt.name && c.parser.constructs.disable.null.includes(vt.name) ? jt(Tt) : vt.tokenize.call(re ? Object.assign(Object.create(c), re) : c, l, Mt, jt)(Tt)
                }
            }

            function Mt(vt) {
                return u = !0, te(Je, it), pe
            }

            function jt(vt) {
                return u = !0, it.restore(), ++U < Ce.length ? It(Ce[U]) : De
            }
        }
    }

    function J(te, re) {
        te.resolveAll && !a.includes(te) && a.push(te), te.resolve && Kn(c.events, re, c.events.length - re, te.resolve(c.events.slice(re), c)), te.resolveTo && (c.events = te.resolveTo(c.events, c))
    }

    function Q() {
        let te = v(),
            re = c.previous,
            ne = c.currentConstruct,
            be = c.events.length,
            pe = Array.from(s);
        return {
            restore: De,
            from: be
        };

        function De() {
            n = te, c.previous = re, c.currentConstruct = ne, c.events.length = be, s = pe, oe()
        }
    }

    function oe() {
        n.line in i && n.column < 2 && (n.column = i[n.line], n.offset += i[n.line] - 1)
    }
}

function sB(e, t) {
    let r = t.start._index,
        n = t.start._bufferIndex,
        i = t.end._index,
        a = t.end._bufferIndex,
        o;
    if (r === i) o = [e[r].slice(n, a)];
    else {
        if (o = e.slice(r, i), n > -1) {
            let s = o[0];
            typeof s == "string" ? o[0] = s.slice(n) : o.shift()
        }
        a > 0 && o.push(e[i].slice(0, a))
    }
    return o
}

function lB(e, t) {
    let r = -1,
        n = [],
        i;
    for (; ++r < e.length;) {
        let a = e[r],
            o;
        if (typeof a == "string") o = a;
        else switch (a) {
            case -5: {
                o = "\r";
                break
            }
            case -4: {
                o = `
`;
                break
            }
            case -3: {
                o = `\r
`;
                break
            }
            case -2: {
                o = t ? " " : "	";
                break
            }
            case -1: {
                if (!t && i) continue;
                o = " ";
                break
            }
            default:
                o = String.fromCharCode(a)
        }
        i = a === -2, n.push(o)
    }
    return n.join("")
}
var wy = {};
Rf(wy, {
    attentionMarkers: () => gB,
    contentInitial: () => cB,
    disable: () => yB,
    document: () => uB,
    flow: () => fB,
    flowInitial: () => dB,
    insideSpan: () => pB,
    string: () => hB,
    text: () => mB
});
var uB = {
        42: ir,
        43: ir,
        45: ir,
        48: ir,
        49: ir,
        50: ir,
        51: ir,
        52: ir,
        53: ir,
        54: ir,
        55: ir,
        56: ir,
        57: ir,
        62: tf
    },
    cB = {
        91: dy
    },
    dB = {
        [-2]: Ql,
        [-1]: Ql,
        32: Ql
    },
    fB = {
        35: hy,
        42: vo,
        45: [cf, vo],
        60: py,
        61: cf,
        95: vo,
        96: af,
        126: af
    },
    hB = {
        38: rf,
        92: nf
    },
    mB = {
        [-5]: Xl,
        [-4]: Xl,
        [-3]: Xl,
        33: yy,
        38: rf,
        42: Zl,
        60: [ly, gy],
        91: vy,
        92: [fy, nf],
        93: yo,
        95: Zl,
        96: uy
    },
    pB = {
        null: [Zl, o_]
    },
    gB = {
        null: [42, 95]
    },
    yB = {
        null: []
    };

function f_(e) {
    let r = zC([wy, ...(e || {}).extensions || []]),
        n = {
            defined: [],
            lazy: {},
            constructs: r,
            content: i(QC),
            document: i(e_),
            flow: i(a_),
            string: i(s_),
            text: i(l_)
        };
    return n;

    function i(a) {
        return o;

        function o(s) {
            return d_(n, a, s)
        }
    }
}
var h_ = /[\0\t\n\r]/g;

function m_() {
    let e = 1,
        t = "",
        r = !0,
        n;
    return i;

    function i(a, o, s) {
        let u = [],
            l, c, d, m, h;
        for (a = t + a.toString(o), d = 0, t = "", r && (a.charCodeAt(0) === 65279 && d++, r = void 0); d < a.length;) {
            if (h_.lastIndex = d, l = h_.exec(a), m = l && l.index !== void 0 ? l.index : a.length, h = a.charCodeAt(m), !l) {
                t = a.slice(d);
                break
            }
            if (h === 10 && d === m && n) u.push(-3), n = void 0;
            else switch (n && (u.push(-5), n = void 0), d < m && (u.push(a.slice(d, m)), e += m - d), h) {
                case 0: {
                    u.push(65533), e++;
                    break
                }
                case 9: {
                    for (c = Math.ceil(e / 4) * 4, u.push(-2); e++ < c;) u.push(-1);
                    break
                }
                case 10: {
                    u.push(-4), e = 1;
                    break
                }
                default:
                    n = !0, e = 1
            }
            d = m + 1
        }
        return s && (n && u.push(-5), t && u.push(t), u.push(null)), u
    }
}

function p_(e) {
    for (; !of(e););
    return e
}

function df(e, t) {
    let r = Number.parseInt(e, t);
    return r < 9 || r === 11 || r > 13 && r < 32 || r > 126 && r < 160 || r > 55295 && r < 57344 || r > 64975 && r < 65008 || (r & 65535) === 65535 || (r & 65535) === 65534 || r > 1114111 ? "\uFFFD" : String.fromCharCode(r)
}
var vB = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function g_(e) {
    return e.replace(vB, wB)
}

function wB(e, t, r) {
    if (t) return t;
    if (r.charCodeAt(0) === 35) {
        let i = r.charCodeAt(1),
            a = i === 120 || i === 88;
        return df(r.slice(a ? 2 : 1), a ? 16 : 10)
    }
    return Ts(r) || e
}

function Fs(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? y_(e.position) : "start" in e || "end" in e ? y_(e) : "line" in e || "column" in e ? by(e) : ""
}

function by(e) {
    return v_(e && e.line) + ":" + v_(e && e.column)
}

function y_(e) {
    return by(e && e.start) + "-" + by(e && e.end)
}

function v_(e) {
    return e && typeof e == "number" ? e : 1
}
var b_ = {}.hasOwnProperty,
    ff = function(e, t, r) {
        return typeof t != "string" && (r = t, t = void 0), bB(r)(p_(f_(r).document().write(m_()(e, t, !0))))
    };

function bB(e) {
    let t = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: s(Vt),
            autolinkProtocol: Q,
            autolinkEmail: Q,
            atxHeading: s(xn),
            blockQuote: s(Jt),
            characterEscape: Q,
            characterReference: Q,
            codeFenced: s(en),
            codeFencedFenceInfo: u,
            codeFencedFenceMeta: u,
            codeIndented: s(en, u),
            codeText: s(gn, u),
            codeTextData: Q,
            data: Q,
            codeFlowValue: Q,
            definition: s(yn),
            definitionDestinationString: u,
            definitionLabelString: u,
            definitionTitleString: u,
            emphasis: s(vn),
            hardBreakEscape: s(jn),
            hardBreakTrailing: s(jn),
            htmlFlow: s(sn, u),
            htmlFlowData: Q,
            htmlText: s(sn, u),
            htmlTextData: Q,
            image: s(Rt),
            label: u,
            link: s(Vt),
            listItem: s(Rr),
            listItemValue: g,
            listOrdered: s(Sr, h),
            listUnordered: s(Sr),
            paragraph: s(Bt),
            reference: It,
            referenceString: u,
            resourceDestinationString: u,
            resourceTitleString: u,
            setextHeading: s(xn),
            strong: s(Hr),
            thematicBreak: s(At)
        },
        exit: {
            atxHeading: c(),
            atxHeadingSequence: P,
            autolink: c(),
            autolinkEmail: Tt,
            autolinkProtocol: Wt,
            blockQuote: c(),
            characterEscapeValue: oe,
            characterReferenceMarkerHexadecimal: jt,
            characterReferenceMarkerNumeric: jt,
            characterReferenceValue: vt,
            codeFenced: c(I),
            codeFencedFence: D,
            codeFencedFenceInfo: y,
            codeFencedFenceMeta: v,
            codeFlowValue: oe,
            codeIndented: c(C),
            codeText: c(pe),
            codeTextData: oe,
            data: oe,
            definition: c(),
            definitionDestinationString: A,
            definitionLabelString: x,
            definitionTitleString: O,
            emphasis: c(),
            hardBreakEscape: c(re),
            hardBreakTrailing: c(re),
            htmlFlow: c(ne),
            htmlFlowData: oe,
            htmlText: c(be),
            htmlTextData: oe,
            image: c(Ce),
            label: Je,
            labelText: U,
            lineEnding: te,
            link: c(De),
            listItem: c(),
            listOrdered: c(),
            listUnordered: c(),
            paragraph: c(),
            referenceString: Mt,
            resourceDestinationString: it,
            resourceTitleString: N,
            resource: Ze,
            setextHeading: c(J),
            setextHeadingLineSequence: G,
            setextHeadingText: B,
            strong: c(),
            thematicBreak: c()
        }
    };
    D_(t, (e || {}).mdastExtensions || []);
    let r = {};
    return n;

    function n(Z) {
        let me = {
                type: "root",
                children: []
            },
            Ie = {
                stack: [me],
                tokenStack: [],
                config: t,
                enter: l,
                exit: d,
                buffer: u,
                resume: m,
                setData: a,
                getData: o
            },
            at = [],
            Dt = -1;
        for (; ++Dt < Z.length;)
            if (Z[Dt][1].type === "listOrdered" || Z[Dt][1].type === "listUnordered")
                if (Z[Dt][0] === "enter") at.push(Dt);
                else {
                    let Cn = at.pop();
                    Dt = i(Z, Cn, Dt)
                } for (Dt = -1; ++Dt < Z.length;) {
            let Cn = t[Z[Dt][0]];
            b_.call(Cn, Z[Dt][1].type) && Cn[Z[Dt][1].type].call(Object.assign({
                sliceSerialize: Z[Dt][2].sliceSerialize
            }, Ie), Z[Dt][1])
        }
        if (Ie.tokenStack.length > 0) {
            let Cn = Ie.tokenStack[Ie.tokenStack.length - 1];
            (Cn[1] || w_).call(Ie, void 0, Cn[0])
        }
        for (me.position = {
                start: Ra(Z.length > 0 ? Z[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                }),
                end: Ra(Z.length > 0 ? Z[Z.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                })
            }, Dt = -1; ++Dt < t.transforms.length;) me = t.transforms[Dt](me) || me;
        return me
    }

    function i(Z, me, Ie) {
        let at = me - 1,
            Dt = -1,
            Cn = !1,
            _n, Ht, ar, ht;
        for (; ++at <= Ie;) {
            let St = Z[at];
            if (St[1].type === "listUnordered" || St[1].type === "listOrdered" || St[1].type === "blockQuote" ? (St[0] === "enter" ? Dt++ : Dt--, ht = void 0) : St[1].type === "lineEndingBlank" ? St[0] === "enter" && (_n && !ht && !Dt && !ar && (ar = at), ht = void 0) : St[1].type === "linePrefix" || St[1].type === "listItemValue" || St[1].type === "listItemMarker" || St[1].type === "listItemPrefix" || St[1].type === "listItemPrefixWhitespace" || (ht = void 0), !Dt && St[0] === "enter" && St[1].type === "listItemPrefix" || Dt === -1 && St[0] === "exit" && (St[1].type === "listUnordered" || St[1].type === "listOrdered")) {
                if (_n) {
                    let L = at;
                    for (Ht = void 0; L--;) {
                        let K = Z[L];
                        if (K[1].type === "lineEnding" || K[1].type === "lineEndingBlank") {
                            if (K[0] === "exit") continue;
                            Ht && (Z[Ht][1].type = "lineEndingBlank", Cn = !0), K[1].type = "lineEnding", Ht = L
                        } else if (!(K[1].type === "linePrefix" || K[1].type === "blockQuotePrefix" || K[1].type === "blockQuotePrefixWhitespace" || K[1].type === "blockQuoteMarker" || K[1].type === "listItemIndent")) break
                    }
                    ar && (!Ht || ar < Ht) && (_n._spread = !0), _n.end = Object.assign({}, Ht ? Z[Ht][1].start : St[1].end), Z.splice(Ht || at, 0, ["exit", _n, St[2]]), at++, Ie++
                }
                St[1].type === "listItemPrefix" && (_n = {
                    type: "listItem",
                    _spread: !1,
                    start: Object.assign({}, St[1].start),
                    end: void 0
                }, Z.splice(at, 0, ["enter", _n, St[2]]), at++, Ie++, ar = void 0, ht = !0)
            }
        }
        return Z[me][1]._spread = Cn, Ie
    }

    function a(Z, me) {
        r[Z] = me
    }

    function o(Z) {
        return r[Z]
    }

    function s(Z, me) {
        return Ie;

        function Ie(at) {
            l.call(this, Z(at), at), me && me.call(this, at)
        }
    }

    function u() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }

    function l(Z, me, Ie) {
        return this.stack[this.stack.length - 1].children.push(Z), this.stack.push(Z), this.tokenStack.push([me, Ie]), Z.position = {
            start: Ra(me.start)
        }, Z
    }

    function c(Z) {
        return me;

        function me(Ie) {
            Z && Z.call(this, Ie), d.call(this, Ie)
        }
    }

    function d(Z, me) {
        let Ie = this.stack.pop(),
            at = this.tokenStack.pop();
        if (at) at[0].type !== Z.type && (me ? me.call(this, Z, at[0]) : (at[1] || w_).call(this, Z, at[0]));
        else throw new Error("Cannot close `" + Z.type + "` (" + Fs({
            start: Z.start,
            end: Z.end
        }) + "): it\u2019s not open");
        return Ie.position.end = Ra(Z.end), Ie
    }

    function m() {
        return _s(this.stack.pop())
    }

    function h() {
        a("expectingFirstListItemValue", !0)
    }

    function g(Z) {
        if (o("expectingFirstListItemValue")) {
            let me = this.stack[this.stack.length - 2];
            me.start = Number.parseInt(this.sliceSerialize(Z), 10), a("expectingFirstListItemValue")
        }
    }

    function y() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.lang = Z
    }

    function v() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.meta = Z
    }

    function D() {
        o("flowCodeInside") || (this.buffer(), a("flowCodeInside", !0))
    }

    function I() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.value = Z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), a("flowCodeInside")
    }

    function C() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.value = Z.replace(/(\r?\n|\r)$/g, "")
    }

    function x(Z) {
        let me = this.resume(),
            Ie = this.stack[this.stack.length - 1];
        Ie.label = me, Ie.identifier = ta(this.sliceSerialize(Z)).toLowerCase()
    }

    function O() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.title = Z
    }

    function A() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.url = Z
    }

    function P(Z) {
        let me = this.stack[this.stack.length - 1];
        if (!me.depth) {
            let Ie = this.sliceSerialize(Z).length;
            me.depth = Ie
        }
    }

    function B() {
        a("setextHeadingSlurpLineEnding", !0)
    }

    function G(Z) {
        let me = this.stack[this.stack.length - 1];
        me.depth = this.sliceSerialize(Z).charCodeAt(0) === 61 ? 1 : 2
    }

    function J() {
        a("setextHeadingSlurpLineEnding")
    }

    function Q(Z) {
        let me = this.stack[this.stack.length - 1],
            Ie = me.children[me.children.length - 1];
        (!Ie || Ie.type !== "text") && (Ie = rn(), Ie.position = {
            start: Ra(Z.start)
        }, me.children.push(Ie)), this.stack.push(Ie)
    }

    function oe(Z) {
        let me = this.stack.pop();
        me.value += this.sliceSerialize(Z), me.position.end = Ra(Z.end)
    }

    function te(Z) {
        let me = this.stack[this.stack.length - 1];
        if (o("atHardBreak")) {
            let Ie = me.children[me.children.length - 1];
            Ie.position.end = Ra(Z.end), a("atHardBreak");
            return
        }!o("setextHeadingSlurpLineEnding") && t.canContainEols.includes(me.type) && (Q.call(this, Z), oe.call(this, Z))
    }

    function re() {
        a("atHardBreak", !0)
    }

    function ne() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.value = Z
    }

    function be() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.value = Z
    }

    function pe() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.value = Z
    }

    function De() {
        let Z = this.stack[this.stack.length - 1];
        if (o("inReference")) {
            let me = o("referenceType") || "shortcut";
            Z.type += "Reference", Z.referenceType = me, delete Z.url, delete Z.title
        } else delete Z.identifier, delete Z.label;
        a("referenceType")
    }

    function Ce() {
        let Z = this.stack[this.stack.length - 1];
        if (o("inReference")) {
            let me = o("referenceType") || "shortcut";
            Z.type += "Reference", Z.referenceType = me, delete Z.url, delete Z.title
        } else delete Z.identifier, delete Z.label;
        a("referenceType")
    }

    function U(Z) {
        let me = this.sliceSerialize(Z),
            Ie = this.stack[this.stack.length - 2];
        Ie.label = g_(me), Ie.identifier = ta(me).toLowerCase()
    }

    function Je() {
        let Z = this.stack[this.stack.length - 1],
            me = this.resume(),
            Ie = this.stack[this.stack.length - 1];
        if (a("inReference", !0), Ie.type === "link") {
            let at = Z.children;
            Ie.children = at
        } else Ie.alt = me
    }

    function it() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.url = Z
    }

    function N() {
        let Z = this.resume(),
            me = this.stack[this.stack.length - 1];
        me.title = Z
    }

    function Ze() {
        a("inReference")
    }

    function It() {
        a("referenceType", "collapsed")
    }

    function Mt(Z) {
        let me = this.resume(),
            Ie = this.stack[this.stack.length - 1];
        Ie.label = me, Ie.identifier = ta(this.sliceSerialize(Z)).toLowerCase(), a("referenceType", "full")
    }

    function jt(Z) {
        a("characterReferenceType", Z.type)
    }

    function vt(Z) {
        let me = this.sliceSerialize(Z),
            Ie = o("characterReferenceType"),
            at;
        Ie ? (at = df(me, Ie === "characterReferenceMarkerNumeric" ? 10 : 16), a("characterReferenceType")) : at = Ts(me);
        let Dt = this.stack.pop();
        Dt.value += at, Dt.position.end = Ra(Z.end)
    }

    function Wt(Z) {
        oe.call(this, Z);
        let me = this.stack[this.stack.length - 1];
        me.url = this.sliceSerialize(Z)
    }

    function Tt(Z) {
        oe.call(this, Z);
        let me = this.stack[this.stack.length - 1];
        me.url = "mailto:" + this.sliceSerialize(Z)
    }

    function Jt() {
        return {
            type: "blockquote",
            children: []
        }
    }

    function en() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }

    function gn() {
        return {
            type: "inlineCode",
            value: ""
        }
    }

    function yn() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }

    function vn() {
        return {
            type: "emphasis",
            children: []
        }
    }

    function xn() {
        return {
            type: "heading",
            depth: void 0,
            children: []
        }
    }

    function jn() {
        return {
            type: "break"
        }
    }

    function sn() {
        return {
            type: "html",
            value: ""
        }
    }

    function Rt() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }

    function Vt() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }

    function Sr(Z) {
        return {
            type: "list",
            ordered: Z.type === "listOrdered",
            start: null,
            spread: Z._spread,
            children: []
        }
    }

    function Rr(Z) {
        return {
            type: "listItem",
            spread: Z._spread,
            checked: null,
            children: []
        }
    }

    function Bt() {
        return {
            type: "paragraph",
            children: []
        }
    }

    function Hr() {
        return {
            type: "strong",
            children: []
        }
    }

    function rn() {
        return {
            type: "text",
            value: ""
        }
    }

    function At() {
        return {
            type: "thematicBreak"
        }
    }
}

function Ra(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}

function D_(e, t) {
    let r = -1;
    for (; ++r < t.length;) {
        let n = t[r];
        Array.isArray(n) ? D_(e, n) : DB(e, n)
    }
}

function DB(e, t) {
    let r;
    for (r in t)
        if (b_.call(t, r)) {
            if (r === "canContainEols") {
                let n = t[r];
                n && e[r].push(...n)
            } else if (r === "transforms") {
                let n = t[r];
                n && e[r].push(...n)
            } else if (r === "enter" || r === "exit") {
                let n = t[r];
                n && Object.assign(e[r], n)
            }
        }
}

function w_(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + Fs({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + t.type + "`, " + Fs({
        start: t.start,
        end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Fs({
        start: t.start,
        end: t.end
    }) + ") is still open")
}
var E_ = Ct(S_(), 1),
    eu = Object.assign(wo(Error), {
        eval: wo(EvalError),
        range: wo(RangeError),
        reference: wo(ReferenceError),
        syntax: wo(SyntaxError),
        type: wo(TypeError),
        uri: wo(URIError)
    });

function wo(e) {
    return t.displayName = e.displayName || e.name, t;

    function t(r, ...n) {
        let i = r && (0, E_.default)(r, ...n);
        return new e(i)
    }
}
var hf = {}.hasOwnProperty,
    k_ = {
        yaml: "-",
        toml: "+"
    };

function mf(e) {
    let t = [],
        r = -1,
        n = Array.isArray(e) ? e : e ? [e] : ["yaml"];
    for (; ++r < n.length;) t[r] = SB(n[r]);
    return t
}

function SB(e) {
    let t = e;
    if (typeof t == "string") {
        if (!hf.call(k_, t)) throw eu("Missing matter definition for `%s`", t);
        t = {
            type: t,
            marker: k_[t]
        }
    } else if (typeof t != "object") throw eu("Expected matter to be an object, not `%j`", t);
    if (!hf.call(t, "type")) throw eu("Missing `type` in matter `%j`", t);
    if (!hf.call(t, "fence") && !hf.call(t, "marker")) throw eu("Missing `marker` or `fence` in matter `%j`", t);
    return t
}

function Sy(e) {
    let t = mf(e),
        r = {},
        n = {},
        i = -1;
    for (; ++i < t.length;) {
        let a = t[i];
        r[a.type] = EB(a), n[a.type] = kB, n[a.type + "Value"] = xB
    }
    return {
        enter: r,
        exit: n
    }
}

function EB(e) {
    return t;

    function t(r) {
        this.enter({
            type: e.type,
            value: ""
        }, r), this.buffer()
    }
}

function kB(e) {
    let t = this.resume(),
        r = this.exit(e);
    r.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")
}

function xB(e) {
    this.config.enter.data.call(this, e), this.config.exit.data.call(this, e)
}

function ky(e) {
    let t = mf(e),
        r = {},
        n = -1;
    for (; ++n < t.length;) {
        let i = t[n],
            a = Ey(i, "open").charCodeAt(0),
            o = CB(i),
            s = r[a];
        Array.isArray(s) ? s.push(o) : r[a] = [o]
    }
    return {
        flow: r
    }
}

function CB(e) {
    let t = e.anywhere,
        r = e.type,
        n = r + "Fence",
        i = n + "Sequence",
        a = r + "Value",
        o = {
            tokenize: c,
            partial: !0
        },
        s, u = 0;
    return {
        tokenize: l,
        concrete: !0
    };

    function l(d, m, h) {
        let g = this;
        return y;

        function y(P) {
            let B = g.now();
            return B.column === 1 && (B.line === 1 || t) && (s = Ey(e, "open"), u = 0, P === s.charCodeAt(u)) ? (d.enter(r), d.enter(n), d.enter(i), v(P)) : h(P)
        }

        function v(P) {
            return u === s.length ? (d.exit(i), Be(P) ? (d.enter("whitespace"), D(P)) : I(P)) : P === s.charCodeAt(u++) ? (d.consume(P), v) : h(P)
        }

        function D(P) {
            return Be(P) ? (d.consume(P), D) : (d.exit("whitespace"), I(P))
        }

        function I(P) {
            return xe(P) ? (d.exit(n), d.enter("lineEnding"), d.consume(P), d.exit("lineEnding"), s = Ey(e, "close"), u = 0, d.attempt(o, A, C)) : h(P)
        }

        function C(P) {
            return P === null || xe(P) ? O(P) : (d.enter(a), x(P))
        }

        function x(P) {
            return P === null || xe(P) ? (d.exit(a), O(P)) : (d.consume(P), x)
        }

        function O(P) {
            return P === null ? h(P) : (d.enter("lineEnding"), d.consume(P), d.exit("lineEnding"), d.attempt(o, A, C))
        }

        function A(P) {
            return d.exit(r), m(P)
        }
    }

    function c(d, m, h) {
        let g = 0;
        return y;

        function y(C) {
            return C === s.charCodeAt(g) ? (d.enter(n), d.enter(i), v(C)) : h(C)
        }

        function v(C) {
            return g === s.length ? (d.exit(i), Be(C) ? (d.enter("whitespace"), D(C)) : I(C)) : C === s.charCodeAt(g++) ? (d.consume(C), v) : h(C)
        }

        function D(C) {
            return Be(C) ? (d.consume(C), D) : (d.exit("whitespace"), I(C))
        }

        function I(C) {
            return C === null || xe(C) ? (d.exit(n), m(C)) : h(C)
        }
    }
}

function Ey(e, t) {
    return e.marker ? x_(e.marker, t).repeat(3) : x_(e.fence, t)
}

function x_(e, t) {
    return typeof e == "string" ? e : e[t]
}
var L_ = require("obsidian");

function Is(e) {
    return e[e.length - 1]
}

function C_() {
    let e = "blockid",
        t = "^";

    function r(i, a, o) {
        let s = !1,
            u = 0;
        return l;

        function l(h) {
            return h !== t.charCodeAt(u) ? o(h) : (i.enter(e), i.enter(`${e}Marker`), c(h))
        }

        function c(h) {
            return u === t.length ? (i.exit(`${e}Marker`), d(h)) : h !== t.charCodeAt(u) ? o(h) : (i.consume(h), u++, c)
        }

        function d(h) {
            return i.enter(`${e}Data`), i.enter(`${e}Target`), m(h)
        }

        function m(h) {
            return Be(h) ? o(h) : xe(h) || h === null ? s ? (i.exit(`${e}Target`), i.exit(`${e}Data`), i.exit(e), a(h)) : o(h) : (s = !0, i.consume(h), m)
        }
    }
    let n = {
        tokenize: r
    };
    return {
        text: {
            [t.charCodeAt(0)]: n
        }
    }
}

function __() {
    let e = "blockid";

    function t(i) {
        this.enter({
            type: e,
            value: null
        }, i)
    }

    function r(i) {
        let a = this.sliceSerialize(i),
            o = Is(this.stack);
        o.value = a
    }

    function n(i) {
        this.exit(i)
    }
    return {
        enter: {
            [e]: t
        },
        exit: {
            [`${e}Target`]: r,
            [e]: n
        }
    }
}

function As(e, t, r) {
    function n(a, o, s) {
        let u = !1,
            l = 0,
            c = 0;
        return d;

        function d(v) {
            return v !== t.charCodeAt(l) ? s(v) : (a.enter(e), a.enter(`${e}Marker`), m(v))
        }

        function m(v) {
            return l === t.length ? (a.exit(`${e}Marker`), h(v)) : v !== t.charCodeAt(l) ? s(v) : (a.consume(v), l++, m)
        }

        function h(v) {
            return xe(v) || v === null ? s(v) : (a.enter(`${e}Data`), a.enter(`${e}Target`), g(v))
        }

        function g(v) {
            return v === r.charCodeAt(c) ? u ? (a.exit(`${e}Target`), a.exit(`${e}Data`), a.enter(`${e}Marker`), y(v)) : s(v) : xe(v) || v === null ? s(v) : (Kt(v) || (u = !0), a.consume(v), g)
        }

        function y(v) {
            return c === r.length ? (a.exit(`${e}Marker`), a.exit(e), o(v)) : v !== r.charCodeAt(c) ? s(v) : (a.consume(v), c++, y)
        }
    }
    let i = {
        tokenize: n
    };
    return {
        text: {
            [t.charCodeAt(0)]: i
        }
    }
}

function Os(e, t) {
    function r(a) {
        this.enter({
            type: e,
            value: null
        }, a)
    }

    function n(a) {
        let o = this.sliceSerialize(a),
            s = Is(this.stack);
        s.value = o, t && t(o, s)
    }

    function i(a) {
        this.exit(a)
    }
    return {
        enter: {
            [e]: r
        },
        exit: {
            [`${e}Target`]: n,
            [e]: i
        }
    }
}

function M_(e) {
    function t(n) {
        e(this.stack[this.stack.length - 1], !1), this.exit(n)
    }

    function r(n) {
        e(this.stack[this.stack.length - 1], !0), this.exit(n)
    }
    return {
        exit: {
            link: t,
            image: r
        }
    }
}

function T_() {
    let e = "hashtag";

    function r(i, a, o) {
        let s = !1,
            u = 0,
            l = this;
        return c;

        function c(g) {
            return g !== 35 || l.previous !== null && !/\s/.test(String.fromCharCode(l.previous)) ? o(g) : (i.enter(e), i.enter(`${e}Marker`), d(g))
        }

        function d(g) {
            return u === 1 ? (i.exit(`${e}Marker`), m(g)) : g !== 35 ? o(g) : (i.consume(g), u++, d)
        }

        function m(g) {
            return i.enter(`${e}Data`), i.enter(`${e}Target`), h(g)
        }

        function h(g) {
            return g === null || Kt(g) || /[\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~[\]\\\s\n\r]/.test(String.fromCharCode(g)) ? s ? (i.exit(`${e}Target`), i.exit(`${e}Data`), i.exit(e), a(g)) : o(g) : (s = !0, i.consume(g), h)
        }
    }
    return {
        text: {
            35: {
                tokenize: r
            }
        }
    }
}

function F_() {
    let e = "hashtag";

    function t(i) {
        this.enter({
            type: e,
            value: null
        }, i)
    }

    function r(i) {
        let a = this.sliceSerialize(i),
            o = Is(this.stack);
        o.value = a
    }

    function n(i) {
        this.exit(i)
    }
    return {
        enter: {
            [e]: t
        },
        exit: {
            [`${e}Target`]: r,
            [e]: n
        }
    }
}
var Ls = {
    carriageReturn: -5,
    lineFeed: -4,
    carriageReturnLineFeed: -3,
    horizontalTab: -2,
    virtualSpace: -1,
    eof: null,
    nul: 0,
    soh: 1,
    stx: 2,
    etx: 3,
    eot: 4,
    enq: 5,
    ack: 6,
    bel: 7,
    bs: 8,
    ht: 9,
    lf: 10,
    vt: 11,
    ff: 12,
    cr: 13,
    so: 14,
    si: 15,
    dle: 16,
    dc1: 17,
    dc2: 18,
    dc3: 19,
    dc4: 20,
    nak: 21,
    syn: 22,
    etb: 23,
    can: 24,
    em: 25,
    sub: 26,
    esc: 27,
    fs: 28,
    gs: 29,
    rs: 30,
    us: 31,
    space: 32,
    exclamationMark: 33,
    quotationMark: 34,
    numberSign: 35,
    dollarSign: 36,
    percentSign: 37,
    ampersand: 38,
    apostrophe: 39,
    leftParenthesis: 40,
    rightParenthesis: 41,
    asterisk: 42,
    plusSign: 43,
    comma: 44,
    dash: 45,
    dot: 46,
    slash: 47,
    digit0: 48,
    digit1: 49,
    digit2: 50,
    digit3: 51,
    digit4: 52,
    digit5: 53,
    digit6: 54,
    digit7: 55,
    digit8: 56,
    digit9: 57,
    colon: 58,
    semicolon: 59,
    lessThan: 60,
    equalsTo: 61,
    greaterThan: 62,
    questionMark: 63,
    atSign: 64,
    uppercaseA: 65,
    uppercaseB: 66,
    uppercaseC: 67,
    uppercaseD: 68,
    uppercaseE: 69,
    uppercaseF: 70,
    uppercaseG: 71,
    uppercaseH: 72,
    uppercaseI: 73,
    uppercaseJ: 74,
    uppercaseK: 75,
    uppercaseL: 76,
    uppercaseM: 77,
    uppercaseN: 78,
    uppercaseO: 79,
    uppercaseP: 80,
    uppercaseQ: 81,
    uppercaseR: 82,
    uppercaseS: 83,
    uppercaseT: 84,
    uppercaseU: 85,
    uppercaseV: 86,
    uppercaseW: 87,
    uppercaseX: 88,
    uppercaseY: 89,
    uppercaseZ: 90,
    leftSquareBracket: 91,
    backslash: 92,
    rightSquareBracket: 93,
    caret: 94,
    underscore: 95,
    graveAccent: 96,
    lowercaseA: 97,
    lowercaseB: 98,
    lowercaseC: 99,
    lowercaseD: 100,
    lowercaseE: 101,
    lowercaseF: 102,
    lowercaseG: 103,
    lowercaseH: 104,
    lowercaseI: 105,
    lowercaseJ: 106,
    lowercaseK: 107,
    lowercaseL: 108,
    lowercaseM: 109,
    lowercaseN: 110,
    lowercaseO: 111,
    lowercaseP: 112,
    lowercaseQ: 113,
    lowercaseR: 114,
    lowercaseS: 115,
    lowercaseT: 116,
    lowercaseU: 117,
    lowercaseV: 118,
    lowercaseW: 119,
    lowercaseX: 120,
    lowercaseY: 121,
    lowercaseZ: 122,
    leftCurlyBrace: 123,
    verticalBar: 124,
    rightCurlyBrace: 125,
    tilde: 126,
    del: 127,
    byteOrderMarker: 65279,
    replacementCharacter: 65533
};
var xy = {
    data: "data",
    whitespace: "whitespace",
    lineEnding: "lineEnding",
    lineEndingBlank: "lineEndingBlank",
    linePrefix: "linePrefix",
    lineSuffix: "lineSuffix",
    atxHeading: "atxHeading",
    atxHeadingSequence: "atxHeadingSequence",
    atxHeadingText: "atxHeadingText",
    autolink: "autolink",
    autolinkEmail: "autolinkEmail",
    autolinkMarker: "autolinkMarker",
    autolinkProtocol: "autolinkProtocol",
    characterEscape: "characterEscape",
    characterEscapeValue: "characterEscapeValue",
    characterReference: "characterReference",
    characterReferenceMarker: "characterReferenceMarker",
    characterReferenceMarkerNumeric: "characterReferenceMarkerNumeric",
    characterReferenceMarkerHexadecimal: "characterReferenceMarkerHexadecimal",
    characterReferenceValue: "characterReferenceValue",
    codeFenced: "codeFenced",
    codeFencedFence: "codeFencedFence",
    codeFencedFenceSequence: "codeFencedFenceSequence",
    codeFencedFenceInfo: "codeFencedFenceInfo",
    codeFencedFenceMeta: "codeFencedFenceMeta",
    codeFlowValue: "codeFlowValue",
    codeIndented: "codeIndented",
    codeText: "codeText",
    codeTextData: "codeTextData",
    codeTextPadding: "codeTextPadding",
    codeTextSequence: "codeTextSequence",
    content: "content",
    definition: "definition",
    definitionDestination: "definitionDestination",
    definitionDestinationLiteral: "definitionDestinationLiteral",
    definitionDestinationLiteralMarker: "definitionDestinationLiteralMarker",
    definitionDestinationRaw: "definitionDestinationRaw",
    definitionDestinationString: "definitionDestinationString",
    definitionLabel: "definitionLabel",
    definitionLabelMarker: "definitionLabelMarker",
    definitionLabelString: "definitionLabelString",
    definitionMarker: "definitionMarker",
    definitionTitle: "definitionTitle",
    definitionTitleMarker: "definitionTitleMarker",
    definitionTitleString: "definitionTitleString",
    emphasis: "emphasis",
    emphasisSequence: "emphasisSequence",
    emphasisText: "emphasisText",
    escapeMarker: "escapeMarker",
    hardBreakEscape: "hardBreakEscape",
    hardBreakTrailing: "hardBreakTrailing",
    htmlFlow: "htmlFlow",
    htmlFlowData: "htmlFlowData",
    htmlText: "htmlText",
    htmlTextData: "htmlTextData",
    image: "image",
    label: "label",
    labelText: "labelText",
    labelLink: "labelLink",
    labelImage: "labelImage",
    labelMarker: "labelMarker",
    labelImageMarker: "labelImageMarker",
    labelEnd: "labelEnd",
    link: "link",
    paragraph: "paragraph",
    reference: "reference",
    referenceMarker: "referenceMarker",
    referenceString: "referenceString",
    resource: "resource",
    resourceDestination: "resourceDestination",
    resourceDestinationLiteral: "resourceDestinationLiteral",
    resourceDestinationLiteralMarker: "resourceDestinationLiteralMarker",
    resourceDestinationRaw: "resourceDestinationRaw",
    resourceDestinationString: "resourceDestinationString",
    resourceMarker: "resourceMarker",
    resourceTitle: "resourceTitle",
    resourceTitleMarker: "resourceTitleMarker",
    resourceTitleString: "resourceTitleString",
    setextHeading: "setextHeading",
    setextHeadingText: "setextHeadingText",
    setextHeadingLine: "setextHeadingLine",
    setextHeadingLineSequence: "setextHeadingLineSequence",
    strong: "strong",
    strongSequence: "strongSequence",
    strongText: "strongText",
    thematicBreak: "thematicBreak",
    thematicBreakSequence: "thematicBreakSequence",
    blockQuote: "blockQuote",
    blockQuotePrefix: "blockQuotePrefix",
    blockQuoteMarker: "blockQuoteMarker",
    blockQuotePrefixWhitespace: "blockQuotePrefixWhitespace",
    listOrdered: "listOrdered",
    listUnordered: "listUnordered",
    listItemIndent: "listItemIndent",
    listItemMarker: "listItemMarker",
    listItemPrefix: "listItemPrefix",
    listItemPrefixWhitespace: "listItemPrefixWhitespace",
    listItemValue: "listItemValue",
    chunkDocument: "chunkDocument",
    chunkContent: "chunkContent",
    chunkFlow: "chunkFlow",
    chunkText: "chunkText",
    chunkString: "chunkString"
};
var _B = {
        tokenize: MB
    },
    A_ = {
        text: {
            [Ls.leftSquareBracket]: _B
        }
    };

function MB(e, t, r) {
    let n = this;
    return i;

    function i(s) {
        return n.previous !== Ls.eof || !n._gfmTasklistFirstContentOfListItem ? r(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), a)
    }

    function a(s) {
        return Be(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), o) : s !== Ls.rightSquareBracket ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), o) : r(s)
    }

    function o(s) {
        return s === Ls.rightSquareBracket ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({
            tokenize: TB
        }, t, r)) : r(s)
    }
}

function TB(e, t, r) {
    let n = this;
    return je(e, i, xy.whitespace);

    function i(a) {
        let o = n.events[n.events.length - 1];
        return o && o[1].type === xy.whitespace && a !== Ls.eof && !Kt(a) ? t(a) : r(a)
    }
}
var O_ = {
    exit: {
        taskListCheckValueChecked: I_,
        taskListCheckValueUnchecked: I_,
        paragraph: FB
    }
};

function I_(e) {
    let t = this.stack[this.stack.length - 2];
    t.checked = e.type === "taskListCheckValueChecked", t.checkChar = this.sliceSerialize(e)
}

function FB(e) {
    let t = this.stack[this.stack.length - 2],
        r = this.stack[this.stack.length - 1],
        n = t.children,
        i = r.children[0],
        a = -1,
        o;
    if (t && t.type === "listItem" && typeof t.checked == "boolean" && i && i.type === "text") {
        for (; ++a < n.length;) {
            let s = n[a];
            if (s.type === "paragraph") {
                o = s;
                break
            }
        }
        o === r && (i.value = i.value.slice(1), i.value.length === 0 ? r.children.shift() : r.position && i.position && typeof i.position.start.offset == "number" && (i.position.start.column++, i.position.start.offset++, r.position.start = Object.assign({}, i.position.start)))
    }
    this.exit(e)
}

function IB(e) {
    let t = -1,
        r = 0;
    for (let n = 0, i = e.length; n < i; n++) {
        if (r < 3)
            if (e[n] === "-") {
                r++;
                continue
            } else throw new Error("Error parsing frontmatter");
        if (t < 0 && (t = n), e[n] === "-" && /[\r\n]/.test(e[n - 1]) && e[n + 1] === "-" && e[n + 2] === "-") return (0, L_.parseYaml)(e.slice(t, n - 1).trim())
    }
}

function AB(e) {
    let t = !1,
        r = 0,
        n = -1;
    for (let i = e.length - 1; i >= 0; i--) {
        if (!t && /[`%\n\r]/.test(e[i])) {
            e[i] === "`" && (r++, r === 3 && (t = !0, n = i - 1));
            continue
        } else if (!t) return {};
        if (e[i] === "`" && e[i - 1] === "`" && e[i - 2] === "`" && /[\r\n]/.test(e[i - 3])) return JSON.parse(e.slice(i + 1, n).trim())
    }
}

function P_(e) {
    return [A_, As("date", `${e.getSetting("date-trigger")}{`, "}"), As("dateLink", `${e.getSetting("date-trigger")}[[`, "]]"), As("time", `${e.getSetting("time-trigger")}{`, "}"), As("embedWikilink", "![[", "]]"), As("wikilink", "[[", "]]"), T_(), C_()]
}

function N_(e) {
    return [O_, Os("date", (t, r) => {
        t && (r.date = t)
    }), Os("dateLink", (t, r) => {
        t && (r.date = t)
    }), Os("time", (t, r) => {
        t && (r.time = t)
    }), Os("embedWikilink", (t, r) => {
        if (!t) return;
        let n = Ym(t),
            i = e.app.metadataCache.getFirstLinkpathDest(n.root, e.file.path);
        r.fileAccessor = {
            target: n.root,
            isEmbed: !0,
            stats: i == null ? void 0 : i.stat
        }
    }), Os("wikilink", (t, r) => {
        if (!t) return;
        let n = Ym(t),
            i = e.app.metadataCache.getFirstLinkpathDest(n.root, e.file.path);
        if (r.fileAccessor = {
                target: n.root,
                isEmbed: !1
            }, i) {
            let a = fg(e, i);
            r.fileMetadata = a.fileMetadata, r.fileMetadataOrder = a.fileMetadataOrder
        }
    }), M_((t, r) => {
        if (!t.url || /:\/\//.test(t.url) || !/.md$/.test(t.url)) return;
        let n = e.app.metadataCache.getFirstLinkpathDest(decodeURIComponent(t.url), e.file.path);
        if (r) t.type = "embedLink", t.fileAccessor = {
            target: decodeURIComponent(t.url),
            isEmbed: !0,
            stats: n.stat
        };
        else if (t.fileAccessor = {
                target: decodeURIComponent(t.url),
                isEmbed: !1
            }, n) {
            let i = fg(e, n);
            t.fileMetadata = i.fileMetadata, t.fileMetadataOrder = i.fileMetadataOrder
        }
    }), F_(), __()]
}

function R_(e, t) {
    let r = IB(t),
        i = {
            ...AB(t)
        },
        a = {};
    return Object.keys(r).forEach(o => {
        if (o === _t) {
            let s = r[o] === "basic" ? "board" : r[o];
            i[o] = s, a[o] = s
        } else Yx.has(o) ? i[o] = r[o] : a[o] = r[o]
    }), e.compileSettings(i), {
        settings: i,
        frontmatter: a,
        ast: ff(t, {
            extensions: [ky(["yaml"]), ...P_(e)],
            mdastExtensions: [Sy(["yaml"]), ...N_(e)]
        })
    }
}

function Cy(e, t) {
    return ff(t, {
        extensions: P_(e),
        mdastExtensions: N_(e)
    })
}

function gf(e, t, r) {
    var v;
    let n = e.getSetting("move-tags"),
        i = e.getSetting("move-dates"),
        a = r.children.first(),
        o = r.children.last(),
        s = a.type === "paragraph" ? ef(a).start : a.position.start.offset,
        u = o.type === "paragraph" ? ef(o).end : o.position.end.offset,
        l = {
            start: s,
            end: u
        },
        c = oy(t, l);
    c === "[" + (r.checked ? r.checkChar : " ") + "]" && (c = "");
    let d = c,
        m = "";
    Xd(r, ["text", "wikilink", "embedWikilink", "image", "inlineCode", "code", "hashtag"], (D, I, C) => {
        var x, O;
        D.type === "hashtag" ? (O = (x = C.children.first()) == null ? void 0 : x.value) != null && O.startsWith("```") || (m += " #" + D.value) : m += D.value || D.alt || ""
    });
    let h = {
        titleRaw: qk(Eg(Dg(c))),
        blockId: void 0,
        title: "",
        titleSearch: m,
        titleSearchRaw: m,
        metadata: {
            dateStr: void 0,
            date: void 0,
            time: void 0,
            timeStr: void 0,
            tags: [],
            fileAccessor: void 0,
            file: void 0,
            fileMetadata: void 0,
            fileMetadataOrder: void 0
        },
        checked: r.checked,
        checkChar: r.checked && r.checkChar || " "
    };
    Xd(r, D => D.type !== "paragraph", (D, I, C) => {
        var O, A;
        let x = D;
        if (x.type === "blockid") return h.blockId = x.value, !0;
        if (x.type === "hashtag" && !((A = (O = C.children.first()) == null ? void 0 : O.value) != null && A.startsWith("```"))) return h.metadata.tags || (h.metadata.tags = []), h.metadata.tags.push("#" + x.value), n && (d = xd(d, {
            start: D.position.start.offset - l.start,
            end: D.position.end.offset - l.start
        })), !0;
        if (x.type === "date" || x.type === "dateLink") return h.metadata.dateStr = x.date, i && (d = xd(d, {
            start: D.position.start.offset - l.start,
            end: D.position.end.offset - l.start
        })), !0;
        if (x.type === "time") return h.metadata.timeStr = x.time, i && (d = xd(d, {
            start: D.position.start.offset - l.start,
            end: D.position.end.offset - l.start
        })), !0;
        if (x.type === "embedWikilink") return h.metadata.fileAccessor = x.fileAccessor, !0;
        if (x.type === "wikilink" || x.type === "link" && x.fileAccessor) return h.metadata.fileAccessor = x.fileAccessor, h.metadata.fileMetadata = x.fileMetadata, h.metadata.fileMetadataOrder = x.fileMetadataOrder, !0;
        if (x.type === "embedLink") return h.metadata.fileAccessor = x.fileAccessor, !0
    }), h.title = $C(e, Eg(Kk(d)));
    let g = h.title.indexOf(`
`),
        y = gb(h.title, !0);
    if (y != null && y.length) {
        let D = h.metadata.inlineMetadata = y.reduce((x, O) => (yi.has(O.key) ? (g <= 0 || O.end < g) && x.push(O) : x.push(O), x), []),
            I = e.getSetting("move-task-metadata"),
            C = e.getSetting("inline-metadata-position") !== "body";
        if (I || C) {
            let x = h.title;
            for (let O of [...D].reverse()) {
                let A = yi.has(O.key);
                A && !I || !A && !C || (x = x.slice(0, O.start) + x.slice(O.end))
            }
            h.title = x
        }
    }
    return (v = h.metadata.tags) == null || v.sort(fr), h
}

function OB(e, t, r) {
    if (e.type !== "heading" || _s(e, {
            includeImageAlt: !1
        }) !== R("Archive")) return !1;
    let n = HC(t, r);
    return n && n.type === "thematicBreak"
}

function B_(e, t, r, n, i) {
    let a = [],
        o = [];
    return n.children.forEach((s, u) => {
        if (s.type === "heading") {
            let l = OB(s, n.children, u),
                c = ef(s),
                d = oy(i, c),
                m = !1,
                h = BC(n.children, u, "list", g => {
                    if (g.type === "heading") return !1;
                    if (g.type === "paragraph") {
                        let y = _s(g);
                        if (y.startsWith("%% kanban:settings")) return !1;
                        if (y === R("Complete")) return m = !0, !0
                    }
                    return !0
                });
            if (l && h) {
                o.push(...h.children.map(g => ({
                    ...Pc,
                    id: et(),
                    data: gf(e, i, g)
                })));
                return
            }
            h ? a.push({
                ...Ea,
                children: h.children.map(g => {
                    let y = gf(e, i, g);
                    return {
                        ...Pc,
                        id: et(),
                        data: y
                    }
                }),
                id: et(),
                data: {
                    ...co(d),
                    shouldMarkItemsComplete: m
                }
            }) : a.push({
                ...Ea,
                children: [],
                id: et(),
                data: {
                    ...co(d),
                    shouldMarkItemsComplete: m
                }
            })
        }
    }), {
        ...Nc,
        id: e.file.path,
        children: a,
        data: {
            settings: t,
            frontmatter: r,
            archive: o,
            isSearching: !1,
            errors: []
        }
    }
}

function _y(e, t, r) {
    let n = `- [${t.data.checkChar}] ${Sg(Cd(r),t)}`,
        i = Cy(e, n),
        a = gf(e, n, i.children[0].children[0]),
        o = (0, pf.default)(t, {
            data: {
                $set: a
            }
        });
    try {
        ql(e, o)
    } catch (s) {
        console.error(s)
    }
    return o
}

function V_(e, t, r, n) {
    let i = `- [${r}] ${Cd(t)}`,
        a = Cy(e, i),
        o = gf(e, i, a.children[0].children[0]);
    o.forceEditMode = !!n;
    let s = {
        ...Pc,
        id: et(),
        data: o
    };
    try {
        ql(e, s)
    } catch (u) {
        console.error(u)
    }
    return s
}

function $_(e, t) {
    try {
        return (0, pf.default)(t, {
            children: {
                $set: t.children.map(r => (0, pf.default)(r, {
                    children: {
                        $set: r.children.map(n => _y(e, n, n.data.titleRaw))
                    }
                }))
            }
        })
    } catch (r) {
        throw e.setError(r), r
    }
}

function U_(e) {
    return `- [${e.data.checkChar}] ${Sg(Cd(e.data.titleRaw),e)}`
}

function LB(e) {
    let t = [];
    return t.push(`## ${jk(cd(e.data.title,e.data.maxItems))}`), t.push(""), e.data.shouldMarkItemsComplete && t.push(gk), e.children.forEach(r => {
        t.push(U_(r))
    }), t.push(""), t.push(""), t.push(""), t.join(`
`)
}

function PB(e) {
    if (e.length) {
        let t = [yk, "", `## ${R("Archive")}`, ""];
        return e.forEach(r => {
            t.push(U_(r))
        }), t.join(`
`)
    }
    return ""
}

function W_(e) {
    let t = e.children.reduce((n, i) => n + LB(i), "");
    return ["---", "", (0, H_.stringifyYaml)(e.data.frontmatter), "---", "", ""].join(`
`) + t + PB(e.data.archive) + vk(e)
}
var NB = ["id", "date", "time", "titleSearch", "titleSearchRaw", "file"],
    yf = class {
        constructor(t) {
            this.stateManager = t
        }
        newItem(t, r, n) {
            return V_(this.stateManager, t, r, n)
        }
        updateItemContent(t, r) {
            return _y(this.stateManager, t, r)
        }
        boardToMd(t) {
            return W_(t)
        }
        mdToBoard(t) {
            let {
                ast: r,
                settings: n,
                frontmatter: i
            } = R_(this.stateManager, t), a = B_(this.stateManager, n, i, r, t), {
                state: o
            } = this.stateManager, s = (0, z_.getAPI)();
            if (!this.stateManager.hasError() && o) {
                let u = OC(o, a, c => NB.includes(c.last()), c => c ? c instanceof Y_.TFile ? c.path : Ni(c) || Array.isArray(c) ? String(c) : s && !s.value.isObject(c) ? s.value.toString(c) : String(c) : String(c)),
                    l = PC(o, u);
                return WC(this.stateManager, l, u)
            }
            return UC(this.stateManager, a)
        }
        reparseBoard() {
            return $_(this.stateManager, this.stateManager.state)
        }
    };
var vf = class {
    constructor(t, r, n, i, a) {
        this.stateReceivers = [];
        this.settingsNotifiers = new Map;
        this.viewSet = new Set;
        this.compiledSettings = {};
        this.getSetting = (t, r) => {
            var n;
            return (r == null ? void 0 : r[t]) !== void 0 ? r[t] : ((n = this.compiledSettings) == null ? void 0 : n[t]) !== void 0 ? this.compiledSettings[t] : this.getSettingRaw(t)
        };
        this.getSettingRaw = (t, r) => {
            var n, i, a;
            return (r == null ? void 0 : r[t]) !== void 0 ? r[t] : ((a = (i = (n = this.state) == null ? void 0 : n.data) == null ? void 0 : i.settings) == null ? void 0 : a[t]) !== void 0 ? this.state.data.settings[t] : this.getGlobalSetting(t)
        };
        this.getGlobalSetting = t => {
            let r = this.getGlobalSettings();
            return (r == null ? void 0 : r[t]) !== void 0 ? r[t] : null
        };
        this.app = t, this.file = r.file, this.onEmpty = i, this.getGlobalSettings = a, this.parser = new yf(this), this.registerView(r, n, !0)
    }
    getAView() {
        return this.viewSet.values().next().value
    }
    hasError() {
        var t, r, n;
        return !!((n = (r = (t = this.state) == null ? void 0 : t.data) == null ? void 0 : r.errors) != null && n.length)
    }
    async registerView(t, r, n) {
        this.viewSet.has(t) || this.viewSet.add(t), await new Promise(i => activeWindow.setTimeout(i, 10)), n ? await this.newBoard(t, r) : await t.prerender(this.state), t.populateViewState(this.state.data.settings)
    }
    unregisterView(t) {
        this.viewSet.has(t) && (this.viewSet.delete(t), this.viewSet.size === 0 && this.onEmpty())
    }
    buildSettingRetrievers() {
        return {
            getGlobalSettings: this.getGlobalSettings,
            getGlobalSetting: this.getGlobalSetting,
            getSetting: this.getSetting
        }
    }
    async newBoard(t, r) {
        try {
            let n = this.getParsedBoard(r);
            await t.prerender(n), this.setState(n, !1)
        } catch (n) {
            this.setError(n)
        }
    }
    saveToDisk() {
        if (this.state.data.errors.length > 0) return;
        let t = this.getAView();
        if (t) {
            let r = this.parser.boardToMd(this.state);
            t.requestSaveToDisk(r), this.viewSet.forEach(n => {
                n.data = r
            })
        }
    }
    softRefresh() {
        this.stateReceivers.forEach(t => t({
            ...this.state
        }))
    }
    forceRefresh() {
        if (this.state) try {
            this.compileSettings(), this.state = this.parser.reparseBoard(), this.stateReceivers.forEach(t => t(this.state)), this.settingsNotifiers.forEach(t => {
                t.forEach(r => r())
            }), this.viewSet.forEach(t => t.initHeaderButtons())
        } catch (t) {
            console.error(t), this.setError(t)
        }
    }
    setState(t, r = !0) {
        var n;
        try {
            let i = (n = this.state) == null ? void 0 : n.data.settings,
                a = typeof t == "function" ? t(this.state) : t,
                o = a == null ? void 0 : a.data.settings;
            i && o && bk(i, o) ? (this.state = (0, Ps.default)(this.state, {
                data: {
                    settings: {
                        $set: o
                    }
                }
            }), this.compileSettings(), this.state = this.parser.reparseBoard()) : (this.state = a, this.compileSettings()), this.viewSet.forEach(s => {
                s.initHeaderButtons(), s.validatePreviewCache(a)
            }), r && this.saveToDisk(), this.stateReceivers.forEach(s => s(this.state)), i !== o && o && this.settingsNotifiers.forEach((s, u) => {
                (!i && o || i[u] !== o[u]) && s.forEach(l => l())
            })
        } catch (i) {
            console.error(i), this.setError(i)
        }
    }
    useState() {
        let [t, r] = Ne(this.state);
        return Ae(() => (this.stateReceivers.push(n => r(n)), r(this.state), () => {
            this.stateReceivers.remove(r)
        }), []), t
    }
    useSetting(t) {
        let [r, n] = Ne(this.getSetting(t));
        return Ae(() => {
            let i = () => n(this.getSetting(t));
            return this.settingsNotifiers.has(t) ? this.settingsNotifiers.get(t).push(i) : this.settingsNotifiers.set(t, [i]), () => {
                this.settingsNotifiers.get(t).remove(i)
            }
        }, []), r
    }
    compileSettings(t) {
        var l, c, d, m, h, g, y, v, D, I;
        let r = this.getGlobalSetting("metadata-keys") || [],
            n = this.getSettingRaw("metadata-keys", t) || [],
            i = Array.from(new Set([...r, ...n])),
            a = this.getSettingRaw("date-format", t) || ja(this.app),
            o = this.getSettingRaw("date-display-format", t) || a,
            s = this.getSettingRaw("time-format", t) || Ho(this.app),
            u = this.getSettingRaw("archive-date-format", t) || `${a} ${s}`;
        this.compiledSettings = {
            [_t]: this.getSettingRaw(_t, t) || "board",
            "date-format": a,
            "date-display-format": o,
            "date-time-display-format": o + " " + s,
            "date-trigger": this.getSettingRaw("date-trigger", t) || Ad,
            "inline-metadata-position": this.getSettingRaw("inline-metadata-position", t) || Ul,
            "time-format": s,
            "time-trigger": this.getSettingRaw("time-trigger", t) || Od,
            "link-date-to-daily-note": this.getSettingRaw("link-date-to-daily-note", t),
            "move-dates": this.getSettingRaw("move-dates", t),
            "move-tags": this.getSettingRaw("move-tags", t),
            "move-task-metadata": this.getSettingRaw("move-task-metadata", t),
            "metadata-keys": i,
            "archive-date-separator": this.getSettingRaw("archive-date-separator") || "",
            "archive-date-format": u,
            "show-add-list": (l = this.getSettingRaw("show-add-list", t)) != null ? l : !0,
            "show-archive-all": (c = this.getSettingRaw("show-archive-all", t)) != null ? c : !0,
            "show-view-as-markdown": (d = this.getSettingRaw("show-view-as-markdown", t)) != null ? d : !0,
            "show-board-settings": (m = this.getSettingRaw("show-board-settings", t)) != null ? m : !0,
            "show-search": (h = this.getSettingRaw("show-search", t)) != null ? h : !0,
            "show-set-view": (g = this.getSettingRaw("show-set-view", t)) != null ? g : !0,
            "tag-colors": (y = this.getSettingRaw("tag-colors", t)) != null ? y : [],
            "tag-sort": (v = this.getSettingRaw("tag-sort", t)) != null ? v : [],
            "date-colors": (D = this.getSettingRaw("date-colors", t)) != null ? D : [],
            "tag-action": (I = this.getSettingRaw("tag-action", t)) != null ? I : "obsidian"
        }
    }
    getParsedBoard(t) {
        let r = t.trim(),
            n = {
                ...Nc,
                id: this.file.path,
                children: [],
                data: {
                    archive: [],
                    settings: {
                        [_t]: "board"
                    },
                    frontmatter: {},
                    isSearching: !1,
                    errors: []
                }
            };
        try {
            r && (n = this.parser.mdToBoard(r))
        } catch (i) {
            console.error(i), n = (0, Ps.default)(n, {
                data: {
                    errors: {
                        $push: [{
                            description: i.toString(),
                            stack: i.stack
                        }]
                    }
                }
            })
        }
        return n
    }
    setError(t) {
        this.setState((0, Ps.default)(this.state, {
            data: {
                errors: {
                    $push: [{
                        description: t.toString(),
                        stack: t.stack
                    }]
                }
            }
        }), !1)
    }
    onFileMetadataChange() {
        this.reparseBoardFromMd()
    }
    async reparseBoardFromMd() {
        try {
            this.setState(this.getParsedBoard(this.getAView().data), !1)
        } catch (t) {
            console.error(t), this.setError(t)
        }
    }
    async archiveCompletedCards() {
        let t = this.state,
            r = [],
            n = !!this.getSetting("archive-with-date"),
            i = this.getSetting("archive-date-separator"),
            a = this.getSetting("archive-date-format"),
            o = this.getSetting("append-archive-date"),
            s = l => {
                let c = [(0, K_.moment)().format(a)];
                i && c.push(i), c.push(l.data.titleRaw), o && c.reverse();
                let d = c.join(" ");
                return this.parser.updateItemContent(l, d)
            },
            u = t.children.map(l => (0, Ps.default)(l, {
                children: {
                    $set: l.children.filter(c => {
                        let d = c.data.checked && c.data.checkChar === Zn();
                        return (l.data.shouldMarkItemsComplete || d) && r.push(c), !d && !l.data.shouldMarkItemsComplete
                    })
                }
            }));
        try {
            this.setState((0, Ps.default)(t, {
                children: {
                    $set: u
                },
                data: {
                    archive: {
                        $push: n ? await Promise.all(r.map(l => s(l))) : r
                    }
                }
            }))
        } catch (l) {
            this.setError(l)
        }
    }
    getNewItem(t, r, n) {
        return this.parser.newItem(t, r, n)
    }
    updateItemContent(t, r) {
        return this.parser.updateItemContent(t, r)
    }
};

function RB(e) {
    let t = e.embedRegistry.embedByExtension.md({
        app: e,
        containerEl: createDiv(),
        state: {}
    }, null, "");
    t.load(), t.editable = !0, t.showEditor();
    let r = Object.getPrototypeOf(Object.getPrototypeOf(t.editMode)).constructor;
    return t.unload(), r
}
var wf = class extends Rn.Plugin {
    constructor() {
        super(...arguments);
        this.settings = {};
        this.kanbanFileModes = {};
        this.stateManagers = new Map;
        this.windowRegistry = new Map;
        this._loaded = !1;
        this.isShiftPressed = !1;
        this.handleShift = r => {
            this.isShiftPressed = r.shiftKey
        }
    }
    async loadSettings() {
        this.settings = Object.assign({}, await this.loadData())
    }
    async saveSettings() {
        await this.saveData(this.settings)
    }
    unload() {
        super.unload(), Promise.all(this.app.workspace.getLeavesOfType(qr).map(r => (this.kanbanFileModes[r.id] = "markdown", this.setMarkdownView(r))))
    }
    onunload() {
        this.MarkdownEditor = null, this.windowRegistry.forEach((r, n) => {
            r.viewStateReceivers.forEach(i => i([])), this.unmount(n)
        }), this.unmount(window), this.stateManagers.clear(), this.windowRegistry.clear(), this.kanbanFileModes = {}, this.app.workspace.unregisterHoverLinkSource(_t)
    }
    async onload() {
        var r, n;
        await this.loadSettings(), this.MarkdownEditor = RB(this.app), this.registerEditorSuggest(new nd(this.app, this)), this.registerEditorSuggest(new td(this.app, this)), this.registerEvent(this.app.workspace.on("window-open", (i, a) => {
            this.mount(a)
        })), this.registerEvent(this.app.workspace.on("window-close", (i, a) => {
            this.unmount(a)
        })), this.settingsTab = new Ud(this, {
            onSettingsChange: async i => {
                this.settings = i, await this.saveSettings(), this.stateManagers.forEach(a => {
                    a.forceRefresh()
                })
            }
        }), this.addSettingTab(this.settingsTab), this.registerView(qr, i => new pn(i, this)), this.registerMonkeyPatches(), this.registerCommands(), this.registerEvents(), this.mount(window), (n = (r = this.app.workspace.floatingSplit) == null ? void 0 : r.children) == null || n.forEach(i => {
            this.mount(i.win)
        }), this.registerDomEvent(window, "keydown", this.handleShift), this.registerDomEvent(window, "keyup", this.handleShift), this.addRibbonIcon(ho, R("Create new board"), () => {
            this.newKanban()
        })
    }
    getKanbanViews(r) {
        let n = this.windowRegistry.get(r);
        return n ? Array.from(n.viewMap.values()) : []
    }
    getKanbanView(r, n) {
        let i = this.windowRegistry.get(n);
        if (i != null && i.viewMap.has(r)) return i.viewMap.get(r);
        for (let a of this.windowRegistry.values())
            if (a.viewMap.has(r)) return a.viewMap.get(r);
        return null
    }
    getStateManager(r) {
        return this.stateManagers.get(r)
    }
    getStateManagerFromViewID(r, n) {
        let i = this.getKanbanView(r, n);
        return i ? this.stateManagers.get(i.file) : null
    }
    useKanbanViews(r) {
        let [n, i] = Ne(this.getKanbanViews(r));
        return Ae(() => {
            let a = this.windowRegistry.get(r);
            return a == null || a.viewStateReceivers.push(i), () => {
                a == null || a.viewStateReceivers.remove(i)
            }
        }, [r]), n
    }
    addView(r, n, i) {
        let a = r.getWindow(),
            o = this.windowRegistry.get(a);
        if (!o) return;
        o.viewMap.has(r.id) || o.viewMap.set(r.id, r);
        let s = r.file;
        this.stateManagers.has(s) ? this.stateManagers.get(s).registerView(r, n, i) : this.stateManagers.set(s, new vf(this.app, r, n, () => this.stateManagers.delete(s), () => this.settings)), o.viewStateReceivers.forEach(u => u(this.getKanbanViews(a)))
    }
    removeView(r) {
        let n = Array.from(this.windowRegistry.entries()).find(([, s]) => s.viewMap.has(r.id), []);
        if (!n) return;
        let [i, a] = n, o = r.file;
        a.viewMap.has(r.id) && a.viewMap.delete(r.id), this.stateManagers.has(o) && (this.stateManagers.get(o).unregisterView(r), a.viewStateReceivers.forEach(s => s(this.getKanbanViews(i))))
    }
    handleViewFileRename(r, n) {
        let i = r.getWindow();
        if (!this.windowRegistry.has(i)) return;
        let a = this.windowRegistry.get(i),
            o = `${r.leaf.id}:::${n}`;
        a.viewMap.has(o) && a.viewMap.delete(o), a.viewMap.has(r.id) || a.viewMap.set(r.id, r), r.isPrimary && this.getStateManager(r.file).softRefresh()
    }
    mount(r) {
        if (this.windowRegistry.has(r)) return;
        let n = r.document.body.createDiv();
        this.windowRegistry.set(r, {
            viewMap: new Map,
            viewStateReceivers: [],
            appRoot: n
        }), Li(cx(r, this), n)
    }
    unmount(r) {
        if (!this.windowRegistry.has(r)) return;
        let n = this.windowRegistry.get(r);
        for (let i of n.viewMap.values()) this.removeView(i);
        Pi(n.appRoot), n.appRoot.remove(), n.viewMap.clear(), n.viewStateReceivers.length = 0, n.appRoot = null, this.windowRegistry.delete(r)
    }
    async setMarkdownView(r, n = !0) {
        await r.setViewState({
            type: "markdown",
            state: r.view.getState(),
            popstate: !0
        }, {
            focus: n
        })
    }
    async setKanbanView(r) {
        await r.setViewState({
            type: qr,
            state: r.view.getState(),
            popstate: !0
        })
    }
    async newKanban(r) {
        var i;
        let n = r || this.app.fileManager.getNewFileParent(((i = app.workspace.getActiveFile()) == null ? void 0 : i.path) || "");
        try {
            let a = await app.fileManager.createNewMarkdownFile(n, R("Untitled Kanban"));
            await this.app.vault.modify(a, dg), await this.app.workspace.getLeaf().setViewState({
                type: qr,
                state: {
                    file: a.path
                }
            })
        } catch (a) {
            console.error("Error creating kanban board:", a)
        }
    }
    registerEvents() {
        this.registerEvent(this.app.workspace.on("file-menu", (n, i, a, o) => {
            if (a === "link-context-menu") return;
            let s = i instanceof Rn.TFile,
                u = i instanceof Rn.TFolder,
                l = (o == null ? void 0 : o.view) instanceof Rn.MarkdownView,
                c = (o == null ? void 0 : o.view) instanceof pn;
            if (u) {
                n.addItem(d => {
                    d.setSection("action-primary").setTitle(R("New kanban board")).setIcon(ho).onClick(() => this.newKanban(i))
                });
                return
            }
            if (!Rn.Platform.isMobile && s && o && a === "sidebar-context-menu" && hg(i)) {
                let d = this.getKanbanViews(Dn(o.view.containerEl)),
                    m = !1;
                for (let h of d)
                    if (h.file === i) {
                        h.onPaneMenu(n, "more-options", !1), m = !0;
                        break
                    } if (!m) {
                    n.addItem(h => {
                        h.setTitle(R("Open as kanban board")).setIcon(ho).setSection("pane").onClick(() => {
                            this.kanbanFileModes[o.id || i.path] = qr, this.setKanbanView(o)
                        })
                    });
                    return
                }
            }
            if (l && s && ["more-options", "pane-more-options", "tab-header"].includes(a) && hg(i) && n.addItem(d => {
                    d.setTitle(R("Open as kanban board")).setIcon(ho).setSection("pane").onClick(() => {
                        this.kanbanFileModes[o.id || i.path] = qr, this.setKanbanView(o)
                    })
                }), s && c && (["pane-more-options", "tab-header"].includes(a) && n.addItem(d => {
                    d.setTitle(R("Open as markdown")).setIcon(ho).setSection("pane").onClick(() => {
                        this.kanbanFileModes[o.id || i.path] = "markdown", this.setMarkdownView(o)
                    })
                }), Rn.Platform.isMobile)) {
                let d = this.stateManagers.get(i),
                    m = o.view,
                    h = m.viewSettings[_t] || d.getSetting(_t);
                n.addItem(g => {
                    g.setTitle(R("Add a list")).setIcon("lucide-plus-circle").setSection("pane").onClick(() => {
                        m.emitter.emit("showLaneForm", void 0)
                    })
                }).addItem(g => {
                    g.setTitle(R("Archive completed cards")).setIcon("lucide-archive").setSection("pane").onClick(() => {
                        d.archiveCompletedCards()
                    })
                }).addItem(g => {
                    g.setTitle(R("Archive completed cards")).setIcon("lucide-archive").setSection("pane").onClick(() => {
                        this.stateManagers.get(i).archiveCompletedCards()
                    })
                }).addItem(g => g.setTitle(R("View as board")).setSection("pane").setIcon("lucide-trello").setChecked(h === "basic" || h === "board").onClick(() => m.setView("board"))).addItem(g => g.setTitle(R("View as table")).setSection("pane").setIcon("lucide-table").setChecked(h === "table").onClick(() => m.setView("table"))).addItem(g => g.setTitle(R("View as list")).setSection("pane").setIcon("lucide-server").setChecked(h === "list").onClick(() => m.setView("list"))).addItem(g => g.setTitle(R("Open board settings")).setSection("pane").setIcon("lucide-settings").onClick(() => m.getBoardSettings()))
            }
        })), this.registerEvent(app.vault.on("rename", (n, i) => {
            app.workspace.getLeavesOfType(qr).forEach(o => {
                o.view.handleRename(n.path, i)
            })
        }));
        let r = (0, Rn.debounce)(n => {
            this.stateManagers.forEach(i => {
                i.file !== n && i.onFileMetadataChange()
            })
        }, 2e3, !0);
        this.registerEvent(app.vault.on("modify", n => {
            n instanceof Rn.TFile && r(n)
        })), this.registerEvent(app.metadataCache.on("changed", n => {
            r(n)
        })), this.registerEvent(app.metadataCache.on("dataview:metadata-change", (n, i) => {
            r(i)
        })), this.registerEvent(app.metadataCache.on("dataview:api-ready", () => {
            this.stateManagers.forEach(n => {
                n.forceRefresh()
            })
        })), app.workspace.registerHoverLinkSource(_t, {
            display: "Kanban",
            defaultMod: !0
        })
    }
    registerCommands() {
        this.addCommand({
            id: "create-new-kanban-board",
            name: R("Create new board"),
            callback: () => this.newKanban()
        }), this.addCommand({
            id: "archive-completed-cards",
            name: R("Archive completed cards in active board"),
            checkCallback: r => {
                let n = app.workspace.getActiveViewOfType(pn);
                if (!n) return !1;
                if (r) return !0;
                this.stateManagers.get(n.file).archiveCompletedCards()
            }
        }), this.addCommand({
            id: "toggle-kanban-view",
            name: R("Toggle between Kanban and markdown mode"),
            checkCallback: r => {
                let n = app.workspace.getActiveFile();
                if (!n) return !1;
                let i = app.metadataCache.getFileCache(n),
                    a = !!(i != null && i.frontmatter) && !!i.frontmatter[_t];
                if (r) return a;
                let o = app.workspace.getActiveViewOfType(pn);
                if (o) this.kanbanFileModes[o.leaf.id || n.path] = "markdown", this.setMarkdownView(o.leaf);
                else if (a) {
                    let s = app.workspace.getActiveViewOfType(Rn.MarkdownView);
                    s && (this.kanbanFileModes[s.leaf.id || n.path] = qr, this.setKanbanView(s.leaf))
                }
            }
        }), this.addCommand({
            id: "convert-to-kanban",
            name: R("Convert empty note to Kanban"),
            checkCallback: r => {
                let n = app.workspace.getActiveViewOfType(Rn.MarkdownView);
                if (!n) return !1;
                let i = n.file.stat.size === 0;
                if (r) return i;
                i && app.vault.modify(n.file, dg).then(() => {
                    this.setKanbanView(n.leaf)
                }).catch(a => console.error(a))
            }
        }), this.addCommand({
            id: "add-kanban-lane",
            name: R("Add a list"),
            checkCallback: r => {
                let n = app.workspace.getActiveViewOfType(pn);
                if (r) return n && n instanceof pn;
                n && n instanceof pn && n.emitter.emit("showLaneForm", void 0)
            }
        }), this.addCommand({
            id: "view-board",
            name: R("View as board"),
            checkCallback: r => {
                let n = app.workspace.getActiveViewOfType(pn);
                if (r) return n && n instanceof pn;
                n && n instanceof pn && n.setView("board")
            }
        }), this.addCommand({
            id: "view-table",
            name: R("View as table"),
            checkCallback: r => {
                let n = app.workspace.getActiveViewOfType(pn);
                if (r) return n && n instanceof pn;
                n && n instanceof pn && n.setView("table")
            }
        }), this.addCommand({
            id: "view-list",
            name: R("View as list"),
            checkCallback: r => {
                let n = app.workspace.getActiveViewOfType(pn);
                if (r) return n && n instanceof pn;
                n && n instanceof pn && n.setView("list")
            }
        }), this.addCommand({
            id: "open-board-settings",
            name: R("Open board settings"),
            checkCallback: r => {
                let n = app.workspace.getActiveViewOfType(pn);
                if (!n) return !1;
                if (r) return !0;
                n.getBoardSettings()
            }
        })
    }
    registerMonkeyPatches() {
        let r = this;
        this.app.workspace.onLayoutReady(() => {
            this.register(fu(app.commands, {
                executeCommand(n) {
                    return function(i) {
                        let a = app.workspace.getActiveViewOfType(pn);
                        return a && (i != null && i.id) && a.emitter.emit("hotkey", {
                            commandId: i.id
                        }), n.call(this, i)
                    }
                }
            }))
        }), this.register(fu(this.app.workspace, {
            setActiveLeaf(n) {
                return function(...i) {
                    n.apply(this, i);
                    let a = this.getActiveViewOfType(pn);
                    a != null && a.activeEditor && (this.activeEditor = a.activeEditor)
                }
            }
        })), this.register(fu(Rn.WorkspaceLeaf.prototype, {
            detach(n) {
                return function() {
                    var a;
                    let i = (a = this.view) == null ? void 0 : a.getState();
                    return i != null && i.file && r.kanbanFileModes[this.id || i.file] && delete r.kanbanFileModes[this.id || i.file], n.apply(this)
                }
            },
            setViewState(n) {
                return function(i, ...a) {
                    var o;
                    if (r._loaded && i.type === "markdown" && ((o = i.state) != null && o.file) && r.kanbanFileModes[this.id || i.state.file] !== "markdown") {
                        let s = r.app.metadataCache.getCache(i.state.file);
                        if (s != null && s.frontmatter && s.frontmatter[_t]) {
                            let u = {
                                ...i,
                                type: qr
                            };
                            return r.kanbanFileModes[i.state.file] = qr, n.apply(this, [u, ...a])
                        }
                    }
                    return n.apply(this, [i, ...a])
                }
            }
        }))
    }
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/*! Bundled license information:

mark.js/dist/mark.js:
  (*!***************************************************
  * mark.js v8.11.1
  * https://markjs.io/
  * Copyright (c) 2014–2018, Julian Kühnel
  * Released under the MIT license https://git.io/vwTVl
  *****************************************************)

moment/moment.js:
  (*! moment.js *)
  (*! version : 2.29.4 *)
  (*! authors : Tim Wood, Iskren Chernev, Moment.js contributors *)
  (*! license : MIT *)
  (*! momentjs.com *)

choices.js/public/assets/scripts/choices.js:
  (*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme *)
  (*!
   * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
   *
   * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
   * All Rights Reserved. Apache Software License 2.0
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *)

is-plain-object/dist/is-plain-object.mjs:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

@tanstack/table-core/build/lib/index.mjs:
  (**
     * table-core
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)

@tanstack/react-table/build/lib/index.mjs:
  (**
     * react-table
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)

@tanstack/match-sorter-utils/build/lib/index.mjs:
  (**
     * match-sorter-utils
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)
  (**
   * @name match-sorter
   * @license MIT license.
   * @copyright (c) 2099 Kent C. Dodds
   * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
   *)
*/

/* nosourcemap */
