function fa(e) {
    let t = e.useSetting("date-colors");
    return Re(() => xh(t), [t])
}

function Pu(e, t) {
    let r = t.find(n => n.metadataKey === e.key);
    return r ? {
        ...r,
        value: e.value
    } : {
        containsMarkdown: !1,
        label: e.key,
        metadataKey: e.key,
        shouldHideLabel: !1,
        value: e.value
    }
}

function Nu(e, t, r) {
    Ae(() => {
        var o;
        let n = 0,
            i = !1,
            a = () => {
                i || ++n === e.length && t()
            };
        for (let s of e)(o = s.current) == null || o.onNodeInserted(a, !0);
        return () => {
            i = !0, r()
        }
    }, [])
}

function wb(e, t, r, n, i) {
    return Re(() => {
        t = t.trim().toLocaleLowerCase();
        let a = new Set,
            o = new Set;
        return t && e.children.forEach(s => {
            let u = !1;
            s.children.forEach(l => {
                l.data.titleSearch.includes(t) && (u = !0, o.add(l))
            }), u && a.add(s)
        }), {
            lanes: a,
            items: o,
            query: t,
            search: (s, u) => {
                s || (i(!1), r(""), n("")), i(!0), u ? (r(s), n(s)) : r(s)
            }
        }
    }, [e, t, r, n])
}
var Sb = Ct(Db(), 1);
var Bo = Sb.default;
var Tr = {
        x: 0,
        y: 0,
        maxX: 0,
        maxY: 0
    },
    vi = {
        x: 0,
        y: 0
    };

function Dn(e) {
    return e.win
}

function ha(e) {
    return e.doc.body
}
var xb = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON() {}
    },
    Cb = [0, 0, 0, 0];

function Xt(e) {
    return e === void 0 ? 0 : e
}

function Hu(e, t, r, n) {
    return [e.left + Xt(t == null ? void 0 : t.x) + Xt(r == null ? void 0 : r.x) - Xt(n == null ? void 0 : n.x), e.top + Xt(t == null ? void 0 : t.y) + Xt(r == null ? void 0 : r.y) - Xt(n == null ? void 0 : n.y), e.left + e.width + Xt(t == null ? void 0 : t.x) + Xt(r == null ? void 0 : r.x) - Xt(n == null ? void 0 : n.x), e.top + e.height + Xt(t == null ? void 0 : t.y) + Xt(r == null ? void 0 : r.y) - Xt(n == null ? void 0 : n.y)]
}

function _h(e, t, r, n) {
    let i = Hu(e, t, r, null);
    return n === "top" ? (i[3] = i[1] + 35, i) : n === "right" ? (i[0] = i[0] + e.width - 35, i) : n === "bottom" ? (i[1] = i[1] + e.height - 35, i) : (i[2] = i[0] + 35, i)
}

function Bu(e, t, r, n, i, a) {
    return [e - Xt(i == null ? void 0 : i.x) - Xt(a == null ? void 0 : a.x), t - Xt(i == null ? void 0 : i.y) - Xt(a == null ? void 0 : a.y), r - Xt(i == null ? void 0 : i.x) - Xt(a == null ? void 0 : a.x), n - Xt(i == null ? void 0 : i.y) - Xt(a == null ? void 0 : a.y)]
}
var QA = e => XA(e, (t, r) => t < r);

function XA(e, t) {
    if (e.length === 0) return -1;
    let r = e[0],
        n = 0;
    for (let i = 1; i < e.length; i++) t(e[i], r) && (n = i, r = e[i]);
    return n
}

function _b(e, t, r) {
    let n = Mh(e, t, r);
    if (!n) return null;
    let i = n.getData().side,
        a = n.getHitbox(),
        o = 0,
        s = 0;
    i === "left" ? (o = 0, s = 2) : i === "right" ? (o = 2, s = 0) : i === "top" ? (o = 1, s = 3) : i === "bottom" && (o = 3, s = 1);
    let u = Math.abs(t[o] - a[s]),
        l = Math.abs(a[o] - a[s]);
    return [n, l - u]
}

function Eb(e) {
    return [{
        x: e[0],
        y: e[1]
    }, {
        x: e[2],
        y: e[1]
    }, {
        x: e[0],
        y: e[3]
    }, {
        x: e[2],
        y: e[3]
    }]
}

function qa(e, t) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
}

function kb(e) {
    return {
        x: (e[0] + e[2]) / 2,
        y: (e[1] + e[2]) / 2
    }
}

function Mh(e, t, r) {
    let n = Eb(t)[0],
        i = kb(t),
        a = r.entityId,
        o = e.map(u => {
            if (u.entityId === a) return 1 / 0;
            let l = u.getData(),
                c = l.acceptsSort,
                d = u.getHitbox(),
                m = kb(d);
            if (c && !c.contains(r.getData().type)) return qa(i, m);
            let h = Eb(d)[0],
                g = l.sortAxis === "horizontal" ? "x" : "y",
                y = m[g] > n[g] ? 1e3 : 0;
            return qa(h, n) + y
        }),
        s = QA(o);
    return e[s] ? e[s] : null
}

function Th(e) {
    let {
        scrollLeft: t,
        scrollTop: r,
        scrollWidth: n,
        scrollHeight: i,
        offsetWidth: a,
        offsetHeight: o
    } = e, s = t, u = r, l = n - a, c = i - o;
    return {
        x: s,
        y: u,
        maxX: Math.max(l, 0),
        maxY: Math.max(c, 0)
    }
}

function Mb(e, t, r) {
    let n = Math.trunc((r.x - t.x) * 100) / 100,
        i = Math.trunc((r.y - t.y) * 100) / 100;
    return [e[0] + n, e[1] + i, e[2] + n, e[3] + i]
}

function Fh(e, t = [0, 0, 0, 0]) {
    let r = e[0] - t[0],
        n = e[1] - t[1],
        i = e[2] + t[2],
        o = e[3] + t[3] - n;
    return {
        width: i - r,
        height: o
    }
}
var Vu = class {
    constructor(t, r, n, i, a, o, s, u) {
        this.isVisible = !1;
        this.mounted = !1;
        this.id = n, this.instanceId = et(), this.scopeId = r, this.entityId = `${r}-${n}`, this.emitter = new Bo, this.dndManager = t, this.index = i, this.children = new Map, this.parent = a, this.scrollParent = o, this.getEntityData = () => u.current, this.sortManager = s
    }
    initNodes(t, r) {
        var n, i;
        if (this.mounted = !0, this.entityNode = t, this.measureNode = r, r.dataset.hitboxid = this.entityId, (n = this.sortManager) == null || n.registerSortable(this.entityId, this.getEntity(xb), t, r), this.scrollParent) this.scrollParent.registerObserverHandler(this.entityId, r, a => {
            var s, u;
            let o = Dn(a.target);
            if (a.isIntersecting) {
                let l = this.getEntity(a.boundingClientRect);
                (s = this.parent) == null || s.children.set(this.entityId, {
                    entity: l,
                    manager: this
                }), this.dndManager.observeResize(r), (!this.parent || this.parent.isVisible) && (this.dndManager.registerHitboxEntity(this.entityId, l, o), this.children.forEach((c, d) => {
                    this.dndManager.registerHitboxEntity(d, c.entity, o)
                }), this.setVisibility(!0))
            } else this.dndManager.unregisterHitboxEntity(this.entityId, o), this.children.forEach((l, c) => {
                this.dndManager.unregisterHitboxEntity(c, o)
            }), (u = this.parent) == null || u.children.delete(this.entityId), this.dndManager.unobserveResize(r), this.setVisibility(!1)
        });
        else {
            let a = this.getEntity(r.getBoundingClientRect());
            this.dndManager.observeResize(r), this.dndManager.registerHitboxEntity(this.entityId, a, Dn(t)), (i = this.parent) == null || i.children.set(this.entityId, {
                entity: a,
                manager: this
            }), this.setVisibility(!0)
        }
    }
    setVisibility(t) {
        this.emitter.emit("visibility-change", t), this.isVisible = t, this.children.forEach(r => {
            r.manager.setVisibility(t)
        })
    }
    destroy() {
        var t, r, n;
        this.mounted && (this.mounted = !0, this.dndManager.unobserveResize(this.measureNode), (t = this.sortManager) == null || t.unregisterSortable(this.entityId), (r = this.scrollParent) == null || r.unregisterObserverHandler(this.entityId, this.measureNode), this.entityNode && this.dndManager.unregisterHitboxEntity(this.entityId, Dn(this.entityNode)), (n = this.parent) == null || n.children.delete(this.entityId))
    }
    getPath() {
        var t;
        return [...((t = this.parent) == null ? void 0 : t.getPath()) || [], this.index]
    }
    getEntity(t) {
        var n, i;
        let r = this;
        return {
            scopeId: this.scopeId,
            entityId: this.entityId,
            initial: Hu(t, ((n = r.scrollParent) == null ? void 0 : n.scrollState) || Tr, ((i = r.scrollParent) == null ? void 0 : i.getScrollShift()) || vi, null),
            getParentScrollState() {
                var a;
                return ((a = r.scrollParent) == null ? void 0 : a.scrollState) || Tr
            },
            getParentScrollShift() {
                var a;
                return ((a = r.scrollParent) == null ? void 0 : a.getScrollShift()) || vi
            },
            recalcInitial() {
                var a, o;
                this.initial = Hu(r.measureNode.getBoundingClientRect(), ((a = r.scrollParent) == null ? void 0 : a.scrollState) || Tr, ((o = r.scrollParent) == null ? void 0 : o.getScrollShift()) || vi, null)
            },
            getHitbox() {
                return Bu(this.initial[0], this.initial[1], this.initial[2], this.initial[3], this.getParentScrollState(), this.getParentScrollShift())
            },
            getPath() {
                return r.getPath()
            },
            getData() {
                var a;
                return {
                    ...r.getEntityData(),
                    sortAxis: (a = r.sortManager) == null ? void 0 : a.axis,
                    win: Dn(r.measureNode)
                }
            }
        }
    }
};
var Vo = class {
    constructor() {
        this.scrollStates = new Map, this.idScopes = new Map
    }
    setScrollState(t, r, n) {
        if (this.scrollStates.set(r, n), this.idScopes.has(r)) {
            let i = this.idScopes.get(r);
            i.has(t) || i.add(t)
        } else this.idScopes.set(r, new Set([t]))
    }
    getScrollState(t) {
        return this.scrollStates.has(t) ? this.scrollStates.get(t) : Tr
    }
    unmountScope(t) {
        let r = [];
        this.idScopes.forEach((n, i) => {
            n.has(t) && (n.delete(t), n.size === 0 && r.push(i))
        }), r.forEach(n => {
            this.idScopes.delete(n), this.scrollStates.delete(n)
        })
    }
};
var cn = $e.createContext(null),
    ma = $e.createContext(""),
    ol = $e.createContext(null),
    sl = $e.createContext(new Vo),
    $u = $e.createContext(null),
    $o = $e.createContext(null),
    Uu = $e.createContext(null);
var eO = 0,
    ZU = Array.isArray;

function E(e, t, r, n, i, a) {
    var o, s, u = {};
    for (s in t) s == "ref" ? o = t[s] : u[s] = t[s];
    var l = {
        type: e,
        props: u,
        key: r,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --eO,
        __i: -1,
        __u: 0,
        __source: i,
        __self: a
    };
    if (typeof e == "function" && (o = e.defaultProps))
        for (s in o) u[s] === void 0 && (u[s] = o[s]);
    return Xe.vnode && Xe.vnode(l), l
}

function Tb(e) {
    return E(ct, {
        children: e.children
    })
}
var ei = zt(function({
    id: t,
    index: r,
    elementRef: n,
    measureRef: i,
    children: a,
    data: o
}) {
    let s = Ee(cn),
        u = Ee($u),
        l = Ee(ma),
        c = Ee($o),
        d = Ee(ol),
        m = Fe(o),
        h = Fe();
    m.current = o;
    let g = Re(() => {
        if (s) {
            h.current && h.current.destroy();
            let y = new Vu(s, l, t, r, c, d, u, m);
            return n.current && i.current && y.initNodes(n.current, i.current), h.current = y, y
        }
        return null
    }, [t, r, s, l, c, d, u]);
    return Nu([n, i], () => {
        var y;
        (y = h.current) == null || y.initNodes(n.current, i.current)
    }, () => {
        var y;
        (y = h.current) == null || y.destroy()
    }), g ? E($o.Provider, {
        value: g,
        children: a
    }) : null
});

function Ui(e) {
    var i;
    let t = Ee($o),
        r = Ee(Uu),
        n = (i = r != null ? r : t == null ? void 0 : t.getPath()) != null ? i : [];
    return e !== void 0 && n.push(e), Re(() => n, n)
}
var pg = Ct(UD());
var vL = new Map([
    ["avi", "video/avi"],
    ["gif", "image/gif"],
    ["ico", "image/x-icon"],
    ["jpeg", "image/jpeg"],
    ["jpg", "image/jpeg"],
    ["mkv", "video/x-matroska"],
    ["mov", "video/quicktime"],
    ["mp4", "video/mp4"],
    ["pdf", "application/pdf"],
    ["png", "image/png"],
    ["zip", "application/zip"],
    ["doc", "application/msword"],
    ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
]);

function ml(e, t) {
    var r = wL(e);
    if (typeof r.path != "string") {
        var n = e.webkitRelativePath;
        Object.defineProperty(r, "path", {
            value: typeof t == "string" ? t : typeof n == "string" && n.length > 0 ? n : e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0
        })
    }
    return r
}

function wL(e) {
    var t = e.name,
        r = t && t.lastIndexOf(".") !== -1;
    if (r && !e.type) {
        var n = t.split(".").pop().toLowerCase(),
            i = vL.get(n);
        i && Object.defineProperty(e, "type", {
            value: i,
            writable: !1,
            configurable: !1,
            enumerable: !0
        })
    }
    return e
}
var bL = [".DS_Store", "Thumbs.db"];

function Jh(e) {
    return Ao(this, void 0, void 0, function() {
        return Oo(this, function(t) {
            return [2, DL(e) && e.dataTransfer ? kL(e.dataTransfer, e.type) : SL(e)]
        })
    })
}

function DL(e) {
    return !!e.dataTransfer
}

function SL(e) {
    var t = EL(e.target) ? e.target.files ? Gh(e.target.files) : [] : [];
    return t.map(function(r) {
        return ml(r)
    })
}

function EL(e) {
    return e !== null
}

function kL(e, t) {
    return Ao(this, void 0, void 0, function() {
        var r, n;
        return Oo(this, function(i) {
            switch (i.label) {
                case 0:
                    return e.items ? (r = Gh(e.items).filter(function(a) {
                        return a.kind === "file"
                    }), t !== "drop" ? [2, r] : [4, Promise.all(r.map(xL))]) : [3, 2];
                case 1:
                    return n = i.sent(), [2, WD(zD(n))];
                case 2:
                    return [2, WD(Gh(e.files).map(function(a) {
                        return ml(a)
                    }))]
            }
        })
    })
}

function WD(e) {
    return e.filter(function(t) {
        return bL.indexOf(t.name) === -1
    })
}

function Gh(e) {
    for (var t = [], r = 0; r < e.length; r++) {
        var n = e[r];
        t.push(n)
    }
    return t
}

function xL(e) {
    if (typeof e.webkitGetAsEntry != "function") return YD(e);
    var t = e.webkitGetAsEntry();
    return t && t.isDirectory ? KD(t) : YD(e)
}

function zD(e) {
    return e.reduce(function(t, r) {
        return hw(t, Array.isArray(r) ? zD(r) : [r])
    }, [])
}

function YD(e) {
    var t = e.getAsFile();
    if (!t) return Promise.reject(e + " is not a File");
    var r = ml(t);
    return Promise.resolve(r)
}

function CL(e) {
    return Ao(this, void 0, void 0, function() {
        return Oo(this, function(t) {
            return [2, e.isDirectory ? KD(e) : _L(e)]
        })
    })
}

function KD(e) {
    var t = e.createReader();
    return new Promise(function(r, n) {
        var i = [];

        function a() {
            var o = this;
            t.readEntries(function(s) {
                return Ao(o, void 0, void 0, function() {
                    var u, l, c;
                    return Oo(this, function(d) {
                        switch (d.label) {
                            case 0:
                                if (s.length) return [3, 5];
                                d.label = 1;
                            case 1:
                                return d.trys.push([1, 3, , 4]), [4, Promise.all(i)];
                            case 2:
                                return u = d.sent(), r(u), [3, 4];
                            case 3:
                                return l = d.sent(), n(l), [3, 4];
                            case 4:
                                return [3, 6];
                            case 5:
                                c = Promise.all(s.map(CL)), i.push(c), a(), d.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }, function(s) {
                n(s)
            })
        }
        a()
    })
}

function _L(e) {
    return Ao(this, void 0, void 0, function() {
        return Oo(this, function(t) {
            return [2, new Promise(function(r, n) {
                e.file(function(i) {
                    var a = ml(i, e.fullPath);
                    r(a)
                }, function(i) {
                    n(i)
                })
            })]
        })
    })
}
var An = require("obsidian");
var Vl = Ct(o0());
var pk = require("obsidian");
var li = require("obsidian"),
    cg = Ct(Ic());
var $S = Ct(HS()),
    US = Ct(Wm()),
    cs = require("obsidian");
var {
    compare: ZP
} = new Intl.Collator(void 0, {
    usage: "sort",
    sensitivity: "base",
    numeric: !0
}), fr = ZP, Ol = class {
    constructor() {
        this.settled = !1;
        this.promise = new Promise((t, r) => {
            this.resolve = n => {
                this.settled = !0, t(n)
            }, this.reject = n => {
                this.settled = !0, r(n)
            }
        })
    }
}, Ac = class {
    constructor(t) {
        this.onComplete = t;
        this.queue = [];
        this.isRunning = !1
    }
    clear() {
        this.queue.length = 0, this.isRunning = !1
    }
    add(t) {
        this.queue.push(t), this.isRunning || this.run()
    }
    async run() {
        this.isRunning = !0;
        let {
            queue: t
        } = this, r = performance.now();
        for (; t.length;) {
            let n = t.splice(0, 5);
            try {
                await Promise.all(n.map(a => a()))
            } catch (a) {
                console.error(a)
            }
            if (!this.isRunning) return;
            let i = performance.now();
            i - r > 50 && (await new Promise(a => activeWindow.setTimeout(a)), r = i)
        }
        this.isRunning = !1, this.onComplete()
    }
};
var us = require("obsidian"),
    QP = /\u00A0/g;

function Ym(e) {
    let r = e.replace(QP, " ").normalize("NFC").split(/\|(.*)/),
        n = r[0].split(/#(.*)/);
    return {
        root: n[0],
        subpath: n[1] ? "#" + n[1] : "",
        alias: r[1] || ""
    }
}

function BS(e) {
    e.querySelectorAll(".task-list-item-checkbox").forEach((r, n) => {
        r.dataset.checkboxIndex = n.toString()
    })
}

function VS(e) {
    let {
        contentEl: t,
        app: r
    } = e, n = a => {
        let o = a.getAttr("data-href") || a.getAttr("href");
        return o ? {
            href: o,
            displayText: a.getText().trim()
        } : null
    }, i = (a, o) => {
        if (a.button !== 0 && a.button !== 1) return;
        let s = n(o);
        s && (a.preventDefault(), r.workspace.openLinkText(s.href, e.file.path, us.Keymap.isModEvent(a)))
    };
    t.on("click", "a.internal-link", i), t.on("auxclick", "a.internal-link", i), t.on("dragstart", "a.internal-link", a => {
        a.preventDefault()
    }), t.on("contextmenu", "a.internal-link", (a, o) => {
        let s = n(o);
        if (!s) return;
        let u = new us.Menu;
        u.addSections(["title", "open", "action", "view", "info", "", "danger"]), r.workspace.handleLinkContextMenu(u, s.href, e.file.path), u.showAtMouseEvent(a)
    }), t.on("mouseover", "a.internal-link", (a, o) => {
        let s = n(o);
        s && r.workspace.trigger("hover-link", {
            event: a,
            source: "preview",
            hoverParent: e,
            targetEl: o,
            linktext: s.href,
            sourcePath: e.file.path
        })
    }), t.on("click", "a.external-link", (a, o) => {
        let s = n(o);
        if (!s || (a.preventDefault(), !s.href || s.href.contains(" "))) return;
        try {
            new URL(s.href)
        } catch (c) {
            return
        }
        let u = us.Keymap.isModEvent(a),
            l = typeof u == "boolean" ? "" : u;
        window.open(s.href, l)
    }), t.on("contextmenu", "a.external-link", (a, o) => {
        let s = n(o);
        if (!s) return;
        let u = new us.Menu;
        u.addSections(["title", "open", "selection", "clipboard", "action", "view", "info", "", "danger"]), r.workspace.handleExternalLinkContextMenu(u, s.href), u.showAtMouseEvent(a)
    }), t.on("click", "a.tag", (a, o) => {
        if (a.button !== 0) return;
        let s = o.getText(),
            u = r.internalPlugins.getPluginById("global-search");
        e.plugin.getStateManager(e.file).getSetting("tag-action") === "kanban" ? e.emitter.emit("hotkey", {
            commandId: "editor:open-search",
            data: s
        }) : u && u.instance.openGlobalSearch(`tag:${s}`)
    })
}
var tt = aa(null),
    zn = aa(null),
    Oc = aa(null),
    Lc = aa(null);

function zm(e, t) {
    if (!e) return;
    let r = e.querySelectorAll("a.tag");
    r != null && r.length && r.forEach(n => {
        let i = t(n.getAttr("href"));
        i && n.setCssProps({
            "--tag-color": i.color,
            "--tag-background": i.backgroundColor
        })
    })
}

function Km(e, t) {
    if (!e) return;
    let r = e.querySelectorAll("." + $("date"));
    r != null && r.length && r.forEach(n => {
        let i = n.dataset.date;
        if (!i) return;
        let a = (0, US.default)(i);
        if (!a.isValid()) return;
        let o = t(a);
        n.toggleClass("has-background", !!(o != null && o.backgroundColor)), o && n.setCssProps({
            "--date-color": o.color,
            "--date-background-color": o.backgroundColor
        })
    })
}
var Ll = class extends cs.Component {
        constructor(r, n) {
            super();
            this.view = r;
            this.markdown = n;
            this.isVisible = !1;
            this.lastWidth = -1;
            this.lastHeight = -1;
            this.lastRefWidth = -1;
            this.lastRefHeight = -1;
            this.containerEl = createDiv("markdown-preview-view markdown-rendered " + $("markdown-preview-view")), this.mark = new $S.default(this.containerEl), this.renderCapability = new Ol
        }
        onload() {
            this.render()
        }
        async render() {
            var n;
            if (this.containerEl.empty(), await cs.MarkdownRenderer.render(this.view.app, this.markdown, this.containerEl, this.view.file.path, this), this.renderCapability.resolve(), !((n = this.view) != null && n._loaded) || !this._loaded) return;
            let {
                containerEl: r
            } = this;
            this.resolveLinks(), BS(r), this.observer = new ResizeObserver(i => {
                if (!i.length) return;
                let a = i.first().contentBoxSize[0];
                if (a.blockSize !== 0) {
                    if (this.wrapperEl) {
                        let o = this.wrapperEl.getBoundingClientRect();
                        (this.lastRefHeight === -1 || o.height > 0) && (this.lastRefHeight = o.height, this.lastRefWidth = o.width)
                    }
                    this.lastWidth = a.inlineSize, this.lastHeight = a.blockSize
                }
            }), r.win.setTimeout(() => {
                this.observer.observe(r, {
                    box: "border-box"
                })
            }), r.addEventListener("click", i => {
                let {
                    targetNode: a
                } = i;
                a.instanceOf(HTMLElement) && a.hasClass("task-list-item-checkbox") && !a.closest(".markdown-embed") && (i.preventDefault(), i.stopPropagation())
            }, {
                capture: !0
            }), r.addEventListener("contextmenu", i => {
                let {
                    targetNode: a
                } = i;
                a.instanceOf(HTMLElement) && a.hasClass("task-list-item-checkbox") && (i.preventDefault(), i.stopPropagation())
            }, {
                capture: !0
            })
        }
        migrate(r) {
            let {
                lastRefHeight: n,
                lastRefWidth: i,
                containerEl: a
            } = this;
            this.wrapperEl = r, n > 0 && (r.style.width = `${i}px`, r.style.height = `${n}px`, r.win.setTimeout(() => {
                r.style.width = "", r.style.height = ""
            }, 50)), a.parentElement !== r && r.append(a), this.mark.unmark()
        }
        show() {
            let {
                wrapperEl: r,
                containerEl: n
            } = this;
            r && (r.append(n), r.style.minHeight && (r.style.minHeight = ""), this.isVisible = !0)
        }
        hide() {
            let {
                containerEl: r,
                wrapperEl: n
            } = this;
            n && (n.style.minHeight = this.lastRefHeight + "px", r.detach(), this.isVisible = !1)
        }
        set(r) {
            this._loaded && (this.markdown = r, this.renderCapability = new Ol, this.unload(), this.load())
        }
        resolveLinks() {
            let {
                containerEl: r,
                view: n
            } = this, i = r.findAll("a.internal-link");
            for (let a of i) {
                let o = this.getInternalLinkHref(a);
                if (!o) continue;
                let s = (0, cs.getLinkpath)(o),
                    u = n.app.metadataCache.getFirstLinkpathDest(s, n.file.path);
                a.toggleClass("is-unresolved", !u)
            }
        }
        getInternalLinkHref(r) {
            let n = r.getAttr("data-href") || r.getAttr("href");
            return n || null
        }
    },
    Sa = zt(function({
        entityId: t,
        className: r,
        markdownString: n,
        searchQuery: i,
        ...a
    }) {
        let {
            view: o,
            stateManager: s
        } = Ee(tt), u = Ee($o), l = Ee(cn), c = Ee(Oc), d = Ee(Lc), m = Lu(s), h = fa(s), g = Fe(), y = Fe();
        Ae(() => {
            var I;
            if (!u || !t || !g.current) return;
            let D = (I = u == null ? void 0 : u.scrollParent) == null ? void 0 : I.observer;
            D && (D.unobserve(u.measureNode), D.observe(u.measureNode))
        }, [c]), Ae(() => {
            if (!(!d || !y.current)) return d.registerHandler(y.current, D => {
                var I, C;
                D.isIntersecting ? (I = g.current) == null || I.show() : (C = g.current) == null || C.hide()
            }), () => {
                y.current && (d == null || d.unregisterHandler(y.current))
            }
        }, []), Ae(() => {
            let D = x => {
                let O = g.current;
                if (!O || !(u != null && u.parent)) return;
                let {
                    dragManager: A
                } = l;
                A.dragEntityId !== u.entityId && A.dragEntityId !== u.parent.entityId && (O.isVisible && !x ? O.hide() : !O.isVisible && x && O.show())
            };
            if (t && o.previewCache.has(t)) {
                let x = o.previewCache.get(t);
                return g.current = x, x.migrate(y.current), u == null || u.emitter.on("visibility-change", D), () => u == null ? void 0 : u.emitter.off("visibility-change", D)
            }
            let I = new Ll(o, n);
            I.wrapperEl = y.current;
            let C = g.current = o.addChild(I);
            return t && o.previewCache.set(t, C), y.current.empty(), y.current.append(C.containerEl), zm(y.current, m), Km(y.current, h), u == null || u.emitter.on("visibility-change", D), () => {
                var x;
                (x = g.current) == null || x.renderCapability.resolve(), u == null || u.emitter.off("visibility-change", D)
            }
        }, [o, t, u]), Ae(() => {
            let D = g.current;
            !D || n === D.markdown || (D.renderCapability.resolve(), D.set(n), D.renderCapability.promise.then(() => {
                zm(y.current, m), Km(y.current, h)
            }))
        }, [n]), Ae(() => {
            g.current && (zm(y.current, m), Km(y.current, h))
        }, [m, h]), Ae(() => {
            let D = g.current;
            D && (D.mark.unmark(), i && i.trim() && D.mark.mark(i))
        }, [i]), Ae(() => {
            let D = g.current;
            y.current && D && D.wrapperEl !== y.current && D.migrate(y.current)
        }, []);
        let v;
        if (!g.current && o.previewCache.has(t)) {
            let D = o.previewCache.get(t);
            D.lastRefHeight > 0 && (v = {
                width: `${D.lastRefWidth}px`,
                height: `${D.lastRefHeight}px`
            })
        }
        return E("div", {
            style: v,
            ref: y,
            className: Ge([$("markdown-preview-wrapper"), r]),
            ...a
        })
    }),
    WS = zt(function({
        entityId: t,
        className: r,
        ...n
    }) {
        let {
            view: i
        } = Ee(tt), a = Fe(), o = i.previewCache.get(t), s;
        return o && o.lastRefHeight > 0 && (s = {
            width: `${o.lastRefWidth}px`,
            height: `${o.lastRefHeight}px`
        }), E("div", {
            style: s,
            ref: u => {
                a.current = u, u && o && u.childElementCount === 0 && u.append(o.containerEl.cloneNode(!0))
            },
            className: Ge([$("markdown-preview-wrapper"), r]),
            ...n
        })
    });
var ck = require("@codemirror/commands"),
    fs = require("@codemirror/state"),
    lo = require("@codemirror/view");
var xa = require("obsidian");
var ft = {
        Item: "item",
        Lane: "lane",
        Board: "board",
        MetadataSetting: "metadata-setting",
        TagColorSetting: "tag-color",
        TagSortSetting: "tag-sort",
        DateColorSetting: "date-color"
    },
    Pc = {
        accepts: [ft.Item],
        type: ft.Item,
        children: []
    },
    Ea = {
        accepts: [ft.Lane],
        type: ft.Lane
    },
    Nc = {
        accepts: [],
        type: ft.Board
    },
    Rc = {
        accepts: [ft.MetadataSetting],
        type: ft.MetadataSetting,
        children: []
    },
    Hc = {
        accepts: [ft.TagSortSetting],
        type: ft.TagSortSetting,
        children: []
    },
    Bc = {
        accepts: [],
        type: ft.TagColorSetting,
        children: []
    },
    Vc = {
        accepts: [],
        type: ft.DateColorSetting,
        children: []
    };

function kn(e) {
    return !(e === null || typeof e == "number")
}
var YS = require("@codemirror/state"),
    si = require("@codemirror/view"),
    zS = require("obsidian");
var Uc = YS.StateField.define({
        create() {
            return null
        },
        update(e) {
            return e
        }
    }),
    jm = class extends si.WidgetType {
        constructor(t, r, n) {
            super(), this.stateManager = t, this.type = n, this.date = r
        }
        eq(t) {
            return this.date.isSame(t.date)
        }
        toDOM() {
            return createSpan({
                cls: `cm-kanban-${this.type}-wrapper`
            }, t => {
                t.createSpan({
                    cls: `cm-kanban-${this.type}`,
                    text: this.date.format(this.stateManager.getSetting(this.type === "time" ? "time-format" : "date-display-format"))
                })
            })
        }
        ignoreEvent() {
            return !1
        }
    };

function XP(e) {
    return (t, r, n, i, a) => {
        let o = a.state.field(Uc);
        if (!o) return;
        let s = i[1],
            u = (0, zS.moment)(s, o.getSetting(e === "date" ? "date-format" : "time-format"));
        u.isValid() && t(r, n, si.Decoration.replace({
            widget: new jm(o, u, e)
        }))
    }
}
var qm = class {
        constructor(t, r, n) {
            this.decorator = new si.MatchDecorator({
                regexp: r,
                decorate: XP(n)
            }), this.decos = this.decorator.createDeco(t)
        }
        update(t) {
            t.docChanged && (this.decos = this.decorator.createDeco(t.view))
        }
    },
    eN = {
        decorations: e => e.decos,
        provide: e => si.EditorView.atomicRanges.of(t => {
            var r;
            return ((r = t.plugin(e)) == null ? void 0 : r.decos) || si.Decoration.none
        })
    };

function $c(e, t) {
    return si.ViewPlugin.define(r => {
        let i = r.state.field(Uc).getSetting(e === "date" ? "date-trigger" : "time-trigger");
        return new qm(r, new RegExp(`${Qn(i)}${t}`, "g"), e)
    }, eN)
}
var KS = [$c("time", "{([^}]+)}"), $c("date", "{([^}]+)}"), $c("date", "\\[\\[([^\\]]+)\\]\\]"), $c("date", "\\[([^\\]]+)\\]\\([^)]+\\)")];
var Hl = require("obsidian");
var ok = require("obsidian");
var ek = require("obsidian");
var jS = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Gm = {
        weekdays: {
            shorthand: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
            longhand: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
        },
        months: {
            shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            longhand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
        },
        firstDayOfWeek: 6,
        rangeSeparator: " \u0625\u0644\u0649 ",
        weekAbbreviation: "Wk",
        scrollTitle: "\u0642\u0645 \u0628\u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0644\u0644\u0632\u064A\u0627\u062F\u0629",
        toggleTitle: "\u0627\u0636\u063A\u0637 \u0644\u0644\u062A\u0628\u062F\u064A\u0644",
        amPM: ["\u0635", "\u0645"],
        yearAriaLabel: "\u0633\u0646\u0629",
        monthAriaLabel: "\u0634\u0647\u0631",
        hourAriaLabel: "\u0633\u0627\u0639\u0629",
        minuteAriaLabel: "\u062F\u0642\u064A\u0642\u0629",
        time_24hr: !1
    };
jS.l10ns.ar = Gm;
var JW = jS.l10ns;
var qS = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Jm = {
        weekdays: {
            shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        },
        months: {
            shorthand: ["J\xE4n", "Feb", "M\xE4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            longhand: ["J\xE4nner", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "KW",
        rangeSeparator: " bis ",
        scrollTitle: "Zum \xC4ndern scrollen",
        toggleTitle: "Zum Umschalten klicken",
        time_24hr: !0
    };
qS.l10ns.at = Jm;
var QW = qS.l10ns;
var GS = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Zm = {
        weekdays: {
            shorthand: ["B.", "B.e.", "\xC7.a.", "\xC7.", "C.a.", "C.", "\u015E."],
            longhand: ["Bazar", "Bazar ert\u0259si", "\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131", "\xC7\u0259r\u015F\u0259nb\u0259", "C\xFCm\u0259 ax\u015Fam\u0131", "C\xFCm\u0259", "\u015E\u0259nb\u0259"]
        },
        months: {
            shorthand: ["Yan", "Fev", "Mar", "Apr", "May", "\u0130yn", "\u0130yl", "Avq", "Sen", "Okt", "Noy", "Dek"],
            longhand: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "\u0130yun", "\u0130yul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
        },
        firstDayOfWeek: 1,
        ordinal: () => ".",
        rangeSeparator: " - ",
        weekAbbreviation: "Hf",
        scrollTitle: "Art\u0131rmaq \xFC\xE7\xFCn s\xFCr\xFC\u015Fd\xFCr\xFCn",
        toggleTitle: "A\xE7 / Ba\u011Fla",
        amPM: ["G\u018F", "GS"],
        time_24hr: !0
    };
GS.l10ns.az = Zm;
var e4 = GS.l10ns;
var JS = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Qm = {
        weekdays: {
            shorthand: ["\u041D\u0434", "\u041F\u043D", "\u0410\u045E", "\u0421\u0440", "\u0427\u0446", "\u041F\u0442", "\u0421\u0431"],
            longhand: ["\u041D\u044F\u0434\u0437\u0435\u043B\u044F", "\u041F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A", "\u0410\u045E\u0442\u043E\u0440\u0430\u043A", "\u0421\u0435\u0440\u0430\u0434\u0430", "\u0427\u0430\u0446\u0432\u0435\u0440", "\u041F\u044F\u0442\u043D\u0456\u0446\u0430", "\u0421\u0443\u0431\u043E\u0442\u0430"]
        },
        months: {
            shorthand: ["\u0421\u0442\u0443", "\u041B\u044E\u0442", "\u0421\u0430\u043A", "\u041A\u0440\u0430", "\u0422\u0440\u0430", "\u0427\u044D\u0440", "\u041B\u0456\u043F", "\u0416\u043D\u0456", "\u0412\u0435\u0440", "\u041A\u0430\u0441", "\u041B\u0456\u0441", "\u0421\u043D\u0435"],
            longhand: ["\u0421\u0442\u0443\u0434\u0437\u0435\u043D\u044C", "\u041B\u044E\u0442\u044B", "\u0421\u0430\u043A\u0430\u0432\u0456\u043A", "\u041A\u0440\u0430\u0441\u0430\u0432\u0456\u043A", "\u0422\u0440\u0430\u0432\u0435\u043D\u044C", "\u0427\u044D\u0440\u0432\u0435\u043D\u044C", "\u041B\u0456\u043F\u0435\u043D\u044C", "\u0416\u043D\u0456\u0432\u0435\u043D\u044C", "\u0412\u0435\u0440\u0430\u0441\u0435\u043D\u044C", "\u041A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A", "\u041B\u0456\u0441\u0442\u0430\u043F\u0430\u0434", "\u0421\u043D\u0435\u0436\u0430\u043D\u044C"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return ""
        },
        rangeSeparator: " \u2014 ",
        weekAbbreviation: "\u0422\u044B\u0434.",
        scrollTitle: "\u041F\u0440\u0430\u043A\u0440\u0443\u0446\u0456\u0446\u0435 \u0434\u043B\u044F \u043F\u0430\u0432\u0435\u043B\u0456\u0447\u044D\u043D\u043D\u044F",
        toggleTitle: "\u041D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0430\u043A\u043B\u044E\u0447\u044D\u043D\u043D\u044F",
        amPM: ["\u0414\u041F", "\u041F\u041F"],
        yearAriaLabel: "\u0413\u043E\u0434",
        time_24hr: !0
    };
JS.l10ns.be = Qm;
var n4 = JS.l10ns;
var ZS = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Xm = {
        weekdays: {
            shorthand: ["\u041D\u0434", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
            longhand: ["\u041D\u0435\u0434\u0435\u043B\u044F", "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0412\u0442\u043E\u0440\u043D\u0438\u043A", "\u0421\u0440\u044F\u0434\u0430", "\u0427\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u041F\u0435\u0442\u044A\u043A", "\u0421\u044A\u0431\u043E\u0442\u0430"]
        },
        months: {
            shorthand: ["\u042F\u043D\u0443", "\u0424\u0435\u0432", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440", "\u041C\u0430\u0439", "\u042E\u043D\u0438", "\u042E\u043B\u0438", "\u0410\u0432\u0433", "\u0421\u0435\u043F", "\u041E\u043A\u0442", "\u041D\u043E\u0435", "\u0414\u0435\u043A"],
            longhand: ["\u042F\u043D\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0438\u043B", "\u041C\u0430\u0439", "\u042E\u043D\u0438", "\u042E\u043B\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u041D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438"]
        },
        time_24hr: !0,
        firstDayOfWeek: 1
    };
ZS.l10ns.bg = Xm;
var i4 = ZS.l10ns;
var QS = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    ep = {
        weekdays: {
            shorthand: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"],
            longhand: ["\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0", "\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0", "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0", "\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0", "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0", "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0", "\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0"]
        },
        months: {
            shorthand: ["\u099C\u09BE\u09A8\u09C1", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997", "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7", "\u0985\u0995\u09CD\u099F\u09CB", "\u09A8\u09AD\u09C7", "\u09A1\u09BF\u09B8\u09C7"],
            longhand: ["\u099C\u09BE\u09A8\u09C1\u09AF\u09BC\u09BE\u09B0\u09C0", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09AF\u09BC\u09BE\u09B0\u09C0", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0", "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0", "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0", "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"]
        }
    };
QS.l10ns.bn = ep;
var o4 = QS.l10ns;
var XS = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    tp = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["Ned", "Pon", "Uto", "Sri", "\u010Cet", "Pet", "Sub"],
            longhand: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010Cetvrtak", "Petak", "Subota"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            longhand: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
        },
        time_24hr: !0
    };
XS.l10ns.bs = tp;
var l4 = XS.l10ns;
var np = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Wc = {
        weekdays: {
            shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            longhand: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
        },
        months: {
            shorthand: ["Gen", "Febr", "Mar\xE7", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des"],
            longhand: ["Gener", "Febrer", "Mar\xE7", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]
        },
        ordinal: e => {
            let t = e % 100;
            if (t > 3 && t < 21) return "\xE8";
            switch (t % 10) {
                case 1:
                    return "r";
                case 2:
                    return "n";
                case 3:
                    return "r";
                case 4:
                    return "t";
                default:
                    return "\xE8"
            }
        },
        firstDayOfWeek: 1,
        rangeSeparator: " a ",
        time_24hr: !0
    };
np.l10ns.cat = np.l10ns.ca = Wc;
var c4 = np.l10ns;
var eE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    rp = {
        weekdays: {
            shorthand: ["\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5", "\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5", "\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5", "\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5", "\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5", "\u0647\u06D5\u06CC\u0646\u06CC", "\u0634\u06D5\u0645\u0645\u06D5"],
            longhand: ["\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5", "\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5", "\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5", "\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5", "\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5", "\u0647\u06D5\u06CC\u0646\u06CC", "\u0634\u06D5\u0645\u0645\u06D5"]
        },
        months: {
            shorthand: ["\u0695\u06CE\u0628\u06D5\u0646\u062F\u0627\u0646", "\u0695\u06D5\u0634\u06D5\u0645\u06D5", "\u0646\u06D5\u0648\u0631\u06C6\u0632", "\u06AF\u0648\u06B5\u0627\u0646", "\u062C\u06C6\u0632\u06D5\u0631\u062F\u0627\u0646", "\u067E\u0648\u0648\u0634\u067E\u06D5\u0695", "\u06AF\u06D5\u0644\u0627\u0648\u06CE\u0698", "\u062E\u06D5\u0631\u0645\u0627\u0646\u0627\u0646", "\u0695\u06D5\u0632\u0628\u06D5\u0631", "\u06AF\u06D5\u06B5\u0627\u0695\u06CE\u0632\u0627\u0646", "\u0633\u06D5\u0631\u0645\u0627\u0648\u06D5\u0632", "\u0628\u06D5\u0641\u0631\u0627\u0646\u0628\u0627\u0631"],
            longhand: ["\u0695\u06CE\u0628\u06D5\u0646\u062F\u0627\u0646", "\u0695\u06D5\u0634\u06D5\u0645\u06D5", "\u0646\u06D5\u0648\u0631\u06C6\u0632", "\u06AF\u0648\u06B5\u0627\u0646", "\u062C\u06C6\u0632\u06D5\u0631\u062F\u0627\u0646", "\u067E\u0648\u0648\u0634\u067E\u06D5\u0695", "\u06AF\u06D5\u0644\u0627\u0648\u06CE\u0698", "\u062E\u06D5\u0631\u0645\u0627\u0646\u0627\u0646", "\u0695\u06D5\u0632\u0628\u06D5\u0631", "\u06AF\u06D5\u06B5\u0627\u0695\u06CE\u0632\u0627\u0646", "\u0633\u06D5\u0631\u0645\u0627\u0648\u06D5\u0632", "\u0628\u06D5\u0641\u0631\u0627\u0646\u0628\u0627\u0631"]
        },
        firstDayOfWeek: 6,
        ordinal: () => ""
    };
eE.l10ns.ckb = rp;
var f4 = eE.l10ns;
var tE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    ip = {
        weekdays: {
            shorthand: ["Ne", "Po", "\xDAt", "St", "\u010Ct", "P\xE1", "So"],
            longhand: ["Ned\u011Ble", "Pond\u011Bl\xED", "\xDAter\xFD", "St\u0159eda", "\u010Ctvrtek", "P\xE1tek", "Sobota"]
        },
        months: {
            shorthand: ["Led", "\xDAn", "B\u0159e", "Dub", "Kv\u011B", "\u010Cer", "\u010Cvc", "Srp", "Z\xE1\u0159", "\u0158\xEDj", "Lis", "Pro"],
            longhand: ["Leden", "\xDAnor", "B\u0159ezen", "Duben", "Kv\u011Bten", "\u010Cerven", "\u010Cervenec", "Srpen", "Z\xE1\u0159\xED", "\u0158\xEDjen", "Listopad", "Prosinec"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return "."
        },
        rangeSeparator: " do ",
        weekAbbreviation: "T\xFDd.",
        scrollTitle: "Rolujte pro zm\u011Bnu",
        toggleTitle: "P\u0159epnout dopoledne/odpoledne",
        amPM: ["dop.", "odp."],
        yearAriaLabel: "Rok",
        time_24hr: !0
    };
tE.l10ns.cs = ip;
var m4 = tE.l10ns;
var nE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    ap = {
        weekdays: {
            shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
            longhand: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"]
        },
        months: {
            shorthand: ["Ion", "Chwef", "Maw", "Ebr", "Mai", "Meh", "Gorff", "Awst", "Medi", "Hyd", "Tach", "Rhag"],
            longhand: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"]
        },
        firstDayOfWeek: 1,
        ordinal: e => e === 1 ? "af" : e === 2 ? "ail" : e === 3 || e === 4 ? "ydd" : e === 5 || e === 6 ? "ed" : e >= 7 && e <= 10 || e == 12 || e == 15 || e == 18 || e == 20 ? "fed" : e == 11 || e == 13 || e == 14 || e == 16 || e == 17 || e == 19 ? "eg" : e >= 21 && e <= 39 ? "ain" : "",
        time_24hr: !0
    };
nE.l10ns.cy = ap;
var g4 = nE.l10ns;
var rE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    op = {
        weekdays: {
            shorthand: ["s\xF8n", "man", "tir", "ons", "tors", "fre", "l\xF8r"],
            longhand: ["s\xF8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xF8rdag"]
        },
        months: {
            shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            longhand: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
        },
        ordinal: () => ".",
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "uge",
        time_24hr: !0
    };
rE.l10ns.da = op;
var v4 = rE.l10ns;
var iE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    sp = {
        weekdays: {
            shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        },
        months: {
            shorthand: ["Jan", "Feb", "M\xE4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            longhand: ["Januar", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "KW",
        rangeSeparator: " bis ",
        scrollTitle: "Zum \xC4ndern scrollen",
        toggleTitle: "Zum Umschalten klicken",
        time_24hr: !0
    };
iE.l10ns.de = sp;
var b4 = iE.l10ns;
var so = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: e => {
            let t = e % 100;
            if (t > 3 && t < 21) return "th";
            switch (t % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: !1
    },
    Yc = so;
var aE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    lp = {
        firstDayOfWeek: 1,
        rangeSeparator: " \u011Dis ",
        weekAbbreviation: "Sem",
        scrollTitle: "Rulumu por pligrandigi la valoron",
        toggleTitle: "Klaku por \u015Dalti",
        weekdays: {
            shorthand: ["Dim", "Lun", "Mar", "Mer", "\u0134a\u016D", "Ven", "Sab"],
            longhand: ["diman\u0109o", "lundo", "mardo", "merkredo", "\u0135a\u016Ddo", "vendredo", "sabato"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "A\u016Dg", "Sep", "Okt", "Nov", "Dec"],
            longhand: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "a\u016Dgusto", "septembro", "oktobro", "novembro", "decembro"]
        },
        ordinal: () => "-a",
        time_24hr: !0
    };
aE.l10ns.eo = lp;
var E4 = aE.l10ns;
var oE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    up = {
        weekdays: {
            shorthand: ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"],
            longhand: ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"]
        },
        months: {
            shorthand: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            longhand: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        },
        ordinal: () => "\xBA",
        firstDayOfWeek: 1,
        rangeSeparator: " a ",
        time_24hr: !0
    };
oE.l10ns.es = up;
var x4 = oE.l10ns;
var sE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    cp = {
        weekdays: {
            shorthand: ["P", "E", "T", "K", "N", "R", "L"],
            longhand: ["P\xFChap\xE4ev", "Esmasp\xE4ev", "Teisip\xE4ev", "Kolmap\xE4ev", "Neljap\xE4ev", "Reede", "Laup\xE4ev"]
        },
        months: {
            shorthand: ["Jaan", "Veebr", "M\xE4rts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
            longhand: ["Jaanuar", "Veebruar", "M\xE4rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return "."
        },
        weekAbbreviation: "N\xE4d",
        rangeSeparator: " kuni ",
        scrollTitle: "Keri, et suurendada",
        toggleTitle: "Kl\xF5psa, et vahetada",
        time_24hr: !0
    };
sE.l10ns.et = cp;
var _4 = sE.l10ns;
var lE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    dp = {
        weekdays: {
            shorthand: ["\u06CC\u06A9", "\u062F\u0648", "\u0633\u0647", "\u0686\u0647\u0627\u0631", "\u067E\u0646\u062C", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"],
            longhand: ["\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200C\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u0686\u200C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"]
        },
        months: {
            shorthand: ["\u0698\u0627\u0646\u0648\u06CC\u0647", "\u0641\u0648\u0631\u06CC\u0647", "\u0645\u0627\u0631\u0633", "\u0622\u0648\u0631\u06CC\u0644", "\u0645\u0647", "\u0698\u0648\u0626\u0646", "\u0698\u0648\u0626\u06CC\u0647", "\u0627\u0648\u062A", "\u0633\u067E\u062A\u0627\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0628\u0631", "\u0646\u0648\u0627\u0645\u0628\u0631", "\u062F\u0633\u0627\u0645\u0628\u0631"],
            longhand: ["\u0698\u0627\u0646\u0648\u06CC\u0647", "\u0641\u0648\u0631\u06CC\u0647", "\u0645\u0627\u0631\u0633", "\u0622\u0648\u0631\u06CC\u0644", "\u0645\u0647", "\u0698\u0648\u0626\u0646", "\u0698\u0648\u0626\u06CC\u0647", "\u0627\u0648\u062A", "\u0633\u067E\u062A\u0627\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0628\u0631", "\u0646\u0648\u0627\u0645\u0628\u0631", "\u062F\u0633\u0627\u0645\u0628\u0631"]
        },
        firstDayOfWeek: 6,
        ordinal: () => ""
    };
lE.l10ns.fa = dp;
var T4 = lE.l10ns;
var uE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    fp = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["su", "ma", "ti", "ke", "to", "pe", "la"],
            longhand: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
        },
        months: {
            shorthand: ["tammi", "helmi", "maalis", "huhti", "touko", "kes\xE4", "hein\xE4", "elo", "syys", "loka", "marras", "joulu"],
            longhand: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\xE4kuu", "hein\xE4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"]
        },
        ordinal: () => ".",
        time_24hr: !0
    };
uE.l10ns.fi = fp;
var I4 = uE.l10ns;
var cE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    hp = {
        weekdays: {
            shorthand: ["Sun", "M\xE1n", "T\xFDs", "Mik", "H\xF3s", "Fr\xED", "Ley"],
            longhand: ["Sunnudagur", "M\xE1nadagur", "T\xFDsdagur", "Mikudagur", "H\xF3sdagur", "Fr\xEDggjadagur", "Leygardagur"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            longhand: ["Januar", "Februar", "Mars", "Apr\xEDl", "Mai", "Juni", "Juli", "August", "Septembur", "Oktobur", "Novembur", "Desembur"]
        },
        ordinal: () => ".",
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "vika",
        scrollTitle: "Rulla fyri at broyta",
        toggleTitle: "Tr\xFDst fyri at skifta",
        yearAriaLabel: "\xC1r",
        time_24hr: !0
    };
cE.l10ns.fo = hp;
var O4 = cE.l10ns;
var dE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    mp = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
            longhand: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
        },
        months: {
            shorthand: ["janv", "f\xE9vr", "mars", "avr", "mai", "juin", "juil", "ao\xFBt", "sept", "oct", "nov", "d\xE9c"],
            longhand: ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"]
        },
        ordinal: e => e > 1 ? "" : "er",
        rangeSeparator: " au ",
        weekAbbreviation: "Sem",
        scrollTitle: "D\xE9filer pour augmenter la valeur",
        toggleTitle: "Cliquer pour basculer",
        time_24hr: !0
    };
dE.l10ns.fr = mp;
var P4 = dE.l10ns;
var fE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    pp = {
        weekdays: {
            shorthand: ["\u039A\u03C5", "\u0394\u03B5", "\u03A4\u03C1", "\u03A4\u03B5", "\u03A0\u03AD", "\u03A0\u03B1", "\u03A3\u03AC"],
            longhand: ["\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE", "\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1", "\u03A4\u03C1\u03AF\u03C4\u03B7", "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7", "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7", "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE", "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF"]
        },
        months: {
            shorthand: ["\u0399\u03B1\u03BD", "\u03A6\u03B5\u03B2", "\u039C\u03AC\u03C1", "\u0391\u03C0\u03C1", "\u039C\u03AC\u03B9", "\u0399\u03BF\u03CD\u03BD", "\u0399\u03BF\u03CD\u03BB", "\u0391\u03CD\u03B3", "\u03A3\u03B5\u03C0", "\u039F\u03BA\u03C4", "\u039D\u03BF\u03AD", "\u0394\u03B5\u03BA"],
            longhand: ["\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2", "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2", "\u039C\u03AC\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2", "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2", "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return ""
        },
        weekAbbreviation: "\u0395\u03B2\u03B4",
        rangeSeparator: " \u03AD\u03C9\u03C2 ",
        scrollTitle: "\u039C\u03B5\u03C4\u03B1\u03BA\u03C5\u03BB\u03AE\u03C3\u03C4\u03B5 \u03B3\u03B9\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7",
        toggleTitle: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE",
        amPM: ["\u03A0\u039C", "\u039C\u039C"],
        yearAriaLabel: "\u03C7\u03C1\u03CC\u03BD\u03BF\u03C2",
        monthAriaLabel: "\u03BC\u03AE\u03BD\u03B1\u03C2",
        hourAriaLabel: "\u03CE\u03C1\u03B1",
        minuteAriaLabel: "\u03BB\u03B5\u03C0\u03C4\u03CC"
    };
fE.l10ns.gr = pp;
var R4 = fE.l10ns;
var hE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    gp = {
        weekdays: {
            shorthand: ["\u05D0", "\u05D1", "\u05D2", "\u05D3", "\u05D4", "\u05D5", "\u05E9"],
            longhand: ["\u05E8\u05D0\u05E9\u05D5\u05DF", "\u05E9\u05E0\u05D9", "\u05E9\u05DC\u05D9\u05E9\u05D9", "\u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D7\u05DE\u05D9\u05E9\u05D9", "\u05E9\u05D9\u05E9\u05D9", "\u05E9\u05D1\u05EA"]
        },
        months: {
            shorthand: ["\u05D9\u05E0\u05D5\u05F3", "\u05E4\u05D1\u05E8\u05F3", "\u05DE\u05E8\u05E5", "\u05D0\u05E4\u05E8\u05F3", "\u05DE\u05D0\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D2\u05F3", "\u05E1\u05E4\u05D8\u05F3", "\u05D0\u05D5\u05E7\u05F3", "\u05E0\u05D5\u05D1\u05F3", "\u05D3\u05E6\u05DE\u05F3"],
            longhand: ["\u05D9\u05E0\u05D5\u05D0\u05E8", "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8", "\u05DE\u05E8\u05E5", "\u05D0\u05E4\u05E8\u05D9\u05DC", "\u05DE\u05D0\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8", "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8", "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8", "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8", "\u05D3\u05E6\u05DE\u05D1\u05E8"]
        },
        rangeSeparator: " \u05D0\u05DC ",
        time_24hr: !0
    };
hE.l10ns.he = gp;
var B4 = hE.l10ns;
var mE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    yp = {
        weekdays: {
            shorthand: ["\u0930\u0935\u093F", "\u0938\u094B\u092E", "\u092E\u0902\u0917\u0932", "\u092C\u0941\u0927", "\u0917\u0941\u0930\u0941", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"],
            longhand: ["\u0930\u0935\u093F\u0935\u093E\u0930", "\u0938\u094B\u092E\u0935\u093E\u0930", "\u092E\u0902\u0917\u0932\u0935\u093E\u0930", "\u092C\u0941\u0927\u0935\u093E\u0930", "\u0917\u0941\u0930\u0941\u0935\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930", "\u0936\u0928\u093F\u0935\u093E\u0930"]
        },
        months: {
            shorthand: ["\u091C\u0928", "\u092B\u0930", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u0947\u0932", "\u092E\u0908", "\u091C\u0942\u0928", "\u091C\u0942\u0932\u093E\u0908", "\u0905\u0917", "\u0938\u093F\u0924", "\u0905\u0915\u094D\u091F", "\u0928\u0935", "\u0926\u093F"],
            longhand: ["\u091C\u0928\u0935\u0930\u0940 ", "\u092B\u0930\u0935\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u0947\u0932", "\u092E\u0908", "\u091C\u0942\u0928", "\u091C\u0942\u0932\u093E\u0908", "\u0905\u0917\u0938\u094D\u0924 ", "\u0938\u093F\u0924\u092E\u094D\u092C\u0930", "\u0905\u0915\u094D\u091F\u0942\u092C\u0930", "\u0928\u0935\u092E\u094D\u092C\u0930", "\u0926\u093F\u0938\u092E\u094D\u092C\u0930"]
        }
    };
mE.l10ns.hi = yp;
var $4 = mE.l10ns;
var pE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    vp = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["Ned", "Pon", "Uto", "Sri", "\u010Cet", "Pet", "Sub"],
            longhand: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010Cetvrtak", "Petak", "Subota"]
        },
        months: {
            shorthand: ["Sij", "Velj", "O\u017Eu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            longhand: ["Sije\u010Danj", "Velja\u010Da", "O\u017Eujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"]
        },
        time_24hr: !0
    };
pE.l10ns.hr = vp;
var W4 = pE.l10ns;
var gE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    wp = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
            longhand: ["Vas\xE1rnap", "H\xE9tf\u0151", "Kedd", "Szerda", "Cs\xFCt\xF6rt\xF6k", "P\xE9ntek", "Szombat"]
        },
        months: {
            shorthand: ["Jan", "Feb", "M\xE1r", "\xC1pr", "M\xE1j", "J\xFAn", "J\xFAl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            longhand: ["Janu\xE1r", "Febru\xE1r", "M\xE1rcius", "\xC1prilis", "M\xE1jus", "J\xFAnius", "J\xFAlius", "Augusztus", "Szeptember", "Okt\xF3ber", "November", "December"]
        },
        ordinal: function() {
            return "."
        },
        weekAbbreviation: "H\xE9t",
        scrollTitle: "G\xF6rgessen",
        toggleTitle: "Kattintson a v\xE1lt\xE1shoz",
        rangeSeparator: " - ",
        time_24hr: !0
    };
gE.l10ns.hu = wp;
var z4 = gE.l10ns;
var yE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    bp = {
        weekdays: {
            shorthand: ["\u053F\u056B\u0580", "\u0535\u0580\u056F", "\u0535\u0580\u0584", "\u0549\u0580\u0584", "\u0540\u0576\u0563", "\u0548\u0582\u0580\u0562", "\u0547\u0562\u0569"],
            longhand: ["\u053F\u056B\u0580\u0561\u056F\u056B", "\u0535\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B", "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0540\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B", "\u0548\u0582\u0580\u0562\u0561\u0569", "\u0547\u0561\u0562\u0561\u0569"]
        },
        months: {
            shorthand: ["\u0540\u0576\u057E", "\u0553\u057F\u0580", "\u0544\u0561\u0580", "\u0531\u057A\u0580", "\u0544\u0561\u0575", "\u0540\u0576\u057D", "\u0540\u056C\u057D", "\u0555\u0563\u057D", "\u054D\u0565\u057A", "\u0540\u0578\u056F", "\u0546\u0574\u0562", "\u0534\u0565\u056F"],
            longhand: ["\u0540\u0578\u0582\u0576\u057E\u0561\u0580", "\u0553\u0565\u057F\u0580\u057E\u0561\u0580", "\u0544\u0561\u0580\u057F", "\u0531\u057A\u0580\u056B\u056C", "\u0544\u0561\u0575\u056B\u057D", "\u0540\u0578\u0582\u0576\u056B\u057D", "\u0540\u0578\u0582\u056C\u056B\u057D", "\u0555\u0563\u0578\u057D\u057F\u0578\u057D", "\u054D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580", "\u0540\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580", "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0534\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return ""
        },
        rangeSeparator: " \u2014 ",
        weekAbbreviation: "\u0547\u0532\u054F",
        scrollTitle: "\u0548\u056C\u0578\u0580\u0565\u0584\u055D \u0574\u0565\u056E\u0561\u0581\u0576\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580",
        toggleTitle: "\u054D\u0565\u0572\u0574\u0565\u0584\u055D \u0583\u0578\u056D\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580",
        amPM: ["\u0544\u053F", "\u053F\u0540"],
        yearAriaLabel: "\u054F\u0561\u0580\u056B",
        monthAriaLabel: "\u0531\u0574\u056B\u057D",
        hourAriaLabel: "\u053A\u0561\u0574",
        minuteAriaLabel: "\u0550\u0578\u057A\u0565",
        time_24hr: !0
    };
yE.l10ns.hy = bp;
var j4 = yE.l10ns;
var vE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Dp = {
        weekdays: {
            shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
            longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
            longhand: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        },
        firstDayOfWeek: 1,
        ordinal: () => "",
        time_24hr: !0,
        rangeSeparator: " - "
    };
vE.l10ns.id = Dp;
var G4 = vE.l10ns;
var wE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Sp = {
        weekdays: {
            shorthand: ["Sun", "M\xE1n", "\xDEri", "Mi\xF0", "Fim", "F\xF6s", "Lau"],
            longhand: ["Sunnudagur", "M\xE1nudagur", "\xDEri\xF0judagur", "Mi\xF0vikudagur", "Fimmtudagur", "F\xF6studagur", "Laugardagur"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Ma\xED", "J\xFAn", "J\xFAl", "\xC1g\xFA", "Sep", "Okt", "N\xF3v", "Des"],
            longhand: ["Jan\xFAar", "Febr\xFAar", "Mars", "Apr\xEDl", "Ma\xED", "J\xFAn\xED", "J\xFAl\xED", "\xC1g\xFAst", "September", "Okt\xF3ber", "N\xF3vember", "Desember"]
        },
        ordinal: () => ".",
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "vika",
        yearAriaLabel: "\xC1r",
        time_24hr: !0
    };
wE.l10ns.is = Sp;
var Z4 = wE.l10ns;
var bE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Ep = {
        weekdays: {
            shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            longhand: ["Domenica", "Luned\xEC", "Marted\xEC", "Mercoled\xEC", "Gioved\xEC", "Venerd\xEC", "Sabato"]
        },
        months: {
            shorthand: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            longhand: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
        },
        firstDayOfWeek: 1,
        ordinal: () => "\xB0",
        rangeSeparator: " al ",
        weekAbbreviation: "Se",
        scrollTitle: "Scrolla per aumentare",
        toggleTitle: "Clicca per cambiare",
        time_24hr: !0
    };
bE.l10ns.it = Ep;
var X4 = bE.l10ns;
var DE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    kp = {
        weekdays: {
            shorthand: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
            longhand: ["\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"]
        },
        months: {
            shorthand: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
            longhand: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"]
        },
        time_24hr: !0,
        rangeSeparator: " \u304B\u3089 ",
        monthAriaLabel: "\u6708",
        amPM: ["\u5348\u524D", "\u5348\u5F8C"],
        yearAriaLabel: "\u5E74",
        hourAriaLabel: "\u6642\u9593",
        minuteAriaLabel: "\u5206"
    };
DE.l10ns.ja = kp;
var tY = DE.l10ns;
var SE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    xp = {
        weekdays: {
            shorthand: ["\u10D9\u10D5", "\u10DD\u10E0", "\u10E1\u10D0", "\u10DD\u10D7", "\u10EE\u10E3", "\u10DE\u10D0", "\u10E8\u10D0"],
            longhand: ["\u10D9\u10D5\u10D8\u10E0\u10D0", "\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8", "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8"]
        },
        months: {
            shorthand: ["\u10D8\u10D0\u10DC", "\u10D7\u10D4\u10D1", "\u10DB\u10D0\u10E0", "\u10D0\u10DE\u10E0", "\u10DB\u10D0\u10D8", "\u10D8\u10D5\u10DC", "\u10D8\u10D5\u10DA", "\u10D0\u10D2\u10D5", "\u10E1\u10D4\u10E5", "\u10DD\u10E5\u10E2", "\u10DC\u10DD\u10D4", "\u10D3\u10D4\u10D9"],
            longhand: ["\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8", "\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8", "\u10DB\u10D0\u10E0\u10E2\u10D8", "\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8", "\u10DB\u10D0\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8", "\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD", "\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return ""
        },
        rangeSeparator: " \u2014 ",
        weekAbbreviation: "\u10D9\u10D5.",
        scrollTitle: "\u10D3\u10D0\u10E1\u10E5\u10E0\u10DD\u10DA\u10D4\u10D7 \u10D2\u10D0\u10E1\u10D0\u10D3\u10D8\u10D3\u10D4\u10D1\u10DA\u10D0\u10D3",
        toggleTitle: "\u10D3\u10D0\u10D0\u10D9\u10DA\u10D8\u10D9\u10D4\u10D7 \u10D2\u10D0\u10D3\u10D0\u10E0\u10D7\u10D5\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1",
        amPM: ["AM", "PM"],
        yearAriaLabel: "\u10EC\u10D4\u10DA\u10D8",
        time_24hr: !0
    };
SE.l10ns.ka = xp;
var rY = SE.l10ns;
var EE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Cp = {
        weekdays: {
            shorthand: ["\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799", "\u1785\u1793\u17D2\u1791", "\u17A2\u1784\u17D2\u1782\u17B6\u179A", "\u1796\u17BB\u1792", "\u1796\u17D2\u179A\u17A0\u179F.", "\u179F\u17BB\u1780\u17D2\u179A", "\u179F\u17C5\u179A\u17CD"],
            longhand: ["\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799", "\u1785\u1793\u17D2\u1791", "\u17A2\u1784\u17D2\u1782\u17B6\u179A", "\u1796\u17BB\u1792", "\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD", "\u179F\u17BB\u1780\u17D2\u179A", "\u179F\u17C5\u179A\u17CD"]
        },
        months: {
            shorthand: ["\u1798\u1780\u179A\u17B6", "\u1780\u17BB\u1798\u17D2\u1797\u17C7", "\u1798\u17B8\u1793\u17B6", "\u1798\u17C1\u179F\u17B6", "\u17A7\u179F\u1797\u17B6", "\u1798\u17B7\u1790\u17BB\u1793\u17B6", "\u1780\u1780\u17D2\u1780\u178A\u17B6", "\u179F\u17B8\u17A0\u17B6", "\u1780\u1789\u17D2\u1789\u17B6", "\u178F\u17BB\u179B\u17B6", "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6", "\u1792\u17D2\u1793\u17BC"],
            longhand: ["\u1798\u1780\u179A\u17B6", "\u1780\u17BB\u1798\u17D2\u1797\u17C7", "\u1798\u17B8\u1793\u17B6", "\u1798\u17C1\u179F\u17B6", "\u17A7\u179F\u1797\u17B6", "\u1798\u17B7\u1790\u17BB\u1793\u17B6", "\u1780\u1780\u17D2\u1780\u178A\u17B6", "\u179F\u17B8\u17A0\u17B6", "\u1780\u1789\u17D2\u1789\u17B6", "\u178F\u17BB\u179B\u17B6", "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6", "\u1792\u17D2\u1793\u17BC"]
        },
        ordinal: () => "",
        firstDayOfWeek: 1,
        rangeSeparator: " \u178A\u179B\u17CB ",
        weekAbbreviation: "\u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD",
        scrollTitle: "\u179A\u17C6\u1780\u17B7\u179B\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1794\u1784\u17D2\u1780\u17BE\u1793",
        toggleTitle: "\u1785\u17BB\u1785\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178A\u17BC\u179A",
        yearAriaLabel: "\u1786\u17D2\u1793\u17B6\u17C6",
        time_24hr: !0
    };
EE.l10ns.km = Cp;
var aY = EE.l10ns;
var kE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    _p = {
        weekdays: {
            shorthand: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
            longhand: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"]
        },
        months: {
            shorthand: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
            longhand: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"]
        },
        ordinal: () => "\uC77C",
        rangeSeparator: " ~ ",
        amPM: ["\uC624\uC804", "\uC624\uD6C4"]
    };
kE.l10ns.ko = _p;
var sY = kE.l10ns;
var xE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Mp = {
        weekdays: {
            shorthand: ["\u0416\u0441", "\u0414\u0441", "\u0421c", "\u0421\u0440", "\u0411\u0441", "\u0416\u043C", "\u0421\u0431"],
            longhand: ["\u0416\u0435\u043A\u0441\u0435\u043D\u0431i", "\u0414\u04AF\u0439\u0441\u0435\u043D\u0431i", "\u0421\u0435\u0439\u0441\u0435\u043D\u0431i", "\u0421\u04D9\u0440\u0441\u0435\u043D\u0431i", "\u0411\u0435\u0439\u0441\u0435\u043D\u0431i", "\u0416\u04B1\u043C\u0430", "\u0421\u0435\u043D\u0431i"]
        },
        months: {
            shorthand: ["\u049A\u0430\u04A3", "\u0410\u049B\u043F", "\u041D\u0430\u0443", "\u0421\u04D9\u0443", "\u041C\u0430\u043C", "\u041C\u0430\u0443", "\u0428i\u043B", "\u0422\u0430\u043C", "\u049A\u044B\u0440", "\u049A\u0430\u0437", "\u049A\u0430\u0440", "\u0416\u0435\u043B"],
            longhand: ["\u049A\u0430\u04A3\u0442\u0430\u0440", "\u0410\u049B\u043F\u0430\u043D", "\u041D\u0430\u0443\u0440\u044B\u0437", "\u0421\u04D9\u0443i\u0440", "\u041C\u0430\u043C\u044B\u0440", "\u041C\u0430\u0443\u0441\u044B\u043C", "\u0428i\u043B\u0434\u0435", "\u0422\u0430\u043C\u044B\u0437", "\u049A\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049A\u0430\u0437\u0430\u043D", "\u049A\u0430\u0440\u0430\u0448\u0430", "\u0416\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return ""
        },
        rangeSeparator: " \u2014 ",
        weekAbbreviation: "\u0410\u043F\u0442\u0430",
        scrollTitle: "\u04AE\u043B\u043A\u0435\u0439\u0442\u0443 \u04AF\u0448\u0456\u043D \u0430\u0439\u043D\u0430\u043B\u0434\u044B\u0440\u044B\u04A3\u044B\u0437",
        toggleTitle: "\u0410\u0443\u044B\u0441\u0442\u044B\u0440\u0443 \u04AF\u0448\u0456\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
        amPM: ["\u0422\u0414", "\u0422\u041A"],
        yearAriaLabel: "\u0416\u044B\u043B"
    };
xE.l10ns.kz = Mp;
var uY = xE.l10ns;
var CE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Tp = {
        weekdays: {
            shorthand: ["S", "Pr", "A", "T", "K", "Pn", "\u0160"],
            longhand: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre\u010Diadienis", "Ketvirtadienis", "Penktadienis", "\u0160e\u0161tadienis"]
        },
        months: {
            shorthand: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rgp", "Rgs", "Spl", "Lap", "Grd"],
            longhand: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu\u017E\u0117", "Bir\u017Eelis", "Liepa", "Rugpju\u0304tis", "Rugse\u0307jis", "Spalis", "Lapkritis", "Gruodis"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return "-a"
        },
        rangeSeparator: " iki ",
        weekAbbreviation: "Sav",
        scrollTitle: "Keisti laik\u0105 pel\u0117s rateliu",
        toggleTitle: "Perjungti laiko format\u0105",
        time_24hr: !0
    };
CE.l10ns.lt = Tp;
var dY = CE.l10ns;
var _E = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Fp = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
            longhand: ["Sv\u0113tdiena", "Pirmdiena", "Otrdiena", "Tre\u0161diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "J\u016Bn", "J\u016Bl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            longhand: ["Janv\u0101ris", "Febru\u0101ris", "Marts", "Apr\u012Blis", "Maijs", "J\u016Bnijs", "J\u016Blijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"]
        },
        rangeSeparator: " l\u012Bdz ",
        time_24hr: !0
    };
_E.l10ns.lv = Fp;
var hY = _E.l10ns;
var ME = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Ip = {
        weekdays: {
            shorthand: ["\u041D\u0435", "\u041F\u043E", "\u0412\u0442", "\u0421\u0440", "\u0427\u0435", "\u041F\u0435", "\u0421\u0430"],
            longhand: ["\u041D\u0435\u0434\u0435\u043B\u0430", "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0412\u0442\u043E\u0440\u043D\u0438\u043A", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u043E\u043A", "\u041F\u0435\u0442\u043E\u043A", "\u0421\u0430\u0431\u043E\u0442\u0430"]
        },
        months: {
            shorthand: ["\u0408\u0430\u043D", "\u0424\u0435\u0432", "\u041C\u0430\u0440", "\u0410\u043F\u0440", "\u041C\u0430\u0458", "\u0408\u0443\u043D", "\u0408\u0443\u043B", "\u0410\u0432\u0433", "\u0421\u0435\u043F", "\u041E\u043A\u0442", "\u041D\u043E\u0435", "\u0414\u0435\u043A"],
            longhand: ["\u0408\u0430\u043D\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0438\u043B", "\u041C\u0430\u0458", "\u0408\u0443\u043D\u0438", "\u0408\u0443\u043B\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u041D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "\u041D\u0435\u0434.",
        rangeSeparator: " \u0434\u043E ",
        time_24hr: !0
    };
ME.l10ns.mk = Ip;
var pY = ME.l10ns;
var TE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Ap = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F", "\u041D\u044F"],
            longhand: ["\u0414\u0430\u0432\u0430\u0430", "\u041C\u044F\u0433\u043C\u0430\u0440", "\u041B\u0445\u0430\u0433\u0432\u0430", "\u041F\u04AF\u0440\u044D\u0432", "\u0411\u0430\u0430\u0441\u0430\u043D", "\u0411\u044F\u043C\u0431\u0430", "\u041D\u044F\u043C"]
        },
        months: {
            shorthand: ["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"],
            longhand: ["\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0417\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0414\u043E\u043B\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0432\u0430\u043D\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0432\u0430\u043D\u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"]
        },
        rangeSeparator: "-\u0441 ",
        time_24hr: !0
    };
TE.l10ns.mn = Ap;
var yY = TE.l10ns;
var tN = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    FE = {
        weekdays: {
            shorthand: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
            longhand: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
            longhand: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"]
        },
        firstDayOfWeek: 1,
        ordinal: () => ""
    },
    wY = tN.l10ns;
var IE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Op = {
        weekdays: {
            shorthand: ["\u1014\u103D\u1031", "\u101C\u102C", "\u1002\u102B", "\u101F\u1030\u1038", "\u1000\u103C\u102C", "\u101E\u1031\u102C", "\u1014\u1031"],
            longhand: ["\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031", "\u1010\u1014\u1004\u103A\u1039\u101C\u102C", "\u1021\u1004\u103A\u1039\u1002\u102B", "\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038", "\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038", "\u101E\u1031\u102C\u1000\u103C\u102C", "\u1005\u1014\u1031"]
        },
        months: {
            shorthand: ["\u1007\u1014\u103A", "\u1016\u1031", "\u1019\u1010\u103A", "\u1015\u103C\u102E", "\u1019\u1031", "\u1007\u103D\u1014\u103A", "\u101C\u102D\u102F\u1004\u103A", "\u101E\u103C", "\u1005\u1000\u103A", "\u1021\u1031\u102C\u1000\u103A", "\u1014\u102D\u102F", "\u1012\u102E"],
            longhand: ["\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E", "\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E", "\u1019\u1010\u103A", "\u1027\u1015\u103C\u102E", "\u1019\u1031", "\u1007\u103D\u1014\u103A", "\u1007\u1030\u101C\u102D\u102F\u1004\u103A", "\u101E\u103C\u1002\u102F\u1010\u103A", "\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C", "\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C", "\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C", "\u1012\u102E\u1007\u1004\u103A\u1018\u102C"]
        },
        firstDayOfWeek: 1,
        ordinal: () => "",
        time_24hr: !0
    };
IE.l10ns.my = Op;
var DY = IE.l10ns;
var AE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Lp = {
        weekdays: {
            shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            longhand: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
        },
        months: {
            shorthand: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sept", "okt", "nov", "dec"],
            longhand: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "wk",
        rangeSeparator: " t/m ",
        scrollTitle: "Scroll voor volgende / vorige",
        toggleTitle: "Klik om te wisselen",
        time_24hr: !0,
        ordinal: e => e === 1 || e === 8 || e >= 20 ? "ste" : "de"
    };
AE.l10ns.nl = Lp;
var EY = AE.l10ns;
var OE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Pp = {
        weekdays: {
            shorthand: ["S\xF8.", "M\xE5.", "Ty.", "On.", "To.", "Fr.", "La."],
            longhand: ["S\xF8ndag", "M\xE5ndag", "Tysdag", "Onsdag", "Torsdag", "Fredag", "Laurdag"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mars", "Apr", "Mai", "Juni", "Juli", "Aug", "Sep", "Okt", "Nov", "Des"],
            longhand: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "Veke",
        scrollTitle: "Scroll for \xE5 endre",
        toggleTitle: "Klikk for \xE5 veksle",
        time_24hr: !0,
        ordinal: () => "."
    };
OE.l10ns.nn = Pp;
var xY = OE.l10ns;
var LE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Np = {
        weekdays: {
            shorthand: ["S\xF8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xF8r"],
            longhand: ["S\xF8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xF8rdag"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            longhand: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "Uke",
        scrollTitle: "Scroll for \xE5 endre",
        toggleTitle: "Klikk for \xE5 veksle",
        time_24hr: !0,
        ordinal: () => "."
    };
LE.l10ns.no = Np;
var _Y = LE.l10ns;
var PE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Rp = {
        weekdays: {
            shorthand: ["\u0A10\u0A24", "\u0A38\u0A4B\u0A2E", "\u0A2E\u0A70\u0A17\u0A32", "\u0A2C\u0A41\u0A71\u0A27", "\u0A35\u0A40\u0A30", "\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30", "\u0A38\u0A3C\u0A28\u0A3F\u0A71\u0A1A\u0A30"],
            longhand: ["\u0A10\u0A24\u0A35\u0A3E\u0A30", "\u0A38\u0A4B\u0A2E\u0A35\u0A3E\u0A30", "\u0A2E\u0A70\u0A17\u0A32\u0A35\u0A3E\u0A30", "\u0A2C\u0A41\u0A71\u0A27\u0A35\u0A3E\u0A30", "\u0A35\u0A40\u0A30\u0A35\u0A3E\u0A30", "\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30\u0A35\u0A3E\u0A30", "\u0A38\u0A3C\u0A28\u0A3F\u0A71\u0A1A\u0A30\u0A35\u0A3E\u0A30"]
        },
        months: {
            shorthand: ["\u0A1C\u0A28", "\u0A2B\u0A3C\u0A30", "\u0A2E\u0A3E\u0A30", "\u0A05\u0A2A\u0A4D\u0A30\u0A48", "\u0A2E\u0A08", "\u0A1C\u0A42\u0A28", "\u0A1C\u0A41\u0A32\u0A3E", "\u0A05\u0A17", "\u0A38\u0A24\u0A70", "\u0A05\u0A15", "\u0A28\u0A35\u0A70", "\u0A26\u0A38\u0A70"],
            longhand: ["\u0A1C\u0A28\u0A35\u0A30\u0A40", "\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40", "\u0A2E\u0A3E\u0A30\u0A1A", "\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32", "\u0A2E\u0A08", "\u0A1C\u0A42\u0A28", "\u0A1C\u0A41\u0A32\u0A3E\u0A08", "\u0A05\u0A17\u0A38\u0A24", "\u0A38\u0A24\u0A70\u0A2C\u0A30", "\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30", "\u0A28\u0A35\u0A70\u0A2C\u0A30", "\u0A26\u0A38\u0A70\u0A2C\u0A30"]
        },
        time_24hr: !0
    };
PE.l10ns.pa = Rp;
var TY = PE.l10ns;
var NE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Hp = {
        weekdays: {
            shorthand: ["Nd", "Pn", "Wt", "\u015Ar", "Cz", "Pt", "So"],
            longhand: ["Niedziela", "Poniedzia\u0142ek", "Wtorek", "\u015Aroda", "Czwartek", "Pi\u0105tek", "Sobota"]
        },
        months: {
            shorthand: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa\u017A", "Lis", "Gru"],
            longhand: ["Stycze\u0144", "Luty", "Marzec", "Kwiecie\u0144", "Maj", "Czerwiec", "Lipiec", "Sierpie\u0144", "Wrzesie\u0144", "Pa\u017Adziernik", "Listopad", "Grudzie\u0144"]
        },
        rangeSeparator: " do ",
        weekAbbreviation: "tydz.",
        scrollTitle: "Przewi\u0144, aby zwi\u0119kszy\u0107",
        toggleTitle: "Kliknij, aby prze\u0142\u0105czy\u0107",
        firstDayOfWeek: 1,
        time_24hr: !0,
        ordinal: () => "."
    };
NE.l10ns.pl = Hp;
var IY = NE.l10ns;
var RE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Bp = {
        weekdays: {
            shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xE1b"],
            longhand: ["Domingo", "Segunda-feira", "Ter\xE7a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\xE1bado"]
        },
        months: {
            shorthand: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            longhand: ["Janeiro", "Fevereiro", "Mar\xE7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        },
        rangeSeparator: " at\xE9 ",
        time_24hr: !0
    };
RE.l10ns.pt = Bp;
var OY = RE.l10ns;
var HE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Vp = {
        weekdays: {
            shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\xE2m"],
            longhand: ["Duminic\u0103", "Luni", "Mar\u021Bi", "Miercuri", "Joi", "Vineri", "S\xE2mb\u0103t\u0103"]
        },
        months: {
            shorthand: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
            longhand: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
        },
        firstDayOfWeek: 1,
        time_24hr: !0,
        ordinal: () => ""
    };
HE.l10ns.ro = Vp;
var PY = HE.l10ns;
var BE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    $p = {
        weekdays: {
            shorthand: ["\u0412\u0441", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
            longhand: ["\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0412\u0442\u043E\u0440\u043D\u0438\u043A", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041F\u044F\u0442\u043D\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"]
        },
        months: {
            shorthand: ["\u042F\u043D\u0432", "\u0424\u0435\u0432", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433", "\u0421\u0435\u043D", "\u041E\u043A\u0442", "\u041D\u043E\u044F", "\u0414\u0435\u043A"],
            longhand: ["\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B\u044C", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u041E\u043A\u0442\u044F\u0431\u0440\u044C", "\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return ""
        },
        rangeSeparator: " \u2014 ",
        weekAbbreviation: "\u041D\u0435\u0434.",
        scrollTitle: "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0435 \u0434\u043B\u044F \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F",
        toggleTitle: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
        amPM: ["\u0414\u041F", "\u041F\u041F"],
        yearAriaLabel: "\u0413\u043E\u0434",
        time_24hr: !0
    };
BE.l10ns.ru = $p;
var RY = BE.l10ns;
var VE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Up = {
        weekdays: {
            shorthand: ["\u0D89", "\u0DC3", "\u0D85", "\u0DB6", "\u0DB6\u0DCA\u200D\u0DBB", "\u0DC3\u0DD2", "\u0DC3\u0DD9"],
            longhand: ["\u0D89\u0DBB\u0DD2\u0DAF\u0DCF", "\u0DC3\u0DB3\u0DD4\u0DAF\u0DCF", "\u0D85\u0D9F\u0DC4\u0DBB\u0DD4\u0DC0\u0DCF\u0DAF\u0DCF", "\u0DB6\u0DAF\u0DCF\u0DAF\u0DCF", "\u0DB6\u0DCA\u200D\u0DBB\u0DC4\u0DC3\u0DCA\u0DB4\u0DAD\u0DD2\u0DB1\u0DCA\u0DAF\u0DCF", "\u0DC3\u0DD2\u0D9A\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF", "\u0DC3\u0DD9\u0DB1\u0DC3\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF"]
        },
        months: {
            shorthand: ["\u0DA2\u0DB1", "\u0DB4\u0DD9\u0DB6", "\u0DB8\u0DCF\u0DBB\u0DCA", "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA", "\u0DB8\u0DD0\u0DBA\u0DD2", "\u0DA2\u0DD4\u0DB1\u0DD2", "\u0DA2\u0DD6\u0DBD\u0DD2", "\u0D85\u0D9C\u0DDD", "\u0DC3\u0DD0\u0DB4\u0DCA", "\u0D94\u0D9A\u0DCA", "\u0DB1\u0DDC\u0DC0\u0DD0", "\u0DAF\u0DD9\u0DC3\u0DD0"],
            longhand: ["\u0DA2\u0DB1\u0DC0\u0DCF\u0DBB\u0DD2", "\u0DB4\u0DD9\u0DB6\u0DBB\u0DC0\u0DCF\u0DBB\u0DD2", "\u0DB8\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4", "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA\u0DBD\u0DCA", "\u0DB8\u0DD0\u0DBA\u0DD2", "\u0DA2\u0DD4\u0DB1\u0DD2", "\u0DA2\u0DD6\u0DBD\u0DD2", "\u0D85\u0D9C\u0DDD\u0DC3\u0DCA\u0DAD\u0DD4", "\u0DC3\u0DD0\u0DB4\u0DCA\u0DAD\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA", "\u0D94\u0D9A\u0DCA\u0DAD\u0DDD\u0DB6\u0DBB\u0DCA", "\u0DB1\u0DDC\u0DC0\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA", "\u0DAF\u0DD9\u0DC3\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA"]
        },
        time_24hr: !0
    };
VE.l10ns.si = Up;
var BY = VE.l10ns;
var $E = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Wp = {
        weekdays: {
            shorthand: ["Ned", "Pon", "Ut", "Str", "\u0160tv", "Pia", "Sob"],
            longhand: ["Nede\u013Ea", "Pondelok", "Utorok", "Streda", "\u0160tvrtok", "Piatok", "Sobota"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "M\xE1j", "J\xFAn", "J\xFAl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            longhand: ["Janu\xE1r", "Febru\xE1r", "Marec", "Apr\xEDl", "M\xE1j", "J\xFAn", "J\xFAl", "August", "September", "Okt\xF3ber", "November", "December"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " do ",
        time_24hr: !0,
        ordinal: function() {
            return "."
        }
    };
$E.l10ns.sk = Wp;
var $Y = $E.l10ns;
var UE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Yp = {
        weekdays: {
            shorthand: ["Ned", "Pon", "Tor", "Sre", "\u010Cet", "Pet", "Sob"],
            longhand: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "\u010Cetrtek", "Petek", "Sobota"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            longhand: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " do ",
        time_24hr: !0,
        ordinal: function() {
            return "."
        }
    };
UE.l10ns.sl = Yp;
var WY = UE.l10ns;
var WE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    zp = {
        weekdays: {
            shorthand: ["Di", "H\xEB", "Ma", "M\xEB", "En", "Pr", "Sh"],
            longhand: ["E Diel", "E H\xEBn\xEB", "E Mart\xEB", "E M\xEBrkur\xEB", "E Enjte", "E Premte", "E Shtun\xEB"]
        },
        months: {
            shorthand: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "N\xEBn", "Dhj"],
            longhand: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xEBntor", "Dhjetor"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " deri ",
        weekAbbreviation: "Java",
        yearAriaLabel: "Viti",
        monthAriaLabel: "Muaji",
        hourAriaLabel: "Ora",
        minuteAriaLabel: "Minuta",
        time_24hr: !0
    };
WE.l10ns.sq = zp;
var zY = WE.l10ns;
var YE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Kp = {
        weekdays: {
            shorthand: ["Ned", "Pon", "Uto", "Sre", "\u010Cet", "Pet", "Sub"],
            longhand: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010Cetvrtak", "Petak", "Subota"]
        },
        months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            longhand: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "Ned.",
        rangeSeparator: " do ",
        time_24hr: !0
    };
YE.l10ns.sr = Kp;
var jY = YE.l10ns;
var zE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    jp = {
        firstDayOfWeek: 1,
        weekAbbreviation: "v",
        weekdays: {
            shorthand: ["s\xF6n", "m\xE5n", "tis", "ons", "tor", "fre", "l\xF6r"],
            longhand: ["s\xF6ndag", "m\xE5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\xF6rdag"]
        },
        months: {
            shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            longhand: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
        },
        rangeSeparator: " till ",
        time_24hr: !0,
        ordinal: () => "."
    };
zE.l10ns.sv = jp;
var GY = zE.l10ns;
var KE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    qp = {
        weekdays: {
            shorthand: ["\u0E2D\u0E32", "\u0E08", "\u0E2D", "\u0E1E", "\u0E1E\u0E24", "\u0E28", "\u0E2A"],
            longhand: ["\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C", "\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C", "\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23", "\u0E1E\u0E38\u0E18", "\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35", "\u0E28\u0E38\u0E01\u0E23\u0E4C", "\u0E40\u0E2A\u0E32\u0E23\u0E4C"]
        },
        months: {
            shorthand: ["\u0E21.\u0E04.", "\u0E01.\u0E1E.", "\u0E21\u0E35.\u0E04.", "\u0E40\u0E21.\u0E22.", "\u0E1E.\u0E04.", "\u0E21\u0E34.\u0E22.", "\u0E01.\u0E04.", "\u0E2A.\u0E04.", "\u0E01.\u0E22.", "\u0E15.\u0E04.", "\u0E1E.\u0E22.", "\u0E18.\u0E04."],
            longhand: ["\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21", "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C", "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21", "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19", "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21", "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19", "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21", "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21", "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19", "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21", "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19", "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " \u0E16\u0E36\u0E07 ",
        scrollTitle: "\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E14",
        toggleTitle: "\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19",
        time_24hr: !0,
        ordinal: () => ""
    };
KE.l10ns.th = qp;
var ZY = KE.l10ns;
var jE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Gp = {
        weekdays: {
            shorthand: ["Paz", "Pzt", "Sal", "\xC7ar", "Per", "Cum", "Cmt"],
            longhand: ["Pazar", "Pazartesi", "Sal\u0131", "\xC7ar\u015Famba", "Per\u015Fembe", "Cuma", "Cumartesi"]
        },
        months: {
            shorthand: ["Oca", "\u015Eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011Fu", "Eyl", "Eki", "Kas", "Ara"],
            longhand: ["Ocak", "\u015Eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011Fustos", "Eyl\xFCl", "Ekim", "Kas\u0131m", "Aral\u0131k"]
        },
        firstDayOfWeek: 1,
        ordinal: () => ".",
        rangeSeparator: " - ",
        weekAbbreviation: "Hf",
        scrollTitle: "Art\u0131rmak i\xE7in kayd\u0131r\u0131n",
        toggleTitle: "A\xE7/Kapa",
        amPM: ["\xD6\xD6", "\xD6S"],
        time_24hr: !0
    };
jE.l10ns.tr = Gp;
var XY = jE.l10ns;
var qE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Jp = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["\u041D\u0434", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
            longhand: ["\u041D\u0435\u0434\u0456\u043B\u044F", "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A", "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F", "\u0421\u0443\u0431\u043E\u0442\u0430"]
        },
        months: {
            shorthand: ["\u0421\u0456\u0447", "\u041B\u044E\u0442", "\u0411\u0435\u0440", "\u041A\u0432\u0456", "\u0422\u0440\u0430", "\u0427\u0435\u0440", "\u041B\u0438\u043F", "\u0421\u0435\u0440", "\u0412\u0435\u0440", "\u0416\u043E\u0432", "\u041B\u0438\u0441", "\u0413\u0440\u0443"],
            longhand: ["\u0421\u0456\u0447\u0435\u043D\u044C", "\u041B\u044E\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C", "\u041A\u0432\u0456\u0442\u0435\u043D\u044C", "\u0422\u0440\u0430\u0432\u0435\u043D\u044C", "\u0427\u0435\u0440\u0432\u0435\u043D\u044C", "\u041B\u0438\u043F\u0435\u043D\u044C", "\u0421\u0435\u0440\u043F\u0435\u043D\u044C", "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C", "\u0416\u043E\u0432\u0442\u0435\u043D\u044C", "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043D\u044C"]
        },
        time_24hr: !0
    };
qE.l10ns.uk = Jp;
var tz = qE.l10ns;
var GE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Zp = {
        weekdays: {
            shorthand: ["\u042F\u043A\u0448", "\u0414\u0443\u0448", "\u0421\u0435\u0448", "\u0427\u043E\u0440", "\u041F\u0430\u0439", "\u0416\u0443\u043C", "\u0428\u0430\u043D"],
            longhand: ["\u042F\u043A\u0448\u0430\u043D\u0431\u0430", "\u0414\u0443\u0448\u0430\u043D\u0431\u0430", "\u0421\u0435\u0448\u0430\u043D\u0431\u0430", "\u0427\u043E\u0440\u0448\u0430\u043D\u0431\u0430", "\u041F\u0430\u0439\u0448\u0430\u043D\u0431\u0430", "\u0416\u0443\u043C\u0430", "\u0428\u0430\u043D\u0431\u0430"]
        },
        months: {
            shorthand: ["\u042F\u043D\u0432", "\u0424\u0435\u0432", "\u041C\u0430\u0440", "\u0410\u043F\u0440", "\u041C\u0430\u0439", "\u0418\u044E\u043D", "\u0418\u044E\u043B", "\u0410\u0432\u0433", "\u0421\u0435\u043D", "\u041E\u043A\u0442", "\u041D\u043E\u044F", "\u0414\u0435\u043A"],
            longhand: ["\u042F\u043D\u0432\u0430\u0440", "\u0424\u0435\u0432\u0440\u0430\u043B", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B", "\u041C\u0430\u0439", "\u0418\u044E\u043D", "\u0418\u044E\u043B", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440", "\u041E\u043A\u0442\u044F\u0431\u0440", "\u041D\u043E\u044F\u0431\u0440", "\u0414\u0435\u043A\u0430\u0431\u0440"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return ""
        },
        rangeSeparator: " \u2014 ",
        weekAbbreviation: "\u04B2\u0430\u0444\u0442\u0430",
        scrollTitle: "\u041A\u0430\u0442\u0442\u0430\u043B\u0430\u0448\u0442\u0438\u0440\u0438\u0448 \u0443\u0447\u0443\u043D \u0430\u0439\u043B\u0430\u043D\u0442\u0438\u0440\u0438\u043D\u0433",
        toggleTitle: "\u040E\u0442\u0438\u0448 \u0443\u0447\u0443\u043D \u0431\u043E\u0441\u0438\u043D\u0433",
        amPM: ["AM", "PM"],
        yearAriaLabel: "\u0419\u0438\u043B",
        time_24hr: !0
    };
GE.l10ns.uz = Zp;
var rz = GE.l10ns;
var JE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Qp = {
        weekdays: {
            shorthand: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
            longhand: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
        },
        months: {
            shorthand: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"],
            longhand: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
        },
        firstDayOfWeek: 1,
        ordinal: function() {
            return ""
        },
        rangeSeparator: " \u2014 ",
        weekAbbreviation: "Hafta",
        scrollTitle: "Kattalashtirish uchun aylantiring",
        toggleTitle: "O\u2018tish uchun bosing",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Yil",
        time_24hr: !0
    };
JE.l10ns.uz_latn = Qp;
var az = JE.l10ns;
var ZE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    Xp = {
        weekdays: {
            shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            longhand: ["Ch\u1EE7 nh\u1EADt", "Th\u1EE9 hai", "Th\u1EE9 ba", "Th\u1EE9 t\u01B0", "Th\u1EE9 n\u0103m", "Th\u1EE9 s\xE1u", "Th\u1EE9 b\u1EA3y"]
        },
        months: {
            shorthand: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
            longhand: ["Th\xE1ng m\u1ED9t", "Th\xE1ng hai", "Th\xE1ng ba", "Th\xE1ng t\u01B0", "Th\xE1ng n\u0103m", "Th\xE1ng s\xE1u", "Th\xE1ng b\u1EA3y", "Th\xE1ng t\xE1m", "Th\xE1ng ch\xEDn", "Th\xE1ng m\u01B0\u1EDDi", "Th\xE1ng m\u01B0\u1EDDi m\u1ED9t", "Th\xE1ng m\u01B0\u1EDDi hai"]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " \u0111\u1EBFn "
    };
ZE.l10ns.vn = Xp;
var sz = ZE.l10ns;
var QE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    eg = {
        weekdays: {
            shorthand: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
            longhand: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"]
        },
        months: {
            shorthand: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
            longhand: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]
        },
        rangeSeparator: " \u81F3 ",
        weekAbbreviation: "\u5468",
        scrollTitle: "\u6EDA\u52A8\u5207\u6362",
        toggleTitle: "\u70B9\u51FB\u5207\u6362 12/24 \u5C0F\u65F6\u65F6\u5236"
    };
QE.l10ns.zh = eg;
var uz = QE.l10ns;
var XE = typeof window != "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
    },
    tg = {
        weekdays: {
            shorthand: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"],
            longhand: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"]
        },
        months: {
            shorthand: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
            longhand: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]
        },
        rangeSeparator: " \u81F3 ",
        weekAbbreviation: "\u9031",
        scrollTitle: "\u6EFE\u52D5\u5207\u63DB",
        toggleTitle: "\u9EDE\u64CA\u5207\u63DB 12/24 \u5C0F\u6642\u6642\u5236"
    };
XE.l10ns.zh_tw = tg;
var dz = XE.l10ns;
var nN = {
        ar: Gm,
        at: Jm,
        az: Zm,
        be: Qm,
        bg: Xm,
        bn: ep,
        bs: tp,
        ca: Wc,
        ckb: rp,
        cat: Wc,
        cs: ip,
        cy: ap,
        da: op,
        de: sp,
        default: {
            ...so
        },
        en: so,
        eo: lp,
        es: up,
        et: cp,
        fa: dp,
        fi: fp,
        fo: hp,
        fr: mp,
        gr: pp,
        he: gp,
        hi: yp,
        hr: vp,
        hu: wp,
        hy: bp,
        id: Dp,
        is: Sp,
        it: Ep,
        ja: kp,
        ka: xp,
        ko: _p,
        km: Cp,
        kz: Mp,
        lt: Tp,
        lv: Fp,
        mk: Ip,
        mn: Ap,
        ms: FE,
        my: Op,
        nl: Lp,
        nn: Pp,
        no: Np,
        pa: Rp,
        pl: Hp,
        pt: Bp,
        ro: Vp,
        ru: $p,
        si: Up,
        sk: Wp,
        sl: Yp,
        sq: zp,
        sr: Kp,
        sv: jp,
        th: qp,
        tr: Gp,
        uk: Jp,
        vn: Xp,
        zh: eg,
        zh_tw: tg,
        uz: Zp,
        uz_latn: Qp
    },
    nn = nN;
var tk = {
        ar: nn.ar,
        cs: nn.cs,
        da: nn.da,
        de: nn.de,
        en: nn.en,
        "en-gb": nn.en,
        es: nn.es,
        fr: nn.fr,
        hi: nn.hi,
        id: nn.id,
        it: nn.it,
        ja: nn.ja,
        ko: nn.ko,
        nl: nn.nl,
        nn: nn.no,
        pl: nn.pl,
        pt: nn.pt,
        "pt-br": nn.pt,
        ro: nn.ro,
        ru: nn.ru,
        tr: nn.tr,
        "zh-cn": nn.zh,
        "zh-tw": nn.zh_tw
    },
    rN = tk[ek.moment.locale()];

function zc(e) {
    let t = e == null ? void 0 : e.getSetting("date-picker-week-start"),
        r = rN || tk.en;
    return t ? {
        ...r,
        firstDayOfWeek: t
    } : r
}
var Kc = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
    ka = {
        _disable: [],
        allowInput: !1,
        allowInvalidPreload: !1,
        altFormat: "F j, Y",
        altInput: !1,
        altInputClass: "form-control input",
        animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: !0,
        clickOpens: !0,
        closeOnSelect: !0,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: !1,
        enableSeconds: !1,
        enableTime: !1,
        errorHandler: e => typeof console != "undefined" && console.warn(e),
        getWeek: e => {
            let t = new Date(e.getTime());
            t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
            let r = new Date(t.getFullYear(), 0, 4);
            return 1 + Math.round(((t.getTime() - r.getTime()) / 864e5 - 3 + (r.getDay() + 6) % 7) / 7)
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: !1,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: !1,
        now: new Date,
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: void 0,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: !1,
        showMonths: 1,
        static: !1,
        time_24hr: !1,
        weekNumbers: !1,
        wrap: !1,
        win: window
    };
var er = (e, t = 2) => `000${e}`.slice(t * -1),
    wr = e => e === !0 ? 1 : 0;

function ng(e, t, r) {
    let n;
    return function() {
        let i = arguments;
        r.clearTimeout(n), n = r.setTimeout(() => e.apply(this, i), t)
    }
}
var jc = e => Array.isArray(e) ? e : [e];
var rg = () => {},
    Pl = (e, t, r) => r.months[t ? "shorthand" : "longhand"][e],
    nk = {
        D: rg,
        F: function(e, t, r) {
            e.setMonth(r.months.longhand.indexOf(t))
        },
        G: (e, t) => {
            e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t))
        },
        H: (e, t) => {
            e.setHours(parseFloat(t))
        },
        J: (e, t) => {
            e.setDate(parseFloat(t))
        },
        K: (e, t, r) => {
            e.setHours(e.getHours() % 12 + 12 * wr(new RegExp(r.amPM[1], "i").test(t)))
        },
        M: function(e, t, r) {
            e.setMonth(r.months.shorthand.indexOf(t))
        },
        S: (e, t) => {
            e.setSeconds(parseFloat(t))
        },
        U: (e, t) => new Date(parseFloat(t) * 1e3),
        W: function(e, t, r) {
            let n = parseInt(t),
                i = new Date(e.getFullYear(), 0, 2 + (n - 1) * 7, 0, 0, 0, 0);
            return i.setDate(i.getDate() - i.getDay() + r.firstDayOfWeek), i
        },
        Y: (e, t) => {
            e.setFullYear(parseFloat(t))
        },
        Z: (e, t) => new Date(t),
        d: (e, t) => {
            e.setDate(parseFloat(t))
        },
        h: (e, t) => {
            e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t))
        },
        i: (e, t) => {
            e.setMinutes(parseFloat(t))
        },
        j: (e, t) => {
            e.setDate(parseFloat(t))
        },
        l: rg,
        m: (e, t) => {
            e.setMonth(parseFloat(t) - 1)
        },
        n: (e, t) => {
            e.setMonth(parseFloat(t) - 1)
        },
        s: (e, t) => {
            e.setSeconds(parseFloat(t))
        },
        u: (e, t) => new Date(parseFloat(t)),
        w: rg,
        y: (e, t) => {
            e.setFullYear(2e3 + parseFloat(t))
        }
    },
    Gi = {
        D: "",
        F: "",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    },
    ds = {
        Z: e => e.toISOString(),
        D: function(e, t, r) {
            return t.weekdays.shorthand[ds.w(e, t, r)]
        },
        F: function(e, t, r) {
            return Pl(ds.n(e, t, r) - 1, !1, t)
        },
        G: function(e, t, r) {
            return er(ds.h(e, t, r))
        },
        H: e => er(e.getHours()),
        J: function(e, t) {
            return t.ordinal !== void 0 ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
        },
        K: (e, t) => t.amPM[wr(e.getHours() > 11)],
        M: function(e, t) {
            return Pl(e.getMonth(), !0, t)
        },
        S: e => er(e.getSeconds()),
        U: e => e.getTime() / 1e3,
        W: function(e, t, r) {
            return r.getWeek(e)
        },
        Y: e => er(e.getFullYear(), 4),
        d: e => er(e.getDate()),
        h: e => e.getHours() % 12 ? e.getHours() % 12 : 12,
        i: e => er(e.getMinutes()),
        j: e => e.getDate(),
        l: function(e, t) {
            return t.weekdays.longhand[e.getDay()]
        },
        m: e => er(e.getMonth() + 1),
        n: e => e.getMonth() + 1,
        s: e => e.getSeconds(),
        u: e => e.getTime(),
        w: e => e.getDay(),
        y: e => String(e.getFullYear()).substring(2)
    };
var ig = ({
        config: e = ka,
        l10n: t = so,
        isMobile: r = !1
    }) => (n, i, a) => {
        let o = a || t;
        return e.formatDate !== void 0 && !r ? e.formatDate(n, i, o) : i.split("").map((s, u, l) => ds[s] && l[u - 1] !== "\\" ? ds[s](n, o, e) : s !== "\\" ? s : "").join("")
    },
    qc = ({
        config: e = ka,
        l10n: t = so
    }) => (r, n, i, a) => {
        if (r !== 0 && !r) return;
        let o = a || t,
            s, u = r;
        if (r.getDate) s = new Date(r.getTime());
        else if (typeof r != "string" && r.toFixed !== void 0) s = new Date(r);
        else if (typeof r == "string") {
            let l = n || (e || ka).dateFormat,
                c = String(r).trim();
            if (c === "today") s = new Date, i = !0;
            else if (e && e.parseDate) s = e.parseDate(r, l);
            else if (/Z$/.test(c) || /GMT$/.test(c)) s = new Date(r);
            else {
                let d, m = [];
                for (let h = 0, g = 0, y = ""; h < l.length; h++) {
                    let v = l[h],
                        D = v === "\\",
                        I = l[h - 1] === "\\" || D;
                    if (Gi[v] && !I) {
                        y += Gi[v];
                        let C = new RegExp(y).exec(r);
                        C && (d = !0) && m[v !== "Y" ? "push" : "unshift"]({
                            fn: nk[v],
                            val: C[++g]
                        })
                    } else D || (y += ".")
                }
                s = !e || !e.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0)), m.forEach(({
                    fn: h,
                    val: g
                }) => s = h(s, g, o) || s), s = d ? s : void 0
            }
        }
        if (!(s.getDate && !isNaN(s.getTime()))) {
            e.errorHandler(new Error(`Invalid date provided: ${u}`));
            return
        }
        return i === !0 && s.setHours(0, 0, 0, 0), s
    };

function br(e, t, r = !0) {
    return r !== !1 ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
}
var rk = (e, t, r) => e > Math.min(t, r) && e < Math.max(t, r),
    Gc = (e, t, r) => e * 3600 + t * 60 + r,
    ik = e => {
        let t = Math.floor(e / 3600),
            r = (e - t * 3600) / 60;
        return [t, r, e - t * 3600 - r * 60]
    },
    ak = {
        DAY: 864e5
    };

function Jc(e) {
    let t = e.defaultHour,
        r = e.defaultMinute,
        n = e.defaultSeconds;
    if (e.minDate !== void 0) {
        let i = e.minDate.getHours(),
            a = e.minDate.getMinutes(),
            o = e.minDate.getSeconds();
        t < i && (t = i), t === i && r < a && (r = a), t === i && r === a && n < o && (n = e.minDate.getSeconds())
    }
    if (e.maxDate !== void 0) {
        let i = e.maxDate.getHours(),
            a = e.maxDate.getMinutes();
        t = Math.min(t, i), t === i && (r = Math.min(a, r)), t === i && r === a && (n = e.maxDate.getSeconds())
    }
    return {
        hours: t,
        minutes: r,
        seconds: n
    }
}

function tr(e, t, r) {
    if (r === !0) return e.classList.add(t);
    e.classList.remove(t)
}

function Pt(e, t, r, n) {
    let i = e.createElement(t);
    return r = r || "", n = n || "", i.className = r, n !== void 0 && (i.textContent = n), i
}

function Nl(e) {
    for (; e.firstChild;) e.removeChild(e.firstChild)
}

function ag(e, t) {
    if (t(e)) return e;
    if (e.parentNode) return ag(e.parentNode, t)
}

function Rl(e, t, r) {
    let n = Pt(e, "div", "numInputWrapper"),
        i = Pt(e, "input", "numInput " + t),
        a = Pt(e, "span", "arrowUp"),
        o = Pt(e, "span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? i.type = "number" : (i.type = "text", i.pattern = "\\d*"), r !== void 0)
        for (let s in r) i.setAttribute(s, r[s]);
    return n.appendChild(i), n.appendChild(a), n.appendChild(o), n
}

function Dr(e) {
    try {
        return typeof e.composedPath == "function" ? e.composedPath()[0] : e.target
    } catch (t) {
        return e.target
    }
}
var iN = 300;

function aN(e, t) {
    let r = e.win || window,
        n = {
            config: {
                ...ka,
                ...Fn.defaultConfig
            },
            l10n: Yc
        };
    n.parseDate = qc({
        config: n.config,
        l10n: n.l10n
    }), n._handlers = [], n.pluginElements = [], n.loadedPlugins = [], n._bind = v, n._setHoursFromDate = h, n._positionCalendar = Vt, n.changeMonth = it, n.changeYear = vt, n.clear = N, n.close = Ze, n.onMouseOver = gn, n._createElement = Pt, n.createDay = P, n.destroy = It, n.isEnabled = Wt, n.jumpToDate = C, n.updateValue = de, n.open = vn, n.redraw = Bt, n.set = Z, n.setDate = Ie, n.toggle = ar;

    function i() {
        n.utils = {
            getDaysInMonth(M = n.currentMonth, H = n.currentYear) {
                return M === 1 && (H % 4 === 0 && H % 100 !== 0 || H % 400 === 0) ? 29 : n.l10n.daysInMonth[M]
            }
        }
    }

    function a() {
        n.element = n.input = e, n.isOpen = !1, jn(), Rt(), Cn(), Dt(), i(), n.isMobile || A(), I(), (n.selectedDates.length || n.config.noCalendar) && (n.config.enableTime && h(n.config.noCalendar ? n.latestSelectedDateObj : void 0), de(!1)), u();
        let M = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        !n.isMobile && M && Vt(), ht("onReady")
    }

    function o() {
        var M;
        return ((M = n.calendarContainer) == null ? void 0 : M.getRootNode()).activeElement || n.element.doc.activeElement
    }

    function s(M) {
        return M.bind(n)
    }

    function u() {
        let M = n.config;
        M.weekNumbers === !1 && M.showMonths === 1 || M.noCalendar !== !0 && r.requestAnimationFrame(function() {
            if (n.calendarContainer !== void 0 && (n.calendarContainer.style.visibility = "hidden", n.calendarContainer.style.display = "block"), n.daysContainer !== void 0) {
                let H = (n.days.offsetWidth + 1) * M.showMonths;
                n.daysContainer.style.width = H + "px", n.calendarContainer.style.width = H + (n.weekWrapper !== void 0 ? n.weekWrapper.offsetWidth : 0) + "px", n.calendarContainer.style.removeProperty("visibility"), n.calendarContainer.style.removeProperty("display")
            }
        })
    }

    function l(M) {
        if (n.selectedDates.length === 0) {
            let q = n.config.minDate === void 0 || br(new Date, n.config.minDate) >= 0 ? new Date : new Date(n.config.minDate.getTime()),
                ie = Jc(n.config);
            q.setHours(ie.hours, ie.minutes, ie.seconds, q.getMilliseconds()), n.selectedDates = [q], n.latestSelectedDateObj = q
        }
        M !== void 0 && M.type !== "blur" && ge(M);
        let H = n._input.value;
        m(), de(), n._input.value !== H && n._debouncedChange()
    }

    function c(M, H) {
        return M % 12 + 12 * wr(H === n.l10n.amPM[1])
    }

    function d(M) {
        switch (M % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return M % 12
        }
    }

    function m() {
        if (n.hourElement === void 0 || n.minuteElement === void 0) return;
        let M = (parseInt(n.hourElement.value.slice(-2), 10) || 0) % 24,
            H = (parseInt(n.minuteElement.value, 10) || 0) % 60,
            q = n.secondElement !== void 0 ? (parseInt(n.secondElement.value, 10) || 0) % 60 : 0;
        n.amPM !== void 0 && (M = c(M, n.amPM.textContent));
        let ie = n.config.minTime !== void 0 || n.config.minDate && n.minDateHasTime && n.latestSelectedDateObj && br(n.latestSelectedDateObj, n.config.minDate, !0) === 0,
            ye = n.config.maxTime !== void 0 || n.config.maxDate && n.maxDateHasTime && n.latestSelectedDateObj && br(n.latestSelectedDateObj, n.config.maxDate, !0) === 0;
        if (n.config.maxTime !== void 0 && n.config.minTime !== void 0 && n.config.minTime > n.config.maxTime) {
            let ce = Gc(n.config.minTime.getHours(), n.config.minTime.getMinutes(), n.config.minTime.getSeconds()),
                ae = Gc(n.config.maxTime.getHours(), n.config.maxTime.getMinutes(), n.config.maxTime.getSeconds()),
                Se = Gc(M, H, q);
            if (Se > ae && Se < ce) {
                let nt = ik(ce);
                M = nt[0], H = nt[1], q = nt[2]
            }
        } else {
            if (ye) {
                let ce = n.config.maxTime !== void 0 ? n.config.maxTime : n.config.maxDate;
                M = Math.min(M, ce.getHours()), M === ce.getHours() && (H = Math.min(H, ce.getMinutes())), H === ce.getMinutes() && (q = Math.min(q, ce.getSeconds()))
            }
            if (ie) {
                let ce = n.config.minTime !== void 0 ? n.config.minTime : n.config.minDate;
                M = Math.max(M, ce.getHours()), M === ce.getHours() && H < ce.getMinutes() && (H = ce.getMinutes()), H === ce.getMinutes() && (q = Math.max(q, ce.getSeconds()))
            }
        }
        g(M, H, q)
    }

    function h(M) {
        let H = M || n.latestSelectedDateObj;
        H && H.getHours && g(H.getHours(), H.getMinutes(), H.getSeconds())
    }

    function g(M, H, q) {
        n.latestSelectedDateObj !== void 0 && n.latestSelectedDateObj.setHours(M % 24, H, q || 0, 0), !(!n.hourElement || !n.minuteElement || n.isMobile) && (n.hourElement.value = er(n.config.time_24hr ? M : (12 + M) % 12 + 12 * wr(M % 12 === 0)), n.minuteElement.value = er(H), n.amPM !== void 0 && (n.amPM.textContent = n.l10n.amPM[wr(M >= 12)]), n.secondElement !== void 0 && (n.secondElement.value = er(q)))
    }

    function y(M) {
        let H = Dr(M),
            q = parseInt(H.value) + (M.delta || 0);
        (q / 1e3 > 1 || M.key === "Enter" && !/[^\d]/.test(q.toString())) && vt(q)
    }

    function v(M, H, q, ie) {
        if (Array.isArray(H)) return H.forEach(ye => v(M, ye, q, ie));
        if (Array.isArray(M)) return M.forEach(ye => v(ye, H, q, ie));
        M.addEventListener(H, q, ie), n._handlers.push({
            remove: () => M.removeEventListener(H, q, ie)
        })
    }

    function D() {
        ht("onChange")
    }

    function I() {
        if (n.config.wrap && ["open", "close", "toggle", "clear"].forEach(H => {
                Array.prototype.forEach.call(n.element.querySelectorAll(`[data-${H}]`), q => v(q, "click", n[H]))
            }), n.isMobile) {
            Ht();
            return
        }
        let M = ng(yn, 50, r);
        if (n._debouncedChange = ng(D, iN, r), n.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && v(n.daysContainer, "mouseover", H => {
                n.config.mode === "range" && gn(Dr(H))
            }), v(n._input, "keydown", en), n.calendarContainer !== void 0 && v(n.calendarContainer, "keydown", en), !n.config.inline && !n.config.static && v(r, "resize", M), r.ontouchstart !== void 0 ? v(r.document, "touchstart", jt) : v(r.document, "mousedown", jt), v(r.document, "focus", jt, {
                capture: !0
            }), n.config.clickOpens === !0 && (v(n._input, "focus", n.open), v(n._input, "click", n.open)), n.daysContainer !== void 0 && (v(n.monthNav, "click", ve), v(n.monthNav, ["keyup", "increment"], y), v(n.daysContainer, "click", rn)), n.timeContainer !== void 0 && n.minuteElement !== void 0 && n.hourElement !== void 0) {
            let H = q => Dr(q).select();
            v(n.timeContainer, ["increment"], l), v(n.timeContainer, "blur", l, {
                capture: !0
            }), v(n.timeContainer, "click", x), v([n.hourElement, n.minuteElement], ["focus", "click"], H), n.secondElement !== void 0 && v(n.secondElement, "focus", () => n.secondElement && n.secondElement.select()), n.amPM !== void 0 && v(n.amPM, "click", q => {
                l(q)
            })
        }
        n.config.allowInput && v(n._input, "blur", Jt)
    }

    function C(M, H) {
        let q = M !== void 0 ? n.parseDate(M) : n.latestSelectedDateObj || (n.config.minDate && n.config.minDate > n.now ? n.config.minDate : n.config.maxDate && n.config.maxDate < n.now ? n.config.maxDate : n.now),
            ie = n.currentYear,
            ye = n.currentMonth;
        try {
            q !== void 0 && (n.currentYear = q.getFullYear(), n.currentMonth = q.getMonth())
        } catch (ce) {
            ce.message = "Invalid date supplied: " + q, n.config.errorHandler(ce)
        }
        H && n.currentYear !== ie && (ht("onYearChange"), re()), H && (n.currentYear !== ie || n.currentMonth !== ye) && ht("onMonthChange"), n.redraw()
    }

    function x(M) {
        let H = Dr(M);
        ~H.className.indexOf("arrow") && O(M, H.classList.contains("arrowUp") ? 1 : -1)
    }

    function O(M, H, q) {
        let ie = M && Dr(M),
            ye = q || ie && ie.parentNode && ie.parentNode.firstChild,
            ce = St("increment");
        ce.delta = H, ye && ye.dispatchEvent(ce)
    }

    function A() {
        let M = r.document.createDocumentFragment();
        if (n.calendarContainer = Pt(r.document, "div", "flatpickr-calendar"), n.calendarContainer.tabIndex = -1, !n.config.noCalendar) {
            if (M.appendChild(pe()), n.innerContainer = Pt(r.document, "div", "flatpickr-innerContainer"), n.config.weekNumbers) {
                let {
                    weekWrapper: q,
                    weekNumbers: ie
                } = Je();
                n.innerContainer.appendChild(q), n.weekNumbers = ie, n.weekWrapper = q
            }
            n.rContainer = Pt(r.document, "div", "flatpickr-rContainer"), n.rContainer.appendChild(Ce()), n.daysContainer || (n.daysContainer = Pt(r.document, "div", "flatpickr-days"), n.daysContainer.tabIndex = -1), te(), n.rContainer.appendChild(n.daysContainer), n.innerContainer.appendChild(n.rContainer), M.appendChild(n.innerContainer)
        }
        n.config.enableTime && M.appendChild(De()), tr(n.calendarContainer, "rangeMode", n.config.mode === "range"), tr(n.calendarContainer, "animate", n.config.animate === !0), tr(n.calendarContainer, "multiMonth", n.config.showMonths > 1), n.calendarContainer.appendChild(M);
        let H = n.config.appendTo !== void 0 && n.config.appendTo.nodeType !== void 0;
        if ((n.config.inline || n.config.static) && (n.calendarContainer.classList.add(n.config.inline ? "inline" : "static"), n.config.inline && (!H && n.element.parentNode ? n.element.parentNode.insertBefore(n.calendarContainer, n._input.nextSibling) : n.config.appendTo !== void 0 && n.config.appendTo.appendChild(n.calendarContainer)), n.config.static)) {
            let q = Pt(r.document, "div", "flatpickr-wrapper");
            n.element.parentNode && n.element.parentNode.insertBefore(q, n.element), q.appendChild(n.element), n.altInput && q.appendChild(n.altInput), q.appendChild(n.calendarContainer)
        }!n.config.static && !n.config.inline && (n.config.appendTo !== void 0 ? n.config.appendTo : r.document.body).appendChild(n.calendarContainer)
    }

    function P(M, H, q, ie) {
        let ye = Wt(H, !0),
            ce = Pt(r.document, "span", M, H.getDate().toString());
        return ce.dateObj = H, ce.$i = ie, ce.setAttribute("aria-label", n.formatDate(H, n.config.ariaDateFormat)), M.indexOf("hidden") === -1 && br(H, n.now) === 0 && (n.todayDateElem = ce, ce.classList.add("today"), ce.setAttribute("aria-current", "date")), ye ? (ce.tabIndex = -1, L(H) && (ce.classList.add("selected"), n.selectedDateElem = ce, n.config.mode === "range" && (tr(ce, "startRange", n.selectedDates[0] && br(H, n.selectedDates[0], !0) === 0), tr(ce, "endRange", n.selectedDates[1] && br(H, n.selectedDates[1], !0) === 0), M === "nextMonthDay" && ce.classList.add("inRange")))) : ce.classList.add("flatpickr-disabled"), n.config.mode === "range" && K(H) && !L(H) && ce.classList.add("inRange"), n.weekNumbers && n.config.showMonths === 1 && M !== "prevMonthDay" && ie % 7 === 6 && n.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + n.config.getWeek(H) + "</span>"), ht("onDayCreate", ce), ce
    }

    function B(M) {
        M.focus(), n.config.mode === "range" && gn(M)
    }

    function G(M) {
        let H = M > 0 ? 0 : n.config.showMonths - 1,
            q = M > 0 ? n.config.showMonths : -1;
        for (let ie = H; ie != q; ie += M) {
            let ye = n.daysContainer.children[ie],
                ce = M > 0 ? 0 : ye.children.length - 1,
                ae = M > 0 ? ye.children.length : -1;
            for (let Se = ce; Se != ae; Se += M) {
                let nt = ye.children[Se];
                if (nt.className.indexOf("hidden") === -1 && Wt(nt.dateObj)) return nt
            }
        }
    }

    function J(M, H) {
        let q = M.className.indexOf("Month") === -1 ? M.dateObj.getMonth() : n.currentMonth,
            ie = H > 0 ? n.config.showMonths : -1,
            ye = H > 0 ? 1 : -1;
        for (let ce = q - n.currentMonth; ce != ie; ce += ye) {
            let ae = n.daysContainer.children[ce],
                Se = q - n.currentMonth === ce ? M.$i + H : H < 0 ? ae.children.length - 1 : 0,
                nt = ae.children.length;
            for (let Te = Se; Te >= 0 && Te < nt && Te != (H > 0 ? nt : -1); Te += ye) {
                let Ue = ae.children[Te];
                if (Ue.className.indexOf("hidden") === -1 && Wt(Ue.dateObj) && Math.abs(M.$i - Te) >= Math.abs(H)) return B(Ue)
            }
        }
        n.changeMonth(ye), Q(G(ye), 0)
    }

    function Q(M, H) {
        let q = o(),
            ie = Tt(q || n.element.doc.body),
            ye = M !== void 0 ? M : ie ? q : n.selectedDateElem !== void 0 && Tt(n.selectedDateElem) ? n.selectedDateElem : n.todayDateElem !== void 0 && Tt(n.todayDateElem) ? n.todayDateElem : G(H > 0 ? 1 : -1);
        ye === void 0 ? n._input.focus() : ie ? J(ye, H) : B(ye)
    }

    function oe(M, H) {
        let q = (new Date(M, H, 1).getDay() - n.l10n.firstDayOfWeek + 7) % 7,
            ie = n.utils.getDaysInMonth((H - 1 + 12) % 12, M),
            ye = n.utils.getDaysInMonth(H, M),
            ce = r.document.createDocumentFragment(),
            ae = n.config.showMonths > 1,
            Se = ae ? "prevMonthDay hidden" : "prevMonthDay",
            nt = ae ? "nextMonthDay hidden" : "nextMonthDay",
            Te = ie + 1 - q,
            Ue = 0;
        for (; Te <= ie; Te++, Ue++) ce.appendChild(P(`flatpickr-day ${Se}`, new Date(M, H - 1, Te), Te, Ue));
        for (Te = 1; Te <= ye; Te++, Ue++) ce.appendChild(P("flatpickr-day", new Date(M, H, Te), Te, Ue));
        for (let Ft = ye + 1; Ft <= 42 - q && (n.config.showMonths === 1 || Ue % 7 !== 0); Ft++, Ue++) ce.appendChild(P(`flatpickr-day ${nt}`, new Date(M, H + 1, Ft % ye), Ft, Ue));
        let We = Pt(r.document, "div", "dayContainer");
        return We.appendChild(ce), We
    }

    function te() {
        if (n.daysContainer === void 0) return;
        Nl(n.daysContainer), n.weekNumbers && Nl(n.weekNumbers);
        let M = n.element.doc.createDocumentFragment();
        for (let H = 0; H < n.config.showMonths; H++) {
            let q = new Date(n.currentYear, n.currentMonth, 1);
            q.setMonth(n.currentMonth + H), M.appendChild(oe(q.getFullYear(), q.getMonth()))
        }
        n.daysContainer.appendChild(M), n.days = n.daysContainer.firstChild, n.config.mode === "range" && n.selectedDates.length === 1 && gn()
    }

    function re() {
        if (n.config.showMonths > 1 || n.config.monthSelectorType !== "dropdown") return;
        let M = function(H) {
            return n.config.minDate !== void 0 && n.currentYear === n.config.minDate.getFullYear() && H < n.config.minDate.getMonth() ? !1 : !(n.config.maxDate !== void 0 && n.currentYear === n.config.maxDate.getFullYear() && H > n.config.maxDate.getMonth())
        };
        n.monthsDropdownContainer.tabIndex = -1, n.monthsDropdownContainer.innerHTML = "";
        for (let H = 0; H < 12; H++) {
            if (!M(H)) continue;
            let q = Pt(r.document, "option", "flatpickr-monthDropdown-month");
            q.value = new Date(n.currentYear, H).getMonth().toString(), q.textContent = Pl(H, n.config.shorthandCurrentMonth, n.l10n), q.tabIndex = -1, n.currentMonth === H && (q.selected = !0), n.monthsDropdownContainer.appendChild(q)
        }
    }

    function ne() {
        let M = Pt(r.document, "div", "flatpickr-month"),
            H = r.document.createDocumentFragment(),
            q;
        n.config.showMonths > 1 || n.config.monthSelectorType === "static" ? q = Pt(r.document, "span", "cur-month") : (n.monthsDropdownContainer = Pt(r.document, "select", "flatpickr-monthDropdown-months"), n.monthsDropdownContainer.setAttribute("aria-label", n.l10n.monthAriaLabel), v(n.monthsDropdownContainer, "change", ae => {
            let Se = Dr(ae),
                nt = parseInt(Se.value, 10);
            n.changeMonth(nt - n.currentMonth), ht("onMonthChange")
        }), re(), q = n.monthsDropdownContainer);
        let ie = Rl(r.document, "cur-year", {
                tabindex: "-1"
            }),
            ye = ie.getElementsByTagName("input")[0];
        ye.setAttribute("aria-label", n.l10n.yearAriaLabel), n.config.minDate && ye.setAttribute("min", n.config.minDate.getFullYear().toString()), n.config.maxDate && (ye.setAttribute("max", n.config.maxDate.getFullYear().toString()), ye.disabled = !!n.config.minDate && n.config.minDate.getFullYear() === n.config.maxDate.getFullYear());
        let ce = Pt(r.document, "div", "flatpickr-current-month");
        return ce.appendChild(q), ce.appendChild(ie), H.appendChild(ce), M.appendChild(H), {
            container: M,
            yearElement: ye,
            monthElement: q
        }
    }

    function be() {
        Nl(n.monthNav), n.monthNav.appendChild(n.prevMonthNav), n.config.showMonths && (n.yearElements = [], n.monthElements = []);
        for (let M = n.config.showMonths; M--;) {
            let H = ne();
            n.yearElements.push(H.yearElement), n.monthElements.push(H.monthElement), n.monthNav.appendChild(H.container)
        }
        n.monthNav.appendChild(n.nextMonthNav)
    }

    function pe() {
        return n.monthNav = Pt(r.document, "div", "flatpickr-months"), n.yearElements = [], n.monthElements = [], n.prevMonthNav = Pt(r.document, "span", "flatpickr-prev-month"), n.prevMonthNav.innerHTML = n.config.prevArrow, n.nextMonthNav = Pt(r.document, "span", "flatpickr-next-month"), n.nextMonthNav.innerHTML = n.config.nextArrow, be(), Object.defineProperty(n, "_hidePrevMonthArrow", {
            get: () => n.__hidePrevMonthArrow,
            set(M) {
                n.__hidePrevMonthArrow !== M && (tr(n.prevMonthNav, "flatpickr-disabled", M), n.__hidePrevMonthArrow = M)
            }
        }), Object.defineProperty(n, "_hideNextMonthArrow", {
            get: () => n.__hideNextMonthArrow,
            set(M) {
                n.__hideNextMonthArrow !== M && (tr(n.nextMonthNav, "flatpickr-disabled", M), n.__hideNextMonthArrow = M)
            }
        }), n.currentYearElement = n.yearElements[0], ee(), n.monthNav
    }

    function De() {
        n.calendarContainer.classList.add("hasTime"), n.config.noCalendar && n.calendarContainer.classList.add("noCalendar");
        let M = Jc(n.config);
        n.timeContainer = Pt(r.document, "div", "flatpickr-time"), n.timeContainer.tabIndex = -1;
        let H = Pt(r.document, "span", "flatpickr-time-separator", ":"),
            q = Rl(r.document, "flatpickr-hour", {
                "aria-label": n.l10n.hourAriaLabel
            });
        n.hourElement = q.getElementsByTagName("input")[0];
        let ie = Rl(r.document, "flatpickr-minute", {
            "aria-label": n.l10n.minuteAriaLabel
        });
        if (n.minuteElement = ie.getElementsByTagName("input")[0], n.hourElement.tabIndex = n.minuteElement.tabIndex = -1, n.hourElement.value = er(n.latestSelectedDateObj ? n.latestSelectedDateObj.getHours() : n.config.time_24hr ? M.hours : d(M.hours)), n.minuteElement.value = er(n.latestSelectedDateObj ? n.latestSelectedDateObj.getMinutes() : M.minutes), n.hourElement.setAttribute("step", n.config.hourIncrement.toString()), n.minuteElement.setAttribute("step", n.config.minuteIncrement.toString()), n.hourElement.setAttribute("min", n.config.time_24hr ? "0" : "1"), n.hourElement.setAttribute("max", n.config.time_24hr ? "23" : "12"), n.hourElement.setAttribute("maxlength", "2"), n.minuteElement.setAttribute("min", "0"), n.minuteElement.setAttribute("max", "59"), n.minuteElement.setAttribute("maxlength", "2"), n.timeContainer.appendChild(q), n.timeContainer.appendChild(H), n.timeContainer.appendChild(ie), n.config.time_24hr && n.timeContainer.classList.add("time24hr"), n.config.enableSeconds) {
            n.timeContainer.classList.add("hasSeconds");
            let ye = Rl(r.document, "flatpickr-second");
            n.secondElement = ye.getElementsByTagName("input")[0], n.secondElement.value = er(n.latestSelectedDateObj ? n.latestSelectedDateObj.getSeconds() : M.seconds), n.secondElement.setAttribute("step", n.minuteElement.getAttribute("step")), n.secondElement.setAttribute("min", "0"), n.secondElement.setAttribute("max", "59"), n.secondElement.setAttribute("maxlength", "2"), n.timeContainer.appendChild(Pt(r.document, "span", "flatpickr-time-separator", ":")), n.timeContainer.appendChild(ye)
        }
        return n.config.time_24hr || (n.amPM = Pt(r.document, "span", "flatpickr-am-pm", n.l10n.amPM[wr((n.latestSelectedDateObj ? parseInt(n.hourElement.value) : n.config.defaultHour) > 11)]), n.amPM.title = n.l10n.toggleTitle, n.amPM.tabIndex = -1, n.timeContainer.appendChild(n.amPM)), n.timeContainer
    }

    function Ce() {
        n.weekdayContainer ? Nl(n.weekdayContainer) : n.weekdayContainer = Pt(r.document, "div", "flatpickr-weekdays");
        for (let M = n.config.showMonths; M--;) {
            let H = Pt(r.document, "div", "flatpickr-weekdaycontainer");
            n.weekdayContainer.appendChild(H)
        }
        return U(), n.weekdayContainer
    }

    function U() {
        if (!n.weekdayContainer) return;
        let M = n.l10n.firstDayOfWeek,
            H = [...n.l10n.weekdays.shorthand];
        M > 0 && M < H.length && (H = [...H.splice(M, H.length), ...H.splice(0, M)]);
        for (let q = n.config.showMonths; q--;) n.weekdayContainer.children[q].innerHTML = `
      <span class='flatpickr-weekday'>
        ${H.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `
    }

    function Je() {
        n.calendarContainer.classList.add("hasWeeks");
        let M = Pt(r.document, "div", "flatpickr-weekwrapper");
        M.appendChild(Pt(r.document, "span", "flatpickr-weekday", n.l10n.weekAbbreviation));
        let H = Pt(r.document, "div", "flatpickr-weeks");
        return M.appendChild(H), {
            weekWrapper: M,
            weekNumbers: H
        }
    }

    function it(M, H = !0) {
        let q = H ? M : M - n.currentMonth;
        q < 0 && n._hidePrevMonthArrow === !0 || q > 0 && n._hideNextMonthArrow === !0 || (n.currentMonth += q, (n.currentMonth < 0 || n.currentMonth > 11) && (n.currentYear += n.currentMonth > 11 ? 1 : -1, n.currentMonth = (n.currentMonth + 12) % 12, ht("onYearChange"), re()), te(), ht("onMonthChange"), ee())
    }

    function N(M = !0, H = !0) {
        if (n.input.value = "", n.altInput !== void 0 && (n.altInput.value = ""), n.mobileInput !== void 0 && (n.mobileInput.value = ""), n.selectedDates = [], n.latestSelectedDateObj = void 0, H === !0 && (n.currentYear = n._initialDate.getFullYear(), n.currentMonth = n._initialDate.getMonth()), n.config.enableTime === !0) {
            let {
                hours: q,
                minutes: ie,
                seconds: ye
            } = Jc(n.config);
            g(q, ie, ye)
        }
        n.redraw(), M && ht("onChange")
    }

    function Ze() {
        n.isOpen = !1, n.isMobile || (n.calendarContainer !== void 0 && n.calendarContainer.classList.remove("open"), n._input !== void 0 && n._input.classList.remove("active")), ht("onClose")
    }

    function It() {
        n.config !== void 0 && ht("onDestroy");
        for (let M = n._handlers.length; M--;) n._handlers[M].remove();
        if (n._handlers = [], n.mobileInput) n.mobileInput.parentNode && n.mobileInput.parentNode.removeChild(n.mobileInput), n.mobileInput = void 0;
        else if (n.calendarContainer && n.calendarContainer.parentNode)
            if (n.config.static && n.calendarContainer.parentNode) {
                let M = n.calendarContainer.parentNode;
                if (M.lastChild && M.removeChild(M.lastChild), M.parentNode) {
                    for (; M.firstChild;) M.parentNode.insertBefore(M.firstChild, M);
                    M.parentNode.removeChild(M)
                }
            } else n.calendarContainer.parentNode.removeChild(n.calendarContainer);
        n.altInput && (n.input.type = "text", n.altInput.parentNode && n.altInput.parentNode.removeChild(n.altInput), delete n.altInput), n.input && (n.input.type = n.input._type, n.input.classList.remove("flatpickr-input"), n.input.removeAttribute("readonly")), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(M => {
            try {
                delete n[M]
            } catch (H) {}
        })
    }

    function Mt(M) {
        return n.calendarContainer.contains(M)
    }

    function jt(M) {
        if (n.isOpen && !n.config.inline) {
            let H = Dr(M),
                q = Mt(H),
                ye = !(H === n.input || H === n.altInput || n.element.contains(H) || M.path && M.path.indexOf && (~M.path.indexOf(n.input) || ~M.path.indexOf(n.altInput))) && !q && !Mt(M.relatedTarget),
                ce = !n.config.ignoredFocusElements.some(ae => ae.contains(H));
            ye && ce && (n.config.allowInput && n.setDate(n._input.value, !1, n.config.altInput ? n.config.altFormat : n.config.dateFormat), n.timeContainer !== void 0 && n.minuteElement !== void 0 && n.hourElement !== void 0 && n.input.value !== "" && n.input.value !== void 0 && l(), n.close(), n.config && n.config.mode === "range" && n.selectedDates.length === 1 && n.clear(!1))
        }
    }

    function vt(M) {
        if (!M || n.config.minDate && M < n.config.minDate.getFullYear() || n.config.maxDate && M > n.config.maxDate.getFullYear()) return;
        let H = M,
            q = n.currentYear !== H;
        n.currentYear = H || n.currentYear, n.config.maxDate && n.currentYear === n.config.maxDate.getFullYear() ? n.currentMonth = Math.min(n.config.maxDate.getMonth(), n.currentMonth) : n.config.minDate && n.currentYear === n.config.minDate.getFullYear() && (n.currentMonth = Math.max(n.config.minDate.getMonth(), n.currentMonth)), q && (n.redraw(), ht("onYearChange"), re())
    }

    function Wt(M, H = !0) {
        var ce;
        let q = n.parseDate(M, void 0, H);
        if (n.config.minDate && q && br(q, n.config.minDate, H !== void 0 ? H : !n.minDateHasTime) < 0 || n.config.maxDate && q && br(q, n.config.maxDate, H !== void 0 ? H : !n.maxDateHasTime) > 0) return !1;
        if (!n.config.enable && n.config.disable.length === 0) return !0;
        if (q === void 0) return !1;
        let ie = !!n.config.enable,
            ye = (ce = n.config.enable) != null ? ce : n.config.disable;
        for (let ae = 0, Se; ae < ye.length; ae++) {
            if (Se = ye[ae], typeof Se == "function" && Se(q)) return ie;
            if (Se.getTime && q !== void 0 && Se.getTime() === q.getTime()) return ie;
            if (typeof Se == "string") {
                let nt = n.parseDate(Se, void 0, !0);
                return nt && nt.getTime() === q.getTime() ? ie : !ie
            } else if (typeof Se == "object" && q !== void 0 && Se.from && Se.to && q.getTime() >= Se.from.getTime() && q.getTime() <= Se.to.getTime()) return ie
        }
        return !ie
    }

    function Tt(M) {
        return n.daysContainer !== void 0 ? M.className.indexOf("hidden") === -1 && M.className.indexOf("flatpickr-disabled") === -1 && n.daysContainer.contains(M) : !1
    }

    function Jt(M) {
        let H = M.target === n._input,
            q = n._input.value.trimEnd() !== ue();
        H && q && !(M.relatedTarget && Mt(M.relatedTarget)) && n.setDate(n._input.value, !0, M.target === n.altInput ? n.config.altFormat : n.config.dateFormat)
    }

    function en(M) {
        let H = Dr(M),
            q = n.config.wrap ? e.contains(H) : H === n._input,
            ie = n.config.allowInput,
            ye = n.isOpen && (!ie || !q),
            ce = n.config.inline && q && !ie;
        if (M.keyCode === 13 && q) {
            if (ie) return n.setDate(n._input.value, !0, H === n.altInput ? n.config.altFormat : n.config.dateFormat), n.close(), H.blur();
            n.open()
        } else if (Mt(H) || ye || ce) {
            let ae = !!n.timeContainer && n.timeContainer.contains(H);
            switch (M.keyCode) {
                case 13:
                    ae ? (M.preventDefault(), l(), Hr()) : rn(M);
                    break;
                case 27:
                    M.preventDefault(), Hr();
                    break;
                case 8:
                case 46:
                    q && !n.config.allowInput && (M.preventDefault(), n.clear());
                    break;
                case 37:
                case 39:
                    if (!ae && !q) {
                        M.preventDefault();
                        let Se = o();
                        if (n.daysContainer !== void 0 && (ie === !1 || Se && Tt(Se))) {
                            let nt = M.keyCode === 39 ? 1 : -1;
                            M.ctrlKey ? (M.stopPropagation(), it(nt), Q(G(1), 0)) : Q(void 0, nt)
                        }
                    } else n.hourElement && n.hourElement.focus();
                    break;
                case 38:
                case 40: {
                    M.preventDefault();
                    let Se = M.keyCode === 40 ? 1 : -1;
                    n.daysContainer && H.$i !== void 0 || H === n.input || H === n.altInput ? M.ctrlKey ? (M.stopPropagation(), vt(n.currentYear - Se), Q(G(1), 0)) : ae || Q(void 0, Se * 7) : H === n.currentYearElement ? vt(n.currentYear - Se) : n.config.enableTime && (!ae && n.hourElement && n.hourElement.focus(), l(M), n._debouncedChange());
                    break
                }
                case 9:
                    if (ae) {
                        let Se = [n.hourElement, n.minuteElement, n.secondElement, n.amPM].concat(n.pluginElements).filter(Te => Te),
                            nt = Se.indexOf(H);
                        if (nt !== -1) {
                            let Te = Se[nt + (M.shiftKey ? -1 : 1)];
                            M.preventDefault(), (Te || n._input).focus()
                        }
                    } else !n.config.noCalendar && n.daysContainer && n.daysContainer.contains(H) && M.shiftKey && (M.preventDefault(), n._input.focus());
                    break;
                default:
                    break
            }
        }
        if (n.amPM !== void 0 && H === n.amPM) switch (M.key) {
            case n.l10n.amPM[0].charAt(0):
            case n.l10n.amPM[0].charAt(0).toLowerCase():
                n.amPM.textContent = n.l10n.amPM[0], m(), de();
                break;
            case n.l10n.amPM[1].charAt(0):
            case n.l10n.amPM[1].charAt(0).toLowerCase():
                n.amPM.textContent = n.l10n.amPM[1], m(), de();
                break
        }(q || Mt(H)) && ht("onKeyDown", M)
    }

    function gn(M, H = "flatpickr-day") {
        if (n.selectedDates.length !== 1 || M && (!M.classList.contains(H) || M.classList.contains("flatpickr-disabled"))) return;
        let q = M ? M.dateObj.getTime() : n.days.firstElementChild.dateObj.getTime(),
            ie = n.parseDate(n.selectedDates[0], void 0, !0).getTime(),
            ye = Math.min(q, n.selectedDates[0].getTime()),
            ce = Math.max(q, n.selectedDates[0].getTime()),
            ae = !1,
            Se = 0,
            nt = 0;
        for (let Ue = ye; Ue < ce; Ue += ak.DAY) Wt(new Date(Ue), !0) || (ae = ae || Ue > ye && Ue < ce, Ue < ie && (!Se || Ue > Se) ? Se = Ue : Ue > ie && (!nt || Ue < nt) && (nt = Ue));
        Array.from(n.rContainer.querySelectorAll(`*:nth-child(-n+${n.config.showMonths}) > .${H}`)).forEach(Ue => {
            let Ft = Ue.dateObj.getTime(),
                Hn = Se > 0 && Ft < Se || nt > 0 && Ft > nt;
            if (Hn) {
                Ue.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(Ot => {
                    Ue.classList.remove(Ot)
                });
                return
            } else if (ae && !Hn) return;
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(Ot => {
                Ue.classList.remove(Ot)
            }), M !== void 0 && (M.classList.add(q <= n.selectedDates[0].getTime() ? "startRange" : "endRange"), ie < q && Ft === ie ? Ue.classList.add("startRange") : ie > q && Ft === ie && Ue.classList.add("endRange"), Ft >= Se && (nt === 0 || Ft <= nt) && rk(Ft, ie, q) && Ue.classList.add("inRange"))
        })
    }

    function yn() {
        n.isOpen && !n.config.static && !n.config.inline && Vt()
    }

    function vn(M, H = n._positionElement) {
        if (n.isMobile === !0) {
            if (M) {
                M.preventDefault();
                let ie = Dr(M);
                ie && ie.blur()
            }
            n.mobileInput !== void 0 && (n.mobileInput.focus(), n.mobileInput.click()), ht("onOpen");
            return
        } else if (n._input.disabled || n.config.inline) return;
        let q = n.isOpen;
        n.isOpen = !0, q || (n.calendarContainer.classList.add("open"), n._input.classList.add("active"), ht("onOpen"), Vt(H)), n.config.enableTime === !0 && n.config.noCalendar === !0 && n.config.allowInput === !1 && (M === void 0 || !n.timeContainer.contains(M.relatedTarget)) && r.setTimeout(() => n.hourElement.select(), 50)
    }

    function xn(M) {
        return H => {
            let q = n.config[`_${M}Date`] = n.parseDate(H, n.config.dateFormat),
                ie = n.config[`_${M==="min"?"max":"min"}Date`];
            q !== void 0 && (n[M === "min" ? "minDateHasTime" : "maxDateHasTime"] = q.getHours() > 0 || q.getMinutes() > 0 || q.getSeconds() > 0), n.selectedDates && (n.selectedDates = n.selectedDates.filter(ye => Wt(ye)), !n.selectedDates.length && M === "min" && h(q), de()), n.daysContainer && (Bt(), q !== void 0 ? n.currentYearElement[M] = q.getFullYear().toString() : n.currentYearElement.removeAttribute(M), n.currentYearElement.disabled = !!ie && q !== void 0 && ie.getFullYear() === q.getFullYear())
        }
    }

    function jn() {
        let M = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
            H = {
                ...JSON.parse(JSON.stringify(e.dataset || {})),
                ...t
            },
            q = {};
        n.config.parseDate = H.parseDate, n.config.formatDate = H.formatDate, Object.defineProperty(n.config, "enable", {
            get: () => n.config._enable,
            set: ce => {
                n.config._enable = at(ce)
            }
        }), Object.defineProperty(n.config, "disable", {
            get: () => n.config._disable,
            set: ce => {
                n.config._disable = at(ce)
            }
        });
        let ie = H.mode === "time";
        if (!H.dateFormat && (H.enableTime || ie)) {
            let ce = Fn.defaultConfig.dateFormat || ka.dateFormat;
            q.dateFormat = H.noCalendar || ie ? "H:i" + (H.enableSeconds ? ":S" : "") : ce + " H:i" + (H.enableSeconds ? ":S" : "")
        }
        if (H.altInput && (H.enableTime || ie) && !H.altFormat) {
            let ce = Fn.defaultConfig.altFormat || ka.altFormat;
            q.altFormat = H.noCalendar || ie ? "h:i" + (H.enableSeconds ? ":S K" : " K") : ce + ` h:i${H.enableSeconds?":S":""} K`
        }
        Object.defineProperty(n.config, "minDate", {
            get: () => n.config._minDate,
            set: xn("min")
        }), Object.defineProperty(n.config, "maxDate", {
            get: () => n.config._maxDate,
            set: xn("max")
        });
        let ye = ce => ae => {
            n.config[ce === "min" ? "_minTime" : "_maxTime"] = n.parseDate(ae, "H:i:S")
        };
        Object.defineProperty(n.config, "minTime", {
            get: () => n.config._minTime,
            set: ye("min")
        }), Object.defineProperty(n.config, "maxTime", {
            get: () => n.config._maxTime,
            set: ye("max")
        }), H.mode === "time" && (n.config.noCalendar = !0, n.config.enableTime = !0), Object.assign(n.config, q, H);
        for (let ce = 0; ce < M.length; ce++) n.config[M[ce]] = n.config[M[ce]] === !0 || n.config[M[ce]] === "true";
        Kc.filter(ce => n.config[ce] !== void 0).forEach(ce => {
            n.config[ce] = jc(n.config[ce] || []).map(s)
        }), n.isMobile = !n.config.disableMobile && !n.config.inline && n.config.mode === "single" && !n.config.disable.length && !n.config.enable && !n.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (let ce = 0; ce < n.config.plugins.length; ce++) {
            let ae = n.config.plugins[ce](n) || {};
            for (let Se in ae) Kc.indexOf(Se) > -1 ? n.config[Se] = jc(ae[Se]).map(s).concat(n.config[Se]) : typeof H[Se] == "undefined" && (n.config[Se] = ae[Se])
        }
        H.altInputClass || (n.config.altInputClass = sn().className + " " + n.config.altInputClass), ht("onParseConfig")
    }

    function sn() {
        return n.config.wrap ? e.querySelector("[data-input]") : e
    }

    function Rt() {
        typeof n.config.locale != "object" && typeof Fn.l10ns[n.config.locale] == "undefined" && n.config.errorHandler(new Error(`flatpickr: invalid locale ${n.config.locale}`)), n.l10n = {
            ...Fn.l10ns.default,
            ...typeof n.config.locale == "object" ? n.config.locale : n.config.locale !== "default" ? Fn.l10ns[n.config.locale] : void 0
        }, Gi.D = `(${n.l10n.weekdays.shorthand.join("|")})`, Gi.l = `(${n.l10n.weekdays.longhand.join("|")})`, Gi.M = `(${n.l10n.months.shorthand.join("|")})`, Gi.F = `(${n.l10n.months.longhand.join("|")})`, Gi.K = `(${n.l10n.amPM[0]}|${n.l10n.amPM[1]}|${n.l10n.amPM[0].toLowerCase()}|${n.l10n.amPM[1].toLowerCase()})`, {
            ...t,
            ...JSON.parse(JSON.stringify(e.dataset || {}))
        }.time_24hr === void 0 && Fn.defaultConfig.time_24hr === void 0 && (n.config.time_24hr = n.l10n.time_24hr), n.formatDate = ig(n), n.parseDate = qc({
            config: n.config,
            l10n: n.l10n
        })
    }

    function Vt(M) {
        if (typeof n.config.position == "function") return void n.config.position(n, M);
        if (n.calendarContainer === void 0) return;
        ht("onPreCalendarPosition");
        let H = M || n._positionElement,
            q = Array.prototype.reduce.call(n.calendarContainer.children, (Yt, Bn) => Yt + Bn.offsetHeight, 0),
            ie = n.calendarContainer.offsetWidth,
            ye = n.config.position.split(" "),
            ce = ye[0],
            ae = ye.length > 1 ? ye[1] : null,
            Se = H.getBoundingClientRect(),
            nt = r.innerHeight - Se.bottom,
            Te = ce === "above" || ce !== "below" && nt < q && Se.top > q,
            Ue = r.pageYOffset + Se.top + (Te ? -q - 2 : H.offsetHeight + 2);
        if (tr(n.calendarContainer, "arrowTop", !Te), tr(n.calendarContainer, "arrowBottom", Te), n.config.inline) return;
        let We = r.pageXOffset + Se.left,
            Ft = !1,
            Hn = !1;
        ae === "center" ? (We -= (ie - Se.width) / 2, Ft = !0) : ae === "right" && (We -= ie - Se.width, Hn = !0), tr(n.calendarContainer, "arrowLeft", !Ft && !Hn), tr(n.calendarContainer, "arrowCenter", Ft), tr(n.calendarContainer, "arrowRight", Hn);
        let Ot = r.document.body.offsetWidth - (r.pageXOffset + Se.right),
            or = We + ie > r.document.body.offsetWidth,
            sr = Ot + ie > r.document.body.offsetWidth;
        if (tr(n.calendarContainer, "rightMost", or), !n.config.static)
            if (n.calendarContainer.style.top = `${Ue}px`, !or) n.calendarContainer.style.left = `${We}px`, n.calendarContainer.style.right = "auto";
            else if (!sr) n.calendarContainer.style.left = "auto", n.calendarContainer.style.right = `${Ot}px`;
        else {
            let Yt = Sr();
            if (Yt === void 0) return;
            let Bn = r.document.body.offsetWidth,
                Er = Math.max(0, Bn / 2 - ie / 2),
                Gr = ".flatpickr-calendar.centerMost:before",
                tu = ".flatpickr-calendar.centerMost:after",
                z = Yt.cssRules.length,
                k = `{left:${Se.left}px;right:auto;}`;
            tr(n.calendarContainer, "rightMost", !1), tr(n.calendarContainer, "centerMost", !0), Yt.insertRule(`${Gr},${tu}${k}`, z), n.calendarContainer.style.left = `${Er}px`, n.calendarContainer.style.right = "auto"
        }
    }

    function Sr() {
        let M = null;
        for (let H = 0; H < r.document.styleSheets.length; H++) {
            let q = r.document.styleSheets[H];
            if (q.cssRules) {
                try {
                    q.cssRules
                } catch (ie) {
                    continue
                }
                M = q;
                break
            }
        }
        return M != null ? M : Rr()
    }

    function Rr() {
        let M = r.document.createElement("style");
        return r.document.head.appendChild(M), M.sheet
    }

    function Bt() {
        n.config.noCalendar || n.isMobile || (re(), ee(), te())
    }

    function Hr() {
        n._input.focus(), r.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? r.setTimeout(n.close, 0) : n.close()
    }

    function rn(M) {
        M.preventDefault(), M.stopPropagation();
        let H = ae => ae.classList && ae.classList.contains("flatpickr-day") && !ae.classList.contains("flatpickr-disabled") && !ae.classList.contains("notAllowed"),
            q = ag(Dr(M), H);
        if (q === void 0) return;
        let ie = q,
            ye = n.latestSelectedDateObj = new Date(ie.dateObj.getTime()),
            ce = (ye.getMonth() < n.currentMonth || ye.getMonth() > n.currentMonth + n.config.showMonths - 1) && n.config.mode !== "range";
        if (n.selectedDateElem = ie, n.config.mode === "single") n.selectedDates = [ye];
        else if (n.config.mode === "multiple") {
            let ae = L(ye);
            ae ? n.selectedDates.splice(parseInt(ae), 1) : n.selectedDates.push(ye)
        } else n.config.mode === "range" && (n.selectedDates.length === 2 && n.clear(!1, !1), n.latestSelectedDateObj = ye, n.selectedDates.push(ye), br(ye, n.selectedDates[0], !0) !== 0 && n.selectedDates.sort((ae, Se) => ae.getTime() - Se.getTime()));
        if (m(), ce) {
            let ae = n.currentYear !== ye.getFullYear();
            n.currentYear = ye.getFullYear(), n.currentMonth = ye.getMonth(), ae && (ht("onYearChange"), re()), ht("onMonthChange")
        }
        if (ee(), te(), de(), !ce && n.config.mode !== "range" && n.config.showMonths === 1 ? B(ie) : n.selectedDateElem !== void 0 && n.hourElement === void 0 && n.selectedDateElem && n.selectedDateElem.focus(), n.hourElement !== void 0 && n.hourElement !== void 0 && n.hourElement.focus(), n.config.closeOnSelect) {
            let ae = n.config.mode === "single" && !n.config.enableTime,
                Se = n.config.mode === "range" && n.selectedDates.length === 2 && !n.config.enableTime;
            (ae || Se) && Hr()
        }
        D()
    }
    let At = {
        locale: [Rt, U],
        showMonths: [be, u, Ce],
        minDate: [C],
        maxDate: [C],
        positionElement: [_n],
        clickOpens: [() => {
            n.config.clickOpens === !0 ? (v(n._input, "focus", n.open), v(n._input, "click", n.open)) : (n._input.removeEventListener("focus", n.open), n._input.removeEventListener("click", n.open))
        }]
    };

    function Z(M, H) {
        if (M !== null && typeof M == "object") {
            Object.assign(n.config, M);
            for (let q in M) At[q] !== void 0 && At[q].forEach(ie => ie())
        } else n.config[M] = H, At[M] !== void 0 ? At[M].forEach(q => q()) : Kc.indexOf(M) > -1 && (n.config[M] = jc(H));
        n.redraw(), de(!0)
    }

    function me(M, H) {
        let q = [];
        if (Array.isArray(M)) q = M.map(ie => n.parseDate(ie, H));
        else if (M.getDate || typeof M == "number") q = [n.parseDate(M, H)];
        else if (typeof M == "string") switch (n.config.mode) {
            case "single":
            case "time":
                q = [n.parseDate(M, H)];
                break;
            case "multiple":
                q = M.split(n.config.conjunction).map(ie => n.parseDate(ie, H));
                break;
            case "range":
                q = M.split(n.l10n.rangeSeparator).map(ie => n.parseDate(ie, H));
                break;
            default:
                break
        } else n.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(M)}`));
        n.selectedDates = n.config.allowInvalidPreload ? q : q.filter(ie => ie.getDate && Wt(ie, !1)), n.config.mode === "range" && n.selectedDates.sort((ie, ye) => ie.getTime() - ye.getTime())
    }

    function Ie(M, H = !1, q = n.config.dateFormat) {
        if (M !== 0 && !M || Array.isArray(M) && M.length === 0) return n.clear(H);
        me(M, q), n.latestSelectedDateObj = n.selectedDates[n.selectedDates.length - 1], n.redraw(), C(void 0, H), h(), n.selectedDates.length === 0 && n.clear(!1), de(H), H && ht("onChange")
    }

    function at(M) {
        return M.slice().map(H => typeof H == "string" || typeof H == "number" || H.getDate ? n.parseDate(H, void 0, !0) : H && typeof H == "object" && H.from && H.to ? {
            from: n.parseDate(H.from, void 0),
            to: n.parseDate(H.to, void 0)
        } : H).filter(H => H)
    }

    function Dt() {
        n.selectedDates = [], n.now = n.parseDate(n.config.now) || new Date;
        let M = n.config.defaultDate || ((n.input.nodeName === "INPUT" || n.input.nodeName === "TEXTAREA") && n.input.placeholder && n.input.value === n.input.placeholder ? null : n.input.value);
        M && me(M, n.config.dateFormat), n._initialDate = n.selectedDates.length > 0 ? n.selectedDates[0] : n.config.minDate && n.config.minDate.getTime() > n.now.getTime() ? n.config.minDate : n.config.maxDate && n.config.maxDate.getTime() < n.now.getTime() ? n.config.maxDate : n.now, n.currentYear = n._initialDate.getFullYear(), n.currentMonth = n._initialDate.getMonth(), n.selectedDates.length > 0 && (n.latestSelectedDateObj = n.selectedDates[0]), n.config.minTime !== void 0 && (n.config.minTime = n.parseDate(n.config.minTime, "H:i")), n.config.maxTime !== void 0 && (n.config.maxTime = n.parseDate(n.config.maxTime, "H:i")), n.minDateHasTime = !!n.config.minDate && (n.config.minDate.getHours() > 0 || n.config.minDate.getMinutes() > 0 || n.config.minDate.getSeconds() > 0), n.maxDateHasTime = !!n.config.maxDate && (n.config.maxDate.getHours() > 0 || n.config.maxDate.getMinutes() > 0 || n.config.maxDate.getSeconds() > 0)
    }

    function Cn() {
        if (n.input = sn(), !n.input) {
            n.config.errorHandler(new Error("Invalid input element specified"));
            return
        }
        n.input._type = n.input.type, n.input.type = "text", n.input.classList.add("flatpickr-input"), n._input = n.input, n.config.altInput && (n.altInput = Pt(r.document, n.input.nodeName, n.config.altInputClass), n._input = n.altInput, n.altInput.placeholder = n.input.placeholder, n.altInput.disabled = n.input.disabled, n.altInput.required = n.input.required, n.altInput.tabIndex = n.input.tabIndex, n.altInput.type = "text", n.input.setAttribute("type", "hidden"), !n.config.static && n.input.parentNode && n.input.parentNode.insertBefore(n.altInput, n.input.nextSibling)), n.config.allowInput || n._input.setAttribute("readonly", "readonly"), _n()
    }

    function _n() {
        n._positionElement = n.config.positionElement || n._input
    }

    function Ht() {
        let M = n.config.enableTime ? n.config.noCalendar ? "time" : "datetime-local" : "date";
        n.mobileInput = Pt(r.document, "input", n.input.className + " flatpickr-mobile"), n.mobileInput.tabIndex = 1, n.mobileInput.type = M, n.mobileInput.disabled = n.input.disabled, n.mobileInput.required = n.input.required, n.mobileInput.placeholder = n.input.placeholder, n.mobileFormatStr = M === "datetime-local" ? "Y-m-d\\TH:i:S" : M === "date" ? "Y-m-d" : "H:i:S", n.selectedDates.length > 0 && (n.mobileInput.defaultValue = n.mobileInput.value = n.formatDate(n.selectedDates[0], n.mobileFormatStr)), n.config.minDate && (n.mobileInput.min = n.formatDate(n.config.minDate, "Y-m-d")), n.config.maxDate && (n.mobileInput.max = n.formatDate(n.config.maxDate, "Y-m-d")), n.input.getAttribute("step") && (n.mobileInput.step = String(n.input.getAttribute("step"))), n.input.type = "hidden", n.altInput !== void 0 && (n.altInput.type = "hidden");
        try {
            n.input.parentNode && n.input.parentNode.insertBefore(n.mobileInput, n.input.nextSibling)
        } catch (H) {}
        v(n.mobileInput, "change", H => {
            n.setDate(Dr(H).value, !1, n.mobileFormatStr), ht("onChange"), ht("onClose")
        })
    }

    function ar(M) {
        if (n.isOpen === !0) return n.close();
        n.open(M)
    }

    function ht(M, H) {
        if (n.config === void 0) return;
        let q = n.config[M];
        if (q !== void 0 && q.length > 0)
            for (let ie = 0; q[ie] && ie < q.length; ie++) q[ie](n.selectedDates, n.input.value, n, H);
        M === "onChange" && (n.input.dispatchEvent(St("change")), n.input.dispatchEvent(St("input")))
    }

    function St(M) {
        let H = r.document.createEvent("Event");
        return H.initEvent(M, !0, !0), H
    }

    function L(M) {
        for (let H = 0; H < n.selectedDates.length; H++) {
            let q = n.selectedDates[H];
            if (q.getDate && br(q, M) === 0) return "" + H
        }
        return !1
    }

    function K(M) {
        return n.config.mode !== "range" || n.selectedDates.length < 2 ? !1 : br(M, n.selectedDates[0]) >= 0 && br(M, n.selectedDates[1]) <= 0
    }

    function ee() {
        n.config.noCalendar || n.isMobile || !n.monthNav || (n.yearElements.forEach((M, H) => {
            let q = new Date(n.currentYear, n.currentMonth, 1);
            q.setMonth(n.currentMonth + H), n.config.showMonths > 1 || n.config.monthSelectorType === "static" ? n.monthElements[H].textContent = Pl(q.getMonth(), n.config.shorthandCurrentMonth, n.l10n) + " " : n.monthsDropdownContainer.value = q.getMonth().toString(), M.value = q.getFullYear().toString()
        }), n._hidePrevMonthArrow = n.config.minDate !== void 0 && (n.currentYear === n.config.minDate.getFullYear() ? n.currentMonth <= n.config.minDate.getMonth() : n.currentYear < n.config.minDate.getFullYear()), n._hideNextMonthArrow = n.config.maxDate !== void 0 && (n.currentYear === n.config.maxDate.getFullYear() ? n.currentMonth + 1 > n.config.maxDate.getMonth() : n.currentYear > n.config.maxDate.getFullYear()))
    }

    function ue(M) {
        let H = M || (n.config.altInput ? n.config.altFormat : n.config.dateFormat);
        return n.selectedDates.map(q => n.formatDate(q, H)).filter((q, ie, ye) => n.config.mode !== "range" || n.config.enableTime || ye.indexOf(q) === ie).join(n.config.mode !== "range" ? n.config.conjunction : n.l10n.rangeSeparator)
    }

    function de(M = !0) {
        n.mobileInput !== void 0 && n.mobileFormatStr && (n.mobileInput.value = n.latestSelectedDateObj !== void 0 ? n.formatDate(n.latestSelectedDateObj, n.mobileFormatStr) : ""), n.input.value = ue(n.config.dateFormat), n.altInput !== void 0 && (n.altInput.value = ue(n.config.altFormat)), M !== !1 && ht("onValueUpdate")
    }

    function ve(M) {
        let H = Dr(M),
            q = n.prevMonthNav.contains(H),
            ie = n.nextMonthNav.contains(H);
        q || ie ? it(q ? -1 : 1) : n.yearElements.indexOf(H) >= 0 ? H.select() : H.classList.contains("arrowUp") ? n.changeYear(n.currentYear + 1) : H.classList.contains("arrowDown") && n.changeYear(n.currentYear - 1)
    }

    function ge(M) {
        M.preventDefault();
        let H = M.type === "keydown",
            q = Dr(M),
            ie = q;
        n.amPM !== void 0 && q === n.amPM && (n.amPM.textContent = n.l10n.amPM[wr(n.amPM.textContent === n.l10n.amPM[0])]);
        let ye = parseFloat(ie.getAttribute("min")),
            ce = parseFloat(ie.getAttribute("max")),
            ae = parseFloat(ie.getAttribute("step")),
            Se = parseInt(ie.value, 10),
            nt = M.delta || (H ? M.which === 38 ? 1 : -1 : 0),
            Te = Se + ae * nt;
        if (typeof ie.value != "undefined" && ie.value.length === 2) {
            let Ue = ie === n.hourElement,
                We = ie === n.minuteElement;
            Te < ye ? (Te = ce + Te + wr(!Ue) + (wr(Ue) && wr(!n.amPM)), We && O(void 0, -1, n.hourElement)) : Te > ce && (Te = ie === n.hourElement ? Te - ce - wr(!n.amPM) : ye, We && O(void 0, 1, n.hourElement)), n.amPM && Ue && (ae === 1 ? Te + Se === 23 : Math.abs(Te - Se) > ae) && (n.amPM.textContent = n.l10n.amPM[wr(n.amPM.textContent === n.l10n.amPM[0])]), ie.value = er(Te)
        }
    }
    return a(), n
}

function Zc(e, t) {
    let r = Array.prototype.slice.call(e).filter(i => i.onClickEvent),
        n = [];
    for (let i = 0; i < r.length; i++) {
        let a = r[i];
        try {
            if (a.getAttribute("data-fp-omit") !== null) continue;
            a._flatpickr !== void 0 && (a._flatpickr.destroy(), a._flatpickr = void 0), a._flatpickr = aN(a, t || {}), n.push(a._flatpickr)
        } catch (o) {
            console.error(o)
        }
    }
    return n.length === 1 ? n[0] : n
}
typeof HTMLElement != "undefined" && typeof HTMLCollection != "undefined" && typeof NodeList != "undefined" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
    return Zc(this, e)
}, HTMLElement.prototype.flatpickr = function(e) {
    return Zc([this], e)
});
var Fn = function(e, t) {
    return Zc([e], t)
};
Fn.defaultConfig = {};
Fn.l10ns = {
    en: {
        ...Yc
    },
    default: {
        ...Yc
    }
};
Fn.localize = e => {
    Fn.l10ns.default = {
        ...Fn.l10ns.default,
        ...e
    }
};
Fn.setDefaults = e => {
    Fn.defaultConfig = {
        ...Fn.defaultConfig,
        ...e
    }
};
Fn.parseDate = qc({});
Fn.formatDate = ig({});
Fn.compareDates = br;
typeof jQuery != "undefined" && typeof jQuery.fn != "undefined" && (jQuery.fn.flatpickr = function(e) {
    return Zc(this, e)
});
Date.prototype.fp_incr = function(e) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof e == "string" ? parseInt(e, 10) : e))
};
typeof window != "undefined" && (window.flatpickr = Fn);
var Qc = Fn;

function Xc(e, t, r) {
    let n = t.getSetting("date-format"),
        i = t.getSetting("date-trigger"),
        a = t.getSetting("link-date-to-daily-note"),
        o = (0, ok.moment)(r).format(n),
        s = a ? ed(t.app, o) : `{${o}} `,
        u = {
            line: e.start.line,
            ch: e.start.ch + i.length
        };
    e.editor.replaceRange(s, u, e.end), e.editor.setCursor({
        line: u.line,
        ch: u.ch + s.length
    }), e.editor.focus()
}

function sk(e, t, r, n) {
    r.createEl("input", {
        type: "text"
    }, i => {
        r.win.setTimeout(() => n(Qc(i, {
            win: i.win,
            now: new Date,
            inline: !0,
            locale: zc(t),
            onChange: a => Xc(e, t, a[0])
        })))
    })
}

function lk(e) {
    let t = e.month(),
        r = e.clone().startOf("month").weekday(0),
        n = e.diff(r, "week");
    e.subtract(1, "month").startOf("month").weekday(6).add(n, "week");
    let i = e.month();
    for (; t === i;) e.subtract(1, "week"), i = e.month();
    return e
}

function uk(e) {
    let t = e.month(),
        r = e.clone().startOf("month").weekday(6),
        n = e.diff(r, "week");
    e.add(1, "month").startOf("month").weekday(0).add(n, "week");
    let i = e.month();
    for (; t === i;) e.add(1, "week"), i = e.month();
    return e
}

function og(e, t, r) {
    let n = (t.getLine(r.line) || "").slice(0, r.ch),
        i = new RegExp(`(?:^|\\s)${Qn(e)}{?([^}]*)$`);
    return n.match(i)
}

function sg(e, t, r) {
    let n = (t.getLine(r.line) || "").slice(0, r.ch),
        i = new RegExp(`(?:^|\\s)${Qn(e)}{?([^}]*)$`);
    return n.match(i)
}
var td = class extends Hl.EditorSuggest {
        constructor(r, n) {
            super(r);
            this.datepicker = null;
            this.app = r, this.plugin = n, [...this.scope.keys].forEach(a => this.scope.unregister(a)), this.suggestEl.addClass($("date-suggest"));
            let i = a => {
                let {
                    datepicker: o
                } = this;
                if (!o) return;
                let s = (0, Hl.moment)(o.selectedDates[0] || new Date),
                    u;
                if (a === "right" ? s.weekday() === 6 ? u = uk(s).toDate() : u = s.add(1, "day").toDate() : a === "left" ? s.weekday() === 0 ? u = lk(s).toDate() : u = s.subtract(1, "day").toDate() : a === "up" ? u = s.subtract(1, "week").toDate() : a === "down" && (u = s.add(1, "week").toDate()), u) return o.setDate(u, !1), !1
            };
            this.scope.register([], "ArrowLeft", () => i("left")), this.scope.register([], "ArrowRight", () => i("right")), this.scope.register([], "ArrowDown", () => i("down")), this.scope.register([], "ArrowUp", () => i("up")), this.scope.register([], "Enter", () => {
                let a = this.datepicker.selectedDates,
                    o = this.context;
                return a.length ? Xc(o, this.stateManager, a[0]) : Xc(o, this.stateManager, new Date), this.close(), !1
            }), this.scope.register([], "Escape", () => (this.close(), !1))
        }
        get stateManager() {
            return this.context ? this.plugin.stateManagers.get(this.context.file) : null
        }
        getSuggestions() {
            return []
        }
        renderSuggestion() {}
        selectSuggestion() {}
        showSuggestions() {
            let {
                datepicker: r,
                suggestEl: n,
                context: i,
                stateManager: a
            } = this;
            !r && a && (n.empty(), n.addClasses([$("date-picker"), $("ignore-click-outside")]), sk(i, a, n, o => {
                this.datepicker = o, this.updatePosition(!0)
            }))
        }
        onTrigger(r, n, i) {
            let a = this.plugin.getStateManager(i);
            if (!a) return null;
            let o = a.getSetting("date-trigger");
            return sg(o, n, r) ? {
                start: {
                    line: r.line,
                    ch: r.ch - o.length
                },
                end: r,
                query: o
            } : null
        }
        close() {
            super.close(), this.datepicker && (this.datepicker.destroy(), this.datepicker = null, this.suggestEl.empty())
        }
    },
    nd = class extends Hl.EditorSuggest {
        constructor(t, r) {
            super(t), this.app = t, this.plugin = r
        }
        onTrigger(t, r, n) {
            let i = this.plugin.getStateManager(n);
            if (!i) return null;
            let a = i.getSetting("time-trigger"),
                o = og(a, r, t);
            return o ? (this.times = lg(i), {
                start: {
                    line: t.line,
                    ch: t.ch - o[1].length - a.length
                },
                end: t,
                query: o[1]
            }) : null
        }
        getSuggestions(t) {
            return this.plugin.getStateManager(t.file) ? this.times.filter(n => n.startsWith(t.query) || n.startsWith("0" + t.query)) : []
        }
        renderSuggestion(t, r) {
            t.endsWith("00") ? r.createEl("strong", {
                text: t
            }) : r.setText(t)
        }
        selectSuggestion(t) {
            let {
                context: r,
                plugin: n
            } = this, i = n.getStateManager(r.file);
            if (!i) return;
            let o = `${i.getSetting("time-trigger")}{${t}} `;
            r.editor.replaceRange(o, r.start, r.end), r.editor.setCursor({
                line: r.start.line,
                ch: r.start.ch + o.length
            }), r.editor.focus()
        }
        close() {
            super.close(), this.times = null
        }
    };

function Ca(e, t, r) {
    return xa.Platform.isMobile || e.getSetting("new-line-trigger") === "enter" ? !(t || r) : t || r
}

function oN(e) {
    return new Proxy(e.app, {
        get(t, r, n) {
            return r === "vault" ? new Proxy(e.app.vault, {
                get(i, a, o) {
                    return a === "config" ? new Proxy(e.app.vault.config, {
                        get(s, u, l) {
                            return ["showLineNumber", "foldHeading", "foldIndent"].includes(u) ? !1 : Reflect.get(s, u, l)
                        }
                    }) : Reflect.get(i, a, o)
                }
            }) : Reflect.get(t, r, n)
        }
    })
}

function sN(e, t) {
    return {
        app: e.app,
        showSearch: Mr,
        toggleMode: Mr,
        onMarkdownScroll: Mr,
        getMode: () => "source",
        scroll: 0,
        editMode: null,
        get editor() {
            return t()
        },
        get file() {
            return e.file
        },
        get path() {
            return e.file.path
        }
    }
}

function lN(e) {
    var r, n;
    let t = uN(e);
    t && ((n = (r = window.CodeMirrorAdapter) == null ? void 0 : r.Vim) == null || n.enterInsertMode(t))
}

function uN(e) {
    var t, r, n;
    return (n = (r = (t = e == null ? void 0 : e.plugins) == null ? void 0 : t.find(i => i != null && i.value ? "useNextTextInput" in i.value && "waitForCopy" in i.value : !1)) == null ? void 0 : r.value) == null ? void 0 : n.cm
}

function _a({
    editorRef: e,
    onEnter: t,
    onEscape: r,
    onChange: n,
    onPaste: i,
    className: a,
    onSubmit: o,
    editState: s,
    value: u,
    placeholder: l
}) {
    let {
        view: c,
        stateManager: d
    } = Ee(tt), m = Fe(), h = Fe();
    Ae(() => {
        class y extends c.plugin.MarkdownEditor {
            constructor() {
                super(...arguments);
                this.isKanbanEditor = !0
            }
            showTasksPluginAutoSuggest(P, B, G) {
                if (og(d.getSetting("time-trigger"), B, P) || sg(d.getSetting("date-trigger"), B, P)) return !1;
                if (G && P.line === 0) return !0
            }
            updateBottomPadding() {}
            onUpdate(P, B) {
                super.onUpdate(P, B), n && n(P)
            }
            buildLocalExtensions() {
                let P = super.buildLocalExtensions();
                P.push(Uc.init(() => d)), P.push(KS), P.push(fs.Prec.highest(lo.EditorView.domEventHandlers({
                    focus: G => (c.activeEditor = this.owner, xa.Platform.isMobile && c.contentEl.addClass("is-mobile-editing"), G.win.setTimeout(() => {
                        this.app.workspace.activeEditor = this.owner, xa.Platform.isMobile && this.app.mobileToolbar.update()
                    }), !0),
                    blur: () => (xa.Platform.isMobile && (c.contentEl.removeClass("is-mobile-editing"), this.app.mobileToolbar.update()), !0)
                }))), l && P.push((0, lo.placeholder)(l)), i && P.push(fs.Prec.high(lo.EditorView.domEventHandlers({
                    paste: i
                })));
                let B = (G, J) => Q => (t(Q, G, J) || (this.app.vault.getConfig("smartIndentList") ? this.editor.newlineAndIndentContinueMarkdownList() : (0, ck.insertBlankLine)(Q)), !0);
                return P.push(fs.Prec.highest(lo.keymap.of([{
                    key: "Enter",
                    run: B(!1, !1),
                    shift: B(!1, !0),
                    preventDefault: !0
                }, {
                    key: "Mod-Enter",
                    run: B(!0, !1),
                    shift: B(!0, !0),
                    preventDefault: !0
                }, {
                    key: "Escape",
                    run: G => (r(G), !1),
                    preventDefault: !0
                }]))), P
            }
        }
        let v = sN(c, () => I.editor),
            D = oN(c),
            I = c.plugin.addChild(new y(D, m.current, v)),
            C = I.cm;
        h.current = C, e && (e.current = C), v.editMode = I, I.set(u || ""), kn(s) && (C.dispatch({
            userEvent: "select.pointer",
            selection: fs.EditorSelection.single(C.posAtCoords(s, !1))
        }), C.dom.win.setTimeout(() => {
            lN(C)
        }));
        let x = () => {
            m.current.scrollIntoView({
                block: "end"
            })
        };
        return xa.Platform.isMobile && C.dom.win.addEventListener("keyboardDidShow", x), () => {
            xa.Platform.isMobile && (C.dom.win.removeEventListener("keyboardDidShow", x), c.activeEditor === v && (c.activeEditor = null), D.workspace.activeEditor === v && (D.workspace.activeEditor = null, D.mobileToolbar.update(), c.contentEl.removeClass("is-mobile-editing"))), c.plugin.removeChild(I), h.current = null, e && (e.current = null)
        }
    }, []);
    let g = ["cm-table-widget"];
    return a && g.push(a), E(ct, {
        children: [E("div", {
            className: Ge(g),
            ref: m
        }), xa.Platform.isMobile && E("button", {
            onClick: () => o(h.current),
            className: Ge([$("item-submit-button"), "mod-cta"]),
            children: R("Submit")
        })]
    })
}
var Bl = require("obsidian");

function cN(e, t) {
    if (t) return t.from((0, Bl.moment)());
    let r = (0, Bl.moment)().startOf("day");
    if (r.isSame(e, "day")) return R("today");
    let n = e.diff(r, "day");
    return n === -1 ? R("yesterday") : n === 1 ? R("tomorrow") : e.from(r)
}

function rd({
    item: e,
    stateManager: t
}) {
    if (!t.useSetting("show-relative-date") || !e.data.metadata.date) return null;
    let n = cN(e.data.metadata.date, e.data.metadata.time);
    return E("span", {
        className: $("item-metadata-date-relative"),
        children: n
    })
}

function id({
    item: e,
    stateManager: t,
    filePath: r,
    onEditDate: n,
    onEditTime: i,
    getDateColor: a
}) {
    var A;
    let o = t.useSetting("move-dates"),
        s = t.useSetting("date-format"),
        u = t.useSetting("time-format"),
        l = t.useSetting("date-display-format"),
        c = t.useSetting("link-date-to-daily-note"),
        d = (A = e.data.metadata.time) != null ? A : e.data.metadata.date,
        m = Re(() => d ? a(d) : null, [d, a]);
    if (!o || !d) return null;
    let h = d.format(s);
    if (!h) return null;
    let g = !!e.data.metadata.date,
        y = !!e.data.metadata.time,
        v = d.format(l),
        D = y ? d.format(u) : null,
        I = h ? (0, Bl.getLinkpath)(h) : null,
        C = h ? t.app.metadataCache.getFirstLinkpathDest(I, r) : null,
        x = I && c ? E("a", {
            href: I,
            "data-href": I,
            className: `internal-link ${C?"":"is-unresolved"}`,
            target: "blank",
            rel: "noopener",
            children: v
        }) : v,
        O = {};
    return c || (O["aria-label"] = R("Change date"), O.onClick = n), E("span", {
        style: m && {
            "--date-color": m.color,
            "--date-background-color": m.backgroundColor
        },
        className: Ge([$("item-metadata-date-wrapper"), $("date"), {
            "has-background": !!(m != null && m.backgroundColor)
        }]),
        children: [g && E(ct, {
            children: [E("span", {
                ...O,
                className: `${$("item-metadata-date")} ${c?"":"is-button"}`,
                children: x
            }), " "]
        }), y && E("span", {
            onClick: i,
            className: `${$("item-metadata-time")} is-button`,
            "aria-label": R("Change time"),
            children: D
        })]
    })
}

function dk({
    item: e,
    stateManager: t
}) {
    let r = Ee(zn),
        n = t.getSetting("metadata-keys"),
        i = t.useSetting("inline-metadata-position") === "footer",
        a = t.useSetting("move-task-metadata"),
        {
            inlineMetadata: o
        } = e.data.metadata;
    if (!o || !i && !a) return null;
    let s = il();
    return E("span", {
        className: $("item-task-metadata"),
        children: o.map((u, l) => {
            var O, A;
            let c = Pu(u, n),
                {
                    metadataKey: d,
                    value: m,
                    label: h
                } = c,
                g = yi.has(d);
            if (!a && g || !i && !g) return null;
            let y = u.wrapping === "emoji-shorthand",
                v = (A = (O = s == null ? void 0 : s.api) == null ? void 0 : O.parse(m)) != null ? A : m,
                D = y && d === "priority",
                I = !!(v != null && v.ts),
                C = d.replace(/[^a-zA-Z0-9_]/g, "-"),
                x = "";
            return h && !g ? x = h : x = y ? mb(d, m) : No(d), y || (x += ": "), E("span", {
                className: Ge([$("item-task-inline-metadata-item"), $(`inline-metadata__${C}`), {
                    "is-task-metadata": g,
                    "is-emoji": y,
                    "is-date": I
                }]),
                children: [!I && E("span", {
                    className: $("item-task-inline-metadata-item-key"),
                    children: x
                }), !D && E("span", {
                    className: $("item-task-inline-metadata-item-value"),
                    children: E(hs, {
                        searchQuery: r == null ? void 0 : r.query,
                        dateLabel: I ? x : void 0,
                        data: c
                    })
                })]
            }, l)
        })
    })
}

function ug(e, t) {
    let {
        stateManager: r,
        boardModifiers: n
    } = Ee(tt), i = t || Ui();
    return Re(() => ({
        onEditDate: s => {
            var u;
            od(s.view, r, {
                x: s.clientX,
                y: s.clientY
            }, sd({
                stateManager: r,
                boardModifiers: n,
                item: e,
                hasDate: !0,
                path: i
            }), (u = e.data.metadata.date) == null ? void 0 : u.toDate())
        },
        onEditTime: s => {
            ld(s.view, r, {
                x: s.clientX,
                y: s.clientY
            }, ud({
                stateManager: r,
                boardModifiers: n,
                item: e,
                hasTime: !0,
                path: i
            }), e.data.metadata.time)
        }
    }), [n, i, e, r])
}

function dN(e, t, r) {
    let n = 0,
        i = t.split(/\n\r?/g),
        a = [];
    return i.forEach(o => {
        var u, l, c;
        if (n > r) {
            a.push(o);
            return
        }
        let s = o.match(/^(\s*>)*(\s*[-+*]\s+?\[)([^\]])(\]\s+)/);
        if (s) {
            if (n === r) {
                let d = pb(o, e.file);
                if (d) a.push(d);
                else {
                    let m = s[3] === " " ? Zn() : " ",
                        h = (u = s[1]) != null ? u : "",
                        g = (l = s[2]) != null ? l : "",
                        y = (c = s[4]) != null ? c : "";
                    a.push(h + g + m + y + o.slice(s[0].length))
                }
            } else a.push(o);
            n++;
            return
        }
        a.push(o)
    }), a.join(`
`)
}

function ps({
    tags: e,
    searchQuery: t,
    alwaysShow: r
}) {
    let {
        stateManager: n
    } = Ee(tt), i = Lu(n), a = Ee(zn), o = n.useSetting("move-tags") || r;
    return !e.length || !o ? null : E("div", {
        className: $("item-tags"),
        children: e.map((s, u) => {
            let l = i(s);
            return E("a", {
                href: s,
                onClick: c => {
                    c.preventDefault();
                    let d = n.getSetting("tag-action");
                    if (a && d === "kanban") {
                        a.search(s, !0);
                        return
                    }
                    n.app.internalPlugins.getPluginById("global-search").instance.openGlobalSearch(`tag:${s}`)
                },
                className: `tag ${$("item-tag")} ${t&&s.toLocaleLowerCase().contains(t)?"is-search-match":""}`,
                style: l && {
                    "--tag-color": l.color,
                    "--tag-background": l.backgroundColor
                },
                children: [E("span", {
                    children: s[0]
                }), s.slice(1)]
            }, u)
        })
    })
}
var ad = zt(function({
    item: t,
    editState: r,
    setEditState: n,
    searchQuery: i,
    showMetadata: a = !0,
    isStatic: o
}) {
    let {
        stateManager: s,
        filePath: u,
        boardModifiers: l
    } = Ee(tt), c = fa(s), d = Fe(null);
    Ae(() => {
        r === 1 ? (d.current !== null && l.updateItem(m, s.updateItemContent(t, d.current)), d.current = null) : r === 0 && (d.current = null)
    }, [r, s, t]);
    let m = Ui(),
        {
            onEditDate: h,
            onEditTime: g
        } = ug(t),
        y = Ye((x, O, A) => {
            if (!Ca(s, O, A)) return n(1), !0
        }, [s]),
        v = Ye(x => {
            x.targetNode.instanceOf(HTMLElement) && (x.targetNode.hasClass($("item-metadata-date")) ? h(x) : x.targetNode.hasClass($("item-metadata-time")) && g(x))
        }, [h, g]),
        D = Ye(() => n(1), []),
        I = Ye(() => (n(0), !0), [t]),
        C = Ye(x => {
            let O = x.target;
            if (O.hasClass("task-list-item-checkbox")) {
                if (O.dataset.src) return;
                let A = parseInt(O.dataset.checkboxIndex, 10),
                    P = dN(s, t.data.titleRaw, A),
                    B = s.updateItemContent(t, P);
                l.updateItem(m, B)
            }
        }, [m, l, s, t]);
    return !o && kn(r) ? E("div", {
        className: $("item-input-wrapper"),
        children: E(_a, {
            editState: r,
            className: $("item-input"),
            onEnter: y,
            onEscape: I,
            onSubmit: D,
            value: t.data.titleRaw,
            onChange: x => {
                x.docChanged && (d.current = x.state.doc.toString().trim())
            }
        })
    }) : E("div", {
        onClick: v,
        className: $("item-title"),
        children: [o ? E(WS, {
            entityId: t.id,
            className: $("item-markdown"),
            markdownString: t.data.title,
            searchQuery: i,
            onPointerUp: C
        }) : E(Sa, {
            entityId: t.id,
            className: $("item-markdown"),
            markdownString: t.data.title,
            searchQuery: i,
            onPointerUp: C
        }), a && E("div", {
            className: $("item-metadata"),
            children: [E(rd, {
                item: t,
                stateManager: s
            }), E(id, {
                item: t,
                stateManager: s,
                filePath: u,
                getDateColor: c
            }), E(dk, {
                item: t,
                stateManager: s
            }), E(ps, {
                tags: t.data.metadata.tags,
                searchQuery: i
            })]
        })]
    })
});

function fN(e, t = [], r) {
    return t.reduce((n, i) => {
        if (yi.has(i.key)) return n;
        let a = Pu(i, r);
        return n[i.key] = a, n
    }, e || {})
}

function fk({
    item: e,
    searchQuery: t
}) {
    let {
        stateManager: r
    } = Ee(tt), n = r.useSetting("inline-metadata-position") === "metadata-table", i = r.useSetting("metadata-keys"), {
        fileMetadata: a,
        fileMetadataOrder: o,
        inlineMetadata: s
    } = e.data.metadata, u = Re(() => {
        let c = n ? fN(a, s, i || []) : a;
        return !c || !Object.keys(c).length ? null : c
    }, [a, s, i]), l = Re(() => {
        let c = new Set(o || []);
        return n && (s != null && s.length) && s.forEach(d => {
            c.has(d.key) || c.add(d.key)
        }), Array.from(c)
    }, [o, n, s]);
    return u ? E("div", {
        className: $("item-metadata-wrapper"),
        children: E(gN, {
            metadata: u,
            order: l,
            searchQuery: t
        })
    }) : null
}

function hN(e, t) {
    let r;
    if (e.ts ? r = (0, li.moment)(e.ts) : li.moment.isMoment(e) ? r = e : e instanceof Date && (r = (0, li.moment)(e)), r) {
        let n = t.getSetting(r.hours() === 0 ? "date-display-format" : "date-time-display-format");
        return r.format(n)
    }
    return null
}

function mN(e, t) {
    if (typeof e != "object" || !e.path) return null;
    let r = app.vault.getAbstractFileByPath(e.path);
    if (r && r instanceof li.TFile) {
        let n = app.fileManager.generateMarkdownLink(r, t.file.path, e.subpath, e.display);
        return `${e.embed&&n[0]!=="!"?"!":""}${n}`
    }
    return `${e.embed?"!":""}[[${e.path}${e.display?`|${e.display}`:""}]]`
}

function hk(e) {
    if (typeof e == "string" && /^\d{4}-\d{2}-\d{2}/.test(e)) {
        let r = (0, li.moment)(e);
        if (r.isValid()) return r
    }
    if (li.moment.isMoment(e)) return e;
    if (e instanceof Date) return (0, li.moment)(e);
    let t = (0, cg.getAPI)();
    return t != null && t.value.isDate(e) ? (0, li.moment)(e.ts) : null
}

function In(e, t) {
    Ni(e) && e.value && (e = e.value);
    let r = hk(e);
    if (r) return hN(r, t);
    if (typeof e == "string") return e;
    if (e instanceof li.TFile) return e.path;
    if (Array.isArray(e)) return e.map(i => In(i, t)).join(" ");
    if (e.rrule) return e.toText();
    let n = (0, cg.getAPI)();
    return n ? n.value.toString(e) : `${e}`
}

function pN(e, t) {
    return In(e.value, t)
}

function hs({
    data: e,
    dateLabel: t,
    searchQuery: r
}) {
    let {
        view: n,
        stateManager: i
    } = Ee(tt), a = fa(i), o = (s, u) => {
        let l = mN(s, n),
            c = hk(s),
            d = In(s, i),
            m = r && d.toLocaleLowerCase().contains(r),
            h;
        if (l || e.containsMarkdown) h = E(Sa, {
            className: "inline",
            markdownString: l || d,
            searchQuery: r
        });
        else if (c) {
            let g = a(c);
            h = E("span", {
                className: Ge({
                    [$("date")]: !0,
                    "is-search-match": m,
                    "has-background": g == null ? void 0 : g.backgroundColor
                }),
                style: g && {
                    "--date-color": g.color,
                    "--date-background-color": g.backgroundColor
                },
                children: [!!t && E("span", {
                    className: $("item-metadata-date-label"),
                    children: t
                }), E("span", {
                    className: $("item-metadata-date"),
                    children: d
                })]
            })
        } else m ? h = E("span", {
            className: "is-search-match",
            children: d
        }) : h = d;
        return E(ct, {
            children: [h, u ? E("span", {
                children: u
            }) : null]
        })
    };
    return Array.isArray(e.value) ? E("span", {
        className: Ge([$("meta-value"), "mod-array"]),
        children: e.value.map((s, u, l) => o(s, u < l.length - 1 ? ", " : void 0))
    }) : E("span", {
        className: Ge([$("meta-value")]),
        children: o(e.value)
    })
}
var gN = zt(function({
    metadata: t,
    order: r,
    searchQuery: n
}) {
    let {
        stateManager: i
    } = Ee(tt);
    return t ? (r != null && r.length || (r = Object.keys(t)), E("table", {
        className: $("meta-table"),
        children: E("tbody", {
            children: r.map(a => {
                let o = t[a];
                if (!o) return null;
                let s = (o.label || a).toLocaleLowerCase().contains(n);
                return E("tr", {
                    className: $("meta-row"),
                    children: [!o.shouldHideLabel && E("td", {
                        className: Ge([$("meta-key"), {
                            "is-search-match": s
                        }]),
                        "data-key": a,
                        children: E("span", {
                            children: o.label || a
                        })
                    }), E("td", {
                        colSpan: o.shouldHideLabel ? 2 : 1,
                        className: $("meta-value-wrapper"),
                        "data-value": pN(o, i),
                        children: a === "tags" ? E(ps, {
                            searchQuery: n,
                            tags: o.value,
                            alwaysShow: !0
                        }) : E(hs, {
                            data: o,
                            searchQuery: n
                        })
                    })]
                }, a)
            })
        })
    })) : null
});
var _t = "kanban-plugin";
var gk = `**${R("Complete")}**`,
    yk = "***",
    dg = ["---", "", `${_t}: board`, "", "---", "", ""].join(`
`);

function vk(e) {
    return ["", "", "%% kanban:settings", "```", JSON.stringify(e.data.settings), "```", "%%"].join(`
`)
}

function wk(e, t) {
    let r = e.data.metadata.fileMetadata,
        {
            titleSearchRaw: n
        } = e.data,
        i = [n];
    if (r) {
        let a = Object.keys(r).filter(o => {
            var s;
            return (s = e.data.metadata.fileMetadataOrder) == null ? void 0 : s.includes(o)
        });
        if (a.length) {
            let o = In(a, t),
                s = In(a.map(u => r[u]), t);
            o && i.push(o), s && i.push(s)
        }
    }
    return e.data.metadata.time ? (i.push(e.data.metadata.time.format("LLLL")), i.push(In(e.data.metadata.time, t))) : e.data.metadata.date && (i.push(e.data.metadata.date.format("LLLL")), i.push(In(e.data.metadata.date, t))), i.join(" ").toLocaleLowerCase()
}

function yN(e, t, r) {
    var n, i, a;
    if (e.plugins.enabledPlugins.has("dataview") && ((a = (i = (n = e.plugins) == null ? void 0 : n.plugins) == null ? void 0 : i.dataview) != null && a.api)) return e.plugins.plugins.dataview.api.page(t.path, r.path)
}

function mk(e, t) {
    if (!e) return null;
    if (e[t]) return e[t];
    let r = t.split("."),
        n = e;
    for (let i of r)
        if (typeof n == "object" && i in n) n = n[i];
        else {
            n = null;
            break
        } return n
}

function fg(e, t) {
    let r = e.getSetting("metadata-keys");
    if (!r.length) return {};
    if (!t) return {};
    let n = e.app.metadataCache.getFileCache(t),
        i = yN(e.app, t, e.file);
    if (!n && !i) return {};
    let a = {},
        o = {},
        s = {},
        u = [],
        l = !1;
    return r.forEach(c => {
        var h;
        if (s[c.metadataKey]) return;
        if (s[c.metadataKey] = !0, c.metadataKey === "tags") {
            let g = (n == null ? void 0 : n.tags) || [];
            if (Array.isArray((h = n == null ? void 0 : n.frontmatter) == null ? void 0 : h.tags) && (g = [].concat(g, n.frontmatter.tags.map(y => ({
                    tag: `#${y}`
                })))), (g == null ? void 0 : g.length) === 0) return;
            u.push(c.metadataKey), a.tags = {
                ...c,
                value: g.map(y => y.tag).filter(y => o[y] ? !1 : (o[y] = !0, !0)).sort(fr)
            }, l = !0;
            return
        }
        let d = mk(i, c.metadataKey),
            m = mk(n == null ? void 0 : n.frontmatter, c.metadataKey);
        if (m != null && m !== "" && !(Array.isArray(m) && m.length === 0)) {
            if (typeof m == "string") {
                if (/^\d{4}-\d{2}-\d{2}/.test(m)) m = (0, pk.moment)(m);
                else if (/^\[\[[^\]]+\]\]$/.test(m)) {
                    let g = (n.frontmatterLinks || []).find(y => y.key === c.metadataKey);
                    if (g) {
                        let y = e.app.metadataCache.getFirstLinkpathDest(g.link, e.file.path);
                        y && (m = y)
                    }
                }
            } else Array.isArray(m) && (m = m.map((g, y) => {
                if (typeof g == "string" && /^\[\[[^\]]+\]\]$/.test(g)) {
                    let v = (n.frontmatterLinks || []).find(D => D.key === c.metadataKey + "." + y.toString());
                    if (v) {
                        let D = e.app.metadataCache.getFirstLinkpathDest(v.link, e.file.path);
                        if (D) return D
                    }
                }
                return g
            }));
            u.push(c.metadataKey), a[c.metadataKey] = {
                ...c,
                value: m
            }, l = !0
        } else if (d != null && d !== "" && !(Array.isArray(d) && d.length === 0)) {
            let g = i[c.metadataKey];
            u.push(c.metadataKey), a[c.metadataKey] = {
                ...c,
                value: g
            }, l = !0
        }
    }), {
        fileMetadata: l ? a : void 0,
        fileMetadataOrder: u
    }
}

function bk(e, t) {
    return !e && t ? !0 : !["metadata-keys", "date-trigger", "time-trigger", "link-date-to-daily-note", "date-format", "time-format", "move-dates", "move-tags", "inline-metadata-position", "move-task-metadata", "hide-card-count", "tag-colors", "date-colors"].every(n => e[n] === t[n])
}

function Dk(e, t) {
    let r = (0, Vl.getDateFromFile)(t, "day");
    if (!r || !r.isValid()) return;
    e.internalPlugins.plugins["daily-notes"].instance.gotoNextExisting(r)
}

function Sk(e, t) {
    let r = (0, Vl.getDateFromFile)(t, "day");
    if (!r || !r.isValid()) return;
    e.internalPlugins.plugins["daily-notes"].instance.gotoPreviousExisting(r)
}

function ed(e, t) {
    let r = (0, Vl.getDailyNoteSettings)();
    return e.vault.getConfig("useMarkdownLinks") ? `[${t}](${r.folder?`${encodeURIComponent(r.folder)}/`:""}${encodeURIComponent(t)}.md)` : `[[${t}]]`
}

function Ek(e) {
    if (!e) return !1;
    let t = e.match(/---\s+([\w\W]+?)\s+---/);
    return !(!t || !t[1].contains(_t))
}

function hg(e) {
    var r;
    if (!e) return !1;
    let t = app.metadataCache.getFileCache(e);
    return !!((r = t == null ? void 0 : t.frontmatter) != null && r[_t])
}

function cd(e, t) {
    return t ? `${e} (${t})` : e
}

function od(e, t, r, n, i) {
    return e.document.body.createDiv({
        cls: `${$("date-picker")} ${$("ignore-click-outside")}`
    }, a => {
        a.style.left = `${r.x||0}px`, a.style.top = `${r.y||0}px`, a.createEl("input", {
            type: "text"
        }, o => {
            a.win.setTimeout(() => {
                let s = null,
                    u = d => {
                        d.target instanceof d.view.HTMLElement && d.target.closest(`.${$("date-picker")}`) === null && c()
                    },
                    l = d => {
                        d.key === "Escape" && c()
                    },
                    c = () => {
                        s.destroy(), a.remove(), e.document.body.removeEventListener("click", u), e.document.removeEventListener("keydown", l)
                    };
                s = Qc(o, {
                    locale: zc(t),
                    defaultDate: i,
                    inline: !0,
                    onChange: d => {
                        n(d), c()
                    },
                    win: e
                }), a.win.setTimeout(() => {
                    let d = a.clientHeight,
                        m = a.clientWidth;
                    r.y + d > e.innerHeight && (a.style.top = `${(r.y||0)-d}px`), r.x + m > e.innerWidth && (a.style.left = `${(r.x||0)-m}px`)
                }), e.document.body.addEventListener("click", u), e.document.addEventListener("keydown", l)
            })
        })
    })
}

function sd({
    stateManager: e,
    boardModifiers: t,
    item: r,
    hasDate: n,
    path: i
}) {
    let a = e.getSetting("date-format"),
        o = e.getSetting("link-date-to-daily-note"),
        s = e.getSetting("date-trigger"),
        u = o ? "(?:\\[[^\\]]+\\]\\([^)]+\\)|\\[\\[[^\\]]+\\]\\])" : "{[^}]+}",
        l = new RegExp(`(^|\\s)${Qn(s)}${u}`);
    return c => {
        let d = c[0],
            m = (0, An.moment)(d).format(a),
            h = o ? ed(e.app, m) : `{${m}}`,
            g = r.data.titleRaw;
        n ? g = r.data.titleRaw.replace(l, `$1${s}${h}`) : g = `${r.data.titleRaw} ${s}${h}`, t.updateItem(i, e.updateItemContent(r, g))
    }
}

function lg(e) {
    let t = e.getSetting("time-format"),
        r = [];
    for (let n = 0; n < 24; n++) r.push((0, An.moment)({
        hour: n
    }).format(t)), r.push((0, An.moment)({
        hour: n,
        minute: 15
    }).format(t)), r.push((0, An.moment)({
        hour: n,
        minute: 30
    }).format(t)), r.push((0, An.moment)({
        hour: n,
        minute: 45
    }).format(t));
    return r
}

function ld(e, t, r, n, i) {
    let a = $("time-picker"),
        o = t.getSetting("time-format"),
        s = i == null ? void 0 : i.format(o);
    e.document.body.createDiv({
        cls: `${a} ${$("ignore-click-outside")}`
    }, u => {
        let l = lg(t),
            c = v => {
                v.target instanceof v.view.HTMLElement && v.target.hasClass($("time-picker-item")) && v.target.dataset.value && (n(v.target.dataset.value), h())
            },
            d = v => {
                v.target instanceof v.view.HTMLElement && v.target.closest(`.${a}`) === null && h()
            },
            m = v => {
                v.key === "Escape" && h()
            },
            h = () => {
                u.remove(), u.removeEventListener("click", c), e.document.body.removeEventListener("click", d), e.document.removeEventListener("keydown", m)
            };
        u.style.left = `${r.x||0}px`, u.style.top = `${r.y||0}px`;
        let g = null,
            y = null;
        l.forEach((v, D) => {
            let I = v === s;
            u.createDiv({
                cls: `${$("time-picker-item")} ${I?"is-selected":""}`,
                text: v
            }, C => {
                C.createEl("span", {
                    cls: $("time-picker-check"),
                    prepend: !0
                }, x => {
                    (0, An.setIcon)(x, "lucide-check")
                }), D % 4 === 0 && C.addClass("is-hour"), C.dataset.value = v, I && (g = C), D === Math.floor(l.length / 2) && (y = C)
            })
        }), u.win.setTimeout(() => {
            var I;
            let v = u.clientHeight,
                D = u.clientWidth;
            r.y + v > e.innerHeight && (u.style.top = `${(r.y||0)-v}px`), r.x + D > e.innerWidth && (u.style.left = `${(r.x||0)-D}px`), (I = g || y) == null || I.scrollIntoView({
                block: "center",
                inline: "nearest"
            }), u.addEventListener("click", c), e.document.body.addEventListener("click", d), e.document.addEventListener("keydown", m)
        })
    })
}

function ud({
    stateManager: e,
    boardModifiers: t,
    item: r,
    hasTime: n,
    path: i
}) {
    let a = e.getSetting("time-trigger"),
        o = new RegExp(`(^|\\s)${Qn(a)}{([^}]+)}`);
    return s => {
        let u = r.data.titleRaw;
        n ? u = r.data.titleRaw.replace(o, `$1${a}{${s}}`) : u = `${r.data.titleRaw} ${a}{${s}}`, t.updateItem(i, e.updateItemContent(r, u))
    }
}

function xk(e) {
    let t = e.data.metadata.date,
        r = [];
    t && (t.isSame(new Date, "day") && r.push("is-today"), t.isAfter(new Date, "day") && r.push("is-future"), t.isBefore(new Date, "day") && r.push("is-past")), e.data.checked && e.data.checkChar === Zn() && r.push("is-complete");
    for (let n of e.data.metadata.tags) r.push(`has-tag-${n.slice(1)}`);
    return r
}

function uo(e, t, r, n) {
    return e.app.fileManager.generateMarkdownLink(t, r, n)
}

function vN(e) {
    return (0, An.htmlToMarkdown)(e)
}

function wN(e) {
    return e.replace(/^\[(.*)\]\(app:\/\/obsidian.md\/(.*)\)$/, "[$1]($2)")
}

function bN(e) {
    var r;
    let t = e.require("electron").remote.clipboard;
    if (process.platform === "darwin") {
        if (t.has("NSFilenamesPboardType")) return ((r = t.read("NSFilenamesPboardType").match(/<string>.*<\/string>/g)) == null ? void 0 : r.map(n => n.replace(/<string>|<\/string>/g, ""))) || [];
        {
            let n = t.readImage("clipboard");
            return n.isEmpty() ? [t.read("public.file-url").replace("file://", "")].filter(i => i) : [{
                buffer: n.toPNG(),
                mimeType: "image/png",
                originalName: `Pasted image ${(0,An.moment)().format("YYYYMMDDHHmmss")}.png`
            }]
        }
    } else if (t.has("CF_HDROP")) {
        let n = t.read("CF_HDROP") || "",
            i = [...n].filter((o, s) => n.charCodeAt(s) !== 0).join("").replace(/\\/g, "\\"),
            a = i.match(/[a-zA-Z]:\\/);
        if (a) {
            let o = i.indexOf(a[0]);
            return o !== 0 && (i = i.slice(o)), i.split(a[0]).filter(s => s).map(s => a + s)
        }
    } else {
        let n = t.readImage("clipboard");
        return n.isEmpty() ? [t.readBuffer("FileNameW").toString("ucs2").replace(RegExp("\0", "g"), "")].filter(i => i) : [{
            buffer: n.toPNG(),
            mimeType: "image/png",
            originalName: `Pasted image ${(0,An.moment)().format("YYYYMMDDHHmmss")}.png`
        }]
    }
    return null
}

function DN(e) {
    return e.split("\\").pop().split("/").pop()
}
async function SN(e, t, r, n) {
    let i = await e.app.vault.getAvailablePathForAttachments(t, r, e.file),
        a = await e.app.vault.createBinary(i, n);
    return uo(e, a, e.file.path)
}
async function EN(e, t) {
    let r = bN(t);
    if (!r || r.length === 0) return null;
    let n = t.require("fs/promises"),
        i = t.require("path");
    return (await Promise.all(r.map(async a => {
        if (typeof a == "string") {
            let s = DN(a).split("."),
                u = s.pop(),
                l = s.join("."),
                c = await e.app.vault.getAvailablePathForAttachments(l, u, e.file),
                d = e.app.vault.adapter.basePath;
            await n.copyFile(a, i.join(d, c)), await new Promise(h => t.setTimeout(h, 50));
            let m = e.app.vault.getAbstractFileByPath(c);
            return uo(e, m, e.file.path)
        } else {
            let o = a.originalName.split("."),
                s = o.pop(),
                u = o.join(".");
            return await SN(e, u, s, a.buffer)
        }
    }))).filter(a => a)
}

function kk(e, t, r) {
    return Promise.all(t.map(n => {
        let i = n.name.split("."),
            a = i.pop(),
            o = i.join(".");
        if (r) {
            switch (n.type) {
                case "text/jpg":
                    a = "jpg";
                    break;
                case "text/jpeg":
                    a = "jpeg";
                    break;
                case "text/png":
                    a = "png";
                    break
            }
            o = "Pasted image " + (0, An.moment)().format("YYYYMMDDHHmmss")
        }
        return new Promise((s, u) => {
            let l = new FileReader;
            l.onload = async c => {
                try {
                    let d = await e.app.vault.getAvailablePathForAttachments(o, a, e.file),
                        m = await e.app.vault.createBinary(d, c.target.result);
                    s(uo(e, m, e.file.path))
                } catch (d) {
                    console.error(d), u(d)
                }
            }, l.readAsArrayBuffer(n)
        })
    }))
}
async function kN(e, t, r) {
    let n = !t.view,
        i = n ? e.getAView().isShiftPressed : !1,
        a = n ? t.clipboardData : t.dataTransfer,
        o = n && An.Platform.isDesktopApp ? r.require("electron").remote.clipboard : null,
        s = o ? o.availableFormats() : [];
    if (n) {
        if (n && !i && !s.includes("text/rtf")) {
            if (An.Platform.isDesktopApp) {
                let g = await EN(e, r);
                if (g != null && g.length) return g
            }
            let m = [],
                h = t.clipboardData.items;
            for (let g in h) {
                let y = h[g];
                y.kind === "file" && m.push(y.getAsFile())
            }
            if (m.length) return await kk(e, m, !0)
        }
    } else {
        let m = await Jh(t);
        if (m.length) return await kk(e, m)
    }
    let u = a.getData("text/html"),
        l = a.getData("text/plain"),
        c = a.getData("text/uri-list"),
        d = i ? l || u : vN(u);
    return [wN(d || c || l || u || "").trim()]
}
async function Ck(e, t, r) {
    let n = e.app.dragManager.draggable,
        i = t.view ? t.dataTransfer : t.clipboardData;
    switch (n == null ? void 0 : n.type) {
        case "file":
            return [uo(e, n.file, e.file.path)];
        case "files":
            return n.files.map(a => uo(e, a, e.file.path));
        case "folder":
            return n.file.children.map(a => a instanceof An.TFolder ? null : uo(e, a, e.file.path)).filter(a => a);
        case "link": {
            let a = n.file ? uo(e, n.file, (0, An.parseLinktext)(n.linktext).subpath) : `[[${n.linktext}]]`,
                o = new DOMParser().parseFromString(i.getData("text/html"), "text/html").documentElement.textContent;
            return a = a.replace(/]]$/, `|${o}]]`).replace(/^\[[^\]].+]\(/, `[${o}](`), [a]
        }
        default:
            return await kN(e, t, r)
    }
}

function dd(e, t) {
    let r, n, i = (...a) => {
        r = a, !n && (n = e.requestAnimationFrame(() => {
            n = null, t(...r)
        }))
    };
    return i.cancel = () => {
        n && (e.cancelAnimationFrame(n), n = null)
    }, i
}
var Tk = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)"
};
var gs = {
        outOfTheWay: 200,
        minDropTime: 330,
        maxDropTime: 550
    },
    Ma = `${gs.outOfTheWay}ms ${Tk.outOfTheWay}`;
var Lr = {
        none: "none",
        fluid: `opacity ${Ma}`,
        snap: `transform ${Ma}, opacity ${Ma}`,
        drop: e => {
            let t = `${e}ms ${Tk.drop}`;
            return `transform ${t}, opacity ${t}`
        },
        outOfTheWay: `transform ${Ma}`,
        placeholder: `height ${Ma}, width ${Ma}, margin ${Ma}, border-color ${Ma}`
    },
    xN = (e, t) => e.x === t.x && e.y === t.y,
    CN = {
        x: 0,
        y: 0
    },
    _k = e => xN(e, CN) ? void 0 : `translate(${e.x}px, ${e.y}px)`,
    Fk = {
        moveTo: _k,
        drop: e => _k(e)
    },
    _N = gs.maxDropTime - gs.minDropTime,
    Mk = 1500,
    MN = .6;

function ys({
    position: e,
    destination: t,
    isCancel: r
}) {
    let n = qa(e, t);
    if (n <= 0) return gs.minDropTime;
    if (n >= Mk) return gs.maxDropTime;
    let i = n / Mk,
        a = gs.minDropTime + _N * i,
        o = r ? a * MN : a;
    return Math.round(o)
}

function ui(e, t, r) {
    e.style.getPropertyValue(t) !== r && e.style.setProperty(t, r)
}

function fd(e, t) {
    e.style.getPropertyValue(t) && e.style.removeProperty(t)
}

function mg(e, t, r, n, i) {
    let a = "htmldnd",
        o = et(),
        s = e - 75,
        u = e + 75,
        l = t - 25,
        c = t + 25;
    return {
        scopeId: a,
        entityId: `${a}-${o}`,
        initial: [s, l, u, c],
        getParentScrollState() {
            return Tr
        },
        getParentScrollShift() {
            return vi
        },
        recalcInitial() {},
        getHitbox() {
            return this.initial
        },
        getPath() {
            return []
        },
        getData() {
            return {
                viewId: n,
                type: ft.Item,
                id: o,
                content: r,
                accepts: [],
                win: i
            }
        }
    }
}
var hd = class {
        constructor(t, r, n, i) {
            this.isHTMLDragging = !1;
            this.dragOverTimeout = 0;
            this.win = t, this.hitboxEntities = n, this.scrollEntities = i, this.emitter = r
        }
        getDragEventData() {
            return {
                dragEntity: this.dragEntity,
                dragEntityId: this.dragEntityId,
                dragEntityMargin: this.dragEntityMargin,
                dragOrigin: this.dragOrigin,
                dragOriginHitbox: this.dragOriginHitbox,
                dragPosition: this.dragPosition,
                primaryIntersection: this.primaryIntersection,
                scrollIntersection: this.scrollIntersection
            }
        }
        dragStart(t, r) {
            var a;
            let n = (r == null ? void 0 : r.dataset.hitboxid) || t.currentTarget.dataset.hitboxid;
            if (!n) return;
            let i = getComputedStyle(r || t.currentTarget);
            this.dragEntityId = n, this.dragOrigin = {
                x: t.pageX,
                y: t.pageY
            }, this.dragPosition = {
                x: t.pageX,
                y: t.pageY
            }, this.dragEntity = this.hitboxEntities.get(n), this.dragOriginHitbox = (a = this.dragEntity) == null ? void 0 : a.getHitbox(), this.dragEntityMargin = [parseFloat(i.marginLeft) || 0, parseFloat(i.marginTop) || 0, parseFloat(i.marginRight) || 0, parseFloat(i.marginBottom) || 0], this.emitter.emit("dragStart", this.getDragEventData())
        }
        dragStartHTML(t, r) {
            this.isHTMLDragging = !0;
            let n = mg(t.pageX, t.pageY, [], r, t.view);
            this.dragEntityId = n.entityId, this.dragOrigin = {
                x: t.pageX,
                y: t.pageY
            }, this.dragPosition = {
                x: t.pageX,
                y: t.pageY
            }, this.dragEntity = n, this.dragOriginHitbox = n.getHitbox(), this.dragEntityMargin = [0, 0, 0, 0], this.emitter.emit("dragStart", this.getDragEventData())
        }
        dragMove(t) {
            this.dragPosition = {
                x: t.pageX,
                y: t.pageY
            }, this.emitter.emit("dragMove", this.getDragEventData()), this.calculateDragIntersect()
        }
        dragMoveHTML(t) {
            this.dragPosition = {
                x: t.pageX,
                y: t.pageY
            }, this.emitter.emit("dragMove", this.getDragEventData()), this.calculateDragIntersect()
        }
        dragEnd(t) {
            this.emitter.emit("dragEnd", this.getDragEventData()), this.dragEntityMargin = void 0, this.dragEntity = void 0, this.dragEntityId = void 0, this.dragOrigin = void 0, this.dragOriginHitbox = void 0, this.dragPosition = void 0, this.scrollIntersection = void 0, this.primaryIntersection = void 0
        }
        dragEndHTML(t, r, n, i) {
            this.isHTMLDragging = !1, i || (this.dragEntity = mg(t.pageX, t.pageY, n, r, t.view), this.emitter.emit("dragEnd", this.getDragEventData())), this.dragEntityMargin = void 0, this.dragEntity = void 0, this.dragEntityId = void 0, this.dragOrigin = void 0, this.dragOriginHitbox = void 0, this.dragPosition = void 0, this.scrollIntersection = void 0, this.primaryIntersection = void 0, i && this.emitter.emit("dragEnd", this.getDragEventData())
        }
        onHTMLDragLeave(t) {
            this.win.clearTimeout(this.dragOverTimeout), this.dragOverTimeout = this.win.setTimeout(t, 351)
        }
        calculateDragIntersect() {
            if (!this.dragEntity || !this.dragPosition || !this.dragOrigin || !this.dragOriginHitbox) return;
            let {
                type: t,
                win: r
            } = this.dragEntity.getData(), n = [], i = [], a = [], o = [];
            if (this.hitboxEntities.forEach(l => {
                    var d;
                    let c = l.getData();
                    r === c.win && (c.accepts.includes(t) || (d = c.acceptsSort) != null && d.includes(t)) && (n.push(l), i.push(l.getHitbox()))
                }), this.scrollEntities.forEach(l => {
                    let c = l.getData();
                    r === c.win && c.accepts.includes(t) && (a.push(l), o.push(l.getHitbox()))
                }), n.length === 0 && a.length === 0) return;
            let s = Mb(this.dragOriginHitbox, this.dragOrigin, this.dragPosition);
            this.handleScrollIntersect(s, this.dragEntity, o, a) || this.handleHitboxIntersect(s, this.dragEntity, i, n)
        }
        handleScrollIntersect(t, r, n, i) {
            let a = (0, pg.default)([t], n).map(s => i[s[1]]),
                o = _b(a, t, r);
            if (this.scrollIntersection && (!o || o[0] !== this.scrollIntersection[0])) {
                let [s, u] = this.scrollIntersection, l = s.getData(), c = s.entityId, d = l.side;
                this.emitter.emit("endDragScroll", {
                    ...this.getDragEventData(),
                    scrollEntity: s,
                    scrollEntityId: c,
                    scrollEntitySide: d,
                    scrollStrength: u
                }, c), this.scrollIntersection = void 0
            }
            if (o && (!this.scrollIntersection || this.scrollIntersection[0] !== o[0])) {
                let [s, u] = o, l = s.getData(), c = s.entityId, d = l.side;
                this.emitter.emit("beginDragScroll", {
                    ...this.getDragEventData(),
                    scrollEntity: s,
                    scrollEntityId: c,
                    scrollEntitySide: d,
                    scrollStrength: u
                }, c), this.scrollIntersection = o
            } else if (o && this.scrollIntersection && o[0] === this.scrollIntersection[0]) {
                let [s, u] = o, l = s.getData(), c = s.entityId, d = l.side;
                this.emitter.emit("updateDragScroll", {
                    ...this.getDragEventData(),
                    scrollEntity: s,
                    scrollEntityId: c,
                    scrollEntitySide: d,
                    scrollStrength: u
                }, c), this.scrollIntersection = o
            }
            return !!o
        }
        handleHitboxIntersect(t, r, n, i) {
            let a = (0, pg.default)([t], n).map(s => i[s[1]]),
                o = Mh(a, t, r);
            this.primaryIntersection && this.primaryIntersection !== o && (this.emitter.emit("dragLeave", this.getDragEventData(), this.primaryIntersection.entityId), this.primaryIntersection = void 0), o && this.primaryIntersection !== o && (this.emitter.emit("dragEnter", {
                ...this.getDragEventData(),
                primaryIntersection: o
            }, o.entityId), this.primaryIntersection = o)
        }
    },
    vs = e => {
        e.preventDefault(), e.stopPropagation()
    };

function Ta(e, t) {
    let r = Ee(cn),
        n = Fe(() => {});
    return Ye(i => {
        if (t.current !== i && (n.current(), n.current = () => {}), !i) return;
        let a = i,
            o = u => {
                if (u.defaultPrevented || !r || !e.current) return;
                let l = e.current,
                    c = u.targetNode;
                for (; c;) {
                    if (c.instanceOf(HTMLElement) && c.dataset.ignoreDrag) return;
                    c = c.parentElement
                }
                if (u.button !== 0 && u.buttons !== 1) return;
                let d = u.view,
                    m = ["pen", "touch"].includes(u.pointerType),
                    h = u.pointerId;
                m || (u.stopPropagation(), u.preventDefault());
                let g = u,
                    y = {
                        x: u.pageX,
                        y: u.pageY
                    },
                    v = !1,
                    D = 0;
                m && (d.addEventListener("contextmenu", vs, !0), D = d.setTimeout(() => {
                    r.dragManager.dragStart(g, l), v = !0, d.addEventListener("touchmove", vs, {
                        passive: !1
                    })
                }, 500));
                let I = dd(d, x => {
                        x.pointerId === h && (m ? v ? r.dragManager.dragMove(x) : qa(y, {
                            x: x.pageX,
                            y: x.pageY
                        }) > 5 && (d.clearTimeout(D), d.removeEventListener("touchmove", vs), d.removeEventListener("contextmenu", vs, !0), d.removeEventListener("pointermove", I), d.removeEventListener("pointerup", C), d.removeEventListener("pointercancel", C)) : v ? r.dragManager.dragMove(x) : qa(y, {
                            x: x.pageX,
                            y: x.pageY
                        }) > 5 && (r.dragManager.dragStart(g, l), v = !0))
                    }),
                    C = x => {
                        x.pointerId === h && (d.clearTimeout(D), v = !1, r.dragManager.dragEnd(x), d.removeEventListener("pointermove", I), d.removeEventListener("pointerup", C), d.removeEventListener("pointercancel", C), m && (d.removeEventListener("contextmenu", vs, !0), d.removeEventListener("touchmove", vs)))
                    };
                d.addEventListener("pointermove", I), d.addEventListener("pointerup", C), d.addEventListener("pointercancel", C)
            },
            s = u => {
                u.stopPropagation()
            };
        return a.addEventListener("pointerdown", o), a.addEventListener("touchstart", s), () => {
            a.removeEventListener("pointerdown", o), a.removeEventListener("touchstart", s)
        }
    }, [])
}

function Ik(e) {
    let t = Ee(cn),
        r = Ye(i => {
            t.dragManager.isHTMLDragging ? (i.preventDefault(), t.dragManager.dragMoveHTML(i)) : t.dragManager.dragStartHTML(i, e.getAView().id), t.dragManager.onHTMLDragLeave(() => {
                t.dragManager.dragEndHTML(i, e.getAView().id, [], !0)
            })
        }, [t, e]),
        n = Ye(async i => {
            t.dragManager.dragEndHTML(i, e.getAView().id, await Ck(e, i, activeWindow), !1)
        }, [t, e]);
    return {
        onDragOver: r,
        onDrop: n
    }
}
var Ok = Ct(ln());
var Ak = require("obsidian");

function Ut({
    name: e,
    className: t
}) {
    return E("span", {
        "data-icon": e,
        className: `${$("icon")} ${t||""}`,
        ref: r => {
            r && (0, Ak.setIcon)(r, e)
        }
    })
}
var md = zt(function({
    shouldMarkItemsComplete: t,
    path: r,
    item: n,
    stateManager: i,
    boardModifiers: a
}) {
    let o = i.useSetting("show-checkboxes"),
        [s, u] = Ne(!1),
        [l, c] = Ne(!1),
        d = Ye(() => {
            let m = Ro(n, i.file);
            if (m) {
                let [h, g, y] = m, v = h.map((D, I) => {
                    let C = i.getNewItem(D, g[I]);
                    return I === y && (C.id = n.id), C
                });
                a.replaceItem(r, v)
            } else a.updateItem(r, (0, Ok.default)(n, {
                data: {
                    checkChar: {
                        $apply: h => h === " " ? Zn() : " "
                    },
                    $toggle: ["checked"]
                }
            }))
        }, [n, i, a, ...r]);
    return Ae(() => {
        if (l) {
            let m = h => {
                h.metaKey || h.ctrlKey ? u(!0) : u(!1)
            };
            return activeWindow.addEventListener("keydown", m), activeWindow.addEventListener("keyup", m), () => {
                activeWindow.removeEventListener("keydown", m), activeWindow.removeEventListener("keyup", m)
            }
        }
    }, [l]), t || o ? E("div", {
        onMouseEnter: m => {
            c(!0), (m.ctrlKey || m.metaKey) && u(!0)
        },
        onMouseLeave: () => {
            c(!1), s && u(!1)
        },
        className: $("item-prefix-button-wrapper"),
        children: [o && !s && E("input", {
            onChange: d,
            type: "checkbox",
            className: "task-list-item-checkbox",
            checked: n.data.checked,
            "data-task": n.data.checkChar
        }), (s || !o && t) && E("a", {
            onClick: () => {
                a.archiveItem(r)
            },
            className: `${$("item-prefix-button")} clickable-icon`,
            "aria-label": s ? void 0 : "Archive card",
            children: E(Ut, {
                name: "sheets-in-box"
            })
        })]
    }) : null
});
var Lk = Ct(ln()),
    pd = require("obsidian");
var TN = /[\\/:"*?<>|]+/g,
    FN = /!?\[\[([^\]]*)\.[^\]]+\]\]/g,
    IN = /!?\[\[([^\]]*)\]\]/g,
    AN = /!?\[([^\]]*)\]\([^)]*\)/g,
    ON = /#([^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~[\]\\\s\n\r]+)/g,
    LN = /\s+/g;

function gd({
    setEditState: e,
    item: t,
    path: r,
    boardModifiers: n,
    stateManager: i
}) {
    return Ye(a => {
        let o = {
                x: a.clientX,
                y: a.clientY
            },
            s = !!t.data.metadata.date,
            u = !!t.data.metadata.time,
            l = new pd.Menu().addItem(d => {
                d.setIcon("lucide-edit").setTitle(R("Edit card")).onClick(() => e(o))
            });
        l.addItem(d => {
            d.setIcon("lucide-file-plus-2").setTitle(R("New note from card")).onClick(async () => {
                let m = t.data.titleRaw.split(`
`)[0].trim(),
                    h = m.replace(FN, "$1").replace(IN, "$1").replace(AN, "$1").replace(ON, "$1").replace(TN, " ").trim().replace(LN, " "),
                    g = i.getSetting("new-note-folder"),
                    y = i.getSetting("new-note-template"),
                    v = g ? i.app.vault.getAbstractFileByPath(g) : i.app.fileManager.getNewFileParent(i.file.path),
                    D = await i.app.fileManager.createNewMarkdownFile(v, h),
                    I = i.app.workspace.splitActiveLeaf();
                await I.openFile(D), i.app.workspace.setActiveLeaf(I, !1, !0), await yb(i, y);
                let C = t.data.titleRaw.replace(m, i.app.fileManager.generateMarkdownLink(D, i.file.path));
                n.updateItem(r, i.updateItemContent(t, C))
            })
        }).addItem(d => {
            d.setIcon("lucide-link").setTitle(R("Copy link to card")).onClick(() => {
                if (t.data.blockId) navigator.clipboard.writeText(`${this.app.fileManager.generateMarkdownLink(i.file,"","#^"+t.data.blockId)}`);
                else {
                    let m = et(6);
                    navigator.clipboard.writeText(`${this.app.fileManager.generateMarkdownLink(i.file,"","#^"+m)}`), n.updateItem(r, i.updateItemContent((0, Lk.default)(t, {
                        data: {
                            blockId: {
                                $set: m
                            }
                        }
                    }), t.data.titleRaw))
                }
            })
        }).addSeparator(), /\n/.test(t.data.titleRaw) && l.addItem(d => {
            d.setIcon("lucide-wrap-text").setTitle(R("Split card")).onClick(async () => {
                let m = t.data.titleRaw.split(/[\r\n]+/g).map(g => g.trim()),
                    h = await Promise.all(m.map(g => i.getNewItem(g, " ")));
                n.splitItem(r, h)
            })
        }), l.addItem(d => {
            d.setIcon("lucide-copy").setTitle(R("Duplicate card")).onClick(() => n.duplicateEntity(r))
        }).addItem(d => {
            d.setIcon("lucide-list-start").setTitle(R("Insert card before")).onClick(() => n.insertItems(r, [i.getNewItem("", " ", !0)]))
        }).addItem(d => {
            d.setIcon("lucide-list-end").setTitle(R("Insert card after")).onClick(() => {
                let m = [...r];
                m[m.length - 1] = m[m.length - 1] + 1, n.insertItems(m, [i.getNewItem("", " ", !0)])
            })
        }).addItem(d => {
            d.setIcon("lucide-arrow-up").setTitle(R("Move to top")).onClick(() => n.moveItemToTop(r))
        }).addItem(d => {
            d.setIcon("lucide-arrow-down").setTitle(R("Move to bottom")).onClick(() => n.moveItemToBottom(r))
        }).addItem(d => {
            d.setIcon("lucide-archive").setTitle(R("Archive card")).onClick(() => n.archiveItem(r))
        }).addItem(d => {
            d.setIcon("lucide-trash-2").setTitle(R("Delete card")).onClick(() => n.deleteEntity(r))
        }).addSeparator().addItem(d => {
            d.setIcon("lucide-calendar-check").setTitle(s ? R("Edit date") : R("Add date")).onClick(() => {
                var m;
                od(a.view, i, o, sd({
                    stateManager: i,
                    boardModifiers: n,
                    item: t,
                    hasDate: s,
                    path: r
                }), (m = t.data.metadata.date) == null ? void 0 : m.toDate())
            })
        }), s && (l.addItem(d => {
            d.setIcon("lucide-x").setTitle(R("Remove date")).onClick(() => {
                let m = i.getSetting("link-date-to-daily-note"),
                    h = i.getSetting("date-trigger"),
                    g = m ? "(?:\\[[^\\]]+\\]\\([^\\)]+\\)|\\[\\[[^\\]]+\\]\\])" : "{[^}]+}",
                    y = new RegExp(`(^|\\s)${Qn(h)}${g}`),
                    v = t.data.titleRaw.replace(y, "").trim();
                n.updateItem(r, i.updateItemContent(t, v))
            })
        }), l.addItem(d => {
            d.setIcon("lucide-clock").setTitle(u ? R("Edit time") : R("Add time")).onClick(() => {
                ld(a.view, i, o, ud({
                    stateManager: i,
                    boardModifiers: n,
                    item: t,
                    hasTime: u,
                    path: r
                }), t.data.metadata.time)
            })
        }), u && l.addItem(d => {
            d.setIcon("lucide-x").setTitle(R("Remove time")).onClick(() => {
                let m = i.getSetting("time-trigger"),
                    h = new RegExp(`(^|\\s)${Qn(m)}{([^}]+)}`),
                    g = t.data.titleRaw.replace(h, "").trim();
                n.updateItem(r, i.updateItemContent(t, g))
            })
        })), l.addSeparator();
        let c = d => {
            let m = i.state.children;
            if (!(m.length <= 1))
                for (let h = 0, g = m.length; h < g; h++) d.addItem(y => y.setIcon("lucide-square-kanban").setChecked(r[0] === h).setTitle(m[h].data.title).onClick(() => {
                    r[0] !== h && i.setState(v => Ri(v, r, [h, 0]))
                }))
        };
        pd.Platform.isPhone ? c(l) : l.addItem(d => {
            let m = d.setTitle(R("Move to list")).setIcon("lucide-square-kanban").setSubmenu();
            c(m)
        }), l.showAtPosition(o)
    }, [e, t, r, n, i])
}
var Pk = $e.memo(function({
    editState: t,
    setEditState: r,
    showMenu: n
}) {
    let i = $e.useMemo(() => t ? {
        "data-ignore-drag": !0
    } : {}, [t]);
    return E("div", {
        ...i,
        className: $("item-postfix-button-wrapper"),
        children: kn(t) ? E("a", {
            "data-ignore-drag": !0,
            onPointerDown: a => a.preventDefault(),
            onClick: () => r(0),
            className: `${$("item-postfix-button")} is-enabled clickable-icon`,
            "aria-label": R("Cancel"),
            children: E(Ut, {
                name: "lucide-x"
            })
        }) : E("a", {
            "data-ignore-drag": !0,
            onPointerDown: a => a.preventDefault(),
            onClick: n,
            className: `${$("item-postfix-button")} clickable-icon`,
            "aria-label": R("More options"),
            children: E(Ut, {
                name: "lucide-more-vertical"
            })
        })
    })
});
var Nk = zt(function({
        item: t,
        shouldMarkItemsComplete: r,
        isMatch: n,
        searchQuery: i,
        isStatic: a
    }) {
        let {
            stateManager: o,
            boardModifiers: s
        } = Ee(tt), [u, l] = Ne(0), c = Ee(cn);
        Ae(() => {
            let v = () => {
                kn(u) && l(0)
            };
            return c.dragManager.emitter.on("dragStart", v), () => {
                c.dragManager.emitter.off("dragStart", v)
            }
        }, [c, u]), Ae(() => {
            t.data.forceEditMode && l({
                x: 0,
                y: 0
            })
        }, [t.data.forceEditMode]);
        let d = Ui(),
            m = gd({
                boardModifiers: s,
                item: t,
                setEditState: l,
                stateManager: o,
                path: d
            }),
            h = Ye(v => {
                kn(u) || v.targetNode.instanceOf(HTMLAnchorElement) && (v.targetNode.hasClass("internal-link") || v.targetNode.hasClass("external-link")) || m(v)
            }, [m, u]),
            g = Ye(v => l({
                x: v.clientX,
                y: v.clientY
            }), [l]),
            y = Re(() => kn(u) ? {
                "data-ignore-drag": !0
            } : {}, [u]);
        return E("div", {
            onDblClick: g,
            onContextMenu: h,
            className: $("item-content-wrapper"),
            ...y,
            children: [E("div", {
                className: $("item-title-wrapper"),
                ...y,
                children: [E(md, {
                    boardModifiers: s,
                    item: t,
                    path: d,
                    shouldMarkItemsComplete: r,
                    stateManager: o
                }), E(ad, {
                    item: t,
                    searchQuery: n ? i : void 0,
                    setEditState: l,
                    editState: u,
                    isStatic: a
                }), E(Pk, {
                    editState: u,
                    setEditState: l,
                    showMenu: m
                })]
            }), E(fk, {
                searchQuery: n ? i : void 0,
                item: t
            })]
        })
    }),
    gg = zt(function(t) {
        let r = Fe(null),
            n = Fe(null),
            i = Ee(zn),
            {
                itemIndex: a,
                ...o
            } = t,
            s = Ta(n, n),
            u = i != null && i.query ? o.item.data.titleSearch.includes(i.query) : !1,
            l = xk(o.item);
        return E("div", {
            ref: c => {
                n.current = c, s(c)
            },
            className: $("item-wrapper"),
            children: E("div", {
                ref: r,
                className: Ge([$("item"), ...l]),
                children: t.isStatic ? E(Nk, {
                    ...o,
                    isMatch: u,
                    searchQuery: i == null ? void 0 : i.query,
                    isStatic: !0
                }) : E(ei, {
                    elementRef: r,
                    measureRef: n,
                    id: t.item.id,
                    index: a,
                    data: t.item,
                    children: E(Nk, {
                        ...o,
                        isMatch: u,
                        searchQuery: i == null ? void 0 : i.query
                    })
                })
            })
        })
    }),
    Rk = zt(function({
        isStatic: t,
        items: r,
        shouldMarkItemsComplete: n
    }) {
        let i = Ee(zn),
            {
                view: a
            } = Ee(tt),
            o = a.useViewState(_t);
        return E(ct, {
            children: r.map((s, u) => i != null && i.query && !i.items.has(s) ? null : E(gg, {
                item: s,
                itemIndex: u,
                shouldMarkItemsComplete: n,
                isStatic: t
            }, o + s.id))
        })
    });
var PN = function(e, t, r, n) {
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
};

function yd(e) {
    let t = 0,
        r = 0,
        n = e;
    do t += n.offsetTop || 0, r += n.offsetLeft || 0, n = n.offsetParent; while (n);
    return {
        top: t,
        left: r
    }
}
var yg = class {
        constructor(t) {
            this.element = t
        }
        getHorizontalScroll() {
            return this.element.scrollLeft
        }
        getVerticalScroll() {
            return this.element.scrollTop
        }
        getMaxHorizontalScroll() {
            return this.element.scrollWidth - this.element.clientWidth
        }
        getMaxVerticalScroll() {
            return this.element.scrollHeight - this.element.clientHeight
        }
        getHorizontalElementScrollOffset(t, r) {
            return yd(t).left - yd(r).left
        }
        getVerticalElementScrollOffset(t, r) {
            return yd(t).top - yd(r).top
        }
        scrollTo(t, r) {
            this.element.scrollLeft = t, this.element.scrollTop = r
        }
    },
    vg = class {
        constructor() {
            this.element = window
        }
        getHorizontalScroll() {
            return window.scrollX || document.documentElement.scrollLeft
        }
        getVerticalScroll() {
            return window.scrollY || document.documentElement.scrollTop
        }
        getMaxHorizontalScroll() {
            return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth) - window.innerWidth
        }
        getMaxVerticalScroll() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight
        }
        getHorizontalElementScrollOffset(t) {
            return (window.scrollX || document.documentElement.scrollLeft) + t.getBoundingClientRect().left
        }
        getVerticalElementScrollOffset(t) {
            return (window.scrollY || document.documentElement.scrollTop) + t.getBoundingClientRect().top
        }
        scrollTo(t, r) {
            window.scrollTo(t, r)
        }
    },
    Ji = {
        elements: [],
        cancelMethods: [],
        add: (e, t) => {
            Ji.elements.push(e), Ji.cancelMethods.push(t)
        },
        remove: (e, t) => {
            let r = Ji.elements.indexOf(e);
            r > -1 && (t && Ji.cancelMethods[r](), Ji.elements.splice(r, 1), Ji.cancelMethods.splice(r, 1))
        }
    },
    Hk = typeof window != "undefined",
    NN = {
        cancelOnUserAction: !0,
        easing: e => --e * e * e + 1,
        elementToScroll: Hk ? window : null,
        horizontalOffset: 0,
        maxDuration: 3e3,
        minDuration: 250,
        speed: 500,
        verticalOffset: 0
    };

function RN(e, t = {}) {
    return PN(this, void 0, void 0, function*() {
        if (Hk) {
            if (!window.Promise) throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."
        } else return new Promise(x => {
            x(!1)
        });
        let r, n, i, a = Object.assign(Object.assign({}, NN), t),
            o = a.elementToScroll === window,
            s = !!a.elementToScroll.nodeName;
        if (!o && !s) throw "Element to scroll needs to be either window or DOM element.";
        let u = o ? document.documentElement : a.elementToScroll;
        getComputedStyle(u).getPropertyValue("scroll-behavior") === "smooth" && console.warn(`${u.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);
        let c = o ? new vg : new yg(a.elementToScroll);
        if (e instanceof Element) {
            if (i = e, s && (!a.elementToScroll.contains(i) || a.elementToScroll.isSameNode(i))) throw "options.elementToScroll has to be a parent of scrollToElement";
            r = c.getHorizontalElementScrollOffset(i, a.elementToScroll), n = c.getVerticalElementScrollOffset(i, a.elementToScroll)
        } else if (typeof e == "number") r = c.getHorizontalScroll(), n = e;
        else if (Array.isArray(e) && e.length === 2) r = e[0] === null ? c.getHorizontalScroll() : e[0], n = e[1] === null ? c.getVerticalScroll() : e[1];
        else throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;
        r += a.horizontalOffset, n += a.verticalOffset;
        let d = c.getMaxHorizontalScroll(),
            m = c.getHorizontalScroll();
        r > d && (r = d);
        let h = r - m,
            g = c.getMaxVerticalScroll(),
            y = c.getVerticalScroll();
        n > g && (n = g);
        let v = n - y,
            D = Math.abs(Math.round(h / 1e3 * a.speed)),
            I = Math.abs(Math.round(v / 1e3 * a.speed)),
            C = D > I ? D : I;
        return C < a.minDuration ? C = a.minDuration : C > a.maxDuration && (C = a.maxDuration), new Promise((x, O) => {
            h === 0 && v === 0 && x(!0), Ji.remove(c.element, !0);
            let A, P = () => {
                oe(), activeWindow.cancelAnimationFrame(A), x(!1)
            };
            Ji.add(c.element, P);
            let B = ne => ne.preventDefault(),
                G = a.cancelOnUserAction ? P : B,
                J = a.cancelOnUserAction ? {
                    passive: !0
                } : {
                    passive: !1
                },
                Q = ["wheel", "touchstart", "keydown", "mousedown"],
                oe = () => {
                    Q.forEach(ne => {
                        c.element.removeEventListener(ne, G, J)
                    })
                };
            Q.forEach(ne => {
                c.element.addEventListener(ne, G, J)
            });
            let te = Date.now(),
                re = () => {
                    var ne = Date.now() - te,
                        be = ne / C;
                    let pe = Math.round(m + h * a.easing(be)),
                        De = Math.round(y + v * a.easing(be));
                    ne < C && (pe !== r || De !== n) ? (c.scrollTo(pe, De), A = activeWindow.requestAnimationFrame(re)) : (c.scrollTo(r, n), activeWindow.cancelAnimationFrame(A), oe(), Ji.remove(c.element, !1), x(!0))
                };
            A = activeWindow.requestAnimationFrame(re)
        })
    })
}
var vd = RN;
var kg = Ct(ln());

function Bk({
    children: e
}) {
    let t = $e.useMemo(() => new Vo, []);
    return E(sl.Provider, {
        value: t,
        children: e
    })
}

function Vk(e, t) {
    let r = $e.useContext(ma),
        n = $e.useRef(null),
        i = $e.useContext(sl),
        a = o => {
            n.current = o, n.current && o.win.requestAnimationFrame(() => {
                let s = i.getScrollState(e);
                s && (s.x !== 0 || s.y !== 0) && (n.current.scrollLeft = s.x, n.current.scrollTop = s.y)
            })
        };
    return $e.useEffect(() => {
        let o = n.current;
        if (!o) return;
        let s = dd(o.win, u => {
            let l = u.target;
            i.setScrollState(r, e, {
                x: l.scrollLeft,
                y: l.scrollTop
            })
        });
        return o.addEventListener("scroll", s), () => {
            o.removeEventListener("scroll", s)
        }
    }, [i, e, t]), {
        setRef: a,
        scrollRef: n
    }
}
var HN = "scroll-container",
    wd = 8,
    bd = ["top", "right", "bottom", "left"],
    Dd = class {
        constructor(t, r, n, i) {
            this.scrollFrame = 0;
            this.observerQueue = [];
            this.onScroll = () => {
                this.activeScroll.size === 0 && (this.scrollState = Th(this.scrollEl), this.handleEntityRegistration())
            };
            this.onDragEnd = () => {
                this.activeScroll.clear()
            };
            this.handleBeginDragScroll = ({
                scrollEntitySide: t,
                scrollStrength: r
            }) => {
                this.isDoneScrolling(t) || (this.activeScroll.set(t, r), this.handleDragScroll())
            };
            this.handleUpdateDragScroll = ({
                scrollEntitySide: t,
                scrollStrength: r
            }) => {
                this.isDoneScrolling(t) || this.activeScroll.set(t, r)
            };
            this.handleEndDragScroll = ({
                scrollEntitySide: t
            }) => {
                this.activeScroll.delete(t)
            };
            this.dndManager = t, this.instanceId = et(), this.scopeId = r, this.triggerTypes = n, this.scrollState = Tr, this.parent = i, this.activeScroll = new Map, this.observerHandlers = new Map
        }
        initNodes(t) {
            this.scrollEl = t, this.scrollEl.dataset.hitboxid = this.instanceId, this.scrollEl.dataset.scrollid = this.instanceId, this.top = this.createScrollEntity("top"), this.right = this.createScrollEntity("right"), this.bottom = this.createScrollEntity("bottom"), this.left = this.createScrollEntity("left"), this.bindScrollHandlers(), this.observer = new IntersectionObserver(n => {
                n.forEach(i => {
                    var o;
                    let a = (o = i.target.dataset) == null ? void 0 : o.hitboxid;
                    if (a && this.observerHandlers.has(a)) {
                        let s = this.observerHandlers.get(a);
                        s && s(i)
                    }
                })
            }, {
                root: t,
                threshold: .1
            });
            let {
                observerQueue: r
            } = this;
            this.observerQueue = [], r.forEach(([n, i, a]) => {
                this.observerHandlers.set(n, a), this.observer.observe(i)
            }), this.scrollEl.addEventListener("scroll", this.onScroll, {
                passive: !0,
                capture: !1
            }), this.dndManager.emitter.on("scrollResize", this.onScroll), this.scrollEl.win.setTimeout(() => this.onScroll()), this.dndManager.observeResize(this.scrollEl), this.parent ? this.parent.registerObserverHandler(this.instanceId, this.scrollEl, n => {
                n.isIntersecting ? this.handleEntityRegistration() : this.handleEntityUnregistration()
            }) : this.handleEntityRegistration()
        }
        destroy() {
            var t;
            !this.scrollEl && !this.observer || (this.observerQueue.length = 0, this.handleEntityUnregistration(), this.observer.disconnect(), this.unbindScrollHandlers(), this.scrollEl.removeEventListener("scroll", this.onScroll), this.dndManager.emitter.off("scrollResize", this.onScroll), (t = this.parent) == null || t.unregisterObserverHandler(this.instanceId, this.scrollEl), this.dndManager.unobserveResize(this.scrollEl))
        }
        handleEntityRegistration() {
            bd.forEach(t => {
                let r = Dn(this.scrollEl),
                    n = this.getId(t),
                    i = this.dndManager.scrollEntities.has(n),
                    a = this.isDoneScrolling(t);
                !a && !i ? this.dndManager.registerScrollEntity(n, this[t], r) : a && i && this.dndManager.unregisterScrollEntity(n, r)
            })
        }
        handleEntityUnregistration() {
            bd.forEach(t => {
                let r = Dn(this.scrollEl),
                    n = this.getId(t);
                this.dndManager.unregisterScrollEntity(n, r)
            })
        }
        registerObserverHandler(t, r, n) {
            this.observer ? (this.observerHandlers.set(t, n), this.observer.observe(r)) : this.observerQueue.push([t, r, n])
        }
        unregisterObserverHandler(t, r) {
            this.observer ? (this.observerHandlers.delete(t), this.observer.unobserve(r)) : this.observerQueue = this.observerQueue.filter(n => n[0] !== t)
        }
        bindScrollHandlers() {
            bd.forEach(t => {
                let r = this.getId(t);
                this.dndManager.dragManager.emitter.on("beginDragScroll", this.handleBeginDragScroll, r), this.dndManager.dragManager.emitter.on("updateDragScroll", this.handleUpdateDragScroll, r), this.dndManager.dragManager.emitter.on("endDragScroll", this.handleEndDragScroll, r), this.dndManager.dragManager.emitter.on("dragEnd", this.onDragEnd)
            })
        }
        unbindScrollHandlers() {
            bd.forEach(t => {
                let r = this.getId(t);
                this.dndManager.dragManager.emitter.off("beginDragScroll", this.handleBeginDragScroll, r), this.dndManager.dragManager.emitter.off("updateDragScroll", this.handleUpdateDragScroll, r), this.dndManager.dragManager.emitter.off("endDragScroll", this.handleEndDragScroll, r), this.dndManager.dragManager.emitter.off("dragEnd", this.onDragEnd)
            })
        }
        isDoneScrolling(t) {
            switch (t) {
                case "top":
                    return this.scrollState.y === 0;
                case "right":
                    return this.scrollState.x === this.scrollState.maxX;
                case "bottom":
                    return this.scrollState.y === this.scrollState.maxY;
                case "left":
                    return this.scrollState.x === 0
            }
        }
        handleDragScroll() {
            this.activeScroll.size !== 0 && this.scrollEl.win.requestAnimationFrame(() => {
                let t = {
                    left: 0,
                    top: 0
                };
                this.activeScroll.forEach((r, n) => {
                    if (this.isDoneScrolling(n)) return this.activeScroll.delete(n);
                    let i = ["left", "right"].includes(n) ? "left" : "top",
                        a = ["right", "bottom"].includes(n);
                    t[i] = a ? Math.max(wd - wd * r / 35, 0) : Math.min(-wd + wd * r / 35, 0)
                }), this.scrollEl.scrollBy(t), this.scrollState = Th(this.scrollEl), this.handleEntityRegistration(), this.handleDragScroll()
            })
        }
        getId(t) {
            return `${this.instanceId}-${t}`
        }
        getPath(t) {
            var r, n, i, a;
            switch (t) {
                case "right":
                    return [...((r = this.parent) == null ? void 0 : r.getPath()) || [], 1];
                case "bottom":
                    return [...((n = this.parent) == null ? void 0 : n.getPath()) || [], 2];
                case "left":
                    return [...((i = this.parent) == null ? void 0 : i.getPath()) || [], 3]
            }
            return [...((a = this.parent) == null ? void 0 : a.getPath()) || [], 0]
        }
        getScrollShift() {
            var r, n, i;
            let t = (r = this.parent) == null ? void 0 : r.getScrollShift();
            return {
                x: Xt((n = this.parent) == null ? void 0 : n.scrollState.x) + Xt(t == null ? void 0 : t.x),
                y: Xt((i = this.parent) == null ? void 0 : i.scrollState.y) + Xt(t == null ? void 0 : t.y)
            }
        }
        createScrollEntity(t) {
            var n, i;
            let r = this;
            return {
                scopeId: this.scopeId,
                entityId: r.getId(t),
                initial: _h(this.scrollEl.getBoundingClientRect(), ((n = this.parent) == null ? void 0 : n.scrollState) || Tr, ((i = this.parent) == null ? void 0 : i.getScrollShift()) || vi, t),
                getParentScrollState() {
                    var a;
                    return ((a = r.parent) == null ? void 0 : a.scrollState) || Tr
                },
                getParentScrollShift() {
                    var a;
                    return ((a = r.parent) == null ? void 0 : a.getScrollShift()) || vi
                },
                recalcInitial() {
                    var a, o;
                    this.initial = _h(r.scrollEl.getBoundingClientRect(), ((a = r.parent) == null ? void 0 : a.scrollState) || Tr, ((o = r.parent) == null ? void 0 : o.getScrollShift()) || vi, t)
                },
                getHitbox() {
                    return Bu(this.initial[0], this.initial[1], this.initial[2], this.initial[3], this.getParentScrollState(), this.getParentScrollShift())
                },
                getPath() {
                    return r.getPath(t)
                },
                getData() {
                    return {
                        id: r.getId(t),
                        type: HN,
                        side: t,
                        accepts: r.triggerTypes || [],
                        scrollContainer: r.scrollEl,
                        win: Dn(r.scrollEl)
                    }
                }
            }
        }
    };

function $k({
    scrollRef: e,
    triggerTypes: t,
    children: r
}) {
    let n = Ee(cn),
        i = Ee(ma),
        a = Ee(ol),
        o = Fe(),
        s = Re(() => {
            if (n) {
                o.current && o.current.destroy();
                let u = new Dd(n, i, t || [], a);
                return o.current = u, u
            }
            return null
        }, [n, i, e, t, a]);
    return Nu([e], () => {
        var u;
        return (u = o.current) == null ? void 0 : u.initNodes(e.current)
    }, () => {
        var u;
        return (u = o.current) == null ? void 0 : u.destroy()
    }), s ? E(ol.Provider, {
        value: s,
        children: r
    }) : null
}

function Sd({
    className: e,
    children: t,
    triggerTypes: r,
    isStatic: n,
    id: i,
    index: a
}) {
    let {
        setRef: o,
        scrollRef: s
    } = Vk(i, a);
    return E("div", {
        ref: o,
        className: Ge([e, $("scroll-container")]),
        children: n ? t : E($k, {
            scrollRef: s,
            triggerTypes: r,
            children: t
        })
    })
}

function Fa({
    index: e,
    accepts: t,
    className: r,
    isStatic: n,
    children: i
}) {
    let a = Fe(null),
        o = Fe(null),
        s = Re(() => ({
            id: et(),
            type: "placeholder",
            accepts: t
        }), t);
    return E("div", {
        ref: o,
        className: Ge([r, $("placeholder")]),
        children: E("div", {
            ref: a,
            children: n ? i : E(ei, {
                elementRef: a,
                measureRef: o,
                id: s.id,
                index: e,
                data: s,
                children: i
            })
        })
    })
}
var wg = {
        width: 0,
        height: 0
    },
    BN = 100,
    Ed = class {
        constructor(t, r, n) {
            this.hitboxDimensions = wg;
            this.handleDragStart = ({
                dragEntity: t,
                dragEntityMargin: r,
                dragOriginHitbox: n
            }) => {
                let i = t == null ? void 0 : t.entityId,
                    a = i ? this.sortables.has(i) : null;
                !t || !a || !n || (this.setSortState(!0), this.hitboxDimensions = Fh(n, r), this.activatePlaceholder(this.hitboxDimensions, Lr.none), this.sortables.forEach(([o, s, u]) => {
                    let l = js(t.getPath(), o.getPath()),
                        c = o.entityId;
                    if (l === 2) return this.hidden.add(c), this.hideDraggingEntity(u);
                    l === 1 && (this.shifted.has(c) || this.shifted.add(c), this.shiftEl(s, Lr.none, this.hitboxDimensions))
                }))
            };
            this.dragEndTimeout = 0;
            this.handleDragEnd = ({
                primaryIntersection: t,
                dragPosition: r,
                dragOriginHitbox: n,
                dragEntity: i
            }) => {
                let a = () => {
                    if (t && i) {
                        let {
                            acceptsSort: l
                        } = t.getData();
                        if (l && !l.includes(i.getData().type)) {
                            let d = this.sortables.get(t.entityId);
                            d && d[2].removeClass("is-dropping")
                        }
                    }
                };
                if (!this.isSorting || !r || !n || !i) {
                    if (a(), !t && i && this.sortables.has(i.entityId)) return this.resetSelf({
                        maintainHidden: !1
                    });
                    if (t && i) {
                        let l = (t == null ? void 0 : t.getHitbox()) || n,
                            c = ys({
                                position: r,
                                destination: {
                                    x: l[0],
                                    y: l[1]
                                }
                            });
                        return this.dndManager.win.setTimeout(() => {
                            this.resetSelf({
                                maintainHidden: !1
                            })
                        }, c)
                    }
                    return this.resetSelf({
                        maintainHidden: !0
                    })
                }
                let {
                    win: o
                } = this.dndManager;
                o.clearTimeout(this.dragEnterTimeout), o.clearTimeout(this.dragLeaveTimeout), o.clearTimeout(this.dragEndTimeout);
                let s = (t == null ? void 0 : t.getHitbox()) || n,
                    u = i.scopeId === "htmldnd" ? 0 : ys({
                        position: r,
                        destination: {
                            x: s[0],
                            y: s[1]
                        }
                    });
                this.dragEndTimeout = o.setTimeout(() => {
                    let l = i.entityId.split(":::").pop(),
                        c = t == null ? void 0 : t.entityId.split(":::").pop();
                    a(), t && this.sortables.has(t.entityId) && c !== l && this.dndManager.onDrop(i, t), this.resetSelf({
                        maintainHidden: !1,
                        shiftTransition: Lr.none,
                        placeholderTransition: Lr.none
                    })
                }, u), this.hitboxDimensions = wg
            };
            this.dragEnterTimeout = 0;
            this.handleDragEnter = ({
                dragEntity: t,
                dragEntityMargin: r,
                dragOriginHitbox: n,
                primaryIntersection: i
            }) => {
                let a = i == null ? void 0 : i.entityId,
                    o = a ? this.sortables.has(a) : null;
                if (!t || !i || !o || !n) {
                    !o && this.isSorting && this.resetSelf({
                        maintainHidden: !0,
                        maintainPlaceholder: !0
                    });
                    return
                }
                if (t.entityId === i.entityId) return;
                let {
                    win: s
                } = this.dndManager;
                s.clearTimeout(this.dragLeaveTimeout), s.clearTimeout(this.dragEnterTimeout), this.dragEnterTimeout = s.setTimeout(() => {
                    let u = this.hitboxDimensions = Fh(n, r);
                    this.setSortState(!0), this.activatePlaceholder(u, Lr.placeholder);
                    let {
                        acceptsSort: l
                    } = i.getData();
                    if (l && !l.includes(t.getData().type)) {
                        let d = this.sortables.get(i.entityId);
                        d && d[2].addClass("is-dropping"), this.sortables.forEach(([m, h]) => {
                            let g = m.entityId;
                            this.shifted.has(g) && (this.shifted.delete(g), this.resetEl(h))
                        });
                        return
                    }
                    this.sortables.forEach(([d, m]) => {
                        let h = js(i.getPath(), d.getPath()),
                            g = d.entityId;
                        !this.hidden.has(g) && (h === 2 || h === 1) ? this.shifted.has(g) || (this.shifted.add(g), this.shiftEl(m, Lr.outOfTheWay, u)) : this.shifted.has(g) && (this.shifted.delete(g), this.resetEl(m))
                    })
                }, 10)
            };
            this.dragLeaveTimeout = 0;
            this.handleDragLeave = ({
                dragEntity: t,
                primaryIntersection: r
            }) => {
                if (!this.isSorting) return;
                let {
                    acceptsSort: n
                } = r.getData();
                if (n && !n.includes(t.getData().type)) {
                    let o = this.sortables.get(r.entityId);
                    o && o[2].removeClass("is-dropping")
                }
                let {
                    win: a
                } = this.dndManager;
                a.clearTimeout(this.dragLeaveTimeout), a.clearTimeout(this.dragEnterTimeout), this.dragLeaveTimeout = a.setTimeout(() => {
                    this.resetSelf({
                        maintainHidden: !0,
                        maintainPlaceholder: !0
                    })
                }, BN), this.hitboxDimensions = wg
            };
            this.instanceId = et(), this.dndManager = t, this.sortables = new Map, this.shifted = new Set, this.hidden = new Set, this.isSorting = !1, this.axis = r, this.placeholder = null, this.sortListeners = n ? [n] : [], t.dragManager.emitter.on("dragStart", this.handleDragStart), t.dragManager.emitter.on("dragEnd", this.handleDragEnd), t.dragManager.emitter.on("dragEnter", this.handleDragEnter), t.dragManager.emitter.on("dragLeave", this.handleDragLeave)
        }
        destroy() {
            this.dndManager.win.clearTimeout(this.dragLeaveTimeout), this.dndManager.win.clearTimeout(this.dragEndTimeout), this.dndManager.dragManager.emitter.off("dragStart", this.handleDragStart), this.dndManager.dragManager.emitter.off("dragEnd", this.handleDragEnd), this.dndManager.dragManager.emitter.off("dragEnter", this.handleDragEnter), this.dndManager.dragManager.emitter.off("dragLeave", this.handleDragLeave)
        }
        registerSortable(t, r, n, i) {
            let a = r.getData().type;
            this.sortables.set(t, [r, n, i]), a === "placeholder" ? (this.placeholder = [r, n, i], i.dataset.axis = this.axis, ui(i, "transition", Lr.none)) : ui(n, "transition", Lr.none)
        }
        unregisterSortable(t) {
            this.sortables.delete(t)
        }
        resetSelf({
            maintainHidden: t,
            maintainPlaceholder: r,
            shiftTransition: n,
            placeholderTransition: i
        }) {
            this.isSorting && this.setSortState(!1), this.isPlaceholderActive && !r && this.deactivatePlaceholder(i), this.shifted.size > 0 && (this.shifted.forEach(a => {
                if (this.sortables.has(a)) {
                    let [, o] = this.sortables.get(a);
                    this.resetEl(o, n)
                }
            }), this.shifted.clear()), !t && this.hidden.size > 0 && (this.hidden.forEach(a => {
                if (this.sortables.has(a)) {
                    let [, , o] = this.sortables.get(a);
                    this.resetEl(o, n)
                }
            }), this.hidden.clear())
        }
        activatePlaceholder(t, r) {
            if (this.placeholder) {
                let n = this.axis === "horizontal",
                    [, , i] = this.placeholder;
                ui(i, "transition", r), ui(i, n ? "width" : "height", `${n?t.width:t.height}px`), this.isPlaceholderActive = !0
            }
        }
        deactivatePlaceholder(t = Lr.placeholder) {
            if (this.placeholder) {
                let [, , r] = this.placeholder;
                ui(r, "transition", t), fd(r, "width"), fd(r, "height"), this.isPlaceholderActive = !1
            }
        }
        hideDraggingEntity(t) {
            ui(t, "display", "none")
        }
        shiftEl(t, r, n) {
            let i = this.axis === "horizontal" ? `translate3d(${n.width}px, 0, 0)` : `translate3d(0, ${n.height}px, 0)`;
            ui(t, "transition", r), ui(t, "transform", i)
        }
        resetEl(t, r = Lr.outOfTheWay) {
            ui(t, "transition", r), ui(t, "transform", "translate3d(0, 0, 0)"), fd(t, "display")
        }
        addSortNotifier(t) {
            this.sortListeners.push(t)
        }
        removeSortNotifier(t) {
            this.sortListeners = this.sortListeners.filter(r => r !== t)
        }
        setSortState(t) {
            this.isSorting !== t && (this.isSorting = t, this.sortListeners.forEach(r => r(t)))
        }
    };

function Uk(e) {
    return E(ct, {
        children: e.children
    })
}

function Ia({
    axis: e,
    children: t,
    onSortChange: r
}) {
    let n = Ee(cn),
        i = Fe(),
        a = Re(() => {
            if (n) {
                i.current && i.current.destroy();
                let o = new Ed(n, e, r);
                return i.current = o, o
            }
            return null
        }, [n, e, r]);
    return Ae(() => () => {
        var o;
        return (o = i.current) == null ? void 0 : o.destroy()
    }, []), a ? E($u.Provider, {
        value: a,
        children: t
    }) : null
}
var $N = function() {
        if (typeof window == "undefined" || typeof window.addEventListener != "function") return !1;
        var e = !1,
            t = Object.defineProperty({}, "passive", {
                get: function() {
                    e = !0
                }
            }),
            r = function() {
                return null
            };
        return window.addEventListener("test", r, t), window.removeEventListener("test", r, t), e
    },
    UN = "ignore-onclickoutside",
    Wk = function(t, r) {
        var n;
        return (n = t.classList) == null ? void 0 : n.contains(r)
    },
    Yk = function(t, r) {
        for (var n = t.target || t; n;) {
            if (Array.isArray(r)) {
                if (r.some(function(i) {
                        return Wk(n, i)
                    })) return !0
            } else if (Wk(n, r)) return !0;
            n = n.parentElement
        }
        return !1
    },
    WN = function(t) {
        return document.documentElement.clientWidth <= t.clientX || document.documentElement.clientHeight <= t.clientY
    },
    zk = function(t) {
        return t.includes("touch") && $N() ? {
            passive: !0
        } : !1
    },
    YN = function(t, r) {
        var n = r === void 0 ? {} : r,
            i = n.refs,
            a = n.disabled,
            o = n.eventTypes,
            s = o === void 0 ? ["mousedown", "touchstart"] : o,
            u = n.excludeScrollbar,
            l = n.ignoreClass,
            c = l === void 0 ? UN : l,
            d = n.detectIFrame,
            m = d === void 0 ? !0 : d,
            h = Ne([]),
            g = h[0],
            y = h[1],
            v = Fe(t);
        v.current = t;
        var D = Ye(function(I) {
            return y(function(C) {
                return [].concat(C, [{
                    current: I
                }])
            })
        }, []);
        return Ae(function() {
            if (!(!(i != null && i.length) && !g.length)) {
                var I = function() {
                        var P = [];
                        return (i || g).forEach(function(B) {
                            var G = B.current;
                            return G && P.push(G)
                        }), P
                    },
                    C = function(P) {
                        !Yk(P, c) && !(u && WN(P)) && I().every(function(B) {
                            return !B.contains(P.target)
                        }) && v.current(P)
                    },
                    x = function(P) {
                        return activeWindow.setTimeout(function() {
                            var B = document,
                                G = B.activeElement;
                            (G == null ? void 0 : G.tagName) === "IFRAME" && !Yk(G, c) && !I().includes(G) && v.current(P)
                        }, 0)
                    },
                    O = function() {
                        s.forEach(function(P) {
                            return document.removeEventListener(P, C, zk(P))
                        }), m && window.removeEventListener("blur", x)
                    };
                if (a) {
                    O();
                    return
                }
                return s.forEach(function(A) {
                        return document.addEventListener(A, C, zk(A))
                    }), m && window.addEventListener("blur", x),
                    function() {
                        return O()
                    }
            }
        }, [g, c, u, a, m, JSON.stringify(s)]), D
    },
    ws = YN;

function kd(e, t) {
    var r;
    if (t.types.includes("text/uri-list") || ["file", "files", "link", "folder"].includes((r = e.app.dragManager.draggable) == null ? void 0 : r.type)) return "link";
    if (t.types.includes("text/html") || t.types.includes("text/plain")) return "copy"
}

function bg({
    addItems: e,
    editState: t,
    setEditState: r,
    hideButton: n
}) {
    let {
        stateManager: i
    } = Ee(tt), a = Fe(), o = () => r(0), s = ws(o, {
        ignoreClass: [$("ignore-click-outside"), "mobile-toolbar", "suggestion-container"]
    }), u = l => {
        e([i.getNewItem(l, " ")]);
        let c = a.current;
        c && c.dispatch({
            changes: {
                from: 0,
                to: c.state.doc.length,
                insert: ""
            }
        })
    };
    return kn(t) ? E("div", {
        className: $("item-form"),
        ref: s,
        children: E("div", {
            className: $("item-input-wrapper"),
            children: E(_a, {
                editorRef: a,
                editState: {
                    x: 0,
                    y: 0
                },
                className: $("item-input"),
                placeholder: R("Card title..."),
                onEnter: (l, c, d) => {
                    if (!Ca(i, c, d)) return u(l.state.doc.toString()), !0
                },
                onSubmit: l => {
                    u(l.state.doc.toString())
                },
                onEscape: o
            })
        })
    }) : n ? null : E("div", {
        className: $("item-button-wrapper"),
        children: E("button", {
            className: $("new-item-button"),
            onClick: () => r({
                x: 0,
                y: 0
            }),
            onDragOver: l => {
                kd(i, l.dataTransfer) && r({
                    x: 0,
                    y: 0
                })
            },
            children: [E("span", {
                className: $("item-button-plus"),
                children: "+"
            }), " ", R("Add a card")]
        })
    })
}
var rx = Ct(ln());

function xd(e, t) {
    let r = e.length,
        n = t.start;
    for (; n > 0 && e[n - 1] === " ";) n--;
    let i = t.end;
    for (; i < r - 1 && e[i + 1] === " ";) i++;
    return e.slice(0, n) + "\0".repeat(i - n) + e.slice(i)
}

function Kk(e) {
    return e.replace(/ *\0+ */g, " ").trim()
}

function jk(e) {
    return e.trim().replace(/(?:\r\n|\n)/g, "<br>")
}

function Dg(e) {
    return e.replace(/<br>/g, `
`).trim()
}

function Cd(e) {
    let t = app.vault.getConfig("useTab");
    return e.trim().replace(/(?:\r\n|\n)/g, t ? `
	` : `
    `)
}

function Sg(e, t) {
    if (!t.data.blockId) return e;
    let r = e.split(/(?:\r\n|\n)/g);
    return r[0] += " ^" + t.data.blockId, r.join(`
`)
}

function qk(e) {
    let t = e.split(/(?:\r\n|\n)/g);
    return t[0] = t[0].replace(/\s+\^([a-zA-Z0-9-]+)$/, ""), t.join(`
`)
}

function Eg(e) {
    return e.trim().replace(/(?:\r\n|\n)(?: {4}|\t)/g, `
`)
}

function co(e) {
    e = Dg(e);
    let t = e.match(/^(.*?)\s*\((\d+)\)$/);
    return t == null ? {
        title: e,
        maxItems: 0
    } : {
        title: t[1],
        maxItems: Number(t[2])
    }
}

function Gk(e) {
    return E("svg", {
        ...e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        children: E("path", {
            fill: "currentColor",
            d: "M5 3h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9z"
        })
    })
}
var $l = Ct(ln()),
    _d = require("obsidian");
var Jk = {
    delete: {
        description: R("Are you sure you want to delete this list and all its cards?"),
        confirm: R("Yes, delete list")
    },
    archive: {
        description: R("Are you sure you want to archive this list and all its cards?"),
        confirm: R("Yes, archive list")
    },
    "archive-items": {
        description: R("Are you sure you want to archive all cards in this list?"),
        confirm: R("Yes, archive cards")
    }
};

function Zk({
    action: e,
    cancel: t,
    onAction: r,
    lane: n
}) {
    return Ae(() => {
        e && n.children.length === 0 && r()
    }, [e, n.children.length]), !e || e && n.children.length === 0 ? null : E("div", {
        className: $("action-confirm-wrapper"),
        children: [E("div", {
            className: $("action-confirm-text"),
            children: Jk[e].description
        }), E("div", {
            children: [E("button", {
                onClick: r,
                className: $("confirm-action-button"),
                children: Jk[e].confirm
            }), E("button", {
                onClick: t,
                className: $("cancel-action-button"),
                children: "Cancel"
            })]
        })]
    })
}

function Qk({
    setEditState: e,
    path: t,
    lane: r
}) {
    let {
        stateManager: n,
        boardModifiers: i
    } = Ee(tt), [a, o] = Ne(null);
    return {
        settingsMenu: Re(() => {
            let u = new Set,
                l = !1,
                c = !1;
            r.children.forEach(h => {
                var y;
                let g = h.data.metadata.inlineMetadata;
                g && g.forEach(v => {
                    v.key !== "repeat" && (u.has(v.key) || u.add(v.key))
                }), !l && h.data.metadata.date && (l = !0), !c && ((y = h.data.metadata.tags) != null && y.length) && (c = !0)
            });
            let d = new _d.Menu().addItem(h => {
                    h.setIcon("lucide-edit-3").setTitle(R("Edit list")).onClick(() => e({
                        x: 0,
                        y: 0
                    }))
                }).addItem(h => {
                    h.setIcon("lucide-archive").setTitle(R("Archive cards")).onClick(() => o("archive-items"))
                }).addSeparator().addItem(h => {
                    h.setIcon("arrow-left-to-line").setTitle(R("Insert list before")).onClick(() => i.insertLane(t, {
                        ...Ea,
                        id: et(),
                        children: [],
                        data: {
                            title: "",
                            shouldMarkItemsComplete: !1,
                            forceEditMode: !0
                        }
                    }))
                }).addItem(h => {
                    h.setIcon("arrow-right-to-line").setTitle(R("Insert list after")).onClick(() => {
                        let g = [...t];
                        g[g.length - 1] = g[g.length - 1] + 1, i.insertLane(g, {
                            ...Ea,
                            id: et(),
                            children: [],
                            data: {
                                title: "",
                                shouldMarkItemsComplete: !1,
                                forceEditMode: !0
                            }
                        })
                    })
                }).addSeparator().addItem(h => {
                    h.setIcon("lucide-archive").setTitle(R("Archive list")).onClick(() => o("archive"))
                }).addItem(h => {
                    h.setIcon("lucide-trash-2").setTitle(R("Delete list")).onClick(() => o("delete"))
                }).addSeparator(),
                m = h => {
                    h.addItem(g => {
                        g.setIcon("arrow-down-up").setTitle(R("Sort by card text")).onClick(() => {
                            let y = r.children.slice(),
                                v = r.data.sorted === 0;
                            y.sort((D, I) => v ? I.data.title.localeCompare(D.data.title) : D.data.title.localeCompare(I.data.title)), i.updateLane(t, (0, $l.default)(r, {
                                children: {
                                    $set: y
                                },
                                data: {
                                    sorted: {
                                        $set: r.data.sorted === 0 ? 1 : 0
                                    }
                                }
                            }))
                        })
                    }), l && h.addItem(g => {
                        g.setIcon("arrow-down-up").setTitle(R("Sort by date")).onClick(() => {
                            let y = r.children.slice(),
                                v = r.data.sorted === 2 ? -1 : 1;
                            y.sort((D, I) => {
                                let C = D.data.metadata.time || D.data.metadata.date,
                                    x = I.data.metadata.time || I.data.metadata.date;
                                return C && !x ? -1 * v : x && !C ? 1 * v : !C && !x ? 0 : (C.isBefore(x) ? -1 : 1) * v
                            }), i.updateLane(t, (0, $l.default)(r, {
                                children: {
                                    $set: y
                                },
                                data: {
                                    sorted: {
                                        $set: r.data.sorted === 2 ? 3 : 2
                                    }
                                }
                            }))
                        })
                    }), c && h.addItem(g => {
                        g.setIcon("arrow-down-up").setTitle(R("Sort by tags")).onClick(() => {
                            let y = n.getSetting("tag-sort"),
                                v = r.children.slice(),
                                D = r.data.sorted === 4;
                            v.sort((I, C) => {
                                var B, G;
                                let x = I.data.metadata.tags,
                                    O = C.data.metadata.tags;
                                if (!(x != null && x.length) && !(O != null && O.length)) return 0;
                                if (!(x != null && x.length)) return 1;
                                if (!(O != null && O.length)) return -1;
                                let A = (B = y == null ? void 0 : y.findIndex(J => x.includes(J.tag))) != null ? B : -1,
                                    P = (G = y == null ? void 0 : y.findIndex(J => O.includes(J.tag))) != null ? G : -1;
                                return A > -1 && P < 0 ? D ? 1 : -1 : P > -1 && A < 0 ? D ? -1 : 1 : A > -1 && P > -1 ? D ? P - A : A - P : D ? fr(O.join(""), x.join("")) : fr(x.join(""), O.join(""))
                            }), i.updateLane(t, (0, $l.default)(r, {
                                children: {
                                    $set: v
                                },
                                data: {
                                    sorted: {
                                        $set: r.data.sorted === 4 ? 5 : 4
                                    }
                                }
                            }))
                        })
                    }), u.size && u.forEach(g => {
                        h.addItem(y => {
                            y.setIcon("arrow-down-up").setTitle(R("Sort by") + " " + No(g).toLocaleLowerCase()).onClick(() => {
                                let v = r.children.slice(),
                                    D = r.data.sorted === g + "-asc";
                                v.sort((I, C) => {
                                    var A, P;
                                    let x = (A = I.data.metadata.inlineMetadata) == null ? void 0 : A.find(B => B.key === g),
                                        O = (P = C.data.metadata.inlineMetadata) == null ? void 0 : P.find(B => B.key === g);
                                    return x === void 0 && O === void 0 ? 0 : x === void 0 ? 1 : O === void 0 ? -1 : D ? fr(In(O.value, n), In(x.value, n)) : fr(In(x.value, n), In(O.value, n))
                                }), i.updateLane(t, (0, $l.default)(r, {
                                    children: {
                                        $set: v
                                    },
                                    data: {
                                        sorted: {
                                            $set: r.data.sorted === g + "-asc" ? g + "-desc" : g + "-asc"
                                        }
                                    }
                                }))
                            })
                        })
                    })
                };
            return _d.Platform.isPhone ? m(d) : d.addItem(h => {
                let g = h.setTitle(R("Sort by")).setIcon("arrow-down-up").setSubmenu();
                m(g)
            }), d
        }, [n, o, t, r]),
        confirmAction: a,
        setConfirmAction: o
    }
}
var Xk = Ct(ln());

function ex({
    lane: e,
    lanePath: t,
    editState: r
}) {
    let {
        boardModifiers: n
    } = Ee(tt);
    return kn(r) ? E("div", {
        className: $("lane-setting-wrapper"),
        children: E("div", {
            className: $("checkbox-wrapper"),
            children: [E("div", {
                className: $("checkbox-label"),
                children: R("Mark cards in this list as complete")
            }), E("div", {
                onClick: () => n.updateLane(t, (0, Xk.default)(e, {
                    data: {
                        $toggle: ["shouldMarkItemsComplete"]
                    }
                })),
                className: `checkbox-container ${e.data.shouldMarkItemsComplete?"is-enabled":""}`
            })]
        })
    }) : null
}

function tx({
    maxItems: e,
    itemCount: t,
    editState: r
}) {
    let {
        stateManager: n
    } = Ee(tt);
    return n.getSetting("hide-card-count") || kn(r) ? null : E("div", {
        className: Ge([$("lane-title-count"), {
            "wip-exceeded": e && e < t
        }]),
        children: [t, e > 0 && E(ct, {
            children: [E("span", {
                className: $("lane-title-count-separator"),
                children: "/"
            }), E("span", {
                className: $("lane-title-count-limit"),
                children: e
            })]
        })]
    })
}

function nx({
    maxItems: e,
    editState: t,
    setEditState: r,
    title: n,
    onChange: i
}) {
    let {
        stateManager: a
    } = Ee(tt), o = Fe(null);
    Ae(() => {
        t === 1 ? (o.current !== null && i(o.current), o.current = null) : t === 0 && o.current !== null && (o.current = null)
    }, [t]);
    let s = Ye(d => {
            d.docChanged && (o.current = d.state.doc.toString().trim())
        }, []),
        u = Ye((d, m, h) => {
            if (!Ca(a, m, h)) return r(1), !0
        }, [r, a]),
        l = Ye(() => r(1), [r]),
        c = Ye(() => r(0), [r]);
    return E("div", {
        className: $("lane-title"),
        children: kn(t) ? E(_a, {
            editState: t,
            className: $("lane-input"),
            onChange: s,
            onEnter: u,
            onEscape: c,
            onSubmit: l,
            value: cd(n, e)
        }) : E("div", {
            className: $("lane-title-text"),
            children: E(Sa, {
                markdownString: n
            })
        })
    })
}

function zN({
    settingsMenu: e,
    editState: t,
    setEditState: r,
    setIsItemInputVisible: n
}) {
    let {
        stateManager: i
    } = Ee(tt);
    return E("div", {
        className: $("lane-settings-button-wrapper"),
        children: kn(t) ? E("a", {
            onClick: () => r(null),
            "aria-label": R("Close"),
            className: `${$("lane-settings-button")} is-enabled clickable-icon`,
            children: E(Ut, {
                name: "lucide-x"
            })
        }) : E(ct, {
            children: [n && E("a", {
                "aria-label": R("Add a card"),
                className: `${$("lane-settings-button")} clickable-icon`,
                onClick: () => n({
                    x: 0,
                    y: 0
                }),
                onDragOver: a => {
                    kd(i, a.dataTransfer) && n({
                        x: 0,
                        y: 0
                    })
                },
                children: E(Ut, {
                    name: "lucide-plus-circle"
                })
            }), E("a", {
                "aria-label": R("More options"),
                className: `${$("lane-settings-button")} clickable-icon`,
                onClick: a => {
                    e.showAtMouseEvent(a)
                },
                children: E(Ut, {
                    name: "lucide-more-vertical"
                })
            })]
        })
    })
}
var ix = zt(function({
    lane: t,
    laneIndex: r,
    bindHandle: n,
    setIsItemInputVisible: i,
    isCollapsed: a,
    toggleIsCollapsed: o
}) {
    let [s, u] = Ne(0), l = Ui(r), {
        boardModifiers: c
    } = Ee(tt), {
        settingsMenu: d,
        confirmAction: m,
        setConfirmAction: h
    } = Qk({
        setEditState: u,
        path: l,
        lane: t
    });
    Ae(() => {
        t.data.forceEditMode && u(null)
    }, [t.data.forceEditMode]);
    let g = Ye(v => {
            let {
                title: D,
                maxItems: I
            } = co(v);
            c.updateLane(l, (0, rx.default)(t, {
                data: {
                    title: {
                        $set: D
                    },
                    maxItems: {
                        $set: I
                    }
                }
            }))
        }, [c, t, l]),
        y = Ye(v => {
            !a && u({
                x: v.clientX,
                y: v.clientY
            })
        }, [a, u]);
    return E(ct, {
        children: [E("div", {
            onDblClick: y,
            className: $("lane-header-wrapper"),
            children: [E("div", {
                className: $("lane-grip"),
                ref: n,
                children: E(Gk, {})
            }), E("div", {
                onClick: o,
                className: $("lane-collapse"),
                children: E(Ut, {
                    name: "chevron-down"
                })
            }), E(nx, {
                id: t.id,
                editState: s,
                maxItems: t.data.maxItems,
                onChange: g,
                setEditState: u,
                title: t.data.title
            }), E(tx, {
                editState: s,
                itemCount: t.children.length,
                maxItems: t.data.maxItems
            }), E(zN, {
                editState: s,
                setEditState: u,
                setIsItemInputVisible: i,
                settingsMenu: d
            })]
        }), E(ex, {
            editState: s,
            lane: t,
            lanePath: l
        }), m && E(Zk, {
            lane: t,
            action: m,
            onAction: () => {
                switch (m) {
                    case "archive":
                        c.archiveLane(l);
                        break;
                    case "archive-items":
                        c.archiveLaneItems(l);
                        break;
                    case "delete":
                        c.deleteEntity(l);
                        break
                }
                h(null)
            },
            cancel: () => h(null)
        })]
    })
});
var ax = [ft.Item];

function KN({
    isStatic: e,
    lane: t,
    laneIndex: r,
    collapseDir: n,
    isCollapsed: i = !1
}) {
    var be;
    let [a, o] = Ne(0), [s, u] = Ne(!1), {
        stateManager: l,
        boardModifiers: c,
        view: d
    } = Ee(tt), m = Ee(zn), h = d.useViewState(_t), g = Ui(r), y = l.useSetting("lane-width"), v = h === "list" && l.useSetting("full-list-lane-width"), D = l.useSetting("new-card-insertion-method"), I = Re(() => !(i && n === "horizontal") && (v || y) ? {
        width: v ? "100%" : `${y}px`
    } : void 0, [v, y, i]), C = Fe(null), x = Fe(null), O = Fe(null), A = Ta(x, O), P = !!t.data.shouldMarkItemsComplete, B = D === "prepend-compact", G = B || D === "prepend", J = Ye(() => {
        l.setState(pe => {
            let De = [...d.getViewState("list-collapse")];
            return De[r] = !De[r], d.setViewState("list-collapse", De), (0, kg.default)(pe, {
                data: {
                    settings: {
                        "list-collapse": {
                            $set: De
                        }
                    }
                }
            })
        })
    }, [l, r]), Q = Ye(pe => {
        c[G ? "prependItems" : "appendItems"]([...g, t.children.length - 1], pe.map(De => (0, kg.default)(De, {
            data: {
                checked: {
                    $set: P
                },
                checkChar: {
                    $set: P ? Zn() : " "
                }
            }
        }))), d.getWindow().setTimeout(() => {
            var Ce;
            let De = (Ce = C.current) == null ? void 0 : Ce.getElementsByClassName($("lane-items"));
            De.length && vd([0, G ? 0 : De[0].scrollHeight], {
                elementToScroll: De[0],
                speed: 200,
                minDuration: 150,
                easing: U => U === 1 ? 1 : 1 - Math.pow(2, -10 * U)
            })
        })
    }, [c, g, t, G]), oe = e ? Tb : ei, te = e ? Uk : Ia, re = !i || e ? ct : ei, ne = Re(() => {
        if (!i || e) return {};
        let pe = {
            id: et(),
            type: "lane",
            accepts: [ft.Item],
            acceptsSort: [ft.Lane]
        };
        return {
            elementRef: C,
            measureRef: x,
            id: pe.id,
            index: r,
            data: pe
        }
    }, [i, r, e]);
    return E(Oc.Provider, {
        value: (be = t.data.sorted) != null ? be : null,
        children: E("div", {
            ref: x,
            className: Ge([$("lane-wrapper"), {
                "is-sorting": s,
                "collapse-horizontal": i && n === "horizontal",
                "collapse-vertical": i && n === "vertical"
            }]),
            style: I,
            children: E("div", {
                "data-count": t.children.length,
                ref: C,
                className: Ge([$("lane"), {
                    "will-prepend": G
                }]),
                children: E(re, {
                    ...ne,
                    children: [E(ix, {
                        bindHandle: A,
                        laneIndex: r,
                        lane: t,
                        setIsItemInputVisible: B ? o : void 0,
                        isCollapsed: i,
                        toggleIsCollapsed: J
                    }), !(m != null && m.query) && !i && G && E(bg, {
                        addItems: Q,
                        hideButton: B,
                        editState: a,
                        setEditState: o
                    }), !i && E(oe, {
                        elementRef: C,
                        measureRef: x,
                        id: t.id,
                        index: r,
                        data: t,
                        children: E(Sd, {
                            className: Ge([$("lane-items"), $("vertical")]),
                            id: t.id,
                            index: r,
                            isStatic: e,
                            triggerTypes: ax,
                            children: E(te, {
                                onSortChange: u,
                                axis: "vertical",
                                children: [E(Rk, {
                                    items: t.children,
                                    isStatic: e,
                                    shouldMarkItemsComplete: P
                                }), E(Fa, {
                                    accepts: ax,
                                    index: t.children.length,
                                    isStatic: e
                                })]
                            })
                        })
                    }), !(m != null && m.query) && !i && !G && E(bg, {
                        addItems: Q,
                        editState: a,
                        setEditState: o
                    })]
                })
            })
        })
    })
}
var xg = zt(KN);

function jN({
    lanes: e,
    collapseDir: t
}) {
    let r = Ee(zn),
        {
            view: n
        } = Ee(tt),
        i = n.useViewState(_t) || "board",
        a = n.useViewState("list-collapse") || [];
    return E(ct, {
        children: e.map((o, s) => E(xg, {
            collapseDir: t,
            isCollapsed: (r == null ? void 0 : r.query) && !r.lanes.has(o) || !!a[s],
            lane: o,
            laneIndex: s
        }, i + o.id))
    })
}
var ox = zt(jN);
var sx = require("obsidian");
var Md = class {
    constructor(t, r) {
        this.scrollResizeDebounce = 0;
        this.handleResize = t => {
            let r = !1;
            t.forEach(n => {
                let i = Dn(n.target);
                this.win === i && (r = !0, n.target.dataset.scrollid && (this.win.clearTimeout(this.scrollResizeDebounce), this.scrollResizeDebounce = this.win.setTimeout(() => {
                    this.emitter.listenerCount("scrollResize") && this.emitter.emit("scrollResize", null)
                }, 50)))
            }), r && (this.hitboxEntities.forEach(n => {
                n.recalcInitial()
            }), this.scrollEntities.forEach(n => {
                n.recalcInitial()
            }))
        };
        this.win = t, this.emitter = new Bo, this.hitboxEntities = new Map, this.scrollEntities = new Map, this.onDrop = r, this.resizeObserver = new ResizeObserver((0, sx.debounce)(this.handleResize, 100, !0)), this.dragManager = new hd(t, this.emitter, this.hitboxEntities, this.scrollEntities)
    }
    destroy() {
        this.resizeObserver.disconnect()
    }
    observeResize(t) {
        t.instanceOf(HTMLElement) && this.resizeObserver.observe(t, {
            box: "border-box"
        })
    }
    unobserveResize(t) {
        t.instanceOf(HTMLElement) && this.resizeObserver.unobserve(t)
    }
    registerHitboxEntity(t, r, n) {
        n === this.win && this.hitboxEntities.set(t, r)
    }
    registerScrollEntity(t, r, n) {
        n === this.win && this.scrollEntities.set(t, r)
    }
    unregisterHitboxEntity(t, r) {
        r === this.win && this.hitboxEntities.delete(t)
    }
    unregisterScrollEntity(t, r) {
        r === this.win && this.scrollEntities.delete(t)
    }
};

function bs({
    win: e,
    children: t,
    onDrop: r
}) {
    let n = Fe(r);
    n.current = r;
    let i = Re(() => new Md(e, (a, o) => n.current(a, o)), []);
    return Ae(() => () => {
        i.destroy()
    }, [i]), E(cn.Provider, {
        value: i,
        children: E(Bk, {
            children: t
        })
    })
}

function Cg(e, t, r, n, i, a) {
    let o = [r[0] - n[0], r[1] - n[1], r[2] + n[2], r[3] + n[3]];
    return {
        transform: a || `translate3d(${e.x-t.x+o[0]}px, ${e.y-t.y+o[1]}px, 0px)`,
        width: `${o[2]-o[0]}px`,
        height: `${o[3]-o[1]}px`,
        transition: i
    }
}

function Ds({
    children: e
}) {
    let t = Ee(cn),
        [r, n] = Ne(),
        [i, a] = Ne();
    return Ae(() => {
        if (!t) return;
        let o = Cb,
            s = ({
                dragEntity: d,
                dragOrigin: m,
                dragPosition: h,
                dragEntityMargin: g
            }) => {
                !d || !h || !m || (o = d.getHitbox(), n(d), a(Cg(h, m, o, g)))
            },
            u = ({
                dragOrigin: d,
                dragPosition: m,
                dragEntityMargin: h
            }) => {
                !m || !d || a(Cg(m, d, o, h))
            },
            l = ({
                dragOrigin: d,
                primaryIntersection: m,
                dragPosition: h,
                dragEntityMargin: g
            }) => {
                if (m && h && d) {
                    let y = m.getHitbox(),
                        v = {
                            x: y[0],
                            y: y[1]
                        },
                        D = ys({
                            position: h,
                            destination: v
                        }),
                        I = Lr.drop(D),
                        C = Fk.drop(v);
                    a(Cg(h, d, o, g, I, C)), activeWindow.setTimeout(() => {
                        n(void 0), a(void 0)
                    }, D)
                } else n(void 0), a(void 0)
            },
            {
                emitter: c
            } = t.dragManager;
        return c.on("dragStart", s), c.on("dragMove", u), c.on("dragEnd", l), () => {
            c.off("dragStart", s), c.off("dragMove", u), c.off("dragEnd", l)
        }
    }, [t]), !r || !i ? null : Oi(e(r, i), r.getData().win.document.body)
}

function lx() {
    let e = Ee(cn),
        [t, r] = Ne(!1);
    return Ae(() => {
        let n = () => r(!0),
            i = ({
                primaryIntersection: o,
                dragPosition: s
            }) => {
                let u = (o == null ? void 0 : o.getHitbox()) || [0, 0],
                    l = {
                        x: u[0],
                        y: u[1]
                    },
                    c = ys({
                        position: s || l,
                        destination: l
                    });
                activeWindow.setTimeout(() => r(!1), c)
            },
            {
                emitter: a
            } = e.dragManager;
        return a.on("dragStart", n), a.on("dragEnd", i), () => {
            a.off("dragStart", n), a.off("dragEnd", i)
        }
    }, [e]), t
}
var Zi = Ct(ln()),
    ux = require("obsidian");

function Td(e, t) {
    let r = n => {
        let i = t.getSetting("archive-date-format"),
            a = t.getSetting("archive-date-separator"),
            o = t.getSetting("append-archive-date"),
            s = [(0, ux.moment)().format(i)];
        a && s.push(a), s.push(n.data.titleRaw), o && s.reverse();
        let u = s.join(" ");
        return t.updateItemContent(n, u)
    };
    return {
        appendItems: (n, i) => {
            t.setState(a => ah(a, n, i))
        },
        prependItems: (n, i) => {
            t.setState(a => ow(a, n, i))
        },
        insertItems: (n, i) => {
            t.setState(a => Xr(a, n, i))
        },
        replaceItem: (n, i) => {
            t.setState(a => Xr(mi(a, n), n, i))
        },
        splitItem: (n, i) => {
            t.setState(a => Xr(mi(a, n), n, i))
        },
        moveItemToTop: n => {
            t.setState(i => Ri(i, n, [n[0], 0]))
        },
        moveItemToBottom: n => {
            t.setState(i => {
                let a = n[0],
                    o = i.children[a];
                return Ri(i, n, [a, o.children.length])
            })
        },
        addLane: n => {
            t.setState(i => {
                let a = e.getViewState("list-collapse") || [],
                    o = s => {
                        let u = [...s];
                        return u.push(!1), u
                    };
                return e.setViewState("list-collapse", void 0, o), (0, Zi.default)(ah(i, [], [n]), {
                    data: {
                        settings: {
                            "list-collapse": {
                                $set: o(a)
                            }
                        }
                    }
                })
            })
        },
        insertLane: (n, i) => {
            t.setState(a => {
                let o = e.getViewState("list-collapse"),
                    s = u => {
                        let l = [...u];
                        return l.splice(n.last(), 0, !1), l
                    };
                return e.setViewState("list-collapse", void 0, s), (0, Zi.default)(Xr(a, n, [i]), {
                    data: {
                        settings: {
                            "list-collapse": {
                                $set: s(o)
                            }
                        }
                    }
                })
            })
        },
        updateLane: (n, i) => {
            t.setState(a => oh(a, n, {
                children: {
                    [n[n.length - 1]]: {
                        $set: i
                    }
                }
            }))
        },
        archiveLane: n => {
            t.setState(i => {
                let o = un(i, n).children;
                try {
                    let s = e.getViewState("list-collapse"),
                        u = l => {
                            let c = [...l];
                            return c.splice(n.last(), 1), c
                        };
                    return e.setViewState("list-collapse", void 0, u), (0, Zi.default)(mi(i, n), {
                        data: {
                            settings: {
                                "list-collapse": {
                                    $set: u(s)
                                }
                            },
                            archive: {
                                $unshift: t.getSetting("archive-with-date") ? o.map(r) : o
                            }
                        }
                    })
                } catch (s) {
                    return t.setError(s), i
                }
            })
        },
        archiveLaneItems: n => {
            t.setState(i => {
                let o = un(i, n).children;
                try {
                    return (0, Zi.default)(Du(i, n, {
                        children: {
                            $set: []
                        }
                    }), {
                        data: {
                            archive: {
                                $unshift: t.getSetting("archive-with-date") ? o.map(r) : o
                            }
                        }
                    })
                } catch (s) {
                    return t.setError(s), i
                }
            })
        },
        deleteEntity: n => {
            t.setState(i => {
                if (un(i, n).type === ft.Lane) {
                    let o = e.getViewState("list-collapse"),
                        s = u => {
                            let l = [...u];
                            return l.splice(n.last(), 1), l
                        };
                    return e.setViewState("list-collapse", void 0, s), (0, Zi.default)(mi(i, n), {
                        data: {
                            settings: {
                                "list-collapse": {
                                    $set: s(o)
                                }
                            }
                        }
                    })
                }
                return mi(i, n)
            })
        },
        updateItem: (n, i) => {
            t.setState(a => oh(a, n, {
                children: {
                    [n[n.length - 1]]: {
                        $set: i
                    }
                }
            }))
        },
        archiveItem: n => {
            t.setState(i => {
                let a = un(i, n);
                try {
                    return (0, Zi.default)(mi(i, n), {
                        data: {
                            archive: {
                                $push: [t.getSetting("archive-with-date") ? r(a) : a]
                            }
                        }
                    })
                } catch (o) {
                    return t.setError(o), i
                }
            })
        },
        duplicateEntity: n => {
            t.setState(i => {
                let a = un(i, n),
                    o = (0, Zi.default)(a, {
                        id: {
                            $set: et()
                        }
                    });
                if (a.type === ft.Lane) {
                    let s = e.getViewState("list-collapse"),
                        u = l => {
                            let c = [...l];
                            return c.splice(n.last(), 0, l[n.last()]), c
                        };
                    return e.setViewState("list-collapse", void 0, u), (0, Zi.default)(Xr(i, n, [o]), {
                        data: {
                            settings: {
                                "list-collapse": {
                                    $set: u(s)
                                }
                            }
                        }
                    })
                }
                return Xr(i, n, [o])
            })
        }
    }
}

function cx(e, t) {
    return E(GN, {
        win: e,
        plugin: t
    })
}
var qN = zt(function({
    view: t
}) {
    return Oi(t.getPortal(), t.contentEl)
});

function GN({
    win: e,
    plugin: t
}) {
    let r = t.useKanbanViews(e),
        n = r.map(a => E(qN, {
            view: a
        }, a.id)),
        i = Ye((a, o) => {
            if (!a || !o) return;
            if (a.scopeId === "htmldnd") {
                let I = a.getData(),
                    C = t.getStateManagerFromViewID(I.viewId, I.win),
                    x = o.getPath(),
                    O = un(C.state, x.slice(0, -1));
                try {
                    let A = I.content.map(P => {
                        var J, Q, oe;
                        let B = C.getNewItem(P, " ");
                        if (!!((J = O == null ? void 0 : O.data) != null && J.shouldMarkItemsComplete)) {
                            B = (0, Ss.default)(B, {
                                data: {
                                    checkChar: {
                                        $set: Iu()
                                    }
                                }
                            });
                            let te = Ro(B, C.file);
                            if (te) {
                                let [re, ne, be] = te, pe = re[be], De = ne[be];
                                return C.getNewItem(pe, De)
                            }
                        }
                        return (0, Ss.default)(B, {
                            data: {
                                checked: {
                                    $set: !!((Q = O == null ? void 0 : O.data) != null && Q.shouldMarkItemsComplete)
                                },
                                checkChar: {
                                    $set: (oe = O == null ? void 0 : O.data) != null && oe.shouldMarkItemsComplete ? Zn() : " "
                                }
                            }
                        })
                    });
                    return C.setState(P => Xr(P, x, A))
                } catch (A) {
                    C.setError(A), console.error(A)
                }
                return
            }
            let s = a.getPath(),
                u = o.getPath(),
                l = a.getData(),
                c = o.getData(),
                [, d] = a.scopeId.split(":::"),
                [, m] = o.scopeId.split(":::"),
                h = c.acceptsSort && !c.acceptsSort.includes(l.type);
            if (d === m) {
                let I = t.getKanbanView(a.scopeId, l.win),
                    C = t.stateManagers.get(I.file);
                return h && u.push(0), C.setState(x => {
                    var G;
                    let O = un(x, s),
                        A = Ri(x, s, u, J => {
                            if (J.type === ft.Item) {
                                let {
                                    next: Q
                                } = Au(C, x, s, C, x, u, J);
                                return Q
                            }
                            return J
                        }, J => {
                            if (J.type === ft.Item) {
                                let {
                                    replacement: Q
                                } = Au(C, x, s, C, x, u, J);
                                return Q
                            }
                        });
                    if (O.type === ft.Lane) {
                        let J = s.last(),
                            Q = u.last();
                        J < Q && (Q -= 1);
                        let oe = I.getViewState("list-collapse"),
                            te = re => {
                                let ne = [...re];
                                return ne.splice(Q, 0, ne.splice(J, 1)[0]), ne
                            };
                        return I.setViewState("list-collapse", void 0, te), (0, Ss.default)(A, {
                            data: {
                                settings: {
                                    "list-collapse": {
                                        $set: te(oe)
                                    }
                                }
                            }
                        })
                    }
                    let P = u.slice(0, -1),
                        B = un(x, P);
                    return ((G = B == null ? void 0 : B.data) == null ? void 0 : G.sorted) !== void 0 ? Du(A, P, {
                        data: {
                            $unset: ["sorted"]
                        }
                    }) : A
                })
            }
            let g = t.getKanbanView(a.scopeId, l.win),
                y = t.stateManagers.get(g.file),
                v = t.getKanbanView(o.scopeId, c.win),
                D = t.stateManagers.get(v.file);
            y.setState(I => {
                let C = un(I, s),
                    x;
                if (D.setState(O => {
                        if (h) {
                            let P = un(D.state, u);
                            (D.getSetting("new-card-insertion-method") || "append") === "append" ? u.push(P.children.length): u.push(0)
                        }
                        let A = [];
                        if (C.type === ft.Item) {
                            let {
                                next: P,
                                replacement: B
                            } = Au(y, I, s, D, O, u, C);
                            x = B, A.push(P)
                        } else A.push(C);
                        if (C.type === ft.Lane) {
                            let P = v.getViewState("list-collapse"),
                                B = g.getViewState("list-collapse")[s.last()],
                                G = J => {
                                    let Q = [...J];
                                    return Q.splice(u.last(), 0, B), Q
                                };
                            return v.setViewState("list-collapse", void 0, G), (0, Ss.default)(Xr(O, u, A), {
                                data: {
                                    settings: {
                                        "list-collapse": {
                                            $set: G(P)
                                        }
                                    }
                                }
                            })
                        } else return Xr(O, u, A)
                    }), C.type === ft.Lane) {
                    let O = g.getViewState("list-collapse"),
                        A = P => {
                            let B = [...P];
                            return B.splice(s.last(), 1), B
                        };
                    return g.setViewState("list-collapse", void 0, A), (0, Ss.default)(mi(I, s), {
                        data: {
                            settings: {
                                "list-collapse": {
                                    $set: A(O)
                                }
                            }
                        }
                    })
                } else return mi(I, s, x)
            })
        }, [r]);
    if (n.length) return E(bs, {
        win: e,
        onDrop: i,
        children: [...n, E(Ds, {
            children: (a, o) => {
                let [s, u] = Re(() => {
                    if (a.scopeId === "htmldnd") return [null, null];
                    let l = a.getData(),
                        c = t.getKanbanView(a.scopeId, l.win),
                        d = t.stateManagers.get(c.file),
                        m = un(d.state, a.getPath()),
                        h = Td(c, d),
                        g = c.file.path;
                    return [m, {
                        view: c,
                        stateManager: d,
                        boardModifiers: h,
                        filePath: g
                    }]
                }, [a]);
                if ((s == null ? void 0 : s.type) === ft.Lane) {
                    let l = (u == null ? void 0 : u.view.viewSettings[_t]) || (u == null ? void 0 : u.stateManager.getSetting(_t)),
                        c = (u == null ? void 0 : u.view.viewSettings["list-collapse"]) || (u == null ? void 0 : u.stateManager.getSetting("list-collapse")),
                        d = a.getPath().last();
                    return E(tt.Provider, {
                        value: u,
                        children: E("div", {
                            className: Ge([$("drag-container"), {
                                [$("horizontal")]: l !== "list",
                                [$("vertical")]: l === "list"
                            }]),
                            style: o,
                            children: E(xg, {
                                lane: s,
                                laneIndex: d,
                                isStatic: !0,
                                isCollapsed: !!c[d],
                                collapseDir: l === "list" ? "vertical" : "horizontal"
                            })
                        })
                    })
                }
                return (s == null ? void 0 : s.type) === ft.Item ? E(tt.Provider, {
                    value: u,
                    children: E("div", {
                        className: $("drag-container"),
                        style: o,
                        children: E(gg, {
                            item: s,
                            itemIndex: 0,
                            isStatic: !0
                        })
                    })
                }) : E("div", {})
            }
        })]
    })
}
var _C = Ct(ln()),
    ea = require("obsidian");
var Wx = Ct(ln()),
    rt = require("obsidian");
var fx = Ct(dx()),
    Id = Ct(ln()),
    Aa = require("obsidian");
var Ad = "@",
    Od = "@@",
    Ul = "body";

function JN(e) {
    let t = [];
    return Aa.Vault.recurseChildren(e.vault.getRoot(), r => {
        r instanceof Aa.TFolder && t.push({
            value: r.path,
            label: r.path,
            selected: !1,
            disabled: !1
        })
    }), t
}

function ZN(e, t) {
    let r = [],
        n = t ? e.vault.getAbstractFileByPath(t) : null;
    return (!n || !(n instanceof Aa.TFolder)) && (n = e.vault.getRoot()), Aa.Vault.recurseChildren(n, i => {
        i instanceof Aa.TFile && r.push({
            value: i.path,
            label: i.basename,
            selected: !1,
            disabled: !1
        })
    }), r
}

function hx(e) {
    let {
        templateFolder: t,
        templatesEnabled: r,
        templaterPlugin: n
    } = kh(e), i = ZN(e, t), a = JN(e), o = "";
    return !r && !n && (o = R("Note: No template plugins are currently enabled.")), {
        templateFiles: i,
        vaultFolders: a,
        templateWarning: o
    }
}

function Mg({
    choices: e,
    key: t,
    warningText: r,
    local: n,
    placeHolderStr: i,
    manager: a
}) {
    return o => {
        o.controlEl.createEl("select", {}, s => {
            s.win.setTimeout(() => {
                let u = e,
                    [l, c] = a.getSetting(t, n),
                    d = !1;
                if (c) {
                    let g = u.findIndex(y => y.value === c);
                    if (g > -1) {
                        d = !0;
                        let y = e[g];
                        u = (0, Id.default)(u, {
                            $splice: [
                                [g, 1]
                            ],
                            $unshift: [(0, Id.default)(y, {
                                placeholder: {
                                    $set: !0
                                },
                                value: {
                                    $set: ""
                                },
                                label: {
                                    $apply: v => `${v} (${R("default")})`
                                }
                            })]
                        })
                    }
                }
                d || (u = (0, Id.default)(u, {
                    $unshift: [{
                        placeholder: !0,
                        value: "",
                        label: i,
                        selected: !1,
                        disabled: !1
                    }]
                }));
                let m = new fx.default(s, {
                    placeholder: !0,
                    position: "bottom",
                    searchPlaceholderValue: R("Search..."),
                    searchEnabled: u.length > 10,
                    choices: u
                }).setChoiceByValue("");
                l && typeof l == "string" && u.findIndex(g => g.value === l) > -1 && m.setChoiceByValue(l);
                let h = g => {
                    let y = g.detail.value;
                    y ? a.applySettingsUpdate({
                        [t]: {
                            $set: y
                        }
                    }) : a.applySettingsUpdate({
                        $unset: [t]
                    })
                };
                s.addEventListener("change", h), a.cleanupFns.push(() => {
                    m.destroy(), s.removeEventListener("change", h)
                })
            }), r && o.descEl.createDiv({}, u => {
                u.createEl("strong", {
                    text: r
                })
            })
        })
    }
}
var Hd = Ct(ln()),
    Hg = require("obsidian");
var QN = {
        grad: .9,
        turn: 360,
        rad: 360 / (2 * Math.PI)
    },
    Qi = function(e) {
        return typeof e == "string" ? e.length > 0 : typeof e == "number"
    },
    Nn = function(e, t, r) {
        return t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * e) / r + 0
    },
    jr = function(e, t, r) {
        return t === void 0 && (t = 0), r === void 0 && (r = 1), e > r ? r : e > t ? e : t
    },
    Sx = function(e) {
        return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360
    },
    mx = function(e) {
        return {
            r: jr(e.r, 0, 255),
            g: jr(e.g, 0, 255),
            b: jr(e.b, 0, 255),
            a: jr(e.a)
        }
    },
    Tg = function(e) {
        return {
            r: Nn(e.r),
            g: Nn(e.g),
            b: Nn(e.b),
            a: Nn(e.a, 3)
        }
    },
    XN = /^#([0-9a-f]{3,8})$/i,
    Ld = function(e) {
        var t = e.toString(16);
        return t.length < 2 ? "0" + t : t
    },
    Ex = function(e) {
        var t = e.r,
            r = e.g,
            n = e.b,
            i = e.a,
            a = Math.max(t, r, n),
            o = a - Math.min(t, r, n),
            s = o ? a === t ? (r - n) / o : a === r ? 2 + (n - t) / o : 4 + (t - r) / o : 0;
        return {
            h: 60 * (s < 0 ? s + 6 : s),
            s: a ? o / a * 100 : 0,
            v: a / 255 * 100,
            a: i
        }
    },
    kx = function(e) {
        var t = e.h,
            r = e.s,
            n = e.v,
            i = e.a;
        t = t / 360 * 6, r /= 100, n /= 100;
        var a = Math.floor(t),
            o = n * (1 - r),
            s = n * (1 - (t - a) * r),
            u = n * (1 - (1 - t + a) * r),
            l = a % 6;
        return {
            r: 255 * [n, s, o, o, u, n][l],
            g: 255 * [u, n, n, s, o, o][l],
            b: 255 * [o, o, u, n, n, s][l],
            a: i
        }
    },
    px = function(e) {
        return {
            h: Sx(e.h),
            s: jr(e.s, 0, 100),
            l: jr(e.l, 0, 100),
            a: jr(e.a)
        }
    },
    gx = function(e) {
        return {
            h: Nn(e.h),
            s: Nn(e.s),
            l: Nn(e.l),
            a: Nn(e.a, 3)
        }
    },
    yx = function(e) {
        return kx((r = (t = e).s, {
            h: t.h,
            s: (r *= ((n = t.l) < 50 ? n : 100 - n) / 100) > 0 ? 2 * r / (n + r) * 100 : 0,
            v: n + r,
            a: t.a
        }));
        var t, r, n
    },
    Wl = function(e) {
        return {
            h: (t = Ex(e)).h,
            s: (i = (200 - (r = t.s)) * (n = t.v) / 100) > 0 && i < 200 ? r * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0,
            l: i / 2,
            a: t.a
        };
        var t, r, n, i
    },
    eR = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    tR = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    nR = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    rR = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    vx = {
        string: [
            [function(e) {
                var t = XN.exec(e);
                return t ? (e = t[1]).length <= 4 ? {
                    r: parseInt(e[0] + e[0], 16),
                    g: parseInt(e[1] + e[1], 16),
                    b: parseInt(e[2] + e[2], 16),
                    a: e.length === 4 ? Nn(parseInt(e[3] + e[3], 16) / 255, 2) : 1
                } : e.length === 6 || e.length === 8 ? {
                    r: parseInt(e.substr(0, 2), 16),
                    g: parseInt(e.substr(2, 2), 16),
                    b: parseInt(e.substr(4, 2), 16),
                    a: e.length === 8 ? Nn(parseInt(e.substr(6, 2), 16) / 255, 2) : 1
                } : null : null
            }, "hex"],
            [function(e) {
                var t = nR.exec(e) || rR.exec(e);
                return t ? t[2] !== t[4] || t[4] !== t[6] ? null : mx({
                    r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                    g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                    b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                    a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
                }) : null
            }, "rgb"],
            [function(e) {
                var t = eR.exec(e) || tR.exec(e);
                if (!t) return null;
                var r, n, i = px({
                    h: (r = t[1], n = t[2], n === void 0 && (n = "deg"), Number(r) * (QN[n] || 1)),
                    s: Number(t[3]),
                    l: Number(t[4]),
                    a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
                });
                return yx(i)
            }, "hsl"]
        ],
        object: [
            [function(e) {
                var t = e.r,
                    r = e.g,
                    n = e.b,
                    i = e.a,
                    a = i === void 0 ? 1 : i;
                return Qi(t) && Qi(r) && Qi(n) ? mx({
                    r: Number(t),
                    g: Number(r),
                    b: Number(n),
                    a: Number(a)
                }) : null
            }, "rgb"],
            [function(e) {
                var t = e.h,
                    r = e.s,
                    n = e.l,
                    i = e.a,
                    a = i === void 0 ? 1 : i;
                if (!Qi(t) || !Qi(r) || !Qi(n)) return null;
                var o = px({
                    h: Number(t),
                    s: Number(r),
                    l: Number(n),
                    a: Number(a)
                });
                return yx(o)
            }, "hsl"],
            [function(e) {
                var t = e.h,
                    r = e.s,
                    n = e.v,
                    i = e.a,
                    a = i === void 0 ? 1 : i;
                if (!Qi(t) || !Qi(r) || !Qi(n)) return null;
                var o = function(s) {
                    return {
                        h: Sx(s.h),
                        s: jr(s.s, 0, 100),
                        v: jr(s.v, 0, 100),
                        a: jr(s.a)
                    }
                }({
                    h: Number(t),
                    s: Number(r),
                    v: Number(n),
                    a: Number(a)
                });
                return kx(o)
            }, "hsv"]
        ]
    },
    wx = function(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r][0](e);
            if (n) return [n, t[r][1]]
        }
        return [null, void 0]
    },
    iR = function(e) {
        return typeof e == "string" ? wx(e.trim(), vx.string) : typeof e == "object" && e !== null ? wx(e, vx.object) : [null, void 0]
    };
var Fg = function(e, t) {
        var r = Wl(e);
        return {
            h: r.h,
            s: jr(r.s + 100 * t, 0, 100),
            l: r.l,
            a: r.a
        }
    },
    Ig = function(e) {
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255
    },
    bx = function(e, t) {
        var r = Wl(e);
        return {
            h: r.h,
            s: r.s,
            l: jr(r.l + 100 * t, 0, 100),
            a: r.a
        }
    },
    Dx = function() {
        function e(t) {
            this.parsed = iR(t)[0], this.rgba = this.parsed || {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            }
        }
        return e.prototype.isValid = function() {
            return this.parsed !== null
        }, e.prototype.brightness = function() {
            return Nn(Ig(this.rgba), 2)
        }, e.prototype.isDark = function() {
            return Ig(this.rgba) < .5
        }, e.prototype.isLight = function() {
            return Ig(this.rgba) >= .5
        }, e.prototype.toHex = function() {
            return t = Tg(this.rgba), r = t.r, n = t.g, i = t.b, o = (a = t.a) < 1 ? Ld(Nn(255 * a)) : "", "#" + Ld(r) + Ld(n) + Ld(i) + o;
            var t, r, n, i, a, o
        }, e.prototype.toRgb = function() {
            return Tg(this.rgba)
        }, e.prototype.toRgbString = function() {
            return t = Tg(this.rgba), r = t.r, n = t.g, i = t.b, (a = t.a) < 1 ? "rgba(" + r + ", " + n + ", " + i + ", " + a + ")" : "rgb(" + r + ", " + n + ", " + i + ")";
            var t, r, n, i, a
        }, e.prototype.toHsl = function() {
            return gx(Wl(this.rgba))
        }, e.prototype.toHslString = function() {
            return t = gx(Wl(this.rgba)), r = t.h, n = t.s, i = t.l, (a = t.a) < 1 ? "hsla(" + r + ", " + n + "%, " + i + "%, " + a + ")" : "hsl(" + r + ", " + n + "%, " + i + "%)";
            var t, r, n, i, a
        }, e.prototype.toHsv = function() {
            return t = Ex(this.rgba), {
                h: Nn(t.h),
                s: Nn(t.s),
                v: Nn(t.v),
                a: Nn(t.a, 3)
            };
            var t
        }, e.prototype.invert = function() {
            return ci({
                r: 255 - (t = this.rgba).r,
                g: 255 - t.g,
                b: 255 - t.b,
                a: t.a
            });
            var t
        }, e.prototype.saturate = function(t) {
            return t === void 0 && (t = .1), ci(Fg(this.rgba, t))
        }, e.prototype.desaturate = function(t) {
            return t === void 0 && (t = .1), ci(Fg(this.rgba, -t))
        }, e.prototype.grayscale = function() {
            return ci(Fg(this.rgba, -1))
        }, e.prototype.lighten = function(t) {
            return t === void 0 && (t = .1), ci(bx(this.rgba, t))
        }, e.prototype.darken = function(t) {
            return t === void 0 && (t = .1), ci(bx(this.rgba, -t))
        }, e.prototype.rotate = function(t) {
            return t === void 0 && (t = 15), this.hue(this.hue() + t)
        }, e.prototype.alpha = function(t) {
            return typeof t == "number" ? ci({
                r: (r = this.rgba).r,
                g: r.g,
                b: r.b,
                a: t
            }) : Nn(this.rgba.a, 3);
            var r
        }, e.prototype.hue = function(t) {
            var r = Wl(this.rgba);
            return typeof t == "number" ? ci({
                h: t,
                s: r.s,
                l: r.l,
                a: r.a
            }) : Nn(r.h)
        }, e.prototype.isEqual = function(t) {
            return this.toHex() === ci(t).toHex()
        }, e
    }(),
    ci = function(e) {
        return e instanceof Dx ? e : new Dx(e)
    };
var Rd = Ct(ln());

function Pd() {
    return (Pd = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }).apply(this, arguments)
}

function Mx(e, t) {
    if (e == null) return {};
    var r, n, i = {},
        a = Object.keys(e);
    for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (i[r] = e[r]);
    return i
}

function Og(e) {
    var t = Fe(e),
        r = Fe(function(n) {
            t.current && t.current(n)
        });
    return t.current = e, r.current
}
var Es = function(e, t, r) {
        return t === void 0 && (t = 0), r === void 0 && (r = 1), e > r ? r : e < t ? t : e
    },
    Yl = function(e) {
        return "touches" in e
    },
    Lg = function(e) {
        return e && e.ownerDocument.defaultView || self
    },
    xx = function(e, t, r) {
        var n = e.getBoundingClientRect(),
            i = Yl(t) ? function(a, o) {
                for (var s = 0; s < a.length; s++)
                    if (a[s].identifier === o) return a[s];
                return a[0]
            }(t.touches, r) : t;
        return {
            left: Es((i.pageX - (n.left + Lg(e).pageXOffset)) / n.width),
            top: Es((i.pageY - (n.top + Lg(e).pageYOffset)) / n.height)
        }
    },
    Cx = function(e) {
        !Yl(e) && e.preventDefault()
    },
    Ng = $e.memo(function(e) {
        var t = e.onMove,
            r = e.onKey,
            n = Mx(e, ["onMove", "onKey"]),
            i = Fe(null),
            a = Og(t),
            o = Og(r),
            s = Fe(null),
            u = Fe(!1),
            l = Re(function() {
                var h = function(v) {
                        Cx(v), (Yl(v) ? v.touches.length > 0 : v.buttons > 0) && i.current ? a(xx(i.current, v, s.current)) : y(!1)
                    },
                    g = function() {
                        return y(!1)
                    };

                function y(v) {
                    var D = u.current,
                        I = Lg(i.current),
                        C = v ? I.addEventListener : I.removeEventListener;
                    C(D ? "touchmove" : "mousemove", h), C(D ? "touchend" : "mouseup", g)
                }
                return [function(v) {
                    var D = v.nativeEvent,
                        I = i.current;
                    if (I && (Cx(D), ! function(x, O) {
                            return O && !Yl(x)
                        }(D, u.current) && I)) {
                        if (Yl(D)) {
                            u.current = !0;
                            var C = D.changedTouches || [];
                            C.length && (s.current = C[0].identifier)
                        }
                        I.focus(), a(xx(I, D, s.current)), y(!0)
                    }
                }, function(v) {
                    var D = v.which || v.keyCode;
                    D < 37 || D > 40 || (v.preventDefault(), o({
                        left: D === 39 ? .05 : D === 37 ? -.05 : 0,
                        top: D === 40 ? .05 : D === 38 ? -.05 : 0
                    }))
                }, y]
            }, [o, a]),
            c = l[0],
            d = l[1],
            m = l[2];
        return Ae(function() {
            return m
        }, [m]), $e.createElement("div", Pd({}, n, {
            onTouchStart: c,
            onMouseDown: c,
            className: "react-colorful__interactive",
            ref: i,
            onKeyDown: d,
            tabIndex: 0,
            role: "slider"
        }))
    }),
    Nd = function(e) {
        return e.filter(Boolean).join(" ")
    },
    Rg = function(e) {
        var t = e.color,
            r = e.left,
            n = e.top,
            i = n === void 0 ? .5 : n,
            a = Nd(["react-colorful__pointer", e.className]);
        return $e.createElement("div", {
            className: a,
            style: {
                top: 100 * i + "%",
                left: 100 * r + "%"
            }
        }, $e.createElement("div", {
            className: "react-colorful__pointer-fill",
            style: {
                backgroundColor: t
            }
        }))
    },
    hr = function(e, t, r) {
        return t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * e) / r
    },
    xG = {
        grad: .9,
        turn: 360,
        rad: 360 / (2 * Math.PI)
    };
var Tx = function(e) {
        var t = e.s,
            r = e.v,
            n = e.a,
            i = (200 - t) * r / 100;
        return {
            h: hr(e.h),
            s: hr(i > 0 && i < 200 ? t * r / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
            l: hr(i / 2),
            a: hr(n, 2)
        }
    },
    Pg = function(e) {
        var t = Tx(e);
        return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)"
    },
    Ag = function(e) {
        var t = Tx(e);
        return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")"
    },
    aR = function(e) {
        var t = e.h,
            r = e.s,
            n = e.v,
            i = e.a;
        t = t / 360 * 6, r /= 100, n /= 100;
        var a = Math.floor(t),
            o = n * (1 - r),
            s = n * (1 - (t - a) * r),
            u = n * (1 - (1 - t + a) * r),
            l = a % 6;
        return {
            r: hr(255 * [n, s, o, o, u, n][l]),
            g: hr(255 * [u, n, n, s, o, o][l]),
            b: hr(255 * [o, o, u, n, n, s][l]),
            a: hr(i, 2)
        }
    };
var oR = function(e) {
    var t = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return t ? sR({
        r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
        g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
        b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
        a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    }
};
var sR = function(e) {
    var t = e.r,
        r = e.g,
        n = e.b,
        i = e.a,
        a = Math.max(t, r, n),
        o = a - Math.min(t, r, n),
        s = o ? a === t ? (r - n) / o : a === r ? 2 + (n - t) / o : 4 + (t - r) / o : 0;
    return {
        h: hr(60 * (s < 0 ? s + 6 : s)),
        s: hr(a ? o / a * 100 : 0),
        v: hr(a / 255 * 100),
        a: i
    }
};
var lR = $e.memo(function(e) {
        var t = e.hue,
            r = e.onChange,
            n = Nd(["react-colorful__hue", e.className]);
        return $e.createElement("div", {
            className: n
        }, $e.createElement(Ng, {
            onMove: function(i) {
                r({
                    h: 360 * i.left
                })
            },
            onKey: function(i) {
                r({
                    h: Es(t + 360 * i.left, 0, 360)
                })
            },
            "aria-label": "Hue",
            "aria-valuenow": hr(t),
            "aria-valuemax": "360",
            "aria-valuemin": "0"
        }, $e.createElement(Rg, {
            className: "react-colorful__hue-pointer",
            left: t / 360,
            color: Pg({
                h: t,
                s: 100,
                v: 100,
                a: 1
            })
        })))
    }),
    uR = $e.memo(function(e) {
        var t = e.hsva,
            r = e.onChange,
            n = {
                backgroundColor: Pg({
                    h: t.h,
                    s: 100,
                    v: 100,
                    a: 1
                })
            };
        return $e.createElement("div", {
            className: "react-colorful__saturation",
            style: n
        }, $e.createElement(Ng, {
            onMove: function(i) {
                r({
                    s: 100 * i.left,
                    v: 100 - 100 * i.top
                })
            },
            onKey: function(i) {
                r({
                    s: Es(t.s + 100 * i.left, 0, 100),
                    v: Es(t.v - 100 * i.top, 0, 100)
                })
            },
            "aria-label": "Color",
            "aria-valuetext": "Saturation " + hr(t.s) + "%, Brightness " + hr(t.v) + "%"
        }, $e.createElement(Rg, {
            className: "react-colorful__saturation-pointer",
            top: 1 - t.v / 100,
            left: t.s / 100,
            color: Pg(t)
        })))
    }),
    cR = function(e, t) {
        if (e === t) return !0;
        for (var r in e)
            if (e[r] !== t[r]) return !1;
        return !0
    },
    dR = function(e, t) {
        return e.replace(/\s/g, "") === t.replace(/\s/g, "")
    };

function fR(e, t, r) {
    var n = Og(r),
        i = Ne(function() {
            return e.toHsva(t)
        }),
        a = i[0],
        o = i[1],
        s = Fe({
            color: t,
            hsva: a
        });
    Ae(function() {
        if (!e.equal(t, s.current.color)) {
            var l = e.toHsva(t);
            s.current = {
                hsva: l,
                color: t
            }, o(l)
        }
    }, [t, e]), Ae(function() {
        var l;
        cR(a, s.current.hsva) || e.equal(l = e.fromHsva(a), s.current.color) || (s.current = {
            hsva: a,
            color: l
        }, n(l))
    }, [a, e, n]);
    var u = Ye(function(l) {
        o(function(c) {
            return Object.assign({}, c, l)
        })
    }, []);
    return [a, u]
}
var hR, mR = typeof window != "undefined" ? Ai : Ae,
    pR = function() {
        return hR || (typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : void 0)
    };
var _x = new Map,
    gR = function(e) {
        mR(function() {
            var t = e.current ? e.current.ownerDocument : document;
            if (t !== void 0 && !_x.has(t)) {
                var r = t.createElement("style");
                r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, _x.set(t, r);
                var n = pR();
                n && r.setAttribute("nonce", n), t.head.appendChild(r)
            }
        }, [])
    };
var yR = function(e) {
        var t = e.className,
            r = e.hsva,
            n = e.onChange,
            i = {
                backgroundImage: "linear-gradient(90deg, " + Ag(Object.assign({}, r, {
                    a: 0
                })) + ", " + Ag(Object.assign({}, r, {
                    a: 1
                })) + ")"
            },
            a = Nd(["react-colorful__alpha", t]),
            o = hr(100 * r.a);
        return $e.createElement("div", {
            className: a
        }, $e.createElement("div", {
            className: "react-colorful__alpha-gradient",
            style: i
        }), $e.createElement(Ng, {
            onMove: function(s) {
                n({
                    a: s.left
                })
            },
            onKey: function(s) {
                n({
                    a: Es(r.a + s.left)
                })
            },
            "aria-label": "Alpha",
            "aria-valuetext": o + "%",
            "aria-valuenow": o,
            "aria-valuemin": "0",
            "aria-valuemax": "100"
        }, $e.createElement(Rg, {
            className: "react-colorful__alpha-pointer",
            left: r.a,
            color: Ag(r)
        })))
    },
    vR = function(e) {
        var t = e.className,
            r = e.colorModel,
            n = e.color,
            i = n === void 0 ? r.defaultColor : n,
            a = e.onChange,
            o = Mx(e, ["className", "colorModel", "color", "onChange"]),
            s = Fe(null);
        gR(s);
        var u = fR(r, i, a),
            l = u[0],
            c = u[1],
            d = Nd(["react-colorful", t]);
        return $e.createElement("div", Pd({}, o, {
            ref: s,
            className: d
        }), $e.createElement(uR, {
            hsva: l,
            onChange: c
        }), $e.createElement(lR, {
            hue: l.h,
            onChange: c
        }), $e.createElement(yR, {
            hsva: l,
            onChange: c,
            className: "react-colorful__last-control"
        }))
    };
var wR = {
        defaultColor: "rgba(0, 0, 0, 1)",
        toHsva: oR,
        fromHsva: function(e) {
            var t = aR(e);
            return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")"
        },
        equal: dR
    },
    Fx = function(e) {
        return $e.createElement(vR, Pd({}, e, {
            colorModel: wR
        }))
    };

function Ix(e) {
    let t = ci(e);
    if (!t.isValid()) return null;
    let r = t.toRgb();
    return {
        rgba: `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})`,
        hexa: t.toHex()
    }
}

function zl({
    color: e,
    setColor: t,
    defaultColor: r
}) {
    let [n, i] = Ne(e || r), [a, o] = Ne(e || r), [s, u] = Ne(!1), l = Ye(d => {
        let m = Ix(d || r);
        m && (o(m.hexa), i(m.rgba), t(m.rgba))
    }, [t]);
    Ae(() => {
        if (!e || !r) return;
        let d = Ix(e || r);
        d && (i(d.rgba), o(d.hexa))
    }, []);
    let c = ws(() => {
        u(!1)
    });
    return E("div", {
        ref: c,
        className: $("color-picker-wrapper"),
        children: [s && E("div", {
            className: $("color-picker"),
            children: E(Fx, {
                color: n,
                onChange: l
            })
        }), E("input", {
            type: "text",
            value: a,
            onChange: d => l(d.target.value),
            onFocus: () => {
                u(!0)
            }
        })]
    })
}

function bR({
    tagColorKey: e,
    deleteKey: t,
    updateKey: r,
    defaultColors: n
}) {
    return E("div", {
        className: $("setting-item-wrapper"),
        children: E("div", {
            className: $("setting-item"),
            children: [E("div", {
                className: `${$("setting-controls-wrapper")} ${$("tag-color-input")}`,
                children: [E("div", {
                    className: $("setting-input-wrapper"),
                    children: [E("div", {
                        children: [E("div", {
                            className: $("setting-item-label"),
                            children: R("Tag")
                        }), E("input", {
                            type: "text",
                            placeholder: "#tag",
                            value: e.tagKey,
                            onChange: i => {
                                let a = i.currentTarget.value;
                                r(a[0] === "#" ? a : "#" + a, e.color, e.backgroundColor)
                            }
                        })]
                    }), E("div", {
                        children: [E("div", {
                            className: $("setting-item-label"),
                            children: R("Background color")
                        }), E(zl, {
                            color: e.backgroundColor,
                            setColor: i => {
                                r(e.tagKey, e.color, i)
                            },
                            defaultColor: n.backgroundColor
                        })]
                    }), E("div", {
                        children: [E("div", {
                            className: $("setting-item-label"),
                            children: R("Text color")
                        }), E(zl, {
                            color: e.color,
                            setColor: i => {
                                r(e.tagKey, i, e.backgroundColor)
                            },
                            defaultColor: n.color
                        })]
                    })]
                }), E("div", {
                    className: $("setting-toggle-wrapper"),
                    children: E("div", {
                        children: E("div", {
                            className: $("item-tags"),
                            children: [E("a", {
                                className: `tag ${$("item-tag")}`,
                                children: "#tag1"
                            }), E("a", {
                                className: `tag ${$("item-tag")}`,
                                style: {
                                    "--tag-color": e.color,
                                    "--tag-background": e.backgroundColor
                                },
                                children: e.tagKey || "#tag"
                            }), E("a", {
                                className: `tag ${$("item-tag")}`,
                                children: "#tag2"
                            })]
                        })
                    })
                })]
            }), E("div", {
                className: $("setting-button-wrapper"),
                children: E("div", {
                    className: "clickable-icon",
                    onClick: t,
                    "aria-label": R("Delete"),
                    children: E(Ut, {
                        name: "lucide-trash-2"
                    })
                })
            })]
        })
    })
}

function DR({
    dataKeys: e,
    onChange: t
}) {
    let [r, n] = Ne(e), i = Re(() => {
        let l = createDiv($("item-tags")),
            c = l.createEl("a", $("item-tag"));
        l.style.position = "absolute", l.style.visibility = "hidden", activeDocument.body.append(l);
        let d = activeWindow.getComputedStyle(c),
            m = d.getPropertyValue("color").trim(),
            h = d.getPropertyValue("background-color").trim();
        return l.remove(), {
            color: m,
            backgroundColor: h
        }
    }, []), a = l => {
        t(l), n(l)
    }, o = () => {
        a((0, Rd.default)(r, {
            $push: [{
                ...Bc,
                id: et(),
                data: {
                    tagKey: "",
                    color: "",
                    backgroundColor: ""
                }
            }]
        }))
    }, s = l => {
        a((0, Rd.default)(r, {
            $splice: [
                [l, 1]
            ]
        }))
    }, u = l => (c, d, m) => {
        a((0, Rd.default)(r, {
            [l]: {
                data: {
                    tagKey: {
                        $set: c
                    },
                    color: {
                        $set: d
                    },
                    backgroundColor: {
                        $set: m
                    }
                }
            }
        }))
    };
    return E("div", {
        className: $("tag-color-input-wrapper"),
        children: [E("div", {
            className: "setting-item-info",
            children: [E("div", {
                className: "setting-item-name",
                children: R("Tag colors")
            }), E("div", {
                className: "setting-item-description",
                children: R("Set colors for tags displayed in cards.")
            })]
        }), E("div", {
            children: r.map((l, c) => E(bR, {
                tagColorKey: l.data,
                deleteKey: () => s(c),
                updateKey: u(c),
                defaultColors: i
            }, l.id))
        }), E("button", {
            className: $("add-tag-color-button"),
            onClick: () => {
                o()
            },
            children: R("Add tag color")
        })]
    })
}

function Ax(e, t, r) {
    Li(E(DR, {
        dataKeys: t,
        onChange: r,
        portalContainer: ha(e)
    }), e)
}

function Ox(e) {
    Pi(e)
}

function SR({
    dateColorKey: e,
    deleteKey: t,
    updateKey: r,
    defaultColors: n,
    getTimeFormat: i,
    getDateFormat: a
}) {
    let o = "between";
    return e.isToday && (o = "today"), e.isBefore && (o = "before"), e.isAfter && (o = "after"), E("div", {
        className: $("setting-item-wrapper"),
        children: E("div", {
            className: $("setting-item"),
            children: [E("div", {
                className: `${$("setting-controls-wrapper")} ${$("tag-color-input")}`,
                children: [E("div", {
                    children: [E("div", {
                        children: E("div", {
                            className: $("setting-item-label"),
                            children: R("Date is")
                        })
                    }), E("div", {
                        className: $("date-color-config"),
                        children: [E("select", {
                            className: "dropdown",
                            defaultValue: o,
                            onChange: s => {
                                let u = {
                                    ...e
                                };
                                switch (delete u.isAfter, delete u.isBefore, delete u.isToday, s.target.value) {
                                    case "today":
                                        u.isToday = !0;
                                        break;
                                    case "before":
                                        u.isBefore = !0;
                                        break;
                                    case "after":
                                        u.isAfter = !0;
                                        break
                                }
                                r(u)
                            },
                            children: [E("option", {
                                value: "between",
                                children: R("Between now and")
                            }), E("option", {
                                value: "today",
                                children: R("Today")
                            }), E("option", {
                                value: "after",
                                children: R("After now")
                            }), E("option", {
                                value: "before",
                                children: R("Before now")
                            })]
                        }), !e.isToday && !e.isAfter && !e.isBefore && E(ct, {
                            children: [E("input", {
                                type: "number",
                                value: e.distance,
                                onChange: s => {
                                    r({
                                        ...e,
                                        distance: parseInt(s.target.value)
                                    })
                                }
                            }), E("select", {
                                className: "dropdown",
                                defaultValue: e.unit,
                                onChange: s => {
                                    r({
                                        ...e,
                                        unit: s.target.value
                                    })
                                },
                                children: [E("option", {
                                    value: "hours",
                                    children: "Hours"
                                }), E("option", {
                                    value: "days",
                                    children: "Days"
                                }), E("option", {
                                    value: "weeks",
                                    children: "Weeks"
                                }), E("option", {
                                    value: "months",
                                    children: "Months"
                                })]
                            }), E("select", {
                                className: "dropdown",
                                defaultValue: e.direction,
                                onChange: s => {
                                    r({
                                        ...e,
                                        direction: s.target.value
                                    })
                                },
                                children: [E("option", {
                                    value: "after",
                                    children: R("After now")
                                }), E("option", {
                                    value: "before",
                                    children: R("Before now")
                                })]
                            })]
                        })]
                    }), E("div", {
                        className: $("date-color-config"),
                        children: [E("div", {
                            children: [E("div", {
                                className: $("setting-item-label"),
                                children: R("Background color")
                            }), E(zl, {
                                color: e.backgroundColor,
                                setColor: s => {
                                    r({
                                        ...e,
                                        backgroundColor: s
                                    })
                                },
                                defaultColor: n.backgroundColor
                            })]
                        }), E("div", {
                            children: [E("div", {
                                className: $("setting-item-label"),
                                children: R("Text color")
                            }), E(zl, {
                                color: e.color,
                                setColor: s => {
                                    r({
                                        ...e,
                                        color: s
                                    })
                                },
                                defaultColor: n.color
                            })]
                        })]
                    })]
                }), E("div", {
                    children: E("div", {
                        className: $("date-color-wrapper"),
                        children: E("div", {
                            className: $("item-metadata"),
                            children: E("span", {
                                style: {
                                    "--date-color": e.color,
                                    "--date-background-color": e.backgroundColor
                                },
                                className: Ge([$("item-metadata-date-wrapper"), $("date"), {
                                    "has-background": !!(e != null && e.backgroundColor)
                                }]),
                                children: [E("span", {
                                    className: $("item-metadata-date is-button"),
                                    children: (0, Hg.moment)().format(a())
                                }), " ", E("span", {
                                    className: $("item-metadata-time is-button"),
                                    children: (0, Hg.moment)().format(i())
                                })]
                            })
                        })
                    })
                })]
            }), E("div", {
                className: $("setting-button-wrapper"),
                children: E("div", {
                    className: "clickable-icon",
                    onClick: t,
                    "aria-label": R("Delete"),
                    children: E(Ut, {
                        name: "lucide-trash-2"
                    })
                })
            })]
        })
    })
}

function ER({
    dataKeys: e,
    onChange: t,
    getTimeFormat: r,
    getDateFormat: n
}) {
    let [i, a] = $e.useState(e), o = $e.useMemo(() => {
        let d = createDiv($("item-metadata")),
            m = d.createSpan($("item-metadata-date"));
        d.style.position = "absolute", d.style.visibility = "hidden", activeDocument.body.append(d);
        let h = activeWindow.getComputedStyle(m),
            g = h.getPropertyValue("color").trim(),
            y = h.getPropertyValue("background-color").trim();
        return d.remove(), {
            color: g,
            backgroundColor: y
        }
    }, []), s = d => {
        t(d), a(d)
    }, u = () => {
        s((0, Hd.default)(i, {
            $push: [{
                ...Vc,
                id: et(),
                data: {
                    isToday: !1,
                    distance: 1,
                    unit: "days",
                    direction: "after"
                }
            }]
        }))
    }, l = d => {
        s((0, Hd.default)(i, {
            $splice: [
                [d, 1]
            ]
        }))
    }, c = d => m => {
        s((0, Hd.default)(i, {
            [d]: {
                data: {
                    $set: m
                }
            }
        }))
    };
    return E("div", {
        className: $("date-color-input-wrapper"),
        children: [E("div", {
            className: "setting-item-info",
            children: [E("div", {
                className: "setting-item-name",
                children: R("Display date colors")
            }), E("div", {
                className: "setting-item-description",
                children: R("Set colors for dates displayed in cards based on the rules below.")
            })]
        }), E("div", {
            children: i.map((d, m) => E(SR, {
                dateColorKey: d.data,
                deleteKey: () => l(m),
                updateKey: c(m),
                defaultColors: o,
                getTimeFormat: r,
                getDateFormat: n
            }, d.id))
        }), E("button", {
            className: $("add-tag-color-button"),
            onClick: u,
            children: R("Add date color")
        })]
    })
}

function Lx(e, t, r, n, i) {
    $e.render(E(ER, {
        dataKeys: t,
        onChange: r,
        portalContainer: ha(e),
        getDateFormat: n,
        getTimeFormat: i
    }), e)
}

function Px(e) {
    $e.unmountComponentAtNode(e)
}
var fo = Ct(ln());

function ks({
    id: e,
    children: t
}) {
    let r = $e.useContext(sl),
        n = $e.useMemo(() => e || et(), [e]);
    return $e.useEffect(() => () => {
        r.unmountScope(e)
    }, [e]), E(ma.Provider, {
        value: n,
        children: t
    })
}

function Nx({
    isStatic: e,
    itemIndex: t,
    item: r,
    toggleShouldHideLabel: n,
    toggleContainsMarkdown: i,
    deleteKey: a,
    updateKey: o,
    updateLabel: s
}) {
    let u = Fe(null),
        l = Fe(null),
        c = Fe(null),
        d = Ta(l, c),
        m = E("div", {
            className: $("setting-controls-wrapper"),
            children: [E("div", {
                className: $("setting-input-wrapper"),
                children: [E("div", {
                    children: [E("div", {
                        className: $("setting-item-label"),
                        children: R("Metadata key")
                    }), E("input", {
                        type: "text",
                        value: r.data.metadataKey,
                        onChange: h => o(h.target.value)
                    })]
                }), E("div", {
                    children: [E("div", {
                        className: $("setting-item-label"),
                        children: R("Display label")
                    }), E("input", {
                        type: "text",
                        value: r.data.label,
                        onChange: h => s(h.target.value)
                    })]
                })]
            }), E("div", {
                className: $("setting-toggle-wrapper"),
                children: [E("div", {
                    children: [E("div", {
                        className: `checkbox-container ${r.data.shouldHideLabel?"is-enabled":""}`,
                        onClick: n,
                        "aria-label": R("Hide label")
                    }), E("div", {
                        className: $("setting-item-label"),
                        children: R("Hide label")
                    })]
                }), E("div", {
                    children: [E("div", {
                        className: `checkbox-container ${r.data.containsMarkdown?"is-enabled":""}`,
                        onClick: i,
                        "aria-label": R("Field contains markdown")
                    }), E("div", {
                        className: $("setting-item-label"),
                        children: R("Field contains markdown")
                    })]
                })]
            })]
        });
    return E("div", {
        ref: l,
        className: $("setting-item-wrapper"),
        children: E("div", {
            ref: u,
            className: $("setting-item"),
            children: [e ? m : E(ei, {
                elementRef: u,
                measureRef: l,
                id: r.id,
                index: t,
                data: r,
                children: m
            }), E("div", {
                className: $("setting-button-wrapper"),
                children: [E("div", {
                    className: "clickable-icon",
                    onClick: a,
                    "aria-label": R("Delete"),
                    children: E(Ut, {
                        name: "lucide-trash-2"
                    })
                }), E("div", {
                    className: "mobile-option-setting-drag-icon clickable-icon",
                    "aria-label": R("Drag to rearrange"),
                    ref: d,
                    children: E(Ut, {
                        name: "lucide-grip-horizontal"
                    })
                })]
            })]
        })
    })
}

function kR({
    onChange: e,
    inputValue: t,
    keys: r,
    setKeys: n
}) {
    let i = a => {
        e(a), n(a)
    };
    return {
        updateKey: a => o => {
            i((0, fo.default)(r, {
                [a]: {
                    data: {
                        metadataKey: {
                            $set: o
                        }
                    }
                }
            }))
        },
        updateLabel: a => o => {
            i((0, fo.default)(r, {
                [a]: {
                    data: {
                        label: {
                            $set: o
                        }
                    }
                }
            }))
        },
        toggleShouldHideLabel: a => () => {
            i((0, fo.default)(r, {
                [a]: {
                    data: {
                        $toggle: ["shouldHideLabel"]
                    }
                }
            }))
        },
        toggleContainsMarkdown: a => () => {
            i((0, fo.default)(r, {
                [a]: {
                    data: {
                        $toggle: ["containsMarkdown"]
                    }
                }
            }))
        },
        deleteKey: a => () => {
            i((0, fo.default)(r, {
                $splice: [
                    [a, 1]
                ]
            }))
        },
        newKey: () => {
            i((0, fo.default)(r, {
                $push: [{
                    ...Rc,
                    id: et(),
                    data: {
                        metadataKey: t,
                        label: "",
                        shouldHideLabel: !1,
                        containsMarkdown: !1
                    }
                }]
            }))
        },
        moveKey: (a, o) => {
            let s = a.getPath(),
                u = o.getPath(),
                l = s[s.length - 1],
                c = u[u.length - 1];
            if (l === c) return;
            let d = r.slice(),
                [m] = d.splice(l, 1);
            d.splice(c, 0, m), i(d)
        }
    }
}
var xR = [ft.MetadataSetting];

function CR({
    keys: e,
    portalContainer: t
}) {
    return Oi(E(Ds, {
        children: (r, n) => {
            let a = r.getPath()[0],
                o = e[a];
            return E("div", {
                className: $("drag-container"),
                style: n,
                children: E(Nx, {
                    item: o,
                    itemIndex: a,
                    updateKey: Mr,
                    updateLabel: Mr,
                    toggleShouldHideLabel: Mr,
                    toggleContainsMarkdown: Mr,
                    deleteKey: Mr,
                    isStatic: !0
                })
            })
        }
    }), t)
}

function _R({
    scrollEl: e
}) {
    let t = Ee(cn);
    return Ae(() => {
        let r = 0,
            n = () => {
                e.win.clearTimeout(r), r = e.win.setTimeout(() => {
                    t.hitboxEntities.forEach(i => {
                        i.recalcInitial()
                    })
                }, 100)
            };
        return e.addEventListener("scroll", n, {
            passive: !0,
            capture: !1
        }), () => {
            e.removeEventListener("scroll", n)
        }
    }, [e, t]), null
}

function MR(e) {
    let [t, r] = Ne(e.dataKeys), [n, i] = Ne(""), {
        getShouldIMEBlockAction: a,
        ...o
    } = Ou(), s = Dn(e.scrollEl), {
        updateKey: u,
        updateLabel: l,
        toggleShouldHideLabel: c,
        toggleContainsMarkdown: d,
        deleteKey: m,
        newKey: h,
        moveKey: g
    } = kR({
        onChange: e.onChange,
        inputValue: n,
        keys: t,
        setKeys: r,
        win: s
    });
    return E(ct, {
        children: [E(bs, {
            win: s,
            onDrop: g,
            children: [E(_R, {
                scrollEl: e.scrollEl
            }), E(ks, {
                children: E(Ia, {
                    axis: "vertical",
                    children: [t.map((y, v) => E(Nx, {
                        item: y,
                        itemIndex: v,
                        updateKey: u(v),
                        updateLabel: l(v),
                        toggleShouldHideLabel: c(v),
                        toggleContainsMarkdown: d(v),
                        deleteKey: m(v)
                    }, y.id)), E(Fa, {
                        accepts: xR,
                        index: t.length
                    })]
                })
            }), E(CR, {
                keys: t,
                portalContainer: e.portalContainer
            })]
        }), E("div", {
            className: $("setting-key-input-wrapper"),
            children: [E("input", {
                placeholder: R("Metadata key"),
                type: "text",
                value: n,
                onChange: y => i(y.target.value),
                onKeyDown: y => {
                    if (!a()) {
                        if (y.key === "Enter") {
                            h(), i("");
                            return
                        }
                        y.key === "Escape" && (i(""), y.target.blur())
                    }
                },
                ...o
            }), E("button", {
                onClick: () => {
                    h(), i("")
                },
                children: R("Add key")
            })]
        })]
    })
}

function Rx(e, t, r, n) {
    Li(E(MR, {
        dataKeys: r,
        scrollEl: t,
        onChange: n,
        portalContainer: ha(e)
    }), e)
}

function Hx(e) {
    Pi(e)
}
var Bd = Ct(ln());

function Bx({
    isStatic: e,
    tagIndex: t,
    tag: r,
    deleteTag: n,
    updateTag: i
}) {
    let a = Fe(null),
        o = Fe(null),
        s = Fe(null),
        u = Ta(o, s),
        l = E("div", {
            className: $("setting-controls-wrapper"),
            children: E("div", {
                className: $("setting-input-wrapper"),
                children: E("div", {
                    children: E("input", {
                        type: "text",
                        value: r.data.tag,
                        onChange: c => i(c.target.value)
                    })
                })
            })
        });
    return E("div", {
        ref: o,
        className: $("setting-item-wrapper"),
        children: E("div", {
            ref: a,
            className: $("setting-item"),
            children: [e ? l : E(ei, {
                elementRef: a,
                measureRef: o,
                id: r.id,
                index: t,
                data: r,
                children: l
            }), E("div", {
                className: $("setting-button-wrapper"),
                children: [E("div", {
                    className: "clickable-icon",
                    onClick: n,
                    "aria-label": R("Delete"),
                    children: E(Ut, {
                        name: "lucide-trash-2"
                    })
                }), E("div", {
                    className: "mobile-option-setting-drag-icon clickable-icon",
                    "aria-label": R("Drag to rearrange"),
                    ref: u,
                    children: E(Ut, {
                        name: "lucide-grip-horizontal"
                    })
                })]
            })]
        })
    })
}

function TR({
    onChange: e,
    inputValue: t,
    tags: r,
    setTags: n
}) {
    let i = a => {
        e(a), n(a)
    };
    return {
        updateTag: a => o => {
            i((0, Bd.default)(r, {
                [a]: {
                    data: {
                        tag: {
                            $set: o
                        }
                    }
                }
            }))
        },
        deleteTag: a => () => {
            i((0, Bd.default)(r, {
                $splice: [
                    [a, 1]
                ]
            }))
        },
        newTag: () => {
            i((0, Bd.default)(r, {
                $push: [{
                    ...Hc,
                    id: et(),
                    data: {
                        tag: t
                    }
                }]
            }))
        },
        moveTag: (a, o) => {
            let s = a.getPath(),
                u = o.getPath(),
                l = s[s.length - 1],
                c = u[u.length - 1];
            if (l === c) return;
            let d = r.slice(),
                [m] = d.splice(l, 1);
            d.splice(c, 0, m), i(d)
        }
    }
}
var FR = [ft.TagSortSetting];

function IR({
    keys: e,
    portalContainer: t
}) {
    return Oi(E(Ds, {
        children: (r, n) => {
            let a = r.getPath()[0],
                o = e[a];
            return E("div", {
                className: Ge([$("drag-container"), $("tag-sort-input-wrapper")]),
                style: n,
                children: E(Bx, {
                    tag: o,
                    tagIndex: a,
                    updateTag: Mr,
                    deleteTag: Mr,
                    isStatic: !0
                })
            })
        }
    }), t)
}

function AR({
    scrollEl: e
}) {
    let t = Ee(cn);
    return Ae(() => {
        let r = 0,
            n = () => {
                e.win.clearTimeout(r), r = e.win.setTimeout(() => {
                    t == null || t.hitboxEntities.forEach(i => {
                        i.recalcInitial()
                    })
                }, 100)
            };
        return e.addEventListener("scroll", n, {
            passive: !0,
            capture: !1
        }), () => {
            e.removeEventListener("scroll", n)
        }
    }, [e, t]), null
}

function OR(e) {
    let [t, r] = Ne(e.tags), [n, i] = Ne(""), {
        getShouldIMEBlockAction: a,
        ...o
    } = Ou(), s = Dn(e.scrollEl), {
        updateTag: u,
        deleteTag: l,
        newTag: c,
        moveTag: d
    } = TR({
        onChange: e.onChange,
        inputValue: n,
        tags: t,
        setTags: r,
        win: s
    });
    return E("div", {
        className: $("tag-sort-input-wrapper"),
        children: [E("div", {
            className: "setting-item-info",
            children: [E("div", {
                className: "setting-item-name",
                children: R("Tag sort order")
            }), E("div", {
                className: "setting-item-description",
                children: R("Set an explicit sort order for the specified tags.")
            })]
        }), E("div", {
            children: E(bs, {
                win: s,
                onDrop: d,
                children: [E(AR, {
                    scrollEl: e.scrollEl
                }), E(ks, {
                    children: E(Ia, {
                        axis: "vertical",
                        children: [t.map((m, h) => E(Bx, {
                            tag: m,
                            tagIndex: h,
                            updateTag: u(h),
                            deleteTag: l(h)
                        }, m.id)), E(Fa, {
                            accepts: FR,
                            index: t.length
                        })]
                    })
                }), E(IR, {
                    keys: t,
                    portalContainer: e.portalContainer
                })]
            })
        }), E("div", {
            className: $("setting-key-input-wrapper"),
            children: [E("input", {
                placeholder: "#tag",
                type: "text",
                value: n,
                onChange: m => {
                    let h = m.target.value;
                    i(h[0] === "#" ? h : "#" + h)
                },
                onKeyDown: m => {
                    if (!a()) {
                        if (m.key === "Enter") {
                            c(), i("");
                            return
                        }
                        m.key === "Escape" && (i(""), m.target.blur())
                    }
                },
                ...o
            }), E("button", {
                onClick: () => {
                    c(), i("")
                },
                children: R("Add tag")
            })]
        })]
    })
}

function Vx(e, t, r, n) {
    Li(E(OR, {
        tags: r,
        scrollEl: t,
        onChange: n,
        portalContainer: ha(e)
    }), e)
}

function $x(e) {
    Pi(e)
}
var Ux = /^\d+(?:\.\d+)?$/,
    Yx = new Set([_t, "append-archive-date", "archive-date-format", "archive-date-separator", "archive-with-date", "date-colors", "date-display-format", "date-format", "date-picker-week-start", "date-time-display-format", "date-trigger", "full-list-lane-width", "hide-card-count", "inline-metadata-position", "lane-width", "link-date-to-daily-note", "list-collapse", "max-archive-size", "metadata-keys", "move-dates", "move-tags", "move-task-metadata", "new-card-insertion-method", "new-line-trigger", "new-note-folder", "new-note-template", "show-add-list", "show-archive-all", "show-board-settings", "show-checkboxes", "show-relative-date", "show-search", "show-set-view", "show-view-as-markdown", "table-sizing", "tag-action", "tag-colors", "tag-sort", "time-format", "time-trigger"]),
    Vd = class {
        constructor(t, r, n) {
            this.cleanupFns = [];
            this.applyDebounceTimer = 0;
            this.app = t.app, this.plugin = t, this.config = r, this.settings = n
        }
        applySettingsUpdate(t) {
            this.win.clearTimeout(this.applyDebounceTimer), this.applyDebounceTimer = this.win.setTimeout(() => {
                this.settings = (0, Wx.default)(this.settings, t), this.config.onSettingsChange(this.settings)
            }, 1e3)
        }
        getSetting(t, r) {
            return r ? [this.settings[t], this.plugin.settings[t]] : [this.settings[t], null]
        }
        constructUI(t, r, n) {
            this.win = t.win;
            let {
                templateFiles: i,
                vaultFolders: a,
                templateWarning: o
            } = hx(this.app);
            t.createEl("h3", {
                text: r
            }), n ? t.createEl("p", {
                text: R("These settings will take precedence over the default Kanban board settings.")
            }) : t.createEl("p", {
                text: R("Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.")
            }), new rt.Setting(t).setName(R("Display card checkbox")).setDesc(R("When toggled, a checkbox will be displayed with each card")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("show-checkboxes", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "show-checkboxes": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("show-checkboxes", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["show-checkboxes"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("New line trigger")).setDesc(R("Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.")).addDropdown(s => {
                s.addOption("shift-enter", R("Shift + Enter")), s.addOption("enter", R("Enter"));
                let [u, l] = this.getSetting("new-line-trigger", n);
                s.setValue(u || l || "shift-enter"), s.onChange(c => {
                    this.applySettingsUpdate({
                        "new-line-trigger": {
                            $set: c
                        }
                    })
                })
            }), new rt.Setting(t).setName(R("Prepend / append new cards")).setDesc(R("This setting controls whether new cards are added to the beginning or end of the list.")).addDropdown(s => {
                s.addOption("prepend", R("Prepend")), s.addOption("prepend-compact", R("Prepend (compact)")), s.addOption("append", R("Append"));
                let [u, l] = this.getSetting("new-card-insertion-method", n);
                s.setValue(u || l || "append"), s.onChange(c => {
                    this.applySettingsUpdate({
                        "new-card-insertion-method": {
                            $set: c
                        }
                    })
                })
            }), new rt.Setting(t).setName(R("Hide card counts in list titles")).setDesc(R("When toggled, card counts are hidden from the list title")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("hide-card-count", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "hide-card-count": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("hide-card-count", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["hide-card-count"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("List width")).setDesc(R("Enter a number to set the list width in pixels.")).addText(s => {
                let [u, l] = this.getSetting("lane-width", n);
                s.inputEl.setAttr("type", "number"), s.inputEl.placeholder = `${l||"272"} (default)`, s.inputEl.value = u ? u.toString() : "", s.onChange(c => {
                    if (c && Ux.test(c)) {
                        s.inputEl.removeClass("error"), this.applySettingsUpdate({
                            "lane-width": {
                                $set: parseInt(c)
                            }
                        });
                        return
                    }
                    c && s.inputEl.addClass("error"), this.applySettingsUpdate({
                        $unset: ["lane-width"]
                    })
                })
            }), new rt.Setting(t).setName(R("Expand lists to full width in list view")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("full-list-lane-width", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "full-list-lane-width": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("full-list-lane-width", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["full-list-lane-width"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Maximum number of archived cards")).setDesc(R("Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.")).addText(s => {
                let [u, l] = this.getSetting("max-archive-size", n);
                s.inputEl.setAttr("type", "number"), s.inputEl.placeholder = `${l||"-1"} (default)`, s.inputEl.value = u ? u.toString() : "", s.onChange(c => {
                    if (c && Ux.test(c)) {
                        s.inputEl.removeClass("error"), this.applySettingsUpdate({
                            "max-archive-size": {
                                $set: parseInt(c)
                            }
                        });
                        return
                    }
                    c && s.inputEl.addClass("error"), this.applySettingsUpdate({
                        $unset: ["max-archive-size"]
                    })
                })
            }), new rt.Setting(t).setName(R("Note template")).setDesc(R("This template will be used when creating new notes from Kanban cards.")).then(Mg({
                choices: i,
                key: "new-note-template",
                warningText: o,
                local: n,
                placeHolderStr: R("No template"),
                manager: this
            })), new rt.Setting(t).setName(R("Note folder")).setDesc(R("Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.")).then(Mg({
                choices: a,
                key: "new-note-folder",
                local: n,
                placeHolderStr: R("Default folder"),
                manager: this
            })), t.createEl("h4", {
                text: R("Tags")
            }), new rt.Setting(t).setName(R("Move tags to card footer")).setDesc(R("When toggled, tags will be displayed in the card's footer instead of the card's body.")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("move-tags", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "move-tags": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("move-tags", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["move-tags"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Tag click action")).setDesc(R("This setting controls whether clicking the tags displayed below the card title opens the Obsidian search or the Kanban board search.")).addDropdown(s => {
                s.addOption("kanban", R("Search Kanban Board")), s.addOption("obsidian", R("Search Obsidian Vault"));
                let [u, l] = this.getSetting("tag-action", n);
                s.setValue(u || l || "obsidian"), s.onChange(c => {
                    this.applySettingsUpdate({
                        "tag-action": {
                            $set: c
                        }
                    })
                })
            }), new rt.Setting(t).then(s => {
                let [u, l] = this.getSetting("tag-sort", n), c = (u || l || []).map(d => ({
                    ...Hc,
                    id: et(),
                    data: d
                }));
                Vx(s.settingEl, t, c, d => this.applySettingsUpdate({
                    "tag-sort": {
                        $set: d.map(m => m.data)
                    }
                })), this.cleanupFns.push(() => {
                    s.settingEl && $x(s.settingEl)
                })
            }), new rt.Setting(t).then(s => {
                let [u] = this.getSetting("tag-colors", n), l = (u || []).map(c => ({
                    ...Bc,
                    id: et(),
                    data: c
                }));
                Ax(s.settingEl, l, c => this.applySettingsUpdate({
                    "tag-colors": {
                        $set: c.map(d => d.data)
                    }
                })), this.cleanupFns.push(() => {
                    s.settingEl && Ox(s.settingEl)
                })
            }), t.createEl("h4", {
                text: R("Date & Time")
            }), new rt.Setting(t).setName(R("Move dates to card footer")).setDesc(R("When toggled, dates will be displayed in the card's footer instead of the card's body.")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("move-dates", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "move-dates": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("move-dates", n);
                        u.setValue(c != null ? c : !0), this.applySettingsUpdate({
                            $unset: ["move-dates"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Date trigger")).setDesc(R("When this is typed, it will trigger the date selector")).addText(s => {
                let [u, l] = this.getSetting("date-trigger", n);
                (u || l) && s.setValue(u || l), s.setPlaceholder(l || Ad), s.onChange(c => {
                    c ? this.applySettingsUpdate({
                        "date-trigger": {
                            $set: c
                        }
                    }) : this.applySettingsUpdate({
                        $unset: ["date-trigger"]
                    })
                })
            }), new rt.Setting(t).setName(R("Time trigger")).setDesc(R("When this is typed, it will trigger the time selector")).addText(s => {
                let [u, l] = this.getSetting("time-trigger", n);
                (u || l) && s.setValue(u || l), s.setPlaceholder(l || Od), s.onChange(c => {
                    c ? this.applySettingsUpdate({
                        "time-trigger": {
                            $set: c
                        }
                    }) : this.applySettingsUpdate({
                        $unset: ["time-trigger"]
                    })
                })
            }), new rt.Setting(t).setName(R("Date format")).then(s => {
                s.addMomentFormat(u => {
                    s.descEl.appendChild(createFragment(m => {
                        m.appendText(R("This format will be used when saving dates in markdown.")), m.createEl("br"), m.appendText(R("For more syntax, refer to") + " "), m.createEl("a", {
                            text: R("format reference"),
                            href: "https://momentjs.com/docs/#/displaying/format/"
                        }, h => {
                            h.setAttr("target", "_blank")
                        }), m.createEl("br"), m.appendText(R("Your current syntax looks like this") + ": "), u.setSampleEl(m.createEl("b", {
                            cls: "u-pop"
                        })), m.createEl("br")
                    }));
                    let [l, c] = this.getSetting("date-format", n), d = ja(this.app);
                    u.setPlaceholder(d), u.setDefaultFormat(d), (l || c) && u.setValue(l || c), u.onChange(m => {
                        m ? this.applySettingsUpdate({
                            "date-format": {
                                $set: m
                            }
                        }) : this.applySettingsUpdate({
                            $unset: ["date-format"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Time format")).then(s => {
                s.addMomentFormat(u => {
                    s.descEl.appendChild(createFragment(m => {
                        m.appendText(R("For more syntax, refer to") + " "), m.createEl("a", {
                            text: R("format reference"),
                            href: "https://momentjs.com/docs/#/displaying/format/"
                        }, h => {
                            h.setAttr("target", "_blank")
                        }), m.createEl("br"), m.appendText(R("Your current syntax looks like this") + ": "), u.setSampleEl(m.createEl("b", {
                            cls: "u-pop"
                        })), m.createEl("br")
                    }));
                    let [l, c] = this.getSetting("time-format", n), d = Ho(this.app);
                    u.setPlaceholder(d), u.setDefaultFormat(d), (l || c) && u.setValue(l || c), u.onChange(m => {
                        m ? this.applySettingsUpdate({
                            "time-format": {
                                $set: m
                            }
                        }) : this.applySettingsUpdate({
                            $unset: ["time-format"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Date display format")).then(s => {
                s.addMomentFormat(u => {
                    s.descEl.appendChild(createFragment(m => {
                        m.appendText(R("This format will be used when displaying dates in Kanban cards.")), m.createEl("br"), m.appendText(R("For more syntax, refer to") + " "), m.createEl("a", {
                            text: R("format reference"),
                            href: "https://momentjs.com/docs/#/displaying/format/"
                        }, h => {
                            h.setAttr("target", "_blank")
                        }), m.createEl("br"), m.appendText(R("Your current syntax looks like this") + ": "), u.setSampleEl(m.createEl("b", {
                            cls: "u-pop"
                        })), m.createEl("br")
                    }));
                    let [l, c] = this.getSetting("date-display-format", n), d = ja(this.app);
                    u.setPlaceholder(d), u.setDefaultFormat(d), (l || c) && u.setValue(l || c), u.onChange(m => {
                        m ? this.applySettingsUpdate({
                            "date-display-format": {
                                $set: m
                            }
                        }) : this.applySettingsUpdate({
                            $unset: ["date-display-format"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Show relative date")).setDesc(R("When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'. Relative dates will not be shown for dates from the Tasks and Dataview plugins.")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("show-relative-date", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "show-relative-date": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("show-relative-date", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["show-relative-date"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Link dates to daily notes")).setDesc(R("When toggled, dates will link to daily notes. Eg. [[2021-04-26]]")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("link-date-to-daily-note", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "link-date-to-daily-note": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("link-date-to-daily-note", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["link-date-to-daily-note"]
                        })
                    })
                })
            }), new rt.Setting(t).then(s => {
                let [u] = this.getSetting("date-colors", n), l = (u || []).map(c => ({
                    ...Vc,
                    id: et(),
                    data: c
                }));
                Lx(s.settingEl, l, c => this.applySettingsUpdate({
                    "date-colors": {
                        $set: c.map(d => d.data)
                    }
                }), () => {
                    let [c, d] = this.getSetting("date-display-format", n), m = ja(this.app);
                    return c || d || m
                }, () => {
                    let [c, d] = this.getSetting("time-format", n), m = Ho(this.app);
                    return c || d || m
                }), this.cleanupFns.push(() => {
                    s.settingEl && Px(s.settingEl)
                })
            }), new rt.Setting(t).setName(R("Add date and time to archived cards")).setDesc(R("When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("archive-with-date", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "archive-with-date": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("archive-with-date", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["archive-with-date"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Add archive date/time after card title")).setDesc(R("When toggled, the archived date/time will be added after the card title, e.g.- [ ] My card title 2021-05-14 10:00am. By default, it is inserted before the title.")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("append-archive-date", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "append-archive-date": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("append-archive-date", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["append-archive-date"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Archive date/time separator")).setDesc(R("This will be used to separate the archived date/time from the title")).addText(s => {
                let [u, l] = this.getSetting("archive-date-separator", n);
                s.inputEl.placeholder = l ? `${l} (default)` : "", s.inputEl.value = u || "", s.onChange(c => {
                    if (c) {
                        this.applySettingsUpdate({
                            "archive-date-separator": {
                                $set: c
                            }
                        });
                        return
                    }
                    this.applySettingsUpdate({
                        $unset: ["archive-date-separator"]
                    })
                })
            }), new rt.Setting(t).setName(R("Archive date/time format")).then(s => {
                s.addMomentFormat(u => {
                    s.descEl.appendChild(createFragment(I => {
                        I.appendText(R("For more syntax, refer to") + " "), I.createEl("a", {
                            text: R("format reference"),
                            href: "https://momentjs.com/docs/#/displaying/format/"
                        }, C => {
                            C.setAttr("target", "_blank")
                        }), I.createEl("br"), I.appendText(R("Your current syntax looks like this") + ": "), u.setSampleEl(I.createEl("b", {
                            cls: "u-pop"
                        })), I.createEl("br")
                    }));
                    let [l, c] = this.getSetting("archive-date-format", n), [d, m] = this.getSetting("date-format", n), h = d || m || ja(this.app), [g, y] = this.getSetting("time-format", n), v = g || y || Ho(this.app), D = `${h} ${v}`;
                    u.setPlaceholder(D), u.setDefaultFormat(D), (l || c) && u.setValue(l || c), u.onChange(I => {
                        I ? this.applySettingsUpdate({
                            "archive-date-format": {
                                $set: I
                            }
                        }) : this.applySettingsUpdate({
                            $unset: ["archive-date-format"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Calendar: first day of week")).setDesc(R("Override which day is used as the start of the week")).addDropdown(s => {
                s.addOption("", R("default")), s.addOption("0", R("Sunday")), s.addOption("1", R("Monday")), s.addOption("2", R("Tuesday")), s.addOption("3", R("Wednesday")), s.addOption("4", R("Thursday")), s.addOption("5", R("Friday")), s.addOption("6", R("Saturday"));
                let [u, l] = this.getSetting("date-picker-week-start", n);
                s.setValue((u == null ? void 0 : u.toString()) || (l == null ? void 0 : l.toString()) || ""), s.onChange(c => {
                    c ? this.applySettingsUpdate({
                        "date-picker-week-start": {
                            $set: Number(c)
                        }
                    }) : this.applySettingsUpdate({
                        $unset: ["date-picker-week-start"]
                    })
                })
            }), t.createEl("br"), t.createEl("h4", {
                text: R("Inline Metadata")
            }), new rt.Setting(t).setName(R("Inline metadata position")).setDesc(R("Controls where the inline metadata (from the Dataview plugin) will be displayed.")).then(s => {
                let u;
                s.addDropdown(l => {
                    u = l, l.addOption("body", R("Card body")), l.addOption("footer", R("Card footer")), l.addOption("metadata-table", R("Merge with linked page metadata"));
                    let [c, d] = this.getSetting("inline-metadata-position", n);
                    l.setValue((c == null ? void 0 : c.toString()) || (d == null ? void 0 : d.toString()) || Ul), l.onChange(m => {
                        m ? this.applySettingsUpdate({
                            "inline-metadata-position": {
                                $set: m
                            }
                        }) : this.applySettingsUpdate({
                            $unset: ["inline-metadata-position"]
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("inline-metadata-position", n);
                        u.setValue(c || Ul), this.applySettingsUpdate({
                            $unset: ["inline-metadata-position"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Move task data to card footer")).setDesc(R("When toggled, task data (from the Tasks plugin) will be displayed in the card's footer instead of the card's body.")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("move-task-metadata", n);
                    c !== void 0 ? l.setValue(c) : d !== void 0 && l.setValue(d), l.onChange(m => {
                        this.applySettingsUpdate({
                            "move-task-metadata": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("move-task-metadata", n);
                        u.setValue(c != null ? c : !0), this.applySettingsUpdate({
                            $unset: ["move-task-metadata"]
                        })
                    })
                })
            }), t.createEl("br"), t.createEl("h4", {
                text: R("Linked Page Metadata")
            }), t.createEl("p", {
                cls: $("metadata-setting-desc"),
                text: R("Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.")
            }), new rt.Setting(t).then(s => {
                s.settingEl.addClass($("draggable-setting-container"));
                let [u] = this.getSetting("metadata-keys", n), l = (u || []).map(c => ({
                    ...Rc,
                    id: et(),
                    data: c,
                    win: Dn(t)
                }));
                Rx(s.settingEl, t, l, c => this.applySettingsUpdate({
                    "metadata-keys": {
                        $set: c.map(d => d.data)
                    }
                })), this.cleanupFns.push(() => {
                    s.settingEl && Hx(s.settingEl)
                })
            }), t.createEl("h4", {
                text: R("Board Header Buttons")
            }), new rt.Setting(t).setName(R("Add a list")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("show-add-list", n);
                    c != null ? l.setValue(c) : d != null ? l.setValue(d) : l.setValue(!0), l.onChange(m => {
                        this.applySettingsUpdate({
                            "show-add-list": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("show-add-list", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["show-add-list"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Archive completed cards")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("show-archive-all", n);
                    c != null ? l.setValue(c) : d != null ? l.setValue(d) : l.setValue(!0), l.onChange(m => {
                        this.applySettingsUpdate({
                            "show-archive-all": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("show-archive-all", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["show-archive-all"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Open as markdown")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("show-view-as-markdown", n);
                    c != null ? l.setValue(c) : d != null ? l.setValue(d) : l.setValue(!0), l.onChange(m => {
                        this.applySettingsUpdate({
                            "show-view-as-markdown": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("show-view-as-markdown", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["show-view-as-markdown"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Open board settings")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("show-board-settings", n);
                    c != null ? l.setValue(c) : d != null ? l.setValue(d) : l.setValue(!0), l.onChange(m => {
                        this.applySettingsUpdate({
                            "show-board-settings": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("show-board-settings", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["show-board-settings"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Search...")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("show-search", n);
                    c != null ? l.setValue(c) : d != null ? l.setValue(d) : l.setValue(!0), l.onChange(m => {
                        this.applySettingsUpdate({
                            "show-search": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("show-search", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["show-search"]
                        })
                    })
                })
            }), new rt.Setting(t).setName(R("Board view")).then(s => {
                let u;
                s.addToggle(l => {
                    u = l;
                    let [c, d] = this.getSetting("show-set-view", n);
                    c != null ? l.setValue(c) : d != null ? l.setValue(d) : l.setValue(!0), l.onChange(m => {
                        this.applySettingsUpdate({
                            "show-set-view": {
                                $set: m
                            }
                        })
                    })
                }).addExtraButton(l => {
                    l.setIcon("lucide-rotate-ccw").setTooltip(R("Reset to default")).onClick(() => {
                        let [, c] = this.getSetting("show-set-view", n);
                        u.setValue(!!c), this.applySettingsUpdate({
                            $unset: ["show-set-view"]
                        })
                    })
                })
            })
        }
        cleanUp() {
            this.win = null, this.cleanupFns.forEach(t => t()), this.cleanupFns = []
        }
    },
    $d = class extends rt.Modal {
        constructor(t, r, n) {
            super(t.app), this.view = t, this.settingsManager = new Vd(t.plugin, r, n)
        }
        onOpen() {
            let {
                contentEl: t,
                modalEl: r
            } = this;
            r.addClass($("board-settings-modal")), this.settingsManager.constructUI(t, this.view.file.basename, !0)
        }
        onClose() {
            let {
                contentEl: t
            } = this;
            this.settingsManager.cleanUp(), t.empty()
        }
    },
    Ud = class extends rt.PluginSettingTab {
        constructor(t, r) {
            super(t.app, t), this.plugin = t, this.settingsManager = new Vd(t, r, t.settings)
        }
        display() {
            let {
                containerEl: t
            } = this;
            t.empty(), t.addClass($("board-settings-modal")), this.settingsManager.constructUI(t, R("Kanban Plugin"), !1)
        }
    };
