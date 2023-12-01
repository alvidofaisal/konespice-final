var AJX;
/*!
 * jQuery htmlDoc "fixer" - v0.2pre - 8/8/2011
 * http://benalman.com/projects/jquery-misc-plugins/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function($) {
    var t = /<(\/?)(html|head|body)(\s+[^>]*)?>/gi
      , e = "hd" + +new Date;
    $.htmlDoc = function(i) {
        var n = $([]), s, o;
        return s = i.replace(t, (function(t, i, s, o) {
            var r = n.length
              , a = {};
            return i || (n = n.add("<" + s + "/>"),
            o && $.each($("<div" + o + "/>")[0].attributes, (function(t, e) {
                a[e.name] = e.value
            }
            )),
            n.eq(r).attr(a)),
            "<" + i + "div" + (i ? "" : ' id="' + e + r + '"') + ">"
        }
        )),
        n.length ? (o = $("<div/>").html(s),
        $.each(n, (function(t, i) {
            var s = o.find("#" + e + t).before(n[t]);
            n.eq(t).html(s.contents()),
            s.remove()
        }
        )),
        o.children()) : $(i)
    }
}(jQuery),
"object" != typeof JSON && (JSON = {}),
function() {
    "use strict";
    function f(t) {
        return t < 10 ? "0" + t : t
    }
    function quote(t) {
        return escapable.lastIndex = 0,
        escapable.test(t) ? '"' + t.replace(escapable, (function(t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }
        )) + '"' : '"' + t + '"'
    }
    function str(t, e) {
        var i, n, s, o, r = gap, a, l = e[t];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)),
        "function" == typeof rep && (l = rep.call(e, t, l)),
        typeof l) {
        case "string":
            return quote(l);
        case "number":
            return isFinite(l) ? String(l) : "null";
        case "boolean":
        case "null":
            return String(l);
        case "object":
            if (!l)
                return "null";
            if (gap += indent,
            a = [],
            "[object Array]" === Object.prototype.toString.apply(l)) {
                for (o = l.length,
                i = 0; i < o; i += 1)
                    a[i] = str(i, l) || "null";
                return s = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + r + "]" : "[" + a.join(",") + "]",
                gap = r,
                s
            }
            if (rep && "object" == typeof rep)
                for (o = rep.length,
                i = 0; i < o; i += 1)
                    "string" == typeof rep[i] && ((s = str(n = rep[i], l)) && a.push(quote(n) + (gap ? ": " : ":") + s));
            else
                for (n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && ((s = str(n, l)) && a.push(quote(n) + (gap ? ": " : ":") + s));
            return s = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + r + "}" : "{" + a.join(",") + "}",
            gap = r,
            s
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
        return this.valueOf()
    }
    );
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) {
        var n;
        if (gap = "",
        indent = "",
        "number" == typeof i)
            for (n = 0; n < i; n += 1)
                indent += " ";
        else
            "string" == typeof i && (indent = i);
        if (rep = e,
        !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length)
            return str("", {
                "": t
            });
        throw new Error("JSON.stringify")
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(t, e) {
            var i, n, s = t[e];
            if (s && "object" == typeof s)
                for (i in s)
                    Object.prototype.hasOwnProperty.call(s, i) && (void 0 !== (n = walk(s, i)) ? s[i] = n : delete s[i]);
            return reviver.call(t, e, s)
        }
        var j;
        if (text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, (function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }
        ))),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
function(t, e) {
    "use strict";
    var i = t.History = t.History || {}
      , n = t.jQuery;
    if (void 0 !== i.Adapter)
        throw new Error("History.js Adapter has already been loaded...");
    i.Adapter = {
        bind: function(t, e, i) {
            n(t).bind(e, i)
        },
        trigger: function(t, e, i) {
            n(t).trigger(e, i)
        },
        extractEventData: function(t, i, n) {
            var s;
            return i && i.originalEvent && i.originalEvent[t] || n && n[t] || e
        },
        onDomLoad: function(t) {
            n(t)
        }
    },
    void 0 !== i.init && i.init()
}(window),
function(t, e) {
    "use strict";
    var i = t.document
      , n = t.setTimeout || n
      , s = t.clearTimeout || s
      , o = t.setInterval || o
      , r = t.History = t.History || {};
    if (void 0 !== r.initHtml4)
        throw new Error("History.js HTML4 Support has already been loaded...");
    r.initHtml4 = function() {
        if (void 0 !== r.initHtml4.initialized)
            return !1;
        r.initHtml4.initialized = !0,
        r.enabled = !0,
        r.savedHashes = [],
        r.isLastHash = function(t) {
            var e, i;
            return i = t === r.getHashByIndex()
        }
        ,
        r.isHashEqual = function(t, e) {
            return (t = encodeURIComponent(t).replace(/%25/g, "%")) === (e = encodeURIComponent(e).replace(/%25/g, "%"))
        }
        ,
        r.saveHash = function(t) {
            return !r.isLastHash(t) && (r.savedHashes.push(t),
            !0)
        }
        ,
        r.getHashByIndex = function(t) {
            var e = null;
            return e = void 0 === t ? r.savedHashes[r.savedHashes.length - 1] : t < 0 ? r.savedHashes[r.savedHashes.length + t] : r.savedHashes[t]
        }
        ,
        r.discardedHashes = {},
        r.discardedStates = {},
        r.discardState = function(t, e, i) {
            var n = r.getHashByState(t), s;
            return s = {
                discardedState: t,
                backState: i,
                forwardState: e
            },
            r.discardedStates[n] = s,
            !0
        }
        ,
        r.discardHash = function(t, e, i) {
            var n = {
                discardedHash: t,
                backState: i,
                forwardState: e
            };
            return r.discardedHashes[t] = n,
            !0
        }
        ,
        r.discardedState = function(t) {
            var e = r.getHashByState(t), i;
            return i = r.discardedStates[e] || !1
        }
        ,
        r.discardedHash = function(t) {
            var e;
            return r.discardedHashes[t] || !1
        }
        ,
        r.recycleState = function(t) {
            var e = r.getHashByState(t);
            return r.discardedState(t) && delete r.discardedStates[e],
            !0
        }
        ,
        r.emulated.hashChange && (r.hashChangeInit = function() {
            r.checkerFunction = null;
            var e = "", n, s, a, l, c = Boolean(r.getHash());
            return r.isInternetExplorer() ? (n = "historyjs-iframe",
            (s = i.createElement("iframe")).setAttribute("id", n),
            s.setAttribute("src", "#"),
            s.style.display = "none",
            i.body.appendChild(s),
            s.contentWindow.document.open(),
            s.contentWindow.document.close(),
            a = "",
            l = !1,
            r.checkerFunction = function() {
                if (l)
                    return !1;
                l = !0;
                var i = r.getHash()
                  , n = r.getHash(s.contentWindow.document);
                return i !== e ? (e = i,
                n !== i && (a = n = i,
                s.contentWindow.document.open(),
                s.contentWindow.document.close(),
                s.contentWindow.document.location.hash = r.escapeHash(i)),
                r.Adapter.trigger(t, "hashchange")) : n !== a && (a = n,
                c && "" === n ? r.back() : r.setHash(n, !1)),
                l = !1,
                !0
            }
            ) : r.checkerFunction = function() {
                var i = r.getHash() || "";
                return i !== e && (e = i,
                r.Adapter.trigger(t, "hashchange")),
                !0
            }
            ,
            r.intervalList.push(o(r.checkerFunction, r.options.hashChangeInterval)),
            !0
        }
        ,
        r.Adapter.onDomLoad(r.hashChangeInit)),
        r.emulated.pushState && (r.onHashChange = function(e) {
            var i = e && e.newURL || r.getLocationHref(), n = r.getHashByUrl(i), s = null, o = null, a = null, l;
            return r.isLastHash(n) ? (r.busy(!1),
            !1) : (r.doubleCheckComplete(),
            r.saveHash(n),
            n && r.isTraditionalAnchor(n) ? (r.Adapter.trigger(t, "anchorchange"),
            r.busy(!1),
            !1) : (s = r.extractState(r.getFullUrl(n || r.getLocationHref()), !0),
            r.isLastSavedState(s) ? (r.busy(!1),
            !1) : (o = r.getHashByState(s),
            (l = r.discardedState(s)) ? (r.getHashByIndex(-2) === r.getHashByState(l.forwardState) ? r.back(!1) : r.forward(!1),
            !1) : (r.pushState(s.data, s.title, encodeURI(s.url), !1),
            !0))))
        }
        ,
        r.Adapter.bind(t, "hashchange", r.onHashChange),
        r.pushState = function(e, i, n, s) {
            if (n = encodeURI(n).replace(/%25/g, "%"),
            r.getHashByUrl(n))
                throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (!1 !== s && r.busy())
                return r.pushQueue({
                    scope: r,
                    callback: r.pushState,
                    args: arguments,
                    queue: s
                }),
                !1;
            r.busy(!0);
            var o = r.createStateObject(e, i, n)
              , a = r.getHashByState(o)
              , l = r.getState(!1)
              , c = r.getHashByState(l)
              , h = r.getHash()
              , u = r.expectedStateId == o.id;
            return r.storeState(o),
            r.expectedStateId = o.id,
            r.recycleState(o),
            r.setTitle(o),
            a === c ? (r.busy(!1),
            !1) : (r.saveState(o),
            u || r.Adapter.trigger(t, "statechange"),
            !r.isHashEqual(a, h) && !r.isHashEqual(a, r.getShortUrl(r.getLocationHref())) && r.setHash(a, !1),
            r.busy(!1),
            !0)
        }
        ,
        r.replaceState = function(e, i, n, s) {
            if (n = encodeURI(n).replace(/%25/g, "%"),
            r.getHashByUrl(n))
                throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (!1 !== s && r.busy())
                return r.pushQueue({
                    scope: r,
                    callback: r.replaceState,
                    args: arguments,
                    queue: s
                }),
                !1;
            r.busy(!0);
            var o = r.createStateObject(e, i, n)
              , a = r.getHashByState(o)
              , l = r.getState(!1)
              , c = r.getHashByState(l)
              , h = r.getStateByIndex(-2);
            return r.discardState(l, o, h),
            a === c ? (r.storeState(o),
            r.expectedStateId = o.id,
            r.recycleState(o),
            r.setTitle(o),
            r.saveState(o),
            r.Adapter.trigger(t, "statechange"),
            r.busy(!1)) : r.pushState(o.data, o.title, o.url, !1),
            !0
        }
        ),
        r.emulated.pushState && r.getHash() && !r.emulated.hashChange && r.Adapter.onDomLoad((function() {
            r.Adapter.trigger(t, "hashchange")
        }
        ))
    }
    ,
    void 0 !== r.init && r.init()
}(window),
function(t, e) {
    "use strict";
    var i = t.console || e
      , n = t.document
      , s = t.navigator
      , o = !1
      , r = t.setTimeout
      , a = t.clearTimeout
      , l = t.setInterval
      , c = t.clearInterval
      , h = t.JSON
      , u = t.alert
      , d = t.History = t.History || {}
      , p = t.history;
    try {
        (o = t.sessionStorage).setItem("TEST", "1"),
        o.removeItem("TEST")
    } catch (t) {
        o = !1
    }
    if (h.stringify = h.stringify || h.encode,
    h.parse = h.parse || h.decode,
    void 0 !== d.init)
        throw new Error("History.js Core has already been loaded...");
    d.init = function(t) {
        return void 0 !== d.Adapter && (void 0 !== d.initCore && d.initCore(),
        void 0 !== d.initHtml4 && d.initHtml4(),
        !0)
    }
    ,
    d.initCore = function(f) {
        if (void 0 !== d.initCore.initialized)
            return !1;
        if (d.initCore.initialized = !0,
        d.options = d.options || {},
        d.options.hashChangeInterval = d.options.hashChangeInterval || 100,
        d.options.safariPollInterval = d.options.safariPollInterval || 500,
        d.options.doubleCheckInterval = d.options.doubleCheckInterval || 500,
        d.options.disableSuid = d.options.disableSuid || !1,
        d.options.storeInterval = d.options.storeInterval || 1e3,
        d.options.busyDelay = d.options.busyDelay || 250,
        d.options.debug = d.options.debug || !1,
        d.options.initialTitle = d.options.initialTitle || n.title,
        d.options.html4Mode = d.options.html4Mode || !1,
        d.options.delayInit = d.options.delayInit || !1,
        d.intervalList = [],
        d.clearAllIntervals = function() {
            var t, e = d.intervalList;
            if (null != e) {
                for (t = 0; t < e.length; t++)
                    c(e[t]);
                d.intervalList = null
            }
        }
        ,
        d.debug = function() {
            d.options.debug && d.log.apply(d, arguments)
        }
        ,
        d.log = function(t) {
            var e = void 0 !== i && void 0 !== i.log && void 0 !== i.log.apply, s = n.getElementById("log"), o, r, a, l, c;
            for (e ? (o = (l = Array.prototype.slice.call(arguments)).shift(),
            void 0 !== i.debug ? i.debug.apply(i, [o, l]) : i.log.apply(i, [o, l])) : o = "\n" + t + "\n",
            r = 1,
            a = arguments.length; r < a; ++r) {
                if ("object" == typeof (c = arguments[r]) && void 0 !== h)
                    try {
                        c = h.stringify(c)
                    } catch (t) {}
                o += "\n" + c + "\n"
            }
            return s ? (s.value += o + "\n-----\n",
            s.scrollTop = s.scrollHeight - s.clientHeight) : e || u(o),
            !0
        }
        ,
        d.getInternetExplorerMajorVersion = function() {
            var t = d.getInternetExplorerMajorVersion.cached = void 0 !== d.getInternetExplorerMajorVersion.cached ? d.getInternetExplorerMajorVersion.cached : function() {
                for (var t = 3, e = n.createElement("div"), i = e.getElementsByTagName("i"); (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && i[0]; )
                    ;
                return t > 4 && t
            }();
            return t
        }
        ,
        d.isInternetExplorer = function() {
            var t;
            return d.isInternetExplorer.cached = void 0 !== d.isInternetExplorer.cached ? d.isInternetExplorer.cached : Boolean(d.getInternetExplorerMajorVersion())
        }
        ,
        d.options.html4Mode ? d.emulated = {
            pushState: !0,
            hashChange: !0
        } : d.emulated = {
            pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(s.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(s.userAgent)),
            hashChange: Boolean(!("onhashchange"in t || "onhashchange"in n) || d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 8)
        },
        d.enabled = !d.emulated.pushState,
        d.bugs = {
            setHash: Boolean(!d.emulated.pushState && "Apple Computer, Inc." === s.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),
            safariPoll: Boolean(!d.emulated.pushState && "Apple Computer, Inc." === s.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),
            ieDoubleCheck: Boolean(d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 7)
        },
        d.isEmptyObject = function(t) {
            for (var e in t)
                if (t.hasOwnProperty(e))
                    return !1;
            return !0
        }
        ,
        d.cloneObject = function(t) {
            var e, i;
            return t ? (e = h.stringify(t),
            i = h.parse(e)) : i = {},
            i
        }
        ,
        d.getRootUrl = function() {
            var t = n.location.protocol + "//" + (n.location.hostname || n.location.host);
            return n.location.port && (t += ":" + n.location.port),
            t += "/"
        }
        ,
        d.getBaseHref = function() {
            var t = n.getElementsByTagName("base")
              , e = null
              , i = "";
            return 1 === t.length && (i = (e = t[0]).href.replace(/[^\/]+$/, "")),
            (i = i.replace(/\/+$/, "")) && (i += "/"),
            i
        }
        ,
        d.getBaseUrl = function() {
            var t;
            return d.getBaseHref() || d.getBasePageUrl() || d.getRootUrl()
        }
        ,
        d.getPageUrl = function() {
            var t, e, i;
            return i = ((d.getState(!1, !1) || {}).url || d.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, (function(t, e, i) {
                return /\./.test(t) ? t : t + "/"
            }
            )),
            i
        }
        ,
        d.getBasePageUrl = function() {
            var t;
            return d.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, (function(t, e, i) {
                return /[^\/]$/.test(t) ? "" : t
            }
            )).replace(/\/+$/, "") + "/"
        }
        ,
        d.getFullUrl = function(t, e) {
            var i = t
              , n = t.substring(0, 1);
            return e = void 0 === e || e,
            /[a-z]+\:\/\//.test(t) || (i = "/" === n ? d.getRootUrl() + t.replace(/^\/+/, "") : "#" === n ? d.getPageUrl().replace(/#.*/, "") + t : "?" === n ? d.getPageUrl().replace(/[\?#].*/, "") + t : e ? d.getBaseUrl() + t.replace(/^(\.\/)+/, "") : d.getBasePageUrl() + t.replace(/^(\.\/)+/, "")),
            i.replace(/\#$/, "")
        }
        ,
        d.getShortUrl = function(t) {
            var e = t
              , i = d.getBaseUrl()
              , n = d.getRootUrl();
            return d.emulated.pushState && (e = e.replace(i, "")),
            e = e.replace(n, "/"),
            d.isTraditionalAnchor(e) && (e = "./" + e),
            e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
        }
        ,
        d.getLocationHref = function(t) {
            return (t = t || n).URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash || -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href
        }
        ,
        d.store = {},
        d.idToState = d.idToState || {},
        d.stateToId = d.stateToId || {},
        d.urlToId = d.urlToId || {},
        d.storedStates = d.storedStates || [],
        d.savedStates = d.savedStates || [],
        d.normalizeStore = function() {
            d.store.idToState = d.store.idToState || {},
            d.store.urlToId = d.store.urlToId || {},
            d.store.stateToId = d.store.stateToId || {}
        }
        ,
        d.getState = function(t, e) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0);
            var i = d.getLastSavedState();
            return !i && e && (i = d.createStateObject()),
            t && ((i = d.cloneObject(i)).url = i.cleanUrl || i.url),
            i
        }
        ,
        d.getIdByState = function(t) {
            var e = d.extractId(t.url), i;
            if (!e)
                if (i = d.getStateString(t),
                void 0 !== d.stateToId[i])
                    e = d.stateToId[i];
                else if (void 0 !== d.store.stateToId[i])
                    e = d.store.stateToId[i];
                else {
                    for (; e = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""),
                    void 0 !== d.idToState[e] || void 0 !== d.store.idToState[e]; )
                        ;
                    d.stateToId[i] = e,
                    d.idToState[e] = t
                }
            return e
        }
        ,
        d.normalizeState = function(t) {
            var e, i;
            return t && "object" == typeof t || (t = {}),
            void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}),
            (e = {}).normalized = !0,
            e.title = t.title || "",
            e.url = d.getFullUrl(t.url ? t.url : d.getLocationHref()),
            e.hash = d.getShortUrl(e.url),
            e.data = d.cloneObject(t.data),
            e.id = d.getIdByState(e),
            e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""),
            e.url = e.cleanUrl,
            i = !d.isEmptyObject(e.data),
            (e.title || i) && !0 !== d.options.disableSuid && (e.hash = d.getShortUrl(e.url).replace(/\??\&_suid.*/, ""),
            /\?/.test(e.hash) || (e.hash += "?"),
            e.hash += "&_suid=" + e.id),
            e.hashedUrl = d.getFullUrl(e.hash),
            (d.emulated.pushState || d.bugs.safariPoll) && d.hasUrlDuplicate(e) && (e.url = e.hashedUrl),
            e)
        }
        ,
        d.createStateObject = function(t, e, i) {
            var n = {
                data: t,
                title: e,
                url: i
            };
            return n = d.normalizeState(n)
        }
        ,
        d.getStateById = function(t) {
            var i;
            return t = String(t),
            d.idToState[t] || d.store.idToState[t] || e
        }
        ,
        d.getStateString = function(t) {
            var e, i, n;
            return i = {
                data: (e = d.normalizeState(t)).data,
                title: t.title,
                url: t.url
            },
            n = h.stringify(i)
        }
        ,
        d.getStateId = function(t) {
            var e, i;
            return i = (e = d.normalizeState(t)).id
        }
        ,
        d.getHashByState = function(t) {
            var e, i;
            return i = (e = d.normalizeState(t)).hash
        }
        ,
        d.extractId = function(t) {
            var e, i, n, s;
            return s = -1 != t.indexOf("#") ? t.split("#")[0] : t,
            n = (i = /(.*)\&_suid=([0-9]+)$/.exec(s)) && i[1] || t,
            (e = i ? String(i[2] || "") : "") || !1
        }
        ,
        d.isTraditionalAnchor = function(t) {
            var e;
            return !/[\/\?\.]/.test(t)
        }
        ,
        d.extractState = function(t, e) {
            var i = null, n, s;
            return e = e || !1,
            (n = d.extractId(t)) && (i = d.getStateById(n)),
            i || (s = d.getFullUrl(t),
            (n = d.getIdByUrl(s) || !1) && (i = d.getStateById(n)),
            !i && e && !d.isTraditionalAnchor(t) && (i = d.createStateObject(null, null, s))),
            i
        }
        ,
        d.getIdByUrl = function(t) {
            var i;
            return d.urlToId[t] || d.store.urlToId[t] || e
        }
        ,
        d.getLastSavedState = function() {
            return d.savedStates[d.savedStates.length - 1] || e
        }
        ,
        d.getLastStoredState = function() {
            return d.storedStates[d.storedStates.length - 1] || e
        }
        ,
        d.hasUrlDuplicate = function(t) {
            var e = !1, i;
            return e = (i = d.extractState(t.url)) && i.id !== t.id
        }
        ,
        d.storeState = function(t) {
            return d.urlToId[t.url] = t.id,
            d.storedStates.push(d.cloneObject(t)),
            t
        }
        ,
        d.isLastSavedState = function(t) {
            var e = !1, i, n, s;
            return d.savedStates.length && (e = (i = t.id) === (s = (n = d.getLastSavedState()).id)),
            e
        }
        ,
        d.saveState = function(t) {
            return !d.isLastSavedState(t) && (d.savedStates.push(d.cloneObject(t)),
            !0)
        }
        ,
        d.getStateByIndex = function(t) {
            var e = null;
            return e = void 0 === t ? d.savedStates[d.savedStates.length - 1] : t < 0 ? d.savedStates[d.savedStates.length + t] : d.savedStates[t]
        }
        ,
        d.getCurrentIndex = function() {
            var t = null;
            return t = d.savedStates.length < 1 ? 0 : d.savedStates.length - 1
        }
        ,
        d.getHash = function(t) {
            var e = d.getLocationHref(t), i;
            return i = d.getHashByUrl(e)
        }
        ,
        d.unescapeHash = function(t) {
            var e = d.normalizeHash(t);
            return e = decodeURIComponent(e)
        }
        ,
        d.normalizeHash = function(t) {
            var e;
            return t.replace(/[^#]*#/, "").replace(/#.*/, "")
        }
        ,
        d.setHash = function(t, e) {
            var i, s;
            return !1 !== e && d.busy() ? (d.pushQueue({
                scope: d,
                callback: d.setHash,
                args: arguments,
                queue: e
            }),
            !1) : (d.busy(!0),
            (i = d.extractState(t, !0)) && !d.emulated.pushState ? d.pushState(i.data, i.title, i.url, !1) : d.getHash() !== t && (d.bugs.setHash ? (s = d.getPageUrl(),
            d.pushState(null, null, s + "#" + t, !1)) : n.location.hash = t),
            d)
        }
        ,
        d.escapeHash = function(e) {
            var i = d.normalizeHash(e);
            return i = t.encodeURIComponent(i),
            d.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")),
            i
        }
        ,
        d.getHashByUrl = function(t) {
            var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return e = d.unescapeHash(e)
        }
        ,
        d.setTitle = function(t) {
            var e = t.title, i;
            e || (i = d.getStateByIndex(0)) && i.url === t.url && (e = i.title || d.options.initialTitle);
            try {
                n.getElementsByTagName("title")[0].innerHTML = e.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (t) {}
            return n.title = e,
            d
        }
        ,
        d.queues = [],
        d.busy = function(t) {
            if (void 0 !== t ? d.busy.flag = t : void 0 === d.busy.flag && (d.busy.flag = !1),
            !d.busy.flag) {
                a(d.busy.timeout);
                var e = function() {
                    var t, i, n;
                    if (!d.busy.flag)
                        for (t = d.queues.length - 1; t >= 0; --t)
                            0 !== (i = d.queues[t]).length && (n = i.shift(),
                            d.fireQueueItem(n),
                            d.busy.timeout = r(e, d.options.busyDelay))
                };
                d.busy.timeout = r(e, d.options.busyDelay)
            }
            return d.busy.flag
        }
        ,
        d.busy.flag = !1,
        d.fireQueueItem = function(t) {
            return t.callback.apply(t.scope || d, t.args || [])
        }
        ,
        d.pushQueue = function(t) {
            return d.queues[t.queue || 0] = d.queues[t.queue || 0] || [],
            d.queues[t.queue || 0].push(t),
            d
        }
        ,
        d.queue = function(t, e) {
            return "function" == typeof t && (t = {
                callback: t
            }),
            void 0 !== e && (t.queue = e),
            d.busy() ? d.pushQueue(t) : d.fireQueueItem(t),
            d
        }
        ,
        d.clearQueue = function() {
            return d.busy.flag = !1,
            d.queues = [],
            d
        }
        ,
        d.stateChanged = !1,
        d.doubleChecker = !1,
        d.doubleCheckComplete = function() {
            return d.stateChanged = !0,
            d.doubleCheckClear(),
            d
        }
        ,
        d.doubleCheckClear = function() {
            return d.doubleChecker && (a(d.doubleChecker),
            d.doubleChecker = !1),
            d
        }
        ,
        d.doubleCheck = function(t) {
            return d.stateChanged = !1,
            d.doubleCheckClear(),
            d.bugs.ieDoubleCheck && (d.doubleChecker = r((function() {
                return d.doubleCheckClear(),
                d.stateChanged || t(),
                !0
            }
            ), d.options.doubleCheckInterval)),
            d
        }
        ,
        d.safariStatePoll = function() {
            var e = d.extractState(d.getLocationHref()), i;
            if (!d.isLastSavedState(e))
                return (i = e) || (i = d.createStateObject()),
                d.Adapter.trigger(t, "popstate"),
                d
        }
        ,
        d.back = function(t) {
            return !1 !== t && d.busy() ? (d.pushQueue({
                scope: d,
                callback: d.back,
                args: arguments,
                queue: t
            }),
            !1) : (d.busy(!0),
            d.doubleCheck((function() {
                d.back(!1)
            }
            )),
            p.go(-1),
            !0)
        }
        ,
        d.forward = function(t) {
            return !1 !== t && d.busy() ? (d.pushQueue({
                scope: d,
                callback: d.forward,
                args: arguments,
                queue: t
            }),
            !1) : (d.busy(!0),
            d.doubleCheck((function() {
                d.forward(!1)
            }
            )),
            p.go(1),
            !0)
        }
        ,
        d.go = function(t, e) {
            var i;
            if (t > 0)
                for (i = 1; i <= t; ++i)
                    d.forward(e);
            else {
                if (!(t < 0))
                    throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (i = -1; i >= t; --i)
                    d.back(e)
            }
            return d
        }
        ,
        d.emulated.pushState) {
            var g = function() {};
            d.pushState = d.pushState || g,
            d.replaceState = d.replaceState || g
        } else
            d.onPopState = function(e, i) {
                var n = !1, s = !1, o, r;
                return d.doubleCheckComplete(),
                (o = d.getHash()) ? ((r = d.extractState(o || d.getLocationHref(), !0)) ? d.replaceState(r.data, r.title, r.url, !1) : (d.Adapter.trigger(t, "anchorchange"),
                d.busy(!1)),
                d.expectedStateId = !1,
                !1) : ((s = (n = d.Adapter.extractEventData("state", e, i) || !1) ? d.getStateById(n) : d.expectedStateId ? d.getStateById(d.expectedStateId) : d.extractState(d.getLocationHref())) || (s = d.createStateObject(null, null, d.getLocationHref())),
                d.expectedStateId = !1,
                d.isLastSavedState(s) ? (d.busy(!1),
                !1) : (d.storeState(s),
                d.saveState(s),
                d.setTitle(s),
                d.Adapter.trigger(t, "statechange"),
                d.busy(!1),
                !0))
            }
            ,
            d.Adapter.bind(t, "popstate", d.onPopState),
            d.pushState = function(e, i, n, s) {
                if (d.getHashByUrl(n) && d.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== s && d.busy())
                    return d.pushQueue({
                        scope: d,
                        callback: d.pushState,
                        args: arguments,
                        queue: s
                    }),
                    !1;
                d.busy(!0);
                var o = d.createStateObject(e, i, n);
                return d.isLastSavedState(o) ? d.busy(!1) : (d.storeState(o),
                d.expectedStateId = o.id,
                p.pushState(o.id, o.title, o.url),
                d.Adapter.trigger(t, "popstate")),
                !0
            }
            ,
            d.replaceState = function(e, i, n, s) {
                if (d.getHashByUrl(n) && d.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== s && d.busy())
                    return d.pushQueue({
                        scope: d,
                        callback: d.replaceState,
                        args: arguments,
                        queue: s
                    }),
                    !1;
                d.busy(!0);
                var o = d.createStateObject(e, i, n);
                return d.isLastSavedState(o) ? d.busy(!1) : (d.storeState(o),
                d.expectedStateId = o.id,
                p.replaceState(o.id, o.title, o.url),
                d.Adapter.trigger(t, "popstate")),
                !0
            }
            ;
        if (o) {
            try {
                d.store = h.parse(o.getItem("History.store")) || {}
            } catch (t) {
                d.store = {}
            }
            d.normalizeStore()
        } else
            d.store = {},
            d.normalizeStore();
        d.Adapter.bind(t, "unload", d.clearAllIntervals),
        d.saveState(d.storeState(d.extractState(d.getLocationHref(), !0))),
        o && (d.onUnload = function() {
            var t, e, i;
            try {
                t = h.parse(o.getItem("History.store")) || {}
            } catch (e) {
                t = {}
            }
            for (e in t.idToState = t.idToState || {},
            t.urlToId = t.urlToId || {},
            t.stateToId = t.stateToId || {},
            d.idToState)
                d.idToState.hasOwnProperty(e) && (t.idToState[e] = d.idToState[e]);
            for (e in d.urlToId)
                d.urlToId.hasOwnProperty(e) && (t.urlToId[e] = d.urlToId[e]);
            for (e in d.stateToId)
                d.stateToId.hasOwnProperty(e) && (t.stateToId[e] = d.stateToId[e]);
            d.store = t,
            d.normalizeStore(),
            i = h.stringify(t);
            try {
                o.setItem("History.store", i)
            } catch (t) {
                if (t.code !== DOMException.QUOTA_EXCEEDED_ERR)
                    throw t;
                o.length && (o.removeItem("History.store"),
                o.setItem("History.store", i))
            }
        }
        ,
        d.intervalList.push(l(d.onUnload, d.options.storeInterval)),
        d.Adapter.bind(t, "beforeunload", d.onUnload),
        d.Adapter.bind(t, "unload", d.onUnload)),
        d.emulated.pushState || (d.bugs.safariPoll && d.intervalList.push(l(d.safariStatePoll, d.options.safariPollInterval)),
        "Apple Computer, Inc." !== s.vendor && "Mozilla" !== (s.appCodeName || "") || (d.Adapter.bind(t, "hashchange", (function() {
            d.Adapter.trigger(t, "popstate")
        }
        )),
        d.getHash() && d.Adapter.onDomLoad((function() {
            d.Adapter.trigger(t, "hashchange")
        }
        ))))
    }
    ,
    (!d.options || !d.options.delayInit) && d.init()
}(window),
function(t, e) {
    var i = t.History, $ = t.jQuery, n = t.document, s = $(t), o = $(n.body), r = $("title"), a = i.getRootUrl(), l, c, h, u, d;
    $.expr.pseudos.internal = function(t) {
        var e, i = $(t).attr("href") || "", n = !1;
        return n = (i.substring(0, a.length) === a || -1 === i.indexOf(":")) && -1 === i.indexOf("wp-admin") && -1 === i.indexOf("wp-login")
    }
    ,
    $.fn.ajaxify = function() {
        var t = $(this);
        return t.find("a:internal:not(.no-ajaxify)").click((function(t) {
            var e = $(this)
              , n = e.attr("href")
              , o = e.attr("title") || null
              , r = e.attr("data-fragment")
              , a = e.attr("data-next");
            return !(!AJX.options.reloadActualState || n !== i.getState().url) || (!(2 !== t.which && !t.metaKey) || (!!d || ("#" === n || (s.trigger("ajax:always"),
            u = !1,
            i.pushState({
                fragment: r || !1,
                next: !!a,
                is_replace_state: !1
            }, o, n),
            t.preventDefault(),
            !1))))
        }
        )),
        t
    }
    ,
    AJX = {
        init: function(t) {
            if (!i.enabled)
                return !1;
            var e = {
                contentId: "#content",
                auto: !0,
                cache: !0,
                cachelenght: 17,
                reloadActualState: !0,
                waitTime: 0,
                stack: []
            };
            this.options = $.extend({}, e, t),
            u = !0,
            d = !1,
            o.ajaxify(),
            this.registerCache(n.location.href, $.htmlDoc($("html").prop("outerHTML"))),
            s.bind("statechange", (function() {
                AJX.onStateChange()
            }
            ))
        },
        pushState: function(t, e, n) {
            s.trigger("ajax:always"),
            u = !1,
            i.pushState({
                fragment: "" !== t && t,
                next: !1,
                is_replace_state: n
            }, null, e)
        },
        getTimeNow: function() {
            var t;
            return (new Date).getTime()
        },
        onStateChange: function() {
            var t = i.getState()
              , e = t.url;
            (h = t.data).replace || (u && AJX.reloadFallBack(e),
            d = !0,
            l = this.getTimeNow(),
            s.trigger("ajax:start"),
            this.is_in_cache(e, !0) ? this.checkSyncSuccess() : $.ajax({
                url: e,
                data: {
                    ajaxify: !0
                },
                success: function(t) {
                    (c = $.htmlDoc(t)).html() || AJX.reloadFallBack(e),
                    AJX.registerCache(e, c),
                    AJX.checkSyncSuccess()
                },
                error: function() {
                    AJX.reloadFallBack(e)
                }
            }))
        },
        reloadFallBack: function(t) {
            return n.location.href = t,
            !1
        },
        checkSyncSuccess: function() {
            var t, e, i = this.options.waitTime, n = 77;
            0 !== i ? (e = (t = this.getTimeNow()) - l) >= i + n ? this.onSuccess() : setTimeout((function() {
                AJX.onSuccess()
            }
            ), i + n - e) : this.onSuccess()
        },
        onSuccess: function() {
            s.trigger("ajax:before-update"),
            this.update(),
            s.trigger("ajax:success"),
            u = !0,
            d = !1
        },
        registerCache: function(t, e) {
            if (!this.options.cache)
                return !1;
            var i = this.options.stack
              , n = i.length;
            this.is_in_cache(t, !1) || (n >= this.options.cachelenght && i.shift(),
            i.push({
                url: t,
                $html: e
            }),
            this.options.stack = i)
        },
        is_in_cache: function(t, e) {
            if (!this.options.cache)
                return !1;
            for (var i = this.options.stack.length; i--; ) {
                var n = this.options.stack[i];
                if (n.url === t)
                    return e && (c = n.$html),
                    !0
            }
            return !1
        },
        update: function() {
            this.updateTitle(),
            this.updateBodyClasses(),
            this.options.auto && !h.fragment && this.updateContent(),
            h.fragment && this.updateFragment(),
            this.updateSTATS()
        },
        updateTitle: function() {
            r.text(c.find("title").text())
        },
        updateBodyClasses: function() {
            o.attr("class", c.find("body").attr("class"))
        },
        updateContent: function() {
            var t = this.options.contentId
              , e = c.find(t);
            $(t).html(e.html()).ajaxify()
        },
        updateFragment: function() {},
        updateSTATS: function() {
            var e, n, s = i.getState().url.replace(a, ""), o = t.ga;
            s = "/" + s;
            const r = "G-B48E2NZY89";
            "undefined" != typeof gtag && r && gtag("config", r, {
                page_path: s
            }),
            void 0 !== o && (o("set", "page", s),
            o("send", "pageview"))
        },
        updateMetaTags: function() {
            var t, e, i = ['name="description"', 'property="og:title"', 'property="og:description"', 'property="og:url"', 'name="twitter:description"', 'name="twitter:title"'], n = ['rel="canonical"', 'rel="shortlink"'];
            for (t = i.length; t--; )
                e = "meta[" + i[t] + "]",
                $(e).attr("content", c.find(e).attr("content"));
            for (t = n.length; t--; )
                e = "link[" + n[t] + "]",
                $(e).attr("href", c.find(e).attr("href"))
        },
        getHTML: function() {
            return c
        },
        getData: function() {
            return h
        }
    }
}(window);
/*!
 * VERSION: 1.19.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push((function() {
    "use strict";
    var t, e, i;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
        var n = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , s = function(t, e, i) {
            var n, s, o = t.cycle;
            for (n in o)
                s = o[n],
                t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
            delete t.cycle
        }
          , o = function(t, e, n) {
            i.call(this, t, e, n),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = o.prototype.render
        }
          , r = 1e-10
          , a = i._internals
          , l = a.isSelector
          , c = a.isArray
          , h = o.prototype = i.to({}, .1, {})
          , u = [];
        o.version = "1.19.0",
        h.constructor = o,
        h.kill()._gc = !1,
        o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf,
        o.getTweensOf = i.getTweensOf,
        o.lagSmoothing = i.lagSmoothing,
        o.ticker = i.ticker,
        o.render = i.render,
        h.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        h.updateTo = function(t, e) {
            var n, s = this.ratio, o = this.vars.immediateRender || t.immediateRender;
            for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
            t)
                this.vars[n] = t[n];
            if (this._initted || o)
                if (e)
                    this._initted = !1,
                    o && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var r = this._totalTime;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(r, !0, !1)
                } else if (this._initted = !1,
                this._init(),
                this._time > 0 || o)
                    for (var a, l = 1 / (1 - s), c = this._firstPT; c; )
                        a = c.s + c.c,
                        c.c *= l,
                        c.s = a - c.c,
                        c = c._next;
            return this
        }
        ,
        h.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, s, o, l, c, h, u, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, g = this._totalTime, m = this._cycle, v = this._duration, y = this._rawPrevTime;
            if (t >= p - 1e-7 ? (this._totalTime = p,
            this._cycle = this._repeat,
            this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (n = !0,
            s = "onComplete",
            i = i || this._timeline.autoRemoveChildren),
            0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
            (0 > y || 0 >= t && t >= -1e-7 || y === r && "isPause" !== this.data) && y !== t && (i = !0,
            y > r && (s = "onReverseComplete")),
            this._rawPrevTime = d = !e || t || y === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== g || 0 === v && y > 0) && (s = "onReverseComplete",
            n = this._reversed),
            0 > t && (this._active = !1,
            0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0),
            this._rawPrevTime = d = !e || t || y === t ? t : r)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (l = v + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && t >= g && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time),
            this._time > v ? this._time = v : this._time < 0 && (this._time = 0)),
            this._easeType ? (c = this._time / v,
            (1 === (h = this._easeType) || 3 === h && c >= .5) && (c = 1 - c),
            3 === h && (c *= 2),
            1 === (u = this._easePower) ? c *= c : 2 === u ? c *= c * c : 3 === u ? c *= c * c * c : 4 === u && (c *= c * c * c * c),
            1 === h ? this.ratio = 1 - c : 2 === h ? this.ratio = c : this._time / v < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / v)),
            f !== this._time || i || m !== this._cycle) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = f,
                        this._totalTime = g,
                        this._rawPrevTime = y,
                        this._cycle = m,
                        a.lazyTweens.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0),
                0 === g && (2 === this._initted && t > 0 && this._init(),
                this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))),
                o = this._firstPT; o; )
                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                    o = o._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || (this._totalTime !== g || s) && this._callback("onUpdate")),
                this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === v && this._rawPrevTime === r && d !== r && (this._rawPrevTime = 0))
            } else
                g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        o.to = function(t, e, i) {
            return new o(t,e,i)
        }
        ,
        o.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new o(t,e,i)
        }
        ,
        o.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new o(t,e,n)
        }
        ,
        o.staggerTo = o.allTo = function(t, e, r, a, h, d, p) {
            a = a || 0;
            var f, g, m, v, y = 0, _ = [], w = function() {
                r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments),
                h.apply(p || r.callbackScope || this, d || u)
            }, b = r.cycle, T = r.startAt && r.startAt.cycle;
            for (c(t) || ("string" == typeof t && (t = i.selector(t) || t),
            l(t) && (t = n(t))),
            t = t || [],
            0 > a && ((t = n(t)).reverse(),
            a *= -1),
            f = t.length - 1,
            m = 0; f >= m; m++) {
                for (v in g = {},
                r)
                    g[v] = r[v];
                if (b && (s(g, t, m),
                null != g.duration && (e = g.duration,
                delete g.duration)),
                T) {
                    for (v in T = g.startAt = {},
                    r.startAt)
                        T[v] = r.startAt[v];
                    s(g.startAt, t, m)
                }
                g.delay = y + (g.delay || 0),
                m === f && h && (g.onComplete = w),
                _[m] = new o(t[m],e,g),
                y += a
            }
            return _
        }
        ,
        o.staggerFrom = o.allFrom = function(t, e, i, n, s, r, a) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            o.staggerTo(t, e, i, n, s, r, a)
        }
        ,
        o.staggerFromTo = o.allFromTo = function(t, e, i, n, s, r, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            o.staggerTo(t, e, n, s, r, a, l)
        }
        ,
        o.delayedCall = function(t, e, i, n, s) {
            return new o(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        o.set = function(t, e) {
            return new o(t,0,e)
        }
        ,
        o.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        }
        ;
        var d = function(t, e) {
            for (var n = [], s = 0, o = t._first; o; )
                o instanceof i ? n[s++] = o : (e && (n[s++] = o),
                s = (n = n.concat(d(o, e))).length),
                o = o._next;
            return n
        }
          , p = o.getAllTweens = function(e) {
            return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
        }
        ;
        o.killAll = function(t, i, n, s) {
            null == i && (i = !0),
            null == n && (n = !0);
            var o, r, a, l = p(0 != s), c = l.length, h = i && n && s;
            for (a = 0; c > a; a++)
                r = l[a],
                (h || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && (t ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
        }
        ,
        o.killChildTweensOf = function(t, e) {
            if (null != t) {
                var s, r, h, u, d, p = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                l(t) && (t = n(t)),
                c(t))
                    for (u = t.length; --u > -1; )
                        o.killChildTweensOf(t[u], e);
                else {
                    for (h in s = [],
                    p)
                        for (r = p[h].target.parentNode; r; )
                            r === t && (s = s.concat(p[h].tweens)),
                            r = r.parentNode;
                    for (d = s.length,
                    u = 0; d > u; u++)
                        e && s[u].totalTime(s[u].totalDuration()),
                        s[u]._enabled(!1, !1)
                }
            }
        }
        ;
        var f = function(t, i, n, s) {
            i = !1 !== i,
            n = !1 !== n;
            for (var o, r, a = p(s = !1 !== s), l = i && n && s, c = a.length; --c > -1; )
                r = a[c],
                (l || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && r.paused(t)
        };
        return o.pauseAll = function(t, e, i) {
            f(!0, t, e, i)
        }
        ,
        o.resumeAll = function(t, e, i) {
            f(!1, t, e, i)
        }
        ,
        o.globalTimeScale = function(e) {
            var n = t._rootTimeline
              , s = i.ticker.time;
            return arguments.length ? (e = e || r,
            n._startTime = s - (s - n._startTime) * n._timeScale / e,
            n = t._rootFramesTimeline,
            s = i.ticker.frame,
            n._startTime = s - (s - n._startTime) * n._timeScale / e,
            n._timeScale = t._rootTimeline._timeScale = e,
            e) : n._timeScale
        }
        ,
        h.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        h.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        h.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        h.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        h.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        h.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        o
    }
    ), !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
        var n = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, n, s = this.vars;
            for (n in s)
                i = s[n],
                l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
            l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
        }
          , s = 1e-10
          , o = i._internals
          , r = n._internals = {}
          , a = o.isSelector
          , l = o.isArray
          , c = o.lazyTweens
          , h = o.lazyRender
          , u = _gsScope._gsDefine.globals
          , d = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , p = function(t, e, i) {
            var n, s, o = t.cycle;
            for (n in o)
                s = o[n],
                t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
            delete t.cycle
        }
          , f = r.pauseCallback = function() {}
          , g = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , m = n.prototype = new e;
        return n.version = "1.19.0",
        m.constructor = n,
        m.kill()._gc = m._forcingPlayhead = m._hasPause = !1,
        m.to = function(t, e, n, s) {
            var o = n.repeat && u.TweenMax || i;
            return e ? this.add(new o(t,e,n), s) : this.set(t, n, s)
        }
        ,
        m.from = function(t, e, n, s) {
            return this.add((n.repeat && u.TweenMax || i).from(t, e, n), s)
        }
        ,
        m.fromTo = function(t, e, n, s, o) {
            var r = s.repeat && u.TweenMax || i;
            return e ? this.add(r.fromTo(t, e, n, s), o) : this.set(t, s, o)
        }
        ,
        m.staggerTo = function(t, e, s, o, r, l, c, h) {
            var u, f, m = new n({
                onComplete: l,
                onCompleteParams: c,
                callbackScope: h,
                smoothChildTiming: this.smoothChildTiming
            }), v = s.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t),
            a(t = t || []) && (t = g(t)),
            0 > (o = o || 0) && ((t = g(t)).reverse(),
            o *= -1),
            f = 0; f < t.length; f++)
                (u = d(s)).startAt && (u.startAt = d(u.startAt),
                u.startAt.cycle && p(u.startAt, t, f)),
                v && (p(u, t, f),
                null != u.duration && (e = u.duration,
                delete u.duration)),
                m.to(t[f], e, u, f * o);
            return this.add(m, r)
        }
        ,
        m.staggerFrom = function(t, e, i, n, s, o, r, a) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, n, s, o, r, a)
        }
        ,
        m.staggerFromTo = function(t, e, i, n, s, o, r, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, n, s, o, r, a, l)
        }
        ,
        m.call = function(t, e, n, s) {
            return this.add(i.delayedCall(0, t, e, n), s)
        }
        ,
        m.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0),
            null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
            this.add(new i(t,0,e), n)
        }
        ,
        n.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var s, o, r = new n(t), a = r._timeline;
            for (null == e && (e = !0),
            a._remove(r, !0),
            r._startTime = 0,
            r._rawPrevTime = r._time = r._totalTime = a._time,
            s = a._first; s; )
                o = s._next,
                e && s instanceof i && s.target === s.vars.onComplete || r.add(s, s._startTime - s._delay),
                s = o;
            return a.add(r, 0),
            r
        }
        ,
        m.add = function(s, o, r, a) {
            var c, h, u, d, p, f;
            if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, s)),
            !(s instanceof t)) {
                if (s instanceof Array || s && s.push && l(s)) {
                    for (r = r || "normal",
                    a = a || 0,
                    c = o,
                    h = s.length,
                    u = 0; h > u; u++)
                        l(d = s[u]) && (d = new n({
                            tweens: d
                        })),
                        this.add(d, c),
                        "string" != typeof d && "function" != typeof d && ("sequence" === r ? c = d._startTime + d.totalDuration() / d._timeScale : "start" === r && (d._startTime -= d.delay())),
                        c += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof s)
                    return this.addLabel(s, o);
                if ("function" != typeof s)
                    throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                s = i.delayedCall(0, s)
            }
            if (e.prototype.add.call(this, s, o),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (f = (p = this).rawTime() > s._startTime; p._timeline; )
                    f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1),
                    p = p._timeline;
            return this
        }
        ,
        m.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var n = e.length; --n > -1; )
                    this.remove(e[n]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        m._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        m.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        m.insert = m.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }
        ,
        m.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }
        ,
        m.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        m.addPause = function(t, e, n, s) {
            var o = i.delayedCall(0, f, n, s || this);
            return o.vars.onComplete = o.vars.onReverseComplete = e,
            o.data = "isPause",
            this._hasPause = !0,
            this.add(o, t)
        }
        ,
        m.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        m.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        m._parseTimeOrLabel = function(e, i, n, s) {
            var o;
            if (s instanceof t && s.timeline === this)
                this.remove(s);
            else if (s && (s instanceof Array || s.push && l(s)))
                for (o = s.length; --o > -1; )
                    s[o]instanceof t && s[o].timeline === this && this.remove(s[o]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (-1 === (o = e.indexOf("=")))
                    return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)),
                e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }
        ,
        m.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        m.stop = function() {
            return this.paused(!0)
        }
        ,
        m.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        m.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        m.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, r, a, l, u, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, g = this._startTime, m = this._timeScale, v = this._paused;
            if (t >= p - 1e-7)
                this._totalTime = this._time = p,
                this._reversed || this._hasPausedChild() || (o = !0,
                a = "onComplete",
                l = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0,
                this._rawPrevTime > s && (a = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                t = p + 1e-4;
            else if (1e-7 > t)
                if (this._totalTime = this._time = 0,
                (0 !== f || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
                o = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0,
                    a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                    0 === t && o)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (o = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (l = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= f)
                        for (n = this._first; n && n._startTime <= t && !u; )
                            n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n),
                            n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !u; )
                            n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n),
                            n = n._prev;
                    u && (this._time = t = u._startTime,
                    this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== f && this._first || i || l || u) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0),
                0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                (d = this._time) >= f)
                    for (n = this._first; n && (r = n._next,
                    d === this._time && (!this._paused || v)); )
                        (n._active || n._startTime <= d && !n._paused && !n._gc) && (u === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = r;
                else
                    for (n = this._last; n && (r = n._prev,
                    d === this._time && (!this._paused || v)); ) {
                        if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                            if (u === n) {
                                for (u = n._prev; u && u.endTime() > this._time; )
                                    u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i),
                                    u = u._prev;
                                u = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = r
                    }
                this._onUpdate && (e || (c.length && h(),
                this._callback("onUpdate"))),
                a && (this._gc || (g === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (c.length && h(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[a] && this._callback(a)))
            }
        }
        ,
        m._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof n && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        m.getChildren = function(t, e, n, s) {
            s = s || -9999999999;
            for (var o = [], r = this._first, a = 0; r; )
                r._startTime < s || (r instanceof i ? !1 !== e && (o[a++] = r) : (!1 !== n && (o[a++] = r),
                !1 !== t && (a = (o = o.concat(r.getChildren(!0, e, n))).length))),
                r = r._next;
            return o
        }
        ,
        m.getTweensOf = function(t, e) {
            var n, s, o = this._gc, r = [], a = 0;
            for (o && this._enabled(!0, !0),
            s = (n = i.getTweensOf(t)).length; --s > -1; )
                (n[s].timeline === this || e && this._contains(n[s])) && (r[a++] = n[s]);
            return o && this._enabled(!1, !0),
            r
        }
        ,
        m.recent = function() {
            return this._recent
        }
        ,
        m._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        m.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, s = this._first, o = this._labels; s; )
                s._startTime >= i && (s._startTime += t),
                s = s._next;
            if (e)
                for (n in o)
                    o[n] >= i && (o[n] += t);
            return this._uncache(!0)
        }
        ,
        m._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1; )
                i[n]._kill(t, e) && (s = !0);
            return s
        }
        ,
        m.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        m.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        m._enabled = function(t, i) {
            if (t === this._gc)
                for (var n = this._first; n; )
                    n._enabled(t, !0),
                    n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        m.totalTime = function(e, i, n) {
            this._forcingPlayhead = !0;
            var s = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            s
        }
        ,
        m.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        m.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, s = this._last, o = 999999999999; s; )
                        e = s._prev,
                        s._dirty && s.totalDuration(),
                        s._startTime > o && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : o = s._startTime,
                        s._startTime < 0 && !s._paused && (n -= s._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale),
                        this.shiftChildren(-s._startTime, !1, -9999999999),
                        o = 0),
                        (i = s._startTime + s._totalDuration / s._timeScale) > n && (n = i),
                        s = e;
                    this._duration = this._totalDuration = n,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }
        ,
        m.paused = function(e) {
            if (!e)
                for (var i = this._first, n = this._time; i; )
                    i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }
        ,
        m.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        m.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        n
    }
    ), !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], (function(t, e, i) {
        var n = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        }
          , s = 1e-10
          , o = e._internals
          , r = o.lazyTweens
          , a = o.lazyRender
          , l = _gsScope._gsDefine.globals
          , c = new i(null,null,1,0)
          , h = n.prototype = new t;
        return h.constructor = n,
        h.kill()._gc = !1,
        n.version = "1.19.0",
        h.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        h.addCallback = function(t, i, n, s) {
            return this.add(e.delayedCall(0, t, n, s), i)
        }
        ,
        h.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1; )
                        i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this
        }
        ,
        h.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }
        ,
        h.tweenTo = function(t, i) {
            i = i || {};
            var n, s, o, r = {
                ease: c,
                useFrames: this.usesFrames(),
                immediateRender: !1
            }, a = i.repeat && l.TweenMax || e;
            for (s in i)
                r[s] = i[s];
            return r.time = this._parseTimeOrLabel(t),
            n = Math.abs(Number(r.time) - this._time) / this._timeScale || .001,
            o = new a(this,n,r),
            r.onStart = function() {
                o.target.paused(!0),
                o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale),
                i.onStart && o._callback("onStart")
            }
            ,
            o
        }
        ,
        h.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }
        ,
        h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, l, c, h, u, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration, g = this._duration, m = this._time, v = this._totalTime, y = this._startTime, _ = this._timeScale, w = this._rawPrevTime, b = this._paused, T = this._cycle;
            if (t >= f - 1e-7)
                this._locked || (this._totalTime = f,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (o = !0,
                c = "onComplete",
                h = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 >= t && t >= -1e-7 || 0 > w || w === s) && w !== t && this._first && (h = !0,
                w > s && (c = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = g,
                t = g + 1e-4);
            else if (1e-7 > t)
                if (this._locked || (this._totalTime = this._cycle = 0),
                this._time = 0,
                (0 !== m || 0 === g && w !== s && (w > 0 || 0 > t && w >= 0) && !this._locked) && (c = "onReverseComplete",
                o = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (h = o = !0,
                    c = "onReverseComplete") : w >= 0 && this._first && (h = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : s,
                    0 === t && o)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (o = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (h = !0)
                }
            else if (0 === g && 0 > w && (h = !0),
            this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (u = g + this._repeatDelay,
            this._cycle = this._totalTime / u >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / u && t >= v && this._cycle--,
            this._time = this._totalTime - this._cycle * u,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time),
            this._time > g ? (this._time = g,
            t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)),
            this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) >= m)
                    for (n = this._first; n && n._startTime <= t && !d; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n),
                        n = n._next;
                else
                    for (n = this._last; n && n._startTime >= t && !d; )
                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n),
                        n = n._prev;
                d && (this._time = t = d._startTime,
                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== T && !this._locked) {
                var x = this._yoyo && 0 != (1 & T)
                  , S = x === (this._yoyo && 0 != (1 & this._cycle))
                  , k = this._totalTime
                  , C = this._cycle
                  , P = this._rawPrevTime
                  , E = this._time;
                if (this._totalTime = T * g,
                this._cycle < T ? x = !x : this._totalTime += g,
                this._time = m,
                this._rawPrevTime = 0 === g ? w - 1e-4 : w,
                this._cycle = T,
                this._locked = !0,
                m = x ? 0 : g,
                this.render(m, e, 0 === g),
                e || this._gc || this.vars.onRepeat && this._callback("onRepeat"),
                m !== this._time)
                    return;
                if (S && (m = x ? g + 1e-4 : -1e-4,
                this.render(m, !0, !1)),
                this._locked = !1,
                this._paused && !b)
                    return;
                this._time = E,
                this._totalTime = k,
                this._cycle = C,
                this._rawPrevTime = P
            }
            if (this._time !== m && this._first || i || h || d) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0),
                0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                (p = this._time) >= m)
                    for (n = this._first; n && (l = n._next,
                    p === this._time && (!this._paused || b)); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = l;
                else
                    for (n = this._last; n && (l = n._prev,
                    p === this._time && (!this._paused || b)); ) {
                        if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                            if (d === n) {
                                for (d = n._prev; d && d.endTime() > this._time; )
                                    d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i),
                                    d = d._prev;
                                d = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = l
                    }
                this._onUpdate && (e || (r.length && a(),
                this._callback("onUpdate"))),
                c && (this._locked || this._gc || (y === this._startTime || _ !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (o && (r.length && a(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[c] && this._callback(c)))
            } else
                v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        h.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var n, s, o = [], r = this.getChildren(t, e, i), a = 0, l = r.length;
            for (n = 0; l > n; n++)
                (s = r[n]).isActive() && (o[a++] = s);
            return o
        }
        ,
        h.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        h.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (e[i].time < t)
                    return e[i].name;
            return null
        }
        ,
        h.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort((function(t, e) {
                return t.time - e.time
            }
            )),
            e
        }
        ,
        h.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        h.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        h.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        h.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        h.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        h.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        n
    }
    ), !0),
    function() {
        var t = 180 / Math.PI
          , e = []
          , i = []
          , n = []
          , s = {}
          , o = _gsScope._gsDefine.globals
          , r = function(t, e, i, n) {
            i === n && (i = n - (n - e) / 1e6),
            t === e && (e = t + (i - t) / 1e6),
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = n,
            this.da = n - t,
            this.ca = i - t,
            this.ba = e - t
        }
          , a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
          , l = function(t, e, i, n) {
            var s = {
                a: t
            }
              , o = {}
              , r = {}
              , a = {
                c: n
            }
              , l = (t + e) / 2
              , c = (e + i) / 2
              , h = (i + n) / 2
              , u = (l + c) / 2
              , d = (c + h) / 2
              , p = (d - u) / 8;
            return s.b = l + (t - l) / 4,
            o.b = u + p,
            s.c = o.a = (s.b + o.b) / 2,
            o.c = r.a = (u + d) / 2,
            r.b = d - p,
            a.b = h + (n - h) / 4,
            r.c = a.a = (r.b + a.b) / 2,
            [s, o, r, a]
        }
          , c = function(t, s, o, r, a) {
            var c, h, u, d, p, f, g, m, v, y, _, w, b, T = t.length - 1, x = 0, S = t[0].a;
            for (c = 0; T > c; c++)
                h = (p = t[x]).a,
                u = p.d,
                d = t[x + 1].d,
                a ? (_ = e[c],
                b = ((w = i[c]) + _) * s * .25 / (r ? .5 : n[c] || .5),
                m = u - ((f = u - (u - h) * (r ? .5 * s : 0 !== _ ? b / _ : 0)) + (((g = u + (d - u) * (r ? .5 * s : 0 !== w ? b / w : 0)) - f) * (3 * _ / (_ + w) + .5) / 4 || 0))) : m = u - ((f = u - (u - h) * s * .5) + (g = u + (d - u) * s * .5)) / 2,
                f += m,
                g += m,
                p.c = v = f,
                p.b = 0 !== c ? S : S = p.a + .6 * (p.c - p.a),
                p.da = u - h,
                p.ca = v - h,
                p.ba = S - h,
                o ? (y = l(h, S, v, u),
                t.splice(x, 1, y[0], y[1], y[2], y[3]),
                x += 4) : x++,
                S = g;
            (p = t[x]).b = S,
            p.c = S + .4 * (p.d - S),
            p.da = p.d - p.a,
            p.ca = p.c - p.a,
            p.ba = S - p.a,
            o && (y = l(p.a, S, p.c, p.d),
            t.splice(x, 1, y[0], y[1], y[2], y[3]))
        }
          , h = function(t, n, s, o) {
            var a, l, c, h, u, d, p = [];
            if (o)
                for (l = (t = [o].concat(t)).length; --l > -1; )
                    "string" == typeof (d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = o[n] + Number(d.charAt(0) + d.substr(2)));
            if (0 > (a = t.length - 2))
                return p[0] = new r(t[0][n],0,0,t[-1 > a ? 0 : 1][n]),
                p;
            for (l = 0; a > l; l++)
                c = t[l][n],
                h = t[l + 1][n],
                p[l] = new r(c,0,0,h),
                s && (u = t[l + 2][n],
                e[l] = (e[l] || 0) + (h - c) * (h - c),
                i[l] = (i[l] || 0) + (u - h) * (u - h));
            return p[l] = new r(t[l][n],0,0,t[l + 1][n]),
            p
        }
          , u = function(t, o, r, l, u, d) {
            var p, f, g, m, v, y, _, w, b = {}, T = [], x = d || t[0];
            for (f in u = "string" == typeof u ? "," + u + "," : a,
            null == o && (o = 1),
            t[0])
                T.push(f);
            if (t.length > 1) {
                for (w = t[t.length - 1],
                _ = !0,
                p = T.length; --p > -1; )
                    if (f = T[p],
                    Math.abs(x[f] - w[f]) > .05) {
                        _ = !1;
                        break
                    }
                _ && (t = t.concat(),
                d && t.unshift(d),
                t.push(t[1]),
                d = t[t.length - 3])
            }
            for (e.length = i.length = n.length = 0,
            p = T.length; --p > -1; )
                f = T[p],
                s[f] = -1 !== u.indexOf("," + f + ","),
                b[f] = h(t, f, s[f], d);
            for (p = e.length; --p > -1; )
                e[p] = Math.sqrt(e[p]),
                i[p] = Math.sqrt(i[p]);
            if (!l) {
                for (p = T.length; --p > -1; )
                    if (s[f])
                        for (y = (g = b[T[p]]).length - 1,
                        m = 0; y > m; m++)
                            v = g[m + 1].da / i[m] + g[m].da / e[m] || 0,
                            n[m] = (n[m] || 0) + v * v;
                for (p = n.length; --p > -1; )
                    n[p] = Math.sqrt(n[p])
            }
            for (p = T.length,
            m = r ? 4 : 1; --p > -1; )
                g = b[f = T[p]],
                c(g, o, r, l, s[f]),
                _ && (g.splice(0, m),
                g.splice(g.length - m, m));
            return b
        }
          , d = function(t, e, i) {
            var n, s, o, a, l, c, h, u, d, p, f, g = {}, m = "cubic" === (e = e || "soft") ? 3 : 2, v = "soft" === e, y = [];
            if (v && i && (t = [i].concat(t)),
            null == t || t.length < m + 1)
                throw "invalid Bezier data";
            for (d in t[0])
                y.push(d);
            for (c = y.length; --c > -1; ) {
                for (g[d = y[c]] = l = [],
                p = 0,
                u = t.length,
                h = 0; u > h; h++)
                    n = null == i ? t[h][d] : "string" == typeof (f = t[h][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f),
                    v && h > 1 && u - 1 > h && (l[p++] = (n + l[p - 2]) / 2),
                    l[p++] = n;
                for (u = p - m + 1,
                p = 0,
                h = 0; u > h; h += m)
                    n = l[h],
                    s = l[h + 1],
                    o = l[h + 2],
                    a = 2 === m ? 0 : l[h + 3],
                    l[p++] = f = 3 === m ? new r(n,s,o,a) : new r(n,(2 * s + n) / 3,(2 * s + o) / 3,o);
                l.length = p
            }
            return g
        }
          , p = function(t, e, i) {
            for (var n, s, o, r, a, l, c, h, u, d, p, f = 1 / i, g = t.length; --g > -1; )
                for (o = (d = t[g]).a,
                r = d.d - o,
                a = d.c - o,
                l = d.b - o,
                n = s = 0,
                h = 1; i >= h; h++)
                    n = s - (s = ((c = f * h) * c * r + 3 * (u = 1 - c) * (c * a + u * l)) * c),
                    e[p = g * i + h - 1] = (e[p] || 0) + n * n
        }
          , f = function(t, e) {
            var i, n, s, o, r = [], a = [], l = 0, c = 0, h = (e = e >> 0 || 6) - 1, u = [], d = [];
            for (i in t)
                p(t[i], r, e);
            for (s = r.length,
            n = 0; s > n; n++)
                l += Math.sqrt(r[n]),
                d[o = n % e] = l,
                o === h && (c += l,
                u[o = n / e >> 0] = d,
                a[o] = c,
                l = 0,
                d = []);
            return {
                length: c,
                lengths: a,
                segments: u
            }
        }
          , g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.7",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._mod = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, s, o, r, a, l = e.values || [], c = {}, h = l[0], p = e.autoRotate || i.vars.orientToBezier;
                for (n in this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null,
                h)
                    this._props.push(n);
                for (o = this._props.length; --o > -1; )
                    n = this._props[o],
                    this._overwriteProps.push(n),
                    s = this._func[n] = "function" == typeof t[n],
                    c[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                    a || c[n] !== l[0][n] && (a = c);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, c),
                this._segCount = this._beziers[n].length,
                this._timeRes) {
                    var g = f(this._beziers, this._timeRes);
                    this._length = g.length,
                    this._lengths = g.lengths,
                    this._segments = g.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (p = this._autoRotate)
                    for (this._initialRotations = [],
                    p[0]instanceof Array || (this._autoRotate = p = [p]),
                    o = p.length; --o > -1; ) {
                        for (r = 0; 3 > r; r++)
                            n = p[o][r],
                            this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = p[o][2],
                        this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                        this._overwriteProps.push(n)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(e) {
                var i, n, s, o, r, a, l, c, h, u, d = this._segCount, p = this._func, f = this._target, g = e !== this._startRatio;
                if (this._timeRes) {
                    if (h = this._lengths,
                    u = this._curSeg,
                    e *= this._length,
                    s = this._li,
                    e > this._l2 && d - 1 > s) {
                        for (c = d - 1; c > s && (this._l2 = h[++s]) <= e; )
                            ;
                        this._l1 = h[s - 1],
                        this._li = s,
                        this._curSeg = u = this._segments[s],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && s > 0) {
                        for (; s > 0 && (this._l1 = h[--s]) >= e; )
                            ;
                        0 === s && e < this._l1 ? this._l1 = 0 : s++,
                        this._l2 = h[s],
                        this._li = s,
                        this._curSeg = u = this._segments[s],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = s,
                    e -= this._l1,
                    s = this._si,
                    e > this._s2 && s < u.length - 1) {
                        for (c = u.length - 1; c > s && (this._s2 = u[++s]) <= e; )
                            ;
                        this._s1 = u[s - 1],
                        this._si = s
                    } else if (e < this._s1 && s > 0) {
                        for (; s > 0 && (this._s1 = u[--s]) >= e; )
                            ;
                        0 === s && e < this._s1 ? this._s1 = 0 : s++,
                        this._s2 = u[s],
                        this._si = s
                    }
                    a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else
                    a = (e - (i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0) * (1 / d)) * d;
                for (n = 1 - a,
                s = this._props.length; --s > -1; )
                    o = this._props[s],
                    l = (a * a * (r = this._beziers[o][i]).da + 3 * n * (a * r.ca + n * r.ba)) * a + r.a,
                    this._mod[o] && (l = this._mod[o](l, f)),
                    p[o] ? f[o](l) : f[o] = l;
                if (this._autoRotate) {
                    var m, v, y, _, w, b, T, x = this._autoRotate;
                    for (s = x.length; --s > -1; )
                        o = x[s][2],
                        b = x[s][3] || 0,
                        T = !0 === x[s][4] ? 1 : t,
                        r = this._beziers[x[s][0]],
                        m = this._beziers[x[s][1]],
                        r && m && (r = r[i],
                        m = m[i],
                        v = r.a + (r.b - r.a) * a,
                        v += ((_ = r.b + (r.c - r.b) * a) - v) * a,
                        _ += (r.c + (r.d - r.c) * a - _) * a,
                        y = m.a + (m.b - m.a) * a,
                        y += ((w = m.b + (m.c - m.b) * a) - y) * a,
                        w += (m.c + (m.d - m.c) * a - w) * a,
                        l = g ? Math.atan2(w - y, _ - v) * T + b : this._initialRotations[s],
                        this._mod[o] && (l = this._mod[o](l, f)),
                        p[o] ? f[o](l) : f[o] = l)
                }
            }
        })
          , m = g.prototype;
        g.bezierThrough = u,
        g.cubicToQuadratic = l,
        g._autoCSS = !0,
        g.quadraticToCubic = function(t, e, i) {
            return new r(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
        }
        ,
        g._cssRegister = function() {
            var t = o.CSSPlugin;
            if (t) {
                var e = t._internals
                  , i = e._parseToProxy
                  , n = e._setPluginRatio
                  , s = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, o, r, a, l) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        l = new g;
                        var c, h, u, d = e.values, p = d.length - 1, f = [], m = {};
                        if (0 > p)
                            return a;
                        for (c = 0; p >= c; c++)
                            u = i(t, d[c], r, a, l, p !== c),
                            f[c] = u.end;
                        for (h in e)
                            m[h] = e[h];
                        return m.values = f,
                        (a = new s(t,"bezier",0,0,u.pt,2)).data = u,
                        a.plugin = l,
                        a.setRatio = n,
                        0 === m.autoRotate && (m.autoRotate = !0),
                        !m.autoRotate || m.autoRotate instanceof Array || (c = !0 === m.autoRotate ? 0 : Number(m.autoRotate),
                        m.autoRotate = null != u.end.left ? [["left", "top", "rotation", c, !1]] : null != u.end.x && [["x", "y", "rotation", c, !1]]),
                        m.autoRotate && (r._transform || r._enableTransforms(!1),
                        u.autoRotate = r._target._gsTransform,
                        u.proxy.rotation = u.autoRotate.rotation || 0,
                        r._overwriteProps.push("rotation")),
                        l._onInitTween(u.proxy, m, r._tween),
                        a
                    }
                })
            }
        }
        ,
        m._mod = function(t) {
            for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
                (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
        }
        ,
        m._kill = function(t) {
            var e, i, n = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e],
                    delete this._func[e],
                    i = n.length; --i > -1; )
                        n[i] === e && n.splice(i, 1);
            if (n = this._autoRotate)
                for (i = n.length; --i > -1; )
                    t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], (function(t, e) {
        var i, n, s, o, r = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = r.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, l = {}, c = r.prototype = new t("css");
        c.constructor = r,
        r.version = "1.19.0",
        r.API = 2,
        r.defaultTransformPerspective = 0,
        r.defaultSkewType = "compensated",
        r.defaultSmoothOrigin = !0,
        c = "px",
        r.suffixMap = {
            top: c,
            right: c,
            bottom: c,
            left: c,
            width: c,
            height: c,
            fontSize: c,
            padding: c,
            margin: c,
            perspective: c,
            lineHeight: ""
        };
        var h, u, d, p, f, g, m, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g, _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, T = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, S = /opacity:([^;]*)/i, k = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, P = /([A-Z])/g, E = /-([a-z])/gi, I = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, O = function(t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, L = /,(?=[^\)]*(?:\(|$))/gi, R = /[\s,\(]/i, D = Math.PI / 180, F = 180 / Math.PI, j = {}, H = document, B = function(t) {
            return H.createElementNS ? H.createElementNS("http://www.w3.org/1999/xhtml", t) : H.createElement(t)
        }, N = B("div"), X = B("img"), q = r._internals = {
            _specialProps: l
        }, Y = navigator.userAgent, W = function() {
            var t = Y.indexOf("Android")
              , e = B("a");
            return d = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3),
            f = d && Number(Y.substr(Y.indexOf("Version/") + 8, 1)) < 6,
            p = -1 !== Y.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (g = parseFloat(RegExp.$1)),
            !!e && (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity))
        }(), U = function(t) {
            return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, G = function(t) {
            window.console && console.log(t)
        }, V = "", Q = "", K = function(t, e) {
            var i, n, s = (e = e || N).style;
            if (void 0 !== s[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            n = 5; --n > -1 && void 0 === s[i[n] + t]; )
                ;
            return n >= 0 ? (Q = 3 === n ? "ms" : i[n],
            V = "-" + Q.toLowerCase() + "-",
            Q + t) : null
        }, J = H.defaultView ? H.defaultView.getComputedStyle : function() {}
        , $ = r.getStyle = function(t, e, i, n, s) {
            var o;
            return W || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || J(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]),
            null == s || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : s) : U(t)
        }
        , Z = q.convertToPixels = function(t, i, n, s, o) {
            if ("px" === s || !s)
                return n;
            if ("auto" === s || !n)
                return 0;
            var a, l, c, h = A.test(i), u = t, d = N.style, p = 0 > n, f = 1 === n;
            if (p && (n = -n),
            f && (n *= 100),
            "%" === s && -1 !== i.indexOf("border"))
                a = n / 100 * (h ? t.clientWidth : t.clientHeight);
            else {
                if (d.cssText = "border:0 solid red;position:" + $(t, "position") + ";line-height:0;",
                "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s)
                    d[h ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                else {
                    if (l = (u = t.parentNode || H.body)._gsCache,
                    c = e.ticker.frame,
                    l && h && l.time === c)
                        return l.width * n / 100;
                    d[h ? "width" : "height"] = n + s
                }
                u.appendChild(N),
                a = parseFloat(N[h ? "offsetWidth" : "offsetHeight"]),
                u.removeChild(N),
                h && "%" === s && !1 !== r.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = c,
                l.width = a / n * 100),
                0 !== a || o || (a = Z(t, i, n, s, !0))
            }
            return f && (a /= 100),
            p ? -a : a
        }
        , tt = q.calculateOffset = function(t, e, i) {
            if ("absolute" !== $(t, "position", i))
                return 0;
            var n = "left" === e ? "Left" : "Top"
              , s = $(t, "margin" + n, i);
            return t["offset" + n] - (Z(t, e, parseFloat(s), s.replace(T, "")) || 0)
        }
        , et = function(t, e) {
            var i, n, s, o = {};
            if (e = e || J(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        (-1 === (s = e[i]).indexOf("-transform") || Et === s) && (o[s.replace(E, O)] = e.getPropertyValue(s));
                else
                    for (i in e)
                        (-1 === i.indexOf("Transform") || Pt === i) && (o[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === o[i] && (o[i.replace(E, O)] = e[i]);
            return W || (o.opacity = U(t)),
            n = Bt(t, e, !1),
            o.rotation = n.rotation,
            o.skewX = n.skewX,
            o.scaleX = n.scaleX,
            o.scaleY = n.scaleY,
            o.x = n.x,
            o.y = n.y,
            It && (o.z = n.z,
            o.rotationX = n.rotationX,
            o.rotationY = n.rotationY,
            o.scaleZ = n.scaleZ),
            o.filters && delete o.filters,
            o
        }, it = function(t, e, i, n, s) {
            var o, r, a, l = {}, c = t.style;
            for (r in i)
                "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || s && s[r]) && -1 === r.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(b, "") ? o : 0 : tt(t, r),
                void 0 !== c[r] && (a = new vt(c,r,c[r],a)));
            if (n)
                for (r in n)
                    "className" !== r && (l[r] = n[r]);
            return {
                difs: l,
                firstMPT: a
            }
        }, nt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, st = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ot = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
                return (i || J(t))[e] || 0;
            if (t.getBBox && Ft(t))
                return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , s = nt[e]
              , o = s.length;
            for (i = i || J(t, null); --o > -1; )
                n -= parseFloat($(t, "padding" + s[o], i, !0)) || 0,
                n -= parseFloat($(t, "border" + s[o] + "Width", i, !0)) || 0;
            return n
        }, rt = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i, n = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0], o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
            if (n.length > 3 && !e) {
                for (n = t.split(", ").join(",").split(","),
                t = [],
                i = 0; i < n.length; i++)
                    t.push(rt(n[i]));
                return t.join(",")
            }
            return null == o ? o = "center" === s ? "50%" : "0" : "center" === o && (o = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            t = s + " " + o + (n.length > 2 ? " " + n[2] : ""),
            e && (e.oxp = -1 !== s.indexOf("%"),
            e.oyp = -1 !== o.indexOf("%"),
            e.oxr = "=" === s.charAt(1),
            e.oyr = "=" === o.charAt(1),
            e.ox = parseFloat(s.replace(b, "")),
            e.oy = parseFloat(o.replace(b, "")),
            e.v = t),
            e || t
        }, at = function(t, e) {
            return "function" == typeof t && (t = t(v, m)),
            "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }, lt = function(t, e) {
            return "function" == typeof t && (t = t(v, m)),
            null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }, ct = function(t, e, i, n) {
            var s, o, r, a, l, c = 1e-6;
            return "function" == typeof t && (t = t(v, m)),
            null == t ? a = e : "number" == typeof t ? a = t : (s = 360,
            o = t.split("_"),
            r = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e),
            o.length && (n && (n[i] = e + r),
            -1 !== t.indexOf("short") && ((r %= s) !== r % 180 && (r = 0 > r ? r + s : r - s)),
            -1 !== t.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * s) % s - (r / s | 0) * s : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * s) % s - (r / s | 0) * s)),
            a = e + r),
            c > a && a > -c && (a = 0),
            a
        }, ht = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ut = function(t, e, i) {
            return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, dt = r.parseColor = function(t, e) {
            var i, n, s, o, r, a, l, c, h, u, d;
            if (t)
                if ("number" == typeof t)
                    i = [t >> 16, t >> 8 & 255, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    ht[t])
                        i = ht[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (n = t.charAt(1),
                        s = t.charAt(2),
                        o = t.charAt(3),
                        t = "#" + n + n + s + s + o + o),
                        i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (i = d = t.match(y),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match(_)
                        } else
                            r = Number(i[0]) % 360 / 360,
                            a = Number(i[1]) / 100,
                            n = 2 * (l = Number(i[2]) / 100) - (s = .5 >= l ? l * (a + 1) : l + a - l * a),
                            i.length > 3 && (i[3] = Number(t[3])),
                            i[0] = ut(r + 1 / 3, n, s),
                            i[1] = ut(r, n, s),
                            i[2] = ut(r - 1 / 3, n, s);
                    else
                        i = t.match(y) || ht.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    i.length > 3 && (i[3] = Number(i[3]))
                }
            else
                i = ht.black;
            return e && !d && (n = i[0] / 255,
            s = i[1] / 255,
            o = i[2] / 255,
            l = ((c = Math.max(n, s, o)) + (h = Math.min(n, s, o))) / 2,
            c === h ? r = a = 0 : (u = c - h,
            a = l > .5 ? u / (2 - c - h) : u / (c + h),
            r = c === n ? (s - o) / u + (o > s ? 6 : 0) : c === s ? (o - n) / u + 2 : (n - s) / u + 4,
            r *= 60),
            i[0] = r + .5 | 0,
            i[1] = 100 * a + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
        , pt = function(t, e) {
            var i, n, s, o = t.match(ft) || [], r = 0, a = o.length ? "" : t;
            for (i = 0; i < o.length; i++)
                n = o[i],
                r += (s = t.substr(r, t.indexOf(n, r) - r)).length + n.length,
                3 === (n = dt(n, e)).length && n.push(1),
                a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
            return a + t.substr(r)
        }, ft = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (c in ht)
            ft += "|" + c + "\\b";
        ft = new RegExp(ft + ")","gi"),
        r.colorStringFilter = function(t) {
            var e, i = t[0] + t[1];
            ft.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            t[0] = pt(t[0], e),
            t[1] = pt(t[1], e)),
            ft.lastIndex = 0
        }
        ,
        e.defaultStringFilter || (e.defaultStringFilter = r.colorStringFilter);
        var gt = function(t, e, i, n) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var s, o = e ? (t.match(ft) || [""])[0] : "", r = t.split(o).join("").match(w) || [], a = t.substr(0, t.indexOf(r[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", c = -1 !== t.indexOf(" ") ? " " : ",", h = r.length, u = h > 0 ? r[0].replace(y, "") : "";
            return h ? s = e ? function(t) {
                var e, d, p, f;
                if ("number" == typeof t)
                    t += u;
                else if (n && L.test(t)) {
                    for (f = t.replace(L, "|").split("|"),
                    p = 0; p < f.length; p++)
                        f[p] = s(f[p]);
                    return f.join(",")
                }
                if (e = (t.match(ft) || [o])[0],
                p = (d = t.split(e).join("").match(w) || []).length,
                h > p--)
                    for (; ++p < h; )
                        d[p] = i ? d[(p - 1) / 2 | 0] : r[p];
                return a + d.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, o, d;
                if ("number" == typeof t)
                    t += u;
                else if (n && L.test(t)) {
                    for (o = t.replace(L, "|").split("|"),
                    d = 0; d < o.length; d++)
                        o[d] = s(o[d]);
                    return o.join(",")
                }
                if (d = (e = t.match(w) || []).length,
                h > d--)
                    for (; ++d < h; )
                        e[d] = i ? e[(d - 1) / 2 | 0] : r[d];
                return a + e.join(c) + l
            }
            : function(t) {
                return t
            }
        }
          , mt = function(t) {
            return t = t.split(","),
            function(e, i, n, s, o, r, a) {
                var l, c = (i + "").split(" ");
                for (a = {},
                l = 0; 4 > l; l++)
                    a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return s.parse(e, a, o, r)
            }
        }
          , vt = (q._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, s, o, r = this.data, a = r.proxy, l = r.firstMPT, c = 1e-6; l; )
                e = a[l.v],
                l.r ? e = Math.round(e) : c > e && e > -c && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (r.autoRotate && (r.autoRotate.rotation = r.mod ? r.mod(a.rotation, this.t) : a.rotation),
            1 === t || 0 === t)
                for (l = r.firstMPT,
                o = 1 === t ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                        if (1 === i.type) {
                            for (s = i.xs0 + i.s + i.xs1,
                            n = 1; n < i.l; n++)
                                s += i["xn" + n] + i["xs" + (n + 1)];
                            i[o] = s
                        }
                    } else
                        i[o] = i.s + i.xs0;
                    l = l._next
                }
        }
        ,
        function(t, e, i, n, s) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = s,
            n && (n._prev = this,
            this._next = n)
        }
        )
          , yt = (q._parseToProxy = function(t, e, i, n, s, o) {
            var r, a, l, c, h, u = n, d = {}, p = {}, f = i._transform, g = j;
            for (i._transform = null,
            j = e,
            n = h = i.parse(t, e, n, s),
            j = g,
            o && (i._transform = f,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); n && n !== u; ) {
                if (n.type <= 1 && (p[a = n.p] = n.s + n.c,
                d[a] = n.s,
                o || (c = new vt(n,"s",a,c,n.r),
                n.c = 0),
                1 === n.type))
                    for (r = n.l; --r > 0; )
                        l = "xn" + r,
                        p[a = n.p + "_" + l] = n.data[l],
                        d[a] = n[l],
                        o || (c = new vt(n,l,a,c,n.rxp[l]));
                n = n._next
            }
            return {
                proxy: d,
                end: p,
                firstMPT: c,
                pt: h
            }
        }
        ,
        q.CSSPropTween = function(t, e, n, s, r, a, l, c, h, u, d) {
            this.t = t,
            this.p = e,
            this.s = n,
            this.c = s,
            this.n = l || e,
            t instanceof yt || o.push(this.n),
            this.r = c,
            this.type = a || 0,
            h && (this.pr = h,
            i = !0),
            this.b = void 0 === u ? n : u,
            this.e = void 0 === d ? n + s : d,
            r && (this._next = r,
            r._prev = this)
        }
        )
          , _t = function(t, e, i, n, s, o) {
            var r = new yt(t,e,i,n - i,s,-1,o);
            return r.b = i,
            r.e = r.xs0 = n,
            r
        }
          , wt = r.parseComplex = function(t, e, i, n, s, o, a, l, c, u) {
            i = i || o || "",
            "function" == typeof n && (n = n(v, m)),
            a = new yt(t,e,0,0,a,u ? 2 : 1,null,!1,l,i,n),
            n += "",
            s && ft.test(n + i) && (n = [i, n],
            r.colorStringFilter(n),
            i = n[0],
            n = n[1]);
            var d, p, f, g, w, b, T, x, S, k, C, P, E, I = i.split(", ").join(",").split(" "), O = n.split(", ").join(",").split(" "), A = I.length, M = !1 !== h;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (I = I.join(" ").replace(L, ", ").split(" "),
            O = O.join(" ").replace(L, ", ").split(" "),
            A = I.length),
            A !== O.length && (A = (I = (o || "").split(" ")).length),
            a.plugin = c,
            a.setRatio = u,
            ft.lastIndex = 0,
            d = 0; A > d; d++)
                if (g = I[d],
                w = O[d],
                (x = parseFloat(g)) || 0 === x)
                    a.appendXtra("", x, at(w, x), w.replace(_, ""), M && -1 !== w.indexOf("px"), !0);
                else if (s && ft.test(g))
                    P = ")" + ((P = w.indexOf(")") + 1) ? w.substr(P) : ""),
                    E = -1 !== w.indexOf("hsl") && W,
                    g = dt(g, E),
                    w = dt(w, E),
                    (S = g.length + w.length > 6) && !W && 0 === w[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                    a.e = a.e.split(O[d]).join("transparent")) : (W || (S = !1),
                    E ? a.appendXtra(S ? "hsla(" : "hsl(", g[0], at(w[0], g[0]), ",", !1, !0).appendXtra("", g[1], at(w[1], g[1]), "%,", !1).appendXtra("", g[2], at(w[2], g[2]), S ? "%," : "%" + P, !1) : a.appendXtra(S ? "rgba(" : "rgb(", g[0], w[0] - g[0], ",", !0, !0).appendXtra("", g[1], w[1] - g[1], ",", !0).appendXtra("", g[2], w[2] - g[2], S ? "," : P, !0),
                    S && (g = g.length < 4 ? 1 : g[3],
                    a.appendXtra("", g, (w.length < 4 ? 1 : w[3]) - g, P, !1))),
                    ft.lastIndex = 0;
                else if (b = g.match(y)) {
                    if (!(T = w.match(_)) || T.length !== b.length)
                        return a;
                    for (f = 0,
                    p = 0; p < b.length; p++)
                        C = b[p],
                        k = g.indexOf(C, f),
                        a.appendXtra(g.substr(f, k - f), Number(C), at(T[p], C), "", M && "px" === g.substr(k + C.length, 2), 0 === p),
                        f = k + C.length;
                    a["xs" + a.l] += g.substr(f)
                } else
                    a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + w : w;
            if (-1 !== n.indexOf("=") && a.data) {
                for (P = a.xs0 + a.data.s,
                d = 1; d < a.l; d++)
                    P += a["xs" + d] + a.data["xn" + d];
                a.e = P + a["xs" + d]
            }
            return a.l || (a.type = -1,
            a.xs0 = a.e),
            a.xfirst || a
        }
          , bt = 9;
        for ((c = yt.prototype).l = c.pr = 0; --bt > 0; )
            c["xn" + bt] = 0,
            c["xs" + bt] = "";
        c.xs0 = "",
        c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null,
        c.appendXtra = function(t, e, i, n, s, o) {
            var r = this
              , a = r.l;
            return r["xs" + a] += o && (a || r["xs" + a]) ? " " + t : t || "",
            i || 0 === a || r.plugin ? (r.l++,
            r.type = r.setRatio ? 2 : 1,
            r["xs" + r.l] = n || "",
            a > 0 ? (r.data["xn" + a] = e + i,
            r.rxp["xn" + a] = s,
            r["xn" + a] = e,
            r.plugin || (r.xfirst = new yt(r,"xn" + a,e,i,r.xfirst || r,0,r.n,s,r.pr),
            r.xfirst.xs0 = 0),
            r) : (r.data = {
                s: e + i
            },
            r.rxp = {},
            r.s = e,
            r.c = i,
            r.r = s,
            r)) : (r["xs" + a] += e + (n || ""),
            r)
        }
        ;
        var Tt = function(t, e) {
            e = e || {},
            this.p = e.prefix && K(t) || t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , xt = q._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var n, s, o = t.split(","), r = e.defaultValue;
            for (i = i || [r],
            n = 0; n < o.length; n++)
                e.prefix = 0 === n && e.prefix,
                e.defaultValue = i[n] || r,
                s = new Tt(o[n],e)
        }
          , St = q._registerPluginProp = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                xt(t, {
                    parser: function(t, i, n, s, o, r, c) {
                        var h = a.com.greensock.plugins[e];
                        return h ? (h._cssRegister(),
                        l[n].parse(t, i, n, s, o, r, c)) : (G("Error: " + e + " js file not loaded."),
                        o)
                    }
                })
            }
        }
        ;
        (c = Tt.prototype).parseComplex = function(t, e, i, n, s, o) {
            var r, a, l, c, h, u, d = this.keyword;
            if (this.multi && (L.test(i) || L.test(e) ? (a = e.replace(L, "|").split("|"),
            l = i.replace(L, "|").split("|")) : d && (a = [e],
            l = [i])),
            l) {
                for (c = l.length > a.length ? l.length : a.length,
                r = 0; c > r; r++)
                    e = a[r] = a[r] || this.dflt,
                    i = l[r] = l[r] || this.dflt,
                    d && ((h = e.indexOf(d)) !== (u = i.indexOf(d)) && (-1 === u ? a[r] = a[r].split(d).join("") : -1 === h && (a[r] += " " + d)));
                e = a.join(", "),
                i = l.join(", ")
            }
            return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, o)
        }
        ,
        c.parse = function(t, e, i, n, o, r, a) {
            return this.parseComplex(t.style, this.format($(t, this.p, s, !1, this.dflt)), this.format(e), o, r)
        }
        ,
        r.registerSpecialProp = function(t, e, i) {
            xt(t, {
                parser: function(t, n, s, o, r, a, l) {
                    var c = new yt(t,s,0,0,r,2,s,!1,i);
                    return c.plugin = a,
                    c.setRatio = e(t, n, o._tween, s),
                    c
                },
                priority: i
            })
        }
        ,
        r.useSVGTransformAttr = d || p;
        var kt, Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Pt = K("transform"), Et = V + "transform", $t = K("transformOrigin"), It = null !== K("perspective"), Ot = q.Transform = function() {
            this.perspective = parseFloat(r.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === r.defaultForce3D || !It) && (r.defaultForce3D || "auto")
        }
        , At = window.SVGElement, Mt = function(t, e, i) {
            var n, s = H.createElementNS("http://www.w3.org/2000/svg", t), o = /([a-z])([A-Z])/g;
            for (n in i)
                s.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(s),
            s
        }, zt = H.documentElement, Lt = function() {
            var t, e, i, n = g || /Android/i.test(Y) && !window.chrome;
            return H.createElementNS && !n && (t = Mt("svg", zt),
            i = (e = Mt("rect", t, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width,
            e.style[$t] = "50% 50%",
            e.style[Pt] = "scaleX(0.5)",
            n = i === e.getBoundingClientRect().width && !(p && It),
            zt.removeChild(t)),
            n
        }(), Rt = function(t, e, i, n, s, o) {
            var a, l, c, h, u, d, p, f, g, m, v, y, _, w, b = t._gsTransform, T = Ht(t, !0);
            b && (_ = b.xOrigin,
            w = b.yOrigin),
            (!n || (a = n.split(" ")).length < 2) && (p = t.getBBox(),
            a = [(-1 !== (e = rt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]),
            i.xOrigin = h = parseFloat(a[0]),
            i.yOrigin = u = parseFloat(a[1]),
            n && T !== jt && (d = T[0],
            p = T[1],
            f = T[2],
            g = T[3],
            m = T[4],
            l = h * (g / (y = d * g - p * f)) + u * (-f / y) + (f * (v = T[5]) - g * m) / y,
            c = h * (-p / y) + u * (d / y) - (d * v - p * m) / y,
            h = i.xOrigin = a[0] = l,
            u = i.yOrigin = a[1] = c),
            b && (o && (i.xOffset = b.xOffset,
            i.yOffset = b.yOffset,
            b = i),
            s || !1 !== s && !1 !== r.defaultSmoothOrigin ? (l = h - _,
            c = u - w,
            b.xOffset += l * T[0] + c * T[2] - l,
            b.yOffset += l * T[1] + c * T[3] - c) : b.xOffset = b.yOffset = 0),
            o || t.setAttribute("data-svg-origin", a.join(" "))
        }, Dt = function(t) {
            try {
                return t.getBBox()
            } catch (t) {}
        }, Ft = function(t) {
            return !!(At && t.getBBox && t.getCTM && Dt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, jt = [1, 0, 0, 1, 0, 0], Ht = function(t, e) {
            var i, n, s, o, r, a, l = t._gsTransform || new Ot, c = 1e5, h = t.style;
            if (Pt ? n = $(t, Et, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(M)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
            (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n) && Pt && ((a = "none" === J(t).display) || !t.parentNode) && (a && (o = h.display,
            h.display = "block"),
            t.parentNode || (r = 1,
            zt.appendChild(t)),
            i = !(n = $(t, Et, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
            o ? h.display = o : a && Yt(h, "display"),
            r && zt.removeChild(t)),
            (l.svg || t.getBBox && Ft(t)) && (i && -1 !== (h[Pt] + "").indexOf("matrix") && (n = h[Pt],
            i = 0),
            s = t.getAttribute("transform"),
            i && s && (-1 !== s.indexOf("matrix") ? (n = s,
            i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            i = 0))),
            i)
                return jt;
            for (s = (n || "").match(y) || [],
            bt = s.length; --bt > -1; )
                o = Number(s[bt]),
                s[bt] = (r = o - (o |= 0)) ? (r * c + (0 > r ? -.5 : .5) | 0) / c + o : o;
            return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
        }, Bt = q.getTransform = function(t, i, n, s) {
            if (t._gsTransform && n && !s)
                return t._gsTransform;
            var o, a, l, c, h, u, d = n && t._gsTransform || new Ot, p = d.scaleX < 0, f = 2e-5, g = 1e5, m = It && (parseFloat($(t, $t, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin) || 0, v = parseFloat(r.defaultTransformPerspective) || 0;
            if (d.svg = !(!t.getBBox || !Ft(t)),
            d.svg && (Rt(t, $(t, $t, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")),
            kt = r.useSVGTransformAttr || Lt),
            (o = Ht(t)) !== jt) {
                if (16 === o.length) {
                    var y, _, w, b, T, x = o[0], S = o[1], k = o[2], C = o[3], P = o[4], E = o[5], I = o[6], O = o[7], A = o[8], M = o[9], z = o[10], L = o[12], R = o[13], D = o[14], j = o[11], H = Math.atan2(I, z);
                    d.zOrigin && (L = A * (D = -d.zOrigin) - o[12],
                    R = M * D - o[13],
                    D = z * D + d.zOrigin - o[14]),
                    d.rotationX = H * F,
                    H && (y = P * (b = Math.cos(-H)) + A * (T = Math.sin(-H)),
                    _ = E * b + M * T,
                    w = I * b + z * T,
                    A = P * -T + A * b,
                    M = E * -T + M * b,
                    z = I * -T + z * b,
                    j = O * -T + j * b,
                    P = y,
                    E = _,
                    I = w),
                    H = Math.atan2(-k, z),
                    d.rotationY = H * F,
                    H && (_ = S * (b = Math.cos(-H)) - M * (T = Math.sin(-H)),
                    w = k * b - z * T,
                    M = S * T + M * b,
                    z = k * T + z * b,
                    j = C * T + j * b,
                    x = y = x * b - A * T,
                    S = _,
                    k = w),
                    H = Math.atan2(S, x),
                    d.rotation = H * F,
                    H && (x = x * (b = Math.cos(-H)) + P * (T = Math.sin(-H)),
                    _ = S * b + E * T,
                    E = S * -T + E * b,
                    I = k * -T + I * b,
                    S = _),
                    d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0,
                    d.rotationY = 180 - d.rotationY),
                    d.scaleX = (Math.sqrt(x * x + S * S) * g + .5 | 0) / g,
                    d.scaleY = (Math.sqrt(E * E + M * M) * g + .5 | 0) / g,
                    d.scaleZ = (Math.sqrt(I * I + z * z) * g + .5 | 0) / g,
                    d.rotationX || d.rotationY ? d.skewX = 0 : (d.skewX = P || E ? Math.atan2(P, E) * F + d.rotation : d.skewX || 0,
                    Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (p ? (d.scaleX *= -1,
                    d.skewX += d.rotation <= 0 ? 180 : -180,
                    d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1,
                    d.skewX += d.skewX <= 0 ? 180 : -180))),
                    d.perspective = j ? 1 / (0 > j ? -j : j) : 0,
                    d.x = L,
                    d.y = R,
                    d.z = D,
                    d.svg && (d.x -= d.xOrigin - (d.xOrigin * x - d.yOrigin * P),
                    d.y -= d.yOrigin - (d.yOrigin * S - d.xOrigin * E))
                } else if (!It || s || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) {
                    var B = o.length >= 6
                      , N = B ? o[0] : 1
                      , X = o[1] || 0
                      , q = o[2] || 0
                      , Y = B ? o[3] : 1;
                    d.x = o[4] || 0,
                    d.y = o[5] || 0,
                    l = Math.sqrt(N * N + X * X),
                    c = Math.sqrt(Y * Y + q * q),
                    h = N || X ? Math.atan2(X, N) * F : d.rotation || 0,
                    u = q || Y ? Math.atan2(q, Y) * F + h : d.skewX || 0,
                    Math.abs(u) > 90 && Math.abs(u) < 270 && (p ? (l *= -1,
                    u += 0 >= h ? 180 : -180,
                    h += 0 >= h ? 180 : -180) : (c *= -1,
                    u += 0 >= u ? 180 : -180)),
                    d.scaleX = l,
                    d.scaleY = c,
                    d.rotation = h,
                    d.skewX = u,
                    It && (d.rotationX = d.rotationY = d.z = 0,
                    d.perspective = v,
                    d.scaleZ = 1),
                    d.svg && (d.x -= d.xOrigin - (d.xOrigin * N + d.yOrigin * q),
                    d.y -= d.yOrigin - (d.xOrigin * X + d.yOrigin * Y))
                }
                for (a in d.zOrigin = m,
                d)
                    d[a] < f && d[a] > -f && (d[a] = 0)
            }
            return n && (t._gsTransform = d,
            d.svg && (kt && t.style[Pt] ? e.delayedCall(.001, (function() {
                Yt(t.style, Pt)
            }
            )) : !kt && t.getAttribute("transform") && e.delayedCall(.001, (function() {
                t.removeAttribute("transform")
            }
            )))),
            d
        }
        , Nt = function(t) {
            var e, i, n = this.data, s = -n.rotation * D, o = s + n.skewX * D, r = 1e5, a = (Math.cos(s) * n.scaleX * r | 0) / r, l = (Math.sin(s) * n.scaleX * r | 0) / r, c = (Math.sin(o) * -n.scaleY * r | 0) / r, h = (Math.cos(o) * n.scaleY * r | 0) / r, u = this.t.style, d = this.t.currentStyle;
            if (d) {
                i = l,
                l = -c,
                c = -i,
                e = d.filter,
                u.filter = "";
                var p, f, m = this.t.offsetWidth, v = this.t.offsetHeight, y = "absolute" !== d.position, _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + h, w = n.x + m * n.xPercent / 100, b = n.y + v * n.yPercent / 100;
                if (null != n.ox && (w += (p = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (p * a + (f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2) * l),
                b += f - (p * c + f * h)),
                y ? _ += ", Dx=" + ((p = m / 2) - (p * a + (f = v / 2) * l) + w) + ", Dy=" + (f - (p * c + f * h) + b) + ")" : _ += ", sizingMethod='auto expand')",
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(z, _) : u.filter = _ + " " + e,
                (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === h && (y && -1 === _.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")),
                !y) {
                    var S, k, C, P = 8 > g ? 1 : -1;
                    for (p = n.ieOffsetX || 0,
                    f = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + w),
                    n.ieOffsetY = Math.round((v - ((0 > h ? -h : h) * v + (0 > c ? -c : c) * m)) / 2 + b),
                    bt = 0; 4 > bt; bt++)
                        C = (i = -1 !== (S = d[k = st[bt]]).indexOf("px") ? parseFloat(S) : Z(this.t, k, parseFloat(S), S.replace(T, "")) || 0) !== n[k] ? 2 > bt ? -n.ieOffsetX : -n.ieOffsetY : 2 > bt ? p - n.ieOffsetX : f - n.ieOffsetY,
                        u[k] = (n[k] = Math.round(i - C * (0 === bt || 2 === bt ? 1 : P))) + "px"
                }
            }
        }, Xt = q.set3DTransformRatio = q.setTransformRatio = function(t) {
            var e, i, n, s, o, r, a, l, c, h, u, d, f, g, m, v, y, _, w, b, T, x, S, k = this.data, C = this.t.style, P = k.rotation, E = k.rotationX, I = k.rotationY, O = k.scaleX, A = k.scaleY, M = k.scaleZ, z = k.x, L = k.y, R = k.z, F = k.svg, j = k.perspective, H = k.force3D;
            if (!((1 !== t && 0 !== t || "auto" !== H || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && H || R || j || I || E || 1 !== M) || kt && F || !It)
                P || k.skewX || F ? (P *= D,
                x = k.skewX * D,
                S = 1e5,
                e = Math.cos(P) * O,
                s = Math.sin(P) * O,
                i = Math.sin(P - x) * -A,
                o = Math.cos(P - x) * A,
                x && "simple" === k.skewType && (y = Math.tan(x - k.skewY * D),
                i *= y = Math.sqrt(1 + y * y),
                o *= y,
                k.skewY && (y = Math.tan(k.skewY * D),
                e *= y = Math.sqrt(1 + y * y),
                s *= y)),
                F && (z += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset,
                L += k.yOrigin - (k.xOrigin * s + k.yOrigin * o) + k.yOffset,
                kt && (k.xPercent || k.yPercent) && (g = this.t.getBBox(),
                z += .01 * k.xPercent * g.width,
                L += .01 * k.yPercent * g.height),
                (g = 1e-6) > z && z > -g && (z = 0),
                g > L && L > -g && (L = 0)),
                w = (e * S | 0) / S + "," + (s * S | 0) / S + "," + (i * S | 0) / S + "," + (o * S | 0) / S + "," + z + "," + L + ")",
                F && kt ? this.t.setAttribute("transform", "matrix(" + w) : C[Pt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + w) : C[Pt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + A + "," + z + "," + L + ")";
            else {
                if (p && ((g = 1e-4) > O && O > -g && (O = M = 2e-5),
                g > A && A > -g && (A = M = 2e-5),
                !j || k.z || k.rotationX || k.rotationY || (j = 0)),
                P || k.skewX)
                    P *= D,
                    m = e = Math.cos(P),
                    v = s = Math.sin(P),
                    k.skewX && (P -= k.skewX * D,
                    m = Math.cos(P),
                    v = Math.sin(P),
                    "simple" === k.skewType && (y = Math.tan((k.skewX - k.skewY) * D),
                    m *= y = Math.sqrt(1 + y * y),
                    v *= y,
                    k.skewY && (y = Math.tan(k.skewY * D),
                    e *= y = Math.sqrt(1 + y * y),
                    s *= y))),
                    i = -v,
                    o = m;
                else {
                    if (!(I || E || 1 !== M || j || F))
                        return void (C[Pt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + z + "px," + L + "px," + R + "px)" + (1 !== O || 1 !== A ? " scale(" + O + "," + A + ")" : ""));
                    e = o = 1,
                    i = s = 0
                }
                c = 1,
                n = r = a = l = h = u = 0,
                d = j ? -1 / j : 0,
                f = k.zOrigin,
                g = 1e-6,
                b = ",",
                T = "0",
                (P = I * D) && (m = Math.cos(P),
                a = -(v = Math.sin(P)),
                h = d * -v,
                n = e * v,
                r = s * v,
                c = m,
                d *= m,
                e *= m,
                s *= m),
                (P = E * D) && (y = i * (m = Math.cos(P)) + n * (v = Math.sin(P)),
                _ = o * m + r * v,
                l = c * v,
                u = d * v,
                n = i * -v + n * m,
                r = o * -v + r * m,
                c *= m,
                d *= m,
                i = y,
                o = _),
                1 !== M && (n *= M,
                r *= M,
                c *= M,
                d *= M),
                1 !== A && (i *= A,
                o *= A,
                l *= A,
                u *= A),
                1 !== O && (e *= O,
                s *= O,
                a *= O,
                h *= O),
                (f || F) && (f && (z += n * -f,
                L += r * -f,
                R += c * -f + f),
                F && (z += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset,
                L += k.yOrigin - (k.xOrigin * s + k.yOrigin * o) + k.yOffset),
                g > z && z > -g && (z = T),
                g > L && L > -g && (L = T),
                g > R && R > -g && (R = 0)),
                w = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(",
                w += (g > e && e > -g ? T : e) + b + (g > s && s > -g ? T : s) + b + (g > a && a > -g ? T : a),
                w += b + (g > h && h > -g ? T : h) + b + (g > i && i > -g ? T : i) + b + (g > o && o > -g ? T : o),
                E || I || 1 !== M ? (w += b + (g > l && l > -g ? T : l) + b + (g > u && u > -g ? T : u) + b + (g > n && n > -g ? T : n),
                w += b + (g > r && r > -g ? T : r) + b + (g > c && c > -g ? T : c) + b + (g > d && d > -g ? T : d) + b) : w += ",0,0,0,0,1,0,",
                w += z + b + L + b + R + b + (j ? 1 + -R / j : 1) + ")",
                C[Pt] = w
            }
        }
        ;
        (c = Ot.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0,
        c.scaleX = c.scaleY = c.scaleZ = 1,
        xt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, n, o, a, l) {
                if (n._lastParsedTransform === l)
                    return o;
                var c;
                n._lastParsedTransform = l,
                "function" == typeof l[i] && (c = l[i],
                l[i] = e);
                var h, u, d, p, f, g, y, _, w, b = t._gsTransform, T = t.style, x = 1e-6, S = Ct.length, k = l, C = {}, P = "transformOrigin", E = Bt(t, s, !0, k.parseTransform), I = k.transform && ("function" == typeof k.transform ? k.transform(v, m) : k.transform);
                if (n._transform = E,
                I && "string" == typeof I && Pt)
                    (u = N.style)[Pt] = I,
                    u.display = "block",
                    u.position = "absolute",
                    H.body.appendChild(N),
                    h = Bt(N, null, !1),
                    E.svg && (g = E.xOrigin,
                    y = E.yOrigin,
                    h.x -= E.xOffset,
                    h.y -= E.yOffset,
                    (k.transformOrigin || k.svgOrigin) && (I = {},
                    Rt(t, rt(k.transformOrigin), I, k.svgOrigin, k.smoothOrigin, !0),
                    g = I.xOrigin,
                    y = I.yOrigin,
                    h.x -= I.xOffset - E.xOffset,
                    h.y -= I.yOffset - E.yOffset),
                    (g || y) && (_ = Ht(N, !0),
                    h.x -= g - (g * _[0] + y * _[2]),
                    h.y -= y - (g * _[1] + y * _[3]))),
                    H.body.removeChild(N),
                    h.perspective || (h.perspective = E.perspective),
                    null != k.xPercent && (h.xPercent = lt(k.xPercent, E.xPercent)),
                    null != k.yPercent && (h.yPercent = lt(k.yPercent, E.yPercent));
                else if ("object" == typeof k) {
                    if (h = {
                        scaleX: lt(null != k.scaleX ? k.scaleX : k.scale, E.scaleX),
                        scaleY: lt(null != k.scaleY ? k.scaleY : k.scale, E.scaleY),
                        scaleZ: lt(k.scaleZ, E.scaleZ),
                        x: lt(k.x, E.x),
                        y: lt(k.y, E.y),
                        z: lt(k.z, E.z),
                        xPercent: lt(k.xPercent, E.xPercent),
                        yPercent: lt(k.yPercent, E.yPercent),
                        perspective: lt(k.transformPerspective, E.perspective)
                    },
                    null != (f = k.directionalRotation))
                        if ("object" == typeof f)
                            for (u in f)
                                k[u] = f[u];
                        else
                            k.rotation = f;
                    "string" == typeof k.x && -1 !== k.x.indexOf("%") && (h.x = 0,
                    h.xPercent = lt(k.x, E.xPercent)),
                    "string" == typeof k.y && -1 !== k.y.indexOf("%") && (h.y = 0,
                    h.yPercent = lt(k.y, E.yPercent)),
                    h.rotation = ct("rotation"in k ? k.rotation : "shortRotation"in k ? k.shortRotation + "_short" : "rotationZ"in k ? k.rotationZ : E.rotation - E.skewY, E.rotation - E.skewY, "rotation", C),
                    It && (h.rotationX = ct("rotationX"in k ? k.rotationX : "shortRotationX"in k ? k.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", C),
                    h.rotationY = ct("rotationY"in k ? k.rotationY : "shortRotationY"in k ? k.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", C)),
                    h.skewX = ct(k.skewX, E.skewX - E.skewY),
                    (h.skewY = ct(k.skewY, E.skewY)) && (h.skewX += h.skewY,
                    h.rotation += h.skewY)
                }
                for (It && null != k.force3D && (E.force3D = k.force3D,
                p = !0),
                E.skewType = k.skewType || E.skewType || r.defaultSkewType,
                (d = E.force3D || E.z || E.rotationX || E.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == k.scale || (h.scaleZ = 1); --S > -1; )
                    ((I = h[w = Ct[S]] - E[w]) > x || -x > I || null != k[w] || null != j[w]) && (p = !0,
                    o = new yt(E,w,E[w],I,o),
                    w in C && (o.e = C[w]),
                    o.xs0 = 0,
                    o.plugin = a,
                    n._overwriteProps.push(o.n));
                return I = k.transformOrigin,
                E.svg && (I || k.svgOrigin) && (g = E.xOffset,
                y = E.yOffset,
                Rt(t, rt(I), h, k.svgOrigin, k.smoothOrigin),
                o = _t(E, "xOrigin", (b ? E : h).xOrigin, h.xOrigin, o, P),
                o = _t(E, "yOrigin", (b ? E : h).yOrigin, h.yOrigin, o, P),
                (g !== E.xOffset || y !== E.yOffset) && (o = _t(E, "xOffset", b ? g : E.xOffset, E.xOffset, o, P),
                o = _t(E, "yOffset", b ? y : E.yOffset, E.yOffset, o, P)),
                I = kt ? null : "0px 0px"),
                (I || It && d && E.zOrigin) && (Pt ? (p = !0,
                w = $t,
                I = (I || $(t, w, s, !1, "50% 50%")) + "",
                (o = new yt(T,w,0,0,o,-1,P)).b = T[w],
                o.plugin = a,
                It ? (u = E.zOrigin,
                I = I.split(" "),
                E.zOrigin = (I.length > 2 && (0 === u || "0px" !== I[2]) ? parseFloat(I[2]) : u) || 0,
                o.xs0 = o.e = I[0] + " " + (I[1] || "50%") + " 0px",
                (o = new yt(E,"zOrigin",0,0,o,-1,o.n)).b = u,
                o.xs0 = o.e = E.zOrigin) : o.xs0 = o.e = I) : rt(I + "", E)),
                p && (n._transformType = E.svg && kt || !d && 3 !== this._transformType ? 2 : 3),
                c && (l[i] = c),
                o
            },
            prefix: !0
        }),
        xt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        xt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, o, r, a) {
                e = this.format(e);
                var l, c, h, u, d, p, f, g, m, v, y, _, w, b, T, x, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], k = t.style;
                for (m = parseFloat(t.offsetWidth),
                v = parseFloat(t.offsetHeight),
                l = e.split(" "),
                c = 0; c < S.length; c++)
                    this.p.indexOf("border") && (S[c] = K(S[c])),
                    -1 !== (d = u = $(t, S[c], s, !1, "0px")).indexOf(" ") && (u = d.split(" "),
                    d = u[0],
                    u = u[1]),
                    p = h = l[c],
                    f = parseFloat(d),
                    _ = d.substr((f + "").length),
                    (w = "=" === p.charAt(1)) ? (g = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    g *= parseFloat(p),
                    y = p.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(p),
                    y = p.substr((g + "").length)),
                    "" === y && (y = n[i] || _),
                    y !== _ && (b = Z(t, "borderLeft", f, _),
                    T = Z(t, "borderTop", f, _),
                    "%" === y ? (d = b / m * 100 + "%",
                    u = T / v * 100 + "%") : "em" === y ? (d = b / (x = Z(t, "borderLeft", 1, "em")) + "em",
                    u = T / x + "em") : (d = b + "px",
                    u = T + "px"),
                    w && (p = parseFloat(d) + g + y,
                    h = parseFloat(u) + g + y)),
                    r = wt(k, S[c], d + " " + u, p + " " + h, !1, "0px", r);
                return r
            },
            prefix: !0,
            formatter: gt("0px 0px 0px 0px", !1, !0)
        }),
        xt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, o, r) {
                return wt(t.style, i, this.format($(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", o)
            },
            prefix: !0,
            formatter: gt("0px 0px", !1, !0)
        }),
        xt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, o, r) {
                var a, l, c, h, u, d, p = "background-position", f = s || J(t, null), m = this.format((f ? g ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), v = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && ((d = $(t, "backgroundImage").replace(I, "")) && "none" !== d)) {
                    for (a = m.split(" "),
                    l = v.split(" "),
                    X.setAttribute("src", d),
                    c = 2; --c > -1; )
                        (h = -1 !== (m = a[c]).indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (u = 0 === c ? t.offsetWidth - X.width : t.offsetHeight - X.height,
                        a[c] = h ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                    m = a.join(" ")
                }
                return this.parseComplex(t.style, m, v, o, r)
            },
            formatter: rt
        }),
        xt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return rt(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
            }
        }),
        xt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        xt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        xt("transformStyle", {
            prefix: !0
        }),
        xt("backfaceVisibility", {
            prefix: !0
        }),
        xt("userSelect", {
            prefix: !0
        }),
        xt("margin", {
            parser: mt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        xt("padding", {
            parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        xt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, o, r) {
                var a, l, c;
                return 9 > g ? (l = t.currentStyle,
                c = 8 > g ? " " : ",",
                a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")",
                e = this.format(e).split(",").join(c)) : (a = this.format($(t, this.p, s, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, a, e, o, r)
            }
        }),
        xt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        xt("autoRound,strictUnits", {
            parser: function(t, e, i, n, s) {
                return s
            }
        }),
        xt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, o, r) {
                var a = $(t, "borderTopWidth", s, !1, "0px")
                  , l = this.format(e).split(" ")
                  , c = l[0].replace(T, "");
                return "px" !== c && (a = parseFloat(a) / Z(t, "borderTopWidth", 1, c) + c),
                this.parseComplex(t.style, this.format(a + " " + $(t, "borderTopStyle", s, !1, "solid") + " " + $(t, "borderTopColor", s, !1, "#000")), l.join(" "), o, r)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ft) || ["#000"])[0]
            }
        }),
        xt("borderWidth", {
            parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        xt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, s, o) {
                var r = t.style
                  , a = "cssFloat"in r ? "cssFloat" : "styleFloat";
                return new yt(r,a,0,0,s,-1,i,!1,0,r[a],e)
            }
        });
        var qt = function(t) {
            var e, i = this.t, n = i.filter || $(this.data, "filter") || "", s = this.s + this.c * t | 0;
            100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !$(this.data, "filter")) : (i.filter = n.replace(k, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"),
            -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(x, "opacity=" + s))
        };
        xt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, o, r) {
                var a = parseFloat($(t, "opacity", s, !1, "1"))
                  , l = t.style
                  , c = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                c && 1 === a && "hidden" === $(t, "visibility", s) && 0 !== e && (a = 0),
                W ? o = new yt(l,"opacity",a,e - a,o) : ((o = new yt(l,"opacity",100 * a,100 * (e - a),o)).xn1 = c ? 1 : 0,
                l.zoom = 1,
                o.type = 2,
                o.b = "alpha(opacity=" + o.s + ")",
                o.e = "alpha(opacity=" + (o.s + o.c) + ")",
                o.data = t,
                o.plugin = r,
                o.setRatio = qt),
                c && ((o = new yt(l,"visibility",0,0,o,-1,null,!1,0,0 !== a ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                n._overwriteProps.push(o.n),
                n._overwriteProps.push(i)),
                o
            }
        });
        var Yt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , Wt = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Yt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        xt("className", {
            parser: function(t, e, n, o, r, a, l) {
                var c, h, u, d, p, f = t.getAttribute("class") || "", g = t.style.cssText;
                if ((r = o._classNamePT = new yt(t,n,0,0,r,2)).setRatio = Wt,
                r.pr = -11,
                i = !0,
                r.b = f,
                h = et(t, s),
                u = t._gsClassPT) {
                    for (d = {},
                    p = u.data; p; )
                        d[p.p] = 1,
                        p = p._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = r,
                r.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", r.e),
                c = it(t, h, et(t), l, d),
                t.setAttribute("class", f),
                r.data = c.firstMPT,
                t.style.cssText = g,
                r = r.xfirst = o.parse(t, c.difs, r, a)
            }
        });
        var Ut = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, s, o, r = this.t.style, a = l.transform.parse;
                if ("all" === this.e)
                    r.cssText = "",
                    s = !0;
                else
                    for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1; )
                        i = e[n],
                        l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? $t : l[i].p),
                        Yt(r, i);
                s && (Yt(r, Pt),
                (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (xt("clearProps", {
            parser: function(t, e, n, s, o) {
                return (o = new yt(t,n,0,0,o,2)).setRatio = Ut,
                o.e = e,
                o.pr = -10,
                o.data = s._tween,
                i = !0,
                o
            }
        }),
        c = "bezier,throwProps,physicsProps,physics2D".split(","),
        bt = c.length; bt--; )
            St(c[bt]);
        (c = r.prototype)._firstPT = c._lastParsedTransform = c._transform = null,
        c._onInitTween = function(t, e, a, c) {
            if (!t.nodeType)
                return !1;
            this._target = m = t,
            this._tween = a,
            this._vars = e,
            v = c,
            h = e.autoRound,
            i = !1,
            n = e.suffixMap || r.suffixMap,
            s = J(t, ""),
            o = this._overwriteProps;
            var p, g, y, _, w, b, T, x, k, C = t.style;
            if (u && "" === C.zIndex && (("auto" === (p = $(t, "zIndex", s)) || "" === p) && this._addLazySet(C, "zIndex", 0)),
            "string" == typeof e && (_ = C.cssText,
            p = et(t, s),
            C.cssText = _ + ";" + e,
            p = it(t, p, et(t)).difs,
            !W && S.test(e) && (p.opacity = parseFloat(RegExp.$1)),
            e = p,
            C.cssText = _),
            e.className ? this._firstPT = g = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = g = this.parse(t, e, null),
            this._transformType) {
                for (k = 3 === this._transformType,
                Pt ? d && (u = !0,
                "" === C.zIndex && (("auto" === (T = $(t, "zIndex", s)) || "" === T) && this._addLazySet(C, "zIndex", 0)),
                f && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : C.zoom = 1,
                y = g; y && y._next; )
                    y = y._next;
                x = new yt(t,"transform",0,0,null,2),
                this._linkCSSP(x, null, y),
                x.setRatio = Pt ? Xt : Nt,
                x.data = this._transform || Bt(t, s, !0),
                x.tween = a,
                x.pr = -1,
                o.pop()
            }
            if (i) {
                for (; g; ) {
                    for (b = g._next,
                    y = _; y && y.pr > g.pr; )
                        y = y._next;
                    (g._prev = y ? y._prev : w) ? g._prev._next = g : _ = g,
                    (g._next = y) ? y._prev = g : w = g,
                    g = b
                }
                this._firstPT = _
            }
            return !0
        }
        ,
        c.parse = function(t, e, i, o) {
            var r, a, c, u, d, p, f, g, y, _, w = t.style;
            for (r in e)
                "function" == typeof (p = e[r]) && (p = p(v, m)),
                (a = l[r]) ? i = a.parse(t, p, r, this, i, o, e) : (d = $(t, r, s) + "",
                y = "string" == typeof p,
                "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || y && C.test(p) ? (y || (p = ((p = dt(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"),
                i = wt(w, r, d, p, !0, "transparent", i, 0, o)) : y && R.test(p) ? i = wt(w, r, d, p, !0, null, i, 0, o) : (f = (c = parseFloat(d)) || 0 === c ? d.substr((c + "").length) : "",
                ("" === d || "auto" === d) && ("width" === r || "height" === r ? (c = ot(t, r, s),
                f = "px") : "left" === r || "top" === r ? (c = tt(t, r, s),
                f = "px") : (c = "opacity" !== r ? 0 : 1,
                f = "")),
                (_ = y && "=" === p.charAt(1)) ? (u = parseInt(p.charAt(0) + "1", 10),
                p = p.substr(2),
                u *= parseFloat(p),
                g = p.replace(T, "")) : (u = parseFloat(p),
                g = y ? p.replace(T, "") : ""),
                "" === g && (g = r in n ? n[r] : f),
                p = u || 0 === u ? (_ ? u + c : u) + g : e[r],
                f !== g && "" !== g && (u || 0 === u) && c && (c = Z(t, r, c, f),
                "%" === g ? (c /= Z(t, r, 100, "%") / 100,
                !0 !== e.strictUnits && (d = c + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? c /= Z(t, r, 1, g) : "px" !== g && (u = Z(t, r, u, g),
                g = "px"),
                _ && (u || 0 === u) && (p = u + c + g)),
                _ && (u += c),
                !c && 0 !== c || !u && 0 !== u ? void 0 !== w[r] && (p || p + "" != "NaN" && null != p) ? (i = new yt(w,r,u || c || 0,0,i,-1,r,!1,0,d,p)).xs0 = "none" !== p || "display" !== r && -1 === r.indexOf("Style") ? p : d : G("invalid " + r + " tween value: " + e[r]) : (i = new yt(w,r,c,u - c,i,0,r,!1 !== h && ("px" === g || "zIndex" === r),0,d,p)).xs0 = g)),
                o && i && !i.plugin && (i.plugin = o);
            return i
        }
        ,
        c.setRatio = function(t) {
            var e, i, n, s = this._firstPT, o = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; s; ) {
                        if (e = s.c * t + s.s,
                        s.r ? e = Math.round(e) : o > e && e > -o && (e = 0),
                        s.type)
                            if (1 === s.type)
                                if (2 === (n = s.l))
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                else if (3 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1,
                                    n = 1; n < s.l; n++)
                                        i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                }
                            else
                                -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                        else
                            s.t[s.p] = e + s.xs0;
                        s = s._next
                    }
                else
                    for (; s; )
                        2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t),
                        s = s._next;
            else
                for (; s; ) {
                    if (2 !== s.type)
                        if (s.r && -1 !== s.type)
                            if (e = Math.round(s.s + s.c),
                            s.type) {
                                if (1 === s.type) {
                                    for (n = s.l,
                                    i = s.xs0 + e + s.xs1,
                                    n = 1; n < s.l; n++)
                                        i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                }
                            } else
                                s.t[s.p] = e + s.xs0;
                        else
                            s.t[s.p] = s.e;
                    else
                        s.setRatio(t);
                    s = s._next
                }
        }
        ,
        c._enableTransforms = function(t) {
            this._transform = this._transform || Bt(this._target, s, !0),
            this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Gt = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function(t, e, i) {
            var n = this._firstPT = new yt(t,e,0,0,this._firstPT,2);
            n.e = i,
            n.setRatio = Gt,
            n.data = this
        }
        ,
        c._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            n = !0),
            i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        c._mod = function(t) {
            for (var e = this._firstPT; e; )
                "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
                e = e._next
        }
        ,
        c._kill = function(e) {
            var i, n, s, o = e;
            if (e.autoAlpha || e.alpha) {
                for (n in o = {},
                e)
                    o[n] = e[n];
                o.opacity = 1,
                o.autoAlpha && (o.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, s._prev),
            this._classNamePT = null),
            i = this._firstPT; i; )
                i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e),
                n = i.plugin),
                i = i._next;
            return t.prototype._kill.call(this, o)
        }
        ;
        var Vt = function(t, e, i) {
            var n, s, o, r;
            if (t.slice)
                for (s = t.length; --s > -1; )
                    Vt(t[s], e, i);
            else
                for (s = (n = t.childNodes).length; --s > -1; )
                    r = (o = n[s]).type,
                    o.style && (e.push(et(o)),
                    i && i.push(o)),
                    1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || Vt(o, e, i)
        };
        return r.cascadeTo = function(t, i, n) {
            var s, o, r, a, l = e.to(t, i, n), c = [l], h = [], u = [], d = [], p = e._internals.reservedProps;
            for (t = l._targets || l.target,
            Vt(t, h, d),
            l.render(i, !0, !0),
            Vt(t, u),
            l.render(0, !0, !0),
            l._enabled(!0),
            s = d.length; --s > -1; )
                if ((o = it(d[s], h[s], u[s])).firstMPT) {
                    for (r in o = o.difs,
                    n)
                        p[r] && (o[r] = n[r]);
                    for (r in a = {},
                    o)
                        a[r] = h[s][r];
                    c.push(e.fromTo(d[s], i, a, o))
                }
            return c
        }
        ,
        t.activate([r]),
        r
    }
    ), !0),
    t = _gsScope._gsDefine.plugin({
        propName: "roundProps",
        version: "1.6.0",
        priority: -1,
        API: 2,
        init: function(t, e, i) {
            return this._tween = i,
            !0
        }
    }),
    e = function(t) {
        for (; t; )
            t.f || t.blob || (t.m = Math.round),
            t = t._next
    }
    ,
    (i = t.prototype)._onInitAllProps = function() {
        for (var t, i, n, s = this._tween, o = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), r = o.length, a = {}, l = s._propLookup.roundProps; --r > -1; )
            a[o[r]] = Math.round;
        for (r = o.length; --r > -1; )
            for (t = o[r],
            i = s._firstPT; i; )
                n = i._next,
                i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c),
                n && (n._prev = i._prev),
                i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n),
                i._next = i._prev = null,
                s._propLookup[t] = l)),
                i = n;
        return !1
    }
    ,
    i._add = function(t, e, i, n) {
        this._addTween(t, e, i, i + n, e, Math.round),
        this._overwriteProps.push(e)
    }
    ,
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.0",
        init: function(t, e, i, n) {
            var s, o;
            if ("function" != typeof t.setAttribute)
                return !1;
            for (s in e)
                "function" == typeof (o = e[s]) && (o = o(n, t)),
                this._addTween(t, "setAttribute", t.getAttribute(s) + "", o + "", s, !1, s),
                this._overwriteProps.push(s);
            return !0
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function(t, e, i, n) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var s, o, r, a, l, c, h = !0 === e.useRadians ? 2 * Math.PI : 360, u = 1e-6;
            for (s in e)
                "useRadians" !== s && ("function" == typeof (a = e[s]) && (a = a(n, t)),
                o = (c = (a + "").split("_"))[0],
                r = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()),
                l = (a = this.finals[s] = "string" == typeof o && "=" === o.charAt(1) ? r + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - r,
                c.length && (-1 !== (o = c.join("_")).indexOf("short") && ((l %= h) !== l % (h / 2) && (l = 0 > l ? l + h : l - h)),
                -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * h) % h - (l / h | 0) * h : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * h) % h - (l / h | 0) * h)),
                (l > u || -u > l) && (this._addTween(t, s, r, r + l, s),
                this._overwriteProps.push(s)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], (function(t) {
        var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope, o = s.com.greensock, r = 2 * Math.PI, a = Math.PI / 2, l = o._class, c = function(e, i) {
            var n = l("easing." + e, (function() {}
            ), !0)
              , s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            n
        }, h = t.register || function() {}
        , u = function(t, e, i, n, s) {
            var o = l("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new n
            }, !0);
            return h(o, t),
            o
        }, d = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, p = function(e, i) {
            var n = l("easing." + e, (function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }
            ), !0)
              , s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            s.config = function(t) {
                return new n(t)
            }
            ,
            n
        }, f = u("Back", p("BackOut", (function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }
        )), p("BackIn", (function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }
        )), p("BackInOut", (function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        }
        ))), g = l("easing.SlowMo", (function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }
        ), !0), m = g.prototype = new t;
        return m.constructor = g,
        m.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        g.ease = new g(.7,.7),
        m.config = g.config = function(t, e, i) {
            return new g(t,e,i)
        }
        ,
        e = l("easing.SteppedEase", (function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }
        ), !0),
        (m = e.prototype = new t).constructor = e,
        m.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        m.config = e.config = function(t) {
            return new e(t)
        }
        ,
        i = l("easing.RoughEase", (function(e) {
            for (var i, n, s, o, r, a, l = (e = e || {}).taper || "none", c = [], h = 0, u = 0 | (e.points || 20), p = u, f = !1 !== e.randomize, g = !0 === e.clamp, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1; )
                i = f ? Math.random() : 1 / u * p,
                n = m ? m.getRatio(i) : i,
                "none" === l ? s = v : "out" === l ? s = (o = 1 - i) * o * v : "in" === l ? s = i * i * v : .5 > i ? s = (o = 2 * i) * o * .5 * v : s = (o = 2 * (1 - i)) * o * .5 * v,
                f ? n += Math.random() * s - .5 * s : p % 2 ? n += .5 * s : n -= .5 * s,
                g && (n > 1 ? n = 1 : 0 > n && (n = 0)),
                c[h++] = {
                    x: i,
                    y: n
                };
            for (c.sort((function(t, e) {
                return t.x - e.x
            }
            )),
            a = new d(1,1,null),
            p = u; --p > -1; )
                r = c[p],
                a = new d(r.x,r.y,a);
            this._prev = new d(0,0,0 !== a.t ? a : a.next)
        }
        ), !0),
        (m = i.prototype = new t).constructor = i,
        m.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        m.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", c("BounceOut", (function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }
        )), c("BounceIn", (function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }
        )), c("BounceInOut", (function(t) {
            var e = .5 > t;
            return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        }
        ))),
        u("Circ", c("CircOut", (function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }
        )), c("CircIn", (function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }
        )), c("CircInOut", (function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }
        ))),
        n = function(e, i, n) {
            var s = l("easing." + e, (function(t, e) {
                this._p1 = t >= 1 ? t : 1,
                this._p2 = (e || n) / (1 > t ? t : 1),
                this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0),
                this._p2 = r / this._p2
            }
            ), !0)
              , o = s.prototype = new t;
            return o.constructor = s,
            o.getRatio = i,
            o.config = function(t, e) {
                return new s(t,e)
            }
            ,
            s
        }
        ,
        u("Elastic", n("ElasticOut", (function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }
        ), .3), n("ElasticIn", (function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }
        ), .3), n("ElasticInOut", (function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }
        ), .45)),
        u("Expo", c("ExpoOut", (function(t) {
            return 1 - Math.pow(2, -10 * t)
        }
        )), c("ExpoIn", (function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }
        )), c("ExpoInOut", (function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
        ))),
        u("Sine", c("SineOut", (function(t) {
            return Math.sin(t * a)
        }
        )), c("SineIn", (function(t) {
            return 1 - Math.cos(t * a)
        }
        )), c("SineInOut", (function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }
        ))),
        l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        h(s.SlowMo, "SlowMo", "ease,"),
        h(i, "RoughEase", "ease,"),
        h(e, "SteppedEase", "ease,"),
        f
    }
    ), !0)
}
)),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = {}
      , n = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!n.TweenLite) {
        var s, o, r, a, l, c = function(t) {
            var e, i = t.split("."), s = n;
            for (e = 0; e < i.length; e++)
                s[i[e]] = s = s[i[e]] || {};
            return s
        }, h = c("com.greensock"), u = 1e-10, d = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, p = function() {}, f = function() {
            var t = Object.prototype.toString
              , e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), g = {}, m = function(s, o, r, a) {
            this.sc = g[s] ? g[s].sc : [],
            g[s] = this,
            this.gsClass = null,
            this.func = r;
            var l = [];
            this.check = function(h) {
                for (var u, d, p, f, v, y = o.length, _ = y; --y > -1; )
                    (u = g[o[y]] || new m(o[y],[])).gsClass ? (l[y] = u.gsClass,
                    _--) : h && u.sc.push(this);
                if (0 === _ && r) {
                    if (p = (d = ("com.greensock." + s).split(".")).pop(),
                    f = c(d.join("."))[p] = this.gsClass = r.apply(r, l),
                    a)
                        if (n[p] = i[p] = f,
                        !(v = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd)
                            define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], (function() {
                                return f
                            }
                            ));
                        else if (v)
                            if (s === e)
                                for (y in module.exports = i[e] = f,
                                i)
                                    f[y] = i[y];
                            else
                                i[e] && (i[e][p] = f);
                    for (y = 0; y < this.sc.length; y++)
                        this.sc[y].check()
                }
            }
            ,
            this.check(!0)
        }, v = t._gsDefine = function(t, e, i, n) {
            return new m(t,e,i,n)
        }
        , y = h._class = function(t, e, i) {
            return e = e || function() {}
            ,
            v(t, [], (function() {
                return e
            }
            ), i),
            e
        }
        ;
        v.globals = n;
        var _ = [0, 0, 1, 1]
          , w = y("easing.Ease", (function(t, e, i, n) {
            this._func = t,
            this._type = i || 0,
            this._power = n || 0,
            this._params = e ? _.concat(e) : _
        }
        ), !0)
          , b = w.map = {}
          , T = w.register = function(t, e, i, n) {
            for (var s, o, r, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1; )
                for (o = l[c],
                s = n ? y("easing." + o, null, !0) : h.easing[o] || {},
                r = u.length; --r > -1; )
                    a = u[r],
                    b[o + "." + a] = b[a + o] = s[a] = t.getRatio ? t : t[a] || new t
        }
        ;
        for ((r = w.prototype)._calcEnd = !1,
        r.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }
        ,
        o = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1; )
            r = s[o] + ",Power" + o,
            T(new w(null,null,1,o), r, "easeOut", !0),
            T(new w(null,null,2,o), r, "easeIn" + (0 === o ? ",easeNone" : "")),
            T(new w(null,null,3,o), r, "easeInOut");
        b.linear = h.easing.Linear.easeIn,
        b.swing = h.easing.Quad.easeInOut;
        var x = y("events.EventDispatcher", (function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        }
        ));
        (r = x.prototype).addEventListener = function(t, e, i, n, s) {
            s = s || 0;
            var o, r, c = this._listeners[t], h = 0;
            for (this !== a || l || a.wake(),
            null == c && (this._listeners[t] = c = []),
            r = c.length; --r > -1; )
                (o = c[r]).c === e && o.s === i ? c.splice(r, 1) : 0 === h && o.pr < s && (h = r + 1);
            c.splice(h, 0, {
                c: e,
                s: i,
                up: n,
                pr: s
            })
        }
        ,
        r.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }
        ,
        r.dispatchEvent = function(t) {
            var e, i, n, s = this._listeners[t];
            if (s)
                for ((e = s.length) > 1 && (s = s.slice(0)),
                i = this._eventTarget; --e > -1; )
                    (n = s[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
        }
        ;
        var S = t.requestAnimationFrame
          , k = t.cancelAnimationFrame
          , C = Date.now || function() {
            return (new Date).getTime()
        }
          , P = C();
        for (o = (s = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !S; )
            S = t[s[o] + "RequestAnimationFrame"],
            k = t[s[o] + "CancelAnimationFrame"] || t[s[o] + "CancelRequestAnimationFrame"];
        y("Ticker", (function(t, e) {
            var i, n, s, o, r, c = this, h = C(), d = !(!1 === e || !S) && "auto", f = 500, g = 33, m = "tick", v = function(t) {
                var e, a, l = C() - P;
                l > f && (h += l - g),
                P += l,
                c.time = (P - h) / 1e3,
                e = c.time - r,
                (!i || e > 0 || !0 === t) && (c.frame++,
                r += e + (e >= o ? .004 : o - e),
                a = !0),
                !0 !== t && (s = n(v)),
                a && c.dispatchEvent(m)
            };
            x.call(c),
            c.time = c.frame = 0,
            c.tick = function() {
                v(!0)
            }
            ,
            c.lagSmoothing = function(t, e) {
                f = t || 1 / u,
                g = Math.min(e, f, 0)
            }
            ,
            c.sleep = function() {
                null != s && (d && k ? k(s) : clearTimeout(s),
                n = p,
                s = null,
                c === a && (l = !1))
            }
            ,
            c.wake = function(t) {
                null !== s ? c.sleep() : t ? h += -P + (P = C()) : c.frame > 10 && (P = C() - f + 5),
                n = 0 === i ? p : d && S ? S : function(t) {
                    return setTimeout(t, 1e3 * (r - c.time) + 1 | 0)
                }
                ,
                c === a && (l = !0),
                v(2)
            }
            ,
            c.fps = function(t) {
                return arguments.length ? (o = 1 / ((i = t) || 60),
                r = this.time + o,
                void c.wake()) : i
            }
            ,
            c.useRAF = function(t) {
                return arguments.length ? (c.sleep(),
                d = t,
                void c.fps(i)) : d
            }
            ,
            c.fps(t),
            setTimeout((function() {
                "auto" === d && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
            }
            ), 1500)
        }
        )),
        (r = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
        var E = y("core.Animation", (function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = !0 === e.immediateRender,
            this.data = e.data,
            this._reversed = !0 === e.reversed,
            G) {
                l || a.wake();
                var i = this.vars.useFrames ? U : G;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        }
        ));
        a = E.ticker = new h.Ticker,
        (r = E.prototype)._dirty = r._gc = r._initted = r._paused = !1,
        r._totalTime = r._time = 0,
        r._rawPrevTime = -1,
        r._next = r._last = r._onUpdate = r._timeline = r.timeline = null,
        r._paused = !1;
        var I = function() {
            l && C() - P > 2e3 && a.wake(),
            setTimeout(I, 2e3)
        };
        I(),
        r.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        r.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        r.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        r.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }
        ,
        r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }
        ,
        r.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        r.render = function(t, e, i) {}
        ,
        r.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        r.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }
        ,
        r._enabled = function(t, e) {
            return l || a.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        r._kill = function(t, e) {
            return this._enabled(!1, !1)
        }
        ,
        r.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        r._callback = function(t) {
            var e = this.vars, i = e[t], n = e[t + "Params"], s = e[t + "Scope"] || e.callbackScope || this, o;
            switch (n ? n.length : 0) {
            case 0:
                i.call(s);
                break;
            case 1:
                i.call(s, n[0]);
                break;
            case 2:
                i.call(s, n[0], n[1]);
                break;
            default:
                i.apply(s, n)
            }
        }
        ,
        r.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)
                    return s[t];
                null == e ? delete s[t] : (s[t] = e,
                s[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                s[t + "Scope"] = n),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        r.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        r.totalTime = function(t, e, i) {
            if (l || a.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration
                      , s = this._timeline;
                    if (t > n && !i && (t = n),
                    this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale,
                    s._dirty || this._uncache(!1),
                    s._timeline)
                        for (; s._timeline; )
                            s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                            s = s._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (L.length && Q(),
                this.render(t, e, !1),
                L.length && Q())
            }
            return this
        }
        ,
        r.progress = r.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }
        ,
        r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        r.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        r.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || u,
            this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime
                  , i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        }
        ,
        r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        r.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (l || t || a.wake(),
            i = (e = n.rawTime()) - this._pauseTime,
            !t && n.smoothChildTiming && (this._startTime += i,
            this._uncache(!1)),
            this._pauseTime = t ? e : null,
            this._paused = t,
            this._active = this.isActive(),
            !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
            this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var O = y("core.SimpleTimeline", (function(t) {
            E.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        }
        ));
        (r = O.prototype = new E).constructor = O,
        r.kill()._gc = !1,
        r._first = r._last = r._recent = null,
        r._sortChildren = !1,
        r.add = r.insert = function(t, e, i, n) {
            var s, o;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            s = this._last,
            this._sortChildren)
                for (o = t._startTime; s && s._startTime > o; )
                    s = s._prev;
            return s ? (t._next = s._next,
            s._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = s,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        r.render = function(t, e, i) {
            var n, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                n = s._next,
                (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = n
        }
        ,
        r.rawTime = function() {
            return l || a.wake(),
            this._totalTime
        }
        ;
        var A = y("TweenLite", (function(e, i, n) {
            if (E.call(this, i, n),
            this.render = A.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : A.selector(e) || e;
            var s, o, r, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? W[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l],
            (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                for (this._targets = r = d(e),
                this._propLookup = [],
                this._siblings = [],
                s = 0; s < r.length; s++)
                    (o = r[s]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(s--, 1),
                    this._targets = r = r.concat(d(o))) : (this._siblings[s] = K(o, this, !1),
                    1 === l && this._siblings[s].length > 1 && $(o, this, null, 1, this._siblings[s])) : "string" == typeof (o = r[s--] = A.selector(o)) && r.splice(s + 1, 1) : r.splice(s--, 1);
            else
                this._propLookup = {},
                this._siblings = K(e, this, !1),
                1 === l && this._siblings.length > 1 && $(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -u,
            this.render(Math.min(0, -this._delay)))
        }
        ), !0)
          , M = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }
          , z = function(t, e) {
            var i, n = {};
            for (i in t)
                Y[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (n[i] = t[i],
                delete t[i]);
            t.css = n
        };
        (r = A.prototype = new E).constructor = A,
        r.kill()._gc = !1,
        r.ratio = 0,
        r._firstPT = r._targets = r._overwrittenProps = r._startAt = null,
        r._notifyPluginsOfEnabled = r._lazy = !1,
        A.version = "1.19.0",
        A.defaultEase = r._ease = new w(null,null,1,1),
        A.defaultOverwrite = "auto",
        A.ticker = a,
        A.autoSleep = 120,
        A.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }
        ,
        A.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (A.selector = i,
            i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ;
        var L = []
          , R = {}
          , D = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , F = function(t) {
            for (var e, i = this._firstPT, n = 1e-6; i; )
                e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s,
                i.m ? e = i.m(e, this._target || i.t) : n > e && e > -n && (e = 0),
                i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
          , j = function(t, e, i, n) {
            var s, o, r, a, l, c, h, u = [t, e], d = 0, p = "", f = 0;
            for (u.start = t,
            i && (i(u),
            t = u[0],
            e = u[1]),
            u.length = 0,
            s = t.match(D) || [],
            o = e.match(D) || [],
            n && (n._next = null,
            n.blob = 1,
            u._firstPT = u._applyPT = n),
            l = o.length,
            a = 0; l > a; a++)
                h = o[a],
                p += (c = e.substr(d, e.indexOf(h, d) - d)) || !a ? c : ",",
                d += c.length,
                f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1),
                h === s[a] || s.length <= a ? p += h : (p && (u.push(p),
                p = ""),
                r = parseFloat(s[a]),
                u.push(r),
                u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: r,
                    c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - r) || 0,
                    f: 0,
                    m: f && 4 > f ? Math.round : 0
                }),
                d += h.length;
            return (p += e.substr(d)) && u.push(p),
            u.setRatio = F,
            u
        }
          , H = function(t, e, i, n, s, o, r, a, l) {
            "function" == typeof n && (n = n(l || 0, t));
            var c, h, u = "get" === i ? t[e] : i, d = typeof t[e], p = "string" == typeof n && "=" === n.charAt(1), f = {
                t: t,
                p: e,
                s: u,
                f: "function" === d,
                pg: 0,
                n: s || e,
                m: o ? "function" == typeof o ? o : Math.round : 0,
                pr: 0,
                c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0
            };
            return "number" !== d && ("function" === d && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
            f.s = u = r ? t[h](r) : t[h]()),
            "string" == typeof u && (r || isNaN(u)) ? (f.fp = r,
            f = {
                t: c = j(u, n, a || A.defaultStringFilter, f),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: s || e,
                pr: 0,
                m: 0
            }) : p || (f.s = parseFloat(u),
            f.c = parseFloat(n) - f.s || 0)),
            f.c ? ((f._next = this._firstPT) && (f._next._prev = f),
            this._firstPT = f,
            f) : void 0
        }
          , B = A._internals = {
            isArray: f,
            isSelector: M,
            lazyTweens: L,
            blobDif: j
        }
          , N = A._plugins = {}
          , X = B.tweenLookup = {}
          , q = 0
          , Y = B.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1
        }
          , W = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , U = E._rootFramesTimeline = new O
          , G = E._rootTimeline = new O
          , V = 30
          , Q = B.lazyRender = function() {
            var t, e = L.length;
            for (R = {}; --e > -1; )
                (t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                t._lazy = !1);
            L.length = 0
        }
        ;
        G._startTime = a.time,
        U._startTime = a.frame,
        G._active = U._active = !0,
        setTimeout(Q, 1),
        E._updateRoot = A.render = function() {
            var t, e, i;
            if (L.length && Q(),
            G.render((a.time - G._startTime) * G._timeScale, !1, !1),
            U.render((a.frame - U._startTime) * U._timeScale, !1, !1),
            L.length && Q(),
            a.frame >= V) {
                for (i in V = a.frame + (parseInt(A.autoSleep, 10) || 120),
                X) {
                    for (t = (e = X[i].tweens).length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete X[i]
                }
                if ((!(i = G._first) || i._paused) && A.autoSleep && !U._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || a.sleep()
                }
            }
        }
        ,
        a.addEventListener("tick", E._updateRoot);
        var K = function(t, e, i) {
            var n, s, o = t._gsTweenID;
            if (X[o || (t._gsTweenID = o = "t" + q++)] || (X[o] = {
                target: t,
                tweens: []
            }),
            e && ((n = X[o].tweens)[s = n.length] = e,
            i))
                for (; --s > -1; )
                    n[s] === e && n.splice(s, 1);
            return X[o].tweens
        }
          , J = function(t, e, i, n) {
            var s, o, r = t.vars.onOverwrite;
            return r && (s = r(t, e, i, n)),
            (r = A.onOverwrite) && (o = r(t, e, i, n)),
            !1 !== s && !1 !== o
        }
          , $ = function(t, e, i, n, s) {
            var o, r, a, l;
            if (1 === n || n >= 4) {
                for (l = s.length,
                o = 0; l > o; o++)
                    if ((a = s[o]) !== e)
                        a._gc || a._kill(null, t, e) && (r = !0);
                    else if (5 === n)
                        break;
                return r
            }
            var c, h = e._startTime + u, d = [], p = 0, f = 0 === e._duration;
            for (o = s.length; --o > -1; )
                (a = s[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || Z(e, 0, f),
                0 === Z(a, c, f) && (d[p++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-10 || (d[p++] = a)));
            for (o = p; --o > -1; )
                if (a = d[o],
                2 === n && a._kill(i, t, e) && (r = !0),
                2 !== n || !a._firstPT && a._initted) {
                    if (2 !== n && !J(a, e))
                        continue;
                    a._enabled(!1, !1) && (r = !0)
                }
            return r
        }
          , Z = function(t, e, i) {
            for (var n = t._timeline, s = n._timeScale, o = t._startTime; n._timeline; ) {
                if (o += n._startTime,
                s *= n._timeScale,
                n._paused)
                    return -100;
                n = n._timeline
            }
            return (o /= s) > e ? o - e : i && o === e || !t._initted && 2 * u > o - e ? u : (o += t.totalDuration() / t._timeScale / s) > e + u ? 0 : o - e - u
        };
        r._init = function() {
            var t, e, i, n, s, o, r = this.vars, a = this._overwrittenProps, l = this._duration, c = !!r.immediateRender, h = r.ease;
            if (r.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                s = {},
                r.startAt)
                    s[n] = r.startAt[n];
                if (s.overwrite = !1,
                s.immediateRender = !0,
                s.lazy = c && !1 !== r.lazy,
                s.startAt = s.delay = null,
                this._startAt = A.to(this.target, 0, s),
                c)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== l)
                        return
            } else if (r.runBackwards && 0 !== l)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    for (n in 0 !== this._time && (c = !1),
                    i = {},
                    r)
                        Y[n] && "autoCSS" !== n || (i[n] = r[n]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = c && !1 !== r.lazy,
                    i.immediateRender = c,
                    this._startAt = A.to(this.target, 0, i),
                    c) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = h = h ? h instanceof w ? h : "function" == typeof h ? new w(h,r.easeParams) : b[h] || A.defaultEase : A.defaultEase,
            r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (o = this._targets.length,
                t = 0; o > t; t++)
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && A._onPluginEvent("_onInitAllProps", this),
            a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            r.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = r.onUpdate,
            this._initted = !0
        }
        ,
        r._initProps = function(e, i, n, s, o) {
            var r, a, l, c, h, u;
            if (null == e)
                return !1;
            for (r in R[e._gsTweenID] && Q(),
            this.vars.css || e.style && e !== t && e.nodeType && N.css && !1 !== this.vars.autoCSS && z(this.vars, e),
            this.vars)
                if (u = this.vars[r],
                Y[r])
                    u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this));
                else if (N[r] && (c = new N[r])._onInitTween(e, this.vars[r], this, o)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: c,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: r,
                        pg: 1,
                        pr: c._priority,
                        m: 0
                    },
                    a = c._overwriteProps.length; --a > -1; )
                        i[c._overwriteProps[a]] = this._firstPT;
                    (c._priority || c._onInitAllProps) && (l = !0),
                    (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    h._next && (h._next._prev = h)
                } else
                    i[r] = H.call(this, e, r, "get", u, r, 0, null, this.vars.stringFilter, o);
            return s && this._kill(s, e) ? this._initProps(e, i, n, s, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && $(e, this, i, this._overwrite, n) ? (this._kill(i, e),
            this._initProps(e, i, n, s, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0),
            l)
        }
        ,
        r.render = function(t, e, i) {
            var n, s, o, r, a = this._time, l = this._duration, c = this._rawPrevTime;
            if (t >= l - 1e-7)
                this._totalTime = this._time = l,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (n = !0,
                s = "onComplete",
                i = i || this._timeline.autoRemoveChildren),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 > c || 0 >= t && t >= -1e-7 || c === u && "isPause" !== this.data) && c !== t && (i = !0,
                c > u && (s = "onReverseComplete")),
                this._rawPrevTime = r = !e || t || c === t ? t : u);
            else if (1e-7 > t)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== a || 0 === l && c > 0) && (s = "onReverseComplete",
                n = this._reversed),
                0 > t && (this._active = !1,
                0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== u || "isPause" !== this.data) && (i = !0),
                this._rawPrevTime = r = !e || t || c === t ? t : u)),
                this._initted || (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var h = t / l
                  , d = this._easeType
                  , p = this._easePower;
                (1 === d || 3 === d && h >= .5) && (h = 1 - h),
                3 === d && (h *= 2),
                1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h),
                this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > t / l ? h / 2 : 1 - h / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = a,
                        this._rawPrevTime = c,
                        L.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0),
                0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                o = this._firstPT; o; )
                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                    o = o._next;
                this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i),
                e || (this._time !== a || n || i) && this._callback("onUpdate")),
                s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === l && this._rawPrevTime === u && r !== u && (this._rawPrevTime = 0))
            }
        }
        ,
        r._kill = function(t, e, i) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
            var n, s, o, r, a, l, c, h, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || M(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                    this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1; )
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (c = t || a,
                    h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill),
                    i && (A.onOverwrite || this.vars.onOverwrite)) {
                        for (o in c)
                            a[o] && (u || (u = []),
                            u.push(o));
                        if ((u || !t) && !J(this, i, e, u))
                            return !1
                    }
                    for (o in c)
                        (r = a[o]) && (d && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s,
                        l = !0),
                        r.pg && r.t._kill(c) && (l = !0),
                        r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next),
                        r._next && (r._next._prev = r._prev),
                        r._next = r._prev = null),
                        delete a[o]),
                        h && (s[o] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }
        ,
        r.invalidate = function() {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            E.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -u,
            this.render(Math.min(0, -this._delay))),
            this
        }
        ,
        r._enabled = function(t, e) {
            if (l || a.wake(),
            t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1; )
                        this._siblings[i] = K(n[i], this, !0);
                else
                    this._siblings = K(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }
        ,
        A.to = function(t, e, i) {
            return new A(t,e,i)
        }
        ,
        A.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new A(t,e,i)
        }
        ,
        A.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new A(t,e,n)
        }
        ,
        A.delayedCall = function(t, e, i, n, s) {
            return new A(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        A.set = function(t, e) {
            return new A(t,0,e)
        }
        ,
        A.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            var i, n, s, o;
            if (t = "string" != typeof t ? t : A.selector(t) || t,
            (f(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                n = []; --i > -1; )
                    n = n.concat(A.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                    for (o = n[i],
                    s = i; --s > -1; )
                        o === n[s] && n.splice(i, 1)
            } else
                for (i = (n = K(t).concat()).length; --i > -1; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }
        ,
        A.killTweensOf = A.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var n = A.getTweensOf(t, e), s = n.length; --s > -1; )
                n[s]._kill(i, t)
        }
        ;
        var tt = y("plugins.TweenPlugin", (function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = tt.prototype
        }
        ), !0);
        if (r = tt.prototype,
        tt.version = "1.19.0",
        tt.API = 2,
        r._firstPT = null,
        r._addTween = H,
        r.setRatio = F,
        r._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev),
                n._prev ? (n._prev._next = n._next,
                n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                n = n._next;
            return !1
        }
        ,
        r._mod = r._roundProps = function(t) {
            for (var e, i = this._firstPT; i; )
                (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                i = i._next
        }
        ,
        A._onPluginEvent = function(t, e) {
            var i, n, s, o, r, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a; ) {
                    for (r = a._next,
                    n = s; n && n.pr > a.pr; )
                        n = n._next;
                    (a._prev = n ? n._prev : o) ? a._prev._next = a : s = a,
                    (a._next = n) ? n._prev = a : o = a,
                    a = r
                }
                a = e._firstPT = s
            }
            for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                a = a._next;
            return i
        }
        ,
        tt.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === tt.API && (N[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        v.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, s = t.overwriteProps, o = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            }, r = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", (function() {
                tt.call(this, i, n),
                this._overwriteProps = s || []
            }
            ), !0 === t.global), a = r.prototype = new tt(i);
            for (e in a.constructor = r,
            r.API = t.API,
            o)
                "function" == typeof t[e] && (a[o[e]] = t[e]);
            return r.version = t.version,
            tt.activate([r]),
            r
        }
        ,
        s = t._gsQueue) {
            for (o = 0; o < s.length; o++)
                s[o]();
            for (r in g)
                g[r].func || t.console.log("GSAP encountered missing dependency: " + r)
        }
        l = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/*!
 * VERSION: 1.8.0
 * DATE: 2016-07-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push((function() {
    "use strict";
    var t = document.documentElement
      , e = window
      , i = function(i, n) {
        var s = "x" === n ? "Width" : "Height"
          , o = "scroll" + s
          , r = "client" + s
          , a = document.body;
        return i === e || i === t || i === a ? Math.max(t[o], a[o]) - (e["inner" + s] || t[r] || a[r]) : i[o] - i["offset" + s]
    }
      , n = function(t) {
        return "string" == typeof t && (t = TweenLite.selector(t)),
        t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]),
        t === e || t.nodeType && t.style ? t : null
    }
      , s = function(i, n) {
        var s = "scroll" + ("x" === n ? "Left" : "Top");
        return i === e && (null != i.pageXOffset ? s = "page" + n.toUpperCase() + "Offset" : i = null != t[s] ? t : document.body),
        function() {
            return i[s]
        }
    }
      , o = function(i, o) {
        var r = n(i).getBoundingClientRect()
          , a = !o || o === e || o === document.body
          , l = (a ? t : o).getBoundingClientRect()
          , c = {
            x: r.left - l.left,
            y: r.top - l.top
        };
        return !a && o && (c.x += s(o, "x")(),
        c.y += s(o, "y")()),
        c
    }
      , r = function(t, e, n) {
        var s = typeof t;
        return "number" === s || "string" === s && "=" === t.charAt(1) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), o(t, e)[n])
    }
      , a = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.8.0",
        init: function(t, i, n) {
            return this._wdw = t === e,
            this._target = t,
            this._tween = n,
            "object" != typeof i ? "string" == typeof (i = {
                y: i
            }).y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y) : i.nodeType && (i = {
                y: i,
                x: i
            }),
            this.vars = i,
            this._autoKill = !1 !== i.autoKill,
            this.getX = s(t, "x"),
            this.getY = s(t, "y"),
            this.x = this.xPrev = this.getX(),
            this.y = this.yPrev = this.getY(),
            null != i.x ? (this._addTween(this, "x", this.x, r(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0),
            this._overwriteProps.push("scrollTo_x")) : this.skipX = !0,
            null != i.y ? (this._addTween(this, "y", this.y, r(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0),
            this._overwriteProps.push("scrollTo_y")) : this.skipY = !0,
            !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            var n = this._wdw || !this.skipX ? this.getX() : this.xPrev
              , s = this._wdw || !this.skipY ? this.getY() : this.yPrev
              , o = s - this.yPrev
              , r = n - this.xPrev
              , l = a.autoKillThreshold;
            this.x < 0 && (this.x = 0),
            this.y < 0 && (this.y = 0),
            this._autoKill && (!this.skipX && (r > l || -l > r) && n < i(this._target, "x") && (this.skipX = !0),
            !this.skipY && (o > l || -l > o) && s < i(this._target, "y") && (this.skipY = !0),
            this.skipX && this.skipY && (this._tween.kill(),
            this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
            this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y),
            this.skipX || (this._target.scrollLeft = this.x)),
            this.xPrev = this.x,
            this.yPrev = this.y
        }
    })
      , l = a.prototype;
    a.max = i,
    a.getOffset = o,
    a.autoKillThreshold = 7,
    l._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0),
        t.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, t)
    }
}
)),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"),
    module.exports = e())
}("ScrollToPlugin");
/*!
 * VERSION: 0.0.6
 * DATE: 2015-08-22
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push((function() {
    "use strict";
    function t(t, e, i, n) {
        return i = parseFloat(i) - parseFloat(t),
        n = parseFloat(n) - parseFloat(e),
        Math.sqrt(i * i + n * n)
    }
    function e(t) {
        return "string" != typeof t && t.nodeType || (t = _gsScope.TweenLite.selector(t)).length && (t = t[0]),
        t
    }
    function i(t, e, i) {
        var n, s, o = t.indexOf(" ");
        return -1 === o ? (n = void 0 !== i ? i + "" : t,
        s = t) : (n = t.substr(0, o),
        s = t.substr(o + 1)),
        (n = -1 !== n.indexOf("%") ? parseFloat(n) / 100 * e : parseFloat(n)) > (s = -1 !== s.indexOf("%") ? parseFloat(s) / 100 * e : parseFloat(s)) ? [s, n] : [n, s]
    }
    function n(i) {
        if (!i)
            return 0;
        var n, s, o, r, a, l, c, h, u = (i = e(i)).tagName.toLowerCase();
        if ("path" === u)
            a = i.style.strokeDasharray,
            i.style.strokeDasharray = "none",
            n = i.getTotalLength() || 0,
            i.style.strokeDasharray = a;
        else if ("rect" === u)
            n = 2 * ((s = i.getBBox()).width + s.height);
        else if ("circle" === u)
            n = 2 * Math.PI * parseFloat(i.getAttribute("r"));
        else if ("line" === u)
            n = t(i.getAttribute("x1"), i.getAttribute("y1"), i.getAttribute("x2"), i.getAttribute("y2"));
        else if ("polyline" === u || "polygon" === u)
            for (n = 0,
            a = (o = i.getAttribute("points").split(" "))[0].split(","),
            "polygon" === u && (o.push(o[0]),
            -1 === o[0].indexOf(",") && o.push(o[1])),
            l = 1; o.length > l; l++)
                1 === (r = o[l].split(",")).length && (r[1] = o[l++]),
                2 === r.length && (n += t(a[0], a[1], r[0], r[1]) || 0,
                a = r);
        else
            "ellipse" === u && (c = parseFloat(i.getAttribute("rx")),
            h = parseFloat(i.getAttribute("ry")),
            n = Math.PI * (3 * (c + h) - Math.sqrt((3 * c + h) * (c + 3 * h))));
        return n || 0
    }
    function s(t, i) {
        if (!t)
            return [0, 0];
        t = e(t),
        i = i || n(t) + 1;
        var s = r(t)
          , o = s.strokeDasharray || ""
          , a = parseFloat(s.strokeDashoffset)
          , l = o.indexOf(",");
        return 0 > l && (l = o.indexOf(" ")),
        (o = 0 > l ? i : parseFloat(o.substr(0, l)) || 1e-5) > i && (o = i),
        [Math.max(0, -a), Math.max(0, o - a)]
    }
    var o, r = document.defaultView ? document.defaultView.getComputedStyle : function() {}
    ;
    o = _gsScope._gsDefine.plugin({
        propName: "drawSVG",
        API: 2,
        version: "0.0.6",
        global: !0,
        overwriteProps: ["drawSVG"],
        init: function(t, e) {
            if (!t.getBBox)
                return !1;
            var o, r, a, l = n(t) + 1;
            return this._style = t.style,
            !0 === e || "true" === e ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0",
            r = i(e, l, (o = s(t, l))[0]),
            this._length = l + 10,
            0 === o[0] && 0 === r[0] ? (a = Math.max(1e-5, r[1] - l),
            this._dash = l + a,
            this._offset = l - o[1] + a,
            this._addTween(this, "_offset", this._offset, l - r[1] + a, "drawSVG")) : (this._dash = o[1] - o[0] || 1e-6,
            this._offset = -o[0],
            this._addTween(this, "_dash", this._dash, r[1] - r[0] || 1e-5, "drawSVG"),
            this._addTween(this, "_offset", this._offset, -r[0], "drawSVG")),
            !0
        },
        set: function(t) {
            this._firstPT && (this._super.setRatio.call(this, t),
            this._style.strokeDashoffset = this._offset,
            this._style.strokeDasharray = 1 === t || 0 === t ? .001 > this._offset && 10 >= this._length - this._dash ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._dash + "px," + this._length + "px")
        }
    }),
    o.getLength = n,
    o.getPosition = s
}
)),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
}(this, (function() {
    "use strict";
    var t = function() {};
    t.version = "2.0.5",
    window.addEventListener("mousewheel", (function() {}
    ));
    var e = "data-scrollmagic-pin-spacer";
    t.Controller = function(n) {
        var o, r, a = "ScrollMagic.Controller", l = "FORWARD", c = "REVERSE", h = "PAUSED", u = i.defaults, d = this, p = s.extend({}, u, n), f = [], g = !1, m = 0, v = h, y = !0, _ = 0, w = !0, b = function() {
            for (var t in p)
                u.hasOwnProperty(t) || delete p[t];
            if (p.container = s.get.elements(p.container)[0],
            !p.container)
                throw a + " init failed.";
            (y = p.container === window || p.container === document.body || !document.body.contains(p.container)) && (p.container = window),
            _ = S(),
            p.container.addEventListener("resize", E),
            p.container.addEventListener("scroll", E),
            p.refreshInterval = parseInt(p.refreshInterval) || u.refreshInterval,
            T()
        }, T = function() {
            p.refreshInterval > 0 && (r = window.setTimeout(I, p.refreshInterval))
        }, x = function() {
            return p.vertical ? s.get.scrollTop(p.container) : s.get.scrollLeft(p.container)
        }, S = function() {
            return p.vertical ? s.get.height(p.container) : s.get.width(p.container)
        }, k = this._setScrollPos = function(t) {
            p.vertical ? y ? window.scrollTo(s.get.scrollLeft(), t) : p.container.scrollTop = t : y ? window.scrollTo(t, s.get.scrollTop()) : p.container.scrollLeft = t
        }
        , C = function() {
            if (w && g) {
                var t = s.type.Array(g) ? g : f.slice(0);
                g = !1;
                var e = m
                  , i = (m = d.scrollPos()) - e;
                0 !== i && (v = i > 0 ? l : c),
                v === c && t.reverse(),
                t.forEach((function(t) {
                    t.update(!0)
                }
                ))
            }
        }, P = function() {
            o = s.rAF(C)
        }, E = function(t) {
            "resize" == t.type && (_ = S(),
            v = h),
            !0 !== g && (g = !0,
            P())
        }, I = function() {
            if (!y && _ != S()) {
                var t;
                try {
                    t = new Event("resize",{
                        bubbles: !1,
                        cancelable: !1
                    })
                } catch (e) {
                    (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                }
                p.container.dispatchEvent(t)
            }
            f.forEach((function(t) {
                t.refresh()
            }
            )),
            T()
        };
        this._options = p;
        var O = function(t) {
            if (t.length <= 1)
                return t;
            var e = t.slice(0);
            return e.sort((function(t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1
            }
            )),
            e
        };
        return this.addScene = function(e) {
            if (s.type.Array(e))
                e.forEach((function(t) {
                    d.addScene(t)
                }
                ));
            else if (e instanceof t.Scene)
                if (e.controller() !== d)
                    e.addTo(d);
                else if (f.indexOf(e) < 0)
                    for (var i in f.push(e),
                    f = O(f),
                    e.on("shift.controller_sort", (function() {
                        f = O(f)
                    }
                    )),
                    p.globalSceneOptions)
                        e[i] && e[i].call(e, p.globalSceneOptions[i]);
            return d
        }
        ,
        this.removeScene = function(t) {
            if (s.type.Array(t))
                t.forEach((function(t) {
                    d.removeScene(t)
                }
                ));
            else {
                var e = f.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"),
                f.splice(e, 1),
                t.remove())
            }
            return d
        }
        ,
        this.updateScene = function(e, i) {
            return s.type.Array(e) ? e.forEach((function(t) {
                d.updateScene(t, i)
            }
            )) : i ? e.update(!0) : !0 !== g && e instanceof t.Scene && (-1 == (g = g || []).indexOf(e) && g.push(e),
            g = O(g),
            P()),
            d
        }
        ,
        this.update = function(t) {
            return E({
                type: "resize"
            }),
            t && C(),
            d
        }
        ,
        this.scrollTo = function(i, n) {
            if (s.type.Number(i))
                k.call(p.container, i, n);
            else if (i instanceof t.Scene)
                i.controller() === d && d.scrollTo(i.scrollOffset(), n);
            else if (s.type.Function(i))
                k = i;
            else {
                var o = s.get.elements(i)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(e); )
                        o = o.parentNode;
                    var r = p.vertical ? "top" : "left"
                      , a = s.get.offset(p.container)
                      , l = s.get.offset(o);
                    y || (a[r] -= d.scrollPos()),
                    d.scrollTo(l[r] - a[r], n)
                }
            }
            return d
        }
        ,
        this.scrollPos = function(t) {
            return arguments.length ? (s.type.Function(t) && (x = t),
            d) : x.call(d)
        }
        ,
        this.info = function(t) {
            var e = {
                size: _,
                vertical: p.vertical,
                scrollPos: m,
                scrollDirection: v,
                container: p.container,
                isDocument: y
            };
            return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
        }
        ,
        this.loglevel = function() {
            return d
        }
        ,
        this.enabled = function(t) {
            return arguments.length ? (w != t && (w = !!t,
            d.updateScene(f, !0)),
            d) : w
        }
        ,
        this.destroy = function(t) {
            window.clearTimeout(r);
            for (var e = f.length; e--; )
                f[e].destroy(t);
            return p.container.removeEventListener("resize", E),
            p.container.removeEventListener("scroll", E),
            s.cAF(o),
            null
        }
        ,
        b(),
        d
    }
    ;
    var i = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    t.Controller.addOption = function(t, e) {
        i.defaults[t] = e
    }
    ,
    t.Controller.extend = function(e) {
        var i = this;
        t.Controller = function() {
            return i.apply(this, arguments),
            this.$super = s.extend({}, this),
            e.apply(this, arguments) || this
        }
        ,
        s.extend(t.Controller, i),
        t.Controller.prototype = i.prototype,
        t.Controller.prototype.constructor = t.Controller
    }
    ,
    t.Scene = function(i) {
        var o, r, a = "BEFORE", l = "DURING", c = "AFTER", h = n.defaults, u = this, d = s.extend({}, h, i), p = a, f = 0, g = {
            start: 0,
            end: 0
        }, m = 0, v = !0, y = function() {
            for (var t in d)
                h.hasOwnProperty(t) || delete d[t];
            for (var e in h)
                P(e);
            k()
        }, _ = {};
        this.on = function(t, e) {
            return s.type.Function(e) && (t = t.trim().split(" ")).forEach((function(t) {
                var i = t.split(".")
                  , n = i[0]
                  , s = i[1];
                "*" != n && (_[n] || (_[n] = []),
                _[n].push({
                    namespace: s || "",
                    callback: e
                }))
            }
            )),
            u
        }
        ,
        this.off = function(t, e) {
            return t ? ((t = t.trim().split(" ")).forEach((function(t) {
                var i = t.split("."), n = i[0], s = i[1] || "", o;
                ("*" === n ? Object.keys(_) : [n]).forEach((function(t) {
                    for (var i = _[t] || [], n = i.length; n--; ) {
                        var o = i[n];
                        !o || s !== o.namespace && "*" !== s || e && e != o.callback || i.splice(n, 1)
                    }
                    i.length || delete _[t]
                }
                ))
            }
            )),
            u) : u
        }
        ,
        this.trigger = function(e, i) {
            if (e) {
                var n = e.trim().split(".")
                  , s = n[0]
                  , o = n[1]
                  , r = _[s];
                r && r.forEach((function(e) {
                    o && o !== e.namespace || e.callback.call(u, new t.Event(s,e.namespace,u,i))
                }
                ))
            }
            return u
        }
        ,
        u.on("change.internal", (function(t) {
            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? T() : "reverse" === t.what && u.update())
        }
        )).on("shift.internal", (function() {
            w(),
            u.update()
        }
        )),
        this.addTo = function(e) {
            return e instanceof t.Controller && r != e && (r && r.removeScene(u),
            r = e,
            k(),
            b(!0),
            T(!0),
            w(),
            r.info("container").addEventListener("resize", x),
            e.addScene(u),
            u.trigger("add", {
                controller: r
            }),
            u.update()),
            u
        }
        ,
        this.enabled = function(t) {
            return arguments.length ? (v != t && (v = !!t,
            u.update(!0)),
            u) : v
        }
        ,
        this.remove = function() {
            if (r) {
                r.info("container").removeEventListener("resize", x);
                var t = r;
                r = void 0,
                t.removeScene(u),
                u.trigger("remove")
            }
            return u
        }
        ,
        this.destroy = function(t) {
            return u.trigger("destroy", {
                reset: t
            }),
            u.remove(),
            u.off("*.*"),
            null
        }
        ,
        this.update = function(t) {
            if (r)
                if (t)
                    if (r.enabled() && v) {
                        var e, i = r.info("scrollPos");
                        e = d.duration > 0 ? (i - g.start) / (g.end - g.start) : i >= g.start ? 1 : 0,
                        u.trigger("update", {
                            startPos: g.start,
                            endPos: g.end,
                            scrollPos: i
                        }),
                        u.progress(e)
                    } else
                        E && p === l && O(!0);
                else
                    r.updateScene(u, !1);
            return u
        }
        ,
        this.refresh = function() {
            return b(),
            T(),
            u
        }
        ,
        this.progress = function(t) {
            if (arguments.length) {
                var e = !1
                  , i = p
                  , n = r ? r.info("scrollDirection") : "PAUSED"
                  , s = d.reverse || t >= f;
                if (0 === d.duration ? (e = f != t,
                p = 0 === (f = 1 > t && s ? 0 : 1) ? a : l) : 0 > t && p !== a && s ? (f = 0,
                p = a,
                e = !0) : t >= 0 && 1 > t && s ? (f = t,
                p = l,
                e = !0) : t >= 1 && p !== c ? (f = 1,
                p = c,
                e = !0) : p !== l || s || O(),
                e) {
                    var o = {
                        progress: f,
                        state: p,
                        scrollDirection: n
                    }
                      , h = p != i
                      , g = function(t) {
                        u.trigger(t, o)
                    };
                    h && i !== l && (g("enter"),
                    g(i === a ? "start" : "end")),
                    g("progress"),
                    h && p !== l && (g(p === a ? "start" : "end"),
                    g("leave"))
                }
                return u
            }
            return f
        }
        ;
        var w = function() {
            g = {
                start: m + d.offset
            },
            r && d.triggerElement && (g.start -= r.info("size") * d.triggerHook),
            g.end = g.start + d.duration
        }, b = function(t) {
            if (o) {
                var e = "duration";
                C(e, o.call(u)) && !t && (u.trigger("change", {
                    what: e,
                    newval: d[e]
                }),
                u.trigger("shift", {
                    reason: e
                }))
            }
        }, T = function(t) {
            var i = 0
              , n = d.triggerElement;
            if (r && n) {
                for (var o = r.info(), a = s.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e); )
                    n = n.parentNode;
                var c = s.get.offset(n);
                o.isDocument || (a[l] -= r.scrollPos()),
                i = c[l] - a[l]
            }
            var h = i != m;
            m = i,
            h && !t && u.trigger("shift", {
                reason: "triggerElementPosition"
            })
        }, x = function() {
            d.triggerHook > 0 && u.trigger("shift", {
                reason: "containerResize"
            })
        }, S = s.extend(n.validate, {
            duration: function(t) {
                if (s.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                    var e = parseFloat(t) / 100;
                    t = function() {
                        return r ? r.info("size") * e : 0
                    }
                }
                if (s.type.Function(t)) {
                    o = t;
                    try {
                        t = parseFloat(o())
                    } catch (e) {
                        t = -1
                    }
                }
                if (t = parseFloat(t),
                !s.type.Number(t) || 0 > t)
                    throw o ? (o = void 0,
                    0) : 0;
                return t
            }
        }), k = function(t) {
            (t = arguments.length ? [t] : Object.keys(S)).forEach((function(t) {
                var e;
                if (S[t])
                    try {
                        e = S[t](d[t])
                    } catch (i) {
                        e = h[t]
                    } finally {
                        d[t] = e
                    }
            }
            ))
        }, C = function(t, e) {
            var i = !1
              , n = d[t];
            return d[t] != e && (d[t] = e,
            k(t),
            i = n != d[t]),
            i
        }, P = function(t) {
            u[t] || (u[t] = function(e) {
                return arguments.length ? ("duration" === t && (o = void 0),
                C(t, e) && (u.trigger("change", {
                    what: t,
                    newval: d[t]
                }),
                n.shifts.indexOf(t) > -1 && u.trigger("shift", {
                    reason: t
                })),
                u) : d[t]
            }
            )
        }, E, I;
        this.controller = function() {
            return r
        }
        ,
        this.state = function() {
            return p
        }
        ,
        this.scrollOffset = function() {
            return g.start
        }
        ,
        this.triggerPosition = function() {
            var t = d.offset;
            return r && (t += d.triggerElement ? m : r.info("size") * u.triggerHook()),
            t
        }
        ,
        u.on("shift.internal", (function(t) {
            var e = "duration" === t.reason;
            (p === c && e || p === l && 0 === d.duration) && O(),
            e && A()
        }
        )).on("progress.internal", (function() {
            O()
        }
        )).on("add.internal", (function() {
            A()
        }
        )).on("destroy.internal", (function(t) {
            u.removePin(t.reset)
        }
        ));
        var O = function(t) {
            if (E && r) {
                var e = r.info()
                  , i = I.spacer.firstChild;
                if (t || p !== l) {
                    var n = {
                        position: I.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }
                      , o = s.css(i, "position") != n.position;
                    I.pushFollowers ? d.duration > 0 && (p === c && 0 === parseFloat(s.css(I.spacer, "padding-top")) || p === a && 0 === parseFloat(s.css(I.spacer, "padding-bottom"))) && (o = !0) : n[e.vertical ? "top" : "left"] = d.duration * f,
                    s.css(i, n),
                    o && A()
                } else {
                    "fixed" != s.css(i, "position") && (s.css(i, {
                        position: "fixed"
                    }),
                    A());
                    var h = s.get.offset(I.spacer, !0)
                      , u = d.reverse || 0 === d.duration ? e.scrollPos - g.start : Math.round(f * d.duration * 10) / 10;
                    h[e.vertical ? "top" : "left"] += u,
                    s.css(I.spacer.firstChild, {
                        top: h.top,
                        left: h.left
                    })
                }
            }
        }
          , A = function() {
            if (E && r && I.inFlow) {
                var t = p === l
                  , e = r.info("vertical")
                  , i = I.spacer.firstChild
                  , n = s.isMarginCollapseType(s.css(I.spacer, "display"))
                  , o = {};
                I.relSize.width || I.relSize.autoFullWidth ? t ? s.css(E, {
                    width: s.get.width(I.spacer)
                }) : s.css(E, {
                    width: "100%"
                }) : (o["min-width"] = s.get.width(e ? E : i, !0, !0),
                o.width = t ? o["min-width"] : "auto"),
                I.relSize.height ? t ? s.css(E, {
                    height: s.get.height(I.spacer) - (I.pushFollowers ? d.duration : 0)
                }) : s.css(E, {
                    height: "100%"
                }) : (o["min-height"] = s.get.height(e ? i : E, !0, !n),
                o.height = t ? o["min-height"] : "auto"),
                I.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = d.duration * f,
                o["padding" + (e ? "Bottom" : "Right")] = d.duration * (1 - f)),
                s.css(I.spacer, o)
            }
        }
          , M = function() {
            r && E && p === l && !r.info("isDocument") && O()
        }
          , z = function() {
            r && E && p === l && ((I.relSize.width || I.relSize.autoFullWidth) && s.get.width(window) != s.get.width(I.spacer.parentNode) || I.relSize.height && s.get.height(window) != s.get.height(I.spacer.parentNode)) && A()
        }
          , L = function(t) {
            r && E && p === l && !r.info("isDocument") && (t.preventDefault(),
            r._setScrollPos(r.info("scrollPos") - ((t.wheelDelta || t[r.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
        };
        this.setPin = function(t, i) {
            var n = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (i = s.extend({}, n, i),
            !(t = s.get.elements(t)[0]))
                return u;
            if ("fixed" === s.css(t, "position"))
                return u;
            if (E) {
                if (E === t)
                    return u;
                u.removePin()
            }
            var o = (E = t).parentNode.style.display
              , r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            E.parentNode.style.display = "none";
            var a = "absolute" != s.css(E, "position")
              , l = s.css(E, r.concat(["display"]))
              , c = s.css(E, ["width", "height"]);
            E.parentNode.style.display = o,
            !a && i.pushFollowers && (i.pushFollowers = !1);
            var h = E.parentNode.insertBefore(document.createElement("div"), E)
              , d = s.extend(l, {
                position: a ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (a || s.extend(d, s.css(E, ["width", "height"])),
            s.css(h, d),
            h.setAttribute(e, ""),
            s.addClass(h, i.spacerClass),
            I = {
                spacer: h,
                relSize: {
                    width: "%" === c.width.slice(-1),
                    height: "%" === c.height.slice(-1),
                    autoFullWidth: "auto" === c.width && a && s.isMarginCollapseType(l.display)
                },
                pushFollowers: i.pushFollowers,
                inFlow: a
            },
            !E.___origStyle) {
                E.___origStyle = {};
                var p = E.style, f;
                r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach((function(t) {
                    E.___origStyle[t] = p[t] || ""
                }
                ))
            }
            return I.relSize.width && s.css(h, {
                width: c.width
            }),
            I.relSize.height && s.css(h, {
                height: c.height
            }),
            h.appendChild(E),
            s.css(E, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (I.relSize.width || I.relSize.autoFullWidth) && s.css(E, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }),
            window.addEventListener("scroll", M),
            window.addEventListener("resize", M),
            window.addEventListener("resize", z),
            E.addEventListener("mousewheel", L),
            E.addEventListener("DOMMouseScroll", L),
            O(),
            u
        }
        ,
        this.removePin = function(t) {
            if (E) {
                if (p === l && O(!0),
                t || !r) {
                    var i = I.spacer.firstChild;
                    if (i.hasAttribute(e)) {
                        var n = I.spacer.style, o;
                        margins = {},
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach((function(t) {
                            margins[t] = n[t] || ""
                        }
                        )),
                        s.css(i, margins)
                    }
                    I.spacer.parentNode.insertBefore(i, I.spacer),
                    I.spacer.parentNode.removeChild(I.spacer),
                    E.parentNode.hasAttribute(e) || (s.css(E, E.___origStyle),
                    delete E.___origStyle)
                }
                window.removeEventListener("scroll", M),
                window.removeEventListener("resize", M),
                window.removeEventListener("resize", z),
                E.removeEventListener("mousewheel", L),
                E.removeEventListener("DOMMouseScroll", L),
                E = void 0
            }
            return u
        }
        ;
        var R, D = [];
        return u.on("destroy.internal", (function(t) {
            u.removeClassToggle(t.reset)
        }
        )),
        this.setClassToggle = function(t, e) {
            var i = s.get.elements(t);
            return 0 !== i.length && s.type.String(e) ? (D.length > 0 && u.removeClassToggle(),
            R = e,
            D = i,
            u.on("enter.internal_class leave.internal_class", (function(t) {
                var e = "enter" === t.type ? s.addClass : s.removeClass;
                D.forEach((function(t) {
                    e(t, R)
                }
                ))
            }
            )),
            u) : u
        }
        ,
        this.removeClassToggle = function(t) {
            return t && D.forEach((function(t) {
                s.removeClass(t, R)
            }
            )),
            u.off("start.internal_class end.internal_class"),
            R = void 0,
            D = [],
            u
        }
        ,
        y(),
        u
    }
    ;
    var n = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(t) {
                if (t = parseFloat(t),
                !s.type.Number(t))
                    throw 0;
                return t
            },
            triggerElement: function(t) {
                if (t = t || void 0) {
                    var e = s.get.elements(t)[0];
                    if (!e)
                        throw 0;
                    t = e
                }
                return t
            },
            triggerHook: function(t) {
                var e = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (s.type.Number(t))
                    t = Math.max(0, Math.min(parseFloat(t), 1));
                else {
                    if (!(t in e))
                        throw 0;
                    t = e[t]
                }
                return t
            },
            reverse: function(t) {
                return !!t
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    t.Scene.addOption = function(t, e, i, s) {
        t in n.defaults || (n.defaults[t] = e,
        n.validate[t] = i,
        s && n.shifts.push(t))
    }
    ,
    t.Scene.extend = function(e) {
        var i = this;
        t.Scene = function() {
            return i.apply(this, arguments),
            this.$super = s.extend({}, this),
            e.apply(this, arguments) || this
        }
        ,
        s.extend(t.Scene, i),
        t.Scene.prototype = i.prototype,
        t.Scene.prototype.constructor = t.Scene
    }
    ,
    t.Event = function(t, e, i, n) {
        for (var s in n = n || {})
            this[s] = n[s];
        return this.type = t,
        this.target = this.currentTarget = i,
        this.namespace = e || "",
        this.timeStamp = this.timestamp = Date.now(),
        this
    }
    ;
    var s = t._util = function(t) {
        var e, i = {}, n = function(t) {
            return parseFloat(t) || 0
        }, s = function(e) {
            return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
        }, o = function(e, i, o, r) {
            if ((i = i === document ? t : i) === t)
                r = !1;
            else if (!u.DomElement(i))
                return 0;
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
            if (o && r) {
                var l = s(i);
                a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
            }
            return a
        }, r = function(t) {
            return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, (function(t) {
                return t[1].toUpperCase()
            }
            ))
        };
        i.extend = function(t) {
            for (t = t || {},
            e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var i in arguments[e])
                        arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
        }
        ,
        i.isMarginCollapseType = function(t) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
        }
        ;
        var a = 0
          , l = ["ms", "moz", "webkit", "o"]
          , c = t.requestAnimationFrame
          , h = t.cancelAnimationFrame;
        for (e = 0; !c && e < l.length; ++e)
            c = t[l[e] + "RequestAnimationFrame"],
            h = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
        c || (c = function(e) {
            var i = (new Date).getTime()
              , n = Math.max(0, 16 - (i - a))
              , s = t.setTimeout((function() {
                e(i + n)
            }
            ), n);
            return a = i + n,
            s
        }
        ),
        h || (h = function(e) {
            t.clearTimeout(e)
        }
        ),
        i.rAF = c.bind(t),
        i.cAF = h.bind(t);
        var u = i.type = function(t) {
            return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        }
        ;
        u.String = function(t) {
            return "string" === u(t)
        }
        ,
        u.Function = function(t) {
            return "function" === u(t)
        }
        ,
        u.Array = function(t) {
            return Array.isArray(t)
        }
        ,
        u.Number = function(t) {
            return !u.Array(t) && t - parseFloat(t) + 1 >= 0
        }
        ,
        u.DomElement = function(t) {
            return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
        }
        ;
        var d = i.get = {};
        return d.elements = function(e) {
            var i = [];
            if (u.String(e))
                try {
                    e = document.querySelectorAll(e)
                } catch (t) {
                    return i
                }
            if ("nodelist" === u(e) || u.Array(e))
                for (var n = 0, s = i.length = e.length; s > n; n++) {
                    var o = e[n];
                    i[n] = u.DomElement(o) ? o : d.elements(o)
                }
            else
                (u.DomElement(e) || e === document || e === t) && (i = [e]);
            return i
        }
        ,
        d.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
        }
        ,
        d.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
        }
        ,
        d.width = function(t, e, i) {
            return o("width", t, e, i)
        }
        ,
        d.height = function(t, e, i) {
            return o("height", t, e, i)
        }
        ,
        d.offset = function(t, e) {
            var i = {
                top: 0,
                left: 0
            };
            if (t && t.getBoundingClientRect) {
                var n = t.getBoundingClientRect();
                i.top = n.top,
                i.left = n.left,
                e || (i.top += d.scrollTop(),
                i.left += d.scrollLeft())
            }
            return i
        }
        ,
        i.addClass = function(t, e) {
            e && (t.classList ? t.classList.add(e) : t.className += " " + e)
        }
        ,
        i.removeClass = function(t, e) {
            e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }
        ,
        i.css = function(t, e) {
            if (u.String(e))
                return s(t)[r(e)];
            if (u.Array(e)) {
                var i = {}
                  , n = s(t);
                return e.forEach((function(t) {
                    i[t] = n[r(t)]
                }
                )),
                i
            }
            for (var o in e) {
                var a = e[o];
                a == parseFloat(a) && (a += "px"),
                t.style[r(o)] = a
            }
        }
        ,
        i
    }(window || {});
    return t
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "jquery"], e) : "object" == typeof exports ? e(require("scrollmagic"), require("jquery")) : e(t.ScrollMagic, t.jQuery)
}(this, (function(t, e) {
    "use strict";
    t._util.get.elements = function(t) {
        return e(t).toArray()
    }
    ,
    t._util.addClass = function(t, i) {
        e(t).addClass(i)
    }
    ,
    t._util.removeClass = function(t, i) {
        e(t).removeClass(i)
    }
    ,
    e.ScrollMagic = t
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"),
    e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
}(this, (function(t, e, i) {
    "use strict";
    t.Scene.addOption("tweenChanges", !1, (function(t) {
        return !!t
    }
    )),
    t.Scene.extend((function() {
        var t, n = this;
        n.on("progress.plugin_gsap", (function() {
            s()
        }
        )),
        n.on("destroy.plugin_gsap", (function(t) {
            n.removeTween(t.reset)
        }
        ));
        var s = function() {
            if (t) {
                var e = n.progress()
                  , i = n.state();
                t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
            }
        };
        n.setTween = function(o, r, a) {
            var l;
            arguments.length > 1 && (arguments.length < 3 && (a = r,
            r = 1),
            o = e.to(o, r, a));
            try {
                (l = i ? new i({
                    smoothChildTiming: !0
                }).add(o) : o).pause()
            } catch (t) {
                return n
            }
            return t && n.removeTween(),
            t = l,
            o.repeat && -1 === o.repeat() && (t.repeat(-1),
            t.yoyo(o.yoyo())),
            s(),
            n
        }
        ,
        n.removeTween = function(e) {
            return t && (e && t.progress(0).pause(),
            t.kill(),
            t = void 0),
            n
        }
    }
    ))
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic"], e) : e("object" == typeof exports ? require("scrollmagic") : t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic)
}(this, (function(t) {
    "use strict";
    var e = "0.85em"
      , i = "9999"
      , n = 15
      , s = t._util
      , o = 0;
    t.Scene.extend((function() {
        var t, e = this;
        e.addIndicators = function(i) {
            if (!t) {
                var n = {
                    name: "",
                    indent: 0,
                    parent: void 0,
                    colorStart: "green",
                    colorEnd: "red",
                    colorTrigger: "blue"
                };
                i = s.extend({}, n, i),
                o++,
                t = new r(e,i),
                e.on("add.plugin_addIndicators", t.add),
                e.on("remove.plugin_addIndicators", t.remove),
                e.on("destroy.plugin_addIndicators", e.removeIndicators),
                e.controller() && t.add()
            }
            return e
        }
        ,
        e.removeIndicators = function() {
            return t && (t.remove(),
            this.off("*.plugin_addIndicators"),
            t = void 0),
            e
        }
    }
    )),
    t.Controller.addOption("addIndicators", !1),
    t.Controller.extend((function() {
        var e = this
          , i = e.info()
          , o = i.container
          , r = i.isDocument
          , a = i.vertical
          , l = {
            groups: []
        };
        this._indicators = l;
        var c = function() {
            l.updateBoundsPositions()
        }
          , h = function() {
            l.updateTriggerGroupPositions()
        };
        return o.addEventListener("resize", h),
        r || (window.addEventListener("resize", h),
        window.addEventListener("scroll", h)),
        o.addEventListener("resize", c),
        o.addEventListener("scroll", c),
        this._indicators.updateBoundsPositions = function(t) {
            for (var e, i, r, c = t ? [s.extend({}, t.triggerGroup, {
                members: [t]
            })] : l.groups, h = c.length, u = {}, d = a ? "left" : "top", p = a ? "width" : "height", f = a ? s.get.scrollLeft(o) + s.get.width(o) - n : s.get.scrollTop(o) + s.get.height(o) - n; h--; )
                for (e = (r = c[h]).members.length,
                i = s.get[p](r.element.firstChild); e--; )
                    u[d] = f - i,
                    s.css(r.members[e].bounds, u)
        }
        ,
        this._indicators.updateTriggerGroupPositions = function(t) {
            for (var i, c, h, u, d, p = t ? [t] : l.groups, f = p.length, g = r ? document.body : o, m = r ? {
                top: 0,
                left: 0
            } : s.get.offset(g, !0), v = a ? s.get.width(o) - n : s.get.height(o) - n, y = a ? "width" : "height", _ = a ? "Y" : "X"; f--; )
                c = (i = p[f]).element,
                d = (h = i.triggerHook * e.info("size")) > (u = s.get[y](c.firstChild.firstChild)) ? "translate" + _ + "(-100%)" : "",
                s.css(c, {
                    top: m.top + (a ? h : v - i.members[0].options.indent),
                    left: m.left + (a ? v - i.members[0].options.indent : h)
                }),
                s.css(c.firstChild.firstChild, {
                    "-ms-transform": d,
                    "-webkit-transform": d,
                    transform: d
                })
        }
        ,
        this._indicators.updateTriggerGroupLabel = function(t) {
            var e = "trigger" + (t.members.length > 1 ? "" : " " + t.members[0].options.name), i = t.element.firstChild.firstChild, n;
            i.textContent !== e && (i.textContent = e,
            a && l.updateBoundsPositions())
        }
        ,
        this.addScene = function(i) {
            this._options.addIndicators && i instanceof t.Scene && i.controller() === e && i.addIndicators(),
            this.$super.addScene.apply(this, arguments)
        }
        ,
        this.destroy = function() {
            o.removeEventListener("resize", h),
            r || (window.removeEventListener("resize", h),
            window.removeEventListener("scroll", h)),
            o.removeEventListener("resize", c),
            o.removeEventListener("scroll", c),
            this.$super.destroy.apply(this, arguments)
        }
        ,
        e
    }
    ));
    var r = function(t, e) {
        var i, n, r = this, l = a.bounds(), c = a.start(e.colorStart), h = a.end(e.colorEnd), u = e.parent && s.get.elements(e.parent)[0];
        e.name = e.name || o,
        c.firstChild.textContent += " " + e.name,
        h.textContent += " " + e.name,
        l.appendChild(c),
        l.appendChild(h),
        r.options = e,
        r.bounds = l,
        r.triggerGroup = void 0,
        this.add = function() {
            n = t.controller(),
            i = n.info("vertical");
            var e = n.info("isDocument");
            u || (u = e ? document.body : n.info("container")),
            e || "static" !== s.css(u, "position") || s.css(u, {
                position: "relative"
            }),
            t.on("change.plugin_addIndicators", p),
            t.on("shift.plugin_addIndicators", d),
            _(),
            m(),
            setTimeout((function() {
                n._indicators.updateBoundsPositions(r)
            }
            ), 0)
        }
        ,
        this.remove = function() {
            if (r.triggerGroup) {
                if (t.off("change.plugin_addIndicators", p),
                t.off("shift.plugin_addIndicators", d),
                r.triggerGroup.members.length > 1) {
                    var e = r.triggerGroup;
                    e.members.splice(e.members.indexOf(r), 1),
                    n._indicators.updateTriggerGroupLabel(e),
                    n._indicators.updateTriggerGroupPositions(e),
                    r.triggerGroup = void 0
                } else
                    y();
                g()
            }
        }
        ;
        var d = function() {
            m()
        }
          , p = function(t) {
            "triggerHook" === t.what && _()
        }
          , f = function() {
            var t = n.info("vertical");
            s.css(c.firstChild, {
                "border-bottom-width": t ? 1 : 0,
                "border-right-width": t ? 0 : 1,
                bottom: t ? -1 : e.indent,
                right: t ? e.indent : -1,
                padding: t ? "0 8px" : "2px 4px"
            }),
            s.css(h, {
                "border-top-width": t ? 1 : 0,
                "border-left-width": t ? 0 : 1,
                top: t ? "100%" : "",
                right: t ? e.indent : "",
                bottom: t ? "" : e.indent,
                left: t ? "" : "100%",
                padding: t ? "0 8px" : "2px 4px"
            }),
            u.appendChild(l)
        }
          , g = function() {
            l.parentNode.removeChild(l)
        }
          , m = function() {
            l.parentNode !== u && f();
            var e = {};
            e[i ? "top" : "left"] = t.triggerPosition(),
            e[i ? "height" : "width"] = t.duration(),
            s.css(l, e),
            s.css(h, {
                display: t.duration() > 0 ? "" : "none"
            })
        }
          , v = function() {
            var o = a.trigger(e.colorTrigger)
              , l = {};
            l[i ? "right" : "bottom"] = 0,
            l[i ? "border-top-width" : "border-left-width"] = 1,
            s.css(o.firstChild, l),
            s.css(o.firstChild.firstChild, {
                padding: i ? "0 8px 3px 8px" : "3px 4px"
            }),
            document.body.appendChild(o);
            var c = {
                triggerHook: t.triggerHook(),
                element: o,
                members: [r]
            };
            n._indicators.groups.push(c),
            r.triggerGroup = c,
            n._indicators.updateTriggerGroupLabel(c),
            n._indicators.updateTriggerGroupPositions(c)
        }
          , y = function() {
            n._indicators.groups.splice(n._indicators.groups.indexOf(r.triggerGroup), 1),
            r.triggerGroup.element.parentNode.removeChild(r.triggerGroup.element),
            r.triggerGroup = void 0
        }
          , _ = function() {
            var e = t.triggerHook()
              , i = 1e-4;
            if (!(r.triggerGroup && Math.abs(r.triggerGroup.triggerHook - e) < i)) {
                for (var s, o = n._indicators.groups, a = o.length; a--; )
                    if (s = o[a],
                    Math.abs(s.triggerHook - e) < i)
                        return r.triggerGroup && (1 === r.triggerGroup.members.length ? y() : (r.triggerGroup.members.splice(r.triggerGroup.members.indexOf(r), 1),
                        n._indicators.updateTriggerGroupLabel(r.triggerGroup),
                        n._indicators.updateTriggerGroupPositions(r.triggerGroup))),
                        s.members.push(r),
                        r.triggerGroup = s,
                        void n._indicators.updateTriggerGroupLabel(s);
                if (r.triggerGroup) {
                    if (1 === r.triggerGroup.members.length)
                        return r.triggerGroup.triggerHook = e,
                        void n._indicators.updateTriggerGroupPositions(r.triggerGroup);
                    r.triggerGroup.members.splice(r.triggerGroup.members.indexOf(r), 1),
                    n._indicators.updateTriggerGroupLabel(r.triggerGroup),
                    n._indicators.updateTriggerGroupPositions(r.triggerGroup),
                    r.triggerGroup = void 0
                }
                v()
            }
        }
    }
      , a = {
        start: function(t) {
            var e = document.createElement("div");
            e.textContent = "start",
            s.css(e, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            });
            var i = document.createElement("div");
            return s.css(i, {
                position: "absolute",
                overflow: "visible",
                width: 0,
                height: 0
            }),
            i.appendChild(e),
            i
        },
        end: function(t) {
            var e = document.createElement("div");
            return e.textContent = "end",
            s.css(e, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            }),
            e
        },
        bounds: function() {
            var t = document.createElement("div");
            return s.css(t, {
                position: "absolute",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": e
            }),
            t.style.zIndex = i,
            t
        },
        trigger: function(t) {
            var n = document.createElement("div");
            n.textContent = "trigger",
            s.css(n, {
                position: "relative"
            });
            var o = document.createElement("div");
            s.css(o, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            }),
            o.appendChild(n);
            var r = document.createElement("div");
            return s.css(r, {
                position: "fixed",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": e
            }),
            r.style.zIndex = i,
            r.appendChild(o),
            r
        }
    }
}
)),
function(t) {
    var e = t(window);
    t.fn.visible = function(t, i, n) {
        if (!(this.length < 1)) {
            var s = this.length > 1 ? this.eq(0) : this
              , o = s.get(0)
              , r = e.width()
              , a = e.height()
              , n = n || "both"
              , l = !0 !== i || o.offsetWidth * o.offsetHeight;
            if ("function" == typeof o.getBoundingClientRect) {
                var c = o.getBoundingClientRect()
                  , h = c.top >= 0 && c.top < a
                  , u = c.bottom > 0 && c.bottom <= a
                  , d = c.left >= 0 && c.left < r
                  , p = c.right > 0 && c.right <= r
                  , f = t ? h || u : h && u
                  , g = t ? d || p : d && p;
                if ("both" === n)
                    return l && f && g;
                if ("vertical" === n)
                    return l && f;
                if ("horizontal" === n)
                    return l && g
            } else {
                var m = e.scrollTop()
                  , v = m + a
                  , y = e.scrollLeft()
                  , _ = y + r
                  , w = s.offset()
                  , b = w.top
                  , T = b + s.height()
                  , x = w.left
                  , S = x + s.width()
                  , k = !0 === t ? T : b
                  , C = !0 === t ? b : T
                  , P = !0 === t ? S : x
                  , E = !0 === t ? x : S;
                if ("both" === n)
                    return !!l && v >= C && k >= m && _ >= E && P >= y;
                if ("vertical" === n)
                    return !!l && v >= C && k >= m;
                if ("horizontal" === n)
                    return !!l && _ >= E && P >= y
            }
        }
    }
}(jQuery),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, (function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n;
            return (i[t] = i[t] || [])[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0
              , s = i[n];
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t]; s; ) {
                var r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e),
                s = i[n += r ? 0 : 1]
            }
            return this
        }
    }
    ,
    t
}
)),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function(i) {
        return e(t, i)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, (function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function n(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    function s(t, e, o) {
        return this instanceof s ? ("string" == typeof t && (t = document.querySelectorAll(t)),
        this.elements = n(t),
        this.options = i({}, this.options),
        "function" == typeof e ? o = e : i(this.options, e),
        o && this.on("always", o),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new s(t,e,o)
    }
    function o(t) {
        this.img = t
    }
    function r(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var a = t.jQuery
      , l = t.console;
    s.prototype = Object.create(e.prototype),
    s.prototype.options = {},
    s.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    s.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    }
    ;
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return s.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var s = n && n[2];
                s && this.addBackground(s, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    s.prototype.addImage = function(t) {
        var e = new o(t);
        this.images.push(e)
    }
    ,
    s.prototype.addBackground = function(t, e) {
        var i = new r(t,e);
        this.images.push(i)
    }
    ,
    s.prototype.check = function() {
        function t(t, i, n) {
            setTimeout((function() {
                e.progress(t, i, n)
            }
            ))
        }
        var e = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach((function(e) {
            e.once("progress", t),
            e.check()
        }
        )) : void this.complete()
    }
    ,
    s.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && l && l.log("progress: " + i, t, e)
    }
    ,
    s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    o.prototype = Object.create(e.prototype),
    o.prototype.check = function() {
        var t;
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    o.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    o.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    o.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    o.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    o.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype = Object.create(o.prototype),
    r.prototype.check = function() {
        var t;
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    s.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && ((a = e).fn.imagesLoaded = function(t, e) {
            var i;
            return new s(this,t,e).jqDeferred.promise(a(this))
        }
        )
    }
    ,
    s.makeJQueryPlugin(),
    s
}
)),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        function e(e, n) {
            var s, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(o, o.initials),
            o.activeBreakpoint = null,
            o.animType = null,
            o.animProp = null,
            o.breakpoints = [],
            o.breakpointSettings = [],
            o.cssTransitions = !1,
            o.focussed = !1,
            o.interrupted = !1,
            o.hidden = "hidden",
            o.paused = !0,
            o.positionProp = null,
            o.respondTo = null,
            o.rowCount = 1,
            o.shouldClick = !0,
            o.$slider = t(e),
            o.$slidesCache = null,
            o.transformType = null,
            o.transitionType = null,
            o.visibilityChange = "visibilitychange",
            o.windowWidth = 0,
            o.windowTimer = null,
            s = t(e).data("slick") || {},
            o.options = t.extend({}, o.defaults, n, s),
            o.currentSlide = o.options.initialSlide,
            o.originalSettings = o.options,
            void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
            o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
            o.visibilityChange = "webkitvisibilitychange"),
            o.autoPlay = t.proxy(o.autoPlay, o),
            o.autoPlayClear = t.proxy(o.autoPlayClear, o),
            o.autoPlayIterator = t.proxy(o.autoPlayIterator, o),
            o.changeSlide = t.proxy(o.changeSlide, o),
            o.clickHandler = t.proxy(o.clickHandler, o),
            o.selectHandler = t.proxy(o.selectHandler, o),
            o.setPosition = t.proxy(o.setPosition, o),
            o.swipeHandler = t.proxy(o.swipeHandler, o),
            o.dragHandler = t.proxy(o.dragHandler, o),
            o.keyHandler = t.proxy(o.keyHandler, o),
            o.instanceUid = i++,
            o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            o.registerBreakpoints(),
            o.init(!0)
        }
        var i = 0;
        return e
    }()).prototype.activateADA = function() {
        var t;
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var s = this;
        if ("boolean" == typeof i)
            n = i,
            i = null;
        else if (0 > i || i >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : !0 === n ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each((function(e, i) {
            t(i).attr("data-slick-index", e)
        }
        )),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, i) {
        var n = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        t({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === s.options.vertical ? (n[s.animType] = "translate(" + t + "px, 0px)",
                s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)",
                s.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(n),
        i && setTimeout((function() {
            s.disableTransition(),
            i.call()
        }
        ), s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)),
        i
    }
    ,
    e.prototype.asNavFor = function(e) {
        var i, n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each((function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        }
        ))
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, i, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"),
            i = t("<ul />").addClass(n.options.dotsClass),
            e = 0; e <= n.getDotCount(); e += 1)
                i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each((function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }
        )),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, i, n, s, o, r, a = this;
        if (n = document.createDocumentFragment(),
        o = a.$slider.children(),
        a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows,
            s = Math.ceil(o.length / r),
            t = 0; s > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var h = t * r + (e * a.options.slidesPerRow + i);
                        o.get(h) && c.appendChild(o.get(h))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, i) {
        var n, s, o, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? o = c : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(c, l)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in s = null,
            r.breakpoints)
                r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (s = r.breakpoints[n]) : o > r.breakpoints[n] && (s = r.breakpoints[n]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            a = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            a = s),
            e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }
    ,
    e.prototype.changeSlide = function(e, i) {
        var n, s, o, r = this, a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(),
        a.is("li") || (a = a.closest("li")),
        n = (o = r.slideCount % r.options.slidesToScroll != 0) ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, i);
            break;
        case "next":
            s = 0 === n ? r.options.slidesToScroll : n,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, i);
            break;
        case "index":
            var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(l), !1, i),
            a.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, i, n;
        if (i = 0,
        t > (e = this.getNavigableIndexes())[e.length - 1])
            t = e[e.length - 1];
        else
            for (var s in e) {
                if (t < e[s]) {
                    t = i;
                    break
                }
                i = e[s]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        var e;
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        t(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }
        )),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.$slider.removeClass("slick-dotted"),
        i.unslicked = !0,
        e || i.$slider.trigger("destroy", [i])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , i = {};
        i[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        e && setTimeout((function() {
            i.disableTransition(t),
            e.call()
        }
        ), i.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", (function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout((function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"),
                e.autoPlay())
            }
            ), 0)
        }
        ))
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t;
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , i = 0
          , n = 0;
        if (!0 === t.options.infinite)
            for (; e < t.slideCount; )
                ++n,
                e = i + t.options.slidesToScroll,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++n,
                e = i + t.options.slidesToScroll,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, i, n, s = this, o = 0;
        return s.slideOffset = 0,
        i = s.$slides.first().outerHeight(!0),
        !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1,
        o = i * s.options.slidesToShow * -1),
        s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1,
        o = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1,
        o = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth,
        o = (t + s.options.slidesToShow - s.slideCount) * i),
        s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0,
        o = 0),
        !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0,
        s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)),
        e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + o,
        !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow),
        e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1),
        e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        e += (s.$list.width() - n.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e;
        return this.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = this, i = 0, n = 0, s = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
        n = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); t > i; )
            s.push(i),
            i = n + e.options.slidesToScroll,
            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, i, n, s = this;
        return n = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0,
        !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each((function(e, o) {
            return o.offsetLeft - n + t(o).outerWidth() / 2 > -1 * s.swipeLeft ? (i = o,
            !1) : void 0
        }
        )),
        e = Math.abs(t(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var i;
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler()),
        e && i.$slider.trigger("init", [i]),
        !0 === i.options.accessibility && i.initADA(),
        i.options.autoplay && (i.paused = !1,
        i.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        e.$slideTrack.attr("role", "listbox"),
        e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }
        )),
        null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each((function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }
        )).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each((function() {
                var e = t(this)
                  , i = t(this).attr("data-lazy")
                  , n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, (function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, (function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }
                        )),
                        r.$slider.trigger("lazyLoaded", [r, e, i])
                    }
                    ))
                }
                ,
                n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    r.$slider.trigger("lazyLoadError", [r, e, i])
                }
                ,
                n.src = i
            }
            ))
        }
        var i, n, s, o, r = this;
        !0 === r.options.centerMode ? !0 === r.options.infinite ? o = (s = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)),
        o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide,
        o = Math.ceil(s + r.options.slidesToShow),
        !0 === r.options.fade && (s > 0 && s--,
        o <= r.slideCount && o++)),
        e(i = r.$slider.find(".slick-slide").slice(s, o)),
        r.slideCount <= r.options.slidesToShow ? e(n = r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        var t;
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(),
        t.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(),
        t.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]),
        e.animating = !1,
        e.setPosition(),
        e.swipeLeft = null,
        e.options.autoplay && e.autoPlay(),
        !0 === e.options.accessibility && e.initADA())
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        var t;
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, s, o = this, r = t("img[data-lazy]", o.$slider);
        r.length ? (i = r.first(),
        n = i.attr("data-lazy"),
        (s = document.createElement("img")).onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"),
            !0 === o.options.adaptiveHeight && o.setPosition(),
            o.$slider.trigger("lazyLoaded", [o, i, n]),
            o.progressiveLazyLoad()
        }
        ,
        s.onerror = function() {
            3 > e ? setTimeout((function() {
                o.progressiveLazyLoad(e + 1)
            }
            ), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            o.$slider.trigger("lazyLoadError", [o, i, n]),
            o.progressiveLazyLoad())
        }
        ,
        s.src = n) : o.$slider.trigger("allImagesLoaded", [o])
    }
    ,
    e.prototype.refresh = function(e) {
        var i, n, s = this;
        n = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > n && (s.currentSlide = n),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        i = s.currentSlide,
        s.destroy(!0),
        t.extend(s, s.initials, {
            currentSlide: i
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, i, n, s = this, o = s.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            for (e in s.respondTo = s.options.respondTo || "window",
            o)
                if (n = s.breakpoints.length - 1,
                i = o[e].breakpoint,
                o.hasOwnProperty(e)) {
                    for (; n >= 0; )
                        s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1),
                        n--;
                    s.breakpoints.push(i),
                    s.breakpointSettings[i] = o[e].settings
                }
            s.breakpoints.sort((function(t, e) {
                return s.options.mobileFirst ? t - e : e - t
            }
            ))
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout((function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }
        ), 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        return "boolean" == typeof t ? t = !0 === (e = t) ? 0 : n.slideCount - 1 : t = !0 === e ? --t : t,
        !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(),
        !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        void n.reinit())
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, i, n = this, s = {};
        !0 === n.options.rtl && (t = -t),
        e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        s[n.positionProp] = t,
        !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {},
        !1 === n.cssTransitions ? (s[n.animType] = "translate(" + e + ", " + i + ")",
        n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)",
        n.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each((function(n, s) {
            e = i.slideWidth * n * -1,
            !0 === i.options.rtl ? t(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }
        )),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function(e, i, n) {
        var s, o, r, a, l, c = this, h = !1;
        if ("object" === t.type(e) ? (r = e,
        h = i,
        l = "multiple") : "string" === t.type(e) && (r = e,
        a = i,
        h = n,
        "responsive" === e && "array" === t.type(i) ? l = "responsive" : void 0 !== i && (l = "single")),
        "single" === l)
            c.options[r] = a;
        else if ("multiple" === l)
            t.each(r, (function(t, e) {
                c.options[t] = e
            }
            ));
        else if ("responsive" === l)
            for (o in a)
                if ("array" !== t.type(c.options.responsive))
                    c.options.responsive = [a[o]];
                else {
                    for (s = c.options.responsive.length - 1; s >= 0; )
                        c.options.responsive[s].breakpoint === a[o].breakpoint && c.options.responsive.splice(s, 1),
                        s--;
                    c.options.responsive.push(a[o])
                }
        h && (c.unload(),
        c.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, i, n, s, o = this;
        i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        o.$slides.eq(t).addClass("slick-current"),
        !0 === o.options.centerMode ? (e = Math.floor(o.options.slidesToShow / 2),
        !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t,
        i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
        o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow,
        n = !0 === o.options.infinite ? o.options.slidesToShow + t : t,
        o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === o.options.lazyLoad && o.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, i, n, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (i = null,
        s.slideCount > s.options.slidesToShow)) {
            for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - n; e -= 1)
                i = e - 1,
                t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; n > e; e += 1)
                i = e,
                t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                t(this).attr("id", "")
            }
            ))
        }
    }
    ,
    e.prototype.interrupt = function(t) {
        var e = this;
        t || e.autoPlay(),
        e.interrupted = t
    }
    ,
    e.prototype.selectHandler = function(e) {
        var i = this
          , n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , s = parseInt(n.attr("data-slick-index"));
        return s || (s = 0),
        i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(s),
        void i.asNavFor(s)) : void i.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(t, e, i) {
        var n, s, o, r, a, l = null, c = this;
        return e = e || !1,
        !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t),
        n = t,
        l = c.getLeft(n),
        r = c.getLeft(c.currentSlide),
        c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft,
        !1 === c.options.infinite && !1 === c.options.centerMode && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) || !1 === c.options.infinite && !0 === c.options.centerMode && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (n = c.currentSlide,
        !0 !== i ? c.animateSlide(r, (function() {
            c.postSlide(n)
        }
        )) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
        s = 0 > n ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
        c.animating = !0,
        c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
        o = c.currentSlide,
        c.currentSlide = s,
        c.setSlideClasses(c.currentSlide),
        c.options.asNavFor && ((a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
        c.updateDots(),
        c.updateArrows(),
        !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(o),
        c.fadeSlide(s, (function() {
            c.postSlide(s)
        }
        ))) : c.postSlide(s),
        void c.animateHeight()) : void (!0 !== i ? c.animateSlide(l, (function() {
            c.postSlide(s)
        }
        )) : c.postSlide(s))))
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, i, n, s = this;
        return t = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        i = Math.atan2(e, t),
        0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)),
        45 >= n && n >= 0 || 360 >= n && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1,
        n.interrupted = !1,
        n.shouldClick = !(n.touchObject.swipeLength > 10),
        void 0 === n.touchObject.curX)
            return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
            case "left":
            case "down":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                n.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e),
            n.touchObject = {},
            n.$slider.trigger("swipe", [n, i]))
        } else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, i, n, s, o, r = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!r.dragging || o && 1 !== o.length) && (e = r.getLeft(r.currentSlide),
        r.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX,
        r.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY,
        r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))),
        !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))),
        "vertical" !== (i = r.swipeDirection()) ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(),
        s = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1),
        !0 === r.options.verticalSwiping && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1),
        n = r.touchObject.swipeLength,
        r.touchObject.edgeHit = !1,
        !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction,
        r.touchObject.edgeHit = !0),
        !1 === r.options.vertical ? r.swipeLeft = e + n * s : r.swipeLeft = e + n * (r.$list.height() / r.listWidth) * s,
        !0 === r.options.verticalSwiping && (r.swipeLeft = e + n * s),
        !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null,
        !1) : void r.setCSS(r.swipeLeft))) : void 0)
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
        !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        void (i.dragging = !0))
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }
    ,
    t.fn.slick = function(t) {
        var i, n, s = this, o = t, r = Array.prototype.slice.call(arguments, 1), a = s.length;
        for (i = 0; a > i; i++)
            if ("object" == typeof o || void 0 === o ? s[i].slick = new e(s[i],o) : n = s[i].slick[o].apply(s[i].slick, r),
            void 0 !== n)
                return n;
        return s
    }
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.NProgress = e()
}(this, (function() {
    function t(t, e, i) {
        return e > t ? e : t > i ? i : t
    }
    function e(t) {
        return 100 * (-1 + t)
    }
    function i(t, i, n) {
        var s;
        return (s = "translate3d" === c.positionUsing ? {
            transform: "translate3d(" + e(t) + "%,0,0)"
        } : "translate" === c.positionUsing ? {
            transform: "translate(" + e(t) + "%,0)"
        } : {
            "margin-left": e(t) + "%"
        }).transition = "all " + i + "ms " + n,
        s
    }
    function n(t, e) {
        var i;
        return ("string" == typeof t ? t : r(t)).indexOf(" " + e + " ") >= 0
    }
    function s(t, e) {
        var i = r(t)
          , s = i + e;
        n(i, e) || (t.className = s.substring(1))
    }
    function o(t, e) {
        var i = r(t), s;
        n(t, e) && (s = i.replace(" " + e + " ", " "),
        t.className = s.substring(1, s.length - 1))
    }
    function r(t) {
        return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
    }
    function a(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    var l = {
        version: "0.2.0"
    }
      , c = l.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    l.configure = function(t) {
        var e, i;
        for (e in t)
            void 0 !== (i = t[e]) && t.hasOwnProperty(e) && (c[e] = i);
        return this
    }
    ,
    l.status = null,
    l.set = function(e) {
        var n = l.isStarted();
        e = t(e, c.minimum, 1),
        l.status = 1 === e ? null : e;
        var s = l.render(!n)
          , o = s.querySelector(c.barSelector)
          , r = c.speed
          , a = c.easing;
        return s.offsetWidth,
        h((function(t) {
            "" === c.positionUsing && (c.positionUsing = l.getPositioningCSS()),
            u(o, i(e, r, a)),
            1 === e ? (u(s, {
                transition: "none",
                opacity: 1
            }),
            s.offsetWidth,
            setTimeout((function() {
                u(s, {
                    transition: "all " + r + "ms linear",
                    opacity: 0
                }),
                setTimeout((function() {
                    l.remove(),
                    t()
                }
                ), r)
            }
            ), r)) : setTimeout(t, r)
        }
        )),
        this
    }
    ,
    l.isStarted = function() {
        return "number" == typeof l.status
    }
    ,
    l.start = function() {
        l.status || l.set(0);
        var t = function() {
            setTimeout((function() {
                l.status && (l.trickle(),
                t())
            }
            ), c.trickleSpeed)
        };
        return c.trickle && t(),
        this
    }
    ,
    l.done = function(t) {
        return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
    }
    ,
    l.inc = function(e) {
        var i = l.status;
        return i ? ("number" != typeof e && (e = (1 - i) * t(Math.random() * i, .1, .95)),
        i = t(i + e, 0, .994),
        l.set(i)) : l.start()
    }
    ,
    l.trickle = function() {
        return l.inc(Math.random() * c.trickleRate)
    }
    ,
    function() {
        var t = 0
          , e = 0;
        l.promise = function(i) {
            return i && "resolved" !== i.state() ? (0 === e && l.start(),
            t++,
            e++,
            i.always((function() {
                0 === --e ? (t = 0,
                l.done()) : l.set((t - e) / t)
            }
            )),
            this) : this
        }
    }(),
    l.render = function(t) {
        if (l.isRendered())
            return document.getElementById("nprogress");
        s(document.documentElement, "nprogress-busy");
        var i = document.createElement("div");
        i.id = "nprogress",
        i.innerHTML = c.template;
        var n = i.querySelector(c.barSelector), o = t ? "-100" : e(l.status || 0), r = document.querySelector(c.parent), h;
        return u(n, {
            transition: "all 0 linear",
            transform: "translate3d(" + o + "%,0,0)"
        }),
        c.showSpinner || (h = i.querySelector(c.spinnerSelector)) && a(h),
        r != document.body && s(r, "nprogress-custom-parent"),
        r.appendChild(i),
        i
    }
    ,
    l.remove = function() {
        o(document.documentElement, "nprogress-busy"),
        o(document.querySelector(c.parent), "nprogress-custom-parent");
        var t = document.getElementById("nprogress");
        t && a(t)
    }
    ,
    l.isRendered = function() {
        return !!document.getElementById("nprogress")
    }
    ,
    l.getPositioningCSS = function() {
        var t = document.body.style
          , e = "WebkitTransform"in t ? "Webkit" : "MozTransform"in t ? "Moz" : "msTransform"in t ? "ms" : "OTransform"in t ? "O" : "";
        return e + "Perspective"in t ? "translate3d" : e + "Transform"in t ? "translate" : "margin"
    }
    ;
    var h = function() {
        function t() {
            var i = e.shift();
            i && i(t)
        }
        var e = [];
        return function(i) {
            e.push(i),
            1 == e.length && t()
        }
    }()
      , u = function() {
        function t(t) {
            return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(t, e) {
                return e.toUpperCase()
            }
            ))
        }
        function e(t) {
            var e = document.body.style;
            if (t in e)
                return t;
            for (var i = s.length, n = t.charAt(0).toUpperCase() + t.slice(1), o; i--; )
                if ((o = s[i] + n)in e)
                    return o;
            return t
        }
        function i(i) {
            return i = t(i),
            o[i] || (o[i] = e(i))
        }
        function n(t, e, n) {
            e = i(e),
            t.style[e] = n
        }
        var s = ["Webkit", "O", "Moz", "ms"]
          , o = {};
        return function(t, e) {
            var i = arguments, s, o;
            if (2 == i.length)
                for (s in e)
                    void 0 !== (o = e[s]) && e.hasOwnProperty(s) && n(t, s, o);
            else
                n(t, i[1], i[2])
        }
    }();
    return l
}
)),
function() {
    "use strict";
    /**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @version 1.0.3
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
    function t(i, n) {
        function s(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var o;
        if (n = n || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = n.touchBoundary || 10,
        this.layer = i,
        this.tapDelay = n.tapDelay || 200,
        !t.notNeeded(i)) {
            for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, c = r.length; c > l; l++)
                a[r[l]] = s(a[r[l]], a);
            e && (i.addEventListener("mouseover", this.onMouse, !0),
            i.addEventListener("mousedown", this.onMouse, !0),
            i.addEventListener("mouseup", this.onMouse, !0)),
            i.addEventListener("click", this.onClick, !0),
            i.addEventListener("touchstart", this.onTouchStart, !1),
            i.addEventListener("touchmove", this.onTouchMove, !1),
            i.addEventListener("touchend", this.onTouchEnd, !1),
            i.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (i.removeEventListener = function(t, e, n) {
                var s = Node.prototype.removeEventListener;
                "click" === t ? s.call(i, t, e.hijacked || e, n) : s.call(i, t, e, n)
            }
            ,
            i.addEventListener = function(t, e, n) {
                var s = Node.prototype.addEventListener;
                "click" === t ? s.call(i, t, e.hijacked || (e.hijacked = function(t) {
                    t.propagationStopped || e(t)
                }
                ), n) : s.call(i, t, e, n)
            }
            ),
            "function" == typeof i.onclick && (o = i.onclick,
            i.addEventListener("click", (function(t) {
                o(t)
            }
            ), !1),
            i.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Android") > 0
      , i = /iP(ad|hone|od)/.test(navigator.userAgent)
      , n = i && /OS 4_\d(_\d)?/.test(navigator.userAgent)
      , s = i && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent)
      , o = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (t.disabled)
                return !0;
            break;
        case "input":
            if (i && "file" === t.type || t.disabled)
                return !0;
            break;
        case "label":
        case "video":
            return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }
    ,
    t.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !e;
        case "input":
            switch (t.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !t.disabled && !t.readOnly;
        default:
            return /\bneedsfocus\b/.test(t.className)
        }
    }
    ,
    t.prototype.sendClick = function(t, e) {
        var i, n;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(),
        n = e.changedTouches[0],
        (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
        i.forwardedTouchEvent = !0,
        t.dispatchEvent(i)
    }
    ,
    t.prototype.determineEventType = function(t) {
        return e && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }
    ,
    t.prototype.focus = function(t) {
        var e;
        i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length,
        t.setSelectionRange(e, e)) : t.focus()
    }
    ,
    t.prototype.updateScrollParent = function(t) {
        var e, i;
        if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
            i = t;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    e = i,
                    t.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while (i)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }
    ,
    t.prototype.getTargetElementFromEventTarget = function(t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }
    ,
    t.prototype.onTouchStart = function(t) {
        var e, s, o;
        if (t.targetTouches.length > 1)
            return !0;
        if (e = this.getTargetElementFromEventTarget(t.target),
        s = t.targetTouches[0],
        i) {
            if ((o = window.getSelection()).rangeCount && !o.isCollapsed)
                return !0;
            if (!n) {
                if (s.identifier && s.identifier === this.lastTouchIdentifier)
                    return t.preventDefault(),
                    !1;
                this.lastTouchIdentifier = s.identifier,
                this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = t.timeStamp,
        this.targetElement = e,
        this.touchStartX = s.pageX,
        this.touchStartY = s.pageY,
        t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
        !0
    }
    ,
    t.prototype.touchHasMoved = function(t) {
        var e = t.changedTouches[0]
          , i = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
    }
    ,
    t.prototype.onTouchMove = function(t) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1,
        this.targetElement = null),
        !0)
    }
    ,
    t.prototype.findControl = function(t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }
    ,
    t.prototype.onTouchEnd = function(t) {
        var o, r, a, l, c, h = this.targetElement;
        if (!this.trackingClick)
            return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay)
            return this.cancelNextClick = !0,
            !0;
        if (this.cancelNextClick = !1,
        this.lastClickTime = t.timeStamp,
        r = this.trackingClickStart,
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        s && (c = t.changedTouches[0],
        (h = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || h).fastClickScrollParent = this.targetElement.fastClickScrollParent),
        "label" === (a = h.tagName.toLowerCase())) {
            if (o = this.findControl(h)) {
                if (this.focus(h),
                e)
                    return !1;
                h = o
            }
        } else if (this.needsFocus(h))
            return t.timeStamp - r > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null,
            !1) : (this.focus(h),
            this.sendClick(h, t),
            i && "select" === a || (this.targetElement = null,
            t.preventDefault()),
            !1);
        return !(!i || n || (l = h.fastClickScrollParent,
        !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(h) || (t.preventDefault(),
        this.sendClick(h, t)),
        !1)
    }
    ,
    t.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    }
    ,
    t.prototype.onMouse = function(t) {
        return !this.targetElement || (!!t.forwardedTouchEvent || (!(t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick)) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0,
        t.stopPropagation(),
        t.preventDefault(),
        !1)))
    }
    ,
    t.prototype.onClick = function(t) {
        var e;
        return this.trackingClick ? (this.targetElement = null,
        this.trackingClick = !1,
        !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null),
        e)
    }
    ,
    t.prototype.destroy = function() {
        var t = this.layer;
        e && (t.removeEventListener("mouseover", this.onMouse, !0),
        t.removeEventListener("mousedown", this.onMouse, !0),
        t.removeEventListener("mouseup", this.onMouse, !0)),
        t.removeEventListener("click", this.onClick, !0),
        t.removeEventListener("touchstart", this.onTouchStart, !1),
        t.removeEventListener("touchmove", this.onTouchMove, !1),
        t.removeEventListener("touchend", this.onTouchEnd, !1),
        t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }
    ,
    t.notNeeded = function(t) {
        var i, n, s;
        if (void 0 === window.ontouchstart)
            return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!e)
                return !0;
            if (i = document.querySelector("meta[name=viewport]")) {
                if (-1 !== i.content.indexOf("user-scalable=no"))
                    return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
        }
        if (o && ((s = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && s[2] >= 3 && (i = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== i.content.indexOf("user-scalable=no"))
                return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth)
                return !0
        }
        return "none" === t.style.msTouchAction
    }
    ,
    t.attach = function(e, i) {
        return new t(e,i)
    }
    ,
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define((function() {
        return t
    }
    )) : "undefined" != typeof module && module.exports ? (module.exports = t.attach,
    module.exports.FastClick = t) : window.FastClick = t
}();
/*!
 *
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
var mejs = mejs || {};
mejs.version = "2.22.0",
mejs.meIndex = 0,
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo", "video/x-vimeo"]
    }]
},
mejs.Utility = {
    encodeUrl: function(t) {
        return encodeURIComponent(t)
    },
    escapeHTML: function(t) {
        return t.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(t) {
        var e = document.createElement("div");
        return e.innerHTML = '<a href="' + this.escapeHTML(t) + '">x</a>',
        e.firstChild.href
    },
    getScriptPath: function(t) {
        for (var e, i, n, s, o, r, a = 0, l = "", c = "", h = document.getElementsByTagName("script"), u = h.length, d = t.length; u > a; a++) {
            for ((i = (s = h[a].src).lastIndexOf("/")) > -1 ? (r = s.substring(i + 1),
            o = s.substring(0, i + 1)) : (r = s,
            o = ""),
            e = 0; d > e; e++)
                if (c = t[e],
                (n = r.indexOf(c)) > -1) {
                    l = o;
                    break
                }
            if ("" !== l)
                break
        }
        return l
    },
    calculateTimeFormat: function(t, e, i) {
        0 > t && (t = 0),
        void 0 === i && (i = 25);
        var n = e.timeFormat, s = n[0], o = n[1] == n[0], r = o ? 2 : 1, a = ":", l = Math.floor(t / 3600) % 24, c = Math.floor(t / 60) % 60, h = Math.floor(t % 60), u, d = [[Math.floor((t % 1 * i).toFixed(3)), "f"], [h, "s"], [c, "m"], [l, "h"]];
        n.length < r && (a = n[r]);
        for (var p = !1, f = 0, g = d.length; g > f; f++)
            if (-1 !== n.indexOf(d[f][1]))
                p = !0;
            else if (p) {
                for (var m = !1, v = f; g > v; v++)
                    if (d[v][0] > 0) {
                        m = !0;
                        break
                    }
                if (!m)
                    break;
                o || (n = s + n),
                n = d[f][1] + a + n,
                o && (n = d[f][1] + n),
                s = d[f][1]
            }
        e.currentTimeFormat = n
    },
    twoDigitsString: function(t) {
        return 10 > t ? "0" + t : String(t)
    },
    secondsToTimeCode: function(t, e, n, s) {
        if (0 > t && (t = 0),
        "object" != typeof e) {
            var o = "m:ss";
            o = e ? "hh:mm:ss" : o,
            e = {
                currentTimeFormat: o = n ? o + ":ff" : o,
                framesPerSecond: s || 25
            }
        }
        var r = e.framesPerSecond;
        void 0 === r && (r = 25);
        var o = e.currentTimeFormat
          , a = Math.floor(t / 3600) % 24
          , l = Math.floor(t / 60) % 60
          , c = Math.floor(t % 60)
          , h = Math.floor((t % 1 * r).toFixed(3));
        lis = [[h, "f"], [c, "s"], [l, "m"], [a, "h"]];
        var u = o;
        for (i = 0,
        len = lis.length; i < len; i++)
            u = (u = u.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0]))).replace(lis[i][1], lis[i][0]);
        return u
    },
    timeCodeToSeconds: function(t, e, i, n) {
        void 0 === i ? i = !1 : void 0 === n && (n = 25);
        var s = t.split(":")
          , o = parseInt(s[0], 10)
          , r = parseInt(s[1], 10)
          , a = parseInt(s[2], 10)
          , l = 0
          , c = 0;
        return i && (l = parseInt(s[3]) / n),
        c = 3600 * o + 60 * r + a + l
    },
    convertSMPTEtoSeconds: function(t) {
        if ("string" != typeof t)
            return !1;
        var e = 0
          , i = -1 != (t = t.replace(",", ".")).indexOf(".") ? t.split(".")[1].length : 0
          , n = 1;
        t = t.split(":").reverse();
        for (var s = 0; s < t.length; s++)
            n = 1,
            s > 0 && (n = Math.pow(60, s)),
            e += Number(t[s]) * n;
        return Number(e.toFixed(i))
    },
    removeSwf: function(t) {
        var e = document.getElementById(t);
        e && /object|embed/i.test(e.nodeName) && (mejs.MediaFeatures.isIE ? (e.style.display = "none",
        function() {
            4 == e.readyState ? mejs.Utility.removeObjectInIE(t) : setTimeout(arguments.callee, 10)
        }()) : e.parentNode.removeChild(e))
    },
    removeObjectInIE: function(t) {
        var e = document.getElementById(t);
        if (e) {
            for (var i in e)
                "function" == typeof e[i] && (e[i] = null);
            e.parentNode.removeChild(e)
        }
    },
    determineScheme: function(t) {
        return t && -1 != t.indexOf("://") ? t.substr(0, t.indexOf("://") + 3) : "//"
    }
},
mejs.PluginDetector = {
    hasPluginVersion: function(t, e) {
        var i = this.plugins[t];
        return e[1] = e[1] || 0,
        e[2] = e[2] || 0,
        i[0] > e[0] || i[0] == e[0] && i[1] > e[1] || i[0] == e[0] && i[1] == e[1] && i[2] >= e[2]
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(t, e, i, n, s) {
        this.plugins[t] = this.detectPlugin(e, i, n, s)
    },
    detectPlugin: function(t, e, i, n) {
        var s, o, r, a = [0, 0, 0];
        if (void 0 !== this.nav.plugins && "object" == typeof this.nav.plugins[t]) {
            if ((s = this.nav.plugins[t].description) && (void 0 === this.nav.mimeTypes || !this.nav.mimeTypes[e] || this.nav.mimeTypes[e].enabledPlugin))
                for (a = s.replace(t, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."),
                o = 0; o < a.length; o++)
                    a[o] = parseInt(a[o].match(/\d+/), 10)
        } else if (void 0 !== window.ActiveXObject)
            try {
                (r = new ActiveXObject(i)) && (a = n(r))
            } catch (t) {}
        return a
    }
},
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", (function(t) {
    var e = []
      , i = t.GetVariable("$version");
    return i && (i = i.split(" ")[1].split(","),
    e = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]),
    e
}
)),
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", (function(t) {
    var e = [0, 0, 0, 0]
      , i = function(t, e, i, n) {
        for (; t.isVersionSupported(e[0] + "." + e[1] + "." + e[2] + "." + e[3]); )
            e[i] += n;
        e[i] -= n
    };
    return i(t, e, 0, 1),
    i(t, e, 1, 1),
    i(t, e, 2, 1e4),
    i(t, e, 2, 1e3),
    i(t, e, 2, 100),
    i(t, e, 2, 10),
    i(t, e, 2, 1),
    i(t, e, 3, 1),
    e
}
)),
mejs.MediaFeatures = {
    init: function() {
        var t, e, i = this, n = document, s = mejs.PluginDetector.nav, o = mejs.PluginDetector.ua.toLowerCase(), r = ["source", "track", "audio", "video"];
        i.isiPad = null !== o.match(/ipad/i),
        i.isiPhone = null !== o.match(/iphone/i),
        i.isiOS = i.isiPhone || i.isiPad,
        i.isAndroid = null !== o.match(/android/i),
        i.isBustedAndroid = null !== o.match(/android 2\.[12]/),
        i.isBustedNativeHTTPS = "https:" === location.protocol && (null !== o.match(/android [12]\./) || null !== o.match(/macintosh.* version.* safari/)),
        i.isIE = -1 != s.appName.toLowerCase().indexOf("microsoft") || null !== s.appName.toLowerCase().match(/trident/gi),
        i.isChrome = null !== o.match(/chrome/gi),
        i.isChromium = null !== o.match(/chromium/gi),
        i.isFirefox = null !== o.match(/firefox/gi),
        i.isWebkit = null !== o.match(/webkit/gi),
        i.isGecko = null !== o.match(/gecko/gi) && !i.isWebkit && !i.isIE,
        i.isOpera = null !== o.match(/opera/gi),
        i.hasTouch = "ontouchstart"in window,
        i.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        for (t = 0; t < r.length; t++)
            e = document.createElement(r[t]);
        i.supportsMediaTag = void 0 !== e.canPlayType || i.isBustedAndroid;
        try {
            e.canPlayType("video/mp4")
        } catch (t) {
            i.supportsMediaTag = !1
        }
        i.supportsPointerEvents = function() {
            var t, e = document.createElement("x"), i = document.documentElement, n = window.getComputedStyle;
            return "pointerEvents"in e.style && (e.style.pointerEvents = "auto",
            e.style.pointerEvents = "x",
            i.appendChild(e),
            t = n && "auto" === n(e, "").pointerEvents,
            i.removeChild(e),
            !!t)
        }(),
        i.hasFirefoxPluginMovingProblem = !1,
        i.hasiOSFullScreen = void 0 !== e.webkitEnterFullscreen,
        i.hasNativeFullscreen = void 0 !== e.requestFullscreen,
        i.hasWebkitNativeFullScreen = void 0 !== e.webkitRequestFullScreen,
        i.hasMozNativeFullScreen = void 0 !== e.mozRequestFullScreen,
        i.hasMsNativeFullScreen = void 0 !== e.msRequestFullscreen,
        i.hasTrueNativeFullScreen = i.hasWebkitNativeFullScreen || i.hasMozNativeFullScreen || i.hasMsNativeFullScreen,
        i.nativeFullScreenEnabled = i.hasTrueNativeFullScreen,
        i.hasMozNativeFullScreen ? i.nativeFullScreenEnabled = document.mozFullScreenEnabled : i.hasMsNativeFullScreen && (i.nativeFullScreenEnabled = document.msFullscreenEnabled),
        i.isChrome && (i.hasiOSFullScreen = !1),
        i.hasTrueNativeFullScreen && (i.fullScreenEventName = "",
        i.hasWebkitNativeFullScreen ? i.fullScreenEventName = "webkitfullscreenchange" : i.hasMozNativeFullScreen ? i.fullScreenEventName = "mozfullscreenchange" : i.hasMsNativeFullScreen && (i.fullScreenEventName = "MSFullscreenChange"),
        i.isFullScreen = function() {
            return i.hasMozNativeFullScreen ? n.mozFullScreen : i.hasWebkitNativeFullScreen ? n.webkitIsFullScreen : i.hasMsNativeFullScreen ? null !== n.msFullscreenElement : void 0
        }
        ,
        i.requestFullScreen = function(t) {
            i.hasWebkitNativeFullScreen ? t.webkitRequestFullScreen() : i.hasMozNativeFullScreen ? t.mozRequestFullScreen() : i.hasMsNativeFullScreen && t.msRequestFullscreen()
        }
        ,
        i.cancelFullScreen = function() {
            i.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : i.hasMozNativeFullScreen ? document.mozCancelFullScreen() : i.hasMsNativeFullScreen && document.msExitFullscreen()
        }
        ),
        i.hasiOSFullScreen && o.match(/mac os x 10_5/i) && (i.hasNativeFullScreen = !1,
        i.hasiOSFullScreen = !1)
    }
},
mejs.MediaFeatures.init(),
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function(t) {
        this.currentTime = t
    },
    setMuted: function(t) {
        this.muted = t
    },
    setVolume: function(t) {
        this.volume = t
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(t) {
        for (var e = this.getElementsByTagName("source"); e.length > 0; )
            this.removeChild(e[0]);
        var i, n;
        if ("string" == typeof t)
            this.src = t;
        else
            for (i = 0; i < t.length; i++)
                if (n = t[i],
                this.canPlayType(n.type)) {
                    this.src = n.src;
                    break
                }
    },
    setVideoSize: function(t, e) {
        this.width = t,
        this.height = e
    }
},
mejs.PluginMediaElement = function(t, e, i) {
    this.id = t,
    this.pluginType = e,
    this.src = i,
    this.events = {},
    this.attributes = {}
}
,
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(),
        this.paused = !1)
    },
    load: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(),
        this.paused = !1)
    },
    pause: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? 1 == this.pluginApi.getPlayerState() && this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(),
        this.paused = !0)
    },
    stop: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(),
        this.paused = !0)
    },
    canPlayType: function(t) {
        var e, i, n, s = mejs.plugins[this.pluginType];
        for (e = 0; e < s.length; e++)
            if (n = s[e],
            mejs.PluginDetector.hasPluginVersion(this.pluginType, n.version))
                for (i = 0; i < n.types.length; i++)
                    if (t == n.types[i])
                        return "probably";
        return ""
    },
    positionFullscreenButton: function(t, e, i) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(t), Math.floor(e), i)
    },
    hideFullscreenButton: function() {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(t) {
        var e, i;
        if ("string" == typeof t)
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(t)),
            this.src = mejs.Utility.absolutizeUrl(t);
        else
            for (e = 0; e < t.length; e++)
                if (i = t[e],
                this.canPlayType(i.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(i.src)),
                    this.src = mejs.Utility.absolutizeUrl(i.src);
                    break
                }
    },
    setCurrentTime: function(t) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(t) : this.pluginApi.setCurrentTime(t),
        this.currentTime = t)
    },
    setVolume: function(t) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * t) : this.pluginApi.setVolume(t),
        this.volume = t)
    },
    setMuted: function(t) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (t ? this.pluginApi.mute() : this.pluginApi.unMute(),
        this.muted = t,
        this.dispatchEvent({
            type: "volumechange"
        })) : this.pluginApi.setMuted(t),
        this.muted = t)
    },
    setVideoSize: function(t, e) {
        this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = t + "px",
        this.pluginElement.style.height = e + "px"),
        null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(t, e)
    },
    setFullscreen: function(t) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(t)
    },
    enterFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function(t, e, i) {
        this.events[t] = this.events[t] || [],
        this.events[t].push(e)
    },
    removeEventListener: function(t, e) {
        if (!t)
            return this.events = {},
            !0;
        var i = this.events[t];
        if (!i)
            return !0;
        if (!e)
            return this.events[t] = [],
            !0;
        for (var n = 0; n < i.length; n++)
            if (i[n] === e)
                return this.events[t].splice(n, 1),
                !0;
        return !1
    },
    dispatchEvent: function(t) {
        var e, i = this.events[t.type];
        if (i)
            for (e = 0; e < i.length; e++)
                i[e].apply(this, [t])
    },
    hasAttribute: function(t) {
        return t in this.attributes
    },
    removeAttribute: function(t) {
        delete this.attributes[t]
    },
    getAttribute: function(t) {
        return this.hasAttribute(t) ? this.attributes[t] : ""
    },
    setAttribute: function(t, e) {
        this.attributes[t] = e
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id)
    }
},
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function() {},
    error: function() {}
},
mejs.MediaElement = function(t, e) {
    return mejs.HtmlMediaElementShim.create(t, e)
}
,
mejs.HtmlMediaElementShim = {
    create: function(t, e) {
        var i, n, s = {}, o = "string" == typeof t ? document.getElementById(t) : t, r = o.tagName.toLowerCase(), a = "audio" === r || "video" === r, l = a ? o.getAttribute("src") : o.getAttribute("href"), c = o.getAttribute("poster"), h = o.getAttribute("autoplay"), u = o.getAttribute("preload"), d = o.getAttribute("controls");
        for (n in mejs.MediaElementDefaults)
            s[n] = mejs.MediaElementDefaults[n];
        for (n in e)
            s[n] = e[n];
        return l = null == l || "" == l ? null : l,
        c = null == c ? "" : c,
        u = null == u || "false" === u ? "none" : u,
        h = !(null == h || "false" === h),
        d = !(null == d || "false" === d),
        (i = this.determinePlayback(o, s, mejs.MediaFeatures.supportsMediaTag, a, l)).url = null !== i.url ? mejs.Utility.absolutizeUrl(i.url) : "",
        i.scheme = mejs.Utility.determineScheme(i.url),
        "native" == i.method ? (mejs.MediaFeatures.isBustedAndroid && (o.src = i.url,
        o.addEventListener("click", (function() {
            o.play()
        }
        ), !1)),
        this.updateNative(i, s, h, u)) : "" !== i.method ? this.createPlugin(i, s, c, h, u, d) : (this.createErrorMessage(i, s, c),
        this)
    },
    determinePlayback: function(t, e, i, n, s) {
        var o, r, a, l, c, h, u, d, p, f, g, m = [], v = {
            method: "",
            url: "",
            htmlMediaElement: t,
            isVideo: "audio" != t.tagName.toLowerCase(),
            scheme: ""
        };
        if (void 0 !== e.type && "" !== e.type)
            if ("string" == typeof e.type)
                m.push({
                    type: e.type,
                    url: s
                });
            else
                for (o = 0; o < e.type.length; o++)
                    m.push({
                        type: e.type[o],
                        url: s
                    });
        else if (null !== s)
            h = this.formatType(s, t.getAttribute("type")),
            m.push({
                type: h,
                url: s
            });
        else
            for (o = 0; o < t.childNodes.length; o++)
                1 == (c = t.childNodes[o]).nodeType && "source" == c.tagName.toLowerCase() && (s = c.getAttribute("src"),
                h = this.formatType(s, c.getAttribute("type")),
                (!(g = c.getAttribute("media")) || !window.matchMedia || window.matchMedia && window.matchMedia(g).matches) && m.push({
                    type: h,
                    url: s
                }));
        if (!n && m.length > 0 && null !== m[0].url && this.getTypeFromFile(m[0].url).indexOf("audio") > -1 && (v.isVideo = !1),
        mejs.MediaFeatures.isBustedAndroid && (t.canPlayType = function(t) {
            return null !== t.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
        }
        ),
        mejs.MediaFeatures.isChromium && (t.canPlayType = function(t) {
            return null !== t.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
        }
        ),
        i && ("auto" === e.mode || "auto_plugin" === e.mode || "native" === e.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || !0 !== e.httpsBasicAuthSite)) {
            for (n || (f = document.createElement(v.isVideo ? "video" : "audio"),
            t.parentNode.insertBefore(f, t),
            t.style.display = "none",
            v.htmlMediaElement = t = f),
            o = 0; o < m.length; o++)
                if ("video/m3u8" == m[o].type || "" !== t.canPlayType(m[o].type).replace(/no/, "") || "" !== t.canPlayType(m[o].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== t.canPlayType(m[o].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                    v.method = "native",
                    v.url = m[o].url;
                    break
                }
            if ("native" === v.method && (null !== v.url && (t.src = v.url),
            "auto_plugin" !== e.mode))
                return v
        }
        if ("auto" === e.mode || "auto_plugin" === e.mode || "shim" === e.mode)
            for (o = 0; o < m.length; o++)
                for (h = m[o].type,
                r = 0; r < e.plugins.length; r++)
                    for (u = e.plugins[r],
                    d = mejs.plugins[u],
                    a = 0; a < d.length; a++)
                        if (null == (p = d[a]).version || mejs.PluginDetector.hasPluginVersion(u, p.version))
                            for (l = 0; l < p.types.length; l++)
                                if (h.toLowerCase() == p.types[l].toLowerCase())
                                    return v.method = u,
                                    v.url = m[o].url,
                                    v;
        return "auto_plugin" === e.mode && "native" === v.method || "" === v.method && m.length > 0 && (v.url = m[0].url),
        v
    },
    formatType: function(t, e) {
        return t && !e ? this.getTypeFromFile(t) : e && ~e.indexOf(";") ? e.substr(0, e.indexOf(";")) : e
    },
    getTypeFromFile: function(t) {
        var e = (t = t.split("?")[0]).substring(t.lastIndexOf(".") + 1).toLowerCase()
          , i = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(e) ? "video/" : "audio/";
        return this.getTypeFromExtension(e, i)
    },
    getTypeFromExtension: function(t, e) {
        switch (e = e || "",
        t) {
        case "mp4":
        case "m4v":
        case "m4a":
        case "f4v":
        case "f4a":
            return e + "mp4";
        case "flv":
            return e + "x-flv";
        case "webm":
        case "webma":
        case "webmv":
            return e + "webm";
        case "ogg":
        case "oga":
        case "ogv":
            return e + "ogg";
        case "m3u8":
            return "application/x-mpegurl";
        case "ts":
            return e + "mp2t";
        default:
            return e + t
        }
    },
    createErrorMessage: function(t, e, i) {
        var n = t.htmlMediaElement
          , s = document.createElement("div")
          , o = e.customError;
        s.className = "me-cannotplay";
        try {
            s.style.width = n.width + "px",
            s.style.height = n.height + "px"
        } catch (t) {}
        o || (o = '<a href="' + t.url + '">',
        "" !== i && (o += '<img src="' + i + '" width="100%" height="100%" alt="" />'),
        o += "<span>" + mejs.i18n.t("Download File") + "</span></a>"),
        s.innerHTML = o,
        n.parentNode.insertBefore(s, n),
        n.style.display = "none",
        e.error(n)
    },
    createPlugin: function(t, e, i, n, s, o) {
        var r, a, l, c = t.htmlMediaElement, h = 1, u = 1, d = "me_" + t.method + "_" + mejs.meIndex++, p = new mejs.PluginMediaElement(d,t.method,t.url), f = document.createElement("div");
        p.tagName = c.tagName;
        for (var g = 0; g < c.attributes.length; g++) {
            var m = c.attributes[g];
            m.specified && p.setAttribute(m.name, m.value)
        }
        for (a = c.parentNode; null !== a && null != a.tagName && "body" !== a.tagName.toLowerCase() && null != a.parentNode && null != a.parentNode.tagName && null != a.parentNode.constructor && "ShadowRoot" === a.parentNode.constructor.name; ) {
            if ("p" === a.parentNode.tagName.toLowerCase()) {
                a.parentNode.parentNode.insertBefore(a, a.parentNode);
                break
            }
            a = a.parentNode
        }
        switch (t.isVideo ? (h = e.pluginWidth > 0 ? e.pluginWidth : e.videoWidth > 0 ? e.videoWidth : null !== c.getAttribute("width") ? c.getAttribute("width") : e.defaultVideoWidth,
        u = e.pluginHeight > 0 ? e.pluginHeight : e.videoHeight > 0 ? e.videoHeight : null !== c.getAttribute("height") ? c.getAttribute("height") : e.defaultVideoHeight,
        h = mejs.Utility.encodeUrl(h),
        u = mejs.Utility.encodeUrl(u)) : e.enablePluginDebug && (h = 320,
        u = 240),
        p.success = e.success,
        f.className = "me-plugin",
        f.id = d + "_container",
        t.isVideo ? c.parentNode.insertBefore(f, c) : document.body.insertBefore(f, document.body.childNodes[0]),
        ("flash" === t.method || "silverlight" === t.method) && (l = ["id=" + d, "isvideo=" + (t.isVideo ? "true" : "false"), "autoplay=" + (n ? "true" : "false"), "preload=" + s, "width=" + h, "startvolume=" + e.startVolume, "timerrate=" + e.timerRate, "flashstreamer=" + e.flashStreamer, "height=" + u, "pseudostreamstart=" + e.pseudoStreamingStartQueryParam],
        null !== t.url && ("flash" == t.method ? l.push("file=" + mejs.Utility.encodeUrl(t.url)) : l.push("file=" + t.url)),
        e.enablePluginDebug && l.push("debug=true"),
        e.enablePluginSmoothing && l.push("smoothing=true"),
        e.enablePseudoStreaming && l.push("pseudostreaming=true"),
        o && l.push("controls=true"),
        e.pluginVars && (l = l.concat(e.pluginVars)),
        window[d + "_init"] = function() {
            switch (p.pluginType) {
            case "flash":
                p.pluginElement = p.pluginApi = document.getElementById(d);
                break;
            case "silverlight":
                p.pluginElement = document.getElementById(p.id),
                p.pluginApi = p.pluginElement.Content.MediaElementJS
            }
            null != p.pluginApi && p.success && p.success(p, c)
        }
        ,
        window[d + "_event"] = function(t, e) {
            var i, n, s;
            for (n in i = {
                type: t,
                target: p
            },
            e)
                p[n] = e[n],
                i[n] = e[n];
            s = e.bufferedTime || 0,
            i.target.buffered = i.buffered = {
                start: function(t) {
                    return 0
                },
                end: function(t) {
                    return s
                },
                length: 1
            },
            p.dispatchEvent(i)
        }
        ),
        t.method) {
        case "silverlight":
            f.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + d + '" name="' + d + '" width="' + h + '" height="' + u + '" class="mejs-shim"><param name="initParams" value="' + l.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + e.pluginPath + e.silverlightName + '" /></object>';
            break;
        case "flash":
            mejs.MediaFeatures.isIE ? (r = document.createElement("div"),
            f.appendChild(r),
            r.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + d + '" width="' + h + '" height="' + u + '" class="mejs-shim"><param name="movie" value="' + e.pluginPath + e.flashName + "?" + (new Date).getTime() + '" /><param name="flashvars" value="' + l.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + e.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : f.innerHTML = '<embed id="' + d + '" name="' + d + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + e.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + e.pluginPath + e.flashName + '" flashvars="' + l.join("&") + '" width="' + h + '" height="' + u + '" scale="default"class="mejs-shim"></embed>';
            break;
        case "youtube":
            var v;
            if (-1 != t.url.lastIndexOf("youtu.be"))
                -1 != (v = t.url.substr(t.url.lastIndexOf("/") + 1)).indexOf("?") && (v = v.substr(0, v.indexOf("?")));
            else {
                var y = t.url.match(/[?&]v=([^&#]+)|&|#|$/);
                y && (v = y[1])
            }
            youtubeSettings = {
                container: f,
                containerId: f.id,
                pluginMediaElement: p,
                pluginId: d,
                videoId: v,
                height: u,
                width: h,
                scheme: t.scheme
            },
            window.postMessage ? mejs.YouTubeApi.enqueueIframe(youtubeSettings) : mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) && mejs.YouTubeApi.createFlash(youtubeSettings, e);
            break;
        case "vimeo":
            var _ = d + "_player";
            if (p.vimeoid = t.url.substr(t.url.lastIndexOf("/") + 1),
            f.innerHTML = '<iframe src="' + t.scheme + "player.vimeo.com/video/" + p.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + _ + '" width="' + h + '" height="' + u + '" frameborder="0" class="mejs-shim" id="' + _ + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
            "function" == typeof $f) {
                var w = $f(f.childNodes[0])
                  , b = -1;
                w.addEvent("ready", (function() {
                    function t(t, e, i, n) {
                        var s = {
                            type: i,
                            target: e
                        };
                        "timeupdate" == i && (e.currentTime = s.currentTime = n.seconds,
                        e.duration = s.duration = n.duration),
                        e.dispatchEvent(s)
                    }
                    w.playVideo = function() {
                        w.api("play")
                    }
                    ,
                    w.stopVideo = function() {
                        w.api("unload")
                    }
                    ,
                    w.pauseVideo = function() {
                        w.api("pause")
                    }
                    ,
                    w.seekTo = function(t) {
                        w.api("seekTo", t)
                    }
                    ,
                    w.setVolume = function(t) {
                        w.api("setVolume", t)
                    }
                    ,
                    w.setMuted = function(t) {
                        t ? (w.lastVolume = w.api("getVolume"),
                        w.api("setVolume", 0)) : (w.api("setVolume", w.lastVolume),
                        delete w.lastVolume)
                    }
                    ,
                    w.getPlayerState = function() {
                        return b
                    }
                    ,
                    w.addEvent("play", (function() {
                        b = 1,
                        t(w, p, "play"),
                        t(w, p, "playing")
                    }
                    )),
                    w.addEvent("pause", (function() {
                        b = 2,
                        t(w, p, "pause")
                    }
                    )),
                    w.addEvent("finish", (function() {
                        b = 0,
                        t(w, p, "ended")
                    }
                    )),
                    w.addEvent("playProgress", (function(e) {
                        t(w, p, "timeupdate", e)
                    }
                    )),
                    w.addEvent("seek", (function(e) {
                        b = 3,
                        t(w, p, "seeked", e)
                    }
                    )),
                    w.addEvent("loadProgress", (function(e) {
                        b = 3,
                        t(w, p, "progress", e)
                    }
                    )),
                    p.pluginElement = f,
                    p.pluginApi = w,
                    p.success(p, p.pluginElement)
                }
                ))
            } else
                console.warn("You need to include froogaloop for vimeo to work")
        }
        return c.style.display = "none",
        c.removeAttribute("autoplay"),
        p
    },
    updateNative: function(t, e, i, n) {
        var s, o = t.htmlMediaElement;
        for (s in mejs.HtmlMediaElement)
            o[s] = mejs.HtmlMediaElement[s];
        return e.success(o, o),
        o
    }
},
mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function(t) {
        if (!this.isIframeStarted) {
            var e = document.createElement("script");
            e.src = t.scheme + "www.youtube.com/player_api";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(e, i),
            this.isIframeStarted = !0
        }
    },
    iframeQueue: [],
    enqueueIframe: function(t) {
        this.isLoaded ? this.createIframe(t) : (this.loadIframeApi(t),
        this.iframeQueue.push(t))
    },
    createIframe: function(t) {
        var e = t.pluginMediaElement
          , i = new YT.Player(t.containerId,{
            height: t.height,
            width: t.width,
            videoId: t.videoId,
            playerVars: {
                controls: 0,
                wmode: "transparent"
            },
            events: {
                onReady: function() {
                    i.setVideoSize = function(t, e) {
                        i.setSize(t, e)
                    }
                    ,
                    t.pluginMediaElement.pluginApi = i,
                    t.pluginMediaElement.pluginElement = document.getElementById(t.containerId),
                    e.success(e, e.pluginElement),
                    setInterval((function() {
                        mejs.YouTubeApi.createEvent(i, e, "timeupdate")
                    }
                    ), 250)
                },
                onStateChange: function(t) {
                    mejs.YouTubeApi.handleStateChange(t.data, i, e)
                }
            }
        })
    },
    createEvent: function(t, e, i) {
        var n = {
            type: i,
            target: e
        };
        if (t && t.getDuration) {
            e.currentTime = n.currentTime = t.getCurrentTime(),
            e.duration = n.duration = t.getDuration(),
            n.paused = e.paused,
            n.ended = e.ended,
            n.muted = t.isMuted(),
            n.volume = t.getVolume() / 100,
            n.bytesTotal = t.getVideoBytesTotal(),
            n.bufferedBytes = t.getVideoBytesLoaded();
            var s = n.bufferedBytes / n.bytesTotal * n.duration;
            n.target.buffered = n.buffered = {
                start: function(t) {
                    return 0
                },
                end: function(t) {
                    return s
                },
                length: 1
            }
        }
        e.dispatchEvent(n)
    },
    iFrameReady: function() {
        for (this.isLoaded = !0,
        this.isIframeLoaded = !0; this.iframeQueue.length > 0; ) {
            var t = this.iframeQueue.pop();
            this.createIframe(t)
        }
    },
    flashPlayers: {},
    createFlash: function(t) {
        this.flashPlayers[t.pluginId] = t;
        var e, i = t.scheme + "www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + t.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (e = document.createElement("div"),
        t.container.appendChild(e),
        e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + t.scheme + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + t.pluginId + '" width="' + t.width + '" height="' + t.height + '" class="mejs-shim"><param name="movie" value="' + i + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : t.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + t.pluginId + '" data="' + i + '" width="' + t.width + '" height="' + t.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(t) {
        var e = this.flashPlayers[t]
          , i = document.getElementById(t)
          , n = e.pluginMediaElement;
        n.pluginApi = n.pluginElement = i,
        e.success(n, n.pluginElement),
        i.cueVideoById(e.videoId);
        var s = e.containerId + "_callback";
        window[s] = function(t) {
            mejs.YouTubeApi.handleStateChange(t, i, n)
        }
        ,
        i.addEventListener("onStateChange", s),
        setInterval((function() {
            mejs.YouTubeApi.createEvent(i, n, "timeupdate")
        }
        ), 250),
        mejs.YouTubeApi.createEvent(i, n, "canplay")
    },
    handleStateChange: function(t, e, i) {
        switch (t) {
        case -1:
            i.paused = !0,
            i.ended = !0,
            mejs.YouTubeApi.createEvent(e, i, "loadedmetadata");
            break;
        case 0:
            i.paused = !1,
            i.ended = !0,
            mejs.YouTubeApi.createEvent(e, i, "ended");
            break;
        case 1:
            i.paused = !1,
            i.ended = !1,
            mejs.YouTubeApi.createEvent(e, i, "play"),
            mejs.YouTubeApi.createEvent(e, i, "playing");
            break;
        case 2:
            i.paused = !0,
            i.ended = !1,
            mejs.YouTubeApi.createEvent(e, i, "pause");
            break;
        case 3:
            mejs.YouTubeApi.createEvent(e, i, "progress");
            break;
        case 5:
        }
    }
},
window.onYouTubePlayerAPIReady = function() {
    mejs.YouTubeApi.iFrameReady()
}
,
window.onYouTubePlayerReady = function(t) {
    mejs.YouTubeApi.flashReady(t)
}
,
window.mejs = mejs,
window.MediaElement = mejs.MediaElement,
function(t, e, i) {
    "use strict";
    var n = {
        locale: {
            language: e.i18n && e.i18n.locale.language || "",
            strings: e.i18n && e.i18n.locale.strings || {}
        },
        ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
        methods: {},
        getLanguage: function() {
            var t = n.locale.language || window.navigator.userLanguage || window.navigator.language;
            return n.ietf_lang_regex.exec(t) ? t : null
        }
    };
    "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language),
    n.methods.checkPlain = function(t) {
        var e, i, n = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        for (e in t = String(t),
        n)
            n.hasOwnProperty(e) && (i = new RegExp(e,"g"),
            t = t.replace(i, n[e]));
        return t
    }
    ,
    n.methods.t = function(t, e) {
        return n.locale.strings && n.locale.strings[e.context] && n.locale.strings[e.context][t] && (t = n.locale.strings[e.context][t]),
        n.methods.checkPlain(t)
    }
    ,
    n.t = function(t, e) {
        if ("string" == typeof t && t.length > 0) {
            var i = n.getLanguage();
            return e = e || {
                context: i
            },
            n.methods.t(t, e)
        }
        throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        }
    }
    ,
    e.i18n = n
}(document, mejs),
function(t, e) {
    "use strict";
    "undefined" != typeof mejsL10n && (t[mejsL10n.language] = mejsL10n.strings)
}(mejs.i18n.locale.strings),
function(t, e) {
    var i = e(t, t.document);
    t.lazySizes = i,
    "object" == typeof module && module.exports && (module.exports = i)
}(window, (function(t, e) {
    "use strict";
    if (e.getElementsByClassName) {
        var i, n = e.documentElement, s = t.Date, o = t.HTMLPictureElement, r = "addEventListener", a = "getAttribute", l = t[r], c = t.setTimeout, h = t.requestAnimationFrame || c, u = t.requestIdleCallback, d = /^picture$/i, p = ["load", "error", "lazyincluded", "_lazyloaded"], f = {}, g = Array.prototype.forEach, m = function(t, e) {
            return f[e] || (f[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
            f[e].test(t[a]("class") || "") && f[e]
        }, v = function(t, e) {
            m(t, e) || t.setAttribute("class", (t[a]("class") || "").trim() + " " + e)
        }, y = function(t, e) {
            var i;
            (i = m(t, e)) && t.setAttribute("class", (t[a]("class") || "").replace(i, " "))
        }, _ = function(t, e, i) {
            var n = i ? r : "removeEventListener";
            i && _(t, e),
            p.forEach((function(i) {
                t[n](i, e)
            }
            ))
        }, w = function(t, i, n, s, o) {
            var r = e.createEvent("CustomEvent");
            return r.initCustomEvent(i, !s, !o, n || {}),
            t.dispatchEvent(r),
            r
        }, b = function(e, n) {
            var s;
            !o && (s = t.picturefill || i.pf) ? s({
                reevaluate: !0,
                elements: [e]
            }) : n && n.src && (e.src = n.src)
        }, T = function(t, e) {
            return (getComputedStyle(t, null) || {})[e]
        }, x = function(t, e, n) {
            for (n = n || t.offsetWidth; n < i.minSize && e && !t._lazysizesWidth; )
                n = e.offsetWidth,
                e = e.parentNode;
            return n
        }, S = function() {
            var t, i, n = [], s = function() {
                var e;
                for (t = !0,
                i = !1; n.length; )
                    (e = n.shift())[0].apply(e[1], e[2]);
                t = !1
            };
            return function(o) {
                t ? o.apply(this, arguments) : (n.push([o, this, arguments]),
                i || (i = !0,
                (e.hidden ? c : h)(s)))
            }
        }(), k = function(t, e) {
            return e ? function() {
                S(t)
            }
            : function() {
                var e = this
                  , i = arguments;
                S((function() {
                    t.apply(e, i)
                }
                ))
            }
        }, C = function(t) {
            var e, i = 0, n = 125, o = 999, r = o, a = function() {
                e = !1,
                i = s.now(),
                t()
            }, l = u ? function() {
                u(a, {
                    timeout: r
                }),
                r !== o && (r = o)
            }
            : k((function() {
                c(a)
            }
            ), !0);
            return function(t) {
                var o;
                (t = !0 === t) && (r = 66),
                e || (e = !0,
                0 > (o = n - (s.now() - i)) && (o = 0),
                t || 9 > o && u ? l() : c(l, o))
            }
        }, P = function(t) {
            var e, i, n = 99, o = function() {
                e = null,
                t()
            }, r = function() {
                var t = s.now() - i;
                n > t ? c(r, n - t) : (u || o)(o)
            };
            return function() {
                i = s.now(),
                e || (e = c(r, n))
            }
        }, E = function() {
            var o, h, u, p, f, x, E, O, A, M, z, L, R, D, F, j = /^img$/i, H = /^iframe$/i, B = "onscroll"in t && !/glebot/.test(navigator.userAgent), N = 0, X = 0, q = 0, Y = 0, W = function(t) {
                q--,
                t && t.target && _(t.target, W),
                (!t || 0 > q || !t.target) && (q = 0)
            }, U = function(t, i) {
                var s, o = t, r = "hidden" == T(e.body, "visibility") || "hidden" != T(t, "visibility");
                for (A -= i,
                L += i,
                M -= i,
                z += i; r && (o = o.offsetParent) && o != e.body && o != n; )
                    (r = (T(o, "opacity") || 1) > 0) && "visible" != T(o, "overflow") && (s = o.getBoundingClientRect(),
                    r = z > s.left && M < s.right && L > s.top - 1 && A < s.bottom + 1);
                return r
            }, G = function() {
                var t, e, s, r, l, c, d, p, g;
                if ((f = i.loadMode) && 8 > q && (t = o.length)) {
                    e = 0,
                    Y++,
                    null == D && ("expand"in i || (i.expand = n.clientHeight > 500 ? 500 : 400),
                    R = i.expand,
                    D = R * i.expFactor),
                    D > X && 1 > q && Y > 3 && f > 2 ? (X = D,
                    Y = 0) : X = f > 1 && Y > 2 && 6 > q ? R : 0;
                    for (; t > e; e++)
                        if (o[e] && !o[e]._lazyRace)
                            if (B)
                                if ((p = o[e][a]("data-expand")) && (c = 1 * p) || (c = X),
                                g !== c && (E = innerWidth + c * F,
                                O = innerHeight + c,
                                d = -1 * c,
                                g = c),
                                s = o[e].getBoundingClientRect(),
                                (L = s.bottom) >= d && (A = s.top) <= O && (z = s.right) >= d * F && (M = s.left) <= E && (L || z || M || A) && (u && 3 > q && !p && (3 > f || 4 > Y) || U(o[e], c))) {
                                    if (et(o[e]),
                                    l = !0,
                                    q > 9)
                                        break
                                } else
                                    !l && u && !r && 4 > q && 4 > Y && f > 2 && (h[0] || i.preloadAfterLoad) && (h[0] || !p && (L || z || M || A || "auto" != o[e][a](i.sizesAttr))) && (r = h[0] || o[e]);
                            else
                                et(o[e]);
                    r && !l && et(r)
                }
            }, V = C(G), Q = function(t) {
                v(t.target, i.loadedClass),
                y(t.target, i.loadingClass),
                _(t.target, J)
            }, K = k(Q), J = function(t) {
                K({
                    target: t.target
                })
            }, $ = function(t, e) {
                try {
                    t.contentWindow.location.replace(e)
                } catch (i) {
                    t.src = e
                }
            }, Z = function(t) {
                var e, n, s = t[a](i.srcsetAttr);
                (e = i.customMedia[t[a]("data-media") || t[a]("media")]) && t.setAttribute("media", e),
                s && t.setAttribute("srcset", s),
                e && ((n = t.parentNode).insertBefore(t.cloneNode(), t),
                n.removeChild(t))
            }, tt = k((function(t, e, n, s, o) {
                var r, l, h, u, f, m;
                (f = w(t, "lazybeforeunveil", e)).defaultPrevented || (s && (n ? v(t, i.autosizesClass) : t.setAttribute("sizes", s)),
                l = t[a](i.srcsetAttr),
                r = t[a](i.srcAttr),
                o && (u = (h = t.parentNode) && d.test(h.nodeName || "")),
                m = e.firesLoad || "src"in t && (l || r || u),
                f = {
                    target: t
                },
                m && (_(t, W, !0),
                clearTimeout(p),
                p = c(W, 2500),
                v(t, i.loadingClass),
                _(t, J, !0)),
                u && g.call(h.getElementsByTagName("source"), Z),
                l ? t.setAttribute("srcset", l) : r && !u && (H.test(t.nodeName) ? $(t, r) : t.src = r),
                (l || u) && b(t, {
                    src: r
                })),
                S((function() {
                    t._lazyRace && delete t._lazyRace,
                    y(t, i.lazyClass),
                    (!m || t.complete) && (m ? W(f) : q--,
                    Q(f))
                }
                ))
            }
            )), et = function(t) {
                var e, n = j.test(t.nodeName), s = n && (t[a](i.sizesAttr) || t[a]("sizes")), o = "auto" == s;
                (!o && u || !n || !t.src && !t.srcset || t.complete || m(t, i.errorClass)) && (e = w(t, "lazyunveilread").detail,
                o && I.updateElem(t, !0, t.offsetWidth),
                t._lazyRace = !0,
                q++,
                tt(t, e, o, s, n))
            }, it = function() {
                if (!u) {
                    if (s.now() - x < 999)
                        return void c(it, 999);
                    var t = P((function() {
                        i.loadMode = 3,
                        V()
                    }
                    ));
                    u = !0,
                    i.loadMode = 3,
                    V(),
                    l("scroll", (function() {
                        3 == i.loadMode && (i.loadMode = 2),
                        t()
                    }
                    ), !0)
                }
            };
            return {
                _: function() {
                    x = s.now(),
                    o = e.getElementsByClassName(i.lazyClass),
                    h = e.getElementsByClassName(i.lazyClass + " " + i.preloadClass),
                    F = i.hFac,
                    l("scroll", V, !0),
                    l("resize", V, !0),
                    t.MutationObserver ? new MutationObserver(V).observe(n, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (n[r]("DOMNodeInserted", V, !0),
                    n[r]("DOMAttrModified", V, !0),
                    setInterval(V, 999)),
                    l("hashchange", V, !0),
                    ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach((function(t) {
                        e[r](t, V, !0)
                    }
                    )),
                    /d$|^c/.test(e.readyState) ? it() : (l("load", it),
                    e[r]("DOMContentLoaded", V),
                    c(it, 2e4)),
                    V(o.length > 0)
                },
                checkElems: V,
                unveil: et
            }
        }(), I = function() {
            var t, n = k((function(t, e, i, n) {
                var s, o, r;
                if (t._lazysizesWidth = n,
                n += "px",
                t.setAttribute("sizes", n),
                d.test(e.nodeName || ""))
                    for (o = 0,
                    r = (s = e.getElementsByTagName("source")).length; r > o; o++)
                        s[o].setAttribute("sizes", n);
                i.detail.dataAttr || b(t, i.detail)
            }
            )), s = function(t, e, i) {
                var s, o = t.parentNode;
                o && (i = x(t, o, i),
                (s = w(t, "lazybeforesizes", {
                    width: i,
                    dataAttr: !!e
                })).defaultPrevented || (i = s.detail.width) && i !== t._lazysizesWidth && n(t, o, s, i))
            }, o = function() {
                var e, i = t.length;
                if (i)
                    for (e = 0; i > e; e++)
                        s(t[e])
            }, r = P(o);
            return {
                _: function() {
                    t = e.getElementsByClassName(i.autosizesClass),
                    l("resize", r)
                },
                checkElems: r,
                updateElem: s
            }
        }(), O = function() {
            O.i || (O.i = !0,
            I._(),
            E._())
        };
        return function() {
            var e, n = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.6,
                hFac: .8,
                loadMode: 2
            };
            for (e in i = t.lazySizesConfig || t.lazysizesConfig || {},
            n)
                e in i || (i[e] = n[e]);
            t.lazySizesConfig = i,
            c((function() {
                i.init && O()
            }
            ))
        }(),
        {
            cfg: i,
            autoSizer: I,
            loader: E,
            init: O,
            uP: b,
            aC: v,
            rC: y,
            hC: m,
            fire: w,
            gW: x,
            rAF: S
        }
    }
}
)),
function(t, e) {
    "use strict";
    function i(t, i) {
        if (!s[t]) {
            var n = e.createElement(i ? "link" : "script")
              , o = e.getElementsByTagName("script")[0];
            i ? (n.rel = "stylesheet",
            n.href = t) : n.src = t,
            s[t] = !0,
            s[n.src || n.href] = !0,
            o.parentNode.insertBefore(n, o)
        }
    }
    var n, s = {};
    e.addEventListener && (n = function(t, i) {
        var n = e.createElement("img");
        n.onload = function() {
            n.onload = null,
            n.onerror = null,
            n = null,
            i()
        }
        ,
        n.onerror = n.onload,
        n.src = t,
        n && n.complete && n.onload && n.onload()
    }
    ,
    addEventListener("lazybeforeunveil", (function(e) {
        var s, o, r, a;
        e.defaultPrevented || ("none" == e.target.preload && (e.target.preload = "auto"),
        (s = e.target.getAttribute("data-link")) && i(s, !0),
        (s = e.target.getAttribute("data-script")) && i(s),
        (s = e.target.getAttribute("data-require")) && t.require && require([s]),
        (r = e.target.getAttribute("data-bg")) && (e.detail.firesLoad = !0,
        n(r, o = function() {
            e.target.style.backgroundImage = "url(" + r + ")",
            e.detail.firesLoad = !1,
            lazySizes.fire(e.target, "_lazyloaded", {}, !0, !0)
        }
        )),
        (a = e.target.getAttribute("data-poster")) && (e.detail.firesLoad = !0,
        n(a, o = function() {
            e.target.poster = a,
            e.detail.firesLoad = !1,
            lazySizes.fire(e.target, "_lazyloaded", {}, !0, !0)
        }
        )))
    }
    ), !1))
}(window, document),
function($, t, e, i) {
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this.init()
    }
    var s = "accordion"
      , o = {
        transitionSpeed: 300,
        transitionEasing: "ease",
        controlElement: "[data-control]",
        contentElement: "[data-content]",
        groupElement: "[data-accordion-group]",
        singleOpen: !0
    };
    n.prototype.init = function() {
        function i(t, e, i) {
            var n;
            return function s() {
                function o() {
                    i || t.apply(r, a),
                    n = null
                }
                var r = this
                  , a = arguments;
                n ? clearTimeout(n) : i && t.apply(r, a),
                n = setTimeout(o, e || 100)
            }
        }
        function n() {
            var t, i = (e.body || e.documentElement).style, n = "transition";
            if ("string" == typeof i[n])
                return !0;
            var s = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
            n = "Transition";
            for (var o = 0; o < s.length; o++)
                if ("string" == typeof i[s[o] + n])
                    return !0;
            return !1
        }
        function s(e) {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame ? requestAnimationFrame(e) || webkitRequestAnimationFrame(e) || mozRequestAnimationFrame(e) : setTimeout(e, 1e3 / 60)
        }
        function o(t, e) {
            e ? _.css({
                "-webkit-transition": "",
                transition: ""
            }) : _.css({
                "-webkit-transition": "max-height " + m.transitionSpeed + "ms " + m.transitionEasing,
                transition: "max-height " + m.transitionSpeed + "ms " + m.transitionEasing
            })
        }
        function r(t) {
            var e = 0;
            t.children().each((function() {
                e += $(this).outerHeight(!0)
            }
            )),
            t.data("oHeight", e)
        }
        function a(t, e, i, n) {
            var s = t.filter(".open").find("> [data-content]"), o = s.find("[data-accordion].open > [data-content]"), r;
            m.singleOpen || (o = o.not(e.siblings("[data-accordion].open").find("> [data-content]"))),
            r = s.add(o),
            t.hasClass("open") && r.each((function() {
                var t = $(this).data("oHeight");
                switch (n) {
                case "+":
                    $(this).data("oHeight", t + i);
                    break;
                case "-":
                    $(this).data("oHeight", t - i);
                    break;
                default:
                    throw "updateParentHeight method needs an operation"
                }
                $(this).css("max-height", $(this).data("oHeight"))
            }
            ))
        }
        function l(t) {
            if (t.hasClass("open")) {
                var e = t.find("> [data-content]")
                  , i = e.find("[data-accordion].open > [data-content]")
                  , n = e.add(i);
                r(n),
                n.css("max-height", n.data("oHeight"))
            }
        }
        function c(t, e) {
            if (t.trigger("accordion.close"),
            x) {
                var i;
                if (b)
                    a(t.parents("[data-accordion]"), t, e.data("oHeight"), "-");
                e.css(T),
                t.removeClass("open")
            } else
                e.css("max-height", e.data("oHeight")),
                e.animate(T, m.transitionSpeed),
                t.removeClass("open")
        }
        function h(t, e) {
            if (t.trigger("accordion.open"),
            x) {
                var i;
                if (o(e),
                b)
                    a(t.parents("[data-accordion]"), t, e.data("oHeight"), "+");
                s((function() {
                    e.css("max-height", e.data("oHeight"))
                }
                )),
                t.addClass("open")
            } else
                e.animate({
                    "max-height": e.data("oHeight")
                }, m.transitionSpeed, (function() {
                    e.css({
                        "max-height": "none"
                    })
                }
                )),
                t.addClass("open")
        }
        function u(t) {
            var e = t.closest(m.groupElement)
              , i = t.siblings("[data-accordion]").filter(".open")
              , n = i.find("[data-accordion]").filter(".open")
              , s = i.add(n);
            s.each((function() {
                var t = $(this)
                  , e = t.find(m.contentElement);
                c(t, e)
            }
            )),
            s.removeClass("open")
        }
        function d() {
            var t = !!m.singleOpen && v.parents(m.groupElement).length > 0;
            r(_),
            t && u(v),
            v.hasClass("open") ? c(v, _) : h(v, _)
        }
        function p() {
            y.on("click", d),
            y.on("accordion.toggle", (function() {
                if (m.singleOpen && y.length > 1)
                    return !1;
                d()
            }
            )),
            $(t).on("resize", i((function() {
                l(v)
            }
            )))
        }
        function f() {
            _.each((function() {
                var t = $(this);
                0 != t.css("max-height") && (t.closest("[data-accordion]").hasClass("open") ? (o(t),
                r(t),
                t.css("max-height", t.data("oHeight"))) : t.css({
                    "max-height": 0,
                    overflow: "hidden"
                }))
            }
            )),
            v.attr("data-accordion") || (v.attr("data-accordion", ""),
            v.find(m.controlElement).attr("data-control", ""),
            v.find(m.contentElement).attr("data-content", ""))
        }
        var g = this, m = g.options, v = $(g.element), y = v.find("> " + m.controlElement), _ = v.find("> " + m.contentElement), w, b = v.parents("[data-accordion]").length > 0, T = {
            "max-height": 0,
            overflow: "hidden"
        }, x = n();
        f(),
        p()
    }
    ,
    $.fn[s] = function(t) {
        return this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        ))
    }
}(jQuery, window, document),
/*!
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */
function($) {
    function t(t, n, s) {
        var o = t[0]
          , r = /er/.test(s) ? g : /bl/.test(s) ? p : u
          , a = s == m ? {
            checked: o[u],
            disabled: o[p],
            indeterminate: "true" == t.attr(g) || "false" == t.attr(f)
        } : o[r];
        if (/^(ch|di|in)/.test(s) && !a)
            e(t, r);
        else if (/^(un|en|de)/.test(s) && a)
            i(t, r);
        else if (s == m)
            for (var l in a)
                a[l] ? e(t, l, !0) : i(t, l, !0);
        else
            n && "toggle" != s || (n || t[T]("ifClicked"),
            a ? o[v] !== h && i(t, r) : e(t, r))
    }
    function e(t, e, n) {
        var c = t[0]
          , m = t.parent()
          , y = e == u
          , _ = e == g
          , T = e == p
          , x = _ ? f : y ? d : "enabled"
          , k = s(t, x + o(c[v]))
          , C = s(t, e + o(c[v]));
        if (!0 !== c[e]) {
            if (!n && e == u && c[v] == h && c.name) {
                var P = t.closest("form")
                  , E = 'input[name="' + c.name + '"]';
                (E = P.length ? P.find(E) : $(E)).each((function() {
                    this !== c && $(this).data(a) && i($(this), e)
                }
                ))
            }
            _ ? (c[e] = !0,
            c[u] && i(t, u, "force")) : (n || (c[e] = !0),
            y && c[g] && i(t, g, !1)),
            r(t, y, e, n)
        }
        c[p] && s(t, S, !0) && m.find("." + l).css(S, "default"),
        m[w](C || s(t, e) || ""),
        m.attr("role") && !_ && m.attr("aria-" + (T ? p : u), "true"),
        m[b](k || s(t, x) || "")
    }
    function i(t, e, i) {
        var n = t[0]
          , a = t.parent()
          , c = e == u
          , h = e == g
          , m = e == p
          , y = h ? f : c ? d : "enabled"
          , _ = s(t, y + o(n[v]))
          , T = s(t, e + o(n[v]));
        !1 !== n[e] && (!h && i && "force" != i || (n[e] = !1),
        r(t, c, y, i)),
        !n[p] && s(t, S, !0) && a.find("." + l).css(S, "pointer"),
        a[b](T || s(t, e) || ""),
        a.attr("role") && !h && a.attr("aria-" + (m ? p : u), "false"),
        a[w](_ || s(t, y) || "")
    }
    function n(t, e) {
        t.data(a) && (t.parent().html(t.attr("style", t.data(a).s || "")),
        e && t[T](e),
        t.off(".i").unwrap(),
        $(x + '[for="' + t[0].id + '"]').add(t.closest(x)).off(".i"))
    }
    function s(t, e, i) {
        if (t.data(a))
            return t.data(a).o[e + (i ? "" : "Class")]
    }
    function o(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    function r(t, e, i, n) {
        n || (e && t[T]("ifToggled"),
        t[T]("ifChanged")[T]("if" + o(i)))
    }
    var a = "iCheck"
      , l = a + "-helper"
      , c = "checkbox"
      , h = "radio"
      , u = "checked"
      , d = "un" + u
      , p = "disabled"
      , f = "determinate"
      , g = "in" + f
      , m = "update"
      , v = "type"
      , y = "click"
      , _ = "touchbegin.i touchend.i"
      , w = "addClass"
      , b = "removeClass"
      , T = "trigger"
      , x = "label"
      , S = "cursor"
      , k = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    $.fn[a] = function(s, o) {
        var r = 'input[type="' + c + '"], input[type="' + h + '"]'
          , d = $()
          , f = function(t) {
            t.each((function() {
                var t = $(this);
                d = t.is(r) ? d.add(t) : d.add(t.find(r))
            }
            ))
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(s))
            return s = s.toLowerCase(),
            f(this),
            d.each((function() {
                var e = $(this);
                "destroy" == s ? n(e, "ifDestroyed") : t(e, !0, s),
                $.isFunction(o) && o()
            }
            ));
        if ("object" != typeof s && s)
            return this;
        var S = $.extend({
            checkedClass: u,
            disabledClass: p,
            indeterminateClass: g,
            labelHover: !0
        }, s)
          , C = S.handle
          , P = S.hoverClass || "hover"
          , E = S.focusClass || "focus"
          , I = S.activeClass || "active"
          , O = !!S.labelHover
          , A = S.labelHoverClass || "hover"
          , M = 0 | ("" + S.increaseArea).replace("%", "");
        return C != c && C != h || (r = 'input[type="' + C + '"]'),
        M < -50 && (M = -50),
        f(this),
        d.each((function() {
            var s = $(this);
            n(s);
            var o = this, r = o.id, d = -M + "%", f = 100 + 2 * M + "%", g = {
                position: "absolute",
                top: d,
                left: d,
                display: "block",
                width: f,
                height: f,
                margin: 0,
                padding: 0,
                background: "#fff",
                border: 0,
                opacity: 0
            }, C = k ? {
                position: "absolute",
                visibility: "hidden"
            } : M ? g : {
                position: "absolute",
                opacity: 0
            }, z = o[v] == c ? S.checkboxClass || "i" + c : S.radioClass || "i" + h, L = $(x + '[for="' + r + '"]').add(s.closest(x)), R = !!S.aria, D = a + "-" + Math.random().toString(36).substr(2, 6), F = '<div class="' + z + '" ' + (R ? 'role="' + o[v] + '" ' : ""), j;
            R && L.each((function() {
                F += 'aria-labelledby="',
                this.id ? F += this.id : (this.id = D,
                F += D),
                F += '"'
            }
            )),
            F = s.wrap(F + "/>")[T]("ifCreated").parent().append(S.insert),
            j = $('<ins class="' + l + '"/>').css(g).appendTo(F),
            s.data(a, {
                o: S,
                s: s.attr("style")
            }).css(C),
            S.inheritClass && F[w](o.className || ""),
            S.inheritID && r && F.attr("id", a + "-" + r),
            "static" == F.css("position") && F.css("position", "relative"),
            t(s, !0, m),
            L.length && L.on(y + ".i mouseover.i mouseout.i " + _, (function(e) {
                var i = e[v]
                  , n = $(this);
                if (!o[p]) {
                    if (i == y) {
                        if ($(e.target).is("a"))
                            return;
                        t(s, !1, !0)
                    } else
                        O && (/ut|nd/.test(i) ? (F[b](P),
                        n[b](A)) : (F[w](P),
                        n[w](A)));
                    if (!k)
                        return !1;
                    e.stopPropagation()
                }
            }
            )),
            s.on(y + ".i focus.i blur.i keyup.i keydown.i keypress.i", (function(t) {
                var n = t[v]
                  , r = t.keyCode;
                return n != y && ("keydown" == n && 32 == r ? (o[v] == h && o[u] || (o[u] ? i(s, u) : e(s, u)),
                !1) : void ("keyup" == n && o[v] == h ? !o[u] && e(s, u) : /us|ur/.test(n) && F["blur" == n ? b : w](E)))
            }
            )),
            j.on(y + " mousedown mouseup mouseover mouseout " + _, (function(e) {
                var i = e[v]
                  , n = /wn|up/.test(i) ? I : P;
                if (!o[p]) {
                    if (i == y ? t(s, !1, !0) : (/wn|er|in/.test(i) ? F[w](n) : F[b](n + " " + I),
                    L.length && O && n == P && L[/ut|nd/.test(i) ? b : w](A)),
                    !k)
                        return !1;
                    e.stopPropagation()
                }
            }
            ))
        }
        ))
    }
}(window.jQuery || window.Zepto),
function(t) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}((function($) {
    "use strict";
    function t(t) {
        return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = c),
        void 0 !== t.click && void 0 === t.tap && (t.tap = t.click),
        t || (t = {}),
        t = $.extend({}, $.fn.swipe.defaults, t),
        this.each((function() {
            var i = $(this)
              , n = i.data(P);
            n || (n = new e(this,t),
            i.data(P, n))
        }
        ))
    }
    function e(t, e) {
        function i(t) {
            if (!(ct() || $(t.target).closest(e.excludedElements, Yt).length > 0)) {
                var i = t.originalEvent ? t.originalEvent : t;
                if (!i.pointerType || "mouse" != i.pointerType || 0 != e.fallbackToMouseEvents) {
                    var n, s = i.touches, o = s ? s[0] : i;
                    return Wt = w,
                    s ? Ut = s.length : !1 !== e.preventDefaultEvents && t.preventDefault(),
                    Lt = 0,
                    Rt = null,
                    Dt = null,
                    Xt = null,
                    Ft = 0,
                    jt = 0,
                    Ht = 0,
                    Bt = 1,
                    Nt = 0,
                    qt = mt(),
                    at(),
                    ut(0, o),
                    !s || Ut === e.fingers || e.fingers === y || X() ? (Vt = kt(),
                    2 == Ut && (ut(1, s[1]),
                    jt = Ht = _t(Gt[0].start, Gt[1].start)),
                    (e.swipeStatus || e.pinchStatus) && (n = L(i, Wt))) : n = !1,
                    !1 === n ? (L(i, Wt = x),
                    n) : (e.hold && (ee = setTimeout($.proxy((function() {
                        Yt.trigger("hold", [i.target]),
                        e.hold && (n = e.hold.call(Yt, i, i.target))
                    }
                    ), this), e.longTapThreshold)),
                    ht(!0),
                    null)
                }
            }
        }
        function E(t) {
            var i = t.originalEvent ? t.originalEvent : t;
            if (Wt !== T && Wt !== x && !lt()) {
                var n, s = i.touches, o, r = dt(s ? s[0] : i);
                if (Qt = kt(),
                s && (Ut = s.length),
                e.hold && clearTimeout(ee),
                Wt = b,
                2 == Ut && (0 == jt ? (ut(1, s[1]),
                jt = Ht = _t(Gt[0].start, Gt[1].start)) : (dt(s[1]),
                Ht = _t(Gt[0].end, Gt[1].end),
                Xt = bt(Gt[0].end, Gt[1].end)),
                Bt = wt(jt, Ht),
                Nt = Math.abs(jt - Ht)),
                Ut === e.fingers || e.fingers === y || !s || X()) {
                    if (Rt = St(r.start, r.end),
                    B(t, Dt = St(r.last, r.end)),
                    Lt = Tt(r.start, r.end),
                    Ft = yt(),
                    ft(Rt, Lt),
                    n = L(i, Wt),
                    !e.triggerOnTouchEnd || e.triggerOnTouchLeave) {
                        var a = !0;
                        if (e.triggerOnTouchLeave) {
                            var l = Ct(this);
                            a = Pt(r.end, l)
                        }
                        !e.triggerOnTouchEnd && a ? Wt = z(b) : e.triggerOnTouchLeave && !a && (Wt = z(T)),
                        Wt != x && Wt != T || L(i, Wt)
                    }
                } else
                    L(i, Wt = x);
                !1 === n && L(i, Wt = x)
            }
        }
        function I(t) {
            var i = t.originalEvent ? t.originalEvent : t
              , n = i.touches;
            if (n) {
                if (n.length && !lt())
                    return rt(i),
                    !0;
                if (n.length && lt())
                    return !0
            }
            return lt() && (Ut = Jt),
            Qt = kt(),
            Ft = yt(),
            F() || !D() ? L(i, Wt = x) : e.triggerOnTouchEnd || !1 === e.triggerOnTouchEnd && Wt === b ? (!1 !== e.preventDefaultEvents && t.preventDefault(),
            L(i, Wt = T)) : !e.triggerOnTouchEnd && Q() ? R(i, Wt = T, p) : Wt === b && L(i, Wt = x),
            ht(!1),
            null
        }
        function O() {
            Ut = 0,
            Qt = 0,
            Vt = 0,
            jt = 0,
            Ht = 0,
            Bt = 1,
            at(),
            ht(!1)
        }
        function A(t) {
            var i = t.originalEvent ? t.originalEvent : t;
            e.triggerOnTouchLeave && L(i, Wt = z(T))
        }
        function M() {
            Yt.unbind(It, i),
            Yt.unbind(zt, O),
            Yt.unbind(Ot, E),
            Yt.unbind(At, I),
            Mt && Yt.unbind(Mt, A),
            ht(!1)
        }
        function z(t) {
            var i = t
              , n = H()
              , s = D()
              , o = F();
            return !n || o ? i = x : !s || t != b || e.triggerOnTouchEnd && !e.triggerOnTouchLeave ? !s && t == T && e.triggerOnTouchLeave && (i = x) : i = T,
            i
        }
        function L(t, e) {
            var i, n = t.touches;
            return (U() || W()) && (i = R(t, e, u)),
            (q() || X()) && !1 !== i && (i = R(t, e, d)),
            st() && !1 !== i ? i = R(t, e, f) : ot() && !1 !== i ? i = R(t, e, g) : nt() && !1 !== i && (i = R(t, e, p)),
            e === x && O(t),
            e === T && (n && n.length || O(t)),
            i
        }
        function R(t, i, c) {
            var h;
            if (c == u) {
                if (Yt.trigger("swipeStatus", [i, Rt || null, Lt || 0, Ft || 0, Ut, Gt, Dt]),
                e.swipeStatus && !1 === (h = e.swipeStatus.call(Yt, t, i, Rt || null, Lt || 0, Ft || 0, Ut, Gt, Dt)))
                    return !1;
                if (i == T && Y()) {
                    if (clearTimeout(te),
                    clearTimeout(ee),
                    Yt.trigger("swipe", [Rt, Lt, Ft, Ut, Gt, Dt]),
                    e.swipe && !1 === (h = e.swipe.call(Yt, t, Rt, Lt, Ft, Ut, Gt, Dt)))
                        return !1;
                    switch (Rt) {
                    case n:
                        Yt.trigger("swipeLeft", [Rt, Lt, Ft, Ut, Gt, Dt]),
                        e.swipeLeft && (h = e.swipeLeft.call(Yt, t, Rt, Lt, Ft, Ut, Gt, Dt));
                        break;
                    case s:
                        Yt.trigger("swipeRight", [Rt, Lt, Ft, Ut, Gt, Dt]),
                        e.swipeRight && (h = e.swipeRight.call(Yt, t, Rt, Lt, Ft, Ut, Gt, Dt));
                        break;
                    case o:
                        Yt.trigger("swipeUp", [Rt, Lt, Ft, Ut, Gt, Dt]),
                        e.swipeUp && (h = e.swipeUp.call(Yt, t, Rt, Lt, Ft, Ut, Gt, Dt));
                        break;
                    case r:
                        Yt.trigger("swipeDown", [Rt, Lt, Ft, Ut, Gt, Dt]),
                        e.swipeDown && (h = e.swipeDown.call(Yt, t, Rt, Lt, Ft, Ut, Gt, Dt))
                    }
                }
            }
            if (c == d) {
                if (Yt.trigger("pinchStatus", [i, Xt || null, Nt || 0, Ft || 0, Ut, Bt, Gt]),
                e.pinchStatus && !1 === (h = e.pinchStatus.call(Yt, t, i, Xt || null, Nt || 0, Ft || 0, Ut, Bt, Gt)))
                    return !1;
                if (i == T && N())
                    switch (Xt) {
                    case a:
                        Yt.trigger("pinchIn", [Xt || null, Nt || 0, Ft || 0, Ut, Bt, Gt]),
                        e.pinchIn && (h = e.pinchIn.call(Yt, t, Xt || null, Nt || 0, Ft || 0, Ut, Bt, Gt));
                        break;
                    case l:
                        Yt.trigger("pinchOut", [Xt || null, Nt || 0, Ft || 0, Ut, Bt, Gt]),
                        e.pinchOut && (h = e.pinchOut.call(Yt, t, Xt || null, Nt || 0, Ft || 0, Ut, Bt, Gt))
                    }
            }
            return c == p ? i !== x && i !== T || (clearTimeout(te),
            clearTimeout(ee),
            K() && !tt() ? (Zt = kt(),
            te = setTimeout($.proxy((function() {
                Zt = null,
                Yt.trigger("tap", [t.target]),
                e.tap && (h = e.tap.call(Yt, t, t.target))
            }
            ), this), e.doubleTapThreshold)) : (Zt = null,
            Yt.trigger("tap", [t.target]),
            e.tap && (h = e.tap.call(Yt, t, t.target)))) : c == f ? i !== x && i !== T || (clearTimeout(te),
            clearTimeout(ee),
            Zt = null,
            Yt.trigger("doubletap", [t.target]),
            e.doubleTap && (h = e.doubleTap.call(Yt, t, t.target))) : c == g && (i !== x && i !== T || (clearTimeout(te),
            Zt = null,
            Yt.trigger("longtap", [t.target]),
            e.longTap && (h = e.longTap.call(Yt, t, t.target)))),
            h
        }
        function D() {
            var t = !0;
            return null !== e.threshold && (t = Lt >= e.threshold),
            t
        }
        function F() {
            var t = !1;
            return null !== e.cancelThreshold && null !== Rt && (t = gt(Rt) - Lt >= e.cancelThreshold),
            t
        }
        function j() {
            return null === e.pinchThreshold || Nt >= e.pinchThreshold
        }
        function H() {
            var t;
            return t = !e.maxTimeThreshold || !(Ft >= e.maxTimeThreshold)
        }
        function B(t, i) {
            if (!1 !== e.preventDefaultEvents)
                if (e.allowPageScroll === c)
                    t.preventDefault();
                else {
                    var a = e.allowPageScroll === h;
                    switch (i) {
                    case n:
                        (e.swipeLeft && a || !a && e.allowPageScroll != m) && t.preventDefault();
                        break;
                    case s:
                        (e.swipeRight && a || !a && e.allowPageScroll != m) && t.preventDefault();
                        break;
                    case o:
                        (e.swipeUp && a || !a && e.allowPageScroll != v) && t.preventDefault();
                        break;
                    case r:
                        (e.swipeDown && a || !a && e.allowPageScroll != v) && t.preventDefault();
                        break;
                    case c:
                    }
                }
        }
        function N() {
            var t = G()
              , e = V()
              , i = j();
            return t && e && i
        }
        function X() {
            return !!(e.pinchStatus || e.pinchIn || e.pinchOut)
        }
        function q() {
            return !(!N() || !X())
        }
        function Y() {
            var t = H(), e = D(), i = G(), n = V(), s, o;
            return !F() && n && i && e && t
        }
        function W() {
            return !!(e.swipe || e.swipeStatus || e.swipeLeft || e.swipeRight || e.swipeUp || e.swipeDown)
        }
        function U() {
            return !(!Y() || !W())
        }
        function G() {
            return Ut === e.fingers || e.fingers === y || !S
        }
        function V() {
            return 0 !== Gt[0].end.x
        }
        function Q() {
            return !!e.tap
        }
        function K() {
            return !!e.doubleTap
        }
        function J() {
            return !!e.longTap
        }
        function Z() {
            if (null == Zt)
                return !1;
            var t = kt();
            return K() && t - Zt <= e.doubleTapThreshold
        }
        function tt() {
            return Z()
        }
        function et() {
            return (1 === Ut || !S) && (isNaN(Lt) || Lt < e.threshold)
        }
        function it() {
            return Ft > e.longTapThreshold && _ > Lt
        }
        function nt() {
            return !(!et() || !Q())
        }
        function st() {
            return !(!Z() || !K())
        }
        function ot() {
            return !(!it() || !J())
        }
        function rt(t) {
            Kt = kt(),
            Jt = t.touches.length + 1
        }
        function at() {
            Kt = 0,
            Jt = 0
        }
        function lt() {
            var t = !1, i;
            Kt && (kt() - Kt <= e.fingerReleaseThreshold && (t = !0));
            return t
        }
        function ct() {
            return !(!0 !== Yt.data(P + "_intouch"))
        }
        function ht(t) {
            Yt && (!0 === t ? (Yt.bind(Ot, E),
            Yt.bind(At, I),
            Mt && Yt.bind(Mt, A)) : (Yt.unbind(Ot, E, !1),
            Yt.unbind(At, I, !1),
            Mt && Yt.unbind(Mt, A, !1)),
            Yt.data(P + "_intouch", !0 === t))
        }
        function ut(t, e) {
            var i = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            return i.start.x = i.last.x = i.end.x = e.pageX || e.clientX,
            i.start.y = i.last.y = i.end.y = e.pageY || e.clientY,
            Gt[t] = i,
            i
        }
        function dt(t) {
            var e = void 0 !== t.identifier ? t.identifier : 0
              , i = pt(e);
            return null === i && (i = ut(e, t)),
            i.last.x = i.end.x,
            i.last.y = i.end.y,
            i.end.x = t.pageX || t.clientX,
            i.end.y = t.pageY || t.clientY,
            i
        }
        function pt(t) {
            return Gt[t] || null
        }
        function ft(t, e) {
            t != c && (e = Math.max(e, gt(t)),
            qt[t].distance = e)
        }
        function gt(t) {
            return qt[t] ? qt[t].distance : void 0
        }
        function mt() {
            var t = {};
            return t[n] = vt(n),
            t[s] = vt(s),
            t[o] = vt(o),
            t[r] = vt(r),
            t
        }
        function vt(t) {
            return {
                direction: t,
                distance: 0
            }
        }
        function yt() {
            return Qt - Vt
        }
        function _t(t, e) {
            var i = Math.abs(t.x - e.x)
              , n = Math.abs(t.y - e.y);
            return Math.round(Math.sqrt(i * i + n * n))
        }
        function wt(t, e) {
            var i;
            return (e / t * 1).toFixed(2)
        }
        function bt() {
            return 1 > Bt ? l : a
        }
        function Tt(t, e) {
            return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
        }
        function xt(t, e) {
            var i = t.x - e.x
              , n = e.y - t.y
              , s = Math.atan2(n, i)
              , o = Math.round(180 * s / Math.PI);
            return 0 > o && (o = 360 - Math.abs(o)),
            o
        }
        function St(t, e) {
            if (Et(t, e))
                return c;
            var i = xt(t, e);
            return 45 >= i && i >= 0 || 360 >= i && i >= 315 ? n : i >= 135 && 225 >= i ? s : i > 45 && 135 > i ? r : o
        }
        function kt() {
            var t;
            return (new Date).getTime()
        }
        function Ct(t) {
            var e = (t = $(t)).offset(), i;
            return {
                left: e.left,
                right: e.left + t.outerWidth(),
                top: e.top,
                bottom: e.top + t.outerHeight()
            }
        }
        function Pt(t, e) {
            return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
        }
        function Et(t, e) {
            return t.x == e.x && t.y == e.y
        }
        var e = $.extend({}, e)
          , $t = S || C || !e.fallbackToMouseEvents
          , It = $t ? C ? k ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown"
          , Ot = $t ? C ? k ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove"
          , At = $t ? C ? k ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup"
          , Mt = $t ? C ? "mouseleave" : null : "mouseleave"
          , zt = C ? k ? "MSPointerCancel" : "pointercancel" : "touchcancel"
          , Lt = 0
          , Rt = null
          , Dt = null
          , Ft = 0
          , jt = 0
          , Ht = 0
          , Bt = 1
          , Nt = 0
          , Xt = 0
          , qt = null
          , Yt = $(t)
          , Wt = "start"
          , Ut = 0
          , Gt = {}
          , Vt = 0
          , Qt = 0
          , Kt = 0
          , Jt = 0
          , Zt = 0
          , te = null
          , ee = null;
        try {
            Yt.bind(It, i),
            Yt.bind(zt, O)
        } catch (t) {
            $.error("events not supported " + It + "," + zt + " on jQuery.swipe")
        }
        this.enable = function() {
            return this.disable(),
            Yt.bind(It, i),
            Yt.bind(zt, O),
            Yt
        }
        ,
        this.disable = function() {
            return M(),
            Yt
        }
        ,
        this.destroy = function() {
            M(),
            Yt.data(P, null),
            Yt = null
        }
        ,
        this.option = function(t, i) {
            if ("object" == typeof t)
                e = $.extend(e, t);
            else if (void 0 !== e[t]) {
                if (void 0 === i)
                    return e[t];
                e[t] = i
            } else {
                if (!t)
                    return e;
                $.error("Option " + t + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }
    var i = "1.6.18"
      , n = "left"
      , s = "right"
      , o = "up"
      , r = "down"
      , a = "in"
      , l = "out"
      , c = "none"
      , h = "auto"
      , u = "swipe"
      , d = "pinch"
      , p = "tap"
      , f = "doubletap"
      , g = "longtap"
      , m = "horizontal"
      , v = "vertical"
      , y = "all"
      , _ = 10
      , w = "start"
      , b = "move"
      , T = "end"
      , x = "cancel"
      , S = "ontouchstart"in window
      , k = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !S
      , C = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !S
      , P = "TouchSwipe"
      , E = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".noSwipe",
        preventDefaultEvents: !0
    };
    $.fn.swipe = function(e) {
        var i = $(this)
          , n = i.data(P);
        if (n && "string" == typeof e) {
            if (n[e])
                return n[e].apply(n, Array.prototype.slice.call(arguments, 1));
            $.error("Method " + e + " does not exist on jQuery.swipe")
        } else if (n && "object" == typeof e)
            n.option.apply(n, arguments);
        else if (!(n || "object" != typeof e && e))
            return t.apply(this, arguments);
        return i
    }
    ,
    $.fn.swipe.version = i,
    $.fn.swipe.defaults = E,
    $.fn.swipe.phases = {
        PHASE_START: w,
        PHASE_MOVE: b,
        PHASE_END: T,
        PHASE_CANCEL: x
    },
    $.fn.swipe.directions = {
        LEFT: n,
        RIGHT: s,
        UP: o,
        DOWN: r,
        IN: a,
        OUT: l
    },
    $.fn.swipe.pageScroll = {
        NONE: c,
        HORIZONTAL: m,
        VERTICAL: v,
        AUTO: h
    },
    $.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: y
    }
}
)),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], (function(i) {
        return e(i, t, t.document, t.Math)
    }
    )) : "object" == typeof exports && exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
}("undefined" != typeof window ? window : this, (function(t, e, i, n, s) {
    "use strict";
    var o = "fullpage-wrapper", r = "." + o, a = "fp-responsive", l = "fp-notransition", c = "fp-destroyed", h = "fp-enabled", u = "fp-viewing", d = "active", p = "." + d, f = "fp-completely", g = "." + f, m = ".section", v = "fp-section", y = "." + v, _ = y + p, w = y + ":first", b = y + ":last", T = "fp-tableCell", x = "." + T, S = "fp-auto-height", k = "fp-normal-scroll", C = "fp-nav", P = "#" + C, E = "fp-tooltip", I = "." + E, O = "fp-show-active", A = ".slide", M = "fp-slide", z = "." + M, L = z + p, R = "fp-slides", D = "." + R, F = "fp-slidesContainer", j = "." + F, H = "fp-table", B = "fp-slidesNav", N = "." + B, X = N + " a", q = "fp-controlArrow", Y = "." + q, W = "fp-prev", U, G = q + " " + W, V = Y + ("." + W), Q = "fp-next", K, J = q + " " + Q, Z = Y + ("." + Q), $ = t(e), tt = t(i);
    t.fn.fullpage = function(q) {
        function U(e, i) {
            e || Qe(0),
            ei("autoScrolling", e, i);
            var n = t(_);
            q.autoScrolling && !q.scrollBar ? (si.css({
                overflow: "hidden",
                height: "100%"
            }),
            Q(Ii.recordHistory, "internal"),
            fi.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }),
            n.length && Qe(n.position().top)) : (si.css({
                overflow: "visible",
                height: "initial"
            }),
            Q(!1, "internal"),
            fi.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            n.length && si.scrollTop(n.position().top))
        }
        function Q(t, e) {
            ei("recordHistory", t, e)
        }
        function K(t, e) {
            ei("scrollingSpeed", t, e)
        }
        function et(t, e) {
            ei("fitToSection", t, e)
        }
        function it(t) {
            q.lockAnchors = t
        }
        function nt(t) {
            t ? (Ne(),
            Xe()) : (Be(),
            qe())
        }
        function st(e, i) {
            void 0 !== i ? (i = i.replace(/ /g, "").split(","),
            t.each(i, (function(t, i) {
                Je(e, i, "m")
            }
            ))) : (Je(e, "all", "m"),
            e ? (nt(!0),
            Ye()) : (nt(!1),
            We()))
        }
        function ot(e, i) {
            void 0 !== i ? (i = i.replace(/ /g, "").split(","),
            t.each(i, (function(t, i) {
                Je(e, i, "k")
            }
            ))) : (Je(e, "all", "k"),
            q.keyboardScrolling = e)
        }
        function rt() {
            var e = t(_).prev(y);
            e.length || !q.loopTop && !q.continuousVertical || (e = t(y).last()),
            e.length && Xt(e, null, !0)
        }
        function at() {
            var e = t(_).next(y);
            e.length || !q.loopBottom && !q.continuousVertical || (e = t(y).first()),
            e.length && Xt(e, null, !1)
        }
        function lt(t, e) {
            K(0, "internal"),
            ct(t, e),
            K(Ii.scrollingSpeed, "internal")
        }
        function ct(t, e) {
            var i = Oe(t);
            void 0 !== e ? Me(t, e) : i.length > 0 && Xt(i)
        }
        function ht(t) {
            Ht("right", t)
        }
        function ut(t) {
            Ht("left", t)
        }
        function dt(e) {
            if (!fi.hasClass(c)) {
                mi = !0,
                gi = $.height(),
                t(y).each((function() {
                    var e = t(this).find(D)
                      , i = t(this).find(z);
                    q.verticalCentered && t(this).find(x).css("height", $e(t(this)) + "px"),
                    t(this).css("height", gi + "px"),
                    i.length > 1 && ge(e, e.find(L))
                }
                )),
                q.scrollOverflow && bi.createScrollBarForAll();
                var i, n = t(_).index(y);
                n && lt(n + 1),
                mi = !1,
                t.isFunction(q.afterResize) && e && q.afterResize.call(fi),
                t.isFunction(q.afterReBuild) && !e && q.afterReBuild.call(fi)
            }
        }
        function pt(e) {
            var i = oi.hasClass(a);
            e ? i || (U(!1, "internal"),
            et(!1, "internal"),
            t(P).hide(),
            oi.addClass(a),
            t.isFunction(q.afterResponsive) && q.afterResponsive.call(fi, e)) : i && (U(Ii.autoScrolling, "internal"),
            et(Ii.autoScrolling, "internal"),
            t(P).show(),
            oi.removeClass(a),
            t.isFunction(q.afterResponsive) && q.afterResponsive.call(fi, e))
        }
        function ft() {
            q.css3 && (q.css3 = He()),
            q.scrollBar = q.scrollBar || q.hybrid,
            mt(),
            vt(),
            st(!0),
            U(q.autoScrolling, "internal"),
            we(),
            je(),
            "complete" === i.readyState && ee(),
            $.on("load", ee)
        }
        function gt() {
            $.on("scroll", $t).on("hashchange", ie).blur(he).resize(_e),
            tt.keydown(se).keyup(re).on("click touchstart", P + " a", ue).on("click touchstart", X, de).on("click", I, oe),
            t(y).on("click touchstart", Y, ce),
            q.normalScrollElements && (tt.on("mouseenter touchstart", q.normalScrollElements, (function() {
                st(!1)
            }
            )),
            tt.on("mouseleave touchend", q.normalScrollElements, (function() {
                st(!0)
            }
            )))
        }
        function mt() {
            var e = fi.find(q.sectionSelector);
            q.anchors.length || (q.anchors = e.filter("[data-anchor]").map((function() {
                return t(this).data("anchor").toString()
            }
            )).get()),
            q.navigationTooltips.length || (q.navigationTooltips = e.filter("[data-tooltip]").map((function() {
                return t(this).data("tooltip").toString()
            }
            )).get())
        }
        function vt() {
            fi.css({
                height: "100%",
                position: "relative"
            }),
            fi.addClass(o),
            t("html").addClass(h),
            gi = $.height(),
            fi.removeClass(c),
            bt(),
            t(y).each((function(e) {
                var i = t(this)
                  , n = i.find(z)
                  , s = n.length;
                _t(i, e),
                wt(i, e),
                s > 0 ? yt(i, n, s) : q.verticalCentered && Ee(i)
            }
            )),
            q.fixedElements && q.css3 && t(q.fixedElements).appendTo(oi),
            q.navigation && xt(),
            St(),
            q.scrollOverflow ? bi = q.scrollOverflowHandler.init(q) : Pt()
        }
        function yt(e, i, n) {
            var s = 100 * n
              , o = 100 / n;
            i.wrapAll('<div class="' + F + '" />'),
            i.parent().wrap('<div class="' + R + '" />'),
            e.find(j).css("width", s + "%"),
            n > 1 && (q.controlArrows && Tt(e),
            q.slidesNavigation && Le(e, n)),
            i.each((function(e) {
                t(this).css("width", o + "%"),
                q.verticalCentered && Ee(t(this))
            }
            ));
            var r = e.find(L);
            r.length && (0 !== t(_).index(y) || 0 === t(_).index(y) && 0 !== r.index()) ? Ve(r, "internal") : i.eq(0).addClass(d)
        }
        function _t(e, i) {
            i || 0 !== t(_).length || e.addClass(d),
            hi = t(_),
            e.css("height", gi + "px"),
            q.paddingTop && e.css("padding-top", q.paddingTop),
            q.paddingBottom && e.css("padding-bottom", q.paddingBottom),
            void 0 !== q.sectionsColor[i] && e.css("background-color", q.sectionsColor[i]),
            void 0 !== q.anchors[i] && e.attr("data-anchor", q.anchors[i])
        }
        function wt(e, i) {
            void 0 !== q.anchors[i] && e.hasClass(d) && ke(q.anchors[i], i),
            q.menu && q.css3 && t(q.menu).closest(r).length && t(q.menu).appendTo(oi)
        }
        function bt() {
            fi.find(q.sectionSelector).addClass(v),
            fi.find(q.slideSelector).addClass(M)
        }
        function Tt(t) {
            t.find(D).after('<div class="' + G + '"></div><div class="' + J + '"></div>'),
            "#fff" != q.controlArrowColor && (t.find(Z).css("border-color", "transparent transparent transparent " + q.controlArrowColor),
            t.find(V).css("border-color", "transparent " + q.controlArrowColor + " transparent transparent")),
            q.loopHorizontal || t.find(V).hide()
        }
        function xt() {
            oi.append('<div id="' + C + '"><ul></ul></div>');
            var e = t(P);
            e.addClass((function() {
                return q.showActiveTooltip ? O + " " + q.navigationPosition : q.navigationPosition
            }
            ));
            for (var i = 0; i < t(y).length; i++) {
                var n = "";
                q.anchors.length && (n = q.anchors[i]);
                var s = '<li><a href="#' + n + '"><span></span></a>'
                  , o = q.navigationTooltips[i];
                void 0 !== o && "" !== o && (s += '<div class="' + E + " " + q.navigationPosition + '">' + o + "</div>"),
                s += "</li>",
                e.find("ul").append(s)
            }
            t(P).css("margin-top", "-" + t(P).height() / 2 + "px"),
            t(P).find("li").eq(t(_).index(y)).find("a").addClass(d)
        }
        function St() {
            fi.find('iframe[src*="youtube.com/embed/"]').each((function() {
                kt(t(this), "enablejsapi=1")
            }
            ))
        }
        function kt(t, e) {
            var i = t.attr("src");
            t.attr("src", i + Ct(i) + e)
        }
        function Ct(t) {
            return /\?/.test(t) ? "&" : "?"
        }
        function Pt() {
            var e = t(_);
            e.addClass(f),
            Qt(e),
            Kt(e),
            q.scrollOverflow && q.scrollOverflowHandler.afterLoad(),
            Et() && t.isFunction(q.afterLoad) && q.afterLoad.call(e, e.data("anchor"), e.index(y) + 1),
            t.isFunction(q.afterRender) && q.afterRender.call(fi)
        }
        function Et() {
            var t = Oe(ne().section);
            return !t.length || t.length && t.index() === hi.index()
        }
        function $t() {
            var e;
            if (!q.autoScrolling || q.scrollBar) {
                var n = $.scrollTop()
                  , s = At(n)
                  , o = 0
                  , r = n + $.height() / 2
                  , a = oi.height() - $.height() === n
                  , l = i.querySelectorAll(y);
                if (a)
                    o = l.length - 1;
                else if (n)
                    for (var c = 0; c < l.length; ++c) {
                        var h;
                        l[c].offsetTop <= r && (o = c)
                    }
                else
                    o = 0;
                if (Ot(s) && (t(_).hasClass(f) || t(_).addClass(f).siblings().removeClass(f)),
                !(e = t(l).eq(o)).hasClass(d)) {
                    Oi = !0;
                    var u, p, g = t(_), m = g.index(y) + 1, v = Ce(e), w = e.data("anchor"), b = e.index(y) + 1, T = e.find(L);
                    T.length && (p = T.data("anchor"),
                    u = T.index()),
                    yi && (e.addClass(d).siblings().removeClass(d),
                    t.isFunction(q.onLeave) && q.onLeave.call(g, m, b, v),
                    t.isFunction(q.afterLoad) && q.afterLoad.call(e, w, b),
                    Zt(g),
                    Qt(e),
                    Kt(e),
                    ke(w, b - 1),
                    q.anchors.length && (ai = w),
                    Re(u, p, w, b)),
                    clearTimeout(ki),
                    ki = setTimeout((function() {
                        Oi = !1
                    }
                    ), 100)
                }
                q.fitToSection && (clearTimeout(Ci),
                Ci = setTimeout((function() {
                    q.fitToSection && t(_).outerHeight() <= gi && It()
                }
                ), q.fitToSectionDelay))
            }
        }
        function It() {
            yi && (mi = !0,
            Xt(t(_)),
            mi = !1)
        }
        function Ot(e) {
            var i = t(_).position().top
              , n = i + $.height();
            return "up" == e ? n >= $.scrollTop() + $.height() : i <= $.scrollTop()
        }
        function At(t) {
            var e = t > Ai ? "down" : "up";
            return Ai = t,
            Fi = t,
            e
        }
        function Mt(e) {
            if (wi.m[e]) {
                var i = "down" === e ? at : rt;
                if (q.scrollOverflow) {
                    var n = q.scrollOverflowHandler.scrollable(t(_))
                      , s = "down" === e ? "bottom" : "top";
                    if (n.length > 0) {
                        if (!q.scrollOverflowHandler.isScrolled(s, n))
                            return !0;
                        i()
                    } else
                        i()
                } else
                    i()
            }
        }
        function zt(t) {
            var e = t.originalEvent;
            q.autoScrolling && Rt(e) && t.preventDefault()
        }
        function Lt(e) {
            var i = e.originalEvent
              , s = t(i.target).closest(y);
            if (Rt(i)) {
                q.autoScrolling && e.preventDefault();
                var o = Ge(i);
                Li = o.y,
                Ri = o.x,
                s.find(D).length && n.abs(zi - Ri) > n.abs(Mi - Li) ? !ui && n.abs(zi - Ri) > $.outerWidth() / 100 * q.touchSensitivity && (zi > Ri ? wi.m.right && ht(s) : wi.m.left && ut(s)) : q.autoScrolling && yi && n.abs(Mi - Li) > $.height() / 100 * q.touchSensitivity && (Mi > Li ? Mt("down") : Li > Mi && Mt("up"))
            }
        }
        function Rt(t) {
            return void 0 === t.pointerType || "mouse" != t.pointerType
        }
        function Dt(t) {
            var e = t.originalEvent;
            if (q.fitToSection && si.stop(),
            Rt(e)) {
                var i = Ge(e);
                Mi = i.y,
                zi = i.x
            }
        }
        function Ft(t, e) {
            for (var i = 0, s = t.slice(n.max(t.length - e, 1)), o = 0; o < s.length; o++)
                i += s[o];
            return n.ceil(i / e)
        }
        function jt(i) {
            var s = (new Date).getTime()
              , o = t(g).hasClass(k);
            if (q.autoScrolling && !ci && !o) {
                var r = (i = i || e.event).wheelDelta || -i.deltaY || -i.detail
                  , a = n.max(-1, n.min(1, r))
                  , l = void 0 !== i.wheelDeltaX || void 0 !== i.deltaX
                  , c = n.abs(i.wheelDeltaX) < n.abs(i.wheelDelta) || n.abs(i.deltaX) < n.abs(i.deltaY) || !l;
                _i.length > 149 && _i.shift(),
                _i.push(n.abs(r)),
                q.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
                var h = s - Di, u, d, p;
                if (Di = s,
                h > 200 && (_i = []),
                yi)
                    Ft(_i, 10) >= Ft(_i, 70) && c && Mt(a < 0 ? "down" : "up");
                return !1
            }
            q.fitToSection && si.stop()
        }
        function Ht(e, i) {
            var n, s = (void 0 === i ? t(_) : i).find(D), o = s.find(z).length;
            if (!(!s.length || ui || o < 2)) {
                var r = s.find(L)
                  , a = null;
                if (!(a = "left" === e ? r.prev(z) : r.next(z)).length) {
                    if (!q.loopHorizontal)
                        return;
                    a = "left" === e ? r.siblings(":last") : r.siblings(":first")
                }
                ui = !0,
                ge(s, a, e)
            }
        }
        function Bt() {
            t(L).each((function() {
                Ve(t(this), "internal")
            }
            ))
        }
        function Nt(t) {
            var e = t.position()
              , i = e.top
              , n = e.top > Fi
              , s = i - gi + t.outerHeight()
              , o = q.bigSectionsDestination;
            return t.outerHeight() > gi ? (n || o) && "bottom" !== o || (i = s) : (n || mi && t.is(":last-child")) && (i = s),
            Fi = i,
            i
        }
        function Xt(e, i, n) {
            if (void 0 !== e) {
                var s, o, r, a = {
                    element: e,
                    callback: i,
                    isMovementUp: n,
                    dtop: Nt(e),
                    yMovement: Ce(e),
                    anchorLink: e.data("anchor"),
                    sectionIndex: e.index(y),
                    activeSlide: e.find(L),
                    activeSection: t(_),
                    leavingSection: t(_).index(y) + 1,
                    localIsResizing: mi
                };
                a.activeSection.is(e) && !mi || q.scrollBar && $.scrollTop() === a.dtop && !e.hasClass(S) || (a.activeSlide.length && (s = a.activeSlide.data("anchor"),
                o = a.activeSlide.index()),
                t.isFunction(q.onLeave) && !a.localIsResizing && !1 === q.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement) || (q.autoScrolling && q.continuousVertical && void 0 !== a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = Wt(a)),
                a.localIsResizing || Zt(a.activeSection),
                q.scrollOverflow && q.scrollOverflowHandler.beforeLeave(),
                e.addClass(d).siblings().removeClass(d),
                Qt(e),
                q.scrollOverflow && q.scrollOverflowHandler.onLeave(),
                yi = !1,
                Re(o, s, a.anchorLink, a.sectionIndex),
                qt(a),
                ai = a.anchorLink,
                ke(a.anchorLink, a.sectionIndex)))
            }
        }
        function qt(e) {
            if (q.css3 && q.autoScrolling && !q.scrollBar) {
                var i;
                Ie("translate3d(0px, -" + n.round(e.dtop) + "px, 0px)", !0),
                q.scrollingSpeed ? (clearTimeout(xi),
                xi = setTimeout((function() {
                    Gt(e)
                }
                ), q.scrollingSpeed)) : Gt(e)
            } else {
                var s = Yt(e);
                t(s.element).animate(s.options, q.scrollingSpeed, q.easing).promise().done((function() {
                    q.scrollBar ? setTimeout((function() {
                        Gt(e)
                    }
                    ), 30) : Gt(e)
                }
                ))
            }
        }
        function Yt(t) {
            var e = {};
            return q.autoScrolling && !q.scrollBar ? (e.options = {
                top: -t.dtop
            },
            e.element = r) : (e.options = {
                scrollTop: t.dtop
            },
            e.element = "html, body"),
            e
        }
        function Wt(e) {
            return e.isMovementUp ? t(_).before(e.activeSection.nextAll(y)) : t(_).after(e.activeSection.prevAll(y).get().reverse()),
            Qe(t(_).position().top),
            Bt(),
            e.wrapAroundElements = e.activeSection,
            e.dtop = e.element.position().top,
            e.yMovement = Ce(e.element),
            e.leavingSection = e.activeSection.index(y) + 1,
            e.sectionIndex = e.element.index(y),
            e
        }
        function Ut(e) {
            e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(w).before(e.wrapAroundElements) : t(b).after(e.wrapAroundElements),
            Qe(t(_).position().top),
            Bt())
        }
        function Gt(e) {
            Ut(e),
            t.isFunction(q.afterLoad) && !e.localIsResizing && q.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1),
            q.scrollOverflow && q.scrollOverflowHandler.afterLoad(),
            e.localIsResizing || Kt(e.element),
            e.element.addClass(f).siblings().removeClass(f),
            yi = !0,
            t.isFunction(e.callback) && e.callback.call(this)
        }
        function Vt(t, e) {
            t.attr(e, t.data(e)).removeAttr("data-" + e)
        }
        function Qt(e) {
            var i, n;
            q.lazyLoading && te(e).find("img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]").each((function() {
                if (i = t(this),
                t.each(["src", "srcset"], (function(t, e) {
                    var n = i.attr("data-" + e);
                    void 0 !== n && n && Vt(i, e)
                }
                )),
                i.is("source")) {
                    var e = i.closest("video").length ? "video" : "audio";
                    i.closest(e).get(0).load()
                }
            }
            ))
        }
        function Kt(e) {
            var i = te(e);
            i.find("video, audio").each((function() {
                var e = t(this).get(0);
                e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
            }
            )),
            i.find('iframe[src*="youtube.com/embed/"]').each((function() {
                var e = t(this).get(0);
                e.hasAttribute("data-autoplay") && Jt(e),
                e.onload = function() {
                    e.hasAttribute("data-autoplay") && Jt(e)
                }
            }
            ))
        }
        function Jt(t) {
            t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }
        function Zt(e) {
            var i = te(e);
            i.find("video, audio").each((function() {
                var e = t(this).get(0);
                e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
            }
            )),
            i.find('iframe[src*="youtube.com/embed/"]').each((function() {
                var e = t(this).get(0);
                /youtube\.com\/embed\//.test(t(this).attr("src")) && !e.hasAttribute("data-keepplaying") && t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            }
            ))
        }
        function te(e) {
            var i = e.find(L);
            return i.length && (e = t(i)),
            e
        }
        function ee() {
            var t = ne()
              , e = t.section
              , i = t.slide;
            e && (q.animateAnchor ? Me(e, i) : lt(e, i))
        }
        function ie() {
            if (!Oi && !q.lockAnchors) {
                var t = ne()
                  , e = t.section
                  , i = t.slide
                  , n = void 0 === ai
                  , s = void 0 === ai && void 0 === i && !ui;
                e.length && (e && e !== ai && !n || s || !ui && li != i) && Me(e, i)
            }
        }
        function ne() {
            var t = e.location.hash
              , i = t.replace("#", "").split("/")
              , n = t.indexOf("#/") > -1;
            return {
                section: n ? "/" + i[1] : decodeURIComponent(i[0]),
                slide: n ? decodeURIComponent(i[2]) : decodeURIComponent(i[1])
            }
        }
        function se(e) {
            clearTimeout(Pi);
            var i = t(":focus");
            if (!i.is("textarea") && !i.is("input") && !i.is("select") && "true" !== i.attr("contentEditable") && "" !== i.attr("contentEditable") && q.keyboardScrolling && q.autoScrolling) {
                var n = e.which
                  , s = [40, 38, 32, 33, 34];
                t.inArray(n, s) > -1 && e.preventDefault(),
                ci = e.ctrlKey,
                Pi = setTimeout((function() {
                    pe(e)
                }
                ), 150)
            }
        }
        function oe() {
            t(this).prev().trigger("click")
        }
        function re(t) {
            vi && (ci = t.ctrlKey)
        }
        function ae(t) {
            2 == t.which && (ji = t.pageY,
            fi.on("mousemove", fe))
        }
        function le(t) {
            2 == t.which && fi.off("mousemove")
        }
        function ce() {
            var e = t(this).closest(y);
            t(this).hasClass(W) ? wi.m.left && ut(e) : wi.m.right && ht(e)
        }
        function he() {
            vi = !1,
            ci = !1
        }
        function ue(e) {
            e.preventDefault();
            var i = t(this).parent().index();
            Xt(t(y).eq(i))
        }
        function de(e) {
            e.preventDefault();
            var i = t(this).closest(y).find(D)
              , n = i.find(z).eq(t(this).closest("li").index());
            ge(i, n)
        }
        function pe(e) {
            var i = e.shiftKey;
            if (yi || !([37, 39].indexOf(e.which) < 0))
                switch (e.which) {
                case 38:
                case 33:
                    wi.k.up && rt();
                    break;
                case 32:
                    if (i && wi.k.up) {
                        rt();
                        break
                    }
                case 40:
                case 34:
                    wi.k.down && at();
                    break;
                case 36:
                    wi.k.up && ct(1);
                    break;
                case 35:
                    wi.k.down && ct(t(y).length);
                    break;
                case 37:
                    wi.k.left && ut();
                    break;
                case 39:
                    wi.k.right && ht();
                    break;
                default:
                    return
                }
        }
        function fe(t) {
            yi && (t.pageY < ji && wi.m.up ? rt() : t.pageY > ji && wi.m.down && at()),
            ji = t.pageY
        }
        function ge(e, i, n) {
            var s = e.closest(y)
              , o = {
                slides: e,
                destiny: i,
                direction: n,
                destinyPos: i.position(),
                slideIndex: i.index(),
                section: s,
                sectionIndex: s.index(y),
                anchorLink: s.data("anchor"),
                slidesNav: s.find(N),
                slideAnchor: Fe(i),
                prevSlide: s.find(L),
                prevSlideIndex: s.find(L).index(),
                localIsResizing: mi
            };
            return o.xMovement = Pe(o.prevSlideIndex, o.slideIndex),
            o.localIsResizing || (yi = !1),
            q.onSlideLeave && !o.localIsResizing && "none" !== o.xMovement && t.isFunction(q.onSlideLeave) && !1 === q.onSlideLeave.call(o.prevSlide, o.anchorLink, o.sectionIndex + 1, o.prevSlideIndex, o.direction, o.slideIndex) ? void (ui = !1) : (i.addClass(d).siblings().removeClass(d),
            o.localIsResizing || (Zt(o.prevSlide),
            Qt(i)),
            !q.loopHorizontal && q.controlArrows && (s.find(V).toggle(0 !== o.slideIndex),
            s.find(Z).toggle(!i.is(":last-child"))),
            s.hasClass(d) && !o.localIsResizing && Re(o.slideIndex, o.slideAnchor, o.anchorLink, o.sectionIndex),
            void ve(e, o, !0))
        }
        function me(e) {
            ye(e.slidesNav, e.slideIndex),
            e.localIsResizing || (t.isFunction(q.afterSlideLoad) && q.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex),
            yi = !0,
            Kt(e.destiny)),
            ui = !1
        }
        function ve(t, e, i) {
            var s = e.destinyPos;
            if (q.css3) {
                var o = "translate3d(-" + n.round(s.left) + "px, 0px, 0px)";
                be(t.find(j)).css(Ke(o)),
                Si = setTimeout((function() {
                    i && me(e)
                }
                ), q.scrollingSpeed, q.easing)
            } else
                t.animate({
                    scrollLeft: n.round(s.left)
                }, q.scrollingSpeed, q.easing, (function() {
                    i && me(e)
                }
                ))
        }
        function ye(t, e) {
            t.find(p).removeClass(d),
            t.find("li").eq(e).find("a").addClass(d)
        }
        function _e() {
            if (we(),
            di) {
                var e = t(i.activeElement);
                if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
                    var s = $.height();
                    n.abs(s - Hi) > 20 * n.max(Hi, s) / 100 && (dt(!0),
                    Hi = s)
                }
            } else
                clearTimeout(Ti),
                Ti = setTimeout((function() {
                    dt(!0)
                }
                ), 350)
        }
        function we() {
            var t = q.responsive || q.responsiveWidth
              , e = q.responsiveHeight
              , i = t && $.outerWidth() < t
              , n = e && $.height() < e;
            t && e ? pt(i || n) : t ? pt(i) : e && pt(n)
        }
        function be(t) {
            var e = "all " + q.scrollingSpeed + "ms " + q.easingcss3;
            return t.removeClass(l),
            t.css({
                "-webkit-transition": e,
                transition: e
            })
        }
        function Te(t) {
            return t.addClass(l)
        }
        function xe(e, i) {
            q.navigation && (t(P).find(p).removeClass(d),
            e ? t(P).find('a[href="#' + e + '"]').addClass(d) : t(P).find("li").eq(i).find("a").addClass(d))
        }
        function Se(e) {
            q.menu && (t(q.menu).find(p).removeClass(d),
            t(q.menu).find('[data-menuanchor="' + e + '"]').addClass(d))
        }
        function ke(t, e) {
            Se(t),
            xe(t, e)
        }
        function Ce(e) {
            var i = t(_).index(y)
              , n = e.index(y);
            return i == n ? "none" : i > n ? "up" : "down"
        }
        function Pe(t, e) {
            return t == e ? "none" : t > e ? "left" : "right"
        }
        function Ee(t) {
            t.hasClass(H) || t.addClass(H).wrapInner('<div class="' + T + '" style="height:' + $e(t) + 'px;" />')
        }
        function $e(t) {
            var e = gi;
            if (q.paddingTop || q.paddingBottom) {
                var i = t;
                i.hasClass(v) || (i = t.closest(y));
                var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                e = gi - n
            }
            return e
        }
        function Ie(t, e) {
            e ? be(fi) : Te(fi),
            fi.css(Ke(t)),
            setTimeout((function() {
                fi.removeClass(l)
            }
            ), 10)
        }
        function Oe(e) {
            if (!e)
                return [];
            var i = fi.find(y + '[data-anchor="' + e + '"]');
            return i.length || (i = t(y).eq(e - 1)),
            i
        }
        function Ae(t, e) {
            var i = e.find(D)
              , n = i.find(z + '[data-anchor="' + t + '"]');
            return n.length || (n = i.find(z).eq(t)),
            n
        }
        function Me(t, e) {
            var i = Oe(t);
            i.length && (void 0 === e && (e = 0),
            t === ai || i.hasClass(d) ? ze(i, e) : Xt(i, (function() {
                ze(i, e)
            }
            )))
        }
        function ze(t, e) {
            if (void 0 !== e) {
                var i = t.find(D)
                  , n = Ae(e, t);
                n.length && ge(i, n)
            }
        }
        function Le(t, e) {
            t.append('<div class="' + B + '"><ul></ul></div>');
            var i = t.find(N);
            i.addClass(q.slidesNavPosition);
            for (var n = 0; n < e; n++)
                i.find("ul").append('<li><a href="#"><span></span></a></li>');
            i.css("margin-left", "-" + i.width() / 2 + "px"),
            i.find("li").first().find("a").addClass(d)
        }
        function Re(t, e, i, n) {
            var s = "";
            q.anchors.length && !q.lockAnchors && (t ? (void 0 !== i && (s = i),
            void 0 === e && (e = t),
            li = e,
            De(s + "/" + e)) : void 0 !== t ? (li = e,
            De(i)) : De(i)),
            je()
        }
        function De(t) {
            if (q.recordHistory)
                location.hash = t;
            else if (di || pi)
                e.history.replaceState(s, s, "#" + t);
            else {
                var i = e.location.href.split("#")[0];
                e.location.replace(i + "#" + t)
            }
        }
        function Fe(t) {
            var e = t.data("anchor")
              , i = t.index();
            return void 0 === e && (e = i),
            e
        }
        function je() {
            var e = t(_)
              , i = e.find(L)
              , n = Fe(e)
              , s = Fe(i)
              , o = String(n);
            i.length && (o = o + "-" + s),
            o = o.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + u + "-[^\\s]+\\b","g");
            oi[0].className = oi[0].className.replace(r, ""),
            oi.addClass(u + "-" + o)
        }
        function He() {
            var t, n = i.createElement("p"), o = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            for (var r in i.body.insertBefore(n, null),
            o)
                n.style[r] !== s && (n.style[r] = "translate3d(1px,1px,1px)",
                t = e.getComputedStyle(n).getPropertyValue(o[r]));
            return i.body.removeChild(n),
            t !== s && t.length > 0 && "none" !== t
        }
        function Be() {
            i.addEventListener ? (i.removeEventListener("mousewheel", jt, !1),
            i.removeEventListener("wheel", jt, !1),
            i.removeEventListener("MozMousePixelScroll", jt, !1)) : i.detachEvent("onmousewheel", jt)
        }
        function Ne() {
            var t, n = "";
            e.addEventListener ? t = "addEventListener" : (t = "attachEvent",
            n = "on");
            var o = "onwheel"in i.createElement("div") ? "wheel" : i.onmousewheel !== s ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == o ? i[t](n + "MozMousePixelScroll", jt, !1) : i[t](n + o, jt, !1)
        }
        function Xe() {
            fi.on("mousedown", ae).on("mouseup", le)
        }
        function qe() {
            fi.off("mousedown", ae).off("mouseup", le)
        }
        function Ye() {
            (di || pi) && (q.autoScrolling && oi.off($i.touchmove).on($i.touchmove, zt),
            t(r).off($i.touchstart).on($i.touchstart, Dt).off($i.touchmove).on($i.touchmove, Lt))
        }
        function We() {
            (di || pi) && (q.autoScrolling && oi.off($i.touchmove),
            t(r).off($i.touchstart).off($i.touchmove))
        }
        function Ue() {
            var t;
            return t = e.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }
        function Ge(t) {
            var e = [];
            return e.y = void 0 !== t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY,
            e.x = void 0 !== t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX,
            pi && Rt(t) && q.scrollBar && (e.y = t.touches[0].pageY,
            e.x = t.touches[0].pageX),
            e
        }
        function Ve(t, e) {
            K(0, "internal"),
            void 0 !== e && (mi = !0),
            ge(t.closest(D), t),
            void 0 !== e && (mi = !1),
            K(Ii.scrollingSpeed, "internal")
        }
        function Qe(t) {
            var e = n.round(t), i;
            q.css3 && q.autoScrolling && !q.scrollBar ? Ie("translate3d(0px, -" + e + "px, 0px)", !1) : q.autoScrolling && !q.scrollBar ? fi.css("top", -e) : si.scrollTop(e)
        }
        function Ke(t) {
            return {
                "-webkit-transform": t,
                "-moz-transform": t,
                "-ms-transform": t,
                transform: t
            }
        }
        function Je(e, i, n) {
            "all" !== i ? wi[n][i] = e : t.each(Object.keys(wi[n]), (function(t, i) {
                wi[n][i] = e
            }
            ))
        }
        function Ze(e) {
            U(!1, "internal"),
            st(!1),
            ot(!1),
            fi.addClass(c),
            clearTimeout(Si),
            clearTimeout(xi),
            clearTimeout(Ti),
            clearTimeout(ki),
            clearTimeout(Ci),
            $.off("scroll", $t).off("hashchange", ie).off("resize", _e),
            tt.off("click touchstart", P + " a").off("mouseenter", P + " li").off("mouseleave", P + " li").off("click touchstart", X).off("mouseover", q.normalScrollElements).off("mouseout", q.normalScrollElements),
            t(y).off("click touchstart", Y),
            clearTimeout(Si),
            clearTimeout(xi),
            e && ti()
        }
        function ti() {
            Qe(0),
            fi.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each((function() {
                Vt(t(this), "src")
            }
            )),
            fi.find("img[data-srcset]").each((function() {
                Vt(t(this), "srcset")
            }
            )),
            t(P + ", " + N + ", " + Y).remove(),
            t(y).css({
                height: "",
                "background-color": "",
                padding: ""
            }),
            t(z).css({
                width: ""
            }),
            fi.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            si.css({
                overflow: "",
                height: ""
            }),
            t("html").removeClass(h),
            oi.removeClass(a),
            t.each(oi.get(0).className.split(/\s+/), (function(t, e) {
                0 === e.indexOf(u) && oi.removeClass(e)
            }
            )),
            t(y + ", " + z).each((function() {
                q.scrollOverflowHandler && q.scrollOverflowHandler.remove(t(this)),
                t(this).removeClass(H + " " + d)
            }
            )),
            Te(fi),
            fi.find(x + ", " + j + ", " + D).each((function() {
                t(this).replaceWith(this.childNodes)
            }
            )),
            fi.css({
                "-webkit-transition": "none",
                transition: "none"
            }),
            si.scrollTop(0);
            var e = [v, M, F];
            t.each(e, (function(e, i) {
                t("." + i).removeClass(i)
            }
            ))
        }
        function ei(t, e, i) {
            q[t] = e,
            "internal" !== i && (Ii[t] = e)
        }
        function ii() {
            var e = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            return t("html").hasClass(h) ? void ni("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (q.continuousVertical && (q.loopTop || q.loopBottom) && (q.continuousVertical = !1,
            ni("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            q.scrollBar && q.scrollOverflow && ni("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),
            !q.continuousVertical || !q.scrollBar && q.autoScrolling || (q.continuousVertical = !1,
            ni("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            q.scrollOverflow && !q.scrollOverflowHandler && (q.scrollOverflow = !1,
            ni("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
            t.each(e, (function(t, e) {
                q[e] && ni("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + e)
            }
            )),
            void t.each(q.anchors, (function(e, i) {
                var n = tt.find("[name]").filter((function() {
                    return t(this).attr("name") && t(this).attr("name").toLowerCase() == i.toLowerCase()
                }
                ))
                  , s = tt.find("[id]").filter((function() {
                    return t(this).attr("id") && t(this).attr("id").toLowerCase() == i.toLowerCase()
                }
                ));
                (s.length || n.length) && (ni("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
                s.length && ni("error", '"' + i + '" is is being used by another element `id` property'),
                n.length && ni("error", '"' + i + '" is is being used by another element `name` property'))
            }
            )))
        }
        function ni(t, e) {
            console && console[t] && console[t]("fullPage: " + e)
        }
        if (t("html").hasClass(h))
            ii();
        else {
            var si = t("html, body")
              , oi = t("body")
              , ri = t.fn.fullpage;
            q = t.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: t.fn.fp_scrolloverflow ? t.fn.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: m,
                slideSelector: A,
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, q);
            var ai, li, ci, hi, ui = !1, di = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), pi = "ontouchstart"in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, fi = t(this), gi = $.height(), mi = !1, vi = !0, yi = !0, _i = [], wi = {
                m: {
                    up: !0,
                    down: !0,
                    left: !0,
                    right: !0
                }
            };
            wi.k = t.extend(!0, {}, wi.m);
            var bi, Ti, xi, Si, ki, Ci, Pi, Ei = Ue(), $i = {
                touchmove: "ontouchmove"in e ? "touchmove" : Ei.move,
                touchstart: "ontouchstart"in e ? "touchstart" : Ei.down
            }, Ii = t.extend(!0, {}, q);
            ii(),
            t.extend(t.easing, {
                easeInOutCubic: function(t, e, i, n, s) {
                    return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
                }
            }),
            t(this).length && (ri.version = "2.9.5",
            ri.setAutoScrolling = U,
            ri.setRecordHistory = Q,
            ri.setScrollingSpeed = K,
            ri.setFitToSection = et,
            ri.setLockAnchors = it,
            ri.setMouseWheelScrolling = nt,
            ri.setAllowScrolling = st,
            ri.setKeyboardScrolling = ot,
            ri.moveSectionUp = rt,
            ri.moveSectionDown = at,
            ri.silentMoveTo = lt,
            ri.moveTo = ct,
            ri.moveSlideRight = ht,
            ri.moveSlideLeft = ut,
            ri.fitToSection = It,
            ri.reBuild = dt,
            ri.setResponsive = pt,
            ri.destroy = Ze,
            ri.shared = {
                afterRenderActions: Pt
            },
            ft(),
            gt());
            var Oi = !1
              , Ai = 0
              , Mi = 0
              , zi = 0
              , Li = 0
              , Ri = 0
              , Di = (new Date).getTime()
              , Fi = 0
              , ji = 0
              , Hi = gi
        }
    }
}
)),
function(t, e, i) {
    function n(i, n) {
        for (var s in this.wrapper = "string" == typeof i ? e.querySelector(i) : i,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !a.hasPointer,
            disableTouch: a.hasPointer || !a.hasTouch,
            disableMouse: a.hasPointer || a.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: void 0 === t.onmousedown
        },
        n)
            this.options[s] = n[s];
        this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "",
        this.options.useTransition = a.hasTransition && this.options.useTransition,
        this.options.useTransform = a.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
        this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        !0 === this.options.tap && (this.options.tap = "tap"),
        this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),
        "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    function s(t, i, n) {
        var s = e.createElement("div")
          , o = e.createElement("div");
        return !0 === n && (s.style.cssText = "position:absolute;z-index:9999",
        o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
        o.className = "iScrollIndicator",
        "h" == t ? (!0 === n && (s.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
        o.style.height = "100%"),
        s.className = "iScrollHorizontalScrollbar") : (!0 === n && (s.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
        o.style.width = "100%"),
        s.className = "iScrollVerticalScrollbar"),
        s.style.cssText += ";overflow:hidden",
        i || (s.style.pointerEvents = "none"),
        s.appendChild(o),
        s
    }
    function o(i, n) {
        for (var s in this.wrapper = "string" == typeof n.el ? e.querySelector(n.el) : n.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = i,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        },
        n)
            this.options[s] = n[s];
        if (this.sizeRatioX = 1,
        this.sizeRatioY = 1,
        this.maxPosX = 0,
        this.maxPosY = 0,
        this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, "touchstart", this),
        a.addEvent(t, "touchend", this)),
        this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this),
        a.addEvent(t, a.prefixPointerEvent("pointerup"), this)),
        this.options.disableMouse || (a.addEvent(this.indicator, "mousedown", this),
        a.addEvent(t, "mouseup", this))),
        this.options.fade) {
            this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
            var o = a.style.transitionDuration;
            if (!o)
                return;
            this.wrapperStyle[o] = a.isBadAndroid ? "0.0001ms" : "0ms";
            var l = this;
            a.isBadAndroid && r((function() {
                "0.0001ms" === l.wrapperStyle[o] && (l.wrapperStyle[o] = "0s")
            }
            )),
            this.wrapperStyle.opacity = "0"
        }
    }
    var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
        t.setTimeout(e, 1e3 / 60)
    }
      , a = function() {
        function n(t) {
            return !1 !== r && ("" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1))
        }
        var s = {}
          , o = e.createElement("div").style
          , r = function() {
            for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, n = e.length; i < n; i++)
                if ((t = e[i] + "ransform")in o)
                    return e[i].substr(0, e[i].length - 1);
            return !1
        }();
        s.getTime = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        s.extend = function(t, e) {
            for (var i in e)
                t[i] = e[i]
        }
        ,
        s.addEvent = function(t, e, i, n) {
            t.addEventListener(e, i, !!n)
        }
        ,
        s.removeEvent = function(t, e, i, n) {
            t.removeEventListener(e, i, !!n)
        }
        ,
        s.prefixPointerEvent = function(e) {
            return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
        }
        ,
        s.momentum = function(t, e, n, s, o, r) {
            var a, l, c = t - e, h = i.abs(c) / n;
            return l = h / (r = void 0 === r ? 6e-4 : r),
            (a = t + h * h / (2 * r) * (c < 0 ? -1 : 1)) < s ? (a = o ? s - o / 2.5 * (h / 8) : s,
            l = (c = i.abs(a - t)) / h) : a > 0 && (a = o ? o / 2.5 * (h / 8) : 0,
            l = (c = i.abs(t) + a) / h),
            {
                destination: i.round(a),
                duration: l
            }
        }
        ;
        var a = n("transform");
        return s.extend(s, {
            hasTransform: !1 !== a,
            hasPerspective: n("perspective")in o,
            hasTouch: "ontouchstart"in t,
            hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
            hasTransition: n("transition")in o
        }),
        s.isBadAndroid = function() {
            var e = t.navigator.appVersion;
            if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                var i = e.match(/Safari\/(\d+.\d)/);
                return !(i && "object" == typeof i && i.length >= 2) || parseFloat(i[1]) < 535.19
            }
            return !1
        }(),
        s.extend(s.style = {}, {
            transform: a,
            transitionTimingFunction: n("transitionTimingFunction"),
            transitionDuration: n("transitionDuration"),
            transitionDelay: n("transitionDelay"),
            transformOrigin: n("transformOrigin")
        }),
        s.hasClass = function(t, e) {
            var i;
            return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        }
        ,
        s.addClass = function(t, e) {
            if (!s.hasClass(t, e)) {
                var i = t.className.split(" ");
                i.push(e),
                t.className = i.join(" ")
            }
        }
        ,
        s.removeClass = function(t, e) {
            if (s.hasClass(t, e)) {
                var i = new RegExp("(^|\\s)" + e + "(\\s|$)","g");
                t.className = t.className.replace(i, " ")
            }
        }
        ,
        s.offset = function(t) {
            for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent; )
                e -= t.offsetLeft,
                i -= t.offsetTop;
            return {
                left: e,
                top: i
            }
        }
        ,
        s.preventDefaultException = function(t, e) {
            for (var i in e)
                if (e[i].test(t[i]))
                    return !0;
            return !1
        }
        ,
        s.extend(s.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        s.extend(s.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(t) {
                    return i.sqrt(1 - --t * t)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(t) {
                    var e = 4;
                    return (t -= 1) * t * (5 * t + 4) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(t) {
                    var e = .22, n;
                    return 0 === t ? 0 : 1 == t ? 1 : .4 * i.pow(2, -10 * t) * i.sin((t - e / 4) * (2 * i.PI) / e) + 1
                }
            }
        }),
        s.tap = function(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(i, !0, !0),
            n.pageX = t.pageX,
            n.pageY = t.pageY,
            t.target.dispatchEvent(n)
        }
        ,
        s.click = function(i) {
            var n, s = i.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(s.tagName) || ((n = e.createEvent(t.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0),
            n.view = i.view || t,
            n.detail = 1,
            n.screenX = s.screenX || 0,
            n.screenY = s.screenY || 0,
            n.clientX = s.clientX || 0,
            n.clientY = s.clientY || 0,
            n.ctrlKey = !!i.ctrlKey,
            n.altKey = !!i.altKey,
            n.shiftKey = !!i.shiftKey,
            n.metaKey = !!i.metaKey,
            n.button = 0,
            n.relatedTarget = null,
            n._constructed = !0,
            s.dispatchEvent(n))
        }
        ,
        s
    }();
    n.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = null,
            this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
            this._execEvent("scrollEnd")))
        },
        _start: function(t) {
            var e;
            if (1 != a.eventType[t.type] && 0 !== (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2))
                return;
            if (this.enabled && (!this.initiated || a.eventType[t.type] === this.initiated)) {
                !this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var n, s = t.touches ? t.touches[0] : t;
                this.initiated = a.eventType[t.type],
                this.moved = !1,
                this.distX = 0,
                this.distY = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.directionLocked = 0,
                this.startTime = a.getTime(),
                this.options.useTransition && this.isInTransition ? (this._transitionTime(),
                this.isInTransition = !1,
                n = this.getComputedPosition(),
                this._translate(i.round(n.x), i.round(n.y)),
                this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                this._execEvent("scrollEnd")),
                this.startX = this.x,
                this.startY = this.y,
                this.absStartX = this.x,
                this.absStartY = this.y,
                this.pointX = s.pageX,
                this.pointY = s.pageY,
                this._execEvent("beforeScrollStart")
            }
        },
        _move: function(t) {
            if (this.enabled && a.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, n, s, o, r = t.touches ? t.touches[0] : t, l = r.pageX - this.pointX, c = r.pageY - this.pointY, h = a.getTime();
                if (this.pointX = r.pageX,
                this.pointY = r.pageY,
                this.distX += l,
                this.distY += c,
                s = i.abs(this.distX),
                o = i.abs(this.distY),
                !(h - this.endTime > 300 && s < 10 && o < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (s > o + this.options.directionLockThreshold ? this.directionLocked = "h" : o >= s + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                    "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        c = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        l = 0
                    }
                    l = this.hasHorizontalScroll ? l : 0,
                    c = this.hasVerticalScroll ? c : 0,
                    e = this.x + l,
                    n = this.y + c,
                    (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + l / 3 : e > 0 ? 0 : this.maxScrollX),
                    (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + c / 3 : n > 0 ? 0 : this.maxScrollY),
                    this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0,
                    this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0,
                    this.moved || this._execEvent("scrollStart"),
                    this.moved = !0,
                    this._translate(e, n),
                    h - this.startTime > 300 && (this.startTime = h,
                    this.startX = this.x,
                    this.startY = this.y)
                }
            }
        },
        _end: function(t) {
            if (this.enabled && a.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var e, n, s = (t.changedTouches && t.changedTouches[0],
                a.getTime() - this.startTime), o = i.round(this.x), r = i.round(this.y), l = i.abs(o - this.startX), c = i.abs(r - this.startY), h = 0, u = "";
                if (this.isInTransition = 0,
                this.initiated = 0,
                this.endTime = a.getTime(),
                !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(o, r),
                    !this.moved)
                        return this.options.tap && a.tap(t, this.options.tap),
                        this.options.click && a.click(t),
                        void this._execEvent("scrollCancel");
                    if (this._events.flick && s < 200 && l < 100 && c < 100)
                        return void this._execEvent("flick");
                    if (this.options.momentum && s < 300 && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: o,
                        duration: 0
                    },
                    n = this.hasVerticalScroll ? a.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: r,
                        duration: 0
                    },
                    o = e.destination,
                    r = n.destination,
                    h = i.max(e.duration, n.duration),
                    this.isInTransition = 1),
                    this.options.snap) {
                        var d = this._nearestSnap(o, r);
                        this.currentPage = d,
                        h = this.options.snapSpeed || i.max(i.max(i.min(i.abs(o - d.x), 1e3), i.min(i.abs(r - d.y), 1e3)), 300),
                        o = d.x,
                        r = d.y,
                        this.directionX = 0,
                        this.directionY = 0,
                        u = this.options.bounceEasing
                    }
                    return o != this.x || r != this.y ? ((o > 0 || o < this.maxScrollX || r > 0 || r < this.maxScrollY) && (u = a.ease.quadratic),
                    void this.scrollTo(o, r, h, u)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout((function() {
                t.refresh()
            }
            ), this.options.resizePolling)
        },
        resetPosition: function(t) {
            var e = this.x
              , i = this.y;
            return t = t || 0,
            !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY),
            (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing),
            !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight,
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0,
            this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0,
            this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = a.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(t, e) {
            this._events[t] || (this._events[t] = []),
            this._events[t].push(e)
        },
        off: function(t, e) {
            if (this._events[t]) {
                var i = this._events[t].indexOf(e);
                i > -1 && this._events[t].splice(i, 1)
            }
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var e = 0
                  , i = this._events[t].length;
                if (i)
                    for (; e < i; e++)
                        this._events[t][e].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(t, e, i, n) {
            t = this.x + t,
            e = this.y + e,
            i = i || 0,
            this.scrollTo(t, e, i, n)
        },
        scrollTo: function(t, e, i, n) {
            n = n || a.ease.circular,
            this.isInTransition = this.options.useTransition && i > 0;
            var s = this.options.useTransition && n.style;
            !i || s ? (s && (this._transitionTimingFunction(n.style),
            this._transitionTime(i)),
            this._translate(t, e)) : this._animate(t, e, i, n.fn)
        },
        scrollToElement: function(t, e, n, s, o) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var r = a.offset(t);
                r.left -= this.wrapperOffset.left,
                r.top -= this.wrapperOffset.top,
                !0 === n && (n = i.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                !0 === s && (s = i.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                r.left -= n || 0,
                r.top -= s || 0,
                r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left,
                r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top,
                e = null == e || "auto" === e ? i.max(i.abs(this.x - r.left), i.abs(this.y - r.top)) : e,
                this.scrollTo(r.left, r.top, e, o)
            }
        },
        _transitionTime: function(t) {
            if (this.options.useTransition) {
                t = t || 0;
                var e = a.style.transitionDuration;
                if (e) {
                    if (this.scrollerStyle[e] = t + "ms",
                    !t && a.isBadAndroid) {
                        this.scrollerStyle[e] = "0.0001ms";
                        var i = this;
                        r((function() {
                            "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                        }
                        ))
                    }
                    if (this.indicators)
                        for (var n = this.indicators.length; n--; )
                            this.indicators[n].transitionTime(t)
                }
            }
        },
        _transitionTimingFunction: function(t) {
            if (this.scrollerStyle[a.style.transitionTimingFunction] = t,
            this.indicators)
                for (var e = this.indicators.length; e--; )
                    this.indicators[e].transitionTimingFunction(t)
        },
        _translate: function(t, e) {
            if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = i.round(t),
            e = i.round(e),
            this.scrollerStyle.left = t + "px",
            this.scrollerStyle.top = e + "px"),
            this.x = t,
            this.y = e,
            this.indicators)
                for (var n = this.indicators.length; n--; )
                    this.indicators[n].updatePosition()
        },
        _initEvents: function(e) {
            var i = e ? a.removeEvent : a.addEvent
              , n = this.options.bindToWrapper ? this.wrapper : t;
            i(t, "orientationchange", this),
            i(t, "resize", this),
            this.options.click && i(this.wrapper, "click", this, !0),
            this.options.disableMouse || (i(this.wrapper, "mousedown", this),
            i(n, "mousemove", this),
            i(n, "mousecancel", this),
            i(n, "mouseup", this)),
            a.hasPointer && !this.options.disablePointer && (i(this.wrapper, a.prefixPointerEvent("pointerdown"), this),
            i(n, a.prefixPointerEvent("pointermove"), this),
            i(n, a.prefixPointerEvent("pointercancel"), this),
            i(n, a.prefixPointerEvent("pointerup"), this)),
            a.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this),
            i(n, "touchmove", this),
            i(n, "touchcancel", this),
            i(n, "touchend", this)),
            i(this.scroller, "transitionend", this),
            i(this.scroller, "webkitTransitionEnd", this),
            i(this.scroller, "oTransitionEnd", this),
            i(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var e, i, n = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (e = +((n = n[a.style.transform].split(")")[0].split(", "))[12] || n[4]),
            i = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""),
            i = +n.top.replace(/[^-\d.]/g, "")),
            {
                x: e,
                y: i
            }
        },
        _initIndicators: function() {
            function t(t) {
                if (a.indicators)
                    for (var e = a.indicators.length; e--; )
                        t.call(a.indicators[e])
            }
            var e, i = this.options.interactiveScrollbars, n = "string" != typeof this.options.scrollbars, r = [], a = this;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (e = {
                el: s("v", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            },
            this.wrapper.appendChild(e.el),
            r.push(e)),
            this.options.scrollX && (e = {
                el: s("h", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            },
            this.wrapper.appendChild(e.el),
            r.push(e))),
            this.options.indicators && (r = r.concat(this.options.indicators));
            for (var l = r.length; l--; )
                this.indicators.push(new o(this,r[l]));
            this.options.fadeScrollbars && (this.on("scrollEnd", (function() {
                t((function() {
                    this.fade()
                }
                ))
            }
            )),
            this.on("scrollCancel", (function() {
                t((function() {
                    this.fade()
                }
                ))
            }
            )),
            this.on("scrollStart", (function() {
                t((function() {
                    this.fade(1)
                }
                ))
            }
            )),
            this.on("beforeScrollStart", (function() {
                t((function() {
                    this.fade(1, !0)
                }
                ))
            }
            ))),
            this.on("refresh", (function() {
                t((function() {
                    this.refresh()
                }
                ))
            }
            )),
            this.on("destroy", (function() {
                t((function() {
                    this.destroy()
                }
                )),
                delete this.indicators
            }
            ))
        },
        _initWheel: function() {
            a.addEvent(this.wrapper, "wheel", this),
            a.addEvent(this.wrapper, "mousewheel", this),
            a.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy", (function() {
                clearTimeout(this.wheelTimeout),
                this.wheelTimeout = null,
                a.removeEvent(this.wrapper, "wheel", this),
                a.removeEvent(this.wrapper, "mousewheel", this),
                a.removeEvent(this.wrapper, "DOMMouseScroll", this)
            }
            ))
        },
        _wheel: function(t) {
            if (this.enabled) {
                var e, n, s, o, r = this;
                if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"),
                clearTimeout(this.wheelTimeout),
                this.wheelTimeout = setTimeout((function() {
                    r.options.snap || r._execEvent("scrollEnd"),
                    r.wheelTimeout = void 0
                }
                ), 400),
                "deltaX"in t)
                    1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed,
                    n = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX,
                    n = -t.deltaY);
                else if ("wheelDeltaX"in t)
                    e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                    n = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta"in t)
                    e = n = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail"in t))
                        return;
                    e = n = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (e *= this.options.invertWheelDirection,
                n *= this.options.invertWheelDirection,
                this.hasVerticalScroll || (e = n,
                n = 0),
                this.options.snap)
                    return s = this.currentPage.pageX,
                    o = this.currentPage.pageY,
                    e > 0 ? s-- : e < 0 && s++,
                    n > 0 ? o-- : n < 0 && o++,
                    void this.goToPage(s, o);
                s = this.x + i.round(this.hasHorizontalScroll ? e : 0),
                o = this.y + i.round(this.hasVerticalScroll ? n : 0),
                this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0,
                this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0,
                s > 0 ? s = 0 : s < this.maxScrollX && (s = this.maxScrollX),
                o > 0 ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY),
                this.scrollTo(s, o, 0)
            }
        },
        _initSnap: function() {
            this.currentPage = {},
            "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh", (function() {
                var t, e, n, s, o, r, a = 0, l = 0, c = 0, h = this.options.snapStepX || this.wrapperWidth, u = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [],
                this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (!0 === this.options.snap)
                        for (n = i.round(h / 2),
                        s = i.round(u / 2); c > -this.scrollerWidth; ) {
                            for (this.pages[a] = [],
                            t = 0,
                            o = 0; o > -this.scrollerHeight; )
                                this.pages[a][t] = {
                                    x: i.max(c, this.maxScrollX),
                                    y: i.max(o, this.maxScrollY),
                                    width: h,
                                    height: u,
                                    cx: c - n,
                                    cy: o - s
                                },
                                o -= u,
                                t++;
                            c -= h,
                            a++
                        }
                    else
                        for (t = (r = this.options.snap).length,
                        e = -1; a < t; a++)
                            (0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (l = 0,
                            e++),
                            this.pages[l] || (this.pages[l] = []),
                            c = i.max(-r[a].offsetLeft, this.maxScrollX),
                            o = i.max(-r[a].offsetTop, this.maxScrollY),
                            n = c - i.round(r[a].offsetWidth / 2),
                            s = o - i.round(r[a].offsetHeight / 2),
                            this.pages[l][e] = {
                                x: c,
                                y: o,
                                width: r[a].offsetWidth,
                                height: r[a].offsetHeight,
                                cx: n,
                                cy: s
                            },
                            c > this.maxScrollX && l++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                    this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold,
                    this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
                    this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }
            )),
            this.on("flick", (function() {
                var t = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            }
            ))
        },
        _nearestSnap: function(t, e) {
            if (!this.pages.length)
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
            var n = 0
              , s = this.pages.length
              , o = 0;
            if (i.abs(t - this.absStartX) < this.snapThresholdX && i.abs(e - this.absStartY) < this.snapThresholdY)
                return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX),
            e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n < s; n++)
                if (t >= this.pages[n][0].cx) {
                    t = this.pages[n][0].x;
                    break
                }
            for (s = this.pages[n].length; o < s; o++)
                if (e >= this.pages[0][o].cy) {
                    e = this.pages[0][o].y;
                    break
                }
            return n == this.currentPage.pageX && ((n += this.directionX) < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1),
            t = this.pages[n][0].x),
            o == this.currentPage.pageY && ((o += this.directionY) < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1),
            e = this.pages[0][o].y),
            {
                x: t,
                y: e,
                pageX: n,
                pageY: o
            }
        },
        goToPage: function(t, e, n, s) {
            s = s || this.options.bounceEasing,
            t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0),
            e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
            var o = this.pages[t][e].x
              , r = this.pages[t][e].y;
            n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(o - this.x), 1e3), i.min(i.abs(r - this.y), 1e3)), 300) : n,
            this.currentPage = {
                x: o,
                y: r,
                pageX: t,
                pageY: e
            },
            this.scrollTo(o, r, n, s)
        },
        next: function(t, e) {
            var i = this.currentPage.pageX
              , n = this.currentPage.pageY;
            ++i >= this.pages.length && this.hasVerticalScroll && (i = 0,
            n++),
            this.goToPage(i, n, t, e)
        },
        prev: function(t, e) {
            var i = this.currentPage.pageX
              , n = this.currentPage.pageY;
            --i < 0 && this.hasVerticalScroll && (i = 0,
            n--),
            this.goToPage(i, n, t, e)
        },
        _initKeys: function(e) {
            var i, n = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (i in this.options.keyBindings)
                    "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else
                this.options.keyBindings = {};
            for (i in n)
                this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
            a.addEvent(t, "keydown", this),
            this.on("destroy", (function() {
                a.removeEvent(t, "keydown", this)
            }
            ))
        },
        _key: function(t) {
            if (this.enabled) {
                var e, n = this.options.snap, s = n ? this.currentPage.pageX : this.x, o = n ? this.currentPage.pageY : this.y, r = a.getTime(), l = this.keyTime || 0, c = .25;
                switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(),
                this._translate(i.round(e.x), i.round(e.y)),
                this.isInTransition = !1),
                this.keyAcceleration = r - l < 200 ? i.min(this.keyAcceleration + c, 50) : 0,
                t.keyCode) {
                case this.options.keyBindings.pageUp:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? s += n ? 1 : this.wrapperWidth : o += n ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.pageDown:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? s -= n ? 1 : this.wrapperWidth : o -= n ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.end:
                    s = n ? this.pages.length - 1 : this.maxScrollX,
                    o = n ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    s = 0,
                    o = 0;
                    break;
                case this.options.keyBindings.left:
                    s += n ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    o += n ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    s -= n ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    o -= n ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
                }
                if (n)
                    return void this.goToPage(s, o);
                s > 0 ? (s = 0,
                this.keyAcceleration = 0) : s < this.maxScrollX && (s = this.maxScrollX,
                this.keyAcceleration = 0),
                o > 0 ? (o = 0,
                this.keyAcceleration = 0) : o < this.maxScrollY && (o = this.maxScrollY,
                this.keyAcceleration = 0),
                this.scrollTo(s, o, 0),
                this.keyTime = r
            }
        },
        _animate: function(t, e, i, n) {
            function s() {
                var d, p, f, g = a.getTime();
                return g >= u ? (o.isAnimating = !1,
                o._translate(t, e),
                void (o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd"))) : (f = n(g = (g - h) / i),
                d = (t - l) * f + l,
                p = (e - c) * f + c,
                o._translate(d, p),
                void (o.isAnimating && r(s)))
            }
            var o = this
              , l = this.x
              , c = this.y
              , h = a.getTime()
              , u = h + i;
            this.isAnimating = !0,
            s()
        },
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(t);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(t);
                break;
            case "keydown":
                this._key(t);
                break;
            case "click":
                this.enabled && !t._constructed && (t.preventDefault(),
                t.stopPropagation())
            }
        }
    },
    o.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t)
            }
        },
        destroy: function() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout),
            this.fadeTimeout = null),
            this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this),
            a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this),
            a.removeEvent(this.indicator, "mousedown", this),
            a.removeEvent(t, "touchmove", this),
            a.removeEvent(t, a.prefixPointerEvent("pointermove"), this),
            a.removeEvent(t, "mousemove", this),
            a.removeEvent(t, "touchend", this),
            a.removeEvent(t, a.prefixPointerEvent("pointerup"), this),
            a.removeEvent(t, "mouseup", this)),
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(e) {
            var i = e.touches ? e.touches[0] : e;
            e.preventDefault(),
            e.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = i.pageX,
            this.lastPointY = i.pageY,
            this.startTime = a.getTime(),
            this.options.disableTouch || a.addEvent(t, "touchmove", this),
            this.options.disablePointer || a.addEvent(t, a.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || a.addEvent(t, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            var e, i, n, s, o = t.touches ? t.touches[0] : t;
            a.getTime(),
            this.moved || this.scroller._execEvent("scrollStart"),
            this.moved = !0,
            e = o.pageX - this.lastPointX,
            this.lastPointX = o.pageX,
            i = o.pageY - this.lastPointY,
            this.lastPointY = o.pageY,
            n = this.x + e,
            s = this.y + i,
            this._pos(n, s),
            t.preventDefault(),
            t.stopPropagation()
        },
        _end: function(e) {
            if (this.initiated) {
                if (this.initiated = !1,
                e.preventDefault(),
                e.stopPropagation(),
                a.removeEvent(t, "touchmove", this),
                a.removeEvent(t, a.prefixPointerEvent("pointermove"), this),
                a.removeEvent(t, "mousemove", this),
                this.scroller.options.snap) {
                    var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y)
                      , s = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - n.x), 1e3), i.min(i.abs(this.scroller.y - n.y), 1e3)), 300);
                    this.scroller.x == n.x && this.scroller.y == n.y || (this.scroller.directionX = 0,
                    this.scroller.directionY = 0,
                    this.scroller.currentPage = n,
                    this.scroller.scrollTo(n.x, n.y, s, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(t) {
            t = t || 0;
            var e = a.style.transitionDuration;
            if (e && (this.indicatorStyle[e] = t + "ms",
            !t && a.isBadAndroid)) {
                this.indicatorStyle[e] = "0.0001ms";
                var i = this;
                r((function() {
                    "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                }
                ))
            }
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[a.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none",
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"),
            a.removeClass(this.wrapper, "iScrollLoneScrollbar"),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"),
            a.addClass(this.wrapper, "iScrollLoneScrollbar"),
            this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")),
            this.wrapper.offsetHeight,
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
            this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
            this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth,
            this.maxPosX = this.wrapperWidth - this.indicatorWidth,
            "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth,
            this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0,
            this.maxBoundaryX = this.maxPosX),
            this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight,
            this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
            this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight,
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight,
            this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0,
            this.maxBoundaryY = this.maxPosY),
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function() {
            var t = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0
              , e = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + t, 8),
            this.indicatorStyle.width = this.width + "px"),
            t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (t - this.maxPosX), 8),
            this.indicatorStyle.width = this.width + "px",
            t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
            this.indicatorStyle.width = this.width + "px"),
            e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * e, 8),
            this.indicatorStyle.height = this.height + "px"),
            e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8),
            this.indicatorStyle.height = this.height + "px",
            e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
            this.indicatorStyle.height = this.height + "px")),
            this.x = t,
            this.y = e,
            this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px",
            this.indicatorStyle.top = e + "px")
        },
        _pos: function(t, e) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
            e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY),
            t = this.options.listenX ? i.round(t / this.sizeRatioX) : this.scroller.x,
            e = this.options.listenY ? i.round(e / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(t, e)
        },
        fade: function(t, e) {
            if (!e || this.visible) {
                clearTimeout(this.fadeTimeout),
                this.fadeTimeout = null;
                var i = t ? 250 : 500
                  , n = t ? 0 : 300;
                t = t ? "1" : "0",
                this.wrapperStyle[a.style.transitionDuration] = i + "ms",
                this.fadeTimeout = setTimeout(function(t) {
                    this.wrapperStyle.opacity = t,
                    this.visible = +t
                }
                .bind(this, t), n)
            }
        }
    },
    n.utils = a,
    "undefined" != typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define((function() {
        return n
    }
    )) : t.IScroll = n
}(window, document, Math),
/*!
 * fullPage ScrollOverflow
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
function(t, e) {
    var i, n = "." + "active", s, o, r = "." + "fp-section" + n, a, l, c = "." + "fp-slide" + n, h, u = "." + "fp-slides", d = "fp-scrollable", p = "." + d;
    "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this),
        this.wrapper.addEventListener("mousewheel", this),
        this.wrapper.addEventListener("DOMMouseScroll", this)
    }
    ,
    IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this),
        this.wrapper.removeEventListener("mousewheel", this),
        this.wrapper.removeEventListener("DOMMouseScroll", this)
    }
    ),
    t.iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function(t) {
            var i;
            e(r).find(p).each((function() {
                var i = e(this).data("iscrollInstance");
                void 0 !== i && i && (t ? i.wheelOn() : i.wheelOff())
            }
            ))
        },
        onLeave: function() {
            iscrollHandler.toggleWheel(!1)
        },
        beforeLeave: function() {
            iscrollHandler.onLeave()
        },
        afterLoad: function() {
            iscrollHandler.toggleWheel(!0)
        },
        create: function(t, i, n) {
            var s = t.find(p);
            s.height(i),
            s.each((function() {
                var t = e(this)
                  , i = t.data("iscrollInstance");
                i && e.each(iscrollHandler.iScrollInstances, (function() {
                    e(this).destroy()
                }
                )),
                (i = new IScroll(t.get(0),n)).on("scrollEnd", (function() {
                    this.fp_isAtTop = this.y > -30,
                    this.fp_isAtEnd = this.y - this.maxScrollY < 30
                }
                )),
                iscrollHandler.iScrollInstances.push(i),
                i.wheelOff(),
                t.data("iscrollInstance", i)
            }
            ))
        },
        isScrolled: function(t, e) {
            var i = e.data("iscrollInstance");
            return !i || ("top" === t ? i.y >= 0 && !e.scrollTop() : "bottom" === t ? 0 - i.y + e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0)
        },
        scrollable: function(t) {
            return t.find(u).length ? t.find(c).find(p) : t.find(p)
        },
        scrollHeight: function(t) {
            return t.find(p).children().first().get(0).scrollHeight
        },
        remove: function(t) {
            var e = t.find(p);
            if (e.length) {
                var i = e.data("iscrollInstance");
                i && i.destroy(),
                e.data("iscrollInstance", null)
            }
            t.find(p).children().first().children().first().unwrap().unwrap()
        },
        update: function(t, i) {
            clearTimeout(iscrollHandler.refreshId),
            iscrollHandler.refreshId = setTimeout((function() {
                e.each(iscrollHandler.iScrollInstances, (function() {
                    e(this).get(0).refresh()
                }
                ))
            }
            ), 150),
            t.find(p).css("height", i + "px").parent().css("height", i + "px")
        },
        wrapContent: function() {
            return '<div class="' + d + '"><div class="fp-scroller"></div></div>'
        }
    }
}(window, jQuery),
function(t, e, i) {
    $.fn.fp_scrolloverflow = function() {
        function i() {
            function i() {
                $("body").hasClass(v) ? o() : s(n),
                $.fn.fullpage.shared.afterRenderActions()
            }
            function n(e) {
                if (!e.hasClass("fp-noscroll")) {
                    e.css("overflow", "hidden");
                    var i, n = r.options.scrollOverflowHandler, s = n.wrapContent(), o = e.closest(l), a = n.scrollable(e);
                    a.length ? i = n.scrollHeight(e) : (i = e.get(0).scrollHeight,
                    r.options.verticalCentered && (i = e.find(m).get(0).scrollHeight));
                    var c = $(t).height() - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
                    i > c ? a.length ? n.update(e, c) : (r.options.verticalCentered ? e.find(m).wrapInner(s) : e.wrapInner(s),
                    n.create(e, c, r.iscrollOptions)) : n.remove(e),
                    e.css("overflow", "")
                }
            }
            function s(t) {
                $(l).each((function() {
                    var e = $(this).find(u);
                    e.length ? e.each((function() {
                        t($(this))
                    }
                    )) : t($(this))
                }
                ))
            }
            function o() {
                var t = r.options.scrollOverflowHandler;
                s((function(e) {
                    e.closest(l).hasClass(y) && t.remove(e)
                }
                ))
            }
            var r = this;
            r.options = null,
            r.init = function(n, s) {
                return r.options = n,
                r.iscrollOptions = s,
                "complete" === e.readyState && i(),
                $(t).on("load", i),
                r
            }
            ,
            r.createScrollBarForAll = i
        }
        var n = "fp-scrollable", s = "." + n, o, r = "." + "active", a, l = "." + "fp-section", c = l + r, h, u = "." + "fp-slide", d = u + r, p, f = "." + "fp-slides", g, m = "." + "fp-tableCell", v = "fp-responsive", y = "fp-auto-height-responsive";
        IScroll.prototype.wheelOn = function() {
            this.wrapper.addEventListener("wheel", this),
            this.wrapper.addEventListener("mousewheel", this),
            this.wrapper.addEventListener("DOMMouseScroll", this)
        }
        ,
        IScroll.prototype.wheelOff = function() {
            this.wrapper.removeEventListener("wheel", this),
            this.wrapper.removeEventListener("mousewheel", this),
            this.wrapper.removeEventListener("DOMMouseScroll", this)
        }
        ;
        var _ = {
            refreshId: null,
            iScrollInstances: [],
            iscrollOptions: {
                scrollbars: !0,
                mouseWheel: !0,
                hideScrollbars: !1,
                fadeScrollbars: !1,
                disableMouse: !0,
                interactiveScrollbars: !0
            },
            init: function(e) {
                var n = "ontouchstart"in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
                return _.iscrollOptions.click = n,
                _.iscrollOptions = $.extend(_.iscrollOptions, e.scrollOverflowOptions),
                (new i).init(e, _.iscrollOptions)
            },
            toggleWheel: function(t) {
                var e;
                $(c).find(s).each((function() {
                    var e = $(this).data("iscrollInstance");
                    void 0 !== e && e && (t ? e.wheelOn() : e.wheelOff())
                }
                ))
            },
            onLeave: function() {
                _.toggleWheel(!1)
            },
            beforeLeave: function() {
                _.onLeave()
            },
            afterLoad: function() {
                _.toggleWheel(!0)
            },
            create: function(t, e, i) {
                var n = t.find(s);
                n.height(e),
                n.each((function() {
                    var t = $(this)
                      , e = t.data("iscrollInstance");
                    e && $.each(_.iScrollInstances, (function() {
                        $(this).destroy()
                    }
                    )),
                    e = new IScroll(t.get(0),i),
                    _.iScrollInstances.push(e),
                    e.wheelOff(),
                    t.data("iscrollInstance", e)
                }
                ))
            },
            isScrolled: function(t, e) {
                var i = e.data("iscrollInstance");
                return !i || ("top" === t ? i.y >= 0 && !e.scrollTop() : "bottom" === t ? 0 - i.y + e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0)
            },
            scrollable: function(t) {
                return t.find(f).length ? t.find(d).find(s) : t.find(s)
            },
            scrollHeight: function(t) {
                return t.find(s).children().first().get(0).scrollHeight
            },
            remove: function(t) {
                var e = t.find(s), i;
                e.length && (e.data("iscrollInstance").destroy(),
                e.data("iscrollInstance", null));
                t.find(s).children().first().children().first().unwrap().unwrap()
            },
            update: function(t, e) {
                clearTimeout(_.refreshId),
                _.refreshId = setTimeout((function() {
                    $.each(_.iScrollInstances, (function() {
                        $(this).get(0).refresh()
                    }
                    ))
                }
                ), 150),
                t.find(s).css("height", e + "px").parent().css("height", e + "px")
            },
            wrapContent: function() {
                return '<div class="' + n + '"><div class="fp-scroller"></div></div>'
            }
        };
        return {
            iscrollHandler: _
        }
    }()
}(window, jQuery),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
        e(t, i)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, (function(t, e) {
    "use strict";
    function i(i, o, a) {
        function l(t, e, n) {
            var s, o = "$()." + i + '("' + e + '")';
            return t.each((function(t, l) {
                var c = a.data(l, i);
                if (c) {
                    var h = c[e];
                    if (h && "_" != e.charAt(0)) {
                        var u = h.apply(c, n);
                        s = void 0 === s ? u : s
                    } else
                        r(o + " is not a valid method")
                } else
                    r(i + " not initialized. Cannot call methods, i.e. " + o)
            }
            )),
            void 0 !== s ? s : t
        }
        function c(t, e) {
            t.each((function(t, n) {
                var s = a.data(n, i);
                s ? (s.option(e),
                s._init()) : (s = new o(n,e),
                a.data(n, i, s))
            }
            ))
        }
        (a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            var e;
            return "string" == typeof t ? l(this, t, s.call(arguments, 1)) : (c(this, t),
            this)
        }
        ,
        n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var s = Array.prototype.slice
      , o = t.console
      , r = void 0 === o ? function() {}
    : function(t) {
        o.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}
)),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], (function() {
        return e()
    }
    )) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, (function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t), i;
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; c > e; e++) {
            var i;
            t[l[e]] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        e
    }
    function s() {
        if (!h) {
            h = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var s = n(e);
            o.isBoxSizeOuter = r = 200 == t(s.width),
            i.removeChild(e)
        }
    }
    function o(e) {
        if (s(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var o = n(e);
            if ("none" == o.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var h = a.isBorderBox = "border-box" == o.boxSizing, u = 0; c > u; u++) {
                var d = l[u]
                  , p = o[d]
                  , f = parseFloat(p);
                a[d] = isNaN(f) ? 0 : f
            }
            var g = a.paddingLeft + a.paddingRight
              , m = a.paddingTop + a.paddingBottom
              , v = a.marginLeft + a.marginRight
              , y = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , w = a.borderTopWidth + a.borderBottomWidth
              , b = h && r
              , T = t(o.width);
            !1 !== T && (a.width = T + (b ? 0 : g + _));
            var x = t(o.height);
            return !1 !== x && (a.height = x + (b ? 0 : m + w)),
            a.innerWidth = a.width - (g + _),
            a.innerHeight = a.height - (m + w),
            a.outerWidth = a.width + v,
            a.outerHeight = a.height + y,
            a
        }
    }
    var r, a = void 0 === console ? e : function(t) {
        console.error(t)
    }
    , l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], c = l.length, h = !1;
    return o
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, (function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n;
            return (i[t] = i[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0
              , s = i[n];
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t]; s; ) {
                var r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e),
                s = i[n += r ? 0 : 1]
            }
            return this
        }
    }
    ,
    t
}
)),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, (function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n, s = e[i] + "MatchesSelector";
            if (t[s])
                return s
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
        return e(t, i)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, (function(t, e) {
    var i = {
        extend: function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        },
        modulo: function(t, e) {
            return (t % e + e) % e
        },
        makeArray: function(t) {
            var e = [];
            if (Array.isArray(t))
                e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++)
                    e.push(t[i]);
            else
                e.push(t);
            return e
        },
        removeFrom: function(t, e) {
            var i = t.indexOf(e);
            -1 != i && t.splice(i, 1)
        },
        getParent: function(t, i) {
            for (; t != document.body; )
                if (t = t.parentNode,
                e(t, i))
                    return t
        },
        getQueryElement: function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        },
        handleEvent: function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        },
        filterFindElements: function(t, n) {
            t = i.makeArray(t);
            var s = [];
            return t.forEach((function(t) {
                if (t instanceof HTMLElement) {
                    if (!n)
                        return void s.push(t);
                    e(t, n) && s.push(t);
                    for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                        s.push(i[o])
                }
            }
            )),
            s
        },
        debounceMethod: function(t, e, i) {
            var n = t.prototype[e]
              , s = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[s];
                t && clearTimeout(t);
                var e = arguments
                  , o = this;
                this[s] = setTimeout((function() {
                    n.apply(o, e),
                    delete o[s]
                }
                ), i || 100)
            }
        },
        docReady: function(t) {
            "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
        },
        toDashed: function(t) {
            return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                return e + "-" + i
            }
            )).toLowerCase()
        }
    }
      , n = t.console;
    return i.htmlInit = function(e, s) {
        i.docReady((function() {
            var o = i.toDashed(s)
              , r = "data-" + o
              , a = document.querySelectorAll("[" + r + "]")
              , l = document.querySelectorAll(".js-" + o)
              , c = i.makeArray(a).concat(i.makeArray(l))
              , h = r + "-options"
              , u = t.jQuery;
            c.forEach((function(t) {
                var i, o = t.getAttribute(r) || t.getAttribute(h);
                try {
                    i = o && JSON.parse(o)
                } catch (e) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + e))
                }
                var a = new e(t,i);
                u && u.data(t, s, a)
            }
            ))
        }
        ))
    }
    ,
    i
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, (function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function n(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function s(t) {
        return t.replace(/([A-Z])/g, (function(t) {
            return "-" + t.toLowerCase()
        }
        ))
    }
    var o = document.documentElement.style
      , r = "string" == typeof o.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof o.transform ? "transform" : "WebkitTransform"
      , l = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , c = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , h = n.prototype = Object.create(t.prototype);
    h.constructor = n,
    h._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    h.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    h.getSize = function() {
        this.size = e(this.element)
    }
    ,
    h.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n;
            e[c[i] || i] = t[i]
        }
    }
    ,
    h.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , n = t[e ? "left" : "right"]
          , s = t[i ? "top" : "bottom"]
          , o = this.layout.size
          , r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10)
          , a = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.height : parseInt(s, 10);
        r = isNaN(r) ? 0 : r,
        a = isNaN(a) ? 0 : a,
        r -= e ? o.paddingLeft : o.paddingRight,
        a -= i ? o.paddingTop : o.paddingBottom,
        this.position.x = r,
        this.position.y = a
    }
    ,
    h.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop")
          , s = i ? "paddingLeft" : "paddingRight"
          , o = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[s];
        e[o] = this.getXValue(a),
        e[r] = "";
        var l = n ? "paddingTop" : "paddingBottom"
          , c = n ? "top" : "bottom"
          , h = n ? "bottom" : "top"
          , u = this.position.y + t[l];
        e[c] = this.getYValue(u),
        e[h] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    h.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    h.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    h._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , n = this.position.y
          , s = parseInt(t, 10)
          , o = parseInt(e, 10)
          , r = s === this.position.x && o === this.position.y;
        if (this.setPosition(t, e),
        !r || this.isTransitioning) {
            var a = t - i
              , l = e - n
              , c = {};
            c.transform = this.getTranslate(a, l),
            this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else
            this.layoutPosition()
    }
    ,
    h.getTranslate = function(t, e) {
        var i, n;
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }
    ,
    h.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    h.moveTo = h._transitionTo,
    h.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10),
        this.position.y = parseInt(e, 10)
    }
    ,
    h._nonTransition = function(t) {
        for (var e in this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    h.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0,
                t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        } else
            this._nonTransition(t)
    }
    ;
    var u = "opacity," + s(a);
    h.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: u,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(l, this, !1)
        }
    }
    ,
    h.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    h.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var d = {
        "-webkit-transform": "transform"
    };
    h.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn, n = d[t.propertyName] || t.propertyName, s;
            if (delete e.ingProperties[n],
            i(e.ingProperties) && this.disableTransition(),
            n in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[n]),
            n in e.onEnd)
                e.onEnd[n].call(this),
                delete e.onEnd[n];
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    h.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(l, this, !1),
        this.isTransitioning = !1
    }
    ,
    h._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var p = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return h.removeTransitionStyles = function() {
        this.css(p)
    }
    ,
    h.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    h.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    h.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
            this.removeElem()
        }
        )),
        void this.hide()) : void this.removeElem()
    }
    ,
    h.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options, e = {}, i;
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    h.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    h.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    h.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options, e = {}, i;
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    h.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    h.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    n
}
)),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(i, n, s, o) {
        return e(t, i, n, s, o)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, (function(t, e, i, n, s) {
    "use strict";
    function o(t, e) {
        var i = n.getQueryElement(t);
        if (i) {
            this.element = i,
            c && (this.$element = c(this.element)),
            this.options = n.extend({}, this.constructor.defaults),
            this.option(e);
            var s = ++u, o;
            this.element.outlayerGUID = s,
            d[s] = this,
            this._create(),
            this._getOption("initLayout") && this.layout()
        } else
            l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2], s;
        return i.length ? (i = parseFloat(i)) * (f[n] || 1) : 0
    }
    var l = t.console
      , c = t.jQuery
      , h = function() {}
      , u = 0
      , d = {};
    o.namespace = "outlayer",
    o.Item = s,
    o.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var p = o.prototype;
    n.extend(p, e.prototype),
    p.option = function(t) {
        n.extend(this.options, t)
    }
    ,
    p._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    p._create = function() {
        var t;
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        n.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    }
    ,
    p.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    p._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
            var o, r = new i(e[s],this);
            n.push(r)
        }
        return n
    }
    ,
    p._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }
    ,
    p.getItemElements = function() {
        return this.items.map((function(t) {
            return t.element
        }
        ))
    }
    ,
    p.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    p._init = p.layout,
    p._resetLayout = function() {
        this.getSize()
    }
    ,
    p.getSize = function() {
        this.size = i(this.element)
    }
    ,
    p._getMeasurement = function(t, e) {
        var n, s = this.options[t];
        s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s),
        this[t] = n ? i(n)[e] : s) : this[t] = 0
    }
    ,
    p.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    p._getItemsForLayout = function(t) {
        return t.filter((function(t) {
            return !t.isIgnored
        }
        ))
    }
    ,
    p._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach((function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t,
                n.isInstant = e || t.isLayoutInstant,
                i.push(n)
            }
            ), this),
            this._processLayoutQueue(i)
        }
    }
    ,
    p._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    p._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach((function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }
        ), this)
    }
    ,
    p.updateStagger = function() {
        var t = this.options.stagger;
        return null == t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    p._positionItem = function(t, e, i, n, s) {
        n ? t.goTo(e, i) : (t.stagger(s * this.stagger),
        t.moveTo(e, i))
    }
    ,
    p._postLayout = function() {
        this.resizeContainer()
    }
    ,
    p.resizeContainer = function() {
        var t;
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    p._getContainerSize = h,
    p._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    p._emitCompleteOnItems = function(t, e) {
        function i() {
            s.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            ++r == o && i()
        }
        var s = this
          , o = e.length;
        if (e && o) {
            var r = 0;
            e.forEach((function(e) {
                e.once(t, n)
            }
            ))
        } else
            i()
    }
    ,
    p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        c)
            if (this.$element = this.$element || c(this.element),
            e) {
                var s = c.Event(e);
                s.type = t,
                this.$element.trigger(s, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    p.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    p.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    p.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    p.unstamp = function(t) {
        (t = this._find(t)) && t.forEach((function(t) {
            n.removeFrom(this.stamps, t),
            this.unignore(t)
        }
        ), this)
    }
    ,
    p._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
        t = n.makeArray(t)) : void 0
    }
    ,
    p._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    p._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    p._manageStamp = h,
    p._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, s = i(t), o;
        return {
            left: e.left - n.left - s.marginLeft,
            top: e.top - n.top - s.marginTop,
            right: n.right - e.right - s.marginRight,
            bottom: n.bottom - e.bottom - s.marginBottom
        }
    }
    ,
    p.handleEvent = n.handleEvent,
    p.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    p.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    p.onresize = function() {
        this.resize()
    }
    ,
    n.debounceMethod(o, "onresize", 100),
    p.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    p.needsResizeLayout = function() {
        var t = i(this.element), e;
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }
    ,
    p.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    p.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    p.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    p.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach((function(t, i) {
                t.stagger(i * e),
                t.reveal()
            }
            ))
        }
    }
    ,
    p.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach((function(t, i) {
                t.stagger(i * e),
                t.hide()
            }
            ))
        }
    }
    ,
    p.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    p.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    p.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    p.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach((function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }
        ), this),
        e
    }
    ,
    p.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach((function(t) {
            t.remove(),
            n.removeFrom(this.items, t)
        }
        ), this)
    }
    ,
    p.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach((function(t) {
            t.destroy()
        }
        )),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete d[e],
        delete this.element.outlayerGUID,
        c && c.removeData(this.element, this.constructor.namespace)
    }
    ,
    o.data = function(t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && d[e]
    }
    ,
    o.create = function(t, e) {
        var i = r(o);
        return i.defaults = n.extend({}, o.defaults),
        n.extend(i.defaults, e),
        i.compatOptions = n.extend({}, o.compatOptions),
        i.namespace = t,
        i.data = o.data,
        i.Item = r(s),
        n.htmlInit(i, t),
        c && c.bridget && c.bridget(t, i),
        i
    }
    ;
    var f = {
        ms: 1,
        s: 1e3
    };
    return o.Item = s,
    o
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {},
    t.Packery.Rect = e())
}(window, (function() {
    "use strict";
    function t(e) {
        for (var i in t.defaults)
            this[i] = t.defaults[i];
        for (i in e)
            this[i] = e[i]
    }
    t.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var e = t.prototype;
    return e.contains = function(t) {
        var e = t.width || 0
          , i = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
    }
    ,
    e.overlaps = function(t) {
        var e = this.x + this.width
          , i = this.y + this.height
          , n = t.x + t.width
          , s = t.y + t.height;
        return this.x < n && e > t.x && this.y < s && i > t.y
    }
    ,
    e.getMaximalFreeRects = function(e) {
        if (!this.overlaps(e))
            return !1;
        var i, n = [], s = this.x + this.width, o = this.y + this.height, r = e.x + e.width, a = e.y + e.height;
        return this.y < e.y && (i = new t({
            x: this.x,
            y: this.y,
            width: this.width,
            height: e.y - this.y
        }),
        n.push(i)),
        s > r && (i = new t({
            x: r,
            y: this.y,
            width: s - r,
            height: this.height
        }),
        n.push(i)),
        o > a && (i = new t({
            x: this.x,
            y: a,
            width: this.width,
            height: o - a
        }),
        n.push(i)),
        this.x < e.x && (i = new t({
            x: this.x,
            y: this.y,
            width: e.x - this.x,
            height: this.height
        }),
        n.push(i)),
        n
    }
    ,
    e.canFit = function(t) {
        return this.width >= t.width && this.height >= t.height
    }
    ,
    t
}
)),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], e);
    else if ("object" == typeof module && module.exports)
        module.exports = e(require("./rect"));
    else {
        var i = t.Packery = t.Packery || {};
        i.Packer = e(i.Rect)
    }
}(window, (function(t) {
    "use strict";
    function e(t, e, i) {
        this.width = t || 0,
        this.height = e || 0,
        this.sortDirection = i || "downwardLeftToRight",
        this.reset()
    }
    var i = e.prototype;
    i.reset = function() {
        this.spaces = [];
        var e = new t({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(e),
        this.sorter = n[this.sortDirection] || n.downwardLeftToRight
    }
    ,
    i.pack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.canFit(t)) {
                this.placeInSpace(t, i);
                break
            }
        }
    }
    ,
    i.columnPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e], n;
            if (i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - .01) {
                t.y = i.y,
                this.placed(t);
                break
            }
        }
    }
    ,
    i.rowPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e], n;
            if (i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - .01) {
                t.x = i.x,
                this.placed(t);
                break
            }
        }
    }
    ,
    i.placeInSpace = function(t, e) {
        t.x = e.x,
        t.y = e.y,
        this.placed(t)
    }
    ,
    i.placed = function(t) {
        for (var e = [], i = 0; i < this.spaces.length; i++) {
            var n = this.spaces[i]
              , s = n.getMaximalFreeRects(t);
            s ? e.push.apply(e, s) : e.push(n)
        }
        this.spaces = e,
        this.mergeSortSpaces()
    }
    ,
    i.mergeSortSpaces = function() {
        e.mergeRects(this.spaces),
        this.spaces.sort(this.sorter)
    }
    ,
    i.addSpace = function(t) {
        this.spaces.push(t),
        this.mergeSortSpaces()
    }
    ,
    e.mergeRects = function(t) {
        var e = 0
          , i = t[e];
        t: for (; i; ) {
            for (var n = 0, s = t[e + n]; s; ) {
                if (s == i)
                    n++;
                else {
                    if (s.contains(i)) {
                        t.splice(e, 1),
                        i = t[e];
                        continue t
                    }
                    i.contains(s) ? t.splice(e + n, 1) : n++
                }
                s = t[e + n]
            }
            i = t[++e]
        }
        return t
    }
    ;
    var n = {
        downwardLeftToRight: function(t, e) {
            return t.y - e.y || t.x - e.x
        },
        rightwardTopToBottom: function(t, e) {
            return t.x - e.x || t.y - e.y
        }
    };
    return e
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
}(window, (function(t, e) {
    "use strict";
    var i, n = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform", s = function() {
        t.Item.apply(this, arguments)
    }, o = s.prototype = Object.create(t.Item.prototype), r = o._create;
    o._create = function() {
        r.call(this),
        this.rect = new e
    }
    ;
    var a = o.moveTo;
    return o.moveTo = function(t, e) {
        var i = Math.abs(this.position.x - t), n = Math.abs(this.position.y - e), s;
        return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > i && 1 > n ? void this.goTo(t, e) : void a.apply(this, arguments)
    }
    ,
    o.enablePlacing = function() {
        this.removeTransitionStyles(),
        this.isTransitioning && n && (this.element.style[n] = "none"),
        this.isTransitioning = !1,
        this.getSize(),
        this.layout._setRectSize(this.element, this.rect),
        this.isPlacing = !0
    }
    ,
    o.disablePlacing = function() {
        this.isPlacing = !1
    }
    ,
    o.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.layout.packer.addSpace(this.rect),
        this.emitEvent("remove", [this])
    }
    ,
    o.showDropPlaceholder = function() {
        var t = this.dropPlaceholder;
        t || ((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder",
        t.style.position = "absolute"),
        t.style.width = this.size.width + "px",
        t.style.height = this.size.height + "px",
        this.positionDropPlaceholder(),
        this.layout.element.appendChild(t)
    }
    ,
    o.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[n] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }
    ,
    o.hideDropPlaceholder = function() {
        var t = this.dropPlaceholder.parentNode;
        t && t.removeChild(this.dropPlaceholder)
    }
    ,
    s
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(["get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
}(window, (function(t, e, i, n, s) {
    "use strict";
    function o(t, e) {
        return t.position.y - e.position.y || t.position.x - e.position.x
    }
    function r(t, e) {
        return t.position.x - e.position.x || t.position.y - e.position.y
    }
    function a(t, e) {
        var i = e.x - t.x
          , n = e.y - t.y;
        return Math.sqrt(i * i + n * n)
    }
    i.prototype.canFit = function(t) {
        return this.width >= t.width - 1 && this.height >= t.height - 1
    }
    ;
    var l = e.create("packery");
    l.Item = s;
    var c = l.prototype;
    c._create = function() {
        e.prototype._create.call(this),
        this.packer = new n,
        this.shiftPacker = new n,
        this.isEnabled = !0,
        this.dragItemCount = 0;
        var t = this;
        this.handleDraggabilly = {
            dragStart: function() {
                t.itemDragStart(this.element)
            },
            dragMove: function() {
                t.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                t.itemDragEnd(this.element)
            }
        },
        this.handleUIDraggable = {
            start: function(e, i) {
                i && t.itemDragStart(e.currentTarget)
            },
            drag: function(e, i) {
                i && t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
            },
            stop: function(e, i) {
                i && t.itemDragEnd(e.currentTarget)
            }
        }
    }
    ,
    c._resetLayout = function() {
        var t, e, i;
        this.getSize(),
        this._getMeasurements(),
        this._getOption("horizontal") ? (t = 1 / 0,
        e = this.size.innerHeight + this.gutter,
        i = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter,
        e = 1 / 0,
        i = "downwardLeftToRight"),
        this.packer.width = this.shiftPacker.width = t,
        this.packer.height = this.shiftPacker.height = e,
        this.packer.sortDirection = this.shiftPacker.sortDirection = i,
        this.packer.reset(),
        this.maxY = 0,
        this.maxX = 0
    }
    ,
    c._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"),
        this._getMeasurement("rowHeight", "height"),
        this._getMeasurement("gutter", "width")
    }
    ,
    c._getItemLayoutPosition = function(t) {
        if (this._setRectSize(t.element, t.rect),
        this.isShifting || this.dragItemCount > 0) {
            var e = this._getPackMethod();
            this.packer[e](t.rect)
        } else
            this.packer.pack(t.rect);
        return this._setMaxXY(t.rect),
        t.rect
    }
    ,
    c.shiftLayout = function() {
        this.isShifting = !0,
        this.layout(),
        delete this.isShifting
    }
    ,
    c._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    }
    ,
    c._setMaxXY = function(t) {
        this.maxX = Math.max(t.x + t.width, this.maxX),
        this.maxY = Math.max(t.y + t.height, this.maxY)
    }
    ,
    c._setRectSize = function(e, i) {
        var n = t(e)
          , s = n.outerWidth
          , o = n.outerHeight;
        (s || o) && (s = this._applyGridGutter(s, this.columnWidth),
        o = this._applyGridGutter(o, this.rowHeight)),
        i.width = Math.min(s, this.packer.width),
        i.height = Math.min(o, this.packer.height)
    }
    ,
    c._applyGridGutter = function(t, e) {
        if (!e)
            return t + this.gutter;
        var i = t % (e += this.gutter), n;
        return t = Math[i && 1 > i ? "round" : "ceil"](t / e) * e
    }
    ,
    c._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }
    ,
    c._manageStamp = function(t) {
        var e, n = this.getItem(t);
        if (n && n.isPlacing)
            e = n.rect;
        else {
            var s = this._getElementOffset(t);
            e = new i({
                x: this._getOption("originLeft") ? s.left : s.right,
                y: this._getOption("originTop") ? s.top : s.bottom
            })
        }
        this._setRectSize(t, e),
        this.packer.placed(e),
        this._setMaxXY(e)
    }
    ,
    c.sortItemsByPosition = function() {
        var t = this._getOption("horizontal") ? r : o;
        this.items.sort(t)
    }
    ,
    c.fit = function(t, e, i) {
        var n = this.getItem(t);
        n && (this.stamp(n.element),
        n.enablePlacing(),
        this.updateShiftTargets(n),
        e = void 0 === e ? n.rect.x : e,
        i = void 0 === i ? n.rect.y : i,
        this.shift(n, e, i),
        this._bindFitEvents(n),
        n.moveTo(n.rect.x, n.rect.y),
        this.shiftLayout(),
        this.unstamp(n.element),
        this.sortItemsByPosition(),
        n.disablePlacing())
    }
    ,
    c._bindFitEvents = function(t) {
        function e() {
            2 == ++n && i.dispatchEvent("fitComplete", null, [t])
        }
        var i = this
          , n = 0;
        t.once("layout", e),
        this.once("layoutComplete", e)
    }
    ,
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    }
    ,
    c.needsResizeLayout = function() {
        var e = t(this.element)
          , i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return e[i] != this.size[i]
    }
    ,
    c.resizeShiftPercentLayout = function() {
        var e = this._getItemsForLayout(this.items)
          , i = this._getOption("horizontal")
          , n = i ? "y" : "x"
          , s = i ? "height" : "width"
          , o = i ? "rowHeight" : "columnWidth"
          , r = i ? "innerHeight" : "innerWidth"
          , a = this[o];
        if (a = a && a + this.gutter) {
            this._getMeasurements();
            var l = this[o] + this.gutter;
            e.forEach((function(t) {
                var e = Math.round(t.rect[n] / a);
                t.rect[n] = e * l
            }
            ))
        } else {
            var c = t(this.element)[r] + this.gutter
              , h = this.packer[s];
            e.forEach((function(t) {
                t.rect[n] = t.rect[n] / h * c
            }
            ))
        }
        this.shiftLayout()
    }
    ,
    c.itemDragStart = function(t) {
        if (this.isEnabled) {
            this.stamp(t);
            var e = this.getItem(t);
            e && (e.enablePlacing(),
            e.showDropPlaceholder(),
            this.dragItemCount++,
            this.updateShiftTargets(e))
        }
    }
    ,
    c.updateShiftTargets = function(t) {
        this.shiftPacker.reset(),
        this._getBoundingRect();
        var e = this._getOption("originLeft")
          , n = this._getOption("originTop");
        this.stamps.forEach((function(t) {
            var s = this.getItem(t);
            if (!s || !s.isPlacing) {
                var o = this._getElementOffset(t)
                  , r = new i({
                    x: e ? o.left : o.right,
                    y: n ? o.top : o.bottom
                });
                this._setRectSize(t, r),
                this.shiftPacker.placed(r)
            }
        }
        ), this);
        var s = this._getOption("horizontal")
          , o = s ? "rowHeight" : "columnWidth"
          , r = s ? "height" : "width";
        this.shiftTargetKeys = [],
        this.shiftTargets = [];
        var a, l = this[o];
        if (l = l && l + this.gutter) {
            var c = Math.ceil(t.rect[r] / l)
              , h = Math.floor((this.shiftPacker[r] + this.gutter) / l);
            a = (h - c) * l;
            for (var u = 0; h > u; u++) {
                var d = s ? 0 : u * l
                  , p = s ? u * l : 0;
                this._addShiftTarget(d, p, a)
            }
        } else
            a = this.shiftPacker[r] + this.gutter - t.rect[r],
            this._addShiftTarget(0, 0, a);
        var f = this._getItemsForLayout(this.items)
          , g = this._getPackMethod();
        f.forEach((function(t) {
            var e = t.rect;
            this._setRectSize(t.element, e),
            this.shiftPacker[g](e),
            this._addShiftTarget(e.x, e.y, a);
            var i = s ? e.x + e.width : e.x
              , n = s ? e.y : e.y + e.height;
            if (this._addShiftTarget(i, n, a),
            l)
                for (var o = Math.round(e[r] / l), c = 1; o > c; c++) {
                    var h = s ? i : e.x + l * c
                      , u = s ? e.y + l * c : n;
                    this._addShiftTarget(h, u, a)
                }
        }
        ), this)
    }
    ,
    c._addShiftTarget = function(t, e, i) {
        var n = this._getOption("horizontal") ? e : t;
        if (!(0 !== n && n > i)) {
            var s = t + "," + e, o;
            -1 != this.shiftTargetKeys.indexOf(s) || (this.shiftTargetKeys.push(s),
            this.shiftTargets.push({
                x: t,
                y: e
            }))
        }
    }
    ,
    c.shift = function(t, e, i) {
        var n, s = 1 / 0, o = {
            x: e,
            y: i
        };
        this.shiftTargets.forEach((function(t) {
            var e = a(t, o);
            s > e && (n = t,
            s = e)
        }
        )),
        t.rect.x = n.x,
        t.rect.y = n.y
    }
    ;
    var h = 120;
    c.itemDragMove = function(t, e, i) {
        function n() {
            o.shift(s, e, i),
            s.positionDropPlaceholder(),
            o.layout()
        }
        var s = this.isEnabled && this.getItem(t);
        if (s) {
            e -= this.size.paddingLeft,
            i -= this.size.paddingTop;
            var o = this
              , r = new Date;
            this._itemDragTime && r - this._itemDragTime < h ? (clearTimeout(this.dragTimeout),
            this.dragTimeout = setTimeout(n, h)) : (n(),
            this._itemDragTime = r)
        }
    }
    ,
    c.itemDragEnd = function(t) {
        function e() {
            2 == ++n && (i.element.classList.remove("is-positioning-post-drag"),
            i.hideDropPlaceholder(),
            s.dispatchEvent("dragItemPositioned", null, [i]))
        }
        var i = this.isEnabled && this.getItem(t);
        if (i) {
            clearTimeout(this.dragTimeout),
            i.element.classList.add("is-positioning-post-drag");
            var n = 0
              , s = this;
            i.once("layout", e),
            this.once("layoutComplete", e),
            i.moveTo(i.rect.x, i.rect.y),
            this.layout(),
            this.dragItemCount = Math.max(0, this.dragItemCount - 1),
            this.sortItemsByPosition(),
            i.disablePlacing(),
            this.unstamp(i.element)
        }
    }
    ,
    c.bindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "on")
    }
    ,
    c.unbindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "off")
    }
    ,
    c._bindDraggabillyEvents = function(t, e) {
        var i = this.handleDraggabilly;
        t[e]("dragStart", i.dragStart),
        t[e]("dragMove", i.dragMove),
        t[e]("dragEnd", i.dragEnd)
    }
    ,
    c.bindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "on")
    }
    ,
    c.unbindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "off")
    }
    ,
    c._bindUIDraggableEvents = function(t, e) {
        var i = this.handleUIDraggable;
        t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop)
    }
    ;
    var u = c.destroy;
    return c.destroy = function() {
        u.apply(this, arguments),
        this.isEnabled = !1
    }
    ,
    l.Rect = i,
    l.Packer = n,
    l
}
)),
function(t) {
    var e;
    if ("function" == typeof define && define.amd && (define(t),
    e = !0),
    "object" == typeof exports && (module.exports = t(),
    e = !0),
    !e) {
        var i = window.Cookies
          , n = window.Cookies = t();
        n.noConflict = function() {
            return window.Cookies = i,
            n
        }
    }
}((function() {
    function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i)
                e[n] = i[n]
        }
        return e
    }
    function e(i) {
        function n(e, s, o) {
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    "number" == typeof (o = t({
                        path: "/"
                    }, n.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        var r = JSON.stringify(s);
                        /^[\{\[]/.test(r) && (s = r)
                    } catch (t) {}
                    s = i.write ? i.write(s, e) : encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var a = "";
                    for (var l in o)
                        o[l] && (a += "; " + l,
                        !0 !== o[l] && (a += "=" + o[l].split(";")[0]));
                    return document.cookie = e + "=" + s + a
                }
                for (var c = {}, h = function(t) {
                    return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }, u = document.cookie ? document.cookie.split("; ") : [], d = 0; d < u.length; d++) {
                    var p = u[d].split("=")
                      , f = p.slice(1).join("=");
                    this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                    try {
                        var g = h(p[0]);
                        if (f = (i.read || i)(f, g) || h(f),
                        this.json)
                            try {
                                f = JSON.parse(f)
                            } catch (t) {}
                        if (c[g] = f,
                        e === g)
                            break
                    } catch (t) {}
                }
                return e ? c[e] : c
            }
        }
        return n.set = n,
        n.get = function(t) {
            return n.call(n, t)
        }
        ,
        n.getJSON = function() {
            return n.apply({
                json: !0
            }, arguments)
        }
        ,
        n.remove = function(e, i) {
            n(e, "", t(i, {
                expires: -1
            }))
        }
        ,
        n.defaults = {},
        n.withConverter = e,
        n
    }
    return e((function() {}
    ))
}
));
/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.1.2 - 2015
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
var outdatedBrowser = function(t) {
    function e(t) {
        a.style.opacity = t / 100,
        a.style.filter = "alpha(opacity=" + t + ")"
    }
    function i(t) {
        e(t),
        1 == t && (a.style.display = "block"),
        100 == t && (l = !0)
    }
    function n() {
        var t = document.getElementById("btnCloseUpdateBrowser")
          , e = document.getElementById("btnUpdateBrowser");
        a.style.backgroundColor = bkgColor,
        a.style.color = txtColor,
        a.children[0].style.color = txtColor,
        a.children[1].style.color = txtColor,
        e.style.color = txtColor,
        e.style.borderColor && (e.style.borderColor = txtColor),
        t.style.color = txtColor,
        t.onmousedown = function() {
            return a.style.display = "none",
            !1
        }
        ,
        e.onmouseover = function() {
            this.style.color = bkgColor,
            this.style.backgroundColor = txtColor
        }
        ,
        e.onmouseout = function() {
            this.style.color = txtColor,
            this.style.backgroundColor = bkgColor
        }
    }
    function s() {
        var t = !1;
        if (window.XMLHttpRequest)
            t = new XMLHttpRequest;
        else if (window.ActiveXObject)
            try {
                t = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (e) {
                try {
                    t = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                    t = !1
                }
            }
        return t
    }
    function o(t) {
        var e = s();
        return e && (e.onreadystatechange = function() {
            r(e)
        }
        ,
        e.open("GET", t, !0),
        e.send(null)),
        !1
    }
    function r(t) {
        var e = document.getElementById("outdated");
        return 4 == t.readyState && (e.innerHTML = 200 == t.status || 304 == t.status ? t.responseText : u,
        n()),
        !1
    }
    var a = document.getElementById("outdated");
    this.defaultOpts = {
        bgColor: "#f25648",
        color: "#ffffff",
        lowerThan: "transform",
        languagePath: "../outdatedbrowser/lang/en.html"
    },
    t ? ("IE8" == t.lowerThan || "borderSpacing" == t.lowerThan ? t.lowerThan = "borderSpacing" : "IE9" == t.lowerThan || "boxShadow" == t.lowerThan ? t.lowerThan = "boxShadow" : "IE10" == t.lowerThan || "transform" == t.lowerThan || "" == t.lowerThan || void 0 === t.lowerThan ? t.lowerThan = "transform" : ("IE11" == t.lowerThan || "borderImage" == t.lowerThan) && (t.lowerThan = "borderImage"),
    this.defaultOpts.bgColor = t.bgColor,
    this.defaultOpts.color = t.color,
    this.defaultOpts.lowerThan = t.lowerThan,
    this.defaultOpts.languagePath = t.languagePath,
    bkgColor = this.defaultOpts.bgColor,
    txtColor = this.defaultOpts.color,
    cssProp = this.defaultOpts.lowerThan,
    languagePath = this.defaultOpts.languagePath) : (bkgColor = this.defaultOpts.bgColor,
    txtColor = this.defaultOpts.color,
    cssProp = this.defaultOpts.lowerThan,
    languagePath = this.defaultOpts.languagePath);
    var l = !0
      , c = function() {
        var t = document.createElement("div")
          , e = "Khtml Ms O Moz Webkit".split(" ")
          , i = e.length;
        return function(n) {
            if (n in t.style)
                return !0;
            for (n = n.replace(/^[a-z]/, (function(t) {
                return t.toUpperCase()
            }
            )); i--; )
                if (e[i] + n in t.style)
                    return !0;
            return !1
        }
    }();
    if (!c("" + cssProp)) {
        if (l && "1" !== a.style.opacity) {
            l = !1;
            for (var h = 1; 100 >= h; h++)
                setTimeout(function(t) {
                    return function() {
                        i(t)
                    }
                }(h), 8 * h)
        }
        " " === languagePath || 0 == languagePath.length ? n() : o(languagePath);
        var u = '<h6>Your browser is out-of-date!</h6><p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p><p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>'
    }
}, console = window.console, ScrollMagic = window.ScrollMagic, TweenMax = window.TweenMax, EFFX;
!function(t, e) {
    var $ = t.jQuery, i = $(t), n = $(document), s = $("html"), o = $("body"), r = $("#bg-header"), a = $("#bg-submenu"), l = [], c, h, u, d, p;
    EFFX = {
        init: function(t) {
            var e = {};
            this.options = $.extend({}, e, t),
            this.destroy(),
            c = new ScrollMagic.Controller({}),
            l = [],
            this.initPageHeader(),
            this.initTriggerInView(),
            this.initArrowDownLeave(),
            this.initParallaxes(),
            this.initFadeOutOnLeave(),
            $(".menu-bottom-trigger").length > 0 && this.initMenuHeaderOnBackgroundImages(),
            this.addEvents(!0)
        },
        addEvents: function(t) {
            t ? i.on("resize", EFFX.onResize) : i.off("resize", EFFX.onResize)
        },
        onResize: function() {
            EFFX.refreshScenes()
        },
        initTriggerInView: function() {
            (d = $(".trigger-in-view")).length > 0 && (d.each((function(t) {
                u = $(this),
                h = new ScrollMagic.Scene({
                    triggerHook: "onEnter",
                    triggerElement: u,
                    duration: EFFX.calculateDurationScene(u)
                }),
                u.hasClass("trigger-once") ? h.on("enter", (function(t) {
                    var e;
                    $(t.currentTarget.triggerElement()).addClass("in-view")
                }
                )) : (h.setClassToggle(u, "in-view"),
                h.on("enter leave", (function(t) {
                    var e = $(t.currentTarget.triggerElement());
                    "enter" === t.type ? (e.removeClass("transition-reverse"),
                    t.scrollDirection) : "FORWARD" === t.scrollDirection && e.addClass("transition-reverse");
                    var i = e.find(".video-ctrl");
                    i.length > 0 && i.video_ctrl("triggerEvent", t)
                }
                ))),
                h.addTo(c),
                l[t] = {
                    $it: u,
                    scene: h,
                    type: "trigger-in-view"
                }
            }
            )),
            d.imagesLoaded((function() {
                EFFX.refreshScenes()
            }
            )),
            n.on("lazybeforeunveil", (function(t) {
                EFFX.refreshScenes()
            }
            )))
        },
        calculateDurationScene: function(t) {
            var e;
            return i.height() + t.height()
        },
        calculateHomePageOffset: function() {
            return $(".hero-promo").height() - $("#menu").height()
        },
        refreshScenes: function() {
            if (l)
                for (var t = l.length, e; t--; )
                    "trigger-in-view" === (e = l[t]).type && e.scene.duration(this.calculateDurationScene(e.$it)),
                    "home-page-menu" === e.type && e.scene.offset(this.calculateHomePageOffset())
        },
        initParallaxes: function() {
            var t;
            if (!((t = $(".parallax")).length < 0 || i.width() < 768)) {
                p = [],
                t.each((function(t) {
                    p[t] = $(this)
                }
                ));
                for (var e = !0, n, s, o, r, a, t, l = p.length, h; l--; )
                    a = (t = r = p[l]).length > 0 ? t : r,
                    h = random(50, 100),
                    t.hasClass("col-text") && (h = random(40, 70)),
                    (t.hasClass("col-img") || t.hasClass("col-image")) && (h = random(100, 160)),
                    s = new ScrollMagic.Scene({
                        triggerElement: a,
                        triggerHook: "onEnter",
                        duration: "120%"
                    }),
                    a.attr("data-parallax-y", h),
                    o = TweenMax.fromTo(a, 1, {
                        y: h / 2
                    }, {
                        y: -h / 2,
                        z: 0,
                        x: 0,
                        ease: "Linear.easeNone"
                    }),
                    s.setTween(o),
                    s.addTo(c)
            }
        },
        initPageHeader: function() {
            (u = $("header.page-title-header")).length > 0 && ((h = new ScrollMagic.Scene({
                triggerHook: "onLeave",
                triggerElement: u
            })).setClassToggle(r, "active"),
            h.addTo(c),
            (h = new ScrollMagic.Scene({
                triggerHook: "onLeave",
                triggerElement: u
            })).setClassToggle(a, "active"),
            h.addTo(c),
            (h = new ScrollMagic.Scene({
                triggerHook: "onLeave",
                triggerElement: u
            })).setClassToggle($("#menu"), "active"),
            h.addTo(c))
        },
        initFadeOutOnLeave: function() {
            (d = $(".effect-fade-out-on-leave")).length <= 0 || d.each((function() {
                u = $(this),
                (h = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: u,
                    duration: "100%",
                    offset: u.height() / 3
                })).setTween(TweenMax.to(u, 1, {
                    opacity: 0
                })),
                h.addTo(c)
            }
            ))
        },
        initMenuHeaderOnBackgroundImages: function() {
            (u = $(".menu-bottom-trigger")).length > 0 && (o.addClass("white"),
            r.removeClass("active"),
            s.addClass("on-top-hero-image"),
            a.addClass("active"),
            (h = new ScrollMagic.Scene({
                triggerHook: "onLeave",
                triggerElement: u
            })).on("start", (function(t) {
                o.hasClass("white") ? (o.removeClass("white"),
                r.addClass("active"),
                $("#menu").addClass("active")) : (o.addClass("white"),
                r.removeClass("active"),
                $("#menu").removeClass("active")),
                s.hasClass("on-top-hero-image") ? s.removeClass("on-top-hero-image") : s.addClass("on-top-hero-image")
            }
            )),
            h.addTo(c))
        },
        initProductsPage: function() {},
        initCategoriesHeader: function(t) {
            t.data("scrollPos", 0),
            t.length > 0 && ((h = new ScrollMagic.Scene({
                triggerHook: "onLeave",
                triggerElement: t,
                offset: -$("h1.page-title").height()
            })).setPin(t),
            h.setClassToggle(t, "pinned"),
            h.on("update", (function(e) {
                var i = $(e.currentTarget.triggerElement()), n;
                if (i.parent().hasClass("scrollmagic-pin-spacer") && i.css({
                    width: "100%"
                }),
                i.hasClass("pinned")) {
                    var s = e.scrollPos, o;
                    s > t.data("scrollPos") ? i.addClass("hide-up") : i.removeClass("hide-up"),
                    t.data("scrollPos", s)
                } else
                    i.removeClass("hide-up")
            }
            )),
            h.addTo(c))
        },
        initArrowDownLeave: function() {
            var t;
            (u = $(".page-full-container")).length <= 0 || (t = u.find(".arrow-down")).length <= 0 || ((h = new ScrollMagic.Scene({
                triggerHook: "onLeave",
                triggerElement: u,
                offset: 20
            })).setTween(TweenMax.to(t, .8, {
                opacity: 0,
                y: 20
            })),
            h.addTo(c))
        },
        initNextSection: function() {
            u = $(".bottom-trigger");
            var t = $("#next-section");
            t.length > 0 && u.length > 0 && ((h = new ScrollMagic.Scene({
                triggerHook: "onEnter",
                triggerElement: u,
                offset: t.find(".next-section").height() - 10
            })).on("start", (function(e) {
                c.removeScene(e.target);
                var i = t.find("a");
                i.length > 0 && i.click()
            }
            )),
            h.addTo(c))
        },
        initNews: function() {},
        destroy: function() {
            c && (c = c.destroy(!0),
            l && (l = [])),
            this.addEvents(!1)
        }
    }
}(window);
var console = window.console, IMGX;
!function(t, e) {
    var $ = t.jQuery, i = $(t), n = [], s = [], o = [], r;
    IMGX = {
        init: function(t) {
            var e = {
                breakpoints: [320, 768, 1536, 3072],
                autoInitImages: !1
            };
            this.options = $.extend({}, e, t),
            s = this.options.breakpoints,
            o = [Math.round(3 * s[0] / 4), Math.round(3 * s[1] / 4), Math.round(3 * s[2] / 4)],
            this.options.autoInitImages && this.initImages(!0)
        },
        initImages: function(t) {
            var e = $(".bgimage"), i;
            if (t) {
                var s = 0;
                e.each((function() {
                    $(this).hasClass("lazyload") || s++
                }
                )),
                (e = $("img")).each((function() {
                    (i = $(this)).hasClass("lazyload") || (i.addClass("toload"),
                    s++,
                    i.imagesLoaded((function(t) {
                        (i = $(t.images[0].img)).addClass("loaded"),
                        IMGX.onLoadImage()
                    }
                    )))
                }
                )),
                (n = {
                    tot: s,
                    loaded: 0
                }).tot > 0 ? (e = $(".bgimage")).one("imageload", (function() {
                    IMGX.onLoadImage()
                }
                )) : this._triggerLoaded(!0),
                this.loadImages(),
                this.setImgCrops()
            } else
                e.off();
            this._addEvents(t)
        },
        _addEvents: function(t) {
            t ? i.on("resize", IMGX._onResize) : i.off("resize", IMGX._onResize)
        },
        _onResize: function() {
            clearTimeout(r),
            t.waitForFinalEvent((function() {
                IMGX.loadImages(),
                IMGX.setImgCrops(),
                r = setTimeout((function() {
                    IMGX.setImgCrops()
                }
                ), 17)
            }
            ), 77, "imgx-image-resize")
        },
        setImgCrops: function() {
            var t = $(".img-wrapper-proportion"), e, i, n, s, o, r, a, l;
            t.length > 0 && t.each((function() {
                i = $(this),
                e = i.find("img"),
                a = i.parent().width(),
                r = i.parent().height(),
                s = parseInt(e.attr("width")),
                o = parseInt(e.attr("height")),
                l = a * o / s,
                i.hasClass("trace-it");
                var t = Math.max(a / s, r / o);
                e.css({
                    width: Math.ceil(t * s),
                    height: Math.ceil(t * o)
                })
            }
            ))
        },
        loadImages: function() {
            var e = $(".bgimage")
              , n = i.width();
            e.each((function() {
                var e = $(this);
                if (!e.hasClass("no-load")) {
                    var i = e.width(), r = e.height(), a = e.attr("data-srcs"), l = e.attr("data-size").split(","), c = t.devicePixelRatio > 1, h = !1, u = e.attr("data-srcs-m"), d = e.attr("data-size-m") ? e.attr("data-size-m").split(",") : "", p = "", f;
                    if (e.hasClass("lazyload") || e.addClass("toload"),
                    n < s[1] && u) {
                        if (h = !0,
                        -1 !== u.indexOf(",")) {
                            var g = u.split(",");
                            p = g[c || i > o[0] ? 1 : 0]
                        }
                    } else {
                        var m = r / i > 1;
                        if (-1 !== a.indexOf(",")) {
                            var v = a.split(",");
                            p = v[3],
                            i < s[0] ? (p = v[0],
                            c && i > o[0] && (p = v[1],
                            m && (p = v[2]))) : i < s[1] ? (p = v[1],
                            (c || m) && (i > o[1] || m) && (p = v[2],
                            m && (p = v[3]))) : i < s[2] && (p = v[2],
                            (c || m) && (i > o[2] || m) && (p = v[3]))
                        }
                    }
                    if (p = t.CDN + "/" + p.replace(/^(?:\/\/|[^\/]+)*\//, ""),
                    e.css("background-image") !== p) {
                        if (e.hasClass("autosize")) {
                            var y = e.parents(".img-container");
                            y.length > 0 && (h && d ? y.css({
                                "padding-bottom": d[1] / d[0] * 100 + "%"
                            }) : y.css({
                                "padding-bottom": l[1] / l[0] * 100 + "%"
                            }))
                        }
                        e.hasClass("exact-size") && (e.width(l[0]),
                        e.height(l[1])),
                        e.hasClass("lazyload") ? e.attr("data-bg", p) : e.html('<img class="preload" src="' + p + '" width="' + l[0] + '" height="' + l[1] + '"/>').imagesLoaded((function() {
                            e.css({
                                "background-image": "url(" + p + ")"
                            }).find(".preload").remove(),
                            e.removeClass("lazyload").addClass("toload loaded").trigger("imageload")
                        }
                        ))
                    }
                }
            }
            ))
        },
        onLoadImage: function(t) {
            n.loaded++,
            i.trigger("resize"),
            (n.loaded >= n.tot || t) && IMGX._triggerLoaded(!0)
        },
        _triggerLoaded: function(t) {
            var e = t ? "imgx:loaded" : "imgx:loading";
            i.trigger(e)
        }
    }
}(window);
var console = window.console || {
    log: function() {
        return ""
    }
}, MediaElement = window.MediaElement, TweenMax = window.TweenMax, waitForFinalEvent = function() {
    var t = {};
    return function(e, i, n) {
        n || (n = "Don't call this twice without a uniqueId"),
        t[n] && clearTimeout(t[n]),
        t[n] = setTimeout(e, i)
    }
}(), getAllUrlParams = function(t) {
    var e = t ? t.split("?")[1] : window.location.search.slice(1)
      , i = !1;
    if (e) {
        i = {};
        for (var n = (e = e.split("#")[0]).split("&"), s = 0; s < n.length; s++) {
            var o = n[s].split("=")
              , r = void 0
              , a = o[0].replace(/\[\d*\]/, (function(t) {
                return r = t.slice(1, -1),
                ""
            }
            ))
              , l = void 0 === o[1] || o[1];
            a = a.toLowerCase(),
            l = l.toLowerCase(),
            i[a] ? ("string" == typeof i[a] && (i[a] = [i[a]]),
            void 0 === r ? i[a].push(l) : i[a][r] = l) : i[a] = l
        }
    }
    return i
}, random = function(t, e) {
    return t + Math.random() * (e - t)
}, randomInt = function(t, e) {
    return t + Math.floor(Math.random() * (e - t))
}, SHOPIFY, TR;
!function() {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
        window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var i = (new Date).getTime()
          , n = Math.max(0, 16 - (i - t))
          , s = window.setTimeout((function() {
            e(i + n)
        }
        ), n);
        return t = i + n,
        s
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    }
    )
}(),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "browser_upgrade"
      , o = {
        open: !1
    };
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.$bg = this.$el.find(".bg"),
            this.touch = !$("html").hasClass("no-touch"),
            this.isopen = !1,
            this.$window = this.$el.find(".win"),
            this._addEvents(!0),
            this.options.open && this._open(!0),
            this.$win.trigger("resize")
        },
        _addEvents: function(t) {
            t ? (this.$el.find(".close").on("click", {
                _this: this
            }, this._close),
            this.$el.find(".a-close").on("click", {
                _this: this
            }, this._close),
            this.$bg.on("click", {
                _this: this
            }, this._close),
            this.$doc.on("keydown", {
                _this: this
            }, this._onKeyDown)) : (this.$el.find(".close").off("click", this._close),
            this.$el.find(".a-close").off("click", this._close),
            this.$bg.off("click", this._close),
            this.$doc.off("keydown", this._onKeyDown))
        },
        _onKeyDown: function(t) {
            var e = t.data._this;
            switch (t.which) {
            case 27:
                e._close(t);
                break
            }
        },
        _close: function(t) {
            var e = t ? t.data._this : this;
            t.preventDefault(),
            e.isopen && e._open(!1)
        },
        _open: function(t) {
            var e = this;
            e.isopen !== t && (e.isopen = t,
            t ? (e.$el.show(0),
            e.$body.addClass("noscroll"),
            e.$window.addClass("in-view"),
            e.$body.addClass("overlay"),
            TweenMax.fromTo(e.$bg, .4, {
                opacity: 0
            }, {
                opacity: 1,
                ease: "Linear.easeOut"
            }),
            e.$el.trigger("OPEN")) : (e.$body.removeClass("noscroll"),
            e.$window.removeClass("zoom-in").removeClass("in-view").addClass("zoom-out").addClass("in-view"),
            e.$body.removeClass("overlay"),
            TweenMax.fromTo(e.$bg, .4, {
                opacity: 1
            }, {
                opacity: 0,
                ease: "Linear.easeOut",
                onComplete: function() {
                    e.$el.hide(0),
                    e.$el.trigger("CLOSE")
                }
            })))
        },
        destroy: function() {
            this._addEvents(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "search_layer"
      , o = {
        open_typing: !0
    }
      , r = null
      , a = "";
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.admin_url = this.$body.attr("data-ajax-url"),
            this.$search_input = this.$el.find("#s"),
            this.$icon_open = this.options.$icon_open,
            this.$search_results = this.$el.find("#search-results"),
            this.$header = this.$el.find("header"),
            this.$search_content = this.$el.find("#search-content"),
            this.is_open = !1,
            this._addEvents(!0),
            this.$win.trigger("resize")
        },
        _addEvents: function(t) {
            t ? (this.$icon_open.on("click", {
                _this: this
            }, this._open),
            this.$search_input.on("keyup", {
                _this: this
            }, this._onKeyUp),
            this.$doc.on("keydown", {
                _this: this
            }, this._docOnKeyDown),
            this.$win.on("resize", {
                _this: this
            }, this._onResize)) : (this.$icon_open.off("click", this._open),
            this.$search_input.off("keyup", this._onKeyUp),
            this.$doc.off("keydown", this._docOnKeyDown),
            this.$win.off("resize", this._onResize))
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this
              , i = e.$header.outerHeight()
              , n = e.$win.height();
            e.$search_results.height(n)
        },
        _open: function(t) {
            var e = t ? t.data._this : this;
            t.preventDefault(),
            e._toggleSearch()
        },
        _toggleSearch: function() {
            this._openSearch(!this.is_open)
        },
        _close: function(t) {
            var e;
            (t ? t.data._this : this)._openSearch(!1)
        },
        _docOnKeyDown: function(t) {
            var e = t ? t.data._this : this
              , i = t.keyCode;
            27 === i && e.is_open ? e._openSearch(!1) : !e.is_open && e.options.open_typing && 27 !== i && (i >= 48 && i <= 57 || i >= 65 && i <= 90) && e._openSearch(!0)
        },
        _openSearch: function(t) {
            var e = this;
            t !== this.is_open && (t && (e.$el.css({
                visibility: "visible"
            }),
            e._clearImput()),
            TweenMax.fromTo(this.$el, t ? .6 : .3, {
                opacity: t ? 0 : 1
            }, {
                opacity: t ? 1 : 0,
                ease: "Circle.easeOut",
                onComplete: function() {
                    t || e.$el.css({
                        visibility: "hidden"
                    })
                }
            }),
            this.is_open = t,
            t ? this.$body.addClass("noscroll").addClass("is-open").addClass("is-open-search") : (this.$body.removeClass("is-open-search"),
            this.$body.hasClass("is-open-menu") || this.$body.removeClass("noscroll").removeClass("is-open")))
        },
        _clearImput: function() {
            this.$search_input.val(""),
            this.$search_input.focus(),
            this._output(""),
            a = ""
        },
        _dosearch: function(t) {
            var e = this;
            $.ajax({
                type: "post",
                url: this.admin_url,
                data: {
                    action: "ajax_search",
                    search: t
                },
                success: function(t) {
                    t !== a && (a = t,
                    "no-results" === t ? e._output('<div class="no-results">No results found ...</div>') : e._output(t))
                }
            })
        },
        _output: function(t) {
            var e;
            TweenMax.killTweensOf(this.$search_content),
            this.$search_content.css({
                opacity: 0
            }).html(t).ajaxify(),
            TweenMax.to(this.$search_content, .4, {
                opacity: 1,
                ease: "Circle.easeOut"
            }),
            this.$search_content.find(".large .grid-packery").each((function() {
                e = {
                    itemSelector: ".item-result",
                    percentPosition: !0,
                    gutter: ".gutter-sizer"
                },
                TR.initGridPackery(!0, $(this), e, !1)
            }
            )),
            e = {
                itemSelector: ".item-section",
                percentPosition: !0,
                gutter: ".gutter-sizer-section"
            },
            TR.initGridPackery(!0, this.$search_content.find("#grid-sections"), e, !1),
            this.$win.trigger("resize")
        },
        _onKeyUp: function(t) {
            var e = t ? t.data._this : this;
            if (e.is_open) {
                clearTimeout(r);
                var i = $(this);
                r = setTimeout((function() {
                    e._dosearch(i.val())
                }
                ), 17)
            }
        },
        close: function() {
            this._openSearch(!1)
        },
        open: function() {
            this._openSearch(!0)
        },
        destroy: function() {
            this._addEvents(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "selection"
      , o = {
        open: !1
    };
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.$header = this.$el.find(".header"),
            this.$scroll = this.$el.find(".scroll"),
            this.sizes = [this.$header.height(), this.$header.height() + this.$scroll.outerHeight() + 10],
            this.is_open = !1,
            this.open_top = !1,
            this.options.open && this._toggle(),
            this._addEvents(!0),
            this.$win.trigger("resize")
        },
        _addEvents: function(t) {
            var e = this;
            t ? (this.$win.on("resize", {
                _this: this
            }, this._onResize),
            this.$header.on("click", (function() {
                e._toggle()
            }
            )),
            this.$el.on("mouseleave", (function(t) {
                e.open_top && $(t.target).hasClass("label") ? t.offsetY > 0 && e._open(!1) : e._open(!1)
            }
            ))) : (this.$win.off("resize", this._onResize),
            this.$header.off("click"),
            this.$el.off("mouseleave"))
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this
        },
        _toggle: function() {
            this._open(!this.is_open)
        },
        _open: function(t) {
            var e = this;
            t !== this.is_open && (this.open_top = this.$el.offset().top + this.sizes[1] >= this.$doc.height() - 100,
            t ? (this.$el.addClass("is_open"),
            this.$el.css("z-index", 99),
            this.open_top ? (this.$scroll.css({
                top: 5 - this.sizes[1]
            }),
            this.$el.css({
                overflow: "visible"
            })) : this.$scroll.css({
                top: 0
            })) : (this.$el.removeClass("is_open"),
            this.open_top && this.$el.css({
                overflow: "hidden"
            })),
            this.open_top ? e.$el.css("z-index", 1) : TweenMax.to(this.$el, .2, {
                height: t ? this.sizes[1] : this.sizes[0],
                ease: "Power.easeOut",
                onComplete: function() {
                    t || e.$el.css("z-index", 1)
                }
            }),
            this.is_open = t,
            this.$el.trigger(t ? "select:open" : "select:close"))
        },
        open: function(t) {
            this._open(t)
        },
        destroy: function() {
            this._addEvents(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "overlay_window"
      , o = {
        open: !1,
        $html: [],
        hide_close: !0,
        mode: "inquiry"
    };
    n.prototype = {
        _init: function() {
            var i = this;
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.$html = $("html"),
            this.touch = !$("html").hasClass("no-touch"),
            this.admin_url = this.$body.attr("data-ajax-url"),
            this.$close = this.$el.find(".overlay-close"),
            this.$content = this.$el.find(".overlay-content"),
            this.$bg = this.$el.find(".bg"),
            this.is_open = !1,
            this.$el.addClass("is-initialized"),
            this.trottle_time = 177,
            this.trottle_timeout = -1,
            this.options.$html.length > 0 && this.addContent(this.options.$html),
            "overlay-ground" === this.options.mode && setTimeout((function() {
                i._initOverlayGround(!0)
            }
            ), 37),
            this.options.hide_close && this.$close.hide(0),
            this.options.open && this._openOverlay(!0),
            this._addEvents(!0)
        },
        _addEvents: function(t) {
            var e = this;
            t ? (this.$win.on("resize", {
                _this: this
            }, this._onResize),
            this.$close.on("click", (function() {
                e._openOverlay(!1)
            }
            )),
            this.$el.find(".close-icon").length > 0 && this.$el.find(".close-icon").on("click", (function() {
                e._openOverlay(!1)
            }
            )),
            this.$bg.on("click", (function() {
                e._openOverlay(!1)
            }
            )),
            this.$doc.on("keydown", {
                _this: this
            }, this._docOnKeyDown)) : (this.$win.off("resize", this._onResize),
            this.$close.off("click"),
            this.$bg.off("click"),
            this.$doc.off("keydown", this._docOnKeyDown))
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this, i = e.$win.width(), n = e.$win.height(), s, o, r;
            e.is_open && (s = e.$el.find(".window-modal")).length > 0 && (i >= 768 ? s.css({
                left: Math.round(i / 2 - s.outerWidth() / 2),
                top: Math.round(n / 2 - s.outerHeight() / 2)
            }) : s.css({
                left: "auto",
                top: "auto"
            })),
            clearTimeout(e.trottle_timeout),
            e.trottle_timeout = setTimeout((function() {
                e._onTrottleResize()
            }
            ), e.trottle_time)
        },
        _onTrottleResize: function() {
            var t = this, e = t.$win.width(), i = t.$win.height(), n, s, o;
            if (t.is_open && ((n = t.$el.find(".window-modal")).length > 0 && (e >= 768 ? n.css({
                left: Math.round(e / 2 - n.outerWidth() / 2),
                top: Math.round(i / 2 - n.outerHeight() / 2)
            }) : n.css({
                left: "auto",
                top: "auto"
            })),
            "overlay-ground" === t.options.mode)) {
                return t.$win.width() >= 1024 ? t.$el.find(".text-content").height(t.$el.find(".slider-ground-container").height() - 200) : t.$el.find(".text-content").css({
                    height: "auto"
                }),
                t.$el.find("#overlay-ground").css({
                    "min-height": t.$el.find(".overlay-ground-wrap").height()
                }),
                void t.$el.find(".link-alpha").addClass("active");
                var r = t.$el.find("#overlay-ground"), a, l, c, h;
                if (n = t.$el.find(".overlay-ground-content"),
                e = r.width(),
                i = r.height(),
                t.$win.width() >= 1024) {
                    var u = n.data("scale") || 1, d, p;
                    d = (p = t.$el.find("#overlay-ground header").outerHeight() + t.$el.find(".layout-win-ground").outerHeight() + 50) > i ? Math.max(.5, i / (p + 50)) : 1,
                    n.data("scale", d)
                } else
                    n.data("scale", 1)
            }
        },
        _openOverlay: function(t) {
            if (this.is_open !== t) {
                var e = this;
                t ? (this.$el.css({
                    opacity: 0,
                    display: "block"
                }),
                this._onResize(),
                TweenMax.to(this.$el, .6, {
                    opacity: 1,
                    ease: "Power.easeOut",
                    delay: .2
                }),
                e.$el.trigger("overlay:open"),
                this._initCheckIFrame(!0)) : TweenMax.to(this.$el, .6, {
                    opacity: 0,
                    ease: "Power.easeOut",
                    onComplete: function() {
                        e.$el.css({
                            opacity: 0,
                            display: "none"
                        }),
                        "inquiry" === e.options.mode && e._cleanUpForm(),
                        e.$el.trigger("overlay:close")
                    }
                }),
                this.is_open = t,
                t ? ("overlay-ground" !== e.options.mode && this.$body.addClass("noscroll"),
                this.$body.addClass("overlay-open"),
                setTimeout((function() {
                    e._onResize()
                }
                ), 177),
                this._setFixed(!0)) : ("overlay-ground" !== e.options.mode && this.$body.removeClass("noscroll"),
                this.$body.removeClass("overlay-open"),
                this._setFixed(!1))
            }
        },
        _setFixed: function(t) {
            if (!this.$html.hasClass("desktop")) {
                var i = this.$win.height();
                t ? (this.$html.css({
                    height: i,
                    overflow: "hidden"
                }),
                this.$body.css({
                    height: i,
                    overflow: "hidden"
                }),
                e.body.addEventListener("touchmove", (function(t) {
                    t.preventDefault()
                }
                ), !1)) : (this.$html.css({
                    height: "auto",
                    overflow: "auto"
                }),
                this.$body.css({
                    height: "auto",
                    overflow: "auto"
                }),
                e.body.removeEventListener("touchmove", (function(t) {
                    t.preventDefault()
                }
                ), !1))
            }
        },
        _docOnKeyDown: function(t) {
            var e = t ? t.data._this : this, i;
            27 === t.keyCode && e.is_open && e._openOverlay(!1)
        },
        _cleanUp: function() {
            "overlay-ground" === this.options.mode && this._initOverlayGround(!1),
            this.$content.html('<div class="bg"></div>')
        },
        contentIframeReload: function() {
            var t, e, i, n;
            console.log("contentReload"),
            this.$content.find(".window-content").find("iframe").length > 0 && this._initCheckIFrame(!1)
        },
        _initCheckIFrame(t) {
            if (clearInterval(this.check_iframe),
            t) {
                var e = this
                  , i = this.$content.find("iframe");
                this.iframeHeight = i.height(),
                setInterval((function() {
                    e._checkIframeResize()
                }
                ), 477)
            }
        },
        _checkIframeResize: function() {
            var t = this.$content.find("iframe");
            t.height() !== this.iframeHeight && (this.iframeHeight = t.height(),
            this._onTrottleResize())
        },
        _cleanUpForm: function() {
            var t = this.$el.find(".wpcf7");
            t.length > 0 && (t.find(".wpcf7-not-valid-tip").hide(0),
            t.find(".wpcf7-response-output").hide(0))
        },
        _initOverlayGround: function(t) {
            var e = this.$el.find(".slider-ground"), i = this.$el.find(".slider-ground-thumbs"), n = this, s;
            t ? (this.$win.trigger("resize"),
            s = e.find("slick-slide").length,
            e.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                fade: !0,
                asNavFor: ".slider-ground-thumbs"
            }),
            i.slick({
                slidesToShow: 8,
                slidesToScroll: 1,
                asNavFor: ".slider-ground",
                dots: !1,
                arrows: !1,
                infinite: !1,
                centerMode: !1,
                focusOnSelect: !0,
                responsive: [{
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }]
            }),
            this.$el.find("header a.more").on("click", (function(t) {
                t.preventDefault(),
                n._openOverlay(!1)
            }
            )),
            this.$el.find(".overlay-close").on("click", (function() {
                n._openOverlay(!1)
            }
            ))) : (e.slick && e.slick("unslick"),
            i.slick && i.slick("unslick"))
        },
        open: function() {
            this._openOverlay(!0)
        },
        close: function() {
            this._openOverlay(!1)
        },
        clean: function() {
            this._cleanUp()
        },
        destroy: function() {
            this._addEvents(!1),
            this._cleanUp(),
            this.$el.removeData(),
            this.$el.removeClass("is-initialized"),
            $.data(this, "plugin_" + s, null)
        },
        addContent: function(t) {
            this.$content.append(t)
        },
        addContentAndOpen: function(t) {
            var e = this;
            this._cleanUp(),
            this.addContent(t),
            this.$bg = this.$el.find(".bg"),
            this.$bg.on("click", (function() {
                e._openOverlay(!1)
            }
            )),
            this._openOverlay(!0)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "load_more"
      , o = {};
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.admin_url = this.$body.attr("data-ajax-url"),
            this.$btn = this.$el,
            this.$btn.data("or-text", this.$btn.find(".see-all").text()),
            this.$grid = $("#" + this.$btn.attr("data-id-grid")),
            this.options.cat_id = this.$btn.attr("data-cat-id"),
            this.options.paged = this.$btn.attr("data-paged"),
            this.options.max_pages = this.$btn.attr("data-max-pages"),
            "post" === this.$btn.attr("data-post-type") ? this.mode = "post" : "project" === this.$btn.attr("data-post-type") && (this.mode = "project"),
            this.active = !1,
            this._addEvents(!0)
        },
        _addEvents: function(t) {
            var e = this;
            t ? this.$btn.on("click", (function(t) {
                t.preventDefault(),
                e._loadMore()
            }
            )) : this.$btn.off("click")
        },
        _loadMore: function() {
            if (!this.active) {
                this._enableButton(!1),
                this.$el.trigger("start:loading");
                var t = this;
                $.ajax({
                    type: "post",
                    url: t.admin_url,
                    data: {
                        action: "ajax_load_more",
                        post_type: t.mode,
                        cat_id: t.options.cat_id,
                        paged: t.options.paged
                    },
                    success: function(e) {
                        "no-results" === e ? t._addContent("NO POST FOUNDED") : t._addContent(e),
                        t.$el.trigger("end:loading"),
                        t.options.paged < t.options.max_pages ? (t.options.paged++,
                        t._enableButton(!0)) : t._showButton(!1)
                    }
                })
            }
        },
        _enableButton: function(t) {
            this.active = !t,
            TweenMax.to(this.$btn, .4, {
                opacity: t ? 1 : .5
            }),
            t ? this.$btn.find(".see-all").text(this.$btn.data("or-text")) : this.$btn.find(".see-all").text("Loading more ...")
        },
        _showButton: function(t) {
            this.active = !t,
            TweenMax.to(this.$btn, 1, {
                opacity: t ? 1 : 0,
                delay: t ? 0 : 2
            }),
            t || this.$btn.find(".see-all").text("no more")
        },
        _addContent: function(t) {
            var i, n, s, o = this;
            i = $(t),
            "post" !== this.mode ? (this.$grid.append(i).packery("appended", i),
            e.addEventListener("lazybeforeunveil", (function() {
                o._relayout()
            }
            )),
            setTimeout((function() {
                IMGX.setImgCrops()
            }
            ), 177)) : this.$grid.append(i)
        },
        _relayout: function() {
            this.$grid.packery(),
            IMGX.setImgCrops()
        },
        destroy: function() {
            this._addEvents(!1);
            var t = this;
            e.removeEventListener("lazybeforeunveil", (function() {
                t._relayout()
            }
            )),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "mailchimp_form"
      , o = {
        $a_open: ""
    };
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.open = !1,
            this._addEvents(!0)
        },
        _addEvents: function(t) {
            var e = this;
            this._ajaxifyForm(t)
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this
        },
        _openNewsletterWindow: function(t) {
            if (this.open !== t) {
                var e = this;
                t && this.$el.css({
                    opacity: 0,
                    visibility: "visible"
                }),
                TweenMax.fromTo(this.$el, .3, {
                    y: t ? 10 : 0
                }, {
                    y: t ? 0 : 10,
                    opacity: t ? 1 : 0,
                    ease: "Sine.easeOut",
                    onComplete: function() {
                        t || (e.$el.css({
                            visibility: "hidden"
                        }),
                        e._cleanForm())
                    }
                }),
                this.open = t
            }
        },
        _cleanForm: function() {
            this.$el.find(".mc4wp-response").empty()
        },
        _onClickOutside: function(t) {
            var e = t ? t.data._this : this;
            if (e.open) {
                var i = e.$el;
                i.is(t.target) || 0 !== i.has(t.target).length || e._openNewsletterWindow(!1)
            }
        },
        _ajaxifyForm: function(t) {
            var e = this.$el.find("form");
            if (!(e.length <= 0)) {
                var i = this;
                t ? e.on("submit", (function(t) {
                    t.preventDefault(),
                    i._setLoading(!0);
                    var n = e.serialize();
                    $.ajax({
                        url: e.attr("action"),
                        type: "POST",
                        data: n,
                        success: function(t) {
                            var e, n = $(t).find(".mc4wp-response").html();
                            i._setResponse(n)
                        }
                    })
                }
                )) : e.off("submit")
            }
        },
        _setLoading: function(t) {
            TweenMax.to(this.$el.find("form"), .3, {
                opacity: t ? .4 : 1
            }),
            t ? this.$el.find(".loading").show(0) : this.$el.find(".loading").hide(0)
        },
        _setResponse: function(t) {
            this.$el.find(".mc4wp-response").html(t),
            this._setLoading(!1)
        },
        destroy: function() {
            this._addEvents(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "mixed_slideshow"
      , o = {
        dots: !0,
        arrows: !1,
        mode: "default"
    };
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.$slick = this.$el.find(".slick-slider"),
            this.slides = [],
            this.index = 0,
            this._initSlider(!0),
            this._addEvents(!0)
        },
        _addEvents: function(t) {
            t ? this.$win.on("resize", {
                _this: this
            }, this._onResize) : this.$win.off("resize", this._onResize)
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this, i = e.slides.length, n, s = e.$win.width(), o = e.$win.height(), r, a, l, c, h = s <= 768 ? 50 : 100;
            if (a = e.$el.find(".hero-content"),
            l = e.$el.find(".wrap-hero"),
            s >= 768) {
                var u = e.$el.find(".caption").length > 0;
                r = o - e.$el.offset().top - (u ? 60 : 0),
                a.css({
                    "max-width": "100%"
                }),
                l.css({
                    "max-width": "100%"
                }),
                a.height() > r && (c = Math.round(a.width() * r / a.height()),
                a.css({
                    "max-width": c + "px"
                }),
                l.css({
                    "max-width": c + "px"
                })),
                Math.abs(a.width() - s) < 20 && l.css({
                    "max-width": s - 20 + "px"
                })
            } else
                a.css({
                    "max-width": "100%"
                }),
                l.css({
                    "max-width": "100%"
                })
        },
        _initSlider: function(t) {
            var e = this;
            if (!(this.$slick <= 0)) {
                if (t) {
                    if (this.$slick.hasClass("slick-initialized"))
                        return;
                    this.$slick.on("init", (function() {
                        e._initSliderModel()
                    }
                    ));
                    var i = {
                        dots: this.options.dots,
                        infinite: !0,
                        speed: 777,
                        fade: "default" === this.options.mode,
                        arrows: this.options.arrows,
                        variableWidth: "default" !== this.options.mode,
                        centerMode: "default" !== this.options.mode,
                        autoplay: this.$el.hasClass("autoplay")
                    };
                    this.options.arrows && (i.prevArrow = this.$el.find(".arrow-left"),
                    i.nextArrow = this.$el.find(".arrow-right"),
                    this.$el.find(".slick-slide").length > 1 && this.$el.addClass("has-arrows")),
                    this.$slick.slick(i),
                    this._onResize()
                } else {
                    if (!this.$slick.hasClass("slick-initialized"))
                        return;
                    this.$slick.slick && this.$slick.slick("unslick")
                }
                this._addSlideshowEvents(t)
            }
        },
        _initSliderModel: function() {
            var t = this.$el.find(".slick-slide"), e = this, i, n, s;
            t.each((function(o) {
                i = $(this),
                n = i.hasClass("slide-video") ? "video" : "image",
                s = {
                    $s: t,
                    type: n
                },
                "video" === n && (i.find(".video-ctrl").video_ctrl({
                    autoplay: !1,
                    showPlayButton: !0,
                    playOnlyOnClickPlayButton: !0
                }),
                s.$video = i.find(".video-ctrl")),
                e.slides[o] = s
            }
            )),
            this.$el.find(".arrow").attr("style", ""),
            this.$el.addClass("is-initialized"),
            this.checkOnArrows(!0)
        },
        _addSlideshowEvents: function(t) {
            var e = this, i = this.$slick, n;
            t ? (i.on("beforeChange", (function(t, i, s, o) {
                "video" === (n = e.slides[s]).type && n.$video.video_ctrl("play", !1)
            }
            )),
            i.on("afterChange", (function(t, i, n) {
                e.index = n,
                e.checkOnArrows()
            }
            )),
            this.$doc.on("keydown", (function(t) {
                switch (t.keyCode) {
                case 39:
                    e.$slick.slick("slickNext");
                    break;
                case 37:
                    e.$slick.slick("slickPrev");
                    break
                }
            }
            )),
            i.find(".slick-slide").on("click", (function(t) {
                var i = $(this)
                  , n = parseInt(i.attr("data-slick-index"));
                n !== e.index && (t.stopImmediatePropagation(),
                e.$slick.slick("slickGoTo", n, !1))
            }
            ))) : (i.off("beforeChange"),
            i.off("afterChange"),
            this.$doc.off("keydown"),
            i.find(".slick-slide a").off("click"))
        },
        checkOnArrows: function(t) {
            return;
            if (this.slides.length > 1 && "default" !== this.options.mode) {
                var e = t ? 0 : this.$slick.slick("slickCurrentSlide");
                0 === e ? (this.$el.find(".arrow-left").hide(0),
                this.$el.find(".arrow-right").show(0)) : e === this.slides.length - 1 ? (this.$el.find(".arrow-left").show(0),
                this.$el.find(".arrow-right").hide(0)) : (this.$el.find(".arrow-left").show(0),
                this.$el.find(".arrow-right").show(0))
            }
        },
        destroy: function() {
            this._addEvents(!1),
            this._initSlider(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "slideshow_ctrl"
      , o = {
        autoplaySpeed: 7e3,
        arrows: !1,
        dots: !1
    };
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$html = $("html"),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.$slick = this.$el,
            this._initSlider(!0)
        },
        _initSlider: function(t) {
            var e = this.$slick;
            if (!(e.length < 0)) {
                if (t) {
                    if (!e.hasClass("slick-initialized")) {
                        var i = {
                            infinite: !0,
                            speed: 1600,
                            fade: !0,
                            cssEase: "ease-out",
                            autoplay: !0,
                            autoplaySpeed: this.options.autoplaySpeed,
                            arrows: this.options.arrows,
                            dots: this.options.dots,
                            pauseOnHover: !1,
                            pauseOnFocus: !1
                        };
                        if (e.hasClass("random")) {
                            var n = e.find(".slick-slide").length
                              , s = randomInt(0, n);
                            i.initialSlide = s
                        }
                        e.slick(i)
                    }
                } else
                    e.hasClass("slick-initialized") && e.slick && e.slick("unslick");
                this._attachEventsSlick(t)
            }
        },
        _attachEventsSlick: function(t) {
            var e = this
              , i = this.$slick
        },
        destroy: function() {
            this._initSlider(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "slider_wide_new"
      , o = {
        has_captions: !1,
        $captions: "",
        dots: !0
    };
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.$slider = this.$el.find(".slider"),
            this.slides = [],
            this.captions = [],
            this.index = 0,
            this.currents = [],
            this._initSliderModel()
        },
        _addEvents: function(t) {
            var e = this;
            t ? (this.$win.on("resize", {
                _this: this
            }, this._onResize),
            this.slides.length > 1 && (this.$el.find(".arrow").on("click", (function() {
                e._setIndex($(this).hasClass("arrow-right") ? 1 : -1)
            }
            )),
            this.$slider.find(".slide a").on("click", (function(t) {
                "#" === $(this).attr("href") && t.preventDefault();
                var i = $(this).parents(".slide"), n;
                parseInt(i.attr("data-index")) !== e.index && (t.preventDefault(),
                e._setIndex(t.clientX > e.$win.width() / 2 ? 1 : -1))
            }
            )),
            this.$slider.find(".slick-dots li").on("click", (function(t) {
                var i = parseInt($(this).attr("data-index"));
                i !== e.index && (Math.abs(i - e.index) > 1 && (i < e.index ? (e.index = i + 1,
                e._setPositions()) : (e.index = i - 1,
                e._setPositions())),
                e._setIndex(i - e.index))
            }
            )))) : (this.$win.off("resize", this._onResize),
            this.slides.length > 1 && (this.$el.find(".arrow").off("click"),
            this.$slider.find(".slick-dots li").off("click"))),
            this.slides.length > 1 && (this._attachEventsKeyBoard(t),
            this._addTouchEvents(t))
        },
        _attachEventsKeyBoard: function(t) {
            var e = this;
            t ? this.$win.on("keydown", (function(t) {
                39 === t.which || 40 === t.which ? e._setIndex(1) : 37 !== t.which && 38 !== t.which || e._setIndex(-1)
            }
            )) : this.$win.off("keydown")
        },
        _addTouchEvents: function(t) {
            if ($("html").hasClass("touch")) {
                var e = this, i;
                t ? this.$el.find("img").swipe({
                    swipeStatus: function(t, n, s, o, r, a) {
                        i = e.slides[e.index].$s.find("img"),
                        "left" === s || "right" === s ? "move" === n ? TweenMax.set(i, {
                            x: "left" === s ? -o : o
                        }) : "cancel" === n ? TweenMax.to(i, .2, {
                            x: 0,
                            ease: "Power.easeOut"
                        }) : "end" === n && (e._setIndex("left" === s ? 1 : -1),
                        TweenMax.to(i, .1, {
                            x: 0,
                            ease: "Power.easeOut",
                            delay: .3
                        })) : TweenMax.to(i, .2, {
                            x: 0,
                            ease: "Power.easeOut"
                        })
                    },
                    threshold: 75,
                    triggerOnTouchEnd: !0,
                    allowPageScroll: "vertical"
                }) : this.$el.find("img").swipe("destroy")
            }
        },
        _onResize: function(t) {
            var e;
            (t ? t.data._this : this)._setPositions()
        },
        _initSliderModel: function() {
            var t = this.$el.find(".slide")
              , e = this
              , i = 6
              , n = t.length
              , s = this.$el.find(".slick-dots");
            if (t.each((function(t) {
                $(this).attr("data-real-index", t),
                s.find("li:eq(" + t + ")").attr("data-index", t)
            }
            )),
            t.length < 6)
                if (1 === t.length)
                    ;
                else
                    for (var o = 0; o < 6 - n; o++) {
                        var t = this.$slider.find(".slide:eq(" + o + ")");
                        if (this.$slider.append(t.clone()),
                        this.options.has_captions) {
                            var r = this.$el.find(".cp:eq(" + o + ")");
                            this.$el.find(".info-slides").append(r.clone())
                        }
                    }
            (t = this.$el.find(".slide")).each((function(t) {
                t === e.index && $(this).addClass("current"),
                $(this).attr("data-index", t),
                e.slides[t] = {
                    $s: $(this)
                }
            }
            )),
            this.options.has_captions && (this.options.$captions = this.$el.find(".cp"),
            this.options.$captions.each((function(t) {
                e.captions[t] = $(this)
            }
            )),
            this._setCaptions()),
            this.options.dots && t.length > 1 ? s.show(0) : s.hide(0),
            this.$el.addClass("is-initialized"),
            this._setPositions(),
            this._addEvents(!0)
        },
        _setPositions: function() {
            var t = this.$win.width(), e, i, n, s, o = this._getMargin(), r = [];
            for (n = this.slides[this.index].$s,
            TweenMax.set(n, {
                x: t / 2 - n.width() / 2
            }),
            r[2] = this.index,
            this.slides.length > 1 && (s = this.index - 1 >= 0 ? this.index - 1 : this.slides.length - 1,
            n = this.slides[s].$s,
            TweenMax.set(n, {
                x: -n.width() + o
            }),
            r[1] = s,
            s = s - 1 >= 0 ? s - 1 : this.slides.length - 1,
            n = this.slides[s].$s,
            TweenMax.set(n, {
                x: -2 * t
            }),
            r[0] = s,
            s = this.index + 1 < this.slides.length ? this.index + 1 : 0,
            n = this.slides[s].$s,
            TweenMax.set(n, {
                x: t - o
            }),
            r[3] = s,
            s = s + 1 < this.slides.length ? s + 1 : 0,
            n = this.slides[s].$s,
            TweenMax.set(n, {
                x: 2 * t
            }),
            r[4] = s),
            s = 0; s < this.slides.length; s++)
                n = this.slides[s].$s,
                -1 === r.indexOf(s) ? n.hide(0) : n.show(0);
            this.currents = r
        },
        _getRealSlideByIndex: function(t) {},
        _setCaptions: function(t) {
            for (var e = this.captions.length, n, s = t !== i ? t : this.index; e--; )
                n = this.captions[e],
                e === s ? (n.css({
                    opacity: 0
                }).show(0),
                TweenMax.to(n, 1, {
                    opacity: 1,
                    ease: "Sine.easeOut"
                })) : n.hide(0)
        },
        _getMargin: function() {
            var t = this.$win.width();
            return t < 768 ? 0 : t > 1024 ? 200 : t <= 768 ? 50 : 100
        },
        _setIndex: function(t) {
            var e = this.$win.width(), i, n = this._getMargin(), s;
            if (this._setPositions(),
            this.slides[this.index].$s.removeClass("current"),
            t > 0)
                for (this.index += 1,
                this.index >= this.slides.length && (this.index = 0),
                s = 1; s < this.currents.length; s++)
                    i = this.slides[this.currents[s]].$s,
                    1 === s && TweenMax.to(i, .4, {
                        x: -e,
                        ease: "Circle.easeOut"
                    }),
                    2 === s && TweenMax.to(i, .4, {
                        x: -i.width() + n,
                        ease: "Circle.easeOut"
                    }),
                    3 === s && TweenMax.to(i, .4, {
                        x: e / 2 - i.width() / 2,
                        ease: "Circle.easeOut"
                    }),
                    4 === s && TweenMax.to(i, .4, {
                        x: e - n,
                        ease: "Circle.easeOut"
                    });
            else
                for (this.index -= 1,
                this.index < 0 && (this.index = this.slides.length - 1),
                s = 0; s < this.currents.length - 1; s++)
                    i = this.slides[this.currents[s]].$s,
                    0 === s && TweenMax.to(i, .4, {
                        x: -i.width() + n,
                        ease: "Circle.easeOut"
                    }),
                    1 === s && TweenMax.to(i, .4, {
                        x: e / 2 - i.width() / 2,
                        ease: "Circle.easeOut"
                    }),
                    2 === s && TweenMax.to(i, .4, {
                        x: e - n,
                        ease: "Circle.easeOut"
                    }),
                    3 === s && TweenMax.to(i, .4, {
                        x: e,
                        ease: "Circle.easeOut"
                    });
            this.slides[this.index].$s.addClass("current"),
            this._setCaptions(),
            this._setDots()
        },
        _setDots: function() {
            var t = this.$el.find(".slick-dots"), e;
            t.find("li").removeClass("slick-active");
            var i = this.slides[this.index].$s.attr("data-real-index");
            t.find("li:eq( " + i + ")").addClass("slick-active")
        },
        destroy: function() {
            this._addEvents(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "history_module", o = {
        index: 0
    }, r, a = [], l = [];
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$html = $("html"),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this._initHistory(!0),
            this._onResize()
        },
        _initHistory: function(t) {
            var e, i, n = this;
            t ? (this.$slider = this.$el.find(".slick-slider"),
            this._initSliderDotted(!0, this.$slider),
            l[0] = 1905,
            l[1] = parseInt(this.$el.attr("data-year")),
            (e = this.$el.find(".year-dot")).each((function(t) {
                i = $(this),
                a[t] = {
                    $el: i,
                    title: i.attr("data-title"),
                    year: parseInt(i.attr("data-year")),
                    x: 0
                }
            }
            )),
            this.$winover = this.$el.find("#p-over"),
            e.on("mouseenter", (function(t) {
                n._setWinHover(!0, parseInt($(this).attr("data-index")))
            }
            )),
            e.on("mouseleave", (function(t) {
                n._setWinHover(!1, parseInt($(this).attr("data-index")))
            }
            )),
            e.on("click", (function(t) {
                n._setIndex(parseInt($(this).attr("data-index")))
            }
            )),
            r = -1,
            this._setSelection(this.options.index)) : this._initSliderDotted(!1, this.$slider),
            this._addEvents(t)
        },
        _setIndex: function(t) {
            this.$slider.hasClass("slick-initialized") && this.$slider.slick("slickGoTo", t)
        },
        _setSelection: function(t) {
            var e, i;
            -1 != r && (e = a[r]).$el.removeClass("selected"),
            (e = a[r = t]).$el.addClass("selected")
        },
        _initSliderDotted: function(t, e) {
            if (!(e.length <= 0)) {
                var i = this;
                if (t) {
                    if (!e.hasClass("slick-initialized")) {
                        var n = {
                            dots: !1,
                            infinite: !0,
                            cssEase: "ease-out",
                            autoplay: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: this.$el.find(".arrow-left"),
                            nextArrow: this.$el.find(".arrow-right"),
                            fade: !0,
                            responsive: [{
                                breakpoint: 767,
                                settings: {
                                    fade: !1,
                                    arrows: !1
                                }
                            }]
                        };
                        e.slick(n),
                        e.on("beforeChange", (function(t, e, n, s) {
                            i._setSelection(s)
                        }
                        )),
                        e.find(".icon-close-for-mobile").on("click", (function(t) {
                            i._toggleColTextMobile(t)
                        }
                        ))
                    }
                } else
                    e.hasClass("slick-initialized") && (e.off("beforeChange"),
                    e.slick && e.slick("unslick"))
            }
        },
        _addEvents: function(t) {
            t ? this.$win.on("resize", {
                _this: this
            }, this._onResize) : this.$win.off("resize", this._onResize)
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this, i = e.$win.width(), n = e.$win.height(), s, o, r, a, l, c, h;
            e._mapTimeline(),
            waitForFinalEvent((function() {
                if (e.$slider) {
                    var t = 0, u, d;
                    c = e.$el.find(".header-title"),
                    h = e.$el.find(".timeline-container"),
                    u = n - c.outerHeight() - h.outerHeight(),
                    d = Math.max(0, u),
                    e.$el.find(".slider-wrap").height(d),
                    e.$el.find(".layout-50").height(d),
                    e.$el.find(".img-restrain").height(d)
                }
                s = e.$slider.find(".col-text"),
                i < 768 ? (r = parseInt(e.$slider.css("margin-bottom")),
                s.each((function() {
                    (o = $(this)).css({
                        top: "auto",
                        bottom: 0
                    }),
                    l = o.outerHeight() - 80,
                    a = 0,
                    o.data("y-open", 0),
                    o.data("y-close", l),
                    o.data("is-open", !1),
                    TweenMax.set(o, {
                        y: l
                    }),
                    o.find(".icon-close-for-mobile").html("open")
                }
                ))) : TweenMax.set(s, {
                    y: 0
                })
            }
            ), 37, "module-history-resize")
        },
        _toggleColTextMobile: function(t) {
            var e, i = $(t.currentTarget).parents(".col-text"), n = i.data("is-open");
            TweenMax.to(i, .3, {
                y: n ? i.data("y-close") : i.data("y-open"),
                ease: "Power.aeaseOut"
            }),
            n = !n,
            i.data("is-open", n),
            i.find(".icon-close-for-mobile").html(n ? "close" : "open")
        },
        _mapTimeline: function() {
            var t = this.$el.find(".timeline").width() - 12, e = l[1] - l[0], i = t / e, n, s, o;
            for (n = 0; n < a.length; n++)
                s = a[n],
                0 === (o = (s.year - l[0]) * i) && (o = -6),
                TweenMax.set(s.$el, {
                    x: o
                }),
                s.x = o;
            var r = this.$el.find(".indicators")
              , c = r.find(".indicator")
              , h = 10
              , o = Math.floor(e / h);
            if (1 === c.length)
                for (n = 0; n <= o; n++)
                    r.append(c.clone());
            (c = r.find(".indicator")).each((function(e) {
                var n = $(this);
                e > 0 && (o = e * h * i,
                TweenMax.set(n, {
                    x: o
                }),
                s = l[0] + e * h,
                n.find(".y").html(e % 2 == 0 ? s : ""),
                e === c.length - 1 && (n.find(".y").html(l[1]),
                TweenMax.set(n.find(".y"), {
                    x: 2 - n.find(".y").width()
                }),
                TweenMax.set(n, {
                    x: t + 6
                })))
            }
            ))
        },
        _setWinHover: function(t, e) {
            if (t) {
                var i = a[e], n, s = this.$el.find(".timeline").width();
                this.$winover.removeClass("right-edge"),
                this.$winover.find(".y").html(i.year),
                this.$winover.find(".t").html(i.title),
                (n = i.x + 5) + this.$winover.outerWidth() > s && this.$winover.addClass("right-edge"),
                TweenMax.set(this.$winover, {
                    x: n,
                    opacity: 1
                })
            } else
                TweenMax.set(this.$winover, {
                    opacity: 0
                })
        },
        destroy: function() {
            this._initHistory(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, r, e),
        this._defaults = r,
        this._name = s,
        this._init()
    }
    var s = "modules_ctrl", o, r = {};
    n.prototype = {
        _init: function() {
            var i = this;
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$html = $("html"),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this._initModules(!0),
            this._addEvents(!0),
            setTimeout((function() {
                i._onResize()
            }
            ), 177)
        },
        _initModules: function(t) {
            var e, i, n, s, r = this, a, l;
            if (t)
                o = [],
                (l = this.$el.find(".module")).each((function() {
                    a = !1,
                    (e = $(this)).hasClass("layout-full_screen_slideshow") ? (i = "full_screen_slideshow",
                    (n = e.find(".slick-slider")).slideshow_ctrl()) : e.hasClass("layout-text_image_slideshow") ? (i = "text_image_slideshow",
                    n = e.find(".slider-dotted"),
                    r._initSliderDotted(!0, n)) : e.hasClass("layout-tabbed_text_image_slideshow") ? (i = "tabbed_text_image_slideshow",
                    n = e.find(".slider-dotted"),
                    r._setTabs(e, !0),
                    n.each((function() {
                        r._initSliderDotted(!0, $(this))
                    }
                    ))) : e.hasClass("layout-only_image_slideshow") ? (i = "only_image_slideshow",
                    (n = e.find(".slider-wide-new")).slider_wide_new({
                        has_captions: !0,
                        $captions: e.find(".info-slides .cp")
                    })) : a = !0,
                    a || o.push({
                        layout: i,
                        $el: n,
                        $m: e
                    })
                }
                )),
                (e = $(".module.layout-history")).length > 0 && (i = "history_module",
                (n = e).history_module({}),
                o.push({
                    layout: i,
                    $el: n,
                    $m: e
                })),
                this.modules = o;
            else
                for (s = 0; s < this.modules.length; s++)
                    switch (n = this.modules[s].$el,
                    this.modules[s].layout) {
                    case "full_screen_slideshow":
                        n.slideshow_ctrl("destroy");
                        break;
                    case "text_image_slideshow":
                        this._initSliderDotted(!1, n);
                        break;
                    case "tabbed_text_image_slideshow":
                        this._initSliderDotted(!1, n),
                        this._setTabs(o[s].$m, !1);
                        break;
                    case "only_image_slideshow":
                        n.slider_wide_new("destroy");
                        break;
                    case "history_module":
                        n.history_module("destroy");
                        break
                    }
        },
        _setTabs: function(t, e) {
            var i = t.find("ul.tabs"), n, s, o;
            i.length > 0 && (n = i.find("li"),
            e ? n.on("click", (function() {
                (s = $(this)).hasClass("selected") || (o = s.attr("data-index"),
                n.removeClass("selected"),
                s.addClass("selected"),
                t.find(".slideshow-tab").removeClass("selected"),
                t.find(".slideshow-tab:eq(" + o + ")").addClass("selected"))
            }
            )) : n.off("click"))
        },
        _initSliderDotted: function(t, e) {
            var i = this;
            if (!(e.length <= 0))
                if (t) {
                    if (!e.hasClass("slick-initialized")) {
                        var n = {
                            dots: !0,
                            infinite: !0,
                            cssEase: "ease-out",
                            autoplay: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !0,
                            prevArrow: e.parent().find(".arrow-left"),
                            nextArrow: e.parent().find(".arrow-right"),
                            fade: !0,
                            responsive: [{
                                breakpoint: 767,
                                settings: {
                                    fade: !1
                                }
                            }]
                        };
                        e.hasClass("numbered") && (n.adaptiveHeight = !0),
                        e.slick(n),
                        e.find(".icon-close-for-mobile").on("click", (function(t) {
                            i._toggleColTextMobile(t)
                        }
                        ))
                    }
                } else
                    e.hasClass("slick-initialized") && e.slick && e.slick("unslick")
        },
        _addEvents: function(t) {
            t ? this.$win.on("resize", {
                _this: this
            }, this._onResize) : this.$win.off("resize", this._onResize)
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this, i = e.$win.width(), n, s, o, r, a, l, c, h, u;
            waitForFinalEvent((function() {
                for (n = 0; n < e.modules.length; n++)
                    switch (s = e.modules[n],
                    o = s.$el,
                    r = s.$m,
                    c = parseInt(o.css("margin-bottom")),
                    s.layout) {
                    case "text_image_slideshow":
                    case "tabbed_text_image_slideshow":
                        a = o.find(".col-text"),
                        i < 768 ? o.each((function() {
                            var t = $(this);
                            a.each((function() {
                                l = $(this),
                                h = t.height() - l.height() - c,
                                u = h + l.height() - 30,
                                l.data("y-open", h),
                                l.data("y-close", u),
                                l.data("is-open", !1),
                                TweenMax.set(l, {
                                    y: u
                                }),
                                l.find(".icon-close-for-mobile").html("open")
                            }
                            ))
                        }
                        )) : TweenMax.set(a, {
                            y: 0
                        });
                        break
                    }
            }
            ), 37, "modules-ctrl-resize-" + Math.random())
        },
        _toggleColTextMobile: function(t) {
            var e, i = $(t.currentTarget).parents(".col-text"), n = i.data("is-open");
            TweenMax.to(i, .3, {
                y: n ? i.data("y-close") : i.data("y-open"),
                ease: "Power.aeaseOut"
            }),
            n = !n,
            i.data("is-open", n),
            i.find(".icon-close-for-mobile").html(n ? "close" : "open")
        },
        destroy: function() {
            this._addEvents(!1),
            this._initModules(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "map_grounds", o = {
        open: !1
    }, r, a;
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this._addEvents(!0),
            r = {
                width: parseInt(this.$el.attr("data-width")),
                height: parseInt(this.$el.attr("data-height"))
            },
            a = [],
            this.$el.find(".point").each((function(t) {
                var e = $(this);
                a[t] = {
                    $el: e,
                    x: parseInt(e.attr("data-x")),
                    y: parseInt(e.attr("data-y"))
                }
            }
            )),
            this._onResize()
        },
        _addEvents: function(t) {
            t ? this.$win.on("resize", {
                _this: this
            }, this._onResize) : this.$win.off("resize", this._onResize)
        },
        _onResize: function(t) {
            var e, i, n, s, o = (t ? t.data._this : this).$win.width() / r.width;
            for (n = a.length; n--; )
                s = a[n],
                TweenMax.set(s.$el, {
                    x: o * s.x - 12,
                    y: o * s.y - 12
                })
        },
        destroy: function() {
            this._addEvents(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "video_button"
      , o = {};
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.$header = this.$el.find(".header"),
            this.$scroll = this.$el.find(".scroll"),
            this.$button = this.$el.find(".img-cnt"),
            this.$video = this.$el.find(".video-wrapper"),
            this.video_html = this.$el.find(".video-script").html(),
            this.$adjacent_text = this.$el.prev(),
            this.is_open = !1,
            this._addEvents(!0)
        },
        _addEvents: function(t) {
            var e = this;
            t ? (this.$win.on("resize", {
                _this: this
            }, this._onResize),
            this.$button.on("click", (function() {
                e._open(!0)
            }
            )),
            this.$el.find(".close a").on("click", (function(t) {
                t.preventDefault(),
                e._open(!1)
            }
            ))) : (this.$win.off("resize", this._onResize),
            this.$button.off("click"),
            this.$el.find(".close a").off("click"))
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this
        },
        _open: function(t) {
            var e = this;
            t !== this.is_open && (t ? (this.$el.addClass("is-open"),
            this.$el.css("z-index", 99),
            this.$video.html(this.video_html),
            TweenMax.to(this.$button, .4, {
                opacity: 0,
                onComplete: function() {
                    e.$button.hide(0)
                }
            })) : (this.$el.removeClass("is-open"),
            this.$button.show(0),
            TweenMax.to(this.$button, .4, {
                opacity: 1,
                onComplete: function() {
                    e.$video.html("")
                }
            })),
            this._hideAdjacentText(t),
            this.is_open = t,
            this.$el.trigger(t ? "video:open" : "video:close"))
        },
        _hideAdjacentText: function(t) {
            this.$adjacent_text.length > 0 && this.$adjacent_text.hasClass("text-container") && TweenMax.to(this.$adjacent_text, .4, {
                opacity: t ? 0 : 1
            })
        },
        open: function(t) {
            this._open(t)
        },
        destroy: function() {
            this._addEvents(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "ajax_modal"
      , o = {};
    n.prototype = {
        _init: function() {
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.admin_url = this.$body.attr("data-ajax-url"),
            this.$html = "",
            this.active = !1,
            this._addEvents(!0)
        },
        _addEvents: function(t) {
            var e = this;
            t ? this.$el.on("click", (function(t) {
                t.preventDefault(),
                e._loadModal($(this).attr("data-page-id"), $(this).attr("data-mode"))
            }
            )) : this.$el.off("click")
        },
        _loadModal: function(t, e) {
            if (!this.active) {
                this._enableButton(!1),
                this.$el.trigger("start:loading");
                var i = this;
                $.ajax({
                    type: "post",
                    url: this.admin_url,
                    data: {
                        action: "ajax_load_modal",
                        mode: e,
                        id: t
                    },
                    success: function(t) {
                        i.$html = $(t),
                        "no-results" === t ? i.$el.trigger("modal:error") : i.$el.trigger("modal:success"),
                        i.$el.trigger("end:loading"),
                        i._enableButton(!0)
                    }
                })
            }
        },
        _enableButton: function(t) {
            this.active = !t
        },
        getHTML: function() {
            return this.$html
        },
        destroy: function() {
            this._addEvents(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function($, t, e, i) {
    "use strict";
    function n(t, e) {
        this.element = t,
        this.options = $.extend({}, o, e),
        this._defaults = o,
        this._name = s,
        this._init()
    }
    var s = "slider_collection_products"
      , o = {
        arrows: !0,
        dots: !1,
        infinite: !0,
        autoplay: !0,
        centerMode: !0
    };
    n.prototype = {
        _init: function() {
            var i = this;
            this.$el = $(this.element),
            this.$win = $(t),
            this.$doc = $(e),
            this.$body = $("body"),
            this.touch = !$("html").hasClass("no-touch"),
            this.$slick = this.$el.find(".slick-slider"),
            this.slides = [],
            this.index = 0,
            this.n_slides = this.$slick.find(".slick-slide").length,
            this.args = {},
            this.$slick.imagesLoaded((function() {
                i._initSlider(!0)
            }
            )),
            this._initPackeryForMobile(!0),
            this._addEvents(!0)
        },
        _addEvents: function(t) {
            t ? this.$win.on("resize", {
                _this: this
            }, this._onResize) : this.$win.off("resize", this._onResize)
        },
        _onResize: function(t) {
            var e = t ? t.data._this : this;
            e.$el.hasClass("is-initialized") && setTimeout((function() {
                e.centerSlider()
            }
            ), 177)
        },
        _initPackeryForMobile: function(t) {
            var e = this.$el.find(".grid-packery-products-collection");
            e.length > 0 && TR.initGridPackery(t, e, !1, !1)
        },
        _initSlider: function(t) {
            var e = this;
            t ? (this.$slick.on("init", (function(t, i) {
                e._initSliderModel()
            }
            )),
            this.n_slides >= 5 ? (this.options.infinite = !0,
            this.options.autoplay = !0,
            this.options.centerMode = !0,
            this.options.slidesToShow = this.n_slides - 1) : (this.options.infinite = !1,
            this.options.autoplay = !1,
            this.options.centerMode = !1,
            this.options.slidesToShow = 1),
            this.args = {
                speed: 477,
                autoplaySpeed: 7e3,
                variableWidth: !0,
                fade: !1,
                slidesToShow: this.options.slidesToShow,
                infinite: this.options.infinite,
                autoplay: this.options.autoplay,
                centerMode: this.options.centerMode,
                dots: this.options.dots,
                arrows: this.options.arrows,
                prevArrow: this.$el.find(".arrow-left"),
                nextArrow: this.$el.find(".arrow-right")
            },
            this.$slick.slick(this.args)) : this.$slick.slick && this.$slick.slick("unslick"),
            this._addSlideshowEvents(t)
        },
        centerSlider: function() {
            var t = this.$slick.width(), e, i = this.$slick.find(".slick-track"), n = parseInt(this.$slick.find(".slick-slide").css("margin-right"));
            this.options.infinite || (e = 0,
            this.$slick.find(".slick-slide").each((function() {
                e += $(this).width() + n
            }
            )),
            e < t ? (TweenMax.set(i, {
                x: Math.round((t - e) / 2 + n / 2)
            }),
            this._showArrows(!1)) : (TweenMax.set(i, {
                x: 0
            }),
            this._showArrows(!0)))
        },
        _showArrows: function(t) {
            var e = this.$el.find(".arrow");
            t ? e.css({
                display: "block"
            }) : e.css({
                display: "none"
            })
        },
        _initSliderModel: function() {
            var t = this.$el.find(".slick-slide")
              , e = this;
            t.each((function(t) {
                e.slides[t] = {
                    $s: $(this)
                }
            }
            )),
            this.$el.addClass("is-initialized"),
            this.$win.trigger("resize")
        },
        _addSlideshowEvents: function(t) {
            var e = this
              , i = this.$slick;
            t ? (i.on("beforeChange", (function(t, i, n, s) {
                e.index = s
            }
            )),
            i.on("afterChange", (function(t, e, i) {}
            )),
            this.$doc.on("keydown", (function(t) {
                switch (t.keyCode) {
                case 39:
                    e.$slick.slick("slickNext");
                    break;
                case 37:
                    e.$slick.slick("slickPrev");
                    break
                }
            }
            ))) : (i.off("beforeChange"),
            i.off("afterChange"),
            this.$doc.off("keydown"),
            i.find(".slick-slide a").off("click"))
        },
        destroy: function() {
            this._addEvents(!1),
            this._initSlider(!1),
            this._initPackeryForMobile(!1),
            this.$el.removeData(),
            $.data(this, "plugin_" + s, null)
        }
    },
    $.fn[s] = function(t) {
        var e = arguments, o;
        return t === i || "object" == typeof t ? this.each((function() {
            $.data(this, "plugin_" + s) || $.data(this, "plugin_" + s, new n(this,t))
        }
        )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
            var i = $.data(this, "plugin_" + s);
            i instanceof n && "function" == typeof i[t] && (o = i[t].apply(i, Array.prototype.slice.call(e, 1))),
            "destroy" === t && $.data(this, "plugin_" + s, null)
        }
        )),
        o !== i ? o : this) : void 0
    }
}(jQuery, window, document),
function(t, e) {
    function i(t) {
        var e;
        return t.options.map((function(t) {
            var e = t.values.map((function(t) {
                return '<option value="' + t + '">' + t + "</option>"
            }
            ));
            return '<div class="shopify-select">                <select class="select" name="' + t.name + '">' + e + '</select>                <svg class="shopify-select-icon" viewBox="0 0 24 24"><path d="M21 5.176l-9.086 9.353L3 5.176.686 7.647 12 19.382 23.314 7.647 21 5.176z"></path></svg>              </div>'
        }
        ))
    }
    function n() {
        $(".cart .btn--close").on("click", m),
        $(document).on("click", (function(t) {
            $(t.target).closest(".cart").length || $(t.target).closest(".js-prevent-cart-listener").length || m()
        }
        ));
        var e = 27;
        $(document).on("keydown", (function(t) {
            t.which === e && (M && ($(M).focus(),
            M = ""),
            m())
        }
        )),
        $(".btn--cart-checkout").on("click", (function() {
            t.open(E.checkoutUrl, "_blank")
        }
        )),
        $(".cart").on("click", ".quantity-increment", (function() {
            var t;
            d($(this).data("variant-id"))
        }
        )),
        $(".cart").on("click", ".quantity-decrement", (function() {
            var t;
            u($(this).data("variant-id"))
        }
        )),
        $(".cart").on("keyup", ".cart-item__quantity", f(p, 250)),
        $(".btn--cart-tab").click((function() {
            C(this),
            g()
        }
        )),
        $(".cart").on("click", ".close-item", (function(t) {
            SHOPIFY.eliminateItemCart(t)
        }
        ))
    }
    function s(t) {
        var e = t.id, i, n;
        $("#shopify_" + e).parent(".block-purchase").find(".variant-selectors").on("change", "select", (function(e) {
            var i = $(e.target)
              , n = i.attr("name")
              , s = i.val();
            t.options.filter((function(t) {
                return t.name === n
            }
            ))[0].selected = s;
            var o = t.selectedVariant
              , a = t.selectedVariantImage;
            r(t, a),
            l(t, o);
            var c = SHOPIFY.getProductIndexFromID(t.id);
            -1 !== c && (O[c] = t)
        }
        ))
    }
    function o(t) {
        $("#buy-button-1 .product-title").text(t)
    }
    function r(t, e) {
        var i = e ? e.src : "", n = t.id, s, o = $("#shopify_" + n), r;
        (r = $("body").hasClass("single-accessory") ? o.parents(".layout-accessory").find(".img-wrapper-container img") : o.parents(".news-single").find(".img-wrapper-container img")) && r.length > 0 && "" !== i && (r.attr("srcset", ""),
        r.attr("src", i))
    }
    function a(t) {
        $("#buy-button-1 .variant-title").text(t.title)
    }
    function l(t, e) {
        var i = t.id, n, s = $("#shopify_" + i);
        s.length > 0 && s.parents(".block-purchase").find(".price").html("$ " + e.price)
    }
    function c(t) {
        t.preventDefault();
        var e = $(t.target).attr("data-shopify-id"), e, i, n = v(e = (I = SHOPIFY.getProductFromID(e)).selectedVariant.id);
        i = n ? n.quantity + 1 : 1,
        y(I.selectedVariant, i),
        C(t.target),
        $("#checkout").focus(),
        $("body").trigger("SHOPIFY:purchase")
    }
    function h(t, e) {
        var i, n, s, o = v(SHOPIFY.getLineCartProduct(e).variants.filter((function(t) {
            return t.id === e
        }
        ))[0].id);
        o && _(o, s = t(o.quantity))
    }
    function u(t) {
        h((function(t) {
            return t - 1
        }
        ), t)
    }
    function d(t) {
        h((function(t) {
            return t + 1
        }
        ), t)
    }
    function p(t) {
        var e = parseInt($(this).closest(".cart-item").attr("data-variant-id"), 10), i, n, s = v(SHOPIFY.getLineCartProduct(e).variants.filter((function(t) {
            return t.id === e
        }
        ))[0].id), o = t.target.value;
        s && _(s, o)
    }
    function f(t, e, i) {
        var n;
        return function() {
            var s = this
              , o = arguments
              , r = function() {
                n = null,
                i || t.apply(s, o)
            }
              , a = i && !n;
            clearTimeout(n),
            n = setTimeout(r, e),
            a && t.apply(s, o)
        }
    }
    function g() {
        $(".cart").addClass("js-active")
    }
    function m() {
        $(".cart").removeClass("js-active"),
        $(".overlay").removeClass("js-active")
    }
    function v(t) {
        return E.lineItems.filter((function(e) {
            return e.variant_id === t
        }
        ))[0]
    }
    function y(t, e) {
        g();
        var i = v(t.id);
        i ? _(i, e) : w(t, e),
        k()
    }
    function _(t, e) {
        var i = t.variant_id
          , n = E.lineItems.length;
        E.updateLineItem(t.id, e).then((function(e) {
            var s = $(".cart").find('.cart-item[data-variant-id="' + i + '"]');
            e.lineItems.length >= n ? (s.find(".cart-item__quantity").val(t.quantity),
            s.find(".cart-item__price").text(S(t.line_price))) : s.addClass("js-hidden").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", (function() {
                s.remove()
            }
            )),
            k(),
            x(),
            e.lineItems.length < 1 && m()
        }
        )).catch((function(t) {
            console.log("Fail"),
            console.error(t)
        }
        ))
    }
    function w(t, e) {
        E.createLineItemsFromVariants({
            variant: t,
            quantity: e
        }).then((function() {
            var e, i = b(E.lineItems.filter((function(e) {
                return e.variant_id === t.id
            }
            ))[0]), n = $(".cart-item-container");
            n.append(i),
            setTimeout((function() {
                n.find(".js-hidden").removeClass("js-hidden")
            }
            ), 0)
        }
        )).catch((function(t) {
            console.log("Fail"),
            console.error(t)
        }
        )),
        x(),
        k(),
        g()
    }
    function b(t) {
        var e = $("#CartItemTemplate").html()
          , i = $(e)
          , n = t.image.src;
        return i.attr("data-variant-id", t.variant_id),
        i.addClass("js-hidden"),
        i.find(".cart-item__img").html('<img class="responsive" src="' + n + '">'),
        i.find(".cart-item__title").text(t.title),
        i.find(".cart-item__variant-title").text(t.variant_title),
        i.find(".cart-item__price").text(S(t.line_price)),
        i.find(".cart-item__quantity").attr("value", t.quantity),
        i.find(".quantity-decrement").attr("data-variant-id", t.variant_id),
        i.find(".quantity-increment").attr("data-variant-id", t.variant_id),
        SHOPIFY.addCartItemLinkWork(i),
        i
    }
    function T() {
        var t = $(".cart-item-container");
        t.empty();
        var e = $("#CartItemTemplate").html()
          , i = E.lineItems.map((function(t, e) {
            return b(t)
        }
        ));
        t.append(i),
        setTimeout((function() {
            t.find(".js-hidden").removeClass("js-hidden")
        }
        ), 0),
        x(),
        setTimeout((function() {
            $("window").trigger("resize")
        }
        ), 77)
    }
    function x() {
        $(".cart .pricing").text(S(E.subtotal))
    }
    function S(t, e, i, n, s) {
        e = e || "$",
        i = i || ",",
        n = n || ".",
        s = s || ".";
        var o = new RegExp("(\\d)(?=(\\d{3})+\\.)","g");
        return e + parseFloat(t, 10).toFixed(2).replace(s, n).replace(o, "$1" + i).toString()
    }
    function k() {
        E.lineItemCount > 0 ? ($("#cart-count").html(E.lineItemCount),
        $(".cart-toggle").removeClass("cart-empty")) : $(".cart-toggle").addClass("cart-empty")
    }
    function C(t) {
        M = t
    }
    var $ = t.jQuery, P, E, I, O, A, M;
    SHOPIFY = {
        init: function(t) {
            var e = {
                accessToken: "43cc5cbc52e52e7aed88abd115f2f498",
                domain: "george-nakashima-woodworker.myshopify.com",
                appId: "6",
                a_class: "a.shopify-purchase"
            };
            this.options = $.extend({}, e, t),
            this.admin_url = $("body").attr("data-ajax-url"),
            this.initClient()
        },
        initClient: function() {
            P = t.ShopifyBuy.buildClient({
                accessToken: this.options.accessToken,
                domain: this.options.domain,
                appId: this.options.appId
            }),
            this.fetchAllProducts()
        },
        fetchAllProducts: function() {
            O = [],
            P.fetchAllProducts().then((function(t) {
                O = t,
                SHOPIFY.fetchCart()
            }
            ))
        },
        fetchCart: function() {
            localStorage.getItem("lastCartId") ? P.fetchCart(localStorage.getItem("lastCartId")).then((function(t) {
                A = (E = t).lineItems.length,
                T(),
                SHOPIFY.onCartInit()
            }
            )) : P.createCart().then((function(t) {
                E = t,
                localStorage.setItem("lastCartId", E.id),
                A = 0,
                SHOPIFY.onCartInit()
            }
            ))
        },
        onCartInit: function() {
            n(),
            k()
        },
        addBuyButtons: function(t) {
            var e = $(this.options.a_class), i;
            e.length <= 0 || (t ? e.each((function() {
                (i = $(this)).on("click", c);
                var t = i.attr("data-shopify-id");
                (I = SHOPIFY.getProductFromID(t)) ? SHOPIFY.afterFetchProduct(I) : P.fetchProduct(t).then((function(t) {
                    I = t,
                    SHOPIFY.afterFetchProduct(I)
                }
                )).catch((function() {
                    console.log("Request failed")
                }
                ))
            }
            )) : e.off("click"))
        },
        afterFetchProduct: function(t) {
            var e = t.selectedVariant
              , n = t.selectedVariantImage
              , o = t.options
              , a = i(t);
            l(t, e),
            s(t);
            var c = t.id, h, u = $("#shopify_" + c);
            t.variants.length > 1 && (u.parent(".block-purchase").find(".variant-selectors").html(a),
            r(t, n))
        },
        getProductFromID: function(t) {
            t = parseInt(t);
            for (var i = O.length, n; i--; )
                if ((n = O[i]).id === t)
                    return n;
            return e
        },
        getProductIndexFromID: function(t) {
            t = parseInt(t);
            for (var e = O.length, i; e--; )
                if ((i = O[e]).id === t)
                    return e;
            return -1
        },
        getLineCartProduct: function(t) {
            t = parseInt(t);
            for (var e = O.length, i; e--; )
                for (var n = (i = O[e]).variants.length; n--; )
                    if (i.variants[n].id === t)
                        return i;
            return I
        },
        eliminateItemCart: function(t) {
            var e, i = $(t.target).parents(".cart-item"), n = i.data("variant-id"), s = i.find(".cart-item__quantity");
            s.val(0),
            s.trigger("keyup")
        },
        addCartItemLinkWork: function(t) {
            var e = this.getLineCartProduct(t.attr("data-variant-id"));
            e ? $.ajax({
                type: "post",
                url: this.admin_url,
                data: {
                    action: "get_permalink_work",
                    id_shopify: e.id
                },
                success: function(e) {
                    "no-results" === e ? t.find("a.cart-item-link-work").on("click", (function(t) {
                        t.preventDefault()
                    }
                    )) : (t.find("a.cart-item-link-work").attr("href", e),
                    t.ajaxify())
                }
            }) : t.find("a.cart-item-link-work").on("click", (function(t) {
                t.preventDefault()
            }
            ))
        }
    }
}(window);
var TweenMax = window.TweenMax || {}
  , console = console || {
    log: function() {
        return !0
    }
}
  , NProgress = window.NProgress || {}
  , FastClick = window.FastClick || {}
  , AJX = window.AJX || {}
  , EFFX = window.EFFX || {}
  , IMGX = window.IMGX || {}
  , SHOPIFY = window.SHOPIFY || {}
  , waitForFinalEvent = window.waitForFinalEvent;
jQuery.ready.then((function($) {
    "use strict";
    var t = [320, 768, 1280, 2560], e = "nakashima.dev", i = $("#burger"), n = $("#menu-panel"), s = $("#cart-overlay"), o, r, a, l, c, h, u, d, p, f, g, m, v, y, _, w;
    o = $("html"),
    r = $("body"),
    a = $(window),
    l = $(document),
    d = $("#content-injected"),
    f = -1 !== r.attr("data-site-url").indexOf(e),
    p = !0,
    TR = {
        init: function(t) {
            return this.consoleInit(),
            r.addClass("transition-ajax-in"),
            c = t,
            h = o.hasClass("mobile"),
            u = o.hasClass("tablet"),
            a.on("resize", (function() {
                TR.onResize()
            }
            )),
            this.initNprogress(),
            this.initTR(),
            c && this.toggleMenu(),
            r.trigger("resize"),
            this
        },
        isMobile: function() {
            return h
        },
        isMobileDevice: function() {
            return h || u
        },
        isDesktop: function() {
            return !this.isMobileDevice()
        },
        initTR: function() {
            y = !0,
            r.hasClass("home") && (_ = !0),
            this.initIMGX(!0),
            this.initMenu(),
            this.initSearch(),
            this.initPage(!0),
            this.initAJX(),
            this.initPopUp(!0),
            this.initGeoIP(),
            this.initSiteCredits()
        },
        initAJX: function() {
            var t = 1200
              , e = 1.2;
            window.AJX.init({
                waitTime: t,
                contentId: "#content-injected"
            }),
            a.on("ajax:always", (function() {
                TR.closeMenu(),
                $("#menu").css({
                    "pointer-events": "none"
                }),
                o.removeClass("over-submenu"),
                o.removeClass("on-top-hero-image")
            }
            )),
            a.on("ajax:start", (function() {
                var t;
                AJX.getData().fragment ? TR.onAjaxStartFragment() : (r.removeClass("transition-ajax-in").addClass("transition-ajax-out"),
                TR.effectsOnAjaxStart(),
                TweenMax.to(d, 3 * e / 4, {
                    opacity: 0,
                    ease: "Sine.easeOut",
                    onComplete: function() {
                        TR.initPage(!1),
                        TR.initEffects(!1),
                        TR.updateScrollTo(0, 0)
                    }
                })),
                TR.setLoading(!0)
            }
            )),
            a.on("ajax:before-update", (function() {
                var t = AJX.getData();
                t.fragment && (t.is_replace_state ? TR.initEffects(!1) : TR.initFragment(!1))
            }
            )),
            a.on("ajax:success", (function() {
                var t = AJX.getData();
                $("#menu").css({
                    "pointer-events": "auto"
                }),
                TR.updateScrollTo(0, 0),
                t.fragment ? t.is_replace_state ? (TR.initEffects(!0),
                TR.setLoading(!1)) : TR.initFragment(!0) : (TR.initPage(!0),
                TweenMax.to(d, 3 * e / 4, {
                    opacity: 1,
                    ease: "Sine.easeOut"
                }),
                r.addClass("transition-ajax-in"))
            }
            ))
        },
        initPopUp: function(t) {
            var e = $("#popup-overlay");
            e.length > 0 && (t ? (e.overlay_window({
                open: !0,
                mode: "popup"
            }),
            e.on("overlay:close", (function() {
                e.overlay_window("destroy"),
                e.remove()
            }
            ))) : e.overlay_window("destroy"))
        },
        initIMGX: function(e) {
            e && (a.on("imgx:loading", (function() {
                TR.setLoading(!0)
            }
            )),
            a.on("imgx:loaded", (function() {
                TR.setLoading(!1),
                EFFX.refreshScenes()
            }
            )),
            window.IMGX.init({
                breakpoints: t,
                autoInitImages: !1
            }))
        },
        initNprogress: function() {
            NProgress.configure({
                showSpinner: !1,
                minimum: .1,
                trickleRate: .2,
                trickleSpeed: 377,
                parent: "body"
            }),
            this.setLoading(!0)
        },
        setLoading: function(t) {
            t ? NProgress.start() : NProgress.done()
        },
        onResize: function() {
            waitForFinalEvent((function() {
                TR.adjustLayout()
            }
            ), 17, "image-resize")
        },
        adjustLayout: function() {
            var t = this, e = a.width(), i = a.height(), n, s, o, l;
            (e >= 768 ? $("#menu-container").height(i - $("#header-panel").outerHeight() - ($(".link-foundation.hide-for-mobile").height() + 10 + parseInt($(".link-foundation.hide-for-mobile").css("bottom")))) : $("#menu-container").height(i - $("#header-panel").outerHeight()),
            n = $(".hero-content"),
            r.hasClass("post-type-archive-furniture") && n.data("w") !== e) && (n.data("w", e),
            e >= 768 && (s = i - n.offset().top - 180,
            n.css({
                "max-width": "1680px"
            }),
            setTimeout((function() {
                n.height() > s && (o = Math.round(n.width() * s / n.height()) + "px",
                n.css({
                    "max-width": o
                }))
            }
            ), 0),
            IMGX.setImgCrops()))
        },
        initMenu: function() {
            var t, e;
            n.data("open", !1),
            o.hasClass("desktop") && (i.on("mouseover", (function(t) {
                TR.openMenu(!0)
            }
            )),
            c || n.on("mouseleave", (function(t) {
                TR.openMenu(!1)
            }
            ))),
            i.on("click", (function(t) {
                t.preventDefault(),
                t.stopImmediatePropagation(),
                TR.toggleMenu()
            }
            )),
            n.find("a.close").on("click", (function(t) {
                t.preventDefault(),
                t.stopImmediatePropagation(),
                TR.openMenu(!1)
            }
            )),
            $("#search-li").on("click", (function() {
                $(this).find("#s").focus()
            }
            )),
            (t = $("#menu").find(".main-nav-top-li")).each((function(t) {
                $(this).attr("data-index", t)
            }
            )),
            $("#menu").find(".main-nav-top-li").on("mouseenter", (function() {
                var e = parseInt($(this).attr("data-index"));
                t.each((function(t) {
                    t !== e ? $(this).addClass("dimmed") : $(this).removeClass("dimmed")
                }
                )),
                $("#menu").removeClass("clicked"),
                $(this).find("ul.sub-nav").length > 0 && o.addClass("over-submenu")
            }
            )),
            $("#menu").on("mouseleave", (function() {
                o.removeClass("over-submenu"),
                t.removeClass("dimmed")
            }
            )),
            /* Original on click main-nav-top-li
			$("#menu").find(".main-nav-top-li").on("click", (function() {
                $(this).find("ul.sub-nav").length > 0 && (o.removeClass("over-submenu"),
                t.removeClass("dimmed"))
            }
            )),
            $("#menu a").on("click", (function() {
                o.removeClass("over-submenu"),
                $("#menu").addClass("clicked")
            }
            )), */

			// Click main-nav-top-li to footer
			$(document).ready(function() {
				$("#menu .bypass-nav").on("click", function(event) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: $("#footer").offset().top
					}, 2000);
				});
			});
			
            $(".bottom-nav a").each((function() {
                -1 === (e = $(this)).attr("href").indexOf(r.attr("data-site-url")) && e.attr("target", "_blank")
            }
            )),
            this.initCart(),
            l.on("mouseup", {
                _this: this
            }, this._onClickOutside);
            var s = n.find(".menu-item-has-children"), t;
            n.find(".sub-menu").slideUp(0),
            s.find(">a:first-child").on("click", (function(e) {
                e.preventDefault(),
                (t = $(this).parent("li")).hasClass("is-open") ? t.removeClass("is-open").find(".sub-menu").slideUp(333) : (s.each((function() {
                    $(this).hasClass("is-open") && $(this).removeClass("is-open").find(".sub-menu").slideUp(333)
                }
                )),
                t.addClass("is-open").find(".sub-menu").slideDown(333))
            }
            )).addClass("no-ajaxify"),
            w = $("#bg-page")
        },
        openMenu: function(t) {
            var e;
            t !== n.data("open") && (this.maskPage(t),
            TweenMax.to(n, .8, {
                x: t ? "0%" : "110%",
                ease: "Circ.easeInOut"
            }),
            TweenMax.to($("#menu-panel-int"), .6, {
                opacity: t ? 1 : 0,
                ease: "Circ.easeOut",
                delay: t ? .4 : 0
            }),
            n.data("open", t),
            t ? (this.openSearch(!1),
            o.addClass("menu-panel-open")) : o.removeClass("menu-panel-open"))
        },
        maskPage: function(t) {
            t && w.css("opacity") > 0 || (t && w.css({
                opacity: 0,
                visibility: "visible"
            }),
            TweenMax.killTweensOf(w),
            TweenMax.to(w, .6, {
                opacity: t ? 1 : 0,
                ease: "Circ.easeInOut",
                onComplete: function() {
                    t || w.css({
                        visibility: "hidden"
                    })
                }
            }))
        },
        toggleMenu: function() {
            this.openMenu(!n.data("open"))
        },
        _onClickOutside: function(t) {
            var e = t.data._this;
            if (n.data("open")) {
                var i = n;
                i.is(t.target) || 0 !== i.has(t.target).length || r.hasClass("overlay-open") || e.openMenu(!1)
            }
        },
        paintMenu: function() {
            $("#menu-main-menu").find("li").removeClass("current-menu-item"),
            $("#menu-main-menu").find("a").each((function() {
                $(this).attr("href") === document.location.href && $(this).parent("li").addClass("current-menu-item")
            }
            ))
        },
        closeMenu: function() {
            this.openMenu(!1)
        },
        initAnchors: function() {
            var t = getAllUrlParams(), e, i, n;
            t && (e = t.anchor) && (i = $("#" + e)).length > 0 && (n = i.offset().top,
            "tours" === e && (n -= 250),
            this.updateScrollTo(n, 1)),
            (i = $(".scroll-down")).length > 0 && i.on("click", (function() {
                TR.updateScrollTo(a.height(), 1.3)
            }
            ))
        },
        updateScrollTo: function(t, e, i) {
            TweenMax.to(a, e, {
                scrollTo: {
                    y: t
                },
                ease: i || "Power2.easeInOut",
                delay: .4
            })
        },
        initSearch: function() {},
        toggleSearch: function() {},
        openSearch: function(t) {},
        closeSearch: function() {},
        initPage: function(t) {
            t ? (this.paintMenu(),
            this.initAnchors()) : (y = _ = !1,
            this.initFragment(!1),
            this.closeSearch(),
            this.closeMenu()),
            (r.hasClass("home") || r.hasClass("page-template-page-story")) && this.initHome(t),
            $(".modules-container").length > 0 && this.initModules(t),
            r.hasClass("page-template-page-history") && this.initHistory(t),
            (r.hasClass("page-template-page-grounds") || r.hasClass("single-ground")) && this.initGrounds(t),
            r.hasClass("post-type-archive-furniture") && this.initFurnitureArchive(t),
            r.hasClass("tax-furniture_category") && this.initFurnitureTaxonomy(t),
            (r.hasClass("tax-accessory_category") || r.hasClass("page-template-page-accessories-and-books")) && this.initInquiry(t, "floor-pieces"),
            r.hasClass("single-furniture") && this.initSingleFurniture(t),
            r.hasClass("page-template-page-wood-education") && this.initPageWoodEducation(t),
            r.hasClass("page-template-page-floor-pieces") && this.initFloorPieces(t),
            r.hasClass("page-template-page-restoration") && this.initPageRestoration(t),
            (r.hasClass("page-template-page-accessories-and-books") || r.hasClass("single-accessory")) && this.initAccesoriesAndBooks(t),
            r.hasClass("page-template-page-design-process") && this.initDesignProcess(t),
            r.hasClass("page-template-page-contact") && this.initInquiry(t, "general"),
            this.initEffects(t),
            this.initWidgets(t),
            this.initGAEventsGoals(t),
            t && (IMGX.initImages(!0),
            this.adjustLayout(),
            $(".grid-packery").length > 0 && setTimeout((function() {
                a.trigger("resize")
            }
            ), 477))
        },
        initHome: function(t) {
            t ? $(".slick-slider").slideshow_ctrl({}) : $(".slick-slider").slideshow_ctrl("destroy")
        },
        initModules: function(t) {
            t ? $(".modules-container").modules_ctrl({}) : $(".modules-container").modules_ctrl("destroy")
        },
        initHistory: function(t) {
            t ? $(".menu-modules a").on("click", (function(t) {
                t.preventDefault();
                var e = parseInt($(this).attr("data-index"))
                  , i = $(0 === e ? "#history" : ".modules-container .module:eq(" + (e - 1) + ")");
                i.length > 0 && TR.updateScrollTo(i.offset().top, 1)
            }
            )) : $(".menu-modules a").off("click"),
            this.initFullPage(t)
        },
        initFullPage: function(t) {
            $("#fullpage").length <= 0 || (t ? $("#fullpage").fullpage() : $.fn.fullpage.destroy("all"))
        },
        initGrounds: function(t) {
            this.initGridPackery(t, $(".grid-grounds"), !1, !1),
            t ? $(".map-container").map_grounds({}) : $(".map-container").map_grounds("destroy"),
            r.hasClass("single-ground") && this.initOverlayGround(t, $("#overlay-ground"))
        },
        initFurnitureArchive: function(t) {
            this.initGridPackery(t, $(".grid-furniture-styles"), !1, !1)
        },
        initFurnitureTaxonomy: function(t) {
            this.initGridPackery(t, $(".grid-furniture-category"), !1, !1)
        },
        initSingleFurniture: function(t) {
            var e = $(".slider-dotted-captions");
            e.length > 0 && (t ? e.slideshow_ctrl({
                mode: "slider-dotted-captions",
                dots: !0
            }) : e.slideshow_ctrl("destroy")),
            this.initInquiry(t, "furniture"),
            this.initWoodModals(t),
            this.initRelatedWork(t)
        },
        initPageWoodEducation: function(t) {
            this.initWoodModals(t),
            this.triggerWindowModals(),
            this.initInquiry(t, "general")
        },
        initFloorPieces: function(t) {
            this.initGridPackery(t, $(".grid-grounds"), !1, !1),
            this.initInquiry(t, "floor-pieces")
        },
        initPageRestoration: function(t) {
            var e, i, n;
            this.initInquiry(t, "restoration"),
            this.initInquiry(t, "authentication"),
            $(".text-content").find("a").each((function() {
                i = $(this),
                e = i.attr("href"),
                (n = e.split(".")).length > 0 && "pdf" === n[n.length - 1] && i.addClass("no-ajaxify")
            }
            )),
            this.initWoodModals(t)
        },
        initAccesoriesAndBooks: function(t) {
            this.initInquiry(t, "accessories")
        },
        initDesignProcess: function(t) {
            this.initInquiry(t, "general")
        },
        initRelatedWork: function(t) {
            var e = $(".desktop-mobile-products-collection-container");
            e.length <= 0 || (t ? e.slider_collection_products({}) : e.slider_collection_products("destroy"))
        },
        initGridPackery: function(t, e, i, n) {
            if (e.length > 0) {
                if (1 === e.find(".item-grid").length)
                    return void (t && e.find(".item-grid").addClass("item-centered"));
                if (t) {
                    if (!e.data("is-init")) {
                        var s = {
                            itemSelector: ".item-grid",
                            percentPosition: !0,
                            gutter: ".gutter-sizer",
                            transitionDuration: "0"
                        };
                        i && ((s = i).transitionDuration = "0"),
                        e.packery(s),
                        e.data("is-init", !0),
                        e.imagesLoaded().progress((function() {
                            e.data("is-init") && setTimeout((function() {
                                e.packery(),
                                TR.adjustLayoutGridPackery(e)
                            }
                            ), 177)
                        }
                        )),
                        n && (e.data("shuffle", !0),
                        this.shuffleGridPackery(e)),
                        document.addEventListener("lazybeforeunveil", (function(t) {
                            e.packery(),
                            TR.adjustLayoutGridPackery(e)
                        }
                        )),
                        a.on("resize", {
                            $g: e
                        }, this.onResizeForGrid)
                    }
                } else
                    e.data("is-init") && (e.packery("destroy"),
                    e.data("is-init", !1)),
                    document.removeEventListener("lazybeforeunveil", (function(t) {
                        e.packery()
                    }
                    )),
                    a.off("resize", this.onResizeForGrid)
            }
        },
        onResizeForGrid: function(t) {
            TR.adjustLayoutGridPackery(t.data.$g),
            TR.shuffleGridPackery(t.data.$g)
        },
        adjustLayoutGridPackery: function(t) {
            var e = a.width(), i, n, s;
            t.hasClass("grid-furniture-styles") && (s = 0,
            t.find(".item-grid").not(".item-wide").each((function() {
                (i = $(this)).css("height", "auto"),
                i.height(Math.ceil(i.height()))
            }
            )),
            t.find(".item-quote").each((function() {
                n = $(this),
                parseInt(n.css("left")) > 0 ? (i = n.prev(),
                n.addClass("item-right").removeClass("item-left")) : (i = n.next(),
                n.addClass("item-left").removeClass("item-right")),
                i.length > 0 && (e > 767 ? n.height(Math.ceil(i.height())) : n.css("height", "auto"))
            }
            ))),
            t.hasClass("grid-furniture-category") && (s = 0,
            t.find(".item-grid").each((function() {
                (i = $(this)).css("height", "auto"),
                i.height(Math.ceil(i.height()))
            }
            )),
            t.find(".item-quote").each((function() {
                n = $(this),
                parseInt(n.css("left")) > 0 ? (i = n.prev(),
                n.addClass("item-right").removeClass("item-left")) : (i = n.next(),
                n.addClass("item-left").removeClass("item-right")),
                i.length > 0 && (e > 767 ? n.height(Math.ceil(i.height())) : n.css("height", "auto"))
            }
            )))
        },
        shuffleGridPackery: function(t) {
            var e, i;
            t.data("shuffle") && ((e = t.find(".item-grid")).length > 0 && (e.each((function(e) {
                var n;
                (i = $(this),
                a.width() > 767 && t.data("shuffle")) ? parseInt(i.css("top")) >= 10 ? i.css({
                    "margin-top": random(0, 5) + "%",
                    "margin-left": random(0, 6) > 3 ? random(0, 20) + "%" : "0%"
                }) : i.css({
                    "margin-top": "0%",
                    "margin-left": "0%"
                }) : i.css({
                    "margin-top": "0%",
                    "margin-left": "0%"
                })
            }
            )),
            t.data("is-init") && t.packery("layout")),
            t.packery())
        },
        effectsOnAjaxStart: function() {},
        initEffects: function(t) {
            EFFX.destroy(),
            t && EFFX.init({})
        },
        initWidgets: function(t) {
            this.initInputTypes(t),
            this.initSelect(t),
            this.initMixedSLideshow(t),
            this.initVideoButton(t),
            this.initLoadMore(t),
            this.initAccordian(t),
            this.initFormCheckboxes(t),
            this.initMaps(t),
            this.initBuyButtons(t),
            this.initBookYourVisit(t)
        },
        initInputTypes: function(t) {
            var e = $("form");
            e.length <= 0 || (t ? (e.find("input, textarea").data("p", ""),
            e.find("input, textarea").on("focus", (function() {
                var t = $(this);
                "" === t.data("p") && t.data("p", t.attr("placeholder")),
                t.attr("placeholder", "")
            }
            )),
            e.find("input, textarea").on("blur", (function() {
                var t = $(this);
                "" === t.val() && t.attr("placeholder", t.data("p"))
            }
            ))) : (e.find("input, textarea").off("focus"),
            e.find("input, textarea").off("blur")))
        },
        initSelect: function(t) {
            var e = $(".t-select"), i, n;
            e.length <= 0 || (e.each((function(t) {
                $(this).data("ind", t)
            }
            )),
            t ? (e.selection({}),
            e.on("select:open", (function() {
                i = $(this),
                e.each((function() {
                    (n = $(this)).data("ind") !== i.data("ind") && n.selection("open", !1)
                }
                ))
            }
            ))) : e.selection("destroy"))
        },
        initVideoButton: function(t) {
            var e = $(".video-button");
            e.length <= 0 || (t ? e.video_button({}) : e.video_button("destroy"))
        },
        initAccordian: function(t) {
            var e = $(".module_accordion");
            e.length > 0 && e.each((function() {
                $(this).find(".item").accordion({
                    autoClose: "true",
                    groupElement: ".items",
                    controlElement: ".trigger",
                    contentElement: ".details",
                    transitionSpeed: 500
                }),
                $(this).hasClass("openFirst") && $(this).find(".item:eq(0) .trigger").trigger("click")
            }
            ))
        },
        initFormCheckboxes: function(t) {
            t && ($("input").iCheck(),
            $('input[name="owner[]"]').on("ifChecked", (function() {
                $(this).val("yes")
            }
            )),
            $('input[name="owner[]"]').on("ifUnchecked", (function() {
                $(this).val("no")
            }
            )))
        },
        initMixedSLideshow: function(t) {
            var e = $(".mixed-slideshow-container");
            e.length > 0 && (t ? e.mixed_slideshow({
                dot: !0,
                arrows: !0,
                mode: e.hasClass("constant-height-mixed") ? "special" : "default"
            }) : e.mixed_slideshow("destroy"))
        },
        initInquiry: function(t, e) {
            var i = $(".inquire-btn")
              , n = $("#inquiry-overlay")
              , s = $(".window-inquire");
            i.length <= 0 ? s.hide(0) : (t ? ("restoration" === e && (i = $(".inquire-btn-restoration"),
            s = $(".window-inquire-restoration")),
            "authentication" === e && (n = $("#inquiry-overlay-authentication"),
            i = $(".inquire-btn-authentication-trigger"),
            s = $(".window-inquire-authentication")),
            "restoration" !== e && "authentication" !== e && "general" !== e && s.find('input[name="furniture-title"]').val(s.find("span.furniture-title").html()),
            n.data("bg-fade", !0),
            i.on("click", (function(t) {
                if (t.preventDefault(),
                "floor-pieces" === e) {
                    var i = $(this).attr("data-title");
                    s.find("span.furniture-title").html(i),
                    s.find('input[name="furniture-title"]').val(i)
                }
                n.data("bg-fade") && TR.maskPage(!0),
                n.overlay_window("open"),
                n.data("bg-fade", !0)
            }
            )),
            n.overlay_window({
                open: !1,
                $html: s,
                hide_close: !0,
                $btn: i
            }),
            n.on("overlay:close", (function() {
                n.data("bg-fade") && TR.maskPage(!1),
                TR.setMessage(!1, "")
            }
            )),
            s.find(".close-icon").on("click", (function(t) {
                n.overlay_window("close")
            }
            )),
            this.fixSafari11Inquire()) : (i.off("click"),
            s.find(".close-icon").off("click"),
            n.overlay_window("destroy")),
            y || this.ajaxifyContactForms(t))
        },
        initBookYourVisit: function(t) {
            var e = $(".book-visit")
              , i = $("#modal-book-visit")
              , n = $(".window-book-your-visit");
            t ? (e.length > 0 && (i.data("bg-fade", !0),
            e.on("click", (function(t) {
                t.preventDefault(),
                i.data("bg-fade") && TR.maskPage(!0),
                i.overlay_window("open"),
                i.data("bg-fade", !0)
            }
            ))),
            i.length && !i.data("init") && (i.overlay_window({
                open: !1,
                $html: n,
                hide_close: !0,
                $btn: e,
                mode: "book"
            }),
            i.on("overlay:close", (function() {
                i.data("bg-fade") && TR.maskPage(!1),
                i.overlay_window("contentIframeReload")
            }
            )),
            i.data("init", !0))) : e.length > 0 && e.off("click")
        },
        fixSafari11Inquire: function(t) {
            o.hasClass("safari11") && (o.hasClass("desktop") ? $("form.wpcf7-form").on("submit", (function() {
                var t = $(this);
                $("input[type=file]").each((function() {
                    "" === $(this).val() && ($(this).remove(),
                    t.find('label[for="your-file"]').hide(),
                    t.trigger("submit"))
                }
                ))
            }
            )) : ($("form.wpcf7-form").find("input[type=file]").remove(),
            $("form.wpcf7-form").find('label[for="your-file"]').hide()))
        },
        onSentInquiry: function(t) {
            var e = $(".wpcf7-form ")
              , i = $(".wpcf7-response-output");
            i.hasClass("wpcf7-validation-errors") || (e.find("input, textarea").each((function() {
                var t = $(this);
                "" !== t.data("p") && t.attr("placeholder", t.data("p"))
            }
            )),
            i.css({
                opacity: 0,
                height: "0px",
                "margin-top": 0
            }),
            setTimeout((function() {
                TR.setMessage(!0, i.html())
            }
            ), 177))
        },
        setMessage: function(t, e) {
            var i = $(".window-inquire .window-content");
            t ? (i.append('<div class="inquiry-response"><div class="int-container"><div class="int">' + e + "</div></div></div>"),
            i.find(".inquiry-response").addClass("fade-upp")) : i.find(".inquiry-response").length > 0 && i.find(".inquiry-response").remove()
        },
        ajaxifyContactForms: function(t) {
            t && $("div.wpcf7 > form").each((function() {
                var t = $(this);
                wpcf7 && wpcf7.initForm && (console.log(">>> wpcf7.initForm"),
                wpcf7.initForm(t),
                wpcf7.cached && wpcf7.refill(t))
            }
            ))
        },
        initWoodModals: function(t) {
            var e = $("a.modal")
              , i = $("#modal-overlay")
              , n = this;
            e.length <= 0 || (t ? (e.ajax_modal({
                mode: "modal"
            }),
            e.on("start:loading", (function() {
                i.data("bg-fade", !0),
                TR.setLoading(!0),
                TR.maskPage(!0)
            }
            )),
            e.on("end:loading", (function() {
                TR.setLoading(!1)
            }
            )),
            e.on("modal:success", (function(t) {
                var e = $(t.currentTarget).ajax_modal("getHTML");
                i.overlay_window("addContentAndOpen", e),
                i.find(".close-icon").on("click", (function(t) {
                    i.overlay_window("close")
                }
                )),
                n.triggerScriptsOnModals(!0)
            }
            )),
            i.overlay_window({
                open: !1,
                $html: "",
                hide_close: !0,
                mode: "modal"
            }),
            i.on("overlay:close", (function() {
                i.data("bg-fade") && TR.maskPage(!1)
            }
            ))) : (e.ajax_modal("destroy"),
            i.overlay_window("destroy")))
        },
        triggerWindowModals: function() {
            var t = $("#window-trigger-opener"), e, i;
            t.length > 0 && t.attr("data-open") && "" !== (e = t.attr("data-open")) && t.find("a.modal").each((function() {
                if ((i = $(this)).attr("data-mode") === e)
                    return TR.updateScrollTo(t.offset().top - a.height() / 2, .4),
                    void setTimeout((function() {
                        i.click()
                    }
                    ), 400)
            }
            ))
        },
        triggerScriptsOnModals: function(t) {
            var e = $("#modal-overlay"), i, n = $("#inquiry-overlay");
            this.initAccordian(t),
            e.length > 0 && (i = e.find(".inquire-btn")).length > 0 && (t ? (i.hasClass("inquire-btn-authentication") && (n = $("#inquiry-overlay-authentication")),
            i.on("click", (function() {
                e.data("bg-fade", !1),
                e.overlay_window("close"),
                n.data("bg-fade", !1),
                setTimeout((function() {
                    i.hasClass("inquire-btn-authentication") ? $(".inquire-container").find(".inquire-btn-authentication-trigger").click() : $(".inquire-container").find(".inquire-btn").click()
                }
                ), 577)
            }
            ))) : i.off("click"))
        },
        initMaps: function(t) {
            var e = $(".g-maps .activate");
            e.length <= 0 || (t ? (e.on("click", (function() {
                TR.activateMap(!0)
            }
            )),
            $(".g-maps").on("mouseleave", (function() {
                TR.activateMap(!1)
            }
            )),
            setTimeout((function() {
                window.initGoogleMap()
            }
            ), 477)) : (e.off("click"),
            $(".g-maps").off("mouseleave")))
        },
        activateMap: function(t) {
            var e = $(".g-maps .activate");
            t || e.show(0),
            TweenMax.to(e, .3, {
                opacity: t ? 0 : 1,
                ease: "Power.easeOut",
                onComplete: function() {
                    t && e.hide(0)
                }
            })
        },
        initLoadMore: function(t) {
            var e = $(".load-more-posts");
            e.length <= 0 || (t ? e.load_more({}) : e.load_more("destroy"))
        },
        initFragment: function(t) {
            var e, i, n;
            if (r.hasClass("page-template-page-grounds") || r.hasClass("single-ground")) {
                var i;
                if (t)
                    n = AJX.getData().fragment,
                    e = (e = AJX.getHTML()).find("#" + n);
                this.initOverlayGround(t, e),
                this.setLoading(!1)
            }
        },
        initOverlayGround: function(t, e) {
            t && ($("#overlay-g").overlay_window({
                open: !0,
                $html: e,
                hide_close: !1,
                mode: "overlay-ground"
            }),
            $("#overlay-g").on("overlay:close", (function() {
                var t = "The Grounds — George Nakashima Woodworkers";
                r.attr("class", "page-template page-template-page-grounds page-template-page-grounds-php page page-id-18 page-child parent-pageid-16 white"),
                $("title").text(t),
                history && history.replaceState({}, "title", $("#overlay-ground").attr("url-back")),
                $("#overlay-g").overlay_window("destroy")
            }
            )))
        },
        initAnnouncement: function() {
            if (r.hasClass("should-have-announcement")) {
                var t = $("#announcement");
                if (t.length > 0) {
                    var e = "announcement";
                    if (!Cookies)
                        return;
                    "active" !== Cookies.get(e) && (r.addClass("has-announcement"),
                    TR.onResize(),
                    t.find(".close").on("click", (function() {
                        Cookies.set(e, "active", {
                            expires: 1
                        }),
                        TweenMax.to(t, .4, {
                            opacity: 0,
                            ease: "Linear.easeOut",
                            onComplete: function() {
                                TR.onCloseAnnouncement()
                            }
                        })
                    }
                    )))
                }
            }
        },
        onCloseAnnouncement: function() {
            var t;
            $("#announcement").remove(),
            r.removeClass("has-announcement"),
            TR.onResize()
        },
        initGeoIP: function() {
            jQuery.ajax({
                url: "https://api.ipinfodb.com/v3/ip-country/?key=27f4ef17f872469b2161a19540a53bf1ff8edc2ff6d3807b3f846d3163c2d68e&format=json",
                type: "POST",
                dataType: "jsonp",
                success: function(t) {
                    if ("US" !== t.countryCode) {
                        var e = "accept_cookies"
                          , i = $("#cookies-bar");
                        if (!Cookies)
                            return;
                        "active" !== Cookies.get(e) && i.length > 0 && (r.addClass("show-cookies-policy"),
                        i.find(".close").on("click", (function() {
                            Cookies.set(e, "active", {
                                expires: 7
                            }),
                            TweenMax.to(i, .4, {
                                opacity: 0,
                                ease: "Linear.easeOut",
                                onComplete: function() {
                                    i.remove(),
                                    r.removeClass("show-cookies-policy")
                                }
                            })
                        }
                        )),
                        i.find(".close-accept").on("click", (function(t) {
                            t.preventDefault(),
                            Cookies.set(e, "active", {
                                expires: 7
                            }),
                            TweenMax.to(i, .4, {
                                opacity: 0,
                                ease: "Linear.easeOut",
                                onComplete: function() {
                                    i.remove(),
                                    r.removeClass("show-cookies-policy")
                                }
                            })
                        }
                        )))
                    }
                }
            })
        },
        initSiteCredits: function() {
            $(".table-footer .site-credits").on("mouseenter", (function() {
                $(this).addClass("active")
            }
            )),
            $(".table-footer .site-credits").on("mouseleave", (function() {
                $(this).removeClass("active")
            }
            )),
            $(".mobile-footer .site-credits").on("click", (function() {
                $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
            }
            )),
            o.hasClass("touch") && ($(".table-footer .site-credits").on("click", (function() {
                $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
            }
            )),
            l.on("click", (function(t) {
                var e = $(".site-credits");
                e.is(t.target) || 0 !== e.has(t.target).length || $(".site-credits").removeClass("active")
            }
            )))
        },
        initGAEventsGoals: function(t) {
            var e = getAllUrlParams(document.location.href), i;
            if ((i = $("a.button-purchase")).length > 0 && (t ? i.on("click", (function() {
                TR.setGAEvent("Ecommerce", "purchase", "Click on Purchase Button")
            }
            )) : i.off("click")),
            $(".wpcf7").length > 0) {
                var n = document.querySelector(".wpcf7");
                t ? n.addEventListener("wpcf7submit", (function(t) {
                    TR.sendInquiryGoal(t),
                    TR.onSentInquiry()
                }
                ), !1) : n.removeEventListener("wpcf7submit", (function(t) {
                    TR.sendInquiryGoal(t)
                }
                ))
            }
        },
        setCheckoutGoal: function(t) {
            var e;
            (e = $(".shopify-purchase-cart-btn")).length > 0 && (t ? e.on("click", (function() {
                TR.setGAEvent("Ecommerce", "checkout", "Click on Checkout Button")
            }
            )) : e.off("click"))
        },
        sendInquiryGoal: function(t) {
            var e;
            switch (parseInt(t.detail.contactFormId)) {
            case 486:
                TR.setGAEvent("Inquiry", "Floor Pieces Inquiry Sent", "Floor Pieces Inquiry Sent Form");
                break;
            case 4:
                TR.setGAEvent("Inquiry", "Furniture Inquiry Sent", "Furniture Pieces Inquiry Sent Form");
                break;
            case 1250:
                TR.setGAEvent("Inquiry", "General Inquiry Sent", "General Inquiry Sent Form");
                break;
            case 490:
                TR.setGAEvent("Inquiry", "Restoration Inquiry Sent", "Restoration Inquiry Sent Form");
                break
            }
        },
        setGAEvent: function(t, e, i) {
            window.ga && ga("send", "event", t, e, i)
        },
        initCart: function() {
            this.initCartOverlay(),
            this.initShopify(),
            $(".cart-toggle").on("click", (function(t) {
                t.preventDefault(),
                TR.toggleCart()
            }
            )),
            s.data("open", !1)
        },
        toggleCart: function() {
            var t = s;
            this.openCart(!s.data("open"))
        },
        openCart: function(t) {
            var e = s;
            t !== e.data("open") && (t ? e.overlay_window("open") : e.overlay_window("close"),
            e.data("open", t))
        },
        initCartOverlay: function() {
            var t = s;
            t.overlay_window({
                open: !1,
                hide_close: !0,
                mode: "cart"
            }),
            t.on("overlay:open", (function() {
                TR.maskPage(!0)
            }
            )),
            t.on("overlay:close", (function() {
                TR.maskPage(!1)
            }
            )),
            t.find(".close-icon").on("click", (function(t) {
                TR.openCart(!1)
            }
            )),
            this.setCheckoutGoal(!0)
        },
        initShopify: function() {
            SHOPIFY.init({}),
            r.on("SHOPIFY:purchase", (function() {
                TR.openCart(!0)
            }
            ))
        },
        initBuyButtons: function(t) {
            SHOPIFY.addBuyButtons(t)
        },
        onAjaxStartFragment: function() {
            r.hasClass("page-template-page-grounds") && r.addClass("single-ground")
        },
        consoleInit: function() {
            console.log(""),
            console.log("%cFor Office Use Only", "color: white; background-color: black; font-size: 14px; line-height: 28px; padding: 10px 15px 8px 15px; font-family: NeuzeitGro-Lig;"),
            console.log("")
        }
    },
    void 0 === window._TR && (window._TR = TR.init(!1),
    FastClick.attach(document.body))
}
)).fail((function(t) {
    throw t
}
));
//# sourceMappingURL=app-min.js.map
