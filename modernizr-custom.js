/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-geolocation-setclasses !*/
!(function (n, e, o) {
    function s(n) {
        var e = l.className,
            o = Modernizr._config.classPrefix || "";
        if ((f && (e = e.baseVal), Modernizr._config.enableJSClass)) {
            var s = new RegExp("(^|\\s)" + o + "no-js(\\s|$)");
            e = e.replace(s, "$1" + o + "js$2");
        }
        Modernizr._config.enableClasses &&
            ((e += " " + o + n.join(" " + o)),
            f ? (l.className.baseVal = e) : (l.className = e));
    }
    function a(n, e) {
        return typeof n === e;
    }
    function i() {
        var n, e, o, s, i, l, f;
        for (var c in r)
            if (r.hasOwnProperty(c)) {
                if (
                    ((n = []),
                    (e = r[c]),
                    e.name &&
                        (n.push(e.name.toLowerCase()),
                        e.options &&
                            e.options.aliases &&
                            e.options.aliases.length))
                )
                    for (o = 0; o < e.options.aliases.length; o++)
                        n.push(e.options.aliases[o].toLowerCase());
                for (
                    s = a(e.fn, "function") ? e.fn() : e.fn, i = 0;
                    i < n.length;
                    i++
                )
                    (l = n[i]),
                        (f = l.split(".")),
                        1 === f.length
                            ? (Modernizr[f[0]] = s)
                            : (!Modernizr[f[0]] ||
                                  Modernizr[f[0]] instanceof Boolean ||
                                  (Modernizr[f[0]] = new Boolean(
                                      Modernizr[f[0]]
                                  )),
                              (Modernizr[f[0]][f[1]] = s)),
                        t.push((s ? "" : "no-") + f.join("-"));
            }
    }
    var t = [],
        l = e.documentElement,
        f = "svg" === l.nodeName.toLowerCase(),
        r = [],
        c = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0,
            },
            _q: [],
            on: function (n, e) {
                var o = this;
                setTimeout(function () {
                    e(o[n]);
                }, 0);
            },
            addTest: function (n, e, o) {
                r.push({ name: n, fn: e, options: o });
            },
            addAsyncTest: function (n) {
                r.push({ name: null, fn: n });
            },
        },
        Modernizr = function () {};
    (Modernizr.prototype = c),
        (Modernizr = new Modernizr()),
        Modernizr.addTest("geolocation", "geolocation" in navigator),
        i(),
        s(t),
        delete c.addTest,
        delete c.addAsyncTest;
    for (var u = 0; u < Modernizr._q.length; u++) Modernizr._q[u]();
    n.Modernizr = Modernizr;
})(window, document);
